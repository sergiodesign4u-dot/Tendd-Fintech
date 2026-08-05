# Node 4.10 - Cancel Win Moment

Template: `1-1-welcome.md`. Supersedes the 4.10 section of `../pages/cancel.md`.

## Node, type, scope

**Node 4.10 · Cancel Win Moment · page · MVP**

## Purpose and jobs

The product's most important emotional beat: the moment a person finds out that looking was
worth it. Design principle 5 exists for this screen.

- **E2 the small win** (primary). This node is E2's home in the whole product.
- Closes the arc that started at node 2.7 and ran through node 4.9.

## URL and breadcrumbs

`/s/<id>/cancelled`. No breadcrumbs: this screen is an end, not a level. In from node 4.9. Out
to node 2.6.

## Content blocks, mobile-first priority

From `../blocks.md`, type F.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | A quiet header ("A small win") | E2, principle 1 | TAKE: the header frames the moment without cheering |
| 2 | The result in one sentence, with the monthly and the yearly number | E2, principle 3 | TAKE: the specific number is the emotional payload; Brilliant and FeedHive confirm the quiet composition |
| 3 | "On your word. You can always resubscribe if you miss it." | principle 4 | TAKE: we cannot verify a cancellation with the merchant, and this says so. Category apps mark an item cancelled as if they had checked |
| 4 | The running total across every cut so far | E2, J2 | TAKE: the single win is a moment, the running total is what makes the second cut feel worth doing |
| 5 | Back to your subscriptions | J-MAIN | TAKE: in MVP this is the last block of the screen |
| 6 | Share this win, into node 4.11 | S1 | **LATER** (D-Share, founder, 2026-08-04): out of MVP with its destination |

**Named and not added:** confetti, animation and an exclamation (LEGO and The New Yorker sit at
the loud end of the same pattern). The beat is carried by the number and the sentence, not by
decoration. The praise interjection was already dropped once at Voice under D12.

## Components and variants

GC1 App Header, minimal variant: no tab bar, nothing competing with the moment.

## States

| State | Reads like | Trigger |
|---|---|---|
| default | The five MVP blocks | Arriving from "I cancelled it" |
| first ever cut | The same, and the running total reads as this one cut rather than a sum | The person's first cancellation |

No empty, loading or error state: the screen only exists after a completed action, and its
numbers are already known.

## Filters and facets

None.

## Primary CTA

**"Back to your subscriptions"**, to node 2.6. One action. In MVP there is no second one: the
share block waits for node 4.11.

## Emotional support

- **E2 the small win** -> the saved amount is stated as a specific number with a next step,
  then the product stops talking; the moment gets its own screen rather than a toast ->
  **where exactly:** block 2 for the number, block 4 for the running total, and the absence of
  anything else on the screen.

This is the one node in the product whose whole reason is an emotional job, and the table names
it directly.

## Responsive

Mobile: one column, the number large, nothing below the fold except the way back. Desktop: the
same, centred, with the same amount of nothing around it. This screen does not gain content at
a wider breakpoint.

## SEO

**noindex, no schema.** Private and transactional.

## Status

**Locked:** the quiet header, the specific monthly and yearly number, the honest "on your word"
line, the running total, one way out. The share block is LATER with node 4.11 (D-Share).
**Done at the wireframe rebuild, 2026-08-05:** the share block is off the screen, and the tab
bar with it: GC1 is drawn in its minimal variant, so nothing competes with the moment. The
win ends on one action, back to the list.
**Open:** none.
