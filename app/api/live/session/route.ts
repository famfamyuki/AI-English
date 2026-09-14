import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const OPENAI_LIVE_SESSIONS_URL = "https://api.openai.com/v1/live/sessions";

const LIVE_INSTRUCTIONS = `
You are the user's persistent English conversation companion in AI English.

Primary goal: make the conversation enjoyable enough that the user wants to keep speaking English.

Behavior:
- Speak naturally and conversationally, not like a classroom exercise.
- Give the user time to think. Do not rush to fill pauses.
- Do not interrupt the flow for ordinary grammar mistakes.
- If a mistake blocks understanding, clarify naturally.
- Prefer subtle recasts and good examples over explicit correction.
- Keep your turns short enough to leave room for the user to speak.
- Adapt vocabulary and pace to the user you are hearing.
- Avoid excessive praise, quizzes, and teacher-like interrogation.
- If the user asks for an explanation, teach briefly, then return to conversation.

For this prototype, begin with a warm, low-pressure conversation in English. Ask about something the user genuinely wants to talk about rather than testing their level.
`.trim();

type SessionRequest = {
  sdp?: unknown;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 503 },
    );
  }

  const allowedOrigin = process.env.APP_ORIGIN;
  const requestOrigin = request.headers.get("origin");
  if (allowedOrigin && requestOrigin && requestOrigin !== allowedOrigin) {
    return NextResponse.json({ error: "Unexpected request origin." }, { status: 403 });
  }

  let body: SessionRequest;
  try {
    body = (await request.json()) as SessionRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body.sdp !== "string" || !body.sdp.trim()) {
    return NextResponse.json({ error: "An SDP offer is required." }, { status: 400 });
  }

  if (body.sdp.length > 65_536) {
    return NextResponse.json({ error: "SDP offer is too large." }, { status: 413 });
  }

  const openAIResponse = await fetch(OPENAI_LIVE_SESSIONS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session: {
        model: "gpt-live-1",
        instructions: LIVE_INSTRUCTIONS,
      },
      transport: {
        type: "webrtc",
        sdp: body.sdp,
      },
    }),
    cache: "no-store",
  });

  const responseText = await openAIResponse.text();

  if (!openAIResponse.ok) {
    console.error("GPT-Live-1 session creation failed", {
      status: openAIResponse.status,
      body: responseText.slice(0, 2_000),
    });
    return NextResponse.json(
      { error: "Live session creation failed." },
      { status: openAIResponse.status },
    );
  }

  try {
    return NextResponse.json(JSON.parse(responseText), { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "OpenAI returned an invalid session response." },
      { status: 502 },
    );
  }
}
