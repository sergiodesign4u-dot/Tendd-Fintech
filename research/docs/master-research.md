# Master Research Synthesis - Tendd

**Single source of truth. Uses the v_refresh Strategy (research/docs/strategy.md). All facts cited.**
**Version:** v_refresh (June 11, 2026 re-run) - competitive analysis verified live, Product Model migrated to Strategy (AIDA retired, business model and riskiest assumption added), AARRR updated

---

## 1. Introduction

### Purpose
This document synthesizes all research phases into one reference: strategy, competitive landscape, trust benchmark, and UX pattern rationale. It is the foundation for wireframe and design decisions.

### The Problem
The average consumer now manages 12 active subscriptions spending over $273/month on recurring services (source: [resubs.app/resources/best-subscription-tracker-apps](https://resubs.app/resources/best-subscription-tracker-apps)). Many users are paying for subscriptions they have forgotten about or no longer use [? see H3 hypothesis - requires user research to quantify]. They feel a vague background anxiety about money "leaking out," but they avoid finance apps because those apps feel stressful, judgmental, or overwhelming.

### Our Approach
Build a mobile-first web app that reduces financial anxiety through calm, clear visibility of recurring spend. Not a budgeting app. Not a financial management suite. One job: show users what they pay for, simply and without judgment.

### Key Conclusions

1. **The market is full of powerful apps and empty of peaceful ones.** Every major competitor has expanded into full financial management, trading calm clarity for feature depth. The unoccupied position is "the calm subscription tracker."

2. **Trust must be earned before data is asked for.** Every bank-connected competitor asks for bank access in step 1 or 2 of onboarding, before earning trust. This is the single biggest UX gap across the category.

3. **The cancel-and-save moment is the most emotionally powerful moment in the product** - and no competitor has designed it as a positive experience. It is the natural upgrade trigger and the most shareable moment.

4. **Plain language and active voice in financial communication are industry best practices** (Monzo has made this public design principle), but no subscription tracker has made it a core differentiator.

5. **The EU market is underserved** at the calm, simple end of the subscription tracker category. Emma has EU coverage but is complex and feature-heavy. Bobby is simple but iOS-only and manual.

6. **NEW (v_refresh): The privacy-first user is a real, reachable segment - not an edge case.** ReSubs has built a product with 18K+ users and 461 preset subscriptions requiring zero bank connection. Source: [resubs.app](https://resubs.app/). This validates a second activation path (no bank required) as a market expansion move, not just a fallback. The two segments (bank-willing vs. privacy-first) are now both explicitly addressed in the strategy and onboarding design.

### Approach Note
All competitor data was gathered from public pre-login pages via web search and Playwright. Scores and observations reflect public product surfaces only. Anything [? behind login] was not accessible.

---

## 2. Strategy (v_refresh - Current)

Full detail in [research/docs/strategy.md](./strategy.md). This section replaces the former "Product Model" section. AIDA is retired: AARRR (section 3) is the single funnel, and the AIDA messaging hooks now live inside its Acquisition and Activation stages.

### Segments

| Segment | Profile | JTBD | Priority | Research Status |
|---------|---------|------|----------|----------------|
| A1: Anxious Millennial (bank-willing) | 26-36, financially anxious, subscription-heavy, trusts brand enough to connect bank | "When I suspect I'm paying for things I forgot about, I want to see all my recurring charges in one calm view, so I feel in control without becoming a finance person." | Primary | CONFIRMED. Rocket Money and Monzo design principles validate this profile. Trust barrier is larger than assumed. |
| A2: Anxious Millennial (privacy-first) | 26-36, same anxiety profile, but unwilling to connect bank due to privacy concerns or distrust | "When I want to understand my subscription spend, I want to track them myself without giving any app access to my bank, so I feel in control AND secure." | Primary (equal weight, v_refresh) | NEW. Validated by ReSubs 18K+ users with no bank connection required. Source: [resubs.app](https://resubs.app/) |
| B: Frugal 30-Something | 30-42, financially aware, wants to optimize and cut | "When I'm trying to reduce monthly spend, I want to see which subscriptions I actually use vs. don't, so I can free up money quickly." | Secondary | CONFIRMED with note: higher acquisition potential than assumed because intent is explicit. |
| C: Shared-Finances Couple | 28-40, two-income household, combined subscriptions | "When my partner and I want to understand household spend, I want a shared view of all our subscriptions, so we stop paying for duplicates." | Later stage | CONFIRMED as later stage. Emma and Monarch added shared modes - validates need but confirms product complexity. |

### Business Model

Freemium SaaS (Tendd Pro). The user gets a calm, complete view of recurring spend plus alerts and cancellation help; the recovered money (target $15-30/month saved) is 2-4x the subscription price. Free tier: up to 10 tracked subscriptions, full quality, limited by quantity - it must deliver the aha moment and build trust. Paid: $7.99/mo or $69/yr [? hypothesis], with a lifetime option to test (validated by ReSubs and Bobby one-time purchase models). Pricing hypothesis CHANGED upward from $4-6/mo: verified live June 11, PocketGuard charges $12.99/mo (1M+ members) and YNAB $14.99/mo with no free tier. We deliberately avoid bill-negotiation revenue (Rocket Money takes 35-60% of first-year savings) because it profits from users having expensive problems; flat SaaS aligns revenue with the user feeling calm and staying. Sources: [pocketguard.com/pricing/](https://pocketguard.com/pricing/), [ynab.com/pricing](https://www.ynab.com/pricing), [resubs.app](https://resubs.app/)

### Riskiest Assumption

> People who feel money anxiety and avoid finance apps will actually look - that seeing their full recurring spend in a calm frame reduces their anxiety and feels like relief, rather than triggering the same avoidance that keeps them out of every other finance app.

This is a risk to value, not feasibility. Competitor growth (Rocket Money 10M+, ReSubs 18K+) proves only that already-motivated users adopt trackers; it says nothing about avoiders. If false, there is no activation, no retention, and no business. Smallest test: a clickable "calm reveal" prototype shown to 5-8 people screened for financial-avoidance behavior, measuring completion, post-reveal emotional state, and pull to try it on their own data. Full trace in [research/docs/strategy.md](./strategy.md) section 5.

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
  Trigger: Finding forgotten subscription OR hitting free tier limit OR wanting cancel guide
  Model: Freemium, Tendd Pro ~$6-10/mo [? hypothesis - raised from $4-6. Evidence: PocketGuard $12.99/mo, YNAB $14.99/mo]
  Key metric: Free-to-paid conversion within 90 days
  MVP target: 6-10% [? hypothesis - raised from 5-8%]
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
| Revenue | Free-to-paid conversion, 90 days | 6-10% | [? hypothesis - raised. PocketGuard $12.99/mo (1M+ users), YNAB $14.99/mo validate higher WTP than originally assumed] |
| Referral | % signups from referrals | 15-20% at 6 months | [? hypothesis] |

### MVP Product Decisions (one per stage) - Updated with Founder Decisions June 14, 2026

1. **Acquisition:** Build a shareable "subscription snapshot" card (total + count, no bank data) before building a formal referral program. Landing page must show dual CTA above the fold.
2. **Activation (UPDATED - D1, D2 CLOSED):** Build two explicit onboarding paths with equal visual weight: bank-connected (fast, auto) and privacy-first (manual + preset library, 400+ services - Gmail scan deferred to v2). Both converge on the same Guided Reveal. The Guided Reveal sequence is gradual: subscription count first, then categories with logos, then total. The total is shown alongside an action on the same screen - never as a standalone shock. The design intention: calm agency, not dramatic reveal.
3. **Retention:** Ship the weekly email digest on day 1. Build home-screen widget (PWA) early. Basic cancel instruction ships with free tier. Full step-by-step cancel guides are a Pro feature.
4. **Revenue (UPDATED - D3, D4 CLOSED):** The paywall is NOT at the cancel moment. Basic cancel instruction (link + steps) is free. The upgrade trigger lives at the "history and trends" and "advanced/predictive alerts" moments. Price: $7.99/mo or $69/yr. Lifetime option at price TBD alongside. The cancel-guide paywall hypothesis is retired.
5. **Referral:** Privacy-safe snapshot card (no bank data shown). Trigger share prompt after the cancel moment, not at onboarding.

---

## 4. Competitive Landscape

**v_refresh: Expanded to 15 competitors in 3 groups. Full detail in research/docs/competitive-analysis.md.**

### Competitor Groups

| Group | Purpose | Key Players |
|-------|---------|------------|
| HARD (direct) | Same job-to-be-done, head-to-head competition | Rocket Money, Emma, ReSubs, Bobby, Hiatus |
| SOFT (adjacent) | Solve a related problem; users may compare or switch | YNAB, Monarch Money, Copilot Money, PocketGuard, Simplifi |
| ASPIRATIONAL (design benchmark) | Not direct competitors; best-in-class for trust, calm, clarity | Revolut, Monzo, Apple Card, N26, Nubank |

Sources: research/docs/competitive-analysis.md v_refresh.

### Key Competitor Matrix (HARD group)

| Product | Audience | Platform | Unique angle | Pricing |
|---------|---------|---------|-------------|--------|
| Rocket Money | Broad US, 10M+ members | iOS + Android + Web | Cancellation concierge, bill negotiation | Free + $7-14/mo |
| Emma | UK/EU millennials, 2M+ | iOS + Android | FCA open banking, EU coverage | Free + £4.99-14.99/mo |
| ReSubs | Privacy-conscious, 18K+ users | iOS + Android | No bank connection, 461 presets, cancel guides | Free + Premium, lifetime option [? exact price not on public page] |
| Bobby | iOS privacy-conscious | iOS only | Calendar/widget view, manual entry | Free + one-time IAP |
| Hiatus | US expense-reducers | iOS + Android | Bill negotiation, rate comparison | Free + $9.99/mo |

Sources: [rocketmoney.com](https://www.rocketmoney.com/), [emma-app.com](https://emma-app.com/), [resubs.app](https://resubs.app/), [bobbyapp.co](https://bobbyapp.co/), [hiatusapp.com](https://hiatusapp.com/)

### 3 Common Patterns (v_refresh)

**P1: Bank connection as primary activation path.** All auto-detection competitors use bank linking as step 1. This is the fastest route to value but also the biggest trust barrier for the anxious user. Source: competitive-analysis.md P1.

**P2: Feature accumulation crowds out the core.** Every subscription tracker that gained scale expanded into full personal finance. The calm, simple subscription view is buried under feature depth. Source: competitive-analysis.md P2.

**P3: Privacy vs. convenience binary - no middle path offered.** Competitors force a binary choice: full bank access (Rocket Money/Emma/Hiatus) or fully manual (Bobby/ReSubs). No competitor offers a thoughtful middle path (e.g., AI screenshot import, email parsing, or partial connect). Source: competitive-analysis.md P3 (new in v_refresh).

### 3 Key Differences (v_refresh)

**D1: Revenue model shapes product incentives and culture.** Rocket Money earns from bill negotiation percentages. Emma earns from tiered subscriptions. ReSubs earns from lifetime purchases and IAP. These different models explain different product priorities - Rocket Money needs billable negotiations; ReSubs has no churn incentive to keep you subscribed. Source: competitive-analysis.md D1.

**D2: Focused vs. all-in-one scope.** Bobby and ReSubs have strong niche identities and high user satisfaction. The all-in-one products have higher churn risk and lower per-feature satisfaction.

**D3: Data sharing transparency.** Monarch Money explicitly states "we do not sell your data" (source: [thepennyhoarder.com/budgeting/monarch-money-review/](https://www.thepennyhoarder.com/budgeting/monarch-money-review/)). No competitor makes data use a front-page trust signal.

### Gaps Table (What's Missing)

| Gap | Source citation | Our response |
|-----|----------------|-------------|
| Calm as a first-class design principle | competitive-analysis.md P1/P2 | Core design principle #1 in CLAUDE.md |
| Plain language as a brand pillar | benchmark-trust.md Monzo observation | Active voice + real merchant names in every string |
| Progressive trust-building before bank connection | competitive-analysis.md gap + benchmark C8 | Guided Reveal onboarding shows value before asking for bank access |
| The cancel moment as a designed positive emotional experience | competitive-analysis.md gap G4 | Cancel discovery = "win" moment; upgrade trigger; cancel guides as Pro feature |
| EU-native calm subscription tracker (simple, not full-finance) | competitive-analysis.md gap G5 | Cross-platform web-first, EU open banking support |
| Middle path between full bank connect and fully manual | competitive-analysis.md P3 + gap G6 (new v_refresh) | AI screenshot import / email parsing as path B; equal UX weight to bank connect path |

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

Source: research/docs/benchmark-trust.md. Scores from public pages only; [? behind login] for app interiors.

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

1. **Solves the avoidance problem (BP1).** The Guided Reveal gives the anxious user one thing to do: "let me show you." No choices, no empty dashboard, no configuration. Source: research/docs/ux-patterns.md behavioral pattern BP1.

2. **Fills the competitive gap.** No competitor has designed the first subscription view as an emotional experience. The Guided Reveal is directly analogous to Spotify Wrapped - a reveal of personal data as a satisfying moment. Source: research/docs/competitive-analysis.md gap #4, Phase 5 ux-patterns.md.

3. **Creates the natural upgrade trigger.** The Guided Reveal ends at the moment of highest motivation - after seeing the subscription list, the user is ready to act. The upgrade to paid lives here. Source: research/docs/aarrr.md Revenue stage MVP decision.

### Alternative Under Condition X

If bank connection adoption is below 20% in the first 3 months: switch primary path to Pattern B (Manual Calendar) + Pattern C (Guided Reveal) overlay. Source: research/docs/ux-patterns.md pattern selection.

### Pattern That Does NOT Fit: Conversational / AI-Assisted

Requires too much cognitive load for the anxious scan-first user. The product must be glanceable (3 seconds to "how much am I paying, what's new"). A conversation takes 10-30 seconds minimum. Opposite of our calm clarity differentiator. Source: research/docs/ux-patterns.md.

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

### 7 Hypotheses (If / Then / Because)

**H0 - THE RISKIEST ASSUMPTION (matches research/docs/strategy.md section 5 - test this first): If** we show financially avoidant users their full recurring spend in one calm, judgment-free frame, **then** they will complete the reveal, report relief rather than stress, and want to see their own real data, **because** the anxiety comes from uncertainty about what is leaking out, not from the numbers themselves - and calm visibility converts avoidance into a feeling of control. If this is false, no other hypothesis matters: there is no activation, no retention, and no business. No competitor evidence exists either way [?], which is exactly why it is first in the testing queue.

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
| Is $6.99/mo, $7.99/mo, or $9.99/mo the right price point for Tendd Pro? | Pricing hypothesis revised up. PocketGuard charges $12.99/mo (1M+ users), YNAB $14.99/mo. Original $4.99 may be leaving money on the table. | Pricing page A/B test after launch; Van Westendorp price sensitivity survey in user research |
| What EU open banking provider has the best reliability and coverage for our markets? | TrueLayer vs. Nordigen (GoCardless) vs. Powens have different coverage/reliability | Technical evaluation: build a proof-of-concept against both and measure real coverage |
| How long does it take for a new user to see their first subscription via bank sync? | If sync takes >60 seconds, the Guided Reveal pattern fails at activation | Technical benchmark during early development |

---

## Post-persona research, June 2026

Added after personas.md and jtbd.md were drafted. Purpose: close or narrow the three highest-risk gaps identified in the jtbd.md critique section. Sources searched: peer-reviewed research, clinical literature on financial avoidance, UX studies, privacy preference surveys, and Reddit forum data.

### Q1 Research: Does calm design reduce anxiety for financial avoiders?

**Finding: Partially confirmed. The relief comes from the act of engaging, not just from design softness. Gradual exposure is the key mechanism.**

A 2024 Discover Financial survey found 44% of US adults avoid checking a financial account because of stress or fear. 37% have "literally shielded their eyes from their own bank account." This confirms the avoidance segment is large and real. Source: [stocktitan.net/news/DFS/discover-survey-anxiety-and-avoidance-are-driving-the-financial-19am08lzmguv.html](https://www.stocktitan.net/news/DFS/discover-survey-anxiety-and-avoidance-are-driving-the-financial-19am08lzmguv.html)

Cornell University research found a striking result that directly addresses H0 (the riskiest assumption): "People anticipate that talking about money will increase their anxiety. They found the opposite to be true." More specifically: "the more people talk about their personal finances, the better they feel" and "Putting financial concerns into words helps organize one's thoughts and shifts the mindset from confusion to clarity." The key condition: talking about something within your financial control reduces anxiety more than talking about something outside your control. Subscription spend IS within the user's control. Source: [news.cornell.edu/node/331238](https://news.cornell.edu/node/331238)

UX research on calm interfaces confirms design can reduce anxiety, with "explicit state narration" reducing uncertainty by 20-30% in A/B tests. Source: [medium.com/design-bootcamp/calm-interfaces-for-high-speed-finance-ec9e8412cebc](https://medium.com/design-bootcamp/calm-interfaces-for-high-speed-finance-ec9e8412cebc)

**Implication for the Guided Reveal pattern:** The relief is real but it comes from engagement, not from calming design alone. Calm design reduces the activation barrier (gets the user to engage), but the emotional payoff comes from the engagement itself. This means the Guided Reveal must be engaging enough to get the user to LOOK, not just visually calm enough to not scare them. These are related but distinct design goals.

**NEW DESIGN IMPLICATION: Gradual exposure outperforms a single reveal.** Clinical exposure therapy research confirms that gradual exposure to feared stimuli reduces avoidance more effectively than full exposure at once. Source: [anxietycanada.com/sites/default/files/FacingFears_Exposure.pdf](https://www.anxietycanada.com/sites/default/files/FacingFears_Exposure.pdf). Applied to the Guided Reveal: showing the subscription count before the total, then categories before individual items, then the total as the culminating moment, may reduce the anxiety spike better than opening with a single full total. This is a meaningful design refinement to the Guided Reveal pattern.

**Status of H0 (riskiest assumption):** Cornell research provides indirect evidence that engaging with controllable financial information produces relief rather than more anxiety. But the research subjects are not specifically screened for financial-avoidance behavior. H0 remains a hypothesis, but the indirect evidence is now supportive rather than neutral. User prototype testing with avoidant users is still the correct first test.

---

### Q2 Research: Is avoidance driven by fear of the number, or by the act of engaging?

**Finding: Both, but the primary trigger is emotional, not numerical. Gradual disclosure directly counters both mechanisms.**

A peer-reviewed 2024 study (PMC/NCBI) found that "when people experience financial scarcity, financial information might function as a scarcity cue and trigger negative emotions." Additionally: "people tend to neglect information if it has the potential to threaten a positive self-image." This is the emotional-trigger mechanism. The avoidance is not about the number per se - it is about what the number might say about the person. Source: [pmc.ncbi.nlm.nih.gov/articles/PMC11522046](https://pmc.ncbi.nlm.nih.gov/articles/PMC11522046/)

The Financial Brand (2024) found a secondary driver: financial institutions identified a specific consumer fear that engaging with financial tools "will lead them into a complex, overwhelming situation, fearing they'll go down a rabbit hole or into a spiral of despair." This is the complexity-fear mechanism, separate from the number-fear mechanism. Source: [thefinancialbrand.com/news/financial-education/financial-avoidance-the-fears-and-habits-holding-your-customers-back-189384](https://thefinancialbrand.com/news/financial-education/financial-avoidance-the-fears-and-habits-holding-your-customers-back-189384)

**Implication for product design:** Emma's avoidance has two distinct roots. The emotional-trigger mechanism requires judgment-free framing (the information is not a verdict on her as a person). The complexity-fear mechanism requires one thing at a time with no branching or decisions. Both are already in the design principles (CLAUDE.md) but now have clinical backing.

**NEW: The "self-image threat" finding changes how we frame subscriptions.** Do not present the subscription total as "how much you are spending." Present it as "what you have signed up for" or "what is scheduled to go out." The framing of control vs. exposure makes a real psychological difference.

---

### Q3 Research: Which import method do privacy-first users trust most?

**Finding: Manual entry is most trusted. Bank connection distrusted. Email access: no direct evidence found. Screenshot upload: no evidence found.**

BudgetVault 2026 analysis confirms manual entry is "by far the most trusted" option: "The most private system is one where your financial data never leaves your device in the first place." It also found that 60% of the 20 most popular budgeting apps share at least some user data with third parties, and that Plaid "allegedly collected more financial data than was reasonably necessary." Source: [budgetvault.app/blog/budget-app-without-bank-sync](https://budgetvault.app/blog/budget-app-without-bank-sync)

No direct evidence was found comparing email scan vs. bank connection vs. screenshot upload in terms of user trust preference. This remains a gap that requires primary research.

**Implication for Ravi's persona:** The assumption that Ravi would grant Gmail access more readily than bank access is still a hypothesis. Evidence shows he prefers manual entry above both. The Gmail scan path needs explicit user testing before it is built as a primary privacy-first activation route. The risk: if Gmail scan triggers similar distrust to bank connection, the only valid privacy path for Ravi is manual entry with good preset support (ReSubs' 461 presets are the benchmark).

**Status of Danger 3:** Still open [?]. Not closed by this research. Moved to "requires primary user research" rather than "requires web research." The product should design the manual path first and test Gmail scan as a secondary option with a clearly explained, revocable consent flow.
