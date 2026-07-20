# DESIGN-artifacts.md - Tendd draft design doc (Concept, Etap 06)

**Status: DRAFT (design source, not the product system).** This file is the draft
design doc entered at Concept (Etap 06) from the approved brand: identity,
palette, typography, icon language, and UI tone, each traced to an attribute or
to the founder's recorded taste, plus a Sources section. It is the raw design
material that the next phase reads.

**This is NOT the product `DESIGN.md`.** By founder decision (2026-07-15,
recorded in `ui-visual/docs/design.md`) the product design system does not live at
a root `DESIGN.md`. It lives at `ui-visual/docs/design.md` and is generated at
Etap 07 (UI + Visual) with `/impeccable document` from the real code of the
colored screens plus this file. The chain for Tendd is therefore:

`DESIGN-artifacts.md` (this draft, Etap 06) -> `ui-visual/docs/design.md`
(product system, Etap 07). There is intentionally no root `DESIGN.md`.

Every decision below carries the attribute (A1 to A5) or taste line it traces to.
A color, form, or font with no such pair is an invention, not a decision. The
attribute pairs and the taste live in `concept/docs/concept.md`; the borrowed
techniques (T1 to T5) live in `concept/docs/references.md`.

---

## Brand: Petrol & Paper

Founder-locked (D-Concept, 2026-07-15). One of three directions built live in
`concept/directions.html`; the two others (Ink & Marigold, Plum & Fog) stay on
record in `concept/docs/concept.md` and are not deleted.

**Recorded as a brand toolkit plate:** `concept/assets/brand-plate-petrol-paper.png`
(rendered at 4k with Google Nano Banana 2, stored downscaled to 2400px to keep the
repo light). The plate is a visual record of the
already-locked language, not a divergence exercise: the brand was chosen from the
live HTML directions, and the plate documents that choice as a single dense
brand-guidelines board (identity, palette, type specimen, icon set, applications
in product context, UI components). The authoritative token values are in this
file and in `concept/concept.html`, not in the rendered plate.

**Why this brand.** For a user whose activation gate is trust (J1,
`research/docs/benchmark-trust.md` C2), the direction that leads with A2 (trust
shown, not claimed) is the safest and most on-thesis. Deep petrol is a calm,
institutional, non-red hue that reads trustworthy without alarm (A1). Inter is the
clean grotesk that disappears into the task (product register). The monthly total
stays ink and biggest (A3); recognition and category color (A4, A5) ride on top of
this base.

---

## Identity

- **Wordmark:** "Tendd" set in Inter, the one product family. No separate display
  face. Traces to A5 (warm restraint: one neutral grotesk, character without
  costume) and the taste (Monzo character minus the corporate stiffness).
- **Accent discipline:** petrol is the identity color but is spent only on the
  primary action, the current selection, and the trust line, never as decoration.
  Traces to A2 (trust shown) and A5 (accent used rarely and deliberately, the
  Monarch "accent only on the one key action" restraint).
- **Not this:** no rounded-blob mark, no friendly mascot, no gradient logo. The
  identity reads as trustworthy money software, not a toy (taste anti-reference).

---

## Palette

Locked tokens. The neutral is not pure clinical gray and not beige: it leans a
whisper cool, toward the accent. There is no lighter third text tier, so every
text-on-surface pair clears WCAG AA.

| Role | Value | Traces to |
|---|---|---|
| bg / Paper | `#ffffff` | A1 calm, true white, not beige (taste anti-reference: beige) |
| surface | `#eef3f4` | A1 flat calm surface (T1), a whisper cool, cards and panels |
| ink | `#141b1d` | A3 the biggest thing is ink, near-black |
| muted | `#5a686c` | secondary and meta text, the single secondary tier (WCAG AA) |
| accent (petrol) | `#1c6a76` | A2 trust: primary action, current selection, the trust line |
| hairline | `#eef2f3` | row and section separators |

**Semantic tones (calm, never alarm).** Traces to A1 and to `voice/docs/voice.md`
(an error does not joke, a status does not alarm):

| Role | Value | Scope |
|---|---|---|
| success | `#2e6b52` | a muted green, confirmations only |
| price change | `#8a5c0c` text on `#f6efe0` wash | a warm amber, never red |
| genuine error | `#9a5842` text on `#f3e9e5` wash | a desaturated clay, scoped to real failures only (sync error, could-not-load), never the empty state |

Status "Active" is a quiet gray badge (T2), never a colored alert, never red.

---

## Typography

- **Family:** Inter, one family for everything. Traces to A5 (one neutral
  grotesk, warm restraint) and the taste (Apple clarity, warmed).
- **Scale (tight):** monthly total 44px / 800 (A3, the one big number owns the
  screen); headings 20 to 28; body 15. Meta and the next-payment date line use
  the one muted tier, no lighter third tier.
- **Delivery:** Google Fonts CDN (the product ships on GitHub Pages, where the CDN
  works) or self-host.

---

## Form

Traces to A1 (calm, unfussy) and A2 (precise, trustworthy, not a toy):

- Card radius 14px, control radius 10px, badge 6px. Crisper than a rounded-blob
  reflex, softer than a hard ledger.
- One soft, subtle shadow on cards. No multi-color surfaces, no gradients.
- Generous, one-thing-at-a-time spacing (T1, Design Principle 2).

---

## Icon language

- **Set:** Solar, inline SVG in the HTML (not a CDN script). Quiet linear or
  bold-duotone weight, in the brand palette (ink and petrol on white).
- **Traces to:** A1 (calm, not busy) and A4 (recognition: icons support the
  glance, they do not decorate). Coverage: tab bar, metadata, badge, buttons,
  states. No icon outside the Solar set.

---

## UI tone (screen tone, not a specific layout)

The layout composition is chosen separately in `concept/docs/concept.md` (Layout).
This is the tone every colored screen carries:

- Calm-light throughout. White canvas, one reserved accent, generous whitespace.
  (A1, T1. Rejects the dark finance canvas, references.md.)
- The most important number is the biggest thing on screen (A3).
- Content is real brand logos plus real names plus amount plus next date (A4, T4),
  with a soft low-saturation category chip (T5). Never stock photos, never cryptic
  codes.
- The read-only trust line is a first-class, legible element next to the data, not
  fine print (A2, T3): "Read-only. Tendd cannot move your money."
- Plain-language, active-voice copy (T3, `voice/docs/voice.md`). An error does not
  joke; a status does not alarm; a success marks the win and stops.

---

## Recorded, not chosen (brand alternatives)

Kept for the record in `concept/docs/concept.md`; can be returned to.

- **Ink & Marigold** (recorded). Marigold accent `#d99a2b`, pill buttons, Hanken
  Grotesk. Leads A5 warm restraint.
- **Plum & Fog** (recorded). Plum accent `#7c3d67` (non-red), Instrument Serif as
  the reveal beat. Leads A4 recognition.

---

## Sources

- `concept/docs/concept.md` - the founder's recorded taste, the five attribute
  pairs (A1 to A5, each with a source line), the chosen brand, and the chosen
  layout.
- `concept/docs/references.md` - the borrowed techniques (T1 to T5), the benchmark
  base (Monzo minus Hot Coral), and the rejects.
- `concept/concept.html` - the live language stand: palette, type scale, form,
  real brand logos, Solar icons, three components, and the WCAG AA contrast table.
- `concept/assets/brand-plate-petrol-paper.png` - the brand toolkit plate for the
  locked direction.
- `ui-visual/home.html`, `ui-visual/subscription-detail.html` - the language
  applied to the two anchor screens (with their state pages).
