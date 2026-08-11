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

The three legal sources of a visual change on this stage. The pixel comparison at step 8 checks
every difference against these three lists; a difference with no line here is a defect and is
fixed in `tokens.css` or in a component file, never on a screen.

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
