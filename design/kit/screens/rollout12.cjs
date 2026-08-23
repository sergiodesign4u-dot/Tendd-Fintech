/* ============================================================================
   rollout12.cjs - the instrument of stage 12, the Rollout.

   WHY THIS FILE EXISTS. The rollout's screens were built across four stages and
   its ACCOUNT was never written, so every claim about the coloured corpus in
   this repository is a number somebody remembered. This file recomputes the six
   that stage 12 owes, over the corpus as it stands on the day it is run:

     1  PAIRING     every grey page against its coloured twin, both directions
     2  NO STYLE    the CLAUDE.md ban, per screen file: no style block, no style
                    attribute, no @media, no @container, no stylesheet besides
                    the two a screen is allowed, and no class the system does not
                    define
     3  WIDTH RULE  the narrower half of the same ban, kept separate because it
                    is the one stage 10 asked stage 12 to re-prove: a width
                    literal written anywhere inside a screen file
     4  LINKS       every href out of design/*.html, and which of them leave the
                    coloured product for the frozen grey
     5  WIDTH COL   what each component's CSS actually does with width, read out
                    of the file rather than out of the inventory, so the width
                    column of docs/inventory.md can be checked against the code
     6  REGISTRY    the component registry against the CSS files and against the
                    inventory's own tables
     7  PLACEHOLDER a grey placeholder string surviving into LIVE coloured
                    markup, comments excluded

   CHECK 7 WAS ADDED 2026-08-20 BY A FOUNDER FINDING, and it is the cheapest
   check in the file. `home-one` and `home-few` shipped with `[logo]` rendering
   on the page instead of the merchant mark, because they were generated from
   their grey originals and the grey placeholder came with them. Nothing here
   saw it: `counts.cjs` counts the CLASS and the class was correct, the width
   sweep measures boxes and the box was the right size, and the ban on a screen's
   own style has nothing to say about content. The founder saw it by looking at
   the page. The family is derived from the grey rather than listed here: any
   `[...]` standing alone as an element's whole text on a grey page is a
   placeholder, which today is `[logo]`, `[ ? ]` and the four `[chart...]`
   strings, and a seventh added tomorrow is caught without editing this file.

   IT WRITES NOTHING. Every fix under it is a human decision: a claim carries a
   breakdown, a class that looks undefined can be a state written by a script,
   and a "does not adapt" cell is a sentence rather than a flag.

   THE CORPORA, the same two the counter uses:
     grey      wireframes/*.html  minus overview.html, the hub
     coloured  design/*.html      minus overview.html and rollout.html, the two
                                  stands of that folder
   A stand is not a product screen. design/index.html IS a product screen
   (node 1.1, the public page) and is counted.

   RUN IT:  node design/kit/screens/rollout12.cjs
            node design/kit/screens/rollout12.cjs --json
   ============================================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const AS_JSON = process.argv.slice(2).includes('--json');

const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const list = (dir, ext) => fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith(ext)).sort();

/* --- the two corpora ------------------------------------------------------ */
/* A STAND IS NOT A PRODUCT SCREEN, and there are two of them in design/ since
   2026-08-17: overview.html, the hub of was-and-became pairs, and rollout.html,
   this stage's own account. Both are review surfaces, both carry a style block
   of their own by the same licence the hub has always had, and counting either
   as a screen would report the licence as a violation. wireframes/ has one. */
const STANDS = ['overview.html', 'rollout.html'];
const grey = list('wireframes', '.html').filter(f => !STANDS.includes(f));
const colour = list('design', '.html').filter(f => !STANDS.includes(f));

/* --- 1. pairing ----------------------------------------------------------- */
const greySet = new Set(grey), colourSet = new Set(colour);
const greyOnly = grey.filter(f => !colourSet.has(f));
const colourOnly = colour.filter(f => !greySet.has(f));

/* --- what a screen is allowed to load ------------------------------------- */
const ALLOWED_SHEETS = ['system/index.css', '_screen.css'];

/* --- the class vocabulary the system defines ------------------------------ */
function selectorsOf(css) {
  const out = new Set();
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const re = /\.([A-Za-z_][-\w]*)/g;
  let m;
  /* only inside selector position: everything before a { on a rule line. Cheap
     and sufficient, because a class name in a declaration value is not a thing. */
  stripped.split('}').forEach(block => {
    const head = block.split('{')[0];
    if (!head) return;
    while ((m = re.exec(head)) !== null) out.add(m[1]);
    re.lastIndex = 0;
  });
  return out;
}

const systemCss = []
  .concat(['design/system/base.css', 'design/system/tokens.css'])
  .concat(list('design/system/components', '.css').map(f => 'design/system/components/' + f))
  .concat(list('design/system/patterns', '.css').map(f => 'design/system/patterns/' + f));

const defined = new Set();
systemCss.forEach(f => selectorsOf(read(f)).forEach(c => defined.add(c)));
const systemDefined = new Set(defined);
/* the reviewer chrome: a screen loads it, so a class it defines is not undefined,
   but it is NOT the system and is reported in its own column */
const chrome = selectorsOf(read('design/_screen.css'));
chrome.forEach(c => defined.add(c));
/* classes written by the two scripts a screen loads, never by a stylesheet */
const SCRIPTED = new Set(['is-current', 'is-open', 'is-hidden']);
SCRIPTED.forEach(c => defined.add(c));

/* --- per-screen scan ------------------------------------------------------ */
const WIDTH_RULE = /(?:^|[^-\w])((?:max-|min-)?(?:width|inline-size))\s*:\s*([^;"'}]+)/gi;
const rows = [];
const linkRows = [];

colour.forEach(file => {
  const src = read('design/' + file);
  const body = src.replace(/<!--[\s\S]*?-->/g, '');

  const styleBlocks = (body.match(/<style[\s>]/gi) || []).length;
  const styleAttrs = (body.match(/\sstyle\s*=\s*["']/gi) || []).length;
  const media = (body.match(/@media/gi) || []).length;
  const container = (body.match(/@container/gi) || []).length;

  const sheets = [];
  const sre = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi;
  let sm;
  while ((sm = sre.exec(body)) !== null) {
    const href = (sm[0].match(/href=["']([^"']+)["']/) || [])[1] || '';
    sheets.push(href);
  }
  const foreignSheets = sheets.filter(h => !ALLOWED_SHEETS.includes(h) && !/^https:\/\/fonts\./.test(h));

  /* width literals: anywhere in the file's markup, which is where they would be
     if a screen ever wrote one - in a style attribute, in a style block, or in a
     query. Comments are stripped first: a screen is allowed to TALK about width. */
  const widths = [];
  let wm;
  WIDTH_RULE.lastIndex = 0;
  while ((wm = WIDTH_RULE.exec(body)) !== null) {
    /* an SVG or img width= attribute is geometry of a drawing, not a layout rule */
    widths.push(wm[1] + ':' + wm[2].trim());
  }

  /* classes */
  const used = new Set();
  const cre = /class=["']([^"']*)["']/g;
  let cm;
  while ((cm = cre.exec(body)) !== null) {
    cm[1].split(/\s+/).filter(Boolean).forEach(c => used.add(c));
  }
  const undef = [...used].filter(c => !defined.has(c)).sort();
  const chromeOnly = [...used].filter(c => !systemDefined.has(c) && chrome.has(c)).sort();

  /* links */
  const hrefs = [];
  const hre = /href=["']([^"']+)["']/g;
  let hm;
  while ((hm = hre.exec(body)) !== null) hrefs.push(hm[1]);
  const out = hrefs.filter(h => !/^(#|https?:|mailto:)/.test(h));
  const toGrey = out.filter(h => h.includes('wireframes/'));
  const broken = out.filter(h => {
    const target = path.resolve(ROOT, 'design', h.split('#')[0]);
    return h.split('#')[0] && !fs.existsSync(target);
  });
  if (toGrey.length || broken.length) linkRows.push({ file, toGrey, broken });

  rows.push({
    file, styleBlocks, styleAttrs, media, container,
    foreignSheets, widths, undef, chromeOnly,
    links: out.length
  });
});

/* --- 5. what each component CSS does with width --------------------------- */
const compFiles = list('design/system/components', '.css')
  .map(f => ({ file: f, css: read('design/system/components/' + f) }))
  .concat(list('design/system/patterns', '.css')
    .map(f => ({ file: f, css: read('design/system/patterns/' + f), pattern: true })));

const BP = { '47.5rem': 'tablet point', '56.25rem': 'desktop point' };

const widthBehaviour = compFiles.map(({ file, css, pattern }) => {
  const s = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const qs = [];
  const qre = /@(container|media)([^{]*)\{/g;
  let q;
  while ((q = qre.exec(s)) !== null) {
    const cond = q[2].trim();
    if (/reduced-motion|prefers-color|hover|pointer/.test(cond)) continue;
    qs.push('@' + q[1] + ' ' + cond);
  }
  const points = [];
  Object.keys(BP).forEach(v => { if (s.includes(v)) points.push(BP[v]); });
  const localThresholds = [...new Set((s.match(/@(?:container|media)[^{]*?(\d+(?:\.\d+)?)(rem|px)/g) || [])
    .map(x => (x.match(/(\d+(?:\.\d+)?)(rem|px)/) || [])[0])
    .filter(v => !BP[v]))];
  /* FLUID IS BROADER THAN clamp() AND NARROWER THAN flex, and the line between
     the two flex forms is the whole reason this reads as three signs rather than
     one. `flex-wrap: wrap` means the component's ARRANGEMENT answers the width
     it is given: the row becomes two lines and then three. `flex: 1` on a child
     means the component DIVIDES whatever width it is handed - the four tabs, the
     three range segments, the plan's title beside its price - and its
     arrangement is the same at 320 and at 1920. Reading only for clamp/auto-fit
     would put the action row and the meta row in "does not adapt"; reading any
     `flex` as fluid would move the range picker, the preset tile and the plan
     option OUT of it, and neither is what the file does. With the split, this
     instrument reproduces every verdict stage 10 wrote by hand. */
  const fluidTrack = /clamp\(|auto-fit|auto-fill|minmax\(/.test(s);
  const fluidFlex = /flex-wrap:\s*wrap/.test(s);
  const divides = /flex:\s*1|flex-grow:\s*[1-9]/.test(s);
  const fluid = fluidTrack || fluidFlex;
  const measure = /--container-text|\d+ch/.test(s);
  const capped = /max-width:\s*(var\(--container-|\d)/.test(s);

  const kinds = [];
  if (qs.length && points.length) kinds.push('point');
  else if (qs.length) kinds.push('container threshold');
  if (fluid) kinds.push('fluid');
  if (measure) kinds.push('a reading measure');
  if (!kinds.length && capped) kinds.push('a cap and no query');
  return {
    file, pattern: !!pattern,
    kind: kinds.length ? kinds.join(' + ') : 'does not adapt',
    queries: qs.length, points: [...new Set(points)], localThresholds,
    fluidTrack, fluidFlex, divides, measure, capped
  };
});

/* --- 6. registry against the code and the inventory ----------------------- */
const navSrc = read('design/kit/_nav.js');
const navPages = [...navSrc.matchAll(/page:\s*'([-\w]+\.html)'/g)].map(m => m[1]);
const navCount = new Set(navPages).size;
const inv = read('design/kit/docs/inventory.md');
const invHeadings = [...inv.matchAll(/^## (Atoms|Molecules|Organisms|Patterns)[^\n]*\((\d+)\)/gm)]
  .map(m => ({ level: m[1], claims: Number(m[2]) }));
/* count the rows of each level table */
const invRows = {};
inv.split('\n## ').forEach(section => {
  const head = section.split('\n')[0];
  const lvl = (head.match(/^(Atoms|Molecules|Organisms|Patterns)/) || [])[1];
  if (!lvl) return;
  const n = section.split('\n').filter(l => /^\|\s*[A-Z]/.test(l) && !/^\|\s*(Component|Pattern)\b/.test(l)).length;
  invRows[lvl] = (invRows[lvl] || 0) + n;
});

const result = {
  corpus: { grey: grey.length, colour: colour.length, greyOnly, colourOnly },
  screens: rows,
  links: linkRows,
  widthBehaviour,
  registry: {
    componentCssFiles: list('design/system/components', '.css').length,
    patternCssFiles: list('design/system/patterns', '.css').length,
    kitPages: list('design/kit', '.html').length,
    navPages: navCount,
    inventoryHeadings: invHeadings,
    inventoryRows: invRows
  }
};

if (AS_JSON) { console.log(JSON.stringify(result, null, 2)); process.exit(0); }

/* --- 7. a grey placeholder in live coloured markup ------------------------- */
/* THE FAMILY IS READ OFF THE GREY, NOT LISTED. A placeholder is a bracketed
   string standing alone as an element's whole text on a grey page, which is what
   the grey does when it cannot draw a thing: the merchant mark, the unidentified
   charge, the chart. Comments are stripped from both sides first, because every
   coloured page EXPLAINS the placeholder it replaced and the explanation is not
   the defect. */
const stripComments = t => t.replace(/<!--[\s\S]*?-->/g, '');
const PH_RX = />\s*(\[[^\]<>]{0,40}\])\s*</g;
const placeholders = new Set();
grey.forEach(f => {
  const t = stripComments(fs.readFileSync(path.join(ROOT, 'wireframes', f), 'utf8'));
  let m; PH_RX.lastIndex = 0;
  while ((m = PH_RX.exec(t)) !== null) placeholders.add(m[1]);
});
const placeholderHits = [];
colour.forEach(f => {
  const t = stripComments(fs.readFileSync(path.join(ROOT, 'design', f), 'utf8'));
  let m; PH_RX.lastIndex = 0;
  while ((m = PH_RX.exec(t)) !== null)
    if (placeholders.has(m[1])) placeholderHits.push({ file: f, token: m[1] });
});

/* --- the ledger ----------------------------------------------------------- */
const L = [];
const p = s => L.push(s);
p('STAGE 12 ROLLOUT LEDGER - node design/kit/screens/rollout12.cjs');
p('');
p('1. PAIRING');
p(`   grey pages (wireframes/*.html minus the hub)      ${grey.length}`);
p(`   coloured pages (design/*.html minus its stands)   ${colour.length}`);
p(`   grey with no coloured twin                        ${greyOnly.length}${greyOnly.length ? ': ' + greyOnly.join(', ') : ''}`);
p(`   coloured with no grey original                    ${colourOnly.length}${colourOnly.length ? ': ' + colourOnly.join(', ') : ''}`);
p('');

const sum = k => rows.reduce((a, r) => a + (Array.isArray(r[k]) ? r[k].length : r[k]), 0);
p('2. NO STYLE OF ITS OWN, over all ' + colour.length + ' coloured screen files');
p(`   <style> blocks                                    ${sum('styleBlocks')}`);
p(`   style="" attributes                               ${sum('styleAttrs')}`);
p(`   @media                                            ${sum('media')}`);
p(`   @container                                        ${sum('container')}`);
p(`   stylesheets besides system/index.css + _screen.css ${sum('foreignSheets')}`);
p(`   classes the system does not define                ${sum('undef')}`);
p('');
const offenders2 = rows.filter(r => r.styleBlocks || r.styleAttrs || r.media || r.container || r.foreignSheets.length || r.undef.length);
if (offenders2.length) {
  offenders2.forEach(r => {
    p(`   ${r.file}`);
    if (r.styleBlocks) p(`      style blocks: ${r.styleBlocks}`);
    if (r.styleAttrs) p(`      style attributes: ${r.styleAttrs}`);
    if (r.media) p(`      @media: ${r.media}`);
    if (r.container) p(`      @container: ${r.container}`);
    if (r.foreignSheets.length) p(`      sheets: ${r.foreignSheets.join(', ')}`);
    if (r.undef.length) p(`      undefined classes: ${r.undef.join(', ')}`);
  });
} else p('   VIOLATIONS: none');
p('');

p('3. WIDTH RULE IN A SCREEN FILE, the re-check stage 10 asked for');
const widthOffenders = rows.filter(r => r.widths.length);
p(`   screen files carrying a width declaration         ${widthOffenders.length} of ${colour.length}`);
widthOffenders.forEach(r => p(`      ${r.file}: ${r.widths.join(' | ')}`));
if (!widthOffenders.length) p('   VIOLATIONS: none');
p('');

p('4. LINKS');
const totalLinks = rows.reduce((a, r) => a + r.links, 0);
p(`   internal links across the coloured corpus         ${totalLinks}`);
p(`   links leaving colour for wireframes/              ${linkRows.reduce((a, r) => a + r.toGrey.length, 0)}`);
p(`   links whose target does not exist                 ${linkRows.reduce((a, r) => a + r.broken.length, 0)}`);
linkRows.forEach(r => {
  if (r.toGrey.length) p(`      ${r.file} -> grey: ${r.toGrey.join(', ')}`);
  if (r.broken.length) p(`      ${r.file} -> missing: ${r.broken.join(', ')}`);
});
/* AND THE LINKS THAT ARE NOT IN A SCREEN FILE AT ALL, 2026-08-19. The reviewer's
   chrome grew a "where this wait goes" strip on the two screens that have no way
   out by rule (U7), and its hrefs live in `design/_nav.js` rather than in any of
   the 55 files this section reads. A href nobody checks is a href that rots, so
   the AFTER map is parsed here and its targets are resolved against the tree, in
   the same run and by the same standard as every other link in colour. */
const chromeSrc = read('design/_nav.js');
const afterBlock = chromeSrc.slice(chromeSrc.indexOf('var AFTER = {'), chromeSrc.indexOf('function stateFile'));
const afterTargets = [...afterBlock.matchAll(/\['([a-z0-9-]+\.html)'/g)].map(m => m[1]);
const afterBroken = afterTargets.filter(t => !fs.existsSync(path.join(ROOT, 'design', t)));
p(`   links in the chrome's "where this wait goes" strip ${afterTargets.length}`);
p(`   of those, whose target does not exist              ${afterBroken.length}`);
afterBroken.forEach(t => p(`      design/_nav.js AFTER -> missing: ${t}`));
p('');

p('5. BEHAVIOUR AT WIDTH, read out of the component CSS');
/* what the inventory currently CLAIMS in its width column, by css file */
const claimed = {};
inv.split('\n').forEach(line => {
  if (!/^\|/.test(line)) return;
  const cells = line.split('|').map(c => c.trim());
  const cssCell = cells.find(c => /^`[-\w/]+\.css`$/.test(c));
  if (!cssCell) return;
  const key = cssCell.replace(/`/g, '').split('/').pop();
  claimed[key] = cells[cells.length - 2] || cells[cells.length - 1];
});
p('   file                     signs                                   inventory says');
widthBehaviour.forEach(w => {
  const signs = [
    w.queries ? `q${w.queries}` : '',
    w.points.length ? w.points.map(x => x.split(' ')[0]).join('+') : '',
    w.localThresholds.length ? 'local:' + w.localThresholds.join('/') : '',
    w.fluidTrack ? 'track' : '', w.fluidFlex ? 'wrap' : '', w.divides ? 'divides' : '',
    w.measure ? 'ch' : '', w.capped ? 'cap' : ''
  ].filter(Boolean).join(' ');
  const say = (claimed[w.file] || 'NO ROW').replace(/\s+/g, ' ').slice(0, 60);
  p(`   ${w.file.replace('.css', '').padEnd(24)} ${signs.padEnd(40)} ${say}`);
});
p('');
/* THE FLAGS ARE THE FALSIFIABLE HALF, and they are deliberately fewer than the
   signs. `flex: 1` on a child is a sign and not a verdict: it makes a row share
   a line, which is what the action row does with width and what the range picker
   does whatever the width is. A query and a measure are not like that - either
   the file asks a question about width or it does not - so those are the two the
   instrument is allowed to call drift on. The third flag is about the COLUMN
   rather than the component: a cell that answers some other question. */
const VERDICT_WORDS = /^(does not adapt|point|container threshold|fluid|a reading measure|two reading measures|a cap)/i;
const flags = [];
widthBehaviour.forEach(w => {
  const say = (claimed[w.file] || '').replace(/\s+/g, ' ');
  if (!say) return;
  if (/does not adapt/i.test(say) && (w.queries || w.measure))
    flags.push(`   FALSE "does not adapt"  ${w.file}: ${w.queries} quer${w.queries === 1 ? 'y' : 'ies'}${w.measure ? ', a reading measure' : ''}`);
  if (/\bpoint\b/i.test(say) && !w.points.length)
    flags.push(`   POINT CLAIMED, NONE IN THE FILE  ${w.file}`);
  if (!VERDICT_WORDS.test(say) && say.length > 60)
    flags.push(`   NOT A WIDTH ANSWER  ${w.file}: the cell holds ${say.length} characters of something else`);
});
p('   FLAGS');
if (flags.length) flags.forEach(f => p(f)); else p('   none');
p('');
const byKind = {};
widthBehaviour.forEach(w => { (byKind[w.kind] = byKind[w.kind] || []).push(w.file.replace('.css', '')); });
Object.keys(byKind).sort((a, b) => byKind[b].length - byKind[a].length).forEach(k => {
  p(`   ${String(byKind[k].length).padStart(3)}  ${k}`);
  p(`        ${byKind[k].join(', ')}`);
});
const adapting = widthBehaviour.filter(w => w.kind !== 'does not adapt').length;
p(`   adapts ${adapting} of ${widthBehaviour.length}, does not adapt ${widthBehaviour.length - adapting}`);
const locals = [...new Set(widthBehaviour.flatMap(w => w.localThresholds))];
p(`   local thresholds outside the two points: ${locals.join(', ') || 'none'}`);
p('');

p('6. REGISTRY AGAINST THE CODE');
p(`   component css files      ${result.registry.componentCssFiles}`);
p(`   pattern css files        ${result.registry.patternCssFiles}`);
p(`   pages in design/kit/     ${result.registry.kitPages}`);
p(`   pages named by _nav.js   ${result.registry.navPages}`);
invHeadings.forEach(h => {
  const actual = invRows[h.level] || 0;
  p(`   inventory ${h.level.padEnd(10)} heading says ${String(h.claims).padStart(3)}, table holds ${String(actual).padStart(3)}  ${actual === h.claims ? 'ok' : 'DRIFT'}`);
});
p('');

p('7. GREY PLACEHOLDERS IN LIVE COLOURED MARKUP');
p(`   placeholder strings found in the grey              ${placeholders.size}: ${[...placeholders].join(' ')}`);
p(`   coloured pages rendering one                       ${new Set(placeholderHits.map(h => h.file)).size}`);
if (placeholderHits.length) placeholderHits.forEach(h => p(`   STILL A PLACEHOLDER  ${h.file}  ${h.token}`));
else p('   none: every coloured page draws the thing its grey original could only name');

p('');

/* ============================================================================
   8. THE TEMPLATE, checked against the product it claims to start.  2026-08-23.

   `design/kit/_nav.js` registers `design/kit/shell.html` as "the markup a coloured
   screen is copied from", and until today NOTHING in this repository read it.
   Every instrument here takes the product or the system, and a template is
   neither - so the file a new screen would be copied from was free to rot, and
   it had: it named three destinations where the product has four, it put a back
   control on a destination against usage rule U18, and it closed a `div` with a
   `</main>`. Found by a reader with no memory of this project who was sent to
   build a screen from the documentation alone and was pointed here by the
   registry. A registry that lies is worse than no registry.
   ============================================================================ */
const shellPath = path.join(ROOT, 'design', 'kit', 'shell.html');
p('8. THE TEMPLATE A NEW SCREEN IS COPIED FROM');
if (!fs.existsSync(shellPath)) {
  p('   design/kit/shell.html is MISSING, and design/kit/_nav.js names it');
} else {
  const raw = fs.readFileSync(shellPath, 'utf8');
  /* comments stripped first: this file explains itself in markup-shaped prose */
  const shell = raw.replace(/<!--[\s\S]*?-->/g, '');
  const unbalanced = ['div', 'main', 'header', 'nav', 'section', 'ul', 'li', 'label']
    .map(t => ({ t, o: (shell.match(new RegExp('<' + t + '[ >]', 'g')) || []).length,
                    c: (shell.match(new RegExp('</' + t + '>', 'g')) || []).length }))
    .filter(x => x.o !== x.c);
  p(`   tag pairs unbalanced                              ${unbalanced.length}` +
    (unbalanced.length ? '  ' + unbalanced.map(x => `${x.t} ${x.o}/${x.c}`).join(', ') : ''));

  const tabs = (shell.match(/<nav class="tabbar"[\s\S]*?<\/nav>/) || [''])[0];
  const shellDests = (tabs.match(/<a /g) || []).length;
  /* what the PRODUCT answers, read off a real screen rather than typed here */
  const homeSrc = fs.readFileSync(path.join(ROOT, 'design', 'home.html'), 'utf8');
  const homeTabs = (homeSrc.match(/<nav class="tabbar"[\s\S]*?<\/nav>/) || [''])[0];
  const productDests = (homeTabs.match(/<a /g) || []).length;
  p(`   destinations in the template                      ${shellDests}, and the product has ${productDests}  ${shellDests === productDests ? 'ok' : 'DRIFT'}`);

  const isDestination = /<nav class="tabbar"/.test(shell);
  const hasBack = /class="back"/.test(shell);
  const hasAcct = /class="acct"/.test(shell);
  p(`   U18: a destination carries the account link and no back control  ` +
    (isDestination && hasBack ? 'VIOLATED, it carries a back control'
      : isDestination && !hasAcct ? 'VIOLATED, it carries neither'
      : 'ok'));
}

console.log(L.join('\n'));
