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
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.35
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.02em"
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
    border: "1px solid {colors.hairline}"
  button-secondary-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
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
- One accent, spent three ways, and never on decoration.
- Status is a quiet grey badge. Alarm is not a colour we own.
- The monthly total is the largest object on screen by a wide margin (46px against a 14.5px row).
- Real logos and real merchant names; never a cryptic code where a name is known, never stock art.
- Flat by construction: one soft shadow, hairlines, and paper.

## Colors

A cool near-monochrome with a single petrol voice, and three semantic tones that are all
deliberately desaturated so that no state in the product can shout.

### Primary
- **Petrol** (#1c6a76): the identity colour and the only saturated thing on a screen. It is spent
  on exactly three jobs: the primary action, the current selection (the active tab, the selected
  row, the chosen plan), and the trust line's shield. **Petrol Deep** (#175a64) is its pressed and
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
- **Skeleton** (#e2e9ea): loading placeholders, pulsing at 1.4s and stopped entirely under
  `prefers-reduced-motion`.

### Named Rules
**The One Voice Rule.** Petrol appears on the primary action, the current selection and the trust
line. Anywhere else it is decoration, and decoration in this palette is a bug. A screen with two
petrol objects competing for the eye has already failed the rule.

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

### Hierarchy
- **Display** (700, 46px, line-height 1.02, -0.025em): the monthly total, and nothing else. One per
  screen, ever.
- **Headline** (700, 18px): the subscription name on the detail screen, and the heading of an
  empty or error message.
- **Title** (700, 16px, +0.02em): the wordmark in the app bar. It tracks OUT, not in: it is the
  only word on a screen that is a name rather than a sentence.
- **Body** (600, 14.5px): the merchant name in a row, the primary reading line.
- **Meta** (400, 12.5px): the amount, the next date, the source line. Always muted.
- **Label** (600, 10.5px): badges. Not uppercased and not tracked out, because a shouting label on
  a calm row is the same defect as a red one.

### Named Rules
**The One Number Rule.** Exactly one object on a screen is set in Display, and it is the number
the person came for. If a second number wants that size, the screen is answering two questions and
should be two screens.

## Layout

Mobile-first, single column, with a generous vertical rhythm: 16px screen padding, 18px between
blocks, 20px before a new section. A row is 56px minimum, comfortably over the 44px touch
target, and the row itself is transparent with no radius of its own: rows stack inside one
bordered container with a 14px radius, so a list reads as one object rather than as a stack of
cards. Nothing inside that container draws a second edge.

The tab bar is bottom chrome on mobile. At a 760px container the whole shell becomes a dashboard:
the tab bar rotates into a 240px left rail on the panel tint, the app bar folds into the top of
that rail, and the content takes the remaining width. At 1040px the densest two screens gain a
third column, a detail pane on Home and a master list on Subscription Detail. Below 460px the
stage gives its gutter back and the screen goes edge to edge.

Container queries, not media queries, drive the shell, so a screen behaves by the width it is
actually given rather than by the width of the browser.

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

Borders are hairlines at 1px and they do real work: the list container is bordered, the rows
inside it are divided by the softer hairline, and the first and last row inherit the container's
corners so the seam disappears. There are no dashed borders, no double borders, and no border
that exists to decorate a block that would read fine without one.

## Components

### Buttons
- **Shape:** control radius (10px), 10px by 16px padding, 13.5px at weight 600.
- **Primary:** petrol fill, white label, no border of its own. One per zone, and its presence is
  what makes the zone's main action findable.
- **Hover / Focus:** primary darkens to petrol deep; secondary shifts its border to #cdd7d9 and its
  fill to panel. No lift, no scale, no glow.
- **Secondary:** paper fill, hairline border, ink label. It is a real alternative, not a ghost:
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
The tab bar is four destinations with an icon over an 11px label. The current tab is petrol and
weight 700, and on the desktop rail it also takes a 3px petrol left border and a paper fill. A
quiet dot may sit on Alerts; there is never a count.

### Trust Line (signature)
A 12px muted line with a 15px petrol shield masked in front of it, sitting directly under the
figures it vouches for. It is not fine print and it is not a footer: it is placed where the number
is, because a trust claim that has to be scrolled to is not a trust claim.

## Do's and Don'ts

### Do:
- **Do** spend petrol on the primary action, the current selection and the trust line, and nowhere
  else.
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
