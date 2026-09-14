# Phase 1 — Mobile Voice Spine

Goal: prove GPT-Live-1 is good enough to support the core AI English experience on a physical phone.

## Scope

- React Native + Expo mobile shell
- iOS/Android configuration
- microphone permission UX
- secure Live session bootstrap
- real-time microphone and remote audio
- explicit session state machine
- connection/error/lifecycle handling
- basic privacy-safe telemetry

## Acceptance

- physical iOS or Android device
- successful live connection
- two-way English audio
- natural pauses and interruptions
- 10-minute session without developer intervention
- clean session end
- no browser dependency

Do not implement the learner model before this milestone is validated.