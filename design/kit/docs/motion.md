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

## Part B. The four questions, and what was decided

The census produced four questions. None was answerable by measuring, which is why they were listed
rather than settled at step 1. Founder, 2026-08-16: **do what is best**. Two are now answered in the
code and two are answered in words, which is itself an answer rather than a gap.

### 1. The curves become tokens, at two levels, and the split is a rule

**Eleven tokens in `design/system/tokens.css`, in a MOTION block on the primitive side of the file.**

| Level | Tokens |
|---|---|
| **Shape** | `--curve-expo-out`, `--curve-expo-in`, `--curve-firm`, `--curve-spring` |
| **Job** | `--ease-arrive`, `--ease-leave`, `--ease-settle`, `--ease-travel`, `--ease-state` |
| **Durations, one level, named by job** | `--dur-state` 150ms, `--dur-pulse` 1.4s |

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

### 2. The app gets one state change: colour, 150ms, and nothing that moves an object

Declared once, in `base.css`, on `:where(a, button, input, select, textarea, summary, label)` - the
same list the focus ring uses, at specificity 0 so any component can still override it.

| Property | In | Why |
|---|---|---|
| `background-color` | yes | the most common state change in the product by a distance |
| `border-color` | yes | every control that draws a resting edge draws its hover |
| `color` | yes | links, the app bar's controls, the footer |
| `text-decoration-color` | yes | the underline under an inline link moves with the ink |
| `outline`, `outline-offset` | **NO** | **the one exclusion, and an accessibility decision rather than a taste one.** These appear in 19 of the 68 state rules and each must land instantly: a keyboard user moves faster than 150ms per stop, so a faded ring is always one control behind the caret |
| anything that moves an object | **NO** | transform, translate, scale, height, margin. A person reading fourteen subscriptions is never chased by a row that grows, lifts or slides |

**150ms is chosen, not copied.** Under about 100ms a change reads as a cut and the transition buys
nothing; over about 200ms a hover starts trailing the pointer, which on a list of rows is the
opposite of calm. The stand's own chrome has run 0.22s and 0.15s since stage 07 and is not the
source: the stand is not the product.

**Three components declare it themselves**, because their host is not a native interactive element:
`plan-option` is a `div` on all 6 screens; `preset-tile` is a `span` on 10 and a `button` on 6;
`alert-item` is an `a` on 8 and a `div` on 4. One class with two element forms would otherwise fade
on one and cut on the other, which is the invisible kind of wrong. All three read `--dur-state` and
`--ease-state`, so none can drift. This is **usage rule U12** in `docs/architecture.md`, with a
Limits note on each component page it names plus `button.html` and `subscription-row.html`.

**Nothing at rest moved.** 36 deterministic frames (10 screens x 2 widths x 2 themes, minus the
landing) byte-identical before and after. The 4 landing frames differ, and a same-code control run
differs on exactly the same 4: that page's infinite loops run on a wall clock, so its first frame
is not byte-deterministic and never was. The landing was checked by the choreography A/B above
instead.

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

## Part C. Status

**Step 1** (2026-08-16): the census above, one dead keyframe deleted, this page published at
`ready:true, done:false`.

**Step 2** (2026-08-16): eleven tokens, one usage rule, four hand-written curves removed, the
skeleton's 1.4s behind a token, and the state change live on all 68 state rules. The curve stand on
`motion.html` runs the four against `linear` on one clock, because a curve is the one value in this
system a still frame cannot show.

What the stage still owes before `done:true`: nothing in the code. The row flips when the founder
has walked the page.
