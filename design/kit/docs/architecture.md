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

From stage 09 a fourth shelf stands above: **patterns**, the settled compositions. It is a new
shelf in the same cupboard, not a rebuild.

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
  (patterns/ joins it at stage 09, with no move)

design/kit/        the STAND. A person looks at this. It ships nothing.
  _nav.js          the registry: draws both the hub cards and the side panel
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

## Adding a component: five things, and four is not enough

1. `design/system/components/<name>.css`
2. `design/kit/<name>.html`, with the five blocks: anatomy, variants and sizes, when to use,
   the rule and the anti-rule, states.
3. a row in `design/kit/_nav.js`, **in the group of its own level**
4. a row in `design/kit/docs/inventory.md`, **with its level**
5. an `@import` in `design/system/index.css`, **into its own level group and not at the end**

The last two are the ones that get skipped, and they are the ones that matter most for a
component added *after* the first build: appended at the end of the file it looks harmless, and
that is exactly how the ladder comes apart.

---

## Where a correction goes

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

## The one thing this stage promises

The product does not move by a pixel. There are exactly **three** legal sources of a visual
change, all of them named in `docs/tokens-audit.md`, and the pixel comparison at step 8 checks
every difference against them:

1. consolidated drift, at step 3
2. the founder's review of the foundations, at step 4
3. moving the product onto system classes, at step 6

A difference with no line in one of those three lists is a defect, and it is fixed in
`tokens.css` or in a component file. Never on the screen.
