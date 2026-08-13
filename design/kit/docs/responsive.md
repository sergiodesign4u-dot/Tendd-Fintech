# Width - Tendd

Stage 10. What the product does with a wider screen, where that behaviour lives, and why each
number is the number it is.

This stage did not add responsiveness. Since stage 04 every screen has been a live screen at the
full viewport, mobile-first, and the pixel comparisons of stage 08 ran at two widths, so a wide
window already rendered and was already checked for "not broken". What was missing is that the
adaptation was never NAMED, never held in a token and never owned by a component. So the stage
starts with a census of what already exists, not with a design.

**Visible place:** `design/kit/responsive.html`, in the Foundations group after `geometry.html`.

---

## Part A. The census: what adapts today, and by what

Taken 2026-08-13 by script over `design/system/` (base.css, tokens.css, 57 component files, 3
patterns), `design/*.html`, `design/kit/`, and `wireframes/` read-only. A grep, not an opinion:
it looks for a SIGN rather than judging one.

### The headline number: 18 different width values in the product, and not one of them a token

| What | How many | Which |
|---|---|---|
| Query thresholds (the real behaviour switches) | **4** | 460px (x2), **760px (x9)**, **900px (x5)**, 1340px (x1) |
| Fixed layout widths | **11** | 220, 250, 300, 320, 420, 480, 560, 620, 720, 760, 780 |
| Reading measures in `ch` | **4** | 46ch, 48ch, 50ch, 52ch (x2) |
| Width tokens in `tokens.css` | **0** | no `--bp-*`, no `--container-*`, no `--grid-*` |

The union of the distinct px numbers is **14**, plus **4** distinct `ch` measures: **18 different
width numbers**, every one of them a literal. Query blocks in the system: **14 `@container` and 4
`@media`**, one of which is `prefers-reduced-motion`, so the width media queries number **three**.

This is the list the two breakpoints of stage 10 are derived from. Without it the stage would have
declared a third threshold on top of two nobody had noticed, and none of the five numbers would
have been a decision.

### Four corpora, four different fates

| Corpus | What the census found | Fate |
|---|---|---|
| **`design/system/`** the home | 14 `@container`, 3 width `@media`, 11 fixed widths, 4 `ch` measures | stays, and gains the tokens and the registry |
| **`design/*.html`** the 32 coloured screens | **zero** `@media`, **zero** `@container`, **zero** inline width rules | **nothing to move.** The screen half of step 4 is empty because stages 07 and 08 already held the line |
| **the stand**: `design/kit/_page.css` and `kit.html` (6 thresholds: 480, 560, 720, 760, 840, 1100), `design/_screen.css` (one `@container 760` and the `container-type` on `.stage`) | the reviewer chrome's own adaptation | **not touched.** The stand is not the product |
| **`wireframes/`** the frozen witness | 6 thresholds: 460, 620, 760, 819, 900, 1340 | read-only. The 819 belongs to the reviewer panel and the 620 to `overview.html`, so both are chrome rather than product. Nothing is carried across automatically: those screens are rebuilt in colour at stage 12 |

### The seven rows that move or must be named

| # | Where | What it does | Method | Verdict |
|---|---|---|---|---|
| 1 | `subscription-row.css:165` and `save-focus-candidate.css:124` | `@media (max-width: 460px)`: the candidate row drops its cut control onto its own line | point | **`@media` becomes `@container`.** The component is measuring the screen when it should be measuring its place, and 460 is a fourth threshold that appears in no registry. It becomes a named container threshold or it goes |
| 2 | `grid.css:275` | `@media (min-width: 760px)` for `.lp-plan`, the landing's own plan row | point | the landing `index.html` does not exist in colour yet; it is built at stage 12. Either it resolves to a container query or it stays with a written reason |
| 3 | `base.css:141` `body { container-type }` and `_screen.css:285` `.stage { container-type }` | the only containers on the page | - | **all 14 container queries in the product are viewport queries under another name today.** The nearest container ancestor is `body` in a build and `.stage` on a reviewed page, and `.stage.stage-app` has zero padding so the numbers agree. Nothing is wrong today because no component stands in a narrow column. It becomes wrong the moment a two-column layout exists |
| 4 | `readout.css:38`, `text-block.css:162` and `:166`, `empty-block.css:83`, `muted-line.css:201` | 46ch, 48ch, 50ch, 52ch | container | **four reading measures for one job.** They become one `--container-text` |
| 5 | `app-shell.css:139` and `:324` (620, 780), `list-column.css:62` (620) | the ceiling of the page column | container | they become `--container-page` |
| 6 | `grid.css:263-267` | `.app .grid { repeat(3, 1fr) }`, hard coded | a point where fluid would do | **the product contains zero `clamp()`, zero `auto-fit` and zero `auto-fill`.** The grid does not count its columns, it is told them. This is exactly what `--grid-col-min` with `auto-fill` exists to end, and step 4 took it for the two rows where the count is a fit question and refused it for the one where the count is content |
| 7 | `grid.css:245-256` | `.app .plans` carries a 720px cap that is **dead** past a 900 container: measured on `upgrade.html` at 1440, it computes `max-width: none` and renders 728px | - | a live defect carried from stage 09 with the note "it closes with the name". **Founder, 2026-08-13: it closes in this stage.** |

**Read and deliberately left alone.** `design/overview.html` carries its own style block
(`max-width: 1000px`, `60ch`, tables at `min-width: 660px`). It is the stage hub of was-and-became
pairs, a review page rather than a product screen, so it keeps its chrome beside the stand.

---

## Part B. The width audit: what each screen should do with a wider screen

Corpus: all **55 pages** of `wireframes/*.html`, which is **17 screens**, because that is where the
whole product lives; the coloured folder holds a sample. Read together with `research/docs/jtbd.md`,
`research/docs/cjm-as-is.md` and `ia/docs/flows.md`, because the question is not how to stretch a
phone layout but what a wider screen gives the person in the work they came here to do.

One row per screen, its state pages inside the row. **"Same" is the default:** a screen earns
another category only when there is ground for it.

| # | Screen (node) | What the person does here | Category | How it is achieved |
|---|---|---|---|---|
| 1 | Welcome 1.1 `index.html` | reads whether this is for her, before any ask for data | **WIDER** grid | fluid: the plan row on `auto-fit`, the steps in a row; the prose in a container |
| 2 | Path Choice 1.2 | chooses between two doors | SAME | container |
| 3 | Connect Bank 1.3 (+4 states) | decides to trust us and connects a bank | SAME | container. This is the trust moment and width does not improve it |
| 4 | Add Subscription 1.4 (+3) | finds a preset or types one in | **WIDER** grid | fluid: the preset tiles on `auto-fit`; the form keeps its own measure |
| 5 | Guided Reveal 1.5 (+1) | lives the aha one step at a time | SAME | container. Principle 2, one thing at a time: width works against the gesture here |
| 6 | Sign In 1.6 (+2) | comes back without a password | SAME | container |
| 7 | **Home 2.6 (+4)** the etalon | looks at the whole list calmly | **WIDER** grid | point 900 (the dashboard head in two columns), then the column set counts its own columns from a 300px floor |
| 8 | **Subscription Detail 2.7 (+5)** | decodes a charge and decides its fate | **WIDER** grid | point 900, and past it the columns count themselves: "what is this" on the left and "what now" on the right as soon as the pane holds both, one column under that |
| 9 | Alerts 3.8 (+3) | reads what changed and goes to act | **WIDER** air | container: a list of events is rows, not a grid |
| 10 | Cancel Guide 4.9 (+2) | walks the steps of cancelling | **WIDER** air | point 900, two columns already (the steps and their context) |
| 11 | Cancel Win 4.10 | lives a small win | SAME | container. One number in the middle, and that is the whole screen |
| 12 | Share Snapshot 4.11 (+2) | shares a card that carries no account figures | SAME | the card has its own ratio |
| 13 | History and Trends 5.12 (+4) | sees her own year | **WIDER** grid | fluid: a chart is the one thing that genuinely grows with width |
| 14 | Upgrade 5.13 (+3) | compares two plans | **WIDER** grid | fluid: the plan row. Census row 7 lives here |
| 15 | Connections 6.14 (+3) | manages the sources | SAME | container: a short list of rows |
| 16 | Data and Privacy 6.15 (+1) | reads what we hold about her | **WIDER** air | container: this is continuous prose, and prose is what a measure is for |
| 17 | Settings 6.16 (+1) | looks for the right door | SAME | container: a list of doors |

### The estimate

**SAME 8** (2, 3, 5, 6, 11, 12, 15, 17) · **WIDER 9** (grid 6, air 3) · **NEW BEHAVIOUR 0**

### Why new behaviour is zero, and that is an answer rather than a gap

Mechanically the split-view threshold is met twice. `ia/docs/flows.md:171` gives the pair
Home to Subscription Detail in flow C, `flows.md:238` gives Alerts to Subscription Detail in flow
D, and the first of those is also the steady state of the main flow. By the letter of the rule,
split-view qualifies.

Three recorded decisions of this product argue against it, and each carries a source:

- **Barrier P4 in `cjm-as-is.md`**: "no app gave a calm, judgment-free space to just see
  subscriptions: too many numbers and graphs". A two-pane Home is what "too many numbers" looks
  like on a wide screen.
- **Principles 1 and 2 in `CLAUDE.md`**, calm over clever and one thing at a time: a list beside a
  detail shows two things where the product deliberately shows one.
- **D1, the gradual reveal**: the product is built on information arriving in portions.
  Split-view cancels that promise on the desktop.

And the job split-view would close, J3 (decode a charge faster), is already closed by the width of
the detail screen itself, which has stood in two columns past a 900 container since stage 08.

**Founder, 2026-08-13: no split-view.** Step 5 runs in its short form. Nothing else in the audit
asked for behaviour that does not exist on a phone.

---

## The ladder of three methods

Read top down. Take the fluid answer; if the content cannot carry it, put the content in a
container; and only what is physically impossible either way earns a point. "It is easier to
write" is not a reason. A product with a point for every difference is three products with a
switch between them, and there is always a width at which none of the three looks intended.

|  | Fluid | Container | Point |
|---|---|---|---|
| The question | will the content just stretch? | is the line too long? | is the behaviour different? |
| The mechanism | `minmax(auto-fill)`, `clamp()`, `%`, `flex-wrap` | `max-width` and `margin-inline: auto` | `@media` for the shell, `@container` for a component |
| How many in this product | no limit | two, plus one reading measure | **two** |
| What proves it | drag the width and nothing breaks | the measure, counted in `ch` | a row of the audit saying what fluid could not do |

Live on `responsive.html`, section "Three methods": each of the three is a draggable box rather
than a paragraph, because a page that describes adaptation and a page that performs it are not
the same evidence.

## The registry of points

Two points, both in `rem`, both declared in the width block of `design/system/tokens.css`.

| Token | Value | What changes | Why fluid could not do it |
|---|---|---|---|
| `--bp-tablet` | **47.5rem** (760px) | the shell. The tab bar leaves the bottom of the glass and becomes a 220px rail on the left, the app bar moves into it, the content pane becomes its own scroller | a fixed bottom bar and a rail in a grid track are two behaviours with no value between them. The rail needs 220px (measured floor 180) beside a column that still has to hold a subscription row, whose floor is 300px |
| `--bp-desktop` | **56.25rem** (900px) | the content stops being a column: the blanket 780px cap comes off, the screen becomes an explicit flex column so its blocks can be reordered, the dashboard head takes two tracks and the detail takes two | reordering blocks is not a stretch, and a measure that comes off is a switch |

**`rem` and not `px`, and the reason is a person rather than a device.** A pixel point asks how
wide the window is; a `rem` point asks how wide the window is relative to the text the person set.
At the browser default of 16px these are 760 and 900 exactly, and the root font size is set
nowhere in this system, so naming them in `rem` costs zero pixels for anyone who has not asked for
larger text.

**The register is written twice because CSS forces it to be.** A query is resolved before the
variable cascade, so `@media (min-width: var(--bp-tablet))` does not error and does not warn: it
simply never matches. The number lives in `tokens.css` as the source of truth and appears as a
literal inside each query. That is a register and its application rather than two sources, and it
becomes the instrument of step 6: every width query in `design/system/` must resolve to a number
from this table and to no other.

**Opened at step 2, closed at step 4, and this is the closing entry.** The literals in the
component files were still in `px` when the register was written, so for two steps the register and
its application agreed in value and disagreed in unit. They were all repointed at step 4. **The
live count, taken by script with comments stripped after step 6: `47.5rem` x 8, `56.25rem` x 5,
`28.75rem` x 2, and nothing else anywhere in `design/system/`.** One of the nine 47.5rem queries
came off entirely at step 6, with the prose card's measure that never needed it.

**The two point tokens are the only tokens in the system with no `var()` reader, and that is the
mechanism rather than an oversight.** A query is resolved before the variable cascade, so
`@container (min-width: var(--bp-tablet))` cannot work anywhere; the token is a REGISTER and the
literal in the query is its application. The reader is therefore a grep, not a `var()`, and the
grep is the instrument above. Written here because "a token with no reader" is a defect everywhere
else in this system, and a critic who does not find this paragraph is right to raise it.

### The point is the PAGE CONTAINER's width and not the window's, and the two are different numbers

Added 2026-08-13, after the founder reported that the width behaved oddly in the DevTools device
toolbar. The toolbar turned out to be showing a number it had not applied, which is a browser state
and not this product: at a stated 360 the page still rendered across the whole window, with no
emulation frame beside it. But the check that settled it found something the register genuinely
owed its reader.

**Every width query in this product is a `@container` query and the container is `body`**, declared
once in `base.css`. A container query reads the CONTENT box, and a classic scrollbar is outside it.
Measured on Home in Chromium, 15px scrollbar, one pixel at a time:

| Window | Container | Shell |
|---|---|---|
| 760 | 745 | bottom bar |
| 770 | 755 | bottom bar |
| 774 | 759 | bottom bar |
| **775** | **775** | **rail** |

So where the scrollbar is classic (Windows, Linux, macOS set to always show it) the tablet point
arrives at a **775px window**, and where it is an overlay (macOS by default, iOS, Android) it
arrives at exactly 760. The container jumping 759 to 775 in one pixel is the scrollbar leaving:
past the point the pane becomes its own scroller and the document stops scrolling.

**Only the tablet point carries the offset.** Past it the document no longer scrolls, so at
`--bp-desktop` the container equals the window and 900 is 900, at 890, 900 and 910 alike.

**It is not content dependent, which was the first hypothesis and it did not survive.** A screen
short enough to need no scrollbar would flip at exactly 760, so the flip width would differ from
screen to screen. Measured with the reviewer chrome stripped, in a 900px window: `home-error` runs
1853px tall and Home 1711px, and every app-frame screen in this product scrolls on the narrow side.
All of them flip at the same 775.

**The register keeps the container number, and that is the decision rather than the default.** 760
is the width at which the CONTENT has no room left, and when a scrollbar is taking 15px the content
really does have 15px less. The alternative was measured before it was rejected: moving the shell
to `@media` puts the number back in the window and costs the stand, where a 434px specimen renders
the phone bottom bar today and would render the desktop rail. Ground in `docs/decisions.md`,
2026-08-13.

### The containers

| Token | Value | What it holds |
|---|---|---|
| `--container-page` | 48.75rem (780px) | the widest a screen's content block gets between the two points |
| `--container-wide` | 80rem (1280px) | the widest it gets ABOVE the desktop point. Added 2026-08-13 |
| `--container-column` | 38.75rem (620px) | the single column: a flow screen centred in the pane, and the list column of the `list-column` pattern |
| `--container-text` | 52ch | continuous text, wherever it appears |

**`--container-wide` closes a question this register carried in writing.** The comment on
`--container-page` said the measure "comes off entirely" above the desktop point and that whether
that was right was a step 4 question. It was not right, and the founder's report is what settled
it: "a lot of white space on the right at large widths". The screen was not too narrow, two right
edges disagreed. Measured on Home before the change: at a 1440 window the head took 1125 and the
category column set stopped at its own 996 cap, at 1600 it was 1285 against 996, at 1920 1605
against 996. One cap lived in `app-shell.css` and the other in `groups-column-set.css`, and neither
knew about the other. Now every block of a wide screen stops at 1280, the column set fills it, and
the groups cap is deleted rather than moved. **80rem is not a round guess:** a fourth column of the
300px floor needs 1344px, so any cap below that keeps "three columns is the widest" true by
arithmetic. Nothing moves below a 1296px window, because that is where the pane first passes 996.

**It is a padding on the pane and not a `max-width` on each block, and that is the founder's second
question answered: "maybe centre it on the page".** A cap on the children ends a wide screen in the
right place but it cannot CENTRE one, because `margin-inline: auto` centres each block at ITS OWN
width and this product does not have one width per screen. Measured at 1920 before choosing: Home
and its four states carry one width, 1280; History and Trends carries three, 1280 for the chart and
the meta row, 525 for the readout and 459 for the muted lines; Alerts and Settings carry 620.
Centring each child would have moved the readout 377px in and left the chart at zero, which is a
ragged LEFT edge, the same defect the wide measure was opened to cure on the right.

So the shell writes `padding-inline: max(var(--space-40), (100% - var(--container-wide)) / 2)` on
the pane. One content box is centred and every block inside it stays flush left. Below a 1360px
pane the `max()` floor is the 40px the 760 block already set, so nothing moves; above it the two
gaps grow together, 50 and 50 at a 1600 window, 210 and 210 at 1920. Verified at six widths on
eleven pages: one distinct left edge per screen, two on a detail screen because a detail screen has
two columns, and no horizontal scroll anywhere.

**Two things fell out of it that a child cap could not have done.** The detail grid IS `.screen`,
so `.app > .screen > *` never matched it and it was on its way to `backlog.md` as the one screen
that ends somewhere else; a padding reaches it, and unlike a `max-width` it does not move the
pane's scrollbar into the middle of the window, because the pane still spans its track and only its
content box is capped. And the ten flow screens are untouched, which is specificity rather than
luck: `.app.flow > .screen` is 0-3-0 with its own `padding` shorthand against this rule's 0-2-0,
and a container query adds nothing to either. Checked at every width, not assumed.

Two page containers and not one, because a screen that is a form and a screen that is a pane of
content stop at different places, and folding them would move ten flow screens to make one number
tidier. The reading measure is 52 rather than the 60 to 75 of a text page because it was read off
this product: the corpus had 46ch, 48ch, 50ch and 52ch twice, and 52 is the mode. Tendd has no
long-form prose, and a 65ch line would make a two-sentence explanation of a charge look like an
article.

### The grid, and the count that is not a token

| Token | Value | What it is |
|---|---|---|
| `--grid-gap` | 8px | the air between equal children. The door row takes 16 and overrides locally, on the axis `grid.html` already declares: gap follows the child's weight |
| `--grid-col-min` | 10rem (160px) | the default narrow floor, measured: at a 360 viewport the content zone is 328px and the preset tiles stand two across with an 8px gap |
| the column count | - | **not a token, and it will not become one.** The grid counts it from the floor |

`auto-fill` and not `auto-fit`, which is this product's own correction to the usual recipe.
`auto-fit` collapses empty tracks, so the count would start depending on how many children a
screen happens to put in the grid, and `grid.html` forbids exactly that: "never by how many
children there happen to be". `auto-fill` keeps the count a property of the place.

**The per-child floors are wired at step 4, with the arithmetic shown**, because one floor cannot
reproduce the product's current two columns at 328px and three at 780px: two at 328 needs a floor
at or under 160, and exactly three at 780 needs one over 189. Stage 09 already named the answer
and left it open: "a floor per child, with the floor in the child's own file".

### There is no third point, and there is no third number left either

One number stood outside this register until 2026-08-13: the **1340** in
`groups-column-set.css`, which took the category column set from two columns to three. It was
carried as open rather than blessed, because a third point is the founder's call and never a side
effect of a refactor.

It closed at step 4, and it closed by **disappearing rather than by being promoted**. What that
number switched was a **count**, and measuring the count is what settled it: at a 900 container a
category group rendered **269px**, which is 31px under the 300px floor that same file declares its
rows need, and it stayed under it for a 60px band; at 1335 a column was 486px, nearly two floors
wide, one pixel before it snapped back to 310. A count switched by hand cannot help doing that.
The set now takes `columns: 300px` and counts its own, so the floor is the rule instead of a
sentence in a comment. Founder's decision, 2026-08-13. **The cap that stood beside it for one day
is gone too:** it was `calc(300px * 3 + var(--space-48) * 2)`, 996px, and it is what made the right
edge of Home ragged at every width above 1296. Three columns stay the maximum through
`--container-wide` instead, which is 1280 against the 1344 a fourth column needs. One cap in one
file, and it belongs to the shell because it is the shell that decides where a screen ends.

**Every width query in `design/system/` now resolves to one of the THREE registered values**: the
two points above and the single container threshold of `28.75rem` registered further down. Nothing
else appears in a query anywhere, and the live counts are 8, 5 and 2. That is the instrument the
register exists to be, and it is a grep. The threshold is named here as well as in its own register
because a check that only knew about the two points would read the two container queries as strays
and a check that forgot the threshold register would let a device number in beside them.

## The shell

The shell is the app bar, the carrier of the top-level navigation, and the page container. Its
form on a wide screen is derived from the navigation model of stage 03a, not chosen by taste.
**The navigation model is not reopened here:** how many destinations, in what order, at which
level was settled at 03a, and this stage decides only the shape they take when there is room.

### The three questions

| Question | Answer | Where it is written |
|---|---|---|
| How many top-level destinations | **four**: Home, Alerts, Save, You | `ia/docs/sitemap.md`, Global navigation. Each carries a job cluster; History and Trends is deliberately not among them, because a mostly-locked tab would break the calm promise |
| Is there a second level that must stay visible | **no** | the same file: Settings, Connections and Data and Privacy sit behind You as *deep*, Subscription Detail and the rest are *contextual*, and Upgrade appears at a gate |
| Does any screen take side space for new behaviour | **no** | the audit: split view declined, ground in part B |

### The decision: B, the rail

Taken mechanically, four destinations with no permanent second level point at **A**, the
destinations moving into the header. The rail was kept, and the ground is that the form had
already been chosen with the thing in front of the person choosing: `sitemap.md` has said "a
bottom tab bar, scaling to a left rail on desktop" since 03a, the shell has implemented it since
stage 08 across 28 coloured pages, and on 2026-08-12 the founder looked at that rail on a coloured
screen and set its width to 220px. Nothing learned since argues the other way. **Founder,
2026-08-13.**

**The counter-argument is recorded rather than dropped**, because it is this project's own and it
will come back. `app-shell.css` writes it at the line where the rail narrowed: a 240px column
holding a 22px mark, a 46px word and four one-word destinations was mostly air, and the air read
as importance the navigation does not have. A rail spends 15% of a 1440px window on four words. If
that stops being worth it, the change is answer A, and it is three component files and one line of
`sitemap.md`, not a rewrite.

### What changes on the point, and what does not

| | Below `--bp-tablet` | Above it |
|---|---|---|
| the carrier | a bar fixed to the foot of the glass, four equal tracks | a 220px rail in grid track 1, row 2 |
| a destination | a centred column, mark over label, `--row` 56px | a left-aligned row, mark then label, `--tap-rail` 48px |
| the selected mark | a 2px line over the tab | a 3px line beside it, plus a `--bg-surface` fill |
| the seam | `border-top` | `border-right`, continuing the rail's edge |
| the app bar | a sticky row across the top | the head of the rail: a column, hairline on the right, lockup at `order: -1` |
| the pane | the page scrolls | the pane is its own scroller, the shell is exactly the viewport |
| **the destinations, their order, their labels, the marks** | **unchanged** | **unchanged** |

The activation chain, `.app.flow`, carries no tab bar in either form: it is absent from the markup
rather than hidden, which is the sitemap's own rule for that chain. Its content column stays
centred at `--container-column` at every width above 620px, checked at 1440 and 1600.

### Exactly one carrier, and it is one element

Measured on `design/home.html` at **28 widths from 320 to 1600** by computed style: exactly one
visible top-level carrier at every one, and the switch is exact where the register says it is,
759 a bar and 760 a rail. The usual defect here, a header menu and a bottom bar both alive with
the hidden one left in the accessibility tree, cannot occur: **there is only one navigation
element in the markup and it changes form.** Nothing is hidden, so nothing is left behind.

### The rail in the dark theme

A surface that exists only on a wide screen is the one thing on this stage that does need a role
with a pair, and the rail has one. `--bg-recessed` against the pane's `--bg-surface`, with
`--line-container` down the right edge. Measured in both themes on `design/home.html`: the fill
separates rail from pane at **1.08:1 light and 1.11:1 dark**, the edge at **1.23:1 and 1.33:1**,
so the hairline is the load-bearing separator in both directions and the pair holds the same
relationship rather than merely existing. The destinations read at **5.37:1 at rest and 6.23:1
current** light, **5.77:1 and 6.82:1** dark.

### Found and not fixed: the focus order in the rail form

Measured on `design/home.html` at 1440 across 23 focusable controls. The rail's head takes focus
**first**, the eighteen controls of the content pane come next, and the four destinations, which
sit visually in the same left column as that head, come **last**. The rail looks like one object
and is tabbed as two, with the whole screen in between.

It is not a hidden carrier and not a duplicate: everything reachable is visible and each control
appears once, and content before navigation is a defensible order. **What cannot fix it is CSS**,
and that is the part worth writing down: the shell reorders blocks with `order` and `grid-column`,
and neither moves the tab sequence. Making the rail's two halves adjacent means changing the
markup, which on a phone would put four destinations in front of the content for everyone who
tabs, so the order has to differ by width in the DOM. That is a decision about 53 pages rather
than 33, and it is carried in `backlog.md` for stage 12, where the remaining screens get their
markup for the first time.

## Container thresholds

A container threshold is **local** and does not become a token: it belongs to one component in one
kind of place, the way a component token at stage 08 was created only where a state landed on no
role. But every one of them is listed here, because without a register a grep cannot tell a
measured local threshold from a point somebody invented for a device.

| Threshold | Where | What it decides | Why it is not a point |
|---|---|---|---|
| **28.75rem** (460px) | `save-focus-candidate.css`, and the third rule of the same block in `subscription-row.css` for a cascade reason | the cut control drops to its own line and pushes to the end; the row takes the full width | it is a fact about one row: a merchant name, an amount and a second control stop sharing a line. It says nothing about the screen, and on a desktop a candidate can stand in a 546px column and need the same answer |

Everything else in the product asks one of the two points. **The 28.75rem is the only local
threshold in the system today**, which is worth stating rather than leaving to be inferred: the
register is short because the product is, not because it was not looked for.

**Zero pixels moved when those two blocks became container queries**, and the reason is worth
knowing rather than celebrating: the nearest container is still `body`, so the question resolves
to the same number it did as a media query. What changed is what happens next, when a pattern puts
that row in a column of its own. The rule is now true instead of accidentally true.

## Component behaviour

**23 of the 60 entries in `inventory.md` adapt, and 37 do not.** The column there is filled on
every row, and an empty one would have meant "behaves unknown on a wide screen". Counted from the
CSS by script rather than from memory, and recounted after step 6, which moved three rows:

| How it adapts | How many | Which |
|---|---|---|
| **point** only | 5 | app bar, category group, chart placeholder, dialog sheet, tab bar |
| **point + fluid** | 4 | app shell, dashboard head, grid, groups column set |
| **container threshold + fluid** | 2 | save-focus candidate, subscription row |
| **fluid** only | 4 | action row, alert item, meta row, merchant chip group |
| **a reading measure**, and no query at all | 7 | readout, text block, empty block, muted line, wash block, promise list, card |
| **point + measure**, on a pattern | 1 | list column |
| **does not adapt** | 37 | the rest, and nothing is written on their pages: an empty "does not adapt" note on thirty-seven pages is noise, not documentation |

**Three rows moved at step 6 and it is worth saying which way.** Wash block and promise list were
in the "does not adapt" 39 and are now in the measure group, because the sweep found their prose
running without one. Card left the point group for the measure group without losing anything: its
560px measure stopped asking a question it never needed to ask. The groups column set moved from
"point only" to "point + fluid" when the count stopped being declared.

## New behaviour at width: none, and the shortlist that produced the none

The audit's new-behaviour column is empty on all 17 screens, so this step runs in its short form. A
short form is not a skipped step: it owes the list of what was considered, the ground each
candidate failed on, and the measurement that no new behaviour arrived by accident.

### What was considered, and why none of it passed

| Candidate | What a wide screen would gain | Verdict | On what ground |
|---|---|---|---|
| **Split-view**, the list and the detail in one pane | one fewer navigation per charge decoded | **rejected** | it meets the mechanical threshold twice (`flows.md:171` flow C, `flows.md:238` flow D) and is refused on three recorded sources anyway: barrier P4 in `cjm-as-is.md`, principles 1 and 2, and D1. Founder, 2026-08-13. The job it would close, J3, is already closed by the detail screen standing in two columns past a 900 container since stage 08 |
| **A table of the list** on the desktop, sortable columns, one row per charge | scanning by amount or by date | **rejected** | the audience line in `CLAUDE.md` is "not budget optimizers or spreadsheet fans", and barrier P4 is "too many numbers and graphs". A sortable table is the precise object this product exists not to be, and it would arrive at exactly the width where the person is most likely to be at work |
| **Bulk select and bulk cancel** | cancelling three forgotten things in one pass | **rejected** | width is not an argument for a new job. Which jobs exist is a 03a and product-scope decision, not a layout one, and the cancel moment is a guided walk (screen 4.9) that is per subscription by design: a small win is one win, and five at once is a purge |
| **A permanent second panel**: the total, the trust line or filters pinned beside the list | the number always in view | **rejected** | two grounds. D1 is portioned information, and a permanently visible summary un-portions it on the one device where the reveal has room to breathe. And the shell already spends the left side on the rail, so this would be a second permanent surface arguing with the one carrier |
| **A hover-revealed row action**, cut or edit appearing on pointer-over | a cleaner row at rest | **rejected** | a wide viewport is not proof of a pointer, and the action would be unreachable by touch. Verified rather than asserted: the system declares hover **51 times** and not one of those declarations touches `display`, `visibility` or `opacity`. Hover here is always a state of something already on the screen, which is the rule that keeps this answer easy |

### And it did not arrive by accident, which is measured rather than argued

All 32 coloured pages were rendered at a real 360 and a real 1440, the scrollbar suppressed so the
container is the number it says. On each page, every painted node inside `.app` (a non-zero box,
`display`, `visibility` and `opacity` all live, plus any non-empty `::before` or `::after` content)
and every focusable node were collected and the two widths compared as sets.

- **32 of 32 pages: the painted set is identical and the focusable set is identical.**
- **2,149 elements** inside the shell across the corpus, **303 of them focusable**.
- Not one node appears only at 1440 and not one disappears. No horizontal scroll at either width.

What that proves is bounded, and the bound is worth writing down: the wide screen shows **the same
things arranged differently**. It does not prove they are arranged well. That is the other half of
the asymmetry, and it is the sweep at step 6, not this table.

**The one thing that is new at width is the rail's own surface**, and it is a form of a carrier
that exists on a phone (the same four items, the same order, one carrier) rather than a new
behaviour. Because it is a surface that no phone ever painted, it was checked in the dark theme at
step 3 instead of being assumed.

### The idle control, run the other way

A new behaviour would have owed a new string: split-view invents the state "nothing selected",
which has never existed on a phone and would have gone through `voice.md`, into `microcopy.md`, and
`voice.html` would have been rebuilt in the same step. None of that happened.
`voice/docs/microcopy.md` carries no selection-empty line, needs none, and the whole of `voice/` is
untouched by this stage.

## What moved, and from where

Everything below was measured before and after, on all 32 coloured pages, at a real 360 and at
1280. **At 360 the difference is zero on every page**, which is the promise mobile-first makes and
the half of the asymmetry that is not allowed to move. At 1280 **21 pages changed**, and every one
of them holds one of the three causes below.

| What | Where it was | Where it is | What moved |
|---|---|---|---|
| **14 query literals from `px` to `rem`** | 9 at 760px, 5 at 900px, in ten component files | `47.5rem` and `56.25rem`, matching the register in `tokens.css` | nothing at the default text size, which is the point: the register is now true, and a person reading at a 24px root gets the narrow form while there is still a phone's worth of words in a line |
| **two `@media (max-width: 460px)` blocks** | `subscription-row.css`, `save-focus-candidate.css` | `@container (width <= 28.75rem)` | nothing today. See the register above |
| **four reading measures folded into one** | 46ch readout, 48ch and 50ch text block, 52ch empty block and ruled muted line | `--container-text`, 52ch | at 1280 a text block's paragraph goes from 424px (48ch) or 441px (50ch) to **459px**. 21 pages, and it is the whole of what changed on 19 of them. Audit rows 9, 10 and 16, wider by air |
| **the readout's measure, which was dead** | computed `max-width: none` at 1280 and rendered **980px**, the full pane | **525px** | the fourth instance of the same unbinding this product has found: `.app .readout` at 0-2-0 lost to the shell's `.app > .screen > * { max-width: none }` at 0-3-0. Repaired the way the other three were, by binding through `> .screen >`. History and Trends and its empty state |
| **the plan row's cap, which was also dead** | computed `none`, rendered **728px** at 1440 | **720px** | the defect stage 09 wrote down and carried. Founder's decision at step 1: close it here. Four Upgrade pages |
| **two grid rows stopped declaring a column count** | `repeat(3, 1fr)` for tiles and plans | `repeat(auto-fill, minmax(...))` with a floor per child | nothing at 360 and nothing at 1280: the fluid form reproduces both declared counts exactly, because both rows live on flow screens whose pane is capped. At **320** the tile row goes from two cramped tiles to one, which is the floor doing its job, and it is an improvement rather than a regression: the component's own page puts a tile's survival at 159px and two tiles at 320 were 146px each |
| **the door row kept its count**, deliberately | `1fr 1fr` | unchanged | there are two doors because the product offers two ways in (D2), not because two fit. Fluid would have put **four** doors across a 1440 window, two of the tracks empty, on the screen whose whole job is a choice between two things |
| **the groups column set stopped switching a count** | `columns: 2` from a 900 container, `columns: 3` from 1340 | `columns: 300px`, capped at three | **the third number is gone from the product.** Before: a group was **269px** at a 900 container, 31px under the 300px floor the file declares, and stayed under it to about 960; at 1335 a column was 486px, one pixel before snapping back to 310. After: 1 column to 962, 2 from 963, 3 from 1311, never narrower than 300, and past a 1310 container the set stops at 996px instead of filling the pane. Audit row 7, Home |
| **three literals became container tokens** | 620px twice, 780px once | `--container-column`, `--container-page` | nothing. Same values, one owner |
| **four more prose measures**, all found by the sweep at step 6 | a plain muted line, a wash paragraph, a promise item and a prose card had no measure at all | `--container-text` on the first three; the card keeps its own named 560 | the muted line under the chart on History and Trends ran **1300px, 150 characters, at a 1600 window** and now reads 459. Settings 620 to 459, Home empty 536 to 459, the wash paragraph 594 to 459, the three promises 620 to 459. **Ink moves only where a line re-wraps:** 38 muted boxes narrow and 6 paragraphs actually change shape |
| **the prose card's measure stopped asking a point** | `max-width: 560px` inside `@container (min-width: 47.5rem)` | the same rule with the query removed | at a 750 screen the card ran 684px and its paragraph read **78.9 characters**, the worst measure left in the product. A `max-width` never widens anything, so below 560 the query was buying nothing and costing that band |
| **the detail screen's two columns count themselves** | `minmax(300px, 1fr) minmax(320px, 1fr)` placed by hand inside the desktop point | `repeat(auto-fit, minmax(320px, 1fr))` | **the valley at 900 to 927 is closed.** The point fires at 900, the rail takes 220 and the padding 80, so the pane is 600 while the two floors plus the gutter need 668: the pane scrolled sideways and the second column's right edge sat at 928 on a 900 screen. Geometry above 988 is identical to the hand-placed version, pixel for pixel. Audit row 8 |

---

## The verification: the width sweep, and the five things it caught

### The instrument, and why three screenshots would have found none of this

**32 coloured pages by 58 widths is 1856 measurements.** The widths run 320 to 1600 in steps of 40,
with 10px steps around both points (730 to 790, 890 to 910), around the container threshold (450 to
470) and around the two places where the groups column set changes its count (960 to 965, 1305 to
1315). The pack's reason for the sweep is exact: **a defect lives between the points**, and the
worst width is the one where the content has already stopped fitting and the query has not yet
fired. Three widths prove three widths.

At every one of the 1856 stops, four things were read off the live page:

| What | How it is read | Why this one |
|---|---|---|
| horizontal scroll of the document | `scrollWidth > clientWidth` | the standard check, and **it is not enough here**: past the tablet point the shell gives `.screen` its own `overflow: auto`, so a layout that does not fit scrolls INSIDE the pane and the document stays clean. It came back clean at all 1600 stops while a real overflow was running |
| every element that leaves the viewport | the rectangle of every node inside `.app` against `clientWidth` | this is the check that found the valley. It is per element, so a clipped column cannot hide behind a scrolling ancestor |
| the carrier of top-level navigation | count of visible `.tabbar` elements and of the links inside them | the rule is exactly one at any width. Verified in the markup too: 22 app-frame screens carry one `.tabbar`, the 10 flow screens carry none, and no screen carries two. CSS changes its form, never its number |
| the reading measure, in `ch` | the box of every prose leaf over 90 characters, divided by the width of a "0" in that element's own computed font | `ch` and not `px`, because the whole reason the measure is a token in `ch` is that it follows the font. A cap in px would read as fine at 15px and as a wall of text at 20px |

**The instrument is on disk and re-runnable:** `design/kit/screens/width10-harness.html`, with the
run of 2026-08-13 beside it in `width10.txt`. There are no sweep frames and no before-and-after
screenshots, on the decision of 2026-08-11 that this project already made and wrote down on
`pixel-proof.html`: a picture of a measurement goes stale silently and then looks checked. The pack
asks for frames in `screens/`; what is there instead is the thing a frame never carried, which is
the measurement itself and the script that produces it again.

### What it caught

| # | Finding | Where the sweep saw it | Who found it | Verdict |
|---|---|---|---|---|
| 1 | **The prose card's paragraph at 78.9 characters a line**, 684px, in the band just under the tablet point | `history-trends-locked`, worst at 750 | Claude, browser | **confirmed and fixed.** The card's 560px measure was written inside a container query it never needed. The query came off, the measure stayed |
| 2 | **A plain muted line has no measure at all**, and on History and Trends it ran **1300px, 150 characters**, at a 1600 window | four states of History and Trends, plus Settings 620px, Home empty 536px, Add Subscription and Upgrade 588px | Claude, browser | **confirmed and fixed.** The measure existed for `.muted p` and for the ruled modifier, and the plain form had been missed. It reads `--container-text` now |
| 3 | **The wash paragraph and the promise item have no measure**, 594px and 620px | two Subscription Detail states, `settings-no-account` | Claude, browser | **confirmed and fixed.** Both are running prose and both now read `--container-text` |
| 4 | **The valley at 900 to 927**: the Subscription Detail pane scrolls sideways and the second column's right edge sits at 928 on a 900 screen | all six Subscription Detail pages, at 900, 910 and 920 | Claude, browser | **confirmed and fixed.** See the arithmetic in the table above. The two columns count themselves now, and the geometry above 988 is unchanged pixel for pixel |
| 5 | **A sixth element needed the `> .screen >` binding** against the shell's blanket `max-width: none` | the standalone muted line, on three screens | Claude, browser | **confirmed and bound.** Filed in `backlog.md` as a question about the blanket itself: five was a pattern, six is a defect generator |

**The measure that is left, and it stays.** The prose card's paragraph reads **60.7 characters** at
a 600 screen, because the card holds 560px and that is a named decision with its own note in
`card.css`. 52ch and 560px are two measures that disagree by eight characters. This stage does not
re-derive a named value, so the disagreement is written into `backlog.md` for the founder rather
than quietly resolved here.

### The state after the fixes, measured and not asserted

- **1856 stops: no horizontal scroll on the document, and no element leaving the viewport, on any
  page at any width.** The pane no longer scrolls sideways anywhere either.
- **The carrier is exactly one** on every app-frame screen at every width, and its four links are
  the same four.
- **The worst reading measure in the product is 60.7ch** (the named card) and everything else lands
  at 53ch or below.
- **At 360, all 32 pages are identical to the pre-stage baseline**, compared element by element on
  both the box and the ink the text actually paints. Zero differences of either kind.
- **At 1440, 32 pages differ in box and 19 in ink**, and every difference belongs to a row of the
  table above. The asymmetry is deliberate and it is the shape the stage promised.

### A trap this stage fell into twice, written down so the next one does not

**A green measurement has to be interrogated when it is too good.** Twice a measurement came back
saying "nothing changed" when something had to have changed, and both times the cause was the HTTP
cache holding the old CSS on the same origin. The fix that works is a fresh port, so the browser
has a new origin and no memory. The rule: **when a result is surprisingly clean, re-run it
somewhere the cache cannot reach before believing it.**

**And a CSS comment can eat a rule.** Two of the four measure fixes were first written as a comment
appended after an already-closed comment block, which left prose sitting in the stylesheet and a
stray `*/` after it. The browser dropped what followed, the 360 comparison lit up on six pages, and
that is how it was caught: **the 360 check earned its keep by failing.** A comment-balance check now
runs over all 65 stylesheets and is clean.

**And an instrument can hide the one thing it was built to see.** The harness injects
`html{scrollbar-width:none}` into every iframe so that the container really is the width the run
claims. That injection is exactly what kept the 15px above invisible for the whole stage: inside
the harness the tablet point fires at 760, in a browser window it fires at 775, and the sweep could
not have told the difference. The injection stays, because a sweep that cannot state its own
container width measures nothing. What it carries now is a second pass at the two points with the
scrollbar left alone, printed under `THE POINT IN A REAL WINDOW`, and a header that says which of
the two numbers each pass is reporting. Third blind spot of this instrument, after the pane that
scrolls inside a clean document and the cache that serves an old stylesheet.
