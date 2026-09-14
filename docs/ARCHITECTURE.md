# Architecture

Status: Initial technical direction
Date: 2026-09-14

## Goals

- Keep the live voice path simple and low-latency.
- Never expose the OpenAI API key to the browser.
- Separate natural conversation from deeper learner analysis.
- Make transcripts and learner evidence first-class data.
- Keep the first deployment small enough to iterate quickly.

## Proposed stack

- **Frontend:** Next.js App Router + TypeScript
- **Hosting:** Vercel
- **Live voice:** GPT-Live-1
- **Browser transport:** WebRTC where supported by the GPT-Live-1 API flow
- **Backend reasoning:** an OpenAI text model via delegated/background analysis for learner-model and recap work
- **Database:** PostgreSQL (provider to be selected during implementation)
- **Auth:** lightweight managed auth (provider to be selected)
- **Analytics:** PostHog or equivalent event analytics

The exact SDK/API surface must follow the current OpenAI GPT-Live-1 documentation at implementation time.

## Logical architecture

```text
Browser
  |
  | microphone/audio + live events
  v
GPT-Live-1 voice session
  |
  | transcript / response text / session events
  v
Application backend
  |-- session persistence
  |-- memory summary
  |-- learner evidence extraction
  |-- conversation planning
  |-- recap generation
  v
PostgreSQL
```

## Separation of responsibilities

### Live voice layer

Responsible for:

- natural turn-taking,
- audio input/output,
- interruptions,
- conversational tone/pace,
- short-term session context,
- executing the current conversation plan without sounding scripted.

It should not do expensive longitudinal learner analysis inline unless needed for the immediate conversation.

### Backend learning layer

Responsible for:

- transcript analysis,
- learner evidence extraction,
- target selection,
- memory compaction,
- recap generation,
- longitudinal progress calculations.

This work can happen at session boundaries or through delegated reasoning when required.

## Core entities

### User

- id
- displayName
- nativeLanguage
- approximateLevel
- correctionPreference
- interests
- createdAt

### Session

- id
- userId
- startedAt
- endedAt
- durationSeconds
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

1. Load user profile and recent memory.
2. Load learner targets due for reinforcement.
3. Build a compact conversation plan.
4. Create the GPT-Live-1 session with character/style instructions and the plan.

### During session

1. Stream microphone/audio.
2. Capture transcripts and response text.
3. Persist durable events asynchronously where practical.
4. Do not interrupt fluency for routine correction.
5. Allow explicit teaching only when requested or when misunderstanding blocks the conversation.

### After session

1. Finalize transcript.
2. Generate a memory summary.
3. Extract learner evidence.
4. Update target confidence and review timing.
5. Generate the short recap.
6. Emit analytics events.

## Privacy and data rules

- Store only data needed for product value and learning adaptation.
- Make transcript retention explicit to users.
- Provide deletion controls before broad public launch.
- Keep secrets server-side.
- Do not treat inferred personal facts as learning goals unless the user intentionally provides them.

## Cost rule

GPT-Live-1 voice time is a variable cost, so the application must measure cost per active retained user from the first private test. Optimize only after measuring whether longer conversations improve retention and learning value.