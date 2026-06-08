# Product Model - v1 (Pre-Research Hypotheses)

**Status:** v1 - pre-research hypotheses. This model is based on reasoning and the product brief. It will be validated and corrected in Phase 3 (competitive analysis) and Phase 4 (benchmark). A v2 will be produced after research.

---

## 1. Product Objectives

| # | Objective | Metric | Target (Hypothesis) |
|---|-----------|--------|---------------------|
| O1 | Drive activation - get users to see real value in the first session | % of new users who connect a bank account or add 3+ subscriptions in session 1 | 40% within 24 hours of signup [? hypothesis] |
| O2 | Build a habit of return visits | 30-day retention rate for free users | 30% DAU/MAU [? hypothesis] |
| O3 | Convert free users to paid | Free-to-paid conversion rate | 5 to 8% within 90 days [? hypothesis] |
| O4 | Reduce subscription overspend for users | Average $ saved per active user per month (tracked via cancelled subscriptions) | $15 to $30/month [? hypothesis] |

---

## 2. Audience Segments

### Segment A: The Anxious Millennial

| Attribute | Detail |
|-----------|--------|
| Age | 26 to 36 |
| Profile | Working professional, urban or suburban, mid-income. Comfortable with technology but actively avoids financial apps because they feel stressful or judgmental. Pays for many streaming services, SaaS tools, and fitness apps. Has a vague sense that they are "wasting money" but doesn't want to confront it. |
| Motivation | Reduce the background anxiety about money. Want to feel in control without becoming a "finance person." |
| Pain | Surprise charges, forgotten subscriptions, the feeling that money is leaking out. Opening a budgeting app feels like opening a report card. |
| JTBD | "When I get my bank statement and feel overwhelmed by charges I don't recognize, I want to see all my recurring payments clearly in one calm view, so that I can stop feeling like money is out of my control." |
| Priority | **Primary** - Largest addressable segment, highest emotional intensity, highest likelihood to convert to paid. |

### Segment B: The Frugal 30-Something

| Attribute | Detail |
|-----------|--------|
| Age | 30 to 42 |
| Profile | More financially aware than Segment A. May already use a basic budgeting tool. Has disposable income but is actively trying to optimize their spend. Specifically wants to audit and trim subscriptions. |
| Motivation | Find and cancel subscriptions they are no longer using. Save a meaningful amount each month without a lot of effort. |
| Pain | Existing tools are either too complex (full budgeting apps) or too narrow (don't surface unused subscriptions clearly). |
| JTBD | "When I am trying to reduce my monthly outgoings, I want to see which subscriptions I actually use vs. the ones I keep forgetting to cancel, so that I can free up money quickly and without fuss." |
| Priority | **Secondary** - Strong JTBD fit, but slightly more instrumentally motivated. Will benefit from the product and pay, but is not the emotionally-driven core user. |

### Segment C: The Shared-Finances Couple

| Attribute | Detail |
|-----------|--------|
| Age | 28 to 40 |
| Profile | Two-income household managing shared expenses. Both people are signed up to various subscriptions, some individual, some shared. Neither person has a complete view of the combined recurring spend. |
| Motivation | Get a single shared view of household subscriptions. Avoid paying for the same service twice. |
| Pain | Difficult to coordinate between two people. Existing tools are individual-first. Shared finance apps are too complex. |
| JTBD | "When my partner and I are trying to understand what we're paying for as a household, I want a shared view of all our subscriptions in one place, so that we can stop paying for duplicates and agree on what to keep." |
| Priority | **Later stage** - Real need, but adds product complexity (shared accounts, permissions). Not MVP. |

---

## 3. AIDA Per Segment

### Key

- **A - Attention:** How we make them aware we exist
- **I - Interest:** What keeps them on the page/app
- **D - Desire:** What makes them want to sign up or pay
- **A - Action:** The specific action we want them to take

### Segment A: The Anxious Millennial

| Stage | Channel | Message | Mechanic |
|-------|---------|---------|---------|
| Attention | TikTok, Instagram Reels, Reddit (r/personalfinance, r/frugal) | "Found out I was paying for 6 subscriptions I forgot about" - UGC style content showing the discovery moment | Short video of the subscription list reveal, no jargon, emotional hook |
| Interest | Landing page, organic search ("subscription tracker") | "See all your subscriptions in one calm view" - anti-budgeting positioning, calm visuals | Live demo or animated product preview above the fold |
| Desire | Free trial / product onboarding | "You're paying for 14 subscriptions totaling $247/month" - the first moment of clarity | Show the number, show the categories, no judgment. Highlight 1 forgotten subscription. |
| Action | In-app prompt after free value | "Try Tendd Pro - cancel what you don't use" | Frictionless upgrade at the moment of highest motivation (after discovering a forgotten sub) |

### Segment B: The Frugal 30-Something

| Stage | Channel | Message | Mechanic |
|-------|---------|---------|---------|
| Attention | Google search, Reddit, personal finance newsletters | "Cut your subscriptions in 5 minutes" - practical, outcome-focused | SEO content, comparison articles ("best subscription trackers 2025") |
| Interest | Landing page features section | "See exactly which subscriptions you use and which ones you don't" | Usage tracking visualization, cancel assistance feature highlight |
| Desire | Free tier / onboarding | Immediate quantification: "Based on your subscriptions, you could save $X by cancelling these 3" | Personalized savings estimate after first account connection |
| Action | Cancel assist feature | "Cancel this subscription in 2 clicks" | Direct cancel link or guided cancellation flow |

### Segment C: The Shared-Finances Couple

| Stage | Channel | Message | Mechanic |
|-------|---------|---------|---------|
| Attention | Pinterest, couples finance content, partner referral | "Manage subscriptions together" | Household / shared view feature marketing |
| Interest | Landing page shared mode section | "See your combined household subscriptions in one place" | Split view showing individual vs shared |
| Desire | Product demo or onboarding | "You're both paying for Netflix - here's what you could combine" | Duplicate detection feature |
| Action | Share / invite flow | "Invite your partner" | In-app invite with simple permission model |

---

## 4. AIDA to AARRR Mapping

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
