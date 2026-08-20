---
name: Tendd
description: A calm way to see and control recurring payments, for people who avoid finance apps.
colors:
  petrol: "#1c6a76"
  petrol-deep: "#175a64"
  petrol-tint: "#e7edee"
  ink: "#141b1d"
  slate: "#384349"
  muted: "#5a686c"
  paper: "#ffffff"
  canvas: "#eef3f4"
  panel: "#f4f7f8"
  hairline: "#e4e9ea"
  hairline-soft: "#eef2f3"
  control-edge: "#7b8d91"
  control-edge-hover: "#5a686c"
  skeleton: "#e2e9ea"
  amber: "#8a5c0c"
  amber-wash: "#f6efe0"
  clay: "#9a5842"
  clay-wash: "#f3e9e5"
  moss: "#2e6b52"
  badge-bg: "#e9eeef"
  badge-ink: "#4f5e62"
  trial-bg: "#dfeef0"
  trial-ink: "#185862"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "46px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  step:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.35
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "14.5px"
    fontWeight: 600
    lineHeight: 1.5
  meta:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "10.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  card: "14px"
  control: "10px"
  badge: "6px"
  logo: "10px"
  wash: "12px"
spacing:
  screen-x: "16px"
  screen-y: "16px"
  row-y: "11px"
  row-x: "12px"
  block: "18px"
  section: "20px"
components:
  button-primary:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    minHeight: "44px"
    fontSize: "14px"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.petrol-deep}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.slate}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    minHeight: "44px"
    fontSize: "14px"
    fontWeight: 600
    border: "1px solid {colors.control-edge}"
  button-secondary-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.control-edge-hover}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "none"
    padding: "10px 4px"
    minHeight: "56px"
  row-hover:
    backgroundColor: "{colors.panel}"
  badge-status:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.badge-ink}"
    rounded: "{rounded.badge}"
    padding: "3px 9px"
    typography: "{typography.label}"
  badge-trial:
    backgroundColor: "{colors.trial-bg}"
    textColor: "{colors.trial-ink}"
    rounded: "{rounded.badge}"
    padding: "3px 9px"
  badge-pro:
    backgroundColor: "{colors.petrol-tint}"
    textColor: "{colors.petrol}"
    rounded: "5px"
    padding: "1px 6px"
  banner-change:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.wash}"
    padding: "12px 14px"
  banner-error:
    backgroundColor: "{colors.clay-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.wash}"
    padding: "12px 14px"
  callout:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.slate}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
---

# Design System: Tendd

Generated at UI + Visual (stage 07) with `/impeccable document`, from the real code of
`design/kit/kit.css` (moved there from `design/_theme.css` by `git mv` in the same stage) and
the six coloured screens (twenty-six pages) of the sample, plus the draft `DESIGN-artifacts.md`.
Every value below is a value that ships; nothing here was authored for this document.

**Corrected at step 7, after Codex read this file against the kit.** Six values here were
written from the concept draft rather than from the shipped stylesheet, which is the one thing
this document promises never to do: Display weight and tracking, the wordmark, both button
paddings, and the whole row contract. They now read what `kit.css` serves. The lesson is worth
more than the fix: a document generated once from code is accurate for exactly as long as the
code stands still, and this one was generated before the sample was assembled.

## Overview

**Creative North Star: "Petrol and Paper"**

Tendd is for a person who does not open her banking app because she is afraid of what is in it.
Everything in this system is bent toward one outcome: she looks, and nothing about the looking
punishes her. That is why the loudest thing on any screen is a number she asked for, and the
quietest thing is anything that could read as a verdict. The system has exactly one voice raised
above a murmur, petrol, and it is spent on three things only: the primary action, the current
selection, and the line that says what we can and cannot do with her money.

The material is paper on a cool off-white ground. Cards are true white and sit on a canvas with a
whisper of the accent in it, so the surface reads as a sheet on a desk rather than as a panel in
an application. There is one shadow in the whole system and it is barely there. Depth is carried
by the hairline and by the paper, not by lift. Nothing glows, nothing gradients, nothing floats.

The register is warm restraint. The neutral is not clinical grey and it is not beige: the taste
rejected both by name. Type is Inter and only Inter, in a tight scale where the money is huge and
everything else steps down quickly to two sizes and stops. The reflex this system exists to
refuse is the finance-app reflex: red numbers, alarm badges, dark dashboards, a chart where a
sentence would do.

**Key Characteristics:**
- One accent, spent four ways, and never on decoration.
- Status is a quiet grey badge. Alarm is not a colour we own.
- The monthly total is the largest object on screen by a wide margin (46px against a 14.5px row).
- Real logos and real merchant names; never a cryptic code where a name is known, never stock art.
- Flat by construction: one soft shadow, hairlines, and paper.

## Colors

A cool near-monochrome with a single petrol voice, and three semantic tones that are all
deliberately desaturated so that no state in the product can shout.

### Primary
- **Petrol** (#1c6a76): the identity colour and the only saturated thing on a screen. It is spent
  on exactly four jobs: the primary action, the current selection (the active tab, the selected
  row, the chosen plan), the trust line's shield, and, since D-Plot on 2026-08-18, the plotted
  line on the trend chart with its point, its readout and the wash under it. **Petrol Deep** (#175a64) is its pressed and
  hover state; **Petrol Tint** (#e7edee) backs the Pro label and the selected row in the master
  pane, and is the only place the accent appears as a surface.

### Secondary
- **Amber** (#8a5c0c on a #f6efe0 wash): a price change. Warm, readable, and never red. A price
  going up is news, not an emergency, and the colour has to say that before the sentence does.
- **Clay** (#9a5842 on a #f3e9e5 wash): a genuine failure, and only a genuine failure. Scoped to
  the sync error and the could-not-load state. An empty state never gets clay, because nothing
  went wrong in an empty state.
- **Moss** (#2e6b52): a confirmation, used sparingly and never for celebration.

### Neutral
- **Ink** (#141b1d): every heading and every number that matters. Near-black, not black.
- **Slate** (#384349): body copy inside callouts and dense blocks.
- **Muted** (#5a686c): the single secondary tier. There is no third, lighter tier anywhere, which
  is what keeps every text-on-surface pair above WCAG AA.
- **Paper** (#ffffff): cards, rows, the app bar, the tab bar. The product's content surface.
- **Canvas** (#eef3f4): the ground the paper sits on, and the callout fill.
- **Panel** (#f4f7f8): the row hover and the desktop rail.
- **Hairline** (#e4e9ea) and **Hairline Soft** (#eef2f3): container edges and inner dividers.
- **Control Edge** (#7b8d91), hover **#5a686c**: the boundary of a control, and nothing else. It
  exists because WCAG 1.4.11 asks 3:1 of the edge that identifies a control and the hairline is
  1.23:1 on paper. It is the lightest value on the hairline family that clears 3:1 on all three
  grounds a control sits on: paper 3.46, canvas 3.10, panel 3.22.
- **Skeleton** (#e2e9ea): loading placeholders, pulsing at 1.4s and stopped entirely under
  `prefers-reduced-motion`.

### The dark theme, and the contrast of every role in both

The dark half is not a feature decision, it is the proof that the semantic level is real. A
rebrand would have worked on a flat sheet of values: swap the hex and everything follows. Only a
theme separates the two levels, because the ground inverts while "the action" stays the action.
**The pair is a property of the level, not an event:** every role is written twice, in `:root`
and in `[data-theme="dark"]`, at the moment it is declared, and a role without a pair does not
exist. **34 declarations at the semantic level, 34 pairs, none missing:** 27 roles, 4 state
tokens and 3 component tokens.

**This document said 31 until 2026-08-13, and so did the colour page of the stand.** The three
component tokens (`--control-accent`, `--bg-chip-accent`, `--text-chip-accent`) were split off
from `--bg-action`, `--bg-selected` and `--text-action` during the component rounds, and were
counted in neither figure; `--bg-hover` was paired and named everywhere but missing from the
table below. Nothing was broken in the product, all four are declared in both themes and all four
clear their threshold. What was broken is the parity between the code and the documents that
describe it, and it survived a recount because the recount was taken off the stand rather than
off `tokens.css`.

**It is not a mirror.** Contrast runs against the opposite ground, so five pairs deliberately
disagree with their light halves, and each disagreement is marked in `tokens.css`:

| Role | Light | Dark | Why it inverts |
|---|---|---|---|
| `--bg-action-strong` | darkens under the pointer | lightens | a hover moves away from its ground, and the ground swapped ends |
| `--bg-hover` | darker than the surface | lighter | the same reason, on the state token |
| `--line-container-hover` | darker than the plain hairline | lighter | the same reason, on a card edge |
| `--bg-callout` | shares one value with `--bg-page` | parts from it | a wash on a dark surface has to lift while the page ground stays put |
| `--text-on-action` | white | the dark canvas | white on the lightened petrol measures **1.9:1**; this one would have shipped broken |

**Three surfaces, three thresholds.** Ink answers to 4.5:1 (3:1 from 24px or 19px bold), fill and
line answer to 3:1 under WCAG 1.4.11. Eleven fills and four lines are marked decorative by a
named decision of 2026-08-11: a card edge and a wash separate two surfaces that nothing has to
find by touch, and raising them outlines the whole product, which is what this language was
chosen against. The boundary that *identifies* a control is a separate role and carries its 3:1.

| Role | Paints | Against | Light | Dark | Needs |
|---|---|---|---|---|---|
| `--bg-surface` | fill | `--bg-page` | 1.12 | 1.10 | decorative |
| `--bg-recessed` | fill | `--bg-surface` | 1.08 | 1.11 | decorative |
| `--bg-callout` | fill | `--bg-surface` | 1.12 | 1.11 | decorative |
| `--bg-selected` | fill | `--bg-surface` | 1.18 | 1.20 | decorative |
| `--bg-attention` | fill | `--bg-surface` | 1.14 | 1.08 | decorative |
| `--bg-failure` | fill | `--bg-surface` | 1.19 | 1.11 | decorative |
| `--bg-status` | fill | `--bg-surface` | 1.17 | 1.20 | decorative |
| `--bg-trial` | fill | `--bg-surface` | 1.19 | 1.24 | decorative |
| `--bg-placeholder` | fill | `--bg-surface` | 1.23 | 1.15 | decorative |
| `--bg-action` | fill | `--bg-surface` | 6.23 | 6.82 | 3.0 |
| `--bg-action-strong` | fill | `--bg-surface` | 7.83 | 7.91 | 3.0 |
| `--bg-hover` | fill | `--bg-surface` | 1.08 | 1.11 | decorative |
| `--control-accent` | fill | `--bg-surface` | 6.23 | 6.82 | 3.0 |
| `--bg-chip-accent` | fill | `--bg-surface` | 1.18 | 1.20 | decorative |
| `--text-primary` | ink | `--bg-surface` | 17.44 | 14.98 | 4.5 |
| `--text-body` | ink | `--bg-surface` | 10.16 | 10.44 | 4.5 |
| `--text-muted` | ink | `--bg-surface` | 5.78 | 6.40 | 4.5 |
| `--text-action` | ink | `--bg-surface` | 6.23 | 6.82 | 4.5 |
| `--text-on-action` | ink | `--bg-action` | 6.23 | 7.51 | 4.5 |
| `--text-attention` | ink | `--bg-attention` | 5.07 | 7.17 | 4.5 |
| `--text-failure` | ink | `--bg-failure` | 4.57 | 6.67 | 4.5 |
| `--text-status` | ink | `--bg-status` | 5.77 | 6.69 | 4.5 |
| `--text-trial` | ink | `--bg-trial` | 6.75 | 7.36 | 4.5 |
| `--text-chip-accent` | ink | `--bg-chip-accent` | 5.26 | 5.68 | 4.5 |
| `--line-control` | line | `--bg-surface` | 3.46 | 5.15 | 3.0 |
| `--line-control-hover` | line | `--bg-surface` | 5.78 | 6.40 | 3.0 |
| `--line-selected` | line | `--bg-surface` | 6.23 | 6.82 | 3.0 |
| `--line-failure` | line | `--bg-surface` | 5.46 | 7.40 | 3.0 |
| `--color-focus` | line | `--bg-surface` | 6.23 | 6.82 | 3.0 |
| `--line-container` | line | `--bg-surface` | 1.23 | 1.33 | decorative |
| `--line-divider` | line | `--bg-surface` | 1.13 | 1.16 | decorative |
| `--line-container-hover` | line | `--bg-surface` | 1.47 | 1.47 | decorative |
| `--line-action-soft` | line | `--bg-surface` | 1.18 | 1.20 | decorative, a hint under text that already carries 4.8:1 |

**Two roles in the file are not colours, and neither is in the tables above.** `--wash-pricing`
(2026-08-15) and `--wash-final` (2026-08-16) are IMAGES: the atmospheric picture behind the pricing
band, a watercolour mist rising off pale paper in the light theme and the same composition over dark
water in the dark one; and the horizon behind the landing's closing band, still water under a pale
sky, the same water at dusk. They are roles rather than lines in a component for the reason every
role exists - a role lives in both themes or it does not exist, and a picture that reverses between
a paper theme and an ink theme is exactly that case. Both are read UNDER a `background-color` and
never instead of one, so a band has a ground before the picture loads.

**Two bands carry a picture and seven do not, and the line between them is not taste.** The two
that carry one are the two that ASK: pricing asks for money, the closing band asks for the sign-up.
The seven that argue carry none. That is the whole of the rule, and the next block that wants a
picture answers it.

**The contrast is solved in the composition and not in the asset**, which is what lets the picture
be a picture: the band lays its own ground over it at both ends, so the picture is a HORIZON that
runs from the tops of the price cards to their feet and nothing but opaque paper stands on it. The
stops are pixels and not percentages, because what the fade has to land in is a gap between two
elements and, from the tablet point up, every one of those gaps sits at a constant offset while the
band's own height runs from 1566px on a phone to 828 wide. The picture is loaded past that point
only: below it the cards are a stack rather than a row, a stack has no horizon, and a phone never
fetches the asset. What is measured is the RENDERED pair and not the file: **5.78:1** at the worst,
swept over nine widths in both themes, on a ground of 255,255,255 - the ink's own token contrast on
bare paper. Two earlier pictures were
lightened almost to nothing trying to make the asset carry the contrast alone, and that is the
mistake this arrangement exists to correct.

**The closing band solves the same problem the fourth way, because its text sits in the middle.**
There is no gap to fade a picture out of when the message is at the centre of the band, so the
message stands on a SHEET of `--bg-surface` instead: contrast solved structurally, with no
per-width sweep, and by the material logic the whole system is built on - the thing you are looking
at is the thing on paper. The sheet takes the one elevation, because paper laid on a picture with
nothing under it reads as a hole cut in the picture. Its band fades only at the FOOT, into the
footer's own paper, and not at the top: the picture's first rows measure 241,241,232 against a page
ground of 238,243,244 in the light theme and 5,20,22 against 14,21,23 in the dark, so the sky
already arrives at the colour of the band above it.

The four state tokens are in that table because a state is a token and not a style: nothing
inside a `:hover` or a `:focus-visible` block is a hex or a number anywhere in this system, which
is why the dark theme cost three lines rather than forty edits. `--color-focus` is the one that
would have failed silently: left unpaired it would have drawn the light petrol on the dark
surface at **1.9:1** - present in the file, invisible on screen, keyboard navigation blind in one
theme and perfect in the other.

**What the theme found that a single component never could.** The dark half was walked across the
whole showcase and all 28 screens at once, because the defect it looks for is a *neighbourhood*
one: two surfaces that separated in light and merged in dark, two roles that converged on one
value, a border visible in one theme and gone in the other. Not one component was broken and not
one role was read wrongly; the findings were all in the seams. Zero of them landed in a component
file, which is the result the step exists to produce: a theme that needs component edits is a
theme sitting on a system that only looks like one.

### Named Rules
**The One Voice Rule.** Petrol appears on the primary action, the current selection, the trust
line and the plotted line. Anywhere else it is decoration, and decoration in this palette is a bug.
A screen with two petrol objects competing for the eye has already failed the rule, and the fourth
job was granted on that test rather than around it: the plot is one element on one screen, and no
screen in the product carries a plot and a filled action inside the same zone.

**The No Red Rule.** There is no red in this system and there will not be one. A price rise is
amber, a real failure is clay, and both are desaturated to the point where they read as
information. The persona closes any app that shows her red; that is a recorded quote, not a
preference.

**The Two Tiers Rule.** Ink and muted. A third, lighter grey is how a calm interface quietly
becomes an unreadable one, and it is the first thing to reach for when a layout feels busy. It is
not available.

## Typography

**Display Font:** Inter (with -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)
**Body Font:** Inter, the same family
**Label/Mono Font:** none; numbers use Inter with tabular figures where they align

**Character:** One neutral grotesk doing every job, so the type never becomes a costume. The
personality is in the size jump, not in the letterforms: a huge, tightly tracked number over a
quiet, ordinary row.

**Units: every step of the scale is `rem`, since 2026-08-13**, so the whole hierarchy moves with
the reader's own browser font-size setting and the two width points, which were already `rem`,
finally ask the question they were written to ask. The px below are what each step renders at the
browser default, which is where they always were: the swap moved nothing for a reader who has not
changed that setting, proved across 8 596 element records on all 32 coloured screens at four widths.
The geometry stayed `px` on purpose - a width and a gutter are not text.

### Hierarchy

**REWRITTEN FROM THE CODE, 2026-08-20, and every step now names its token.** This list carried
seven steps and the scale has eleven; four of the seven had the wrong number, and the three
smallest were half a pixel out each because they were written before the scale was tokenized and
nothing ever brought them forward. The names were the worse half: "Title" here meant the wordmark
at 16px while `--type-title` in the code is 20px and means the subscription name, so a reader
following the document to the code arrived at a different step. Prose about a number is a claim,
and a claim with no instrument behind it is how a document drifts for four stages;
`design/kit/screens/design13.cjs` now reads every step below out of this file and checks it
against `tokens.css`, so this list cannot go stale again without saying so.

- **Hero** `--type-hero` (clamp 40px to 56px, 800, line-height 1.02, -0.03em): the landing's own h1,
  and the only fluid step in the scale. It exists because a marketing page opens on a sentence and
  an app screen opens on a number.
- **Display** `--type-display` (46px, 700, line-height 1.02, -0.025em): the monthly total, and
  nothing else. One per screen, ever.
- **Step** `--type-step` (40px, 800, line-height 1, -0.03em): the ordinal of a step in a sequence
  on the landing. Between Display and Figure and one clear step from each, because it is the only
  large number in this product that is **not** money.
- **Figure** `--type-figure` (32px, 700, -0.02em): a subscription's own amount, and a plan price.
- **Section** `--type-section` (32px, 700, -0.015em, and `--type-head` on a phone): the subject of
  a section on the public page, added 2026-08-16. Same value as Figure and a token of its own: one
  of the two is a number about money on an app screen and the other is a heading on a marketing
  page. The app has no such step, because an app screen's subject is Display or Head.
- **Head** `--type-head` (24px, 700, line-height 1.18, -0.015em): the subject of an app screen,
  and the wordmark in the site footer.
- **Title** `--type-title` (20px, line-height 1.2): the subscription name on the detail screen, and
  the heading of an empty or error message. **No weight of its own:** it keeps the browser's bold
  for an `h1`, which is the one place in this system where that is deliberate rather than an
  oversight.
- **Sub** `--type-sub` (16px, 600): the merchant name in a row. It is also the wordmark in the app
  bar, at 800 and -0.02em with the `dd` pair a further -0.09em. The wordmark tracks IN, and it did
  the opposite until 2026-08-12. The old rule read "it tracks OUT, not in: it is the only word on a
  screen that is a name rather than a sentence", and it was right for a product with **no mark in
  it**, where the word carried the identity alone and needed air to be read at 16px. A mark now
  stands beside it, so the word stopped being the thing being recognised and became half of it, and
  a mark is set as one shape. The premise moved; the value followed. See The brand, below.
- **Body** `--type-body` (14px): the primary reading line, and the widest-read step in the system -
  38 of the 76 component files ask for it.
- **Meta** `--type-meta` (12px): the amount's date, the source line, the group head, the tab bar's
  label. Usually muted, and 22 component files read it.
- **Label** `--type-label` (10px, 600, line-height 1.6): chips. Not uppercased and not tracked out
  on a row, because a shouting label on a calm row is the same defect as a red one.

### Named Rules
**The One Number Rule.** Exactly one object on a screen is set in Display, and it is the number
the person came for. If a second number wants that size, the screen is answering two questions and
should be two screens. **Which number that is depends on the screen, stated 2026-08-15:** in the
app it is the monthly total; on the landing, which has no total, it is the plan price. The rule
was written as "46px belongs to the monthly total" and that named the app's occurrence rather than
the job. The count per screen never changed and is still one.

## Layout

Mobile-first, single column, with a generous vertical rhythm: 16px screen padding, 18px between
blocks, 20px before a new section. A row is 56px minimum, comfortably over the 44px touch
target, and the row itself is transparent with no radius of its own: rows stack inside one
bordered container with a 14px radius, so a list reads as one object rather than as a stack of
cards. Nothing inside that container draws a second edge.

The tab bar is bottom chrome on mobile. At a 760px container the whole shell becomes a dashboard:
the tab bar rotates into a 220px left rail on the panel tint, the app bar folds into the top of
that rail, and the content takes the remaining width. At 900px the subscription detail
becomes as many columns as its pane holds, one or two, and the category groups on Home stop being
counted at all: they run in as many 300px columns as fit, capped at three, which is the widest the
product ever goes. There is no third step; the product has exactly two, 47.5rem and 56.25rem.
Below 460px, a container threshold rather than a point, the save-focus row drops its cut control
onto its own line.

Container queries, not media queries, drive the shell, so a screen behaves by the width it is
actually given rather than by the width of the browser.

## Width

Adaptation is read top down and the breakpoint is the LAST answer: **fluid first**
(`repeat(auto-fill, minmax(floor, 1fr))`, `columns: <width>`, `flex-wrap`), then **a container**
(a `max-width`, and a reading measure counted in `ch`), and only a behaviour that cannot be
interpolated earns **a point**. A bar on the glass and a rail in a grid track are two things with
nothing in between; a paragraph that gets wider is one thing.

**Two points for the whole product, both in `rem` and both in `design/system/tokens.css`:**

| Token | Value | What changes there |
|---|---|---|
| `--bp-tablet` | `47.5rem` (760px) | the shell becomes a two-track grid: the tab bar rotates into a 220px rail, the app bar folds into its head, the pane becomes its own scroller and takes the `--container-page` measure |
| `--bp-desktop` | `56.25rem` (900px) | that measure comes off, the pane's blocks can be reordered, Home becomes a dashboard and a detail screen counts its own columns |

`rem` and not `px`, because a point has to react to the reader's font size as well as to the
window: at a 24px root a "desktop" width holds a phone's worth of words in a line, and the narrow
form is the right one there. **A third point is the founder's call**, named out loud with the audit
row that needs it, never a side effect of a refactor. One local **container threshold** exists,
`28.75rem`, and it belongs to one row rather than to the product; it is registered in
`design/kit/docs/responsive.md` so that a check can tell it apart from a number invented for a
device.

**A query cannot read a variable.** `@container (min-width: var(--bp-tablet))` does not error and
never matches, so the token is the REGISTER and the literal in the query is its application. That
turns the register into an instrument: every width literal in a query must be one of the three
registered values, and the check is a grep. Live count: `47.5rem` x 8, `56.25rem` x 5,
`28.75rem` x 2.

**Containers, and the column count that is not one.** `--container-page` (48.75rem) is the pane's
ceiling between the two points, `--container-wide` (80rem) its ceiling above the desktop point,
`--container-column` (38.75rem) a content column, `--container-text` (52ch) the reading measure
every prose block in the system reads. The wide one was added on 2026-08-13: above the desktop
point the measure used to come off entirely, so a screen's head took the whole pane while the
category column set stopped at a cap of its own, and the two right edges disagreed by 624px at a
1920 window. One measure for every block of a wide screen, and three columns stay the maximum by
arithmetic, because a fourth needs 1344px. **It is written as a padding on the pane and not as a
`max-width` on each block**, because a cap ends a screen but cannot centre one: with three
different block widths on one screen, centring each block gives a ragged left edge. One content box
is centred and everything inside it stays flush left. **A column count is never a token**: it is computed
from a floor (`--grid-col-min`, 10rem) unless the count is content, which is the case exactly
twice, on the two doors of the path choice and the three plan options of the landing.

**Where adaptation may live, and where it may not.** A width belongs to a token, to a component, to
a pattern or to the shell, and every one of them asks a `@container`: the container is `body`,
declared once in `base.css`. A point is therefore the **page container's** width and not the
window's, which is a real difference of 15px wherever the scrollbar is classic, and it is why
nothing between `body` and `.app` may take horizontal padding. **In a screen file `@media` is
forbidden**, always;
the whole ground is in `design/kit/docs/architecture.md` and in `design/system/CLAUDE.md`, and the
full census, audit and register are in `design/kit/docs/responsive.md`, published as
`design/kit/responsive.html`.

## Elevation & Depth

**This system is flat by construction.** There is exactly one shadow in it, it is used on one
object, and its job is to lift the whole mobile frame off the canvas rather than to rank anything
inside the frame. Everything else is separated by a hairline, by the difference between paper and
canvas, or by space.

### Shadow Vocabulary
- **Frame** (`box-shadow: 0 1px 3px rgba(10,30,35,0.05), 0 8px 24px -12px rgba(10,30,35,0.12)`):
  the mobile app frame only. Note the tint: the shadow is mixed from the palette's own dark, not
  from neutral black, so it stays inside the cool world.

### Named Rules
**The Flat Paper Rule.** A new surface earns a hairline and a background change, never a shadow.
The moment two elevations exist inside one screen, the eye starts ranking them, and ranking is the
work this product takes away from the person.

## Shapes

Three radii and no more: 14px on containers (the list, cards, the nudge), 10px on controls
(buttons, rows, the logo tile, callouts), 6px on badges. Crisper than the rounded-blob reflex the
taste rejected by name, softer than a hard financial ledger.

Borders are 1px and they do real work: the list container is bordered, the rows
inside it are divided by the softer hairline, and the first and last row inherit the container's
corners so the seam disappears. There are no dashed borders, no double borders, and no border
that exists to decorate a block that would read fine without one.

**A border has two jobs and therefore two values, and the split is the whole rule.** A control is
identified BY its edge, so a field, a select, a secondary button, a preset tile, a door and a
segment take the control edge and are perceivable at 3:1. A card, a panel, a plan tile, a list
container and a divider are not controls: nothing about them has to be found by touch, so they
keep the hairline and the surface stays as quiet as the language was chosen to be. Reaching for
the control edge on a container is how a calm interface turns into a wireframe of boxes.

## Motion

**Four verbs, and one distance holds all of them.** Fade, advance, lift, press. Everything in this
product that moves travels exactly 2px, and nothing anywhere travels two of them. That single
number is what keeps a product with movement in it from becoming a product with decoration in it,
and it is the reason movement is allowed here at all: calm over clever applies hardest at the one
place a pointer touches the product.

The rule that chooses the verbs is that **the movement always has a cause**: something moves only
where the moving says what is about to happen. A cue advances toward what it means. An identity
mark comes forward when you are about to open the thing it identifies. An object you push goes
down while you push it. Nothing else moves, and the exclusions are as much of the language as the
verbs.

**On a button the lift and the press are one gesture in two halves.** The button rises to meet the
pointer and the press puts it back on the surface, which is why a lifted button presses to level
rather than to a nudge below the line. Every neighbouring state is exactly one nudge apart, so the
distance rule holds: rest to hover, hover to press, rest to press. The lift half sits behind
`@media (hover: hover)`, a pointer query and not a width query, because the gesture needs a pointer
that can rest somewhere without committing; on a touch screen and at the keyboard a press simply
pushes down.

| Verb | What moves | When |
|---|---|---|
| **Fade** | colour: fill, edge, ink, underline | every state, 150ms |
| **Advance** | a direction cue, one nudge toward where it points | its target is hovered |
| **Lift** | an identity mark: up one nudge, out to 1.06. Or the button itself, up one nudge and no scale | the target it stands in is hovered, or the button itself is |
| **Press** | the object itself, down one nudge, at 90ms. On a lifted button, back to the surface instead | held |
| **The crop**, the brand's own and not a verb | the window over the letter, out to the whole `d` and back into crop A, once | the lockup is hovered, word included |

### The fade
One rule, in `base.css`, on `:where(a, button, input, select, textarea, summary, label)`:
`background-color`, `border-color`, `color` and `text-decoration-color` over **150ms** on
`--ease-state`. Three components declare the same thing themselves because their host is not a
native interactive element (`plan-option`, `preset-tile`, `alert-item`), reading the same two
tokens so none of them can drift.

**150ms is chosen.** Under about 100ms a change reads as a cut and the transition buys nothing;
over about 200ms a hover starts trailing the pointer.

**The focus ring is excluded on purpose**, and it is an accessibility decision rather than a taste
one: a keyboard user moves faster than 150ms per stop, so a faded ring is always one control behind
the caret. Twenty of the sixty-eight state rules the stage 11 census counted draw that ring, and every one of
them lands instantly. The pair of figures is named to that census and is not re-derived here: it was 19 in this file until 2026-08-16, which was
the recount's own correction arriving everywhere except here.

### The curves
Four shapes, five jobs, all in `tokens.css`. They were measured on the public page's hero and moved
into the system at stage 11.

| Job | Shape | Where |
|---|---|---|
| `--ease-arrive` | expo-out `cubic-bezier(0.16, 1, 0.3, 1)` | everything that comes ON |
| `--ease-leave` | its mirror `cubic-bezier(0.6, 0, 0.85, 0.2)` | everything that goes OFF |
| `--ease-settle` | a spring, one overshoot of 1.5% | one place: a card seating itself |
| `--ease-travel` | `cubic-bezier(0.45, 0, 0.22, 1)` | one journey long enough that expo-out creeps |
| `--ease-state` | expo-out | a control answering a pointer or a key |

Durations: `--dur-state` 150ms for a hover or a state, `--dur-press` 90ms for a press, because a
press answers a finger that is already down, `--dur-pulse` 1.4s for a loading placeholder, and
`--dur-signature` 900ms for the brand's one move. Quick to take, calm to let go.

### Named Rules
**One distance.** `--nudge` is 2px and it is every move in the product. The one exception is the
checkbox, where a 20px box cannot travel 2px without looking dislodged, so its press is a scale to
0.94 - the mirror of the mark's 1.06 lift.

**Nothing that reflows.** No `height`, no `margin`, no `padding` is on any transition list, so no
movement in this product ever pushes a line of text.

**What does not move, and why.** A disabled control (it would answer a press the product will not
honour). A loading form (a placeholder has nothing to press). The current tab (it would offer a
journey that does not exist). A figure - the amount, the monthly total - because **a number that
moves is a number you re-read**, and this product exists to stop people re-reading their money. A
card on hover, because a lift needs a shadow and the Flat Paper Rule spends the only one elsewhere.

**The brand moves once, and only where it is presenting itself.** The mark's window opens to the
whole letter and closes into crop A while the wordmark's last letter takes petrol, over 900ms, on
the public page's bar and once per load. It is an arrival rather than an answer, which is why it is
fenced by a modifier: inside the app the mark never moves. A mark that moves every time you open
the product is not a signature.

**And the same gesture, played, is the brand's answer to a pointer.** Hovering the lockup - the word
as well as the mark - opens the window toward the whole letter and settles it back into crop A,
once. What moves is the window and never the mark: a mark that rose and grew would be a lift, and
a lift says the object is pressable, which the brand is not on any screen in this product.
**It holds no pose, and that is the rule rather than the taste.** The mark's field is the same
colour as the surface behind it, so what a person sees is the ink alone; any part-open crop shrinks
the letter off the frame and the rounded square stops being one. There is no good resting crop
other than crop A, so both ends of this gesture are crop A and everything between them is motion.
It costs no second number: same distance, same length, same landing curve as the signature. Unlike
the signature it is not fenced - it is an answer, and an answer belongs everywhere the object
stands - and under `prefers-reduced-motion` it is nothing at all, because a gesture with both feet
in one place has nothing to say when it may not move.

**An exit is always shorter than its entrance.** A thing appearing should be there before you have
finished noticing it; a thing leaving should not snatch itself away.

**No scale of durations.** This product moves across two values, `--dur-state` and `--dur-pulse`,
and a scale needs a range. The public page's loop lengths are deliberately mutually prime so
nothing on it ever repeats in step, and a loop length is not a duration in the sense a scale means
it.

**Motion takes no dark pair.** No theme moves a curve. Its own axis is `prefers-reduced-motion`,
and that is a global kill in `base.css` rather than a per-token override.

## Components

### Buttons
- **Shape:** control radius (10px), 10px by 16px padding, 13.5px at weight 600.
- **Primary:** petrol fill, white label, no border of its own. One per zone, and its presence is
  what makes the zone's main action findable.
- **Hover / Focus:** primary darkens to petrol deep; secondary darkens its edge to control-edge
  hover (#5a686c) and its fill to panel. No lift, no scale, no glow. The hover value has to be
  DARKER than the resting edge, which is why it is not the old #cdd7d9: that would have made the
  boundary weaker under the pointer.
- **Secondary:** paper fill, control edge, ink label. It is a real alternative, not a ghost:
  the two doors of this product are equal by decision, so the second door is legible.

### Cards / Containers
- **Corner Style:** 14px on the container, 10px on the first and last row inside it.
- **Background:** paper on canvas.
- **Shadow Strategy:** none inside the screen; see Elevation.
- **Border:** one hairline around the container, softer hairlines between rows.
- **Internal Padding:** 11px by 12px per row, 12px by 14px in a callout.

### List Row (signature)
The object the whole product is made of. A 40px logo tile on the panel tint, then the merchant
name in body, the amount and the next date in meta beneath it, and a status badge pushed to the
end. The badge appears only when the state is not the plain default: fourteen "Active" tags in a
column is noise on the one screen whose job is calm. The whole row is one link with one accessible
name, so a screen reader reads the subscription and not five fragments.

### Badges
- **Status:** grey on grey (#4f5e62 on #e9eeef), 6px radius, not uppercased.
- **Trial:** the same shape in the cool trial pair (#185862 on #dfeef0).
- **Pro:** petrol on petrol tint, 5px radius, the one badge allowed to carry the accent, because
  it names a plan rather than a state.

### Banners
A price change is an amber wash with ink text and an amber action line. A sync failure is the same
object in clay. Both are 12px radius, both are flat, and neither carries an icon: the sentence is
the alert.

### Navigation
The tab bar is five destinations with an icon over a 12px label, `--type-meta` (four until D-Tab,
2026-08-18). The current tab is petrol and weight **600**, and on the desktop rail it also takes a
3px petrol left border and a paper fill. A quiet dot may sit on Alerts; there is never a count.
**The label read 11px here and the weight read 700 until 2026-08-20**, against `tab-bar.css:109`
and `:131`; the other two claims in this paragraph were checked at the same time and both hold.

### Trust Line (signature)
A 12px muted line with a 15px petrol shield masked in front of it, sitting directly under the
figures it vouches for. It is not fine print and it is not a footer: it is placed where the number
is, because a trust claim that has to be scrolled to is not a trust claim.

### The landing, and the only motion in this product (signature)

The public page carries two moving blocks and the app carries none. They are one argument in
two halves, and the difference between them is the argument.

**The hero's opening.** Under the example's total, a field of fourteen app squares on three
bands: the top one drifting right, the middle left, the bottom right, between 18 and 22
pixels a second. It says the thing a screenshot cannot - that a subscription stack is not a
list somebody made, it arrives, from more directions than anybody is watching. The number
above it does not move.

**The cut list.** At the foot of "Calm control of your recurring money", the same fourteen
as the product's own rows, with the total stuck to the top of the block. Scrolling through
the list cancels three of them, one at a time, and the total steps down at each: $192.90,
$174.91, $161.92, $144.92. Netflix, The New York Times and Peloton App, which are the three
the product itself cancels or flags, at the prices the canonical dataset gives them, so the
arithmetic can be checked against the rows on the screen.

**One number moves on this page and it moves for a visible reason.** A number that changes
because something on the screen was cancelled is a demonstration; a number that changes on
its own is a claim, and this product does not make claims at people who already do not trust
finance apps. A cancelled row goes quiet rather than red: cancelling is a small win, not an
alarm. Ground: `docs/decisions.md`, D-Hero. Component: `design/kit/landing-story.html`.

### Patterns (a level above the components)

Three compositions recur often enough to have a name, a file and a page of their own. A pattern
is a settled arrangement of components with **no style of its own**: it declares who owns a gap,
never what a thing looks like. The threshold is **three named screens**, counted on the grey
wireframes where the whole product is. Two occurrences prove a composition is possible; three
prove it has settled, and a system where every second screen produces a pattern is a set of
synonyms with a filing cabinet.

**The interruption.** Something stopped, here is what happened, here is the way on. A status text
block, then the way out, and whatever the screen needs in between. **12 screens, 16 pages.** Its
one declaration moves the 24px gap from the announcement's own margin onto the composition, so
the rhythm of every interruption in the product changes in one line. It has four hosts, because
the class goes on whatever holds the pair: the screen, a detail column, a dialog sheet, or a list
column. A **wait is not an interruption** and carries no way out on purpose, because a person has
nothing to do about it.

**The action foot.** A row of actions closed by the line that says what happens if you take one.
**8 screens, 17 pages.** One value moved here, the 16px between the row and its line, and it is
16 at every width: a foot that grew with the viewport read as two unrelated blocks on a desktop.

**The list column.** A page that is a column of grouped rows, opened by an intro that says what
the column is. **4 screens, 9 pages.** It is the one pattern that took real CSS with it, a 620px
reading measure and a `min-width: 0`, both of which had been sitting in the app shell because
there was no level above it to put them in.

**Four more compositions stand on two screens and are named rather than promoted**, on
`design/kit/patterns.html`, each with what it is waiting for. A candidate that never reaches a
third screen is a candidate, not a debt.

## The brand

Locked 2026-08-12, out of `design/concept/logo-crop.html`, and it is the last thing this document
gained that was not read off a screen: it was read off a screen the day after it was decided.

**The mark is not a picture of a d.** One letterform is drawn on a 100 unit square, deliberately
larger than any frame that will hold it, and a window is cut out of it. The letter never changes
size relative to itself; the window does. There is therefore no such thing as a wrong crop, only
crops that are on the rule and crops that are not.

**The geometry, once.** A bowl of radius 23 centred at (40,60) with a 15 unit wall, and a stem 15
wide running from y6 to y90 with a 7.5 cap. Three windows are canonical: **A** the bowl (x26 y34,
46 square), **B** the joint (x48 y40, 34 square), **C** the stem (x58 y20, 26 square). The tighter
the crop, the more abstract the mark. A is still a letter, B is a shape with a memory of one, C is
a brand colour with an edge in it.

**Only A is built,** in `design/system/components/brand-mark.css`, at 22px in the app bar and as
the two exported icons. B and C have no host in the product: the share card stands on 2 grey pages
and 0 coloured ones, and the launch screen does not exist. A variant with no host is an invention.

**The five rules.**
1. The letter is never redrawn. A new surface gets a new window, never a new drawing. Enforced by
   the file rather than by discipline: the mask image is written as `viewBox='26 34 46 46'`, so a
   new crop is a new viewBox on the same four numbers.
2. It must leave the frame on at least two sides. The moment the whole letter fits inside its
   frame it stops being a crop and becomes a logo in a box.
3. The corner is 23.4 per cent of the frame's short side. A ratio and not a token: any length
   would hold at one size and break at the next.
4. Two colours, and one of them is the ground. Letter in petrol, field in paper, never a third
   colour and never an outline. No inverse is carried, see below.
5. Below 16px it is crop A or nothing. At favicon size the counter is the only thing holding the
   letter together, and only A has it.

**The wordmark** is Inter 800 at 16px with -0.02em, and the `dd` pair a further -0.09em until the
bowls almost meet. Since 2026-08-16 it has **two sizes and not one**: 16px in a bar, and 24px under
`.large` at the foot of the public page, which is the one place the word is the subject of its
block rather than a label on a bar. Only the size changes. The tracking is deliberately not
re-derived at the larger step: the concept gives -0.02em for a bar and -0.035em for a hero, 24px is
neither, and a third value between them would have no source. **The last letter is petrol, everywhere, with no condition:** it reads
`--text-action`, so the dark theme gives it the lightened petrol for nothing, and it measures
6.2:1 light and 6.8:1 dark against the 4.5:1 ink threshold. The other four letters declare no
colour at all and inherit the ink of whatever holds them; on a photograph or a partner page the
whole word is ink or white and never petrol.

That rule replaced a conditional one on 2026-08-12, on the founder's call after looking at the
product. The concept had made the colour depend on three things: petrol when the word stands
alone, above 20px, and all ink beside the mark, because the mark already carries the petrol and
two petrol things beside each other is one too many. What is actually on a screen is a 22px mark
and one 16px glyph 46px to its right, and the pair reads as one lockup rather than as two claims.
The product satisfied none of the three conditions, so the coloured letter would have stayed
unbuilt and untested until stage 12.

**Petrol's fourth place, and the boundary that comes with it.** The Named Rule below spends petrol
on the primary action, the current selection and the trust line "and nowhere else". The brand is
the fourth, and it is an exception rather than a fourth job: the mark is an identity, never an
accent, and it therefore never appears inside a screen's content. It lives in the app bar, in the
tab, and on a home screen.

**The mark is not the merchant tile.** `.logo` is DATA, the person's own Netflix rendered as
Netflix, 111 places across 21 pages, and it may be any colour in the world because the colour is
the merchant's. `.brand` is chrome, it is ours, and there is exactly one of it.

**No inverse.** The concept page's rule 4 says "inverted only on the phone icon" and the plate two
sections above it draws the inverse, labels it not used, and gives the reason: swap the roles and
the counter becomes a dot and the frame becomes the drawing. The home screen plate on that page
then draws the icon not inverted. Two of the three agree and the drawings are the living truth, so
the system carries no inverse.

**Motion belongs to stage 11.** The three crops are three stops on one continuous move, the window
travelling across a fixed letter and tightening as it goes. Eight seconds, one loop, a hold of
about a second and a half on each stop. Allowed on the launch screen, the first run, the empty
state and the share card render; **never** in the app bar, never on a loading screen, never on a
repeat visit. A mark that moves while somebody is trying to read a number is the opposite of calm.

## Contributing to the system

Everything above describes what ships, and all of it arrived the same way. That way is the rule:
**nothing new appears on a screen first.** A value goes into `design/system/tokens.css` at its
level, a component into `design/system/components/` with its page in `design/kit/`, a composition
that has turned up on three screens into `design/system/patterns/`. Only then does a screen use
it. The order is the reason a correction is made once and reaches everywhere, and the reason a
theme could be added without opening a single component file.

**A state is a token, not a style.** Nothing inside a `:hover` or a `:focus-visible` block is a hex
or a number anywhere in this system, and a state token carries a value in **both** themes at the
moment it is declared. A state written as a style inside a class is the defect that looks correct
in one theme and vanishes in the other, and the file gives you no way to notice: the way to notice
is to switch the theme, which is to say never.

**A screen carries no style of its own.** No page-level style block, no style attribute, no class
the system does not define. A fix applied on one screen is a desync: it looks finished, and it is a
second edition of a component that nobody declared. A contextual override such as
`.host .btn { font-size: 15px }` is an undeclared variant, so declare the modifier in the
component's own file and put the class in the markup.

**When the system does not have it,** that is an order for the system and not an exception on the
screen. What was deliberately not built is written into `design/kit/docs/backlog.md` rather than
worked around, and the rules with the checks that catch a violation are in
`design/kit/docs/architecture.md`, section "Contributing to the system".

## Do's and Don'ts

### Do:
- **Do** spend petrol on the primary action, the current selection, the trust line and the plotted
  line, and inside a screen's content nowhere else. The plotted line is the fourth JOB, granted by
  the founder on 2026-08-18 (D-Plot) and surviving the rule it amends: one element on one screen,
  and no screen carries a plot and a filled action inside the same zone. The brand mark is a
  fourth PLACE and not a job: it is an identity, it lives in the chrome, and it never appears among
  the content. See The brand.
- **Do** keep the monthly total at Display size and alone at that size.
- **Do** use the grey status badge for state, and show it only when the state is not the default.
- **Do** separate surfaces with a hairline and a background change.
- **Do** state a failure in clay and a price change in amber, both desaturated, both flat.
- **Do** render the trust line next to the data it vouches for.
- **Do** stop the skeleton pulse under `prefers-reduced-motion`; it is already wired.

### Don't:
- **Don't** introduce red, in any tint, for any state. There is no case.
- **Don't** add a second shadow, or put the frame shadow on anything inside the frame.
- **Don't** add a third grey between muted and hairline; the two-tier scale is what holds AA.
- **Don't** uppercase or letter-space a badge to make it look designed.
- **Don't** put an icon on a banner. The sentence carries it.
- **Don't** use clay on an empty state. Nothing went wrong in an empty state.
- **Don't** introduce a second type family, a display face, or a mono face for numbers.
