# Node 1.4 - Add Subscription

Template: `1-1-welcome.md`. Supersedes the 1.4 section of `../pages/onboarding.md`.

## Node, type, scope

**Node 1.4 · Add Subscription · page, loops to itself · MVP**

## Purpose and jobs

Make the manual path cheap enough that an avoider actually finishes it. Today that path fails
not because people cannot do it, but because it is fragmented and tedious: statements, app
stores, email, and every service's own settings (CJM As-Is, phase 3).

- **J5 track without sharing bank data** (primary), **J-MAIN**.
- Realizes **D2**. This node is the whole reason D2 is credible.

## URL and breadcrumbs

`/start/add` during onboarding, `/add` from Home later. In from node 1.2, node 1.5, node 2.6
or node 6.14. Out to node 1.5 in onboarding, back to node 2.6 afterwards.

## Content blocks, mobile-first priority

From `../blocks.md`, type B.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Step chrome: back | GC1 | TAKE, DIFFERENTLY |
| 2 | Search field, focused on arrival | Phase 3 barrier | TAKE (IFTTT) |
| 3 | A row of the most tracked services as tiles with real logos | D2, growth zone 2, Phase 3 barrier | TAKE, DIFFERENTLY: ReSubs uses its preset count as a boast, we use it as evidence that the manual path is not punishment |
| 4 | The form, **prefilled from the chosen preset**: name, price, billing cycle, next charge | D2, J-MAIN | TAKE, DIFFERENTLY: a blank form is the version people abandon; ours is a confirmation, not data entry |
| 5 | Save, primary | J-MAIN | TAKE |
| 6 | "Add another", quiet, after saving | J-MAIN | TAKE: the one-at-a-time loop has to be cheap or the manual path stops at the first entry |
| 7 | Fully manual entry, for anything not in the catalogue | D2 | TAKE |

**Named and not added:** category, image upload, SKU and other catalogue fields (Square).
Category is derived, not asked. Every extra field is a reason to close the tab. Also not
added: a notes field (Subo), which is a tracker feature for people who enjoy trackers.

## Components and variants

GC1 App Header, onboarding variant. GC4 Subscription List Item, tile variant, inside block 3.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| 1.4.1 | Preset library loading | Skeleton tiles, the search field already usable | Catalogue not yet loaded |
| 1.4.2 | Presets unavailable | The catalogue is down, the manual form still works and is offered directly | Catalogue request failed |
| 1.4.3 | No preset matches | "We do not have this one yet" plus the manual form prefilled with what was typed | Search returned nothing |
| - | Saved | The item appears, "add another" and "done" side by side | A save succeeded |

The three failure states all end in the same place: the manual form. Nothing on this screen
can leave a person unable to add a subscription.

## Filters and facets

None. The catalogue is browsed by search and by the popular row, not by filters.

## Primary CTA

**"Save"** on the form; **"Done"** after the first save, with "Add another" beside it. During
onboarding, done leads to node 1.5; afterwards it leads to node 2.6.

## Emotional support

No mechanism from the table has this node as its home. **E1** through the voice rules of every
state: no service is described as a waste, and the empty catalogue result is our failure, not
the person's. Nothing else is claimed here.

## Responsive

Mobile: search, then a two-column tile grid, then the form full width. Desktop: a wider tile
grid; the form stays a single column so the field order cannot be misread.

## SEO

**noindex, no schema.** Private and transactional.

## Status

**Locked:** search plus tiles, the prefilled form, the cheap loop, three failure states that
all land on the manual form. **Open:** `[?]` the real size of the preset catalogue at launch
(the copy currently says 400+ services, from `voice/docs/microcopy.md`); resolving input is
the catalogue build.
