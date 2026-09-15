# Product Vision

Status: Canonical product direction
Date: 2026-09-15

## One-sentence vision

Build a mobile English environment people voluntarily return to because the conversations, relationships, and stories are enjoyable; language learning happens continuously in the background.

## Core principle

> **Conversation first. Learning happens invisibly.**

AI English is not a conventional lesson app with an AI tutor added to it. The primary product is the conversation experience itself.

A sharper positioning statement is:

> **An AI companion/world that happens to make you fluent in English.**

This deliberately reverses the usual category framing of "a language-learning app with AI conversation."

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

The world state should also persist beyond profile memory. Conversations should be able to change future interactions, relationship state, unresolved topics, story threads, and reasons to return.

## The invisible learning loop

1. **Observe** — capture transcripts, hesitation patterns, repair attempts, vocabulary use, recurring errors, and conversation difficulty.
2. **Model** — update the learner profile with confidence rather than binary mastered/not-mastered labels.
3. **Plan** — select a small set of language targets appropriate for the next conversation.
4. **Embed** — place those targets inside a relationship, topic, or story context rather than surfacing them as exercises.
5. **Expose** — have the AI use those targets naturally in context.
6. **Elicit** — create opportunities where the learner can choose to use the target expression themselves.
7. **Reinforce** — bring useful targets back over future sessions using spaced exposure.
8. **Reflect** — after the conversation, provide a short recap without turning the live experience into a classroom.

## Product behavior rules

### During live conversation

- Preserve flow over correction.
- Do not interrupt for routine grammar mistakes.
- Prefer natural recasts, clarification questions, and contextual modeling.
- Adapt speaking speed and vocabulary to the learner without sounding artificially simplified.
- Give the learner time to think.
- Maintain character consistency and continuity.
- Preserve relationship/story continuity when relevant.
- Keep explicit teaching short unless the learner asks for it.
- Never sacrifice a compelling conversation merely to force a learning target.

### After conversation

The recap may show:

- minutes spoken,
- one or two things the learner did well,
- two or three useful expressions from the conversation,
- one recurring issue worth noticing,
- a tiny optional replay/practice activity.

The recap should feel like insight from a conversation, not homework.

## Competitive reality

The AI-language-learning market already includes strong implementations of:

- natural AI voice conversation,
- conversation memory,
- adaptive difficulty,
- feedback after speaking,
- saved vocabulary and spaced review,
- roleplay and stories,
- AI tutor personalities,
- reusing previously learned vocabulary in later conversations.

Products such as Langua, Praktika, Duolingo, Loora, Speak, ELSA, and Talkpal already cover many parts of this surface. Companion products such as Replika and Character.AI are important benchmarks for relationship and entertainment retention.

Therefore AI English must not claim any one of these commodity capabilities as its primary differentiation.

See [`COMPETITIVE_LANDSCAPE.md`](COMPETITIVE_LANDSCAPE.md) for the current market baseline.

## Competitive moat

GPT-Live-1 is an enabling technology, not the moat. Other products can use the same API.

The defensible system should come from the combination of:

1. **relationship engine** — a reason to care about returning to a specific companion or ongoing situation,
2. **persistent world/story state** — continuity that goes beyond remembering profile facts,
3. **longitudinal learner model** — one model of what language the learner understands, produces, avoids, and is acquiring,
4. **invisible target orchestration** — learning targets embedded into conversation, relationships, and stories rather than primarily presented as exercises,
5. **high-quality content/character system** — conversation contexts that remain interesting over time,
6. **longitudinal learning data** — evidence that language first modelled by the system later appears spontaneously in learner speech,
7. **mobile product loop optimized for voluntary speaking time rather than lesson completion**.

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
- character quantity before conversation quality,
- feature parity with every language-learning competitor,
- claiming uniqueness for capabilities competitors already offer.

## Strategic tests

Before adding a feature, ask:

> Does this make the user more likely to willingly come back and spend meaningful time thinking and speaking in English?

And:

> Does this strengthen relationship/world continuity or invisible learning in a way that a conventional AI tutor does not?

If neither is true, it is secondary.