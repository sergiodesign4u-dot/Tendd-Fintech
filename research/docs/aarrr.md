# AARRR Model - Tendd

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| v1 | Phase 2 | Initial model based on brief reasoning and v1 product model |
| v_refresh | June 2026 re-run | Updated after deepened competitor research. Key changes: dual activation paths (bank + privacy-first); revenue price range raised; cancel guides added to retention + revenue; ReSubs/PocketGuard evidence folded in; lifetime plan option added to revenue mechanics. |
| v_refresh.1 | June 11, 2026 | AIDA retired: AARRR is now the single funnel for Tendd (see research/docs/strategy.md). The AIDA messaging hooks were folded in here: Attention hooks live in Acquisition, the Interest/Desire landing and reveal messages live in Activation, the Action upgrade trigger lives in Revenue. Segment B's "monthly commitment" framing added to Activation. Activation explicitly flagged as the stage where the riskiest assumption (strategy.md section 5) gets tested. One primary metric and one MVP decision per stage confirmed. |

---

# v_refresh - Current (June 2026 re-run)

All targets are hypotheses. Mark as [? hypothesis]. Unknown = [?].

---

## Acquisition

**Channels and mechanics:**
- Organic search (SEO): content around "subscription tracker," "how to cancel X subscription," "am I overpaying for subscriptions," "best subscription tracker app 2026"
- Social content (TikTok, Instagram Reels, Reddit): UGC-style content showing the discovery moment. Core hook (folded in from retired AIDA): "Found out I was paying for 6 subscriptions I forgot about" - the same pattern as Rocket Money's top testimonials ("saved $200 in the first week"). Source: [rocketmoney.com](https://www.rocketmoney.com/)
- Reddit communities: r/personalfinance, r/frugal, r/UKPersonalFinance
- Word of mouth: friend showing a friend the subscription list reveal
- Privacy-first content angle (NEW): "track subscriptions without giving up your bank data" - validated by ReSubs' content strategy and Google Play growth. Source: [resubs.app/resources](https://resubs.app/resources)
- App store / ProductHunt listing: meaningful for awareness in this category
- Paid social (later stage): retargeting after organic validates messaging

**Key hypotheses:**
1. The "subscription reveal" moment is shareable content - a count or total ("I found 14 subscriptions I forgot about - $247/month") will drive organic sharing [? hypothesis]
2. SEO around "subscription tracker" and "how to cancel X subscription" will capture high-intent users cheaply [? hypothesis]. NEW: "no bank subscription tracker" and "private subscription tracker" are emerging SEO terms based on ReSubs content. Source: [resubs.app/resources/best-free-subscription-trackers](https://resubs.app/resources/best-free-subscription-trackers)
3. The product does not need paid acquisition in early stages if the free tier delivers genuine value for referrals [? hypothesis]

**What's unknown:**
- Whether Reddit and TikTok audiences convert at meaningfully different rates
- Whether "subscription tracker" or "spending tracker" is the better anchor term
- CPAs for paid social in this category
- Whether "privacy-first" messaging attracts a meaningfully larger audience than "convenient auto-detect" messaging [?]

**Primary metric:** New signups per week
**Target:** 100 signups/week within 3 months [? hypothesis]

**v_refresh MVP product decision:** Build a shareable subscription snapshot. ALSO build a landing page with explicit dual messaging: "Connect your bank for instant results" and "Start without connecting - takes 2 minutes." Both paths must be visible above the fold. Evidence: ReSubs' "no bank required" positioning drives its Google Play rating of 4.5 from 718 reviews. Source: [resubs.app](https://resubs.app/)

---

## Activation

**Channels and mechanics:**
- Onboarding path A (bank-connected): connect Plaid/TrueLayer, auto-import subscriptions, see list immediately
- Onboarding path B (privacy-first): manual entry with presets - leads to same aha moment via a longer but trust-first route. At launch this is manual + presets only (per D2); AI import from a screenshot or Gmail is deferred to v2. ReSubs' 461 preset subscriptions is the benchmark for how fast presets-based manual entry can be. Source: [resubs.app](https://resubs.app/)
- "Aha moment" trigger: the first time the user sees a populated subscription list with a monthly total
- Reveal messaging (folded in from retired AIDA): Segment A gets the calm guided reveal - "Here's your monthly total. Here's what's in it. Here are 2 you might want to look at." Segment B gets the commitment framing borrowed from PocketGuard's validated "In My Pocket" approach - "You're committing $247/month before anything else." Source: [pocketguard.com](https://pocketguard.com/)
- Progressive disclosure: both paths defer all configuration, profile setup, and feature explanations until after the aha moment
- Riskiest assumption lives here: whether financially avoidant users complete the reveal and feel relief rather than stress is the single assumption the idea depends on (see research/docs/strategy.md section 5). Activation metrics are its first real-world measurement.

**Key hypotheses:**
1. The subscription list + total is the activation event regardless of which path delivered it. The path changes friction level, not the emotional payoff [? hypothesis]
2. Path A (bank-connected) reaches the aha moment faster but has a higher drop-off at the trust barrier. Path B (privacy-first) has lower drop-off at entry but higher effort before value. Both are needed [? hypothesis]
3. Users who see at least 5 subscriptions in their first session (via any path) are significantly more likely to return within 7 days than users who see 1-2 [? hypothesis]
4. NEW: Offering path B prominently at onboarding start (not just as a small "skip" link) will increase total activation by 15-25% by capturing users who would otherwise abandon at bank connection [? hypothesis]. Evidence: ReSubs built their entire product on path B and reached 18K+ users. Source: [resubs.app](https://resubs.app/)

**What's unknown:**
- What % of users choose bank connection vs. privacy-first path when both are offered equally [?]
- Whether AI screenshot/Gmail import (ReSubs-style) reduces effort enough to match bank-connected activation quality - a v2 question, since launch is manual + presets only (D2) [?]
- Optimal number of subscriptions seen to trigger the aha moment (3? 5? 10?) [?]

**Primary metric:** % of new users who see a populated subscription list (3+ subscriptions with total) within their first session, via either path
**Target:** 35-40% within 24h [? hypothesis - revised down slightly from v1's 40% to account for harder privacy-first path]

**v_refresh MVP product decision:** Build two explicit activation paths with equal visual weight at the start of onboarding. Measure path split from day 1. Bank path: fast, auto-detect, trust-barrier at entry. Privacy path: slower, manual + AI assist, no bank required. Both converge on the same Guided Reveal aha moment.

---

## Retention

**Channels and mechanics:**
- Email: weekly "subscription digest" - upcoming renewals, total for the month, one notable change
- Push notifications (web push): price change alert, payment failure, trial ending alert, new subscription detected
- In-app return hooks: "Your Netflix price went up" visible on next login
- Monthly insight: "Here's what you committed to this month vs last month"
- Cancel assist prompt: "You haven't used X in a while - here's how to cancel it in 2 steps"
- NEW: Home screen widget (ambient presence on device, no need to open the app). Evidence: ReSubs uses widgets as a key retention mechanic. Bobby uses widgets. Ambient visibility keeps the product "alive" between sessions. Source: [resubs.app](https://resubs.app/), [bobbyapp.co](https://bobbyapp.co/)
- NEW: Cancel guide as a return hook. When a user views a cancel guide (step-by-step instructions for cancelling a specific service), they are actively in the job. Returning after they complete the cancel is a high-value touchpoint. ReSubs validates this with 30+ cancel guides. Source: [resubs.app](https://resubs.app/)

**Key hypotheses:**
1. A weekly email digest is the highest-ROI retention mechanic. Users who receive it return at 2x the rate of those who don't [? hypothesis]
2. Price change alerts are the single best push notification because they are genuinely useful, not marketing. They create a "Tendd caught that before I did" trust moment [? hypothesis]
3. Users who cancel at least one subscription via Tendd in the first 30 days have dramatically higher 90-day retention because they feel the product delivered its promise [? hypothesis]
4. NEW: Widget adoption is a stronger retention predictor than push notification opt-in for this audience, because the widget provides ambient value without requiring the user to open the app [? hypothesis]. Evidence: Bobby and ReSubs both prioritize widgets. PocketGuard's daily "safe to spend" number is a similar ambient mechanic that drives daily return. Source: [pocketguard.com](https://pocketguard.com/)

**What's unknown:**
- Optimal email digest frequency (weekly vs bi-weekly) [?]
- Whether free users or paid users respond better to price-change push notifications [?]
- Widget adoption rate for web apps (PWA) vs native apps [?]

**Primary metric:** 30-day retention rate
**Target:** 30% free / 60% paid [? hypothesis]

**v_refresh MVP product decision:** Ship the weekly email digest on day 1 (unchanged). ADD: build home screen widget (PWA) early - this is validated as a retention mechanic by both Bobby and ReSubs. Widget content: next renewal date + monthly total. Cancel guides: build at least 10 for the most common subscriptions (Netflix, Spotify, Adobe, Amazon Prime, Gym memberships) at launch.

---

## Revenue

**Channels and mechanics:**
- Freemium conversion: free users want a premium feature - depth (history and trends, advanced alerts) or cancel support. There is no subscription cap on the free tier (per D3: free is full, uncapped visibility; the paywall is at depth, never at basic visibility).
- Upgrade triggers: paywall encountered at high-motivation moments (forgotten subscription found, price increase detected)
- Pricing: locked at $7.99/month or $69/year (D4). This sits inside the researched $6-10/mo, $50-80/yr band. Evidence: PocketGuard charges $12.99/mo (1M+ users), YNAB charges $14.99/mo (paid-only, 500K+ users), ReSubs has a lifetime option alongside monthly - the market tolerates prices at or above this point. Source: [pocketguard.com/pricing](https://pocketguard.com/pricing), [ynab.com/pricing](https://ynab.com/pricing)
- Annual discount: $69/year vs $95.88 at the monthly rate - about 28% off, roughly 3 months free (D4)
- NEW: Lifetime plan option. ReSubs' one-time purchase model reduces churn anxiety for users who dislike subscriptions about subscriptions (ironic but validated). Source: [resubs.app](https://resubs.app/)
- NEW: Cancel guides as a paid-tier feature. Step-by-step cancel instructions for specific services (Netflix, Adobe, gym memberships) are a concrete, tangible premium feature. ReSubs offers 30+ such guides. Source: [resubs.app](https://resubs.app/)

**Key hypotheses:**
1. The highest-converting upgrade trigger is the moment after discovering a forgotten subscription. "You found a subscription you forgot about - upgrade to unlock your full history and cancel it in 2 steps" [? hypothesis]
2. Annual billing will account for 40 to 60% of paid users because the annual price feels like "less than one cancelled subscription pays for the year" [? hypothesis]
3. NEW: $7.99/month is closer to the optimal price point than the original $4.99 hypothesis, based on PocketGuard and YNAB pricing evidence. Requires user research to validate [? hypothesis]
4. NEW: The lifetime plan option will convert a meaningful share (5-15%) of buyers who have an emotional resistance to paying monthly for something that tracks their subscriptions [? hypothesis]. This is a unique positioning angle.

**What's unknown:**
- Actual willingness to pay for this audience (requires user research) [?]
- Which upgrade trigger converts best - depth (history and trends, advanced alerts) or cancel-support access - given there is no subscription cap to hit (D3) [?]
- Whether offering a lifetime plan cannibalizes monthly revenue or expands the buyer pool [?]

**Primary metric:** Free-to-paid conversion rate
**Target:** 6 to 10% of active free users within 90 days [? hypothesis - revised UP from 5-8% to reflect higher price confidence]

**MVP product decision (locked):** The free tier must feel genuinely useful (not crippled): full, uncapped visibility of all recurring charges, with the paywall at depth - history and trends, advanced alerts - not at the number of subscriptions (D3). Launch at $7.99/month or $69/year (D4). Include cancel guides (top 10 services) as a Pro feature to give the upgrade a concrete, immediately useful benefit.

---

## Referral

**Channels and mechanics:**
- Shareable subscription snapshot: a card or screenshot users can share ("I pay for 14 subscriptions - $247/month")
- Partner invite: "Track subscriptions together" shared household feature
- Word of mouth trigger: the surprise moment when a user sees their full monthly total
- App store reviews: prompted after a user successfully cancels a subscription
- NPS survey at day 30
- NEW: Privacy-safe snapshot. The shareable card must work for privacy-first users (path B) as well as bank-connected users. It should show subscription count + total spend, but never bank name, account number, or transaction details. This makes sharing feel safe and removes a likely barrier for path B users. Evidence: ReSubs' entire audience is privacy-conscious, yet it still has 18K+ users (word of mouth works in this segment). Source: [resubs.app](https://resubs.app/)
- NEW: Cancel success as the most shareable moment. "I just cancelled 3 subscriptions and saved $47/month using Tendd" is a stronger referral hook than "I see my subscriptions." The cancel moment combines financial relief + social proof + concrete number. Evidence: this pattern is consistent with how Rocket Money positions its cancellation service in marketing. Source: [rocketmoney.com](https://rocketmoney.com/)

**Key hypotheses:**
1. The "subscription count reveal" is inherently shareable because it is surprising and relatable - same emotional hook as Spotify Wrapped [? hypothesis]
2. Users who cancel at least one subscription via Tendd are the most likely to recommend because they have a concrete, story-worthy outcome [? hypothesis]
3. A formal referral program (give $X, get $X) is less effective than making the product itself shareable for this audience - they respond to authentic outcomes, not discount mechanics [? hypothesis]
4. NEW: The privacy-first snapshot card is essential for referral - without it, path B users cannot share their result without revealing bank data, which they will refuse to do [? hypothesis]

**What's unknown:**
- Whether users are comfortable sharing subscription totals publicly (even without bank details) [?]
- Whether partner invite drives meaningful volume in the MVP timeframe [?]
- NPS benchmark for this category [?]

**Primary metric:** Referral rate (% of new signups from an existing user referral)
**Target:** 15 to 20% of new signups from referrals within 6 months [? hypothesis - unchanged from v1]

**v_refresh MVP product decision:** Build the privacy-safe shareable snapshot card (no bank data, just count + total + optional monthly savings). Trigger the share prompt after the cancel moment, not at onboarding. Add app store review prompt post-cancellation. Formal referral program (discount mechanics) is post-MVP.

---

## Summary Metrics Table

| Stage | Primary Metric | v_refresh Target | Notes |
|-------|---------------|-----------------|-------|
| Acquisition | New signups/week | 100/week at 3 months [? hypothesis] | Unchanged from v1. Dual CTA added to drive privacy-first segment. |
| Activation | % users who see 3+ subscriptions in session 1 (either path) | 35 to 40% within 24h [? hypothesis] | Revised slightly down from v1's 40% to account for harder privacy path. |
| Retention | 30-day active rate | 30% free / 60% paid [? hypothesis] | Unchanged. Added widget + cancel guide as new mechanics. |
| Revenue | Free-to-paid conversion | 6 to 10% within 90 days [? hypothesis] | Revised UP from 5-8%. Price range revised to $6-10/mo based on PocketGuard/YNAB evidence. |
| Referral | % signups from referrals | 15 to 20% at 6 months [? hypothesis] | Unchanged. Privacy-safe snapshot card added as prerequisite. |

---

## Key Product Takeaways

1. **Activation is everything.** The entire product experience should be designed around one goal: getting a user to the "subscription list reveal" as quickly and calmly as possible. Every step that delays that moment is a conversion killer.

2. **Trust unlocks activation.** Bank connection is the fastest path to value, but only if the user trusts the product enough to do it. Trust-building language, privacy explainers, and transparency must come before the connection prompt, not after. This is the single biggest UX gap competitors leave open.

3. **Retention is built on notifications done right.** The weekly digest and price-change alerts are not features - they are the core retention engine. Useful and calm, not pushy or frequent. One genuinely helpful alert beats ten promotional ones. Widget + cancel guides are now validated mechanics to add early.

4. **The cancel moment is the revenue moment.** The upgrade trigger is most powerful immediately after a user finds a forgotten subscription or sees a price increase. The product must detect and surface these moments and connect them directly to the upgrade flow. Cancel guides as a Pro feature give the paywall a concrete, tangible reason to upgrade.

5. **NEW: Two paths are better than one.** Competitor research (ReSubs, 18K+ users, no bank connection required) validates that the privacy-first audience is real and reachable. Offering both activation paths with equal visual weight is not a fallback - it is a deliberate expansion of the addressable market. The paths must converge on the same aha moment, and the shareable snapshot must work for both. Source: [resubs.app](https://resubs.app/)
