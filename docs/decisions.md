# Decision log

What we did, why exactly this, and what we rejected on what ground. Newest on top.
This file is never loaded into a session automatically: read it when you need the ground
under a decision. Rules that must hold next time live in `CLAUDE.md`; status lives in the
README table and in `done:true` in `/_nav.js`.

---

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
