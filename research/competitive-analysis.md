# Competitive Analysis - Tendd

**Sources used:** Web research via live pages (June 2026). All facts cited. Screenshots captured via Playwright from public pre-login pages only. [? behind login] marks anything not accessible without an account.

---

## 1. Competitor Groups

### Hard Competitors - Same product, same audience

| Product | HQ | Platform | Core angle |
|---------|-----|----------|-----------|
| Rocket Money | US | iOS, Android, Web | All-in-one money app: subscription tracking + budgeting + bill negotiation |
| Bobby | Netherlands (Yummygum) | iOS only (Android unmaintained) | Minimalist manual subscription tracker |
| Emma | UK (London) | iOS, Android, Web | UK/EU-focused money management + subscription tracking |
| Hiatus | US (NY/NC) | iOS, Android | Subscription management + bill negotiation + light budgeting |
| Trim | US | Web | Bank-connected subscription detection + bill negotiation |

Sources: [rocketmoney.com](https://www.rocketmoney.com/), [bobbyapp.co](https://bobbyapp.co/), [emma-app.com](https://emma-app.com/), [hiatusapp.com](https://hiatusapp.com/), [resubs.app/resources/best-subscription-tracker-apps](https://resubs.app/resources/best-subscription-tracker-apps)

### Soft Competitors - Same JTBD (calm and control over money), different product

| Product | HQ | Platform | Core angle |
|---------|-----|----------|-----------|
| YNAB | US | iOS, Android, Web | Zero-based budgeting system, strong methodology |
| Monarch Money | US | iOS, Android, Web | Full personal finance: budgeting, net worth, investments |
| Copilot Money | US | iOS, Mac, Web (Dec 2025+) | AI-powered budgeting, Apple-first design |

Sources: [ynab.com](https://www.ynab.com/), [monarch.com](https://www.monarch.com/), [copilot.money](https://www.copilot.money/)

### Aspirational Competitors - Best-in-class craft benchmarks

| Product | HQ | Platform | Why aspirational |
|---------|-----|----------|-----------------|
| Revolut | UK | iOS, Android, Web | Best-in-class onboarding, instant clarity, trust at scale |
| Monzo | UK | iOS, Android | Warmth + plain language + notification design |
| Apple Card / Wallet | US | iOS | Radical clarity in spending views, zero jargon |

Sources: [revolut.com](https://www.revolut.com/), [monzo.com](https://monzo.com/), [apple.com/apple-card/](https://www.apple.com/apple-card/)

---

## 2. Screenshots Captured (Public Pre-Login Only)

| File | Product | Page |
|------|---------|------|
| research/screens/rocketmoney-landing.png | Rocket Money | Landing page |
| research/screens/rocketmoney-pricing.png | Rocket Money | Pricing [? redirected to app login] |
| research/screens/emma-landing.png | Emma | Landing page |
| research/screens/emma-pricing.png | Emma | Plans comparison page |
| research/screens/hiatus-landing.png | Hiatus | Landing page |
| research/screens/bobby-landing.png | Bobby | Landing page |
| research/screens/ynab-landing.png | YNAB | Landing page |
| research/screens/ynab-pricing.png | YNAB | Pricing page |
| research/screens/monarch-landing.png | Monarch Money | Landing page |
| research/screens/monarch-pricing.png | Monarch Money | Pricing page |
| research/screens/revolut-landing.png | Revolut | Landing page |
| research/screens/monzo-landing.png | Monzo | Landing page |
| research/screens/applecard-landing.png | Apple Card | Landing page |
| research/screens/copilot-landing.png | Copilot Money | Landing page |

---

## 3. Top 5 Competitor Deep-Dives

### Rocket Money

**What it is:** The dominant US subscription tracker and budgeting app. Part of Rocket Companies (same parent as Rocket Mortgage). Freemium model with premium at $7-$14/month (user-chosen price), plus 35-60% fee on bill negotiation savings.

**Audience:** Broad US market, 10 million+ members (source: [rocketmoney.com](https://www.rocketmoney.com/))

**Core mechanics:**
- Auto-detects subscriptions by linking bank accounts (via Plaid)
- Cancellation concierge: humans cancel subscriptions for you
- Bill negotiation: negotiates cable, phone, insurance bills
- Budgeting, credit score monitoring, net worth tracking

**Value proposition on public page:** "Save more, spend less, see everything, and take back control of your financial life." Claims "Over $2.5 billion in aggregate member savings" (source: rocketmoney.com landing page, unverified disclaimer on page).

**Trust signals:** "Join 10 million+ members," featured in press, FDIC member bank (banking services), 5-star testimonials.

**Monetization:** Free tier (basic tracking) + Premium $7-$14/month. Bill negotiation takes 35-60% of first-year savings. Source: [tekpon.com/software/rocket-money/pricing/](https://tekpon.com/software/rocket-money/pricing/)

**Key gap:** Too broad. Rocket Money is trying to be everything: subscription tracker, budget app, bill negotiator, credit monitor, net worth tracker. The result is a heavy app that can feel overwhelming for the anxious, non-financial user who just wants calm visibility.

---

### Emma

**What it is:** UK/EU-focused money management app with strong open banking integrations. Named Finder's 2025 Budgeting App Provider of the Year (source: [finder.com/uk/budgeting/emma-review](https://www.finder.com/uk/budgeting/emma-review)).

**Audience:** UK millennials and European users. 2 million+ verified users, 10 billion+ transactions analyzed (source: [emma-app.com](https://emma-app.com/))

**Core mechanics:**
- Open banking connections (UK/EU-native - FCA regulated)
- Subscription detection and management
- Budget categories and spending analysis
- Collaborative budgeting (added 2025)
- Rent reporting, investing, payments

**Value proposition:** "Take control of your money" - clean, all-in-one approach with strong EU regulatory compliance.

**Trust signals:** FCA regulated (FRN 1042167), 256-bit TLS encryption, biometric login, logos for Forbes, Financial Times, The Guardian, Channel 4, ITV.

**Monetization:** Free tier + three paid tiers: Plus (£4.99/mo), Pro (£9.99/mo), Ultimate (£14.99/mo). Annual billing gives 30% discount. Source: [emma-app.com/plans/compare-emma-plans](https://emma-app.com/plans/compare-emma-plans)

**Key gap:** Aggressive upsells and constant prompts to upgrade disrupt the experience (source: [orbitmoney.io/compare/emma-app-review](https://orbitmoney.io/compare/emma-app-review)). The tone can feel commercial rather than calm. Strong EU product but complex for a non-financial user.

---

### Hiatus

**What it is:** US subscription management and bill negotiation app. Founded 2016. Flat-fee model for bill negotiation (unlike Rocket Money's percentage model).

**Audience:** US users wanting to reduce recurring expenses without complex budgeting.

**Core mechanics:**
- Auto-detects subscriptions via bank connection
- Bill negotiation (flat monthly fee model, not percentage-based)
- Light spending tracking
- Net worth view
- Rate comparisons (credit cards, insurance, loans)

**Value proposition:** "Take control of your financial life" - positioned as lighter than full budgeting apps.

**Trust signals:** 2,000+ 5-star reviews, phone support number listed (855-508-5411), user testimonials. Source: [hiatusapp.com](https://hiatusapp.com/)

**Monetization:** Free tier + Premium $9.99/month or $35.99/year. Source: [financebuzz.com/hiatus-app-review](https://financebuzz.com/hiatus-app-review)

**Key gap:** Mixed user reviews on customer service and unexpected charges (source: financebuzz.com). The "bill negotiation" feature is hard to trust without understanding the fee model upfront. Less well-known than Rocket Money.

---

### Bobby

**What it is:** Minimalist manual subscription tracker. No bank connection, no data sharing. You add subscriptions yourself, see your total, get reminders.

**Audience:** iOS users who want simplicity and privacy over automation. Strong app store presence: 4.7 stars from nearly 8,000 iOS reviews. Source: [resubs.app/resources/best-subscription-tracker-apps](https://resubs.app/resources/best-subscription-tracker-apps)

**Core mechanics:**
- Manual subscription entry (name, amount, billing date, cycle)
- Calendar/list view of upcoming payments
- Category grouping (Personal, Work)
- Multi-currency support
- Reminders before payment

**Value proposition:** "Keep track of your subscriptions" - minimal, clear, no bank access required.

**Monetization:** Free with one-time "all-in-one pack" in-app purchase. No recurring subscription fee. Source: [bobbyapp.co](https://bobbyapp.co/)

**Key gap:** iOS only (Android version unmaintained). Manual entry is a barrier to activation compared to auto-detection. No web version. Very limited scope - does not help users cancel or take action. Feature growth appears slow.

---

### YNAB (You Need A Budget)

**What it is:** The most methodology-driven personal finance app. Built around zero-based budgeting principles: "Give every dollar a job." Strong community and educational resources.

**Audience:** Serious budgeters, people who have failed with other apps and want a structured system. 4.8 App Store, 4.7 Google Play rating.

**Core mechanics:**
- Zero-based budgeting: every dollar allocated before it is spent
- Four-rule methodology (Give every dollar a job, Embrace true expenses, Roll with the punches, Age your money)
- Full bank sync (Plaid, MX, TrueLayer)
- Goal tracking, loan planner
- Educational workshops

**Value proposition:** "On average, new YNABers save $600 in their first two months and more than $6,000 in their first year." Source: [ynab.com](https://www.ynab.com/)

**Monetization:** No free tier. $14.99/month or $109/year (34-day free trial). College students get 1 year free. Source: [ynab.com/pricing](https://www.ynab.com/pricing)

**Key gap:** High learning curve. "Most people take 2-4 months to get it." YNAB is not for people who feel anxious about finance - it requires commitment, configuration, and sustained discipline. Source: [nerdwallet.com - YNAB Review](https://www.nerdwallet.com/finance/learn/ynab-app-review)

---

## 4. Comparison Table: Top 5 Products x 5 Axes

| Axis | Rocket Money | Emma | Hiatus | Bobby | YNAB |
|------|-------------|------|--------|-------|------|
| **Audience** | Broad US, 10M+ members | UK/EU millennials, 2M+ users | US, expense-reducers | iOS-first, privacy-conscious | Committed budgeters, methodology fans |
| **Product foundation** | Full money app (subscriptions + budgeting + credit + net worth) | Full money app (subscriptions + budgeting + investing + payments) | Subscription + bill negotiation + light budget | Manual subscription tracker only | Zero-based budgeting system |
| **Key mechanisms** | Auto-detect via Plaid + human cancel concierge + bill negotiation | Open banking (FCA) + subscription detection + collaborative budgets | Auto-detect + bill negotiation (flat fee) + rate comparison | Manual entry + reminders + calendar view | Rules-based allocation + goal tracking + workshops |
| **Trust signals** | 10M+ members, $2.5B savings claim, Rocket Companies brand | FCA regulated, 2M+ users, Forbes/FT logos | 2,000+ 5-star reviews, phone support | 4.7 App Store (8K reviews), privacy (no bank access) | $6K avg first-year savings, strong community, 4.8 App Store |
| **Monetization** | Free + $7-$14/mo (user-chosen) + 35-60% bill savings | Free + £4.99-£14.99/mo (3 tiers) | Free + $9.99/mo or $35.99/yr | Free + one-time IAP (no subscription) | No free tier. $14.99/mo or $109/yr |

---

## 5. Analysis

### 3 Common Patterns (present in all or most)

**P1: Bank connection as the primary activation path.**
All auto-detection competitors (Rocket Money, Emma, Hiatus) use bank account linking as the primary onboarding step. This is the fastest route to showing value but also the biggest trust barrier for the anxious non-financial user. Bobby is the outlier - no bank connection - which explains its strong trust scores but weaker activation scope.

**P2: Feature accumulation over time.**
Every product that started as a subscription tracker (Rocket Money, Emma, Hiatus) has expanded into full personal finance: budgeting, net worth, investing, payments. This creates complexity that crowds out the core use case. The original calm, simple subscription view is buried under feature depth.

**P3: Freemium with aggressive upsell.**
Almost all products offer a free tier and then aggressively push upgrade prompts. Emma is noted specifically for this problem (source: orbitmoney.io). The result is that free users feel the product is trying to sell them rather than help them - the opposite of calm and trust.

### 3 Key Differences (fundamentally different approaches)

**D1: Auto-detection vs. manual entry.**
Rocket Money, Emma, and Hiatus auto-detect subscriptions via bank connections. Bobby requires full manual entry. These represent fundamentally different trust models: auto-detection is more powerful but more invasive. Manual entry respects privacy but requires effort. Neither fully solves the activation problem for anxious users.

**D2: Scope: focused vs. all-in-one.**
Bobby is a pure subscription tracker. YNAB is a pure budgeting system. Rocket Money, Emma, and Hiatus have all expanded to full financial management. The focused products (Bobby, YNAB) have stronger brand identities and higher user satisfaction in their niche. The all-in-one products have higher churn risk and lower per-feature satisfaction.

**D3: Data sharing model.**
Bobby has no bank access and sells a one-time purchase. Monarch Money's privacy policy explicitly states they do not sell financial data (source: thepennyhoarder.com/budgeting/monarch-money-review). Rocket Money and Emma operate standard freemium models where free users are shown financial product recommendations (potentially data-funded). This is a real trust differentiator that is not prominently communicated by any competitor.

### What's Missing Across All Competitors (Our Gap)

1. **Calm as a design commitment.** No competitor has made "calm" a first-class design principle. Every product trends toward information density, feature promotion, or anxiety-inducing numbers (balances, debts, credit scores). The market is full of powerful apps; it is empty of peaceful ones.

2. **Plain language as a brand pillar.** All competitors use some financial jargon. Even the "best-designed" apps (Copilot, Bobby) use terms like "recurring expenditure" or "billing cycle." No competitor has made everyday language a core differentiator.

3. **Progressive trust-building before bank connection.** Every bank-connected competitor asks for bank access in the first or second step of onboarding. None of them earn trust before asking for it. A product that shows value with zero data shared - and only asks for bank access after trust is earned - does not exist.

4. **The cancel moment as a designed emotional experience.** Cancellation is treated as a functional step in every competitor. None have designed the moment of finding a forgotten subscription as an emotionally positive, satisfying experience. The "win" of saving money is never celebrated.

5. **EU-native subscription tracker at the calm/simple end of the market.** Emma has strong EU coverage but is complex and feature-heavy. Bobby is simple but iOS-only and manual. There is no calm, auto-detecting, EU-native subscription tracker aimed at anxious non-financial users.

### 3 Open Questions That Remain Unanswered

1. What percentage of the anxious-non-financial-user segment will connect a bank account vs. use manual entry in the first session? This is the key activation design decision and no public data answers it.

2. Is $4-$6/month the right price for a subscription-focused tool, or does the market require a $10+ price to be taken seriously? Rocket Money's $7-$14 range and YNAB's $15 suggest the market can bear higher prices, but our audience is different.

3. How does open banking adoption in the EU compare to Plaid adoption in the US for this audience? TrueLayer/Nordigen data is not publicly available; this requires direct validation.
