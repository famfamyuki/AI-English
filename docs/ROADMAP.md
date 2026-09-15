# Roadmap

Status: Canonical staged roadmap
Date: 2026-09-15

## Phase 0 — Product foundation

Goal: prevent the project from becoming a generic AI tutor.

Deliverables:

- canonical product vision,
- mobile MVP boundary,
- mobile-first architecture,
- validation metrics,
- implementation backlog,
- competitive baseline,
- non-AI release-cost baseline.

Exit condition: the product loop, mobile surface, deferred scope, competitive position, and cost assumptions are unambiguous.

## Phase 1 — Mobile voice spine

Goal: prove a reliable end-to-end GPT-Live-1 conversation on a physical phone.

Build:

- React Native + Expo app shell,
- iOS and Android project configuration,
- secure server-mediated Live-session creation,
- mobile microphone/audio handling,
- GPT-Live-1 real-time voice session,
- connection and permission UX,
- session timing and basic analytics,
- lifecycle and network failure handling.

Exit condition: a tester can hold a natural 10-minute English conversation on a physical iOS or Android device without developer intervention.

## Phase 2 — Session capture and persistent companion

Goal: make session two meaningfully better than session one.

Build:

- transcript/session-event capture,
- user profile,
- one canonical companion persona,
- session summaries,
- durable memory items,
- recent-context retrieval,
- continuity prompts,
- initial relationship-state representation.

Exit condition: returning users experience relevant memory and recognizable relationship continuity without the companion overclaiming what it remembers.

## Phase 3 — Invisible learning loop

Goal: adapt conversation to the learner without making it feel like a lesson.

Build:

- learner evidence schema,
- transcript analysis,
- target selection,
- conversation-plan generation,
- target exposure and production tracking,
- spaced reinforcement logic,
- lightweight mobile recap.

Exit condition: at least one target introduced or modelled in an earlier session is naturally reused by testers in a later session.

## Phase 4 — Relationship and retention engine

Goal: create reasons to reopen the app that are stronger than "I should practice English."

Test one dimension at a time:

- relationship continuity,
- unresolved conversational threads,
- topic continuity,
- mini story arcs,
- persistent story/world state,
- meaningful notification/re-entry hooks,
- changing energy/style by context,
- recap usefulness,
- session length,
- time-of-day use patterns.

Key constraint: these mechanisms must support healthy, user-controlled engagement. Do not optimize for manipulative dependency.

Exit condition: a small cohort repeatedly returns because they want to continue a conversation/relationship/story, without depending on mandatory streak mechanics.

## Phase 5 — Relationship-aware learning orchestration

Goal: combine the retention engine and learner model into something conventional AI tutors do not provide.

Build/test:

- select language targets from longitudinal evidence,
- place targets inside relevant relationship/story contexts,
- generate natural opportunities for spontaneous production,
- avoid forcing targets when they damage conversation quality,
- use future callbacks to reinforce language across sessions,
- measure whether modelled language later appears spontaneously in learner speech.

Exit condition: repeated sessions show both voluntary return behavior and evidence that relationship/story contexts improve natural reuse of targeted language.

## Phase 6 — Character and world expansion

Only after the single-companion core loop retains users:

- multiple recurring characters,
- character relationships,
- scenario packs,
- interactive stories,
- role-based contexts such as work, travel, and social life,
- richer persistent narrative state.

Do not treat character count as a growth strategy by itself.

## Phase 7 — Deeper learning system

Potential later capabilities:

- pronunciation/prosody feedback,
- richer CEFR/skill mapping,
- personalized review modes,
- learner-controlled explicit coaching,
- proficiency milestones based on longitudinal evidence,
- goal-specific modes such as interviews or travel.

## Phase 8 — Monetization and release hardening

Do not lock pricing before measuring mobile usage, AI cost, and retention.

Potential variables:

- free monthly conversation minutes,
- paid voice allowance,
- premium characters/worlds,
- advanced progress insights,
- specialized goal modes.

Release work includes:

- subscription implementation when justified,
- crash/reliability hardening,
- privacy and account controls,
- TestFlight/internal Android testing,
- App Store and Google Play release preparation,
- revalidation of current store fees and release costs.

Any pricing model must preserve the central behavior: users should feel free to talk rather than ration every sentence.

## Competitive checkpoints

Before Phase 4, Phase 6, and public launch, refresh the market review for at minimum:

- Langua,
- Praktika,
- Duolingo conversational features,
- Speak,
- Loora,
- major AI companion products.

Do not claim a feature is unique without a current check.

## Current priority

**Build Phase 1 as a mobile app. Do not continue the browser UI as the primary product path. Do not begin broad world/character expansion before real-device voice is reliable and measurable.**

At the same time, preserve the strategic direction: the long-term differentiator is not "AI voice tutor" but the combination of relationship/world continuity and invisible longitudinal learning.