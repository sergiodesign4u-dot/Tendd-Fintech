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

## Part A. The census: what moves today, and by what

Taken **2026-08-16** by script over `design/system/` (base.css, tokens.css, index.css, **69
component files**, **3 patterns**), the **56 pages** of `design/`, `design/story.js` and
`design/system/behaviour.js`, the stand (`design/_screen.css`, `design/kit/_page.css`), and
`wireframes/` read-only. Comments are stripped before anything is counted, which is not a detail:
this file's own predecessors have twice reported a defect that was a sentence of prose.

### The headline: the product has no transitions at all

| What | How many | Where |
|---|---|---|
| `transition` declarations in `design/system/` | **0** | the two greps that hit are the reduced-motion guard's `transition-duration` and one sentence of prose in `faq-list.css` |
| Files in the system declaring any motion | **7 of 72** | six landing organisms plus `skeleton-bar.css` |
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

## Part B. What the census leaves the stage to decide

The census produces four questions. None of them is answerable by measuring, which is why they are
listed here rather than settled here.

**1. Do the four curves become tokens, and at which level?** They are values, they are already
named by job rather than by shape, and one of them is copied by hand into four files. The two-level
rule says a raw curve is a primitive and a role points at it, so the honest shape is
`--ease-expo-out` as the primitive and `--ease-arrive` as the role. The open half is whether four
curves is the right number for a product whose motion is about to double.

**2. Does the app get motion at all, and what kind?** 26 components change state instantly. Three
answers are all defensible: leave it and write down why; give the whole system one transition on
the two properties that carry a state change (colour and border); or design per component. This is
the founder's call and it is the biggest one in the stage, because it is the only one that touches
every screen.

**3. What happens between two states that are documented as two pages?** The product has 7 loading
pages, 7 empty pages and 7 error pages. Every state change it documents is documented as a separate
file, so the movement between them has no owner anywhere in this repo. Either the stage names what
that movement is, or it says explicitly that a state change in this product is a page change and
carries no motion.

**4. Is the landing's language the product's language, or is it the landing's?** Arrive-and-leave,
an exit shorter than its entrance, and a curve for a long journey are a complete and coherent
vocabulary. It was derived on one surface, and rule 4 of this system exists precisely because a
scale derived from a sample of one is not a scale.

---

## Part C. Status

Step 1 of the stage is done: the census above, the dead keyframe deleted, and this page. Nothing
has been tokenised and no curve has moved. The `Animation` row of `/_nav.js` carries this page as
`ready` and stays `done:false` until the four questions are answered in the code.
