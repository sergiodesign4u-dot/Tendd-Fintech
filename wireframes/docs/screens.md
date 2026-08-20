# Wireframes - screen and state inventory (Tendd)

**Etalon: Home / Subscription List (node 2.6), `home.html`. First flow: Flow A, Emma, the
bank path.** Both were chosen at the first build in July 2026 and both are confirmed rather
than re-derived below. Voice and Concept take the etalon from this line, not from their own
reading. The ground for both choices is in `docs/decisions.md`, 2026-08-10.

**The strategic dimension, and the three elements of the etalon that carry it.**
`research/docs/benchmark.md` names one dimension and calls it the most important for this
product: **trust and first-time clarity**, an activation requirement rather than a
nice-to-have, because a person who does not feel safe and understood will not connect a bank,
will not come back and will not pay. On `home.html` it is not a general feeling, it is three
named things:

- **GC4, the subscription row**, carries mechanism 3, the transaction clarity layer: `[logo]`,
  the real merchant name, the amount, and "in 2 days, Aug 3". The raw statement string is
  deliberately not here. It appears on node 2.7 as the decoder line, on the screen that exists
  to answer "what is this charge".
- **The attention row** carries mechanism 1, active voice: "Netflix went up by $2.50, now
  $17.99 a month" says who did the thing and by how much, instead of announcing that a change
  has been detected by nobody in particular.
- **GC6, the trust line**, carries mechanism 2, the declaration that names the fear before it
  is asked: "Read-only. Tendd cannot move your money", next to where the figures came from and
  when they were last checked.

Written down on 2026-08-10, after the stage closed. All three were built from the first day;
what was missing is this paragraph, which is the check the stage owed: a dimension that no
element carries is either the wrong etalon or a dimension that lives nowhere in the product.

This is not a wireframe. It is the order for every step that follows: which screens exist,
what job each closes, where it sits in a flow, whether it is MVP, and **exactly which states
it has**. Steps 3 to 8 build against this table, and two later stages read it as the complete
list of states in the product: Voice (the tone of each state) and Tokens and Components (the
component inventory, which is read from every state, not from a coloured sample).

**Sources.** `ia/docs/sitemap.md` (the node map, which owns node numbers and the MVP or LATER
label), `ia/docs/nodes/*.md` (one file per screen: blocks, states, components, the primary
action), `ia/docs/flows.md` (routes and dead ends), `research/docs/jtbd.md` (jobs). Screen
names are copied from the map. **No screen and no state is invented here:** a state that is
not a node in `sitemap.md` does not get a page, and if a page turns out to be needed, the map
is fixed first.

**Rebuilt 2026-08-05 against the upgraded IA.** The previous version of this file predates the
detail layer: it listed four system states per screen, and the real set is the numbered state
nodes of the map, which is 30 across the product. The differences are listed at the bottom
under "What changes against the 41 pages that exist".

---

## How to read the states

The four system states are the **floor**, not the set. The real set for each screen is the
"States" section of its node file, and every state there is a node with a number.

- **success** is the base page `<screen>.html`: the normal working view. Every screen has one.
- **empty**, **error** and **loading** get their own page when the scenario genuinely produces
  them.
- **domain and transit states** (a price change, a payment that failed, a retention wall, a
  dialog) are first class and get their own page too. They are what makes this product's state
  set bigger than four.

Each state page is a real screen with the same structure and different content, and each one
has a visible way out. A file name says which state it is: **the file is named after the
state, not after the nearest system word.** "Unrecognized charge" is not an empty state and is
not filed as one.

In the floor table below, `check` means the state is real and gets a page, `-` means the
scenario does not produce it, and every `-` carries its reason in the last column. Without the
reason, "this screen has no error state" cannot be told apart from "we forgot the error state".

---

## Flow A - J-MAIN, see all recurring charges calmly (Emma, bank path)

**The main job, first session, bank path. This is the first flow, built end to end.** It ends
at the calm list, which is also the etalon.

| Screen | Node | Job | Place in Flow A | Scope |
|---|---|---|---|---|
| Welcome / Value Intro | 1.1 | J1, show value before asking for data | Entry, tap 0. The only public, indexed screen | MVP |
| Activation Path Choice | 1.2 | J1 and J5, two paths of equal weight (D2) | tap 1 | MVP |
| Connect Bank | 1.3 | J1, the bank path (D5, Plaid US first) | tap 2 | MVP |
| Guided Reveal | 1.5 | J-MAIN, the aha, gradual (D1) | tap 3, the aha | MVP |
| Home / Subscription List | 2.6 | J-MAIN and E1, the calm list | End of the flow, then the steady state | MVP |
| Subscription Detail | 2.7 | J3, decode a charge | One tap from the list | MVP |

## Flow B - J5, track without sharing bank data (Ravi, manual and presets)

Shares Welcome, Path Choice, Guided Reveal and Home with Flow A. The distinct screen is Add
Subscription, which is also the in-app "+" later.

| Screen | Node | Job | Place in Flow B | Scope |
|---|---|---|---|---|
| Add Subscription | 1.4 | J5, the privacy path (D2, presets) | After choosing the private path; reused in-app | MVP |

## Flow C - J2 and E2, find it, cancel it, feel the win (Claudia)

| Screen | Node | Job | Place in Flow C | Scope |
|---|---|---|---|---|
| Cancel Guide | 4.9 | J2, identify and cancel; the basic guide is free (D3) | After deciding to cancel | MVP |
| Cancel Win Moment | 4.10 | E2, the small win | After a cancellation | MVP |
| Share Snapshot | 4.11 | S1, the privacy-safe card | Offered after the win | **LATER** (D-Share) |
| Upgrade / Tendd Pro | 5.13 | None. Traces to D3 and D4 | Only from a real gate | **LATER** |

## Flow D - J4, stay ahead of a surprise

| Screen | Node | Job | Place in Flow D | Scope |
|---|---|---|---|---|
| Alerts / Activity | 3.8 | J4, a price change or a failed payment | Opens from a notification | MVP |

## Flow E - coming back, and keeping a list made without an account

Added 2026-08-10 with the auth model. The only flow that starts outside a session, and the
shortest in the map: everything persuasive already happened at Welcome.

| Screen | Node | Job | Place in Flow E | Scope |
|---|---|---|---|---|
| Sign In | 1.6 | J1 and J5, return without a password | The entry, from the landing header or an expired session | MVP |

## Reached globally, not through one flow

| Screen | Node | Job | Reached from | Scope |
|---|---|---|---|---|
| History and Trends | 5.12 | J-MAIN over time, behind the Pro gate (D3) | Home and Subscription Detail | **LATER** |
| Connections / Accounts | 6.14 | J1 and J5, manage the sources | Settings, and the trust line anywhere | MVP |
| Data and Privacy | 6.15 | J5 and E3, what we hold and how to end it | Settings, and every trust link | MVP |
| Settings / Profile | 6.16 | E3, the door to the cluster; J4 through notifications | The You tab | MVP |

---

## The floor: four system states across all 17 screens

| # | Screen | empty | error | loading | success | Why a `-` is a `-` |
|---|---|:---:|:---:|:---:|:---:|---|
| 1 | Welcome / Value Intro | - | - | - | check | A static value screen. Nothing loads, nothing can fail, nothing can be empty |
| 2 | Activation Path Choice | - | - | - | check | An offline choice between two doors; no data is touched |
| 3 | Connect Bank | check | check | check | check | |
| 4 | Add Subscription | check | check | check | check | |
| 5 | Guided Reveal | check | - | - | check | Upstream failures belong to Connect Bank and Add Subscription; the reveal only runs on a list that already exists |
| 6 | Home / Subscription List | check | check | check | check | |
| 7 | Subscription Detail | - | check | check | check | One object is either there or it is not; "no data" on this screen is the unrecognized charge, which is a domain state and not an empty one |
| 8 | Alerts / Activity | check | check | check | check | The empty state here is the best state in the app, not an absence |
| 9 | Cancel Guide | check | check | - | check | The steps are text we already hold; there is no fetch to wait for |
| 10 | Cancel Win Moment | - | - | - | check | The screen only exists after a completed action, and its numbers are already known |
| 11 | Share Snapshot | - | check | check | check | The card is generated from two numbers the product already has, so it cannot be empty |
| 12 | History and Trends | check | check | check | check | |
| 13 | Upgrade / Tendd Pro | - | check | check | check | A plan list cannot be empty. Its error is a payment that did not go through, and its loading is the payment being processed |
| 14 | Connections / Accounts | check | check | check | check | |
| 15 | Data and Privacy | - | - | - | check | A statement of what we hold and two controls. Nothing to load, nothing to be empty |
| 16 | Settings / Profile | - | - | - | check | A list of doors. The skeleton while preferences load is chrome, not a destination. The account-less variant is no longer a `[?]`: it is node 6.16.1, a domain state and not an empty one, because the list is full and only the account is missing |
| 17 | Sign In | - | check | - | check | Nothing loads and nothing can be empty: one field and one action. Its error is node 1.6.2, an expired link, which is the only way this screen can fail |

---

## The real set: every state page, and the node it renders

The base page is the success state. Every other page below is a numbered node in
`ia/docs/sitemap.md`.

| Screen | Base page | State pages: node, file, what it is |
|---|---|---|
| Welcome (1.1) | `index.html` | none |
| Path Choice (1.2) | `path-choice.html` | none |
| Connect Bank (1.3) | `connect-bank.html` | 1.3.1 `connect-bank-error` connection failed, keeps the manual exit · 1.3.2 `connect-bank-loading` syncing your bank · 1.3.3 `connect-bank-empty` connected, nothing found · **1.3.4 `connect-bank-cancelled` came back without connecting** |
| Add Subscription (1.4) | `add-subscription.html` | 1.4.1 `add-subscription-loading` preset library loading · 1.4.2 `add-subscription-error` presets unavailable, the manual form still works · 1.4.3 `add-subscription-empty` no preset matches |
| Guided Reveal (1.5) | `guided-reveal.html` | 1.5.1 `guided-reveal-empty` nothing to reveal yet |
| Sign In (1.6) | `sign-in.html` | 1.6.1 `sign-in-sent` check your email, with the address stated back · 1.6.2 `sign-in-expired` that link has expired, in the reconnect register |
| Home (2.6) | `home.html` | 2.6.1 `home-empty` both doors offered · 2.6.2 `home-loading` refreshing · 2.6.3 `home-error` sync failed, last known list stays visible and dated · **2.6.5 `home-one`** one subscription, singular and ungrouped · **2.6.6 `home-few`** a short list, ungrouped, by the next charge date |
| Subscription Detail (2.7) | `subscription-detail.html` | **2.7.1 `subscription-detail-unrecognized`** the decoder line is all we have · **2.7.2 `subscription-detail-price-change`** old price beside new · **2.7.3 `subscription-detail-payment-failed`** and what usually happens next · 2.7.4 `subscription-detail-loading` · 2.7.5 `subscription-detail-error` could not load |
| Alerts (3.8) | `alerts.html` | 3.8.1 `alerts-empty` nothing needs your attention · 3.8.2 `alerts-loading` · 3.8.3 `alerts-error` could not reach your alerts |
| Cancel Guide (4.9) | `cancel-guide.html` | **4.9.1 `cancel-guide-no-guide`** the general way, plus ask us to add this one · **4.9.2 `cancel-guide-blocked`** could not cancel, not your fault |
| Cancel Win (4.10) | `cancel-win.html` | none |
| Share Snapshot (4.11) | `share-snapshot.html` | 4.11.1 `share-snapshot-loading` making your card · 4.11.2 `share-snapshot-error` |
| History and Trends (5.12) | `history-trends.html` | 5.12.1 `history-trends-empty` still gathering, and it is not the lock · 5.12.2 `history-trends-loading` · **5.12.3 `history-trends-error`** · **5.12.4 `history-trends-locked`** the frame, the person's own labels, and the gate |
| Upgrade (5.13) | `upgrade.html` | **5.13.1 `upgrade-processing`** setting up your plan · **5.13.2 `upgrade-payment-failed`** · 5.13.3 `upgrade-current-plan` the plan you are on, and the only place Pro can be cancelled · **5.13.4 `upgrade-renewal-failed`** the renewal that failed on an account already on Pro |
| Connections (6.14) | `connections.html` | 6.14.1 `connections-empty` both doors again · **6.14.2 `connections-reconnect`** a source needs attention · **6.14.3 `connections-add-source`** the chooser dialog |
| Data and Privacy (6.15) | `data-privacy.html` | **6.15.1 `data-privacy-delete-confirm`** two doors, no alarm colouring |
| Settings (6.16) | `settings.html` | 6.16.1 `settings-no-account` no account yet, the steady state of the manual path |

**Bold** marks a page that does not exist yet or whose name is wrong today. Eight are new and
four are renames; the list is at the bottom.

---

## Page count and the round

| Round | Screens | Pages |
|---|---|---|
| **Round 1, MVP** | 13 | **39** (13 base plus 26 states) |
| Round 2, LATER | 3 (Share Snapshot, History and Trends, Upgrade) | **11** (3 base plus 8 states) |
| Round 3, the auth model, 2026-08-10 | 1 (Sign In) | **5** (1 base plus 2 states, plus 6.16.1 and 5.13.3 on screens that already existed) |
| Round 4, the count ladder and the failed renewal, 2026-08-20 | 0 new screens | **3** (2.6.5, 2.6.6 and 5.13.4, all on screens that already existed) |
| Round 5, the Save tab retired, 2026-08-21 | 0 new screens | **-1** (2.6.4 `home-savefocus` retired; its block moved onto `home`) |
| **Total** | **17** | **57** |

**Round 5 took a page away, which is the first time this stage has removed one.** The founder,
clicking through the coloured product: "зачем нам страница Save (save focus) когда она очень
похожа на Home". Measured before it was answered - `home-savefocus` was 2099px tall at 390 and
331 of them were its own, so 84 per cent of its scroll was `home` repeated - and **nothing in
the product linked to it except the tab bar**: the two triggers node 2.6 named for it, node 3.8
and a Pro nudge, were specified and never built. The block it carried came back onto `home` as
a conditional block under the list, which is where `ia/docs/pages/core.md` put it in the base
layer before the 2026-08-05 rebuild dropped it. The tab bar is four destinations again.

**Round 4 re-opened it a second time, and for a different kind of gap.** Round 3 added
screens the map had specified and the grey had never drawn. Round 4 adds three states nobody
had specified anywhere: the founder, clicking through the product on 2026-08-18, asked for
"состояния пустой без например подписок и их отсутствие, если есть сервисы например 1 или
несколько", and the map's answer was that node 2.6 named four states and all four were about
the CONNECTION rather than the COUNT. The third, node 5.13.4, is the same shape on the other
side of the paywall: 5.13.2 covers a first payment that fails, which costs a person nothing,
and nothing anywhere covered a RENEWAL failing on an account already paying. Both went through
the same chain as any other structure change - the node first, then the grey, then the colour -
and the founder's decision is written into each new file, as the freeze requires.

**Round 3 re-opened a stage marked Done, and that was the point of naming it a round.** The
auth model closed the last structural `[?]` in the map and it added screens, so the grey set
was behind the IA by four pages and one field. Doing it as a named round rather than as a
quiet patch is what keeps "the wireframes are frozen" meaningful: the freeze is broken on
purpose, in the open, with the reason written down, or it is not a freeze at all.

**The three LATER screens are deferred, not lost.** They have pages today, built in July before
the scope labels were applied. Round 1 leaves those pages standing and does not refactor them;
round 2 brings them to the same contract. This is written down here so that "we did the
important ones" cannot happen quietly inside a round.

---

## What changes against the 41 pages that exist

The July build stands. What follows is the delta, and it is the work order for the steps after
this one.

**Nine pages to add** (each one is a node that has no page). Three were built on 2026-08-05,
at the step that rebuilt the main flow:

| Node | File | Why it exists |
|---|---|---|
| 1.3.4 | `connect-bank-cancelled.html` **built** | Plaid Link returns four outcomes, not three. A person who opens the bank screen and backs out had nowhere to land |
| 2.7.2 | `subscription-detail-price-change.html` **built** | The state that carries J4 on the detail screen |
| 2.7.3 | `subscription-detail-payment-failed.html` **built** | Named in the IA critique as a dead end: informed, with no next step |
| 5.12.3 | `history-trends-error.html` **built** | LATER, drawn in round 2 |
| 5.12.4 | `history-trends-locked.html` **built** | Numbered on 2026-08-05 and drawn in round 2. The gate on the screen node 5.13 says the person came from |
| 5.13.1 | `upgrade-processing.html` **built** | LATER, drawn in round 2 |
| 5.13.2 | `upgrade-payment-failed.html` **built** | LATER, drawn in round 2 |
| 6.14.3 | `connections-add-source.html` **built** | The chooser, which is the FLAG 2 resolution |
| 6.15.1 | `data-privacy-delete-confirm.html` **built** | The two-door dialog. It lived inside the page and had no page of its own |

**Four pages renamed** on 2026-08-05, because each was named after the nearest system word
rather than after its state:

| Was | Is now | Why |
|---|---|---|
| `subscription-detail-empty.html` | `subscription-detail-unrecognized.html` | Node 2.7.1, and node 2.7 has no empty state at all |
| `cancel-guide-empty.html` | `cancel-guide-no-guide.html` | Node 4.9.1. Nothing on it is empty; it carries the general steps |
| `cancel-guide-error.html` | `cancel-guide-blocked.html` | Node 4.9.2. Nothing failed on our side: the merchant blocked the person |
| `connections-error.html` | `connections-reconnect.html` | Node 6.14.2. The IA states plainly that an expired connection is maintenance and not an error, and the file name was arguing the opposite |

The keys of `voice/docs/microcopy.md` follow the file names, so its rows were renamed with them.
The lines did not change; only the screen they are keyed to is now spelled correctly.

**Carried in from the IA work, and all of it closed on 2026-08-05:**

- `cancel-win.html` showed the share block as a primary action. It is off the screen, and the
  tab bar with it: node 4.10 draws GC1 in its minimal variant. LATER under D-Share.
- `settings.html` showed a **Name** field, which the block bank decided against. The field is
  gone and the currency row is on the screen.
- `cancel-guide.html` was missing three blocks the bank found: what happens when you cancel
  with the real date, the "about five minutes, and where these steps came from" strip, and when
  the steps were last checked. All three are on it, and the steps are the netflix.com path.
- `connections.html` now states the last successful check on every source and the disconnect
  consequence in the same sentence.
- The `.zlabel` and `.zaction` annotations and the 420 by 720 mockup frame are the schema form
  of the previous stage, and both come off. **Gone from all 39 MVP pages** after the fan-out on
  2026-08-05, and **gone from the whole set** after round 2 on the same day, which took the
  three LATER screens to the same contract. The `.phone` block left `_wf.css` with them: no
  page uses it, so it is not kept "in case".

---

## Notes carried from the IA critique

All eleven findings of the IA critique are closed as states in the map, and this table renders
them. They are listed on `ia/structure.html` under "was to became" with the node each landed
on; none of them is a new screen, and none of them is invented here.
