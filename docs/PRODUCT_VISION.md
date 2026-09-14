# Product Vision

Status: Canonical product direction
Date: 2026-09-14

## One-sentence vision

Build a mobile English environment people voluntarily return to because the conversations, relationships, and stories are enjoyable; language learning happens continuously in the background.

## Core principle

> **Conversation first. Learning happens invisibly.**

AI English is not a conventional lesson app with an AI tutor added to it. The primary product is the conversation experience itself.

## Primary product surface

AI English is designed first as an iOS and Android app.

Mobile is not only a packaging choice. It supports the intended behavior: the user can open the app in a spare moment, put on headphones, talk naturally, return through a meaningful notification, and build an ongoing relationship with the companion.

A browser consumer experience is not a product requirement. Web may later support internal tools, account management, marketing, or complementary experiences.

## User transformation

The product should move a learner from:

- translating in their head before speaking,
- avoiding spontaneous conversation,
- knowing vocabulary passively but not using it,
- treating English as study time,

into:

- responding directly in English,
- sustaining unscripted conversation,
- reusing useful expressions naturally,
- spending meaningful leisure/social time in English.

## Final-state experience: an English world

The long-term product is a persistent English-speaking world with continuity across sessions.

A user can have recurring AI relationships and experiences such as:

- a close friend who remembers ongoing life events,
- a coworker with a distinct personality,
- scenario-based characters such as a barista, interviewer, traveler, teammate, or neighbor,
- interactive stories where spoken English changes what happens next,
- free conversation around the user's real interests.

Underneath every experience is one shared learner model. Characters do not merely remember facts; the system knows what language the learner can understand, can produce, is currently acquiring, and repeatedly avoids.

## The invisible learning loop

1. **Observe** — capture transcripts, hesitation patterns, repair attempts, vocabulary use, recurring errors, and conversation difficulty.
2. **Model** — update the learner profile with confidence rather than binary mastered/not-mastered labels.
3. **Plan** — select a small set of language targets appropriate for the next conversation.
4. **Expose** — have the AI use those targets naturally in context.
5. **Elicit** — create opportunities where the learner can choose to use the target expression themselves.
6. **Reinforce** — bring useful targets back over future sessions using spaced exposure.
7. **Reflect** — after the conversation, provide a short recap without turning the live experience into a classroom.

## Product behavior rules

### During live conversation

- Preserve flow over correction.
- Do not interrupt for routine grammar mistakes.
- Prefer natural recasts, clarification questions, and contextual modeling.
- Adapt speaking speed and vocabulary to the learner without sounding artificially simplified.
- Give the learner time to think.
- Maintain character consistency and continuity.
- Keep explicit teaching short unless the learner asks for it.

### After conversation

The recap may show:

- minutes spoken,
- one or two things the learner did well,
- two or three useful expressions from the conversation,
- one recurring issue worth noticing,
- a tiny optional replay/practice activity.

The recap should feel like insight from a conversation, not homework.

## Competitive moat

GPT-Live-1 is an enabling technology, not the moat. Other products can use the same API.

The defensible system is the combination of:

1. persistent learner model,
2. long-term relationship and world memory,
3. adaptive conversation planning,
4. a high-quality content/character system,
5. longitudinal learning data,
6. a mobile product loop optimized for voluntary speaking time rather than lesson completion.

## North-star metric

**Voluntary English Conversation Minutes per Retained User per Week**

A successful product causes users to choose English conversation even when no lesson, streak, or assignment is forcing them to do so.

## Guardrails

Do not optimize the core product around:

- number of lessons completed,
- raw message count,
- streak pressure,
- excessive correction,
- feature breadth before retention,
- character quantity before conversation quality.

## Strategic test

Before adding a feature, ask:

> Does this make the user more likely to willingly come back and spend meaningful time thinking and speaking in English?

If not, it is secondary.