"use client";

import { useCallback, useRef, useState } from "react";

type SessionStatus =
  | "idle"
  | "requesting-microphone"
  | "connecting"
  | "connected"
  | "stopping"
  | "ended"
  | "error";

type LiveCreateResponse = {
  session?: { id?: string };
  transport?: { type?: string; sdp?: string };
};

type LiveEvent = {
  type?: string;
  session?: { id?: string };
  usage?: unknown;
  [key: string]: unknown;
};

async function waitForIceGathering(peer: RTCPeerConnection) {
  if (peer.iceGatheringState === "complete") return;

  await new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      peer.removeEventListener("icegatheringstatechange", handleStateChange);
      reject(new Error("Timed out while gathering WebRTC ICE candidates."));
    }, 10_000);

    function handleStateChange() {
      if (peer.iceGatheringState !== "complete") return;
      window.clearTimeout(timeout);
      peer.removeEventListener("icegatheringstatechange", handleStateChange);
      resolve();
    }

    peer.addEventListener("icegatheringstatechange", handleStateChange);
    handleStateChange();
  });
}

export function VoiceSession() {
  const [status, setStatus] = useState<SessionStatus>("idle");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recentEvents, setRecentEvents] = useState<string[]>([]);

  const peerRef = useRef<RTCPeerConnection | null>(null);
  const channelRef = useRef<RTCDataChannel | null>(null);
  const microphoneRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const cleanup = useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    channelRef.current?.close();
    channelRef.current = null;

    peerRef.current?.close();
    peerRef.current = null;

    microphoneRef.current?.getTracks().forEach((track) => track.stop());
    microphoneRef.current = null;

    if (remoteAudioRef.current) {
      remoteAudioRef.current.srcObject = null;
      remoteAudioRef.current = null;
    }
  }, []);

  const start = useCallback(async () => {
    cleanup();
    setError(null);
    setSessionId(null);
    setRecentEvents([]);

    try {
      setStatus("requesting-microphone");
      const microphone = await navigator.mediaDevices.getUserMedia({ audio: true });
      microphoneRef.current = microphone;

      setStatus("connecting");
      const peer = new RTCPeerConnection();
      peerRef.current = peer;

      const remoteAudio = document.createElement("audio");
      remoteAudio.autoplay = true;
      remoteAudioRef.current = remoteAudio;

      peer.addEventListener("track", (event) => {
        remoteAudio.srcObject = event.streams[0] ?? new MediaStream([event.track]);
        void remoteAudio.play().catch(() => {
          // Some browsers may require a second user gesture for autoplay.
        });
      });

      for (const track of microphone.getAudioTracks()) {
        peer.addTrack(track, microphone);
      }

      const channel = peer.createDataChannel("oai-events");
      channelRef.current = channel;

      channel.addEventListener("message", ({ data }) => {
        try {
          const event = JSON.parse(String(data)) as LiveEvent;
          const type = typeof event.type === "string" ? event.type : "unknown-event";
          setRecentEvents((current) => [type, ...current].slice(0, 8));

          if (event.type === "session.started") {
            setSessionId(event.session?.id ?? null);
            setStatus("connected");
          }

          if (event.type === "session.closed") {
            console.info("Final GPT-Live session usage", event.usage);
            setStatus("ended");
            cleanup();
          }
        } catch (eventError) {
          console.warn("Could not parse GPT-Live event", eventError);
        }
      });

      channel.addEventListener("close", () => {
        setStatus((current) => (current === "ended" ? current : "ended"));
        cleanup();
      });

      peer.addEventListener("connectionstatechange", () => {
        if (peer.connectionState === "failed") {
          setError("The WebRTC connection failed.");
          setStatus("error");
          cleanup();
        }
      });

      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      await waitForIceGathering(peer);

      const sdp = peer.localDescription?.sdp;
      if (!sdp) throw new Error("Browser did not produce an SDP offer.");

      const response = await fetch("/api/live/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sdp }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Live session creation failed.");
      }

      const result = (await response.json()) as LiveCreateResponse;
      const answer = result.transport?.sdp;
      if (!answer) throw new Error("GPT-Live did not return an SDP answer.");

      await peer.setRemoteDescription({ type: "answer", sdp: answer });
      // POST /v1/live/sessions already starts the session. Do not send session.start.
    } catch (startError) {
      cleanup();
      setError(startError instanceof Error ? startError.message : String(startError));
      setStatus("error");
    }
  }, [cleanup]);

  const stop = useCallback(() => {
    const channel = channelRef.current;
    if (!channel || channel.readyState !== "open") {
      cleanup();
      setStatus("ended");
      return;
    }

    setStatus("stopping");
    channel.send(JSON.stringify({ type: "session.close" }));

    closeTimeoutRef.current = window.setTimeout(() => {
      setError("Session closed without a final usage event.");
      cleanup();
      setStatus("ended");
    }, 15_000);
  }, [cleanup]);

  const active = ["requesting-microphone", "connecting", "connected", "stopping"].includes(
    status,
  );

  return (
    <section className="voice-card" aria-live="polite">
      <div className="status-row">
        <span className={`status-dot status-${status}`} aria-hidden="true" />
        <div>
          <p className="eyebrow">Live English</p>
          <p className="status-label">{status.replaceAll("-", " ")}</p>
        </div>
      </div>

      <p className="voice-copy">
        Talk normally. The companion is instructed to prioritize conversation flow over correction.
      </p>

      {sessionId ? <p className="session-id">Session: {sessionId}</p> : null}
      {error ? <p className="error-message">{error}</p> : null}

      <div className="button-row">
        <button className="primary-button" onClick={start} disabled={active}>
          {status === "connected" ? "Conversation active" : "Start conversation"}
        </button>
        <button className="secondary-button" onClick={stop} disabled={status !== "connected"}>
          End gracefully
        </button>
      </div>

      {recentEvents.length > 0 ? (
        <details className="event-log">
          <summary>Recent Live events</summary>
          <ol>
            {recentEvents.map((eventType, index) => (
              <li key={`${eventType}-${index}`}>{eventType}</li>
            ))}
          </ol>
        </details>
      ) : null}
    </section>
  );
}
