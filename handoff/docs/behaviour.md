# Behaviour spec - Tendd

What is NOT visible in a static screen: under which condition each state appears, what counts
as valid, where success goes, and where a person can get stuck. Everything else about a screen
is already readable from the screen itself, from `design/kit/` or from `voice/docs/microcopy.md`,
and this file links to those rather than repeating them.

**This file quotes no interface string, no hex, no pixel value and no css.** A line is named by
its row in `voice/docs/microcopy.md` (screen plus zone), a value by its token, a control by its
component. A copy goes stale in a week and then shows yesterday's truth with a confident face; a
reference stays true.

**Read from `design/*.html`, never from `wireframes/`.** After the rollout every screen exists
in colour with every state. The grey folder is frozen since Voice and is the structure contract,
not a source of behaviour.

---

## The source column, and why every row has one

Behaviour is exactly the place where a model with no source returns a plausible median that
looks flawless. So no row is written without naming where it was read. Five values, and the
fifth is declared rather than assumed:

| Value | Means | Example |
|---|---|---|
| `screen:<file>` | The state or the transition exists in the markup of that coloured file | `screen:connect-bank-error.html` |
| `flows.md` | The transition is drawn in `ia/docs/flows.md` | |
| `node:<file>` | A requirement of the IA node: a mandatory state, a validation rule, a trigger | `node:1-3-connect-bank.md` |
| `bank:<section>` | `docs/bank-connection.md`, the only file in the repository that says what a state is actually WAITING ON | `bank:3` |
| `grey, screen in the backlog` | A flow step whose coloured screen was never built. **Used zero times in all five flows** | |

**On the fifth value.** The pack for this stage names three sources plus the grey exception.
This repository has a fourth real one: `docs/bank-connection.md` is named in `CLAUDE.md` as
where every figure on a screen comes from, and it is the only place that wires each of the four
bank return states to the event that produces it. A behaviour spec without triggers is a list of
screens, so the source is used and declared here rather than quietly folded into `node:`.
**This is a decision for the founder to confirm or refuse**, and it is in the NOT DECIDED list.

**On `ia/docs/nodes/` rather than `ia/docs/pages/`.** The node files supersede the cluster files
of `ia/docs/pages/`, each saying so on its own first lines. The root `CLAUDE.md` still routes to
the older folder; that is gap **G4** in `onboarding-gaps.md` and it is corrected at step 8.

---

## Roll-call over the flows

`ia/docs/flows.md` declares five flows. A step is not closed until this table closes with a
number.

| Flow | What it is | Status |
|---|---|---|
| **A** | J-MAIN, see all recurring charges calmly, bank path | described |
| **B** | J5, track without sharing bank data, manual and presets | described |
| **C** | J2 and E2, find, cancel, feel the win | described |
| **D** | J4, stay ahead of a surprise | described |
| **E** | coming back, and keeping a list made without an account | described |

**Flows 5 = described 5 + deliberately not 0.** The roll-call closes.

Every screen named below was read from `design/`, and the value `grey, screen in the backlog`
is used **zero times in all five flows**: stage 12 closed with no unbuilt screen in any flow.

---

## Flow A: see all recurring charges calmly, bank path

The main job, first session. `flows.md` ends it at the calm list. Nine screens in colour carry
it, plus the two count states of Home that the flow diagram does not draw.

### The steps

| # | Screen | The person does | Goes to | Source |
|---|---|---|---|---|
| A1 | `index.html` (the landing, node 1.1) | takes either primary action, or the pricing pair | `path-choice.html` | `screen:index.html`, `flows.md` |
| A1b | `index.html` | takes the account link in the bar or the footer | `sign-in.html` (Flow E) | `screen:index.html` |
| A2 | `path-choice.html` | picks one of two doors, given equal weight per D2 | `connect-bank.html` or `add-subscription.html` (Flow B) | `screen:path-choice.html`, `flows.md` |
| A2b | `path-choice.html` | declines both, by the quiet link under the doors | `home-empty.html` | `screen:path-choice.html` |
| A3 | `connect-bank.html` | fills the email field in zone `account`, takes the primary action | `connect-bank-loading.html` | `screen:connect-bank.html`, `node:1-3-connect-bank.md` |
| A3b | `connect-bank.html` | takes the secondary action instead | `add-subscription.html` (Flow B) | `screen:connect-bank.html` |
| A4 | `connect-bank-loading.html` | **nothing: a wait carries no control** | one of the four return states, chosen by the event | `screen:connect-bank-loading.html`, `bank:3` |
| A5 | `guided-reveal.html` | advances the three steps of D1 in place, then takes the closing action | `home.html` | `screen:guided-reveal.html`, `flows.md` |
| A6 | `home.html` | the calm list, the end of the flow | stays | `flows.md` |

**A2b is in the code and not in the diagram.** `flows.md` draws no exit from Path Choice other
than the two doors. The screen has a third, and it lands on the empty Home. Recorded from the
screen, and flagged to the founder in NOT DECIDED as a divergence between the drawing and the
product rather than as a defect in either.

**A4 has no link in the markup at all**, which the click graph confirms: `walk13.cjs` reports
`connect-bank-loading` with no forward door and four doors declared by the reviewer's chrome.
That is the rule working, not a hole: a wait screen carries no control, and in a clickable
package the only way to show the four outcomes is the chrome strip. In a real build the four
are chosen by the webhook, not by the person.

### The states

| Node | State file | Appears when | What it says | Source |
|---|---|---|---|---|
| 1.3.2 | `connect-bank-loading.html` | `onSuccess` returned, the token is exchanged, the first pass is running | `microcopy.md`, cluster B, `connect-bank-loading` / `state-message` | `node:1-3`, `bank:3`, `screen:` |
| 1.3.1 | `connect-bank-error.html` | `onExit` carried an error, or an Item error arrived afterwards | cluster B, `connect-bank-error` / `state-message`, `primary-action`, `later` | `node:1-3`, `bank:3`, `screen:` |
| 1.3.3 | `connect-bank-empty.html` | the first recurring pass returned zero outflow streams | cluster B, `connect-bank-empty` / `state-message`, `trust-line` | `node:1-3`, `bank:3`, `screen:` |
| 1.3.4 | `connect-bank-cancelled.html` | `onExit` with **no** error: the person backed out inside Link | cluster B, `connect-bank-cancelled` / `state-message` | `node:1-3`, `bank:3`, `screen:` |
| 1.5.1 | `guided-reveal-empty.html` | the connection worked and there is nothing recurring yet | cluster B, `guided-reveal` / the empty rows | `node:1-5`, `screen:` |
| 2.6.1 | `home-empty.html` | nothing tracked yet | cluster C, `home-empty` | `node:2-6`, `screen:` |
| 2.6.2 | `home-loading.html` | a sync is in progress | cluster C, `home-loading` | `node:2-6`, `screen:` |
| 2.6.3 | `home-error.html` | the connection is stale or broken. **The figures stay visible and dated** | cluster C, `home-error` | `node:2-6`, `screen:` |
| 2.6.5 | `home-one.html` | exactly one thing tracked | cluster C, `home` set | `node:2-6`, `screen:` |
| 2.6.6 | `home-few.html` | two to five things tracked | cluster C, `home` set | `node:2-6`, `screen:` |

**The distinction between 1.3.4 and 1.3.1 is the product, not a nicety.** One is a person who
changed their mind and one is a failure, and only the first may be told that nothing was lost.
Both are `onExit`; the error object is what separates them. `bank:3`.

**Where the list starts grouping: six.** Below six the list is flat and ordered by the next
charge date; at six and above it groups by category with a subtotal per group. The number is
measured, not chosen: at 360 by 780, the narrowest phone in scope, five rows stand entirely
above the tab bar and the sixth is the first a person must scroll to. `node:2-6`.

### Edge cases

| Case | What happens | Source |
|---|---|---|
| A clean connection finds nothing | 1.3.3, and the manual path is offered on the same screen. `flows.md` routes it onward to Add Subscription | `flows.md`, `screen:connect-bank-empty.html` |
| The person refuses both the retry and the manual path | The error screen carries a third exit, the quiet link, which lands on `home-empty.html`. **This is the closure of the dead end `flows.md` draws**, and the drawing is kept because it is the record of where the product can fail | `screen:connect-bank-error.html`, `flows.md` |
| The person backs out inside Plaid Link | 1.3.4, and both doors are offered again. Reached from the chrome only, since the wait has no control | `node:1-3`, `bank:3` |
| The connection is stale on a later visit | 2.6.3: **the last known figures stay on screen and are dated**, rather than being replaced by an error. The way into the sources screen is on the same page | `node:2-6`, `screen:home-error.html` |
| Nothing recurring is found after the reveal has started | 1.5.1, which the node states explicitly is neither an error nor a failure | `node:1-5` |
| The reveal is reached with one item, or with two to five | 2.6.5 and 2.6.6. The strip reads in the singular on the first. Added 2026-08-20 on the founder's decision, because the four older states are all about the CONNECTION and none about the COUNT | `node:2-6` |

### Validation

Read from the markup of `design/connect-bank.html`, which is the only form in Flow A.

| Field | What the markup declares | Source |
|---|---|---|
| email, zone `account` | `type="email"`, `autocomplete="email"`. **No `required`, no `pattern`, and the primary action is a link rather than a form submit** | `screen:connect-bank.html` |

The node locks the FIELD and its reason, and states no rule for an empty or malformed value.
What happens then is **not decided** and is in the list below, rather than being guessed here.

### What Flow A hands to a real build

The package is a clickable prototype: every state is its own file and there is no runtime. Three
things in this flow exist only as an outcome and would be a decision in a real build, and all
three are already written down: the four return states are wired to their webhooks in
`bank:3` and `bank:4`; the account is created unverified inside Connect Bank, so this flow gains
no node and no tap; and the activation moment, per `research/docs/aarrr.md`, is the third step
of the Guided Reveal and not Home.

---

## NOT DECIDED

Rows that could not be written with a source, across all five flows. **None of these is
answered here.** Each is for the founder, and the spec stays incomplete until they are closed.
This is the list that stops the spec from returning a plausible median: every one of these is a
question a builder WILL answer tomorrow, correctly or not.

| # | Question | Why it has no source | Costs |
|---|---|---|---|
| **N1** | What happens on an empty or malformed email? | Three screens carry the field: `connect-bank`, `sign-in`, `settings-no-account`. All three declare `type="email"` and no `required`, no `pattern`, and in all three the action is a link rather than a form submit, so nothing gates it. The node locks the field and its reason and states no rule | Any real build must decide it, and a builder with no rule will invent one |
| **N2** | Is `docs/bank-connection.md` an approved source for this spec? | The pack names three sources plus the grey exception. This file is the only one that states triggers, and `CLAUDE.md` already gives it a place | If refused, ten trigger cells in the states table lose their source and the spec cannot say when anything appears |
| **N3** | `path-choice` has a third exit that `flows.md` does not draw | The transition exists in the markup (`screen:path-choice.html`) and in no flow | Either the drawing is behind the product, or the exit is unintended. Both are the founder's, and neither is a defect until it is called one |
| **N4** | What is valid in the four Add Subscription fields? | Name, amount, frequency and next charge. Only the amount carries a pattern, and it admits an empty string and a lone separator. The next charge is a text field, not a date input. No node states a rule for any of them | Same as N1 |
| **N5** | Is there a limit on asking for another sign-in link? | `sign-in-sent.html` points its resend action at itself, and no node or flow states a cooldown, a cap or what the person is told if they ask twice | A resend with no rule is either a mail loop or a silent no-op, and a builder will pick one |
| **N6** | What happens to a subscription after the person reports it cancelled? | Nothing in the nodes, in `flows.md` or in `bank-connection.md` says whether it leaves the list, stays marked, or waits for the bank to confirm. `cancel-win.html` returns to Home and the corpus has no Home state showing the difference | This is the product's most important emotional beat and its aftermath is undefined. It also decides whether the monthly total moves at once or later |
| **N7** | When does the alerts dot appear, and when does it clear? | The dot is in the markup of every tab bar with an accessible name. Node 3.8 refuses unread counts, badges and red dots, and says nothing about this one | Without a rule the dot either never clears or never appears |

---

## Flow B: track without sharing bank data, manual and presets

The privacy path, D2's equal second door. The risk this flow must survive is the manual-entry
trap: a person who abandons half way.

### The steps

| # | Screen | The person does | Goes to | Source |
|---|---|---|---|---|
| B1 | `path-choice.html` | takes the second door | `add-subscription.html` | `screen:`, `flows.md` |
| B2 | `add-subscription.html` | searches the preset library in zone `preset-search`, or picks a tile | the form below, prefilled | `screen:`, `node:1-4-add-subscription.md` |
| B3 | `add-subscription.html` | submits the form, or takes the second button beside it | stays on the screen: **the list is saved as you go**, and the count of what is added is stated in the zone under the form | `screen:add-subscription.html`, `flows.md` |
| B4 | `add-subscription.html` | takes the closing action once something is added | `guided-reveal.html`, then `home.html` | `screen:`, `flows.md` |
| B5 | `add-subscription-empty.html` | the search matched nothing; takes the manual form, prefilled with what was typed | stays, or the closing action | `screen:`, `node:1-4` |

**B3 is where the flow survives its own risk.** `flows.md` closes the dead end "abandons half
done" with two things, and both are in the code: the saved-as-you-go line on this screen, and
the retreat on `guided-reveal-empty.html`, which offers the way back to adding and a quiet exit
to the empty Home. The node states the same rule from the other end: all three failure states
end in the manual form, and **nothing on this screen can leave a person unable to add a
subscription**.

### The states

| Node | State file | Appears when | What it says | Source |
|---|---|---|---|---|
| 1.4.1 | `add-subscription-loading.html` | the catalogue has not loaded; **the search field is already usable** | `microcopy.md`, cluster B, `add-subscription-loading` | `node:1-4`, `screen:` |
| 1.4.2 | `add-subscription-error.html` | the catalogue request failed; the manual form is offered directly | cluster B, `add-subscription-error` | `node:1-4`, `screen:` |
| 1.4.3 | `add-subscription-empty.html` | the search returned nothing | cluster B, `add-subscription-empty` | `node:1-4`, `screen:` |
| - | Saved | a save succeeded | **not a page: it is the running line on `add-subscription.html` itself**, which is why the corpus has no `add-subscription-saved` in either colour or grey | `node:1-4`, `screen:add-subscription.html` |
| 1.5.1 | `guided-reveal-empty.html` | the reveal is reached with nothing added | cluster B, `guided-reveal` | `node:1-5`, `screen:` |

### Validation

| Field | What the markup declares | Source |
|---|---|---|
| name | `type="text"`, a placeholder, no `required` | `screen:add-subscription-error.html` |
| amount | `inputmode="decimal"` and `pattern="[0-9]*[.,]?[0-9]*"`, which also admits an empty value and a lone separator. No `required` | `screen:add-subscription.html` |
| frequency | a `select`, so a value is always present | `screen:` |
| next charge | `type="text"` with a date-shaped placeholder, **not a date input**, no `required`, no `pattern` | `screen:` |

No node states a rule for any of the four. That is **N4** below, widened from one field to four.

---

## Flow C: find, cancel, and feel the win

The cut job and the pride moment. D3 governs it: the paywall never sits at the cancel moment.

### The steps

| # | Screen | The person does | Goes to | Source |
|---|---|---|---|---|
| C1 | `home.html` | opens a row | `subscription-detail.html`, or the state that matches the row | `screen:home.html`, `flows.md` |
| C2 | `subscription-detail.html` | takes the primary action | `cancel-guide.html` | `screen:`, `flows.md` |
| C3 | `cancel-guide.html` | follows the steps out to the merchant | `cancel-guide-blocked.html` (the honest next screen: the merchant is where it can fail) | `screen:cancel-guide.html` |
| C3b | `cancel-guide.html` | takes the Pro action instead | `upgrade.html`, and declining there returns to the gate it came from | `screen:`, `flows.md` |
| C4 | `cancel-guide.html` or `cancel-guide-blocked.html` | reports the cancellation | `cancel-win.html` | `screen:`, `flows.md` |
| C5 | `cancel-win.html` | takes the optional share | `share-snapshot.html`, then back | `screen:`, `flows.md` |
| C6 | `cancel-win.html` | closes | `home.html` | `screen:` |

**D3 verified in the markup, not assumed.** On `cancel-guide.html` the Pro action stands beside
a free primary action that completes the job, and on `cancel-guide-blocked.html` there are two
non-terminal choices plus the Pro link. The relief moment is never gated. `flows.md` says the
same: declining the upgrade still returns the free basic instruction.

**The dead end `flows.md` draws is closed and the drawing is kept.** "Gives up, no in-app next
step" is answered by `cancel-guide-blocked.html` existing, with a way onward, a way back to the
guide, and a way to defer.

### The states

| Node | State file | Appears when | What it says | Source |
|---|---|---|---|---|
| 4.9.1 | `cancel-guide-no-guide.html` | no specific guide exists for this service | `microcopy.md`, cluster D, `cancel-guide-no-guide` | `node:4-9-cancel-guide.md`, `screen:` |
| 4.9.2 | `cancel-guide-blocked.html` | the person hit a retention wall at the merchant | cluster D, `cancel-guide-blocked` | `node:4-9`, `screen:` |
| - | `cancel-win.html` | arriving from the report action. **It has no empty, loading or error state**: the screen only exists after a completed action and its numbers are already known | cluster D, `cancel-win` | `node:4-10-cancel-win.md` |
| 4.11.1 | `share-snapshot-loading.html` | the card is rendering | cluster D, `share-snapshot-loading` | `node:4-11`, `screen:` |
| 4.11.2 | `share-snapshot-error.html` | the render or the share failed | cluster D, `share-snapshot-error` | `node:4-11`, `screen:` |
| 2.7.x | `subscription-detail-unrecognized.html` | a charge Tendd cannot name. **Reached by data, never by a click** | cluster C, `subscription-detail-unrecognized` | `node:2-7`, `screen:` |

**4.9.2 exists because of the merchant, not because of the product.** The node is explicit: the
guide warns the pressure is coming, so it is expected rather than surprising.

**What is NOT stated anywhere: what happens to the subscription after it is reported cancelled.**
Nothing in the nodes, in `flows.md` or in `bank-connection.md` says whether the item leaves the
list, stays marked, or waits for the bank to confirm it. That is **N6**.

---

## Flow D: stay ahead of a surprise

Entry is a notification. D3 splits the alert types: price change and payment failed are free,
trial ending and unusual are Pro.

### The steps

| # | Screen | The person does | Goes to | Source |
|---|---|---|---|---|
| D1 | `alerts.html` | opens a free alert | `subscription-detail-price-change.html` or `subscription-detail-payment-failed.html` | `screen:alerts.html`, `flows.md` |
| D2 | `alerts.html` | opens a Pro alert (trial ending, unusual) | `upgrade.html` | `screen:`, `flows.md` |
| D3 | `subscription-detail-price-change.html` | accepts the change, or hands off to Flow C | stays, or `cancel-guide.html` | `screen:`, `flows.md` |
| D4 | `subscription-detail-payment-failed.html` | takes the alerts action | `alerts.html` | `screen:` |
| D5 | `alerts.html` | opens what the product tells them about | `settings.html` | `screen:` |

**The Pro split is in the markup and is checkable.** On `alerts.html` the trial-ending and
unusual rows carry the gate and lead to the upgrade; the price-change and payment-failed rows
lead to the subscription. That is D3 as written: depth is paid for, J4 is not.

**The dead end is a real one and it is named rather than closed.** `flows.md` draws "no in-app
next step for a failed payment", because the fix usually lives at the bank or the merchant.
Node 2.7.3 gave it a page, and what that page offers is a route to the alerts and to the
cancel path, not a fix. The honest statement is that the product informs and cannot repair.

### The states

| Node | State file | Appears when | What it says | Source |
|---|---|---|---|---|
| 3.8.1 | `alerts-empty.html` | nothing to report. **Designed as the best state, not the missing one** | `microcopy.md`, cluster D, `alerts-empty` | `node:3-8-alerts.md`, `screen:` |
| 3.8.2 | `alerts-loading.html` | a fetch is in progress | cluster D, `alerts-loading` | `node:3-8`, `screen:` |
| 3.8.3 | `alerts-error.html` | the fetch failed. The copy separates the two fears: **nothing is wrong with the money, the alerts could not be reached** | cluster D, `alerts-error` | `node:3-8`, `screen:` |
| 5.13.1 | `upgrade-processing.html` | a payment is in progress | cluster E, `upgrade-processing` | `node:5-13-upgrade.md`, `screen:` |
| 5.13.2 | `upgrade-payment-failed.html` | a FIRST payment was declined: nothing was ever charged and the person stays on Free | cluster E, `upgrade-payment-failed` | `node:5-13`, `screen:` |
| 5.13.3 | `upgrade-current-plan.html` | a person already on Pro opens the plan row on node 6.16 | cluster E, `upgrade-current-plan` | `node:5-13`, `screen:` |
| 5.13.4 | `upgrade-renewal-failed.html` | a RENEWAL failed on an account already on Pro. The anxious half of the pair 5.13.2 only had the easy half of | cluster E, `upgrade-renewal-failed` | `node:5-13`, `screen:` |

**On the alerts dot.** The tab bar's alerts icon carries a small dot with an accessible name.
It is not the thing node 3.8 refuses: that refusal is of unread COUNTS, badges and RED dots, on
the ground of D-Concept, and this dot reads the body ink role, carries no number and is one
element. **What no file states is when it appears and when it clears.** That is **N7**.

---

## Flow E: coming back, and keeping a list made without an account

The only flow that starts outside a session, and deliberately the shortest: everything
persuasive already happened.

### The steps

| # | Screen | The person does | Goes to | Source |
|---|---|---|---|---|
| E1 | `index.html` or `settings-no-account.html` | takes the account link | `sign-in.html` | `screen:`, `flows.md` |
| E2 | `sign-in.html` | submits the address | `sign-in-sent.html` | `screen:`, `node:1-6-sign-in.md` |
| E3 | `sign-in-sent.html` | asks for another link | **itself**: the state does not change, which is the product being honest that nothing else happened | `screen:sign-in-sent.html` |
| E4 | `sign-in-sent.html` | opens a stale link | `sign-in-expired.html`, whose one action returns to E3 | `screen:`, `flows.md` |
| E5 | `settings-no-account.html` | takes the create-account action, or declines and keeps working | `sign-in-sent.html`, or nothing | `screen:`, `flows.md` |

**E2 to E4 have no forward door in the markup.** `walk13.cjs` reports `sign-in-sent` with two
doors declared by the chrome and none in the product, and that is correct: whether the link is
opened, and whether it is still valid, is not a click inside this package.

### The states

| Node | State file | Appears when | What it says | Source |
|---|---|---|---|---|
| 1.6.1 | `sign-in-sent.html` | the address was submitted. **The screen states the address it sent to**, because the commonest failure is a typo that is invisible once the field is gone | `microcopy.md`, cluster B, `sign-in-sent` | `node:1-6`, `screen:` |
| 1.6.2 | `sign-in-expired.html` | an old or used link was opened. In the same register node 6.14.2 uses for a bank that needs reconnecting: maintenance, not a failure | cluster B, `sign-in-expired` | `node:1-6`, `screen:` |
| 6.16.1 | `settings-no-account.html` | a manual-path session with no account. **A steady state, not an edge case**: it is where everyone who came in through node 1.4 and never connected a bank lives | cluster E, `settings-no-account` | `node:6-16-settings.md`, `screen:` |

**One behaviour is defined by its ABSENCE, and it is deliberate.** There is no "that email is
not registered" anywhere in this flow. Checked mechanically: zero occurrences in any of the 57
coloured screens. Telling anybody which addresses have accounts tells everybody, so the screen
behaves identically either way and the mail that arrives is the one that fits. `flows.md`.

**The merge is the other quiet part.** A list built with no account joins the account the
moment one exists, so nothing a person typed is the price of signing up. `flows.md`, and
`settings-no-account.html` says it at the account row.

### Validation

| Field | What the markup declares | Source |
|---|---|---|
| email on `sign-in.html` | `type="email"`, `autocomplete="email"`. No `required`, no `pattern`, and the action is a link | `screen:sign-in.html` |
| email on `settings-no-account.html` | the same | `screen:` |

Same shape as Connect Bank, so **N1** covers all three.

---

## Nine states no click can reach, and why that is right

`walk13.cjs` reports 9 of the 57 screens as unreachable by clicking even with the reviewer's
chrome counted. Every one of them is a state produced by DATA or by an EVENT, and a product
screen linking to it would be a lie about how it happens. This list is the clearest thing in
the whole spec about what the package is:

| Screen | What actually produces it |
|---|---|
| `guided-reveal-empty.html` | the connection found nothing |
| `cancel-guide-no-guide.html` | no guide exists for that service |
| `subscription-detail-unrecognized.html` | a charge Tendd cannot name |
| `connections-reconnect.html` | a bank connection went stale |
| `settings-no-account.html` | the session has no account |
| `history-trends-loading.html`, `share-snapshot-loading.html` | a fetch or a render in progress |
| `upgrade-current-plan.html` | the person is already on Pro |
| `upgrade-renewal-failed.html` | a renewal failed on a Pro account |

The last two are unreachable for one reason worth stating plainly: **the canonical person in
this package is on Free**, so no screen in the corpus shows a Pro session from which those two
would open. That is a property of the fixture, not a defect in the flow.
