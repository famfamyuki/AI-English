import { VoiceSession } from "@/components/voice-session";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">AI English · Phase 1 prototype</p>
        <h1>Conversation first.<br />Learning happens invisibly.</h1>
        <p className="hero-copy">
          A voice-first English experience designed to feel like a real conversation rather than a lesson.
        </p>
      </section>

      <VoiceSession />

      <section className="principles">
        <article>
          <span>01</span>
          <h2>Keep the flow</h2>
          <p>Routine mistakes should not constantly stop the conversation.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Let the learner think</h2>
          <p>The experience should tolerate pauses instead of rushing to fill them.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Make returning worthwhile</h2>
          <p>Later phases add memory and learner modeling so session two is better than session one.</p>
        </article>
      </section>
    </main>
  );
}
