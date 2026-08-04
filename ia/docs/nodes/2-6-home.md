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
| 2.6.4 | Save focus | The same list with the cancel-candidate variant of the item raised; "no pressure, just a nudge" | The person came here to cut (from node 3.8 or a Pro nudge) |

**On 2.6.1:** Monarch's empty state offers exactly one way out, "connect an account to get
started". That is the bank wall again, one screen later. Ours offers both doors, so the manual
route survives all the way to the empty list.

**On 2.6.3:** the sync-failed state is why block 7 exists. A silently stale list is a list
that is quietly wrong, and the person has no way to know.

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
- **E2 the small win** appears here in the save-focus state only, as the savings line, and its
  home is node 4.10.

## Responsive

Mobile: the eight blocks in order, one column, the total large. Desktop: the tab bar becomes a
left rail with the header folded into its top, the total and the attention row sit side by side
across the top, and **the groups run in balanced columns**, two-up and then three-up, so most of
the list is visible without scrolling. No block is added by breakpoint, and the total stays the
biggest thing on the screen at every width.

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
conditional attention row, the trust line, no upsell, no chart, no filters at MVP.
**Open:** none.
