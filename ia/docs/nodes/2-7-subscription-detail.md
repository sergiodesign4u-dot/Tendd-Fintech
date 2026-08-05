# Node 2.7 - Subscription Detail

Template: `1-1-welcome.md`. Supersedes the 2.7 section of `../pages/core.md`.

## Node, type, scope

**Node 2.7 · Subscription Detail · page · MVP**

## Purpose and jobs

One subscription, everything known about it. This is where **J3 lives**, the clarity job:
"what IS this charge". It is also the doorway to J2, because a person decides to cancel here
and not on the list.

- **J3 understand what a charge actually is** (primary), **J4 stay ahead of surprises**.
- Opens **J2** through the cancel action, which is free by D3.

## URL and breadcrumbs

`/s/<id>`. Breadcrumb: back to the list, never a chain. In from node 2.6 or from an alert on
node 3.8. Out to node 4.9, node 5.12, node 3.8.

## Content blocks, mobile-first priority

From `../blocks.md`, type D.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Back to the list (GC1) | GC1 | TAKE |
| 2 | Hero: logo, real merchant name, the amount as the largest thing, the cycle beside it | J3, GC4, design principle 2 | TAKE: the number is big because it is the answer, not because it is dramatic |
| 3 | Status: a quiet badge, amber only if the price changed or a payment failed | J4, D-Concept | TAKE |
| 4 | The facts: next charge "in 6 days, 11 March", billing cycle, charged to, category, paid so far | J3, J4, GC4 | TAKE plus TAKE-DIFFERENTLY: "paid so far" carries a neutral label, and the payment source is named without card digits |
| 5 | **The decoder line:** "Appears on your statement as SPOTIFYAB STOCKHOLM" | growth zone 2, J3 | TAKE: **exists in none of the sources.** It is the whole reason this screen exists |
| 6 | Charge history: the last three months, the price change marked in amber | J3, J4, D3 | TAKE, DIFFERENTLY: three months free because that is basic detail, longer history is Pro |
| 7 | Primary: help me cancel this, into node 4.9 | J2, D3 | TAKE, DIFFERENTLY: Orbit's primary only marks a status the person must achieve elsewhere; ours helps, and it is free |
| 8 | Secondary: edit the details, and "this is not a subscription" | design principle 4 | TAKE: detection is a guess and every competitor makes a wrong guess the person's problem |
| 9 | Remove from the list, quiet, and honest about whether it can come back | D-Concept | TAKE, DIFFERENTLY: a detected item is hidden and says so; only a manual entry is truly deleted |
| 10 | Data source and trust line (GC6) | GC6, design principle 4 | TAKE |

**Named and not added:** a benefits list with a reactivate banner (that is the merchant's
retention screen, kept as an input for node 4.9), per-benefit toggles, an edit pencil on the
history card (history is evidence; if it is wrong the fix is to report the source, not to
overwrite the record), and tabs on a single object.

## Components and variants

GC1 App Header, detail variant with back. GC4 Subscription List Item, hero variant. GC6 Data
Source and Trust, short variant. GC7 Pro Gate, inside block 6 only, below the free three
months, never in front of them.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | detected (default) | The ten blocks, source named, correction offered | A charge found in the bank data |
| - | manual entry | No decoder line and no source line, every field editable | The person added it by hand |
| 2.7.1 | Unrecognized charge | The decoder line is all we have; we say so plainly and ask what it is | A recurring charge with no known merchant |
| 2.7.2 | Price change | The status badge is amber, and the history marks the row where it changed, old price beside new | A price rise detected |
| 2.7.3 | Payment failure | Desaturated clay, one plain sentence, and what usually happens next | A charge did not go through |
| 2.7.4 | Loading detail | A skeleton of the facts, the hero already filled from the list | Opening from the list |
| 2.7.5 | Could not load | The list is still one tap away and nothing is lost | Fetch failed |
| - | already cancelled | The screen stays readable, the cancel action is replaced by the date it ended | After node 4.10 |

## Filters and facets

None. One object.

## Primary CTA

**"Cancel this subscription"**, into node 4.9. Free, always, and never behind the Pro gate:
D3 names the cancel moment as a place a paywall must never sit.

## Emotional support

No mechanism from the table has this node as its home, and none is invented for it. **E1**
through the voice rules of every state: the "paid so far" number carries a neutral label, and
a failed payment is stated as a fact with a next step, never as a fault. **E3** is served by
blocks 4, 5 and 10, which say where every figure came from; its home is node 1.3 and node 6.15.

## Responsive

Mobile: one column, the hero first, the history collapsed to three months.

**Rewritten 2026-08-05, at the wireframe rebuild.** This section allowed the detail to open as
a pane beside the list on a wide screen. Node 2.6 had the mirror of that permission and lost it
at the etalon, which left this one with no origin: a person tapping a row would arrive at a
two-pane view they had never seen, and one row would look like two different things depending
on where it was tapped from. It was also a second copy of the canonical list, on the pair of
screens whose whole job is to be trusted about numbers.

**Desktop, decided:** the width goes into the subscription. Two columns, the identity and the
facts on the left (blocks 2 to 5) and the evidence and the actions on the right (blocks 6 to
10). The block order is unchanged: the two columns are the two halves of the same order, so
"what is this" is still read before "what now". The ground is in `docs/decisions.md`.

## SEO

**noindex, no schema.** Private and personal, and it renders one person's charges.

## Status

**Locked:** the decoder line, the correction action, three months of history free with depth
behind Pro, the payment source without card digits, honest removal, and (2026-08-05) two
columns rather than a master pane on a wide screen.

**Open:** `[?]` whether the price-change history can go back further than the charge history
itself for a detected subscription. Resolving input: what the Plaid transaction window actually
returns at build time.

**Found at the wireframe rebuild, 2026-08-05:** block 8 asks for "edit the details" and the map
has no node to send it to. There is no edit screen: node 1.4 Add Subscription owns the only
form in the product, and the grey screen borrows it, which is honest for a prototype and is not
a specification. Either node 1.4 gains an edit variant or the map gains a node, and that is a
decision for the map, not for a wireframe.
