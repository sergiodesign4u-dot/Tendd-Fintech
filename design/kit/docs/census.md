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
| organism | Source card | 2 pages, 4 cards | - |

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

Taken 2026-08-12, after the central sweep put all 28 coloured screens on `design/system/index.css`
and onto system class names. **Same control definition, same two viewports, same record shape.**
The definition is the one stated in "How the sweep was taken" above and is not restated here,
because a census whose second measurement quietly redefines its own instrument measures nothing.

| Fact | Before (step 1) | After (step 6) |
|---|---|---|
| Pages walked | 28 | **28** |
| Viewports | 360 and 1280 | **360 and 1280** |
| Control records | 594 | **594** |
| Controls per viewport | 297 | **297** |
| Distinct control forms (class strings) | 25 | **23** |
| Families after resolving modifiers | 22 | **21** |
| Families with more than one value on some property | 4 | **8** |
| Families with one value on every property | 18 | **13** |
| Controls with no class attribute of their own | 126 | **104** |
| Forms selectable only through their host | 12 | **7** |
| Pages that yielded no control at all | 1 | **1**, the same one |

`upgrade-processing` returned zero controls again, for the reason recorded above. It is the
decision, not a finding, and this sweep does not re-open it.

**The before column is re-derived, not copied, and one number in the step 1 header does not
hold.** That header says 24 families; the file's own tables enumerate 22, four tabulated for drift
and eighteen listed as clean under a heading that says sixteen. Re-derived today from
`design/kit/screens/census-raw.json` by the rule those tables use (a family is the first class
token, or `<host> <tag>` where the control carries no class, and a modifier folds into its base,
which is how `.cur` was tabulated inside `.tabbar a`), the answer is 22 at each viewport. So 24
and sixteen are both wrong by the file's own evidence, 22 and eighteen are right, and every
before/after pair in this section was computed by one script over both raw sets so that the two
columns cannot be measuring different things.

**The raw capture of this sweep is not in the repository.** This round's file ownership did not
include `design/kit/screens/`, so `census-after.json` is owed there by whoever does own it. The
sweep is reproducible from the definition above; the numbers below are all from it.

---

## 1. What collapsed, form by form

Two forms went and one arrived, so 25 became 23. Three more are renames that changed a name and
not a count, and they are the ones that matter most, because they are the three atoms that had no
class anywhere in the product.

| Change | Before | After | Effect |
|---|---|---|---|
| `.btn.compact` deleted | `.btn`, `.btn.primary`, `.btn.compact` | `.btn`, `.btn.primary` | **-1 form.** Six controls on three Home screens move from 13.5px to 14px type and from 14px to 16px side padding. The family total is 52 either way |
| four link forms fold onto two hosts | `.removal a` 5, `.consequence a` 2, `.attention a` 2, `.notice a` 1 | `.muted a` 7, `.wash a` 3 | **-2 forms, -2 families.** Ten controls, same ten, under two host names instead of four |
| `.back` splits | `.back` 18 | `.back` 16, `.close` 2 | **+1 form, +1 family.** The split is what let both marks be drawn; while they shared a class CSS could not tell Back from Close |
| the text input | `.field input` 14 | `.input` 14 | a name, not a count |
| the dropdown | `.field select` 4 | `.select` 4 | a name, not a count |
| the checkbox | `.switch input` 4 | `.check` 4 | a name, not a count |

**22 controls got a class attribute they never had**, which is the whole of the 126 to 104 move in
the header table: 14 inputs, 4 selects, 4 checkboxes. Nothing else on the 28 screens gained or
lost one.

**Seven forms are still selectable only through a host, and they are named here so that nobody
has to re-derive the list**: `.tabbar a` (54), `.field label` (18), `.range button` (9),
`.trust a` (9), `.muted a` (7), `.quiet a` (4), `.wash a` (3). Two of the seven are deliberate and
their component files say so at the line. The others are not decided, they are simply not on the
map: **`range-picker.css` states in its own header that the control "is selectable only as
`.range button`, and that stays true until step 6"**. Step 6 has run and it is still true, because
the renaming map never carried a row for it.

## 2. Drift after the system: eight families, and every one of the eight resolves

Read per viewport, as the first measurement was: a property that differs between 360 and 1280 is
the responsive axis and not drift, which is why `.acct` (14px at 360, 12px at desktop) is counted
clean here.

| Family | Controls | Properties with more than one value | What produces it |
|---|---|---|---|
| `.tabbar a` | 72 | weight, border colour, ink | `.cur`, the current destination. Declared, and unchanged since step 1 |
| `.btn` | 52 | border colour, fill, ink | `.primary`. Declared. **The size split is gone**: `.compact` folded, so emphasis is now the only axis on this family |
| `.field label` | 18 | min-height, `0px` x15 and `auto` x3 | **A measurement artefact, and the second one this census has had to write down.** The three are the Amount labels inside `.field.affix`, which is now a grid, and `min-height` computes to `auto` for a grid item. Measured: all eighteen labels are 18px tall and 328px wide at 360. Nothing paints differently. Same class as the tab bar's phantom border colour recorded at step 1 |
| `.input` | 14 | padding-left, 16px x11 and 28px x3 | `.affix`, the money field. Declared in `text-input.css` with the arithmetic beside it: the field's padding, then the sign, then the air after it |
| `.tile` | 12 | border colour, fill | `[aria-pressed="true"]`. Declared |
| `.range button` | 9 | weight, border colour, fill, ink | **Four forms, all four now declared.** See the closed row below |
| `.muted a` | 7 | min-height, `44px` x5 and `0px` x2 | The 44px floor by structure: `.muted > p ~ a` and `.muted.ruled > a` take it, a link in the middle of a sentence does not. Declared, and the two running-text links measure 17px on purpose |
| `.wash a` | 3 | border colour, ink | The tone axis: clay on `.wash.error`, amber on `.wash.attention`. Declared |

**Zero unresolved drift, and the count going from four families to eight is the consolidation
working rather than failing.** Four of the new four are old drift becoming visible: `.attention a`
and `.notice a` were two clean families with one value each and are now one family with a declared
tone axis, and `.removal a` and `.consequence a` the same with the target-size axis. A difference
between two families is invisible to a per-family sweep; the same difference inside one family is
a row you have to answer for. That is the argument for the fold, stated as a measurement.

`.row` is still the strongest single result: **47 controls, one value on all seventeen
properties**, unchanged through the fold, the rename and the stylesheet swap.

## 3. The three lists of the reconcile

### A. Missing from the system

Four rows were opened before this round. **Three close, one stays open**, and the open one is the
same one the first census flagged.

| Row | Status today |
|---|---|
| The reviewer's chrome had no home | **Closed.** `design/_screen.css` holds `.layout`, `.stage`, `.stage-app` and the sidebar, and it declares `container-type: inline-size` on `.stage` for the review frame. `design/kit/kit.css` no longer exists: `design/kit/` carries `_page.css` and nothing else |
| The `.bycat` one-off had no home | **Closed.** Zero occurrences of `bycat` on the 28 coloured screens, one left in the grey. It folded into `.muted`, and the fold is visible: the by-category line's ink moved from `--text-body` to `--text-muted` |
| The `.back` / `.close` split was blocking two marks | **Closed.** Both marks are drawn in `app-bar.css` over `currentColor`, same 24 unit cell, same 16px box. `close` stands twice in colour and `back` sixteen times, and the two families measure clean on all seventeen properties |
| **"Try again" stands in three weights** | **Open.** Measured again below, and the map row that would have closed it was not executed |

### B. The screen drawing past the system

The sweep that ran is recorded in `tokens-audit.md` under "Moved onto system classes": 471 class
attributes rewritten across 80 pages, 83 controls given a class, 28 stylesheet links swapped, 19
characters removed. `design/overview.html` was excluded and renamed by hand into its `as-`
namespace, because its own style block declared `.card`, `.badge`, `.name`, `.states` and
`.pairs`. Checked here rather than taken on trust:

- **All 29 pages in `design/` link `system/index.css`.** No page links a kit stylesheet, because
  there is no longer one to link.
- **Zero old names on the 28 screens**, checked token by token across every `class="..."` in the
  corpus: `consequence`, `context`, `tone`, `legal`, `freshness`, `removal`, `pitch`, `p`, `tag`,
  `badge`, `best`, `plan`, `axis`, `strip`, `attention` as a block class, `notice`, `decoder`,
  `secondary`, `lede`, `state`, `facts`, `unlocks`, `alerts`, `navrows`, `doors`, `tiles`,
  `locked`, `source`, `num`, `bycat` all return **0**. `plans` returns 1, which is the refused
  fold standing under its own name on purpose.
- **And the sweep missed something a class-token count cannot see.** Two coloured screens were
  drawing their chart with variables the system does not declare:
  `design/history-trends.html:75` read `var(--line)` and `var(--mid)`, and
  `design/history-trends-locked.html:69` read `var(--line)`, all three inside SVG presentation
  attributes. Those were `kit.css` names. Measured in a browser at 360 and 1280 when this census
  ran: **the computed stroke was `none`, so the grid lines and the trend line were not drawn at
  all** on the two screens the Pro tier is sold on. The two frames the same round added, on
  `history-trends-empty` and `history-trends-loading`, read `var(--line-container)` and drew
  correctly, which is how it stayed invisible: two of the four chart screens were right.
  **Repaired the same day, and re-measured here rather than taken on report**: all four screens
  now stroke `rgb(228, 233, 234)` for the frame, and the trend path on `history-trends` strokes
  `rgb(56, 67, 73)` from `var(--text-body)`. Both are byte-identical to the values `kit.css` held
  under the old names, so the repair moves zero pixels against the product before the swap and the
  defect lived only in the window between the two. The lesson stays: a sweep that counts class
  attributes does not look inside an attribute that is not a class, and a property-aware scan of
  every `var()` on the 28 screens against every custom property the loaded stylesheets declare is
  what found it, in one pass, returning exactly these three and nothing else.

### C. A class nobody wears

Counted across all three corpora this time, which is the correction the last count needed.

| | Coloured, 28 | Grey, 56 | Stand, 64 |
|---|---|---|---|
| Components of the 55 with zero occurrence | **4** | 0 | 0 |
| Genuinely dead, zero everywhere | **0** | | |

**Zero of the 55 components is dead.** Four have zero occurrence in colour and are alive in the
grey, waiting for the rollout at stage 12: `.alert` (12 items on 2 grey pages), `.steps` (3),
`.sharecard` (2), `.sheet` (3). Every other component stands at least once in every corpus that
should carry it.

**Six declared things were deleted for being worn nowhere, and the count that removed them named
two corpora when there are three.** The deletions are in `tokens-audit.md`: `.tone-attention`,
`.tone-error`, `.tag.cancelled`, `.btn.inverse`, `.btn.is-disabled` and `.app .row .p`. The count
behind them swept the 28 coloured screens and the 55 grey pages, 83 pages, and **the stand is a
64-page corpus that was not swept**. It was the last place in the repository writing three of
those tokens.

Measured today, and the state has moved since the deletion was written:

| Token | Coloured | Grey | Stand |
|---|---|---|---|
| `tone-attention` | 0 | 0 | **0**, cleared from `kit.html` since |
| `tone-error` | 0 | 0 | **0**, cleared since |
| `cancelled` | 0 | 0 | **0**, cleared since |
| `inverse` | 0 | 0 | **0** since 2026-08-12. It was 2 in `kit.html`, and the step 9 idle control found the row stale: `kit.html:128` now reads `deleted 2026-08-12`. A modifier no element ever wore |
| `is-disabled` | 0 | 0 | **0** since 2026-08-12. Re-counted at step 9: no `.is-disabled` in the markup anywhere. The stand had been faking a state with a class the product does not carry, which is the thing this stage forbids by name |
| `.row .p` | 0 | 0 | 0 |

**Re-counted at step 9, 2026-08-12, and the answer changed: all six are now clean in all three
corpora.** The two that were not are above, and both were the same kind of row: a count taken
once and never re-taken while the thing it counted was deleted underneath it. A census is a
measurement and a measurement has a date; these two carried the number and not the date.

So all six of the six are now clean in all three corpora, and three spans on the
system's own front page still wear classes no rule defines. **The finding is the instrument and
not the arithmetic.** Both counts were right about what they measured; the corpus list was short
by one, and the corpus it was short by is the one page a reviewer opens first. `chip.css` still
carries the report of the old state in its header comment, naming `kit.html` lines 133, 134, 136
and 242, and those four spans are no longer there. A comment that describes a repair as pending
after it has landed is the same defect one layer down.

## 4. What the first census asked, and what happened to each

| The row | Status |
|---|---|
| **Disabled and selected on the range picker** was a form nobody named | **Closed.** `range-picker.css` declares `[disabled][aria-pressed="true"]` explicitly at 0-4-1, with the reason written above it: availability is carried by colour and selection by weight, and behind the Pro gate both facts are true at once. Every value is what the cascade already produced, so the pixels are identical; what changed is that it is now a decision |
| **`.tag.trial` had no CSS rule anywhere** | **Closed as a rule, open as an occurrence, and there is a new question inside it.** `chip.css:135` declares `.chip.trial` on `--bg-trial` and `--text-trial`. Nothing in colour wears it: measured on `design/home.html`, the "Trial" chip on the Peloton row renders `rgb(233, 238, 239)` on `rgb(79, 94, 98)`, the quiet tone, because its markup is `class="chip"`. So the trial pair is a role with a rule, one grey wearer on the landing, and no coloured one. Whether the one place in colour that says Trial should spend the trial pair is a decision, not a defect, and it is in `backlog.md` |
| **Try again in three weights** | **Open.** Below |
| **Three decisions of the shape "one form or a reason"** | One narrowed, two unchanged. Below |
| **Seventeen forms that exist only in the grey** | **One closed, one closed as a rule, fifteen open, and an eighteenth found.** Below |

### The three "one form or a reason" rows

| The line | Before | After | Reading |
|---|---|---|---|
| **Add a subscription** | `.btn.primary` 165x44 on `guided-reveal-empty`, `.btn.compact` 153x44 at 13.5px on three Home screens | `.btn.primary` and `.btn`, **both 161.14x44, both 14px, both weight 600** | **Narrowed by the fold, not decided.** It was a size difference and an emphasis difference; the `.compact` deletion removed the size half, so what is left is one axis: fill or outline. Still two forms, and the question is now a clean one |
| **See what Pro adds** | primary 164x44 on `history-trends-locked`, plain 164x44 on four `subscription-detail` states | primary and plain, both 159.56x44 | **Unchanged.** Two forms, emphasis only. The hosts are different (`.card.prose` on one, `.gate` inside `.panel` on the other), which is the shape of an answer if anyone wants one |
| **Back to your subscriptions** | primary 218x44 on `history-trends-empty`, plain 218x44 on `history-trends-error` | primary and plain, both 214.23x44 | **Unchanged.** Two forms on two states of one screen, which is the least defensible of the three: a person meeting both meets them one after the other |
| **Data and privacy** (listed at step 1 as probably not a defect) | petrol 12px in `.trust` on 7 pages, ink 13px in `.consequence` on 2 | petrol 12px in `.trust`, **ink 14px in `.muted`** on 2 | The two hosts are still genuinely different places. The gap widened by one type step, because `.consequence` folded onto the base `.muted` and grew 2px. Still counted rather than judged |

### The seventeen grey-only forms, one by one

| # | Form | Today |
|---|---|---|
| 1 | Freshness line | **Closed by the consolidation.** `.freshness` folded onto the base `.muted`, which stands 42 times in colour. There is no separate form left to draw |
| 2 | Legal line | Open. `.muted.ruled`, 0 in colour, 7 grey pages. `ruled` is worn on no coloured screen at all |
| 3 | Meta strip | Open. `.metarow.ruled`, 0 in colour, 2 grey pages. The base `.metarow` stands 3 times in colour |
| 4 | Alert item | Open. `.alert`, 0 in colour, 12 items on `alerts.html` and `alerts-loading.html` |
| 5 | Numbered steps | Open. `.steps`, 0 in colour, 3 grey pages, all three cancel-guide |
| 6 | Share card | Open. `.sharecard`, 0 in colour, 2 grey pages |
| 7 | Alert list | Open. `.divlist.inset`, 0 in colour; the base `.divlist` stands twice, on the two Settings screens |
| 8 | Dialog sheet | Open. `.sheet`, 0 in colour, 3 grey pages |
| 9 | Source card | Open, and narrowed the way Freshness was not. `.source` folded to `.card`, so the NAME is gone, but the bare `.card` stands 0 times in colour: the one coloured card is `.card.prose`, the Pro gate. The base form of the card component has never been drawn |
| 10 | Row status tag `.trial` | **Rule closed, occurrence open.** See above |
| 11 | Status badge inside `.alert` | Open, and it cannot close before row 4 |
| 12 | Status badge inside `.source` | Open, and it cannot close before row 9 |
| 13 | Alert item `.prices` | Open. 1 grey page |
| 14 | Alert item `.newdot` | Open. 3 occurrences on 1 grey page |
| 15 | Door `.pick` | Open. 4 occurrences on 2 grey pages |
| 16 | Plan option, `.landing` host | Open. `landing` stands 0 times in colour and once in the grey |
| 17 | Plan grid, `.landing` host | Open, same page, same reason |

**An eighteenth, found by this sweep.** The panel's disclosure form has no coloured occurrence
either: `<summary>` and `<details>` return **zero on all 28 coloured screens**, and stand on two
grey pages. It matters because two of this round's named fixes land on exactly that element, the
focus ring turned inward and the `--tap` floor on the summary. Both are true in the system and
invisible in the product today, which is not an argument against them; it is the reason nobody
would have caught them by looking at a coloured screen.

So the count that goes to stage 12 is **fifteen open plus one new, sixteen**, and two closed: one
by a fold that removed the form, one by a rule that was written.

## 5. "Try again" is the one genuinely open row, and it needs stating precisely

Measured today at both viewports, four screens, all four at 14px and weight 600 with a 44px floor:

| Screen | Form | Fill | Ink | Box |
|---|---|---|---|---|
| `history-trends-error` | `.btn.primary` | `rgb(28, 106, 118)` | white | 97.06 x 44 |
| `subscription-detail-error` | `.btn.primary` | `rgb(28, 106, 118)` | white | 97.06 x 44 |
| `add-subscription-error` | `.btn` | white | `rgb(56, 67, 73)` | 97.06 x 44 |
| `home-error` | **a bare `a` inside `.wash.error`** | none | `rgb(154, 88, 66)`, underlined | 63.06 x 44 |

The only thing that moved since step 1 is the fourth: 13px to 14px, 59px wide to 63.06px, because
the wash fold gave it `--type-body`. Three weights, four screens, exactly as before.

**The renaming map carries a row that would have closed one of the three, and it was not
executed.** `inventory.md:220` reads `` `.btn` on `add-subscription-error` `` becoming
`` `.btn.primary` ``, 1 in `design/`, 1 in `wireframes/`. Read today,
`design/add-subscription-error.html:57` is still `<a class="btn" ...>Try again</a>`. No refusal
was written for it, unlike the three rows that were refused with a measurement. **And the reason
to look before executing it is on the screen itself**: that page already carries two filled
buttons, "Add subscription" at line 92 and "See your subscriptions" at line 98, so promoting Try
again would put a third petrol fill on one screen, against the zone rule.

**The bare link in the wash is covered by no row of the map at all.** Its host was renamed,
`.notice.is-error` becoming `.wash.error`, and the link inside it has no class, no row and no
component page of its own.

**A reading is available, and this file will not choose between it and the alternatives.** Sorted
by what the error did to the screen rather than by which class it wears, the product is already
consistent:

- The error **replaced** the content. `history-trends-error` has no chart and no figures;
  `subscription-detail-error` keeps the hero and loses the rest. Both take the filled button, and
  it is the only action of any weight on the screen.
- The error **annotates** content still on screen. `add-subscription-error` failed to load the
  service list while the manual form under it is untouched and is the point of the screen;
  `home-error` shows every figure and one line saying they are not fresh. Both take something
  quieter, and on `home-error` the recovery sits inside the sentence that explains it.

Three honest options, and the difference between them is a decision about emphasis:

1. **Write the reading down as a rule and change nothing.** Cheapest, and it makes today's four
   screens correct rather than lucky. It costs the map its `add-subscription-error` row, which
   would then be deleted with a reason rather than left unexecuted.
2. **One form for the job, everywhere: `.btn.primary`.** Simplest to explain to a person who meets
   two error screens in a row. It puts a third filled button on `add-subscription-error` and turns
   the calm line on `home-error` into a petrol button sitting on the whole list, which is the
   loudest thing this product would then do about a refresh that will retry itself.
3. **One form for the job, everywhere: `.btn`.** Consistent and quiet, and it removes the filled
   button from the two screens where the retry is the only thing left to do.

Option 1 needs a name for the axis, which nothing in the system has: `.wash` has a tone axis and
no emphasis axis, and the link inside it is not a component. Options 2 and 3 each move pixels on
two screens and therefore need a line in `tokens-audit.md` under a named source. **This is the
founder's, and it is the last open row of this census.**
