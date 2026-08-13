# Decision log

What we did, why exactly this, and what we rejected on what ground. Newest on top.
This file is never loaded into a session automatically: read it when you need the ground
under a decision. Rules that must hold next time live in `CLAUDE.md`; status lives in the
README table and in `done:true` in `/_nav.js`.

---

## 2026-08-13 - The system's own pages move inside the system, and the roadmap comes with them

**What the founder said, in two rounds.** First: "I want this to be part of that, and not to have
to hunt for where the design system itself is, and the same for responsive." That was answered with
a door: a "The system" block under the active stage of the project sidebar. It was the wrong shape,
and the second round said why: **"when you click there it should be built into the design system
itself, maybe as a System section holding all of it."**

**What was actually wrong.** Three pages of `design/kit/` carried the PROJECT roadmap instead of
the system's own panel, because they are also roadmap rows: `why.html` (stage 09), `overview.html`
(stage 08) and `responsive.html` (stage 10). So clicking Design System in the roadmap landed you on
a page that still looked like the roadmap, and the material was one more click away behind a link
in the body. A door from one island to the other does not fix that; it adds a link to it.

**What we did.** Every page of the stand now carries the same panel, and the two documents became a
group in it: **System**, at the top, holding "Why the system is like this" and "Tokens and
components". Width was already in Foundations and stays there, because width is geometry before it
is a stage document and one page in two groups of one panel is a second entrance to one room. The
panel also renders the SECTIONS of the page you are on, read from `window.NAV_SECTIONS`, so nothing
the roadmap used to show was lost in the move: "Step 1, the audit ... The material" is where it
always was, one level in. And the roadmap itself comes back as **The project** at the foot of the
panel, thirteen stages with the one you are standing in marked.

**Two duplicates were deleted rather than left beside the new group.** The panel head carried "The
whole system" on 70 pages and the panel foot carried "Why the system is like this" on 67, and both
now point at rows of the System group. The group is open on every page for the same reason: it is
the way in, and it is two rows.

**The rule this respects.** The 57 components still do not enter the project roadmap; `CLAUDE.md`
says so and still says so. What changed is the sentence after it: a stage page carries the roadmap,
and where a stage HAS its own registry, its pages carry that panel instead, with the roadmap back
at its foot. The project registry still knows nothing about a molecule: `/_nav.js` is loaded by
every page of the stand and draws nothing on any of them, because its renderer returns on the first
line when it finds no `#sidebar`. All the drawing is done by the stand's registry in the `kn-*`
namespace.

**Two bugs found in the building, both by measuring rather than by reading.** The door's links
rendered in petrol, because `_page.css` paints every CLASSLESS link on a stand page with
`--text-action` so that product specimens keep their real link colour: a chrome link here carries a
class or it is painted as content. And "The project" marked **Wireframes** as the stage you were
standing in while you stood in the system hub, because it compared file NAMES and `overview.html`
is the file name of both hubs. It compares the tail of the path now, which is what the project
registry has always done.

---

## 2026-08-13 - One right edge for a wide screen, and the groups run by spend

**What the founder saw.** "A lot of white space on the right at large widths", with a screenshot of
Home at a wide window, and a second question beside it: "why is Music under Software?"

**The white space was not empty room, it was two right edges disagreeing.** Measured on Home before
anything was touched: at a 1440 window the pane is 1140, the head with its alert takes 1125 and the
category column set stops at 996; at 1600 it is 1285 against 996; at 1920, 1605 against 996. The
shell let every block of a wide screen take the whole pane, and the column set carried a cap of its
own, `300 * 3 + 48 * 2 = 996`, which existed to keep "three columns is the widest" true. One number
lived in `app-shell.css` and the other in `groups-column-set.css`, and neither knew about the other.

**What we did.** A new primitive, `--container-wide` at **80rem (1280px)**, and the shell's blanket
above the desktop point stops being `max-width: none` and becomes that measure. The groups cap is
**deleted rather than moved**, because a cap inside a cap is the drift stage 09 existed to remove.
80rem is not a round guess: a fourth column of the 300px floor needs 1344px, so any cap below that
keeps three columns the maximum by ARITHMETIC rather than by a remembered number. Nothing moves
below a 1296px window, which is where the pane first passes 996. At 1600 the set is now three
columns of 395 instead of three of 300 with 304px of nothing beside them.

**What it costs, named rather than discovered.** Above a 1580 window the content stops growing and
the pane keeps going, so there is deliberate air at 1920 and beyond. That is the same decision as
every reading measure in this product: a list of subscriptions 1600px wide stops being scannable.
The air is now on ONE edge shared by every block instead of ragged between them.

**What we rejected.** Letting the set fill the pane with no cap at all: it uses everything and
gives four columns at 1920 and six at 2560, which turns a calm overview into a table and breaks the
floor argument from the other side. And a right-hand column for alerts and insights, which is the
right long-term answer for a dashboard and is NEW BEHAVIOUR: a new empty state, focus work, a line
in `microcopy.md` and a rebuild of `voice.html`. Stage 10 closed with zero new behaviour on
purpose, and this is a decision of its own rather than a side effect of a complaint about white
space.

**Second round the same day, and it is the founder's second question: "maybe centre it on the
page".** The answer is yes, and the mechanism had to change to say it. A cap on the children ends a
wide screen in the right place but it cannot centre one, because `margin-inline: auto` centres each
block at ITS OWN width and this product does not have one width per screen. Measured at 1920 before
choosing: Home and its four states carry one width, 1280; History and Trends carries THREE, 1280
for the chart, 525 for the readout, 459 for the muted lines; Alerts and Settings carry 620.
Centring each child would have moved the readout 377px in and left the chart at zero, which is a
ragged LEFT edge, the same defect the wide measure was opened to cure on the right.

So the measure moved from the children to the pane:
`padding-inline: max(var(--space-40), (100% - var(--container-wide)) / 2)`. One content box is
centred and every block inside it stays flush left. Nothing moves below a 1360px pane, where the
`max()` floor is the 40px the 760 block already set; above it the gaps grow together, 50 and 50 at
a 1600 window, 210 and 210 at 1920. **The cost is named:** the gap between the rail and the content
grows too, 210px at 1920 and 530 at 2560. Left-aligned, that same 1920 window puts all 340px of the
air on one side. Founder's call, and one declaration to reverse.

**It also closed a backlog row the same hour.** The detail grid IS `.screen`, so a cap on
`.app > .screen > *` never matched it and the detail screen was going to end 340px further right
than every other screen. A `max-width` there would have moved the pane's scrollbar into the middle
of the window; capping its track with `minmax(320px, var(--container-column))` broke the two
columns everywhere below a 1988 window, because `auto-fit` counts repetitions off a definite MAX
and not the min, so a 1140px pane fitted one track instead of three. Both were measured and both
were reverted. A padding on the pane does the job with neither cost, because the pane still spans
its track and only its content box is capped. **The ten flow screens are untouched**, and that is
specificity rather than luck: `.app.flow > .screen` is 0-3-0 with its own `padding` shorthand
against this rule's 0-2-0. Checked at six widths on eleven pages.

**And the groups now run by monthly spend, highest first.** 54.96, 53.98, 36.00, 24.98, 22.98. It
was Streaming, Software, Music, Fitness, News, which followed no rule a reader could find, and
Music at 22.98 stood above News at 36.00. Past the desktop point the set is a multicolumn flow, so
it fills column one top to bottom before column two: with an arbitrary order that reads as an
accident, which is exactly what the founder's second question was. Highest first makes the vertical
flow a rule a person can feel. **This is a STRUCTURE change and not a styling one**, so it is
written into every file it touches: `home`, `home-savefocus` and `home-error` in `design/` and the
same three in `wireframes/`, so the grey contract and the colour do not disagree. It moves pixels
at 360 as well, and that is the point of it rather than a side effect.

---

## 2026-08-13 - A point is a container width, and the shell keeps its container query

**What happened.** The founder reported that the width behaved oddly in the Chrome DevTools device
toolbar: dragging the handle changed nothing, typing 360 changed something once, and the layout on
screen did not match the number in the toolbar. **The report was right about the symptom and the
product was not the cause.** In the screenshots the page renders across the whole window at a
stated 360, with no emulation frame beside it, so the toolbar was displaying a number it had not
applied. Verified independently: `design/home.html` was walked at eleven widths with a real
viewport resize and again with `Emulation.setDeviceMetricsOverride` at DPR 2, which is the same
mechanism the device toolbar uses. The shell takes its rail above the point and its bottom bar
below it, every time, in both directions.

**What the check found that the report could not name.** The register published `760` and `900` as
if they were window widths. They are **container** widths. Every width query in this product is a
`@container` against `body`, a container query reads the content box, and a classic scrollbar sits
outside it, so the tablet point arrives at a **775px window** on Windows and Linux and at exactly
760 where the scrollbar is an overlay. Measured one pixel at a time on Home: 774 gives a 759
container and the bottom bar, 775 gives a 775 container and the rail. The desktop point carries no
offset, because past the tablet point the pane is its own scroller and the document stops
scrolling.

**What we rejected, and it was measured before it was rejected.** Moving the shell's three files
(`app-shell.css`, `app-bar.css`, `tab-bar.css`) to `@media` would put the register's number back in
the browser window and would satisfy the rule as three documents had written it. It was tested by
taking the container off `.kit-stage` at a 1280 window, which is what a media query would leave:
the 434px specimen on `tab-bar.html` flipped from the phone bottom bar to the desktop rail. That is
precisely the defect the founder raised on 2026-08-12 ("this does not look like a tab bar"), and it
would come back on every stand page that shows a shell, an app bar or a tab bar in two forms. **The
container number is also the more honest one:** 760 is the width at which the content has no room
left, and when a scrollbar is taking 15px the content really does have 15px less.

**So the code stayed and the documents changed, because the code was the one that was right.**
Three places claimed the shell runs on `@media` "because the shell is the viewport", and it never
did: `design/system/CLAUDE.md` rule 8, `DESIGN.md`, and the width rule in
`design/kit/docs/architecture.md`. Three stand pages still said a review page gives a screen 250px
less than the browser, which stopped being true when the reviewer's dock was deleted on 2026-08-12.
All six are corrected.

**Two consequences are now rules rather than folklore.** A point is a page container's width and
not a window's, and it is registered as such in `tokens.css`. And **nothing between `body` and
`.app` may take horizontal padding**: the reviewer's dock took 220px of it until 2026-08-12 and
every coloured screen between an 840 and a 980 window rendered its MOBILE form inside a desktop
one. The stand re-points the query at `.kit-stage` on purpose, which is the same mechanism used
deliberately, and it is why one page can show two forms of one component.

**And the instrument grew the pass it was missing.** The width sweep injects
`scrollbar-width: none` so the container really is the width it claims, and that injection is what
hid the 15px for the whole stage. It stays, and `width10-harness.html` now runs a second pass at
both points with the scrollbar left alone, reporting the WINDOW. Re-run of 2026-08-13: 1600
measurements, no violations, worst measure 60.7ch unchanged; tablet at window 775 and desktop at
900 on Home, Alerts, Settings and Subscription Detail alike. Third blind spot of this instrument,
after the pane that scrolls inside a clean document and the cache that serves an old stylesheet.

---

## 2026-08-13 - Two width points, the shell keeps its rail, and no split view

**What we did.** Named the responsiveness the product has had since stage 04 and moved it into the
system. **Two points for the whole product, both in `rem`, both in `tokens.css`:** `--bp-tablet`
47.5rem (760px), where the shell becomes a two-track grid with the tab bar as a 220px rail, and
`--bp-desktop` 56.25rem (900px), where the page measure comes off and the content stops being a
column. Three container tokens (`--container-page`, `--container-column`, `--container-text` at
52ch) and two grid tokens (`--grid-gap`, `--grid-col-min`). **The column count is deliberately not
a token:** it is computed from a floor, except in the two places where the count is content.

**Why exactly this, and why `rem`.** A point goes where the CONTENT breaks, never where a device
is: 768 and 1024 are last year's hardware and this year's guess, and the content is neither. `rem`
because a point must react to the reader's font size as well as to the window: at a 24px root a
"desktop" width holds a phone's worth of words in a line and the narrow form is the correct one
there. And a query cannot read a variable, so the token is a REGISTER and the literal in the query
is its application: from that limitation the stage made its main instrument, and every width
literal in every query must now be one of three registered values.

**The shell: form B, the rail, confirmed rather than re-decided.** Four top-level destinations, no
permanently visible second level, no screen taking the side space for new behaviour. Form A (the
items in the app bar) would have put four destinations into a bar that already carries the brand
and the account, and the rail was already built and already accepted at stage 08. Exactly one
carrier of top-level navigation at any width, verified at 50 widths and in the markup.

**The third number was removed rather than blessed.** The groups column set switched from two
columns to three at 1340, which was a third point nobody had decided. Measuring it settled it: at a
900 container a group rendered 269px, 31px under the 300px floor that same file declares, and at
1335 a column was 486px one pixel before snapping back to 310. The set now takes `columns: 300px`
and counts its own columns, capped at three. **1340 is gone from the product.**

**What we rejected.** **Split view**, which meets its mechanical threshold twice (Home to detail in
flow C, Alerts to detail in flow D). Three recorded sources argue against it: barrier P4 in the
as-is journey ("too many numbers and graphs"), principles 1 and 2, and D1, the gradual reveal that
a permanently open second pane cancels. The job it would close is already closed by the detail
screen's own two columns. Also rejected, each with its ground: a sortable table of the list (the
audience line is "not budget optimizers or spreadsheet fans"), bulk cancel (width is not an
argument for a new job), a permanent second panel (D1 again, and the left side is already spent),
and a hover-revealed row action (a wide viewport is not proof of a pointer).

**What it cost, and what it bought.** The width sweep, 32 pages by 50 widths, found five defects
that no three-width screenshot could see, the worst being a line of prose running 1300px and 150
characters at a 1600 window on all four states of History and Trends, and a 28px-wide band at
900 where the detail screen scrolled sideways inside its own pane. Both halves of the pixel promise
were kept: **zero difference at 360 on all 32 pages, box and ink**, and on the desktop every one of
the 688 changed boxes belongs to a named row.

## 2026-08-13 - Three patterns, four candidates, and the threshold is three screens

**What we did.** Lifted three settled compositions out of the components into
`design/system/patterns/`: **the interruption** (a status block, the way out, and whatever the
screen needs between them; 12 screens, 16 grey pages), **the action foot** (a row of actions
closed by the line that says what happens if you take one; 8 screens, 17 pages), and **the list
column** (an intro over a column of grouped rows; 4 screens, 9 pages). Each is assembled from
components already in the system and declares no style of its own. The eight coloured pages that
carry them were moved onto them in the same step, and the move was proved with a DOM fingerprint
rather than an argument: 56 page-viewports, 3998 elements, **0 unexplained differences**, and at
360 no geometry moved at all.

**Why exactly this, and why three and not two.** Two occurrences prove a composition is
*possible*; three prove it has *settled*. The same threshold as "one usage is not yet a role" at
stage 08, for the same reason: a system where every second screen produces a pattern becomes a set
of synonyms, and the cost lands on whoever has to choose between them. The counter runs on
`wireframes/*.html`, where the whole product is, and never on the coloured sample, which is 8
screens of 17: a pattern extracted because it stands on three of eight coloured screens is "almost
everywhere in the sample" wearing the word pattern.

**What we rejected.** **Four compositions that stand on exactly two screens**, kept as markup and
listed as candidates on `design/kit/patterns.html` with what each is waiting for: the detail
column pair (subscription detail and cancel guide, the largest and closest to the line, already
carrying real rules in `app-shell.css` under `.app.detail`), and three smaller ones. A candidate
that never reaches a third screen stays a candidate; it is not a debt and it is not deleted. Also
rejected: an intro over a chart, which happens on **one** screen. One occurrence is a screen, not a
composition, and a file for it would put a stylesheet in the system that no second page will ever
load. And rejected as a category: an intro followed by a category group, which does stand on two
screens but is already *inside* the list column. A pattern inside a pattern is the parent pattern
described twice.

**One consequence recorded rather than hidden.** The interruption's host axis was written from the
three hosts that stood when the file was written, and the first screen built afterwards, on the
same day, produced a fourth: `alerts-error` puts the announcement inside `.rows-col`, a list
column, where the three known hosts held it directly. **It cost no CSS**: a child selector does not
care what the parent is called, and the gap measured 24px with the class and 24px without it at
both viewports. The lesson is about documentation and not about code. An axis read off the corpus
that stands is a description of that corpus, not a limit on it.

---

## 2026-08-13 - No component token level was created, and that is a decision rather than an absence

**What we did.** Nothing. `design/system/tokens.css` still holds exactly two levels, primitive and
semantic, and stage 09 added neither a third level nor a single token.

**Why.** The rule in `design/system/CLAUDE.md` allows a component token "only where a state lands
on no role", and the stage looked for that case twice and did not find it. The patterns needed no
value of their own: what moved into `patterns/` was **ownership of a gap**, not a new number, and
both gaps were already primitives (`--space-24` and `--space-16`). The one candidate that looked
like a component token was `outline-offset: -2px` in two focus rules, and it resolved the other
way: it is `calc(var(--ring) * -1)`, which is the ring's own primitive read backwards, not a new
value. A third level introduced to serve one negative sign would have been the most expensive
line in the system.

**What we rejected, and it is worth the sentence.** A weight token. `range-picker.css` writes
`font-weight: 600` inside a disabled-and-pressed state, which reads like a state written with a
value. It is not: **this system has no weight scale at all**, by the rule that colour goes through a
role and geometry through a primitive and weight is neither. Weight is a literal in all 57
component files, consistently, and tokenising one occurrence would have opened a scale for a
single line. Raised by Codex at the verification pass and dropped there, with this reason.

---

## 2026-08-13 - One roadmap row for the design system, and it opens on the guide

Two rows were folded into one on 2026-08-11: Tokens + Components and Design System both led into
`design/kit/`, and a row whose page is a section of another row's page is a second entrance to one
room. Stage 09 then built `design/kit/why.html`, the guide to the system, which is a page and not
a section, so the merge could have been reopened. It was not, and deliberately: the argument for
one row was never about there being only one page, it was about there being one place. **The row
stays one and now opens on `why.html`,** because the person arriving from the roadmap has not
built the system and needs why it looks like this before they need the component list.
`overview.html`, the account of stage 08, names the row through `NAV_ACTIVE` and renders as its
own sub item carrying its own sections, which is the third legal form in `CLAUDE.md` for a page
outside the registry. Rejected: a second row (it re-opens a decision nothing has changed, and the
sidebar would show one stage twice), and pointing the row at `overview.html` while linking the
guide from inside it (the roadmap would open on an account of the previous stage). The one-row
rationale itself moved here out of `CLAUDE.md` at the same time, where it was costing lines in a
budgeted rules file to record something that had already been decided.

**The last of it left `CLAUDE.md` at the closing ritual of stage 09**, when the row flipped to
`done:true`. What remained there was a four-line footnote naming which two stages shared the row
and which page it opens on: a STATUS, in the file whose own header says status lives in the README
table and in `/_nav.js`. The rule it hung off ("a new page means one row plus `done:true`, never a
hand written roadmap in a page") stands two sentences above it and did not move, and the third
legal form it relied on, a satellite page declaring `NAV_ACTIVE`, is still stated in full. The
four lines bought the rule that replaced them: a number counted off a corpus is live in the same
way a published page is, and growing the corpus means recounting every claim about it in the same
step. Stage 09 paid for that rule twice before writing it.

## 2026-08-13 - The role count was 31 on two documents and 34 in the file, and a count is taken from the file

Found at stage 09 while writing the guide, closed the same day. `tokens.css` declares **34** paired
tokens at the semantic level; `color.html` showed 31 cards and 31 table rows, and `DESIGN.md` said
"31 roles, 31 pairs, none missing" over a table of 29. The missing three, `--control-accent`,
`--bg-chip-accent` and `--text-chip-accent`, were split off from `--bg-action`, `--bg-selected` and
`--text-action` during the component rounds of stage 08 and appeared **nowhere on the stand at
all**: no card, no row, no mention. `--bg-hover` was on the stand and missing from the `DESIGN.md`
table. A fourth number went with them: eleven fills are decorative, not the twelve both documents
claimed. Nothing was broken in the product, all 34 are paired and all 34 clear their threshold, so
this is a documentation defect and not a colour one. **The lesson is in how it survived:** the same
count had already been corrected once, from 25 to 31 on 2026-08-12, and that recount was taken off
the stand rather than off `tokens.css`, so it could only ever find what the stand already showed. A
check that reads the document it is checking is not a check. Fixed by adding the three plates and
their measured rows to `color.html`, the four missing rows to `DESIGN.md`, and the three demo
classes to `_page.css` that the plates read the tokens through.

## 2026-08-12 - The reviewer's panel is an overlay at every width, and the container is the window again

Found while tracing the brand's jump, decided the same day. `design/_screen.css` docked the screen
panel from 840 with `body { padding-left: 220px }`. `base.css` declares the product's container on
`body` and `.stage` declares a nearer one, and a container query reads the CONTENT box, so those
220px did not only move the panel: they told the product it was 220px narrower than the window.

**The shape of it was not "a bit narrow", it was not monotonic.** Walked on Home at fourteen
widths: mobile to 700, desktop at 760 and 800, **back to mobile from 840 to 960**, desktop again
from 980. Between 840 and 980 every coloured screen rendered its mobile layout inside a desktop
window, and at 900 the product measured 680. Both accepted viewports sit either side of that band,
which is why five months of acceptance never saw it.

**Chosen: the panel is an overlay at every width.** It is the only form where the container equals
the window everywhere, so all three of the product's steps fire where they say they do. Measured
after: Home's groups go to two columns at a window of exactly 900 and to three at exactly 1340,
and the detail splits at exactly 900. Under the dock those needed 1120, 1560 and 1120.

Rejected: **moving the dock to 980.** It repairs the 760 boundary and leaves the 900 one broken by
the same 220px. The product has three steps and a fixed dock can only ever be clear of one of
them, so this is not a cheaper version of the fix, it is a third of it.

Rejected: **accepting the band and reviewing outside it.** That turns the acceptance rule into
"both ends of the range, and not in the middle", which is a rule nobody remembers on the day it
matters. The band would have gone on being the place defects hide.

The cost was named before it was taken and it is real: **the screen list is no longer permanently
on screen.** It opens from the toggle, which is the mechanism that has run below 840 since the
chrome was written, and which now carries a label because it stopped being a phone-only
affordance.

**Nothing in `design/kit/` changed.** The stand declares its container on `.kit-stage`, so its own
docked panel never moved a specimen's query. Two reviewer panels now behave differently, and the
difference is exactly the difference between standing on the product's container and not.

Ground, the before-and-after table and the min-height finding underneath it in
`design/kit/docs/tokens-audit.md`.

## 2026-08-12 - The desktop rail is 220px, and the third number closes an eight-pixel argument

Founder, on a coloured screen: "make the side panel narrower, somewhere around 220 pixels." One
declaration moves, `grid-template-columns` in `app-shell.css` at container 760, and it is the only
place in the system that states the rail's width. Everything else is prose that had to follow it.

**Why it was too wide.** The rail holds a 22px mark, a 46px word and four one-word destinations.
At 240 it was mostly air, and on a screen whose whole job is calm, air around the navigation reads
as importance the navigation does not have. This is the same review that put the mark at the head
of that rail, one entry below.

**The floor is 180 and it was probed, not guessed.** What binds the rail is not the navigation,
which is short, but the app bar's widest way out: "Your subscriptions" is 148px of unbreakable ink
on the five History screens, and the bar's own two 16px margins make 180. Driven to seven widths
from 230 down to 170 on all 28 coloured screens: nothing in either chrome changes height until
180, where that label wraps. 220 keeps 40px of slack over the longest string the product has,
which is the room the next label will need.

**What it cost, counted rather than asserted.** 281 elements did not move at all, which is every
element of the ten onboarding screens (they replace the grid with a flex column) plus everything
inside the rail, whose left edge did not change. The rest slid left by the 20px the rail gave back
and the content took it, 20px on a single-column screen and 10px on each column of a detail.
Nothing moved vertically, nothing overflows, and exactly two elements changed height: on
`subscription-detail-unrecognized` the line "All we have is how it appears on your statement"
stopped wrapping, so that block is 21px shorter. The one height change in the product is a line
that stopped wrapping, which is what the width was for.

**It closes an open row rather than adding one.** Step 2 of this stage found the rail at **240 in
the kit and 232 in the grey**, an 8px disagreement that could not be merged quietly, because a
value moves only by its own named decision and never as a side effect of a migration. It was
carried at 240 and flagged for the founder. The founder's answer is a third number, which is the
right shape for the question: neither of the two was chosen by anyone, and 220 was.

Rejected: **232, the grey's own number**, which would have settled the argument by seniority
rather than by looking, and is 12px from the answer the person who owns the product gave when
shown the screen. Rejected: **making it a token.** A width is on neither of the system's two
scales, and `--rail-w` would be a size primitive invented for one usage; the file already carries
that rule for 780, 620, 560, 300 and 320. Rejected: **fitting the 8px grid at 216 or 224.** A
width is not a spacing, the grid does not govern it, and 780 and 620 are not multiples of 8
either.

Ground and the full ledger in `design/kit/docs/tokens-audit.md`, section The brand, correction 3.

## 2026-08-12 - The last letter is petrol, with no condition, and the brand heads the rail

Three corrections on the day the mark shipped, all from the founder looking at a real screen
rather than at a plate. Two were asked for and the third was found while measuring the first.

**The coloured letter loses its three conditions.** `logo-crop.html` made it depend on the word
standing alone, on being above 20px, and on the mark being absent, "because the mark is already
carrying the petrol and two petrol things beside each other is one too many". The product
satisfies none of the three, so the rule shipped for one day as no colour at all, and the coloured
letter would have stayed unbuilt and untested until stage 12.

The concept's reason describes a bar with two saturated **objects** in it. What is on the screen
is a 22px mark and one 16px glyph 46px to its right, and the pair reads as one lockup rather than
as two claims. The rule is now: **the last letter is petrol.** No condition, at any size, with or
without the mark. Rejected: keeping the conditional rule and building none of it, which is how a
brand rule becomes a paragraph nobody has ever seen rendered.

The sentence this overrules is **left standing** on the concept page. That page is the record of
how the mark was found, not a live specification, and editing the record to match the outcome
would destroy the only evidence that a decision was taken at all.

**The brand heads the rail.** Founder: "the logo jumps down, and it should not, here or on any
other page." Measured at 1280 before anything was touched: the lockup sat 8px from the top of the
bar on the ten screens with no leading control and **56px** on the eighteen carrying a back or a
close. Walking from the list into a subscription moved the mark down 48px and walking back moved
it up again. An identity whose vertical position depends on which screen you are on is not an
identity.

The same jump had a twin on mobile that the complaint did not name: the bar's three links each
stand on the 44px tap floor and the brand stood on nothing, so a bar holding only the brand was
41px tall against 61px everywhere else, on four screens. The brand now takes the same floor as
every other slot, and the mark sits **19px from the top of the bar on all 28 screens, at both
viewports, in both themes**.

Fixed with `order: -1` on the lockup inside the 760 container block: same DOM, two arrangements,
one per form factor. The row keeps the way out at the leading edge, which is right on a phone; the
rail puts the brand at the head and the way out on the first line under it, which is what a rail
is. Rejected: reordering the markup, which would have moved the way out off the leading edge at
360 and traded a desktop defect for a mobile one.

## 2026-08-12 - The identity is Crop, and the wordmark reverses its tracking

Thirteen logo directions were built as live HTML at real sizes on `design/concept/logo.html`. The
founder chose **Crop**, taken to depth on `design/concept/logo-crop.html`, and asked for it in the
product the same day.

**What makes it the choice, in one sentence:** it is not a picture of a `d`. One letterform is
drawn on a 100 unit square, deliberately larger than any frame that will ever hold it, and a
window is cut out of it. The letter never changes size relative to itself; the window does. So a
new surface gets a new window rather than a new drawing, and the round avatar is the proof: nothing
was redrawn, the window simply stopped having corners.

**Rejected: a wordmark and no mark at all,** which is what shipped until this day and is direction
"No mark" on the same page. It is honest, it is cheap, and it has no answer to the favicon. A
16px tab, a home screen icon and a share card are three places where a word cannot go, and the
repository had no icon in it at all.

**Rejected: crops B and C in the system now.** They are locked and they are not built, because the
hosts that carry them (the share card's band, a launch screen, the avatar) are still grey or do
not exist. A variant with no host is an invention with a nice reason attached, and this project
already has a rule against those.

**A value changed with it, and the reason is a reversal rather than a correction.** The wordmark
was 700 at +0.02em, and both `app-bar.css` and `DESIGN.md` argued for it out loud: at 16px in a
bar the letters need air, and a wordmark set solid reads as a word rather than as a mark. Both were
describing a product with **no mark in it**, where the word carried the identity alone. It is now
800 at -0.02em with the `dd` pair a further -0.09em. The premise moved; the value followed.
`DESIGN.md` was rewritten the same day rather than left to contradict the code.

**What it cost the product, measured:** 3774 elements matched across 28 coloured screens at two
viewports, 168 added, 0 dropped, and **69 moved**. All 69 are the brand's own slot and the two plan
chips whose `margin-left: auto` absorbs its new width. The ledger is in
`design/kit/docs/tokens-audit.md` under the fifth named source.

## 2026-08-12 - The brand is petrol's fourth place, and it is an exception, not a fourth job

D-Concept spends petrol on the primary action, the current selection and the trust line, and says
"and no more". The mark is petrol and it stands on every screen, so the locked decision had to
move or the mark could not ship.

**It moves as a named exception with a boundary, not as a fourth job.** The brand is an identity
and never an accent: it lives in the chrome (the app bar, the tab, a home screen) and it **never
appears inside a screen's content**. The three jobs are unchanged, and the count of petrol things
inside any screen's content is still what it was.

**Why this is not a loophole.** The three jobs answer the question "what should I do, where am I,
can I trust this". The brand answers "whose product is this", which is not a question the content
of a screen ever asks. If the mark ever appears beside a number, that is the rule being broken and
not the exception being used.

**The consequence the concept drew from this did not survive the day.** It read: beside the mark
the wordmark is all ink, because the mark carries the petrol and two petrol things beside each
other is one too many. Overruled the same afternoon, in the entry above, after the founder looked
at the pair on a real screen. The exception itself is unchanged and so is its boundary: what moved
is how many petrol things the chrome may hold, not whether the content may hold any.

`logo-crop.html` had already written this exception as a tag on its rules plate. `CLAUDE.md` had
not, and a locked decision that only one file knows about is not locked. Both now carry it.

## 2026-08-11 - Voice Round 4: a copy defect is fixed in the grey, never in the colour

UI + Visual compared all 28 coloured pages against `voice/docs/microcopy.md` and found thirteen
divergences. **None was a colouring error:** the visible text of every coloured page is
character-identical to its grey original, so each one was a gap between the frozen grey and the
line inventory, opened before colour existed. They were carried out of stage 07 unfixed on
purpose, and closed on the founder's call before stage 08.

**The mechanism is the decision.** Voice is the stage that owns product copy, so Voice reopened:
the line inventory changed, the grey wireframe changed, and the coloured copy followed byte for
byte. Fixing them in colour would have made the coloured page say something the grey does not,
which is the exact grey-to-colour desync stage 07 exists to test for, thirteen times over.

**The count came back fourteen.** The worst finding, the project's own open-question notation
printed as product copy ("Not on sale yet. `[? D4, the lifetime price, $99 to $139, is still
being decided]`"), was on the welcome landing as well as on the paywall. The landing is not in the
coloured sample, so the stage-07 pass could not have seen it. It was found by grepping the
notation across all 55 grey pages instead of fixing only the screen that was reported. Both now
read "Not on sale yet. We are still working out the price." The question itself is not closed and
did not move: it lives in node 5.13's Status, where a question belongs.

**Two of the fourteen were not screen edits at all, and that is the point of verifying first:**

- On the home-empty doors the screen was right and the document was wrong. The inventory still
  carried "we can never move your money", the exact form D7 retired. Shipping `microcopy.md` in
  that state would have shipped a banned variant.
- On the full-screen Pro gate, `voice.md` said "Maybe later" is **always** present. The rule was
  narrowed rather than the screen changed: the appbar chevron is that gate's exit, and a second
  control one line under it going to the same place is chrome, not kindness. What "always"
  protects is that no gate is a dead end, and a chevron protects that too.

**Rejected:** deferring all of it to Handoff. The arithmetic decides it. Fixing a line today costs
two places, the grey and its coloured copy. After stage 12 colours the remaining ten screens it
costs the same two places for 55 pages instead of 28, and a line inventory that ships out of step
with the product it inventories is wrong for whoever builds from it.

**One thing this round did not touch:** the eleven ARIA and form-semantics findings from the same
pass. Those are markup, not copy, and they belong to the stage that owns structure.

The full was-to-became is Round 4 of the rewrite log in `voice/docs/microcopy.md`. The published
page was rebuilt with it, and its line inventory is now regenerated from the file rather than
hand-maintained: the two had already drifted apart on the upgrade screen before this round.

---

## 2026-08-11 - The control edge: 3:1 on controls, the hairline everywhere else

Founder's call on the one finding stage 07 carried without fixing. WCAG 1.4.11 asks 3:1 of the
visual information that identifies a user interface component. A control in this system is
identified by its edge, because its fill is paper and so is the card behind it, and `--line`
measures **1.23:1 on paper**. Every field, select, secondary button, preset tile, door and segment
missed the requirement.

**The decision is the scope, not the number.** The darker edge goes on controls only:
`.btn` in its outline form, `.field input`, `.field select`, `.tile`, `.door`, `.range button`,
`.cand .cut`. Cards, panels, plan tiles, list containers, the tab bar seam and every divider keep
the hairline. Two new values, and **no existing value moved**:

- `--line-control: #7b8d91` - the lightest value on the `--line-strong` hue that clears 3:1 on all
  three grounds a control can sit on (paper 3.46, canvas 3.10, panel 3.22). As dark as the norm
  requires and not a shade darker.
- `--line-control-hover: #5a686c` - equal to `--soft` today and a different role, the way
  `--on-accent` is equal to `--frame`. It exists because the old hover value `--line-strong`
  (#cdd7d9) is **lighter** than the new resting edge, so keeping it would have made the boundary
  weaker under the pointer, which is the opposite of what a hover is for.

**Rejected: raising `--line` itself to 3:1.** One line, satisfies any checker, and puts a hard
edge on every card, panel, list and callout in the product. The language was chosen for a person
who avoids finance apps, and a screen of boxed compartments is the thing it was chosen against.
The norm asks for the edge of a control to be findable, not for every surface to be outlined.

**Rejected: leaving it as a recorded debt.** It was already recorded once, at step 6, and a debt
that survives a stage boundary is a debt that ships. The cost of fixing it is two variables and
one comment; the cost of shipping it is an accessibility claim the product cannot make.

`.plan-opt` is the one case worth naming, because it looks like a control and is not: it is a
`div` holding a button, so the button takes the edge and the tile keeps the hairline. It is also
what keeps `--line-strong` alive, as the only consumer left.

**Still carried:** the checkbox inside `.switch` is a native control at 20px against the 24px WCAG
2.5.8 asks. Its wrapping label is the real pointer target at 44px or more, and its edge is drawn
by the browser rather than by our stylesheet.

---

## 2026-08-11 - A seventh screen, added as the saturation test, and what it found at the wide end

Founder's call after the stage closed: colour the account screen before answering the open
questions. **Settings / Profile (node 6.16) plus node 6.16.1, the account-less steady state of the
manual path.** The sample is seven screens and twenty-eight pages.

**Why it was worth building a screen that was not in the sample.** The pack asks for a saturation
signal to be said out loud: the point at which a new screen stops adding to the kit is the point
at which the rest of the product can be assembled in one pass at stage 12. Six screens never
produced that signal cleanly, because each of the six had been chosen for what it would add.
Settings was chosen for nothing, and **it added nothing**: not a class, not a value, not a plate
in the showcase. 21 atoms, 28 molecules, 19 organisms, 68 components, unchanged.

That result is not luck, it is the step-2 decision paying out. The inventory was read from all 55
grey pages rather than from the six that were going to be coloured, so `.navrows`, `.navrow`,
`.switch` and `.promises` were counted even though no screen in the sample carried them. A kit
sized to the sample would have met this screen with four missing components.

**What it cost, and why that is the real reason to have built it.** Assembling a column screen at
desktop width exposed a defect none of the six could show. Three reading measures (`.form-col`
560, `.locked` 560, `.rows-col` 620) were written at specificity 0-2-0 and tie with
`.app > .screen > * { max-width: none }` in the 900 container block, written for Home's own
layout. Source order decides, the later block wins, and past a 900px container the measures stop
existing: the form rendered at 588, the Pro gate at 748, the account column at 733. **Two of those
screens had already been walked and accepted at the step-5 gate.**

Fixed as a binding rather than a value: `.app > .screen > .form-col` at 0-3-0 cannot be outranked
by a blanket reset regardless of order, and every one of these classes is a direct child of
`.screen` on every page of both folders. No number moved.

**Rejected:** re-declaring the three measures inside the 900 block, which fixes the symptom and
leaves the next blanket reset free to unbind them again. **Rejected:** rendering the plan row on
Settings as the petrol chip GC7 wears in the app header, because node 6.16 says this screen states
the plan and never sells it, and petrol is spent on three jobs already. It stays `.subtotal`, as
the grey wrote it.

**Carried, not fixed:** the checkbox inside `.switch` is 20px, under the 24px WCAG 2.5.8 asks. The
label wraps the checkbox and measures 44px or more, so the pointer target a person actually hits
is the row; the raw control is not the target. Recorded rather than silently resized, because
changing it is a kit value and this stage changes values only by a named decision.

**The lesson, and it is about acceptance rather than CSS.** A screen is accepted at every width or
it is not accepted. The narrow end gets walked because breakage there is loud. This defect lived
at the wide end, looked entirely calm, and survived a triple critique and a four-instrument audit
because at 360 and at 760 the rule still held.

---

## 2026-08-11 - The sample is six screens, and the sixth was chosen by the strategy check

UI + Visual colours a sample, not the product. The rollout is stage 12, on purpose: a screen is
built once, when everything it needs already exists, and building it twice is the cost of
building it early.

**The five chosen at step 5, and the coverage each one bought.** The stated criterion was not
"representative" but "how much of the inventory do these together carry", reported by level so
that a sample with no organisms could not hide:

| Screen | Why it is in | What it added to the kit |
|---|---|---|
| Home / Subscription List | The etalon, the densest screen in the product, and the only list. Four states | The base of two organisms, the destination icons, the secondary actions |
| Subscription Detail | The third shell form, `.app.detail`, two columns from container 900. Three states including the unmatched merchant | Nothing. The sample's first sign of saturation |
| Add a Subscription | The form screen. The interaction primitives enter here or nowhere | `fieldset` |
| Upgrade to Pro | The one screen that asks for money, so the one where the One Voice Rule is easiest to break | `.pitch`, and a named decision on plan-row width |
| History and Trends | The paywall at depth (D3), and the locked state is a whole organism the free tier sees | `.bycat`, and the entire `.locked` organism |

**The sixth, added at step 6.** The stage owes a strategy check on the whole sample together:
which screen tests the riskiest assumption, and by which element a person actually touches. The
answer was none of them. H0 says an avoidant person who sees their whole recurring spend in one
calm frame completes the reveal and reports relief rather than stress, and it is tested on node
1.5, the Guided Reveal, where the gradual reveal D1 locked actually happens. Home carries the
aftermath of the reveal, not the reveal. **Guided Reveal is the sixth screen**, with its empty
state, and the sample is twenty-six pages: every state of all six.

It also pays for its place by the step-5 criterion, which is why it is an addition rather than an
exception: it brings three components (`.next`, `.rgroup`, `.rstep`) and forces two merges that
were owed anyway. **Rejected:** recording "we are not doing it" and leaving H0 grey until stage
12, on the ground that the prototype exists to test H0 and a grey prototype tests nothing about
whether the looking feels calm. **Rejected:** colouring `guided-reveal.html` without its empty
state, on the ground that a screen enters the sample with its states or it has not entered.

**The consequence for the criterion itself, worth carrying forward.** Component coverage is a
good criterion and it is blind to strategy: it picks the screens that stress the system, not the
screen the product is a bet on. Both questions have to be asked, and the second one is cheap to
ask first.

---

## 2026-08-10 - Tendd carries no photography, and the merchant mark is a full colour logo

Step 4 of UI + Visual was rewritten after its first attempt was rejected on screen.

**No photography anywhere, landing included.** The first version of the step specified six
generated editorial still lifes with a shared style prefix. The first image came back exactly as
briefed and was indistinguishable from stock: it could have belonged to a candle brand or a
meditation app, and nothing in it said "see what you are paying for". Underneath the taste
failure was a structural one: `wireframes/index.html` has no image slot at all, so six
destinations were invented for pictures the structure never asked for. **Rejected:** one
atmospheric photo at the top, on the ground that every one of the ten landing blocks already has
a better answer than a photograph, and the hero has the best one, which is the product itself.
The hero is a render of the real coloured Home screen, captured at step 5 and true by
construction. **Consequence:** empty states get a sentence and a button, never an illustration.

**The merchant mark is the real full colour logo** (founder). This is a deliberate hole in the
palette rule, and the ground is that a merchant mark is data rather than chrome: it is the user's
own Netflix, rendered as Netflix. Rocket Money and every competitor do the same, and
recognition in a list of fourteen rows is worth more than palette purity. The One Voice Rule
survives because petrol stays the only colour **Tendd** uses to speak. **Rejected:** the monogram
disc, which scales to all 400+ presets for free and keeps the list quiet, but makes a person hunt
for a subscription she would otherwise spot instantly; **rejected:** desaturated logos, which
lose the recognition that was the whole reason to use logos and still cost the same 14 files.

Four containment rules were written with it, in `design/visuals/README.md`: the mark lives in a
fixed 36px square, it is the only saturated thing in its row, petrol never sits inside the square,
and no brand colour appears anywhere outside it. Without those, 14 brand colours turn the calm
list loud and the product argues against its own first principle.

The monogram survives as the **fallback**, not as the style: 14 files cannot cover 400+ presets
or whatever a bank returns, so the `.logo` atom carries three states (image, monogram, skeleton).

## 2026-08-10 - The product design system is a root DESIGN.md, and the canvas was never white

Two things settled at the opening of UI + Visual, both of them corrections to prose rather than
to screens.

**The system lives at the repository root.** `DESIGN-artifacts.md` carried a July decision saying
the product system would live at `design/docs/design.md` and that there was "intentionally no root
`DESIGN.md`". The stage pack now says the opposite and forbids a `design/docs/` folder outright,
and stage 08 reads the root file. Put to the founder, who moved it. The July path was never
created, so nothing was lost, and `DESIGN-artifacts.md` stays what it always was: the draft the
generated system reads, not a second system. **Rejected:** keeping two design docs, which is how a
project ends up with two sources for one value.

**The canvas is off-white, and the cards are white.** `DESIGN-artifacts.md` recorded "bg / Paper
`#ffffff`" and `CLAUDE.md`'s D-Concept line said "white canvas". The built screens have
`--page: #eef3f4` under `--frame: #ffffff`, and **that is what attribute A1 asked for in the
first place**: its technique reads "off-white canvas, white cards". So the mockup was right and
two prose records had drifted from the attribute they were supposed to serve. Both corrected. The
same pass moved the recorded total from 44px to the 46px the screens ship.

The divergence check is written out as a table at the end of `design/concept/docs/concept.md`,
attribute by attribute with its source row in `personas.md`. Three rows, all three resolved in
favour of the built screens, no attribute dropped and no screen changed.

## 2026-08-10 - Four values get names, and ten stay literals until stage 08

The extract at UI + Visual returned fourteen proposed variables. The rule it runs under is that
extraction pulls **classes, not values**: a new variable leaves the agent as a list and enters the
system only by a named decision, and an existing value cannot be changed at all.

**Four adopted, and none of them is a new value.** `--radius-xs` (6px), `--radius-wash` (12px),
`--line-strong` (#cdd7d9) and `--on-accent` (#ffffff) are all values `kit.css` **already wrote as
literals**, two of them in more than one place, and two of them already named in prose by
`DESIGN.md` (`rounded.wash`, and the #cdd7d9 hover border). Naming them is the whole change; not
one pixel moves.

`--on-accent` is the one worth stating a reason for, because it looks redundant. It equals
`--frame` today and it is **a different role**: `--frame` is the card surface, `--on-accent` is
text on the accent. One token was carrying both, and they part company the moment stage 08 lays a
dark theme over the same system.

**Ten deferred, deliberately.** The rail width, the four tap targets, the three measures, the
block gap and the two z-indexes are real repetitions, but they are the primitive-against-semantic
split that stage 08 exists to make. Naming them now would guess at the layer they belong to, and
the kit is flat on purpose: semantic roles are only visible after the components have stood on
real screens.

**One is not a naming question at all and stays open.** The desktop rail is **240px in the kit and
232px in the grey**. That is an 8px value change, and by the migration rule a value moves only by
its own named decision, never as a side effect of an extract. It is carried at 240 (the value the
migrated file and `shell.html` already agree on) and flagged for the founder rather than merged
quietly. **CLOSED 2026-08-12 at 220**, by the founder, and by neither of the two numbers: see the
entry at the top of this file.

## 2026-08-10 - "Best value" stays, and pricing becomes three columns on both screens

The critique found a straight contradiction: `upgrade.html` renders a **Best value** badge, and
node 5.13 lists a promotional badge among the things named and not added. Put to the founder,
who kept the badge and asked for the same treatment on the landing.

**Decided: the badge stays, and the refusal is amended in its owner rather than the screen being
stripped.** The ground is that node 5.13's list bundled two things that are not alike. "Most
people choose this" is a claim about other people that the reader cannot check, and it works by
making them feel odd; **"Best value" is arithmetic the card already shows on the line above it**,
$69 against twelve times $7.99. A badge that restates a number already on screen is a label, not
pressure. Everything else in that list stays refused: no countdown, no expiring offer, no
discount that appears when you try to leave, no pre-selected expensive plan, no undismissable
gate.

**And the pricing becomes three tall columns, the same on both screens.** Block 8 of node 1.1 was
one honest line and is now that line plus three columns: yearly with the badge, monthly, and
**lifetime**, which had been a footnote under the two cards on node 5.13 since it was drawn. The
third column is not invented: `5-13-upgrade.md` block 6 has always named the lifetime option, and
its price is the open `[?]` of D4 ($99 to $139). It is drawn with that marker on it rather than
with a number, because printing a price would settle a decision the founder has not made.

**Still not a comparison table**, which is what block 8 was written against, and the difference is
the axis. A comparison table compares **plans**, so it has to name what the cheaper one lacks, and
under D-Free the free one lacks nothing a person can see. These three are **one plan with three
ways to pay**, so no column is the lesser one and nothing has to be invented to fill a cell.

**One rule, two hosts.** The card is not copied into an `lp-` twin: `_wf.css` now carries
`.app .plan-opt, .landing .plan-opt` as a single rule, because a second copy of a component is
exactly the drift that file exists to prevent, and Tokens and Components reads these screens to
derive the kit.

## 2026-08-10 - The auth model: no account on the manual path, an email on the bank path

The last structural hole in the map. `sitemap.md` carried "auth model for try-with-no-account
vs returning sign in" in its open items, GC1 had a `no-account-yet` variant marked `[?]`,
Welcome had a "Sign in" link and Settings had "sign out", and no screen anywhere created an
account. It stopped being deferrable the day the bank connection was written down, because an
`access_token` belongs to somebody.

**Decided, and the two doors get two different answers.**

**The manual path runs with no account at all.** A person picks node 1.4, types three
subscriptions, sees a real list, and has given us nothing but the three lines they typed. That
is the whole of Ravi's path and it costs him no identity. GC1 runs in its `no-account-yet`
variant and the You tab offers "Create an account to keep your list" (new state 6.16.1), which
is the sentence `navigation.md` already wrote before anyone decided what was behind it.

**The bank path asks for an email on node 1.3, in the same breath as the bank ask, and says
why.** Not as a growth gate: as the same trust argument the rest of that screen already makes.
Bank data needs somewhere that is yours, that you can sign back into and that you can order
deleted. The account is created there, passwordless and unverified, and **Link opens
immediately**: no verification wall inside the activation flow. The verification email doubles
as the returning sign-in link, so one mechanism does both jobs and there is never a password.

**Returning people get node 1.6 Sign In**, one field and a link by email, reached from the
"Sign in" that already exists in the Welcome header and from an expired session. **A manual
list made with no account merges into the account** the moment one is created.

**Rejected: an account before everything.** It is the simplest thing to build and the worst
thing to do to Emma, who is a self-described avoider being asked for a form before she has been
shown a single reason to care. H0 is the only assumption the MVP exists to test, and a wall in
front of the reveal makes the test measure the wall.

**Rejected: staying anonymous through the bank connection too.** It converts best and it is the
one we cannot defend: a live Plaid Item tied to a cookie is a bank connection nobody can
reclaim when the cookie is lost, and one we cannot honour a deletion request against. Node 6.15
promises deletion in plain words, and an orphaned Item makes that promise unkeepable.

**No password, ever.** Node 6.16 holds an email and a currency and nothing else, and a password
is one more thing to protect, to lose and to explain.

## 2026-08-10 - A free trial has no bank signal, so the trial date is a manual field

`home.html`, `index.html` and `alerts.html` all show "Peloton App, trial ends in 17 days,
Aug 18", and Settings sells "a free trial is ending soon" as part of Pro. **A trial that has
not charged produces no transaction.** No charge, no stream, no predicted date. Plaid cannot
know that date and neither can any other aggregator.

**Decided: the trial end date is something the person tells us,** through the "Next payment
date" field node 1.4 already has, and **Peloton App is named as one of the three manual
entries** in the canonical set. That makes every screen currently showing that row honest at no
cost, because no page ever claimed Peloton came from Chase.

**What the bank side can honestly do instead** is the opposite end of the same event: a brand
new stream whose first full charge has just landed is "you are now paying for this", and that
is detectable, useful, and arguably the more valuable alert of the two. The pre-trial warning
stays scoped to what the person entered.

**Rejected: inferring trials from $0.00 or $1.00 card authorisations.** They are inconsistent
across issuers and frequently never reach the transactions feed at all, and a warning that
fires for some people and not others is worse than one that is honestly scoped.

## 2026-08-10 - A manual entry and a detected stream are one subscription, not two

Falls straight out of the two decisions above. Peloton is typed by hand today; the day the
trial converts, Chase reports a real charge and the detector opens a stream for it. Nothing in
the map said what happens then, and the default behaviour of a system with two sources is to
show fourteen subscriptions as fifteen.

**Decided: they merge.** A new stream that matches a manual row on merchant, amount within
tolerance and cycle becomes the same subscription. The bank becomes the source of truth for the
figures, and what the person contributed survives: the name they gave it, the category they
picked, the date they entered. They are told once, quietly, on the row itself.

The ground is that the count is the product. "You're paying for 14 subscriptions" is the
biggest sentence on Home and the thing the whole reveal builds to, and a product that
double-counts the moment its two sources agree has broken the only number it sells.

## 2026-08-10 - Tendd gets a cancel door of its own

Settings block 3 sends "manage plan" into node 5.13, and node 5.13 is the screen that sells
Pro. It has three states, none of them for a person who already has it, so a subscriber tapping
"manage plan" arrives at an advertisement for what they already bought. There is no path
anywhere in the map to cancel Pro.

**Decided: node 5.13 gains state 5.13.3, the plan you are on.** What is included, when it
renews and for how much, and a plain "Cancel Pro" that does not argue, does not offer a
discount and does not ask why. It runs to the end of the paid period.

The ground is that this product's entire promise is that cancelling should be easy, and the one
subscription we control cannot be the hard one. California's auto-renewal law expects
cancellation to be no harder than signing up, so the law and the thesis agree here. **Not
reused: node 4.10, the cancel-win moment.** Celebrating that someone left us would be a joke at
their expense.

## 2026-08-10 - Two classes of telemetry, and only one of them is a toggle

Node 6.15 block 4 offers "use my activity to improve Tendd, off by default". Read literally it
switches off all measurement, and `cjm-to-be.md` says H0 is measured as the share of people who
see three or more subscriptions in their first session, target 35 to 40 percent. The one number
the MVP exists to produce would be collected from a minority.

**Decided: name the two classes separately, in plain words, on the screen.** Product
measurement is a count of anonymous events, no profile, never tied to a bank, an amount or a
merchant, and it is what tells us whether the reveal works at all. It is stated rather than
toggled, because a product that cannot tell whether it helped anybody has no way to get better
and no honest reason to exist. Everything past that (person-level behaviour, session replay,
anything that builds a picture of an individual) stays behind the toggle, off by default, where
it already is.

Stating it is the point. The failure mode this avoids is not "we measured", it is "we measured
and the screen implied we did not". US-first posture; whether the counting itself needs a
consent banner is part of the EU review that D5 defers, and `system.md` already carries that
`[?]`.

## 2026-08-10 - Alerts arrive by email, and push is deferred

Node 3.8 described its entry as "through GC2 or a push notification", Settings block 4 names a
weekly email digest, and nothing said how an alert itself reaches a person who is not in the
app. J4 is "never be surprised by a price change or a failed payment", and a message that only
exists inside the app cannot keep that promise.

**Decided: email carries both the alerts and the digest at MVP, and web push is deferred.** The
ground is a constraint, not a preference: Tendd is a mobile-first responsive web app and a
native app is out of scope, and on iOS web push only works for a site the person has added to
their home screen. Push would therefore reach a minority of exactly the audience this product
is for, while looking on paper like it reached everyone. Inside the app the quiet dot on Alerts
is unchanged.

**Deferred rather than rejected:** push becomes worth building the day an installed experience
or a native app is in scope, and it changes no screen when it arrives, only the channel row.

## 2026-08-10 - Three hand-maintained datasets, named so they can be costed

Not a design decision, a liability written down. Three things in this product are content, not
code, and none of them was visible anywhere in the design: the merchant dictionary that turns
`NETFLIX.COM 866-579-7172` into Netflix and puts it in Streaming, the 400+ presets with typical
prices behind node 1.4, and the cancel guides behind node 4.9.

All three rot. The guides rot fastest and most visibly, which is why node 4.9 block 10 already
shows when the steps were last checked, and why its coverage at launch is still an open `[?]`.
The dictionary rots quietly and shows up as an unmatched charge, which node 2.7.1 already
handles gracefully. Recorded together in `bank-connection.md` section 13 with what each one
feeds and what breaks when it is stale, so the operating cost of the product is on paper before
it is a surprise.

## 2026-08-10 - The recurring model is ours, Plaid Recurring is the US adapter

The question was where subscription detection lives. Plaid's Recurring Transactions product
returns ready-made streams, and the temptation was to render them onto the screen directly.

Resolved: streams are normalized into our own subscription rows, and the two loudest states in
the product are computed by us. The ground is that half the screens have no field behind them
in any bank API. Nothing reports "Netflix went up by $2.50" (we compare the last amount against
the stream's prior amounts) and nothing at all reports a failed outgoing card charge (we infer
it from an expected charge that did not arrive). Categories are ours too: Streaming, Software,
Music, Fitness and News are not Plaid's taxonomy. Once those three are ours, owning the row is
cheaper than owning a translation layer over someone else's row.

Rejected: reading Plaid Recurring straight onto the screen. It is US and Canada only, it prices
per connected Item, and it still leaves the price-change and payment-failed states without a
source, so it buys less than it looks like it buys. Rejected: our own detection engine over raw
transactions from day one. Periodicity detection is a product of its own with its own accuracy
problem, and it delays an MVP whose entire purpose is to test H0. The hybrid takes Plaid's
detection where it is free and keeps the seam where EU will need one: GoCardless and TrueLayer
return raw transactions with no recurring product, so the EU adapter plugs into our rows rather
than forcing a second product.

Consequence for D-Free: Plaid bills per Item and Recurring is a paid add-on, against a promise
of unlimited connections. The lever is refresh cadence, never a cap, because a cap on
connections is a visibility cap and D-Free already rejected it on that ground.

Full field map, webhooks and build blockers: `bank-connection.md`.

## 2026-08-10 - Link opens directly, and Tendd shows no institution search

Node 1.3 carried an open `[?]`: whether a bank search appears on our side, or whether the
primary action opens Plaid Link directly. Resolved: directly. Link owns institution search, and
a search on our side means maintaining an institution list, keeping it in step with Plaid's
coverage, and building a screen that Link already builds better. It is the same boundary rule
that kept credential entry and MFA off our side, applied one screen earlier. Node 6.14 already
names "a bank search and picker" among the things deliberately not added, so this makes the two
nodes agree.

## 2026-08-10 - Why Home is the etalon and Flow A is the first flow, written down late

Both were chosen at the first build in July 2026 and both held through the August rebuild, but
the ground was never recorded, so the next stage would have had to take them on trust or
re-derive them. Recorded now, unchanged.

**Home / Subscription List (node 2.6) is the etalon** because it is the working horse with the
most reuse, and that is countable rather than felt: five of the seven global elements stand on
it at once (GC1 the header, GC2 the tab bar, GC3 the summary strip, GC4 the row, GC6 the trust
line). The two that are missing are missing on purpose: GC5 belongs to Alerts, and GC7 is
barred from the calm view by D3. It is also where every flow ends, it has four states, and it
carries the benchmark dimension on three named elements (`wireframes/docs/screens.md`, the
paragraph under the etalon line). An etalon is a screen later screens are measured against, so
the one that already contains most of the product is worth more than the one a person sees
first. **Rejected:** node 1.1 Welcome, which is chronologically first and structurally poor. It
is a marketing landing, it shares almost nothing with the app shell, and building it first
would have set the bar on a page that no other screen inherits from.

**Flow A (Emma, the bank path) is the first flow** because it is J-MAIN end to end, and because
H0, the riskiest assumption of the whole product, runs down it: that an avoider actually looks
and feels calmer. The flow that carries the assumption the MVP exists to test is the flow that
has to exist first. **Rejected:** Flow B (Ravi, the manual path), which is the equal second
door under D2 and reuses three of Flow A's four screens, so building it first would have
produced fewer new screens for the same work.

## 2026-08-10 - The plan chip stays, and GC1 says which badge it meant

The critique put two written absolutes against each other. The built screens carry a `Free` or
`Pro` chip in the app header on nine pages (node 5.12 with its states, node 5.12.4, node 5.13
with its states), and `ia/docs/nodes/globals.md` said GC1 never carries "a count or a badge of
any kind".

**Decided: the chip stays, and the rule is amended in its owner rather than the screens being
stripped.** Three grounds. The first is that the product already draws this distinction in two
other places and only the IA line missed it: `voice/docs/microcopy.md` owns those three lines
as `status`, and it records that a Pro badge was *retired* from Home and Subscription Detail
because node 2.6 forbids an upsell on the calm view. The distinction is not new, it is a line
that was already being applied everywhere except in the file that states it. The second is that
node 5.12.4 exists only because the canonical person is on Free, and a gate screen that cannot
say which side of the gate you are on has lost its subject. The third is what "never a badge"
was written against: a count that climbs, a notification dot, a number that pulls you back. The
plan word counts nothing and never changes on its own.

**Rejected:** removing the chip from the nine pages. It would have cost node 5.12.4 its
meaning and pushed the plan into body copy on a screen whose body is a chart.

The amended line names the exception, its nine pages, and where it stays forbidden (nodes 2.6
and 2.7). `ia/globals.html`, which renders that file, was rebuilt in the same step.

## 2026-08-10 - Chase is 11 on both connection states, and the reason is now in the convention

`connections.html` said Chase had 11 subscriptions and `connections-reconnect.html` said 8: one
source telling the same story twice with two numbers. The rebuild had already fixed both
screens to 11; `wireframes/docs/conventions.md` was still describing it as an open break.

**Decided: 11 on both, and the ground is written into the convention rather than the number
being copied a second time.** A stale connection does not reduce the count. It stops the
figures being refreshed, and the IA already says the last ones stay visible and dated, which is
the calm reading: what you see is what was true at the last check, not a product that shrank. A
reconnect screen showing a *lower* count would say the opposite, that something was lost while
the connection slept, on the one screen whose whole job is to say nothing was.

## 2026-08-05 - Subscription Detail has no master pane either, and the reveal ends with one door

Two decisions from the same step, both left open when Home was rebuilt.

**The master pane on node 2.7 is gone.** The July screen kept the whole list in a left-hand
pane beside the detail on a wide screen. It was rejected on three grounds. The first is that it
no longer has an origin: Home has no pane, so a person tapping a row would arrive at a two-pane
view they had never seen, and the same row would look like two different things depending on
where it was tapped from. The second is that it was a second copy of the canonical fourteen
subscriptions, which is a thing to keep in agreement forever on the screens whose whole job is
to be trusted about numbers. The third is that it spent the left half of the screen on
navigation the header already provides in one control.

**Chosen instead.** The width goes into the subscription itself: on a wide screen the detail
becomes two columns, the identity and the facts on the left (hero, status, the facts, the
decoder line), the evidence and the actions on the right (the charges, cancel, correct, remove,
the trust line). The order down the page on a narrow screen is unchanged, and the two columns
are the two halves of that same order, so "what is this" still comes before "what now".

**The reveal offers one action, and the save-focus nudge left it.** Node 1.5 says one action at
the emotional peak, and the July screen had two buttons plus a line naming two subscriptions
the person might not be using. That is a menu, and it duplicates node 2.6.4, which is one tap
away in the tab bar the moment the reveal ends. The reveal now ends with "See your
subscriptions" and nothing else.

**Not decided here.** Whether Cancel Guide, Share Snapshot and Upgrade become modals on a wide
screen. That stays deferred to Design.

---

## 2026-08-05 - Home is a dashboard on desktop, and has no second pane

The IA allowed the wide layout of Home to open a subscription in a right-hand pane instead of
routing to node 2.7. It was built at the etalon and removed the same day.

**Rejected, and on what ground.** One action would have had two destinations depending on the
width of the window: tapping a row would route on a laptop and fill a pane on a monitor. That
is a rule a person cannot be taught and has to discover, on the one screen whose whole promise
is that nothing surprises you. The pane also duplicated node 2.7, so one object would have had
two renderings to keep in agreement forever, and the first thing that drifts in that
arrangement is the thing the screen exists to be trusted about. Finally it spent a third of the
width on one subscription while the job of the screen is all of them.

**Chosen instead.** The same width goes into the list: the total and the attention row sit side
by side across the top, and the category groups run in balanced columns, two-up and then
three-up. On a 1440 screen all fourteen subscriptions are visible without scrolling, which is
J-MAIN ("all my recurring charges in one calm view") read literally rather than approximated.
The total stays the biggest thing at every width, and a row opens node 2.7 at every width.

**Not decided here.** Subscription Detail keeps a list as its master pane. It is a different
thing, showing where you are in the list you came from rather than previewing where you might
go, and it is re-decided on its own screen when that screen is rebuilt.

---

## 2026-08-05 - The scaffolding comes down: nine cluster pages retired

The detail layer of the IA was nine cluster pages, each holding several screens plus its own
copy of the global elements and its own accessibility section. It is now one page per node
(16 screens), one page for the seven global elements, and one accessibility contract. Seven
cluster renders and the pre-upgrade `ia/ia.html` were deleted; `system.html` and `seo.html`
stayed, because they still own nodes 9.1 to 9.5 and node 8. The temporary registry row "IA
(pre-upgrade)" was removed with them, which closes the note recorded on 2026-07-12 below.

Why the markdown stayed while the html went: the md files are the base-layer record they were
written as, and every node page names the section of them it supersedes. The html renders were
duplicates with no owner left, and a duplicate with no owner is the thing that drifts.

Rejected: deleting the markdown too. It carries the reasoning behind decisions that the node
pages state as conclusions, and git history is not a visible place.

What the consolidation surfaced, which is the argument for having done it: GC7 was carrying
two opposite rules for the same lock (a real preview frame in pro.md, a blurred item in
alerts.md) because they lived in two files; the accessibility rule for modals was written
three different ways across three files; one dialog was cited by a node number that belonged
to a different state; and five states named in a spec had no number at all. None of these are
visible while the material is spread across nine files.

## 2026-08-04 - Two answers the block bank asked for: the share block and the export

Building the block bank (`ia/docs/blocks.md`) surfaced one contradiction and one gap that
could not be resolved inside the bank, so both were carried to the founder and both were
answered the same day.

**D-Share. The share block on the Cancel Win screen is LATER, because its destination is.**
`voice/docs/microcopy.md` gave node 4.10 Cancel Win a "Share this win" button and a privacy
line, and `ia/docs/sitemap.md` scopes node 4.11 Share Snapshot as LATER. An MVP screen was
pointing at a screen that is not in the MVP. Resolved conservatively: the share block moves
to LATER with its destination, and the MVP win screen ends on "back to your subscriptions".
Rejected: pulling 4.11 into the MVP to justify the button. The share is a social job (S1),
not a core one, and the MVP exists to test H0, which the win moment already carries without
it. The lines stay in the microcopy inventory, tagged LATER: they are authored copy waiting
for their screen, not copy to be written twice.

**D-Export. A plain export of your own data is free; the analytical export is Pro.** The
product brief lists "export" under Pro, which read as if every export were paid. That would
put a paywall in front of a data right, which contradicts D3 (the paywall sits at depth,
never at basic visibility) and the privacy promise the product sells on its front door.
Split: the plain, complete export of what we hold about you is free and lives on node 6.15
Data and Privacy; the analytical export of history and trends is Pro and lives with node 5.12.
The product brief in `CLAUDE.md` is corrected in the same step.

Both decisions land in `ia/docs/blocks.md` (the two flagged rows become decided rows), in
`ia/docs/pages/cancel.md` and its page, and in `voice/docs/microcopy.md` and its page. The
grey screen `wireframes/cancel-win.html` still shows the share block as a primary action; it
is listed for the wireframe rebuild rather than hand-edited now, because that stage rebuilds
the screen from its specification.

## 2026-08-04 - The repository moves to the current course structure

The course pipeline (`AI Design Workflow/`) changed after this project was built: a single
root navigation registry, `research/` holding stages 01, 02 and 02+, a `design/` roof over
the whole visual half, `index.html` reserved for the product home page, an entry for an
external critic, and a decision log separate from the rules file. This project was built
against the older shape, so the founder asked for a full alignment rather than a partial one:
a partial move would leave two conventions living side by side in the same sidebar.

What moved: `user-research/` into `research/`; `master-research.md` to `research.md`,
`competitive-analysis.md` to `competitors.md`, `benchmark-trust.md` to `benchmark.md`;
`concept/` to `design/concept/`; `ui-visual/` to `design/` with `all-screens.html` becoming
`design/overview.html`; `wireframes/index.html` (a hub) to `overview.html` and
`wireframes/welcome.html` (the landing, node 1.1) to `index.html`. The empty stage folders
(`animation/`, `design-system/`, `responsive/`, `tokens-components/`, `handoff/`) and every
`.gitkeep` were removed: a folder now appears together with its first file, on its own stage,
and the route of the project is shown by the registry and the README, not by empty folders.

Navigation: the roadmap used to be written by hand inside every page, in three drifting
editions, so a status change meant editing 23 files. It now renders from `/_nav.js` with
`/_nav.css` for the look. Pages outside the registry (the nine IA cluster pages, the two
voice satellites) declare the nearest registry page instead of getting their own row. The
color screen map was renamed off the `nav-*` contract (`scr-*`) so it can never collide with
the root panel on a page that loads both.

Rejected: keeping the old folder names to preserve the published GitHub Pages URLs. The URLs
break on this move, and that was accepted knowingly: the addresses are shared by hand, and
the cost of two conventions is permanent while the cost of new links is one message.

**This reverses the decision of 2026-07-15 below.** `ui-visual/docs/design.md` was deleted
with it. The chain is now `DESIGN-artifacts.md` (draft, root) to a root `DESIGN.md` produced
at UI + Visual from the code, which is what the course pack does. Holding both would give the
product system two sources of truth.

Temporary, and it disappears when the IA is rebuilt: the registry carries a row "IA
(pre-upgrade)" pointing at `ia/ia.html`, because the four pages of the new two-layer IA
(flows, concept map, sitemap, structure) do not exist yet and the current IA is real work
that must stay reachable.

## 2026-07-20 - Concept retrofit: a draft design doc and one brand plate

The Concept pack gained two outputs after this project's Concept phase had closed: a root
`DESIGN-artifacts.md` (the draft design doc entered from the approved brand) and dense brand
toolkit plates. Both were added afterwards. Only ONE plate was generated
(`design/concept/assets/brand-plate-petrol-paper.png`, Google Nano Banana 2, 4k, stored at
2400px) instead of the three the pack asks for, because the brand had already been chosen
from the live html directions: the plate documents the choice rather than making it.
Generating three divergent plates after the fact would have been theatre.

## 2026-07-15 - The product design system lives outside the root (superseded)

Decided that the product design system would be generated into `ui-visual/docs/design.md`
and that a root `DESIGN.md` would never exist, on the ground that a root file would describe
the research and IA pages rather than the product. **Superseded on 2026-08-04**: the course
produces the root `DESIGN.md` from the code at UI + Visual, with `DESIGN-artifacts.md` as
the first source, and the seed file was deleted.

## 2026-07-14 - Desktop app screens become a full-page dashboard

Founder feedback on the wireframes: the landing read as a real full-width desktop page, but
every app screen still read as a phone card framed in a grey field, with the tab bar sitting
at the bottom of a tall scrolling card instead of behaving like app chrome. Decision: on
desktop the app screens become a real full-page dashboard at wireframe fidelity. App pages
are marked `.dash`, the stage goes edge to edge, the header folds into a persistent
full-height left sidebar with the tab bar as its vertical nav, and the content area owns the
width and scrolls independently. The two-pane detail (Home, Subscription Detail) spans full
height beside the list. On mobile the tab bar becomes fixed viewport chrome. Applied to all
29 app pages; onboarding and the landing were excluded. The older framed-phone desktop rules
were fenced with `:not(.dash)` rather than deleted, so nothing else moved.

## 2026-07 - Welcome is the public landing, and the only page with a footer

Welcome / Value Intro was rebuilt from a narrow onboarding step into a full-width marketing
landing wireframe (top nav, two column hero with a calm app preview, benefit cards, how it
works, trust and security, social proof, final CTA, footer). It stays greyscale, semantic and
real copy; its CTAs lead into the onboarding chain at Path Choice. It is the only full-width
page and the only one with a footer, which is why it is the product home page (node 1.1).

## 2026-07 - The desktop model: header in the rail, list and detail in two panes

Locked against the IA of 2026-07-04: on desktop the tab bar becomes a left rail and the
header folds into the top of that rail; single column app screens sit in a centered measure;
Home and Subscription Detail become a real master-detail at stage width 1040 and above.
Partly superseded by the dashboard shell decision above, which took the same idea to the full
page.

## 2026-07 - The voice is applied to text only, and rolled out by subagents

Voice rewrote text on all 41 wireframe pages and touched no markup, no states and no
structure. Home set the sample, the rest were rolled out one screen per subagent against
`voice/docs/voice.md`, and an adversarial four reviewer pass caught the last misses (a non
canonical loader, three exposure framings of "spend"). Every changed line is recorded in
`voice/docs/microcopy.md` as was and became, so no product line ships outside the table.

## 2026-07 - Free is uncapped, Pro is depth only

D3 locked the paywall at depth but was silent on how many subscriptions and how many bank
connections Free may hold. Resolved: no cap on either. A cap on connections is a visibility
cap in disguise, and it would break the gradual reveal that the whole product is built on.
Propagated across the repository the same day.

## 2026-07 - The CJM is a lite pass on one persona and one job

The CJM was drawn for Emma (the anxious non-looker) crossed with J-MAIN only, not for all six
persona and job pairs, and the mining depth was Lite. As-Is follows the research rule (every
emotion carries a source or a `[?]`), To-Be follows the design rule (every step traces to an
As-Is barrier or a job). The To-Be turned out to be fully covered by the already locked
structure, so it validates the built product rather than surfacing a gap; the relief endpoint
stays a `[?]`, which is H0, provable only in a prototype.

## 2026-06-14 - Founder decisions D1 to D5

Gradual reveal with a paired action (D1); manual entry plus presets as an equal second path
at launch (D2); the paywall at depth, never at basic visibility and never at the cancel
moment (D3); Pro at 7.99 a month or 69 a year, above the original 4 to 6 hypothesis because
the competitor data supported it (D4); US and Plaid first, EU deferred (D5). Ground and the
rejected alternatives: `research/docs/strategy.md` section 6.
