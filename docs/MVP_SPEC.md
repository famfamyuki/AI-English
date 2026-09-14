# MVP Specification

Status: Proposed build target
Date: 2026-09-14

## MVP question

Can we make a learner voluntarily return to speak English with an AI companion because the interaction itself is enjoyable, while measurable language learning happens in the background?

## Target user

Initial target: Japanese adult learners who can understand basic English but struggle to sustain spontaneous spoken conversation.

The MVP should work best for roughly CEFR A2-B2 users. It must not depend on exact CEFR placement to start.

## Core loop

1. User opens the web app.
2. User starts a live English voice session with one persistent companion.
3. The companion remembers prior sessions and adapts pace/difficulty.
4. The conversation engine carries 1-3 hidden language targets into the session.
5. Transcript and interaction metadata are captured.
6. The session ends with a short recap.
7. Learner-model evidence is updated.
8. The next session reuses relevant context and selected targets.

## In scope

### 1. Onboarding

Collect only what is needed to create a good first conversation:

- preferred name,
- approximate comfort level,
- interests/topics,
- main reason for improving English,
- correction preference: minimal / balanced / active.

Do not start with a long placement test.

### 2. One persistent AI companion

The MVP has one default character, not a character marketplace.

The companion should have:

- stable personality,
- conversational warmth without excessive praise,
- memory of meaningful prior topics,
- adjustable speaking speed and language difficulty,
- a reason to continue conversations over time.

### 3. GPT-Live-1 voice session

Requirements:

- browser microphone input,
- low-latency audio conversation,
- natural interruption/turn behavior,
- transcript capture,
- response text capture,
- session start/end state,
- graceful fallback/error state.

### 4. Learner model v0

Track evidence for:

- vocabulary/phrases understood,
- vocabulary/phrases produced,
- recurring grammar patterns,
- hesitation/repair markers that can be reliably inferred from available session data,
- target expressions currently being reinforced.

Every item should have confidence/evidence rather than a hard mastered boolean.

### 5. Conversation planner v0

Before a session, produce:

- conversation context,
- 1-3 target expressions or structures,
- one or two natural opportunities to elicit them,
- difficulty guidance,
- topics to avoid repeating too soon.

Targets must not make the conversation feel scripted.

### 6. Session recap

Show a short result page containing:

- conversation duration,
- useful expressions encountered,
- one positive observation based on evidence,
- one high-value improvement point,
- optional replay/rephrase examples.

### 7. Persistence

Persist at minimum:

- user profile,
- sessions,
- transcript segments,
- learner evidence,
- memory summaries,
- target history.

## Explicitly out of scope for MVP

- multiple characters,
- open-world simulation,
- social features,
- live human teachers,
- native iOS/Android apps,
- full pronunciation scoring suite,
- large curriculum/lesson catalog,
- streak economy,
- achievements/badges beyond minimal experimentation,
- payments until core retention is understood.

## Acceptance criteria

The first usable MVP is complete when a test user can:

1. create a profile,
2. start a browser voice conversation,
3. speak for at least 10 minutes without manual developer intervention,
4. end the session and receive a transcript-derived recap,
5. return for a second session where the companion recalls meaningful prior context,
6. encounter at least one previously selected learning target naturally,
7. generate analytics events for the entire funnel.

## Product-quality threshold

A technically functioning call is not enough. The live experience fails the MVP if users consistently describe it as a speaking test, lesson, interview, or chatbot Q&A.

The desired description is closer to: **"I was just talking, and I happened to be doing it in English."**