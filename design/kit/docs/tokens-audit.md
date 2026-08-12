# Token audit - Tendd

Stage 08, step 1, part A. **Facts, not decisions.** Where every variable of `design/kit/kit.css`
actually stands, which role it plays in each place, and where the file disagrees with itself.
Consolidation happens at step 2; nothing here is fixed.

Read on two instruments, independently and merged afterwards, with a "who found it" column:
Claude by parsing the stylesheet against all 28 coloured pages, Codex read-only over the same
corpus. Where the two disagreed the place was re-read in the file and the result named, rather
than voted on.

**Corpus.** `design/kit/kit.css`, `kit.html`, `shell.html`, and all 28 coloured pages in
`design/`. `wireframes/` is not read as a source of tokens: it is a separate greyscale prototype
on its own `_wf.css`. It IS read for one structural purpose, counting how often a component
occurs across the whole product, because `design/` holds 28 pages of a 55-page product.

---

## The numbers, for the summary block on `pixel-proof.html` at step 9

| | Before (stage 07 kit) |
|---|---|
| Custom properties declared | **40** |
| of which product | **32** |
| of which review chrome (`--c-*`) | **8** |
| Distinct raw colour values | **26** |
| Variables carrying an origin comment | 18 of 40 |
| Variables with no origin comment | **22** |
| Orphans (declared, used nowhere) | **1** |
| Colour or radius literals written past an existing variable | **0** |
| Hex literals anywhere in a rule | **0** |
| Literals on the 28 product screens | **0** |
| Variables that paint more than one surface | **10** |
| Font sizes in use, none of them a variable | **23** |
| Spacing values in use, none of them a variable | **27**, of which 22 are the product's own |
| Line heights in use, none of them a variable | **11** |

The last three rows are the shape of the work: **the kit tokenised colour and radius and left
typography and spacing as literals.** That is not a defect of stage 07, it is what stage 08 turns
into the primitive level.

---

## 1. Where every variable stands, and what role it plays there

Full per-variable usage lists are mechanical and long; what decides the semantic level is not the
count but the **surface** each variable paints. Three surfaces, three different contrast
thresholds: ink needs 4.5:1 (3:1 when large), a line needs 3:1 (WCAG 1.4.11), a fill needs 3:1
against what sits next to it.

| Variable | Value | Uses in kit.css | Surfaces it paints | Reads as |
|---|---|---|---|---|
| `--soft` | `#5a686c` | 46 | ink 46 | secondary text, everywhere |
| `--ink` | `#141b1d` | 29 | ink 29 | primary text |
| `--line2` | `#eef2f3` | 25 | line 25 | inner divider |
| `--mid` | `#384349` | 23 | **ink 21, fill 2** | body text, and the unread dot plus the trend line |
| `--accent` | `#1c6a76` | 21 | **ink 9, line 8, fill 2** | the one voice: action, current selection, trust |
| `--frame` | `#ffffff` | 19 | **fill 18, line 1** | the paper surface, and the inverse button's edge |
| `--line` | `#e4e9ea` | 14 | line 14 | container edge |
| `--panel2` | `#f4f7f8` | 13 | fill 13 | row hover, recessed surface |
| `--line-control` | `#7b8d91` | 6 | line 6 | the boundary that identifies a control |
| `--line-control-hover` | `#5a686c` | 6 | line 6 | that boundary under the pointer |
| `--on-accent` | `#ffffff` | 6 | **ink 3, line 2, fill 1** | label on petrol, and the inverse button |
| `--accent-tint` | `#e7edee` | 6 | **fill 4, line 2** | the selected wash |
| `--clay` | `#9a5842` | 5 | **ink 3, line 2** | our own failure |
| `--panel` | `#eef3f4` | 4 | fill 4 | the callout ground |
| `--accent-strong` | `#175a64` | 3 | **ink 1, line 1, fill 1** | petrol under the pointer |
| `--amber-tint` | `#f6efe0` | 3 | fill 3 | a price change |
| `--clay-tint` | `#f3e9e5` | 3 | fill 3 | a failure's wash |
| `--amber` | `#8a5c0c` | 2 | ink 2 | the price-change line |
| `--page` | `#eef3f4` | 2 | fill 2 | the canvas |
| `--skel` | `#e2e9ea` | 2 | fill 2 | loading placeholder |
| `--tag-bg` / `--tag-ink` | `#e9eeef` / `#4f5e62` | 1 / 1 | fill 1 / ink 1 | the quiet status chip |
| `--trial-bg` / `--trial-ink` | `#dfeef0` / `#185862` | 1 / 1 | fill 1 / ink 1 | the trial chip |
| `--line-strong` | `#cdd7d9` | 1 | line 1 | a hairline under the pointer |
| `--shadow` | see file | 1 | shadow 1 | the one elevation in the system |
| `--radius` / `-sm` / `-xs` / `-wash` | 14 / 10 / 6 / 12px | 8 / 9 / 3 / 2 | geometry | corner scale |
| `--success` | `#2e6b52` | **0** | - | **orphan** |
| eight `--c-*` | see file | 26 total | review chrome | **not product** |

## 2. One variable on several roles

Ten variables paint more than one surface. This is the finding that decides how many semantic
roles step 3 declares, and the pack calls it the quietest colour defect for a reason: a role
declared as a fill and then used as small ink passes a 3:1 check and fails a 4.5:1 one, and a
table of text-on-background pairs never sees it, because nobody declared it as text.

| Variable | Surfaces | The roles hiding behind one name |
|---|---|---|
| **`--accent`** | ink, line, fill | The petrol does all three of its permitted jobs through one variable: it is the **fill** of the primary button, the **line** of the current selection and the focus ring, and the **ink** of a trust link and a selected tab label. Three roles, three thresholds, one name |
| `--mid` | ink, fill | Body text, and then a **fill**: the unread dot on the tab bar and the drawn trend line. A data mark is not text and does not want to move when body copy does |
| `--frame` | fill, line | The paper surface, and the **border** of the inverse button standing on petrol |
| `--on-accent` | ink, line, fill | Already split from `--frame` by role at stage 07; it now carries three surfaces of its own |
| `--accent-tint` | fill, line | The selected wash, and the hover border of an inverse primary |
| `--clay` | ink, line | The failure sentence, and the invalid field's edge |
| `--accent-strong` | ink, line, fill | Petrol under the pointer, on all three surfaces |
| `--c-border-light` | fill, line | Review chrome, out of scope for the product system |

**Not a defect list.** Every one of these is correct today, because the values are equal by
construction. It is the input to step 3: two roles get two tokens even when the value is the
same, and the question is not "is it the same colour" but "could these two places ever move
apart". The petrol fill of a button and the petrol ink of a trust link can.

## 3. Values written past a variable

**None.** Property-aware search across the whole stylesheet: zero hex literals inside any rule,
zero radius literals where a radius variable holds that value, zero literals of any kind on the
28 product screens. The stage-07 rule that a screen carries no style of its own held, and the
extract left no colour behind.

What the kit does carry as literals is **everything that was never tokenised**: 23 font sizes,
24 spacing values, 11 line heights, 9 letter-spacings, 3 weights. They are not "past a variable"
because no variable exists for them. They are the primitive level, unbuilt.

| Scale | Distinct values | The long tail |
|---|---|---|
| font-size | 23 | 13px x29, 12px x18, 13.5px x15, 12.5px x9, 14px x7, 15px x6, 11px x4, then 16 more |
| spacing (margin/padding) | **27** | 14 x22, 10 x22, 6 x21, 22 x19, 12 x18, 16 x16, 8 x14, 4 x14, 18 x13, 26 x11, 2 x10, then 16 more |
| line-height | 11 | 1.2, 1.05, 1.5, 1, 1.6, 1.08, 1.02, 1.45, 1.18, 1.25, 1.15 |
| letter-spacing | 9 | 0, -0.015em, 0.06em, -0.02em, -0.01em, 0.1em, -0.025em, 0.04em, 0.02em |
| font-weight | 3 | 600 x24, 700 x7, 400 x3 |
| gap | 12 | 12, 10, 16, 8, 14, 3, 4 and five compound values |

**CORRECTED at step 4, and the error is worth naming.** The first count of this row said 24
values in 198 places. It was taken with a regex that matched the `margin:` and `padding:`
shorthand and **not one longhand**, so every `margin-top`, `padding-left` and their siblings were
invisible to it: 27 values in 222 places is the real figure, and three values (`1px`, `32px`,
`220px`) were missed entirely. Found by the agent that built `geometry.html`, which recounted
from the file rather than trusting the brief it was handed, and confirmed here by re-running both
regexes side by side. Five of the 27 stand only in the reviewer chrome that leaves the system at
step 4, so **the product's own ladder is 22 values**. The lesson is the cheap one: a census taken
by pattern is only as complete as the pattern, and the way to catch it is a second instrument
counting the same thing differently.

**23 font sizes and 27 spacings is the drift that matters on this stage.** 13px against 13.5px
against 12.5px, and 14 against 16 against 18, are not six decisions; they are one scale that was
never written down. Step 3 consolidates them, and every merge lands as a named line in the block
below.

## 4. Variables with no origin

`kit.css` arrived from Concept by `git mv`, and the project's rule is that every value carries its
origin in a comment beside it. **22 of 40 do not.**

They are not 22 separate failures. All 22 sit inside the `:root` block Concept wrote, where the
origin is stated **once for the whole block** ("product palette (Petrol and Paper, from
concept.md)") rather than per line:

`--line`, `--line2`, `--panel`, `--panel2`, `--skel`, `--page`, `--frame`, `--accent`,
`--accent-strong`, `--accent-tint`, `--amber`, `--amber-tint`, `--clay`, `--clay-tint`,
`--success`, `--tag-bg`, `--tag-ink`, `--trial-bg`, `--trial-ink`, `--radius`, `--radius-sm`,
`--shadow`.

Cross-checked against the root `DESIGN.md`: **every one of them is recorded there**, in the
palette block with a name and a purpose. So none is a value from nowhere. What is missing is the
per-line comment the migration rule asks for, and step 3 restores it by construction: each
primitive gets its origin, each semantic role gets a comment saying which usages it grew from.

The 18 that DO carry a per-line origin are the ones added after Concept: the four named at stage
07 (`--radius-xs`, `--radius-wash`, `--line-strong`, `--on-accent`), the two named at the contrast
decision (`--line-control`, `--line-control-hover`), the eight review-chrome `--c-*`, and the
three darkened at the stage-07 audit.

## 5. Orphans

**One:** `--success: #2e6b52`, declared and read by nothing.

Stage 07 examined it and kept it deliberately: `DESIGN.md` names it Quiet Moss and its consumer
is the cancel-win screen, which is still grey. **Step 2 decides.** The honest options are to
carry it with the reason written next to it, or to drop it and let it re-enter when the screen
that needs it is built. It is the only orphan in the file.

---

## Three lists, which are decisions rather than facts

### A. Candidates for a semantic role

Read from where each value actually stands, not from another design system's vocabulary. The
project's own names come from `DESIGN.md`.

| Candidate role | Surface | Seen in | Today's value |
|---|---|---|---|
| page ground | fill | the canvas behind every screen, the callout | `--page` / `--panel` |
| surface | fill | cards, rows, the app bar, the tab bar | `--frame` |
| surface recessed | fill | row hover, the desktop rail, the disabled control | `--panel2` |
| text primary | ink | headings, merchant names, amounts | `--ink` |
| text body | ink | sentences, button labels | `--mid` |
| text muted | ink | meta, context, labels, hints | `--soft` |
| action | fill | the primary button | `--accent` |
| action ink | ink | the trust link, the current tab label | `--accent` |
| selected line | line | the current tab, the pressed tile, the focus ring | `--accent` |
| selected wash | fill | the pressed tile and range button | `--accent-tint` |
| container edge | line | cards, panels, the list frame | `--line` |
| divider | line | rows inside a group, the switch rows | `--line2` |
| control edge | line | field, select, outline button, tile, door, segment | `--line-control` |
| attention | fill + ink | a price change: amber wash, amber sentence | `--amber-tint` / `--amber` |
| failure | fill + ink + line | our own failure: clay wash, clay sentence, invalid edge | `--clay-tint` / `--clay` |
| status chip | fill + ink | the quiet grey badge | `--tag-bg` / `--tag-ink` |
| trial chip | fill + ink | the one trial badge | `--trial-bg` / `--trial-ink` |
| placeholder | fill | skeletons | `--skel` |
| data mark | fill | the unread dot, the drawn trend line | `--mid` |

**Colours standing in exactly one place, listed because they were asked for rather than because
they are candidates:** `--trial-bg` and `--trial-ink` (one badge on one page), `--tag-bg` and
`--tag-ink` (one chip rule), `--line-strong` (one hover), `--shadow` (one elevation), and
`--success` (nowhere at all).

### B. The split into files, ordered by level

The order below is read from the level sections of `inventory.md` and is not re-derived. It is
used four more times after this: consolidation at step 2, the component rounds at step 5, the
`@import` order in `index.css`, and the stand's registry groups.

**Two rows do not become components, and both need a decision at step 2:**

- **`~~Radio~~`** in the atoms table is a corrected stale row: zero occurrences anywhere in the
  product, kept in the inventory as the record of a deletion. It gets no file. Atoms are 21, not
  22.
- **Review page frame** (`.layout`, `.stage`, `.stage-app`, `.sidebar`, the eight `--c-*`) is the
  reviewer's chrome and explicitly does not travel to a build. It must not enter
  `design/system/`. Proposal: it moves to the stand's own `design/kit/_page.css` at step 4, and
  the product system never sees it.

With those two removed the system is **21 atoms, 28 molecules, 18 organisms = 67 files**, each
`design/system/components/<name>.css` plus `design/kit/<name>.html`.

Full name-by-name mapping is generated from the inventory and is reproduced in `architecture.md`
at step 4 rather than duplicated here; the level order is atoms alphabetically, then molecules,
then organisms with the ones that contain no other organism first.

Classes belonging to no component (reset, base typography, the font stack, the page frame) go to
`design/system/base.css`. The app bar and the tab bar from `shell.html` are components in their
own right (`app-bar`, `tab-bar`). All six form controls are components even where the kit styles
them as elements rather than classes, and even where they stand on one screen.

### C. The split onto the basics pages

| Page | What it shows |
|---|---|
| `color.html` | the primitive palette (26 raw values), the semantic roles, contrast pairs by surface with the threshold named, both themes side by side |
| `typography.html` | Inter and its stack, the consolidated size scale, the three weights, line heights, letter-spacing, live specimens at real copy from `microcopy.md` |
| `geometry.html` | the consolidated spacing scale, the four radii, control sizes and the 44px floor, border widths, the page frame from `base.css` |
| `icons.html` | the four destination icons as masks, the 14 merchant marks from `design/visuals/`, the two drawn marks (the unrecognised glyph, the trend plot) |

**Material that does not fit the four, and where it is proposed to go:**

- **The one shadow** (`--shadow`): to `geometry.html`, in a surface block. The Flat Paper Rule
  says there is exactly one elevation in the system, so it is shown once with the rule beside it.
- **Motion** (the skeleton pulse at 1.4s, the reduced-motion guard): stage 11 owns motion, and a
  token for it does not exist yet. Proposal: one line on `geometry.html` naming the pulse and the
  guard as existing-but-untokenised, so the page does not silently omit something the system
  carries.
- **The review chrome** (`--c-*`, `.sidebar`, `.stage`): shown on no basics page, because it is
  not part of the system. It moves to `design/kit/_page.css`.

---

## The two instruments, merged

Codex ran read-only over the same corpus and returned the five lists independently. Where it
disagreed with the parse, the place was re-read in the file before anything was written down.

| Finding class | Claude | Codex | Merged result |
|---|---|---|---|
| Orphan variable | `--success` | `--success` | **Agreed.** One orphan |
| Colour or radius literal past a variable, in `kit.css` | 0 | 0 | **Agreed.** The stylesheet itself is clean |
| Literals on the 28 product screens | 0 | 0 | **Agreed** |
| Literal past a variable, in the STAND | not looked for | **4** | **Codex only, confirmed.** See below |
| Variable with no origin | 22 without a per-line comment | **zero without an origin** | **Both true, different question.** See below |
| Drift inside the stylesheet | 0 | 0 | **Agreed** |
| Drift between `DESIGN.md` and the stylesheet | not looked for | **12** | **Codex only, and the most valuable finding of the step.** See below |
| Usage counts | kit.css rules only | kit.css + the stand pages | Different corpora, not a conflict. Codex's numbers are the wider ones and are the ones quoted below |

### Codex only, confirmed: four literals in the stand

`#fff` in `.badge.color` where `--on-accent` holds that value (`design/overview.html:33`), and
`6px` three times where `--radius-xs` holds it (`design/overview.html:36`,
`design/kit/kit.html:53`, `design/kit/kit.html:54`).

My parse missed these because it read the product screens and skipped the two pages that carry a
style block of their own, the hub and the showcase. **They are real and they are not product
defects:** all four sit in stand chrome, which is exactly the material step 4 moves out into
`design/kit/_page.css`. They are recorded so the move fixes them rather than carrying them.

### Both true, different question: the origin comments

Codex reports zero variables without an origin, on the ground that the block comment at
`kit.css:9` ("Petrol and Paper, from concept.md") covers the 25 declarations under it, and that
`DESIGN.md:193-222` records the same origins again. The parse reports 22 with no comment on
their own line.

Re-read: **both descriptions of the file are accurate.** No value in the kit is from nowhere.
What is absent is the per-line form the migration rule asks for. Resolution: **not a defect, and
not dismissed either.** Step 3 restores the per-line form by construction, because every
primitive is written with its origin and every semantic role with the usages it grew from.

### Codex only, confirmed: DESIGN.md disagrees with the code it was generated from

Twelve rows, each verified by opening both files. The pattern is sharper than the count:

| DESIGN.md says | The stylesheet ships | Where |
|---|---|---|
| headline 18px | `.state h1`, `.hero h1` = **21px** | `DESIGN.md:37` vs `kit.css:452,518` |
| body 14.5px, the merchant name | `.row .name` = **15px** | `DESIGN.md:48` vs `kit.css:504` |
| meta 12.5px, the amount | `.row .amt` = **14px** | `DESIGN.md:53` vs `kit.css:304` |
| button 13.5px, padding 10px by 16px | `.btn` = **14px, padding 0 18px** | `DESIGN.md:320` vs `kit.css:206,209` |
| a 40px logo tile | `.logo` = **36px** | `DESIGN.md:334` vs `kit.css:310` |
| row padding 11px by 12px | `.row` = **10px 4px** | `DESIGN.md:338` vs `kit.css:500` |
| 16px screen padding | `.app > .screen` = **18px 16px** | `DESIGN.md:267` vs `kit.css:765` |
| tab label 11px | `.tabbar a` = **12px** | `DESIGN.md:356` vs `kit.css:833` |
| current tab weight 700 | `.tabbar a.cur` = **600** | `DESIGN.md:357` vs `kit.css:837` |
| Pro badge radius 5px | the chip base takes `--radius-xs` = **6px** | `DESIGN.md:347` vs `kit.css:281` |
| one `.badge` | product 10.5px/600, hub 9px/700 | `kit.css:280,283` vs `overview.html:32` |
| one state-link look | sidebar 12px/4px radius, hub 11px/6px | `kit.css:131` vs `overview.html:36` |

**Why this matters more than it looks.** `DESIGN.md` is a named input of this stage: step 3 takes
role names and origins from it. A document that states a typography scale the code does not have
would put six wrong numbers into the primitive level, and they would look authoritative because
they came from the design doc.

**And it corrects a claim made at stage 07.** That stage said it had corrected six drifted values
in `DESIGN.md` against the shipped stylesheet. Re-read today: the corrections went into the
machine-readable spec blocks, and **the prose sections were not touched**, so the document now
disagrees with itself as well as with the code. `.row` is the clean example: the spec block at
`DESIGN.md:108` says `10px 4px`, which is right, and the prose at `DESIGN.md:338` says
`11px by 12px`, which is not.

**Decided at step 3: the document moves to the code, and not the other way round.** Moving the
code to match `DESIGN.md` would change roughly ten values across the whole product, which is not
a refactor, and the values in the code are the ones that were built, walked at two widths and
accepted at stage 07. The document is a description that fell behind what it describes.

**The correction itself waits for step 4, on purpose.** `DESIGN.md` names six typographic roles
with six sizes; the shipped product uses twenty-three sizes, and which of them survive is exactly
what the typography page decides. Writing today's twenty-three into the document would replace one
wrong description with a longer one. The document is corrected against the consolidated scale, in
the same step that produces it, and the twelve rows above are the checklist for that edit.

---

## CHANGES OF APPEARANCE, NAMED

The legal sources of a visual change on this stage. The pixel comparison at step 8 checks every
difference against these lists; a difference with no line here is a defect and is fixed in
`tokens.css` or in a component file, never on a screen.

The stage opened with **three**: the consolidated drift, the review of the basics, the move onto
system classes. The founder's review of the components added a fourth on 2026-08-12. The brand,
locked the same day, is the **fifth**, and it is the only one of the five that is not a refactor
of something already on the screens. The dark theme is deliberately **not** on this list: it was
built as a stress test and changed nothing in `design/system/` or on a coloured screen, which is
the result step 7 exists to produce.

### Consolidated drift (step 3)

Two rows move pixels. Three remove something that was already dead or already
overridden and move nothing, and they are listed here anyway, because a reader of the
pixel comparison must be able to account for every line that changed in the stylesheet,
not only for every line that changed on a screen.

| Variable or class | Was | Became | Why |
|---|---|---|---|
| `.decoder` corner | `--radius-sm`, 10px | `--radius-wash`, 12px | **Moves pixels: 5 pages.** Same fill token, same padding, same margin as `.wash`, and a different corner for no named reason. Two washes cannot have two corners; the wash radius exists for exactly this and the decoder is a wash |
| `.locked` padding | 18px | 16px | **Moves pixels: 1 page.** The Pro gate turned out to be the same card as `.source`, which is padded 16. Majority, and the merge has no meaning if the two halves keep two paddings |
| `.plan-opt .amt` | declared 22px at `kit.css:307` **and** 30px at `kit.css:680` | one declaration, 30px | **Moves nothing.** Both sat at top level outside any container query, so the later already won: the plan price renders at 30px and always did. Verified in a browser before the line was touched. What is removed is a declaration that reads as live and is not |
| `--success` | `#2e6b52`, declared | deleted | **Moves nothing:** zero consumers, on both instruments. Founder decision, 2026-08-11. It re-enters when the cancel-win screen it was meant for is built |
| `.locklabel` | declared in the chip base | deleted | **Moves nothing:** zero occurrences on all 55 grey pages |
| `--page` and `--panel` | two names, one value `#eef3f4` | one primitive `--canvas`, two roles `--bg-page` and `--bg-callout` | **Moves nothing.** The duplicate was at the wrong level: one value is one primitive, and the two jobs are two semantic roles. They are already different in the dark theme, which is the proof the split was real |
| `--on-accent` and `--frame` | two names, one value `#ffffff` | one primitive `--paper`, two roles `--bg-surface` and `--text-on-action` | **Moves nothing**, and the same argument. In the dark theme `--text-on-action` is not paper at all: white on the lightened petrol measures 1.9:1 |

### Basics review (step 4)

**The founder's review, 2026-08-11.** The second of the three legal sources of a visual change,
and the largest. Two scales adopted, applied to every component file mechanically, and the full
value-by-value mapping is in `design/kit/typography.html` and `design/kit/geometry.html`.

**The rule, applied to both and decided once:** every old value goes to the NEAREST step, and a
tie goes to the LARGER. Nobody decided value by value, which is what makes the result auditable
rather than arguable.

| Variable or class | Was | Became | Why |
|---|---|---|---|
| the type scale | **21 sizes, no variable for any of them**, five of them half steps (14.5, 13.5, 12.5, 11.5, 10.5) | **8 steps**: `--type-display` 46, `--type-figure` 32, `--type-head` 24, `--type-title` 20, `--type-sub` 16, `--type-body` 14, `--type-meta` 12, `--type-label` 10 | Founder: no half steps. The half steps existed for no stated reason and no two of them were ever compared |
| the biggest folds | 13px x29, 12.5px x9, 15px x6, 21px, 11px | 14, 12, 16, 20, 12 | Nearest step, ties to the larger. 30 `font-size` declarations converted in the atom level; the molecules and organisms fold as they are written |
| 40px, the share card total | 40px | **32px** | The one named exception. 40 is nearer 46 than 32, and 46 is exclusive to the monthly total under the One Number Rule, so it goes down instead of up |
| the spacing scale | **27 values, no variable for any of them**, among them 1, 3, 5, 7 and 9 | **an 8px grid**: 0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64 | Founder: an 8px grid including 8, 4, 2 and 0, with 0 a real value rather than the absence of one. 1, 3, 5, 7 and 9 are not a rhythm, they are the absence of one |
| the biggest folds | 10px x22, 14px x22, 22px x19, 12px x18, 18px, 26px | 8, 16, 24, 16, 16, 24 | Same rule. 46 declarations converted, 105 token instances once shorthands expand |
| 104px, the screen foot | `104px` | `calc(var(--row) + var(--space-48))` | It was always the height of the fixed tab bar plus air. The literal never said so, and a number nobody can derive is a number nobody dares change |
| `.btn.compact` | a modifier: 13.5px and 14px of padding | **deleted** | The consolidation removed both of its differences at once: 13.5 and 14 are both `--type-body`, 14 and 18 are both `--space-16`. It became byte identical to `.btn`. A modifier that modifies nothing is worse than none, because the next reader spends a minute finding out. It maps to `.btn` at step 6 |
| the eyebrow's host rhythm | four bottom margins by host: 4, 6, 8, 10 | **one rule**: 4 and 8 | Three of the four hosts now say the same thing. Written once instead of three times, and the comment describing a rhythm the code no longer has was removed with them |
| `.logo` placeholder text | 8px | 10px, `--type-label` | The agent applying the mapping stopped to ask whether two steps up would clip the grey's `[logo]` string in a 36px square. Checked: **no coloured page renders that text at all**, every mark is a real SVG and the one slot with no merchant got a drawn question mark at stage 07. The rule kept underneath: if a coloured slot ever has no mark, draw one, do not shrink type until the words fit |
| colour | **nothing consolidated, and that is the finding** | 22 primitives, 27 roles and 4 state tokens, unchanged | The founder asked for colour to be looked at too. It was, by counting consumers rather than by eye. The palette is already tight: every light primitive but one serves a role, every role is paired to a dark theme, and the roles are split by SURFACE, so merging any two would collapse a 4.5:1 threshold into a 3:1 one. Five roles are read exactly once today (`--text-attention`, `--bg-attention`, the status pair, the trial pair) and **that number is not evidence**: their consumers are molecules, and 37 of the 55 components are not written yet. **A colour consolidation now would be measuring a system that is a third built.** It is deferred to step 9, when every component reads what it reads |
| `--hairline-strong` | one primitive serving no role | `--line-container-hover`, declared at the molecule round, plus `--hairline-strong-dark` #303c3f computed for its pair | **Decided when the card was written, and the deciding argument was mechanical rather than aesthetic.** Its one consumer is `.plan-opt:hover`. With no role at that value the agent building the card correctly refused to invent a token and read `--line-container`, the role with the right surface and the RESTING value, so the hover rendered as no change at all. **Dropping a state is itself a visual change**, and this stage has three named sources of visual change and none of them asked for one, so carrying it was the only move that needed no permission. `--line-control-hover` was rejected on its surface and not its value: `DESIGN.md` forbids a control edge on a container by name, and at 5.78:1 it would draw a hard line around a card whose job is to be quiet. The dark value was computed rather than picked: 1.47:1, the same gain the light pair makes from 1.23, and LIGHTER than the plain hairline where the light one is darker. What stays open is narrower and is in `backlog.md`: whether a card nobody can click should answer a pointer at all |
| `--line-action-soft` | no line role existed on `--petrol-tint` | declared at the molecule round on `--petrol-tint` / `--petrol-tint-dark` | **The second hole of exactly the shape `--line-failure` was**, and found the same way: the trust block's link underlines in the petrol tint, and the system had a FILL at that value (`--bg-selected`) and no line. The agent read the fill on loan with a comment and reported it rather than inventing, and the loan is repaid here at the same value, so nothing moves. It is declared **against** the rule that one usage is not yet a role, and the exception is named rather than quietly taken: that rule guards against palette inflation, while the surface axis forbids outright what the alternative was. Measured 1.18:1 light and 1.20:1 dark, and it is a hint rather than a boundary, because it decorates text already carrying 4.8:1 of its own |
| the row family's side inset | **five values for one job**: `.cand` 0, `.navrow` 2, `.row` 4, `.alert` 4, `.charges li` 16 | **one value, `--space-16`** | **Founder's review of the components, 2026-08-11**, and it is a third source of the same kind as the review of the foundations. The founder opened four component pages and said the hover ran up against the sides on every one. The census did not catch it because the census measured **controls at rest**, and side inset is invisible until something paints a fill behind the text. The grey wireframes had no fills at all, stage 07 added the hover, and nobody looks at a hover in a screenshot. `.row` moves its logo 12px right on Home, which is the largest single pixel move this stage makes and is named here so the step 8 comparison finds it already explained |
| `--shadow` | described in `DESIGN.md` as "the mobile app frame only" | unchanged, description corrected | It has exactly **one** consumer in the product and the dialog sheet's system file is the second. It is not a mobile frame at all: it paints past container 760, on the sheet that becomes a centred card, which makes it a WIDE-container shadow and the one elevation the Flat Paper Rule allows. The value did not move; the sentence describing it did, and it joins the fifteen `DESIGN.md` divergences already recorded as "the document moves to the code" |
| `.groups` column gap | `column-gap: 44px` | `--space-48` | 44 is not among the 27 values `scales.md` maps, so the founder's own rule was applied as written: nearest step, tie to the larger. Each of two columns loses 2px at the 893px the product gives the set at a 1440 viewport. Reported by the builder rather than absorbed, because a value the map does not name is exactly where a builder quietly invents one |
| `.app .group` bottom margin inside the 900 block | `margin: 0 0 26px` | **rule dropped** | 26 folds to `--space-24`, which is byte for byte the base rule already sitting above it. An override that says what the base says is not an override, it is a line that will be read as a decision by the next person. The `.btn.compact` precedent, same shape: the scale removed the only difference and the rule went with it. Each group loses 2px of bottom gap past container 900 |
| `.navrow .arrow` | the character `&rsaquo;` set in Inter | a drawn chevron, 16 by 16, CSS mask over `currentColor` | Same review. It was punctuation doing an icon's job, and beside the drawn destination masks and the real merchant SVGs it read as a font fallback. **Fixed in CSS and not in the markup on purpose**: `wireframes/` is the frozen structure contract and a coloured page may differ from its grey by styling only, so `font-size: 0` collapses the glyph and the mask paints over the same box. Grey and colour keep identical markup and the character survives as the fallback |
| `.app .tabbar a .ic` | 0-3-1, welded to an organism's markup | `.app .ic`, 0-2-0 | A **scope correction and not a rename**, so it does not touch the step 6 map. The base rules were chained to `.tabbar a` while the four mask modifiers needed only `.app`: one component, one file, two depths. An atom that cannot render without an organism is not an atom, and the proof was on its own page, which imported a bare tab bar to make the icons appear and rendered four blue links. Zero pixels: all 72 occurrences of `class="ic ic-*"` in `wireframes/` and `design/` sit inside an open `<nav class="tabbar">`, checked before the change |
| `fieldset` reset | `.app fieldset, .landing fieldset` in `kit.css`, beside `.field` | `fieldset` in `base.css`, unscoped | It belonged to no component's brief: the form field is ONE field and this governs the group around several, so every builder correctly left it alone and it would have been **dropped silently** on the day `kit.css` is deleted. Found by the agent building the form field, which named it rather than absorbing it. A reset of a browser default has one right home and it is next to `box-sizing`; unscoped because a UA reset has nothing to scope to and no `fieldset` exists here outside a screen |
| namespace | the scale was first written `--text-body` | `--type-body` | `--text-*` already belongs to the ink roles. The later declaration wins, so every component asking for the body INK would have been handed `14px`. Caught by reading the file back before anything was wired to it |

### Repairs to the refactor itself, found by the etalon (step 5)

Not a source of visual change: these are places where the new system did NOT yet match the
product, found by building one component completely and measuring it against the screen it
came from. Each one is a difference the pixel comparison at step 8 would otherwise have
reported as a mystery.

| What | Was | Became | Why |
|---|---|---|---|
| the stand's own specimens | `class="muted"` on 7 pages | `class="consequence"` | Not a product change: no screen was touched. The pages of the atom round wrote the name from the RENAMING MAP, which step 6 executes, while the component file correctly declares the names the product still carries. Twelve specimens were therefore styled by nothing. **I wrote it on the etalon first and three agents copied it faithfully**, which is precisely what an etalon is for and precisely its risk: it propagates whatever is in it |
| `button.css`, the label | wrapped whenever its container was narrow | `white-space: nowrap` | Founder finding on the etalon page, where "Start Tendd Pro" folded onto three lines inside a narrow table cell. **Zero pixels move:** all 104 buttons on the 28 coloured pages measure exactly 44px, so none is wrapping today and none is held narrower than its label. What the line removes is the luck. Stage 07 paid for its absence once, widening the onboarding column from 620 to 760 because the plan button wrapped; that was the layout covering for the component |
| `base.css`, the box model | no reset at all | `*, *::before, *::after { box-sizing: border-box }` | `kit.css:79` has carried this since stage 07 and the first draft of `base.css` left it out. The same `.btn` measured 44px on a product screen and 46px on its own component page: one pixel of border on each side, on every bordered control in the system, and nothing in the file looked wrong. Caught inside a minute by the etalon, which is the entire argument for building one component completely before the other fifty four |

### Two blockers for step 8, found by the atom round and NOT fixed here

Both were found by an agent measuring rather than reading, both are real, and neither is a
change this round is allowed to make. They are written down so step 8 cannot walk into them.

**1. Nothing in `design/system/` establishes a container, so every container query in the
system is inert.** `container-type: inline-size` is declared in exactly two places in this
repository: `wireframes/_wf.css:35` and `design/kit/kit.css:145`, both on `.stage`, which is
the REVIEWER'S CHROME and travels to no build. The product's whole desktop layout is container
based: the shell becomes a grid at 760, the groups go to two columns at 900 and three at 1340,
the detail screen splits, the tab bar becomes a rail. Every one of those rules queries an
ancestor of `.app`, and in the system there is no ancestor declaring itself a container.

The consequence is precise and it lands at step 8: the moment a product screen stops loading
`kit.css` and starts loading `index.css`, it renders as one mobile column at every width, and
nothing errors. The pixel comparison would report it, which is the system working, but a day
would go into finding why.

It is a decision rather than a patch, which is why it is not made here: either the app shell
organism ships its own wrapper that declares the container, or those rules become media
queries, or `base.css` declares `body { container-type: inline-size }` and the shell queries
its own parent. The organism round decides it, with the shell in front of it.

**2. One placeholder is still shipping as literal text in colour.**
`design/history-trends-loading.html:67` renders `<div class="chart">[chart]</div>`, so the word
appears on the coloured page. `design/history-trends-empty.html:61` does the same with
`[chart: waiting for a third month]`, although that one at least carries a real accessible name.

This contradicts a row on the stage 07 hub, which records "Placeholder shipped into colour, 3
found, 3 fixed, 0 carried". Two of the five `.chart` instances were missed, and the row is
therefore wrong. It is not this stage's to fix, because the fix is markup on a product screen
and step 6 owns that; it goes on the list step 6 executes, and the stage 07 row is corrected
when it does.

### The founder's review of the components (2026-08-12)

**A FOURTH NAMED SOURCE, and it exists because the founder read the kit.** The stage began with
three: consolidated drift, the review of the foundations, and moving onto system classes. This one
was opened when the founder walked the component pages and asked for the best answer on every row
the build had carried rather than settled. Everything under it moves a pixel on purpose, and the
step 8 comparison reads this table as it reads the other three.

| Variable or class | Was | Became | Why |
|---|---|---|---|
| `.charges li:last-child` | every row drew a bottom rule, the last one included | `border-bottom: 0` | A divider divides two things, and after the last row there is nothing to divide. Applied as a PRINCIPLE and not to the seam that exposed it, which is what found the second one: the last row against the Pro gate's top rule, and where there is no gate, the last row against the panel's own container edge. Both measured at **0.00px** contact, both at 360 and 1440. Two pixels of `--line-divider` where every other divider in that panel has one. This was the ONE ruled list in the system still closing itself; card, pair list, save-focus candidate, switch row and reveal step already reset their last row. The panel is 1px shorter and nothing else moves. Shows on the five subscription-detail screens |
| `.app .panel > summary:focus-visible` | `outline-offset: 2px` | `outline-offset: -2px` | The summary sits 1px inside a panel that clips, so the ring stood 4px past the clip box on every side. The backlog recorded "3px falls outside"; measured, it was worse: the disclosure ships CLOSED, which makes the summary the panel's only child, so the bottom edge went too. **The ring was 100 percent invisible, all four edges, both themes, both viewports.** Turned inward it loses 0px and the corners take the panel's own curve. `overflow: hidden` was kept: it is the only thing holding the gate's fill, the summary's hover fill and a marked row's amber wash inside the card's corners, and replacing it needs a 13px inner radius no primitive carries |
| `.app .panel > summary` | no `min-height` | `min-height: var(--tap)` | It cleared 44px at 53 by arithmetic. A target big enough by accident shrinks the day its padding or its type step changes, and nothing reports it. Measured 53px at both viewports in both themes, so the floor never applies and the panel renders byte-identically with the line and without it. That is the point, not an objection |
| `.app .switch:hover` | no hover at all | `background: var(--bg-hover)` | The whole row is a 44px-plus target and clicking anywhere in it toggles the preference, and it answered none of that. Every other row in the product answers with exactly this role: the subscription row, the nav row, the door, the preset tile. No new token, no geometry: the four rows on Settings keep their heights to the hundredth |
| `.app .switch:has(input:focus-visible)` | no ring on the row; the ring was drawn around the 20px box | `outline: 2px solid var(--color-focus)` at 2px offset on the ROW, with `checkbox.css` standing its own down, scoped to `.switch` | A `label` is not focusable, so focus landed on the box and the ring described a twentieth of the target: 20 by 20 inside a row measuring 798 by 74 on the stand. `base.css` carried `label:has(input)` in its focus-visible list, which reads exactly like somebody meaning to solve this and is DEAD, because a label can never match `:focus-visible`. **Two lines in two files, and either alone is visibly wrong**: the row's half alone gives two concentric petrol rings, the atom's half alone gives none. Both agents that could have written half refused, an hour apart and on the same ground, so it went as one paired move. Measured: 2px at 2px offset around 328px at 360 and 620px at 1280, exactly one row of four, heights unchanged |
| `.app .switch .check` (`flex: none`, 4px top margin) | declared in `checkbox.css` | declared in `switch-row.css` | The row positioning the box it hosts, written in the atom's file. The rename is what made it movable: while the atom had no class of its own, no selector outside `checkbox.css` could reach it, so the host's positioning had nowhere else to go. **Moved as one paired write and delete**, for the same reason as the ring: the same two declarations in two files with the molecule winning on import order is zero pixels and two owners, which is the desync in miniature |
| `.app > .screen > :last-child`, split across the 900 step | the last block's own bottom margin, on top of the screen's padding | `--space-0` | The foot is `calc(--row + --space-48)`, which reads "the tab bar, and 48px over it". A child's margin turned that 48 into 72 on the screens whose last block happened to carry one: **one declared clearance, two distances.** At 360: add-subscription-empty 855 to 839, add-subscription-error 805 to 789, add-subscription 1191 to 1175, guided-reveal 1351 to 1327, upgrade-current-plan 859 to 835. **`:last-child` is wrong past 900 and the rule says so**: the shell reorders there, and on home-empty at 1280 the DOM-last child renders FIRST, so that half is guarded `:not(:has(> .head))` |
| `.app .head > *`, inside `@container (min-width: 900px)` | slot margin 24 plus padding 24 plus rule 1 = 49px of foot | `--space-0` on both slots | **`:last-child` is meaningless in a grid row and was not used**: both slots end on the same line and the band is as tall as the tallest margin box, so on Home the DOM-last is `.attention` while the item reaching lowest is `.summary`. Band at 1280 on the five Home states: 153, 153, 195, 160, 123 becoming 129, 129, 171, 136, 99. Below 900 the band has no padding and that margin IS the gap to the next block, so it is untouched there |
| `.app .sheet > :last-child` | 49px of foot in the card form, 24px hanging under the box in the narrow one | `--space-0` | The page the founder called boring, and this was half of why. Four specimens at 1280: 441, 449, 286, 386 becoming 417, 433, 270, 370, feet of 49, 41, 16, 16 becoming 25, 25, 0, 0 |
| `.wash.code > .skel:last-child` | the last skeleton bar's 4px bottom margin stacked on the wash's own padding | `margin-bottom: var(--space-0)` | 70px to 66px on the subscription-detail loading state. Written in the HOST's file and not the atom's, and the ladder is the reason: an atom cannot know it is last inside anything, and a `:last-child` rule in `skeleton-bar.css` would be the atom guessing at its hosts |
| `.tone-attention`, `.tone-error`, `.tag.cancelled` | three declared chip modifiers | **deleted** | **Moves nothing:** zero uses on the 28 coloured screens and zero on the 55 grey pages, counted twice, by parsing every class token and again by `querySelectorAll` on all 83 pages. Kept at stage 07 for the day a price change or a failed payment became a chip; the product had already answered otherwise, and both are a full wash block with a sentence, because neither state fits in two words. An empty role is not a reserve, it is noise the real roles drown in. `inventory.md` recorded `.tag.cancelled` on 1 grey page and both instruments find none; the map row was wrong and is corrected |
| `.btn.inverse`, `.btn.inverse.primary` and their hovers | four rules | **deleted** | **Moves nothing:** zero and zero. Authored rather than extracted at stage 07, because greyscale has no fill to invert. The petrol ground it was written for exists in one place, the landing, and the landing wears `.lp-btn` five times and has never worn this. It re-enters, authored again, the day a petrol band ships with a control on it. It was also the only reading of `--text-action` and `--bg-selected` in `button.css` |
| `.btn.is-disabled` | shared a rule with `.btn[disabled]` | **deleted**; the attribute kept | Not the same argument twice. `disabled` is what a browser sets and what a screen reader reads, so the first real disabled button arrives wearing it whether or not anybody remembered a rule. A class that only paints one is a second edition of the state that lies to assistive technology while looking right |
| `.app .row .p` | declared, `--type-meta` in a row | **deleted** | `querySelectorAll('.row .p')` returns 0 on all 83 pages, with `.row` standing 57 and 63 times and `.p` 13 and 17. The two families never meet. Carried at step 5 because deleting a rule is a decision and that round made none |
| `.plan-opt .p` ink | the host repainted the hosted Muted line to `--text-body` | the host paints nothing; the atom's `--text-muted` stands | The card accepts muted ink like every other card, which was the second of the two answers the file carried. The paragraph under a price is the supporting sentence and not the decision, and an emphasis modifier would have had exactly one consumer. **Shipped under a condition and the condition was checked**: measured on the card surface in both themes, 10.16:1 to 5.78:1 light and 10.44:1 to 6.40:1 dark, both clearing the 4.5:1 an ink owes at 14px. A step down in emphasis, never a step down into unreadable. Three paragraphs on `design/upgrade.html` |
| the global focus ring | `outline: 2px solid var(--line-selected)` | `var(--color-focus)` | Two roles were claiming one job. `--line-selected`'s comment listed "the current tab, the pressed tile, the focus ring" while `--color-focus` was declared for the ring and nothing else, and eight component files already read it: `base.css`, which draws the ring for the whole system, was the one place reading the other. **Moves nothing today**, both being `--petrol` and `--petrol-dark`. What changes is the answer to "which role owns this" on the day the two part company, which is the whole argument for a semantic level |
| `label:has(input)` in the focus-visible list | in `base.css` since step 3 | **deleted** | Dead, and it looked like the opposite: it reads as somebody solving the switch row. `:focus-visible` there applies to the LABEL, and a label is not focusable, so the row matches the first half and never the second |
| `.kit-cmd` | no `white-space` | `pre` | The stand, not the system. Every multi-line markup sample on 55 component pages collapsed its newlines and indentation into one run-on line: the block that exists to be copied was showing markup nobody could read, since the day the stand was built. `pre` and not `pre-wrap`, because `overflow-x: auto` is already declared and a sample that wraps mid-attribute is the same defect with softer edges |
| `.kit-stage` | no container | `container-type: inline-size` plus `contain: layout` | The stand, not the system. `base.css` puts the container on `body`, which is right for a build and wrong for a stand: at a 1280 window every specimen rendered its DESKTOP form no matter how narrow the stage holding it, so ten container-query components were each showing one of their two forms twice. Measured on `tab-bar.html`: a 941px stage and a 434px stage both drew the rail. This is what the founder saw three times in one sitting and read as three defects, the tab bar that was not a tab bar, the app bar whose logo jumped, and the boring dialog |

### Moved onto system classes (step 6)

**THE RENAME AND THE STYLESHEET SWAP ARE ONE EDIT, and the pack's own sequence hid it.** Step 6
owns the renaming map and step 8 owns the migration, which is right about the order of DECISIONS
and wrong about the order of WRITES: `design/kit/kit.css` declares none of the names the map
creates, so a screen renamed while it still links `kit.css` renders unstyled, and a screen swapped
while it still wears the old names renders unstyled the other way round. There is no order that
works. The central sweep therefore did both in one pass: 471 class attributes rewritten across 80
pages, 83 controls given a class they never had, 28 stylesheet links swapped, 19 characters
removed from the two marks that could finally be drawn.

**AND THE HALF THAT MISSED IT IS RECORDED HERE RATHER THAN QUIETLY FIXED.** Four component files
were held by another agent when the map went out and were not sent back into the queue:
`muted-line.css`, `chip.css`, `wash-block.css` and `divided-list.css`. The sweep ran, the markup
moved, and for twenty minutes the product carried `class="muted"` against a stylesheet still
selecting `.context`. Measured on `design/home.html` at 1280: the sentence under the total went
from 13px to 16px and from 20px to 48px tall, rendering at the inherited size because nothing
matched it. It is the exact failure the brief for that wave warned every agent about, in those
words, and the warning did not survive contact with the coordinator's own bookkeeping.

**THREE ROWS OF THE MAP WERE REFUSED BY THE AGENTS EXECUTING THEM**, each with a measurement, and
all three refusals were right. They are in the table below under their own names. A map decided
four steps earlier is a hypothesis about what the code will turn out to be, and the honest thing
to do when it turns out otherwise is to say so rather than to make the code fit the document.

| Variable or class | Was | Became | Why |
|---|---|---|---|
| `.lede`, `.state` | two names, folding to one `.textblock` | `.textblock` and **`.textblock.status`** | **The map was refused, and the measurement is why.** After the fold `.lede h1` lands on `--type-head` 24 and `.state h1` on `--type-title` 20, on the same `h1` tag inside one class, and the paragraphs differ too. Folded blind, one of the two moves 4px on about thirty pages under no decision. `.status` names the JOB and not the size: on all 28 coloured screens every `.state` carries `role="status" aria-live="polite"` and no `.lede` carries either, and it also explains the block on `subscription-detail-error` that has no heading at all. **The one thing the fold could have broken is tracking**: `kit.css` tightens the 24px heading and leaves the 21px one alone, so under one name the base would have reached the modifier and every status heading in the product would silently have gained -0.015em. `letter-spacing: normal` is declared and measured back to normal |
| `.locked`, `.source` | two names, folding to one `.card` | `.card.prose` and `.card` | **The map was refused.** Only the BOX merged: border, radius, fill and 16px padding are byte identical. Seven other properties differ, and a bare `.card` for both would have cost the Pro gate its 560px measure, 8px of title margin, 8px of block gap, and would have repainted the source card's hosted Muted line from 12px muted to 14px body. **And it was one character from moving four screens**: `.app > .screen > .locked` becoming `.app > .screen > .card` is a wider subject, and all four source cards on `connections` and `connections-reconnect` are direct children of `.screen`, rendering 740px where the gate renders 560. Latent today, live the day those screens are coloured |
| `.plans` | folding to bare `.grid` | **left under its own name** | **The map was refused.** Past a 760 container the plan row and the tile row are the SAME rule: 3 columns, `--space-8`, identical 201.328px tracks. At the narrow end they are 1 column against 2, because a chip survives a 159px column and a card holding a price, a sentence, a button and a four-line list does not. The column count is not a container property, it is the child's narrow floor. `inventory.md` gives the component the axis "1 to 2 / 2 to 3", which names the door row and the tile row and never names this one. Folding it needs a modifier nobody has declared, and it is paired with the open gap question on the same component |
| `.doors`, `.tiles` | two containers | `.grid.roomy`, `.grid` | Zero pixels, verified at 359, 752, 768 and 1340. Two declarations are new and both reproduce an old computed value, because the base under the door row is now the tile row: `.roomy { grid-template-columns: 1fr }` and its `margin-bottom: 0` |
| `.axis`, `.strip` | two names, one base rule | `.metarow`, `.metarow.ruled` | Zero pixels but for `justify-content: normal` becoming a declared `flex-start`, which the base's `space-between` forces the modifier to reset; both values place both labels at x=0 at both widths. The file's comment claimed the ruled form was 12.5px against 11px and "the step is the point": that stopped being true at the foundations review, both now being `--type-meta`, and the comment is corrected rather than the code |
| `.secondary` | a second name for the action row | `.actions`, and `nav.actions` in the shell | `.secondary a` was byte identical to `.btn.compact`, and `.btn.compact` folded into `.btn`, so two named classes dissolved into the base atom one after the other. **The shell's selector needed the tag and that is not a nicety**: a bare `.app > .screen > .actions` matches 3 elements today and 13 after the sweep, and applying `order: 2` and a 24px margin to the ten newcomers moves 7 of the 9 non-Home screens by up to 440px. The 24px margin migrated from the component to the host, which is where a margin between blocks belongs |
| `.facts`, `.unlocks` | two names, two block rules | `.pairs`, one block rule | The `dl`/`dd` and the `span` markups are one component and stay distinguished by their elements. `list-style` and `padding` are inert on a `dl`: 250 computed-style changes measured, zero boxes moved. `.unlocks .p` became `.pairs li .muted` and not `.pairs .muted`, because the loose form reaches a `dt` that must not right-align; `li` is a discriminator the markup already has, not an invented modifier |
| the text input, the dropdown, the checkbox | `.field input`, `.field select`, `.switch input` | `.input`, `.select`, `.check` | **These three atoms had no class anywhere in the product**: the tokens occur zero times in every class attribute on all 83 pages, so the control simply WAS its host. The sweep writes a fresh attribute on 83 elements. `.field input` means "an input, but only inside a form field"; `.input` means "an input". **Zero pixels: 83 controls fingerprinted on 17 properties across 90 pages, 0 differences**, and the test is not vacuous, because without the class the same 61 stand controls show 349. Three declarations turned out to be the host's and went to `form-field.css` and `switch-row.css`. **Zero undeclared variants**, which is the finding: unlike `amount.css` and `logo.css` with four host-keyed sizes each, these were host-scoped but never host-varied |
| `.back` | one class, two jobs and two characters | `.back` and `.close`, both marks drawn | CSS cannot select by the words inside an element, so while `&lsaquo; Back` and `&times; Close` shared a class **neither mark could be drawn**, and the back chevron is the commonest mark in the product. Neither path is new: the chevron is `nav-row.css`'s mirrored, the cross is `text-input.css`'s clear control, same 24 unit cell and same 16px box, so three marks are one family with one place to change them. **Moves the label's left edge 6.67px on `.back` and 3.73px on `.close`**, a 16px box being wider than the character prefix it replaces. No gap is declared, and that is measured: the mask's own clearance, 5.67px each side, already is the gap |
| `.btn.compact` | 13.5px type, 14px side padding | deleted; `.btn` alone | Its two differences both fold to one step after the foundations review, so the modifier became byte identical to the base. Deleted rather than kept as a no-op: a modifier that modifies nothing costs the next reader a minute. **Moves 6 buttons on 3 Home screens**, 13.5 to 14 and 14 to 16 |
| "Try again" | recorded by the first census as **one job in three weights**, and by the map as one row to execute | **nothing moved, and the census miscounted** | The map said `.btn` on `add-subscription-error` becomes `.btn.primary`. **Refused, measured on the screen**: that page already carries two filled buttons, `Add subscription` and `See your subscriptions`, so a third would put three filled accents on one screen against a rule that allows one per zone. What is left is not three weights of a button but two, plus a different component. Measured across the whole coloured corpus: **every wash that carries an action carries it as a bare link**, all three of them, on two tones and two screens, and `home-error`'s "Try again" renders identically to "See what changed" beside it. So the wash's action slot is a declared, consistent form and not a third weight. The rule the two button forms follow is the one the screens already draw: an error that REPLACED the content takes the filled button, an error that ANNOTATES content still on screen does not. Zero markup changes, and the row closes because it was measured rather than because it was patched |
| the hub's own classes | `.card`, `.badge`, `.name`, `.states`, `.pairs`, `.tag`, `.wrap` in a `<style>` block | the `as-` namespace, 99 attributes | `design/overview.html` was excluded from the central sweep and renamed by hand, because sweeping it would have rewritten its markup out from under its own stylesheet and collapsed `badge plan` into a single `chip`, merging two different badges into one. It is the `.empty` and `.app` collision for the third and fourth time. Its colours moved to semantic roles BY SURFACE, and one literal went with them: the colour badge inked itself `#fff`, now `--text-on-action` |
| `.consequence`, `.freshness` | `--type-meta`, 12px, after step 4 folded 12.5 and 12 onto one step | `--type-body`, 14px, on the base `.muted` | **The map is incomplete here and no modifier was invented to hide it.** Nine names fold onto `.muted` and they rendered at TWO steps, not one: `--type-body` for `.context`, `.tone`, `.removal`, `.pitch`, `.p` and `.bycat`, `--type-meta` for these two and `.legal`. Only `.legal` has a token in the markup to hold the quieter step, and it is `.ruled`, so only `.legal` keeps it. These two fold onto a bare `<p class="muted">` that is indistinguishable from the caption under a monthly total, so they take the base and grow 2px. Measured out of `kit.css`: `.consequence` 12.5px and `.freshness` 12px, both now 14px, on **11 coloured places** (add-subscription, four History and Trends states, upgrade-payment-failed, upgrade-processing, settings twice, settings-no-account twice) and 2 grey ones. What is owed is a declared size modifier plus the class in the markup, which is `backlog.md` line 56 word for word. A modifier no element wears is a rule documenting a decision nobody took |
| `p.notice` | no `font-size` at all, so the browser's 16px, and `margin: 0 0 22px` from the wash it was cancelling | `--type-body`, 14px, and the base `.muted` | The one row of the renaming map that had no size beside it, because the product had never given it one. It becomes the largest body text on Upgrade by accident and stops being so by decision. The three lines in `muted-line.css` that cancelled the wash's fill, corner and padding are **deleted**: the paragraph carries `muted` now and there is no wash declaration left for anything to undo. One place, `design/upgrade.html` |
| `.bycat` | a stage 07 one-off: 13px, `--mid`, `margin: 0 0 22px`, and **carried into no system file at all** | the base `.muted`: `--type-body`, `--text-muted`, positioned by `.screen` | It folds in, as the map says, and the fold is visible: the ink goes from `--text-body` to `--text-muted`, `rgb(56,67,73)` to `rgb(90,104,108)`, because the by-category line is a supporting sentence under a chart and the Two Tiers Rule puts one of those in the secondary tier. Its `.k` eyebrow already resolved. One place, `design/history-trends.html` |
| the Muted line's margin | five different margins across nine names, carried to the pixel through steps 3 to 5 | **none. The atom carries no margin** | The consolidation's own finding, executed: a gap is a relationship between two things and only the container knows it. Six hosts position the atom instead, and the three that had been living off its margin without saying so now say so: `.screen > .muted` at `--space-16` for a line standing alone in the column, `.summary .muted` and `.rstep .muted` at `--space-8` for a caption under a figure. All three are carried in `muted-line.css` under the "carried so that nothing is lost in the split" heading and each names the file that owes it: `app-shell.css`, `summary.css`, `reveal-step.css`. **The pixels are the argument**: 34 of the 38 muted lines on the coloured screens keep the exact gap they had, against 22 if the base had taken the commonest margin instead |
| four muted lines the hosts could not reach | `--space-24` above or below, under their own names | `--space-16` above, from `.screen > .muted` | The residue of the row above, named rather than absorbed. The guided reveal's second line (`.tone`, `--space-24` above, now `--space-8`, owed to `reveal-step.css`); and the by-category line, the Upgrade referral line and the Upgrade cancel block, all three of which wanted `--space-24` BELOW where a line standing alone in the screen column gets `--space-16` above. Four places on three screens, each one a host owing a rule |
| `.removal > a`, `.legal > a` | the 44px floor by direct-child structure | `.muted > p ~ a` and `.muted.ruled > a` | **The one place the fold changed what a selector means**, and it had to be caught rather than renamed. `kit.css` gave the floor to `.removal > a` and `.legal > a` and left `.consequence a` out, and that arithmetic worked only because the three had different names. They are all `.muted > a` now: the removal block is a `div` wrapping a `p` and an `a`, the footnote is a `p` whose link ends its sentence, the consequence line is a `p` with a link in the MIDDLE of one. Left as `> a` the rule would have handed a 44px inline box to the two running-text links on History and Trends and on the Pro lock. Measured after: five removal links at 44px, the footnote link at 44px, the two running-text links at 17px, all three unchanged |
| `.muted.spaced` | `margin-top: 18px` against `.consequence`'s 12 | byte identical to the base after step 4 folded both to `--space-16` | The `.btn.compact` finding a second time, and it is **not** deleted the way `.compact` was: `.compact` is a row of the renaming map and this is not, so removing it means taking the class off `upgrade-processing.html`, which that step did not own. Zero pixels either way. It is a row the map owes |
| `.notice`, `.notice.is-error`, `.attention`, `.decoder` | four names, one object | `.wash`, `.wash.error`, `.wash.attention`, `.wash.code` | **Zero pixels, and the consolidation is why**: all four already shared one padding, one margin and, since the corner was consolidated at step 3, one radius, so the fold had nothing to collide over. The old half of every link selector list is deleted in the same edit, and the repair it protected survives exactly: rest unchanged per tone, hover taking ink and underline to `rgb(28, 106, 118)` on all four, each hover out-specifying its own rest by a whole class. Measured on the product and not only on the stand, on `design/home.html` and `design/home-error.html`. Selector count in `wash-block.css`: 48 naming an old class and 14 naming a new one, to 34 naming only the new |
| `[chart]` and `[chart: waiting for a third month]` | the placeholder shipped as a LITERAL STRING into colour, `history-trends-loading.html:67` and `history-trends-empty.html:61` | a drawn frame: `<svg>` with a `<g>` of three gridlines, the same one the other three History and Trends states already carried | **The only STRUCTURAL change in the whole comparison, and the only one that adds elements rather than moving them**: +5 rows on each of four page-viewports, 31 to 36 and 52 to 57. Named by the atom round as a blocker for step 8 and handed to step 6 because the fix is markup on a product screen. It also corrects a stage 07 hub row that recorded "Placeholder shipped into colour, 3 found, 3 fixed, 0 carried": two of the five `.chart` instances were missed and the count was wrong |

---

## The dark theme as a stress test (step 7)

**It is not a fourth named source of appearance change, and the ledger below proves it rather
than asserting it.** Every fix this step made landed in `design/kit/_page.css`, `design/_screen.css`,
`design/_nav.js`, `design/kit/_nav.js`, three stand pages and the hub. **Zero edits in
`design/system/`. Zero edits on the 28 coloured screens.** The pixel comparison runs in the light
theme, and nothing this step touched is inside the corpus it measures, so the three lists above
stay closed.

That is also the step's headline finding. The pack warns that a theme needing component edits
means a component reads a primitive directly or has a value written into it. Grepped across all
55 component files plus `base.css`: **zero reads of a colour primitive, zero hex, zero rgb()
outside prose comments.** The theme was carried entirely by the semantic layer, which is the one
thing two token levels exist to buy, and it is the only proof of it the project will ever get.

### How it was measured

92 pages x 2 viewports x 2 themes = **368 renders**, walked by a browser, every element's
computed background, ink, four border colours, outline, shadow and SVG stroke collected TWICE
and paired by document index. A finding is therefore always a pair: *fine in light, wrong in
dark*, or *identical in both while the ground inverted*. Five classes, and the fifth is the one
a single-component look cannot produce:

| Class | What it looks for | Found | Left |
|---|---|---|---|
| INK | text under 4.5:1 (3:1 large) in dark that passed in light | 16 shapes | 0 |
| MERGE | a fill that separated from its ground in light and stopped in dark, with no border taking over | 1 | 0 |
| SHADOW | a surface told apart by its shadow, which a dark ground does not show | 0 | 0 |
| BORDER | a border visible in light and gone in dark | 1 | 0 |
| LINE | a control edge over 3:1 in light and under it in dark | 1 shape, 61 pages | 0 |
| FROZEN | a painted value byte-identical in both themes while its ground inverted | 112 shapes, 5 real | 0 |

### The findings, in the order they were found

| # | Where | What | Measured | Fixed in |
|---|---|---|---|---|
| 1 | the theme switch itself, 61 stand pages | The buttons carried `data-theme="light"` / `data-theme="dark"` as a JS handle. `tokens.css` and `_page.css` both declare `[data-theme="dark"]` **unscoped on purpose**, so a subtree can be pinned, so each button was also telling the stylesheet it IS that theme and painted itself in the wrong palette in both themes | the Dark button's label **1.92:1 on the white panel** - unreadable in the DEFAULT theme since step 4 - and its border 1.35:1 on the dark one | renamed the handle to `data-set-theme` in `_nav.js` + 122 buttons. Scoping the CSS to `:root[data-theme]` would have fixed the instance and killed the pinned samples on `color.html` |
| 2 | `color.html`, 62 chips | The pinned-theme chips painted no ground of their own, so every light specimen stood on the page's dark surface | `--text-primary` sample at **1.04:1**, `--bg-surface` sample merged at **1.000** | `.kit-chip { background: var(--bg-surface) }`. Because the chip pins the theme, the var resolves inside it |
| 2b | the same chips, one round later | A ground without an ink. Pinning changes what `var()` RESOLVES to; it does not change what `color` INHERITS, and inheritance walks the DOM out of the chip and into the page | label and value at **1.12:1 on the white they now stood on** | `color: var(--text-primary)` beside it. A pinned subtree needs both halves or it is pinned in name only |
| 3 | 56 stand pages + the hub | **993 classless anchors** taking the browser's `#0000EE`: a value belonging to no theme, no token and no file we own | 8.40:1 on white, **1.96:1** on the dark surface | `.kit-body a:not([class])` in `_page.css`, the same two lines in `kit.html` and in the hub's own block. NOT in `base.css`: the product carries zero classless anchors and the isolation rule forbids bending the shipped package for the stand |
| 4 | `shell.html` | Loaded `_page.css` and `../../_nav.css` but not `../_screen.css`, where `.scr-link` and `.scr-back` are declared. The drawer had its box and unstyled rows | 8.40:1 light, **1.81:1** dark | added the third link. The step 6 repair fixed the box and stopped |
| 5 | `save-focus-candidate.html` | A `.cut` specimen standing outside `.cand`, and all six of the component's rules are scoped `.app .cand .cut`, so it matched none of them | 1.78:1 dark. Its own caption said "outline, 400 weight, no tone" and it was showing none of the three | wrapped it in `.cand`. A specimen outside its scope is not a specimen |
| 6 | 28 coloured screens | The product's reviewer chrome had no dark pair while the stand's has had one since step 4. **A neighbourhood finding in its purest form:** the panel's ground is chrome and fixed, its ink is not all its own - `.sidebar` sets `--c-surface` and inherits `color` from `body`, which reads the product's `--text-primary` | **1.09:1**, near-white on white. Every row inside happens to declare a `--c-` colour and stayed readable, so it measured rather than showed. One added row away from showing | `[data-theme="dark"]` in `_screen.css`, `--kn-` values name for name. Two reviewer panels disagreeing about their own colour would be a new drift invented to cure an old one |
| 7 | both switchers | The unpressed button read the decorative panel border. A panel outline is decoration; a control's edge is the only thing marking where it begins, and 1.4.11 asks 3:1 of that | **1.27:1 light, 1.35:1 dark** - the one control this step depends on was below the threshold in both | `--c-control-edge` / `--kn-control-edge`, paired: `#8f887e` at 3.51:1 light, `#6b7578` at 3.60:1 dark |
| 8 | `color.html`, 8 swatches | `.b--line-control` and its seven siblings set `border-color` and nothing set a width or a style, so the initial `border-style: none` stood | border-top-width **0px**, style **none**, colour rgb(123,141,145): the value was there the whole time with nothing to paint. **All eight LINE roles have rendered as an empty box since the page was written**, in both themes | `border-style: solid; border-width: 3px` on the attribute selector, so `border-color` stays with the `.b--` class |
| 9 | `color.html`, 43 primitive swatches | The swatch plate's rule read `--line-container`, and two of the forty-three primitives ARE that hairline | the `--hairline-dark` swatch drew rgb(42,53,56) on rgb(42,53,56), **1.00:1**: the primitive that IS the divider had no divider | `--line-control` on `.kit-sw i`. A frame has to hold against every value it may be asked to frame, which makes it a control edge and not a decorative one |
| 10 | `design/overview.html` | It is the only page in `design/` that loads the ROOT `../_nav.js`, because it is the hub and carries the project roadmap for every stage including the grey ones. That chrome is deliberately theme-blind | the roadmap's rows at **1.00:1** with the page forced dark | the hub gets **no** pre-paint script and no switch. A page with no switch has no business remembering a choice made on another one |
| 11 | `color.html`, the dark ramp | `--hairline-strong-dark` had no swatch and no `.c--` class. It was declared at the molecule round beside `--line-container-hover` and neither followed | the page's own chip read **21 primitives, dark** against **22** in the file | added both. Found by counting the file against the page, which is the only way this gap is ever found: a missing swatch looks exactly like a complete palette |
| 12 | `color.html`, the roles section | The heading count read **25 roles** where the file has 27 plus 4 state tokens. `--line-failure` and `--line-action-soft` were added at step 5 and the sentence above them was not | the pairs rendered below it: **31**. The contrast table at the foot of the same page: **31 rows**. Only the sentence was stale | recounted off the file, and the correction is written into the sentence rather than swapped silently: a number that was wrong for two steps is worth one clause |

### Measured and dropped, with the reason

| Finding | Verdict |
|---|---|
| `--bg-recessed`, `--bg-callout` and `--bg-hover` all resolve to `#1d282a` in dark, where in light the callout differs from the other two | **Real in the file, absent on screen.** Queried directly: zero elements in 368 renders have their own fill and their ground both landing on that value. The three roles never touch. Recorded rather than cured, because inventing a divergence to satisfy a grep would move pixels no one can see |
| `--bg-page` and `--text-on-action` both resolve to `#0e1517` in dark | Deliberate and documented. Different surfaces, never adjacent: the ink always stands on `--bg-action` |
| `.kit-cmd`, `.as-card.as-planned` and `.tr` separate from their ground by only 1.04 in light | **The dark theme improves them**, 1.04 to 1.22. Flagged by a first reading of the data and dropped on measurement |
| `a.scr-link` reading 3.42 to 4.49:1 in dark across the product panel | **Instrument artifact.** `.scr-link` declares `transition: color 0.15s` and the walk sampled 30ms after the switch, catching the value mid-flight; the colour varied per page, which is what gave it away. Re-walked at 260ms: 8.86:1, and the class emptied |
| `svg`, `g` and `svg.kit-icg` carrying `fill: rgb(0,0,0)` in both themes | The `fill` property's initial value on an element that paints nothing with it. The first scan reported it on 8000+ elements because it read `fill` on HTML tags too; made SVG-aware, 112 shapes remained and five were real |

### The snapshot item, answered

Step 7 asks for the state snapshots to be re-taken in dark. **There are none to re-take**, and
that is a decision rather than an omission: the founder removed the snapshot strip on 2026-08-11,
120 images across 18 pages, and the states are described with their tokens beside a live,
interactive resting specimen instead. The argument was that a value moves and every picture of it
is quietly stale until somebody re-shoots it, and a stale picture is worse than none because it
looks checked.

Answering the item surfaced the decision's own residue: **nine component pages still closed their
retake recipe with "Step 9 checks these files for a byte shift"**, naming eight or six PNGs that
were deliberately never taken. Written before the decision and outlived it, which is the same
freeze the sentence was warning about, in prose. Corrected on all nine: the recipe stays as a
recipe, the promise is gone, and step 9 is no longer sent hunting for phantom files.

---

## The pixel proof (step 8)

The swap itself happened at step 6: `kit.css` was deleted and all 28 coloured screens
were repointed at `design/system/index.css` in the same edit as the renaming map, because
the two are one edit and not two. What step 8 owes is the accounting, and this is it.

**The result in one line: 83 distinct declared shapes, and every one of them has a row.
Zero unexplained.**

### The instrument, and one thing it is honest about

A DOM fingerprint of all 28 screens at 360 and 1280, keyed by **document order** rather than
by class, which is the only pairing that survives a stage whose whole job was renaming
classes. Every element carries 30 computed properties. The diff is then collapsed into
SHAPES, one shape being one property moving from one value to another, because three
thousand element diffs are not a document and eighty-three shapes with their counts are.

**The proof does NOT try to match a shape to a row of prose.** A script that pretended to
would be the worst kind of instrument: confident and unchecked. It classifies by RULE
instead, and every rule is a fact about the file rather than a guess about intent:

| Rule | Reads |
|---|---|
| the type scale | the after value is one of the eight declared steps |
| the 8px grid | the after value is one of the eleven declared steps |
| composed spacing | the one named composition, `calc(--space-16 + --space-8 + --space-4)` on the Amount field, `text-input.css:140` |
| tracking | letter-spacing is declared in em, so it follows the type step that moved |
| the Muted line's margin | a spacing that goes to 0, or 0 to 16: the atom gave up its margin and six hosts took it |
| the charge list | a bottom border going 1px to 0 |
| the wash corner | radius 10 to 12 |

Anything that matches no rule is printed as UNEXPLAINED and is a defect.

**What is counted and not itemised.** 10015 geometry moves (x, y, width, height, line
height, text) are DERIVED: a box that moved because the line above it grew is not a second
decision. 57 auto margins are derived for the same reason and are recognised by their
fraction, since nothing in this system declares 199.188px. 56 opacity diffs are the
skeleton's 1.4s pulse, which is noise by construction and is named rather than filtered
silently.

### The count

| | |
|---|---|
| page-viewports compared element by element | **52** of 56 |
| elements compared | **3588** |
| distinct declared shapes | **83** |
| Consolidated drift (step 3) | 1 shape, 10 occurrences |
| Basics review (step 4) | 69 shapes, 4074 occurrences |
| Moved onto system classes (step 6) | 11 shapes, 69 occurrences |
| The founder's review of the components | 2 shapes, 20 occurrences |
| **UNEXPLAINED** | **0 shapes, 0 occurrences** |

The proportions are the story: **the stage that was not allowed to change the look moved
4074 values, and 4074 of them are two scales the founder adopted by one rule each.** Nearest
step, ties to the larger, applied mechanically. Nobody decided value by value, which is what
makes the result auditable rather than arguable.

### Per screen and viewport

Both viewports agree on every screen except where noted, and the difference where they
disagree is always a block that only exists past container 900.

| Screen | moved @360 / @1280 | shapes | which lists |
|---|---|---|---|
| add-subscription | 57 / 57 | 23 | basics 90, classes 1 |
| add-subscription-empty | 25 / 25 | 15 | basics 32, classes 1 |
| add-subscription-error | 24 / 24 | 15 | basics 31, classes 1 |
| add-subscription-loading | 41 / 41 | 17 | basics 91, classes 1 |
| guided-reveal | 66 / 66 | 25 | basics 137, classes 1 |
| guided-reveal-empty | 9 / 9 | 10 | basics 11, classes 1 |
| history-trends | 54 / 56 | 31 / 35 | basics 82-87, classes 6 |
| history-trends-error | 15 / 16 | 17 / 20 | basics 27-31 |
| history-trends-locked | 35 / 36 | 23 / 27 | basics 52-56 |
| home | 95 / 101 | 25 / 30 | basics 137-145, classes 0-2 |
| home-empty | 15 / 15 | 13 / 17 | basics 22-26, classes 1 |
| home-error | 98 / 104 | 25 / 30 | basics 144-152, classes 0-2 |
| home-loading | 41 / 44 | 12 / 18 | basics 68-74, classes 0-1 |
| home-savefocus | 108 / 113 | 22 / 28 | basics 152-159, classes 0-2 |
| settings | 45 / 48 | 21 / 24 | basics 66-72 |
| settings-no-account | 38 / 41 | 20 / 24 | basics 62-68 |
| subscription-detail | 55 / 56 | 31 / 33 | basics 108-112, drift 1, founder 2 |
| subscription-detail-error | 18 / 19 | 15 / 17 | basics 27-31 |
| subscription-detail-loading | 54 / 55 | 24 / 26 | basics 126-130, drift 1, classes 1, founder 2 |
| subscription-detail-payment-failed | 57 / 58 | 31 / 33 | basics 114-118, drift 1, founder 2 |
| subscription-detail-price-change | 60 / 61 | 31 / 33 | basics 121-125, drift 1, founder 2 |
| subscription-detail-unrecognized | 54 / 55 | 31 / 33 | basics 108-112, drift 1, founder 2 |
| upgrade | 46 / 46 | 34 | basics 90, classes 14 |
| upgrade-current-plan | 31 / 31 | 14 | basics 48, classes 3 |
| upgrade-payment-failed | 18 / 18 | 18 | basics 32 |
| upgrade-processing | 10 / 10 | 15 | basics 18 |
| **history-trends-empty** | structural, 31 to 36 rows | - | see below |
| **history-trends-loading** | structural, 52 to 57 rows | - | see below |

### The four page-viewports that are not comparable element by element

`history-trends-empty` and `history-trends-loading`, at both viewports, gained **five
elements each**. The instrument refused to read them rather than pairing the wrong rows,
which is the behaviour that matters more than the finding. Compared as a bag of tag and
text instead, the change is exactly two things and both are named:

- `+1 div, +1 svg, +1 g, +3 line, -1 div` : the literal string `[chart]` and
  `[chart: waiting for a third month]` replaced by the drawn frame the other three History
  and Trends states already carried. It has a row in the step 6 list
- `-3 div, -1 header, -1 a` carrying `&lsaquo;` : the back link's chevron is drawn by a mask
  now, so the character left the text. A text change, and text is derived

### The reverse check: rows with no visible difference

The pack asks for this and it is the half that finds real things. Three rows of the named
lists correspond to no difference in this comparison, and each one has a different reason.

**1. The share card's total, 40px to 32px.** Zero elements at 40px in the after corpus, and
zero in the BEFORE corpus either, which settles it: `share-card.css:30` records that the
component "stands on 2 grey pages and ZERO coloured ones". The row is true about the system
and its screen is still grey. It becomes visible at stage 12 and not before.

**2. The row family's side inset, and 3. the drawn chevron.** Both invisible, both for the
same reason, and the reason is worth more than the two rows: **the before capture is not
from step 1.**

The pack assumes one instrument walks the screens at step 1 and again at step 8. This
project used two. Step 1's instrument was the CONTROL CENSUS (`census.py`, `census-raw.json`,
2026-08-11), which measures controls by their axes and not the whole DOM. The DOM
fingerprint was built at step 6, so `pixel-before.json` is "the screens on `kit.css`
immediately before the swap", not "the screens at step 1".

The consequence is precise rather than vague. Everything this stage changed in a COMPONENT
FILE reached the screens only at the swap, so it is all in the diff: steps 3, 4, and 6 in
full. Everything the stage changed in `kit.css` ITSELF reached the screens before the
capture, and that is exactly two rows, both from the founder's review of the components,
both verifiable in git rather than by argument:

```
3aa3f5f (before step 5)  .app .row     padding: 10px 4px    .navrow  padding: 12px 2px
9fa7c7d (step 5)         .app .row     padding: 10px 16px   .navrow  padding: 12px 16px
                         .navrow .arrow  font-size: 0 + mask   <- the drawn chevron
```

Both are already in `pixel-before.json`: the row measures `padding-left: 16px` on the before
side, the arrow measures `font-size: 0px` and `width: 16px` on both sides. So the audit's
claim that the inset "moves its logo 12px right on Home, the largest single pixel move this
stage makes" is **true of the product and not of this diff**. Measured on the coloured Home
at 1280, the logo moves **4px**, and that 4px is the grid, not the inset. The 12px landed on
the grey corpus and on the coloured screens at step 5, where the founder saw it and asked
for it, which is the instrument that verified it.

Recorded rather than repaired. Re-capturing a "before" now would be inventing evidence, and
the pack is explicit that the before is never re-taken. What this costs is named: **the
proof covers the SWAP, not the whole stage.** For the two rows above the witness is a git
diff and a founder's eye, and that is said out loud instead of letting them look covered.

### And the theme moved nothing

Re-run after step 7, current state against the after taken before it: **3774 elements, 34
changed, all 34 the skeleton pulse, 0 declared shapes.** The dark theme's twelve fixes
landed in the stand, the reviewer chrome and two scripts, and not one of them touched a
product screen or a component file.

One instrument correction fell out of that run and is worth keeping. The fingerprint's row
index counts SKIPPED rows too, so injecting the theme switch into the review panel shifted
every index by three and the naive string comparison reported all 3774 elements as changed
while reporting zero changed properties. The comparison pairs by array position and reads
fields from the third onward, so the answer was right and the headline was not. The
equality shortcut now skips the leading index.

---

## The brand, and the fifth named source (2026-08-12)

The founder chose one of thirteen logo directions the day after step 8 closed, and asked for it
in the product. The direction is **Crop**, from `design/concept/logo-crop.html`: one letterform
drawn on a 100 unit square, deliberately larger than any frame that will hold it, and a window
cut out of it. The letter never changes size relative to itself; the window does.

This is a change of appearance with a named source, and it is the fifth. It is also the only one
of the five that is not a refactor: the other four moved values that were already on the screens,
and this one puts a new object on all 28 of them.

### What entered the system

| Thing | Where | Level |
|---|---|---|
| `.brand`, the mark | `design/system/components/brand-mark.css` | atom, new |
| `.wordmark`, the word | `design/system/components/brand-wordmark.css` | atom, **moved** out of `app-bar.css` |
| `.lockup`, the pair | a slot rule in `app-bar.css` | not a component, see below |
| `favicon.svg`, `apple-touch-icon.png` | repository root | exported cuts of crop A |

Both atoms went through the five-thing gate: css, kit page with the five blocks, a row in
`design/kit/_nav.js` in the atoms group, a row in `docs/inventory.md` with its level, and an
`@import` in the atoms group of `index.css` rather than at the end of the file.

### Two values changed, and the reason is a reversal rather than a correction

| Variable or class | Was | Became | Why |
|---|---|---|---|
| `.wordmark` weight | 700 | 800 | the heaviest Inter the product ships, from the concept page's spec plate |
| `.wordmark` tracking | +0.02em | -0.02em | it stopped being the identity and became half of it |
| `.wordmark .dd` | did not exist | -0.09em | the pair closes until the bowls almost meet: the one part of the word that is a drawing |

**The old value was right and its reason is on the record, which is why this needs saying.**
`app-bar.css` argued for +0.02em out loud: at 16px in a bar the letters need air, and a wordmark
set solid reads as a word rather than as a mark. `DESIGN.md` said the same thing. Both were
describing a product with **no mark in it**, where the word carried the identity alone and had to
hold the bar by itself. A mark now stands beside it, so the word is no longer the thing being
recognised and can be set as one shape. The premise moved; the value followed. `DESIGN.md`'s
sentence was rewritten the same day rather than left to contradict the code.

### The mark is the fourth place petrol appears

D-Concept spends petrol on the primary action, the current selection and the trust line, and says
"and no more". The mark is a fourth place. It is recorded as a **named exception** in
`docs/decisions.md` and in `CLAUDE.md` rather than as a fourth job, and the boundary is written
with it: the brand is an identity and never an accent, so it never appears inside a screen's
content. `logo-crop.html` had already written the exception; `CLAUDE.md` had not, and a locked
decision that only one file knows about is not locked.

### What it moved, measured

The lockup **inserts** three elements per screen, so the step 8 fingerprint could not be paired by
document order: every row after the app bar shifts by three, and index pairing would have reported
the whole product as changed. Rows were re-aligned by an LCS on tag and text, which is the weakest
key that survives an insertion, and only matched rows were compared:
`design/kit/screens/brandproof.cjs`, output in `brand-ledger.txt`.

```
matched elements   : 3774
added by the brand : 168   dropped: 0        exactly 3 per page-viewport, on all 56
matched and moved  : 69

WHICH ELEMENTS MOVED
  56  span "Tendd"      the brand's own slot
   7  span "Free"       the plan chip
   6  span "Pro"        the plan chip
```

**Not one other element on any of the 28 screens changed a single declared property.** The two
chips moved because `margin-left: auto` in `chip.css` absorbs free space in that bar, and the slot
beside them got wider. Measured directly, both settings in the same document by the same engine:
the word went from **50.703px to 45.938px**, narrower by 4.765px, and the slot from 50.703px to
**75.938px**, wider by 25.235px. That figure, 25.235, is the whole of what the brand did to the
layout of 28 screens, and the auto margins were already absorbing it.

### The lockup was NOT promoted to a component, and the count is why

It stands in exactly one host. Rule 1 of `inventory.md` is that one occurrence is a one-off and is
written down as one rather than promoted in silence, so its rule lives in `app-bar.css` beside
`.back`, `.close` and `.step`, the other three slots with no component anywhere in the system. The
concept page names two more hosts, the share card's band and a launch screen; the share card
stands on 2 grey pages and 0 coloured ones, and the launch screen does not exist. When the second
host is built the lockup becomes a molecule and the rule moves.

**Its layout lives in its host, and that is checkable rather than stylistic.** Put the lockup's
markup on a bare stage in the kit and `.app .appbar .lockup` does not match: the wrapper falls
back to a plain span, the mark keeps `display: block`, and the word drops onto a second line. It
was caught in a screenshot of the new kit pages at 1280 and fixed by giving every lockup specimen
a real app bar. Kept rather than worked around, because it is the "one host" decision proving
itself: a thing that renders correctly on a blank canvas is a component, and this is a slot.

**The wrapper exists for the rail, not for tidiness.** Past a 760px container the app bar turns
into a column. A mark and a word left as two children of it would stack vertically at exactly the
width where the brand has the most room. Wrapped, they are one child: the bar stacks the lockup,
and the lockup stays horizontal inside itself at every width. Verified at 1280: `flex-direction`
on the bar is `column` and the pair is still a row, gap 8px.

### One contradiction in the source, resolved by the drawings

`logo-crop.html` rule 4 reads "inverted only on the phone icon". Two sections above it, the "On
other grounds" plate draws the inverse and labels it **not used**, with the reason: swap the roles
and the letter stops being the mark, because the counter becomes a dot and the frame becomes the
drawing. The "home screen" plate on the same page then draws the phone icon **not** inverted.

Two of the three agree and the drawings are the living truth, which is this pipeline's own rule
for a concept document that follows its mockups. The system therefore carries no inverse and the
exported touch icon is the paper field with the petrol letter. Recorded rather than picked in
silence, so whoever wrote the sentence can overrule the drawing if the sentence was the decision.

### The repository stops having no icon

`favicon.svg` is crop A at 46 units with its own dark pair through `prefers-color-scheme`, because
a role without a pair does not exist in this system and a browser tab strip is a ground like any
other. `apple-touch-icon.png` is 180px, square and light-only: iOS masks a home screen icon with
its own superellipse, so a rounded square would put a corner inside a corner, and Apple does not
offer the icon a theme.

These two files carry the only literals of this brand outside a token file, because a favicon is
fetched as its own document and cannot read a custom property from the page. All four values are
copied from `tokens.css` and none is chosen there:
`--paper #ffffff`, `--petrol #1c6a76`, `--paper-dark #161f21`, `--petrol-dark #6bb0ba`.

Linked from **132** pages, every page in the project except the 56 in `wireframes/`. The frozen
corpus gets no icon on purpose: it is the structure contract and it is not the product.

### What this leaves for step 9

- `.brand` occurs **zero** times in the grey corpus and always will. It is the first component
  here that came from a decision instead of from the wireframes, and the inventory's counting
  rule does not reach it. The instrument only finds what has already been drawn, so a brand, a
  splash screen and a first-run tour are invisible to it by construction. Named in
  `inventory.md` so the gap is a known one.
- Crops **B** and **C** are locked at Concept and not built: no host in the product carries them.
  The share card is the first, and it is still grey.
- The **coloured d** is locked and not built, for the same reason: the word never stands alone
  today.
- The **motion rule** for the moving window is written and goes to stage 11 as its first entry,
  which is where `logo-crop.html`'s own chain put it.
- The two grey `wireframes/` pages and the coloured ones now disagree about the app bar's brand
  slot: the grey writes `.wordmark`, the colour writes `.lockup`. That is the frozen corpus doing
  its job, and it is stated on `app-bar.html` beside the table that counts it.

### Four corrections the same day, all from the founder looking at a real screen

**1. The brand was 48px lower on eighteen screens than on the other ten.**

In the rail the bar stacks its slots in DOM order, and the DOM order is the one the ROW needs:
the way out sits at the leading edge on mobile, which is correct there and says nothing about the
brand. Stacked, it put the way out on line 1 and the brand under it, so the brand's vertical
position depended on whether the screen had a way out at all. Measured before anything was
touched, at 1280:

| Screens | Lockup, from the top of the bar |
|---|---|
| the 10 with no leading control (Home, Settings, the reveal) | **8px** |
| the 18 carrying `.back` or `.close` | **56px** |

Walking from the list into a subscription moved the mark down 48px, and walking back moved it up
again, on the walk this person does most often. An identity that is 48px lower on some screens
than on others is not an identity, it is a list item.

Fixed with one declaration inside the 760 container block: `.app .appbar .lockup { order: -1 }`.
Same DOM, two arrangements, one per form factor. On mobile the row keeps the way out at the
leading edge; in the rail the brand takes the head and the way out becomes the first line of the
navigation under it, which is what a rail is. It costs nothing in the tab order, because nothing
inside the lockup is focusable; the day it becomes the way home, that line has to be revisited
with the markup, and app-bar.css says so where it stands. Measured after: **8px from the top and
16px from the left on all 28 screens.**

**1b. The same jump on mobile, which the complaint did not name and was also looking at.**

Tracing the first one turned up its twin. `.back`, `.close` and `.acct` each stand on `--tap`, so
a bar holding any of them is 61px tall; the brand stood on nothing, so a bar holding **only** the
brand was as tall as the brand. Measured at 360: **24 screens at 61px and four at 41px**, with the
mark riding 10px higher on Guided reveal, its empty state, Settings with no account and the
upgrade transit screen. Walking into any of those four moved the mark up and shrank the chrome
under it.

The floor went on the lockup and not on the bar. On the bar it would have to be a calc of the tap
floor plus both paddings, because box-sizing is border-box, and that number would need correcting
by hand every time the padding moved. On the lockup it is the same `--tap` every other slot in the
bar already reads, and the bar goes on being as tall as its tallest slot.

**One regression, found by measuring rather than by looking.** `order: -1` is declared inside the
760 block for the rail. The onboarding chain opts out of the column and keeps its row, and the
order rule did not know that: for one round the seven chain screens put the brand at the leading
edge of a ROW at 1280 and pushed the way out to its right. Caught because the lockup measured left
89 at 360 and left 16 at 1280 on a bar that is a row at both. Closed with
`.app.flow .appbar .lockup { order: 0 }`, at 0-4-0, beside the opt-out it belongs to.

**Measured after all three, on all 28 coloured screens, at both viewports and in both themes: the
mark sits 19px from the top of the bar. One number, twenty-eight screens, four combinations.**

**2. The last letter is petrol, and it overrules the concept.**

`logo-crop.html` made the coloured letter conditional on three things: the word standing alone,
above 20px, and all ink beside the mark. The product satisfies none of the three, so the rule
shipped for one day as "no colour at all" and the coloured letter would have stayed unbuilt and
untested until stage 12.

The founder looked at it in the product and asked for the letter anyway. The concept's reason
describes a bar with two saturated OBJECTS in it; what is on the screen is a 22px mark and one
16px glyph 46px to its right. `.hi` now reads `--text-action`, measured 6.2:1 light and 6.8:1 dark
against the 4.5:1 ink threshold, with the logotype exemption deliberately not taken. The markup
is `Ten<span class="dd">d<span class="hi">d</span></span>`, nested rather than flat, so the colour
inherits the pair's tracking instead of repeating it.

The rule that replaces three conditions is: **the last letter is petrol.** The sentence it
overrules is left standing on the concept page rather than quietly edited, because that page
records how the mark was found and is not a live specification.

**3. The desktop rail is 220px, and it was 240.**

Founder, on a coloured screen: "make the side panel narrower, somewhere around 220 pixels."
One declaration, `app-shell.css` `grid-template-columns`, and it is the only place the product
states that width.

| variable or rule | was | became | why |
|---|---|---|---|
| `.app { grid-template-columns }` at container 760 | `240px minmax(0, 1fr)` | `220px minmax(0, 1fr)` | founder's review, 2026-08-12. A 240px column holding a 22px mark, a 46px word and four one-word destinations was mostly air, and the air read as importance the navigation does not have |
| `_page.css` `.kit-stage.rail.full > *` `--kit-measure` | `240px` | `220px` | mirrored, not decided. The stand shows a chrome at the width the product gives it, or it is a drawing |

**The floor is 180 and it was probed, not guessed.** What the rail has to hold is not the
navigation, which is short, but the app bar's widest way out: **"Your subscriptions" is 148px of
unbreakable ink** on the five History screens, and the bar's own two 16px margins make 180. Driven
to 230, 220, 210, 200, 190, 180 and 170 on all 28 coloured screens, reading every element's height
in both chromes: nothing changes height until 180, where that label wraps to two lines. 220 keeps
**40px of slack** over the longest string the product has.

The first probe of this said the opposite and was wrong. It called a wrap by height, and every
link in the rail stands on a `min-height` floor, so it reported the same 18 screens as broken at
240, at 220 and at 170 alike. The second read `Range.getClientRects()` and counted inline boxes,
so it called the destination icon and the petrol letter extra lines. Only the third instrument,
element height taken twice in the same page, could answer the question at all. **A measurement
that returns the same answer at every input is not measuring the input.**

**What the 20px did, on all 28 screens at 1280:**

| | elements |
|---|---|
| did not move at all | **281** (every element of the ten `.app.flow` screens, which replace the grid with a flex column, plus everything inside the rail, whose left edge did not change) |
| slid left, content unchanged | 301 at -20px, 167 at -10px |
| slid left and took the width | 216 at -20/+10, 214 at -10/+10, 129 at -20/+20 |
| held their left edge and gave width back | 108 at -20 width |
| changed height | **2**, and both are the same improvement |

Nothing moved vertically anywhere else, and nothing overflows on any screen. The two height
changes are on `subscription-detail-unrecognized`: the line "All we have is how it appears on your
statement" **stopped wrapping**, so that block is 21px shorter and the statement descriptor under
it sits 21px higher. That is what the width was for.

**220 is not on the 8px grid and does not have to be.** `app-shell.css` already states the rule
at the top of the file: a width is on neither scale, and 780, 620 and 300 are not multiples of 8
either. What a width must not be is a spacing token, and this one is not.

**It closes an open row from step 2.** The rail was **240 in the kit and 232 in the grey**, an 8px
disagreement carried at 240 and flagged for the founder rather than merged quietly, because a
value moves only by its own named decision. The decision arrived and it named a third number.
`docs/decisions.md` and `docs/inventory.md` both carried that open row and both now point here.

### A defect this found and left for the founder: the review chrome moves the product's breakpoint. CLOSED the same day

Tracing the jump across ten widths turned up something that has nothing to do with the brand and
is worse than the thing being looked for. The bar's form is **not monotonic in window width**:

```
 720 row      760 column   800 column   860 row   900 row   960 row   1024 column   1280 column
```

`design/_screen.css:192` gives `body { padding-left: 220px }` at `@media (min-width: 840px)`, to
dock the reviewer's screen panel. `base.css` declares the product's container on `body`, and a
container query reads the CONTENT box, so between 840 and about 980 the product is asked whether
it is at least 760 wide while holding 620 to 760. It answers no, and every coloured screen renders
its **mobile** layout inside a desktop window.

Three things follow, and the third is the reason this is written down rather than fixed in
passing:

1. It is not the brand's doing. It has been true since the panel and the body container met, and
   it moves the tab bar and the dashboard head as well as the app bar.
2. Both accepted viewports miss it. 360 and 1280 sit either side of the band, which is exactly the
   shape of the defect `CLAUDE.md` already names: a measure that quietly stops being applied at a
   wider container looks calm.
3. **The fix is a decision about the instrument, not a value.** A docked 220px panel and a
   full-width product cannot both have the screen. Moving the panel's breakpoint to 980 repairs
   the 760 boundary and leaves the 900 one broken by the same 220px; making the panel an overlay
   at every width repairs all of them and costs the always-visible screen list. That is the
   founder's call, so it is a row here and not an edit.

Until it is decided, one thing is true and worth saying out loud: **a coloured screen reviewed
between 840 and 980 is not showing what it ships.**

#### Decided the same day: the panel is an overlay at every width

Founder, 2026-08-12, choosing the third option in full: the panel opens from the toggle, the
container always equals the window, and the always-visible screen list is the price.

**The whole `@media (min-width: 840px)` block is deleted, not narrowed.** Six declarations went
with it: the drawer pinned open, the close button hidden, the overlay hidden, the toggle hidden,
`body { padding-left: 220px }` and `.app > .tabbar { left: 220px }`. The mechanism that replaces
them is not new, it is the one that has run below 840 since the chrome was written.

Walked on Home at fourteen window widths, before and after:

| window | 360 | 700 | 760 | 800 | 840 | 860 | 900 | 960 | 980 | 1024 | 1280 | 1440 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| container **was** | 360 | 700 | 760 | 800 | **620** | **640** | **680** | **740** | 760 | 804 | 1060 | 1220 |
| shell **was** | mob | mob | GRID | GRID | **mob** | **mob** | **mob** | **mob** | GRID | GRID | GRID | GRID |
| container **now** | 360 | 700 | 760 | 800 | 840 | 860 | 900 | 960 | 980 | 1024 | 1280 | 1440 |
| shell **now** | mob | mob | GRID | GRID | GRID | GRID | GRID | GRID | GRID | GRID | GRID | GRID |

**The container now equals the window at every width**, so all three of the product's steps fire
where they say they do. Measured on the step itself rather than around it: Home's groups go to two
columns at a window of exactly 900 and to three at exactly 1340, and the subscription detail
splits into two tracks at exactly 900. Under the dock those three would have needed 1120, 1560 and
1120 of window.

**One thing the overlay exposed, and it is the more interesting half.** The toggle is a 40px strip
in normal flow above the screen, and past a 760px container the shell is exactly `100dvh`, so with
the toggle now shown at every width the review page stood one strip taller than the window and
scrolled by 40px. It was already true in the 760 to 840 band, where the toggle showed and the dock
had not started yet, and nobody had looked.

The correction is four declarations on `.stage-app .app` in the chrome's own file, and **it takes
four rather than two, which is the finding.** Setting `height` alone moved nothing at all, with
the rule matching and winning on specificity: the shell's MOBILE rule sets `min-height: 100dvh`,
the 760 block adds `height: 100dvh` without clearing it, and the min-height survives into the
desktop form and clamps anything shorter. In the product the two are the same number, so the clamp
has never shown and there is nothing to repair in `app-shell.css`. **The shell cannot be asked to
be shorter than the window, and no one decided that.** Recorded here for whoever asks it something
new.

The toggle also gained a label, `content: "All screens"`, in CSS rather than in markup: it stopped
being a phone-only affordance and became the only way to the screen list at any width, and the
button's markup is written out in all 28 screens, so a word in the markup would be 28 edits to
product files for a piece of review chrome.

**Verified across 252 page-widths**, 28 coloured screens at 360, 700, 760, 840, 900, 960, 980,
1280 and 1440: container equal to the window on every one, `body` padding zero, the drawer hidden
until asked for, the toggle present, no horizontal overflow, and no desktop page taller than its
window. The ten `.app.flow` screens read as the mobile form at every width, which is correct: they
replace the shell's grid with a flex column by their own rule.

**Nothing in `design/kit/` changed and that is deliberate.** The stand declares its own container
on `.kit-stage`, so its docked panel never moved a specimen's query. Two reviewer panels now
behave differently, and the difference has a reason: one of them was standing on the product's
container and the other was not.
