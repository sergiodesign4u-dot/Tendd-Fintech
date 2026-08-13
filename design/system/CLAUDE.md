# design/system/ - eight rules. Detail in `../kit/docs/architecture.md`.

1. **Two levels of tokens, not three:** primitive (raw values), semantic (roles via `var()`). A component token only where a state lands on no role.
2. **Colour is read ONLY through a semantic role.** A primitive colour read directly is the hole the first theme finds.
3. **Geometry comes from primitive directly** (a radius has nothing to re-define), and since stage 10 that includes width: the points, the containers and the grid floor are primitives too. A width with one consumer still stays a literal beside its comment.
4. **Two roles means two tokens even at one value today**, but one usage is not yet a role. Ask whether they can ever part company.
5. **A new component is five things:** css here + a page in `design/kit/` + a row in `design/kit/_nav.js` in its LEVEL group + a line in `docs/inventory.md` WITH its level + an `@import` in `index.css` in its level group, never at the end.
6. **A role or state token lives in `:root` AND `[data-theme="dark"]` or it does not exist.** Values differ by direction; a state is a token override, never a style of its own.
7. **A composition is a pattern from THREE screens, not two.** It lives in `patterns/`, is assembled from the components with no style of its own, and is `@import`ed after all of them. Needing a new style is an order for a component: build that first.
8. **Width lives in a token, a component (`@container`, its place), a pattern or the shell (`@media`, the viewport). In a screen file `@media` is forbidden.** Fluid, then a container, then a point; two points, both in `tokens.css`, and a third is the founder's.
