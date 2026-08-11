# The control census - Tendd

Stage 08, step 1, part B. **Measured in a browser, not read out of the CSS.** Every figure below
is `getComputedStyle` on a rendered control, because a rule read from a file tells you what was
written and a computed style tells you what a person actually sees. The two part company wherever
a host overrides an atom, and that gap is the whole reason this document exists.

This file counts. It decides nothing: every open row is closed by the family consolidation at
step 2.

---

# Measurement before the system (step 1)

## How the sweep was taken

| Fact | Value |
|---|---|
| Pages walked | **28**, the whole coloured product, base screens and state pages alike |
| Viewports | **two**: 360 (the project's mobile floor) and 1280 |
| Control records | **594** |
| Distinct control forms (class strings) | **25** |
| Families after resolving modifiers | **24** |
| Pages that yielded no control at all | **1**, verified below |

A control is `a`, `button`, `label`, `input`, `select`, `textarea`, `[role=button]`, `[onclick]`,
**or** any element that introduces `cursor: pointer` its parent does not already have. The second
clause catches a `div` acting as a control and does not count an `svg` inside a button as a second
button.

Two viewports rather than one because half this product's controls exist at only one width: the
tab bar is a bottom bar at 360 and a left rail past a 760 container, and the desktop grid changes
which elements are laid out at all.

**Captured first, collapsed afterwards.** Every record carries font-size, weight, line-height,
all four paddings, radius, border width, style and colour, fill, ink, underline, min-height,
transform and shadow. Nothing was grouped by a five-property key before `transform` and
`box-shadow` had been looked at, because a key chosen too early deletes the evidence of the very
difference a family is being questioned about.

Raw records: `design/kit/screens/census-raw.json`.

## The one page with no controls, verified rather than filed

`upgrade-processing` returned zero controls in both viewports. **Not a finding.** The grey
original says so in its own comment: "No close here: a person must not be able to leave in the
middle of a charge and wonder whether it went through." A transit state with no exit is the
decision, and node 5.13.1 owns it. Recorded here so that the next sweep does not re-open it.

---

## 1. Drift inside a family

Read this table as a question, not a verdict: **more than one value on a property is a candidate
for drift until an axis from `inventory.md` is named that produces it.** Sixteen of the
twenty-four families answered with one value on every property and are listed at the bottom
rather than tabulated.

### `.btn` - 52 controls

| Property | Values | Which |
|---|---|---|
| font-size | **2** | 14px x46, 13.5px x6 |
| padding-x | **2** | 18px x46, 14px x6 |
| border-colour | **2** | `#7b8d91` x33, `#1c6a76` x19 |
| fill | **2** | white x33, `#1c6a76` x19 |
| ink | **2** | `#384349` x33, white x19 |

The colour split is the declared `.primary` variant and is not drift. The size split is
`.compact`, which is declared too. **What the census asks at step 2 is different:** `.compact`
changes font-size AND padding together, which is a size axis, and the inventory's control census
at stage 07 already said size is set by the container rather than by importance. Two sizes on one
button is legitimate; what is missing is the rule that says which container gets which.

### `.tile` - 12 controls

| Property | Values | Which |
|---|---|---|
| border-colour | **2** | `#7b8d91` x11, `#1c6a76` x1 |
| fill | **2** | white x11, `#e7edee` x1 |

Selection, carried by `[aria-pressed="true"]`. Declared, and the axis is named. Not drift.

### `.range button` - 9 controls, and this is the expensive row

| Property | Values | Which |
|---|---|---|
| weight | **2** | 400 x6, 600 x3 |
| border-colour | **3** | `#7b8d91` x4, `#eef2f3` x3, `#1c6a76` x2 |
| fill | **3** | white x4, `#f4f7f8` x3, `#e7edee` x2 |
| ink | **3** | `#384349` x4, `#5a686c` x3, `#1c6a76` x2 |

**Three lines on one role of one component.** All three are declared in `kit.css` (rest,
`[aria-pressed="true"]`, `[disabled]`), so this is a real three-state axis rather than four
accidental borders. But the measurement found something the file does not say out loud:

**On `history-trends-locked`, "3 months" renders disabled AND bold.** `[aria-pressed="true"]`
sets `font-weight: 600`; `[disabled]` overrides colour, fill and border and leaves the weight
alone. So behind the Pro gate the selected range is half-signalled: bold, but grey rather than
petrol. Nobody named that form. **Step 2 decides:** either disabled resets the weight, or
"disabled and selected" is a declared form with a reason.

### `.tabbar a` - 72 controls

| Property | Values | Which |
|---|---|---|
| weight | **2** | 400 x54, 600 x18 |
| border-colour | **2** | transparent x54, `#1c6a76` x18 |
| ink | **2** | `#5a686c` x54, `#1c6a76` x18 |

The current destination, `.cur`. Declared, one axis, not drift.

**A measurement artefact worth writing down so it is not rediscovered.** At desktop the
non-current tab reports a border colour of `#5a686c`. It paints nothing: past a 760 container the
rail sets `border-top: 0` and the colour falls through to `currentColor`. Border colour is only
counted here where border width is non-zero. A census that skips this reports a phantom drift on
every component that changes its border side responsively.

### Sixteen families with one value on every property

`.row` (47), `.back` (18), `.field label` (18), `.field input` (14), `.trust a` (9), `.navrow`
(8), `.acct` (6), `.removal a` (5), `.field select` (4), `.quiet a` (4), `.switch` (4),
`.switch input` (4), `.next` (2), `.consequence a` (2), `.door` (2), `.attention a` (2), `.cut`
(2), `.notice a` (1).

`.row` at 47 controls with zero variation on twelve properties is the strongest single result in
this sweep: the object the whole product is made of renders identically everywhere it stands.

---

## 2. One job, several forms

The same action text, played by different classes or different emphasis on different screens.
Each row is a decision at step 2: either one form is right, or the difference earns a reason.

| The line | Forms | Where |
|---|---|---|
| **Try again** | **three**: `.btn.primary`, `.btn`, a link inside `.notice` | primary on `subscription-detail-error` and `history-trends-error`; plain on `add-subscription-error`; a clay inline link on `home-error` |
| See what Pro adds | two: `.btn.primary`, `.btn` | primary on `history-trends-locked`; plain on all four `subscription-detail` states |
| Add a subscription | two: `.btn.primary`, `.btn.compact` | primary on `guided-reveal-empty`; compact on `home`, `home-error`, `home-savefocus` |
| Back to your subscriptions | two: `.btn.primary`, `.btn` | primary on `history-trends-empty`; plain on `history-trends-error` |
| Data and privacy | two hosts: link in `.trust`, link in `.consequence` | petrol inside the trust block on 7 pages; ink inside a consequence line on both `history-trends` pages |

**Try again is the one that matters.** It is the recovery action of an error state, and it appears
in three different weights on four error screens. A person who learns the loud petrol button on
one error screen meets a quiet inline link on the next, doing the same job. The zone rule says one
filled accent per zone and that is satisfied on each screen separately; what is not satisfied is
consistency across the four.

**Data and privacy is probably not a defect.** The two hosts are genuinely different places, and
the link takes its colour from the host by design. It is listed because the census counts rather
than judges.

**Deliberately excluded from this table:** the tab bar's Home / Save / You, which appear as both
plain and `.cur`. That is the selection axis, declared, and counting it here would bury the four
rows above in noise.

---

## 3. Control with no form

The `Variants` column of `design/kit/docs/inventory.md` was read from **all 55 grey pages**. The
coloured sample is 28 pages of 55 screens' worth of states. The difference is the list of forms
that nobody has drawn in colour yet, and therefore the list that **every later builder would
invent independently**: step 5 here, then the rollout at stage 12, and differently each time.

The list is short, which is the good news, and it is short for a reason: the sample was picked at
stage 07 for maximum component coverage.

### Nine components with no occurrence in the sample at all

| Level | Component | Grey pages | Declared variants |
|---|---|---|---|
| atom | Freshness line | 2 | - |
| atom | Legal line | 7 | - |
| atom | Meta strip | 2 | - |
| molecule | Alert item | 2 pages, 12 items | `.prices`, `.newdot` in the filled state only |
| molecule | Numbered steps | 3 | - |
| molecule | Share card | 2 | - |
| organism | Alert list | 5 | inset inside `.panel` |
| organism | Dialog sheet | 3 | framed and centred at container 760 |
| organism | Source card | 4 | - |

**Alert item is the largest hole, and the number under it was wrong.** This table said twelve
grey pages; twelve is the count of `.alert` ITEMS, on **two** pages, `alerts.html` (8) and
`alerts-loading.html` (4). Caught at the molecule round by the agent building it, which opened
the two files rather than trusting the column. `inventory.md` and the registry both said 2 all
along, so this document was the only place carrying the wrong figure, under a column headed
"Grey pages" that made it look checked. The hole itself is real and unchanged: It is the object the whole Alerts screen
is made of, and it has never been rendered in colour. Its two variants (`.prices` for a price
change, `.newdot` for unread) exist only in the grey.

### Eight declared variants of components that ARE in the sample

| Component | Variant | Grey pages |
|---|---|---|
| Row status tag | `.trial` | 1 |
| Status badge | inside `.alert` | 2 |
| Status badge | inside `.source` | 2 |
| Alert item | `.prices` | 1 |
| Alert item | `.newdot` | 1 |
| Door | `.pick` | 2 |
| Plan option | `.landing` host | 1 |
| Plan grid | `.landing` host | 1 |

`.tag.trial` is the one to read twice: the inventory already records that **it has no CSS rule
anywhere**, in the grey or in the kit. A variant that is named, used on a screen and styled by
nothing is not a missing form, it is a missing rule.

**Verified, not assumed.** Every row above was checked for the case the sweep cannot see: a
control hidden behind `display: none` and switched on by state or by scroll would read as "no
form" while being perfectly well defined. None of the seventeen rows is of that kind; all of them
are absent because the screen that carries them is still grey.

---

## What this census hands to step 2

1. One genuine unnamed form: **disabled and selected** on the range picker.
2. One genuine inconsistency: **Try again in three weights**.
3. Three decisions of the shape "one form or a reason": See what Pro adds, Add a subscription,
   Back to your subscriptions.
4. Seventeen forms that exist only in the grey, to be drawn from the grey rather than invented.
5. One rule that does not exist: `.tag.trial`.

---

# Measurement after the system (step 6)

Not taken yet. The same sweep runs again once the components are on `design/system/`, and every
row above has to be closed by it.
