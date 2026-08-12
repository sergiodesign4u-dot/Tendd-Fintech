# design/system/ - six rules. Detail in `../kit/docs/architecture.md`.

1. **Two levels of tokens, not three:** primitive (raw values), semantic (roles via `var()`). A component token only where a state lands on no role.
2. **Colour is read ONLY through a semantic role.** A primitive colour read directly is the hole the first theme finds.
3. **Geometry comes from primitive directly** (a radius has nothing to re-define). A width is on neither scale and stays literal.
4. **Two roles means two tokens even at one value today**, but one usage is not yet a role. Ask whether they can ever part company.
5. **A new component is five things:** css here + a page in `design/kit/` + a row in `design/kit/_nav.js` in its LEVEL group + a line in `docs/inventory.md` WITH its level + an `@import` in `index.css` in its level group, never at the end.
6. **A role or state token lives in `:root` AND `[data-theme="dark"]` or it does not exist.** Values differ by direction; a state is a token override, never a style of its own.
