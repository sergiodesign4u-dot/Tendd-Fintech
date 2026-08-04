# Node 1.3 - Connect Bank

Template: `1-1-welcome.md`. Supersedes the 1.3 section of `../pages/onboarding.md`.

## Node, type, scope

**Node 1.3 · Connect Bank · page plus a handoff and four return states · MVP**

## Purpose and jobs

Earn the handoff. Everything on this screen happens **before** Plaid Link opens, and its job
is to make the next screen unsurprising.

- **J1 activate without anxiety** (primary), **J5**, **E3 feel safe about the data**.
- Realizes **D5** (US and Plaid first).

## The boundary, stated first

Plaid Link is the component we embed, and its flow is published: Link opens, the person picks
their bank, is handed to the bank's own OAuth, signs in **there**, chooses which accounts to
share, and comes back. Credential entry, multi-factor authentication, error handling and the
confirmation email all live inside Link (`plaid.com/docs/link`, read 2026-08-04).

**We do not design those screens.** This node owns the screen before the handoff and the four
states after it. Drawing a fake credential screen would be a lie about the product.

## URL and breadcrumbs

`/start/connect`. In from node 1.2. Out to node 1.5 on success, node 1.4 as the fallback.

## Content blocks, mobile-first priority

From `../blocks.md`, type B.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Step chrome: back, step marker | the three-tap ceiling; GC1 | TAKE, DIFFERENTLY |
| 2 | H1 and one paragraph on what happens next | J1 | TAKE |
| 3 | What we can see, what we can never do: read-only, three lines | J1, J5, E3, GC6, design principle 4 | TAKE: ReSubs states a badge, we state the facts, and in the same breath as the ask |
| 4 | How long it takes, and what is needed | Phase 3 barrier, J1 | TAKE (Stripe): the category asks for bank credentials with no statement of duration |
| 5 | Primary action: hand off to Plaid Link | D5, J-MAIN | TAKE |
| 6 | "Add subscriptions myself instead", the way out that is not a dead end | D2, J5 | TAKE |
| 7 | The four return states, each a node of its own | node states below; J4 | TAKE: Link returns four outcomes and the category designs only the happy one |

**Named and not added:** a read against write toggle (Rox). We never request write access, so
a toggle would imply we could. A control with only one legal position is theatre.

## Components and variants

GC1 App Header, onboarding variant. GC6 Data Source and Trust, short variant, inside block 3.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| 1.3.2 | Syncing your bank | An honest wait line, not a spinner alone | Link returned, we are reading accounts |
| 1.3.1 | Connection error | What failed in plain words, retry, and the manual path beside it | Link or the institution failed |
| 1.3.3 | Connected, nothing found | The connection worked and there is nothing recurring yet; the manual path is offered | No recurring charges detected |
| 1.3.4 | Came back without connecting | Nothing was lost, both doors are still open | The person cancelled inside Link |

**Node 1.3.4 was added to the node map on 2026-08-04**, while this node was being written:
Link returns four outcomes and the map had three. A person who opens the bank screen and backs
out had nowhere specified to land.

## Filters and facets

None.

## Primary CTA

**"Connect my bank"**, which opens Plaid Link. One action. The secondary is the manual path,
never a second way to connect.

## Emotional support

- **E3 feel safe, control data** -> read-only is stated **in the same breath as the bank
  request**, the source of every figure is shown, and disconnect is reachable later in one tap
  -> **where exactly:** block 3, in the sentence directly above the primary action, and again
  on node 6.14.

This node is one of the four the table names for E3, and it is the first one a person meets.

## Responsive

Mobile: single column, the trust lines directly above the button so they cannot be scrolled
past. Desktop: the same order; the trust block never moves into a sidebar.

## SEO

**noindex, no schema.** Transactional and behind the activation flow.

## Status

**Locked:** the Plaid Link boundary, read-only said before the ask, the duration line, four
return states. **Open:** `[?]` whether an institution search appears on our side at all, or
whether Link is opened directly from this button. Resolving input: the Link integration mode
chosen at build time.
