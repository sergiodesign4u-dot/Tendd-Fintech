# Node 4.11 - Share Snapshot

Template: `1-1-welcome.md`. Supersedes the 4.11 section of `../pages/cancel.md`.

**Composition is not from `../blocks.md`:** the bank ran on the 13 MVP screens, and its type F
covers nodes 4.9 and 4.10 only. This node is LATER, so its blocks come from `../pages/cancel.md`
and from our own research, and it gets a bank round of its own when it is built. The same holds
for nodes 5.12 and 5.13.

## Node, type, scope

**Node 4.11 · Share Snapshot · page · LATER**

**Out of MVP, and the reason is written down.** S1, the social job, is marked `[?]` in
`../../research/docs/jtbd.md`: the virality is a hypothesis, not a finding. The MVP exists to
test H0, which node 4.10 carries without this screen. **D-Share** (founder, 2026-08-04) moved
the share block on node 4.10 to LATER with it, so no MVP screen leads here.

The node is specified anyway, because a LATER screen with no specification is how scope creep
gets in later: when it is built, it is built to this.

## Purpose and jobs

Let a person share the win without ever leaking a statement.

- **S1 share the discovery**, hypothesis-level.

## URL and breadcrumbs

`/share/<id>`. In from node 4.10 when the share block returns. Out to node 2.6 or the system
share sheet.

## Content blocks, mobile-first priority

| # | Block | Carries | Note |
|---|---|---|---|
| 1 | Back | GC1 light | |
| 2 | The card preview: the count and the total, and "just cancelled 2" when seeded from a win | S1, E2 | No bank data, no account numbers, no merchant list by default |
| 3 | Share, to the system sheet | S1 | |
| 4 | What is on this card, stated in full | E3, principle 4 | The privacy promise is on the screen, not in a policy |
| 5 | Choose what to show | S1 | `[?]` whether this is needed at all, or whether the safe default is enough |

**Safe by construction, not by memory.** The card cannot contain bank data, because the card is
built from two numbers. That is a structural decision, not a checkbox the person has to
remember.

## Components and variants

GC1 App Header, light variant. The card itself is a rendered image, so it is a component of
its own from Tokens onward.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | The preview and the share action | Arriving from node 4.10 |
| 4.11.1 | Generating the card | "Making your card..." | Rendering the image |
| 4.11.2 | Share failed | "We could not create the card just now. Try again." | Render or share failed |

## Filters and facets

None.

## Primary CTA

**"Share"**, to the system share sheet.

## Emotional support

- **S1 share the discovery** -> a snapshot card that carries the count and the total and no
  bank data, so sharing never leaks a statement -> **where exactly:** blocks 2 and 4.

The table marks this row `[?]` in the same breath, and that mark is the reason the node is
LATER.

## Responsive

Mobile: the card at screen width, the share action directly under it. Desktop: the card at a
fixed size, because it is an image with fixed proportions, not a layout.

## SEO

**noindex, no schema.** The card image may be posted by the person; the screen is not
indexable.

## Status

**Scope: LATER**, by S1 being a hypothesis and by D-Share.
**Open:** `[?]` whether "choose what to show" is needed at all; `[?]` S1 itself, which needs the
prototype test to become a finding.
