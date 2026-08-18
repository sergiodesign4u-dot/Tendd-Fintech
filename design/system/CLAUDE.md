# design/system/ - eight rules. Detail in `../kit/docs/architecture.md`.

1. **Two levels of tokens, not three:** primitive (raw values), semantic (roles via `var()`). A component token only where a state lands on no role. **A second level is earned exactly where two roles would otherwise spell the same value** (rule 4 read from the other end): that is why the motion curves carry a shape level under their four jobs and the two durations, which share nothing, do not.
2. **Colour is read ONLY through a semantic role.** A primitive colour read directly is the hole the first theme finds.
3. **Geometry comes from primitive directly** (a radius has nothing to re-define), and since stage 10 that includes width: the points, the containers and the grid floor are primitives too. A width with one consumer still stays a literal beside its comment. **Units split by who owns the number:** the type scale and the two width points are `rem`, because a reader can resize text and both must move together; spacing, radii and rail widths stay `px`, because geometry is not text. A `px` font-size anywhere is a defect.
4. **Two roles means two tokens even at one value today**, but one usage is not yet a role. Ask whether they can ever part company.
5. **A new component is five things:** css here + a page in `design/kit/` + a row in `design/kit/_nav.js` in its LEVEL group + a line in `docs/inventory.md` WITH its level + an `@import` in `index.css` in its level group, never at the end.
6. **A COLOUR role or state token lives in `:root` AND `[data-theme="dark"]` or it does not exist.** Values differ by direction; a state is a token override, never a style of its own. A role on an axis with no themes takes no pair, and motion is the only one: no theme moves a curve, and motion's own axis is `prefers-reduced-motion`, which is a global kill in `base.css` rather than a per-token override. **A state change is colour over `--dur-state`, declared once in `base.css` on the interactive elements** and in a component only where its host is not one (U12). The focus ring is off that property list on purpose.
7. **A composition is a pattern from THREE screens, not two.** It lives in `patterns/`, is assembled from the components with no style of its own, and is `@import`ed after all of them. Needing a new style is an order for a component: build that first.
8. **Width lives in a token, a component, a pattern or the shell, and every one of them asks a `@container`: the container is `body`, declared once in `base.css`. In a screen file `@media` is forbidden.** A point is therefore the PAGE CONTAINER's width and not the window's, so nothing between `body` and `.app` may take horizontal padding: 220px of it once made every screen render its mobile form inside a desktop window. Fluid, then a container, then a point; two points, both in `tokens.css`, and a third is the founder's.

---

## What this folder does NOT carry, measured on 2026-08-18

The lift claim was tested rather than repeated: `design/system/` was copied into an
empty directory and one screen the system had never seen was assembled there out of
its classes alone - shell, app bar, brand lockup, big total, the interactive trend
chart, the segmented range, a prose card, a divided list, the trust block and the
five-destination tab bar. Served from that directory: **0 requests failed, 0 console
errors, both themes correct, the chart's cursor built by `behaviour.js`, no element
left unstyled, no sideways scroll at 390 or at 1440.** 76 files, 1.4MB, and every
`url()` inside it resolves inside it - including `assets/`, which is why that folder
is part of the lift and not decoration.

**One dependency is real and this folder does not carry it: the typeface.**
`base.css` asks for `'Inter'` by name and nothing here provides it. On a machine
with Inter installed the lift test passes without noticing, which is exactly why it
is written down here. A receiver needs one of:

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

which is what all 57 pages in `design/` do, or a self-hosted Inter with the same
five weights and an `@font-face` block of their own. The fallback chain in
`base.css` is deliberate and safe - `-apple-system`, `system-ui`, `Segoe UI`,
`sans-serif` - so a page with no Inter is readable and not broken; it is simply not
Tendd. **400, 500, 600, 700 and 800 are all used** and a subset that drops 800
loses the wordmark.

**What else a host page provides, and none of it belongs in here:** the theme
attribute (`data-theme="dark"` on `<html>`, however the product decides to set it),
and nothing else. `_screen.css` and `_nav.js` in `design/` are the review chrome of
this repository and are not part of the system.
