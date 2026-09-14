# Mobile-First Product Decision

Status: Accepted
Date: 2026-09-14

## Decision

AI English will be built primarily as an iOS and Android mobile application rather than as a browser-first consumer product.

## Why

The product thesis depends on low-friction, repeatable spoken interaction. A phone is the most natural surface for:

- spontaneous short conversations,
- headphones and microphone use,
- relationship-style re-entry,
- notifications and deep links,
- repeated daily use,
- eventual App Store and Google Play distribution.

The product should feel like opening a conversation with someone, not visiting a study website.

## Technical direction

Use React Native + Expo as the default cross-platform client direction. Add native/development-build capabilities where real-time audio or platform APIs require them.

The first implementation milestone is real-device GPT-Live-1 conversation reliability on iOS or Android.

## Previous browser prototype

The existing `feat/phase-1-voice-spine` branch and its Next.js/WebRTC implementation are retained as technical reference only.

It may still inform:

- session creation flow,
- Live event handling,
- graceful session shutdown,
- prompt design,
- transcript/event normalization concepts.

It is not the implementation base for the consumer app unless a specific component is proven reusable.

## Consequences

### We will do now

- create a mobile app foundation,
- validate real-device audio early,
- design permissions, lifecycle, and network failure states explicitly,
- keep long-term learning logic in backend services where practical.

### We will not do now

- finish the browser UI as the primary product,
- spend time polishing responsive web behavior,
- treat browser voice success as sufficient proof of mobile readiness.

## Revisit condition

The decision can be revisited only if mobile distribution or live-audio constraints materially prevent the core product experience. Web can still exist later as a complementary surface.