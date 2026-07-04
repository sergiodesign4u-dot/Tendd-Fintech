# CLAUDE.md - Tendd Product Brief

## Phase Status

| Phase | Output | Status |
|-------|--------|--------|
| Research Sprint | research/research.html, research/docs/*.md | Done (June 2026) |
| People & JTBD | research/personas.html, research/jtbd.html, research/docs/personas.md, research/docs/jtbd.md | Done (June 2026) |
| Concept Architecture (IA) | IA/ia.html, IA/docs/sitemap.md, IA/docs/flows.md | Done (July 2026) |
| Wireframes | wireframes/index.html, wireframes/*.html, wireframes/_screens.md, wireframes/_conventions.md, wireframes/_critique.md | Done (July 2026) |
| Design Sprint | Design system, visual design | Pending |

Founder decisions locked June 14 2026: D1 (gradual reveal with paired action), D2 (manual + presets at launch), D3 (paywall at history/trends/advanced alerts, NOT at cancel moment), D4 ($7.99/mo or $69/yr), D5 (US/Plaid first, EU deferred). See research/docs/strategy.md Section 6.

---

## Concept Architecture (Phase IA)

Structure locked July 2026. The full information architecture exists: the skeleton in IA/docs/sitemap.md and IA/docs/flows.md, plus a page-level library (one page per cluster with real copy drafts, content blocks, and states) in IA/docs/pages/. Living site at IA/ia.html. Next phase is Wireframes.

**Top-level sitemap (16 screens, 6 clusters):**
- Onboarding and Activation: Welcome / Value Intro, Activation Path Choice, Connect Bank, Add Subscription, Guided Reveal
- Core: Home / Subscription List, Subscription Detail
- Stay Ahead: Alerts / Activity
- Cut and Celebrate: Cancel Guide, Cancel Win Moment, Share Snapshot
- Depth (Pro): History and Trends, Upgrade / Tendd Pro
- Account and Trust: Connections / Accounts, Data and Privacy, Settings / Profile

**Global navigation (4 tabs):** Home (J-MAIN), Alerts (J4), Save (J2 + E2), You (E3 + J1).

**Main flow (J-MAIN, Emma, bank path):** Welcome -> Activation Path Choice -> Connect Bank -> Guided Reveal (gradual: count, then categories with logos, then total paired with an action, per D1) -> Home. The privacy path swaps Connect Bank for Add Subscription (manual + presets, per D2).

**Tap depth to the main job:** 3 taps in the first session (at the ceiling, not over), 0 to 1 tap in every session after (the app opens on Home).

**Coverage:** zero orphan jobs; one intentional orphan screen (Upgrade / Tendd Pro), retained as a decision-justified gate (D3, D4).

---

## Wireframes (Phase)

Built July 2026. Greyscale, semantic, mobile-first responsive wireframes for
every screen, structure not look: real Tendd copy, no color or type decisions,
and every state (empty, error, loading, success) as its own page. Living entry
point at wireframes/index.html (a flow-by-flow overview and a 40-page build
dashboard). Next phase is the Design system (color, type, components).

**Scale:** 16 screens, 41 pages (40 plus a Home save-focus state added in the
audit). The main flow (Flow A, Emma) was built first
by hand as the reference (Home is the pattern), then the rest were rolled out
by subagents against the same contract and reviewed for consistency.

**Contract and sources:**
- wireframes/_conventions.md: the binding rules (greyscale, semantic HTML,
  real copy, file naming, one page per state, shared shell, no footer,
  mobile-first with a real desktop reflow).
- wireframes/_screens.md: the screen and state inventory, grouped by flow, with
  the screen-by-state table (which of the four states each screen produces).
- wireframes/_critique.md: the Step 9 review and the one fix applied.

**Shell:** each page shares wireframe.css (the greyscale system) and nav.js
(the left review side menu / wireframe tree, restored July 2026, identical on
every page and auto-marking the current one; it collapses to a top bar on
mobile). The July 2026 declutter still stands for the annotations: the
meta/annotation bar, the per-page state strip, and the desktop-reflow note are
gone, so a frame is the product screen plus the review tree, nothing pasted on
top. The overview, wireframes/index.html, is the single flow-grouped index of
every page and state. The product's own chrome is a four-tab bar (Home, Alerts,
Save, You) that becomes a left rail on desktop via a container query on the
stage; onboarding shows no tab bar.

**Full-width desktop, header-in-rail, and two-pane (July 2026 founder decision,
locked against IA 2026-07-04).** On desktop the tab bar becomes a left rail and
the header (GC1) folds into the top of that rail (per navigation.md).
Single-column app screens sit in a centered, comfortable measure (max 820px).
Home and Subscription Detail become a real two-pane master-detail at stage width
>= 1040: Home keeps the list as master with a selected-item detail pane on the
right; Subscription Detail brings the list back as a master on the left. Mobile
is unchanged (single-column phone frame; the second pane is hidden). The IA docs
(onboarding.md, navigation.md, seo.md, sitemap.md, core.md) were updated to lock
Welcome-as-landing, the footer exception, and this desktop model.

**Welcome is the public landing (July 2026 founder decision).** Welcome / Value
Intro was rebuilt from a narrow onboarding step into a full-width marketing
landing wireframe (top nav, two-column hero with a calm app preview, benefit
cards, how-it-works, trust and security, social proof, final CTA, footer).
Still greyscale/semantic/real-copy; it is the only full-width page and the only
one with a footer. Its CTAs lead into the onboarding chain at Path Choice. New
landing classes (.landing, .lp-*) live in wireframe.css.

**States and dead ends:** every empty and error page has a real exit (verified
against flows.md). The IA critique's dead-end and missing-state fixes are all
realized here as state pages: the bank-error manual fallback, the
could-not-cancel in-app next step, the failed-payment next-step card, the
sync-error last-known list, the unrecognized-charge naming prompt, and the
still-gathering-history empty state.

**Not here (deferred to Design):** color, typography, iconography, real logos,
motion, exact spacing, and the deeper desktop reflows (Home/Detail two-pane,
Cancel/Share/Upgrade modals).

---


## Product Overview

**Name:** Tendd (placeholder - not validated for trademark)
**Type:** Mobile-first responsive web app, scaling to desktop
**One-sentence pitch:** Tendd helps people who are not into finance see and control their recurring payments and subscriptions, turning money anxiety into calm, everyday clarity.

**Core differentiator:** Tendd is NOT a budgeting app. It is a calm, low-friction visibility and control layer for recurring spend - built specifically for people who feel anxious about money and avoid finance apps because they feel overwhelming or judgmental.

**Platform:** Mobile-first responsive web, scaling to desktop. Desktop responsive is in scope: every screen is designed for phone first and reflows to desktop (bottom tab bar becomes a left rail, list-and-detail becomes a two-pane view). A native app is a later-stage decision and is out of scope for this phase.

---

## Jobs to Be Done (JTBD) Analysis

### Candidate Jobs (4-6)

| # | Job | Frequency | Intensity | Willingness to Pay | Score |
|---|-----|-----------|-----------|-------------------|-------|
| J1 | See all subscriptions in one place | Very High | High | High | 9/10 |
| J2 | Feel calm and in control of recurring money | High | Very High | High | 9/10 |
| J3 | Cancel subscriptions I no longer use | Medium-High | High | High | 8/10 |
| J4 | Get alerted when a price changes or payment fails | Medium | High | Medium | 7/10 |
| J5 | Understand what a charge on my statement actually is | High | High | Medium | 7/10 |
| J6 | Track shared subscriptions with a partner or family | Low-Medium | Medium | Medium | 5/10 |

### Primary JTBD

**J1 + J2 are deeply linked and form the combined primary job:**

> "When I suspect I'm paying for things I forgot about or never use, I want to see all my recurring charges clearly in one calm view, so that I feel in control of my money without needing to become a finance person."

### Secondary JTBD

**J3 - Cancel and save:**
> "When I am looking to reduce my monthly spend, I want to quickly identify which subscriptions I actually use vs which ones I keep forgetting to cancel, so that I can free up money without a complicated process."

**J4 - Stay ahead of surprises:**
> "When a subscription price changes or a payment fails, I want to be notified immediately in plain language, so that I am never caught off guard by an unexpected charge."

---

## Target Audience

- **Age range:** 22 to 42 years old (core: 26 to 36)
- **Financial confidence level:** Low to medium. These users know money matters but find finance apps stressful or confusing. They are not financially illiterate - they are financially anxious.
- **Trust level:** Skeptical. They are cautious about connecting bank accounts and sharing financial data. Trust must be earned through transparency and design, not just claimed.
- **Primary emotional driver:** Reducing financial anxiety. The feeling they want is: "I know what's going out, and I'm okay."
- **Secondary emotional driver:** Pride in small wins - catching a forgotten subscription, saving money, feeling on top of things.
- **What they are NOT:** Power users, budget optimizers, spreadsheet fans, financial planners.

---

## MVP Feature Scope

### Free Tier (explore and assess value)
- Connect up to 2 bank accounts or manually add subscriptions
- See all recurring charges in a clean, categorized list
- Basic subscription details: name, amount, next billing date, category
- Simple monthly total view
- Up to 10 tracked subscriptions
- Basic alerts: price change detected, payment failed

### Paid Tier (SaaS subscription - Tendd Pro)
- Unlimited bank connections and subscriptions
- Full history and trends (3-month, 6-month, yearly view)
- Cancel support: direct cancellation links + step-by-step guides
- Advanced alerts: trial ending soon, unusual charge, duplicate subscription
- Shared subscription tracking (household / partner view)
- Export and reports
- Priority support

### Out of scope for MVP
- Full budgeting (income tracking, budget envelopes, savings goals)
- Investment tracking
- Native mobile app
- Bill negotiation
- Bill pay

---

## Business Model Hypothesis

**Model:** Freemium SaaS

**Free tier:** Enough to feel the core value - seeing your subscriptions clearly. Designed to build trust before asking for payment.

**Paid tier:** Tendd Pro, priced at approximately $4 to $6 per month (hypothesis - to be validated). Value proposition: "Pay less per month than most of the subscriptions you'll cancel."

**Assumption:** The free tier drives organic discovery and trust-building. Conversion to paid is triggered by hitting the subscription limit or wanting cancel support features.

**Secondary revenue (later stage):** Affiliate commissions on subscription cancellation recommendations. Not in MVP.

---

## Geography

**Primary markets:** United States and Europe (UK, Germany, France, Netherlands, Spain, Nordics)
**Global:** Accessible globally from launch, but support and compliance focus is US + EU first
**Regulatory note:** EU open banking (PSD2) and US bank connectivity (Plaid) have different data models. This is a meaningful architectural consideration.

---

## Design Principles

1. **Calm over clever.** Every screen should lower anxiety, not raise it. Avoid red, urgent language, and visual complexity. Prefer soft neutrals, generous whitespace, and a reassuring tone.

2. **One thing at a time.** Do not show users 10 things at once. Progressive disclosure is the default. The most important number is always the biggest thing on screen.

3. **Plain money language.** Never use financial jargon. "You're paying for 14 subscriptions" not "Monthly recurring expenditure: $247.83." Numbers are always in context.

4. **Trust through transparency.** Explain what you do with data, every time. Show the source of every figure. Never be vague about money.

5. **Small wins feel good.** Design for the moment when a user finds a forgotten subscription or saves money. That moment is the product's most important emotional beat.

---

## Tech Stack Hypothesis

- **Frontend:** Next.js (React) with Tailwind CSS - mobile-first, responsive
- **Backend:** Next.js API routes + Node.js (or separate Express service for complex integrations)
- **Database:** PostgreSQL (via Supabase or PlanetScale for managed hosting)
- **Auth:** Clerk or NextAuth.js
- **Bank data (US):** Plaid Link
- **Bank data (EU):** TrueLayer or Nordigen (now Powens/GoCardless Open Banking)
- **Payments:** Stripe (subscriptions)
- **Hosting:** Vercel (frontend) + Railway or Render (backend services)
- **Notifications:** Resend (email) + web push via service worker
- **Analytics:** PostHog (privacy-friendly, EU-compliant)

---

## Timeline (Hypothesis)

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Research Sprint | 2 weeks | This document set |
| Design Sprint | 3 weeks | Wireframes, concept, design system |
| Prototype | 2 weeks | Interactive prototype, user testing script |
| User Testing | 2 weeks | 5-8 sessions, synthesis |
| MVP Build | 8-12 weeks | Working product, free tier |
| Beta Launch | Ongoing | Paid tier, iteration |
