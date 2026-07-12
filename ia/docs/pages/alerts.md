# Page-level IA - Stay Ahead / Alerts (node 3)

- **Node:** 3 Stay Ahead. One surface, Alerts / Activity, where price changes, failed payments, and (for Pro) predictive alerts are collected in plain language. It is one artifact because it is a single feed with one item type. This is also the product's return engine: without an external hook this segment does not come back (research BP4).
- **Type:** Page (Alerts / Activity), Section (GC5 Alert Item is specified here), States (success, empty, loading, error).
- **Canonical visual:** `ia/alerts.html`.
- **Job:** J4 (stay ahead of financial surprises). Primary persona Emma (surprises trigger her avoidance loop, being warned first converts threat into control); Claudia uses it to catch price changes deliberately.
- **Related:** an alert taps through to 2.7 Subscription Detail; a price-change alert can hand off to 4.9 Cancel Guide; Pro alert types hit the GC7 gate into 5.13 Upgrade. Reuses GC1, GC2 (navigation.md), GC7 (pro.md). GC5 is specified here.

---

## Decisions (recommendations, flagged for review)

- **The alert feed is chronological, newest first, with no unread badge count on the tab by default.** Traces the calm principle: a red number-badge on a tab is exactly the urgency Emma closes apps over (personas.md, avoid red and urgent language). A single quiet dot for "new since last visit" is used instead of a count. [? confirm the dot vs count choice in usability testing.]
- **Every alert is written in active voice, first person for the product ("we could not take your payment"), never passive ("payment declined").** Traces master-research M1 (Monzo principle). This is a copy rule for GC5, enforced here.
- **Free alerts (price change, payment failed) and Pro alerts (trial ending, unusual charge, duplicate) live in the same feed; Pro alerts render as a gated, blurred-with-label item for free users, not hidden.** Traces D3. Reason: showing that Tendd noticed something, and that Pro would explain it, is a truthful upgrade prompt at a real moment, not a nag.
- **An empty feed is a healthy state, phrased as reassurance, not absence.** "All clear. Nothing needs your attention." Reason: for an anxious user, "no alerts" should feel like calm, not like something is missing.
- **[? draft copy] all copy below is a specific first draft.**

---

## Flow / block order

### 3.8 Alerts / Activity  (Page, Prompt 1 screen 8)

Uses GC1, GC2, GC5, GC7. Entities Alert, Charge, Subscription.

Block order, top to bottom:
1. (P) Title: "Alerts." [? draft copy]
2. (P) Alert list, newest first, each item a GC5 Alert Item. See the GC5 spec below.
3. (S) Pro alert types appear inline as gated items for free users (blurred body plus "Tendd Pro explains this") -> GC7 -> 5.13. Traces D3.

### Section GC5 - Alert Item (specified here, reused by 2.6 banner and 2.7)

Block order: (1) alert type icon and label, (2) the plain-language, active-voice message, (3) the related subscription (logo and name), (4) exactly one suggested next action.

Message drafts by type:
- **Price change (free):** "Netflix went up from $12.99 to $15.99. Your next payment is 12 Aug." Action: "See Netflix" -> 2.7 price-change state.
- **Payment failed (free):** "We could not take your Spotify payment on 3 Jul. Spotify will usually try again." Action: "What to do" -> 2.7 payment-failure state.
- **Trial ending (Pro):** "Your Notion trial ends in 3 days, then it becomes $8 a month." Action: "See Notion". Gated for free.
- **Unusual charge (Pro):** "Adobe charged $59.99 this month, more than its usual $22.99." Action: "See Adobe". Gated for free.
- **Duplicate (Pro):** "You seem to pay for two cloud storage plans, iCloud and Google One." Action: "Compare them". Gated for free.

Traces the Alert entity, J4, M1 (active voice), D3 (free vs Pro split). States: free type (full), Pro type (gated for free users, full for Pro), read vs new. No mobile/desktop content difference (banner on Home, row here).

---

## States

| Node | State | What it reads like | Trigger |
|------|-------|--------------------|---------|
| 3.8 | success | A feed of GC5 items, newest first | One or more alerts exist |
| 3.8 | empty | "All clear. Nothing needs your attention." calm, reassuring | No alerts (Flow D). A healthy state, not an error. |
| 3.8 | loading | Skeleton alert rows | Fetching alerts |
| 3.8 | error | "We could not load your alerts. Try again." with a retry | Load failed (Flow D) |
| GC5 | gated (Pro type, free user) | Item visible, body blurred, "Tendd Pro explains this" plus upgrade | A Pro alert type for a free user (D3) |
| GC5 | new | A quiet dot, no red count | Arrived since last visit |

---

## SEO

Private, behind auth. `noindex`, no schema, not a content surface.

---

## Accessibility

- The feed is a list; each GC5 item is a group with an accessible name combining type, subscription, and message ("Price change, Netflix, went up to $15.99").
- A newly arrived alert is announced once via an `aria-live="polite"` region, never an assertive interruption (calm principle).
- The single next-action per item is a real button, keyboard reachable, distinct from tapping the item body.
- Gated Pro items expose their gated status to assistive tech ("Tendd Pro feature") rather than presenting a blurred body with no explanation.
- Tap targets at least 44 by 44 px.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

Cross-checked against Breakpoint Deltas. No structural delta: Alerts is a single-column feed on every breakpoint, wider with more margin on desktop. GC2 shifts from bottom bar to left rail (navigation.md). GC5 appears as a banner on Home (2.6) and as a row here; that is placement, not a breakpoint change.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - One chronological feed, quiet "new" dot instead of a red count.
  - Active-voice copy rule for GC5, drafted per alert type.
  - Pro alert types shown as gated items in the same feed, not hidden (D3).
  - Empty feed framed as reassurance.
  - GC5 specified here as canonical.
- **Still [?] (operational or data, not IA):**
  - The dot-vs-count choice pending usability testing.
  - Notification delivery model (push, weekly email digest cadence) is a retention/ops decision, not IA. Resolving input: the notification build (Resend, web push) and the digest schedule.
  - Detection thresholds for "unusual" and "duplicate" are a data question, not IA.
