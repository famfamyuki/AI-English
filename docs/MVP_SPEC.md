# MVP Specification

Status: Canonical mobile build target
Date: 2026-09-14

## MVP question

Can learners voluntarily return to a mobile app because talking with an AI companion is enjoyable, while English learning happens in the background?

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
3. The companion remembers prior sessions and adapts pace and difficulty.
4. The conversation carries 1-3 hidden language targets.
5. Transcript and session metadata are captured.
6. The session ends with a short recap.
7. Learner evidence is updated.
8. The next session reuses relevant memory and learning targets.

## In scope

### Mobile onboarding

Collect only preferred name, approximate comfort level, interests, English goal, correction preference, and microphone permission when needed. Do not begin with a long placement test.

### One persistent AI companion

The MVP has one default companion with a stable personality, continuity across sessions, adjustable pace and difficulty, and natural conversational behavior.

### GPT-Live-1 mobile voice

Requirements:

- physical-device microphone input
- low-latency two-way audio
- natural turn-taking and interruption behavior
- session and transcript event capture
- clean start and end states
- microphone and audio permission handling
- network and error handling
- foreground and background lifecycle handling

The transport and SDK approach must follow the current GPT-Live-1 contract and be validated on real devices.

### Learner model v0

Track evidence for vocabulary and phrases understood or produced, recurring grammar patterns, reliable hesitation or repair signals, and expressions currently being reinforced. Use confidence and evidence rather than a binary mastered flag.

### Conversation planner v0

Before a session, select conversation context, 1-3 language targets, natural opportunities to elicit them, difficulty guidance, and topics not to repeat too soon.

### Session recap

Show conversation duration, useful expressions from the session, one evidence-based strength, one high-value improvement point, and optional short replay or rephrase practice.

### Persistence

Persist user profile, sessions, transcript segments, learner evidence, memory summaries, and target history.

## Explicitly out of scope for MVP

- multiple characters
- open-world simulation
- social features
- live human teachers
- browser-first consumer product
- full pronunciation scoring suite
- large lesson catalog
- heavy streak or badge systems
- payments before retention and AI cost are understood

## Acceptance criteria

The MVP is complete when a tester can:

1. open the app on a supported iOS or Android physical device,
2. complete onboarding and grant microphone access,
3. start a GPT-Live-1 conversation,
4. speak for at least 10 minutes without developer intervention,
5. end the session and receive a transcript-derived recap,
6. return for a second session where meaningful prior context is remembered,
7. encounter at least one selected learning target naturally,
8. produce analytics for the complete mobile funnel,
9. recover gracefully from common permission, network, and session failures.

## Product-quality threshold

A technically functioning voice call is not enough. The experience fails if users mainly describe it as a speaking test, lesson, interview, or chatbot Q&A.

The desired description is:

> I was just talking, and I happened to be doing it in English.