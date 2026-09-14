# Metrics and Validation

Status: Initial experiment framework
Date: 2026-09-14

## North-star metric

**Voluntary English Conversation Minutes per Retained User per Week**

This metric combines the two things the product must achieve: users return voluntarily, and they actually spend time speaking English.

## Primary MVP metrics

### Activation

A new user is activated when they:

1. complete lightweight onboarding,
2. start a live voice session,
3. remain in conversation for at least 5 minutes,
4. finish the session and view the recap.

Track activation rate and drop-off at each step.

### Conversation depth

Track:

- median session duration,
- user speaking time,
- assistant speaking time,
- user/assistant speaking ratio,
- sessions reaching 5 / 10 / 20 minutes,
- interruption/error rate where measurable.

### Retention

Track:

- D1 return,
- D7 return,
- weekly returning users,
- number of voice sessions per retained user,
- conversation minutes per retained user.

For a small private beta, individual qualitative behavior matters more than statistically noisy percentage changes.

### Learning evidence

Track longitudinally rather than claiming instant mastery:

- target expressions exposed,
- targets later produced without prompting,
- repeated-error frequency,
- self-corrections,
- time between target exposure and spontaneous reuse.

A key learning signal is: **language first encountered/modelled by the AI later appears spontaneously in the learner's own speech.**

## Experience-quality questions

After selected sessions, ask one lightweight question rather than a long survey.

Examples:

- Did that feel like a conversation or a lesson?
- Did you want to keep talking?
- Was the English too easy, about right, or too hard?
- Did corrections interrupt the flow?

## Critical validation thresholds

Do not treat these as permanent KPI targets; they are early decision rules.

The concept is promising if private testers show all of the following patterns:

- several users voluntarily start a second session without being asked,
- 10+ minute sessions occur naturally,
- users describe the experience primarily as conversation rather than testing,
- returning sessions show evidence of remembered context,
- at least some learning targets are later produced spontaneously.

## Cost metrics

Measure from day one:

- GPT-Live voice cost per session,
- backend model cost per session,
- total AI cost per conversation minute,
- AI cost per activated user,
- AI cost per retained weekly user.

GPT-Live-1 launched at $0.05/minute for the frontend voice layer, with backend model/tool usage charged separately. Pricing should be rechecked before any monetization decision.

## Events

Minimum analytics event set:

- onboarding_started
- onboarding_completed
- live_session_requested
- live_session_connected
- live_session_failed
- live_session_ended
- recap_generated
- recap_viewed
- target_selected
- target_exposed
- target_produced
- return_session_started

Each event should include stable identifiers and only the metadata needed for analysis; avoid sending raw sensitive transcript content to general analytics tools.

## Decision discipline

Do not optimize for vanity metrics such as page views or account creation before the core loop works.

For every experiment record:

1. hypothesis,
2. product change,
3. expected behavioral signal,
4. observed result,
5. interpretation,
6. next action.

With small samples, prefer user-level evidence and session review over false precision.