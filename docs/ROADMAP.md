# Roadmap

Status: Canonical staged roadmap
Date: 2026-09-14

## Phase 0 — Product foundation

Goal: prevent the project from becoming a generic AI tutor.

Deliverables:

- canonical product vision,
- mobile MVP boundary,
- mobile-first architecture,
- validation metrics,
- implementation backlog.

Exit condition: the product loop, mobile surface, and deferred scope are unambiguous.

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
- continuity prompts.

Exit condition: returning users experience relevant memory without the companion overclaiming what it remembers.

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

## Phase 4 — Mobile retention experiments

Goal: learn why users voluntarily reopen the app.

Test one dimension at a time:

- relationship continuity,
- topic continuity,
- mini story arcs,
- notification/re-entry hooks,
- changing energy/style by context,
- recap usefulness,
- session length,
- time-of-day use patterns.

Exit condition: a small cohort repeatedly returns without depending on mandatory streak mechanics.

## Phase 5 — Character and world expansion

Only after the core loop retains users:

- multiple recurring characters,
- character relationships,
- scenario packs,
- interactive stories,
- role-based contexts such as work, travel, and social life,
- persistent narrative state.

## Phase 6 — Deeper learning system

Potential later capabilities:

- pronunciation/prosody feedback,
- richer CEFR/skill mapping,
- personalized review modes,
- learner-controlled explicit coaching,
- proficiency milestones based on longitudinal evidence,
- goal-specific modes such as interviews or travel.

## Phase 7 — Monetization and release hardening

Do not lock pricing before measuring mobile usage and AI cost.

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
- App Store and Google Play release preparation.

Any pricing model must preserve the central behavior: users should feel free to talk rather than ration every sentence.

## Current priority

**Build Phase 1 as a mobile app. Do not continue the browser UI as the primary product path. Do not begin world/character expansion before real-device voice is reliable and measurable.**