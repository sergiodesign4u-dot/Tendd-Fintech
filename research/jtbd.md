# JTBD - Tendd

**Built on:** research/personas.md, research/master-research.md (v_refresh), research/strategy.md, research/ux-patterns.md.
**Status:** Draft - critique and open [?] items in Part 4.

---

## Part 1: Main Job of the Product

**J-MAIN: When I suspect I am paying for things I forgot about or never use, I want to see all my recurring charges clearly in one calm view, so that I feel in control of my money without needing to become a finance person.**

This is the fused primary job (J1 + J2 from strategy.md). It is the reason the product exists.

- Persona: Emma (primary). Also relevant to Ravi and Claudia, with different activation paths.
- Research basis: strategy.md Segment A JTBD (confirmed); master-research.md key conclusion 1; competitive-analysis.md gap G1 (calm, focused subscription tracker is the unoccupied position).
- Evidence of demand: 42% of consumers forgot they were being charged for a subscription (O2 in personas.md, citing C+R Research 2022 via huffpost.com). Consumers underestimate subscription spend by $133/month (O3).
- Evidence that the emotional framing is real: "The mental relief of knowing I'm not bleeding cash to forgotten subscriptions was priceless." (O7 in personas.md, from productivewithchris.com.)
- What makes it different from competitors: no competitor has designed the first subscription view as a calm emotional experience. Every competitor leads with a dashboard, a budget, or a bank connection request. (competitive-analysis.md P1, P2.)

---

## Part 2: Related Jobs (on the path to J-MAIN)

These are the jobs a user encounters before, during, or after the main job.

---

### J1: Activate without anxiety (the trust job)

**"When I land on a new app that asks for my financial data, I want to see what the product can do for me before I decide whether to trust it with my bank account, so that I only share my data when I have a clear reason to."**

- Persona: Emma (primary); Ravi (stronger version of this job - his line is "never connect bank").
- Research basis: Every bank-connected competitor asks for bank access in step 1 (competitive-analysis.md P1). 68% of users are uncomfortable with apps' access to financial data (O16, personas.md, from bankingdive.com). 4 in 5 users did not know apps store bank usernames and passwords (O17).
- Behavioral pattern: BP1 (financial avoidance, ux-patterns.md) - the anxious user closes the app before connecting a bank if there is no pre-trust value.
- Product consequence: two explicit activation paths (bank-connected and privacy-first) must both converge on the same aha moment. The trust job must be resolved in onboarding before the main job becomes accessible. (master-research.md section 2, strategy.md section 3 O1.)
- Competitors that close this job partially: Apple Card (benchmark C8 = 4/5, shows value before commitment). No direct competitor closes it fully. (benchmark-trust.md.)

---

### J2: Identify and cancel unused subscriptions (the cut job)

**"When I am looking to reduce my monthly spend, I want to quickly identify which subscriptions I actually use vs. which ones I keep forgetting to cancel, so I can free up money without a complicated process."**

- Persona: Claudia (primary for this job); Emma and Ravi (secondary - both would act if shown a clear cancelled subscription is saving them money).
- Research basis: strategy.md Segment B JTBD and J3; 40.3% of subscribers cancelled at least one subscription in 2024 (O26, personas.md, from adapty.io); 48% forgot to cancel a free trial (O5).
- Emotional peak: the cancel-and-save moment is the most emotionally powerful moment in the product. "After it saved me $400 in 15 minutes, I'd say it is." (O from personas.md Claudia, from finance.yahoo.com.) No competitor has designed this moment as a positive emotional experience (competitive-analysis.md gap G4).
- Product consequence: cancel guides and direct cancel links are a Pro feature. The upgrade trigger lives here. (master-research.md AARRR Revenue stage.)
- Competitors that close this job: Rocket Money (cancellation concierge, but human-mediated and percentage-fee). ReSubs (30+ step-by-step cancel guides, no bank required). Neither offers the emotional experience of "you found money and we made it easy to keep it."

---

### J3: Understand what a charge actually is (the clarity job)

**"When I see an unfamiliar charge on my statement, I want to know immediately what it is, which subscription it belongs to, and whether I authorized it, so that I can decide to keep it or act on it without having to investigate."**

- Persona: Emma (primary - she cannot decode cryptic bank codes, which is one reason she avoids looking; personas.md P2). Also Claudia (sees unknown charge, triggers the motivated-cutter behavior).
- Research basis: Apple Card mechanism M3 from master-research.md (real merchant names and logos replace cryptic bank codes). N26's EU merchant cleanup validates this as table stakes (strategy.md J5, citing support.apple.com/en-us/102329 and n26.com).
- Behavioral pattern: BP2 (pattern recognition over analysis, ux-patterns.md) - users recognize Spotify and Netflix logos instantly; they cannot process "SPOTIFYAB STOCKHOLM."
- Product consequence: transaction enrichment (real names, logos, categories) is a required feature at the subscription card level, not a nice-to-have. The first view of the subscription list must show recognizable names.
- Competitors that close this job: Apple Card (best in class, not a subscription tracker). Rocket Money uses Plaid enrichment. No subscription tracker has made this a front-page differentiator.

---

### J4: Stay ahead of financial surprises (the alert job)

**"When a subscription price changes, a payment fails, or a trial is about to convert, I want to be notified immediately in plain language, so I am never caught off guard by an unexpected charge."**

- Persona: Emma (primary - surprise charges trigger her avoidance loop; being warned first converts the experience from threat to control). Claudia (secondary - she is already monitoring but wants to catch changes automatically).
- Research basis: strategy.md J4 (confirmed); ux-patterns.md BP3 (action on surprise - users act when notified, not when reminded to review). Monzo principle M1 from master-research.md: active voice in financial notifications ("we couldn't process your payment" not "payment declined").
- Product consequence: price-change alerts and payment failure alerts are retention architecture, not features. (ux-patterns.md BP4 - without external hooks, users do not return.) The weekly email digest and push notifications are the return engine.
- Competitors that close this job: Rocket Money, Emma, PocketGuard all offer price change alerts [? behind login, not verified from public pages]. No competitor has made the notification design itself a trust-building experience rather than a push marketing channel.

---

### J5: Track subscriptions without sharing bank data (the privacy job)

**"When I want to understand my subscription spend, I want to track all my recurring charges without giving any app access to my bank account, so I feel in control of my money and secure at the same time."**

- Persona: Ravi (primary - this is his defining job; personas.md Ravi context and jobs). Emma uses this job secondarily before she has decided to trust the product enough to connect her bank.
- Research basis: strategy.md J6 (new, confirmed by ReSubs). ReSubs built 18,000+ users and 4.5 stars Google Play entirely on a no-bank-connection model (O8, personas.md). 68% of users uncomfortable with app access to bank data (O16). The privacy-or-convenience binary is a confirmed market gap (competitive-analysis.md P3).
- Product consequence: manual entry + AI screenshot import + email receipt parsing must be a first-class activation path with equal visual weight to bank connection. The privacy path is not a fallback - it is a primary path for a confirmed segment. (master-research.md AARRR Activation MVP decision.)
- Competitors that close this job: ReSubs (best in class, no bank required). Bobby (manual only, iOS only). No competitor offers privacy AND automation in one product.

---

## Part 3: Emotional and Social Jobs

These sit under or alongside the functional jobs. They are not visible in a feature list but drive the actual decision to use and recommend the product.

---

### E1: Feel financially competent without being a finance person

**"When I use a money app, I want to feel like a capable adult who is on top of their finances, not like a person being judged for their spending choices, so that I keep using it and don't feel worse about myself."**

- Persona: Emma (primary). The avoidance behavior (personas.md P1, ux-patterns.md BP1) is partly about shame: looking at the real number feels like evidence of incompetence.
- Research basis: Monzo's design principle of "celebrating financial small wins" addresses this exactly. Bobby user quote: "The app helped me get organized and being prepared for monthly expenses helped alleviate some anxiety." (O14, personas.md, from justuseapp.com.) The cancel-and-save moment is framed as a win, not a correction.
- Product consequence: every screen must be judgment-free. No red. No language implying failure. The subscription list is presented as discovery, not audit.

---

### E2: Experience the small win (the pride moment)

**"When I find a forgotten subscription or save money by cancelling, I want to feel the satisfaction of that moment, so that I associate the product with positive emotions and tell people about it."**

- Persona: Emma (primary after activation). Claudia (primary at cancellation - her whole session is oriented toward this moment).
- Research basis: "Getting rid of those felt like a little pay raise" (O7, personas.md, from checkthat.ai). "I was shocked when I entered all my subscriptions and saw the yearly total" (O15, personas.md, from 19pine.ai - this shock is positive). The cancel-and-save moment is identified as the most shareable moment in the product (master-research.md key conclusion 3).
- Product consequence: the cancel-and-save moment must be designed explicitly - not a generic success toast but a moment with specific numbers ("you just freed up $14.99/month, that's $179.88/year"). This is also where the share prompt lives (master-research.md AARRR Referral MVP decision).

---

### E3: Feel safe sharing data (the trust maintenance job)

**"When I am using an app that holds my financial patterns, I want to know at any moment what it knows about me and be able to remove it completely, so that I never feel trapped or surveilled."**

- Persona: Ravi (primary - this is an ongoing job, not just onboarding). Emma (secondary - she needs to know this is possible even if she never exercises it).
- Research basis: over half of consumers prefer built-in app settings to manage data permissions (O20, personas.md, from bankingdive.com). 4 in 5 users did not know apps store their bank credentials (O17). Monarch Money makes "we do not sell your data" a front-page trust signal (master-research.md D3 gap - no subscription tracker does this prominently).
- Product consequence: data deletion must be one tap. Data use must be explained in plain language on the first screen. These are not legal checkbox features - they are the trust infrastructure for both personas.

---

### S1: Share the discovery (the social job)

**"When I discover how much I'm spending on subscriptions, I want to share the number or the list with a friend, so that I feel connected to the experience and others can benefit from it too."**

- Persona: Emma after activation; Claudia after a cancel win.
- Research basis: master-research.md H2 (Spotify Wrapped-style share is a hypothesis). Rocket Money's top testimonials all reference this moment - users tell friends. (master-research.md AARRR Referral stage; competitive-analysis.md gap #4.) The specific format (subscription count + total spend, no bank data visible) is the privacy-safe shareable card.
- Note: this is a hypothesis about virality (marked [? hypothesis] in master-research.md). Real share rates are unknown. The product must design for shareability but cannot count on it.

---

## Part 4: Hypotheses (Jobs Without Sufficient Evidence)

These are jobs that appeared in early research or design thinking but do not yet have direct user evidence. They go here, not into the main list.

**JH1 [? hypothesis]: Tracking shared household subscriptions**
"When my partner and I want to understand our combined subscription spend, I want a shared view, so we stop paying for duplicates."
- Basis: strategy.md Segment C (later stage). Emma and Monarch both added shared modes (master-research.md). Validated as a real need but confirmed as too complex for MVP. This job is out of scope.
- Why it is a hypothesis: no interview data confirms that anxious millennials feel this job acutely before they have solved their individual subscription visibility. The product must serve J-MAIN for one person before adding a second person to the equation.

**JH2 [? hypothesis]: AI conversation about subscriptions**
"When I want to understand my spending patterns, I want to ask questions in plain language, so I can get answers without learning the app's interface."
- Basis: Monarch Money added an AI assistant. Copilot Money uses AI categorization. But ux-patterns.md explicitly rules this pattern out: conversational AI creates uncertainty for the anxious user rather than reducing it. Cognitive load is the wrong direction for Segment A.
- Why it is a hypothesis and not a job: no user evidence supports this desire in our segment. It is a feature-push from the competitive landscape, not a pull from our users.

---

## Part 5: JTBD Matrix

Rows are jobs. Columns are personas. Score 1-3 (3 = most important for this persona). FUNCTION = what closes the job. COMPETITORS = who already closes it.

| Job | Emma (Primary) | Ravi (Secondary) | Claudia (Secondary) | FUNCTION in Tendd | COMPETITORS |
|-----|---------------|-----------------|-------------------|-------------------|-------------|
| J-MAIN: See all recurring charges calmly | 3 | 3 | 2 (she wants this but is more action-oriented) | Guided Reveal onboarding + calm subscription list view | Rocket Money (but buried under feature depth). Emma (same). ReSubs (no auto-detect). Bobby (manual only, iOS). None fully close calm + auto-detect. |
| J1: Activate without anxiety / trust job | 3 | 3 | 1 (she will connect bank fast) | Demo mode + dual onboarding paths + trust statements before bank request | Apple Card (4/5 benchmark C8). No subscription tracker closes this fully. |
| J2: Identify and cancel unused subs | 2 (wants this but it is secondary to the reveal) | 2 | 3 | Cancel guides + direct cancel links (Pro feature); cancel-win moment | ReSubs (30+ guides). Rocket Money (concierge but percentage fee). Hiatus. |
| J3: Understand what a charge is | 3 (P2 pain, she avoids looking because of cryptic codes) | 2 | 2 | Real merchant names + logos + categories at card level | Apple Card (best, not a tracker). Rocket Money uses Plaid enrichment [? behind login to confirm]. |
| J4: Stay ahead of surprises / alerts | 2 | 2 | 3 (she specifically wants to catch price changes) | Price-change alert + payment failure alert + weekly email digest | Rocket Money, Emma, PocketGuard all offer alerts [? behind login]. None make notification design a trust signal. |
| J5: Track without sharing bank data | 1 (she will connect bank eventually but wants this path available) | 3 | 1 | Privacy-first path: manual + AI screenshot import + email scan | ReSubs (best, no bank required). Bobby (manual, iOS only). No middle path exists anywhere. |
| E1: Feel competent, not judged | 3 | 2 | 1 (less anxious, more pragmatic) | Judgment-free visual design + plain language throughout | Monzo (closest in tone, not a subscription tracker). No subscription tracker has made this a design pillar. |
| E2: The small win / pride moment | 2 | 2 | 3 | Cancel-win moment with specific $ saved; share card | No competitor has designed this moment. Gap confirmed. |
| E3: Feel safe and in control of data | 2 | 3 | 1 | One-tap data deletion + plain-language data explanation on first screen | Monarch Money mentions data non-sale (master-research.md D3). No subscription tracker makes this front-page. |
| S1: Share the discovery | 2 | 1 (more private) | 2 | Privacy-safe snapshot card (count + total, no bank data) | No competitor has built this as a deliberate feature. |

---

### Matrix Conclusion: 3 Jobs for the MVP Core

The three jobs that are (a) important for the primary persona (Emma) AND (b) not closed by the market:

**MVP CORE JOB 1: J-MAIN + J1 (See all recurring charges calmly + trust before bank)**
No competitor combines calm design, automatic detection, AND trust-building before bank connection. This is the clearest gap. The Guided Reveal onboarding is the product-level response.

**MVP CORE JOB 2: J3 (Understand what a charge actually is)**
Real merchant names and logos are table stakes that no subscription tracker has made a brand differentiator. This is activation-level quality - Emma cannot feel relief if half the subscription list says "AMZN MKTP US*AB12CD."

**MVP CORE JOB 3: J5 (Privacy path to the same aha moment)**
ReSubs confirms the segment exists and is willing to pay. No product offers privacy AND automation in one experience. Building the privacy-first path as equal to bank connection closes a gap that all bank-connected competitors ignore.

---

### Candidate-for-Cut Functions (Closes No MVP Core Job)

- **AI conversation interface (JH2):** Closes no confirmed job for our primary or secondary personas. Adds cognitive load, the opposite of our differentiator. Cut.
- **Budget envelopes and spending goals:** Addresses Segment B and C needs but not Segment A. Introduces complexity and judgment - the opposite of calm visibility. Cut from MVP.
- **Credit score monitoring:** No job in our personas requires it. It is a feature that signals "this is a full finance app," which actively hurts trust with Emma. Cut.
- **Investment tracking:** Same as above. Out of scope (CLAUDE.md).
- **Bill negotiation (percentage fee):** Closes J2 but with a revenue model that misaligns incentives (master-research.md D1). Cut from business model entirely, not just MVP.

---

## Part 6: Critique

### 6A. Claim Audit

| Claim | Source type | Status |
|-------|-------------|--------|
| 42% of consumers forgot they were being charged for an unused subscription | Cited research (C+R Research 2022 via huffpost.com) | Confirmed |
| Consumers underestimate subscription spend by $133/month | Cited research (C+R Research 2022 via huffpost.com) | Confirmed |
| 68% of users uncomfortable with app financial data access | Cited research (Banking Dive, 2024) | Confirmed |
| 4 in 5 users unaware apps store bank credentials | Cited research (Banking Dive, 2024) | Confirmed |
| 58% of millennials experience financial anxiety 3+ days/week | Cited research (Motley Fool 2024) | Confirmed |
| ReSubs 18K+ users on no-bank model | Cited, source: resubs.app | Confirmed |
| Bobby 4.7/5 from 8,000+ iOS reviews | Cited, source: 19pine.ai citing App Store | Confirmed |
| Cancel-and-save moment is most emotionally powerful | Confirmed from research + multiple user quotes | Confirmed |
| Calm visibility reduces anxiety rather than triggering more avoidance | This is the riskiest assumption (strategy.md H0) | PARTIALLY SUPPORTED. Cornell research (news.cornell.edu/node/331238) found people anticipate financial talk will increase anxiety but the opposite is true. Relief comes from engaging, not just from calm design. Still requires prototype test with avoiders. |
| Emma's avoidance is driven by shame about incompetence (E1) | Updated by post-persona research (June 2026) | CONFIRMED AND REFINED. PMC/NCBI research confirms avoidance is triggered by "threat to positive self-image" (pmc.ncbi.nlm.nih.gov/articles/PMC11522046). The framing "what you signed up for" is less threatening than "what you spent." |
| The Guided Reveal produces relief rather than a second wave of avoidance | Was same as riskiest assumption | DESIGN REFINED. Post-persona research confirmed gradual exposure (clinical exposure therapy model) outperforms a single full reveal for anxiety reduction. The Guided Reveal must be progressive: count before total, categories before individual items. This is a meaningful design change. Source: anxietycanada.com/sites/default/files/FacingFears_Exposure.pdf |
| Users share their subscription total with friends (S1) | Hypothesis - consistent with Spotify Wrapped analogy and Rocket Money testimonials | [?] Remains hypothesis. No direct evidence of share rates found. |
| Ravi would grant Gmail access more readily than bank access | Hypothesis - not tested | REMAINS [?] - ESCALATED. Post-persona research found NO direct evidence for email access vs. bank access preference. Manual entry is confirmed as most trusted (budgetvault.app). Gmail scan must be user-tested before it is built as a primary path. |
| J4 notifications build trust if designed like Monzo's active-voice principle | Hypothesis - consistent with Monzo benchmark (master-research.md M1) but not tested for this product | [?] Remains hypothesis. No new evidence. |

---

### 6B. Danger List (Updated After Re-Research, June 2026)

In priority order:

**DANGER 1 (Highest priority - NARROWED): Does calm, GRADUAL visibility convert financial avoiders?**
- Updated: The question is no longer "does calm design reduce anxiety?" (Cornell research gives indirect positive evidence). The more precise question is whether the Guided Reveal - specifically the gradual, progressive version - works for people who actively avoid checking finances.
- What changed: Post-persona research confirms (a) 44% of US adults actively avoid financial accounts (Discover survey), (b) engagement with controllable finances produces relief, not more anxiety (Cornell), and (c) gradual exposure is the clinical mechanism, not single-reveal (exposure therapy literature). The "single total first" version of the Guided Reveal may be replaced by "count first, then categories, then total."
- Decision it affects: the exact sequence of the Guided Reveal onboarding. This is a wireframe-level decision.
- Smallest test: a prototype with the gradual sequence (count first, then categories with logos, then total as a reveal moment), shown to 5-8 people screened for financial-avoidance behavior. Pass signal: majority complete the reveal and report relief. (strategy.md section 5 full spec still applies.)

**DANGER 2 (High priority - PARTIALLY RESOLVED): What drives Emma's avoidance?**
- What changed: Post-persona research (June 2026) found clinical confirmation that avoidance is driven by TWO mechanisms: (1) financial information as a "scarcity cue" that triggers negative emotions about self-image, and (2) fear of spiraling into complexity (The Financial Brand). The self-image mechanism means framing matters: "what you have signed up for" (neutral, control) vs. "what you spent" (judgment). The complexity-fear mechanism means one-thing-at-a-time design is clinically justified, not just a UX preference.
- Decision it affects: the copywriting and framing throughout onboarding. This is a design and content decision, not a build/no-build decision.
- This danger is de-escalated from blocking to "resolved at the design level, test in prototype."

**DANGER 3 (Medium priority - ESCALATED): Is Gmail scan actually trusted by privacy-first users?**
- What changed: Post-persona research found NO direct evidence that email access is trusted more than bank access. Manual entry is confirmed as most trusted. Gmail scan is an untested assumption.
- Decision it affects: the design of Ravi's activation path. If Gmail scan is not trusted, the only reliable privacy-first path is manual entry with a strong preset library. This affects build priority: presets are needed for launch; Gmail scan can be shipped later after validation.
- Where to answer: primary user research (cannot be answered by web research). Ask 5 privacy-conscious users to react to descriptions of three import methods (manual, Gmail scan, screenshot). Capture their reasoning. Do not build Gmail scan as a launch-day feature.

---

### 6C. Three Targeted Questions for User Research (Updated)

**Q1 (Closes Danger 1):** Does a gradual Guided Reveal (count first, then categories, then total) produce relief for financially avoidant users - and does it outperform a single-total-first reveal?
Answer method: A/B prototype test with 5-8 people screened for financial-avoidance behavior. Version A: shows total first, then subscription list. Version B: shows count, then categories with logos, then total as climax. Measure: completion rate, emotional state after, desire to see their own data.

**Q2 (Closes Danger 2 - partially resolved, confirm in test):** Does framing subscriptions as "what you have signed up for" reduce anxiety more than "what you spent" - and does the word "committed" (PocketGuard model) feel controlling or clarifying?
Answer method: in the prototype test (same sessions as Q1), vary the headline copy and observe reactions. This is a low-cost test layered on top of Q1.

**Q3 (Closes Danger 3):** For privacy-conscious users, does Gmail scan feel more or less invasive than bank connection - and would they use it at all given a fully manual alternative with presets?
Answer method: 5 users who self-identify as privacy-conscious. Present three import options with plain-language descriptions (no marketing language). Ask them to react. Capture specific fears. Determine whether Gmail scan is a path worth building at launch or better shipped as v2 after manual-first is validated.
