# UX Patterns - Tendd

**Source:** Based on validated v2 product model, Phase 3 competitive analysis, Phase 4 benchmark research.

---

## 1. Core User Behavior Patterns

Based on the validated audience analysis (Segment A: Anxious Millennial, Segment B: Frugal 30-Something), these are the 4 core user behavior patterns that any UX design must accommodate.

### BP1: Financial Avoidance and Reluctant Engagement (MOST CRITICAL - entry point)

**What it is:** The primary user actively avoids thinking about money in detail. They do not open banking apps proactively. They are motivated to engage only when anxiety exceeds avoidance - a "trigger event" like a surprise charge, a yearly subscription renewal notification, or a moment of general financial stress.

**Why this is the entry point:** Every design decision must begin here. If the first screen increases anxiety or demands effort, the user closes the app and does not return. The first session must convert avoidance into a moment of control. The product should feel like relief, not homework.

**Design implication:** The first screen shows one number (monthly total) and one action (see what's in it). Nothing else. No configuration, no tutorial, no feature tour.

**Evidence:** Monzo's "positive friction" research confirms financial-avoidance behavior in their user base (source: econsultancy.com/prudent-ux-for-banking-monzo-designs-positive-friction). Phase 3 gap analysis shows no competitor has solved the pre-trust, pre-connection value problem.

---

### BP2: Pattern Recognition Over Analysis

The user is comfortable recognizing familiar brands (Spotify, Netflix, Adobe) but uncomfortable doing math or reading charts. They scan, they do not analyze. A good design for this user shows brand logos and recognizable names (Apple Card mechanism #3 from benchmark), not transaction codes or pie charts.

**Design implication:** Subscription cards use logos and real names. Numbers are secondary to recognition.

---

### BP3: Action on Surprise

Users take action when they are surprised - not when they are reminded to review their budget. The trigger is an unexpected charge, a price increase, or seeing a subscription they forgot about. Design should surface surprises as positive discoveries ("look what we found") rather than alarms ("warning: unexpected charge").

**Design implication:** The "new subscription found" or "price changed" notification is the highest-engagement moment. Design it as a reveal, not an alert.

---

### BP4: Low Return Frequency Without an External Hook

Without a reason to return, the user will not open the app again after the first session. They are not tracking a budget, so there is no weekly review habit. The only reliable return hooks are external: a notification, an email digest, or a significant financial event.

**Design implication:** The weekly email digest and price-change alerts are not features - they are the retention architecture. The product without them has no return engine.

---

## 2. Five Fundamentally Different UX Patterns

### Pattern A: Automated Dashboard (Hub-and-Spoke)

**How it works:** A central dashboard shows all subscriptions automatically detected from bank data. The dashboard is the home screen. Each subscription is a card with logo, name, amount, next date. The total sits prominently at the top.

**Where it's used:** Rocket Money, Hiatus, Emma. This is the dominant pattern in the category.

**When it fits:** When the user has connected a bank account and trusts the product to read their data. Works best after trust is established. Delivers the highest-quality subscription list (automatic, comprehensive) with the least user effort.

**When it breaks:** In the first session, before trust is earned. A user who has not yet connected a bank sees an empty dashboard - which creates anxiety ("this app doesn't work") or friction ("I have to connect my bank before I can see anything?"). Also breaks for users who have multiple banks or whose subscriptions are spread across cash, PayPal, and card.

---

### Pattern B: Manual-Entry Calendar (Temporal)

**How it works:** The user manually enters each subscription. The primary view is a calendar or timeline: upcoming payments are shown by date. The total for the month is visible. No bank connection required.

**Where it's used:** Bobby (calendar/list hybrid), Tilla, many early mobile subscription trackers.

**When it fits:** For privacy-conscious users who do not want to connect a bank. Works well for users with a small number of predictable subscriptions. The calendar view is inherently calming because it makes the future visible and finite.

**When it breaks:** When the user has 8+ subscriptions (manual entry becomes a chore that exceeds the value). Does not auto-detect new subscriptions. User must maintain it themselves, which breaks the "low effort" requirement for Segment A.

---

### Pattern C: Guided Reveal (Story Flow)

**How it works:** Onboarding is structured as a progressive reveal - each step shows the user something new about their subscriptions. Step 1: "Here's your monthly total." Step 2: "Here are your subscriptions by category." Step 3: "Here are 2 you might want to review." The UI guides the user through their data as a narrative, not a dashboard.

**Where it's used:** Not used by any current competitor as a primary UX pattern. Elements of it appear in Copilot Money's initial data import flow. Spotify Wrapped uses this pattern for annual listening reviews.

**When it fits:** Perfect for the first session of an anxious user. Turns financial data review from a task into an experience. The "reveal" framing makes discovery feel like a win rather than an audit. Highly shareable (Spotify Wrapped effect).

**When it breaks:** As a primary ongoing pattern (after the first session), it creates friction - the user wants to quickly check one subscription or see the total, not be walked through a guided tour. Must transition to a simpler ongoing view after onboarding.

---

### Pattern D: Notification-First (Push-Driven)

**How it works:** The product is primarily experienced through notifications, not the app. A push or email alert tells the user when something changed (price increase, new subscription detected, payment failure). The app is a secondary surface - users open it only when notified.

**Where it's used:** Elements used by Rocket Money and Emma (price-change alerts), Hiatus (bill negotiation prompts). Not used as a primary UX pattern by any competitor.

**When it fits:** For users with high return-visit drop-off who will not open the app proactively. If the notification content is useful and trustworthy (Phase 4 benchmark, Monzo's notification principles), it keeps the product alive even with very low in-app engagement. Works well as a retention layer.

**When it breaks:** When notifications are too frequent, generic, or promotional (the Emma problem, source: orbitmoney.io). Users turn off notifications entirely. Notifications must be earned: only send when something genuinely changed, and never send promotional push.

---

### Pattern E: Conversational / AI-Assisted

**How it works:** The user interacts with a chat or AI interface to manage subscriptions. "Show me what I'm paying for." "Cancel my gym membership." "What changed this month?" The AI pulls the data and responds in plain language.

**Where it's used:** Copilot Money uses AI categorization (not full conversation), Monarch Money added an AI Assistant (source: monarch.com). No competitor has fully committed to this pattern as primary.

**When it fits:** For users who are comfortable with chat interfaces and prefer asking over navigating. Removes the need to design complex visual information hierarchies.

**When it breaks:** For the anxious non-financial user, an AI chat can feel unpredictable and opaque. "Is it doing this correctly?" creates more anxiety, not less. Also breaks for mobile-first users who are in quick-check mode - a conversation requires more cognitive load than a scan.

---

## 3. Pattern Selection for Tendd

### Primary Choice: Pattern C (Guided Reveal) for onboarding + Pattern A (Automated Dashboard) for return sessions

**Why this combination:**

1. **It solves the avoidance problem (BP1) without sacrificing power.** The Guided Reveal first session gives the anxious user a single-job experience: "Let me show you what's happening." No choices, no configuration, no empty dashboard. After the first reveal, the user has seen their data and is ready for the ongoing dashboard view.

2. **It matches the JTBD of calm clarity (J2).** The Guided Reveal is the only pattern that treats the first subscription view as a designed emotional experience - not a data dump. This directly addresses the competitive gap identified in Phase 3 (nobody has designed the cancel moment or the discovery moment as a positive experience).

3. **It creates a natural upgrade trigger.** The Guided Reveal ends at a natural inflection point - after seeing their subscriptions, the user is most motivated to act (cancel, investigate, share). This is where the upgrade to paid is most likely to convert.

**Evidence:** Spotify Wrapped's annual reveal generates massive organic sharing. Apple Card's first transaction clarity screen is described as a "relief moment" by reviewers. Phase 3 identified "calm reveal as emotional experience" as a gap no competitor fills. Source: competitive-analysis.md gap #4.

---

### Alternative Under Condition X

**If bank connection adoption is below 20% in the first 3 months:** Switch the primary path to Pattern B (Manual-Entry Calendar) with Pattern C (Guided Reveal) as an optional overlay. Reason: if users will not connect a bank, auto-detection fails entirely and the product has no value. A manual-entry model with a polished calendar view (Bobby-style) preserves the calm, low-friction value even without bank data. The transition to auto-detection can be positioned as an upgrade ("Connect your bank to find subscriptions we might have missed").

---

### Pattern That Does NOT Fit: Pattern E (Conversational / AI-Assisted)

**Why it does not fit Tendd:**

Our primary differentiator is calm, low-cognitive-load clarity. A conversational interface is inherently higher cognitive load - the user must formulate a question, wait for a response, and evaluate whether the answer is correct. For an anxious non-financial user, this creates new uncertainty ("did it get that right?") rather than removing existing uncertainty.

Conversational AI also breaks the "glanceable" requirement. The user needs to open the app and immediately know: "How much am I paying? What's new? Is anything wrong?" These are questions answered by a well-designed dashboard in 3 seconds. A conversation takes 10-30 seconds minimum, with no guarantee of the right answer.

This connects directly to our core differentiator: we are not building a powerful financial AI assistant. We are building a calm, clear, trustworthy view of recurring payments. The product must feel like a well-organized drawer, not a smart assistant.
