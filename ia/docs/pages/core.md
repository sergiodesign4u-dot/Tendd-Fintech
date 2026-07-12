# Page-level IA - Core (node 2)

- **Node:** 2 Core. The steady-state product: the calm list a person returns to, and the detail behind any one subscription. This is where J-MAIN lives after onboarding, and where the Save tab lands (FLAG 1). One artifact because Home and Subscription Detail are a list-and-detail pair that share the same data and, on desktop, the same view.
- **Type:** Pages (Home, Subscription Detail), Sections (GC3 Recurring Summary Strip and GC4 Subscription List Item are specified here and reused elsewhere), States (success, empty, loading, sync-error, save-focus, unrecognized-charge, price-change, payment-failure).
- **Canonical visual:** `ia/core.html`.
- **Job:** J-MAIN (see all recurring charges calmly) and E1 (feel competent, not judged) on Home; J3 (understand what a charge is) and J4 (its alerts) on Detail. Primary persona Emma; Claudia uses the save-focus view of Home heavily.
- **Related:** entered from 1.5 Guided Reveal; the "+" reopens 1.4 Add Subscription; a subscription's Cancel action goes to 4.9 Cancel Guide; the history link goes to 5.12 History and Trends behind GC7. Reuses GC1 and GC2 (navigation.md), GC5 (alerts.md), GC6 (account.md), GC7 (pro.md).

---

## Decisions (recommendations, flagged for review)

- **FLAG 1 resolved: the Save tab lands on Home in a "save-focus" state, not a new screen.** The skeleton is locked, so no Save screen is added. Concretely, tapping Save opens Home with three differences from the default: (1) the "N you might not use" cancel-candidates group is pinned to the top and expanded, (2) GC3 Recurring Summary Strip swaps its context line to show potential monthly savings ("You could save up to $32 a month"), and (3) each candidate row shows a "Cancel" affordance inline. It is the same screen, the same data, parameterized. Reason: it honors the lock while giving the Save tab a real, distinct destination Claudia recognizes. Recorded as the resolution of FLAG 1.
- **GC3 (Recurring Summary Strip) and GC4 (Subscription List Item) are specified in full here and referenced by name everywhere else.** They are reusable Sections, not global chrome. Reason: they first appear and matter most on Home, so their home is here (per the Prompt 2 rule for GC3 to GC7).
- **Home defaults to grouping by category, not a flat list.** Traces J3 and BP2 (people pattern-match on recognizable groups, not long flat lists). Reason: a categorized view is calmer and scannable in 3 seconds.
- **Subscription Detail is a full screen on mobile and the right pane of a two-pane view on desktop.** Carried from Breakpoint Deltas. Reason: on a phone the detail deserves the full width; on desktop the list stays visible for fast scanning.
- **[? draft copy] all copy below is a specific first draft, not final wording.**

---

## Flow / block order

### 2.6 Home / Subscription List  (Page, Prompt 1 screen 6)

Uses GC1, GC2, GC3, GC4, GC5 (banner), GC6, GC7. Entities Subscription, Charge (next date), Alert (banner).

Block order, top to bottom:
1. (P) GC3 Recurring Summary Strip: subscription count and monthly total. The largest thing on screen. See the GC3 spec below.
2. (S) Active alert banner: at most one GC5 Alert Item, plain language, only if something needs attention. Tapping it -> 2.7 or 3.8. See alerts.md.
3. (P) Subscription list, grouped by category, each row a GC4 Subscription List Item. See the GC4 spec below. Tapping a row -> 2.7.
4. (S) "N you might not use" cancel-candidates nudge: a small group ("2 you might not be using") that is collapsed on default Home and pinned-open in save-focus. Traces D1 paired-action carried into steady state, J2 entry, FLAG 1.
5. (S) Add action: a "+" labeled "Add subscription" -> reopens 1.4 Add Subscription in-app. Traces J5 reuse.
6. (S) History link: "See your trends" -> 5.12, gated by GC7 for free users. Traces D3.

### Section GC3 - Recurring Summary Strip (specified here, reused by 1.5, 5.12)

Block order: (1) subscription count, (2) monthly total, rendered as the biggest number on screen, (3) one context line. Context line varies: default "what you have signed up for"; save-focus "You could save up to $X a month". Traces J-MAIN, D1 (a number with meaning, never a bare shock), the "biggest number" design principle, framing from master-research self-image finding. Aggregates the Subscription entity. States: populated, loading (numbers resolving, calm placeholder), empty (an invite, not a bare "$0"). No mobile/desktop content difference.

### Section GC4 - Subscription List Item (specified here, reused by 1.5, 4.x, 5.12)

Block order: (1) merchant logo, (2) real merchant name, (3) amount and billing frequency, (4) next billing date, (5) status tag (Active, Trial, Paused, Cancelled). Traces the Subscription entity, J-MAIN, J3 (real name and logo, master-research M3). Interaction: the whole row is one tap target -> 2.7. States: normal; unrecognized (name could not be enriched and stays cryptic, shows "Tap to name this charge", protects J3); trial (Trial tag plus "trial ends DATE" if known); cancelled (muted, "Cancelled" tag). Mobile stacks the blocks, desktop may show them across one row; layout only, same content.

### 2.7 Subscription Detail  (Page, screen 7)

Uses GC1 (back), GC6, GC7. Entities Subscription, Charge, Alert, Cancellation (entry).

Block order:
1. (P) Header: merchant logo, real name, amount and frequency. Traces J3.
2. (P) Next payment: "Next payment $15.99 on 12 Aug." Traces Charge, J3/J4.
3. (S) Category and source: "Streaming, from Chase ...1234" or "Streaming, added by you". GC6 content inline. Traces GC6.
4. (S) Alerts on this subscription: any GC5 Alert Items scoped to this one. Traces J4.
5. (S) Price history: "See price and payment history" -> 5.12, GC7-gated for free. Traces D3.
6. (P) Cancel action: "Cancel this subscription" -> 4.9 Cancel Guide. Traces J2.
7. (P, conditional) Failed-payment next-step card: shown only in the payment-failure state. "Your DATE payment did not go through. Update your card with [merchant], or wait, it retries on DATE." Critique dead-end fix for Flow D.

---

## States

| Node | State | What it reads like | Trigger |
|------|-------|--------------------|---------|
| 2.6 | success | Summary strip plus grouped list | Populated account |
| 2.6 | empty | "Nothing here yet. Add a subscription or connect your bank." with two actions | Zero or all cancelled. Calm invite, not a bare zero. Critique fix. |
| 2.6 | loading | Summary strip shows a calm placeholder, list shows skeleton rows | Refreshing sync. Critique fix. |
| 2.6 | sync-error | Last known list stays visible with a quiet note "We could not refresh just now. Showing your last update." | Sync failed. Never a blank error page. Critique fix. |
| 2.6 | save-focus | Cancel-candidates pinned open, summary shows potential savings, inline Cancel affordances | Opened via the Save tab. FLAG 1 resolution. |
| 2.7 | success | Full detail | Tapped a subscription |
| 2.7 | unrecognized-charge | Header shows the raw descriptor plus "We could not identify this. Name it?" with a name/categorize action | Enrichment failed. Protects J3. Critique fix. |
| 2.7 | price-change | A highlighted "Price went up from $12.99 to $15.99 on DATE" block plus Keep or Cancel | A price-change alert opened this detail (Flow D) |
| 2.7 | payment-failure | The failed-payment next-step card (block 7) is shown at the top | A payment-failed alert opened this detail (Flow D). Critique fix. |
| 2.7 | loading | Skeleton header and rows | Fetching detail |
| 2.7 | error | "We could not load this subscription. Try again." with retry and a back to Home | Detail load failed |

---

## SEO

Private, behind the activation flow. `noindex`, no schema, not a content surface. Nothing in Core is crawlable.

---

## Accessibility

- Home list is a single vertical list of one-tap rows; each GC4 row exposes one accessible name that reads "Netflix, $15.99 monthly, next 12 August, active" so a screen reader conveys the row without opening it.
- The summary strip (GC3) is a labeled region; the monthly total has an accessible label ("Monthly total, $247") so the biggest visual number is also the clearest to a screen reader.
- The alert banner (GC5) uses `role="status"` so it is announced without stealing focus.
- Save-focus is announced on entry ("Showing subscriptions you might not use") via `aria-live`.
- Subscription Detail: focus lands on the H1 (merchant name) on open; the Cancel action is a real button, keyboard reachable, with a confirming step (not a one-tap destructive action).
- The unrecognized-charge and payment-failure states put their prompt in an `aria-live` region so the person is told there is something to act on.
- Tap targets at least 44 by 44 px; the whole GC4 row is the target, not just the logo.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

Cross-checked against Breakpoint Deltas. This cluster has one real structural delta: on mobile, Home (2.6) and Subscription Detail (2.7) are two separate screens (tap a row, the detail is a new screen, back returns to the list). On desktop they become a two-pane master-detail view: the list on the left, the selected detail on the right, no full navigation between them. GC2 also shifts from a bottom tab bar (mobile) to a left rail (desktop), see navigation.md. GC4 rows reflow from stacked (mobile) to single-row (desktop), which is layout, not structure. Breakpoint values are set in Wireframes.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - FLAG 1 resolved: the Save tab is a parameterized save-focus state of Home, not a new screen.
  - GC3 and GC4 specified here as the canonical source, referenced elsewhere.
  - Home groups by category by default; the summary strip is the biggest element.
  - Subscription Detail states include unrecognized-charge, price-change, and payment-failure, each with a concrete next step.
  - Home and Detail become a two-pane view on desktop. Realized in Wireframes 2026-07-04: at desktop width >= 1040 Home keeps the list as master with a selected-item detail pane on the right, and Subscription Detail brings the list back as a master on the left; the header folds into the top of the left rail.
  - First-draft copy for every visible string.
- **Still [?] (operational or data, not IA):**
  - How cancel candidates are chosen (usage signals, dormancy, duplicate detection). This is a detection/data question, not IA. Resolving input: the recurring-charge and usage model in build.
  - Whether the potential-savings figure in save-focus is computed live or is a coarse estimate. Resolving input: the same detection model.
