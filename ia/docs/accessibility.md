# Accessibility - the cross-cutting contract

One artifact, because it was nine. Every cluster file carried its own Accessibility section,
and eight of the nine ended with the same line about tap targets. **A rule restated nine times
drifts in nine directions**, and by the end of the IA stage it already had: the same modal rule
was written three different ways, and one dialog was cited by the wrong node number.

The same structure that `pages/seo.md` has: one model, applied to the whole product, stated in
one place, so a screen inherits it rather than re-deciding it.

---

## Six rules that hold everywhere

1. **Tap targets at least 44 by 44 px**, and the whole row is the target, not the logo inside
   it. Traces the mobile-first boundary and design principle 2.
2. **No icon without a label.** Every tab, every header action, every inline alert action
   carries visible text; the icon is decorative. This is the one rule that also serves the
   audience directly: an anxious person who cannot tell what a control does does not press it.
3. **Focus moves with the person.** On a transition, focus lands on the new screen's H1 or its
   first control, never staying behind on a button that no longer exists.
4. **`aria-live` is always polite, never assertive.** An assertive interruption is the
   attention grab this product exists to avoid (design principle 1). A newly arrived alert, a
   sync result, a toast and the win number are all announced once, politely.
5. **Nothing is signalled by colour alone.** Status is a word before it is a shade: "Cancelled"
   is a tag, not a grey; a price change says it changed. This is D-Concept read from the other
   side, and it is why the win moment carries a number and a sentence rather than a green
   flash.
6. **Every number that is drawn is also written.** The monthly total has an accessible label,
   the chart carries a text summary above it, and the reveal states its count and categories in
   text. **The chart is never the only way to get the number** (node 5.12).

---

## What each node adds

| Node | What it adds beyond the six |
|---|---|
| GC1 App Header | The back control has an accessible name that says where back goes ("back to your list"), and the single action slot is named by function ("add subscription") |
| GC2 Global Tab Bar | A `navigation` landmark with four links, the current one carrying `aria-current="page"`. The new-dot on Alerts is exposed as "new alerts", not left decorative. On desktop the left rail is the same landmark, and focus order runs rail, then main |
| GC3 Summary Strip | A labelled region; the monthly total is labelled ("monthly total, $247") so the biggest visual thing is also the clearest thing to a screen reader |
| GC4 List Item | One accessible name per row, carrying the whole row: "Netflix, $15.99 monthly, next 12 August, active". A person listening should not have to open the row to hear it |
| GC5 Alert Item | One accessible name combining type, subscription and message ("price change, Netflix, went up to $15.99"). The inline action is a real button, distinct from tapping the item body |
| GC6 Source and Trust | Source, status and count in one accessible name ("Chase, connected, 8 subscriptions"); reconnect and remove are two distinct labelled buttons, never one ambiguous control |
| GC7 Pro Gate | The gate never traps: the preview frame is readable and the upgrade action is one labelled button with a way out. Gated Pro items expose their status as "Tendd Pro feature". Nothing is obscured visually, so there is no gap between what is seen and what is read out |
| 1.1 Welcome | The only public node: real text headings, never an image of text. The SEO rules and the accessibility rules agree here rather than competing |
| 1.2 Path Choice | The two doors are a labelled pair, each accessible name carrying its support line ("connect your bank, fast and automatic, read-only"), so the choice is understandable without sight |
| 1.3 Connect Bank | Plaid Link manages its own focus trap, and it is not ours to fix. On return, focus goes to the status region so "syncing" and the outcome are announced |
| 1.4 Add Subscription | The catalogue is searchable by keyboard, and every failure state ends at the manual form, which is a real labelled form |
| 1.5 Guided Reveal | Each step advance moves focus and is announced. The count, the categories and the total are text, not an image |
| 2.6 Home | The banner uses `role="status"` so it is announced without stealing focus. The cancel nudge announces itself when it arrives, through `role="status"` on its own lead line, so a screen reader is told once and is not interrupted (it was the save-focus state until 2026-08-21) |
| 2.7 Subscription Detail | Focus lands on the merchant name. Cancel is a real button with a confirming step, never a one-tap destructive action. The unrecognized-charge and payment-failure prompts sit in a live region |
| 3.8 Alerts | A list, one item per event. A new alert is announced once, politely |
| 4.9 Cancel Guide | The steps are a real ordered list; "open the account page" and "I cancelled it" are two distinct, clearly named controls, because confusing them is the failure that costs the person the cancellation |
| 4.10 Cancel Win | The number is announced, so the emotional payload reaches a person who is listening: "you freed up $15.99 a month" |
| 4.11 Share Snapshot | The card preview has a text alternative stating exactly what the card contains, and the privacy note is associated with the share button. A person must know what they are about to publish |
| 5.12 History and Trends | The range selector is a labelled segmented control with the current range announced. The chart's text summary is rule 6 in its most load-bearing form |
| 5.13 Upgrade | The plans are a labelled radio group; the selected plan and its price are announced, and the pay button states the amount it will charge |
| 6.14 Connections | Reconnect and remove are distinct labelled buttons on every source row |
| 6.15 Data and Privacy | The data-access explanation is plain text, never an image, so a screen reader reads exactly what Tendd accesses. The toggles are real labelled switches with state announced |
| 6.16 Settings | The notification switches are real switches, labelled, with state announced |
| 9.1, 9.2 | The heading is the focus target on load, with the way back reachable by keyboard. The server-error template does not depend on app JavaScript, so it is operable when the app itself is not |
| 9.5 Toasts | `role="status"`, polite. An undo inside a toast is reachable for the toast's lifetime, and the dismiss timing is long enough to reach it, or pauses on focus |

---

## The four modals, and one rule for all of them

Node 1.3.1 (connection error), node 4.9.2 (could not cancel), node 6.14.3 (add a source) and
node 6.15.1 (delete everything).

1. Focus is trapped inside while it is open.
2. **Escape maps to the safe door**, never to a silent dismiss: "add them yourself instead" at
   1.3.1, "remind me later" at 4.9.2, "keep my data" at 6.15.1.
3. The consequence is in the text, not in the colour, and the destructive button says what it
   does. "Delete everything", never "OK".

**Corrected 2026-08-04.** `pages/cancel.md` cited the could-not-cancel dialog as 4.9.1, a
number `sitemap.md` gives to the no-guide state. It is 4.9.2. The mistake is exactly the drift
this file exists to stop.

---

## What is not claimed

**No conformance claim.** Nothing here has been tested with a screen reader, at any level, and
saying "WCAG AA" without an audit would be the same kind of unearned reassurance that
`blocks.md` refused for "bank-level security" on node 6.15. These are requirements for the
build, and the audit belongs to a later stage with a real interface in front of it.

**Not covered yet:** contrast ratios (they need the colour values, which are locked at Concept
and applied at UI and Visual), motion and reduced-motion preferences (Animation), and text
scaling behaviour at 200 per cent (Responsive). Each is named here so its absence is a
schedule, not an oversight.

---

## Status

**Locked:** the six rules, the per-node additions, the one modal rule.
**Open:** the three items above, each with the stage that closes it.
