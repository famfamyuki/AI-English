# MVP Specification

Status: Canonical mobile build target
Date: 2026-09-15

## MVP question

Can learners voluntarily return to a mobile app because talking with an AI companion is enjoyable, while English learning happens in the background?

A second question is equally important:

> Does the user return because they want to continue a relationship/conversation—not merely because they believe they should practice English?

## Target user

Japanese adult learners who understand basic English but struggle to sustain spontaneous spoken conversation. Initial target range: roughly CEFR A2-B2.

## Product surface

The MVP is an iOS and Android mobile application. A browser consumer app is not required.

Preferred client direction:

- React Native
- Expo
- native capabilities where real-time audio or platform behavior requires them

## Core loop

1. Open the mobile app.
2. Start a live English voice session with one persistent companion.
3. The companion remembers prior sessions, adapts pace/difficulty, and maintains a small amount of relationship continuity.
4. The conversation carries 1-3 hidden language targets.
5. Transcript and session metadata are captured.
6. The session ends with a short recap.
7. Learner evidence is updated.
8. The next session reuses relevant memory, relationship context, and learning targets.

## In scope

### Mobile onboarding

Collect only preferred name, approximate comfort level, interests, English goal, correction preference, and microphone permission when needed. Do not begin with a long placement test.

### One persistent AI companion

The MVP has one default companion with:

- stable personality,
- continuity across sessions,
- a small explicit relationship-state representation,
- awareness of a few meaningful unresolved/recent conversation threads,
- adjustable pace and difficulty,
- natural conversational behavior.

The companion must not be presented as merely an avatar layered over a lesson flow.

### GPT-Live-1 mobile voice

Requirements:

- physical-device microphone input,
- low-latency two-way audio,
- natural turn-taking and interruption behavior,
- session and transcript event capture,
- clean start and end states,
- microphone and audio permission handling,
- network and error handling,
- foreground and background lifecycle handling.

The transport and SDK approach must follow the current GPT-Live-1 contract and be validated on real devices.

### Learner model v0

Track evidence for vocabulary and phrases understood or produced, recurring grammar patterns, reliable hesitation or repair signals, and expressions currently being reinforced. Use confidence and evidence rather than a binary mastered flag.

### Conversation planner v0

Before a session, select:

- relationship/recent-context seed,
- conversation context,
- 1-3 language targets,
- natural opportunities to elicit them,
- difficulty guidance,
- topics not to repeat too soon.

Targets should be embedded into a natural conversation context. If a target would make the conversation feel forced, preserve conversation quality instead.

### Session recap

Show conversation duration, useful expressions from the session, one evidence-based strength, one high-value improvement point, and optional short replay or rephrase practice.

### Persistence

Persist user profile, sessions, transcript segments, learner evidence, memory summaries, target history, and minimal relationship/continuity state.

## Explicitly out of scope for MVP

- multiple characters,
- open-world simulation,
- complex branching narrative systems,
- social features,
- live human teachers,
- browser-first consumer product,
- full pronunciation scoring suite,
- large lesson catalog,
- heavy streak or badge systems,
- payments before retention and AI cost are understood.

## Acceptance criteria

The MVP is complete when a tester can:

1. open the app on a supported iOS or Android physical device,
2. complete onboarding and grant microphone access,
3. start a GPT-Live-1 conversation,
4. speak for at least 10 minutes without developer intervention,
5. end the session and receive a transcript-derived recap,
6. return for a second session where meaningful prior context is remembered,
7. recognize continuity in the companion relationship or an unresolved/recent conversation thread,
8. encounter at least one selected learning target naturally,
9. produce analytics for the complete mobile funnel,
10. recover gracefully from common permission, network, and session failures.

## Product-quality threshold

A technically functioning voice call is not enough. The experience fails if users mainly describe it as a speaking test, lesson, interview, generic chatbot Q&A, or "an AI tutor with a character skin."

The desired description is closer to:

> I wanted to keep talking to them, and I happened to be doing it in English.

The MVP does **not** need a full world or multiple characters to prove this. One companion with credible continuity is enough for the first test.