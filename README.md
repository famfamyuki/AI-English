# AI English

> **Conversation first. Learning happens invisibly.**

AI English is a voice-first English learning product built around enjoyable, natural conversation. The user should open the product because they want to talk, continue a relationship, or experience a story—not because they feel obligated to complete a lesson.

GPT-Live-1 provides the full-duplex voice layer. The differentiated product is the system built around it: persistent conversation continuity, a longitudinal learner model, adaptive language targets, and lightweight post-session feedback.

## North-star experience

1. Start talking with almost no setup.
2. The companion waits naturally, handles interruptions, and prioritizes conversational flow.
3. Hidden language targets are woven into the conversation instead of presented as exercises.
4. The session is analyzed after the fact.
5. Later conversations reuse useful context and reinforce language the learner is acquiring.

## MVP

The first MVP deliberately contains only:

- one persistent AI companion,
- GPT-Live-1 browser voice conversation,
- transcript/session capture,
- a lightweight learner profile,
- 1-3 adaptive language targets per session,
- a short post-session recap,
- analytics for activation, conversation depth, retention, learning evidence, and AI cost.

Large lesson catalogs, multiple characters, social features, open-world simulation, and heavy gamification are explicitly deferred until the core conversation loop retains users.

## Canonical docs

- [`docs/PRODUCT_VISION.md`](docs/PRODUCT_VISION.md) — final-state product vision and product principles
- [`docs/MVP_SPEC.md`](docs/MVP_SPEC.md) — MVP scope and acceptance criteria
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — initial technical architecture
- [`docs/METRICS.md`](docs/METRICS.md) — validation metrics and decision rules
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — staged path from prototype to the final experience

## Current development state

Product foundation is defined on `main`.

Active implementation branch:

`feat/phase-1-voice-spine`

The current technical milestone is a reliable 10-minute browser conversation using GPT-Live-1 over WebRTC, with graceful session shutdown and enough event capture to support transcripts and learner analysis next.

## Development rule

Before adding a feature, ask:

> Does this make the user more likely to willingly come back and spend meaningful time thinking and speaking in English?

If not, it is secondary.