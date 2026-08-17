/* ============================================================================
   counts.cjs - the per-component count, recomputed instead of remembered.

   WHY THIS FILE EXISTS. Every component in this system carries a sentence like
   "Stands on 12 grey pages, 32 groups, and on 11 coloured pages, 29 groups",
   written by hand in the css header and again in the stand's own `kit-meta`.
   Nothing recomputed them, so the day the corpus grew they went stale in
   silence: 21 components drifted at once when the landing was built, and the
   backlog has carried the row ever since. A number written by hand in forty
   places is a number that is wrong in some of them.

   WHAT IT DOES. Reads the component registry (design/kit/_nav.js), counts each
   component's class across both corpora, reads the numbers the files currently
   CLAIM, and prints the difference. It writes nothing: the fix is a human
   decision per component, because several of these sentences carry a breakdown
   ("alerts (8) and alerts-loading (4)") that a script must not flatten.

   HOW A CLASS IS COUNTED. Every `class="..."` attribute is split on whitespace
   and matched whole, so `.row` never matches `.rows-col` and `.check` never
   matches `.checkmark`. An occurrence is one element; a page is one file.

   THE TWO CORPORA.
     grey      wireframes/*.html    minus overview.html, the hub
     coloured  design/*.html        minus overview.html and rollout.html, its
                                       two stands
   Both hubs are stands rather than product screens, which is the same rule the
   inventory's own counting basis states.

   RUN IT:  node design/kit/screens/counts.cjs            (drift only)
            node design/kit/screens/counts.cjs --all      (every component)
            node design/kit/screens/counts.cjs --json     (machine readable)
   ============================================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const args = process.argv.slice(2);
const SHOW_ALL = args.includes('--all');
const AS_JSON = args.includes('--json');

/* ---- the registry ---------------------------------------------------------
   The same file the stand's own panel is drawn from, so a component that is not
   in the registry is not counted here either - which is correct: the registry is
   what "the system has this component" means. */
const navSrc = fs.readFileSync(path.join(ROOT, 'design/kit/_nav.js'), 'utf8');
const marks = [...navSrc.matchAll(/^\s{2}(system|foundations|atoms|molecules|organisms|patterns):\s*\[/gm)]
  .map(m => ({ at: m.index, level: m[1] }));
const components = [...navSrc.matchAll(/\{\s*name:\s*'([^']+)',\s*cls:\s*'([^']*)',\s*page:\s*'([^']+)'(?:[^}]*?was:\s*(null|'[^']*'))?/g)]
  .map(m => {
    const g = marks.filter(x => x.at < m.index).slice(-1)[0];
    const wasRaw = m[4] && m[4] !== 'null' ? m[4].slice(1, -1) : '';
    return { name: m[1], cls: m[2], page: m[3], level: g ? g.level : '?',
             was: wasRaw ? wasRaw.split(',').map(x => x.trim()).filter(Boolean) : [] };
  });

/* ---- THE GREY CORPUS SPEAKS A DIFFERENT LANGUAGE, AND THE FIRST CUT OF THIS
   SCRIPT DID NOT KNOW IT. Stage 08 renamed classes on the way into the system:
   the chip was `.tag`, `.badge`, `.best` and `.plan`, the text input was
   `.field input`. The wireframes are frozen, so they still write the old names.
   Counting the NEW class against the grey therefore returns 0 and reads as
   "this component is not in the wireframes", which is the opposite of true - it
   reported eleven components as absent from a corpus they are all over.

   So the grey is counted through the registry's own `was` column, and the
   coloured through `cls`. Where a `was` entry is a descendant selector rather
   than a class (`.field select`, `.switch input`) this script says so and counts
   nothing: matching an ancestor needs a DOM, and a regex that pretends to would
   be the same lie one level down. Those rows fall back to the registry's
   recorded `wf` figure, marked as recorded rather than recomputed. */

/* ---- the corpora ----------------------------------------------------------
   A STAND IS NOT A PRODUCT SCREEN, and design/ grew a second one on 2026-08-17:
   rollout.html, stage 12's own account, beside overview.html, the hub of pairs.
   Neither carries product markup, so neither has ever moved a count; what it
   would move is the corpus SIZE this script prints, and a corpus that says 56
   where the product is 55 is the same class of drift the file exists to end. */
const STANDS = ['overview.html', 'rollout.html'];
const corpus = (dir) => fs.readdirSync(path.join(ROOT, dir))
  .filter(f => f.endsWith('.html') && !STANDS.includes(f))
  .map(f => ({ file: dir + '/' + f, html: fs.readFileSync(path.join(ROOT, dir, f), 'utf8') }));

const grey = corpus('wireframes');
const colour = corpus('design');

/* Whole-token class match: split every class attribute and compare exactly. A
   substring match here would report `.row` on every page that carries
   `.rows-col`, which is how a count becomes fiction. */
const countIn = (pages, cls) => {
  const name = cls.replace(/^\./, '');
  const wildcard = name.endsWith('*') ? name.slice(0, -1) : null;
  let places = 0; const files = [];
  for (const p of pages) {
    let n = 0;
    for (const m of p.html.matchAll(/class="([^"]*)"/g)) {
      for (const tok of m[1].split(/\s+/)) {
        if (wildcard ? tok.startsWith(wildcard) : tok === name) n++;
      }
    }
    if (n) { places += n; files.push(path.basename(p.file) + ' (' + n + ')'); }
  }
  return { pages: files.length, places, files };
};

/* ---- what the files CLAIM -------------------------------------------------
   Only the regular shape is parsed - "N grey pages" and "M coloured pages /
   screens / ones". A sentence that spells its numbers any other way is reported
   as unparsed rather than guessed at, because a wrong reading of a claim is
   worse than no reading: it would report drift that is not there. */
const claimOf = (text) => {
  /* THE CANONICAL SENTENCE IS THE ONE THAT STARTS "Stands on", and the parser
     reads THAT rather than the first number in the header. A header is prose: it
     also says things like "on the 28 coloured screens of stage 08", which is a
     figure NAMED to the corpus it was measured on and is allowed to stay. Reading
     the first match reported two such sentences as drift after the real claim had
     already been recounted. */
  const i = text.indexOf('Stands on');
  const sentence = i < 0 ? '' : (text.slice(i).match(/^[\s\S]*?\.(?=\s|$)/) || [text.slice(i)])[0];
  const scope = sentence || text;
  const g = scope.match(/(\d+) grey (?:pages?|ones?)/i);
  const c = scope.match(/(\d+) (?:of the \d+ )?coloured (?:screens?|pages?|ones)/i);
  return { grey: g ? +g[1] : null, colour: c ? +c[1] : null };
};

const cssDir = path.join(ROOT, 'design/system/components');
const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
const pageToCss = (page) => {
  const stem = page.replace(/\.html$/, '');
  return cssFiles.includes(stem + '.css') ? stem + '.css' : null;
};

const isPlainClass = (sel) => /^\.[A-Za-z0-9_-]+\*?$/.test(sel);

const rows = [];
for (const c of components) {
  if (!/^\./.test(c.cls)) continue;
  /* THE UNION AND NOT THE OLD NAME ALONE. A rename does not mean the grey stopped
     using the new name: `.actions` stands on 42 grey pages under its own name and
     `.secondary`, its `was`, on 6 of them. Counting only the `was` reported 6 and
     called the file's 42 a drift. The grey side is therefore cls + was, deduped by
     page. */
  const greySelectors = [c.cls, ...c.was];
  const greyComputable = greySelectors.every(isPlainClass);
  const g = greyComputable
    ? greySelectors.map(sel => countIn(grey, sel)).reduce((a, b) => ({
        pages: 0, places: a.places + b.places,
        files: [...new Set([...a.files, ...b.files])] }), { pages: 0, places: 0, files: [] })
    : { pages: null, places: null, files: [] };
  if (greyComputable) g.pages = new Set(g.files.map(f => f.split(' ')[0])).size;
  const k = countIn(colour, c.cls);
  const cssName = pageToCss(c.page);
  const head = cssName ? fs.readFileSync(path.join(cssDir, cssName), 'utf8').split('*/')[0] : '';
  const claim = claimOf(head);
  /* A recomputed ZERO against a non-zero claim is not a drift, it is a MISS: the
     grey draws that thing without the class this registry knows it by (the
     destination icons are masks on a bare span there). Reported separately, so a
     hole in the instrument never gets filed as a hole in the docs. */
  const off = [];
  const greyMiss = claim.grey !== null && claim.grey > 0 && g.pages === 0;
  if (claim.grey !== null && g.pages !== null && !greyMiss && claim.grey !== g.pages) off.push('grey ' + claim.grey + ' -> ' + g.pages);
  if (claim.colour !== null && claim.colour !== k.pages) off.push('coloured ' + claim.colour + ' -> ' + k.pages);
  rows.push({ ...c, css: cssName, greyComputable, greyMiss, greyPages: g.pages, greyPlaces: g.places,
              colourPages: k.pages, colourPlaces: k.places, claim, drift: off,
              unparsed: cssName && claim.grey === null && claim.colour === null });
}

if (AS_JSON) { console.log(JSON.stringify(rows, null, 1)); process.exit(0); }

const drifted = rows.filter(r => r.drift.length);
const unparsed = rows.filter(r => r.unparsed);
console.log('corpora: ' + grey.length + ' grey pages, ' + colour.length + ' coloured pages');
console.log('components in the registry with a class: ' + rows.length);
console.log('claims that disagree with the corpus: ' + drifted.length);
console.log('headers whose count sentence this script will not parse: ' + unparsed.length + '\n');

const show = SHOW_ALL ? rows : drifted;
for (const r of show) {
  console.log(r.name.padEnd(22) + r.cls.padEnd(14) +
    (r.greyComputable ? ('grey ' + r.greyPages + 'p/' + r.greyPlaces) : 'grey (needs DOM)').padEnd(18) +
    ('colour ' + r.colourPages + 'p/' + r.colourPlaces).padEnd(16) +
    (r.drift.length ? 'DRIFT: ' + r.drift.join(', ') : r.unparsed ? 'claim not parsed' : 'ok'));
}
if (!SHOW_ALL && unparsed.length) {
  console.log('\nnot parsed (read these by hand):');
  for (const r of unparsed) console.log('  ' + r.name.padEnd(22) + r.css);
}
const misses = rows.filter(r => r.greyMiss || !r.greyComputable);
if (misses.length) {
  console.log('\nthe instrument cannot see these in the grey (the wireframes draw them under another name,');
  console.log('or the old selector needs a DOM). Their grey figure is left exactly as written:');
  for (const r of misses) console.log('  ' + r.name.padEnd(22) + (r.cls + '  was: ' + (r.was.join(', ') || '-')));
}
