# Node 3.8 - Alerts / Activity

Template: `1-1-welcome.md`. Supersedes the 3.8 section of `../pages/alerts.md`.

## Node, type, scope

**Node 3.8 · Alerts / Activity · page · MVP**

## Purpose and jobs

Close J4, never be surprised by a price change or a failed payment. This screen also decides
whether the product is a source of calm or one more thing that buzzes at you.

- **J4 stay ahead of financial surprises** (primary).
- Feeds **J2** and **J3**: an alert is the shortest path to the charge behind it.

**The category has no such screen.** Subo and Orbit configure reminders per subscription and
deliver them outside the app; Rocket Money sells the promise on its landing and exposes
nothing behind it. On the craft side, the good examples are enterprise audit logs, whose
register is the opposite of ours. This node is invented, not adapted, and the bank says why.

## URL and breadcrumbs

`/alerts`. No breadcrumbs; it is a tab. In through GC2 or a push notification. Out to node
2.7, node 4.9, node 6.16.

## Content blocks, mobile-first priority

From `../blocks.md`, type E.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | App header (GC1) | GC1 | TAKE |
| 2 | **"Needs you"**, usually empty: a failed payment in desaturated clay, a price change in amber | J4, principle 2, growth zone 3 | TAKE: **exists in no source.** A feed sorted by date makes the person scan to find out whether anything is wrong; sorting by whether it needs them answers that before they read |
| 3 | **"Just so you know"**: charges due in the next seven days, a newly detected subscription | J4 | TAKE |
| 4 | The alert item (GC5): icon, one plain sentence, the merchant and the amount, when, the source, and one inline action | GC5, J4, principle 3, principle 4 | TAKE plus TAKE-DIFFERENTLY: an alert with no action is a notification; an alert that cannot say where it came from is a rumour |
| 5 | Price change alerts show the old price, the new price and the difference | J4, growth zone 2, D-Concept | TAKE: **exists in no source.** Every product tells you the new number; the old one beside it turns a surprise into an explanation |
| 6 | Older, collapsed | principle 2 | TAKE: the recent past is the job, the distant past is node 5.12 |
| 7 | What we tell you about, a link into node 6.16 | J4 | TAKE, DIFFERENTLY: one place instead of a reminder toggle on every subscription |
| 8 | Tab bar (GC2) | GC2 | TAKE |

**Named and not added:** unread counts, badges and red dots (D-Concept: status is a quiet gray
badge, never red; a red badge on a money app is an anxiety machine, and our person already
avoids opening it); search, a filter row and a multi-column audit table (the enterprise
register); a notes field.

## Components and variants

GC1 App Header, app variant. GC2 Global Tab Bar. GC5 Alert Item: price-change, payment-failed,
trial-ending, upcoming-charge and new-subscription variants. GC7 Pro Gate, on the alert types
that are Pro depth only, never on the two that carry J4.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | Both groups, "Needs you" usually empty | Anything to report |
| 3.8.1 | All clear | **"Nothing needs your attention right now"**, and what would show up here if it did | Nothing to report |
| 3.8.2 | Loading alerts | A skeleton of the list | Fetch in progress |
| 3.8.3 | Could not load alerts | "Nothing is wrong with your money, we just could not reach your alerts" | Fetch failed |

**On 3.8.1:** in most products an empty feed reads as a dead end. Here it is the product
working, and it is the most reassuring sentence in the app. It is designed as the best state,
not the missing one.

**On 3.8.3:** the error copy separates the two fears on purpose. The person's first thought at
an error on a money screen is that something happened to their money.

## Filters and facets

None. A handful of events is not an audit trail.

## Primary CTA

**None on the screen; one inside every item.** The action belongs to the alert it concerns:
"see what changed" to node 2.7, "what to do" for a failed payment, "help me cancel" to node
4.9. An empty screen has no action at all, and that is correct.

## Emotional support

No mechanism from the table has this node as its home. **E1** through the voice rules of every
state, and most of all through the empty state, which says the product is working rather than
that something is missing. Nothing else is claimed here.

## Responsive

Mobile: two groups, one column, the older section collapsed. Desktop: the same order at a
wider measure; the groups never become columns side by side, because "needs you" must be read
first and not scanned in parallel.

## SEO

**noindex, no schema.** Private and personal.

## Status

**Locked:** the two groups, the inline action, the old price beside the new one, the empty
state as the best state, no red badges.
**Open:** `[?]` which alert types are Free and which are Pro depth. D3 fixes the principle
(price change and failed payment are basic, so they are free), but the full list is a pricing
decision. Resolving input: the founder, alongside the Pro feature list.
