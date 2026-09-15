# AI English

> **Conversation first. Learning happens invisibly.**

AI English is a **mobile-first, voice-first English conversation app for iOS and Android**. The user should open the app because they want to talk, continue a relationship, or experience a story—not because they feel obligated to complete a lesson.

The sharper positioning is:

> **An AI companion/world that happens to make you fluent in English.**

GPT-Live-1 provides the full-duplex voice layer. The differentiated product is not the model itself; it is the combination of relationship continuity, persistent story/world state, a longitudinal learner model, invisible language-target orchestration, and evidence-based progress.

## Product surface

The primary product is a native-feeling mobile app distributed to iOS and Android users.

- **Mobile:** React Native + Expo, with native/development-build capabilities added where live audio requires them.
- **Backend:** secure application APIs for Live-session creation, persistence, learner analysis, memory/world state, and analytics.
- **Web:** not the primary user product. Web code may be used for internal/admin tooling or retained as technical reference.

## North-star experience

1. Open the phone app and start talking with almost no setup.
2. The companion waits naturally, handles interruptions, and prioritizes conversational flow.
3. The relationship or ongoing situation gives the user a reason to keep talking and return later.
4. Hidden language targets are woven into the conversation instead of presented as exercises.
5. The session is analyzed after the fact.
6. Later conversations reuse meaningful context, advance relationship/story continuity, and reinforce language the learner is acquiring.
7. Mobile-native entry points such as notifications can bring the user back into a meaningful conversation.

## MVP

The first MVP deliberately contains only:

- iOS and Android application shell,
- one persistent AI companion,
- GPT-Live-1 real-time voice conversation on a physical mobile device,
- microphone/audio permission and lifecycle handling,
- transcript/session capture,
- a lightweight learner profile,
- 1-3 adaptive language targets per session,
- a short post-session recap,
- analytics for activation, conversation depth, retention, learning evidence, reliability, and AI cost.

Large lesson catalogs, multiple characters, social features, open-world simulation, and heavy gamification are explicitly deferred until the core conversation loop retains users.

## Competitive stance

Natural AI conversation, memory, personalization, feedback, roleplay, and spaced reinforcement already exist across products such as Langua, Praktika, Duolingo, Loora, Speak, ELSA, and Talkpal. Companion products such as Replika and Character.AI also set a high bar for relationship-driven retention.

AI English should therefore avoid competing as merely a "better AI tutor." The target is the intersection of **companion-grade reasons to return** and **serious longitudinal language learning**.

## Canonical docs

- [`docs/PRODUCT_VISION.md`](docs/PRODUCT_VISION.md) — final-state product vision and product principles
- [`docs/MVP_SPEC.md`](docs/MVP_SPEC.md) — mobile MVP scope and acceptance criteria
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — mobile-first technical architecture
- [`docs/METRICS.md`](docs/METRICS.md) — validation metrics and decision rules
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — staged path from mobile prototype to the final experience
- [`docs/COMPETITIVE_LANDSCAPE.md`](docs/COMPETITIVE_LANDSCAPE.md) — current market baseline and differentiation thesis
- [`docs/RELEASE_COSTS.md`](docs/RELEASE_COSTS.md) — non-AI mobile publication/operations cost baseline
- [`docs/MOBILE_FIRST_DECISION.md`](docs/MOBILE_FIRST_DECISION.md) — record of the Web → mobile product decision

## Current development state

The canonical product direction on `main` is mobile-first.

The previous browser prototype branch, `feat/phase-1-voice-spine`, is retained only as a technical reference for GPT-Live-1 session-flow work and is not the product implementation path.

The next implementation milestone is:

> **Open AI English on an iOS or Android physical device and sustain a natural 10-minute GPT-Live-1 English conversation without developer intervention.**

After that, build transcript capture, persistent companion memory, the relationship/continuity layer, and the invisible learner loop.

## Development rules

Before adding a feature, ask:

> Does this make the user more likely to willingly come back and spend meaningful time thinking and speaking in English?

Then ask:

> Does it strengthen relationship/world continuity or invisible learning in a way that a conventional AI tutor does not?

If neither is true, it is secondary.