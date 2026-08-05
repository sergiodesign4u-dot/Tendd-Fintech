# Node 6.14 - Connections / Accounts

Template: `1-1-welcome.md`. Supersedes the 6.14 section of `../pages/account.md`.

## Node, type, scope

**Node 6.14 · Connections / Accounts · page plus a dialog · MVP**

## Purpose and jobs

Where the trust promise made on the landing either holds or turns out to be marketing. Every
figure in the product comes from something listed on this screen, and this is where a person
can end that.

- **J1 trust the connection** and **J5 keep control of my data** (both primary).
- **E3 feel safe, control data** lives across this cluster: `../sitemap.md` names Connections,
  Data and Privacy and Settings as three of E3's four homes.

## URL and breadcrumbs

`/sources`. Breadcrumb: back to Settings, which is where the You tab lands. In from node 6.16,
from the sync-failed state of node 2.6 (2.6.3), and from the trust line (GC6) on any screen.
Out to node 1.3 and node 1.4 in their in-app variants, and to node 6.15.

## Content blocks, mobile-first priority

From `../blocks.md`, type G.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Back, and the title (GC1) | GC1 | TAKE |
| 2 | One line saying what this screen is for, and the read-only promise repeated | J1, E3, principle 4 | TAKE, DIFFERENTLY (Canva): a plain statement first, controls after. A list of controls with no statement reads as a menu of things being done to you |
| 3 | A card per source: institution, which accounts are included, status | J1 | TAKE (Linear, Squarespace) |
| 4 | **The last successful check, on every source** | GC6, J1, principle 4 | TAKE: **exists in none of the sources.** A silently stale connection makes the whole calm view quietly wrong, and the person has no way to know. It is the trust line from Home, one level deeper |
| 5 | Reconnect, when a connection has expired | J1 | TAKE: bank connections expire by design. The category treats that as an error; ours treats it as maintenance, in the same calm register |
| 6 | **Disconnect, with the consequence in the same sentence** | J5, E3, principle 4 | TAKE, DIFFERENTLY: every source offers disconnect and none says what happens to the data already collected. Ours says what stays, what goes, and whether the subscriptions remain visible |
| 7 | The manual source card: "added by you", private, only what you type | D2, J5 | TAKE: the manual path is a source with equal standing, not a lesser mode |
| 8 | **Add a source, with no counter and no limit anywhere on the screen**, into dialog 6.14.3 | D-Free, J1 | TAKE: a count beside a connection list reads as a cap even when there is none. D-Free is a promise this screen can quietly break by design, so it is written down as a block decision |
| 9 | The provider note: US banks connect through Plaid, more regions soon | D5 | TAKE |
| 10 | A way into node 6.15 for the full "what we read" answer | E3 | TAKE |

**Named and not added:** a bank search and picker (Plaid Link owns that screen, the same
boundary as node 1.3), per-integration permission toggles, and any count of connections used
against connections allowed.

## Components and variants

GC1 App Header, detail variant with back. GC2 Global Tab Bar, because this sits under the You
tab. GC6 Data Source and Trust, in its full row form: this screen is where GC6 is at its
largest, and the compressed one-line version appears on nodes 1.3, 2.6 and 2.7.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | The ten blocks, one card per source | At least one source |
| 6.14.1 | No sources yet | **Both doors offered**, in the same words used at node 1.2 | Nothing connected and nothing added |
| 6.14.2 | Source needs attention | "Banks ask for this now and then to keep your connection secure", the last figures still shown and dated | A connection expired |
| 6.14.3 | Add a source (dialog) | Two options: connect a bank, or add them yourself | "Add a source" tapped |
| - | Loading sources | Skeleton cards | Fetching |

**On 6.14.2:** the reason the copy explains why a bank asks for this is that the person's first
reading of "reconnect" is that something went wrong with their money. Nothing did, and the
screen has to say so before it asks for anything.

**On 6.14.3:** this dialog is the resolution of FLAG 2. It creates no new screen: it reopens
node 1.3 and node 1.4 in their in-app variants and returns here on completion. The dialog was
numbered on 2026-08-04, because `../pages/account.md` had it at 6.14.1, a number this map
already gave to the empty state.

## Filters and facets

None. A person has a handful of sources.

## Primary CTA

**Conditional, and that is deliberate.** When a source needs attention the primary is
**"Reconnect"**, because that is the only thing on the screen that is costing the person
accuracy. Otherwise the primary is **"Add a source"**. The screen never has two primaries at
once.

## Emotional support

| Job | Mechanism | Where exactly |
|---|---|---|
| E3 feel safe, control data | Read-only is stated in the same breath as the bank, the source of every figure is shown, and disconnect is reachable in one tap rather than buried | Block 2 for the promise, block 4 for the source and its freshness, block 6 for the one-tap exit with its consequence stated |

## Responsive

Mobile: one column of cards, one action per card. Desktop: the same single column at a wider
measure, and the tab bar becomes a left rail. **Not** a two-column settings layout with a
category sidebar: it does not survive 360px, and that is also why this cluster is three nodes
rather than one screen with sections.

## SEO

**noindex, no schema.** Private, behind auth.

## Status

**Locked:** the last successful check on every source, disconnect with its consequence in the
same sentence, no counter anywhere, reconnect as maintenance rather than error, the manual
source as an equal card, FLAG 2 resolved through one dialog.

**Done at the wireframe rebuild, 2026-08-05:** all four of those are on the
screen, node 6.14.3 has a page for the first time, and the Chase count is 11 on both the
default and the reconnect state. It was 11 on one and 8 on the other: a stale connection does
not reduce the count, and the IA says the last figures stay visible and dated.

**Open:** none.
