# The rules of the system - Tendd

Stage 08. This file is the ground under `design/system/`. It is short on purpose: a rule that
needs a paragraph to state is usually two rules that disagree.

---

## Two ladders, and they are not the same ladder

Both use the word "level" and they answer different questions. Confusing them is the most common
way a design system goes wrong, so they are written apart here.

### The token ladder: where a value comes from

**primitive** to **semantic**. Two rungs, and there is no third.

- **primitive** answers *what value*: `--petrol: #1c6a76`, `--radius-sm: 10px`. It carries no
  opinion about purpose. A theme never overrides it.
- **semantic** answers *why this colour here*: `--bg-action`, `--text-muted`, `--line-control`.
  Every one points at a primitive through `var()`, and every one is written twice, once in
  `:root` and once in `[data-theme="dark"]`.

**A component level of tokens is not created wholesale.** `--button-bg` and `--card-radius` would
be a third layer of renaming: to change the colour of a button you would open three files instead
of one. A component token is created case by case, and only where a component's state lands on no
semantic role at all. The hover of a card and the hover of a list row are one `--bg-hover`, and a
component token there would be waste; the hover of a destructive button has to darken from the
danger colour rather than from the surface, and there a component token earns its name.

**Geometry gets no semantic rung.** A radius and a spacing have nothing to override: no theme and
no rebrand moves them, they simply repeat. Components read them straight from primitive. This is
the one place where stage 08 makes stage 07's rule more precise rather than repeating it: "no
value written directly in a component" becomes "colour goes through a role, geometry goes
through a primitive".

### The component ladder: what contains what

**atoms** to **molecules** to **organisms**, and the third rung is the **ceiling**.

- **atom** contains nothing else from the kit. One visual element, one content slot.
- **molecule** has two or more content slots in one unit, or hosts an atom.
- **organism** hosts a molecule, or is a screen shell, or is a container of repeated units.
  Anything that contains an organism is still an organism. Inside the group, the ones that
  contain nothing else come first.

From stage 09 a fourth shelf stands above: **patterns**, a settled composition of the rungs
below it, standing on three screens or more. Three in the system: the interruption, the action
foot and the list column. It is a new shelf in the same cupboard, not a rebuild, and its criterion
is different from the three below: repetition across screens rather than nesting. A pattern
declares no colour, no type and no visual decision of its own; if one is needed, that is an order
for a component, and the component is built first. `@import` puts the shelf LAST, after every
component, because a pattern is assembled from them and a rule that has to win cannot be declared
first.

**Grouping by purpose is forbidden.** By purpose a button and a sign-in dialog are both "forms",
and they end up side by side while one lives inside the other. The cost is not cosmetic:
alphabetical `@import` puts `dialog.css` above `field.css`, so the composite lands higher in the
cascade than its own parts, and every contextual fix starts reaching for `!important`.

---

## The ladder binds the PAGES too, and not only the CSS

**A foundations page may not show an atom, a molecule or an organism.** Founder's
correction, 2026-08-11, and the reason is that the ladder is the whole argument of this
stage: foundations, then atoms, then molecules, then organisms, each rung built out of the
one below.

The failure it corrects was mine and it was instructive. Asked to put every mark on the
icons page, I showed the two chevrons inside a real nav row and a real select, and the
shield inside a real trust block, reasoning that a mark should stand where it has ground.
That reasoning is **correct on a component page and inverted on a foundations page**: it
borrowed three molecules to display a foundation, and a reader could no longer tell which
part of the picture was the thing being documented.

A foundation is shown as itself. A mark gets its glyph, the cell it was drawn against and
its measured numbers; where it stands is a **column in a table**, not a picture. The same
holds for the other three: `color.html` shows a role as a swatch and not as a painted
button, `typography.html` shows a step as a line of type and not as a card's title,
`geometry.html` shows a radius as a corner and not as a panel.

The check is one line and it runs in the sweep: on `color`, `typography`, `geometry` and
`icons`, `document.querySelector` for any product class must return nothing.

### The parity check: the product and the system must agree, or the difference must be named

Until step 8 the product loads `design/kit/kit.css` and the component pages load
`design/system/index.css`. **Two stylesheets, and a decision that lands in only one of
them is a decision the product does not have.** That was found four separate times on
2026-08-11, always the same way: the founder opened a product screen and saw the old
thing. The row inset, the drawn chevron, the search field's clear cross and the styled
select picker each had to be carried across by hand after the fact.

So the check runs both halves and diffs them, like for like:

1. Pick a component both halves draw, and a RESTING specimen in the SAME host on each
   side. This part matters more than the diff: the first run compared whatever element
   came first and reported nine divergences of ten, of which almost all were a pressed
   tile against an unpressed one and a 32px amount against the same atom host-sized to
   14px inside a row.
2. Diff the computed padding, type, border, radius and colour.
3. Sort every difference into **explained by the fold** (the 8px grid and the type scale
   the founder adopted, which reach the product at step 8) or **unexplained**.

An unexplained difference is a defect. At the last run, ten components compared, seven
differed by the fold alone and none differed by anything else.

One limit, stated rather than hidden: a single map cannot judge both scales, because 8px
folds to 8 as a spacing and to 10 as a type step. The one item the last run flagged,
`.row .logo` at 8px against 10px, is the type step and was confirmed by hand against
`scales.md`. Per-property maps would close that, and until then a flagged item is read
before it is believed.

### The structural check, added after a page lost a block and no sweep noticed

Every component page carries six sections, in this order and with these ids:
`anatomy`, `variants`, `usage`, `rule`, `states`, `tech`. The check is one line and
it runs with the rest:

```js
['anatomy','variants','usage','rule','states','tech']
  .filter(id => !document.getElementById(id))
```

**A PATTERN PAGE CARRIES SIX TOO, AND ONE OF THEM IS DIFFERENT.** From stage 09 the check runs
`['anatomy','variants','usage','rule','where','tech']` on the three pages in `design/kit/patterns/`
territory (`interruption.html`, `act-foot.html`, `list-column.html`). **`states` is replaced by
`where`**, and neither substitution is cosmetic. A pattern has no states of its own: hover, focus
and disabled belong to the components inside it, and drawing four empty cells would document
something the composition cannot do. What a pattern must prove instead is that it exists at all,
which is the named list of three or more screens it stands on. That list is the evidence, so it is
a required block rather than a footnote.

**It exists because of a real loss.** On 2026-08-11 a bulk pass rewrote 39 matrices
across 34 files to un-crush their specimens, and `select.html` came out without its
`variants` section. The sweep that ran straight afterwards checked scroll, broken
images, table spans, empty glyph plates and theme pairs across 256 views and passed
every single one, because **not one of those checks asked whether the page still had
all of its blocks**. The founder found it by opening the page.

Two lessons, and the second is the expensive one. A bulk regex pass over dozens of
files needs a structural check, not a cosmetic one. And a check that reports the same
result for every page in a set is reporting on itself: the first run of this check
said all 41 pages were missing `rules`, because the id is `rule`; the second said all
41 had no sidebar, because the element is `aside.kit-panel` and not `.sidebar`. A
uniform failure is the signature of a broken instrument.

### The ladder check, and it runs on both instruments

The page rule above (a foundations page shows no component) has an atom-level twin: **an
atom page should not need a molecule to show the atom.** Seven of eighteen do, and the
sweep reports it, but the fix is NOT in the markup of those pages. It is in the CSS: an
atom whose size is keyed by four host classes cannot be shown any other way. Fix the
undeclared variants at step 6 and the pages stop borrowing by themselves.

Two selectors are excluded from the check with a reason, and both were false positives on
the first run: `.app` and `.landing` are the SCOPE every page needs, not components, and
they appear in the registry only because the App shell is registered on `.app`. A check
that reports the scope reports all 18 pages and therefore reports nothing.

## What a component reads

| It needs | It reads | Never |
|---|---|---|
| a colour | a semantic role: `var(--text-muted)` | a primitive, and never a literal |
| a radius, a spacing, a size | a primitive: `var(--radius-sm)` | a literal |
| a state | a state token: `var(--bg-hover)`, `var(--color-focus)` | a hex or a number written into `:hover` |

A component reading a colour primitive directly is a hole the first theme finds. A component with
a hex inside `:hover` is the same hole, one layer down: the dark theme would need forty edits
instead of three lines, and stage 11 would begin by collecting states that should already exist.

---

## Naming

Role names are **read out of the product**, not taken from another system's vocabulary.
`--color-primary` and `--surface-2` are somebody else's names. Ours come from what the audit
found on the screens and from `DESIGN.md`: `--bg-page`, `--text-muted`, `--line-control`,
`--bg-attention`.

**Three axes decide whether a role exists, and they are different questions.**

1. **Purpose.** Two purposes are two tokens even when the value is identical today. The question
   is not "is it the same colour" but "could these two places ever move apart". The petrol fill of
   a button and the petrol ink of a trust link can, so they are two.
2. **Repetition.** A colour standing in exactly one place has not proved it is a role. It stays a
   primitive and goes on a list to be looked at again.
3. **Surface.** A role declares what it paints, and there are three: **ink** (text and icon
   glyphs), **fill** (page, card, band, wash), **line** (border, divider, focus ring). One role on
   two surfaces is forbidden even at the same value, because the thresholds differ: ink answers to
   4.5:1, or 3:1 from 24px or 19px bold; fill and line answer to 3:1. A fill role placed on a 12px
   bold caption passes as a surface and fails as text, and a table of text-on-background pairs
   never catches it, because nobody declared it text. Ink roles carry the `-text` prefix in this
   system; the threshold and the measured figure stand in the comment, for both themes.

---

## The two folders

```
design/system/     the CODE. A product loads this and nothing else.
  tokens.css       primitive + semantic + [data-theme="dark"]
  base.css         what belongs to no component: reset, font, focus ring, the one keyframe
  index.css        the single entry point. Imports tokens, then base, then components BY LEVEL
  components/      one file per component
  patterns/        one file per settled composition, added at stage 09 with no move

design/kit/        the STAND. A person looks at this. It ships nothing.
  _nav.js          the registry: draws the hub cards and the side panel. Since
                   2026-08-13 the panel is on EVERY page of the stand, including
                   why.html and overview.html, which used to carry the project
                   roadmap instead because they are also roadmap rows; they are the
                   System group at the top of it now. The panel also draws the
                   sections of the page you are on, from window.NAV_SECTIONS, and
                   "The project" at its foot, from window.NAV. Both are drawn HERE,
                   in the kn-* namespace, so the project registry goes on knowing
                   nothing about a molecule
  _page.css        the stand's own look, and the home of the reviewer chrome
  overview.html    the hub
  <component>.html one page per component
  docs/            inventory, token audit, control census, this file
```

A product class in the stand, or a stand style in a component file, is a defect either way.
`design/system/` can be lifted into another project whole; the stand stays here.

**`@import` runs by level, never alphabetically.** All atoms, then all molecules, then all
organisms, alphabetically inside each level, and inside organisms the ones that contain no other
organism first. A composite must sit lower in the cascade than its own parts, or a contextual fix
becomes the only way to correct it.

---

## Contributing to the system

The rule is one sentence and everything under it is an address book: **nothing new appears on a
screen first.** It is built in `design/system/`, it is shown in `design/kit/`, and it reaches the
screen from there. That order is not bureaucracy, it is the only arrangement in which a correction
is made once and lands everywhere, and it is why the dark theme cost three lines rather than forty
edits.

### A new COMPONENT: five things, and four is not enough

1. `design/system/components/<name>.css`
2. `design/kit/<name>.html`, with the **six** sections the structural check above requires, in
   that order and with those ids: `anatomy`, `variants`, `usage`, `rule`, `states`, `tech`.
   Every state drawn in **both themes**. A pattern page carries six too, with `where` in place
   of `states`.
3. a row in `design/kit/_nav.js`, **in the group of its own level**
4. a row in `design/kit/docs/inventory.md`, **with its level**
5. an `@import` in `design/system/index.css`, **into its own level group and not at the end**

The last two are the ones that get skipped, and they are the ones that matter most for a
component added *after* the first build: appended at the end of the file it looks harmless, and
that is exactly how the ladder comes apart. Anything missing means the component is not finished,
and an unfinished component does not go onto a screen.

**Item 2 said "five blocks" until 2026-08-13, and the structural check higher up this same file
said six.** The check is the one that runs, so the check is right and the list was short by
`tech`, the block naming the css file a page is drawn by. Two editions of one contract in one
file, and the one a person reads before building was the wrong one.

### A new USAGE RULE

A row in the Usage rules table below, with its **"where it comes from" column filled**:
counted on the grey pages, decided by a person, or caught by a critique log. A rule with an empty
source is an invention with a table around it. Plus a **Limits** item on the page of every
component the rule names, linking back to the table, because the person about to break a rule is
reading the component page and not this one. A rule that lives in one head, or in one chat, does
not fire the next time.

### A new COMPOSITION

On **three screens or more** it is a pattern: a file in `design/system/patterns/`, a page in
`design/kit/`, a row in the registry in the patterns group, a line in `docs/inventory.md`, and an
`@import` **after every component**, because a pattern is assembled from them and a rule that has
to win cannot be declared first. It carries no colour, no type and no visual decision of its own;
needing one is an order for a component, and the component is built first.

On **two screens** it stays markup and goes into the candidates table on `patterns.html`. Two
occurrences prove a composition is possible, three prove it is settled, and the difference is the
whole reason the folder does not fill up with things nobody checked.

### A new VALUE

Into `tokens.css` at its own level: a raw value is **primitive**, a colour with a job is
**semantic** and reads its primitive through `var()`. There is no third level, and geometry does
not get one because a radius has nothing to re-define. A role or a state token is written
**twice**, in `:root` and in `[data-theme="dark"]`, at the moment it is declared: the pair is a
property of the level and not an event, and the way to notice a missing one is to switch the
theme, which is to say never. The change itself is a named decision, "variable, value, why", and
the origin travels with the value in a comment beside it.

### A new RULE ABOUT WIDTH, added at stage 10

Four addresses, and a screen file is not one of them.

1. **A shared value** into `tokens.css`, in the width block at primitive level: a point, a
   container, a grid floor. These have **no dark pair**, and the absence is a decision rather
   than an omission: a pair belongs to the semantic level, which is to say to colour, and
   geometry does not change direction in the dark.
2. **A cheek of a component's own behaviour** into that component's file, through
   **`@container`** with a local threshold. The component asks the width of **its place**, never
   of the screen: a card does not know whether it stands in a one-column list or in a grid of
   three, and on a desktop there are narrow places too. The threshold is local and does **not**
   become a token, but it is listed in the container-threshold register of `docs/responsive.md`,
   which is the only thing that keeps it distinguishable from a point invented for somebody's
   device. `container-type: inline-size` is declared by whoever **places** the component, a
   pattern or the page frame in `base.css`, never by the component itself: a place is not a
   property of a brick.
3. **A whole composition's behaviour** into the pattern's file, one query, which then reaches
   every screen the pattern stands on, including the ones that do not exist yet.
4. **The shell's behaviour** into `app-shell.css`, `app-bar.css` or `tab-bar.css`, through
   **`@container`** as well, and the container is `body`. This line said `@media` until
   2026-08-13, on the argument that the shell *is* the viewport; the code never did, and the
   code is the one that is right. **A shell on `@media` was measured before it was rejected**: it
   would put the register's number back in the browser window, and it would cost the stand, where
   a 434px specimen renders the phone bottom bar today and would render the desktop rail at a
   1280 window. Two consequences follow and both are load-bearing. **A point is the page
   container's width and not the window's**, so where the scrollbar is classic the tablet point
   arrives at 775 rather than 760, and the register says so. And **nothing between `body` and
   `.app` may take horizontal padding**: the reviewer's dock took 220px of it until 2026-08-12
   and every coloured screen between an 840 and a 980 window rendered its MOBILE form inside a
   desktop one. The stand re-points the query at `.kit-stage` on purpose, which is the same
   mechanism used deliberately, and it is the reason the stand can show two forms of one
   component on one page.

**In a screen file: forbidden, always.** No `@media`, no `@container`, no inline width rule. The
cost of breaking this is not paid here, it is paid at stage 12, where twenty screens are built
in a fan-out: twenty agents without the rule grow twenty media queries, and the product's
adaptation is back where the inline CSS of stage 04 was. Caught by grep, not by eye.

**A new POINT is the founder's call**, named out loud, with the audit row that needs it and a
sentence on why fluid could not do the job. Two points are enough for this product; a third is
not added as a side effect of anything. And the ladder is read top down before any of this:
fluid, then a container, then a point. "It is easier to write" is not a reason.

### A new thing on a SCREEN and nowhere else

**Forbidden.** A screen carries no style of its own: no page-level style block, no style
attribute, no class the system does not define. If none of the four entrances above fits, that is
not a case for an exception on the screen, it is the system missing something, and the missing
thing gets built. What was deliberately not built is written into `docs/backlog.md` rather than
worked around. This is the entrance that costs the most to break, because a style written on one
screen is invisible until the second screen needs the same thing, and by then there are two.

---

## Where a correction goes

The section above is where NEW goes. This one is where a FIX goes, and they are different
questions with different answers: the first asks which shelf a thing belongs on, the second asks
which single place to touch so that every screen gets it.

| What is wrong | Where the fix goes |
|---|---|
| a colour is wrong everywhere | the semantic role in `tokens.css` |
| a value is wrong everywhere | the primitive in `tokens.css` |
| a component is wrong everywhere it stands | its file in `components/` |
| the markup of a component is wrong | its page in `design/kit/`, then every screen that carries it |
| one screen looks wrong | almost never the screen. Find which of the three above it really is |

**A fix applied on one screen is a desync.** It looks finished and it is a second edition of the
component that nobody declared.

---

## Usage rules

The pages above answer "what may I take". This section answers the other question, and it is the
one nobody asks until after they have built the screen: **what may I not do with it.**

**These are not anti-rules and they do not belong on a component page.** An anti-rule is a
SUBSTITUTION: "not a chip here, a label". There is something else to take, so it lives beside the
component you should not have taken. The eleven rules below are two other kinds, and neither can
be written as a substitution, because no other component is the answer:

- **composition** is how many, and next to what. "No more than one filled action per zone." The
  component is right, its count or its neighbour is wrong.
- **context** is where it may appear at all. "No tab bar inside the onboarding chain." The
  component is right and its count is right, the place is wrong.

**Where they come from, and none of them from anybody's memory.** Every row names its source, and
a row with an empty source is not a rule, it is an invention with a table around it. There are
four possible sources and one is enough:

- **the counter**, run on `wireframes/*.html` at stage 09 step 1. The grey pages are the whole
  product, 55 pages across 17 screens, where the colour is a sample of 8 screens until stage 12.
  A rule counted on the sample would be an observation about five screens wearing the word rule.
  Read forwards it finds patterns, what repeats three times or more; read backwards it finds these,
  what never happened once although it could have.
- **`wireframes/docs/conventions.md`**, stage 04. It carried usage rules for four stages with no
  reader. They are restated here in the classes of the system rather than in prose about zones.
- **the critique logs**, 04, 06, 07 and 08. A defect caught on two screens or more is a rule, not
  an accident.
- **`docs/census.md`**, stage 08, the control census taken in a browser at both viewports.

| # | Rule | Class | Where it comes from | Components | How to check a new screen |
|---|---|---|---|---|---|
| **U1** | **One filled action per zone.** A zone is a block a person reads as one thing: the screen's own content column, or a `.panel`, `.card`, `.sheet`, `.rstep` or `<form>` inside it. The second action of a zone takes `.btn` without `.primary` | composition | conventions.md ("what the one main action is") + the counter: 15 of 17 screens carry at most one `.btn.primary` + critique 07, row "One voice, one zone", carried unresolved + the last open row of `census.md` | button, action-row | count `.btn.primary` per zone, not per page |
| **U2** | **No tab bar inside `.app.flow`, and none on the landing.** The chain is one task and the way out of it is finishing it | context | the counter: 26 grey pages carry `.app.flow` and not one of them has a `.tabbar`; 28 pages carry a tab bar and not one of them is a flow + conventions.md section 8 | tab-bar, app-shell | is the shell `.app.flow`? then no tab bar |
| **U3** | **Exactly one `.appbar` per screen, and none on the landing.** The landing is a marketing page and carries its own header | composition + context | the counter: 16 of 17 screens carry exactly one, `index` carries none | app-bar | presence |
| **U4** | **One `.textblock.status` per screen.** A screen that needs to announce two things is two states, not one screen | composition | the counter: 12 screens carry one, none carries two | text-block | count |
| **U5** | **One introductory `.textblock` per screen**, and it is the first block of its column | composition | the counter: 12 screens carry one, none carries two + it is the contract of the list column pattern | text-block, list-column | count, and check it is first |
| **U6** | **A `.textblock.status` comes with a way out**, in the same container: an `.actions` row, or a `.grid` of doors | composition | conventions.md section 7 ("no dead ends") + the counter: 19 grey pages carry a status block and 17 of them have the exit in the same container. The two that do not are named below and neither is a dead end | text-block, action-row, grid | is there an exit in the same container, or in the column beside it? |
| **U7** | **A wait carries no control at all.** An edge a person takes is a control; an edge the system takes is not, and a button on a wait screen offers an action the product does not have | context | conventions.md section 7, added 2026-08-05 + the counter: `connect-bank-loading` and `upgrade-processing` carry zero `.btn` | button, action-row | count controls; a wait has none |
| **U8** | **One `.trust` per screen, and only where a figure came from the bank.** It is the read-only declaration, not decoration | composition + context | the counter: 4 screens, never twice + conventions.md section 5 ("the read-only line wherever a trust moment appears") | trust-block | count, and ask where the figures came from |
| **U9** | **One `.total` per screen.** The most important number is the biggest thing on the screen, and two of them means neither is | composition | the counter: 4 screens, never twice + design principle 2 in `CLAUDE.md` | big-total | count |
| **U10** | **One `.sheet` at a time.** A sheet over a sheet has no way back that a person can see | composition | the counter: 3 screens carry one, none carries two | dialog-sheet | count |
| **U11** | **No footer inside the app.** Tendd is an app; the one footer in the product is on the Welcome landing | context | conventions.md section 8 | (no component: the rule is that none is built) | presence |

**The exceptions are named, not implied.** A rule with an unwritten exception is a rule people
learn to ignore.

- **U6**, and the exceptions were counted rather than remembered: of the 19 grey pages carrying a
  status block, two do not carry the exit beside it. On `cancel-guide-no-guide` the exits are in
  `.col2`, the other column of a detail layout, which is a place a person can see. On
  `upgrade-processing` there is no exit anywhere and that is deliberate twice over, because a way
  out in the middle of a charge is the thing that screen must not offer. `connect-bank-loading`,
  the other wait, carries no status block at all and so is U7's case rather than U6's.
- **U1**: `add-subscription` carries two filled actions and the rule permits it, because they sit
  in two zones: the manual form owns "Add subscription" and the screen owns "See your
  subscriptions". This is the weakest permission in the table and it is written down as such:
  stage 07 measured the two 55px apart and carried the row rather than closing it.
- **U1**: `cancel-guide` carries two filled actions **in one column**, and the rule does not
  permit it. The screen is grey only, so nothing is broken in colour today. It is a line in
  `backlog.md` and it is settled when the screen is coloured at stage 12, not by quietly widening
  the rule until it fits.

**The idle control, which is the same one every declared list in this folder carries.** A rule
that forbids something the product never does anyway is not a safe rule, it is a dead row. Nine of
the eleven are counted on screens that exist: U1 on 17 screens, U2 on 54 pages, U3 on 17 screens,
U4 and U5 on 12 screens each, U6 on 16 status blocks, U8 on 4, U9 on 4, U10 on 3. Two are carried
on a decision rather than on a count, and both say so in the source column: U7 (two pages) and
U11 (one page). **What was deliberately NOT made into a rule**: `.head`, `.summary`, `.hero`,
`.chart` and `.empty` also never appear twice on a screen, and every one of them stands on one or
two screens in the whole product. A counter that has seen one screen has not found a rule, it has
described a screen.

**Where each rule is read a second time.** Every component the table names carries a **Limits**
sub-item inside its "rule and anti-rule" block, quoting the rows that mention it and linking back
here. One author, two visible places, the same arrangement as the SEO copy and the microcopy: the
rule is written once and read where the person is standing.

---

## The one thing this stage promises

The product does not move by a pixel. There are exactly **three** legal sources of a visual
change, all of them named in `docs/tokens-audit.md`, and the pixel comparison at step 8 checks
every difference against them:

1. consolidated drift, at step 3
2. the founder's review of the foundations, at step 4
3. moving the product onto system classes, at step 6

A difference with no line in one of those three lists is a defect, and it is fixed in
`tokens.css` or in a component file. Never on the screen.

---

## Closed at step 9, 2026-08-12

The rules above are the system's. These are the four the STAGE learned, and each one is here
because a green check had already passed over it.

**1. Two instruments is not redundancy, and the overlap proves it.** Codex read the source in
read-only, a browser pass read the render, and they were merged afterwards with a "who found it"
column. Codex returned 24 rows, the browser pass 4, and **not one row was the same**. The rule
this buys: a class of defect belongs to exactly one instrument, and running the other one twice
finds none of it. The most serious finding of the stage, structural edits committed into the
frozen `wireframes/`, was invisible to the check that runs every session, because that check
looks for UNCOMMITTED changes and this one had been committed three steps earlier.

**2. An instrument that returns the same answer at every input is not measuring the input.**
Three of this stage's own probes had to be thrown away and rewritten: a wrap detector that read
element height, under components that all stand on a `min-height` floor; a line counter that used
`Range.getClientRects()` and counted inline boxes rather than lines; and a state scanner that
matched `:hover` inside comments saying no hover is declared. All three returned confident,
detailed, wrong answers. Verify the instrument on a case you already know before trusting it on
one you do not.

**3. A declared list needs an idle control, and the control has three answers, not two.** A row
that covers nothing is not automatically dead: it may be waiting for a page that is still grey,
or it may have been CONSUMED by the renaming map and left standing. The One-offs table had one of
each and both read identically until the question was asked. Every list in this folder now says
which.

**4. Completeness is proved against what has NOT been built.** The rollout moved to stage 12 and
took the real completeness test with it. The replacement is a paper dry run over the densest
still-grey screens: four of the five needed nothing, and the fifth, the landing, needs 37 classes
the system has never carried. A system checked only against the screens it was extracted from
proves nothing, because it was extracted from them.
