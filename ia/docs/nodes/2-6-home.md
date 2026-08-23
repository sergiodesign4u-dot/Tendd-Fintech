# Node 2.6 - Home / Subscription List

Template: `1-1-welcome.md`. Supersedes the 2.6 section of `../pages/core.md`.

## Node, type, scope

**Node 2.6 · Home / Subscription List · page · MVP**

## Purpose and jobs

The screen the whole product is. Everything before it is a path to it, everything after it is
a detail of it. It carries J-MAIN in one frame: all recurring charges in one calm view.

- **J-MAIN** (primary), **E1 feel competent, not judged**.
- It is also the screen where **D3** is either kept or broken: this is the calm view, and the
  paywall never sits here.

## URL and breadcrumbs

`/home`. No breadcrumbs; this is the root of the signed-in product and the destination of the
tab bar. In from node 1.5, from any screen through GC2, and from a notification. Out to node
2.7, node 3.8, node 1.4, node 4.9.

## Content blocks, mobile-first priority

From `../blocks.md`, type C.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | App header (GC1): the screen name and a quiet way into the account | GC1 | TAKE |
| 2 | Summary strip (GC3): "You are paying for 14 subscriptions", the monthly total as the biggest thing on screen, one line of context under it | GC3, J-MAIN, D1, design principle 2 | TAKE: Orbit puts the count and total next to an Upgrade pill; ours has nothing selling beside it |
| 3 | Attention row, shown only when it is true: a price change or a failed payment, amber, one line | J4, GC4, D-Concept | TAKE: **exists in none of the six sources.** The category either says nothing or shouts in red |
| 4 | The list, grouped by category, each group with its own subtotal | J-MAIN, J3, design principle 2 | TAKE, DIFFERENTLY (Subo): grouped by default, no sort menu at MVP |
| 5 | The item (GC4): logo, real merchant name, amount, "in 6 days" | GC4, growth zone 2, J3, J4 | TAKE plus TAKE-DIFFERENTLY: the days lead, the date follows |
| 6 | Add a subscription, quiet secondary | D2, J-MAIN | TAKE, DIFFERENTLY: the job of this screen is to look, not to add |
| 6b | **The cancel nudge, shown only when it is true**: the subscriptions this person has not opened in a while, each with its own way out, and what cutting them would save | J3, E2, D3 | TAKE, DIFFERENTLY: everyone puts this behind a tab or a card called Savings; here it is a block under the list, so it is a fact about the list rather than a place to be sent |
| 7 | Data source and trust line (GC6): where these numbers come from and when they were last checked | GC6, design principle 4 | TAKE: **exists in none of the six sources** |
| 8 | Tab bar (GC2) | GC2 | TAKE |

**Named and not added:** the payment-account column, the income against expenses against
credit-cards split, a calendar view, filters, sort and search, every chart, and any upsell.
The last one is the load-bearing skip of this type: Monarch pins a trial countdown and a
discount inside the workspace, Orbit puts an Upgrade pill beside the total, and D3 says the
calm view is exactly where an avoider must not be sold to.

## Components and variants

GC1 App Header, app variant. GC2 Global Tab Bar. GC3 Recurring Summary Strip, at rest (its
first appearance was the reveal at node 1.5). GC4 Subscription List Item, default, attention
and cancel-candidate variants. GC6 Data Source and Trust, short variant.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | The eight blocks above | A list with items |
| 2.6.1 | Empty list | **Both paths offered**, in the same words used at node 1.2 | Nothing tracked yet |
| 2.6.2 | Refreshing | A skeleton of the list, not a spinner over it | A sync in progress |
| 2.6.3 | Sync failed, last known list | The figures stay visible and dated, with one calm line saying they are not fresh, and a way into node 6.14 | The connection is stale or broken |
| 2.6.5 | One subscription | The strip in the singular, one row, no category head, and the way on stated once under the list | Exactly one thing tracked |
| 2.6.6 | A short list | The same, ungrouped, ordered by the next charge date | Two to five things tracked |
| 2.6.7 | One is cancelled | The big number counts only what is still being paid for; one quiet line under it names the cancelled one and the date it stops; the row keeps its amount and takes the same grey status chip the trial uses | A person reported a cancellation on node 4.9 and the next charge date has not passed |

**ON 2.6.7, ADDED 2026-08-23, FOUNDER'S DECISION, closing the largest open question in the
behaviour spec.** What happens to a subscription after a person says they cancelled it was
written down nowhere: not here, not in `flows.md`, not in `docs/bank-connection.md`. It is the
aftermath of the product's most important emotional beat, and it decides what the number on this
screen means.

**THE ANSWER IS THE HONEST ONE RATHER THAN THE PLEASANT ONE.** The subscription **stays in the
list, marked**, and **leaves the monthly total at once**. It disappears on its own once the next
charge date has passed with no charge. Two things it deliberately is not:

- **not gone immediately.** Tendd does not know that a cancellation worked. It knows a person
  said so. A row that vanishes on somebody's word turns a wrong click, or a cancellation the
  merchant did not honour, into money leaving an account that this product is no longer watching,
  and Principle 4 says show the source of every figure.
- **not still in the total.** The total is what the person is choosing to pay for, and they have
  chosen to stop. Leaving the figure unmoved after the win screen has just said the money is
  freed up would make this screen argue with the one before it.

**The disappearance is silent and is not a second event.** No confirmation, no "we checked", no
toast: the row is simply not there next time. A product that congratulates a person twice for one
decision is asking for attention it has not earned.

**ON 2.6.5 AND 2.6.6, ADDED 2026-08-20, FOUNDER'S DECISION.** "нам надо тогда
проделать состояния пустой без например подписок и их отсутствие, если есть
сервисы например 1 или несколько и так далее" (2026-08-18). The four states above
are all about the CONNECTION - empty, refreshing, failed, focused. None of them is
about the COUNT, and the count is what this screen is: D1 is the reveal built on
it and every string here is written in the plural.

**Where the list starts grouping: SIX, and it is measured rather than chosen.**
Read in a browser on the coloured Home with the attention row and the category
heads suppressed, a flat list shows five rows entirely above the tab bar at
360 x 780, the narrowest phone in scope, and six at 390 x 844. The sixth row is
the first one a person has to scroll to reach, and scrolling is what makes
chunking worth the heading and the subtotal it costs. Below six, every group holds
one row, so a group is a heading and a subtotal standing over a row that already
says the same number - three renderings of one figure inside 200px.

**And the ORDER is not the same order on either side of six.** Grouped, the
categories run by monthly spend, highest first (founder, 2026-08-13). Flat, the
rows run by the next charge date, soonest first: a handful of rows has no groups
to rank, and "what comes off next" is the only order a person can feel in three
lines.

**A sparse list is the MANUAL path's normal state**, which is why both doors stay
open on these two the way they do at node 1.2 and on 2.6.1: the bank path does not
produce a list of one. The trust line says so instead of claiming a read-only
access that does not exist here.

**The heading over the list stays plural on all six states.** "Your subscriptions"
is the region's NAME and the string the back control of every detail page already
carries; naming one place two ways by count would put it under two owners.

**On 2.6.1:** Monarch's empty state offers exactly one way out, "connect an account to get
started". That is the bank wall again, one screen later. Ours offers both doors, so the manual
route survives all the way to the empty list.

**On 2.6.3:** the sync-failed state is why block 7 exists. A silently stale list is a list
that is quietly wrong, and the person has no way to know.

**2.6.4 WAS RETIRED 2026-08-21 AND ITS CONTENT BECAME BLOCK 6b.** Founder, clicking through
the coloured product: "зачем нам страница Save (save focus) когда она очень похожа на Home".
Measured before it was answered: the state was 2099px tall at 390 and 331 of them were its
own, so **84 per cent of its scroll was this screen repeated**, and **nothing in the product
linked to it except the tab bar** - the two triggers this table named, node 3.8 and a Pro
nudge, were specified and never built. The Save tab went with it and the bar is four
destinations again.

**This is a restoration rather than a deletion.** `../pages/core.md`, the base layer, listed
the cancel nudge as block 4 of this screen from the first draft: "a small group (2 you might
not be using) that is collapsed on default Home and pinned-open in save-focus". The 2026-08-05
rebuild kept the state and dropped the block, so the nudge lost its home and kept only its
mode. It comes back without the mode and without the collapse: one block, shown only when it
is true, which is the rule block 3 already follows. It sits AFTER the list for the same reason
block 6 does - the job of this screen is to look, not to cut - and in the head it would have
pushed the list off a 390 x 844 phone entirely.

**The savings figure moved with it, out of the summary strip.** In the retired state the strip
read "a month. You could save up to $29.99 by cutting 2 you might not be using", which made
the calm view a savings pitch. It is a fact about two rows, so it is stated on them.

## Filters and facets

None at MVP. A list of ten to twenty items does not need them, and offering them implies the
list will be long, which is itself anxiety. Filters, sort and search are LATER rows in the bank.

## Primary CTA

**There is no button competing with the total.** The action of this screen is reading it. The
list items are the tap targets, "add a subscription" is a quiet secondary, and the tab bar
carries the rest.

## Emotional support

- **E1 feel competent, not judged** -> money is framed as "what you signed up for", never as
  spending or waste; no score, no red, no advice; the biggest thing on screen is one number the
  person can act on -> **where exactly:** the summary strip caption (block 2), the amber-not-red
  attention row (block 3), and the absence of any chart or score on the screen at all.
- **E2 the small win** appears here in block 6b, as the line that says what cutting these would
  save, and its home is node 4.10.

## Responsive

Mobile: the eight blocks in order, one column, the total large. Desktop: the tab bar becomes a
left rail with the header folded into its top, the total and the attention row sit side by side
across the top, and **the groups run in balanced columns**, two-up and then three-up, so most of
the list is visible without scrolling. No block is added by breakpoint, and the total stays the
biggest thing on the screen at every width.

**Block 6 moves above the list on desktop, and only there.** Mobile keeps the priority order of
the table above, where the add action sits after the list because the job of this screen is to
look, not to add, and the end of the list is where wanting to add one actually happens. Below
two balanced columns there is no such place: whatever sits there hangs under the shorter column
and reads as a leftover rather than as the way on. So on the wide layout the two secondaries sit
directly under the summary band, still quiet, still not competing with the total.

**Decided 2026-08-05, at the etalon: the right-hand detail pane is rejected.** The earlier
version of this section allowed the detail (node 2.7) to open as a pane instead of a route. It
was built and then removed, for three reasons. One action would have had two destinations
depending on the width of the window, which is the kind of thing that cannot be taught and has
to be discovered. The pane duplicated node 2.7, so the same object would have had two renderings
to keep in agreement. And the pane spent the whole third of the screen on one subscription while
the job of this screen is all of them: the same width spent on columns shows every one of the
fourteen at once, which is J-MAIN read literally. A row opens node 2.7, at every width.

## SEO

**noindex, no schema.** Private and personal.

## Status

**Locked:** the summary strip as the largest element, grouping by category with subtotals, the
conditional attention row, the trust line, no upsell, no chart, no filters at MVP, the cancel
nudge as a conditional block rather than a destination (2026-08-21), and from
2026-08-20 the count ladder: 0, 1, a few, many, with the grouping threshold at six.
**Open:** none.
