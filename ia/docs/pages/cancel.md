# Page-level IA - Cut and Celebrate / Cancel (node 4)

- **Node:** 4 Cut and Celebrate. The three-step arc from deciding to cancel, to doing it, to feeling the win and optionally sharing it. This is the most emotionally powerful moment in the product and the natural upgrade trigger. One artifact because Cancel Guide, Cancel Win Moment, and Share Snapshot are a single sequence a person moves through in one sitting.
- **Type:** Pages (Cancel Guide, Cancel Win Moment, Share Snapshot), Dialogs (could-not-cancel help), States (success, no-guide-yet, could-not-cancel, Pro-locked, loading, generating, share-error).
- **Canonical visual:** `ia/cancel.html`.
- **Job:** J2 (identify and cancel unused subscriptions) on Cancel Guide, E2 (the small win) on Cancel Win Moment, S1 (share the discovery) on Share Snapshot. Primary persona Claudia (her whole session aims here); Emma and Ravi arrive from a specific subscription.
- **Related:** entered from 2.7 Subscription Detail (Cancel action) or the 2.6 save-focus view; the full guide and direct link are gated by GC7 into 5.13 Upgrade; the win seeds the Snapshot entity. Reuses GC1, GC7 (pro.md).

---

## Decisions (recommendations, flagged for review)

- **Basic cancel instruction is always free and always the first thing shown; the Pro full guide is an addition below it, never a wall in front of it.** Traces D3 (the cancel moment is a trust moment, not an upsell moment). Reason: locking the relief moment behind a paywall breaks the core promise. Declining Pro always leaves the free basic instruction in place.
- **"Mark as cancelled" is a self-report, not a verified action.** Tendd cannot confirm the cancellation happened on the merchant's side at MVP. The button reads "I cancelled it" and the win is shown on the person's word. Reason: honesty (do not claim to have verified something we did not) and it keeps the emotional beat intact. [? whether Tendd later verifies via the next billing cycle is an operational question, see Open.]
- **A blocked cancellation has an explicit in-app next step ("Couldn't cancel? Here is what else to try"), never a dead end.** Concrete fix for the Flow C dead end (Critique). Reason: the merchant's retention dark pattern is the single most likely failure, and the person must always have a move inside Tendd.
- **Share Snapshot never contains bank data, account numbers, or exact merchant list by default.** Traces S1 (privacy-safe) and E3. Reason: the shareable card must be safe to post publicly by construction, not by the person remembering to hide things.
- **The win uses specific numbers, monthly and yearly, not a generic success toast.** Traces E2 (jtbd.md: "you just freed up $14.99 a month, that is $179.88 a year"). Reason: the specific number is the emotional payload.
- **[? draft copy] all copy below is a specific first draft.**

---

## Flow / block order

Matches ia/docs/flows.md Flow C:

```
2.7 Subscription Detail  ->  4.9 Cancel Guide  ->  (I cancelled it)  ->  4.10 Cancel Win Moment  ->  (Share?)  ->  4.11 Share Snapshot  ->  2.6 Home
```

### 4.9 Cancel Guide  (Page + Dialog, Prompt 1 screen 9)

Uses GC1, GC7. Entities Cancellation, Subscription.

Block order:
1. (P) Header: "Cancel Netflix" with the merchant logo. [? draft copy]
2. (P) Basic instruction, always free: "Here is how to cancel Netflix. 1. Go to your account page. 2. Select Cancel Membership. 3. Confirm." plus a button "Open netflix.com/account". Traces D3.
3. (S) Pro depth, below the free steps: "Tendd Pro: step-by-step with screenshots and a one-tap cancel link." -> GC7 -> 5.13. Gated for free. Traces D3.
4. (P) Confirmation action: "I cancelled it" -> 4.10. Traces J2, E2.
5. (S) Help path: "Couldn't cancel?" -> the could-not-cancel dialog (4.9.1). Critique fix.

Sub-node 4.9.1 Could-not-cancel (Dialog): "Cancelling can be deliberately hard. Try these: [alternative steps]. Or keep this open and come back." Actions: "Show other steps", "Remind me later". Never a terminal dead end.

### 4.10 Cancel Win Moment  (Page, screen 10)

Uses GC1 (light). Entities Cancellation (money saved), Snapshot (seed). Reached only on "I cancelled it".

Block order:
1. (P) Win statement with specific numbers: "Nice. You just freed up $15.99 a month. That is $191.88 a year." Traces E2.
2. (S) Running total: "You have freed up $32 a month with Tendd so far." Traces E2.
3. (P) Share action: "Share this win" -> 4.11. Traces S1.
4. (S) Continue: "Back to my list" -> 2.6.

### 4.11 Share Snapshot  (Page, screen 11)

Uses GC1 (light). Entity Snapshot.

Block order:
1. (P) Snapshot card preview: "14 subscriptions, $247 a month" and, if seeded from a win, "Just cancelled 2". No bank data, no account numbers. Traces S1.
2. (P) Share action: "Share" -> the system share sheet.
3. (S) Privacy note: "No account numbers or bank details are on this card." Traces E3.
4. (S) Customize: "Choose what to show" [? optional, not required for MVP].

---

## States

| Node | State | What it reads like | Trigger |
|------|-------|--------------------|---------|
| 4.9 | success | Free basic steps plus the Pro offer below | Opened from a subscription |
| 4.9 | no-guide-yet | "We do not have step-by-step for this one yet. Here is the general way to cancel, and you can ask us to add a guide." | No specific guide for that service. Critique fix. |
| 4.9.1 | could-not-cancel (Dialog) | Alternative steps plus "Remind me later" | Person taps "Couldn't cancel?" (Flow C). Critique fix. |
| 4.9 | Pro-locked | The Pro depth block shows the gate, the free steps stay fully usable | Free user views the Pro offer (D3) |
| 4.9 | loading | Skeleton steps | Fetching the guide |
| 4.10 | default (success only) | The win statement | Reached only on "I cancelled it" |
| 4.11 | default | The snapshot card preview | Opened from the win or from a share affordance |
| 4.11 | generating | "Making your card..." | Rendering the shareable image. Critique fix. |
| 4.11 | share-error | "We could not create the card just now. Try again." | Render or share failed. Critique fix. |

---

## SEO

Private, behind auth and transactional. `noindex`, no schema, not a content surface. The Share Snapshot IMAGE may be posted publicly by the person, but the app screen itself is not indexable.

---

## Accessibility

- Cancel Guide steps are a real ordered list; the "Open account page" link and "I cancelled it" button are distinct, keyboard-reachable controls with clear names.
- The could-not-cancel dialog (4.9.1) is a modal with a focus trap; Escape maps to "Remind me later" (safe, non-terminal), never a silent dismiss.
- The win moment announces its number via `aria-live` so a screen reader gets the emotional payload ("You freed up $15.99 a month").
- Share Snapshot: the card preview has a text alternative that states exactly what the card contains, so a person knows what they are about to share; the privacy note is associated with the share button.
- Tap targets at least 44 by 44 px. No color-only signal for the win (uses text and number, not just a green flash), which also keeps the calm, no-alarm tone.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

Cross-checked against Breakpoint Deltas. Structural delta: on desktop, Cancel Guide (4.9) and Share Snapshot (4.11) are candidates to render as a centered modal or side sheet over the current screen rather than a full page; on mobile they are full screens. The Cancel Win Moment (4.10) stays a full-attention view on both (it is the emotional beat). Breakpoint values set in Wireframes.

---

## Locked (draft, 2026-07-03) / Open

- **Locked (draft, 2026-07-03):**
  - Free basic instruction first, Pro depth as an addition, never a wall (D3).
  - "I cancelled it" is an honest self-report at MVP.
  - Could-not-cancel has a real in-app next step (dead-end fix).
  - Share Snapshot is privacy-safe by construction (no bank data).
  - The win uses specific monthly and yearly numbers.
  - Cancel Guide and Share Snapshot may be modals on desktop.
- **Still [?] (operational or data, not IA):**
  - Whether Tendd later verifies a cancellation via the next billing cycle. Resolving input: a product/ops decision plus billing-cycle data.
  - The source and coverage of step-by-step cancel guides (the "no-guide-yet" long tail). Resolving input: the guide content pipeline, benchmarked to ReSubs' 30+ guides.
