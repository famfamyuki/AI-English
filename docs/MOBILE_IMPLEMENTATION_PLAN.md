# Mobile Implementation Plan

Status: Active
Date: 2026-09-14

## Milestone 1 — App foundation

- React Native + Expo project
- TypeScript
- iOS and Android configuration
- environment/config strategy
- minimal navigation
- conversation home screen
- microphone permission flow

## Milestone 2 — GPT-Live-1 real-device voice

- server-mediated Live session creation
- mobile real-time audio transport
- remote audio playback
- session state machine
- interruption and network error handling
- graceful session end
- 10-minute physical-device test

## Milestone 3 — Session data

- transcript/session event normalization
- session duration and quality telemetry
- privacy-safe analytics
- backend persistence

## Milestone 4 — Persistent companion

- user profile
- companion persona
- session summaries
- relevant memory retrieval
- continuity in the next conversation

## Milestone 5 — Invisible learning loop

- learner evidence schema
- transcript analysis
- 1-3 target selection
- adaptive conversation plan
- target exposure and production tracking
- short recap

## Milestone 6 — Retention and release

- notification experiments
- crash/reliability hardening
- private beta
- TestFlight and Android internal testing
- store-readiness work

## Immediate acceptance test

A tester opens AI English on a physical phone, grants microphone access, connects successfully, talks naturally with GPT-Live-1 for 10 minutes, and ends the session without developer intervention.