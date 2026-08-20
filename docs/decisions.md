# Decision log

What we did, why exactly this, and what we rejected on what ground. Newest on top.
This file is never loaded into a session automatically: read it when you need the ground
under a decision. Rules that must hold next time live in `CLAUDE.md`; status lives in the
README table and in `done:true` in `/_nav.js`.

---

## 2026-08-19 - Trends stopped being a queue, and the founder chose the wide answer

Four complaints in one message, on the coloured History and trends: **"растянул бы
её как и страницу Home ... по такой же бы сетке"**, **"структурно переделал бы эту
страницу, сейчас на ней всё как-то друг за другом, непонятно"**, **"кнопки
переключения очень большие и не работают"**, and **"тут By category ... должен быть
график со столбиками по категориям, а его нет"**. All four are answered and none of
them on a screen file.

**THE WIDTH, AND IT OVERTURNS THIS MORNING'S ANSWER RATHER THAN CONTRADICTING IT.**
The morning found five right edges on this screen and moved the measure off the
chart and onto the pane. That repair stands; what was wrong was the VALUE, 780,
which made every block agree by making the screen narrow. The founder's answer is
Home's 1280, and the blocks now stop disagreeing the way Home's do - by being laid
out. `:has(.chart)` is gone from `app-shell.css`. What survives from the morning is
the second selector, the interruption, and it generalised: an interruption is one
message and one way out at `--container-page` **wherever it stands**, so
`history-trends-empty` and `history-trends-error` stay at 780 while the three data
views take 1280. `edges13.cjs` was rewritten to check that as its own set, which is
a stricter test than the family one it left: **12 families, 0 split; 2
interruptions, 1 width.**

**THE STRUCTURE.** Home's `.head` now holds the lede and the range control in one
row with a rule under them; the picture runs the full width under it; **What moved**
and **By category** sit side by side in a `.grid.roomy`; the export closes it. That
grid earned a change of its own: a roomy grid holding no `.door` takes a 48px column
gutter, because 16px between two bordered boxes reads as a gap and 16px between two
borderless lists reads as one list that has been chopped. The Pro gate followed the
width and took the same treatment - the two months a free plan draws on the left, the
lock on the right - because a two-month line stretched across a dashboard with a
560px card under it is exactly what "дёшево" describes.

**THE CONTROL WORKS, AND THE DATA IS ON THE BUTTON THAT SELECTS IT.** Each segment
carries `data-points` and `data-scale`; `behaviour.js` moves them onto the chart and
asks it to redraw from its own attributes. Everything else that changes with the
range is declared in the markup through `data-view`, so a sentence written for three
months stays product copy with an owner rather than a string a script assembles. The
size came down too, 384 by 52 to 320 by 48, and **the tap target did not move**:
44px is a floor, and shrinking a control by shrinking what a thumb has to hit is the
one way to get it wrong.

**THE TWELVE MONTHS ARE DERIVED AND NOT INVENTED.** 143.91 to 192.90, three steps:
Adobe Creative Cloud arrives in November, Disney+ goes 7.99 to 13.99 in April, ChatGPT
Plus arrives in June. Every step is a subscription on Home at the price Home prints,
and the arithmetic closes in both directions - 143.91 + 22.99 + 6.00 + 20.00 = 192.90.
It is written down once, in `docs/bank-connection.md`, and nowhere else.

**BY CATEGORY BECAME A PICTURE, AND THE QUESTION FOUND A SECOND DEFECT.** The line
said "Streaming is up $6 since March" **under a view that begins in May**. The bars
are the composition now, which does not move with the range; the sentence under them
is the change over the chosen range, and it is correct in all three. The bars are
measured against the LARGEST of the five and never against the total: five shares of
192.90 would put Streaming and Software a hair apart at a fifth of the width, and
"these two are the same size" is the fact the picture exists for. They are **not
petrol**: the plotted line is this screen's one petrol element and two pictures in
one colour make the screen argue with itself.

**WHAT WE REJECTED.** A colour per category, because amber and clay already mean *a
price changed* and *something failed*, and a category is neither. Building the bar
lengths by hand, because a percentage kept beside an amount drifts the first time a
price changes; they are derived from `data-value` and the `rect` in the markup is the
same arithmetic for a page with no script. And generating the range copy in
JavaScript, because copy has an owner.

---

## 2026-08-19 - The plan goes everywhere, and the argument against it was mine

An hour after the badge moved into the account link on History and trends, the
founder looked at the rail and said: **"Free должно быть везде, а не только в
трендс"**.

**THE ARGUMENT I HAD WRITTEN AGAINST IT IS KEPT, unedited, in the entry above**,
because a rejected reason that turns out to be overruled is worth more than a
rule with no history. It was: a grey **Free** chip on every screen of a product
built to lower money anxiety is a permanent quiet reminder of the tier you are
not on, and the plan changes what is on the screen in exactly one place. The
founder weighed it and decided otherwise, and the ground they decided on is
better than the one I was defending: **the greeting already says who you are, and
the plan is part of who you are.** A person who does not know which plan they are
on is a person who cannot reason about what they are seeing, and hiding it until
they go looking is the opposite of Trust through transparency.

**WHAT KEEPS IT A STATEMENT RATHER THAN A SELL**, which is the line D3 actually
draws: the chip carries no offer, no arrow and no wording of its own, and the link
it sits in goes to **Settings**, where a plan can be read and changed. It never
goes to the upgrade screen. A badge that took a person to a paywall from every
screen in the product would be the thing D3 forbids; a badge that takes them to
their own account is the account link doing its job with one more fact in it.

**Counted after, over both corpora: 15 pages carry the account link and all 15
carry the chip inside it; 4 more carry it as a sibling of the lockup, on the
Upgrade screens, which greet nobody.** That is U19. The chip atom went from 20
pages to 26 and was recounted, and so was the bar's plan slot, 9 to 19.

**One thing this makes visible and did not before.** The canonical person is on
Free everywhere in the sample, so Home, Alerts, Save, You and the Pro gate all
read **Free**, while `history-trends.html` reads **Pro**: that page is the second
plan's view of node 5.12 and the chip is now what tells the two apart at a glance.
Walking the product from Home never crosses the two, because Home's Trends tab
goes to the gate.

---

## 2026-08-19 - A tab destination does not get a back button, and a plan is not a screen label

The founder, last of the evening: **"мне не нравится что у нас в трендс есть
кнопка назад когда это стало отдельным пунктом, наверное стоит убрать её оттуда,
и бейдж Free или Pro скорее всего надо поставить напротив имени или же напротив
лого"**. Two halves, one leftover.

**THE BAR WAS THE DETAIL VARIANT AND THE SCREEN HAD STOPPED BEING A DETAIL.**
History and trends used to be reached from Home through a secondary link, so it
was given the detail bar: back, lockup, plan chip. On 2026-08-18 it became a tab
bar destination and that secondary link was retired the same day - and nobody
looked at the bar again. Counted over both corpora: **five screens are tab
destinations, and the other four all carry the same bar**, the lockup and the
account link, with no back control anywhere. Trends was the only exception, for
one day.

**The rule that comes out of it is U18:** a tab destination carries the account
link and never a back control; a screen below one carries the back control and
never the account link. **16 destination pages, 12 pages below one, 0 wrong in
either direction** once this was fixed, with one named exception -
`settings-no-account` carries neither, because there is no account to link to.
A back control on a destination offers to leave a place you did not arrive at
from anywhere in particular, and the way out of a destination is the tab bar it
has always had.

**THE PLAN CHIP WENT INSIDE THE ACCOUNT LINK, which is one step past what was
asked and is the point of it.** "Beside the name" would have been a badge
floating next to a control. The plan is a fact about the ACCOUNT, so it belongs
TO the control that opens the account: it lands on the one screen where a plan
can be changed, and it is one target instead of two. `chip.css` takes back the
`margin-left: auto` it gives every other chip in that bar, which is the whole
cost.

**WHAT WE REJECTED: putting the badge on every screen.** It would follow from
"the plan is an account fact", and it is wrong twice. A grey **Free** chip on
every screen of a product built to lower money anxiety is a permanent quiet nag,
which is what D3 forbids the paywall from being. And the plan changes what is on
the screen in exactly one place - Trends, where Free gets the gate and Pro gets
the depth - so anywhere else the badge would be a label with no consequence. It
is not a usage rule either: this folder's own idle control says a counter that
has seen one screen has described a screen rather than found a rule.

---

## 2026-08-19 - The trend screen had no number on it, and its button had no sentence

The founder read the rebuilt screen and stopped on two things: the readout
"смотрится как-то просто и странновато", and so does the export button - "может
их как-то объединить". Both are the same complaint said twice: an element with
nothing around it does not look built.

**THE READOUT WAS THE SMALLEST THING ON A SCREEN ABOUT A NUMBER.** One 14px
sentence between a full-width rule and a full-width picture, and it read as a
stray caption because it was the only thing there. Every other screen in this
product that states a number states it big - Home at 46px, the detail hero and
the plan price at 32 - and this one had none, while design principle 2 says the
most important number is the biggest thing on the screen. So the summary strip
Home already owns arrives here: **$192.90** at 46px, the sentence under it, and
not a word of the sentence changed.

**THE FIGURE IS THE TOTAL AND NOT THE CHANGE**, and this is the part worth
keeping. "Up $20" is what the screen is FOR, and it is still exactly what the
sentence says. But a big number in this product means an AMOUNT, and making one
mean a difference needs a sign or a word inside the figure - "+$20", "Up $20 a
month" - which is the cleverness the product refuses, and a plus sign next to a
person's money is the nearest this design language gets to an alarm. So the
anchor is where you are now, the same $192.90 the plot's end dot marks, and it
does not move when the range does. Only the story under it changes, which is the
right thing to be moving.

**THE EXPORT AND ITS SENTENCE ARE ONE BAND.** A bare outlined button on the
canvas with a long muted paragraph under it is two orphans, and they are one
object: D-Export's whole point is that this export is the Pro one and the plain
copy is free, which is a sentence a button cannot say by itself. The band is the
neutral wash this system already uses for a quiet strip of context on three other
screens; the copy is split at the sentence boundary it already had, so the order
reads offer, action, honest footnote. Past the tablet point the action moves into
the band's right column and spans both text rows, because a paragraph stops at
52ch and the right half of a 1140 band was empty air. `:has(> .actions)` and not a
modifier class, for the reason every other guard here is written that way.

**WHAT WE REJECTED.** Putting the export beside the readout at the top, which is
the most literal reading of "объединить": an export is an action on the whole
history and belongs after the thing it exports, and a control up there would
compete with the picture. And a big "+$20", above.

**WHAT MOVED IN THE COUNTS.** `.total` went from 4 screens to 5, which is U9's
own source, so the rule was recounted rather than left naming a corpus it no
longer had. The summary strip, the wash and the big total all gained a page and
all three were recounted by `counts.cjs` in the same step.

**AND THEN THE FOUNDER DREW A BOX IN THE EMPTY HALF OF THE STRIP.** The hole is
arithmetic rather than an oversight: a 46px figure is about 255px wide, a sentence
stops at 52ch because it is prose, and the strip is 1140. Half of it was air.

**What went into it is not decoration.** History and trends was **the only screen
in the product with figures on it and no statement of where they came from**,
which is design principle 4 unmet, and nobody had noticed because until that hour
the screen had no figure to point at. The trust block stands BESIDE the number
rather than at the foot, where Home puts it, because here the number and its
provenance are one reading: this is the total, and this is who told us. Its three
lines are this screen's own and not Home's - Home's block names the LIST, this one
names the HISTORY, and one product line may not exist in two editions. U8 went
from 4 screens to 5 and was recounted. **It costs something on a phone**, where
those three small lines sit between the sentence and the picture; that is the
price of putting a source next to its figure and it is stated rather than hidden.

**A CSS TRAP WORTH WRITING DOWN, because it will be met again.** `grid-row: 1 /
-1` does not span the rows of a grid that declares none: `-1` names the last line
of the EXPLICIT row grid, and with every row implicit it resolves back to line 1,
so the block occupies row ONE alone. Measured with it in place: the figure's row
grew to 101px to fit the source block beside it and the sentence fell 60px away
from its own number. `1 / 3` creates the implicit rows and spans them. The same
line was wrong in the export band an hour earlier and looked almost right, which
is how it survived: the button sat 20px high of centre and nothing else moved.

**AND THE INSTRUMENT LEARNED SOMETHING TOO.** `quality13.cjs` reported the export
band's sentence as 18px flush against its own action row. It was not: the two are
518px apart horizontally and merely overlap vertically, because they are the two
columns of a grid, and the check compared them on the assumption that siblings
stack. It now skips any pair that shares no horizontal range, which is a fact
about geometry rather than an exception for one band. Back to its 24 baseline.

---

## 2026-08-19 - Two rules were unscoped, and one of them had been wrong for six days

Both found by the same rebuild, and both are about a declaration that was written
for one screen and applied to all of them.

**THE ORDER.** `.app > .screen > .head { order: 1 }` and its three siblings exist to
lift the two secondaries above Home's balanced columns. Written unscoped, the single
`order: 1` sends the ONLY ordered block to the FOOT of any screen that has it and
nothing else, because every unordered sibling keeps the default 0. That is what
happened the instant Trends took the same head - and, measured, it is what
`home-empty` had been doing since the ordering was written: `.empty` at y=72 and
`.head` at y=290 at 1440. **No sweep caught it, because every instrument in this
project checks widths and this is an order.** The whole set is now guarded on
`:has(> .groups)`, the block the reordering is actually for. Now U17.

**THE MEASURE.** `card.css` declared the prose card's 52ch as
`.app > .screen > .card.prose > p`. The Pro gate moved that card into a column, the
guard stopped matching, and the width sweep priced the paragraph at **77.3ch at a 750
window** against 52ch everywhere else in the product. A measure that belongs to the
LINE cannot be conditional on where the box around the line is parked, so it lost the
`> .screen >`. The 560 above it kept its guard and should: that one is the width of a
BLOCK on a screen, and inside a column the column decides.

**AND `[hidden]` WAS NOT A FACT.** The three range views are hidden in the authored
markup, so that with no script the screen is the three-month view and not all three
stacked. Two components in the system out-declare the attribute: `.metarow` is
`display: flex` and `.muted` is `display: block`, both 0-2-0 against the browser's own
0-1-0, so `hidden` on either of them did nothing at all, silently. The fix is one
rule at the END of `index.css` - the file that owns cascade ORDER - rather than
`!important`, a compound-selector trick, or the runtime inline style stage 08 used on
`.tile`. That workaround was right for a filter that only exists when a script runs
and is wrong for markup that has to be correct without one. Now U16.

---

## 2026-08-19 - "No link at all" was the wrong test, and the founder found it in an hour

The strip that answers a dead end shipped in the morning against exactly two
screens: the ones with no link out of `.app`. By the afternoon the founder was
standing on `sign-in-sent` with the same complaint - **"и тут получается та же
проблема, не видно, куда двигаться дальше - правильный имейл и ты перешёл дальше,
или ошибка"** - and that screen has two controls.

**THE TWO SCREENS LOOK NOTHING ALIKE AND THE DEFECT IS THE SAME.** "Send another
link" and "Use a different email" both go BACKWARDS. What moves this screen
forward happens in a mail client. So counting controls finds the wait and misses
the hand-off, and the thing they share is not markup at all: **the step that moves
the screen forward happens somewhere the prototype cannot go.** The system takes
it, or the person leaves to take it.

**SO THE CLASS IS DECLARED AND NOT INFERRED.** The map grew from 2 screens to
**9**: the eight waits, found by asking which screens carry a skeleton or
`aria-busy`, and the one hand-off. 23 doors. The "no link at all" check stays
underneath as a net, so a wait coloured next month is never silently a dead end,
and the declared entry is tried first because a screen with a way out that is not
a way FORWARD is invisible to any structural test.

**THE GRAPH WAS BUILT BECAUSE TWO ANECDOTES ARE NOT A NUMBER.** `walk13.cjs`
reads every `href` inside `.app` across the 55 coloured screens - 273 links - and
asks three questions:

| | |
|---|---|
| **no forward door** | every link points at a screen that links back, so a reviewer can only retreat. **4**, and the check is that every one has a declared next step. One is a named exception, verified: `history-trends-locked`'s forward door IS `upgrade.html`, which links back because the gate is where you came from. **0 unanswered** |
| **unreachable by clicking** | **21 of 55** by product links alone. With the chrome's doors counted, **8**. The strip recovers **13 states** that could only be reached from the side panel |
| **what the chrome declares** | 9 screens, 23 doors, and **0 of them on a screen that is neither a wait nor the one hand-off**. A map that grows onto ordinary screens has stopped being about this problem |

The remaining 8 are not a defect and the instrument says so out loud: no product
screen links to `home-error`, and none should - that screen IS Home when the
refresh fails. The number is there to be read rather than driven to zero.

**AND THE STRIP LEARNED TO CLEAR THE TAB BAR, MEASURED RATHER THAN GUESSED.** Six
of the nine screens carry one, and below the shell's point that bar is a 63px
block along the bottom of the window, straight under a box pinned 16px off the
same edge. The height is READ off the bar at mount and again on resize, because 63
is the product's number and the chrome may not hold a copy of it: `tab-bar.css`
declares `min-height: 48px` and the rest is padding and a label, so a literal
would be right today and silently wrong after any change to either. The test is
geometric rather than a width - is this bar on the bottom edge, and is it wider
than it is tall - because the same bar is a 220px rail at 760.

**STILL NOTHING IN A SCREEN FILE.** 23 doors, 9 screens, and the rollout ledger
reads the same numbers it read yesterday: 0 style blocks, 0 classes the system
does not define, 606 internal links. The 23 are resolved against the tree by
section 4 of `rollout12.cjs`: **0 missing**.

---

## 2026-08-19 - The way out of a wait belongs to the stand, not to the screen

The founder, standing on `connect-bank-loading`: **"для меня тупик ... а что тут
может быть дальше - success или ошибка или что-то еще, как сделать так, чтобы это
не шло как в продукт, но было понятно, куда двигаться дальше"**.

**THE DEAD END IS CORRECT, AND IT IS A RULE.** U7: a wait carries no control at
all, because an edge a person TAKES is a control and an edge the system takes is
not. A button on a wait offers an action the product does not have, and on
`upgrade-processing` it would offer the one thing that screen must never offer, a
way out of a charge in flight. Counted over all 55 coloured screens, exactly
**two** have no link out of `.app`, and they are U7's own two pages. Every other
wait carries a tab bar and is walkable.

So the screen is right and the PROTOTYPE is wrong: a reviewer meets a page with
nothing to click and no way to reach the outcomes it leads to. Those are two
different problems and they have two different homes.

**THE ANSWER IS THE REVIEWER'S CHROME.** `design/_nav.js` draws a strip outside
`.app` naming where the wait can land, and `design/_screen.css` gives it the
chrome's own sage palette so it can never be mistaken for the product. **Nothing
was added to any of the 55 screen files**: no markup, no class, no link, no style.
Turn the chrome off, which is exactly what a build does, and the wait is the wait
that ships. The rollout ledger's own checks are unchanged by construction, and
that was verified rather than assumed: 0 style blocks, 0 classes the system does
not define, 606 internal links, all the same numbers as before.

**IT FINDS ITS OWN SCREENS.** The strip is built where the screen has no
`a[href$=".html"]` inside `.app`, which is the runtime form of the question U7
answers. So it cannot appear on a screen that is walkable, and it cannot be
forgotten on a wait that is coloured next month. Where such a screen has no
declared next step, the strip still draws and says so, listing the sibling states
the registry knows: a reviewer is never left in front of a page with nothing to
click and no explanation of why.

**THE EDGES ARE NOT THE CHROME'S TO INVENT, AND EACH ONE NAMES ITS SOURCE.** Flow
A in `ia/docs/flows.md` gives the three outcomes of the sync (the reveal, the
error, the empty); the node comment on `connect-bank-cancelled.html` gives the
fourth, added on 2026-08-04 with the sentence "Plaid Link returns four outcomes
and the map had three"; `upgrade-processing` states its own success in its own
copy, "When it is done you go straight back to Your trends, open". Two entries,
six doors.

**AND THE SIX DOORS ARE CHECKED BY THE LEDGER.** A href nobody checks is a href
that rots, and these six live in a script rather than in any file section 4 of
`rollout12.cjs` reads. That section now parses the map out of `design/_nav.js` and
resolves its targets against the tree, in the same run and by the same standard as
the other 606: **6 links, 0 missing**.

**WHAT WAS REJECTED.** A strip in normal flow under the screen: the stage gives
`.app` exactly `100dvh - var(--c-toggle-h)` past a 760px container, so a block
under it pushes the review page taller than the window, which is the same +40px
defect the toggle's own subtraction exists to cure. A fixed box in the corner
takes no height at all. And a "next" control inside the screen, which is what a
prototyping tool would do: it would put a button on a wait, and the wait having no
button is the whole point of the rule.

---

## 2026-08-19 - One screen, one measure, and the frame steps off the picture

The founder, on the finished trend screen at a 1920 window: **"пока еще слабовато
... что то растянуто на всю ширину что то нет ... я бы хотел чтобы это выглядело
круто, а не дёшево"**. Two defects, and only one of them was where it looked.

**FIVE RIGHT EDGES ON ONE SCREEN.** Measured on the live `history-trends` before
anything was touched, the direct children of the screen:

| width | blocks |
|---|---|
| **1280** | the text block, the trend list, the action row |
| **780** | the chart and its month labels |
| **525** | the readout sentence |
| **459** | the two muted lines |
| **384** | the range control |

Nothing was broken by any single one of them. Each block was doing what its own
file said, and the screen read as cheap because no two of them agreed. **The chart
was the only block with a measure**, given to it the day before, so the picture
stopped in the middle of a list that ran on to the pane.

**THE CAP MOVED TO THE PANE AND OFF THE BLOCK.** `.app > .screen:has(.chart)` in
`app-shell.css` takes the same 780 (`--container-page`, the width the shell itself
hands a block between the two points, so no new number entered the system), and
`chart-placeholder.css` states no width at all. It is a `padding-inline` and not a
`max-width` on `.screen`, for the reason the 2026-08-13 repair already wrote down:
`.screen` is the pane that scrolls, and a cap there drags the scrollbar into the
middle of the window. `:has(.chart)` and not a class, exactly as `:has(.plans)`
one screen over: a screen built around a picture is identifiable by what is inside
it, and a class would be markup on a product screen.

**AND THE FIFTH STATE OF THAT SCREEN HAS NO CHART.** `history-trends-error` is a
status block, two buttons and a quiet line, so `:has(.chart)` cannot see it, and
it measured 1280 while its four siblings measured 780: **one screen that changes
width when it fails**. The second selector is `.app:not(.flow) > .screen.interruption`,
which is what that page and `history-trends-empty` actually are; `:not(.flow)`
keeps the pattern's three other wearers out, all of them inside the onboarding
chain, which owns its own 620. Counted at 1920 over all 54 app screens: the two
selectors match five pages and every one is a state of History and trends.

**THE MATERIAL WAS THE OTHER HALF, AND IT WAS THIS COMPONENT'S OWN.** A grey slab
with a hairline round it, holding a line, is the shape of a PLACEHOLDER, which is
what the component is called and what it drew for two stages. Every chart the
founder put up as a reference had no box at all: dashed rules, a value axis, a
line, and the page's own paper behind them. **The picture IS the container once
there is a picture.** So the fill and the frame stay where they still do work -
the honest empty frame that node 5.12 block 8 asks for, and the loading skeleton
that must not move when the numbers land - and step off the two states that plot
something. `:has(.plot)` is the test: it asks whether there is a line in the box.

**NOTHING LOST CONTRAST BY IT, AND THAT WAS CHECKED RATHER THAN ASSUMED.** The
line reads **6.23:1** on paper against 5.78 on the fill in the light theme, and
**6.82:1** against 6.15 in the dark; the axis labels read **5.78:1** against 5.37
and **6.4:1** against 5.77. `border-color: transparent` rather than `border: none`,
so the border still takes its 1px on every side and the three background rules keep
landing on the same three per cents: the box is the same 220 tall and the line has
not moved.

**THE WASH WAS RE-CUT FOR PAPER.** The mask ran 0.30 to 0.02, and the 0.02 was
deliberately not zero so the grey slab showed through the foot of it. With no slab,
0.02 of petrol over paper is a flat film with a visible straight edge where the
closed path ends. **0.22 to 0** is the same gradient read against paper: it reaches
nothing at the foot, so it has no edge at all.

**AND THE LINE GOT AN END.** A curve that ran to the frame and stopped read as a
shape cut off by the box; the cursor answers a pointer and is invisible until there
is one, so at rest the plot had no terminal at all. The dot on the last point is
what a chart of a running total puts there, and it says what the sentence above the
chart says: this is where you are now. It is built by `behaviour.js` from the same
array the curve comes from, in the same per-cent coordinate system as the cursor,
and it stands down while the cursor is on, because two dots on one point is a
question a reader should never be asked. **It cost the clip**: the dot sits at
exactly 100% and would render as a half-disc against a box that hides its overflow,
so a plotted chart is `overflow: visible` - which it can afford, because there is
no rounded fill left for a stroke to escape.

**U15, AND THE FOUR ROWS THE STAGE BEFORE LAST NEVER PUBLISHED.** The rule is
written down rather than left as a fix: *one content measure per screen, and every
state of a screen ends in the same place; a block narrows itself only for READING,
because that limit is a property of the text.* Writing it exposed something else:
`docs/architecture.md` has held **fourteen** usage rules since stage 11 and
`design/kit/architecture.html` published **eleven** of them, so `motion.html` had
been pointing at "U12 in Architecture" for three days and Architecture stopped at
U11. U12, U13, U14 and the new U15 are on the page now, and the two live counts
that said "eleven" are corrected on it and on `why.html`.

**THE INSTRUMENT IS `design/kit/screens/edges13.cjs`**, and what it PRINTS and what
it CHECKS are deliberately two different things. It prints every distinct width
among the direct children of every app screen, split into blocks that declare a
measure and blocks that ask the pane for one, because whether four edges read as
one object is a judgement and this file's job is to put the numbers in front of the
eye that makes it. It CHECKS the falsifiable half: every state of one screen ends
in the same place. **12 families, 0 split, 1 declared exception** - `upgrade` takes
59rem for its plan row and its three states do not carry one - and 13 screens where
every block owns its measure and there is nothing to compare.

**ONE THING WENT INTO AN INSTRUMENT AND IT IS NOT A FIX.** Dropping the clip made
`quality13.cjs` see a geometry that was always this way: the value axis sits in the
chart's own gutter and the end dot sits ON the curve, so both cross the parent's
content box by construction. Both are placed by coordinate rather than by flow, so
the content box is not their frame of reference. The exclusion is one line, named at
the line, and it is the third of three in that file.

---

## 2026-08-18 - Twelve rows were addressed to a stage that had ended

The founder asked one question - **"а мы все починили и сделали, или что-то
осталось еще?"** - and counting the answer found something the count itself had
been hiding. Of the 36 open rows in `backlog.md`, **twelve were addressed to stage
12, which closed on 2026-08-17**.

**A ROW WHOSE OWNER NO LONGER EXISTS IS NEITHER DONE NOR REFUSED.** It lies there,
and every later count carries it as "open" while nobody is able to act on it. That
is worse than an open row, because it looks like work in a queue and is not in
anyone's queue.

**EACH OF THE TWELVE WAS RE-READ AND RE-MEASURED BEFORE IT WAS RE-ADDRESSED**, and
the measuring is most of what the sweep produced.

**Four closed, because the thing they were waiting for had happened and nobody had
looked.** `design/index.html` exists and is the coloured public landing, so the row
saying the folder has no index page is answered and has been since the landing was
coloured. The share card's total renders at **32px**, which is the value its named
change promised, so the reverse-check row did its job. The step marker's 4px shift
has shipped and measures a **14px marker-to-text gap** (40px padding, 26px marker),
with `numbered-steps.css` carrying the same sentence at the rule. And the
`.landing` scope row lost its premise: the page it called "grey only" is coloured.

**One dropped at verification, and the row was WRONG rather than stale.** It said
`.muted.spaced` is byte identical to the base and could be deleted. The base is
`.app .screen > .muted`, a DIRECT CHILD rule, and **two of the three wearers in
colour are not direct children of a screen** - the consequence line on
`cancel-guide-no-guide` and the delete warning on `data-privacy`. All three compute
`margin-top: 16px`, and for those two the modifier is the only thing supplying it.
Deleting it would have moved two screens.

**Six went to the founder**, because what is left in each is a decision and not
work: the icon set's optical balance (and its 22 and 106 per cent keep the corpus
they were measured on, which is FOUR icons, a fifth having joined the same day), a
size primitive for the 26px marker, the `.cut` merge, the `.plans` axis, a quieter
step for `.muted`, and whether a token origin is owed per name or per run.

**One went back as work**: the eleven ARIA and form-semantics findings from stage
07, which is the largest real task left in the file and the only row a builder can
simply do.

**Verified.** The backlog now has **0 rows addressed to a stage that has ended**;
54 say closed against 51 before; 19 name the founder and 7 are work with no stage
on them. `rollout12.cjs` 0 violations, `pages13.cjs` 0 of 127, the handoff page
0 sideways, 0 requests failed, 0 console errors.

**Ground:** the founder's question, and the rule it produced, which is now written
into `backlog.md` itself: **an owner column is only as good as the owners in it, so
a stage that closes owes a pass over every row still addressed to it.** Nothing in
that file may name a stage that has ended.

---

## 2026-08-18 - The critique of stage 13: 22 findings, and the two best came from disagreeing

Run on two instruments the way `CLAUDE.md` requires: **Codex read-only on the
source** and **Claude in a browser on the render**, taken independently and merged
with a "who found it" column. **22 findings, 22 closed, none dropped at
verification.** The full table is on `handoff/handoff.html`; what belongs here is
the three that changed something bigger than themselves.

**ONE: THE COUNT DRIFT NOBODY SWEEPS FOR.** Codex found `range-picker.css` saying
"the second of petrol's three jobs" - a comment written the same day D-Plot made
it four. Pulling that thread found **24 more places** saying three: nine files in
`design/system/`, twelve kit pages, `DESIGN.md` twice and a concept page. The
lesson is not "update your comments": **a decision that changes a COUNT has to be
followed by a grep for that count in the same commit**, because the count is
spread across every file that ever justified itself by it, and none of them is
wrong on its own line.

**TWO: TEN PAGES NOTHING SWEPT.** `width12.cjs` walks the 110 product screens
across 58 widths and reports "no document scrolls sideways at any stop". True,
and it had been true for two stages. The **127 pages around them** - every stage
account, every stand page, every IA node - had never been swept at all, and a
receiver opening this project on a phone meets those pages first. Ten of them
scrolled sideways at 320, the worst by **85px**. Four causes, and every one had a
solved form already in the product: a grid floor taller than its own container
(the system has carried `min(floor, 100%)` since stage 10 and the pages that talk
about the system had not), a `<code>` holding an unbreakable path, a flex item
with no `min-width: 0`, and a column count written by hand in an inline style.
**0 of 127 now**, and `pages13.cjs` is checked in beside the others so the gap
cannot reopen quietly.

**THREE: THE ONE THAT CAME FROM DISAGREEING.** Codex flagged the handoff page's
"`CLAUDE.md`, 200 lines" against the census's own 201 and called the page wrong.
**The page was right.** The census counted lines with `split("\n").length`, which
returns an extra element for the empty string after a file's final newline: every
line figure it had ever printed was **inflated by one per file**, and with 618
files the group totals were out by the number of files in them. Fixed at the
function; every figure on the handoff page recounted. A census off by one on every
file is worse than no census, because the error is invisible at any single row -
you can only see it by comparing two instruments that should agree.

**AND THE REST, IN ONE LINE EACH.** Six places in `ia/docs/pages/navigation.md`
still specified four tabs, including a decision line naming a fifth as "exactly
the density and alarm this segment avoids" and an accessibility contract promising
"a landmark with four links"; `DESIGN.md` described a four-destination bar and
kept a Do-block forbidding what the same document had already granted;
`tokens.css` justified `--plot-line` with "the Pro gate has no line at all. 1
element, 1 screen", true in the morning and false by the afternoon;
`quality13.cjs` carried an absolute path into one machine's home on the very day
the census named that defect elsewhere; this page claimed "four markdown files are
named by no page" while being the page that names them; two README figures had
drifted; `chart-placeholder.html` still asserted "the line is not petrol" two
sections above the one explaining that it is; `logo-crop.html` logged three
console errors from `<svg height="auto">`; and **the file whose entire result is
"zero em dashes found in any file" contained one**, inside the sentence naming the
character it had searched for.

**Nothing was dropped at verification**, which is unusual and is worth a sentence
rather than a celebration: the read-only pass was given a scope of files changed
on one day, and a narrow scope is what makes a critic precise.

**Ground:** `CLAUDE.md`'s rule that critique runs on two instruments, taken
independently and merged. What this run is evidence for: **the value is not in
either instrument, it is in the disagreement.** The best finding of the day is one
where the critic was wrong, and finding out which side was wrong is what exposed
an error in every number the census had ever printed.

---

## 2026-08-18 - Handoff gets a page, and the census could not see its own stage

The last roadmap row had `page: null` since the project began, which is the one
state a registry can hold and a stage cannot close in: **an artefact with no
visible place does not exist for the person who decides**, and a stage whose
account is nowhere is a stage nobody can walk.

**WHAT THE PAGE REPORTS, AND WHAT IT REFUSES TO BE.** Four things: the census of
what is on disk, the lift test, the run surface a receiver meets in the first
minute, and the open list counted off `backlog.md` rather than recalled. It
refuses to be a summary - twelve stage accounts already exist and each is better
at its own subject than a paragraph here would be. What a receiver needs from
this page is the things that are true of the WHOLE and are written down nowhere
else.

**ONE NUMBER ON IT IS WORTH THE PAGE ON ITS OWN.** The product is **7333 lines of
html** and the argument for it is **23819 lines of markdown**, three times as
much. That ratio is the pipeline's shape rather than an accident: every value
carries the decision that put it there.

**AND THE CENSUS COULD NOT SEE ITS OWN STAGE.** Adding the page put it in
"everything else", which is where a file goes when nobody has told the census it
exists - and a census that cannot see its own stage's page is the first thing
that page would have to correct. The classifier was corrected rather than the
number: `handoff/` joined the stage-pages group, and `design/overview.html` and
`design/rollout.html` joined it too, because they had been miscounted the same
way the whole time. Stage pages went 33 to **36** and "everything else" 231 to
228; the total is **618**.

**THE REGISTRY ROW USES `ready` BESIDE `done`**, exactly as the Animation and
Rollout rows established: `ready:true, done:false` says the page exists and the
stage is not closed, which is the one state this registry can say out loud, and
without it a live account is unreachable from the roadmap for the whole length of
its own stage - which is exactly when it is most worth opening.

**Verified.** The page serves with 0 failed requests, 0 console errors and 0
sideways scroll at 390 and at 1440; every one of its internal links resolves; the
roadmap marks the row `is-active` on the page itself and `Next` with a working
link from everywhere else. `rollout12.cjs`: 0 violations, pairing still 55 and
55. `quality13.cjs`: unchanged.

**What the stage still owes:** the critique on two instruments, and the founder's
walk. Everything else it was for is on the page.

---

## 2026-08-18 - The lift test: the system travels, and it carries one thing it cannot

Stage 13's whole claim is that `design/system/` is liftable. It had been asserted
in three places and measured in none, so it was measured: the folder was copied
into an empty directory and **one screen the system had never seen was assembled
there out of its classes alone** - shell, app bar, brand lockup, big total, the
interactive trend chart, the segmented range, a prose card, a divided list, the
trust block and the five-destination tab bar.

**IT PASSES.** Served from that directory at 390 and at 1440, in both themes:
**0 failed requests, 0 console errors**, every role painted, the chart's cursor
built by `behaviour.js`, no element left unstyled, no sideways scroll. 76 files,
1.4MB, and every `url()` inside the folder resolves inside it - including
`assets/`, which is why those four webp washes are part of the lift rather than
decoration.

**AND IT CARRIES ONE DEPENDENCY IT CANNOT PROVIDE: THE TYPEFACE.** `base.css`
asks for `'Inter'` by name and nothing in the folder provides it - no
`@font-face`, no file, no import. **The lift test passed without noticing,
because the machine it ran on has Inter installed**, which is exactly the shape
of failure a handoff exists to prevent. It is written down now in the two places
a person looks: `design/system/CLAUDE.md` in a section called "What this folder
does NOT carry", with the exact link all 57 pages use, the five weights actually
in use (400, 500, 600, 700, 800 - a subset that drops 800 loses the wordmark) and
the self-hosting alternative; and at the declaration in `base.css`, because that
is the line somebody greps for.

**THE RUN SURFACE, WHICH THE CENSUS HAD FOUND EMPTY.** No `package.json`, one
file in the whole repository telling a person how to run anything, and the
instruments resolving playwright from a global npm root - one of them,
`fp.cjs`, from **an absolute path inside one machine's npx cache**, which is the
least liftable line in the repository. Now: a `package.json` whose only reason to
exist is that dependency, with `npm run check`, `census`, `serve` and the rest;
`node_modules/` ignored; every instrument resolving **local first, global after**,
so it runs for a receiver who typed `npm install` and still runs on the machine
that has no local install. And the README carries a "Running it" section, so the
census's own count of files that tell a person how to run this went from 1 to 2.

**Verified.** Both instruments still run after the resolver change and both stay
clean. Box fingerprint over all 55 coloured pages against a baseline taken from a
stashed tree: **0 pages and 0 boxes at either width**, which is what a change to
comments, a package file, a README section and a require line owes.

**Ground:** stage 13's own census, which asked "is it liftable" and could only
answer "nothing references outside the folder". That is a static answer to a
question that is really about a receiver's machine, and the difference between
the two is a typeface nobody had noticed was missing.

---

## 2026-08-18 - The founder stops being the corpus sweep

**"го делать чтобы все было круто"**. The honest reading of that, after a week in
which every correction started with a founder looking at a picture: build the
instrument that finds the next one, run it, and fix what it says.

**SIX CHECKS, 55 SCREENS, TWO WIDTHS, TWO THEMES.** `quality13.cjs` asks the six
questions this week's corrections turned out to be instances of: the document
scrolling sideways, an element crossing its parent's content box, a control label
on more than one line, a control under the tap floor, a paragraph sitting under
12px from a surface, and a bordered box with nothing in it.

**FOUR KINDS CAME BACK AND TWO WERE THE INSTRUMENT'S OWN FAULT.** A preset tile
is a card, not a one-line control; a checkbox's target is the label around it,
not the input inside it. Both are fixed in the file rather than tolerated in the
report, because a check that cries wolf is a check people stop reading.

**THE TWO REAL ONES.**

  1. **A standalone exit link with a 21px hit area.** `data-privacy` carries
     `<nav class="actions quiet"><a>Your sources</a>`, measured **86.97 by 21**
     with no padding: under the 44px floor and under WCAG 2.5.8's 24px.
     `quiet-line.css` refuses the floor with a good reason and had logged the
     case it could not reach - a link that might be inside a sentence. **This is
     not that case**: a `nav.actions` is a row of controls by definition and never
     a sentence, so the selector is exact and the exemption does not apply.
     Padding plus a matching negative margin, which is `muted-line.css`'s answer
     to the same question: the border box grows to 44, the margin box stays 21,
     nothing moves. Nearest other target on that screen is 53px away, checked
     before it was written.
  2. **The gate's sentence sat 8px above its buttons on five pages**, and
     `panel.css` said itself where the 8 came from: "10px under it folds down to
     --space-8" - a rounding from stage 08, not a distance anybody chose. 16 is
     the step this system settled the same week for a sentence and the block under
     it inside a surface, against 24 between two blocks on a screen. A gate is a
     surface.

**AND ONE THING THE SWEEP EXPOSED THAT THE SWEEP DID NOT FIND.** The empty,
locked and loading chart frames were a grey slab again at 1x. The gridlines were
moved to `--line-divider` hours earlier, correctly, because three SOLID rules
across an uncapped 1140px box read as banding. Both halves of that reason had
gone - the rules are dashed now and the band is capped - and the softening had
started costing the thing they exist for: **`--line-divider` is 1.09:1 on the
recessed fill, and a 1px dash at 1.09 is not there on a 1x display**. On three of
the four states the rules ARE the picture. Back to `--line-container`, 1.16:1:
still a hairline, and visible.

**WHAT IS LEFT, WITH A NUMBER ON IT.** `.group-head.plain` produces three
distances for one job: a plain group head sits **2px** above what it labels on 31
placements, and the `plain` modifier sits **8px** above a `ul` on 5 and **16px**
above a `div` or an `ol` on 4, because the follower's own top margin is doing the
arithmetic. Not fixed, because fixing it means choosing which of the three is
right and that is a decision about a component nobody has asked about. Recorded
in `backlog.md` with the counts so the next person starts from a number.

**Verified.** After the two fixes the whole coloured corpus reports **two
text-to-surface pairs under 12px and both are legitimate**: a loading skeleton
and a group head. Every other check reads zero at both widths in both themes. Box
fingerprint over all 55 pages: **six move** - the five gates by 8px and the one
anchor growing its hit area - and the gridline colour moves no box at all, which
is what paint owes. `rollout12.cjs`: 0 violations.

**Ground:** the founder's sentence, read as a mandate to build the check rather
than to keep polishing by eye. The thing worth keeping: **a correction found by
looking is a correction; the same correction found by a run is a rule.**

---

## 2026-08-18 - D-TAB: Trends becomes the second destination, and the door on Home closes

The founder, after the free layer shipped: **"а почему би не вивести це в
отдельний пункт меню?"** - the second time in an hour. The first time the answer
was "not yet, fill the screen first". **The screen had just been filled, so the
answer changed with it**, and that is the whole entry.

**THE REFUSAL WAS CONDITIONAL AND THE CONDITION WAS GONE.** `ia/docs/sitemap.md`
said: "History and Trends does NOT get a global tab: it is Pro-gated (D3), and a
mostly-locked tab would irritate free users and break the calm promise." Counting
had made that stronger an hour earlier - every entry point in the coloured
product led to `history-trends-locked.html`, and nothing led to the chart except
its own error state. **Then node 5.12 block 8 was rewritten**: a free person gets
one real comparison of their own, in words and as a two-month plot, with the lock
under it. The tab is no longer mostly-locked because the room is no longer mostly
empty. The paragraph is kept in the sitemap rather than deleted, because its
condition is the argument.

**WHAT IT COSTS, MEASURED BEFORE IT WAS DECIDED.** A fifth item at a 320px
viewport is **64px wide, with no wrap, no tab-bar overflow and no page
overflow**; 78px at 390. On the desktop rail an item is **219px whatever the
count**, so the fifth costs nothing there at all. The narrow end was the only
real risk and it was measured first.

**SECOND PLACE, AND THAT IS THE ONE JUDGEMENT IN THE CHANGE.** Home, Trends,
Alerts, Save, You. Home answers "what am I paying for now" and Trends answers
"has it been moving": the same money and a different question, so they are one
cluster, and the three after them are where a person ACTS.

**THE ICON WAS DRAWN SIX WAYS BEFORE ONE WAS KEPT.** A bare rising line reads two
steps lighter than Home or Save at 22px, and the set's weight is set by those
two. The one kept is a **framed box with the product's own curve inside it** -
the same rise-then-level the chart draws - so it sits at Save's weight and it is
the picture rather than a symbol for it. Recounted by script over all five
destinations, painted box plus one stroke, longest side: **17.30 to 19.70
modules, median 18.70**. The old line said "16.10 to 19.70, median 17.75" over
four; its method could not be reproduced, so the figure is re-derived and the
method is now named beside it.

**THE PROHIBITION WORKED AND WAS THEN SPENT.** `destination-icon.html` carried a
forbidden row: "a fifth is not an icon problem, it is a navigation model
changing, and that is a decision for `ia/docs/sitemap.md` and not for this file."
That is exactly the order this change went in: the sitemap first, the icon
second. The row is rewritten rather than deleted, and the rule stands for a
sixth.

**AND THE DOOR ON HOME CLOSED AS THIS ONE OPENED.** "See your trends" left the
secondary row on `home`, `home-savefocus` and `home-error`. A room with a
permanent door on every screen does not also need a second one in a row whose
other item is an action rather than a place. The row keeps "Add a subscription",
and the grey's comment goes from "two quiet secondaries" to one.

**Verified.** 56 tab bars rewritten, 28 grey and 28 coloured, one insertion
each; on the five History and Trends pages the new item is current and Home gave
up `aria-current`. `rollout12.cjs`: 0 violations, pairing still 55 and 55, 606
internal links and 0 broken. 9 sizes by 2 themes: 0 sideways scroll, 0 console
errors.

**Ground:** the founder asked twice. What is worth keeping: **a refusal with a
condition in it is a promise to re-answer when the condition changes**, and the
honest thing when someone asks again is to check whether your own reason still
holds rather than to repeat it.

---

## 2026-08-18 - Trends stops being a wall: Free gets one comparison, and the tab stays open

The founder, two questions in one message: **"у нас есть трендс и они сейчас так
мовити спрятани в кнопке на главной странице, возможно стоит сделать пункт меню
под трендс?"** and **"оно как то виглядає типа пусто и не понятно что показіваем
и зачем, нам нужно вистроять понятное флоу"**.

**THE FIRST QUESTION HAD AN ANSWER IN THE FILE, AND COUNTING MADE IT STRONGER.**
`ia/docs/sitemap.md` refuses the tab: "a mostly-locked tab would irritate free
users and break the calm promise. It is reached contextually from Home."
Counted before answering: in the whole coloured product **every entry point leads
to `history-trends-locked.html`**, and nothing leads to the screen with the chart
except its own error state, because the canonical person is on Free. So the
refusal was not a prediction, it was already the fact - the entry led to a wall.
A tab would not fill the screen, it would advertise the wall from every other
one. **The founder's answer: fill the screen first, come back to the tab. The tab
is open, not refused**, and the sitemap now says so with the count in it.

**THE SECOND QUESTION IS THE REAL ONE, AND THE FOUNDER CHOSE THE SHAPE.** Free
gets ONE real comparative layer - this month against last - and 3 / 6 / 12
months, the trend list and the export stay Pro. Three things change on node
5.12.4 and nowhere else:

  1. **A real readout arrives.** "Your monthly total is $192.90 a month, the same
     as it was in June." A true fact about their own money, before they are asked
     for anything.
  2. **The frame stops being empty.** It draws the two months Free is allowed to
     draw. Block 8 used to put five category words under an empty frame as the
     honest preview; **two of the person's own months carrying their own total is
     more theirs than five category words**, so the preview is now the thing
     itself at the size Free gets.
  3. **The range moves into the lock.** Three inert controls at the top of a
     screen are the first thing a free person meets and they do nothing. Inside
     the card they are what they always were, the shape of what Pro opens,
     standing beside the sentence that says so.

**THE FLAT LINE IS THE TRUTH AND IT IS ALSO THE MESSAGE.** June and July are both
$192.90, so the free plot is level. That is not a weak demo, it is this product's
own job said in one picture: nothing moved, and you are fine. The month it DID
move - May to June, when ChatGPT Plus arrived - is exactly what Pro's three-month
range shows, so the gate sells the thing the free view makes you curious about.

**WHAT THIS COSTS D3, AND IT IS SMALL AND NAMED.** The paywall still sits at
depth. One comparison of the current month against the last is closer to basic
visibility than to history: Home already prints the total, and the second half of
the sentence is the only new thing. `CLAUDE.md` carries the amendment inside D3
and inside the Free tier sentence, and the file is back at 200 lines.

**THE GREY MOVED, WHICH IS RARE AND IS WRITTEN WHERE IT MOVED.** This is a
STRUCTURE change to `wireframes/history-trends-locked.html`, which is only legal
by a founder's decision written into the file it changes. The whole argument is
in that file at the block it changes, and the coloured twin carries a short
pointer to it, so the pair still differs by styling only.

**Verified.** `rollout12.cjs`: 0 violations, the pair still 55 and 55. The free
chart's cursor works with two points: hovering the right half reads "$192.90 Jul".

**Ground:** the founder's two questions. What the pass is about: **"should this
get a tab" is almost never answerable before "is there anything behind it"**, and
the honest order is to fill the room before you put a door on it.

---

## 2026-08-18 - D-PLOT: petrol gets a fourth job, and the wash under the line fades

The founder, on the finished interactive chart: **"да стало получше, давай теперь
черним поменяем на брендовий, чуть градиентов добавим"**. That is a decision only
they could take, and it was left open for them two commits earlier.

**WHAT WAS REFUSED, AND BY WHOM.** The plotted line was `--text-body`, and three
places carried the same refusal in the same words: `chart-placeholder.css` since
stage 07, `tokens.css` at `--plot-area`, and the component's page. Petrol is spent
inside a screen's content on the primary action, the current selection and the
trust line, and a data line would be a fourth claim on the one raised voice this
system allows. **The refusal was right.** A builder may not lift it; the founder
is the only person who can, and the backlog row that carried it said exactly that.

**IT SURVIVES THE RULE IT AMENDS, AND THAT WAS THE TEST.** The One Voice Rule's
real content is "a screen with two petrol objects competing for the eye has
already failed". A fourth JOB is not a fourth PLACE: a screen that carries a
plotted line carries exactly one, and **no screen in the product carries a plot
and a filled action inside the same zone** - `history-trends` puts its only
filled button below the trend list, and the Pro gate has no line at all. Counted
rather than assumed: 1 element, 1 screen. The cursor's vertical rule stays
`--line-container` for the same reason: it is neither the line nor the number a
person reads off it.

**THE VALUE HAS A NAME.** `--plot-line` (`--petrol` / `--petrol-dark`), read four
times: the line, the cursor's dot, the value in the readout card, and the fill of
the wash under it. `--plot-area` changed from `--stone` to `--petrol-tint`,
because a neutral ground under a coloured line stopped making sense the moment
the line stopped being ink. Measured on the frame it lies in: the line **5.78:1
light and 6.15:1 dark**, the wash 1.10 and 1.08, which is decorative by decision
exactly as the placeholder fill is.

**THE GRADIENT IS A MASK AND NOT AN SVG GRADIENT.** A `<linearGradient>` lives in
`<defs>` and is referenced by id, so every screen carrying a chart would carry a
copy of the paint in its own markup - the exact thing this component spent a
commit removing an hour earlier - and two charts on one page would need two ids
or silently share one. A mask is one CSS declaration on a class the system
already owns: no id, no `<defs>`, no markup. **Behind `@supports`**, so the
fallback is real rather than assumed: where masking is missing the area keeps the
flat tint and the chart is the one it was five minutes before.

**2.5 AND NOT 2 ON THE STROKE**, and it is not drift: a near-black line at 2px
carries by value and a petrol one does not, because the accent sits far closer to
the recessed fill than the ink did. Half a pixel puts the line back at the weight
it read at the day before.

**Where it is written.** `CLAUDE.md`'s D-Concept names the fourth job in the
locked list - folded into that decision rather than added beside it, because the
file's own budget rule says a new rule enters by amending an existing one, and
the count is back at 200 lines. `DESIGN.md` says four jobs in two places, the
palette entry and the One Voice Rule.

**Verified.** Computed on the live screen in both themes: stroke and dot and
readout all `#1c6a76` light and `#6bb0ba` dark, the mask applied, the guide still
the neutral hairline. 9 sizes by 2 themes by 5 pages: 0 sideways scroll, 0
console errors, plot and label row the same width everywhere. `rollout12.cjs`: 0
violations.

**Ground:** the founder's sentence, and the refusal that was standing there
waiting for it. The thing worth keeping: **a rule a builder may not break is not
the same as a rule that is wrong**, and the honest form of "I think this should be
petrol" is a backlog row addressed to the person who owns the palette.

---

## 2026-08-18 - The chart answers a pointer, and three buttons become one control

The founder, third round on the same screen, with a dashboard chart as the
reference: **"нам би надо сделать его активнім, что им можно будет пользоваться,
двигать мишкой и смотреть сколько когда було затрат"**, and, fairly, **"почему ты,
если не знаешь как рисовать, не смотришь це в интернете"**. Plus two more:
**"я не понимаю, что это у нас тут вообще огромные кнопки зачем-то"** and a note
that the empty frame needs real states.

**THE REFERENCE HAD FOUR THINGS THIS CHART DID NOT.** A value axis, dashed rules,
a hover readout and a marked point. It has all four now.

**THE GRIDLINES LEFT THE MARKUP AND BECAME THE FRAME'S OWN BACKGROUND.** Three
dashes drawn by the box cost nothing, are identical on every state by
construction, and put the y positions where the axis labels read them from: one
owner for 10 / 50 / 90 instead of two copies across four files. Dashed rather
than solid is the whole difference between a scale and a set of bars.
`background-origin: content-box` keeps them out of the axis gutter, and a
background COLOUR still paints the whole padding box whatever the origin says.

**THE VALUE AXIS APPEARS ONLY WHERE THERE IS SOMETHING TO LABEL**, through
`:has(.yaxis)`: a gutter of empty space beside a frame with nothing in it is
worse than no gutter. **A bug caught before it shipped:** the gutter was declared
on `.chart` and the label row is its SIBLING, so the row's own
`var(--chart-gutter)` resolved to nothing, the declaration was dropped as
invalid, and the months sat 40px left of the points they name. A custom property
inherits downward and never sideways. It is declared on `.app`.

**THE CURSOR IS BUILT BY behaviour.js AND NEVER BY THE MARKUP.** With no script
the screen is a plot, its months and its axis, and `role="img"` still describes
it. The script adds a layer, and only where the box carries `data-points`. It
also **recomputes the path from that same array** and writes it back over the
authored one, so the curve a person hovers and the number the card shows cannot
disagree: measured, the generated `d` is character-for-character the authored
one. Arrow keys, Home, End and Escape work; the box takes `tabindex` from the
script rather than the markup, because an element that can be focused and does
nothing is worse than one that cannot.

**THE DOT IS AN HTML CIRCLE AND NOT AN SVG ONE**, which is what made the whole
thing possible. Under `preserveAspectRatio="none"` an SVG circle is drawn as an
ellipse - measured, 23 by 13 at a 1140 box - and `vector-effect` fixes a stroke's
width, not a cap's shape. A box outside the SVG is stretched by nothing:
measured, **10 by 10 at 390 and at 1440**. The card flips under the point when
the point is high, because the frame clips, and is clamped horizontally.

**THREE BUTTONS BECAME ONE SEGMENTED CONTROL.** The range picker was three
separate bordered buttons at `flex: 1` of an uncapped pane: measured,
**250.67px a segment at 1440**, three 250 by 44 slabs heavier than the chart they
choose the range for. Now a recessed track, three transparent segments, no border
on any of them, capped at **24rem** - which is arithmetic: "12 months" needs about
102px a segment, three of those plus the track's 4px of padding is roughly 322,
and 24rem is the next register with air in it. Below 600 the track is 100% of the
column so a segment keeps the 44px floor. **The selection was deliberately not
touched:** it keeps `--bg-selected` and `--text-action`, because petrol on the
current selection is the second of its three permitted jobs, and lifting the
selection onto a white pill would have quietly spent that decision.

**WHAT IS NOT DONE, AND IT IS THE FOUNDER'S.** They also asked for the empty
states to be worked out properly - "пустой без подписок, если есть 1 сервис или
несколько". The chart's own empty frame is a node decision and stands: node 5.12
block 8 refuses a blurred decorative chart and asks for an honest frame with the
person's own labels. What is genuinely missing is **screen** states the IA does
not have: node 5.12's table names five and none of them is "one subscription" or
"none at all". Adding those is a wireframe and IA change, not a styling one.

**Verified.** 9 sizes by 2 themes by 5 pages: 0 sideways scroll, 0 console
errors, and the plot and its label row share a padding and a width at every one.
The track is 384 by 52 from a 600px window up and 100% of the column below.
Hover at 2% reads "$172.90 May" and at 50% "$192.90 Jun"; the dot measures 10 by
10 at both widths. Box fingerprint over all 55 coloured pages: **four pages move
and they are the four History and trends states**. `rollout12.cjs`: 0 violations,
and `yaxis` is defined in the system so the class count stays 0.

**Ground:** the founder's three sentences. And the fair one under them: when the
answer is a common object, look at how the world already draws it before
inventing a quieter version of nothing.

---

## 2026-08-18 - The trend line stops being a ruler, and June turns out not to be missing

The founder, on the same page an hour later: **"ти считаешь це гарним? сделай
нормальним и современним, а не как будто вайрфрейми ми перенесли"**. Fair. The
box had been repaired - a height that had never applied past 900, a 5.2 to 1
ratio nobody chose, a plot 6 per cent inside its own labels - and what was left
inside it was still **a dead straight segment**, which is the one shape that
always reads as a placeholder.

**IT WAS STRAIGHT FOR A STATED REASON AND THE REASON'S PREMISE WAS WRONG.**
`design/history-trends.html` carried this since stage 07: "June sits on the line
between them because the copy gives no June figure, and inventing one on a screen
about money is worse than a placeholder." The refusal is right. The premise is
not: **June is not missing, it is derivable from this same screen.** The "What
moved" list directly under the chart says **ChatGPT Plus is new since June, $20.00
a month**, and **172.90 + 20.00 is exactly 192.90**. Netflix's $2.50 is dated
Jul 28 on `subscription-detail-price-change` and has not been charged yet, so it
is not in July's total. The three monthly totals are **172.90, 192.90, 192.90**:
the total jumped when one subscription arrived and has held since. Nothing is
invented; the middle value is read off two facts the screen already states, and
it is the shape the copy above the chart calls "the shape of it".

**AND THE CURVE EASES INTO THE PLATEAU RATHER THAN TURNING A CORNER**, because a
monthly total is a level and not an event: it did not spike on a day, it stepped
up and stayed. `M0 80 C 45 80, 100 28, 150 28 L300 28`, one cubic into June's x
and flat to July's. May sits two units above the bottom gridline and the plateau
six below the top one, so the plot uses its band instead of hugging the middle.
IA node 5.12 block 5 says "the monthly recurring total across the range, one
line, no donut, no stacked categories", and this is the first version of the plot
that draws a value per month rather than two values and an interpolation.

**BUILT AND REJECTED, WRITTEN DOWN SO IT IS NOT TRIED AGAIN.** Round end dots on
the two measured months: under `preserveAspectRatio="none"` a circle is drawn as
an ellipse, and `vector-effect` fixes a stroke's WIDTH and not a cap's shape -
measured, the dots came out **23 by 13** at a 1140 box, and the zero-length
round-cap trick fails identically. A column chart would be immune to every
distortion problem and is refused by the node's own "one line".

**ONE THING IS THE FOUNDER'S AND IS NOT TAKEN HERE.** A **petrol** line would
transform this chart more than anything above. D-Concept spends petrol inside a
screen's content on the primary action, the current selection and the trust line,
and a data line is none of the three. Named, measured and left alone.

**The one copy change**, flagged for Voice: the chart's accessible name said "the
same figures as the sentence above", which stopped being the whole truth the
moment June was drawn. It now reads "Line chart of your monthly total from May to
July. It rises in June, when one subscription was added, and holds level after
it. The figures are the sentence above."

**Verified.** 14 viewport sizes by two themes by four pages: 168 below the tablet
point and 220 above it everywhere, band and label row the same width everywhere,
0 sideways scroll, 0 console errors. Shrink sweep: 0 crushed children at three
desktop sizes. `rollout12.cjs`: 0 violations.

**Ground:** the founder's sentence. What it is really about: **a refusal to invent
data is not the same as having no data**, and the difference is worth re-checking
before a screen ships a shape that says nothing.

---

## 2026-08-18 - The trend chart, and it was not ugly so much as absent

The founder, on the chart placeholder's page: **"че то мне вот это вообще не
нравится, надо сделать красиво"**. It was not beautiful. It was also, at an
ordinary laptop size, two pixels tall.

**THE 220 HAD NEVER RENDERED PAST 900.** Past the desktop point `.app` is a grid
at `height: 100dvh` and `.app > .screen` is a flex column inside it, so the
screen has a DEFINITE height and every flex child with the default
`flex-shrink: 1` is compressed to fit. A block with `height: auto` has its own
content as an automatic minimum and cannot lose anything; a block that DECLARES a
height has no such floor. Swept over all 54 coloured app screens at three desktop
sizes by setting `flex-shrink: 0` and diffing: **exactly one element in the whole
product declares a height, and it was being crushed.** On the live
`history-trends`, the chart renders **162.31px of its 220 at 1440 x 1000, 62.31
at 1440 x 900, and 2px at 1024 x 768** - where the month labels stand under
nothing at all. It depends on the window's HEIGHT, which is why five stages of
width sweeps never found it and a founder found it by looking.

The fix is in `app-shell.css` and not in the component: a scrolling pane must not
compress its children, and the same trap waits for the next block that declares a
height. `:where(.app > .screen > *) { flex-shrink: 0 }`, at specificity zero for
the same reason the release beside it is written that way.

**THE BAND HAD NO MEASURE.** With the height back it was 1140 by 220 at a 1440
window: **a 5.2 to 1 band holding one line**, next to a sentence that stops at its
own reading measure around 500. It takes `--container-page`, 780 - the measure the
shell itself hands a block between the two points, so this is the screen's own
number and not a new one. 3.5 to 1 at the cap, 3.3 at 1024. The label row takes
the same cap, because the two only read as one object while they are the same
width.

**THE PLOT AND ITS LABELS HAD NEVER LINED UP, AND THE FILE SAID THEY DID.** The
path ran `18 to 282` of a 300 viewBox, 6 per cent inside the box on each side,
while the month labels sit flush to its edges. Measured at 1440: the ends stood
**57px and 61px** from the centres of "May" and "Jul". Both `chart-placeholder.html`
and `icons.html` claimed the x positions lined up. The path runs 0 to 300 now.

**AND IT GAINED A GROUND.** A two-pixel diagonal across a wide recessed box reads
as a scratch on the paper. The area is the same path closed to the foot of the
frame, filled with a new role `--plot-area` (`--stone` light, `--stone-dark` dark,
1.09 and 1.08 against the frame it lies in). It asserts nothing the line does not
already assert, which is the condition it had to meet: **June still has no dot and
no vertex of its own**, because the copy gives no June figure and inventing one on
a screen about money is worse than a placeholder. Round end dots were built and
measured and **rejected**: under `preserveAspectRatio="none"` a circle is an
ellipse, and `vector-effect` fixes the stroke width and not the cap's shape.

**THE PAINT LEFT THE MARKUP.** Every colour on this plot was an SVG presentation
attribute on a product screen - a screen carrying a style of its own in the one
place `rollout12.cjs` cannot see it, because it greps for `style=` and for class
names and an SVG attribute is neither. The three parts are named (`.grid`,
`.area`, `.plot`) and `chart-placeholder.css` paints them. `vector-effect` stays
an attribute: the CSS property is the newer half of SVG2 and the attribute is
supported everywhere the product runs. The gridlines moved from
`--line-container` to `--line-divider` in the same pass, because on the recessed
fill the container edge read as banding across a 1140px box; they are kept and
not deleted, since on three of the four pages they are the whole picture.

**Grey untouched, and that is the established reading of the rule.** The plot has
never existed in `wireframes/`: all four grey charts carry a string
(`[chart: monthly total, May to Jul]`), and the landing's ribbon SVG is the same
shape - the grey states the slot in words and colour draws it. So "a coloured page
may differ from its grey by styling only" is not strained here; nothing
structural moved.

**Verified.** 14 viewport sizes by two themes by four pages: the box is 168 tall
below the tablet point and **220 above it at every one**, the band and the label
row are the same width at every one, 0 sideways scroll, 0 console errors. The
shrink sweep now reports **0 crushed children** at 1024 x 768, 1440 x 900 and
1920 x 1080. Box fingerprint over all 55 coloured pages: **four pages move and
they are the four History and trends states**; at 360 only one moves, by two
boxes, which is the path going edge to edge and the area arriving.
`rollout12.cjs`: 0 violations, and the three new SVG class names are defined in
the system, so the "classes the system does not define" count stays 0.

**Ground:** the founder's sentence. What the pass is really about: **"it does not
look good" is worth measuring before it is worth restyling.** The complaint was
about taste and three of the four things under it were arithmetic - a height that
never applied, a ratio nobody chose, and an alignment the documentation asserted
and the geometry denied.

---

## 2026-08-18 - Seven sentences flush on the block under them, and a row filed under the wrong gap

The founder, still on the paywall: **"нам би еще отступы покрутить би"**, with a
picture of the context line sitting on the top edge of the plan row. One look,
and the instrument turned it into a corpus.

**THE MUTED LINE DECLARES A TOP MARGIN AND NO BOTTOM.** That is exactly right for
the job it usually has - a footnote hanging under the block it explains, with
nothing after it - and wrong for the other job the same markup does: a line of
context standing BEFORE the thing it introduces. The last block on a screen and
the block before the offer are the same element in this system.

**COUNTED, NOT GUESSED.** Sixteen of these lines stand as a direct child of a
screen across the 54 coloured app pages: **twelve are last** and four are
followed by something, and all four measured **0px** at 390 and at 1440 - "Saved
as you go" sitting on "See your subscriptions" on `add-subscription`, the same
shape on `history-trends`, a muted line on a quiet line on
`upgrade-current-plan`, and the founder's own on `upgrade`. The same sweep found
three more one level down, inside `.card`: the two consequence sentences on
`connections` and the reconnect sentence on `connections-reconnect`, each with
the button that carries it out sitting on the sentence's last line.

**TWO STEPS, BECAUSE THERE ARE TWO HOSTS.** 24 at screen level, which is what
`.grid` already carries under itself and what `app-shell.css` gives the screen's
action row above itself; 16 inside a card, which is the card's own padding and
its internal rhythm. The card's own evidence agrees: of the five action rows
inside a card, the two that do NOT follow a muted line already stand at 24 and
16. `:not(:last-child)` is what leaves the twelve footnotes untouched.

**AND IT CANNOT DOUBLE IN THE FLEX COLUMN**, which is the trap this repo has an
open row about. Measured before the change: **all seven next siblings compute
`margin-top: 0px`**, so there is no second margin for this one to add to at
either width, and the result is identical at 390 and 1440.

**THE PLAN ROW WAS FILED UNDER THE WRONG HALF OF grid.css's OWN AXIS.** The door
row's block states it in one sentence: "the axis is the child's WEIGHT: two whole
bordered cards of equal standing take air, six chips do not", and takes
`--space-16` on that ground. The plan row is THREE whole bordered cards of equal
standing, each 293px wide, and it was taking **the 8px this file gives six
chips**. Its bottom margin was a third value too: the base carries 24 under a
grid, the door row takes it back to 0 because it has a host, and the plan row had
16 with "Maybe later" standing under it. Both were carried "byte for byte from
before the fold", which is how a number survives without ever being chosen. Gap
to 16, margin to 24, and the caps follow: the row 56rem to **57rem**, the screen
58 to **59rem**. The card is **293.33 either way** - the whole change is air
between cards.

**Verified.** Zero text-to-surface pairs under 16px remain anywhere in the
coloured corpus that are not a declared value (the five `.gate` pairs at 8 and
the loading skeleton at 8 are chosen). All seven repaired pairs read exactly 24
or exactly 16 at 390 and at 1440. Box fingerprint over all 55 coloured pages at
both widths: **exactly six pages move, and they are the six the sweep named**.
The wrap threshold on the plan button moves 897 to 913 with the wider gap, and
that number is corrected everywhere it was written. `rollout12.cjs`: 0 violations
on all 55 screens.

**Ground:** the founder's sentence, and this file's own rule that a value changes
by a named decision. What the pass is really about: **a margin written for one of
an element's two jobs is silent on the other**, and the only way to find that is
to sweep the corpus for the distance rather than to read the rule.

---

## 2026-08-18 - The paywall: three prices on two lines, and a cap that answered the wrong string

The founder, on `design/upgrade.html`: **"нашел проблемную страницу, выглядит не
очень"**. Three defects, and two of them turn out to be the same mistake this
week has now produced three times: a correction written inside one arrangement
instead of inside the component.

**THE PRICES DID NOT START ON ONE LINE.** Only the yearly card carries a "Best
value" badge, the badge was a block in the flow above the price, so `$69` stood
**32px below** `$7.99` and `Lifetime` at every width from 768 to 1920 - on the
one screen whose whole job is a comparison between three numbers. The answer had
been written on 2026-08-15, in `landing-plan.css`, complete with the reasoning
for all three arrangements it tried and a quotation of `plan-option.css`'s own
`position: relative` ("the day" the anchor was needed). It went into
`.landing .lp-plan` and the app's card kept the defect. **So the flow height is
now the component's rule and the place is the host's:** the chip is out of the
column with `margin: 0` in `plan-option.css`, the landing keeps its straddle,
and this host puts it in the top right corner. Corner and not top edge on the
axis argument the landing itself made: a centred card has no corner to belong
to, a left-aligned card in a row of three would read a straddling badge as a
label for the row. Measured: badge 66, `$69` 60.41, narrowest card content 201,
so 74.6px of clear air at the tightest width in the product.

**THE BUTTON LABEL WRAPPED INSIDE THE CAP THAT WAS WIDENED BECAUSE IT WRAPPED.**
`app-shell.css` states stage 07's ground in one sentence: at 620 the three cards
"were crushed to 185px each and both the button label and 'Everything in Tendd
Pro' wrapped", so the screen went to 760 and the row to 720. Measured now: the
eyebrow needs **181.23** and had 201, so it fits; the widest button label,
"Start Tendd Pro - $7.99 a month", needs **248.78** and had 201. **The
arithmetic had been done against the eyebrow.** The label went on taking two
lines, with "year" alone on the second, at every width from 768 up, for as long
as the cap existed. Recomputed from the label: 248.78 + 32 of card padding + 2 of
border = 282.78 a card, three of those and two 8px gaps = 864.34, and 56rem (896)
is the first register at or above half a `--space-16` of slack - slack being the
point, because a fallback font must not cost the one line the cap buys. The
screen follows at 58rem. **In rem and not px**, which the 720 was: a cap measured
off a string has to grow with the string.

**AND THE ROW STOPPED COUNTING ITSELF.** `grid.css` was arguing both sides of one
question forty lines apart: stage 10 folded the plan row into the fluid family
("nobody chose three"), and the same file defends `repeat(3, 1fr)` for the same
row on the landing ("three is content and not a fit question"). The second is
right, and it is the door row's argument word for word: D4 names two prices and
the third card is the lifetime plan. It was dormant only because the cap was too
low to expose it - at a 728 pane `auto-fill` gives 3.37 and rounds to three, but
at 896 it gives **4.14: four tracks, the last one empty**, and three cards
shrunk to 218. The declared count cannot make that mistake at any cap and
changes nothing at the old one.

**WHAT IS STILL OPEN, AND IT IS THE FOUNDER'S.** Below a **928px window** the
label still wraps: the cap is a ceiling, so between the row's 760 container point
and the window where it binds, the cards are narrower than 282.78. Measured after
the change, the wrap stops at **897**. Closing the band needs either a shorter
label - which is an interface string, owned by `voice/docs/microcopy.md`, where
"Start Tendd Pro - $69 a year" and "Start Tendd Pro - $7.99 a month" are both
inventoried - or a stacked arrangement inside the band. Neither is the builder's
to take.

**Verified.** The whole coloured corpus fingerprinted at 360 and 1440, 55 pages:
**one page differs at either width**, `upgrade.html`, and the landing's plan row
is byte-identical. Price rows 0px apart at every three-column width from 760 to
1920. Sideways scroll swept at every integer width from 320 to 1920 on the
changed screen: none. `rollout12.cjs`: 0 violations on all 55 screens, and no new
local width threshold, because this change adds no query at all - two caps and a
count.

**Ground:** the founder's sentence, and CLAUDE.md's rule that a value changes by
a named decision carrying its origin. The third instance this week of the same
shape, and worth naming as such: **a correction is only as wide as the selector
it is written under.** Written under `.landing .lp-plan`, under
`@container story (min-width: 60rem)`, or under a number derived from the wrong
string, it is true of one arrangement and silent everywhere else.

---

## 2026-08-18 - The stage stops dissolving, and the fix for it was three days old

The founder, on a phone, with a screenshot of a page faded almost to nothing:
**"уберем цей момент что типа оно так вот делает, исчезает, а пускай остается, а
то пустой экран очень странно выглядит"**. It is word for word the same decision
they made on 2026-08-15 - **"в конце давай не делать исчезновение всего каскада,
а просто продолжим скролл дальше"** - and that one had been implemented. It had
been implemented **inside `landing-orbit.css`'s `@container story (min-width:
60rem)`**, so it reached the desk and nowhere else, and the phone went on running
the shared component's fade for three days.

**MEASURED BEFORE THE FIX.** The pin's used `animation-name` was `none` at 1024,
1280, 1440 and 1920 and `sout` at 320, 360, 390, 414 and 768. At 390 x 844 the
stage reached opacity 0 at scroll 1990 while the top of "How Tendd works" was
still 816px below the fold: **812px of scroll, one whole viewport, showing an
empty page**. At 768 x 1024 it was 992. That is what the founder photographed.

**THE PREMISE WAS WRONG, NOT THE WIDTH, WHICH IS WHY THE FIX IS A DELETION.** The
fade was added on the reading that the last quarter of the pin held a still frame
and the fade could carry the hand-off to the section after it. There is no still
frame: past `contain 100%` the sticky releases and the stage travels up out of
view under its own weight while the next section comes in behind it. The fade was
not filling dead scroll, it was emptying live scroll. So the pin now carries no
animation at all, at any width - out of `landing-story.css`'s timeline group and
out of its reduced-motion kill list, both of which had nothing left to cancel -
and `landing-orbit.css` keeps neither the rule nor the `--ease-leave` curve that
sat beside it, a timing function that had been shaping nothing since the day it
was written.

**AND THE DECISION MOVED TO THE COMPONENT THAT OWNS THE PIN.** It was written in
the candidate arrangement, which is one of the story's two arrangements, so it
could only ever be true of one of them. `.storypin` is declared in
`landing-story.css`; the rule about what `.storypin` does belongs there. Related:
`.lp-story` without `.lp-orbit.fromcircle` exists on no page in this repo, so the
shared fade had in fact been running on exactly one surface, the phone, of the
only two pages that use the component at all.

**Verified.** Nine sizes from 320 to 1920: the pin's `animation-name` is `none`
and its range `normal` at every one, and the section's height is unchanged at
every one. Past the release, at 390 x 844, 768 x 1024 and 1440 x 900, **the pin's
bottom edge and the next section's top edge are the same number at every scroll
stop** - no gap and no overlap. Fourteen viewport sizes by two motion
preferences, walking the whole page: 0 sideways scroll, 0 console errors, and the
pin never below opacity 1.00 anywhere. Every other animated element on the stage
still reads `--story` with `both` at both 390 and 1440. `rollout12.cjs`: 0
violations on all 55 screens.

**Ground:** the founder's two sentences above, and CLAUDE.md's rule that a fix
goes to the component and not to one screen. What the two of them together say,
and what this is the third instance of in a week: **the width gate is where a
correction goes to die**. A rule about BEHAVIOUR written inside a query about
LAYOUT is true of one size and silent everywhere else, and it is silent in the
direction nobody screenshots.

---

## 2026-08-18 - The story leaves the width gate, and a 24px gap that was 0 on every screen

Two founder notes in one pass, and they turn out to be the same mistake twice: a
rule that reads correctly in the file and never once did what it says on a
screen.

**"АНИМАЦИИ НА МОБИЛКЕ ОЧЕНЬ ДАЛЕКИ ОТ ОРИГИНАЛА", AND THEY WERE.** The phone got
the stage yesterday and ran it with the SHARED keyframes: a row folding away, a
badge crossfading, a total crossfading, a card appearing. The desk ran
`landing-orbit.css`'s own set, and that file's own page calls the shared four
"the entrance that always reads as cheap". The gate at 60rem was holding two
different kinds of rule and nobody had separated them: the **spread**, which is
geometry in `cqw` and a deck of fourteen overlapping plates, and the **story**,
which is what the objects do.

**SEVEN RULES CAME OUT OF THE GATE AND THE DECK STAYED IN.** The window leaving
out of focus (`ovanish`), the promise's exit curve, the heading's arrival
(`sheadin`), the cancellation (`spart` - goes quiet, turns its badge, HOLDS for a
fifth of the beat so that "Cancelled" can be read on a line that is still there,
then lifts five rem out of focus while its height collapses), the badge's turn
with a scale (`schipin`/`schipout`), the four totals and four counts ROLLING
rather than crossfading, and the reason cards gliding in. Not one of them needs a
width, and `sglide`'s own `--sglide` is already zero below the side point, so
that keyframe set had been written for the narrow case and had simply never
reached it. What stayed behind the point is the deck itself: `sfall`'s three
promotions, `pdrop`'s fourteen-plate cascade and the depth ramp they read.

**AND MOVING ONE OF THEM FOUND A RULE DECIDED BY SOURCE ORDER RATHER THAN BY
ANYBODY.** The window's rule inside the gate said `animation-name: ofold` and was
overruled twenty lines later by `ovanish` at the **same specificity**, so what
the desk actually ran was `ovanish`. The moment `ovanish` moved above the gate to
reach the phone, the order flipped and the desk went quietly back to `ofold` -
caught by the fingerprint, which read `ofold` at 1024 where it had read `ovanish`
and put 4px of movement into the marquee under it. The name has one owner now and
the gated rule states the only thing genuinely different at the desk: **when**.
Measured after: the desk differs from yesterday's HEAD by **2513 records of
10 725**, every one a marquee chip, its mark or its price, moving in `x` alone -
under the noise floor of running the same code twice.

**"С РАССТОЯНИЯМИ ОТ ТЕКСТА ДО БЛОКА СЕЙЧАС В ПРИТИК", AND IT WAS 0px AT EVERY
WIDTH.** `landing-facts.css` declares `.fdemo { margin-top: var(--space-24) }`
and the very next rule gives `:last-child` an `auto` top margin. The proof is the
last child in all three cards that carry one, so the 24 was overwritten every
time - and an auto margin in a flex column is whatever **free space** is left. A
card exactly as tall as its contents has none, so the used value was zero. Read
at nine widths from 320 to 1920: **0px on all three cards at every one of them**,
since the day the rule was written. It survived because past the desktop point
two of the three put their proof BESIDE the text, where there is no seam to look
at.

**AN AUTO MARGIN CANNOT CARRY A MINIMUM, SO THE MINIMUM COMES FROM THE OTHER SIDE
OF THE SEAM.** The sentence pays it, `.lp-fact:has(.fdemo) > p`, and the proof
keeps the `auto` that pushes it to the floor of a card stretched by its
neighbour: whichever is larger wins, which is what the two rules together were
always meant to say. Scoped with `:has()` because the one claim with nothing to
show ends on its sentence, and given back inside the desktop block where the
proof stands beside the text. Measured after: **24px on all three cards from 320
to 760**, the two-column arrangement identical, and a sweep of the whole public
page for a paragraph sitting under 12px from a bordered or filled block below it
returns **0 pairs** at 390 and at 1440.

**THE SENTENCE BOTH HALVES SHARE.** A declaration is not a distance. `24px`
written where a later rule can replace the property, and `auto` written where
there is no free space, both read as intent in the file and measure as nothing on
the screen - and neither can be caught by reading the CSS, only by measuring the
gap.

---

## 2026-08-18 - The phone runs the same stage as the desk, and the release that stopped it had never fully applied

Founder, on a screenshot of the story section on a phone: **"ты какую-то ерунду
делаешь, посмотри, мы не можем сделать такую же идею, как и на десктопе?"** We
can, and it needed no new choreography: the narrow arrangement of the stage was
already written in `landing-story.css` and had never once run.

**WHAT THE SCREENSHOT ACTUALLY SHOWED, AND IT IS ONE LINE OF CSS THAT COULD NOT
MATCH.** The block that released the stage under 60rem opened with
`.landing .lp-story.fromcircle { min-height: 0 }` written inside
`@container story (max-width: 59.99rem)` - and `.lp-story` is the element that
DECLARES the container named `story`. A container query is answered by an
ANCESTOR container, so a rule on the container itself, asked of its own
container, matches nothing and is dropped in silence. Every other rule in the
block addressed a descendant and landed. Measured at 390 x 844: the pin released
to `position: static` with 1529px of content, while the section kept the 320svh -
**2701px** - it had reserved for a stage that was no longer running. **1172px of
nothing**, one blank screen, at every phone width, for as long as the release
existed. The three reason cards stacked in one cell with no clock to show them
one at a time, and the last of them lay across the live list. That is the picture
the founder photographed.

**THE ONE NUMBER THAT MADE THE RELEASE LOOK NECESSARY, AND IT WAS FIXABLE.** The
release's own comment said the figures were pushed off the bottom of the stage at
360 x 740, and that was true: the promise and the heading share one cell, so laid
out in the head row the head is **547px of a 780px stage** and the list gets 97.
On a phone the promise fills the pin instead of taking a row in it, on the page's
own ground, and lifts away at 18% to uncover a stage that is already laid out.
Same `sup`, same range, same beat as the desk. The head row is then the heading
alone and the arithmetic is ordinary: 126 of head, 62 of figures, two gaps of 24,
544 left for a list that is 460 tall.

**THE HEAD'S CHOREOGRAPHY WAS NOT THE SPREAD AND HAD BEEN GATED WITH IT.** The
60rem gate in `landing-orbit.css` exists for absolute placement measured in
`cqw`, which is meaningless on a phone. The promise trading places with the
heading is one cell and two animations; it costs nothing at any width. Six rules
moved out of the gate, the spread's own placement and the figures' climb to the
top band stayed in.

**AND THE SEPARATE MOBILE ACT WENT.** A second, smaller piece of choreography had
been written for the column the release left behind - every block rising on its
own `view()` timeline. It was the honest answer to the layout that existed. Two
acts for one section, each undoing the other's placement, is how the swap ended
up stacked by one and unstacked by the other in the same breath, so it was
deleted rather than re-tuned: everything it animated is animated by the stage's
own clock now. `mrise` and `mpose` went with it, and the system's keyframes are
recounted by script at **39 in `components/` and 40 in `design/system/`**.

**TWO DEFECTS THE PORT ITSELF CREATED, BOTH FOUND BY SCREENSHOT AND BOTH CLOSED.**
The three cards' ranges overlap by six points and then six again, which is right
when they are three boxes on three parts of the stage and a smear when they are
one cell: "Clear, never judged" was readable through "Everything in one place".
The windows are adjacent below 60rem, 25 to 43 and 43 to 61, and the second most
visible card now measures **0.000 at 121 scroll stops on each of six phone
sizes**. And a card is a surface, so a fill at half opacity is a window: it
arrives over live rows here, where at the desk it arrives over the page's margin.
The strip it lies in takes a scrim of the page's own colour, drawn on
`.storyasides` because that box is the card's cell and does not fade with the
cards in it. **Not on the swap**, which was the first attempt and was wrong by
43px: a mask there fades the round window's bottom too, the window being centred
in the same box with its lower edge 101px above the floor. `--scardslot` moved
from the list to the pin so a sibling can read it - one line, same value.

**WHAT IS UNCHANGED, MEASURED.** The desk: every element of the section
fingerprinted at five widths from 1024 to 1920 by five scroll positions, 10 725
records, and **every differing record is a marquee chip, its mark or its price,
differing in `x` alone**. The marquee runs on a wall clock, so running the same
code twice differs by MORE records than the change does - 4738 against 2763.
Nothing else in the section moves by a pixel at any desk width. A short screen:
`@media (max-height: 42.5rem)` still lets the stage go where four rows, a card
and two figures do not fit, and being a `@media` its own `min-height: 0` reaches
the section and works - **1px unused at 390 x 640** against 1172 before. Reduced
motion: the same, and the promise stays in the flow there.

**AND THE RULE THAT COMES OUT OF IT.** A rule that only makes sense while the
stage is running has to ASK whether the stage is running, rather than be switched
off afterwards by whoever remembers. The promise's placement is written inside
both releases as conditions - not reduced motion, not a short screen - because
the releases are declared above it in the same file and could not have undone it
by cascade.

---

## 2026-08-17 - The pair of figures becomes one sentence on a phone, after two fixes that were both right and both not the defect

Founder, on the third look: **"та ничего не менятся, как было так и осталось"**,
with a screenshot that DID show both previous fixes. Asked to choose, they picked
**one line under the list**.

**THE TWO FIXES BEFORE THIS ONE WERE REAL AND NEITHER WAS THE DEFECT.** The first
gave the block one alignment instead of two; the second gave each column the width
its content actually wants, and the label went from two lines to one, the caption
from three to two, the block from 127px to 92. Both are measured and both hold.
**And the block still read wrong, because what was wrong with it was not
typography: it is TWO OBJECTS.** A count in one column and a total in another,
floating on the canvas between a list and a card, with nothing saying they belong
to each other or to the list above. On the wide stage they are annotations pinned
to two corners of one picture and **the picture supplies the relation**; on a phone
there is no stage, so the relation has to be in the sentence.

**SO ON A PHONE THEY ARE ONE SENTENCE.** `14 subscriptions · $192.90`, then `a
month, for what you have signed up for`, then `EXAMPLE, NOT YOUR DATA`. One flow,
full width, left aligned, 102px.

**NO NEW STRING.** Every word is the one the markup already carries, in the order
it carries it, and the separator is a middot drawn by CSS, which is punctuation
rather than copy. The founder's sketch reads "$192.90 a month", which would want
the caption shortened; that is a second edition of a line with one owner, so it is
a Voice decision and is reported rather than taken.

**A SENTENCE NEEDS ONE PARENT TO FLOW THROUGH, WHICH IS THE WHOLE OF THE MARKUP
CHANGE.** `display: contents` on the total was tried first and it is the wrong tool
by one level: it promotes the total's three children into the GRID, not into the
count's row, so they came back as grid items and overlapped. `.ofigs` is a flow
root and nothing else: no copy, no meaning, no rule of its own above the point.

**AND THE STACK HAD TO GO INLINE, NOT ONLY THE FIGURE INSIDE IT.** Setting
`display: inline` on the four values left the count reading as two lines, 41px
tall, because `.storystack` is a GRID and a grid is block-level: the figure was
inline inside a box that still took the whole line, so "14" sat above
"subscriptions" exactly as before. `inline-grid` keeps the four-value countdown
intact and lets the sentence run through it.

**A WRAPPER ADDED FOR ONE LAYOUT HAS TO VANISH IN THE OTHER, NOT MERELY STOP
STYLING, AND THAT COST 242px OF SIDEWAYS SCROLL TO LEARN.** Reset to `display:
block` at the desk, `.ofigs` is still a box in the flow, and the two absolutely
placed figures shrink-to-fit against a different available width: the total came
out **64px wide with its label on three lines and its caption on five**, and the
page scrolled **185 at 1024 and 242 at 1280**. `display: contents` takes the
wrapper out of the box tree entirely and the wide layout is the one that shipped.

**AND A RESET HAS TO NAME THE VALUE IT IS RESTORING.** The first desk reset wrote
`font-size: inherit` on the amount, which is not what the amount had: it took it to
the block's 16px and the total's stack read **17px tall against 34**. "Whatever the
parent says" is a different value from "what this element said before somebody
overrode it". The value is `landing-story.css`'s own `.storystack .figure`.

**VERIFIED, ELEVEN WIDTHS FROM 320 TO 1920.** On a phone the label is one line at
every width and the caption one at all but 320, where it is two; 0 sideways scroll
everywhere. **At the desk the block is identical to HEAD to the pixel**: the count
89 by 55 and the total 271 by 74 at 1024, 1280, 1600 and 1920, the figure back at
`--type-figure`, and 0 sideways scroll. The stage ledger reads 0 violations on all
55 screens with `.ofigs` defined by the system.

---

## 2026-08-17 - Two mobile defects on the public page, and both are one shape written for a wide layout and read on a phone

Founder, on a phone, twice: **"баг, бегают цифирки, такого не должно быть, давай к
правому краю"** and **"тут тоже на мобилке не понятно что и зачем, как баг
выглядит"**. Neither is a rendering fault. Both are a rule that is correct in the
layout it was written for and wrong in the one it also reaches, which is the third
time this file records that sentence today.

**THE FIGURES RAN DOWN THE LIST, AND IT IS THIS FILE'S OWN SENTENCE READ OVER THE
SET.** `.sline` was a flex line, so the state cell was sized by its own label and
nothing else: `Active` measures 45 and the `Cancelled` stack 62. The state is the
LAST item, so its right edge is the row's and **its left edge moves**, and the
amount sits immediately before it: measured at 320, the price stood at **two
different offsets from its own row's right edge, 78 and 61**, so fourteen figures
read as a column that wobbles. `landing-story.css` has said since it was written
that the swap cell is sized by the wider of its two labels so that nothing to its
left moves when the state changes. That is true within one row and was never true
across the list.

**SO THE ROW IS A GRID AND THE LAST TRACK IS A NUMBER.** 62px, the measured width
of the widest state cell in this list. Fixing that one track fixes the amount
**without touching the amount**: the price is still sized by its own digits, and
because the track after it no longer moves, every right edge lands on one line.
`tabular-nums` was already doing its half and had nothing to align against.
Measured after: **one distinct offset at 320, 360, 390, 430 and 760**, against two
before, and **the same eight names ellipsise before and after**, so the fixed track
cost the name column nothing. The widest state cell reads 62 on a phone and 60 at
the desk, and **0 of 14 rows have the state overlapping the amount at any of seven
widths**.

**THE TWELVE DISTINCT EDGES PAST 1024 ARE NOT THIS DEFECT AND WERE NOT FIXED.**
The story stage scales each plate on a ramp, `--pscale` per `nth-child`, so the
rows are deliberately different widths there. Before this change they read 99, 74,
71, 68 and down; after, 97, 87, 83, 80 and down. It is the ramp in both cases.

**AND THE PAIR OF FIGURES ON A PHONE HAD ONE BLOCK IN TWO ALIGNMENTS.** The count
and the total sit in two columns of 143px on a phone, which is deliberate and has
its own note. The total kept the `text-align: right` it wears in the WIDE layout,
where it is pinned to the far corner of the stage and reading it inward is
correct. At 143px that turns its label into two ragged-left lines and its caption
into three, standing beside a count that starts at its own left edge. **Same
block, two alignments, and what the eye reads is not a pair but breakage.**

Both now start from their own left edge, and the alignment comes back at 60rem
with the corner placement that earns it. It is said in two properties, `text-align`
on the block and `justify-items` on the stack of values, because the figure is a
grid of four and the label and the caption are paragraphs: **written once they part
company at the one width nobody re-reads**, which is how the base came to carry a
wide layout's alignment in the first place.

**AND ALIGNING IT WAS NOT ENOUGH, WHICH THE FOUNDER SAID IN FOUR WORDS: "тут
что-то ничего не поменялось на мобилку".** The alignment was right and the block
still read wrong, because the defect underneath it was WIDTH. **The pair is a
count and a total and they are not the same object.** The count is two short
words, 86px at every phone width and never more. The total is a label, a figure
and a caption, and its label alone, "Example, not your data", wants **158px** to
stand on one line. Split down the middle at 390 they get 143 each: **the count
wastes 57 and the total is 57 short**, so the label breaks in two, the caption
breaks in three, and four stacked fragments beside two words read as a block that
failed rather than as a pair.

`auto minmax(0, 1fr)` gives each of them what it is. Measured after: the label is
**one line** at 360, 390 and 430 where it was two, the caption is two where it was
three, and the block is **92px tall against 127**, which the pinned stage does not
have to find room for because that row was already the taller of the two.

**AND THE STACK ITSELF WAS CENTRING EVERY FIGURE OVER ITS OWN WORD.**
`.storystack` is a two-consumer grid, the count's figure and the total's, and its
base was `justify-items: center`: "14" sat centred above "subscriptions" and the
amount above its caption. On a phone the pair reads left to right down one edge,
and **a figure floating over the middle of its label is the one thing in that pair
that starts nowhere**. The base is `start` now. The wide layout takes it back
where it earns it, and the count's figure has carried `text-align: left` there
since the founder's mark of 2026-08-14 for exactly this reason: said then about
one layout, and true in both.

**VERIFIED**: eight widths from 320 to 1920. Amount offsets 1 distinct through
760; the total reads `left` / `start` on a phone and `right` / `end` past 1024;
0 sideways scroll and 0 console errors at every width.

---

## 2026-08-17 - A field rather than a front, one chevron rather than two, and the third step cancels

Three founder notes on one screenshot, and two of them **overturn the two entries
below**, which is why they are written here rather than edited into them.

**"мне не нравится эти волны, давай оставим одну и не как линию, а как
заполненную, такую на всю карточку круг идет". THE ANSWER IS NOT A FRONT AT ALL,
IT IS A FIELD.** Three shapes were tried in one evening: one thin ring at 0.45,
rejected as a sonar ping; two thin rings, the drop's train of fronts, rejected as
well; and now one filled circle. **A ring, however soft, draws an EDGE**, and an
edge on a white panel is a shape a person tracks - at any frame the eye has an
outline to follow, which is exactly why one ring read as sonar and two read as
ripples somebody counted. A filled circle has no edge to follow at this alpha:
what crosses the panel is a change in the ground, and the only thing that reads is
that something happened where the plus was pressed. That is what the beat is for.

**0.10 AND NOT 0.26, AND THE AREA IS THE WHOLE REASON.** The ring painted about a
fifth of the circle; this paints all of it. Holding the same apparent weight over
five times the area is roughly a fifth of the alpha, and 0.10 of `--bg-action` on
paper is about six values per channel at the peak: a tint a person feels rather
than sees. **`--ease-arrive` is the one thing that survived both rewrites** - the
circle is thrown out by the press and the surface takes it back - and
**`--ease-travel` is back to one consumer**, because its reason was about a FRONT
crossing a distance and a field has no front.

**"и мне кажется этот логотип поломался" AGAIN. ONE CHEVRON AND NOT TWO.** The
entry below corrects the Strava mark from a rhombus to the real pair, and the real
pair was rejected on sight the same evening. It is right at 150px and wrong at 36:
the lower element is **fourteen pixels of white that the eye resolves as a separate
shape hanging under the upper one** rather than as part of one mark. So the tile
keeps the silhouette Strava is known by and drops the element that only works
large. **A mark is not correct in the abstract, it is correct at the size it is
seen**, and every one of these fourteen is seen at 36. That sentence is the one
worth carrying forward when the set is finally sourced from press pages.

---

**"по принципу как второй, но сложнее: нам надо показать, что мы отменяем
нетфликс, он canceled становится и уходит вверх, и все двигается вверх, и так по
кругу". THE THIRD STEP CANCELS NOW.** It is step two's machinery plus one beat, and
the beat is the point: the row standing at the TOP changes state before it leaves.
The heading is *Cancel and save*, and the still picture could only ever show the
RESULT of that sentence - one row already cancelled, with nothing to say when it
became so. **The loop shows the verb.**

**THE TWO ENDS OF A ROW SHARE ONE SLOT AND WHICH IS VISIBLE IS THE STATE.** Every
row carries both its amount and its Cancelled chip now. **The chip is the one in
flow and the amount lies over it**, absolutely placed at the same right edge, and
that way round is what keeps the row's geometry still: the chip is the wider of
the two, so the space is reserved for the wider one and nothing reflows when the
state changes. The other way round - amount in flow, chip over it - would put a
chip with a background on top of the name, which is a defect wearing the look of a
bug.

**THE STATE IS FOUR PROPERTIES ON THREE ELEMENTS AND NOT ONE OPACITY ON THE ROW**,
which is this component's own oldest rule: an opacity on the row takes the
Cancelled chip down with it, and the chip is the one thing in that row a person has
to be able to read. The mark dims to 0.45, the name steps back to muted and to 400,
the amount goes and the chip arrives. **`--ease-state` and not `--ease-arrive`**,
on the register's own line: an entrance is a thing appearing, a state change is a
thing already on screen saying it heard you, and nothing arrives here.

**THE TWO ENDS HAND OVER, THEY DO NOT CROSS-FADE, AND THE FIRST CUT DID CROSS.** It
looked exactly like the bug it was not: for 180ms "Cancelled" and "$11.99" were
both half painted in the same 70 pixels, one word legibly on top of another. Two
texts sharing one slot have to take turns. Driven over the whole beat at 15ms
steps, **the highest simultaneous visibility of the two is 0.000**.

**THE DELAY IS SET ON THE ROW AND ON ALL OF ITS CHILDREN AT ONCE**, `> *`, because
`animation-delay` does not inherit and five elements that have to agree about which
beat they are in cannot be given the number five times without one of them
drifting.

**WHAT THE RESERVED CHIP COSTS, MEASURED RATHER THAN LEFT OUT: ONE 16px BAND.**
Reserving the chip's width on every row takes 15px off the name column in step
three, and at **900 to about 915** - the narrowest form of the three-column layout,
immediately above the rung - "Spotify Premium" ellipsises. Clean at every other
width from 320 to 1920, and step two clean everywhere. It is the same band the
row's 8px gap was chosen for in the first place, it degrades through the ellipsis
`.name` already declares, and the vignette is `aria-hidden` decoration. The
alternative is a shorter label for that row, which is a Voice question and not a
CSS one, so it is reported rather than taken.

**VERIFIED**: both lists driven by clock. Step three at rest is Netflix cancelled
at the top, Spotify and iCloud active, Notion off-panel; at 0.8s Netflix is
cancelling; at 2.0s it is leaving with the rest moving up and Notion entering; at
2.4s Netflix has reset off-panel and Spotify is at the top, active; at 3.0s Spotify
is cancelling. **Reduced motion asserted in the page: zero animations under either
panel, four rows `position: static` at 0, 65, 130 and 195, and step three's still
picture is the cancelled row with its chip and every other row with its amount** -
which is the markup this block shipped with. **81 widths from 320 to 1920: 0
sideways scroll, 0 console errors, 0 requests over 400.** Keyframes recounted by
script: `components/` **41**, `design/system/` **42**.

---

## 2026-08-17 - A drop rather than a ping, and the second step browses itself

Two founder notes an hour apart, and the first one **supersedes a choice the entry
below argues for**, which is why it is written here rather than edited into it.

**"давай более нежную сделаем как будто капля упала в воду". ONE RING IS A PULSE
AND TWO ARE A DROP.** Water does not answer an impact with a single edge; it
answers with a train of them, each weaker and each starting behind the one in
front. The first cut was a single band at 0.45, and read back against that brief
it was a sonar ping: correct as a wave, wrong as water. There are two rings now on
one origin, the second **360ms behind the first and at three fifths of its
strength**, which is the smallest train that reads as a train rather than as a
ring somebody drew twice. The band went from 60/78/100 per cent of the radius to
**70/82/96**, roughly half as thick and with both edges inside the circle so the
outer one feathers out instead of being cut off by the element's own box, and the
peak went **0.45 to 0.26**.

**AND THE CURVE REVERSED WITH IT, WHICH IS THE PART WORTH THE SPACE.** The entry
below chooses `--ease-travel` and gives its reason: travel is the even curve, and
an even curve stops the front covering its journey in one flash. That reasoning
was right about the flash and wrong about water. **A ring on a surface does not
travel evenly** - the impact throws it out and the surface takes it back, so it is
quick at the centre and slow at the rim, which is expo-out exactly. The flash is
answered by LENGTH instead: the ripple runs **1.08s to 3.06s** where it used to be
done by 2.34, so both rings are still spreading, faintly, under the services as
they land. **`--ease-travel` goes back to one consumer**, and the pages that
claimed it had two are corrected rather than left to be believed.

---

**"одна подписка уходит вверх, а внизу добавляется другая, будто двигаем список,
просматриваем наших подписок". THE SECOND STEP'S PICTURE MOVES NOW.** It passes
the same test the other two had to: the heading says *See it all, calmly* and the
paragraph under it is about a list a person scrolls, and the still picture showed
three rows with no reason to believe there were any more. **The movement is the
word ALL, drawn.**

**FOUR ROWS IS THE MINIMUM AND THAT IS ARITHMETIC RATHER THAN TASTE.** The panel
is a three-row window. The moment the top row leaves, the bottom slot is empty and
something has to be entering it in the same 600ms, and that cannot be the row that
is leaving. So the markup gained a fourth: **Notion at $8.00**, the canonical
dataset's own row from `voice/docs/microcopy.md`, so no string is invented. With
motion off it is clipped by the `overflow: hidden` this panel already declares,
which is what an unscrolled list looks like, and the still picture is unchanged to
the pixel. **The grey twin keeps three**, and that is deliberate rather than an
omission: the grey has no motion, so a fourth row there is a row nothing can ever
reveal, and its panel is 174px against the colour's 194 in any case. The landing
pair already carries one stated divergence, the 1120 point against 900.

**`align-content: start` IS THE OTHER HALF AND WITHOUT IT THE STILL PICTURE
BREAKS.** `.sdemo` centres its content, which is a no-op while three rows fill
194px exactly. Four rows are 260, so centred they hang 33px off both ends and **the
top row renders cut in half**. Start-aligned, the fourth simply falls off the
bottom.

**THE ROWS COME OUT OF FLOW SO THAT ONE KEYFRAMES CAN DRIVE ALL FOUR.** In flow
each row's rest position differs, so "move up one slot" is a different pair of
numbers per row and needs four keyframe blocks that have to agree with each other
forever. Absolute and left/right pinned, every row's origin is the same point, the
slots are four numbers written once, and the phase is carried by a **negative
`animation-delay`**: -6.75s, -4.5s and -2.25s are three quarters, a half and a
quarter of the cycle, so at t=0 the four already stand at slots 0, 1, 2 and below,
in markup order, with no fill mode and no first-cycle special case.

**THE SLOTS ARE -1, 64, 129, 194 AND THE -1 IS LOAD-BEARING.** Every row carries a
top hairline here, the first one included, because any of the four can end up in
the middle of the stack and a missing separator is the one thing this movement
could break. That would put a hairline at the very top of the panel, one pixel
under its own border, reading as a double rule. Sliding the whole ladder up by one
pixel clips exactly that hairline and nothing else. **The wrap is instant and
off-panel**: a row leaves at -66, its own height above the top edge, and one
thousandth of a percent later it is at 194, below the bottom edge, both outside a
box that clips.

**GUARDED BY `no-preference` RATHER THAN KILLED BY NAME, WHICH IS THE OPPOSITE OF
THE OTHER TWO MOVEMENTS AND THE REASON IS THE DIFFERENCE.** This one changes
LAYOUT and not only motion, so killing the animation alone would leave four
absolutely positioned rows stacked on one point. Under reduced motion none of
these rules exist at all. Measured with the media feature asserted in the page:
four rows `position: static` at 0, 65, 130 and 195, **zero animations under the
panel**, and the fourth off the bottom.

**VERIFIED**: driven by clock at eight moments of the cycle. At rest Netflix,
Spotify and iCloud stand at 0, 65 and 130 with Notion off-panel; mid-transition
all four are visible and moving together; at 2.4s Netflix is below and Notion is
the third row; at 8.99s the four are back where they started. **81 widths from 320
to 1920: 0 sideways scroll, 0 rows wider than their panel, 0 console errors and 0
requests over 400.** The keyframe count is recounted rather than incremented:
`components/` holds **38** and `design/system/` **39**, and the census row on the
motion page now says which of the two it is counting.

---

## 2026-08-17 - The press got an answer, and one of the fourteen marks was not approximate but wrong

Two things off one screenshot of the landing's first step, an hour after the loop
went in. **"логотип почему-то один сломался"** and **"и при нажатии хочется на
заднем фоне какую типа волну пустить в бренд цвет"**.

**THE MARK: THE OFFSET BETWEEN TWO CHEVRONS IS THE WHOLE OF THE STRAVA LOGO, AND
THE FILE HAD LOST IT.** The lower chevron carried the real coordinates, apex at
x=15.387. The upper one was a redraw with its apex moved to 13.828 from the real
10.463. That put the two on nearly the same vertical axis, and two chevrons
stacked on one axis close into a **symmetric rhombus with a notch in it**, which
is what shipped and what the eye read as "an A in a diamond". Both are the real
coordinates now; the group's transform centres the drawing's own bounds (x 3.463
to 20.537) rather than the viewBox, at a scale that puts it 36 tall in the 64
box, the same optical size as the Netflix N beside it.

**WHY THAT IS WORTH AN ENTRY AND NOT ONLY A COMMIT.** `icons.html` already
declares all fourteen provider marks approximate, and an approximation reads as a
slightly-off logo. This one did not: it read as a confidently drawn mark of
**something else**, which is the exact failure mode that page warns about for the
stock catalogue it rejected, "a brand query resolves to the nearest generic". So
the debt is not only sourcing. **Nothing in this repository can tell a wrong mark
from a rough one**: every instrument here reads a rendered page, and a rhombus
renders as cleanly as a chevron. All fourteen were re-rendered at 150px and walked
by eye the same day. This was the only one.

**THE WAVE: THE PRESS WAS THE ONE BEAT OF THE CYCLE WITH NO CONSEQUENCE ON
SCREEN.** The plus went down and came back up, the grid began filling a fraction
later, and the two read as two things that happened rather than as one causing the
other. A petrol wave now leaves the plus at the frame it is pressed and **the
first service lands inside it**: the front is still crossing at 2.34s and the
first tile appears at 1.88s. That is the same test the loop itself had to pass,
the one the four verbs were chosen under: the movement always has a cause.

**A FRONT AND NOT A DISC, WHICH IS WHAT THE WORD WAVE ASKS FOR.** A flat fill
scaling up is a colour swelling; an annulus scaling up is something travelling. It
is one `radial-gradient(closest-side, ...)` on one pseudo-element, so both edges
are feathered and the ring has no drawn outline to give it away as a circle.
**`--ease-travel` gets its second consumer**, on the register's own brief for it:
the curve for a long distance, where expo-out is "a rocket that then creeps". A
front that covers 90 per cent of its journey in the first fifth is a flash.

**`--bg-action` AND NOT A LITERAL, AND THE ROLE IS THE ARGUMENT RATHER THAN THE
COLOUR.** Petrol has three permitted jobs and the primary action is one of them;
this ripple is the primary action of that picture answering a press, so it takes
the fill role that answer already has. It is therefore a real colour in both
themes with no new token and no pair to keep. **Checked with a theme control
rather than assumed**, because these pages boot their theme from `localStorage`
and setting an attribute is not setting the theme: the ground moves
`rgb(238,243,244)` to `rgb(14,21,23)` and the wave follows the role from `#1c6a76`
to `#6bb0ba`. `DESIGN.md` puts the BRAND's petrol in the chrome; this is not the
brand appearing in content, it is the action's own ink doing the action's own job.

**THE ORIGIN NEEDS NO ARITHMETIC AND THE COVER NEEDS NO PIXEL.** The grid is
centred in the panel's content box and the panel's padding is equal on four sides,
so the content box's centre IS the panel's centre and that is where the plus is:
`50% / 50%` and a self-centring translate, with no second number that could drift
from the first. The circle is **140% of the panel's width** rather than a size,
because it must beat the diagonal of a box 194 tall and 250 to 390 wide: radius
175 against a 173 diagonal at the narrow end, 273 against 213 at the wide one, and
the margin grows with the box. The `overflow: hidden` already on `.sdemo` for the
row corners does the second job for free, clipping the circle to the panel's
rounded rectangle, so what a person sees is colour crossing a surface rather than
a disc growing on one.

**PEAK 0.45 AT ONE FRAME, DOWN FROM 0.55 AFTER ONE LOOK.** At that weight the ring
was the loudest thing in the section for a third of a second, which is a banner
rather than a beat, and this product's first principle is calm over clever.

**VERIFIED**: driven by clock rather than watched, on the time-based animations
only, because `.sdemo` also carries a scroll-driven entrance and setting
`currentTime` on a progress-based animation throws. Peak 0.45 at 1.26s, 0.08 at
1.9s with the first service landing, 0 by 2.34s with four landed. **81 widths from
320 to 1920: 0 sideways scroll, 0 frames where the enlarged plus leaves its panel,
0 console errors and 0 requests over 400**, with the overflow probe proved on an
injected 4000px box.

---

## 2026-08-17 - The first step of How it works moves, and it is the second loop this product has

Founder, with the tile on a screenshot: **"сначала кнопка по центру квадратик и
плюсом нажимается и появляются аппликейшены по очереди таким образом и плюсик в
конце потом плюсик увеличивается и снова анимация проигрывается, короче ее надо
сделать loop"**.

**IT PASSES THE RULE THE FOUR VERBS WERE CHOSEN UNDER, WHICH IS THE ONLY REASON
IT EXISTS.** Stage 11 wrote that the movement always has a cause: something moves
only where the movement says what is about to happen. The heading under this tile
says *Connect or add* and the paragraph says *add your subscriptions yourself from
400+ services*, and the still picture showed the RESULT of that sentence and never
the act. Eight tiles already there, with the one control among them reading as an
eighth logo. **The cause here is the press and the effect is the grid filling**,
which is what the block claims in words two lines below it.

**NINE SECONDS, AND 42 PER CENT OF THEM ARE THE STILL PICTURE.** From 2.97s to
6.75s all eight tiles stand exactly as the static markup draws them. That shape is
what decides whether a loop is a vignette or a carousel: the resting state has to
be the majority state, and principle 1 of this product is calm over clever. The
duration is a literal in `landing-steps.css` by the system's own rule for a value
with one consumer, the same rule that keeps the lift's 1.06 out of the register.

**THE TWO DISTANCES ARE COMPUTED FROM THE GRID AND NOT MEASURED OFF A
SCREENSHOT.** The plus is the eighth tile, column 4 of row 2, so the centre of a
four by two grid is one and a half tiles and one and a half gaps to its left and
half a tile and half a gap above it. A percentage on `translate` resolves against
the element's own border box, so `-150%` IS one and a half tiles whatever the
track computes to, and this track is `minmax(0, 56px)` and does shrink. The gap
reads `--space-16` rather than 16. Nothing in the rule knows a pixel of the
layout, and the sweep proves it: at all **81 widths from 320 to 1920** the
enlarged centred plus stays inside its panel and no document scrolls sideways.

**`translate` AND `scale` AND NOT `transform`**, because those are the two
properties `logo.css` already animates on this same element for the lift, and
written as a shorthand the two would overwrite each other. An animation outranks
the transition declared there, and these tiles have no hover host anyway: the lift
is scoped to `.door:hover` and this grid sits in a `div.sdemo.doors`.

**`animation-fill-mode: backwards` IS LOAD-BEARING AND IT IS THE WHOLE REASON THE
FIRST CYCLE IS NOT WRONG.** Each tile waits out a delay of up to 2.7s before its
animation starts, and with the default fill mode it would render its static self,
visible, for that whole time and then blink out the moment the animation began.
`backwards` shows the 0% frame during the delay, which is the hidden one. There is
no `forwards`: an infinite animation has no end to fill.

**AND THE REDUCED-MOTION KILL IS BY NAME FOR A STRONGER REASON THAN THE ENTRANCES
HAVE.** `base.css` zeroes the duration and forces one iteration, which lands an
infinite loop on its LAST frame: the plus alone in the middle and seven services
gone. **That is not a stiller version of the picture, it is a different picture
with the content removed.** With the name killed the tiles render exactly as the
markup writes them. Checked by cancelling the animations in the browser: all eight
read opacity 1, no scale, no translate.

**READ OFF THE CLOCK RATHER THAN WATCHED**, because sampling a running loop is a
race and setting `currentTime` is a measurement. The eight animations were paused
and driven to twelve moments: 0.9s the plus alone, centred, at 1.3; 1.08s pressed
at 1.08; 1.9s home with one service landed; 2.4s four; 2.97s all seven; 6.75s all
seven still; 7.92s the last gone and the plus still in its slot; **8.99s centred at
1.3 again, which is the 0% frame to three decimal places**, so the loop has no
seam. 0 console errors.

**WHAT IT COSTS, STATED RATHER THAN LEFT OUT:** it runs off screen too. There is no
CSS that pauses a time-driven animation on visibility, and `animation-timeline`
binds progress to scroll, which is a different movement and not this one. The bill
is a compositor tick on eight elements that browsers already throttle in a
background tab, against a script on a page that would otherwise need none.

**AND THE COUNT IT MOVED HAD AN UNNAMED SCOPE.** The motion census reads
"`@keyframes` in the system: 33". Recounted by script with comments stripped, that
figure counts `components/` and never said so: `components/` held 33 before today
and `design/system/` held 34, the difference being `pulse` in `base.css`. Both name
a true thing. They are 35 and 36 now, and the row says which it is counting.

---

## 2026-08-17 - Two rules written for a set, both reasoned off a subset, and both found in a picture

Founder: **"давай визуал править"**, with a screenshot of `design/path-choice.html` at a desk
width. Two defects on it, and neither is findable by any instrument this repository owns: both
pages render with no console error, no sideways scroll at any of 58 widths, no style of their own
and no class the system does not define. **Every sweep here asks whether a page is correct. A
picture asks whether it looks right, and these two only fail the second question.**

**THEY ARE THE SAME DEFECT TWICE.** A rule was written over a SET of placements and its reason
was read off a subset of that set, so the rule is right where somebody looked and wrong where
nobody did. Both files even state the reason out loud, which is what made the two findable in
minutes once the screen was measured: the wrong sentence was sitting beside the wrong rule.

**THE EXIT LINK STOOD AT 0px FROM THE DOOR ABOVE IT.** `grid.css` takes the bottom margin off
`.grid.roomy` and explains: "a door row DOES have a host: the empty block on 3 pages and the
dialog sheet on 1, and both already space it." Counted over the four door rows the product has,
the empty block hosts **two**, `connections-empty` and `home-empty`; the sheet hosts one; and
`path-choice` has no host at all. So the grid's zero met `.quiet`'s zero and "Do this later"
rendered flush against the bottom edge of the door it is the alternative to, at every width, on
the one screen the whole product forks on. **The same pairing reads 24 after a tile row and 16
after an action row**, which makes this the only distance in the product nobody had chosen.

The margin comes back from the SHELL, `.app > .screen > .grid.roomy` at `--space-24`, 0-4-0
against `grid.css`'s 0-3-0 so it wins on arithmetic rather than on import order. **Rejected:
writing it in `grid.css`.** That file's own opening sentence is "the margin is the host's and is
written here until it has a host to go to", and a block whose only parent is `.screen` has one.
`app-shell.css` already carries the identical rule for `nav.actions` four lines away. The three
placements that are inside a host keep their zero and not one of them moves.

**A 44px TARGET INSIDE A SENTENCE TORE THE FOOTNOTE OPEN.** `muted-line.css` gives the ruled
footnote's link the tap floor as an `inline-flex` box, on the stated ground that "the footnote is
a `p` whose link is the last thing in its own sentence". Read off all six placements that is true
of four and **false of `path-choice` and `data-privacy`**, where text follows the link. An atomic
inline-level box hands its height to the line it stands in, so one line box of five was 44px tall
in the middle of an 18px paragraph and the trust line read as two paragraphs with a hole between
them: **79px at 1440 where three lines of 18 and one of 44 is exactly 79, against the 53 the
leading asks for, and 97 against 71 at 360.**

**AND BEING LAST IN A SENTENCE IS STILL BEING IN ONE**, which is the half of this that was not on
the screenshot. "US banks connect through Plaid. More regions soon. [What we read]" is an inline
link in a paragraph too, and the other four placements were paying the same 26px at the foot of
the block where nobody looks. All six are one rule now: **`padding-block` on an inline element**,
which grows the hit area, paints nothing and does not enter the line box calculation at all. The
link is still 44px to a finger and the paragraph is back to its own leading.

**THE VALUE IS DERIVED FROM A MEASUREMENT AND THE FIRST DERIVATION WAS WRONG BY 3px**, which is
worth the space because it is the same class of error as the two defects. It read
`calc((var(--tap) - 1.5em) / 2)`, subtracting the LINE, and an inline box does not fill its line:
its content box is the font's ascent plus descent, 15px for Inter at `--type-meta` against a line
of 18. The links came out 41. The term is the content box, read in a browser: 44 minus 15, halved,
14.5 a side, and the hit box reads 44 exactly. **A number reasoned from the property next to the
right one is still a number nobody measured.**

**REJECTED, and it is the option the criterion itself offers.** WCAG 2.5.8 exempts a target that
"is in a sentence or its size is otherwise constrained by the line-height of non-target text", so
taking the floor off these six and writing the exemption down would have been compliant and one
line shorter. It is not taken because a 44px target that costs nothing is better than a 17px
target that is allowed. **Also rejected: naming the two shapes in the markup.** CSS cannot tell a
link that ends a sentence from one inside it, `quiet-line.css` has said so since stage 08, and the
distinction would need a class in frozen wireframe markup, which is a founder's decision and not a
fix for a spacing defect.

**VERIFIED BY BOX FINGERPRINT over all 55 coloured pages at 360 and at 1440**, animation and
transition frozen, the before pass taken off a stashed tree so the two runs differ by nothing but
the three files: **6 pages differ and they are exactly the 6 that host the ruled footnote's link**,
30 boxes at 360 and 18 at 1440. Every differing box is the paragraph losing its 26px, the link's
new position, or an ancestor absorbing the change, plus `path-choice`'s quiet line moving down 24.
**49 pages are identical to the pixel.**

**ONE THING IS FOUND AND NOT FIXED, and it is bigger than both.** Past the 900 container point
`.app > .screen` becomes a flex column, and **a flex column does not collapse margins**. Every
adjacent pair inside a screen where both siblings declare one therefore gets a bigger gap on a
desk than on a phone: measured over all 55 pages at 780 and 1024, **10 pairs on 10 pages**, 24 to
40 on six of them, 16 to 32 and 16 to 24 on the two share screens, and 24 to **48** on
`path-choice` and `sign-in`. Nobody chose any of the ten. The honest repair is a `row-gap` on the
flex column with the margins inside it deleted, which is one number replacing eleven and moves
every flow screen, so it is the founder's and it is a row in `design/kit/docs/backlog.md` rather
than a change made under a fix for something else.

---

## 2026-08-17 - Stage 12 closes, and SAME was never available to a screen inside the shell

Founder: **"давай ставим done:true"**, after the account was written and walked.

**What closed.** The screens of this stage were built across four stages and its ACCOUNT was
never written, which is the thing a stage is judged on. It is written now at
`design/rollout.html`: the corpus paired both ways (55 grey, 55 coloured, no orphan on either
side), an audit row per screen, the four-part ban re-proved on all 55 files rather than the 32 it
was last proved on, and the width column of the inventory recounted on 72 entries where stage 10
filled 60. Every figure comes from an instrument that derives its corpus from a registry rather
than from a list somebody typed, and each keeps its output beside it: `rollout12.cjs`,
`width12.cjs`, `shape12.cjs`, `fp12.cjs`, `inert12.cjs`, and `counts.cjs` extended.

**The audit correction, and it is the one finding worth more than the sixteen rows that held.**
Stage 10 wrote what a wider window SHOULD give the person on each screen, in three categories:
SAME, WIDER by grid, WIDER by air, with new behaviour nowhere. Ten of those seventeen rows had no
coloured screen to check against. Measured on the built product at a real 360 and a real 1440,
thirteen hold, **new behaviour is still zero on all seventeen**, and the four that do not hold are
one finding: **an app-frame screen cannot be SAME.** A flow screen grows to `--container-column`,
620, and stops, which is exactly what "SAME, container" meant; a screen inside the shell is handed
the pane, and past the desktop point that pane is 1220 whatever the screen would prefer.
Connections and Settings were written SAME in a table whose other seven shell screens were all
WIDER, and no instrument could have caught it because neither screen had been coloured yet. Cancel
Guide was the fourth and a different mistake: a category that contradicted its own how-column,
which already read "point 900, two columns already". The note was right.

**What was rejected.** Re-deriving the categories was not: they stand, with three rows corrected
and the reasoning printed beside them. What this stage refused is the tempting version of the
correction - rewriting stage 10's table in place so it looks as though it was always right. The
table keeps the corpus it was written against and the correction sits under it, because a record
that silently updates itself stops being evidence.

---

## 2026-08-17 - A reading measure belongs to the line, not to the box around it

The stage-12 width sweep, 55 pages by 58 widths, found **seven prose blocks reading past the
system's 52ch measure**, four of them on screens no sweep had ever walked: a cancellation step at
**81.2 characters**, the landing story head's lead at 80.2, the Connect Bank email hint at 77.6,
the Pro gate's sentence at 77.3, a blocked step at 60.8, the prose card at 59.5 and the share
snapshot's privacy paragraph at 58.3. All seven are fixed, in five component files.

**The rule they leave behind.** `ch` is a unit of the ELEMENT'S OWN FONT. The story head already
carried `max-width: var(--container-text)`, so it looked measured; the head is 16px and the lead
inside it two type steps smaller, so the same box read 52ch for the heading and 80 for the
sentence. A cap on a container measures the container. The measure goes on the element that holds
the words, every time.

**One computed width, and it is the only one in the system.** The numbered step carries a 40px
gutter for its numeral and `box-sizing` is border-box, so `--container-text` alone would have given
the sentence about 47 characters. It is `calc(var(--container-text) + var(--space-40))`, built out
of two declared values rather than a third number nobody can justify.

**The prose card's open question is answered, and it is the first of the two answers stage 10
offered.** 560 stays as the width of the CARD, a box with padding, a border, three sentences and a
list; the paragraph and the list items inside take the system's measure like every other prose leaf.
The alternative, 560 standing as a declared exception with a 59.5ch line inside it, was rejected on
the ground above: the card is not the thing being read, the sentence is.

**And the last unregistered width number in the product went with them.** The landing story head
capped itself at `38rem`, a literal written on 2026-08-15 with the hero the founder chose, which is
after stage 10's register closed. It was not registered, it was replaced: the same head is already
given `width: min(var(--container-column), 44cqw)` in its stage form, so the cap is
`--container-column` now. One box, one owner, 12px wider below the stage's own threshold and
identical above it.

**Measured both ways:** zero boxes differ at 360 on all 55 pages, which is the half of the promise
that is not allowed to move, and at 1440 sixteen pages and 137 boxes moved, of which 32 changed
width and every one of those is one of the seven rules.

---

## 2026-08-17 - The shell's blanket goes to zero specificity, and the seventh unbinding was the sheet

The shell releases every direct child of `.screen` past the desktop point, because a screen's blocks
are allowed to use the pane there instead of reading down a column. It was written
`.app > .screen > * { max-width: none }`, which is **0-2-0**, and a component that declares its own
measure as `.app .readout` is also 0-2-0 and loses on source order, because `app-shell.css` is an
organism and is imported after every atom. **Six measures were unbound that way**, one at a time,
each found only when somebody measured that exact element: the form column, the Pro gate, the plan
row, the readout, the groups cap and a standalone muted line. Five was a pattern; six was a
generator.

**The named list was tried first and rejected on two grounds.** The plan `backlog.md` carried was to
replace `*` with the blocks that may widen. Read off the corpus at 1440 the list is fourteen
selectors, and one member has no name to be listed by: the skeleton frame on
`history-trends-loading` is a bare `<div aria-hidden="true">`, and that file's own comment says the
frame must not move when the numbers land, so it has to widen exactly as the chart it stands in for.
Naming it would mean inventing a hook in markup the freeze governs. The second ground is worse than
the first: a list has to be remembered by every block added after it.

**`:where()` does the same reversal with no list.** Both blankets and the detail re-release are
written inside it, so they match what they always matched at specificity zero: anything that
declares a measure of its own now wins, at any specificity, in any file, written by somebody who has
never read the comment, and anything silent about width still gets `--container-page` at the tablet
point and the pane past the desktop one.

**It found the seventh on the way out, and the seventh is the only one that was still live.**
`dialog-sheet.css` has declared `max-width: 480px` since stage 08 with its reason on the rule - a
sheet asks one question, and a column narrower than the flow's 620 makes that question look like one
question - and it had never once rendered past the tablet point. The sheet ran the full 588 column
on `cancel-guide-blocked`, `connections-add-source` and `data-privacy-delete-confirm`. Measured:
**zero boxes at 360, three pages and 49 boxes at 1440, every one of them that sheet.** The change
restores what the component already says rather than deciding anything new, and it is one line to
revert if the wider sheet was the wanted look.

---

## 2026-08-17 - Three rows answered by measuring rather than by fixing

**The focus order in the rail form.** Opened at stage 10 on one screen at one width: the rail's head
takes focus first and its four destinations last, with the content pane between them. Re-read at
stage 12 across **all 55 coloured pages at 360 and at 1440**: every page tabs `bar, content, nav`,
or a subset where a screen has no rail, and **not one page changes its order with width**. There is
no width-dependent defect; there is one order, the same on a phone and on a desk, and it is content
before navigation - the order a skip link exists to create artificially. Rejected: reordering the DOM
by width, which needs script or duplicated markup and puts four destinations in front of the first
word for anybody tabbing on a phone. Left open as the founder's option: a skip link, which is a new
product string and belongs to `voice/docs/microcopy.md` before it belongs to a layout stage.

**`.lead` is not owed a component.** The row assumed two meanings and there are three. `.muted.lead`
is a declared margin modifier of the muted line, on 9 coloured pages, and it keeps the word. Bare
`.lead` stands on exactly two pages, in two hosts, with two rules and two jobs: the nudge over the
save-focus candidates and the sentence under the landing's story head. By rule 1 of `inventory.md`
those are host slots, the same shape as `.gate > p` and `.oncard .k`. Promoting a name that three
rules disagree about is how a collision becomes a component. The true fix is a rename, and a rename
is markup, which the freeze puts behind a founder's decision written into the file it changes.

**A stand owns its chrome.** `design/kit/kit.html` carried a `<style>` block and the row called it
the one page in the stand that a screen-level reading of `CLAUDE.md` would call a violation. A
screen-level reading is the wrong reading: the ban is on a SCREEN, and this is a stand, which is the
licence `design/overview.html` already carries in writing and `design/rollout.html` uses too. Moving
59 lines of one page's furniture into the shared `_page.css` was rejected on that ground. What the
page actually lacked was a way in: `kit.html` and `shell.html` are both in `design/kit/_nav.js` now,
in the System group, and the registry reads 85 of 85.

---

## 2026-08-17 - The counter reads both copies of the sentence it checks

`counts.cjs` had verified the per-component footprint since stage 11 and reported zero drift. It was
reading the **CSS header alone**, and that sentence lives twice: every component page repeats it as
"Lives in ... Stands on ...". The half it did not read is the half that drifted -
`brand-mark.css` said 55 coloured pages while `brand-mark.html` said 32. **An instrument that checks
one of two copies reports the copy it checks, not the claim.**

It reads both now, in separate columns because the two can be wrong separately, and the first run of
the second column found **18 pages disagreeing** on a corpus the old run called clean. All 18 were
rewritten with recomputed figures and regenerated screen lists, by hand, because several carry a
breakdown a script must not flatten. Of the other 28 occurrences of a stale corpus figure, 19 were
live claims and are recounted and 9 are stage records that now name the corpus they were measured
on. **Nine of the live ones were the same "checked rather than assumed" sweep in nine files**, all
run when the corpus was 28 or 32 pages: re-typing the number would have been asserting as measured
something about a product that no longer exists, so they were re-run instead, by `inert12.cjs`, over
both corpora at 55 pages each. Every one still reads zero.

---

## 2026-08-17 - The back control is bold, its mark is an arrow, and four links stopped leaving the product

Founder, on the app bar: **"кнопочка и стрелочка Back - давай сделаем может жирным шрифтом и
нормальную иконку назад"**, and separately: **"я би еще проверил линки на UI екранах, а то где-то мне
попадалось что переходило на вайрфрейми"**. Both were right, and the second one was a real defect.

**The weight.** `.back` and `.close` were 400, the page's body weight, which is the weight of a
SENTENCE. This is the way out of the screen and the most used control in the bar, and at 400 beside
an 800 wordmark it read as a caption that happened to be clickable. Both are 600 now, the step this
system already gives a control that carries a name.

**The ink.** `.back` rests in `--text-primary` rather than `--text-body`: at 600 on body ink it was
still a step behind the title above it, which is what the complaint was actually looking at. `.close`
keeps body ink and its colour hover: it is an exit from a flow, taken once, and a flow should not be
shouting its way out.

**The mark.** It was a mirrored chevron, and the family argument for it was real - one drawing, two
directions, shared with the nav row. What it is not is a BACK icon: a chevron on its own is this
product's *go deeper* mark, drawn twice on the same screens as this bar, so the one control meaning
*leave this screen* was wearing the mark that means the opposite. It is now an **arrow with a
shaft**, 18px at stroke 2.5 against the family's 16px at 2, because at 16/2 the ink renders 1.33px
and reads lighter than the 600 label beside it. Picked off a rendered ladder of six: 20px at 2.5 puts
the arrow above the type it labels. The cross is untouched.

**The gap came back with the arrow.** The chevron painted 7 of its 24 units, so its own mask left
about 5.1px of air - exactly what the character before it had, which is why the control carried no
gap. The arrow paints 14 of 24 and its stroke reaches 20.25, so inside an 18px box the ink stops
2.81px from the edge and the label landed against it. `--space-2` puts the pair back at 4.8px.

**The hover is the advance verb rather than a colour step.** Ink at rest leaves no darker ink to go
to, so the arrow travels one `--nudge` toward where it points, which is U13's own rule and what the
nav row's chevron does to the right. The label does not move.

**And the four links.** Every `href` on all 55 coloured pages was walked: **832 links, 0 pointing at
a file that does not exist, and 4 leaving the coloured product for the frozen grey** - the back
control on `path-choice` and `sign-in`, "Sign out" on `settings`, and "Delete everything" on
`data-privacy-delete-confirm`. All four are the same fossil: they were written when `design/` had no
landing of its own and `wireframes/index.html` was the only home in the repository. The coloured
landing has existed since 2026-08-14; all four now point at it. Re-run after the fix: **0 links
leave the product and 0 point nowhere.**

---

## 2026-08-17 - Each step's rail ends at its own block

Founder, with the three ends drawn on a screenshot of "How Tendd works": **"сепаратор би сделал би
макс длину до конца блока 1 2 3"**.

**What was there.** `landing-steps.css` gave every column but the last
`right: calc(-1 * var(--space-32))` at the desktop point, so the rail crossed the gap into the next
column. The argument, written into the file on 2026-08-15, was that the three rails bridge into one
road: `1 ----- 2 ----- 3`, one road and three stations.

**What it actually drew.** The first two lines run past their own column and stop against the NEXT
numeral, and only the third ends on its own block. So it is not one road, it is three lines at two
different lengths, and the crossing reads as a tie between 1 and 2 rather than as a rule under 1.
Measured at 1440: block one ends at 499 and its rail at 531, which is column two's left edge.

**What ships.** The override is gone, so all three rails obey the base rule that was already there,
`left: 0; right: 0`: one rail per column, ending exactly where its own block ends, flush with the
card below it. The wide layout now adds nothing at all to the rail and its `@container` block is
about the columns and the gap only. The last column's own reason survives and is now the reason for
all three: **a rail running past its block is a road to nowhere.**

**One argument had to be rebuilt rather than deleted.** The file's reason for owning a grid instead
of using `.grid` WAS the bridge: the rail crossed the gap, so this file had to know the gap, which
auto-fill does not expose. That reason is gone with it. What is left is the one underneath, and it
was always the stronger: these are **steps**, so the count is three or it is one, never the
two-plus-one an auto-fill grid lands on when the container happens to fit two. A numbered sequence
cannot wrap.

**The grey twin keeps the bridge**, at `wireframes/_wf.css:1404`, and that is correct rather than an
oversight: the wireframes are frozen and a coloured page may differ from its grey original by
styling. This is styling.

---

## 2026-08-17 - The brand's hover is played, not held, and it found a bug in the signature

The founder, on the version shipped an hour earlier, with a screenshot of the held pose: **"не
виглядає це, м'яко говорячи, не очень"**. They are right, and the reason is in the drawing rather
than in the value that was chosen.

**The field of this mark is the same colour as the bar behind it.** So the plate a person sees is
not a plate at all: it is the ink, and only the ink. At crop A the letter is bigger than the frame
and crosses every edge, so the ink IS a rounded square. Open the window part way and the letter
shrinks off those edges: the square stops being a square, and what is left standing is a bowl with a
stub of stem beside it. **There is no good resting crop other than crop A**, and that is not a
defect in the number - it is what rule 1 of the mark means. Any held hover on this drawing would
have had the same problem at a different value, which is why the fix is not a better number.

**So nothing rests anywhere.** The hover PLAYS the crop and comes home: the window opens toward the
whole letter and settles back into crop A, once, over `--dur-signature`, `--ease-leave` on the way
open (that half is a leaving) and `--ease-settle` on the way home (the signature's own landing).
Both ends are crop A, so leaving mid-run lands exactly where staying would have, and every frame
between them is a frame of **motion** - which is what a drawing that is only good at its endpoints
is allowed to have. No new token, no new number, no second drawing: it is **the signature on
demand**, given by the page on arrival and asked for by a person here.

**Under `prefers-reduced-motion` it is nothing at all**, and that differs from the four verbs on
purpose. A verb held as a state still answers the pointer: a lifted mark is simply already lifted.
A gesture with both feet in the same place has nothing to say when it is not allowed to move, and
inventing a pose for it would be inventing the exact pose this decision removed.

**And it found a real bug in the signature, which is worth more than the hover.** A CSS animation
list is matched **by position**: change the name in a slot and the browser starts a new animation,
leave it alone and the one already there keeps its state. While the hover and the signature shared
one slot on the same pseudo-element, taking the pointer OFF the public page's lockup put
`brandclose` back into that slot - a name the browser had not seen a moment earlier - so **the
arrival replayed on a mouse-out**. "Once per load", the fence written into U14 the day before,
broken by a pointer. They now live in two slots, and the signature's slot is spelled identically in
both rules through a second local property, `--sig-name`: `brandclose` on the one lockup that
carries the modifier, `none` everywhere else. Neither rule rewrites the other's half, so neither can
restart it. Verified on both surfaces: the signature still plays once on the landing, and after
leaving the lockup `scale` reads `none` with nothing running.

---

## 2026-08-16 - The brand answers a pointer, and the button rises to meet one

The founder, hovering the lockup on the public page: **"при ховере я не вижу анимации"**. Both
halves of that sentence were true, and they had different causes.

**The brand: not a target, and it answers anyway.** `brand-mark.css` opened with the words NOT
INTERACTIVE, and the mark is still not a target - it is a span inside a lockup that is a link on
none of the 55 pages that carry one, carrying `aria-hidden` because the word beside it
already says the name.
What was added is one hover, and it hangs on `.lockup:hover` rather than on the square: a person
aiming at a 22px mark with the word 46px to its right is aiming at the brand, so hovering the word
opens it too.

**What moves is the window and not the mark.** A mark that rose and grew would be a LIFT, and a
lift says the object is pressable. The crop opens instead, half way toward the whole letter, and
closes when the pointer leaves - the concept's own sentence, *the tighter the crop, the more
abstract the mark*, read out loud at the size of a hover. It is **the signature's gesture held
instead of played**: `--dur-signature` on `--ease-settle` when the page arrives, `--dur-state` on
`--ease-arrive` when a person does.

**The half is derived and there is one crop number in the file.** `--crop-whole: 0.42` is now a
local custom property on `.brand` - a fact about this drawing that nothing else in the product can
want, which is the argument `landing-story.css` and `landing-orbit.css` already make for theirs.
The signature travels from it to 1; the hover stops at `calc((var(--crop-whole) + 1) / 2)`. Move
the number and both move. The midpoint was picked off a ladder of seven crops rendered at 5x:
**past it the letter detaches from the frame and the tile loses its silhouette**, because the field
is the same colour as the bar and only the ink draws the square. Rejected on the same ladder: the
concept's other two windows, B and C, which zoom IN - at 22px they turn the tile into a crescent
and the mark stops having a silhouette at all.

**One invisible line was load-bearing.** The mark's half of the signature ran with
`animation-fill-mode: both`, which holds the last frame forever, and a held animation outranks every
declaration below it in the cascade, `:hover` included. So the one lockup carrying the signature
would have been the one lockup that could not answer a pointer. Both halves now run `backwards`.
The word's half was **not** blocking anything and the first version of this entry said it was: that
animation paints `color` on `.wordmark .hi` while the hover moves `scale` on `.brand::before`,
a different node and a different property. It changed for the narrower reason that its forwards fill
held a colour the base rule already paints, shadowing that property for nothing. Found by Codex on
the read-only pass, verified by re-reading both files, and corrected here rather than left standing. It renders identically because
each animation ends on exactly what its base rule already draws, `scale: 1` and `--text-action`:
40 frames captured, **36 of them deterministic and all 36 byte-identical**. The other 4 are the
public page at two widths in two themes and are not deterministic at all: the same 4 differ between
two runs of unchanged code, because that page's loops are running when the shutter opens.

**The button: the fade was real and it was about two per cent.** Measured before anything changed -
a secondary button's hover takes its fill from `#ffffff` to `#f4f7f8`, with the edge moving one
token step beside it, on the one control a person is most likely to hover before they trust the
product. The press verb shipped the day before and answers only a held pointer, so between arriving
at a button and pushing it there was nothing to see.

**So the button rises one nudge to meet the pointer, and the press puts it back on the surface.**
One gesture in two halves rather than two verbs stapled together, and that is why the pressed state
of a lifted button is level and not a nudge below the line. **The distance rule holds untouched**:
rest to hover is one `--nudge`, hover to press is one, rest to press is one, and nothing anywhere
travels two. No colour token moved and no fade changed; what was added is 2px of `translate`, which
is composited and reflows nothing.

**The lift sits behind `@media (hover: hover)`, and that is a pointer query rather than a width
query.** Rule 8 forbids `@media` in a SCREEN file; this is a component, and the reason for the
query is the gesture itself, which needs a pointer that can rest somewhere without committing. On a
touch screen the block never applies and a tap pushes the button down by one nudge exactly as it
shipped; the same fallback covers the keyboard, where `:active` fires with no `:hover` beside it.
Inside the query the pressed rule is written `:hover:active`, so the specificity says what the rule
means - the press OF A LIFTED BUTTON - instead of relying on which line came last.

Usage rules U13 (the lift half) and U14 (the crop half). Both stands are live: the brand's on
`design/kit/brand-mark.html#states`, the button's on `design/kit/motion.html#verbs`.

---

## 2026-08-16 - The brand gets one move, and it was written down two stages ago

The founder: **"давай на логотип сделаем анимашку, у нас где-то было расписано как делать
анимацию"**. It was. `design/concept/logo-crop.html`, the direction chosen out of thirteen at
Concept, is one letter drawn on a 100 unit square with a window cut out of it, three canonical
windows (crop A `26 34 46 46`, B `48 40 34 34`, C `58 20 26 26`), and one sentence holding them
together: **the tighter the crop, the more abstract the mark**. That page demonstrates it with an
eight second loop panning across all three.

**What ships is not that loop, and the difference is the decision.** A loop in a bar is a thing
that moves fifty times a day in a product whose first principle is calm. What ships is one move,
once, on arrival: the window opens to the whole letter and closes into crop A, so the mark begins
as a `d` a person can read and becomes a mark they cannot. The wordmark's last letter takes petrol
at the moment it lands, which is D-Brand's own rule made visible.

**It is a fifth thing beside the four verbs and it is declared as one.** Fade, advance, lift and
press are all ANSWERS: something moves because a person did something. This is an ARRIVAL. Nobody
asked for it, so it is fenced rather than free: **one surface** (the public page's bar), **once per
load**, never inside the app. The `.signature` modifier on the lockup IS the fence, and the app's
54 app pages that carry a lockup deliberately do not carry it. Usage rule U14.

**`--ease-settle` gets its second consumer**, and it is the curve's own brief: declared for "an
OBJECT arriving at a stop rather than a value being interpolated", with the public page's deck as
its only user until now. A window closing onto a letter and clicking into place is the same event,
and the overshoot of one and a half per cent is what makes it a click rather than a stop. The start
is scale 0.42 and not the arithmetic 0.46, because at 0.46 the stem's cap sits on the frame's edge.

**What it cost, and it is stated rather than claimed away.** The crop used to be the SVG's own
`viewBox`, which a transform cannot reach. The mark now draws the whole letter into an oversized
box and the frame does the cropping, off the same four numbers. **The drawing is identical and the
rendering is not**: measured before and after on all 108 marks in the product, every one differs,
because the outline falls on a different sub-pixel phase. The extents match to the device pixel at
1x, 2x and 3x and the petrol area differs by 3 pixels in 2557 at 3x; at the shipping size that is
69 of 484 pixels, all of them on the edge, and side by side at 3x the two are indistinguishable.
Neither rasterisation is more correct, and without the change the crop cannot move at all. Accepted
on that trade.

---

## 2026-08-16 - Motion gets four verbs, and one distance holds all of them

The colour-only pass shipped in the morning. The founder's verdict on it, the same day: **"большинство
анимаций я не вижу ... все атомы должны быть с анимациями"**. The direction is theirs and it is taken
in full. What was added is a language rather than a pile of effects.

**Three verbs beside the fade.** ADVANCE: a direction cue moves toward where it points when its
target is hovered, which is the step-forward link's arrow (down, because that link goes further
down the same page) and the nav row's chevron, the door's pick line and the alert's go line
(right). LIFT: an identity mark rises and grows to 1.06 when the target it stands in is hovered,
which is the merchant mark in a row, an alert, a tile or a door, and the destination icon in a tab.
PRESS: anything pushable goes down while it is held, at `--dur-press` 90ms, and comes back at 150.

**One distance, and it is the whole guard on the decision.** `--nudge` is 2px, everything moves by
exactly one, and **nothing anywhere travels two**. 2 rather than 1 because 1px vanishes on a 2x
screen at 36px, and rather than 4 because at 4 a list of fourteen rows starts jumping under the
pointer instead of answering it. The single exception is the checkbox, where a 20px box cannot
travel 2px without looking dislodged and the box IS the control, so its press is a scale to 0.94 -
the mirror of the mark's 1.06 lift.

**The rule that chose the verbs:** the movement always has a cause. Something moves only where the
moving says what is about to happen. That is what stops this being decoration, and it is what
produced the exclusions, which are as much of the language as the verbs are: a **disabled** control
never moves (it would answer a press the product will not honour), a **loading** form never moves,
the **current** tab never moves (it would offer a journey that does not exist), a **figure** never
moves (a number that moves is a number you re-read, and this product exists to stop people
re-reading their money), a **card** never lifts on hover (a lift needs a shadow and the Flat Paper
Rule spends the only one elsewhere), and nothing that would **reflow** is on any list: no `height`,
no `margin`, no `padding`, so no movement here ever pushes a line of text.

**The verbs live in the components and the fade lives in `base.css`**, on the same test: a verb is
a statement about what an object IS. A disabled button is still a button; a loading row is still a
row. `base.css` cannot know either, and it owns only the one verb true of every interactive element
regardless of what it is. Usage rule **U13**, with a Limits item on all twelve component pages it
names.

**A backlog row opened at breakfast closed by evening, because the movement made it untenable.**
The row, the alert and the tile each answered a pointer in their LOADING form: `.row:hover`,
`.alert:hover` and `.tile:hover` painted all 60, 12 and 16 placements rather than the pressable
ones. It was survivable while the answer was a fill and stopped being survivable the moment the
answer moved. All three hovers are scoped to the pressable element form now, through `:where(a)`
and `:where(button)`, which cost no specificity, so nothing else in the cascade moved.

**Under `prefers-reduced-motion` the verbs become states rather than animations.** The guard takes
every duration to 0.01ms, so a hovered mark is simply already lifted. Deliberate: a 2px offset that
appears instantly is not motion, it is a state exactly like a colour, and suppressing it would take
the answer away from the person who asked for stillness rather than give them one.

**Nothing at rest moved**: 36 deterministic frames byte-identical before and after, the landing's 4
in the known noise set. Every verb proved by measurement rather than by looking - the advances read
off `::after` computed styles, the lifts and presses off bounding boxes under a held pointer - and
the four things that must NOT move (skeleton row, loading alert, loading tile, current tab) measured
at zero on both hover and press.

---

## 2026-08-16 - Motion is eleven tokens and one rule: colour over 150ms, and nothing moves

Founder, on the census and its four open questions: **do what is best**. Two are answered in the
code, two in words.

**The curves are tokens, at two levels, and the split is now a rule.** Four shapes
(`--curve-expo-out` and its three siblings) under five jobs (`--ease-arrive`, `--ease-leave`,
`--ease-settle`, `--ease-travel`, `--ease-state`). A second level is earned exactly where two roles
would otherwise spell the same value, which is rule 4 read from the other end: arrive and state are
both expo-out today and can part company, so the curve is named once and the jobs point at it. The
two durations share nothing, so they take one level and are named by job. Rejected: a shape level
under the durations, which would have been a level with nothing in it, and a duration SCALE, which
needs a range this product does not move across. Rejected on measurement rather than taste: the
landing's five marquee and eight strand durations look like a scale and are loop lengths,
deliberately mutually prime so nothing repeats in step.

**Motion sits on the primitive side of `tokens.css` and takes no dark pair**, and rule 6 of
`design/system/CLAUDE.md` was amended to say so rather than left to read as broken. The
primitive/semantic split of that file is about the THEME axis, and no theme moves a curve; motion's
own axis is `prefers-reduced-motion`, a global kill in `base.css` rather than a per-token override.

**The app gets one state change and it moves colour only.** `background-color`, `border-color`,
`color`, `text-decoration-color`, 150ms, `--ease-state`, declared once in `base.css` on the elements
this system treats as interactive. Nothing on the list moves an object: a person reading fourteen
subscriptions is never chased by a row that grows, lifts or slides. **The focus ring is excluded**,
and that is an accessibility decision, not a taste one: 20 of the 68 state rules draw a ring and a
keyboard user moves faster than 150ms per stop, so a faded ring is always one control behind the
caret. 150ms itself is chosen from a window, not copied: under 100 reads as a cut, over 200 trails
the pointer.

**Three components declare the transition themselves** because their host is not a native
interactive element (`plan-option` a div in all 6 placements, `preset-tile` a button 6 times and a
span 10, `alert-item` an anchor 8 times and a div 4). One class with two element forms would fade on
one and cut on the other. That is usage rule U12.

**Two questions are answered in words, which is itself an answer.** Between two states this product
documents as two separate pages there is NO motion, because naming one would design a runtime that
does not exist here: no router, no client state, nowhere for the movement to live. And the
landing's vocabulary is shared only where it has a consumer: the curves, because five jobs read
them; not the entrances, ranges or choreography, because rule 4 exists so a scale is not derived
from a sample of one.

**Nothing that already existed moved, and that was proved rather than asserted.** 36 deterministic
product frames byte-identical before and after; the landing's 4 frames differ and a same-code
control differs on exactly the same 4, because that page's infinite loops run on a wall clock. The
landing was checked instead by 30 choreography samples at 10 scroll positions on 3 viewports:
**0 differ.** Four hand-written `cubic-bezier(0.16, 1, 0.3, 1)` literals left `landing-facts`,
`landing-paths`, `landing-plan` and `landing-steps`, and the skeleton's 1.4s left
`skeleton-bar.css` for `--dur-pulse` without moving a millisecond.

## 2026-08-16 - Stage 11 opens on a census, and the census is published while the stage runs

Motion is the one thing in this system a screenshot cannot audit: a still frame of a scroll-driven
stage and a still frame of a broken one look the same. So the stage opens by counting, over the
source, with comments stripped before anything is counted.

**What it found is a distribution, not a number.** Zero `transition` declarations in the entire
product; 8 of the 75 css files in `design/system/` declaring any motion; 30 of the 31 keyframes belonging to one
page. The landing has a complete motion language and the other 54 screens have none of it: 68 state
rules across 28 components, 26 of which change instantly. That is defensible for a product whose
first principle is calm, and it is written down nowhere, so today it cannot be told apart from an
omission. The four curves the landing runs on are declared **on one selector in one file**, which
is exactly why four other files write the same expo-out curve by hand. The drift the token would
prevent has already happened.

**One dead keyframe fell out of the count.** `srise` in `landing-story.css`, defined and named by
nothing: the head's entrance, kept after the file recorded the decision that the head does not make
one. Deleted the same day. It was found by reading every `@keyframes` in the system against every
`animation-name` in it, and that check is now part of the census script rather than a thing
somebody remembers. Same class of leftover as the centred stage deleted the day before, one order
of magnitude smaller, found by counting rather than by looking, which is the point.

**The page is published at `ready:true, done:false`.** The `ready` flag existed in `/_nav.js` for
this case and had never been used: the stage is not finished, the badge and the state class are
unchanged, and the row is a link because the census is worth reading DURING the stage rather than
after it. `design/kit/motion.html` stands in Foundations after Icons, with `docs/motion.md` behind
it.

**Nothing is tokenised, and that is the decision.** Four questions came out of the census and none
is answerable by measuring: whether the curves become tokens and at which level; whether the app
gets motion at all; what happens between two states that this product documents as two separate
pages (7 loading, 7 empty, 7 error); and whether a vocabulary derived on one surface is the
product's vocabulary or that surface's. The second is the founder's and it is the largest, because
it is the only one that touches every screen. Rejected: naming a motion scale in the same step as
the count. Rule 4 of this system exists because a scale derived from a sample of one is not a
scale, and the sample here is one page.

**Recounted in the same step:** the backlog row that carried this material claimed three easing
curves where there are four, and 42 / 35 / 29s for three marquee tracks in `landing-story.css` that
went with the centred stage the day before.

## 2026-08-16 - Before stage 11: the shape that lost is deleted, and five width literals are registered

Asked before starting on motion: is anything owed first. Two things were, and both were owed to
the stage that comes next rather than to the pixels.

**The dead shape in `landing-story.css` is gone.** The founder chose the round window on
2026-08-15 and the centred stage went with its page, but its rules stayed: `.storyfield`, `.srow`,
`.strack`, `.stile`, `@keyframes sdrift`, `@keyframes sgather` and the four rules that switched
them off, 89 lines, written by no page in either corpus. **The reason it could not wait is stage
11 itself:** the first thing that stage does is take an inventory of what moves, and an inventory
taken over rules that never run measures the wrong product.

**The rename is answered no.** backlog.md called this a FOLD, where `.fromcircle` stops being a
modifier and the word comes off every selector. It comes off none of them. That is a rename across
**257 selector sites**, 59 in `landing-story.css` and 198 in `landing-orbit.css`, every one
carrying a scroll-driven rule and every one dropping from 0-3-0 to 0-2-0 in a file whose cascade
was tuned in place. It buys a shorter name and risks the one thing on the page that cannot be
checked from a still. The class is the component's name now, and both files say so.

**Proved inert rather than assumed.** The stage was captured at twelve fixed scroll offsets on six
viewports in both themes, before and after, and then a second time on the same code to establish
what the harness itself is worth: the noise floor is text-width jitter from font loading, and every
surviving difference was that. `.lp-story` is 2880px at 1440 and 2701 at 390 on both sides of the
cut. **The first harness lied twice before it told the truth**, which is worth keeping: it scrolled
to a fraction of a measured height, so the two runs sat at different offsets on a scroll-driven
page and reported the whole choreography as changed; and it read the page before the web font
settled, so text boxes differed by a few pixels. Fixed offsets, `document.fonts.ready`, and a
run-against-itself control.

**And five width literals are registered rather than the three the backlog named.** The row said
`60rem`, `75rem` and `85rem` in `landing-orbit.css`. Recounted by script with comments stripped,
the system also asks `59.99rem` as 60's max-width companion, **`80rem` of the PAGE container** in
`landing-story.css`, and one question that is not about width at all, `@media (max-height:
42.5rem)` twice. They go into the container-threshold register with their origins, and the
alternative - redesigning the hero to ask the two points - was rejected on the ground that four of
the five ask the NAMED container `story`, which is a question about one composition and not about
the product's layout, while `80rem` is `--container-wide`, a value the width block already
declares.

**The census on `responsive.html` was stale in the same place.** It said every width query resolves
to one of THREE registered values, `47.5rem` x8, `56.25rem` x5, `28.75rem` x2 - true when it was
published, on a corpus with no landing in it. Today: 47.5 x18, 56.25 x10, 28.75 x2 and 80 x2 of the
page container, 60 x6 / 59.99 x3 / 75 x1 / 85 x1 of the stage, plus the height pair. 45 literals in
nine groups, recounted in the same step as the change.

---

## 2026-08-16 - The landing pass: a heading step, a row that aligns, an edge that dissolves, and a rule that was never running

The founder, after the footer: a pass over the whole page rather than another block. It found
four things, and only the first was a matter of taste.

**One, the section headings were the app's step.** Every heading on the public page rendered at
`--type-head`, 24px, at every width: the size the app gives the subject of a 780px column, set
over a 1280px band under a 56px hero. **The desync was written in the code and not only on the
screen.** `landing-shell.css` carried a rule inside the tablet query that set `--type-head` a
second time, which is the value the base already gives: a query point with no change in it. The
grey has stepped its own heading at that point since the wireframes, 23px to 27px, so the point is
the contract and the flat value was the rollout's. The step is now `--type-section`, 32px, past
the tablet point; a phone does not move. **It is a token of its own at the same value as
`--type-figure`**, which is rule 4 read literally: two roles means two tokens even at one value
today, and one of them is a number about money on an app screen while the other is a heading on a
marketing page. Borrowing the figure's token would also break the naming this scale runs on, where
every step is named for its job.

**Two, a row whose two headings did not start on the same line.** The trust band's claim with no
proof beside it was centred in its panel, on a written reason: a claim made only of words is the
shorter box, a grid row stretches it, and at the top it would read as a panel someone forgot to
finish. What that argument does not price is the row. Measured at 1440, the centred panel's
heading started 60px in and its neighbour's 24px in, a 36px stagger between two headings on one
line (24px at 1000, 8px at 760). Two headings on two different lines is a first order signal and
reads as a mistake; trailing air inside one panel is second order and reads as room. The other
half of that decision stands: the sentence with no proof is still one step larger.

**Three, the closing band's top edge was a cut, and the first measurement of it was taken at one
place.** `landing-final.css` said a top fade would be an effect with nothing to do, because the
picture's first rows measured 241,241,232 against a page ground of 238,243,244. True at that x and
false across the width: sampled every 100px, the light theme stepped to 227,234,222 at x=200,
twenty-two units in the blue channel, drawn straight across 1440px. The dark theme was nearly clean
at 8 units, which is why nothing looked wrong in the theme the band was built in. **A watercolour
is not one colour, and a single sample is not a measurement.** The fade is `--space-96`, which is
where the sheet begins, so the picture is at full strength behind the message; the worst step
across the edge is now zero at all fourteen sample points in both themes.

**Four, `.landing { background: var(--bg-page) }` had never applied.** A stray comment terminator
in `landing-shell.css` closed its block one paragraph early, so seven lines of prose stood in the
stylesheet as CSS; the parser read from there to the next brace as one selector and swallowed the
rule with it. Measured: `.landing` computed `rgba(0, 0, 0, 0)`. **Nothing looked wrong**, because
`base.css` paints the same `--bg-page` on `body`, so the landing was standing on the body's ground
and looking exactly like a landing standing on its own. Two audits ran off the back of it: every
stylesheet in the system, the grey and the kit was scanned for stray or unclosed comments (clean),
and every `var()` in the system was checked against every declaration with comments stripped and
fallbacks excluded (zero live variables undeclared). Noted for the next person: a CSS comment does
not nest, so a comment terminator cannot be quoted inside one, which is how the repair broke the
same block a second time before the scan caught it.

---

## 2026-08-16 - The footer stands on a grid, and the page ends on a bar

The founder, on the foot of the public page: "сделаем поинтереснее подвал?" Four things came out
of it and only one of them is taste.

**One, the columns did not stand on a grid, and that is the whole reason the block read cheap.**
They were flex items at `flex: 0 1 auto`, so every column was as wide as its longest link.
Measured at 1440: PRODUCT began at 925 and was 120 wide, COMPANY at 1092 and 68 wide, LEGAL at
1208 and 112 wide, three parallel lists starting on intervals of 167 and 116. The gutters were
even and the columns were not, which is the arrangement an eye reads as nobody having placed
anything. **The grey has drawn `2fr 1fr 1fr 1fr` since the wireframes**, so this was a rollout
desync and not a decision: the colour was built from the grey's markup and re-derived its layout
in flex. The colour now uses the grey's own proportion.

**Two, 346px of dead air** at 1440 and at every width above it. `flex: 1 1 40%` on the brand
column means grow, so the brand box took 757 while the sentence inside it stops at the 52ch
reading measure, about 459. The void sat between the sentence and the first column, which is
exactly where a reader looks for the map.

**Three, the seam, and it was the footer's own.** The closing band was given a picture the day
before that dissolves into `--bg-surface`, which is the footer's ground, and the band's own border
was removed so the water could run in. The footer's `border-top` was not, so a hairline was still
drawn straight across the dissolve. It goes past the tablet point, where the picture is, and it
**stays** below it, where there is none: there the closing band is `--bg-page` against the
footer's `--bg-surface`, the two are 1.12:1 apart, and `tokens.css` says in as many words that the
hairline is what separates them.

**Four, the bar at the foot, and it is the only added structure.** The page ended on its last
link, so it did not end. The bar is one hairline and two muted lines at `.fine`: the copyright,
and the D7 trust line word for word. `site-footer.css` has refused an action since it was written,
on the ground that the page's one action is stated three times already and a fourth would be
asking after the argument has ended. **A fact is the opposite object:** the foot of a page is
where a person who is still deciding looks for exactly that sentence. Asking again is a fourth
ask; answering again is what a footer is for. Rejected for the same slot: a market and currency
line (invented copy), and repeating the sentence that already stands three lines above it.

**And the phone form changed with it.** A single stack of four blocks made the footer 887px tall
at 390, more than a viewport of nothing but links, because twelve of them carry the 44px target
floor. Two columns hold the same map in 675 and cost no legibility: the narrowest track at 360 is
152px and the longest link, "Trust and security", sets at 112. Both corpora moved together.

**The wordmark gained a second size**, `.large` at `--type-head`, declared on the atom rather than
written from the footer, which is the third time this system has answered a host wanting to resize
an atom that way (`.amt.figure`/`.display` on 2026-08-15, `.muted.fine` on 2026-08-16). At 16px
the name closed the page at the size of the sentence beside it. Only the size changes: the
tracking is not re-derived, because the concept gives -0.02em for a bar and -0.035em for a hero,
24px is neither of those plates, and a value between them would have no source.

---

## 2026-08-16 - D-Wash amended: the closing band carries a horizon, and its message stands on paper

The founder, on the last block of the landing: "давай теперь делать очень красиво ... надо добавить
картинку фон".

**This amends D-Wash and the amendment is named rather than slipped in.** D-Wash of 2026-08-15 says
ONE band carries a picture, "not the page, not the trust band, not a card", on the ground that a
texture which spreads stops being quiet. It is two now, and the edge is narrower than "two": **the
two bands that carry a picture are the two that ASK** - one for money, one for the sign-up - and
the seven that argue carry none. That is a rule with an edge rather than a licence, and the next
block that wants a picture has to answer it.

**A horizon and not a second mist.** Still water under a pale sky in the light theme, the same water
at dusk in the dark one, in loose watercolour: the same palette and the same hand as the pricing
wash, and a different motif, because a page that ends on the picture it already showed reads as a
page that ran out of ideas. A horizon is also what an ending looks like. Two files on the system's
own asset shelf, 34KB light and 22KB dark, read through `--wash-final`, the second non-colour role
in `tokens.css`.

**The message stands on a sheet, and the sheet is the wrap.** Contrast over a picture was solved
three ways in three days and this is the fourth situation: here the text sits in the MIDDLE of the
band, so there is no gap to fade the picture out of. Paper solves it structurally and permanently -
no per-width sweep, and D-Concept's own material logic, which is that the thing you are looking at
is the thing on paper. It costs no markup on either corpus, because the wrap is already the element
that carries this block's measure and a sheet is a measure with paper under it. It takes the one
elevation, for the reason the pricing cards recorded the day before: paper laid on a picture with
nothing under it reads as a hole cut in the picture.

**Both ends of the band are measured, and only one of them needed anything.** At the top the
picture's own first rows are 241,241,232 against a page ground of 238,243,244 in the light theme,
and 5,20,22 against 14,21,23 in the dark: the sky already arrives at the colour of the band above
it, so nothing is done there and the hairline is removed instead, because a line drawn across a
picture is a line and not a boundary. At the foot the band meets the footer, which is `--bg-surface`
in both themes, so the water dissolves into the footer's own paper over the last 120px and the page
ends with no seam.

**Below the tablet point there is no picture and therefore no sheet.** A horizon is what a wide band
stands on; a phone-width column would crop it to nothing, a sheet with no picture under it has
nothing to lift the message off, and made a sheet the wrap ran its rounded corners into the
viewport at 390, measured. A `background-image` inside a query that does not match is never fetched,
so a phone downloads neither wash.

**And the ask uncovered a desync that had been shipping since the rollout.** The lead was not
centred in the one centred block on the page: `.lp-lead` is the hero's lead and carries a ~525px
measure with no margins, because in the hero it stands in a left-aligned column. Measured at 1440,
the sentence sat from 120 to 645 inside a wrap running 80 to 1360. The grey has had
`margin-left: auto; margin-right: auto` on it since the wireframes, so it was a rollout desync and
not a decision.

**The band left `landing-shell.css`,** by the precedent set the day before: the shell holds the
bands that are a FILL, and a fill plus a picture stopped being the same object. `landing-final.css`
is the product's 69th component and its 26th organism, recounted by script off the `@import` groups
in the same step.

---

## 2026-08-16 - The FAQ, rebuilt: the card goes, the plus comes back, the heading takes a column

The founder, with a reference: "давай делать ... сделай красиво". The reference shows a heading
standing on the left, the questions as open rows on the page's own ground with a hairline between
them, and a plus that becomes a minus.

**Two of those three are what the frozen grey has drawn since the wireframes.** `_wf.css` gives
this block a top border, a border under each question, and a `+` that turns into a dash, with no
card anywhere. The colour rollout put the four rows inside a white card and swapped the mark for a
chevron, and nothing had asked for either. So this is a desync repair and not a redesign: the card
is gone, the mark is a plus again, and the grey is the contract it always was. The founder's
reference and the product's own frozen structure agreed with each other against what shipped.

**The mark, on the merits and not only on the contract.** A chevron says WHICH WAY, and it is the
same glyph `nav-row.css` uses for "there is more this way" on a row that leads to another page. A
plus says WHAT WILL HAPPEN: there is more of this, here. On a block whose whole job is to answer
an objection without making a person leave the page, that difference is the block. Drawn as two
gradient stripes in one 16px box in `currentColor`, so there is no second element, no font glyph
and no icon file, and the vertical stripe collapses when the answer opens.

**The one value that had to change with the card.** `--line-divider` is the line INSIDE a
container and is tuned to sit on paper; on the page ground it measures 1.01:1, which is not a
faint line but no line at all. The block reads `--line-container` instead: 1.09:1 in the light
theme here and 1.46 in the dark, where the same pair on paper is 1.23 and 1.33. Neither owes a
threshold, because a divider is decorative and nothing in this block has to be found by touch.

**What is genuinely new: the split.** Past the desktop point the heading takes a column of its own
and sticks while the list scrolls. Asked with `:has(.lp-faq)` because the section carries no class,
and this is a fact about what the section CONTAINS, so neither corpus had to learn a name. The
columns are a FRACTION and not a width, 3 to 8: the left column exists to hold four words, and what
matters is that they wrap into a block of type rather than that the column is any particular number
of pixels. Measured, it is 206px at the desktop point (heading on three lines) and 310 at 1440 (two
lines). Sticky at 96, which is the landing's sticky bar plus air; the bar is 73px, measured.

**And the first answer stands open**, which is a product decision rather than a decorative one.
Closed, this block is four questions and no evidence that answers exist, and the one it opens with
is the most anxiety-reducing line on the page for the person this product is for: she arrives
asking whether she has to hand over her bank, and the first word she reads is "No." The other
three stay closed, because a block that opens everything is a page of text and not a set of
questions. It is a state change on a frozen page, so the decision is written on the section in
`wireframes/index.html`. The grey took the split and the larger question size in the same step,
at its own 1000px point: the stage it renders in is narrower than the window it stands in.

**Left where it was:** no animation on the disclosure. Stage 11 owns motion, and a height
transition needs either a fixed height, which the copy does not have, or `interpolate-size`, which
is a decision about how this product moves.

**The same day, a second pass on the same block:** "давай пункті сдлеам уже а то они длинние и
растянутіе и так же сделаем интереснее и при откртие одного из пунктов другой закрівается".

**One open at a time is four characters of markup.** `<details name="faq">` is an exclusive group
by definition: the browser closes the previous one, and the keyboard and announcement behaviour
that made this component `<details>` in the first place is exactly what carries the change. This
component's own rule says every attribute it could add would repeat something the element does
better; this is the one attribute that does not. Where a browser is too old to know the name it
ignores it and the block behaves as it did before, which is the reason to do it this way rather
than with a script. It is also half the answer to "длинные": four answers open is a wall of prose
in a block that exists to hold prose out of the way.

**The other half: the rows stop growing.** At 1440 the right column was 826px and the longest
question in the block is 389, measured, so more than half of every row was the gap between a
question and its mark. The list caps at `--container-column`, 620, and the cap is read rather than
invented: the answer already stops at the 52ch reading measure and a question is the same kind of
reading. Past about 1100 the block simply stops growing. Below the desktop point it costs nothing,
because the column is 550 there and the cap never bites.

**"Интереснее" is answered with the product's own material and no new anything.** D-Concept's
material is paper on a cool off-white ground: the thing you are looking at is the thing on paper.
This block stands on the page ground, so the question a person has opened takes a sheet of
`--bg-surface` and the three they have not stay on the ground. With one open at a time, that sheet
moves down the list as they read. No new colour, no new token, no motion, and the accordion's whole
state said in one material fact. Rejected: numbering the questions (it implies a sequence a FAQ
does not have, and it puts generated text into the reading order), and petrol on the open row (the
accent has three jobs and this page already spends it three times). The hairlines around the sheet
go transparent, which is three rules naming three edges: its own bottom, the bottom of whatever
sits above it, and the list's top border when the open one is first.

**The grey took the shape and not the sheet.** The grey landing is white all the way through, so
paper on paper says nothing there; it puts the open row one step the other way, on `--panel2`, and
carries the same inset, the same cap and the same `name`.

**And then the list moved to the right edge**, on the founder's own choice of two: "блок с
ответами перенесем больше в правую часть или по центру весь блок поставим". The cap had left 206px
of air inside the column at 1440, sitting between the questions and the edge of the page, which
reads as a block that stopped rather than one that was placed. The first option was taken and the
reason is the page's LEFT RAIL: every other section's heading on this landing starts at the wrap's
left edge, so centring the pair would take this one heading off a line eight other blocks stand on,
and a heading indented from a rail every neighbour keeps reads as a mistake rather than as a
composition. Centring is one line if the founder prefers it, and the line is named in the
component. One thing had to be measured rather than assumed: an auto margin takes a grid item off
stretch and sizes it to its content, so `margin-left: auto` alone collapsed the list to 477px and
the answer's 52ch measure then ran wider than the sheet holding it; `width: 100%` beside the cap is
what makes the margin absorb the leftover instead of the list's own width.

---

## 2026-08-16 - The pricing block, fifth build: a podium, a horizon, and less to read

The founder, on the fourth build: "давай снова переделивать не нравятся мне карточки они
скучние ... еще куча текста вверху а сами карточки сплюснутіе + надо 69 долл поставить по
центру и виделть". Four clauses, four answers, and none of them is a repaint.

**Less to read above the price.** Five lines stood between the heading and the first number:
a lead, a reassurance about caps and cancelling, an eyebrow and a row of four included things.
That is a lot of reading in the one section a person opens in order to see a number. The lead
stays, because it is what the section is. The included list and the reassurance go BELOW the
prices. This reverses the fourth build's order, which was argued as "what this is, then what
it costs"; the heading and its lead already say what this is, and what follows a price is
detail. Two lines above the cards instead of five.

**The yearly price moves to the middle.** It was first, which is the reading order of a list.
A row of three is not read as a list, it is seen as a shape, and the middle of a shape is its
centre. Monthly, yearly, lifetime is also the ladder in order of commitment, so the
recommended one now stands where the eye lands with the two it is compared with on either
side of it.

**The card is a plate and not a pane.** Centred content, so the price is on the card's axis
and the card's axis is on the section's. The badge leaves the flow and straddles the card's
top EDGE: it has now been in three places and each move is the previous one's measurement
(stacked above the price it pushed the figure 31px down, beside the price it cost the card
its axis, on the edge it costs no flow height at all). plan-option.css wrote `position:
relative` on this card at stage 07 "for the badge, which is in the flow today and is given an
anchor for the day it is not"; this is that day.

**The recommended card is a podium.** It rises 32px out of the row at the TOP only, where the
fourth build raised it at both ends. Raised at both ends it was simply taller and its divider
and its button sat 16px off every neighbour's; raised at the top alone, its price stands 32px
above the two prices it beats and its foot stays level, because the growing middle row
swallows the whole difference. The thing a person compares goes up and the thing they act on
stays put. It also takes a petrol edge, which is petrol's third job inside content under
D-Concept: three ways to pay for one plan, with one already chosen for the reader and a badge
that says why. Drawn as a repainted border plus a 1px spread shadow rather than as a 2px
border, because a 2px border pushes the content 1px in and takes the raised price off the
axis its neighbours share.

**The picture became a horizon.** Rejected: leaving the fade as it was. The block grew a foot
(the list and the reassurance now stand under the cards) and that foot needed paper. The band
now lays its own ground over the picture at BOTH ends, so the wash runs from the tops of the
cards to their feet and no word in the band stands on it. The stops moved from percentages to
PIXELS, and that is a measurement rather than a preference: the fade has to land in a gap
between two elements, that gap is 50 to 80px at every width, and the band's own height runs
from 1478px on a phone to 807 wide, so 48% - the fourth build's number - is 709px down a
phone band, halfway inside the second card. The bottom pair was set twice: 225/165 is what
the cards' feet ask for and 20px short of what the LABEL under them asks for, measured at
3.37:1 on a phone, so it is 260/200 and the worst rendered pair in the band is 5.30:1.

**Left standing, measured.** The plan buttons still wrap to two lines between the tablet
point and about 980px of window: that is the one button in the product allowed to wrap, a
declared exception with its own measurement at `design/kit/button.html`, and shortening the
label would put the same product line in two editions between the landing and Upgrade. The
lifetime card's divider still sits about 10px off at exactly 760px, where its note wraps and
a button label does not.

**One thing the grey gained.** `_wf.css` zeroed the 44px floor under the lifetime card's
note, so the grey's third divider stood 31px below the other two at the wide widths while the
colour's stood level. The floor is back and the two corpora agree.

**The same day, the foot of the block: plates, and a supplementary size.** The founder, on the
four included things: "мне вот єти слова сделать би красивее и как то их виделить", and on the
line under them: "сделать дополнительним". The four were four runs of 14px body ink in a
wrapping line, which is what a sentence looks like; they are not a sentence, they are the four
things the price buys, and each of them is a THING. Each is a plate now, on `--bg-recessed` at
`--type-sub` in the primary tier, which borrows a shape this page already owns rather than
inventing one for four words: the trust band above sets its four claims on the same recessed
ground. **Still no tick,** and the argument did not change with the shape: the eyebrow says
"included", an ornament repeated on every line adds nothing the label has not, and the accent is
already spent twice in this band. The reassurance under them wears `.fine`, a size modifier
**declared on the muted line atom** rather than written as a host rule, because a host putting a
font-size on a hosted atom is the defect three files here name; the ink does not change, so the
step down is in size and never into unreadable. The muted line now has a declared size axis of
two, which also gives the preset tile's old host exception something to fold into one day.

**And the plates immediately invalidated the fade.** The block grew, and the stops read off the
page an hour earlier put the list's eyebrow back inside the picture at 2.75:1 in the dark theme.
That is the count-drift rule doing its job: the sweep was re-run in the same step, the stops
were re-read, and the worst rendered pair is 5.78:1 on bare paper. It is also what forced the
tablet-point query on the picture, because below that point the plate row wraps to one, two or
three rows and the gap the fade has to land in stops being at a fixed offset at all.

---

## 2026-08-15 - D-Wash: the pricing band carries a picture, and exactly one band does

The founder, on the pricing block: "може на фон какую ненавязчивую спокойную картинку сделать -
для генерации использую Codex чтоби он сгененрировал изображение".

**The picture.** `--wash-pricing`, the first non-colour role in `tokens.css`: a soft atmospheric
wash, a teal haze drifting across paper in the light theme and the same composition at dusk in
the dark one. It is a token and not a line in a component because system rule 6 says a role lives
in both themes or it does not exist, and a paint that reverses between a paper theme and an ink
theme is exactly that case; the alternative was a `[data-theme]` selector inside a component, and
there are zero of those in the 68 component files. It is read UNDER a `background-color` and never
instead of one, so the band has a ground before the picture loads.

**Scope is the decision.** ONE band. Not the page, not the trust band, not a card. D-Concept's
ground is paper and stays paper: a texture that spreads stops being quiet.

**The contrast is solved in the composition and not in the asset, and that is the whole trick.**
The band lays its own ground over the picture at both ends, so the picture is a horizon running
from the tops of the cards to their feet, and no word in the band stands on it. The stops are
pixels rather than percentages, because the fade has to land in a gap between two elements and,
from the tablet point up, every one of those gaps sits at a constant offset while the band's
height runs from 1566px on a phone to 828 wide. The picture loads past that point only: a stack
has no horizon. What is measured is the RENDERED pair and not the file: 5.78:1 at the worst,
swept over nine widths in both themes, on a ground of 255,255,255.
The arrangement reached this shape over three builds: 42/60, then 48/64 as the cards grew, then
the horizon of 2026-08-16, whose entry is above this one.

**Who generated it, and how to replace it.** Codex cannot generate images; it is a coding agent
and it is read-only in this repository. The two assets were generated from a written brief with
the image tool available in the session, lightened by measurement, and saved as
`design/system/assets/plan-wash-light.webp` (17KB) and `plan-wash-dark.webp` (20KB). Replacing
either is one file: the token names it and nothing else does. A new light edition has to pass the
same 4.5:1 sweep before it ships.

**The same step fixed two older things in that block.** The four included lines were printed
three times, once per card - twelve list items and twelve ticks for four facts - so they are now
stated ONCE: this is one plan and three ways to pay for it, which is what D4 locked. And the block
was centred in grey and left-aligned in colour since the rollout, which is a desync and not a
design; the colour follows the grey again.

**It was built twice on the same day, and the second build is the block.** The first put the four
included things in a full-measure card UNDER the three prices and left the prices as they were.
The founder, seeing it on the page: "это ужасно". Three things were wrong:

- **The shared list was a bar.** A full-measure white card under three white cards, holding four
  short phrases spread across 1800px, is not an object: it is the leftover space between two
  things with a border drawn round it. It is a LINE now, and it moved ABOVE the prices, which is
  also the order a person reads in: what this is, then what it costs.
- **The badge pushed the yearly price out of line.** Stacked above the figure it put it 31px
  below the two it is being compared with, measured. The card is three rows and two columns now:
  a price with its badge beside it, a sentence, an action. Chipless cards leave column two empty
  and nothing shifts.
- **The growing sentence left a hole.** `plan-option.css` gives that sentence `flex: 1 1 auto` so
  three cards of unequal copy land their buttons on one line; on Upgrade the list under the button
  absorbs the difference, and here, with the list lifted out, it showed as 120px of nothing in the
  middle of two cards. Every card is a BODY and a FOOTER now, with a divider between: the leftover
  space sits inside a bounded body instead of floating between two elements, which is the whole
  difference between air and a hole. All three dividers land on one line, measured.

**And the picture was replaced twice.** The first pooled its haze in one corner and, cropped by
`cover`, read as a smudge at the right-hand edge rather than as a decision. The second was an even
vertical wash, symmetrical and correct, and it had been lightened almost to nothing because every
pixel of it was being made to clear 4.5:1 against the smallest ink on the band. The founder, on
that one: "не оно очень скучное". Both are the same mistake - the ASSET was carrying the contrast,
so the only asset that could pass was one with nothing in it.

**The third build moved the contrast into the composition, and three things followed.**

- **The picture is a picture now.** A watercolour mist rising off pale paper in the light theme,
  the same composition over dark water in the dark one, at full strength. The band lays its own
  ground over the top 42% and lets it go by 60%, so the words stand on the surface colour and the
  picture begins where the cards do.
- **One of the three prices rises out of the row.** D4 names the yearly price the best value, the
  copy says so in a badge, and nothing in the geometry agreed: three identical rectangles are a
  table, and a table is what this block has said since it was drawn that it is not. The card
  carrying the primary action is 32px taller than its neighbours and sits 16px above their top
  line, with the shadow the raise implies. Asked as `:has(.btn.primary)` rather than as a class
  the markup would have to remember. Rejected and measured: sinking the two quiet cards to
  `--bg-recessed`, which reads correctly in the light theme and INVERTS in the dark one, where
  that role is lighter than `--bg-surface`.
- **The free footnote moved up under the lead.** Both sentences are about Free, and the bottom of
  the band is where the picture is deepest.

**The fourth build made the price the biggest thing in the card, and it is the founder's call.**
"а можно как то блоки с ценами сделать красивее больше? виделить цену большой такой?" The third
build had refused this on the ground that `amount.css` carries the One Number Rule and 46px
belongs to the monthly total. The founder asked again with the reference beside it, so the rule is
restated rather than broken: exactly one object on a screen is set in Display and it is the number
the person came for. In the app that is the monthly total; the landing has no total, so until now
it had no Display figure at all. The count per screen is still one. A third size is declared on
the amount as `.display` and worn as a class in the markup, in both corpora.

**And the ask uncovered a desync that had been shipping since the rollout.** When the size axis
was declared on the amount at stage 08, four host rules became one modifier, and a modifier has to
be worn: `upgrade.html` writes `class="amt figure"` on all three of its cards and the landing's
three were left bare. The landing's prices had been rendering at **14px**, the size of the
sentence under them, while the grey has drawn them at 30px since it was built. Measured in the
browser. Nobody saw it because the coloured landing did not exist when the axis was declared, and
a 14px price reads as a small bold price rather than as a missing rule.

**Three smaller things followed the size.** The cadence under the figure went up one step, because
under a 46px number "a year" was reading as the start of the sentence below it. The card's padding
went to 32. And all three cards took the one elevation, where before only the raised one had it:
paper laid on a picture with nothing under it reads as a hole cut in the picture rather than as a
card on top of it.

New organism `landing-plan`, all five things, and the landing's plan row moved into it from
`grid.css`, where its `@media` became a `@container`. `plan-option`'s `.incl` slot is an
Upgrade-only slot from today, recounted the same day.

## 2026-08-15 - Trusted with your money: every claim stands beside its own proof

The founder: "давай делать теперь вот це ... хочется реально что то красивое", on the block
that carries the four trust claims.

**Four claims in a column with a grey bar beside them is the shape of small print,** and
small print is the exact thing this audience has learned not to believe. The block was the
promise list on a white band 1200 wide, so at desktop the block that decides this product
occupied the left third of it and the rest was empty.

**The block's own lead promises a ledger and the block delivered a paragraph.** "Here is
exactly what Tendd can and cannot do" is a promise of specifics, and nothing under it was
specific: four more sentences. So the repair is not a prettier list. Three of the four claims
now stand beside the object that settles them, taken from the screen where that object really
lives and not invented for the landing:

- **Read-only, always** beside the access ledger as `data-privacy.html` draws it: "Bank
  connection / read-only transaction history, through Plaid" and "Added by you / only what
  you type".
- **You are in control** beside the disconnect as `connections.html` draws it, by name.
- **We never sell your data** beside the one preference that could have sold it, in the
  resting position `data-privacy.html` gives it: "Use my activity to improve Tendd - Off by
  default. We never sell your data either way."

A claim beside its own control is not the same object as a claim beside a bar. The bar
decorates the sentence; the control lets a person check it.

**The Plaid claim carries no proof, and that is the decision.** What would prove it is the
bank's own sign-in, and `connect-bank.html` has said since it was drawn that we do not design
that screen and would be lying to draw it. A block about honesty does not open with an
invented screenshot of somebody else's product. It stands on its sentence, one step larger
and centred, and the rule that does it states the thought rather than a class:
`:not(:has(.fdemo))`, a claim with nothing to show says it louder.

**The panels are recessed and the proof inside them is paper.** The section is one of the two
bands standing on the surface fill, so a white card here would be a white card on white. Sunk
into the band, the panel is a held space and the real object rises back out of it. It is the
one place in the system where the inner box is lighter than the outer one, and the band is
the reason.

**One petrol mark, and it is the third of petrol's three jobs and not a fourth.** D-Concept
spends the accent on the primary action, the current selection and the trust line, and this
is the trust line's own block: `trust-block.css` paints exactly this shield in exactly this
role on eleven grey pages and ten coloured ones. It stands on the read-only claim, the one
the other three rest on.

**Rejected, measured:** the anchor panel standing the full height of the two claims beside
it, in column one. It is the more interesting shape and it does not survive the content - at
1440 the two short claims came to 520px against the anchor's 345, so the ledger, pinned to
the floor of a stretched panel, sat under 175px of nothing. Filling it would have meant
inventing a third source for the ledger or padding the claim with a sentence the product does
not say. A hole is not air, and both cures are worse than a calmer grid.

**No new strings.** Every word in every proof is already in `voice/docs/microcopy.md` under
the screen it comes from, and the four claims did not move a comma. Nothing in a proof is a
target: `aria-hidden` for the reading order, `inert` so the preference's checkbox cannot be
reached, `pointer-events: none` for the pointer.

New organism `landing-facts`, all five things. The grey followed by a founder's decision
written on the section, and its two-column point is 1000 rather than 760 because the grey
landing renders inside the review stage: a 900px window leaves the pane 650. The promise list
loses its fourth host and is back to three screens in both corpora, recounted the same day.

## 2026-08-15 - Two ways to start: each door stands ajar on the screen it opens

The founder: "теперь давай тут делать что то такое красивенькое", on the block that carried
the two doors of D2.

**Two doors that look the same and show nothing are not a choice, they are a form.** The
block was a heading and a sentence inside each of two white cards: two identical empty boxes
for the one decision this page asks a person to make, and the emptiest thing on the page.

**Each door now ends in a peek at the screen it opens.** A recessed well bleeds to the
card's left, right and bottom and holds the FIRST TRUE MOMENT of that path, taken from the
screen the door leads to and not invented for the landing:

- **Connect your bank** shows the connection as `connections.html` draws it: the drawn bank
  mark, "Chase", "Bank connection through Plaid", the Connected chip and the four facts
  under it. The last one before the cut is "Access: Read-only. Tendd cannot move your
  money.", which is the sentence this door's own paragraph makes and the promise the whole
  page rests on.
- **Add them yourself** shows the preset picker as `add-subscription.html` draws it: the
  first tiles, mark, service and "Typically $X a month". The paragraph says "Pick from 400+
  services"; the well shows it instead of claiming it.

**It is a peek and not a picture, which is the whole device.** The well is taller than the
room the card gives it and is masked away over its last quarter, so each door stands AJAR:
there is visibly more behind it, and what is behind it is real. A framed thumbnail says
"here is a picture of the product"; a cut-off screen says "this is where you would be". The
fade starts at 76% and not at 58, where the first cut put it: at 58 the Read-only line was
already at half strength, and that is the one line in the well that has to be legible right
up to the cut.

**No new strings, no action, no petrol.** Every word in both wells belongs to the screen it
came from. Neither door is recommended, which is D2 read literally and the same ground
`door.css` gives for the doors inside the product carrying no petrol either.

**Rejected: making the doors clickable.** The `door` component exists, carries these two
exact headings and is a link. Using it would have added two actions to a block whose own
comment has said since the landing was built that the one action of this page is repeated in
the header, the hero and the closing block AND NOWHERE ELSE. That is a decision, and a
redesign does not get to reverse it quietly.

**A new organism, all five things:** `landing-paths.css`, `design/kit/landing-paths.html`,
the `_nav.js` row, the `inventory.md` line, the `@import` in its level group. It also closes
a divergence: the grey has called this block `.lp-paths` / `.lp-path` since the wireframes,
and the coloured page was rendering it as `.grid.roomy` with two bare cards. One name now,
both corpora. **And the grey changed structure by the rule:** the founder's decision is
written as a comment on the section in `wireframes/index.html`, and `_wf.css` draws the same
two peeks in the grey's own vocabulary. In grey the cut is plain; the fade is styling and
stays in colour. Not one word of the block's copy moved.

---

## 2026-08-15 - D-Hero closed: the round window is the landing

The founder: "давай теперь перенесем index-circle.html на основу index.html".

**Two heroes existed for one day so they could be looked at side by side.** A centred
promise at `design/index.html`, and at `design/index-circle.html` the founder's own drawing
of 2026-08-14: the promise off the centre line to the left, a round window of subscription
platforms in the middle, the count in the bottom left corner and the example total in the
bottom right, with the hero and the stage under it merged into ONE section that pins and
moves in place. The round window won. It IS `design/index.html` now and the centred version
is deleted.

**The loser went with it, exactly as promised.** `design/kit/landing-orbit.html` had
written, on the day the candidate was built, that when one was picked the loser would be
deleted with its page, its registry row and its import, and the grey would follow the
winner in the same step. All of it was done in this step:

- `landing-hero.css` lost its three `.lp-hero` layout rules and is now two type roles and
  no box: `.lp-h1` and `.lp-lead`, both rendered inside `.osay`. The class `.lp-hero` is
  written by no page in either corpus, so the rules are deleted rather than left to rot.
  The eyebrow, the actions and the reassurance line are still on the page word for word;
  landing-orbit.css places them.
- `landing-story.css` lost `.storyfigs` and `.storystack .count`, the wrapper that stood
  the two figures one under the other in a centred head and the count's size inside it. On
  the winner they are the window's two bottom corners, `.ocount` and `.ototal`.
- `design/_nav.js` lost the `circle` state. It was never a product state and the label was
  doing a second job; there is one landing and one row.

**THE GREY FOLLOWED, which is the part a candidate is not allowed to do.** Blocks 2 and 3
of `wireframes/index.html` are one section now, carrying the promise, the section's head,
the round window with its five bands, the list of fourteen, the two corner figures and the
three reason cards, in that order. The founder's decision is written on the section, beside
the two earlier D-Hero decisions of 2026-08-14, because CLAUDE.md allows a later stage to
change structure there only that way. Not one word of copy moved.

**Two pieces of the coloured markup are deliberately not in the grey, and both are declared
rather than forgotten:** the ribbons (an aria-hidden SVG of eight coloured strands orbiting
the window) and the beats (seven empty spans `design/story.js` reads as scroll positions).
Neither carries structure, content or copy: one is decoration and one is a timing rig. A
wireframe that drew them would be describing the colour layer's machinery instead of the
product's structure.

**What is left open, and it is one thing.** `landing-orbit.css` asks its own container at
**60rem, 75rem and 85rem**. System rule 8 allows two points, both in `tokens.css`, and says
a third is the founder's. They were written while this was a candidate, where a local point
is a sketch; it is a shipped screen now. Each was measured and each is real (60 is where the
spread can exist, 75 is where the corner figures clear the reason card's column, 85 is the
widest band), and they are asked of a NAMED container rather than of the page container,
which is not obviously the same number the rule counts. Either they are registered with
their origins or the composition is redesigned to ask the two that exist. A verification
step is not allowed to pick that, so it is a backlog row and the founder's call.

**Also open and deliberately not done in this step:** `.storyfield`, `.srow`, `.strack` and
`.stile` - the three drifting tracks the centred stage gathered into a list - are now dead
in both corpora, but the rules keyed off them reach twelve places in `landing-story.css`,
including `sgather`, two container blocks and the reduced-motion release. Removing them is
not a deletion but a FOLD: `.fromcircle` stops being a modifier and becomes the component.
Doing that in the same step as moving the hero would have put a refactor of the stage under
the page the founder had just approved. Backlog row, its own step, with the seven-beat probe
and the deck scrub before and after.

---

## 2026-08-15 - Landing steps, second look: the ordinal is the spine and the card is gone

Same day, same section, after the founder looked at what was built: "ну честно говоря так
себе... ети цифирки маленькие ну просто кошмар". The number was the complaint. The card
was the cause, and both were replaced.

**The ordinal became a display element.** It was `--type-meta` inside a 26px hairline box
hung on a card's corner: the size of a footnote wearing the job of a section's spine. It is
now **`--type-step`, a new step in the type scale at 40px**, set solid at 800 and tracked to
-0.03em. It is **muted and not full ink**, which is the one place this pulls back: at 40px
in primary ink it outweighed "How Tendd works" above it, and a step's number louder than
the section's name is a hierarchy upside down. Big and quiet is this language's register.

**Why a new token rather than `--type-figure`.** A step's ordinal and a subscription's
amount are not one role. The amount is money the person owns and reads; the ordinal is
structure the person counts, and it is the only number in the system that is never money.
They can part company at any moment (system rule 4) and they already have: this one is set
at a weight and a tracking no amount is allowed. 40px sits one clear step from 46 and from
32.

**The card is gone, and that is the bigger half of the fix.** Three identical boxes each
holding a picture-shaped grey rectangle is the shape every SaaS page has, and a surface
inside a surface is a card inside a card. What carries the section now: a hairline **rail**
at the ordinals' own mid-line, interrupted by each numeral and reaching across the gap into
the next column, so the three read as `1 ----- 2 ----- 3`; the words straight on the canvas;
and exactly **one** raised surface per column.

**The pictures stopped being placeholders.** Step 2 was a list FORMING out of skeleton bars.
Grey bars are what a page draws when it has nothing to draw, and this product has fourteen
real rows. Step 2 is now **the list**, with real names and real amounts from the canonical
dataset, and step 3 is **the same list one moment later**: Netflix quiet, wearing the
canonical Cancelled chip where its amount was. The third picture is the second picture's
consequence. Step 1 grew from five marks to eight tiles, seven marks and the plus.

**What it cost elsewhere, all of it deliberate.** `numbered-steps.css` no longer draws
`.landing .lp-step .snum`; that rule held the landing's marker identical to the cancel
guide's, and the two are no longer editions of one thing, so the pair is closed rather than
aligned and the dead rule is deleted. `logo.css` gained the section's two host sizes with
the product's other seven, because that file owns the mark's size by host. And
`landing-shell.css` was reading **`--bg-canvas`, a role that does not exist**: the var()
resolved to nothing and the landing has been showing `body`'s `--bg-page` since stage 07.
Found by this file copying the wrong name and getting a background that did not paint.

**Two numbers were measured rather than chosen.** The row's gap is 8 and not the real row's
16: at the desktop point the column is 252px and a 16-gap row wants 268, so the name
ellipsised from 900 to 939 and was clean from 940 up - the exact "content stopped fitting
and the query has not fired" band `CLAUDE.md` names, probed at eight widths on both gaps.
And the rail is `--line-container` and not `--line-divider`: the divider role (#eef2f3) and
the canvas (#eef3f4) are one point apart, so the first cut of the rail rendered invisible.

**The grey followed, by the rule.** The founder's decision is written as a comment on the
section in `wireframes/index.html`; `_wf.css` draws the same rail, ordinal and list in
greyscale. Its three-column point is **1120 and not 900**, because the grey landing renders
inside the review stage beside the tree menu: at a 900 window this section gets 650px and a
column 182. Not one word of copy moved.

**The entrance moves the content and never the structure.** The rail and the numerals stand
still; the panel and the words rise into them on their own `view()` timelines, offset left
to right. A staggered column would carry its own rail with it, and three rails at three
heights is a broken line for as long as the scroll lasts.

---

## 2026-08-15 - Landing steps: the section shows the product small, on one path

The founder: "посмотри примеры, насмотрись и сделай красиво, будто ты супер UI designer" -
on the "How Tendd works" section, which was three flat cards with hand-written numerals.

**The reference sweep set the direction, not the style.** Refero (Wealthsimple, Cake
Equity, GoFundMe, TidyCal and the pattern space around them): the step sections that read
as expensive do not decorate with icon clip-art, they show the product small. This product
already owns every atom needed to be true at thumbnail size, so each card carries an
aria-hidden vignette built from them: step 1 is three real provider marks and a plus tile
(the two doors of D2, the plus being `.logo`'s own initials mode); step 2 is a list
FORMING - one full row and two skeleton rows, the product's own loading grammar, this
page's first act said again; step 3 is one row going quiet under the canonical Cancelled
chip. **No new strings, no invented prices, no icons, no petrol.** Rejected: an icon set
(the first in the product, saying less than the atoms), a screenshot in a card (the mistake
the hero corrected on 2026-08-14), and any edit to the three steps themselves.

**The path is the cards' own top edge, continued.** Each marker rides the top border of its
card and a hairline continues at that height through the gaps, so the three read as
stations on one line. Marker geometry stays in `numbered-steps.css`; placement is the
host's, which is the split that file prescribes.

**The dark theme forced one honesty.** Skeleton bars drawn straight on the recessed well
vanished in dark (`--skeleton-dark` against `--panel-dark` are near-identical), so a
vignette row became what a real row is: a miniature surface card, and the contrast question
dissolved into a token pair that already answers it.

**A new organism, all five things:** `landing-steps.css`, `design/kit/landing-steps.html`,
the `_nav.js` row, the `inventory.md` line, the `@import` in its level group. **And the
grey changed structure, by the rule:** the founder's decision is written as a comment on
the section in `wireframes/index.html`, and `_wf.css` draws the same vignettes in the
grey's own boxes-and-bars vocabulary - one drawing at two fidelities. Not one word of the
section's copy moved. Entrances ride each card's own `view()` timeline with `cover` ranges,
offset left to right; the expo-out literal is knowingly repeated from `landing-orbit.css`
(it cannot be read across subtrees) and the backlog's stage-11 easing row carries it.

## 2026-08-15 - D-Hero: the phone gets its own act, and the act finds a defect

The founder: "на мобильном более простую, но тоже анимации".

**Simpler is structural, not a smaller copy of the desktop.** Below the point the stage
stays a column - the choreography is a wide-screen affordance and the release says why -
but the column stops being dead: everything on it introduces itself as it scrolls into the
window. The circle poses (scale and rise); the rows, the figures and the cards rise. No
pin, no shared timeline, no stagger table, no conductor: each element reads its own
`view()` timeline, so the reader's scroll position IS the stagger and fourteen rows need
one rule instead of fourteen ranges. Two keyframe sets, three properties each, and no blur:
blur is a paint cost, and the phone is the one place this page must never spend paint it
does not have to.

**`cover` and not `entry`, and the difference is the whole feel.** An entry range is
measured against the element's own height, and a 44px row gives a 24px window: the row
pops. Fifteen per cent of a cover range is about 130px of scroll, and the row rises.
Measured mid-entrance: a visible gradient of arriving rows instead of a switch.

**The specificity is `:nth-child(n)` and the reason is import order.** This file is
imported before `landing-story.css`, whose narrow release kills animation by name at the
same 0-5-0 on exactly the three cancelled rows: written plain, eleven rows would rise and
three would pop, which is the invisible kind of wrong.

**The first screenshot the mobile act was ever given found a live phone defect.** The stage
stacks the swap's two children in one grid cell - the whole trick of the wide choreography,
one thing becoming another in place - and the narrow release killed the animations but
never unstacked the cell: on every phone with a scroll-timeline browser, the fourteen rows
had been drawing straight through the circle's chips. Nobody saw it because every phone
probe measured opacity and overflow, and two opaque things in one place are clean by both.
The phone block resets the swap to a flowing column. A second, unrelated one fell out of
the same round: a stray brace left by an earlier edit had closed the width gate early, so
`.scard { position: absolute }` was leaking to every width.

## 2026-08-15 - D-Hero: act one gets scroll room, and the figures stand by the deck

The founder, on the built page: more softness in the transition from the first picture to
the second, and on desktop the two figures lower, level with the deck.

**Softness in a scroll-driven scene is scroll room, and act one had the least of it.** The
promise left over 12 points of the contain phase, the figures crossed most of a viewport in
14, and the heading arrived in 8 - the tightest choreography on the stage carrying its
biggest movement. Now the promise leaves over 0..18, the figures travel 0..26, the heading
lands with them at 12..26, the window gives way at 26..40 and the deck arrives at 30..45:
act one finishes before act two begins, where before they overlapped and the deck was
already six plates tall at the second beat - caught by the beat probe, not by eye. Beat 2
moved to contain 26 with the movement it marks, beat 3 to 42, and the fall's internal
stops were re-solved for its new range so the three promotions still land exactly on the
three cancellations.

**A fourth easing, for exactly one journey.** The figures cross ~600px, ten times any other
travel on this stage, and expo-out spends its whole budget in the first fifth: on that
distance it is a rocket that then creeps, which is the harshness the founder pointed at.
`--ease-travel` is a gentle in-out; composed with the conductor's own smoothstep it reads
as one soft carry.

**The figures come down off the band past 75rem, and both bounds of "down" are the
founder's.** "Пониже цифры бы поставил" took them from the top band toward the deck's face
at 336; on the built page the count's word sat 23px above the first reason card's title in
the same column, one pile, and the next notes - "выше чуть, чтобы не
налазило", then "еще трохи выше" - took them back up to 192. There they paint at 264..338:
eighty-odd pixels under the heading band (foot 182) and far above the highest reason card
(486 at 1440, 396 at 1280x720). Not below
75rem, and the point is a measurement: the example total is a 271px block right-aligned on
a 40px gutter and the window is 44cqw, so at 1000 the total's left edge crossed the
window's rim by 31px and at 1120 by 13; solved for 16px of clearance the crossing stops at
about 1200. Below the point the figures keep the top band, where three rounds have verified
them. The travel from the foot shortens by the same distance the landing came down, so the
foot the figures rise from never moves. A third local width value on the candidate, beside
60 and 85rem, all carried in the backlog against hero B winning.

## 2026-08-15 - D-Hero: the conductor, and why the snap had to go entirely

The founder, on the built page: the animation lags frame by frame under the scroll, and it
should be softer, more interactive, more interesting.

**The judder was the mandatory snap, and the mechanism is structural, not a tuning
problem.** On a document scroller every wheel tick starts the browser's own snap animation;
the next tick interrupts it, and the page moves in the staircase of those collisions. A
trackpad fling fights the same fight against its own momentum. Snapping and scrolling are
two hands on one scrollbar, and no values of `scroll-snap-*` change that.

**So CSS snap is gone entirely - tried both ways first - and the settling moved to a
conductor**, `design/story.js`, loaded by the candidate page alone. The reader's scroll is
native and untouched, which is the whole cure for the judder. Only once the scroll has been
still for 130ms does the conductor glide the page to the next beat **in the direction the
reader was going**, on a smoothstep whose duration scales with distance (capped at 1.1s) -
the founder's "чуть скролл нажал, и оп, анимация проиграла", but on a curve the browser's
snap cannot be asked for. Any input cancels the glide instantly. It does nothing under
reduced motion, below the 60rem point, or outside the one section. The anchors stay in the
CSS, derived from the ranges, so the choreography keeps exactly one owner and the script
reads it from the DOM.

**The first cut had an autonomous crawler in it, and the beat probe found it.** Standing on
a beat, the page still has a "next beat in the direction of travel", so the conductor
advanced to it, settled, advanced again - walking the reader through the whole stage with no
hand on anything. The probe's reads came back scrambled by a page conducting itself. The fix
is one explicit check: standing within 6px of any beat is standing still.

**And the window leans toward the hand.** The script damps the pointer's offset from the
viewport centre into two custom properties on the stage, `--parx` and `--pary`, and
`landing-orbit.css` decides what they mean: the swap leans up to 9px by 6px, the strands
take the same numbers at 1.35 - one ring nearer the reader than the glass, the same depth
statement the ramp makes behind the deck. The lerp is 0.085, so the picture lags the hand,
which is what makes it read as weight rather than as a cursor effect. Zero without a
pointer, with a coarse one, under reduced motion, or with the script absent: the variables'
fallback is the whole no-lean picture. **A script is a first for this repository's
screens**, and its boundary is written down: it hands over numbers, owns no style, and dies
with the candidate if hero A wins.

**Measured before shipping:** the conductor costs nothing - frame timings with the script
loaded and blocked are identical across three runs each (8.3ms median both ways).
`will-change` on the plates was measured too and changed nothing, so it is not added. The
carried-forward check: a 140px wheel gesture from beat 3 lands on beat 4 exactly; a small
gesture up carries back; an interrupt mid-glide hands the page to the reader within one
frame.

## 2026-08-15 - D-Hero: a list at the front, a deck behind it, and a card that leaves

The founder, on the built page: the front cards climb on top of each other and should stand
one under another; and the animation looks crude where it should be smooth for the whole
cycle.

**Both halves of the deck's front were wrong, and for the same reason.** The four front
plates were made flat last round so the deck could be dealt from three times without the
front card growing. Flat and still overlapping by ten pixels, four cards of identical
weight do not read as depth at all: they read as four rows whose shadows are stacked on
each other. It is a **list** at the front and a **deck** behind it now - 12px of air
between the four, and the recession starting at the fifth plate, which is also the first
one that is scaled and faded.

**The correction flips sign, and both the number and the direction are measurements.**
While the front four overlapped, the flow closed the gap by itself after the first
cancellation and one 8px downward correction held the front card at y 302 through all
three. With air between them a collapsed plate leaves its two 1px borders **and** its 12px
gap behind, so every cancellation pushes the next front card 14px further down and the
error accumulates: uncorrected, 302, 324, 338, 352. Fourteen, twenty-eight, forty-two,
upward. The first cut of this reasoned its way to 8, 16 and 24 downward, which was wrong in
size and in direction; the fix was to measure the plate at each of the three moments.

**A cancelled card leaves the deck now.** The shared `sgo` is a row leaving a list: it
recedes, holds, folds upward by three quarters of a rem while its height collapses. Right
on `design/index.html`, where the thing leaving is a 32px line and the eye is on the column;
wrong here, where it is the card the reader is looking at. The candidate's own `spart` goes
quiet, turns its badge over, **holds** for a fifth of the beat so "Cancelled" is readable on
a card that is still there, then lifts five rem, drops four per cent of its size, goes out
of focus and is gone while its height collapses under it. Fast, still, fast. Two rules had
to go for it: the cut plate no longer carries `box-shadow: none` (three of the four cards at
the front are cancelled in turn, so three times out of four the front card was the one with
no shadow) and no longer clips itself (anything the exit translated slid out of its own box
instead of off the stage).

**The stage is 320svh and the beats are evenly spaced, which is the whole of "smoother".**
The browser animates a snap over a duration set by the distance and it caps, so a 40svh gap
is a smooth travel and a 122svh gap is a jump with a blur in the middle. No two beats are
more than 48svh apart now - 40, 48, 40, 30, 31, 31 - where they were 65, 122, 43, 51, 50,
29. Nothing about the choreography moved except the numbers that say when: every range is a
percentage of the `contain` phase. Frame timing improved with it, from a p95 of 16.7ms to
10.1.

## 2026-08-15 - D-Hero: the stage becomes a sequence of stages

The founder, on the built page: the strands bounce back instead of going round; the deck
only moves once and after that "чисто числа меняются без движения каскада"; there is too
much scrolling between one cancellation and the next; and what they want is one small
scroll, one whole movement - "оп, такая анимация проиграла, 13 стало 12, Netflix улетел,
Disney появился. Потом оп, чуть скрольнул, и пошла следующая".

**The deck's order is not the fixture table's, and that is the fix for the dead middle.**
The three the product cancels stand 1st, 11th and 13th in the canonical dataset, so on a
deck the second and the third were plates at 0.13 and 0.05 opacity ten cards deep: the
count fell 13, 12, 11 and nothing on the stage moved at all. On this deck they come first,
in the order they are cancelled in, and everything else keeps the table's order behind
them. Nothing about the data moves - the same fourteen, the same prices, the same three
cancellations, the same fall to $144.92 - only the order they are dealt in, and only on
this candidate: the marquee keeps the table's order, and so does `design/index.html`, whose
list is the grey wireframe's twin and may differ from it by styling only.

**The front four plates are flat**, which is what lets the deck be dealt from three times.
Every plate used to carry its own scale, so a cancelled front plate was replaced by one
4.3% smaller and the correction was a scale on the whole list. Three of those compound to
1.148 and the front card grows by a seventh of itself over the sequence. Flat at the front,
the card arriving is already the size the card leaving was.

**One vertical correction and not three, and that is a measurement.** The first cut carried
8, 16 and 24, on the reasoning that a collapsed plate leaves its two 1px borders behind and
the gaps accumulate. Measured at all three moments at 1440 x 900, they do not: the plate
arriving sits exactly 8px above the list's own top edge whether one plate has collapsed or
three, because the list is a grid and a collapsed plate's row carries its own negative
margin. Three corrections put the front card at y 302, 310 and 318 - drifting eight pixels
lower at each cancellation, which reads as sloppiness rather than as a bug. One holds it at
302 at every beat.

**`mandatory` with `scroll-snap-stop: always`, which reverses a decision made twice.** This
stage said `proximity` and never `mandatory` for two rounds, on the ground that mandatory
snapping on a document scroller takes the page away from the reader. The founder's
description is not a preference about snapping, it is a description of the stage as a
sequence of STAGES, and proximity cannot give it. The `stop` is the half that makes it a
stage rather than a jump: without it one flick passes several anchors and lands on the
last, so three cancellations become one. **The cost is named and accepted:** between two
anchors there is now nothing to stop on. That is correct on a stage with nothing between
two anchors to read, wrong anywhere with text in it, and off entirely for a reader who
asked for no motion.

**460svh and not 560.** Every range is a percentage of the `contain` phase, so shortening
the section moves nothing about the choreography and only changes how far the hand has to
travel: the pinned part goes from 460svh to 360, and the gap between two cancellations from
64svh to 50. The three reason cards were re-timed to the beats at the same time, because a
reader who only ever stops on a beat must never find a card half arrived.

**Two characters in a path, for the strands.** Each comes down its stem and meets the loop
at its rightmost point, and the arcs were written counter-clockwise: the light arrived
travelling down, turned round, went back the way it came, and turned again to leave.
Clockwise, the tangent at the entry and at the exit are both straight down, and it is one
continuous travel from above the screen, round the window, and away below it.

## 2026-08-15 - D-Hero: eight strands, and the aperture becomes a background

The founder drew over a screenshot: lines coming down from above the frame on the right,
looping around the window, and carrying on down below it, eight of them, in provider
colours, with a glow and a loop. Also: the window five per cent smaller, the providers
inside it bigger and carrying their prices, the whole field softened so it reads as a
background, and the stage no longer dissolving at the end.

**The shape is the brand's own letter, and that is why it is allowed.** D-Brand: the
identity is Crop, one letterform larger than any frame with a window cut out of it, and a
`d` is a stem and a bowl. Eight strands, each a stem coming down and a bowl around the
aperture, is that letter drawn eight times at eight radii. A ring of neon around a circle
would have been a decoration this product has no argument for; this one is the mark.

**The colour is borrowed, not new.** Each strand is the fill of a mark already inside the
window, read out of `design/visuals/logos/<name>.svg`, and the generator refuses to write
if one has moved. D-Concept gives petrol three jobs inside a screen and D-Brand a fourth in
the chrome; provider colour is a fifth thing that has been legal inside this aperture since
the day it was drawn, and one ring further out is the same borrowed colour, not a palette.
**Rejected: a single petrol strand.** It would have made the ribbon the product's own voice
and given petrol a job it does not have.

**Eight glowing objects at once is Vegas**, which is the one rule this round took whole from
the motion-graphics craft. So the strand itself is a hairline at 0.14 opacity and what moves
is a comet: a 42 unit head, a 62 unit middle at half and a 150 unit tail at a fifth, each
lagging the one in front by exactly its own length. The lag is a fraction of the strand's
own duration rather than a number of seconds, because the eight run at eight different
speeds - 13.3 to 19.3 seconds, none of them round, for the same reason the five marquee
bands are 47, 39, 33, 43 and 36. At one speed eight strands are a loading spinner.

**The glow is two wide soft strokes and not a `drop-shadow`, and that is a measurement.**
Eight drop-shadows are eight filter passes over an 800 x 828 box every frame: measured at
1440 x 900 while scrolling, the page went from 8.3ms a frame to **16.7 with a p95 of 25**,
which is 40fps on the one screen in this product that has to feel expensive. Removing them
put it back to 8.3 exactly, level with `design/index.html`. The blur on the field costs
nothing, because it is a static filter on a layer the marquee composites inside.

**The field is a background now.** The chip was a 64px disc carrying a mark alone, sized for
recognition at a glance; it is a pill with the item's own price beside a 40px mark, blurred
by a hair and held at 0.62. It stops being a row of icons and becomes what the promise
beside it describes: money going out, named and priced, drifting past. `design/index.html`
keeps the disc, where the field stands under a headline that has to stay readable.

**And the stage does not dissolve at the end**, on the founder's word: the shared component
fades the whole pin out over the last twelve per cent, which is right where a stage hands
over to something that has to be read next, and wrong here, where the deck is the last thing
the reader was given. The sticky simply releases and the page carries on under it.

**Two defects found in the sizing, both of the same family.** `--owidth` was written
`min(36.1rem, 62.7svh, 100%)` and then `min(..., 44cqw)`, and a custom property is
substituted at the point of USE: every unit inside it that depends on a box resolves against
the reader's box, not the writer's. The window read `100%` against the swap and the svg read
it against the pin - 440 against 502 at a 1000px window, twelve pixels of air between the
glass and the first strand at 1440 and forty-three at 1000. `44cqw` was worse: `.storyswap`
is itself a query container, so the window resolved it against its own 620px parent and came
out 273 instead of 564. The variable carries only what a root can answer now, `rem` and
`svh`, and each site writes its own box-relative cap in its own terms. Separately, an svg
with a viewBox is a **replaced** element: given `top: 0; bottom: 0; height: auto` it does not
stretch between them, it takes its intrinsic ratio, and 400 x 1200 at 800 wide is 2401 tall.

## 2026-08-15 - D-Hero: the clock is shaped, and `linear` was the decision nobody made

The founder asked for the candidate hero to be soft on the scroll. The stage was already
doing everything it had been asked to do, and it read like a scrubbed video, because every
animation on it ran on `animation-timing-function: linear`. On a scroll timeline that is not
a neutral default: it welds the object to the scrollbar, so it starts the instant the wheel
does, moves at exactly the wheel's rate and stops dead where the wheel stops. Nothing
accelerates, nothing arrives, nothing settles.

Three curves now, each naming a job and declared locally on the pin: `--ease-arrive`
(expo-out) for everything coming on, `--ease-leave` (its mirror) for everything going off,
and `--ease-settle`, a spring written as `linear()` with a single overshoot of 1.5% at 66,
used in exactly one place - the deck closing over a cancelled plate. **Rejected: more
overshoot.** A calm product that bounces has changed what it is saying; this much is a card
seating itself.

Four shared keyframes were opacity and nothing else, which is right on `design/index.html`
where they carry a card and a figure that never move. The candidate has its own set: the
heading arrives out of focus and lands, a reason card glides in **from the side it stands
on**, the four totals and the four counts **roll** instead of crossfading, and the badge
turns over with a small scale. The roll is the one that matters: $192.90 becoming $174.91 is
the most important number on this stage, and a crossfade puts both values on screen at half
opacity on top of each other for a third of the handover, with neither readable.

The deck's arrival is a **stagger** and the `clip-path` that used to be it is deleted. A clip
sweeping down the deck revealed the plates in order because it swept past them in order, and
it also drew each of them half-built: a 76px card behind a 66px step shows one band at a
time, and a wipe through that band is a card sliced across its own mark. Every plate has its
own range now, 0.9 points apart, and the front plate arrives with the deck itself.

**Three defects found by the round rather than caused by it.** The depth ramp stood at the
top level of the file, so its `margin-top` applied on a phone and a plain mobile column had
fourteen rows biting up to 54px into each other. In reduced motion the deck cannot roll, so
ten of its fourteen plates stood between 0.21 and 0.05 opacity for the one reader who has to
read the list rather than watch it; the release flattens the ramp now. And released from the
pinned layout, the window and the three cards became grid items again, both still asking for
an area the pin's template does not define - an item asking for an area that is not there
goes into an implicit column, and the pin came out with five columns inside 920 of content
width and 136px of sideways scroll at 1000 x 800.

One fix went into the shared component, at the base rule and not in a release: `.storyswap`
takes `grid-template-columns: minmax(0, 1fr)`. An `auto` track sizes to max-content, and the
max-content of a row of the fourteen is 310px; in a 242px box at a 320px window the track
came out 310 anyway and put 31px of sideways scroll on the document in both themes. The row
already knew how to be narrow and was never asked to be.

Instruments: a 25-position scrub of the arrival window at 1440 reading all fourteen plate
opacities, the seven beats screenshotted and probed, 276 width-sweep probes, 560 screen
renders in both themes, and a reduced-motion probe at five sizes on both landings and the
grey. Ground: `design/kit/landing-orbit.html`, sections Anatomy and Limits.

## 2026-08-15 - D-Hero: the deck rolls, and every plate is the same card

The founder, on the built page: "все нижние должны быть такие же как первый, и первый уходит
вверх и исчезает, а под ним который будет становится на место первого".

**One card, fourteen times, at fourteen scales.** The front plate used to carry its own taller
box, its own mark size and its own type, and the moment it was cancelled that made the deck
wrong twice over: the card at the front vanished and the one behind it stayed a small row, so
the deck had no front at all. The special case is gone; the ramp is the only difference between
plates.

**The list is TOP anchored, and that is what lets the deck roll.** Bottom anchored, a plate
collapsing at the front moved the list's own top edge down by exactly as much as it moved its
contents up, so the deck did not move: Netflix vanished and left a 76px hole above a Disney+
that was still a small row. Top anchored the plates below come up on their own, which leaves the
second plate one `--pbite` too high and still at its ramp scale of 0.957 - so the list comes
down by `--pbite` and grows by `--pstepk`, which is 1 / 0.957. The second plate lands on the
first one's mark at the first one's size and every plate behind it moves up one place with it.
Two numbers, both of them the ramp's own, and both inside the one keyframe set that already owns
the list's transform.

**The clip opens upward at the end.** Every plate after the first carries a negative
`margin-top`, so the moment the front plate collapses the second sits ABOVE the list's own top
edge and `inset(0 ...)` cut it in half. That is the clipping the founder photographed.

**The steps are not even, and that is the whole difference between a deck and a stack of
clipped rows.** A plate is 76 tall and its content 40, so an even step of 38 left the second,
third and fourth plates showing the bottom half of their own mark and the bottom half of their
own name. Near the front the step has to clear the content; far back the plates are scaled,
faded and blurred to where the step is only depth. 66 at the front falling to 22 at the back:
thirteen numbers adding to 510, which with the front plate is a 586px deck in a window that is
560 at its shortest, and the last three plates stand at 0.05 opacity and below.

**No recline.** A `rotateX` on the whole deck was carrying the depth before the blur did, and
the two together read as a photograph of a screen rather than a stack of cards. The founder's
own drawings have no rotation in them at all.

**And the deck's look is behind the point, like everything else this file says.** A 76px plate
with a 40px mark and the name at title size is 142px wider than a 390px phone, which is what a
check of the overflow in both motion settings said the moment the plates grew. The look of a
thing belongs in the same query as the composition it was drawn for.

## 2026-08-14 - D-Hero, the second half: one band at the top, a card at the front, and the scroll settles itself

The founder drew the cascade state and marked four moves on the built page.

**The top band.** The section's heading takes the top CENTRE, with the count on its left and the
example total on its right: three things on one band, above the deck. The heading leaves the
promise's cell to get there - it never shares a moment with the promise, so nothing was keeping
them in one box - and it is capped at the deck's own width, which is what keeps it off the count
at a 1000px window. It arrives once and holds, rather than handing off: centred above the deck
it is the title of the picture, not a caption passing through.

**The two corners come out of the grid**, and that is what raises the promise. As grid items
they held a row about 126px tall, and on the first screen - where they are translated to the
FOOT of the stage - that row was 126px of nothing at the top with the promise sitting under it.
The count is left aligned on the column the promise starts from, rather than centring its figure
over its own word.

**The front plate is a card and the rest are its shadow.** A taller box, a 56px mark, the name at
title weight and the price with it; everything behind it is the same markup at a smaller scale.

**NO DATE LINE, and that is a refusal.** The founder's drawing has "Aug 3" under the name. There
is no next-charge date for these fourteen anywhere in `voice/docs/microcopy.md` - the canonical
dataset is name, category and price - and a date invented for a demo is the same mistake this
log already records against nine invented prices. If the card should carry a date, the fixture
table gets dates first.

**The scroll settles on the beats.** Seven anchors down the section, one per moment the stage
has, so a five-screen stage with about four hundred positions in it stops on a picture.
`proximity` and never `mandatory`: mandatory snapping on a document scroller takes the page away
from the reader, and anything between two anchors becomes unreachable. The anchor positions are
the ranges, as arithmetic: the stage is 560svh, its pinned part is 460svh, so the beat at
`contain N%` is `4.6 x N` svh down the section. They are written next to the ranges they come
from, so changing a beat moves its anchor. The declaration sits on `:root:has(...)` because the
scroller is the document and a class on the body cannot reach it; nothing outside this stage
carries `scroll-snap-align`, so nothing outside it changes.

**Three defects, and all three are one sentence: a property set for one purpose decided
something else.**

- `.ocount` and `.ototal` carried `position: relative` from a rule whose only job was a
  z-index. When they became absolute, later in the file at the same specificity, that line
  quietly put them back in the flow: the total's bottom edge landed at 1316 in an 800px window.
  An absolutely placed box is a positioned box and needs no help to take a z-index.
- `landing-story.css` pins the same two to `bottom: var(--space-8)` past 80rem, and an
  absolutely placed box given both a top and a bottom with `height: auto` is STRETCHED between
  them: 1292 in an 800px window, and only past 1280, the one band nobody re-measured. Naming
  the edge you are not using is how you take an edge back.
- `.saystack` was `position: relative` so it would paint over the window, and that made it the
  containing block of everything absolute inside it - including the heading, which is meant to
  be centred on the PAGE and came out centred on the say column, drawn straight through "14
  subscriptions". A positioned ancestor is a decision about every descendant, not only about
  paint order.

## 2026-08-14 - D-Hero, the geometry pass: five collisions, and four of them only existed on a small window

The founder, looking at the built page on their own screen rather than at a screenshot of it:
"смотри как ужасно выглядит". Everything below was measured at 1000, 1280, 1440 and 1680, and
four of the five were invisible at 1440 and above, which is where every earlier check had run.

- **The headline started at -20 at a 1000px window.** It is deliberately wider than its column,
  and `landing-hero.css` centres it with `margin-inline: auto`, which on a box wider than its
  parent splits the overflow between BOTH sides. Worse, without `min-width: 0` the stack took
  the headline's max-content as its own width and was then laid out from its centre. The
  overflow belongs on the side the window is on: `justify-items: start` and a floor of zero.
- **The section's heading and the deck's front plate were in the same 250px.** Heading at
  y 215..293 across x 40..589; front plate at y 236 across x 330..950. At 1440 the plate starts
  at 310 and there was nothing to see. The heading now says its piece and is gone before the
  deck arrives, and the three cancellations, the four totals and the three reason cards all move
  back with it - written at this file's specificity, so `design/index.html` keeps the timings it
  was verified on.
- **A reason card was at x=0 with no gutter at 1280.** `landing-story.css` sends the cards to
  the sides from 80rem at a fixed 334px off the centre, and at 1280 the sum is
  564 + 2 x 336 + 80 = 1316 against a 1280 page. The offset is the deck's half-width plus air
  now, clamped by `min()` to the page's own gutter, and the side point is 85rem.
- **The two figures cleared the fold by 7px** on the first screen, which is not clearance.
- **Chips were hard-clipped at the window's rim.** The radial mask faded too late to reach it.

**And one thing was tried and rejected in the same pass.** Giving the reason card a slot of its
own below the deck left the deck 384px of a 560 window, and a 52px plate biting 32 into the one
above it shows twenty pixels of itself: the mark clipped, the price gone, four plates reading as
one smear. The card lies across the deck's foot instead, covering the last four plates, which
stand at 0.2 opacity and below and are depth rather than content. This is what the component
already does on its narrow arrangement.

## 2026-08-14 - D-Hero, the three frames: the figures start low and rise, and the list is a deck

The founder drew all three states rather than describing them, which settled two questions the
previous amendment had answered backwards.

**Frame one:** the promise on the left, the window beside it, and the two figures in the BOTTOM
corners. **Frame two:** the promise gone off the top, the window still on the centre line, and
the two figures now at the TOP corners. **Frame three:** the window gone and a DECK of cards in
its place, front one square on, every card behind it smaller, lower and fainter, with the
reason cards at the sides.

**So the figures are not placed at the top, they ARRIVE there.** A grid area cannot be
animated, so the placement is the one they end in and the travel is a transform: the stage is
`100svh - 64` tall and the top row with its air is 126, so the distance to the foot is
`100svh - 190px`. The promise leaves upward rather than dissolving where it stands, because in
frame two its last line is half off the top of the screen: the page is moving under it, and a
block that only loses opacity reads as a light going out.

**And the list is a deck rather than a column of plates.** Each plate carries its own scale and
its own opacity as VARIABLES, overlaps the one above it by `--pbite`, and paints behind it: the
front plate is at full size, the fourteenth at 0.44 and 0.12. Fourteen pairs of numbers written
out rather than computed, because CSS has no counter to do the arithmetic with and a generated
ramp nobody can read is worse than a table anybody can correct. The twelve-row frame and its
mask are deleted with the column they were for: stacked, all fourteen are on the stage at once
in 480px instead of 620, and the opacity ramp does what the mask was doing at the far end.

**Variables and not properties, and that is what makes it compose.** The cancellation animates
both `transform` and `opacity` on the same node. A keyframe that wrote `scale(1)` would snap
the eleventh plate back to full size on its way out, and `opacity: 1` would light up a plate
standing at 0.28. `sgo` reads `var(--pscale, 1)` and `var(--pfade, 1)` instead, so a plate
leaves from wherever it stands in the deck and the fallbacks are what the plain column uses.

**Two defects, both of them a rule of this file beating a rule of the other at a specificity it
had no business winning.** `.sline.cut { min-height: 0 }` is 0-3-0 and the deck's own
`min-height` is 0-5-0, so all three cancelled plates faded on the spot and the deck never
closed over them - the chip still turned and the count still stepped down, so nothing looked
broken, it just stopped being a deck being dealt from. And the section's heading arrived at 8%,
which is the middle of the count's climb up the left edge: "14 subscriptions" was drawn through
"Tendd is not a budgeting app" for a fifth of the scroll. The beats are in order now: the
promise leaves, the two figures take the top, and only then does the section say its own name.

## 2026-08-14 - D-Hero amended again: the figures take the top and the window becomes a cascade

The founder, on the candidate, with the two bottom corners circled and two arrows drawn up to
the top of the screen: the count and the example total belong at the TOP, the promise moves up
under them, the window stays on the centre line, and it turns into "каскадные 3д плитки с
подписками, первая сверху и потом все ниже ниже ниже".

**What changed.** The stage's top row is now the two figures, left and right; the promise reads
under them, about 110px higher than it was. The window's dive is DELETED: it was built to
travel down to the example total, and the total is at the top now, so the movement had nothing
at the end of it. The list stops being one card with fourteen rows and becomes fourteen
PLATES, each with its own ground, hairline and shadow, leaning away from the reader as they
descend - the recline is anchored at the TOP, which is the whole difference between a cascade
and a table seen at an angle. It arrives by an inset `clip-path` opening from the top down, so
the plates reveal in their own order with one rule instead of fourteen ranges.

**The plates are anchored to the foot of the window and not to its middle.** Centred, the first
plate arrived at y=246 at 1440 and landed across the section's own heading in the column beside
it. The cascade runs downward from where the window is, so its top edge belongs below the
heading; the plates are 32 rather than 40 to keep twelve of them on the stage after the move.

**Three defects, all of them the same shape: a rule that was written for the spread and applied
everywhere.**

- The whole composition sat in an unguarded `@supports` block, so at 390 it applied too: the
  wrap resolved to `52cqw` of a phone, which is 203px, and the plates inside it were 310 wide
  and hung off the side of the page. It is behind `@container story (min-width: 60rem)` now,
  and under the point this file has nothing to say.
- `.storyhead` carries `grid-area: head`, which is correct on its own page, where the heading
  is a grid item of the stage. On the candidate it is a child of `.saystack`, whose grid has
  never heard of `head`: the name resolved to an implicit line, the heading went into an
  implicit COLUMN beside the promise, and the headline hung 26px off the left edge of a phone.
  An item asking for an area its grid does not define is the third time that mistake has been
  made here.
- Deleting the dive's keyframes left ONE stray closing brace, which swallowed the entire
  reduced-motion block below it: the stage stayed pinned with no motion at all. A stray `}` at
  the top level is a parse error a browser recovers from silently, and nothing about the page
  looks wrong until you ask a computed style what it thinks.

## 2026-08-14 - D-Hero amended: the window sinks to the figures, and the list is a deck

The founder, on the candidate page and in one message: the copy stays where it is, the round
window travels DOWN until its top edge reaches the example total, and only there does it turn
into the list; and the list itself becomes a cascade seen slightly from below, where a
cancelled line's status turns to "Cancelled" and the line then flies up and out while a new
one arrives from underneath.

**What that changed, and what it did not.** No new data and no new copy. The fourteen, their
prices, the three that go and the four totals are still the fixture table in
`voice/docs/microcopy.md`, untouched. What changed is three CSS facts:

- The window's fall is `50svh - 32 - 103 + 0.74 x min(19rem, 33svh)`: half the pin, less the
  height of the example total, plus the radius the window keeps after shrinking. The first cut
  was a proportion of the window's own wrapper, which is not the box the travel is measured
  against, and it stopped 180px short at 1440 and 270 short at 1920.
- The list is framed to TWELVE rows of fourteen, so two of them begin below its edge and rise
  into view when a line above them folds away. The arrival is the flow doing its work; nothing
  was invented to arrive. Twelve and not ten, because the second and third cancellations are
  the 11th and 13th lines and both have to be inside the frame at their own moment.
- A cancelled line collapses its own `height` to nothing after its chip has turned, so the
  lines under it come up on their own. One keyframe set with stops at 30 / 55 / 100, not two
  animations: `fill-mode: both` means the second would simply replace the first.

**Rejected: inventing three more subscriptions to arrive from below.** It is the obvious way
to read "a new block flies in", and it would have broken the one thing this section is for:
the total steps down only when something visible is cancelled, and every step is the price on
the line that just went quiet. A row arriving with a price on it would either be a
subscription the fixture table does not have, or a number the total has to ignore. Framing
the list instead gives the same movement out of the fourteen that are already true.

**Three defects the change surfaced, all silent, all in the release paths.** This file's
composition is written at 0-5-0 and 0-6-0 to place the candidate; `landing-story.css` releases
the pin at 0-2-0 and 0-4-0, the specificity of the rules it undoes IN ITS OWN FILE. So every
release lost. With no motion asked for, and on any window under 680px tall, the stage stayed
pinned and the swap - whose children are absolute - resolved to a height of ZERO; on a phone
the round window faded away on scroll while the list, the figures and the cards all stood
still, one object animating alone on a stage that had let go. And with the swap's
`overflow: hidden` gone in the no-motion branch, its one `auto` grid track sized to the
max-content of a marquee band, which is both of its copies end to end: `design/index.html` had
2664px of sideways scroll at 1440 with motion off, and it had it before this change too. A
band clips its own track now, and the track is `minmax(0, 1fr)`.

**The instrument that found all three: asking for the overflow in BOTH motion settings and at
BOTH ends of the height range, on both candidate pages at once.** Every earlier check on this
stage ran with motion on and measured the list rather than its parent.

## 2026-08-14 - D-Hero: the hero moves, and the value is demonstrated rather than claimed

Written after three attempts, and it records the two that were thrown away as well as the
one that stands, because both failures were about the same thing: what the page is allowed
to say with a number.

**The founder's ask.** The first screen was boring. It should carry a wow effect: a matrix
of real apps sliding through one big square, the top band travelling right, the middle
left, the bottom right; and then, as the reader scrolls into "Calm control of your
recurring money", the subscriptions travel with them, become a list, one after another
flips to cancelled, and the total appears at the top and comes down.

**What was built.** Two blocks, and they are two components. `landing-window.css`: the
hero's opening, all fourteen merchants as squares on three drifting bands. `landing-cut-list
.css`: at the foot of "Calm control", the same fourteen as the product's OWN `.row`s, with
a sticky head, three cancellations spaced down the scroll, and a total that steps 192.90 to
174.91 to 161.92 to 144.92, each step at the moment of the cancellation that causes it.

**THE FOURTEEN PRICES ALREADY EXISTED AND THE FIRST BUILD INVENTED THEM.** `voice/docs/
microcopy.md` has carried "Canonical subscription dataset" since the voice stage: fourteen
subscriptions, their categories and their prices, summing to $192.90. The first version of
this block did not look, concluded that "the total was a number with nothing under it",
invented nine prices to close it, and shipped three that contradict the fixtures: Disney+
9.99 against 13.99, Hulu 9.99 against 7.99, Notion 10.00 against 8.00. The claim written
into the decision log at the time was wrong on both counts. Corrected here, and the script
that writes the markup now reads the fixture table line by line and refuses to write
anything that disagrees with it. One owner per string, and the owner was already named.

**Rejected: $79 as the end figure**, which is what the founder's sketch asked for. It would
mean cutting $114 of a $192.90 stack: a 59% saving is a claim this product makes nowhere,
and "Example, not your data" does not make a claim like that safe on the one surface whose
job is to be trusted by somebody who already does not trust finance apps. **$144.92 instead,
and every part of it is the product's own:** Netflix $17.99, which `cancel-win.html` cancels
and frees exactly this much; The New York Times $17.00 and Peloton App $12.99, the two
`home-savefocus.html` flags as not opened in weeks. Those two are also the two behind that
screen's own line, "You could save up to $29.99 a month by cutting 2": 12.99 + 17.00 =
29.99. A reader can check the whole thing against the rows in front of them.

**Rejected: a number that moves in the hero.** The first build had a giant watermark figure
climbing 192 to 199 behind the tiles, on a clock, to say "it goes up on its own". It made
the page argue with the $192.90 printed two lines above it. A number that changes for a
reason a person can see is a demonstration; a number that changes on its own is a claim.
The hero's figure is now still, and the only number that moves on the whole page moves
because something on the screen was cancelled. `--text-ghost`, the role added for that
watermark, was removed the same day: a token with no reader does not exist.

**Rejected: the gathered grid**, the second attempt, which had the fourteen settle into a
grid at the foot of "How Tendd works" and one of them disappear. It was the right mechanism
in the wrong place and at the wrong strength. The founder's redraw put the block at the END
OF THE ARGUMENT ABOUT CALM CONTROL, made the tiles into the product's own list rather than
into another grid, and made three things flip rather than one - and it is better, because
the list is the thing the product actually gives you and a hole in a grid is not.

**Rejected: a phone mockup in the middle of it**, which the founder floated as a maybe. It
would be a picture of the product drawn by the landing, which `landing-hero.css` refuses in
its first paragraph. The rows here ARE the product's rows, through the same stylesheet.

**Four things about the mechanism, all of them found by measuring rather than by looking.**
The `animation` shorthand resets `animation-range` and `animation-timeline`, so a shorthand
after a range silently erases it: longhands only. A moment rule has to be written at the
same specificity as the rule it is timing, and the first draft timed the chips at 0-5-0
against a 0-6-0 and all three cancellations fired at once across the whole range. Two
animations on one property cannot give one element a fade-in and a fade-out at two
different moments, because `fill-mode: both` means both are always applying and the later
one always wins: the two edges have to live in one keyframe set with percentage stops. And
`:nth-of-type` counts by TAG, so three rows that are each the only child of their own `li`
are all number one; the moment is a class in the markup instead.

**Cancelled is the one new word on the page**, registered in `voice/docs/microcopy.md` with
the spelling `cancel-win` already uses, along with the four totals and the four counts. Both
chips are real text in the page: CSS cannot rewrite the words inside an element, and a
string rendered from a stylesheet is a line of product copy the voice inventory cannot own.

**Both blocks changed a frozen file, and that is a founder's decision** written into
`wireframes/index.html` at each block it changes. In the grey the squares stand still and
all fourteen rows are live at $192.90, which is exactly the state a browser without
scroll-driven animation is given, and the state `prefers-reduced-motion` is given.

### Amended the same day: one stage, not two blocks

**The founder saw it and said "все это смотрится очень плоско".** The diagnosis was
structural rather than decorative, and it is worth writing down because it is the reason
this entry exists twice. Two blocks a screen apart said one thing in two places. Between
them the reader was given a CUT: the field ended, a section boundary passed, a list began.
No amount of easing makes a cut feel like a transformation, because the two shapes are
never on screen at the same time and the reader is never shown the second being made out
of the first. What was needed was a SHOT: one stage that holds still while the content
inside it changes.

**What replaced them.** `landing-story.css`, one organism, and both of the others were
retired the same hour along with their kit pages, their registry rows, their inventory
lines and their imports. The section is tall, a stage inside it pins under the bar, and
the `contain` phase of its view timeline is exactly the part of the scroll where the pin
is stuck. In that phase: the field drifts, gathers to the middle and fades as the list
rises into the same place; three lines are cancelled one at a time; the total steps down
at each; and each of the three benefit cards this section always carried arrives beside
the list just before the cancellation it explains. Nothing was invented to fill it: the
head is the four lines that used to sit in the hero's panel plus the heading and paragraph
this section always had, and the cards are its own copy.

**The hero lost its second column in the same decision**, which is the half that is easy
to miss. It is now the promise alone, centred: eyebrow, headline, paragraph, two actions,
reassurance. The proof did not disappear, it moved somewhere it has room to happen.

**Rejected: a JavaScript motion library.** The founder linked GSAP and asked whether a
skill or a tool was needed for this. Nothing here needs one. `position: sticky` and
`animation-timeline: view()` are the whole mechanism, they are in the stylesheet the
product already loads, and they degrade to a readable static section on their own. A
library would add a dependency, a script the page has to wait for, and a second place
where motion is described, on the one page whose job is to load fast for somebody who is
already suspicious.

**Rejected: keeping the product's `.row` in the list.** Fourteen of them are 812px and no
phone holds that plus a head. Restyling `.row` inside a host is the contextual override
the architecture forbids, so the story declares `.sline`: the same atoms, a different
object, and its logo size lives in `logo.css` beside the other host sizes rather than in
the component that wanted it.

**Three things measured rather than assumed.** The stage pins under the bar at 64px and 72
past the tablet point, not at 0, or the heading sits behind it. A grid track's automatic
minimum is its content, so the stage needs `minmax(0, 1fr)` and the swap `min-height: 0`
or fourteen lines push the head off the top. And the four totals must never overlap: the
first cut cross-faded them over six per cent and $192.90 stood at half opacity behind
$174.91 at the largest size on the page, so they now hand off with a hold instead.

### Still open the same day: two heroes, and the founder is looking at both

**Not a decision, a pair of candidates.** The founder asked for the centred hero to be kept
and a second one built beside it, and drew the second over a screenshot of the first: the
promise off the centre line to the left, a round window of subscription platforms in the
middle, the count in the bottom left corner and the example total in the bottom right.

  A  `design/index.html`         centred. Eyebrow, headline, paragraph, two actions,
                                 reassurance, symmetrical, and the proof happens in the
                                 stage below it. An opening statement.
  B  `design/index-circle.html`  a spread. The argument holds the left edge, a round
                                 window holds the middle, the two numbers hold the bottom
                                 corners, and the stage below opens on the list because the
                                 window has already shown the fourteen.

**Nothing in `wireframes/` moved for B.** The grey is the structure contract and a contract
changes for a decision, not for a candidate. When one is chosen, the other is deleted with
its component, its kit page, its registry row and its import, and the grey follows the
winner in the same step. `landing-orbit.css` says this in its own header and `design/kit/
landing-orbit.html` says it on the page.

**B carries a third width point and it is deliberately not registered.** The composition
becomes a spread at 72rem. It was 64 until the founder asked for the headline on two lines:
a two-line headline is about 580px of its own 800-weight face, it is allowed past its column
on purpose so it lies across the window's left edge, and under 1152 there is not enough left
for a window beside it. The point is local to the candidate. If B wins, it is either
registered in `tokens.css` or the composition is changed to live without it: a candidate
does not get to add to the width scale on its way past.

**A fourth round of corrections from the founder, same day, all on B.** The stage had a
centred head above the list carrying the label, the total, the count and the caption, and
the hero already carries all four in its two bottom corners: the same four lines twice on
one page, and a second centre of gravity competing with the list. The head is now the
heading and its paragraph, quiet and left aligned, and the TWO CORNER FIGURES CAME DOWN
FROM THE HERO INTO THE STAGE and count down there, on the same two verticals, so the eye
never has to find them again across the section boundary. The heading and its paragraph
were kept rather than deleted with the rest: they are the section's own body copy and taking
them off the page is a content decision, not a layout one. Deleting them is one line if the
founder wants it.

**And the two-line headline had a width point on it, which is why the founder saw four
lines.** `width: 15ch` sat inside `@container (min-width: 72rem)`, so on any window under
1152 it fell back to `landing-hero.css`'s 14ch and ran to four lines. It is
`min(15ch, 100cqw - 5rem)` now and carries no point: two lines from a 641px container up.
The spread still needs 72rem, because a 580px headline plus a window beside it does not fit
under 1152, but the headline no longer waits for it.

**Three corrections from the founder, 2026-08-14, all on B.** The promise reads from the
LEFT EDGE: the first cut carried `.lp-hero` in its markup and inherited that component's
`text-align: center`, so an asymmetric composition had a centred column in it. The headline
is TWO LINES and crosses the window by about 72px at every width past the point, which is
also what takes the composition back inside one screen: at four lines it was 909 tall at
1440 x 900 and is now 689. And the window's mask in the HERO is off centre, at 64% with its
solid core pulled in to 40%, so the left of it is nearly empty and the sentence crosses
quiet ground rather than drifting colour. The stage below keeps the centred mask: nothing is
written over it.

**Five more defects found while making those corrections, none of them visible until the
layout changed.** A card centred with `left: 50%` and `translateX(-50%)` keeps the transform
when it goes back into the flow, so on a phone it sat 168px off the left edge of the screen.
`container-type: size` means a box does not grow to its contents, so wherever the pin is
taken off - reduced motion, a short window - the swap collapsed to zero height and the list
was drawn outside a box of nothing; that was true on BOTH pages and no check had looked,
because every check measured the list and none measured its parent. The reason card's width
was written in `50cqw` while it is positioned from `50%` of the pin: two things that look
like half the page, one of which is, and at a 1280 window the card came back 336 wide where
282 is all there is, so the page scrolled sideways by 30px. Below 64rem the count and the
total were absolutely placed in corners a phone does not have and sat on each other and on
the card. And under about 680px of height the stage cannot hold a head, a list, a card and
two figures at once - at 320 x 640 the list's window resolved to 62px - so below that
threshold the stage lets go and the section lays out as a column.

**One line that is load-bearing and looks like tidiness.** `.osay` carries `width: 100%`.
The wrap says `justify-items: start`, so a grid item with no width is sized by its
MAX-CONTENT, and the headline's deliberate overflow became the whole block's width: the
paragraph and the reassurance line stretched out under the round window and were painted
over by it. The headline is the only thing here allowed past the column.

**`.fromcircle` is a declared modifier, not an override.** On B the stage opens on the same
round window the hero opened on, and the window CONTRACTS INTO THE LIST rather than three
tracks gathering into it: showing the fourteen in a circle and then again on tracks is the
same picture twice. Written as `.lp-orbit + .lp-story .storyfield { display: none }` from
the hero's file it would be an undeclared variant, and the next person to read
`landing-story.css` would have no way to know the component has two shapes. A component
with two shapes says so in its own file, and so `.orbit` and everything inside it stopped
naming a host: the hero places one and the stage places another, and what the window looks
like is written once.

**A screen and a half, and the number is arithmetic.** The section is 560svh on B rather
than 460, so its `contain` phase - the part of the scroll where the stage is pinned - is
460svh. The fold runs over the first thirty per cent of it, which is 138svh, and it leaves
the three cancellations exactly where they already are at 35, 53 and 71. The window's range
and the list's OVERLAP by half the window's rather than meeting: the circle is still there,
at half opacity and eight tenths of its size, while the list is already rising through it.
Meeting would be a dissolve between two states; overlapping is one state becoming another,
which is what the founder asked for in the words "мягко нежно перетекать".

**Two things measured on B.** The section's own 192px of padding is taken off, because
`.lp-section`'s 96 top and bottom is the rhythm between blocks of ARGUMENT and this is the
first screenful: with both paddings the composition was 909 tall at 1440 x 900 and the two
corner figures fell off the bottom. And the window is 52svh rather than 62, because the
promise beside it sets the floor: 496 of promise plus 109 of corner figures plus 32 of air
leaves 468, which is what 52svh is at 900.

## 2026-08-14 - The landing, and the five things the system did not have

**23 of 23 screens are in colour.** The public page was held back deliberately: 57 classes of
which 39 were its own `lp-*` vocabulary, so it was a design pass rather than a translation. It
turned out to be far less new than that number suggested. **48 of the 57 components already
answered to `.landing`**, because the system was built with this page in mind from stage 07, and
26 of the 39 folded straight onto them: `.lp-btn` to `.btn`, `.lp-eyebrow` to `.k`, `.lp-cta-row`
to `.actions`, `.lp-grid` to `.grid`, `.lp-card` and `.lp-preview` and `.lp-path` to `.card`,
`.lp-paths` to `.grid.roomy`, the trust list to `.promises`, four muted slots to `.muted`.

**Five organisms were built, and each one exists because an app component could not do its job.**
The landing shell, because `app-shell.css` centres one column of blocks a person is working
through and this page runs full-bleed bands a person is deciding between. The landing bar, because
`.appbar` leaves the top of the glass at the tablet point and becomes the head of a rail, and a
public page has no rail to move into. The hero, the FAQ list and the site footer, none of which
has an equivalent anywhere in the app.

**THE ONE NUMBER RULE IS KEPT RATHER THAN BENT, and it is the page's central decision.** Inside
the app the biggest thing on a screen is a number the person owns, and 46px belongs to it alone.
On the public page that number does not exist yet: the only figure there is an example, labelled
"Example, not your data" in the frozen markup. So the headline gets **its own step above**,
`--type-hero`, and the example steps **down** to `--type-figure` by wearing `.amt.figure`, which is
the move the share card's total already made for the same reason. **The landing carries no
`.total` at all**, and `--type-display` still has exactly one job.

**`--type-hero` is fluid, and the first draft of it was not.** It shipped as a flat 3.5rem with a
comment refusing fluid on the ground that there was no content reason for it. Looking at the built
page at 390 produced the reason: at a fixed 56px the headline ran to **four lines and pushed the
lead, both buttons and the whole proof panel below the fold**. A headline that pushes its own call
to action off the screen is not a headline. It is now `clamp(2.5rem, 2rem + 2.6vw, 3.5rem)`, with
the min and max in `rem` so a reader's own font setting still moves it and only the middle term is
viewport-relative. Measured: 42px at 390, 52 at the tablet point, 56 from about 920 up.

**Four defects the build found, and three of them were in the system rather than on the page.**

1. *Three components had never been given `.landing`.* `brand-mark.css`, `brand-wordmark.css` and
   `grid.css` reached `.app` only, so the brand lockup **stacked** in the header and the benefit
   cards did not lay out at all. Invisible until something outside `.app` wore them.
2. *`.lockup` got its row from `.app .appbar .lockup`,* so on a page with no `.app` the mark and
   the word stacked even after the scope fix. Written out in `landing-bar.css` at the app bar's own
   values, so the mark reads identically in both places.
3. *A grid floor can be taller than its own container.* `minmax(320px, 1fr)` in a 288px zone
   produces a 320px track and the page scrolls sideways, because a floor is a promise not to
   shrink. It never fired inside the app, whose floor is 10rem, and fired on the landing at 320.
   Fixed at the component for every consumer: `minmax(min(var(--grid-col-min), 100%), 1fr)`.
4. *The bar did not wrap.* At a 24px root the two header actions measure 263px and the bar ran past
   a 390 screen. It wraps now, which costs one row of height at a text size most people never set.

**The footer's wordmark.** The grey wrote it as plain text. D-Brand says the last letter is petrol
**everywhere, with no condition**, so it is the wordmark now. The mark is not repeated there: a
second mark four thousand pixels down the page is a logo asking to be noticed rather than chrome
framing a page.

**Rejected.** A hamburger for the three section anchors (they point at content already under the
thumb on a phone; a menu that opens a list of them is a control that exists to look complete). A
fourth call to action in the footer (the page states it three times and the argument has ended).
An animated disclosure (a height transition needs a fixed height the copy does not have, or
`interpolate-size`, which is stage 11's decision about how this product moves).

## 2026-08-14 - The rollout closes: a declared size axis, two marks, and the last screen

Two founder decisions, both taken on the recommendation, and both paid for rather than worked
around.

**The size axis on the amount, and it closes a debt instead of adding to one.** `cancel-win`'s
figure is 40px in the grey and the fold table had already decided that number once: 40 goes to
`--type-figure`, because 46 belongs to the monthly total alone under the One Number Rule, which is
exactly how the share card's total was settled. So the size was never in question. What was is
whose it is. `amount.css` set this atom's font-size from **four host rules**, which is the shape
`CLAUDE.md` forbids by name (`.host .btn{font-size:15px}` is its own example) and which
`backlog.md` carried as one of four atoms sized by their hosts, with the fix recorded as owed and
unbuilt. Building `cancel-win` needed a **fifth**. Adding one more occurrence of a rule the system
forbids is not a way to build a screen, so the axis is declared: `--type-body` on the base,
`--type-figure` on `.amt.figure`, with the weight, tracking and `display` that travel with a
figure. **Zero pixels**, and it is measured rather than argued: all 66 amounts in the coloured
product snapshotted before and after on size, weight, leading, tracking, display and box,
identical. What stays with the hosts is not size and each one says so at its rule: `flex: none` in
a row is placement, weight 400 on a past charge is history reading as a texture, and the two
leadings (1.05 in a plan card, 1.08 in the hero) are what a container asks for. Three atoms are
still sized by their hosts (`logo.css`, `muted-line.css`, `big-total.css`); the same answer
applies and the same evidence is owed.

**`cancel-win` is the summary's form one, and that is the One Number Rule working rather than
getting in the way.** The block is a sentence running into a figure, which is the shape
`summary.css` already models: with a number the h1 is a **caption** and is deliberately quiet,
because a caption that competes with its own figure breaks the rule from above instead of from
beside. The hook read `:has(.total)` and now reads `:has(.total, .amt.figure)`. The two big numbers
of this product wear two different classes on purpose, so the selector names both rather than
pretending they are one. Zero pixels again: no `.summary` in the product contained an
`.amt.figure` before this screen, checked in the browser and not off the markup.

**Two marks, because the set was complete for a sample and not for the product.** `icons.html`
counted ten drawn marks and one character, and none of them was a bank or a source a person typed
in by hand, which is both slots of the Connections card. Left blank they took the **unmatched**
square, which means "we looked and could not name the merchant" and is a lie about a source we can
name exactly. So two are drawn, in the family's own terms: a pediment over three columns for the
bank, a pen on a rule for the private source, inline `svg` exactly as the unmatched question mark
is, taking the square's ink through `currentColor` so neither needs a colour rule or a dark pair.
Drawn rather than borrowed on purpose: the mark says "a bank", not "Chase", because the card names
the institution in words and a real bank logo is somebody else's trademark. Census recounted:
twelve drawn marks and one character.

**Rejected on the way.** A fifth host rule for the amount (one line, and it is the fifth instance
of what the system forbids). Reusing the shield for the bank slot (it means read-only trust on the
trust line, not an institution). Leaving the two squares blank (cheap, and it says the wrong
thing). Promoting `cancel-win`'s figure to `--type-display` (it would make 46px two jobs and undo
the One Number Rule for one screen).

**22 of 23 screens are now in colour.** The landing, `index.html`, stays grey by the founder's
call: 57 classes of which 39 are its own `lp-*` vocabulary, so it is a design pass rather than a
translation.

## 2026-08-14 - The rollout: 21 screens in colour, and what it found that the sample could not

**The count first, because it was wrong before it was right.** 55 grey product screens against 32
coloured, so 23 were missing and not the 16 anybody would have said: the four Alerts screens were
coloured at stage 09 and every count in the repository still said 28. Twenty-one of the 23 are
built here in six flows (Connect bank 5, Connections 4, Cancel guide 3, Sign in 3, Share snapshot
3, Data privacy 2, Path choice 1). Two are left and both are decisions rather than assembly.

**The recipe was read, not invented.** Three accepted pairs (settings, add-subscription,
home-loading) were diffed line by line, and the diff is the whole recipe: same structure, same
order, same copy, a different head and shell, and class names from the renaming map in
`design/kit/docs/inventory.md`. It runs as a script rather than by hand, so screen twenty-one is
built exactly the way screen one was; a hand edit does not survive the next clone.

**Measured on the built result, not on the intent.** Zero classes that `design/system/` does not
define, on all 21. Zero style blocks and zero style attributes. Zero horizontal overflow at 360,
900 and 1280. Zero contrast failures in the dark theme, where none of these screens had ever been
seen. 411 links in `design/`, none broken, and 32 cross-links into `wireframes/` closed because
their target is now coloured.

**Three defects, and the third is the one worth keeping.**

1. *The doubled chevron.* `app-bar.css` draws the chevron on `.back`; the grey also types one. The
   grey has 37 of them under **seven different labels**, not just "Back", so a first pass that
   matched the label left `< < You` on nine pages. Matched on the class instead.
2. *The placeholder string.* Four `[logo]` slots rendered the grey's literal text. No accepted page
   does, and `logo.css` states the rule at its own base rule: the mark is the content, and the
   answer to an empty slot is to draw one, never to shrink type until the words fit.
3. *A link the design system never reached.* On `data-privacy` a bare `<a>` inside `.actions`
   rendered **`rgb(0, 0, 238)`, the browser's default blue, in BOTH themes** - the single most
   out-of-language colour possible in a product built on one petrol accent. Swept: it was the only
   one on all 53 coloured screens. `quiet-line.css` already owns exactly this object, so the fix is
   one declared class on the existing `nav` and the element and copy do not move. `.actions`
   declares its children are buttons; an exit link is not one.

**One row added to the renaming map:** `.intro` to `.muted.lead`, and it is a fold rather than a
choice. `_wf.css:558` gives `.intro` 14px with its margin underneath, which is what `.muted.lead`
is; 14 to 16 is the 8px grid, the same rounding every other fold took at step 4.

**What is left open, and why it was not guessed.**

- **`cancel-win` runs into the One Number Rule.** Its figure is 40px in the grey. The scale has no
  40, and the fold table already decided this exact case once: 40 goes to 32 (`--type-figure`)
  because 46 is reserved for the monthly total, which is how the share card's total was settled.
  So the SIZE is known. What is not is whose it is: `.amt` is already sized by two hosts
  (`.plan-opt`, `.hero`), a third is what `backlog.md` calls an undeclared variant, and the
  declared alternative is the size axis that same row says is owed and unbuilt. One screen, one
  rule, and it is the product's most important emotional beat, so it is the founder's.
- **Two marks the set does not have.** `icons.html` counts ten drawn marks and one character, and
  none of them is a bank or "entered by hand". The two logo slots on Connections stand empty. The
  set was complete for a seven screen sample and is not complete for the product, which is exactly
  the kind of hole only a rollout can find.
- **The landing, `index.html`,** by the founder's call: it is 57 classes of which 39 are its own
  `lp-*` vocabulary, so it is a design pass rather than a translation.

**The counts in this repository now say 32 and the corpus is 53.** Not corrected here on purpose:
the number moves again when those two land, and a claim recounted twice in two days is a claim
nobody trusts. It is the closing task of the stage, by script, on the whole corpus at once.

## 2026-08-13 - The type scale goes to rem, because the width points already had

**The question, from the founder: why is the type in px, and should it be rem.** Answered by
reading rather than by convention. There is no decision in this log about the units of the type
scale, because there never was one: the eight `--type-*` steps were authored at stage 08, when the
job was replacing 21 shipped sizes and no variable for any of them, and units were not the
question that day. It was inherited, not decided.

**Why it had to change, and it is a contradiction rather than a preference.** Stage 10 declared
both width points in `rem` and wrote the reason into `tokens.css`: a point should ask how wide the
window is **relative to the text the person set**. That reason is only true if the text moves with
the setting. A browser's own font-size menu changes the root size; an explicit `px` font-size
ignores it completely. So the promise was half kept, and the half that was missing was the half
that mattered. Measured on `design/home.html` at a 24px root: the text stayed 16 and 12px, and the
900px window fell **below** the tablet point (47.5rem is 1140px at that root), so the rail went
away, the page measure came off and `.screen` went from 680 to 900. **The person who asked for
larger text paid the entire layout change and got no larger text.** The `rem` point was working
against the only person it was written for.

**Why nobody had noticed for two stages.** Page zoom is a different mechanism and scales `px` and
`rem` alike, so every check anybody had run - including the stage 10 width sweep - was blind to
this by construction. It only shows up under the browser's font-size setting, which no instrument
in this project was touching.

**What it cost, measured and not asserted.** Eight values in one file; 94 declarations in
`design/system/` already read them through `var()` and none of them changed. The conversions are
exact and none rounds: 46/32/24/20/16/14/12/10 are 2.875/2/1.5/1.25/1/0.875/0.75/0.625rem. The
root font-size is set nowhere in this system, so at the browser default every step is the number
it always was. Proved by DOM fingerprint - box, font-size, line-height and weight of every element
under `.app` and `.landing` - across all 32 coloured screens at 390, 760, 1280 and 1600, the px scale against
the rem one: identical, not one record different. **Recounted 2026-08-14:** the first pass read
7 660 off a page list of 28 that predated the four Alerts screens of stage 09 and named a
`design/index.html` that does not exist. The finding held; the corpus had grown under it.

**What stays px, and it is not an oversight.** Spacing, radii, the 220px rail and the 300px column
floor are **geometry, not text**, and the same distinction that denies the width block a dark pair
applies here: a width does not change direction in the dark and does not grow with a sentence. The
two things that genuinely had to scale with the text already did before this change - the reading
measures are in `ch` (`--container-text` is 52ch, 9 consumers) and every line height in the system
is unitless.

**One defect it exposed, and exposing it is the point.** At a 390px viewport the plan card's track
is 358px, and "Start Tendd Pro - $7.99 a month" on a non-wrapping button is 249px at the default,
302 at a 20px root, 329 at 22px and 356 at 24px. At 22px the card is 363 inside that 358 track; at
24px the page scrolls sideways by 16px. That is a real product defect at a setting Chrome offers
by name under **Very large**, and it was previously hidden only because the product ignored the
setting entirely.

**What we rejected.** Shortening the label, which is what `button.css` had told anybody to do since
stage 09 ("if a label cannot fit, the label is too long, and that is a question for microcopy").
That instruction assumes a label can be authored once and measured once, and with a `rem` scale
the text size belongs to the reader, so **no label exists that fits every root size**. Also
rejected: `min-width: 0` on the card, which lets the grid track shrink and moves the overflow from
the page into the card, which is not a fix; and moving the whole spacing scale to `rem`, which
would inflate the phone layout for a problem that turned out to be one button. Taken instead: one
scoped exception, `.app .plan-opt .btn` takes `white-space: normal`, written in `button.css`
because white-space is that file's property and a host reaching in to change it is the defect
`plan-option.css` names twice in its own header. It is the only button in the product whose label
is a sentence carrying a price and a period rather than a verb and its object.

**What is left open, named rather than shrugged at.** Swept live after the change and recounted on 2026-08-14 against the
true corpus: **672 renders, 32 pages by 7 widths from 320 to 1600 by 3 root sizes (16, 20, 24)**.
**Everything at 360 and above is clean at every root size.** One corner is not: at a **320px
viewport with a 24px root**, eight rows cross the edge and they are three things: `.btn.primary`
"Try another payment method" on `upgrade-payment-failed` (329px in a 288px zone), the app bar's plan
`.chip` on the five History and Trends screens (pushed out 25 to 32px by a brand lockup that grew
with the text beside it), and a `.btn` on `alerts` and `alerts-empty` by 7px, which the first sweep
could not see because its page list predated those screens. Not fixed here **on purpose**: the
general answer is whether `white-space: nowrap` on `.btn` can survive a text size the product no
longer controls, and that rule came from a founder finding on the etalon page, so reversing it is
not a builder's call. The two honest answers are an exception per host as each appears (two so
far), or dropping `nowrap` from `.btn` entirely, which stage 09 itself measured as zero pixels at
the default. Carried in `design/kit/docs/backlog.md`, the row about a button that may not wrap,
owned by the founder with Voice for the string.

## 2026-08-13 - The images go to WebP in two modes, and evidence is never compressed with loss

**What it weighed.** 17.4 MB of raster images in 52 tracked files, against 36 MB for the whole
working tree. Concentrated rather than spread: `research/screens` held 11.1 MB in 30 competitor
screenshots and one brand plate held 3.1 MB on its own. **One page carried 9.0 MB**,
`research/research.html` with 25 images and not one of them lazy, so a browser fetched all of them
before the reader had scrolled anywhere.

**Two modes, and the split is not a preference.** `wireframes/screens` and `design/screens` are the
was-and-became pairs: they exist to PROVE pixels, so compressing them with loss would damage the
thing they are evidence of. Those go to **lossless** WebP, where the bits of the image are the same
and only the container is smaller. Everything else is context rather than evidence, so competitor
screenshots, the brand plate and the logo generations go to **lossy at q82**. No file is written if
the WebP is not smaller than the PNG, which is a real case: the brand plate is 118% of its original
as lossless and 4% as lossy.

| Folder | Files | Before | After | Mode |
|---|---|---|---|---|
| `research/screens` | 30 | 11.1 MB | 2.2 MB | lossy |
| `design/concept/assets` | 7 | 4.4 MB | 0.5 MB | lossy |
| `wireframes/screens` | 6 | 1.0 MB | 0.3 MB | lossless |
| `design/screens` | 9 | 0.9 MB | 0.4 MB | lossless |
| **total** | **52** | **17.4 MB** | **3.4 MB** | **minus 80%** |

**And the page weight, which is what a reader actually pays.** Every screenshot below the first one
on a page now carries `loading="lazy"` and its intrinsic `width`/`height`, so nothing jumps as it
arrives. `research/research.html` went from **9.0 MB at first paint to 0.05 MB**, with 1.2 MB
arriving as the reader scrolls. The other three gallery pages went from about 0.9 MB each to 0.3 to
0.4 MB, and around 0.05 MB at first paint.

**One defect found on the way, and it had been live for months.** `apple-touch-icon.png` is named
by **143 pages** and answered **404** on the live site, because `.gitignore` carries a blanket
`*.png` for local verification screenshots and that blanket cannot tell a screenshot from an asset.
The file existed locally and had never been committed. It is whitelisted BY NAME now, and the
comment in `.gitignore` says why: an asset is named, a folder is not enough.

**What this does not fix, said out loud.** `.git` is 40 MB and keeps every original blob in its
history; deleting the PNGs today does not shrink it, and rewriting history to recover that is not
worth the cost of every clone and every link to a commit changing. A clone still pays 40 MB once. A
reader of the site pays 80% less than yesterday, every visit.

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
(`design/concept/assets/brand-plate-petrol-paper.webp`, Google Nano Banana 2, 4k, stored at
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
