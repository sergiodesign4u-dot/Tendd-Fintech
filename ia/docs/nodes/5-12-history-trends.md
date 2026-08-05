# Node 5.12 - History and Trends

Template: `1-1-welcome.md`. Supersedes the 5.12 section of `../pages/pro.md`.

## Node, type, scope

**Node 5.12 · History and Trends · page · LATER**

**Where the composition comes from.** `../blocks.md` ran its first round on the 13 MVP screens
and cluster 5 was out of it, so this node was first written from `../pages/pro.md`, the lines
in `voice/docs/microcopy.md` and our own research. **The bank round ran on 2026-08-05, as
type H, before the screen was drawn**, with Copilot, Wise, Klarna and Roi second-hand through
Refero as the domain half. It confirmed the seven blocks below and added no new one; what it
changed is the list of refusals, which grew.

## Purpose and jobs

J-MAIN over time. The calm view answers "what am I paying for"; this answers "and has it been
creeping up".

- **J-MAIN, over time** (primary). Emma reads it; Claudia converts for it.
- It is the paid half of **D3**: depth is where the money is, visibility never is.

**This screen inherits the exact texture our person avoids.** Growth zone 3 in
`../../research/docs/cjm-as-is.md` names "too many numbers and graphs" as what makes an avoider
close a finance app, and the bank dropped every chart from node 2.6 for that reason (Vivid and
Monarch, type C). The depth was sent here. That makes one rule load-bearing on this node: **the
chart is never the only way to get the number.** A sentence carries the same fact, above the
chart, and a person who does not read charts still leaves with the answer.

## URL and breadcrumbs

`/trends`. Breadcrumb: back to where the person came from, which is node 2.6 or node 2.7. In
through the "See your trends" link on Home and the "See price and payment history" link on a
subscription. Out to node 5.13 when it is locked, back to node 2.7.

## Content blocks, mobile-first priority

| # | Block | Carries | Note |
|---|---|---|---|
| 1 | Back, and the header (GC1) with a Pro chip (GC7) | GC1, GC7 | The chip states the plan, it does not sell |
| 2 | "How your monthly total has moved over time. Nothing to act on here, just the shape of it." | principle 1, E1 | The screen says up front that it demands nothing. A trends screen that implies a verdict is a judgement screen |
| 3 | Time range: 3, 6, 12 months | D3 | A segmented control, current range announced |
| 4 | **The text summary, above the chart**: "your monthly total went from $172.90 in May to $192.90 in July, up about $20 across three months" | J-MAIN, principle 3, growth zone 3 | The fact in words. The chart illustrates it, it does not hold it |
| 5 | The chart: the monthly recurring total across the range | J-MAIN | One line, no donut, no stacked categories |
| 6 | The trend list: per category or per subscription, with a quiet status word (Higher, New, Steady) | J-MAIN, J4, D-Concept | A word, not a red arrow. "Higher" is a fact; a red arrow is a verdict |
| 7 | Export as CSV, Pro | D3, D-Export | **The analytical export.** The plain export of what we hold is free and lives on node 6.15. D-Export names the split |
| 8 | For a free person: a real preview frame with their own category labels behind the lock, then GC7 into node 5.13 | D3, principle 4 | An honest "here is the shape of what you would see" persuades better than a decorative blur, and a fake blur is a lie about our own product |

**Named and not added:** a budget line or a target (we are not a budgeting app, and a target
turns every reading into a pass or a fail), a comparison against other people, a
"you overspent" verdict of any kind, a donut of categories, and a projection of next year.
Every one of them converts a shape into a judgement, and E1 is the job that would break.

**Added by the bank round (type H), all refusals:** colour that means good or bad, which every
domain source uses and D-Concept forbids (the status word carries it instead); a second time
control beside the range, because Copilot and Wise both put a month selector on the same screen
as a range and that is the audit-table texture type E rejected; a percentage and an arrow beside
the change, which Roi uses and principle 3 rewrites into words.

## Components and variants

GC1 App Header, detail variant with back. GC3 is not reused here: the summary strip belongs to
the present, and this screen is the past. GC7 Pro Gate, in block 8 only.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | Pro, with data | Blocks 1 to 7 | A Pro plan and three months or more of history |
| 5.12.4 | Trends behind the Pro gate | The same frame, the person's own labels, the lock and the upgrade action | A free plan (D3) |
| 5.12.1 | Still gathering history | "Trends need a few months to be worth looking at." | Under three months of data, on a paid plan |
| 5.12.2 | Loading history | A skeleton chart, "Adding up your last few months." | Fetching |
| 5.12.3 | Could not load trends | "We could not load your trends. Try again." | Load failed |

**5.12.4 was numbered on 2026-08-05.** It stood here as an unnumbered variant, and an
unnumbered variant gets no page, which left the product's only view of this screen for a free
person undrawable. Node 5.13 block 3 says the person arrived at the upgrade screen "from Your
trends", and that sentence is only true if this screen gates. The ground is in `../sitemap.md`.

**5.12.1 is not the lock.** A paid person with two months of data must never see an upgrade
prompt; they have already paid, and the screen owes them a date rather than an offer. Keeping
these two states apart was a critique fix, and it is restated here because they look alike and
are opposite.

## Filters and facets

The time range, and nothing else. A filter row on a trends screen is the audit-table texture
the bank rejected at node 3.8.

## Primary CTA

**None for a Pro person.** The action is reading. For a free person the primary is the upgrade
action in block 8, and that is the only screen state in the product where a paid action is the
primary one.

## Emotional support

No mechanism from the table has this node as its home. **E1** through blocks 2, 4 and 6: the
frame that says nothing is being asked of you, the fact in words before the picture, and a
status word instead of a red arrow.

## Responsive

Mobile: one column, the summary above the chart, the trend list below it. Desktop: the trend
list may sit beside the chart instead of below it, which is the one breakpoint delta on this
screen. The summary sentence stays above the chart at every width.

## SEO

**noindex, no schema.** Private, behind auth.

## Status

**Scope: LATER**, with the whole of cluster 5.
**Locked:** the text summary above the chart, a real preview frame instead of a blur, the empty
state kept apart from the lock, a status word instead of a coloured arrow, the Pro export named
against the free one.
**Open:** `[?]` whether the price-change history can reach further back than the charge history
(shared with node 2.7). Resolving input: what the Plaid transaction window returns at build
time.
**The bank round ran on 2026-08-05** (type H) and the screen was drawn after it, in the second
round of the wireframe stage. The note that used to stand here is closed.
