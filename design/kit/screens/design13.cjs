/* ============================================================================
   design13.cjs - DESIGN.md against tokens.css, so the document cannot drift again.

   WHY. `docs/backlog.md` carried a row for four stages: "the typographic prose in
   DESIGN.md disagrees with the code in fifteen places", with the ruling already
   made - **the document moves to the code** - and nothing to stop it moving apart
   again the day after it was fixed. Patching fifteen numbers by hand answers the
   row once. What the row is really about is that DESIGN.md described the type
   scale in PROSE, with no token named, so no instrument could ever read it.

   So the fix had two halves. The Hierarchy list in DESIGN.md was rewritten from
   the code and every step now names its token. This file reads them back.

   WHAT IT ASKS. Every claim in DESIGN.md written in the shape

       `--token` (NNpx ...

   is resolved against `design/system/tokens.css` at the browser default of 16px
   per rem, and reported when the two disagree. A clamp is checked at both ends,
   because a fluid step has two numbers a reader can hold you to and neither of
   them is the middle. A token the document names and the code does not have is a
   finding of its own, and so is the reverse: **a step in the scale that DESIGN.md
   never mentions**, because a design document that describes seven of eleven
   steps is not describing the scale, it is describing the part somebody
   remembered.

   RUN IT:  node design/kit/screens/design13.cjs
   ============================================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const doc = fs.readFileSync(path.join(ROOT, 'DESIGN.md'), 'utf8');
const tok = fs.readFileSync(path.join(ROOT, 'design/system/tokens.css'), 'utf8');

/* the scale as the code declares it, in px at the browser default. Only the
   :root block is read: the dark theme redefines no size and never will, because
   a theme is colour. */
/* the light block starts at the DECLARATION `:root, [data-theme="light"] {` and not
   at the first `:root` in the file, which is inside a comment 18 lines above it, and
   ends where the dark block opens. Read the wrong way the slice came back empty and
   every claim reported as "no such token" - loudly, which is the only reason it was
   caught in one run. */
const open = tok.indexOf(':root, [data-theme="light"] {');
const root = tok.slice(open, tok.indexOf('[data-theme="dark"] {'));
const scale = {};
for (const m of root.matchAll(/--(type-[a-z]+):\s*([^;]+);/g)) scale[m[1]] = m[2].trim();

const px = (v) => {
  const r = v.match(/^([\d.]+)rem$/); if (r) return [+(+r[1] * 16).toFixed(2)];
  const p = v.match(/^([\d.]+)px$/);  if (p) return [+p[1]];
  const c = v.match(/^clamp\(([^,]+),[^,]+,([^)]+)\)$/);
  if (c) return [...px(c[1].trim()), ...px(c[2].trim())];
  return null;
};

/* the claims, in the one shape the document is now written in */
const claims = [];
for (const m of doc.matchAll(/`--(type-[a-z]+)`\s*\(([^)]*)\)/g)) {
  const nums = [...m[2].matchAll(/([\d.]+)\s*px/g)].map(x => +x[1]);
  /* A CLAIM IS A PARENTHESIS THAT CARRIES A NUMBER. The token is named in prose all
     over this document - "`--type-meta` (four until D-Tab, 2026-08-18)" is a note
     about the tab bar's destination count and not a claim about a size. A shape
     with no px in it is a mention, and this file has nothing to check about it. */
  if (!nums.length) continue;
  claims.push({ token: m[1], nums, text: m[2].slice(0, 46) });
}

const findings = [];
for (const c of claims) {
  if (!(c.token in scale)) { findings.push(['NO SUCH TOKEN', c.token, c.text, '-']); continue; }
  const real = px(scale[c.token]);
  if (!real) { findings.push(['UNREADABLE VALUE', c.token, scale[c.token], '-']); continue; }
  const want = real.join(', '), got = c.nums.slice(0, real.length).join(', ');
  if (want !== got) findings.push(['DISAGREES', c.token, 'DESIGN.md says ' + got + 'px', 'code says ' + want + 'px']);
}

const named = new Set(claims.map(c => c.token));
const unnamed = Object.keys(scale).filter(t => !named.has(t));

console.log('type steps in tokens.css:      ' + Object.keys(scale).length);
console.log('steps DESIGN.md names by token: ' + named.size);
console.log('');
console.log('=== EVERY STEP, AND WHETHER THE DOCUMENT AGREES ===');
for (const t of Object.keys(scale)) {
  const c = claims.find(x => x.token === t);
  const real = px(scale[t]);
  const state = !c ? 'NOT IN THE DOCUMENT'
    : (c.nums.slice(0, real.length).join(', ') === real.join(', ') ? 'ok' : 'DISAGREES');
  console.log('  ' + ('--' + t).padEnd(16) + String(real.join(' to ') + 'px').padEnd(14) +
    scale[t].padEnd(34) + state);
}
console.log('');
if (findings.length) {
  console.log('=== FINDINGS ===');
  findings.forEach(f => console.log('  ' + f[0].padEnd(18) + ('--' + f[1]).padEnd(16) + f[2].padEnd(34) + f[3]));
} else {
  console.log('no claim in DESIGN.md disagrees with tokens.css');
}
if (unnamed.length) console.log('  steps the document does not name: ' + unnamed.map(t => '--' + t).join(', '));
console.log('');
console.log('total: ' + (findings.length + unnamed.length) + ' (' + findings.length + ' disagreements, ' + unnamed.length + ' unnamed steps)');
