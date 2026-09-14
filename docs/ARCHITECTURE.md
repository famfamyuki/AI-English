# Architecture

Status: Canonical mobile-first technical direction
Date: 2026-09-14

## Goals

- Make iOS and Android the primary product surfaces.
- Keep the live voice path simple and low-latency.
- Separate natural conversation from deeper learner analysis.
- Make transcripts, memory, and learner evidence first-class data.
- Validate real-device audio reliability before building complex learning features.

## Proposed stack

- **Mobile client:** React Native + TypeScript
- **Mobile framework/tooling:** Expo
- **Device validation:** iOS and Android physical-device testing
- **Live voice:** GPT-Live-1
- **Live transport:** current supported mobile-compatible real-time transport, validated early on device
- **Application backend:** TypeScript service/API layer
- **Backend hosting:** Vercel or another managed server platform appropriate for API workloads
- **Backend reasoning:** OpenAI text/reasoning model for learner analysis, memory compaction, recap, and conversation planning
- **Database:** PostgreSQL
- **Auth:** managed authentication provider, selected during implementation
- **Analytics:** PostHog or equivalent event analytics

The exact Live API, SDK, WebRTC/native-module requirements, and mobile audio-session behavior must be verified against the current implementation contract before locking the transport layer.

## Logical architecture

```text
iOS / Android app
  |
  | microphone + live audio + session events
  v
GPT-Live-1 voice session
  |
  | transcript / response / session events
  v
Application backend
  |-- session persistence
  |-- memory summary
  |-- learner evidence extraction
  |-- conversation planning
  |-- recap generation
  |-- analytics / cost events
  v
PostgreSQL
```

## Mobile client responsibilities

The app is responsible for:

- onboarding and profile UX,
- microphone permission UX,
- audio input/output state,
- real-time session UI,
- device/network error states,
- foreground/background lifecycle behavior,
- recap and progress surfaces,
- later notification/deep-link entry points.

Keep business logic for long-term learner analysis and memory out of the client where practical.

## Live voice layer

Responsible for:

- natural turn-taking,
- audio input/output,
- interruptions,
- conversational tone and pace,
- short-term session context,
- executing the current conversation plan without sounding scripted.

It should not do expensive longitudinal learner analysis inline unless needed for the immediate conversation.

## Backend learning layer

Responsible for:

- transcript analysis,
- learner evidence extraction,
- target selection,
- memory compaction,
- recap generation,
- longitudinal progress calculations,
- building compact context for the next live session.

## Core entities

### User

- id
- displayName
- nativeLanguage
- approximateLevel
- correctionPreference
- interests
- createdAt

### DeviceInstallation

- id
- userId
- platform
- appVersion
- notificationState
- lastSeenAt

### Session

- id
- userId
- startedAt
- endedAt
- durationSeconds
- platform
- appVersion
- conversationPlanId
- summary
- qualitySignals

### TranscriptSegment

- id
- sessionId
- speaker
- text
- timestampStart
- timestampEnd
- metadata

### LearnerEvidence

- id
- userId
- skillType
- canonicalItem
- evidenceType
- confidenceDelta
- sourceSessionId
- evidenceText
- createdAt

Possible evidence types include observed, understood, prompted, produced, self-corrected, failed-recall, and repeated-error.

### LearningTarget

- id
- userId
- canonicalItem
- targetType
- status
- priority
- firstSelectedAt
- lastExposedAt
- lastProducedAt
- nextReviewAt

### MemoryItem

- id
- userId
- kind
- content
- importance
- lastReferencedAt
- sourceSessionId

### ConversationPlan

- id
- userId
- createdAt
- relationshipContext
- topicSeeds
- targetIds
- elicitationIdeas
- difficultyGuidance
- avoidTopics

## Session lifecycle

### Before session

1. App confirms permissions and audio readiness.
2. Backend loads user profile and recent memory.
3. Backend loads learner targets due for reinforcement.
4. Backend builds a compact conversation plan.
5. App establishes the GPT-Live-1 session using server-issued session material.

### During session

1. Stream microphone/audio.
2. Capture transcript and response/session events.
3. Persist durable events asynchronously where practical.
4. Preserve fluency rather than interrupting for routine correction.
5. Handle device audio interruptions and connectivity failures explicitly.

### After session

1. Close/finalize the live session.
2. Finalize transcript.
3. Generate a memory summary.
4. Extract learner evidence.
5. Update target confidence and review timing.
6. Generate the short recap.
7. Emit analytics and cost events.

## Mobile reliability rules

The first technical milestone must test on real devices, not only simulator/emulator environments.

The client must have explicit states for:

- microphone permission unavailable,
- connecting,
- connected,
- interrupted,
- reconnecting where safe,
- ending,
- ended,
- terminal failure.

Do not treat a browser proof of concept as proof of mobile audio reliability.

## Privacy and data rules

- Store only data needed for product value and learning adaptation.
- Make transcript retention explicit to users.
- Provide deletion controls before broad public launch.
- Keep sensitive server credentials out of the mobile bundle.
- Do not treat inferred personal facts as learning goals unless intentionally provided by the user.

## Cost rule

Voice time is a variable cost. Measure cost per session, per conversation minute, and per retained user from the first private mobile test. Optimize only after measuring whether longer conversations improve retention and learning value.