# Tendd Design System (product)

**Status: SEED. Location locked, content pending.**

This is the home of Tendd's product design system documentation. It lives here, at `ui-visual/docs/design.md`, and never as a root `DESIGN.md`. A root `DESIGN.md` would describe the research and IA artifact pages, not the product; keeping the product system in `ui-visual/` prevents that leak. (Founder decision, 2026-07-15.)

## Why this file exists now but is not filled yet

The Concept phase (Etap 06) finds and proves the visual language on two screens: it does not document a full system yet. The design principle is language now, documentation later. Writing a complete design system before the direction is even chosen would be documenting a language that does not exist.

So this file is seeded with its location and intent, and completed at the next phase.

## What fills it, and when

- **Now (Etap 06, Concept):** the language is decided and recorded in `concept/docs/concept.md` (taste, attributes, the chosen direction) and shown live in `concept/concept.html` (palette, type, form, logos, icons, components). Two screens are colored in `ui-visual/` (home, subscription-detail). Those are the source of truth until this file is generated.
- **Next (Etap 07, UI + Visual):** run `/impeccable document` to generate the full product design system into THIS file (`ui-visual/docs/design.md`). Do not let it write a root `DESIGN.md`; point its output here or move it. That phase also colors the rest of the product and builds the full UI + Visual nav.

## Sources to generate from (Etap 07)

- `concept/docs/references.md` - the benchmark techniques the language is built from.
- `concept/docs/concept.md` - designer taste, the attribute pairs, the locked direction.
- `concept/concept.html` - the language stand (tokens, type scale, form, components).
- `ui-visual/home.html`, `ui-visual/subscription-detail.html` - the language applied to real screens.

Until Etap 07 runs, treat `concept/concept.html` as the canonical token reference.
