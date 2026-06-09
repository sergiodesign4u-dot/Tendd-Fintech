# Competitive Analysis - Tendd

**Version:** v_refresh - June 2026 re-run. Prior findings incorporated and expanded.
**Sources:** Live web research and WebFetch (June 2026). All facts cited with source URLs. Screenshots via Playwright from public pre-login pages only. [? behind login] marks anything requiring an account.

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| v1 | June 2026 (Phase 3) | Initial analysis: 5 hard, 3 soft, 3 aspirational competitors |
| v_refresh | June 2026 (re-run) | Deepened all groups to max 5 each. Added ReSubs (hard), PocketGuard + Simplifi (soft), N26 + Nubank (aspirational). New screenshots for all new entrants. Updated facts on existing competitors. |

---

## 1. Competitor Groups

### HARD - Same product, same audience, our market

These are the products a user would find if they searched "subscription tracker app" today. They compete directly for our user's attention and their recurring payment data.

| Product | HQ | Platform | Why it belongs here | What to study |
|---------|-----|----------|--------------------|----|
| Rocket Money | US | iOS, Android, Web | Dominant US player, 10M+ users, auto-detects subs via Plaid, freemium | Activation flow, cancellation concierge UX, trust signals at scale |
| Emma | UK | iOS, Android, Web | Dominant EU/UK player, FCA-regulated open banking, 2M+ users | EU onboarding, FCA trust framing, multi-tier pricing |
| ReSubs | US (global) | iOS, Android | Privacy-first, no bank connection, 18K+ users, newer entrant with strong reviews | Privacy messaging, manual + AI-import hybrid, cancel guides |
| Bobby | Netherlands | iOS only | Minimalist, no data sharing, one-time purchase model, 4.7 App Store | Minimal viable trust, manual UX, iOS-only limitation |
| Hiatus | US | iOS, Android | Bank-connected + flat-fee bill negotiation, older but relevant for feature benchmarking | Bill negotiation model, trust friction, mixed review pattern |

Sources: [rocketmoney.com](https://www.rocketmoney.com/), [emma-app.com](https://emma-app.com/), [resubs.app](https://resubs.app/), [bobbyapp.co](https://bobbyapp.co/), [hiatusapp.com](https://hiatusapp.com/)

### SOFT - Different product, same JTBD (calm control over money)

These products address the same underlying job - "help me feel in control of my money without overwhelming me" - but through a different lens: full budgeting, net worth, or spending awareness. They are alternative purchases for our users.

| Product | HQ | Platform | Why it belongs here | What to study |
|---------|-----|----------|--------------------|----|
| YNAB | US | iOS, Android, Web | Zero-based budgeting system, strong methodology, no free tier, high user loyalty | Methodology-driven trust, how to charge premium with no free tier |
| Monarch Money | US | iOS, Android, Web | Full personal finance (budget, net worth, investments), couple-focused, $14.99/mo | Household mode, AI assistant, no-free-tier conversion model |
| Copilot Money | US | iOS, Mac, Web | AI-powered budgeting, best-designed finance app for Apple users, $13/mo | Apple-native design language, AI categorization privacy model |
| PocketGuard | US | iOS, Android, Web | "Safe to spend" calculation, 1M+ users, subscription detection as part of budget | In My Pocket metric, how to frame subscriptions in spending context |
| Simplifi by Quicken | US | iOS, Android, Web | Budget-first with recurring payment tracker, $47.88/yr, Quicken brand trust | Subscription-within-budget positioning, subscription spending plan |

Sources: [ynab.com](https://www.ynab.com/), [monarch.com](https://www.monarch.com/), [copilot.money](https://www.copilot.money/), [pocketguard.com](https://pocketguard.com/), [quicken.com/products/simplifi/](https://www.quicken.com/products/simplifi/)

### ASPIRATIONAL - International best-in-class benchmarks for trust, clarity, and calm

These are not direct competitors but set the design and communication standard we aspire to. Each does one or two things better than anyone else in our relevant dimensions.

| Product | HQ | Platform | Why it belongs here | What to study |
|---------|-----|----------|--------------------|----|
| Revolut | UK | iOS, Android, Web | 50M+ users, fastest onboarding in fintech, clarity + control at scale | Progressive disclosure onboarding, speed-to-value, trust at scale |
| Monzo | UK | iOS, Android | Best plain-language financial communication, published tone-of-voice principles | Active voice in money events, "positive friction," celebration of small wins |
| Apple Card / Wallet | US | iOS | Radical transaction clarity, real merchant names, "No fees. Not even hidden ones." | Pre-emptive trust declaration, transaction enrichment, zero-jargon spending view |
| N26 | Germany | iOS, Android, Web | EU-native, clean merchant name display, automatic spending categorization, 8M+ users | Transaction clarity for EU market, subscription overview in-app [? behind login] |
| Nubank | Brazil | iOS, Android | 90M+ users across LatAM, plain-language onboarding, warmth + empathy at massive scale | How warmth scales, plain-language KYC, mobile-first trust design |

Sources: [revolut.com](https://www.revolut.com/), [monzo.com](https://monzo.com/), [apple.com/apple-card/](https://www.apple.com/apple-card/), [n26.com](https://n26.com/en-de), [international.nubank.com.br](https://international.nubank.com.br/about/), [netguru.com/blog/data-driven-ux-design](https://www.netguru.com/blog/data-driven-ux-design), [craftinnovations.global/nubank-onboarding-process-analysis/](https://craftinnovations.global/nubank-onboarding-process-analysis/)

---

## 2. Screenshots Captured (Public Pre-Login Only)

| File | Product | Page | New in refresh? |
|------|---------|------|----------------|
| research/screens/rocketmoney-landing.png | Rocket Money | Landing | No |
| research/screens/rocketmoney-pricing.png | Rocket Money | Pricing [? redirected to app login] | No |
| research/screens/emma-landing.png | Emma | Landing | No |
| research/screens/emma-pricing.png | Emma | Plans comparison | No |
| research/screens/hiatus-landing.png | Hiatus | Landing | No |
| research/screens/bobby-landing.png | Bobby | Landing | No |
| research/screens/resubs-landing.png | ReSubs | Landing | Yes |
| research/screens/pocketguard-landing.png | PocketGuard | Landing | Yes |
| research/screens/pocketguard-pricing.png | PocketGuard | Pricing | Yes |
| research/screens/simplifi-landing.png | Simplifi | Landing | Yes |
| research/screens/ynab-landing.png | YNAB | Landing | No |
| research/screens/ynab-pricing.png | YNAB | Pricing | No |
| research/screens/monarch-landing.png | Monarch Money | Landing | No |
| research/screens/monarch-pricing.png | Monarch Money | Pricing | No |
| research/screens/copilot-landing.png | Copilot Money | Landing | No |
| research/screens/revolut-landing.png | Revolut | Landing (UK) | No |
| research/screens/revolut-us-landing.png | Revolut | Landing (US) | No |
| research/screens/monzo-landing.png | Monzo | Landing | No |
| research/screens/monzo-tone-of-voice.png | Monzo | Tone of voice (public) | No |
| research/screens/applecard-landing.png | Apple Card | Landing | No |
| research/screens/applecard-features.png | Apple Card | Features | No |
| research/screens/n26-landing.png | N26 | Landing | Yes |
| research/screens/nubank-landing.png | Nubank | International about page | Yes |

---

## 3. Deep-Dives: Top 5 Hard Competitors

### Rocket Money

**What it is:** The dominant US subscription and money management app. Owned by Rocket Companies (parent of Rocket Mortgage). Now more accurately described as an all-in-one money app than a pure subscription tracker.

**Audience:** Broad US market, 10 million+ members. Source: [rocketmoney.com](https://www.rocketmoney.com/)

**Core mechanics:**
- AI-powered auto-detection of subscriptions via Plaid bank connection
- Cancellation concierge: humans cancel subscriptions on the user's behalf
- Bill negotiation: performance fee of 35-60% of first-year savings
- Budgeting, credit score monitoring, net worth tracking
- Premium features: customizable dashboards, iOS widgets, on-demand sync, account sharing

**Value proposition:** "Save more, spend less, see everything, and take back control of your financial life." Claims "Over $2.5 billion in aggregate member savings." Source: rocketmoney.com public landing (disclaimer: unverified, noted on page).

**Trust signals:** 10M+ members, 7-day Premium free trial, FDIC member bank (banking services), Rocket Companies brand authority, press features.

**Monetization:** Free (basic tracking) + Premium $7-$14/month (sliding scale, user picks price). Bill negotiation: 35-60% of first-year savings. Source: [tekpon.com/software/rocket-money/pricing/](https://tekpon.com/software/rocket-money/pricing/)

**Key gap for our context:** The product has expanded so far beyond subscription tracking that its core audience is now a general budgeting user, not the anxious non-financial person who just wants calm visibility. The UI is dense with features. The bill-negotiation revenue model creates a subtle incentive misalignment: Rocket Money benefits most when users have expensive bills, not when they feel calm and in control.

---

### Emma

**What it is:** UK/EU-focused money management app. FCA regulated. Finder's 2025 Budgeting App Provider of the Year. Source: [finder.com/uk/budgeting/emma-review](https://www.finder.com/uk/budgeting/emma-review)

**Audience:** UK millennials and EU users. 2 million+ verified users, 10 billion+ transactions analyzed. Source: [emma-app.com](https://emma-app.com/)

**Core mechanics:**
- FCA-regulated open banking (UK/EU native - strongest EU coverage of any direct competitor)
- Subscription detection and cancellation prompts
- Collaborative budgeting (added 2025)
- Rent reporting to credit bureaus
- Investing, payments via QR code

**Trust signals:** FCA regulated (FRN 1042167), 256-bit TLS, biometric login, Forbes/Financial Times/Guardian/Channel 4 logos. The FCA regulation mark is the single strongest trust signal for UK users.

**Monetization:** Free + three paid tiers: Plus (£4.99/mo), Pro (£9.99/mo), Ultimate (£14.99/mo). Annual billing gives 30% off. Source: [emma-app.com/plans/compare-emma-plans](https://emma-app.com/plans/compare-emma-plans)

**Key gap for our context:** Aggressive upsells and constant upgrade prompts disrupt an otherwise strong experience. Source: [orbitmoney.io/compare/emma-app-review](https://orbitmoney.io/compare/emma-app-review). Despite strong EU credentials, Emma is now a full money management platform - the subscription tracking core is buried under complexity.

---

### ReSubs (NEW in this refresh)

**What it is:** Privacy-first subscription tracker. No bank connection ever. Launched recently, growing via strong App Store and Google Play presence. Cross-platform iOS and Android.

**Audience:** Privacy-conscious users globally, people who want subscription tracking without data sharing. 18,000+ users tracking 50,000+ subscriptions across 20+ countries. Source: [resubs.app](https://resubs.app/)

**Core mechanics:**
- Manual entry + CSV import + Gmail receipt scanning + AI screenshot extraction
- 461 preset subscriptions for quick setup
- Tracks subscription lifecycle states: active, paused, cancelled, trial
- 30+ step-by-step cancel guides per service
- Savings assistant: identifies cheaper plans and promo codes
- Widgets, calendar view, multi-currency with auto-conversion
- 100% privacy-first: data stays on device, optional cloud backup

**Trust signals:** 4.1 stars App Store (10 reviews, newer), 4.5 stars Google Play (718 reviews). "100% Privacy-first" claim prominent on landing. Source: [resubs.app](https://resubs.app/)

**Monetization:** Free tier (limited subscriptions) + Premium (unlimited subscriptions + all features). Lifetime plan option. Exact pricing not displayed on public landing page [? behind login or app store].

**Key gap for our context:** Small user base vs. Rocket Money or Bobby. No auto-detection (requires manual work or Gmail scanning). The Gmail scanning option requires email access - which may create a trust concern similar to bank connection for some users. Currently strongest on Android.

---

### Bobby

**What it is:** Minimalist manual subscription tracker. No bank connection, no data sharing. Simple, focused, beautiful. iOS only (Android version unmaintained).

**Audience:** iOS users who value privacy and simplicity over automation. 4.7 stars from nearly 8,000 iOS reviews. Source: [resubs.app/resources/best-subscription-tracker-apps](https://resubs.app/resources/best-subscription-tracker-apps)

**Core mechanics:**
- Manual subscription entry: name, amount, billing date, cycle, category
- Calendar and list views of upcoming payments
- Multi-currency support
- Renewal reminders

**Monetization:** Free + one-time "all-in-one pack" in-app purchase. No recurring subscription fee. Source: [bobbyapp.co](https://bobbyapp.co/)

**Key gap for our context:** iOS only. Manual entry creates an effort barrier that prevents activation for users who already pay for 10+ services and cannot be bothered to add them all. No web version. No cancel assist. Feature development has slowed visibly.

---

### Hiatus

**What it is:** US subscription management and bill negotiation app. Founded 2016. Positioned as lighter than full budgeting apps but broader than pure subscription trackers.

**Audience:** US users wanting to reduce recurring bills without a full budgeting commitment.

**Core mechanics:**
- Bank-connected auto-detection via Plaid
- Bill negotiation concierge (flat monthly fee, not percentage-based - unlike Rocket Money)
- Light spending tracking, net worth view
- Rate comparisons (credit cards, insurance, loans)

**Trust signals:** 2,000+ 5-star reviews, phone support (855-508-5411) prominently listed. Source: [hiatusapp.com](https://hiatusapp.com/)

**Monetization:** Free + Premium $9.99/month or $35.99/year. Source: [financebuzz.com/hiatus-app-review](https://financebuzz.com/hiatus-app-review)

**Key gap for our context:** Mixed reviews on customer service and unexpected charges. Source: [financebuzz.com/hiatus-app-review](https://financebuzz.com/hiatus-app-review). The flat-fee bill negotiation model is harder to understand at a glance than Rocket Money's percentage model. Lower brand recognition than Rocket Money limits organic discovery.

---

## 4. Comparison Matrix: Top 5 Most Relevant Competitors x 5 Axes

Selection rationale: Rocket Money (dominant US hard), Emma (dominant EU hard), ReSubs (strongest privacy-first hard), YNAB (strongest soft - methodology trust), PocketGuard (soft - largest user base outside YNAB/Monarch with subscription angle).

| Axis | Rocket Money | Emma | ReSubs | YNAB | PocketGuard |
|------|-------------|------|--------|------|-------------|
| **Audience** | Broad US, 10M+ members, general finance user | UK/EU millennials, 2M+ users, open banking native | Privacy-conscious globally, 18K+ users, no-bank-access preference | Committed budgeters who want a methodology, US-first | US budget-focused, 1M+ members, subscription tracking secondary to spending |
| **Product foundation** | All-in-one: subscriptions, budgeting, credit score, net worth, bill negotiation | Full money app: subscriptions, budgeting, investing, payments, rent reporting | Dedicated subscription tracker: manual + AI import, cancel guides, lifecycle tracking | Zero-based budgeting system with methodology and workshops | Spending awareness ("safe to spend"), budgeting, subscription detection |
| **Key mechanism** | Plaid auto-detect + human cancel concierge + performance-based bill negotiation | FCA open banking + subscription detection + collaborative budgets (added 2025) | Manual + Gmail scan + AI screenshot + 30+ cancel guides + lifecycle states | Rules-based allocation + four-rule methodology + goal tracking + educational workshops | "In My Pocket" calculation + AI subscription detection + 3-day advance bill alerts |
| **Trust signals** | 10M+ members, $2.5B savings claim (unverified disclaimer), FDIC banking, Rocket brand | FCA regulated (FRN 1042167), 2M+ users, Forbes/FT/Guardian logos | "100% privacy-first," data stays on device, 4.5 Google Play (718 reviews) | $6K avg savings yr 1, 4.8 App Store, community forums, published methodology | 1M+ members, 4.7 stars (12K reviews), Forbes/CNN/TechCrunch/NYT logos, est. 2014 |
| **Monetization** | Free + $7-14/mo (user-chosen) + 35-60% bill savings fee | Free + £4.99-£14.99/mo (3 tiers), annual -30% | Free (limited) + Premium unlimited + lifetime option [? exact price not on public page] | No free tier. $14.99/mo or $109/yr (34-day trial). Students free 1 year. | Free (limited) + Plus $12.99/mo or $74.99/yr + lifetime $149.99 |

Sources: [rocketmoney.com](https://www.rocketmoney.com/), [emma-app.com](https://emma-app.com/), [resubs.app](https://resubs.app/), [ynab.com/pricing](https://www.ynab.com/pricing), [pocketguard.com/pricing/](https://pocketguard.com/pricing/)

---

## 5. Analysis

### 3 Common Patterns

**P1: Bank connection as default activation path - and no one solves the trust problem before it.**
Every bank-connected competitor (Rocket Money, Emma, Hiatus, PocketGuard) asks for bank access in step 1 or 2. None earn trust before requesting it. The outliers (Bobby, ReSubs) avoid bank connection entirely but sacrifice auto-detection. No competitor exists in the middle: showing genuine value first, then earning the right to ask for bank access. This is confirmed by the refresh: ReSubs is the closest attempt (AI from screenshots avoids bank access) but still requires significant user effort up front.

**P2: Feature creep buries the core job.**
Rocket Money, Emma, PocketGuard, and Simplifi all started narrower and expanded into full financial management. The subscription tracking feature that attracted anxious non-financial users gets buried under budgets, net worth, investing, and credit monitoring. Bobby and ReSubs resist this pressure but at the cost of limited capability. No competitor has held the line: focused on subscriptions only, with genuine depth in that single job.

**P3: Privacy vs. convenience as a binary choice - no middle path offered.**
The market is split: auto-detect via bank (Rocket Money, Emma, Hiatus, PocketGuard) or fully manual (Bobby, ReSubs). Users who want automatic detection but distrust full bank access have no good option. ReSubs' Gmail scanning is a partial answer but introduces a different data sensitivity. No product offers "connect read-only to one bank account for 30 seconds to import subscriptions, then disconnect" as a privacy-safe auto-import option.

### 3 Key Differences

**D1: Revenue model shapes product incentives in fundamentally different ways.**
Rocket Money and Hiatus earn money from bill negotiation (percentage or flat fee). This creates an incentive to surface bills that can be negotiated - and to keep users engaged with financial complexity. YNAB charges a flat subscription fee, aligning incentives with user success. Bobby and ReSubs charge one-time or flat fees, removing ongoing engagement pressure. These models produce meaningfully different product cultures: flat-fee tools feel calmer because they do not need to keep surfacing problems to justify their cost.

**D2: Methodology-led vs. tool-led approaches to financial anxiety.**
YNAB and Simplifi are methodology-led: they provide a framework (zero-based budgeting, spending plan) and the product enforces it. Rocket Money, Emma, and PocketGuard are tool-led: they surface data and offer actions but do not guide behavior. Bobby and ReSubs are tool-led with no behavioral intent at all. For the anxious non-financial user, methodology creates more anxiety (more things to do correctly) but tool-led products without any structure leave the user without direction after the initial discovery moment. The gap is a gentle, low-friction structure that requires no methodology knowledge.

**D3: EU/global coverage remains a hard differentiator.**
Emma is the only hard competitor with genuine EU open banking coverage (FCA regulated, PSD2 compliant). N26 covers EU natively but is a bank, not a subscription tracker. Bobby is EU-built (Netherlands) but manual and iOS-only. Rocket Money, Hiatus, and PocketGuard are US-only. ReSubs is global by design (no bank connection needed) but has no EU-specific open banking features. The EU market has no calm, auto-detecting subscription tracker at the simple end. This is the strongest geographic gap confirmed by the refresh.

### What Is Missing Across All Competitors (Our Gap)

The following gaps are confirmed or strengthened by the refresh:

1. **Calm as an explicit design commitment.** Confirmed by refresh: no competitor - including new entrant ReSubs - leads with "calm" as a design or brand promise. Every product leads with capability ("find subscriptions," "save money," "control your finances") not emotional state.

2. **Progressive trust before bank connection.** Confirmed and strengthened: ReSubs is the closest attempt (avoids bank access entirely) but the opt-out is the entire product, not a path to auto-detection. No product earns trust then asks for data.

3. **The cancel-and-save moment as a designed positive experience.** Still absent. Cancel guides exist in ReSubs (30+ step-by-step guides) and Rocket Money (concierge service). Neither frames cancellation as a satisfying win for the user. It remains a functional step, never a celebrated moment.

4. **Plain money language as a brand differentiator.** Unchanged from v1. Every product uses some financial jargon. ReSubs comes closest on landing page copy but the product interior [? behind login] is unknown.

5. **EU-native calm subscription tracker with auto-detection.** NEW STRENGTH confirmed by refresh: Emma has EU coverage but is complex and aggressive in upsells. ReSubs is privacy-first but manual. Bobby is EU-built but iOS-only and stagnant. N26 shows what good EU transaction clarity looks like but is a full bank. The gap is real and unoccupied.

6. **A middle path between bank connection and manual entry.** NEW from refresh: the binary choice (full bank access OR manual effort) is a confirmed market gap. ReSubs' AI screenshot import is a partial solution but adds friction. A low-permission, read-once import flow is not offered by any competitor.

### 3 Open Questions

1. **Will users accept Gmail scanning (ReSubs) as a privacy-safe alternative to bank connection?** ReSubs is growing with this approach, but the trust implications of email access vs. bank access are not clearly tested. This is a design decision Tendd must resolve explicitly.

2. **Is $4-$6/month the right price given that PocketGuard charges $12.99/month and YNAB charges $14.99/month?** The refresh shows that "anxious but not deeply financial" users do pay $10-15/month for tools that help them feel in control. The original hypothesis of $4-6 may be too conservative if we deliver genuine calm and cancel value. Needs user research.

3. **What is ReSubs' growth trajectory and does it represent a validation or threat?** ReSubs is the closest competitor to our positioning (no bank, privacy-first, focused on subscriptions) but smaller (18K users vs. Bobby's 8K App Store reviews). Its 4.5 Google Play rating with 718 reviews is meaningful early traction. Monitoring its growth rate is a strategic priority.
