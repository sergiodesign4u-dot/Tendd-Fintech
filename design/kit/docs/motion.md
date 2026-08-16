# Motion - Tendd

Stage 11. What moves in this product today, where that movement lives, and which of it is a
decision rather than a leftover.

This stage does not start by adding motion. One surface of this product already carries a great
deal of it and the rest carries none, so the first job is to find out which is which, by counting
rather than by looking. A page that moves is the only kind of artefact in this system that a
screenshot cannot audit: a still frame of a scroll-driven stage is indistinguishable from a still
frame of a broken one. So the census is the instrument, and it runs before any curve is named.

**Visible place:** `design/kit/motion.html`, in the Foundations group after `icons.html`.

---

## Part A. The census: what moved BEFORE this stage touched anything

**Read this part as a photograph with a date on it.** Every number below is the product as it stood
at the opening of stage 11 on 2026-08-16, before step 2 changed it the same day. It is kept
unedited because it is the evidence Part B's decisions were taken from, and a census rewritten to
match its own outcome stops being one. What the numbers are today is in Part B and on
`motion.html`.

Taken **2026-08-16** by script over `design/system/` (base.css, tokens.css, index.css, **69
component files**, **3 patterns**), the **56 pages** of `design/`, `design/story.js` and
`design/system/behaviour.js`, the stand (`design/_screen.css`, `design/kit/_page.css`), and
`wireframes/` read-only. Comments are stripped before anything is counted, which is not a detail:
this file's own predecessors have twice reported a defect that was a sentence of prose.

### The headline: the product has no transitions at all

| What | How many | Where |
|---|---|---|
| `transition` declarations in `design/system/` | **0** | the two greps that hit are the reduced-motion guard's `transition-duration` and one sentence of prose in `faq-list.css` |
| Files in the system declaring any motion | **8 of 75** | six landing organisms, `skeleton-bar.css`, and `base.css` for the pulse keyframe and the guard. The denominator is every css file in `design/system/`: 3 at the root, 69 components, 3 patterns |
| `@keyframes` defined in the system | **31** | 1 in `base.css` (`pulse`), 30 across the landing's six files |
| `animation-name` declarations | **53**, of which **15 are `none`** | the landing. The 15 are the phone and reduced-motion releases: a third of the motion vocabulary on this page is spent switching motion off |
| `animation-range` bounds | **64**, in **61 distinct values** | orbit 35, story 19, facts 4, steps 3, paths 2, plan 2 |
| `animation-timing-function` declarations | **25** | 19 read a curve by name, 5 say `linear`, 1 says `ease-in-out` |
| `@supports (animation-timeline: view())` guards | **10** | every scroll-driven block is behind one |
| Easing curves declared anywhere | **4** | all four on **one selector in one file** |
| Motion tokens in `tokens.css` | **0** | no `--ease-*`, no `--dur-*`, no `--motion-*` |

Every number above is the whole product. The distribution is the finding: **motion in this product
is one page's private language, and the other 54 screens do not speak it.**

### The four curves exist, are named by job, and cannot be read from anywhere

`landing-orbit.css` declares them at line 1940, inside `@supports`, on
`.landing .lp-orbit.lp-story.fromcircle .storypin`:

| Curve | Value | Job, in the file's own words |
|---|---|---|
| `--ease-arrive` | `cubic-bezier(0.16, 1, 0.3, 1)` | expo-out. Covers the distance early and spends the rest closing the last few pixels. **Everything that comes ON uses it** |
| `--ease-leave` | `cubic-bezier(0.6, 0, 0.85, 0.2)` | its mirror: slow to let go, then quick. **Everything that goes OFF uses it**, and an exit is always shorter than an entrance |
| `--ease-settle` | `linear()` with one overshoot of 1.5% at 66 | a spring. Used in **exactly one place**, the deck closing over a cancelled plate |
| `--ease-travel` | `cubic-bezier(0.45, 0, 0.22, 1)` | one journey only: the two figures crossing most of a viewport, ten times any other travel on the stage |

The file says of them, in the code: *"LOCAL AND DELIBERATELY UNREGISTERED, like the candidate's
width points: stage 11 owns the motion scale, and when it runs these go to tokens.css as primitives
with their roles named there."* That is the appointment this stage is keeping.

**And the consequence is already visible in four other files.** A custom property declared on one
component's pin cannot be read from another component, so `landing-facts.css`, `landing-paths.css`,
`landing-plan.css` and `landing-steps.css` each write `cubic-bezier(0.16, 1, 0.3, 1)` **by hand**
for their own entrance. Five files, one curve, one name and four literals. That is the argument for
the token in a single line, and it is not a hypothetical drift: it is drift that has already
happened.

### The durations are 15 numbers and none of them is round

| Group | Count | Values |
|---|---|---|
| The five marquee rows of the wide orbit | 5 | 47s, 39s, 33s, 43s, 36s |
| The eight strands | 8 | 15.4, 17.1, 13.3, 18.6, 16.2, 14.1, 19.3, 15.9s, each with its own negative phase from -0.0 to -14.1s |
| The skeleton pulse | 1 | 1.4s, written at stage 07 |
| The reduced-motion guard | 1 | 0.01ms |

The first two groups are deliberately mutually prime so nothing on the stage ever loops in step
with anything else, and they are not candidates for a scale: **a loop length is not a duration in
the sense a scale means it.** The scale this stage owes is the one that does not exist yet, because
the product has no transitions to time.

### The app half: 68 state changes, all of them hard cuts

| What | How many |
|---|---|
| Rules carrying a state selector (`:hover`, `:focus-visible`, `:active`, `:checked`, `[aria-*]`, `.is-*`) | **68**, in **28 files** |
| Of those files, how many declare any motion | **2** |
| So: state-carrying components that change instantly | **26** |

The 26 include every control a person actually touches: `button`, `switch-row`, `checkbox`,
`select`, `text-input`, `tab-bar`, `nav-row`, `subscription-row`, `plan-option`, `preset-tile`,
`door`, `panel`, `faq-list`, `app-bar`. Nothing here is broken. An instant state change is a
legitimate choice and for a product whose first principle is calm it is a defensible one. What it
is not is a **recorded** choice: no file says "this changes instantly and here is why", so today it
is indistinguishable from an omission.

**The bottom sheet is the loudest case.** `dialog-sheet.css` is the product's only consumer of
`--shadow` and carries the three moments where this product asks a person to decide something:
"Add a source", "Cancelling can be made deliberately hard", "Delete everything Tendd holds for
you?". It appears with no travel at all.

### The guard is correct and guards nothing yet

`base.css` carries the product-wide `prefers-reduced-motion` block: `animation-duration: 0.01ms`,
`animation-iteration-count: 1`, `transition-duration: 0.01ms`, `scroll-behavior: auto`, all
`!important`, on `*`. Its transition half currently reaches **zero declarations**, because there
are none. It becomes load-bearing on the first line stage 11 writes. Eight further
`prefers-reduced-motion` blocks live in the six landing files and one in `design/story.js`, which
is nine motion guards for one page and one for the other 54 screens.

### One dead keyframe, found by the census and deleted on the spot

`@keyframes srise` in `landing-story.css`: **defined, named by nothing.** It was the story head's
entrance until the file recorded the decision that the head does not make one - at `contain 0%`,
the first frame anybody sees when the stage locks, its fill-mode held the heading at opacity 0 and
the reader was handed fourteen unlabelled squares. The reference was removed, the four lines stayed
behind. Same class of leftover as the centred stage deleted the day before and one order of
magnitude smaller, found the same way: by reading every `@keyframes` in the system against every
`animation-name` in it. **31 defined, 31 named** after the deletion, and the check is now part of
the census script rather than a thing somebody remembered to do.

---

## Part B. The four questions, and what was decided

The census produced four questions. None was answerable by measuring, which is why they were listed
rather than settled at step 1. Founder, 2026-08-16: **do what is best**. Two are now answered in the
code and two are answered in words, which is itself an answer rather than a gap.

### 1. The curves become tokens, at two levels, and the split is a rule

**Fourteen tokens in `design/system/tokens.css`, in a MOTION block on the primitive side of the file.**

| Level | Tokens |
|---|---|
| **Shape** | `--curve-expo-out`, `--curve-expo-in`, `--curve-firm`, `--curve-spring` |
| **Job** | `--ease-arrive`, `--ease-leave`, `--ease-settle`, `--ease-travel`, `--ease-state` |
| **Durations, one level, named by job** | `--dur-state` 150ms, `--dur-press` 90ms, `--dur-pulse` 1.4s, `--dur-signature` 900ms |
| **Distance, one value** | `--nudge` 2px |

**Why curves take two levels and durations take one.** A second level is earned exactly where two
roles would otherwise spell the same value, which is rule 4 of this system read from the other end.
`--ease-arrive` and `--ease-state` are both expo-out today and can part company, because an
entrance is a thing appearing and a state change is a thing already on screen saying it heard you.
The two durations share nothing, so a shape level under them would be a level with nothing in it.
This test is now rule 1 of `design/system/CLAUDE.md`.

**Why motion sits on the primitive side and takes no dark pair.** The primitive/semantic split of
`tokens.css` is a split about the THEME axis: a colour is named twice because the same role points
at a different value in the dark. No theme moves a curve. Motion's own axis is
`prefers-reduced-motion`, which is a global kill in `base.css` rather than a per-token override.
Rule 6 of `design/system/CLAUDE.md` was amended to say so rather than left to be read as broken.

**No scale of durations, and none will be invented.** A scale needs a range the product moves
across and this product moves across two values. The landing's own numbers are not candidates: the
five marquee durations and the eight strand durations are LOOP LENGTHS, deliberately mutually prime
so nothing on that stage repeats in step with anything else. They stay literals in the file that
owns the loop. One principle is recorded with no token under it: **an exit is always shorter than
its entrance.** It has no consumer in the app because the app has no entrances, and a token with no
consumer is how a scale starts being fiction.

**Nothing on the landing moved.** Proved rather than asserted: 30 choreography samples (opacity,
transform, computed timing function, the running total, the count, and the cut-row heights) at 10
scroll positions on 3 viewports, before and after, **0 differ**.

### 2. The app gets four verbs, and one distance holds all of them

**It was one verb for half a day.** The first answer to this question was colour and nothing else:
a control says it heard you by changing its own fill, edge, ink or underline over 150ms, and
nothing moves. The founder's verdict on that pass, the same day, was that it could not be seen:
*"большинство анимаций я не вижу ... все атомы должны быть с анимациями"*. So three more verbs
were added, chosen so that **the movement always has a cause** - something moves only where the
movement says what is about to happen - and held together by **one distance**.

| Verb | What moves | When | Who owns it |
|---|---|---|---|
| **Fade** | colour: fill, edge, ink, underline | every state, `--dur-state` | `base.css`, plus three components whose host is not a native element |
| **Advance** | a direction cue, one `--nudge` toward where it points | its target is hovered | step-forward link (down), nav row, door, alert item (right) |
| **Lift** | an identity mark: up one `--nudge`, out to 1.06 | the target it stands in is hovered | the logo in a row, an alert, a tile or a door; the destination icon in a tab |
| **Press** | the object itself, down one `--nudge`, at `--dur-press` | held | button, row, nav row, door, tile, alert, segment, cut control, tab, checkbox (as a scale) |

**One distance, and it is the whole guard.** `--nudge` is 2px. An arrow advances by it, a mark
lifts by it, a control presses down by it, and **nothing anywhere travels two**. 2 rather than 1
because 1px vanishes on a 2x screen at 36px, and rather than 4 because at 4 a list of fourteen rows
starts jumping under the pointer instead of answering it. The one exception is the checkbox: a 20px
box cannot travel 2px without looking dislodged and the box IS the control, so its press is a scale
to 0.94, the mirror of the mark's 1.06 lift.

**The verbs live in the components and not in `base.css`**, and that is the same test U12 applies
one level up: a verb is a statement about what an object IS. A disabled button is still a button
and must not press; a loading row is still a row and must not lift; `base.css` cannot know either.
What it does own is the one verb that is true of every interactive element regardless of what it
is, which is the fade.

**What deliberately does not move**, each with its ground: a **disabled** control (moving it
answers a press the product will not honour), a **loading** form, the **current** tab (it would
offer a journey that does not exist), a **figure** (a number that moves is a number you re-read),
a **card on hover** (a lift needs a shadow, and the Flat Paper Rule spends the only one elsewhere),
the **focus ring**, and anything that would **reflow**: no `height`, no `margin`, no `padding` is
on any list in this product.

**And the loading forms stopped answering the pointer at all.** The row, the alert and the tile
each scoped their hover to the pressable element form (`:where(a)`, `:where(button)`, which cost no
specificity), closing a backlog row opened two hours earlier. It was survivable while the answer
was a fill. It stops being survivable the moment the answer moves.

**Under `prefers-reduced-motion` all four verbs become states rather than animations**: the guard
takes every duration to 0.01ms, so a hovered mark is simply already lifted. That is deliberate. A
2px offset that appears instantly is not motion, it is a state exactly like a colour, and removing
it would take the answer away from the person who asked for stillness rather than give them one.

### The fade, in detail: colour, 150ms, on every state

Declared once, in `base.css`, on `:where(a, button, input, select, textarea, summary, label)`, at
specificity 0 so any component can still override it. That is the focus ring's list **plus
`label`**, and the one addition is the switch row: a label is not focusable, so it has no business
in the ring's list and `switch-row.css` draws that ring through `:has(input:focus-visible)` on the
row instead - but `.switch` IS a `label` and it does change its fill under the pointer.

| Property | In | Why |
|---|---|---|
| `background-color` | yes | the most common state change in the product by a distance |
| `border-color` | yes | every control that draws a resting edge draws its hover |
| `color` | yes | links, the app bar's controls, the footer |
| `text-decoration-color` | yes | the underline under an inline link moves with the ink |
| `outline`, `outline-offset` | **NO** | **the one exclusion, and an accessibility decision rather than a taste one.** These appear in 20 of the 68 state rules and each must land instantly: a keyboard user moves faster than 150ms per stop, so a faded ring is always one control behind the caret |
| anything that moves an object | **not here** | movement is real in this product and belongs to the component that owns the object. Nothing that changes the size of a box is on any list: no `height`, no `margin`, no `padding`, so no movement here ever reflows a line of text |

**150ms is chosen, not copied.** Under about 100ms a change reads as a cut and the transition buys
nothing; over about 200ms a hover starts trailing the pointer, which on a list of rows is the
opposite of calm. The stand's own chrome has run 0.22s and 0.15s since stage 07 and is not the
source: the stand is not the product.

**Three components declare it themselves**, because their host is not a native interactive element:
`plan-option` is a `div` in all 6 of its placements (3 on the landing, 3 on `upgrade.html`);
`preset-tile` is a `button` 6 times on `add-subscription.html` and a `span` 10 times, 6 of them on
that screen's loading state and 4 on the landing; `alert-item` is an `a` 8 times on `alerts.html`
and a `div` 4 times on `alerts-loading.html`. One class with two element forms would otherwise fade
on one and cut on the other, which is the invisible kind of wrong. All three read `--dur-state` and
`--ease-state`, so none can drift. This is **usage rule U12** in `docs/architecture.md`, with a
Limits note on each component page it names plus `button.html` and `subscription-row.html`.

**Nothing at rest moved.** 36 deterministic frames (10 screens x 2 widths x 2 themes, minus the
landing) byte-identical before and after. The 4 landing frames differ, and a same-code control run
differs on exactly the same 4: that page's infinite loops run on a wall clock, so its first frame
is not byte-deterministic and never was. The landing was checked by the choreography A/B above
instead.

### 2b. A fifth thing that is not a verb: the signature

The founder, the same day: *"давай на логотип сделаем анимашку, у нас где-то было расписано как
делать анимацию"*. It was written down: `design/concept/logo-crop.html`, the direction chosen out
of thirteen, is one letter with a window cut out of it, three canonical windows, and one sentence -
**the tighter the crop, the more abstract the mark**. That page demonstrates it with an eight second
loop across all three.

**What ships is not that loop.** One move, once, on arrival: the window opens to the whole letter
and closes into crop A over `--dur-signature` on `--ease-settle`, and the wordmark's last letter
takes petrol at the moment it lands. The mark begins as a `d` you can read and becomes a mark you
cannot, which is the concept's sentence played forwards.

**It is fenced because it is an arrival and not an answer.** The four verbs all move because a
person did something; this one moves because a page opened. So it runs on **one surface** (the
public page's bar), **once per load**, and **never inside the app**: the `.signature` modifier on
the lockup is the fence and the app's 32 lockups do not carry it. A mark that moves every time you
open the product is not a signature.

**What it cost, and it is not nothing.** The crop used to be the SVG's own `viewBox`, which a
transform cannot reach, so the mark now draws the whole letter into an oversized box and the frame
crops it. The four numbers are the same four numbers and the drawing is identical - extents match
to the device pixel at 1x, 2x and 3x, petrol area differs by 3 pixels in 2557 at 3x - but **the
rendering is not**: all 108 marks in the product differ, because the outline now falls on a
different sub-pixel phase. At the shipping size that is 69 of 484 pixels, all on the edge, and side
by side at 3x the two are indistinguishable. Stated rather than claimed away.

### 3. Between two states documented as two pages: nothing, and that is the answer

The product has 7 loading, 7 empty and 7 error pages, and every state change it documents is a
separate file. Naming a transition between them would be designing a runtime this product does not
have: there is no router, no client state, and nowhere for the movement to live. **The honest form
of the answer is that a state change in Tendd today is a page change and carries no motion**, and
the question returns when there is an application to attach it to. Written down rather than left
silent, which is precisely the failure the census caught the app in.

### 4. The landing's language is shared only where it has a consumer

The four curves are shared, because five jobs now read them. The entrances, the ranges and the
choreography stay on the landing. Rule 4 exists so that a scale is not derived from a sample of
one, and the day a second surface needs an entrance it will be designed against two surfaces.

---

## Part C. The critique, on two instruments

Claude in a browser and on its own scripts, Codex read-only on the source, taken independently and
merged. **Five findings, all verified by re-reading the place before fixing, all closed. Nothing
was dropped at verification.**

| Who | Was | Became |
|---|---|---|
| **Claude** | **Four element-form counts stated occurrences as SCREENS**: "an `a` on eight screens and a `div` on four", "a `span` on ten screens", "a `div` on all six screens", "the row is an `a` on 47 screens" | Recounted per screen: the alert is an `a` 8 times on `alerts.html` and a `div` 4 times on `alerts-loading.html`; the tile a `button` 6 times and a `span` 10; the plan option a `div` in all 6 placements; the row an `a` in 47 of 60. **The corrected count changed an argument**: the non-native forms are almost all LOADING states |
| **Claude** | "**19** of the 68 state rules draw a ring", in five files | **20**, recounted with comments stripped |
| **Codex** | **The denominator did not match the corpus it named.** The census listed 75 files and reported "7 of **72**" | **8 of 75.** The ratio had silently dropped `base.css`, which carries the pulse keyframe and the guard |
| **Codex** | **A promise this stage had already kept.** `base.css` still read "Stage 11 owns motion and will put durations behind tokens" beside the two tokens it had just put them behind | Rewritten to what happened, plus the fact worth keeping: the guard overrides by DURATION and not by name, so a token added tomorrow is guarded the day it is written |
| **Codex** | **"The selector is the same one the ring uses" was false.** The ring takes six elements, the transition seven | The seventh is `label`, and it earns its place: a label is not focusable, so it has no business in the ring's list and `switch-row.css` draws that ring through `:has(input:focus-visible)` instead. But `.switch` IS a `label` and it does change its fill under the pointer |
| **Codex** | **U12 named three components and none carried a Limits item**, which `architecture.md` requires of every rule in that table | A **Limits** sub-item on all three, in the house form, quoting the rule and linking back |

**What the split says about the instruments.** Claude found what only a recount finds, on figures it
had published itself; Codex found three things that are invisible unless you read one file against
another. Neither list would have been produced by the other.

---

## Part D. Status

**Step 1** (2026-08-16): the census above, one dead keyframe deleted, this page published at
`ready:true, done:false`.

**Step 2** (2026-08-16): eleven tokens, one usage rule, four hand-written curves removed, the
skeleton's 1.4s behind a token, and the state change live on all 68 state rules. The curve stand on
`motion.html` runs the four against `linear` on one clock, because a curve is the one value in this
system a still frame cannot show.

What the stage still owes before `done:true`: nothing in the code. The row flips when the founder
has walked the page.
