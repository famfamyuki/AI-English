# Mobile Release Costs (excluding AI API usage)

Status: Planning baseline
Last checked: 2026-09-15

This document tracks the non-AI-API costs of publishing and operating AI English as an iOS/Android app. Prices and store policies change; recheck official sources before committing to a paid plan or public launch.

## Minimum publication costs

### Apple Developer Program

- Approximate cost: **USD 99/year**.
- Required for normal App Store distribution.

Official reference: https://developer.apple.com/programs/

### Google Play developer registration

- Approximate cost: **USD 25 one-time registration fee** for a standard developer account/distribution setup.
- Requirements and distribution/account models can change by region and account type.

Official reference: https://support.google.com/googleplay/android-developer/

### Domain

- Optional for the app binary itself but recommended for product website, privacy policy, support, and account links.
- Typical planning range: roughly **USD 10-30/year**, depending on registrar and TLD.

## Development / build infrastructure

### Expo / EAS

Current plan: start with React Native + Expo.

- Free tier may be enough for early development and limited builds/submissions.
- Paid EAS plans become useful when build volume, speed, team workflow, or production requirements increase.
- A reasonable early planning point is **USD 0 initially**, upgrading only when build constraints justify it.

Official reference: https://expo.dev/pricing

## Backend and data

### Supabase or equivalent

Potential responsibilities:

- authentication,
- PostgreSQL,
- session metadata,
- transcript storage,
- learner model data,
- memory/world state.

Planning assumption:

- **USD 0** during a small prototype/private test if free-tier limits are sufficient.
- approximately **USD 25/month+** once a dedicated paid production project is justified.

Official reference: https://supabase.com/pricing

Provider is not permanently locked; this is a current planning baseline.

## Analytics

### PostHog or equivalent

Use for privacy-conscious product analytics such as activation, session starts, retention, reliability, recap usage, and learning events. Do not send raw private transcripts to general analytics by default.

Planning assumption:

- **USD 0 initially** at small MVP/private-beta volume.
- paid usage only after free allowances are exceeded or more advanced capabilities are required.

Official reference: https://posthog.com/pricing

## Subscription infrastructure

### RevenueCat or equivalent

Useful once iOS/Android subscriptions are introduced.

Planning assumption:

- **USD 0 initially** before meaningful subscription revenue/volume.
- later pricing is usage/revenue-dependent; recheck before monetization launch.

Official reference: https://www.revenuecat.com/pricing/

## Store commissions / payment economics

Store fees are not a fixed infrastructure cost, but they materially affect unit economics after monetization.

Apple and Google offer different commission structures based on program, developer size, product type, region, and payment option. Do not assume subscription revenue equals net revenue.

Before pricing AI English, calculate:

```text
subscription revenue
- app-store commission / payment fees
- GPT-Live-1 and other model costs
- backend / analytics / support costs
= contribution margin
```

Official references:

- Apple: https://developer.apple.com/app-store/
- Google Play: https://support.google.com/googleplay/android-developer/

## Early-stage planning baseline

A very small private MVP can plausibly run with non-AI fixed costs close to:

```text
Apple Developer Program     ~ $99/year
Google Play registration    ~ $25 one-time
Expo / EAS                  $0 initially
Backend                     $0 initially
Analytics                   $0 initially
Subscription tooling        $0 before monetization
Domain                      ~ $10-30/year
```

Therefore **AI inference/voice usage is expected to become the dominant variable cost well before ordinary infrastructure becomes the dominant cost**.

A more production-oriented setup might later add roughly:

```text
Expo paid plan              optional monthly cost
Paid database/backend       ~ $25/month+ baseline
Monitoring / analytics      usage-dependent
Support / legal / design    as required
```

## Cost-control rules

1. Do not buy infrastructure before a free tier becomes a real constraint.
2. Measure AI cost per conversation minute from the first real-device tests.
3. Measure total cost per activated and retained user before choosing subscription allowances.
4. Keep transcript retention configurable because storage, privacy, and value are linked.
5. Recheck Apple/Google policies before launch; store rules are moving targets.
6. Do not optimize away conversation length until retention value is measured—long conversation is part of the product thesis.