# Roadmap

Status: Initial staged roadmap
Date: 2026-09-14

## Phase 0 — Product foundation

Goal: prevent the project from becoming a generic AI tutor.

Deliverables:

- canonical product vision,
- MVP boundary,
- initial architecture,
- validation metrics,
- implementation backlog.

Exit condition: a developer can explain the core loop and what is deliberately not being built.

## Phase 1 — Voice spine

Goal: prove a reliable end-to-end browser conversation.

Build:

- Next.js web shell,
- secure server-side session/token flow,
- GPT-Live-1 browser voice session,
- microphone permissions and audio states,
- transcript/response-text capture,
- connection/error UX,
- session timing and basic analytics.

Exit condition: a tester can hold a 10-minute English conversation without developer intervention.

## Phase 2 — Persistent companion

Goal: make session two meaningfully better than session one.

Build:

- user profile,
- one canonical companion persona,
- session summaries,
- durable memory items,
- recent-context retrieval,
- continuity prompts.

Exit condition: returning users experience relevant memory without the assistant overclaiming what it remembers.

## Phase 3 — Invisible learning loop

Goal: make conversation adapt to the learner without becoming a lesson.

Build:

- learner evidence schema,
- transcript analysis,
- target selection,
- conversation-plan generation,
- target exposure/production tracking,
- spaced reinforcement logic,
- lightweight recap.

Exit condition: at least one target introduced/modelled in an earlier session is naturally reused by testers in a later session.

## Phase 4 — Retention experiments

Goal: find why users come back voluntarily.

Test one dimension at a time:

- relationship continuity,
- topic continuity,
- mini story arcs,
- proactive conversation hooks,
- changing energy/style by context,
- recap usefulness,
- session length.

Exit condition: a small cohort repeatedly returns without reminders or mandatory streak mechanics.

## Phase 5 — Character and world expansion

Only after the core loop retains users:

- multiple recurring characters,
- character relationships,
- scenario packs,
- interactive stories,
- role-based contexts such as work/travel/social life,
- world events and persistent narrative state.

## Phase 6 — Deeper learning system

Potential later capabilities:

- pronunciation/prosody feedback,
- richer CEFR/skill mapping,
- personalized review modes,
- learner-controlled explicit coaching,
- proficiency milestones based on longitudinal evidence,
- import of real goals such as interviews or travel.

## Phase 7 — Monetization

Do not lock the model before measuring usage and AI cost.

Likely variables:

- free monthly conversation minutes,
- paid voice-minute allowance,
- premium characters/worlds,
- advanced progress insights,
- higher-memory tiers,
- specialized goal modes.

Any pricing model must preserve the central behavior: users should feel free to talk rather than constantly rationing every sentence.

## Current priority

**Build Phase 1 next. Do not begin world/character expansion before the voice spine works and sessions are measurable.**