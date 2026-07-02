# Product Model

> **DEPRECATED (June 11, 2026).** This file is kept for history only. The current strategy source of truth is [research/docs/strategy.md](./strategy.md), which migrates objectives, segments, JTBD and the business model into the Strategy structure and adds the riskiest assumption. AIDA is retired: AARRR ([research/docs/aarrr.md](./aarrr.md)) is the single funnel, and the useful AIDA messaging hooks were folded into its Acquisition and Activation stages.

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| v1 | Phase 1 | Pre-research hypotheses based on brief reasoning only |
| v2 | Phase 4.5 | Updated after Phase 3 (competitive analysis) and Phase 4 (benchmark) - hypothesis-to-validation loop |
| v_refresh | June 2026 re-run | Updated after deepened competitor research: ReSubs, PocketGuard, Simplifi, N26, Nubank added. Key changes: pricing hypothesis raised, privacy-first user path added as explicit variant of Segment A, J6 (no-bank-access job) added, AIDA updated with privacy path. |

---

# v_refresh - Current (June 2026 re-run)

---

## 1. Product Objectives

| # | Objective | Metric | Target | v_refresh status |
|---|-----------|--------|--------|-----------------|
| O1 | Drive activation - user sees their full subscription list in session 1 | % of new users who see a populated subscription list in session 1 | 35-40% within 24h [? hypothesis] | CONFIRMED. ReSubs' growth (18K+ users without bank connection) confirms that even manual/import flows can reach activation. Two paths to the same aha moment must be designed. Source: [resubs.app](https://resubs.app/) |
| O2 | Build a habit of return visits | 30-day active rate | 30% free / 60% paid [? hypothesis] | CONFIRMED. No new data to challenge. ReSubs' widget/calendar view approach (subscription calendar visible on home screen) suggests an ambient return mechanic worth studying. |
| O3 | Convert free users to paid at the right trigger | Free-to-paid conversion within 90 days | CHANGED to 6-10% [? hypothesis] | CHANGED upward. Refresh reveals PocketGuard at $12.99/mo (1M+ members) and YNAB at $14.99/mo show our target audience does pay $10-15/mo. Original $4-6/mo hypothesis was likely too conservative. Raising target conversion range; also now testing whether a lifetime plan option (as ReSubs offers) reduces churn anxiety. Source: [pocketguard.com/pricing/](https://pocketguard.com/pricing/), [ynab.com/pricing](https://www.ynab.com/pricing) |
| O4 | Reduce subscription overspend for users | Average $ saved per active user per month | $15-30/month [? hypothesis] | CONFIRMED and now has sharper data: ReSubs' research states "forgotten subscriptions cost $204/year on average" ($17/month). Source: [resubs.app/resources/hidden-cost-of-forgotten-subscriptions](https://resubs.app/resources/hidden-cost-of-forgotten-subscriptions). Our $15-30 range straddles this figure credibly. |

---

## 2. Audience Segments

### Segment A: The Anxious Millennial (Primary - CONFIRMED with new variant)

**v_refresh status: CONFIRMED with new privacy-first variant identified.**

Core profile unchanged. New finding from refresh: ReSubs' 18K+ users with 4.5 Google Play rating represent a sub-segment within Segment A who actively avoid bank connection, not just because they are anxious but because they are privacy-aware. This is a real product path, not just an edge case. We should design two explicit activation paths: bank-connected (auto-detect) and privacy-first (AI import / manual). Source: [resubs.app](https://resubs.app/)

| Attribute | v2 | v_refresh | Change source |
|-----------|-----|-----------|--------------|
| Age | 26-36 | 26-36 | No change |
| Profile | Anxious, financial-avoidance behavior, skeptical of data sharing | Confirmed + split into two sub-paths: (A1) willing to connect bank if trust is earned; (A2) prefers no bank connection at all - will use AI import or manual | ReSubs growth validates A2 as a real distinct path |
| Priority | Primary | Primary - unchanged | Confirmed |
| JTBD (primary) | "...see all my recurring charges clearly in one calm view..." | CONFIRMED | All competitor value propositions center this job |
| Trust barrier | Larger than assumed (v2 refinement) | CONFIRMED still the biggest design challenge. Privacy-first path (A2) resolves the trust barrier entirely by removing bank access. | ReSubs existence and growth validates this design direction |

### Segment B: The Frugal 30-Something (Secondary - CONFIRMED, larger than assumed)

**v_refresh status: CONFIRMED and addressable segment appears larger than assumed.**

PocketGuard's 1M+ members (source: [pocketguard.com](https://pocketguard.com/)) is the strongest new data point. Their audience - people who want to understand where money goes and find spending leaks - is a confirmed large segment. PocketGuard is not focused on subscriptions specifically, which leaves room for a subscription-first product to serve Segment B better.

**New refinement:** Segment B responds to the "In My Pocket / safe to spend" framing that PocketGuard has validated. A variant for Tendd: "Based on your subscriptions, here is what you are committing each month before you even start spending." This framing is complementary to the Guided Reveal pattern.

### Segment C: The Shared-Finances Couple (Later Stage - CONFIRMED)

No change from v2. Monarch Money's shared household mode and Emma's collaborative budgeting (2025) validate the need but confirm product complexity. Later stage.

---

## 3. JTBD - Updated Priority

| JTBD | v2 Priority | v_refresh Priority | Change |
|------|------------|-------------------|--------|
| J1: See all subscriptions in one calm view | Primary | Primary - CONFIRMED | All competitors lead with this |
| J2: Feel calm and in control | Primary (linked to J1) | Primary - CONFIRMED | Monzo benchmark; calm remains unoccupied as a brand position |
| J3: Find and cancel unused subscriptions | Secondary | Secondary - CONFIRMED, cancel guides now validated | ReSubs' 30+ cancel guides confirm users value step-by-step cancellation help. This is a paid-tier feature worth investing in. Source: [resubs.app](https://resubs.app/) |
| J4: Be alerted to price changes and failures | Secondary | Secondary - CONFIRMED | No new evidence to change. |
| J5: Understand what a charge is | Activation feature (added v2) | CONFIRMED as core activation feature | Apple Card mechanism confirmed; N26's merchant name clarity (source: [n26.com/en-it/blog/new-in-n26-more-clarity](https://n26.com/en-it/blog/new-in-n26-more-clarity)) adds EU validation |
| J6: Track subscriptions without sharing bank data | Not listed previously | NEW - Secondary, privacy-first path | ADDED: ReSubs' 18K+ users validate this as a real distinct JTBD. "When I want full visibility of my subscriptions but do not want to connect my bank account, I want a quick way to import or enter them, so that I stay private but still see the complete picture." Source: [resubs.app](https://resubs.app/) |

---

## 4. AIDA Per Segment - Updated

### Segment A: The Anxious Millennial

| Stage | Channel | Message | Mechanic | v_refresh change |
|-------|---------|---------|---------|-----------------|
| Attention | TikTok, Reddit r/personalfinance, Instagram Reels | "Found out I was paying for 6 subscriptions I forgot about" | UGC-style subscription list reveal | CONFIRMED unchanged |
| Interest | Landing page | "See all your subscriptions in one calm view - no bank required to get started" | Product preview with dual CTA: "Connect your bank" and "Start without connecting" | CHANGED: privacy-first path (no bank required) must be explicitly offered on landing based on ReSubs validation. Source: [resubs.app](https://resubs.app/) |
| Desire | Onboarding (both paths) | Bank path: "Here's what we found." Privacy path: "Here's what you've added - want us to check for more?" | Guided Reveal for both paths; bank path is faster, privacy path is trust-first | REFINED: both paths must lead to the same aha moment via different routes |
| Action | In-app upgrade prompt | "Find your full history and cancel easily - try Pro" | Trigger at moment of discovering a forgotten subscription | CONFIRMED unchanged |

### Segment B: The Frugal 30-Something

| Stage | Channel | Message | Mechanic | v_refresh change |
|-------|---------|---------|---------|-----------------|
| Attention | Google search, Reddit, newsletters | "The cleanest way to cut subscriptions in 5 minutes" | SEO content, comparison articles | CONFIRMED unchanged |
| Interest | Landing page | "See exactly what you're committing to each month before you spend anything else" | Subscription total as a monthly commitment number - framing borrowed from PocketGuard's "safe to spend" approach | REFINED: PocketGuard's 1M+ users validate the "what am I committed to?" framing. Source: [pocketguard.com](https://pocketguard.com/) |
| Desire | Onboarding | "You're committing $247/month before anything else. Here are 3 you might want to cancel." | Personalized savings estimate + cancel guides | CONFIRMED + cancel guides now explicitly part of desire mechanic (validated by ReSubs 30+ guides) |
| Action | Cancel assist / upgrade | "Cancel with a step-by-step guide - included in Pro" | Step-by-step cancel guides as a Pro feature | REFINED: ReSubs validates that 30+ cancel guides are a differentiating premium feature worth building. Source: [resubs.app](https://resubs.app/) |

---

## 5. AIDA to AARRR Mapping (CONFIRMED - no structural change)

| JTBD Stage | AIDA Stage | AARRR Stage | Primary Metric |
|------------|------------|-------------|----------------|
| Pre-awareness | - | Acquisition | New signups per week |
| First visit | Attention | Acquisition | Traffic to landing page |
| Landing page | Interest | Acquisition + Activation | Bounce rate, sign-up rate |
| First session | Desire | Activation | Account connected OR 3+ subs added OR AI import completed |
| First value moment | Desire | Activation | "Aha moment" - saw their full subscription list (via any path) |
| Return visit | - | Retention | 7-day return rate |
| Habit formation | - | Retention | 30-day active rate |
| Upgrade trigger | Action | Revenue | Free-to-paid conversion |
| Tell a friend | - | Referral | NPS, referral link usage |

Note: "Account connected OR 3+ subs added OR AI import completed" reflects the new dual-path design (bank-connected and privacy-first) both counting toward the activation metric.

---

# v2 - Validated (archived, superseded by v_refresh above)

---

---

## 1. Product Objectives

| # | Objective | Metric | Target | v1 vs v2 |
|---|-----------|--------|--------|---------|
| O1 | Drive activation - user sees their full subscription list in session 1 | % of new users who see a populated subscription list in session 1 | 35-40% within 24h [? hypothesis] | CONFIRMED: Activation = "aha moment" confirmed by Phase 3 (all bank-connected competitors use this as their primary activation metric). Target unchanged. |
| O2 | Build a habit of return visits | 30-day active rate | 30% free / 60% paid [? hypothesis] | CONFIRMED: Weekly email digest confirmed as key retention mechanic by benchmark analysis. Target unchanged - no public competitor data to validate or challenge. |
| O3 | Convert free users to paid at the right trigger | Free-to-paid conversion within 90 days | 5-8% [? hypothesis] | CHALLENGED: Phase 3 shows Monarch Money's no-free-tier model works at $14.99/mo, suggesting willingness to pay is higher than assumed. We are keeping freemium but flagging that free tier may not need to be as generous as originally hypothesized. |
| O4 | Reduce subscription overspend for users | Average $ saved per active user per month | $15-30/month [? hypothesis] | CONFIRMED: Rocket Money claims average member saves $700+/year ($58+/month). Our more conservative target ($15-30) is realistic for a focused subscription tracker without bill negotiation. Source: rocketmoney.com |

---

## 2. Audience Segments

### Segment A: The Anxious Millennial (Primary - CONFIRMED)

**v1 vs v2 status: CONFIRMED with one refinement.**

The core profile is confirmed. Phase 3 evidence: Rocket Money's 10M+ user base skews toward this profile (mobile-first, casual about finance, motivated by subscription discovery). Monzo's publicly documented tone-of-voice design principles confirm that "financial anxiety" is a real design constraint for the segment: "We handle sensitive topics like debt and mental health with genuine care rather than humor." Source: [monzo.com/tone-of-voice](https://monzo.com/tone-of-voice)

**Refinement from research:** The trust barrier before bank connection is larger than initially assumed. The competitive analysis shows every auto-detecting competitor asks for bank access in step 1 or 2 - and no competitor earns trust before asking. This is an unaddressed pain point that makes Segment A's bank connection anxiety a design challenge that no current product has solved. This makes our progressive-trust approach (C8 in benchmark) more critical, not less.

| Attribute | v1 | v2 (validated) | Change source |
|-----------|-----|---------------|--------------|
| Age | 26-36 | 26-36 | No change |
| Profile | Anxious non-financial, subscription-heavy | Confirmed. Also: skeptical of financial data sharing; likely has "financial avoidance" behavior | Monzo writing principles; benchmark analysis |
| Priority | Primary | Primary - unchanged | Confirmed by Phase 3 and Phase 4 |
| JTBD | "...I want to see all my recurring charges clearly in one calm view..." | CONFIRMED | Rocket Money's "see everything" core messaging validates the job |

### Segment B: The Frugal 30-Something (Secondary - CONFIRMED)

**v1 vs v2 status: CONFIRMED with higher acquisition potential than expected.**

Phase 3 shows that Rocket Money's top user testimonial is explicitly from this segment: "saved me over $200 in the first week." The "find and cancel" use case has the highest emotional payoff and the most shareable story. This segment may be easier to acquire than Segment A because their intent is explicit (they are searching for "subscription tracker") rather than ambient (they know they need something but cannot name it).

**Refinement from research:** This segment is already served reasonably well by Rocket Money and Hiatus. The differentiation for Segment B is not finding subscriptions (competitors do this) but making the cancel-and-save moment more satisfying, celebrated, and easy. Source: Phase 3 competitive analysis gap #4 (cancel moment as designed emotional experience).

### Segment C: The Shared-Finances Couple (Later Stage - CONFIRMED)

**v1 vs v2 status: CONFIRMED as later stage. More complex than assumed.**

Phase 3 shows Emma added collaborative budgeting in 2025, and Monarch Money has a shared household mode. This validates the use case but also confirms it is a product complexity investment. No competitor has nailed the shared subscription view without adding full shared budgeting, which is out of scope. This remains later stage.

---

## 3. JTBD - Updated Priority

| JTBD | v1 Priority | v2 Priority | Change |
|------|------------|------------|--------|
| J1: See all subscriptions in one calm view | Primary | Primary - CONFIRMED | Confirmed by all competitor value propositions |
| J2: Feel calm and in control | Primary (linked to J1) | Primary - CONFIRMED | Confirmed by Monzo benchmark: "calm" is a design outcome, not just a feeling |
| J3: Find and cancel unused subscriptions | Secondary | Secondary - CONFIRMED, higher acquisition value | Rocket Money's "#1 testimonial" pattern confirms this JTBD drives the most shareable outcome |
| J4: Be alerted to price changes and failures | Secondary | Secondary - CONFIRMED as retention driver | Phase 4 benchmark: price-change alerts are the highest-ROI retention mechanic |
| J5: Understand what a charge is | Not explicitly listed | ADDED as activation feature | Benchmark: Apple Card's transaction-clarity mechanism directly addresses this; it belongs in our MVP |

---

## 4. AIDA Per Segment - Updated

Changes from v2 research are noted inline.

### Segment A: The Anxious Millennial

| Stage | Channel | Message | Mechanic | v2 Change |
|-------|---------|---------|---------|---------|
| Attention | TikTok, Instagram Reels, Reddit (r/personalfinance, r/frugal) | "Found out I was paying for 6 subscriptions I forgot about" | UGC-style content, subscription list reveal | CONFIRMED: Rocket Money testimonial content uses this exact hook ("saved $200 in the first week") |
| Interest | Landing page | "See all your subscriptions in one calm view - no jargon, no stress" | Product preview with real subscription logos, no numbers until opted in | REFINED: Add progressive trust - show what the product looks like before asking for anything |
| Desire | Free tier / onboarding | "You're paying for 14 subscriptions - here are 2 you might want to look at" | Show subscription list, highlight 1-2 with "last used" or price-change data | REFINED: "Calm reveal" not "alarm reveal" - Monzo principle: no judgment, celebrate the small win |
| Action | In-app upgrade prompt | "Find all your history and cancel the ones you don't need - try Pro" | Trigger at the moment of discovering a forgotten subscription | CONFIRMED as the right trigger by Phase 3 competitive gap analysis |

### Segment B: The Frugal 30-Something

| Stage | Channel | Message | Mechanic | v2 Change |
|-------|---------|---------|---------|---------|
| Attention | Google search, Reddit, newsletters | "The cleanest way to cut subscriptions in 5 minutes" | SEO content, comparison articles | CONFIRMED: High-intent search behavior confirmed by competitor SEO strategies |
| Interest | Landing page features | "See exactly which subscriptions you're paying for - with real names and logos, not bank codes" | Transaction clarity feature (Apple Card mechanism #3) | ADDED: Transaction clarity is now a named feature, not just a functional detail |
| Desire | Onboarding | Savings estimate: "Based on your subscriptions, you could save $X by cancelling these" | Personalized savings prompt | CONFIRMED: Rocket Money uses this exact pattern ("$700+ average savings") |
| Action | Cancel assist | "Cancel in one click - we'll show you how" | Direct cancel link + cancel guide | CONFIRMED: Cancel assist is a key paid-tier differentiator for all competitors |

---

## 5. AIDA to AARRR Mapping (Unchanged - CONFIRMED)

The v1 mapping is confirmed valid by Phase 3 and Phase 4. No structural changes needed.

| JTBD Stage | AIDA Stage | AARRR Stage | Primary Metric |
|------------|------------|-------------|----------------|
| Pre-awareness | - | Acquisition | New signups per week |
| First visit | Attention | Acquisition | Traffic to landing page |
| Landing page | Interest | Acquisition + Activation | Bounce rate, sign-up rate |
| First session | Desire | Activation | Account connected OR 3+ subs added |
| First value moment | Desire | Activation | "Aha moment" - saw their full subscription list |
| Return visit | - | Retention | 7-day return rate |
| Habit formation | - | Retention | 30-day active rate |
| Upgrade trigger | Action | Revenue | Free-to-paid conversion |
| Tell a friend | - | Referral | NPS, referral link usage |

---

# v1 - Pre-Research Hypotheses (Archived)

The original v1 content is below for reference. Do not use for design decisions - use v2 above.

## 1. Product Objectives (v1)

| # | Objective | Metric | Target (Hypothesis) |
|---|-----------|--------|---------------------|
| O1 | Drive activation - get users to see real value in the first session | % of new users who connect a bank account or add 3+ subscriptions in session 1 | 40% within 24 hours of signup [? hypothesis] |
| O2 | Build a habit of return visits | 30-day retention rate for free users | 30% DAU/MAU [? hypothesis] |
| O3 | Convert free users to paid | Free-to-paid conversion rate | 5 to 8% within 90 days [? hypothesis] |
| O4 | Reduce subscription overspend for users | Average $ saved per active user per month (tracked via cancelled subscriptions) | $15 to $30/month [? hypothesis] |

## 2. Audience Segments (v1)

See segment descriptions in original commit. All three segments retained in v2 with updates noted above.

## 3. JTBD (v1)

J1 through J6 scored by frequency/intensity/WTP. J1 + J2 as combined primary, J3 + J4 as secondary. J5 added in v2 as activation feature based on Apple Card benchmark.

## 4. AIDA Per Segment (v1)

Original AIDA tables archived. v2 tables above reflect research-validated updates.
