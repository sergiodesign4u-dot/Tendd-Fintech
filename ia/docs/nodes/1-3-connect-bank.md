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
| 3 | How long it takes, and what is needed | Phase 3 barrier, J1 | TAKE (Stripe): the category asks for bank credentials with no statement of duration |
| 4 | **Your email, and why it is asked for here** | auth model, J5, E3, principle 4 | TAKE, DIFFERENTLY: **added 2026-08-10.** The category asks for an account before it has shown anything. Ours asks on the one screen where the reason is true and can be said in a sentence: bank data needs somewhere that is yours, that you can sign back into and that you can order deleted |
| 5 | What we can see, what we can never do: read-only, three lines | J1, J5, E3, GC6, design principle 4 | TAKE: ReSubs states a badge, we state the facts, and in the same breath as the ask |
| 6 | Primary action: hand off to Plaid Link | D5, J-MAIN | TAKE |
| 7 | "Add subscriptions myself instead", the way out that is not a dead end | D2, J5 | TAKE |
| 8 | The four return states, each a node of its own | node states below; J4 | TAKE: Link returns four outcomes and the category designs only the happy one |

**Blocks 3 and 5 swapped places on 2026-08-10, and the built screen was right all along.** The
table used to list the trust lines above the duration, and the grey screen has always rendered
them the other way round, because the responsive rule below says the trust lines sit directly
above the button so they cannot be scrolled past. The email went in between, which is where a
practical field belongs and which keeps read-only the last thing read before the tap.

**On block 4, and why it does not stop the flow.** The address creates an unverified account and
**Link opens immediately**: there is no code to wait for and no mail to go and read in the
middle of activation. A verification mail goes out at the same time and doubles as the sign-in
link for the next device (node 1.6). Until it is clicked the account lives on this device only,
which is also what makes an address someone mistyped harmless: the session it created can never
be claimed by anyone who cannot open that inbox. If the address already has an account, the
same link signs the person in and the pending connection joins the account they already had.

**Named and not added:** a read against write toggle (Rox). We never request write access, so
a toggle would imply we could. A control with only one legal position is theatre. **A password
field**, for the same reason one step further: there is no password in this product, so a field
for one would be a lie about what we hold. **A name field:** node 6.16 holds an email and a
currency and nothing else.

## Components and variants

GC1 App Header, onboarding variant. GC6 Data Source and Trust, short variant, inside block 5.

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

**"Connect your bank"**, which opens Plaid Link. One action. The secondary is the manual path,
never a second way to connect.

## Emotional support

- **E3 feel safe, control data** -> read-only is stated **in the same breath as the bank
  request**, the source of every figure is shown, and disconnect is reachable later in one tap
  -> **where exactly:** block 5, in the sentence directly above the primary action, and again
  on node 6.14.

This node is one of the four the table names for E3, and it is the first one a person meets.

## Responsive

Mobile: single column, the trust lines directly above the button so they cannot be scrolled
past. Desktop: the same order; the trust block never moves into a sidebar.

## SEO

**noindex, no schema.** Transactional and behind the activation flow.

## Status

**Locked:** the Plaid Link boundary, read-only said before the ask, the duration line, four
return states, and the email in block 4 with its reason beside it.

**Resolved 2026-08-10, twice.** Link opens directly from this button, and Tendd shows no
institution search of its own; node 6.14 already listed a bank search and picker among the
things deliberately not added, so the two nodes now agree. And this is the screen where the
account is created on the bank path: the manual path (node 1.4) creates none at all, and
returning people use node 1.6. Both are the auth model decision of 2026-08-10.

What each of the four return states is actually waiting on, webhook by webhook, is in
`../../../docs/bank-connection.md`.

**Open:** none.

**Done in the wireframes, 2026-08-10.** `wireframes/connect-bank.html` carries the email field
between the facts and the trust lines, with the reason in its hint. It was behind the decision
for one working session and is not any more.
