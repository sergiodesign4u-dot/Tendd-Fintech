# Page-level IA - Depth / Pro (node 5)

- **Node:** 5 Depth (Pro-gated). The two surfaces that carry the paid tier: History and Trends (the main Pro-value depth of J-MAIN over time) and Upgrade / Tendd Pro (the conversion screen). One artifact because they are the gate and the thing behind the gate, always seen together.
- **Type:** Pages (History and Trends, Upgrade / Tendd Pro), Section (GC7 Pro Gate and Plan Chip is specified here), States (success, Pro-locked, empty, loading, error, processing).
- **Canonical visual:** `ia/pro.html`.
- **Job:** History and Trends serves J-MAIN over time. Upgrade / Tendd Pro serves no user job; it is decision-justified by D3 (the free vs paid split) and D4 (pricing), and is the one screen in the whole IA that traces to a decision rather than a job (see the Traceability orphan note). Primary persona Emma for trends, Claudia converts fastest.
- **Related:** every Pro gate across the app (5.12 lock, advanced alerts in 3.8, full guide in 4.9, connect-more in 6.14) routes here via GC7. Reuses GC1, GC3 (core.md). GC7 is specified here.

---

## Decisions (recommendations, flagged for review)

- **Upgrade is never a global destination; it is only ever reached from a real gate, and it always shows which gate the person came from.** Traces the Traceability decision (Upgrade is a contextual gate, not a nav item) and the calm principle (no standing "pay us" invitation). Reason: the upgrade prompt is honest only at the moment the person wants the thing it unlocks.
- **The free tier is gated by depth and history, never by the core relief experience or by subscription count.** Traces D3 explicitly, and overrides the older CLAUDE.md "up to 10 subscriptions" line (recorded in the Entities scope note). Reason: D3 is the later locked decision and the source of truth.
- **History and Trends shows the free user a real preview frame (axes, their own category labels) behind the lock, not a fake blurred chart.** Reason: an honest "here is the shape of what you would see" is more trustworthy and more persuasive than a decorative blur, and it fits the trust-first tone.
- **Pricing is presented yearly-first with the monthly equivalent, because $69 a year reads calmer than $7.99 a month for an anxious user, and the yearly plan is the one Tendd prefers.** Traces D4. [? confirm price-anchoring order in testing.]
- **[? draft copy] all copy below is a specific first draft.**

---

## Flow / block order

### 5.12 History and Trends  (Page, Prompt 1 screen 12)

Uses GC1, GC3, GC7. Entities Charge, Subscription, Plan.

Block order:
1. (P) Title: "Your trends." [? draft copy]
2. (P) Time-range selector: 3 months, 6 months, 12 months. Traces D3.
3. (P) Spend-over-time chart placeholder: monthly recurring total across the range. Traces the Charge history.
4. (S) Trend list: per-category or per-subscription change ("Streaming up $6 since March").
5. (S) Export action: "Export as CSV." Pro. Traces D3.
6. (P) Pro-lock overlay for free users: a real preview frame with "See how your spend changes over time with Tendd Pro." -> GC7 -> 5.13. Traces D3.

### 5.13 Upgrade / Tendd Pro  (Page, screen 13)

Uses GC1, GC7 (context). Entity Plan. Serves no user job; decision-justified (D3, D4).

Block order:
1. (P) Title: "Tendd Pro." [? draft copy]
2. (S) Contextual reason: "You came here from Trends." (varies by originating gate). Traces GC7.
3. (P) What Pro unlocks: history and trends, advanced alerts (trial ending, unusual, duplicate), full step-by-step cancel guides and one-tap cancel links, connect more accounts, export. Traces D3.
4. (P) Pricing: "$69 a year (that is $5.75 a month)" as the primary option, "$7.99 a month" as the secondary, and "Lifetime, one payment" [? price TBD $99 to $139, D4]. Traces D4.
5. (P) Upgrade action: "Start Tendd Pro."
6. (S) Positioning line: "Pays for itself with the first subscription you cancel." Traces D4.

### Section GC7 - Pro Gate and Plan Chip (specified here, reused by 2.6, 2.7, 3.8, 4.9, 6.14)

Block order: (1) plan indicator (a small "Free" or "Pro" chip), (2) at a gated feature, a short "what unlocks" line plus an upgrade action into 5.13. Traces the Plan entity, D3, D4. States: free (shows the upgrade affordance at gates), Pro (shows a Pro badge, no gate). Same content on mobile and desktop.

---

## States

| Node | State | What it reads like | Trigger |
|------|-------|--------------------|---------|
| 5.12 | success | Chart plus trend list, full range | Pro user with enough history |
| 5.12 | Pro-locked | Real preview frame plus the upgrade overlay | Free user (D3) |
| 5.12 | empty | "Still gathering your history. Check back in a few weeks." | Paid user with under 3 months of data. Distinct from the Pro lock. Critique fix. |
| 5.12 | loading | Skeleton chart | Fetching history |
| 5.12 | error | "We could not load your trends. Try again." | Load failed |
| 5.13 | default | Unlocks list plus pricing | Reached from any gate |
| 5.13 | processing | "Setting up your Pro plan..." | Payment in progress |
| 5.13 | error | "That payment did not go through. Try another method." | Payment failed |
| 5.13 | success | "You are on Tendd Pro." then returns to the originating gate | Upgrade completed |
| GC7 | free | Upgrade affordance shown at the gate | Free plan |
| GC7 | Pro | Pro badge, no gate | Pro plan |

---

## SEO

Private, behind auth and transactional (the Upgrade screen handles payment). `noindex`, no schema, not a content surface. If Tendd later publishes a public pricing page outside this app repo, that page gets its own SEO from the engine in seo.md; the in-app Upgrade screen does not.

---

## Accessibility

- History time-range selector is a labeled tab or segmented control, keyboard operable, current range announced.
- The chart carries a text summary ("Monthly recurring total, $210 in April rising to $247 in July") so the trend is available without seeing the chart; the chart is not the only way to get the number.
- The Pro-lock overlay does not trap a free user: the preview frame is readable, and the upgrade action is one clearly labeled button, not a full-screen block with no exit.
- Upgrade pricing options are a labeled radio group; the selected plan and its price are announced; the pay button states the amount it will charge.
- Payment processing and result use `aria-live` so a screen reader is told the outcome.
- Tap targets at least 44 by 44 px.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

Cross-checked against Breakpoint Deltas. Two deltas: on desktop, the History trend list (5.12 block 4) may sit beside the chart rather than below it (a stacked-to-side reflow); and Upgrade (5.13) is a candidate to render as a centered modal over the originating screen on desktop, full screen on mobile. GC7 is identical across breakpoints. Breakpoint values set in Wireframes.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - Upgrade is only ever reached from a gate and shows its origin; never a nav item.
  - Free is gated by depth and history, never by count (D3 over the old CLAUDE.md line).
  - History shows a real preview frame behind the lock, not a fake blur.
  - Pricing presented yearly-first with the monthly equivalent (D4).
  - GC7 specified here as canonical.
- **Still [?] (operational or data, not IA):**
  - The lifetime price ($99 to $139, D4). Resolving input: a pricing model.
  - Payment provider specifics (Stripe flows, dunning) are ops, not IA.
  - The exact free connection cap (CLAUDE.md says 2, not restated in D3). Resolving input: a product decision, see account.md.
