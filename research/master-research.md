# Master Research Synthesis - Tendd

**Single source of truth. Uses validated v2 product model. All facts cited.**
**Version:** Post Phase 4.5 (June 2026)

---

## 1. Introduction

### Purpose
This document synthesizes all research phases into one reference: product model, competitive landscape, trust benchmark, and UX pattern rationale. It is the foundation for wireframe and design decisions.

### The Problem
The average consumer now manages 12 active subscriptions spending over $273/month on recurring services (source: [resubs.app/resources/best-subscription-tracker-apps](https://resubs.app/resources/best-subscription-tracker-apps)). Most people have forgotten at least one. They feel a vague background anxiety about money "leaking out," but they avoid finance apps because those apps feel stressful, judgmental, or overwhelming.

### Our Approach
Build a mobile-first web app that reduces financial anxiety through calm, clear visibility of recurring spend. Not a budgeting app. Not a financial management suite. One job: show users what they pay for, simply and without judgment.

### Key Conclusions

1. **The market is full of powerful apps and empty of peaceful ones.** Every major competitor has expanded into full financial management, trading calm clarity for feature depth. The unoccupied position is "the calm subscription tracker."

2. **Trust must be earned before data is asked for.** Every bank-connected competitor asks for bank access in step 1 or 2 of onboarding, before earning trust. This is the single biggest UX gap across the category.

3. **The cancel-and-save moment is the most emotionally powerful moment in the product** - and no competitor has designed it as a positive experience. It is the natural upgrade trigger and the most shareable moment.

4. **Plain language and active voice in financial communication are industry best practices** (Monzo has made this public design principle), but no subscription tracker has made it a core differentiator.

5. **The EU market is underserved** at the calm, simple end of the subscription tracker category. Emma has EU coverage but is complex and feature-heavy. Bobby is simple but iOS-only and manual.

### Approach Note
All competitor data was gathered from public pre-login pages via web search and Playwright. Scores and observations reflect public product surfaces only. Anything [? behind login] was not accessible.

---

## 2. Product Model (v2 - Validated)

### Segments

| Segment | Profile | JTBD | Priority | Research Status |
|---------|---------|------|----------|----------------|
| A: Anxious Millennial | 26-36, financially anxious, subscription-heavy, avoids finance apps | "When I suspect I'm paying for things I forgot about, I want to see all my recurring charges in one calm view, so that I feel in control without becoming a finance person." | Primary | CONFIRMED - Rocket Money's user base and Monzo's design principles validate this profile. Trust barrier is larger than assumed. |
| B: Frugal 30-Something | 30-42, financially aware, wants to optimize and cut | "When I'm trying to reduce monthly spend, I want to see which subscriptions I actually use vs. don't, so that I can free up money quickly." | Secondary | CONFIRMED with note: higher acquisition potential than assumed because intent is explicit (they are searching for the product). |
| C: Shared-Finances Couple | 28-40, two-income household, combined subscriptions | "When my partner and I want to understand household spend, I want a shared view of all our subscriptions, so that we stop paying for duplicates." | Later stage | CONFIRMED as later stage. Emma and Monarch added shared modes in 2025 - validates need but also confirms product complexity. |

### AIDA (Segment A - Primary)

| Stage | Channel | Message | Mechanic |
|-------|---------|---------|---------|
| Attention | TikTok, Reddit r/personalfinance, Instagram Reels | "Found out I was paying for 6 subscriptions I forgot about" | UGC-style subscription list reveal, no jargon |
| Interest | Landing page | "See all your subscriptions in one calm view - no stress, no jargon" | Product preview with real logos, progressive trust before asking for anything |
| Desire | Onboarding first session | Guided reveal: "Here's your monthly total. Here's what's in it. Here are 2 you might want to look at." | One number, one insight, zero judgment |
| Action | Post-reveal upgrade trigger | "Find your full history and cancel easily - try Pro" | Trigger at moment of discovering a forgotten subscription |

---

## 3. AARRR Funnel

```
ACQUISITION
  Channels: TikTok/Reddit organic, SEO ("subscription tracker"), word of mouth
  Key metric: New signups/week
  MVP target: 100/week at 3 months [? hypothesis]
        |
        v
ACTIVATION
  Trigger: User sees their full subscription list (the "aha moment")
  Key mechanic: Guided Reveal onboarding (Pattern C)
  Key metric: % who see subscription list in session 1
  MVP target: 35-40% within 24h [? hypothesis]
        |
        v
RETENTION
  Mechanics: Weekly email digest + price-change alerts
  Key metric: 30-day active rate
  MVP target: 30% free / 60% paid [? hypothesis]
        |
        v
REVENUE
  Trigger: Finding forgotten subscription OR hitting free tier limit
  Model: Freemium, Tendd Pro ~$4-6/mo [? hypothesis]
  Key metric: Free-to-paid conversion within 90 days
  MVP target: 5-8% [? hypothesis]
        |
        v
REFERRAL
  Mechanic: Shareable subscription snapshot (Spotify Wrapped-style)
  Key metric: % new signups from referral
  MVP target: 15-20% at 6 months [? hypothesis]
```

### Metrics Table

| Stage | Primary Metric | MVP Target | Status |
|-------|---------------|-----------|--------|
| Acquisition | New signups/week | 100/week at 3 months | [? hypothesis] |
| Activation | % who see subscription list in session 1 | 35-40% within 24h | [? hypothesis] |
| Retention | 30-day active rate | 30% free / 60% paid | [? hypothesis] |
| Revenue | Free-to-paid conversion, 90 days | 5-8% | [? hypothesis - Monarch's no-free-tier model suggests WTP may be higher] |
| Referral | % signups from referrals | 15-20% at 6 months | [? hypothesis] |

### MVP Product Decisions (one per stage)

1. **Acquisition:** Build a shareable "subscription snapshot" card (total + count) before building a formal referral program.
2. **Activation:** Design the entire onboarding around the Guided Reveal pattern - one job, one screen, maximum one step before showing value.
3. **Retention:** Ship the weekly email digest on day 1.
4. **Revenue:** The upgrade trigger lives immediately after the "forgotten subscription discovery" moment.
5. **Referral:** The snapshot card is the referral mechanic. No formal program in MVP.

---

## 4. Competitive Landscape

### Competitor Matrix

| Product | Audience | Product Foundation | Key Mechanisms | Trust Signals | Monetization |
|---------|---------|-------------------|---------------|--------------|-------------|
| Rocket Money | Broad US, 10M+ members | All-in-one: subscriptions, budgeting, credit, net worth | Plaid auto-detect, cancellation concierge, bill negotiation | 10M+ members, $2.5B savings claim, FDIC banking | Free + $7-14/mo (user-chosen) + 35-60% bill savings |
| Emma | UK/EU millennials, 2M+ | Full money app: subscriptions, budgeting, investing, payments | FCA open banking, subscription detection, collaborative budgets | FCA regulated, Forbes/FT logos, 2M+ users | Free + £4.99-14.99/mo (3 tiers) |
| Hiatus | US expense-reducers | Subscription + bill negotiation + light budget | Auto-detect, flat-fee bill negotiation, rate comparison | 2,000+ 5-star reviews, phone support | Free + $9.99/mo or $35.99/yr |
| Bobby | iOS privacy-conscious | Manual subscription tracker only | Manual entry, reminders, calendar view | 4.7 App Store (8K reviews), no bank access | Free + one-time IAP |
| YNAB | Committed budgeters | Zero-based budgeting system | Rules-based allocation, goal tracking, workshops | $6K avg yr 1 savings, 4.8 App Store, strong community | No free tier. $14.99/mo or $109/yr |

Sources: [rocketmoney.com](https://www.rocketmoney.com/), [emma-app.com](https://emma-app.com/), [hiatusapp.com](https://hiatusapp.com/), [bobbyapp.co](https://bobbyapp.co/), [ynab.com](https://www.ynab.com/)

### 3 Common Patterns

**P1: Bank connection as primary activation path.** All auto-detection competitors use bank linking as step 1. This is the fastest route to value but also the biggest trust barrier for the anxious user. Source: Phase 3 competitive-analysis.md.

**P2: Feature accumulation crowds out the core.** Every subscription tracker that gained scale expanded into full personal finance. The original calm, simple subscription view is buried under feature depth. Source: Phase 3 competitive-analysis.md.

**P3: Freemium with aggressive upsell.** All products push upgrade prompts. Emma is specifically noted for this problem: "constant prompts disrupt an otherwise smooth experience." Source: [orbitmoney.io/compare/emma-app-review](https://orbitmoney.io/compare/emma-app-review).

### 3 Key Differences

**D1: Auto-detection vs. manual entry.** Rocket Money/Emma/Hiatus auto-detect via bank. Bobby requires manual entry. These are fundamentally different trust models - neither fully solves the anxious user's bank-connection barrier.

**D2: Focused vs. all-in-one scope.** Bobby and YNAB have strong niche identities. The all-in-one products have higher churn risk and lower per-feature satisfaction.

**D3: Data sharing transparency.** Monarch Money explicitly states "we do not sell your data" (source: [thepennyhoarder.com/budgeting/monarch-money-review/](https://www.thepennyhoarder.com/budgeting/monarch-money-review/)). No competitor makes data use a front-page trust signal.

### Gaps Table (What's Missing)

| Gap | Source citation | Our response |
|-----|----------------|-------------|
| Calm as a first-class design principle - nobody has made it a commitment | Phase 3, competitive-analysis.md pattern P1/P2 | Core design principle #1 in CLAUDE.md |
| Plain language as a brand pillar - all competitors use some jargon | Phase 4, benchmark-trust.md Monzo observation | Active voice + real merchant names in every string |
| Progressive trust-building before bank connection | Phase 3 gap analysis + Phase 4 benchmark C8 (pre-bank value) | Guided Reveal onboarding shows value before asking for bank access |
| The cancel moment as a designed positive emotional experience | Phase 3 gap analysis #4 | Cancel discovery = "win" moment; upgrade trigger |
| EU-native calm subscription tracker (simple, not full-finance) | Phase 3 - Emma is EU but complex; Bobby is simple but iOS-only | Cross-platform web-first, EU open banking support |

---

## 5. Benchmark: Trust and Clarity

### Score Table

| Product | C1 First Screen | C2 Data Transparency | C3 Calm Money | C4 Onboarding Friction | C5 Social Proof | C6 User Control | C7 Error Honesty | C8 Pre-Bank Value | Total /40 |
|---------|----------------|---------------------|--------------|----------------------|----------------|----------------|-----------------|------------------|-----------|
| Revolut | 5 | 3 | 4 | 4 | 4 | 4 | 3 | 3 | 30 |
| Monzo | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 3 | 33 |
| Apple Card | 5 | 5 | 5 | 4 | 3 | 4 | 4 | 4 | 34 |
| Copilot Money | 4 | 3 | 4 | 3 | 3 | 4 | 3 | 2 | 26 |
| YNAB | 3 | 4 | 3 | 2 | 4 | 3 | 4 | 2 | 25 |

Source: research/benchmark-trust.md. Scores from public pages only; [? behind login] for app interiors.

### Top 3 Mechanisms to Carry to MVP

**M1: Active Voice + First-Person Responsibility (Monzo)**
Principle: "Say who did the thing." "We couldn't take this payment" not "payment declined." Apply to every notification, error, and alert. Source: [monzo.com/tone-of-voice](https://monzo.com/tone-of-voice)

**M2: Pre-emptive Trust Declaration - Name the Fear (Apple Card)**
Mechanism: State directly what users fear you are doing with their data, then deny it with specifics. "We don't sell your data. Here's exactly what we read from your bank: [list]." Source: [apple.com/newsroom/2019/03/introducing-apple-card...](https://www.apple.com/newsroom/2019/03/introducing-apple-card-a-new-kind-of-credit-card-created-by-apple/)

**M3: Transaction Clarity Layer - Real Names and Logos (Apple Card)**
Mechanism: Replace cryptic bank codes with real merchant names, logos, and categories. "Spotify Premium" not "SPOTIFYAB STOCKHOLM." Source: [support.apple.com/en-us/102329](https://support.apple.com/en-us/102329)

### Mechanism That Will NOT Work: YNAB Zero-Based Budgeting
Requires too much configuration and discipline for the anxious non-financial user. "Most people take 2-4 months to get it." Our user needs calm in session 1, not a 3-month learning curve. Source: [nerdwallet.com - YNAB Review](https://www.nerdwallet.com/finance/learn/ynab-app-review)

---

## 6. UX Patterns

### Chosen Primary Pattern: Guided Reveal (onboarding) + Automated Dashboard (return sessions)

**3 Reasons:**

1. **Solves the avoidance problem (BP1).** The Guided Reveal gives the anxious user one thing to do: "let me show you." No choices, no empty dashboard, no configuration. Source: research/ux-patterns.md behavioral pattern BP1.

2. **Fills the competitive gap.** No competitor has designed the first subscription view as an emotional experience. The Guided Reveal is directly analogous to Spotify Wrapped - a reveal of personal data as a satisfying moment. Source: research/competitive-analysis.md gap #4, Phase 5 ux-patterns.md.

3. **Creates the natural upgrade trigger.** The Guided Reveal ends at the moment of highest motivation - after seeing the subscription list, the user is ready to act. The upgrade to paid lives here. Source: research/aarrr.md Revenue stage MVP decision.

### Alternative Under Condition X

If bank connection adoption is below 20% in the first 3 months: switch primary path to Pattern B (Manual Calendar) + Pattern C (Guided Reveal) overlay. Source: research/ux-patterns.md pattern selection.

### Pattern That Does NOT Fit: Conversational / AI-Assisted

Requires too much cognitive load for the anxious scan-first user. The product must be glanceable (3 seconds to "how much am I paying, what's new"). A conversation takes 10-30 seconds minimum. Opposite of our calm clarity differentiator. Source: research/ux-patterns.md.

---

## 7. Conclusions

### Gaps Table (Each With Source)

| Gap | Source | Priority |
|-----|--------|---------|
| No calm-first subscription tracker exists | Phase 3 competitive analysis, Pattern P2 (feature accumulation) | Critical |
| No competitor earns trust before asking for bank access | Phase 4 benchmark C8 (pre-bank value) - best score is 4/5 (Apple Card) | Critical |
| Cancel/discover moment is never designed as a positive experience | Phase 3 gap analysis #4 | High |
| Plain language / no jargon is not a product differentiator for anyone | Phase 4 Monzo benchmark - principle exists but not used as market position | High |
| EU subscription tracker at the simple end of market | Phase 3 - Emma has EU but is complex; Bobby is simple but iOS-only | High |
| Data use transparency is not front-page for any direct competitor | Phase 3 D3 (data sharing model) | Medium |

### 6 Hypotheses (If / Then / Because)

**H1: If** we show users their subscription list before asking for bank connection (demo mode or sample data), **then** bank connection rate will be higher than competitors' first-step bank request, **because** users who see the value first have a concrete reason to share their data.

**H2: If** we frame the first subscription reveal as a "Wrapped-style" calm discovery moment rather than a financial report, **then** the share rate and return visit rate will be significantly higher than industry benchmarks, **because** the emotional valence of a positive discovery is more memorable and shareable than a financial audit. Evidence: Spotify Wrapped's viral sharing behavior.

**H3: If** we use active voice, real merchant names, and plain-language notifications for every financial communication, **then** user trust scores and notification engagement will be higher than email/push averages for the fintech category, **because** Monzo's published research shows that plain language is rated as more authoritative than formal financial language, and active voice creates the psychological experience of being informed rather than managed. Source: [monzo.com/tone-of-voice](https://monzo.com/tone-of-voice)

**H4: If** the upgrade trigger is placed immediately after a user discovers a forgotten subscription (not on a generic "get more features" paywall), **then** free-to-paid conversion will exceed the 5-8% hypothesis, **because** the emotional peak of "I found money I was wasting" is the highest-motivation moment in the entire user journey. Evidence: Rocket Money's top testimonials all reference this moment.

**H5: If** the free tier allows up to 10 subscriptions with full feature access (not a degraded experience), **then** word-of-mouth referral rate will exceed 15%, **because** a product that feels genuinely useful (not crippled) generates positive stories, while a "limited free tier" generates resentment. Evidence: Bobby's high App Store rating (4.7) is driven by users who get full value from the free tier (one-time purchase model).

**H6: If** we launch with EU open banking support (TrueLayer or Nordigen) alongside US Plaid, **then** EU market activation rates will match US rates within 6 months, **because** there is no calm EU-native subscription tracker at the simple end of the market, and EU open banking adoption is growing under PSD2. Evidence: Emma's success in the UK/EU market (2M+ users) despite high complexity, suggesting unmet demand for a simpler alternative. Source: [emma-app.com](https://emma-app.com/)

### Open Questions Table

| Question | Why It Matters | How to Answer |
|----------|---------------|---------------|
| What % of our users will connect a bank account vs. use manual entry? | This is the core activation design decision | MVP A/B test: bank connection in step 1 vs. demo-first then bank connection |
| What is the right free tier limit (subscriptions count, features, or time)? | Free tier generosity drives WTP and word of mouth | User research: interview 10 free users about what would make them upgrade |
| Does the "Guided Reveal" onboarding work for users with only 2-3 subscriptions? | If the reveal is underwhelming for small users, the pattern fails for low-subscription users | Prototype test with users who have <5 subscriptions |
| Is $4.99/mo or $6.99/mo the right price point for Tendd Pro? | Pricing affects conversion rate, LTV, and positioning | Pricing page A/B test after launch; Van Westendorp price sensitivity survey in user research |
| What EU open banking provider has the best reliability and coverage for our markets? | TrueLayer vs. Nordigen (GoCardless) vs. Powens have different coverage/reliability | Technical evaluation: build a proof-of-concept against both and measure real coverage |
| How long does it take for a new user to see their first subscription via bank sync? | If sync takes >60 seconds, the Guided Reveal pattern fails at activation | Technical benchmark during early development |
