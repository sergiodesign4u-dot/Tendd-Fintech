# Strategy - Tendd

**Version:** v_refresh (June 11, 2026 re-run)
**Status:** Current. This file replaces research/product-model.md as the strategy source of truth.

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| v1 (as Product Model) | Phase 1 | Pre-research hypotheses |
| v2 (as Product Model) | Phase 4.5 | Validated against competitive analysis and trust benchmark |
| v_refresh (as Product Model) | June 9, 2026 | Privacy-first path added, pricing raised, J6 added |
| v_refresh (as Strategy, this file) | June 11, 2026 | Migrated Product Model to Strategy structure. AIDA retired: AARRR (research/aarrr.md) is the single funnel; AIDA messaging hooks folded into AARRR Acquisition and Activation stages. Added Business Model as an explicit section. Added Riskiest Assumption. The old file research/product-model.md is kept in place unchanged for history, with a deprecation note. |

Each section below states whether the Step 1 competitor evidence CONFIRMED, CHALLENGED, or CHANGED it, with sources.

---

## 1. Objectives

All targets are hypotheses, not commitments. Unknown = [?].

| # | Objective | Metric | Target [? hypothesis] | Evidence status (Step 1 refresh) |
|---|-----------|--------|----------------------|----------------------------------|
| O1 | Drive activation: user sees their full subscription list in session 1 | % of new users who see a populated subscription list (3+ subscriptions with a monthly total) in session 1, via either path | 35-40% within 24h | CONFIRMED. ReSubs reached 18,000+ users with no bank connection at all, proving the manual/import path can activate. Two paths to one aha moment is the design consequence. Source: [resubs.app](https://resubs.app/) |
| O2 | Build a habit of return visits | 30-day active rate | 30% free / 60% paid | CONFIRMED, with a new mechanic: ReSubs and Bobby both lean on home-screen widgets for ambient return, and PocketGuard's daily "In My Pocket" number plays the same role. Sources: [resubs.app](https://resubs.app/), [bobbyapp.co](https://bobbyapp.co/), [pocketguard.com](https://pocketguard.com/) |
| O3 | Convert free users to paid at the right trigger | Free-to-paid conversion within 90 days | 6-10% | CHANGED (raised from 5-8%). Verified live June 11: PocketGuard Plus is $12.99/mo or $74.99/yr, YNAB is $14.99/mo or $109/yr with no free tier. The audience demonstrably pays $10-15/mo, so our pricing and conversion assumptions were too conservative. Sources: [pocketguard.com/pricing/](https://pocketguard.com/pricing/), [ynab.com/pricing](https://www.ynab.com/pricing) |
| O4 | Reduce subscription overspend for users | Average $ saved per active user per month (via cancelled subscriptions) | $15-30/month | CONFIRMED. ReSubs cites forgotten subscriptions costing $204/year on average ($17/month), inside our range. Source: [resubs.app/resources/hidden-cost-of-forgotten-subscriptions](https://resubs.app/resources/hidden-cost-of-forgotten-subscriptions) |

---

## 2. Audience Segments

Three segments. Diverge-converge note: a fourth candidate segment (students managing first subscriptions, 18-22) was considered and discarded - low willingness to pay and no competitor evidence of a served market; Gen-Z money apps target spending, not recurring-spend anxiety.

### Segment A: The Anxious Millennial (Primary)

| Attribute | Detail |
|-----------|--------|
| Age | 26-36 |
| Profile | Subscription-heavy, low-to-medium financial confidence, avoids finance apps because they feel stressful or judgmental. Not financially illiterate - financially anxious. Splits into two activation paths: A1 will connect a bank if trust is earned first; A2 refuses bank connection on principle and needs an import/manual path. |
| Motivation | "I know what's going out, and I'm okay." Calm, not optimization. |
| Pain | Vague background dread of money leaking out; statement charges they cannot decode; fear that looking will make it worse. |
| JTBD | "When I suspect I'm paying for things I forgot about or never use, I want to see all my recurring charges clearly in one calm view, so that I feel in control of my money without needing to become a finance person." |
| Priority + reason | Primary. This is the unserved center of the market: every scaled competitor (Rocket Money, Emma, PocketGuard) has drifted toward the general finance user and buried the calm subscription view under feature depth. Source: research/competitive-analysis.md P2. |

**Evidence status: CONFIRMED, with the A2 privacy-first variant upgraded to equal weight.** ReSubs built an 18,000+ user product entirely on the no-bank path (4.5 stars, 718 Google Play reviews), proving A2 is a reachable segment and not an edge case. Source: [resubs.app](https://resubs.app/)

### Segment B: The Frugal 30-Something (Secondary)

| Attribute | Detail |
|-----------|--------|
| Age | 30-42 |
| Profile | Financially aware, actively trying to cut monthly spend. Searches with explicit intent ("subscription tracker," "cancel X subscription"). |
| Motivation | Concrete savings, fast. Pride in the win: "I cancelled 3 things and saved $47/month." |
| Pain | Knows money leaks exist but auditing statements is tedious; cancellation processes are deliberately hard. |
| JTBD | "When I am looking to reduce my monthly spend, I want to quickly identify which subscriptions I actually use vs which ones I keep forgetting to cancel, so that I can free up money without a complicated process." |
| Priority + reason | Secondary. Easier to acquire than Segment A (explicit search intent) but already served reasonably well by Rocket Money and Hiatus; our edge for B is the designed cancel-and-save moment, not detection. |

**Evidence status: CONFIRMED and larger than assumed.** PocketGuard's 1M+ members validate the "what am I committed to each month" framing for this segment. Source: [pocketguard.com](https://pocketguard.com/)

### Segment C: The Shared-Finances Couple (Later stage)

| Attribute | Detail |
|-----------|--------|
| Age | 28-40 |
| Profile | Two-income household, combined and duplicated subscriptions across partners. |
| Motivation | Stop paying twice; shared visibility without shared-budget bureaucracy. |
| Pain | Duplicate services (two Spotify accounts, two cloud storage plans); no view across both partners' cards. |
| JTBD | "When my partner and I want to understand household spend, I want a shared view of all our subscriptions, so we stop paying for duplicates." |
| Priority + reason | Later stage. Validated need, but every implementation (Monarch household mode, Emma collaborative budgeting 2025) confirms heavy product complexity. Out of MVP scope. |

**Evidence status: CONFIRMED as later stage.** Sources: [monarch.com](https://www.monarch.com/), [emma-app.com](https://emma-app.com/)

---

## 3. JTBD Priorities

| JTBD | Priority | Evidence status (Step 1 refresh) |
|------|----------|----------------------------------|
| J1: See all subscriptions in one calm view | Primary | CONFIRMED. Every hard competitor leads with this job. |
| J2: Feel calm and in control | Primary (fused with J1) | CONFIRMED. Calm remains unclaimed as a brand position by any competitor, including new entrant ReSubs. Source: research/competitive-analysis.md gap G1. |
| J3: Find and cancel unused subscriptions | Secondary | CONFIRMED, sharpened: ReSubs' 30+ step-by-step cancel guides validate guides as a concrete paid feature. Source: [resubs.app](https://resubs.app/) |
| J4: Be alerted to price changes and failures | Secondary | CONFIRMED. No new evidence to change. |
| J5: Understand what a charge actually is | Activation feature | CONFIRMED. Apple Card's merchant-name clarity and N26's EU merchant cleanup validate this as table stakes for trust. Sources: [support.apple.com/en-us/102329](https://support.apple.com/en-us/102329), [n26.com/en-it/blog/new-in-n26-more-clarity](https://n26.com/en-it/blog/new-in-n26-more-clarity) |
| J6: Track subscriptions without sharing bank data | Secondary (new) | CONFIRMED (added in refresh). ReSubs' entire user base does this job today. Source: [resubs.app](https://resubs.app/) |

---

## 4. Business Model

The amplifier of the product thinking, not the headline. The model only works if the calm-visibility value is real (see Riskiest Assumption).

**Model: Freemium SaaS (Tendd Pro).**

**Value exchange:**
- The user gives: attention, subscription data (via bank connection OR private import/manual entry - their choice), and eventually $7.99/month.
- The user gets: a calm, complete view of recurring spend; alerts that catch price changes and failures before they hurt; concrete cancellation help; the recovered money itself (target $15-30/month saved, which is 2-4x the subscription price).

**Free vs paid split:**
- Free: up to 2 bank connections or unlimited manual entry, up to 10 tracked subscriptions, the full calm list view with monthly total, basic alerts. The free tier is genuinely useful, limited by quantity, never by quality - it must deliver the aha moment and build trust.
- Paid (Tendd Pro): unlimited connections and subscriptions, history and trends, cancel guides and direct cancel links, advanced alerts (trial ending, duplicate, unusual charge), household view, export.

**Pricing hypothesis [? hypothesis]:** $7.99/month or $69/year, with a lifetime option to test. Positioning: "Pays for itself with the first subscription you cancel."

**Evidence status: CHANGED (price raised) and EXTENDED (lifetime option added).**
- CHANGED: the original $4-6/mo hypothesis was too conservative. Verified live June 11: PocketGuard $12.99/mo (1M+ members), YNAB $14.99/mo with no free tier at all, Emma £4.99-£14.99/mo across three paid tiers. The market price band for "feel in control of money" tools is $5-15/mo. Sources: [pocketguard.com/pricing/](https://pocketguard.com/pricing/), [ynab.com/pricing](https://www.ynab.com/pricing), [emma-app.com/plans/compare-emma-plans](https://emma-app.com/plans/compare-emma-plans)
- EXTENDED: ReSubs and Bobby both monetize with one-time purchases, which resolves the irony of a subscription to manage subscriptions. A lifetime tier (price [?], needs modeling) may convert buyers who resist recurring fees. Sources: [resubs.app](https://resubs.app/), [bobbyapp.co](https://bobbyapp.co/)
- Incentive note: we deliberately avoid bill-negotiation revenue (Rocket Money: 35-60% of first-year savings). That model profits from users having expensive problems; flat SaaS aligns our revenue with the user feeling calm and staying. Source: research/competitive-analysis.md D1.

---

## 5. Riskiest Assumption

Diverge-converge trace. Candidates considered:

1. **Trust risk:** anxious users will never connect a bank account. Discarded as THE riskiest: the privacy-first path (validated by ReSubs) removes bank connection from the critical path entirely, so the idea survives even if this is true.
2. **Pricing risk:** users will not pay $7.99/mo. Discarded as THE riskiest: PocketGuard and YNAB prove the price band exists; and if $7.99 fails, lower prices or lifetime plans are recoverable adjustments, not idea-killers.
3. **Detection feasibility risk:** recurring-charge detection accuracy. Discarded: this is a feasibility risk, not a value risk, and competitors prove it is solvable.
4. **Value risk: calm visibility is the product.** CHOSEN, below.

> **The riskiest assumption: people who feel money anxiety and avoid finance apps will actually look - that seeing their full recurring spend in a calm frame reduces their anxiety and feels like relief, rather than triggering the same avoidance that keeps them out of every other finance app.**

**Why this is the one.** The entire idea rests on it. Our primary segment is defined by avoidance behavior. Every competitor's growth evidence (Rocket Money's 10M+, PocketGuard's 1M+, ReSubs' 18K+) comes from users motivated enough to seek out a money tool - it tells us nothing about whether avoiders will engage. The market gap we found ("no calm subscription tracker exists") has a dark interpretation: maybe the gap exists because the avoidant segment cannot be activated by any framing. If avoiders will not look, there is no activation, no retention, no conversion, and Tendd collapses into yet another tracker for already-motivated users - a market Rocket Money and ReSubs already serve.

**What the competitor evidence says:** CANNOT CONFIRM. No competitor targets this segment with this promise, so the refresh found no evidence either way. This is exactly why it must be tested first, on real users, before build.

**Smallest test [? to run in user testing phase]:** a clickable "calm reveal" prototype with sample data, shown to 5-8 people screened for financial-avoidance behavior (they self-report not checking statements and feeling dread about money). Measure: (1) do they complete the reveal or disengage, (2) self-reported emotional state after seeing the total (relief vs. spike of stress), (3) do they ask to try it on their own subscriptions. Pass signal: a majority report relief and ask for the real thing.
