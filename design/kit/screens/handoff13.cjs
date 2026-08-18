/* handoff13.cjs - the census that opens stage 13.
 *
 * The question this stage exists to answer is "what does a person who did not build this
 * actually receive", and the honest way to open it is to COUNT what is on disk rather than
 * to describe what we remember putting there. Everything here is derived from the files:
 * no list of paths is typed in except the four roots of the project.
 *
 * Run:  node design/kit/screens/handoff13.cjs > design/kit/screens/handoff13.txt
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '../../..');

const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = p => fs.existsSync(path.join(ROOT, p));
const walk = (dir, out = []) => {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return out;
  for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const rel = path.join(dir, e.name);
    if (e.isDirectory()) walk(rel, out); else out.push(rel);
  }
  return out;
};
const lines = p => read(p).split('\n').length;
const say = (...a) => console.log(...a);
const pad = (s, n) => String(s).padStart(n);

const all = walk('.').filter(f => !f.startsWith('.git'));
const by = ext => all.filter(f => f.endsWith(ext));

say('=== 1. WHAT IS ON DISK ===');
const groups = {
  'product screens, colour': f => /^design\/[^/]+\.html$/.test(f) && !/(overview|rollout)\.html$/.test(f),
  'product screens, grey':   f => /^wireframes\/[^/]+\.html$/.test(f) && !/overview\.html$/.test(f),
  'system css':              f => /^design\/system\/.*\.css$/.test(f),
  'system js':               f => /^design\/system\/.*\.js$/.test(f),
  'stand pages':             f => /^design\/kit\/[^/]+\.html$/.test(f),
  'stage pages, other':      f => /^(research|ia|voice)\/.*\.html$/.test(f),
  'md, loaded at session':   f => f === 'CLAUDE.md' || f === 'design/system/CLAUDE.md',
  'md, everything else':     f => f.endsWith('.md') && f !== 'CLAUDE.md' && f !== 'design/system/CLAUDE.md',
  'instruments (.cjs)':      f => f.endsWith('.cjs'),
};
let counted = 0;
for (const [name, test] of Object.entries(groups)) {
  const hit = all.filter(test);
  counted += hit.length;
  const ls = hit.reduce((n, f) => n + lines(f), 0);
  say(pad(hit.length, 5) + ' files ' + pad(ls, 7) + ' lines   ' + name);
}
say(pad(all.length - counted, 5) + ' files                 everything else (assets, json, css of the stands, nav)');
say(pad(all.length, 5) + ' files total');

say('');
say('=== 2. IS design/system/ LIFTABLE, MEASURED RATHER THAN CLAIMED ===');
const sysFiles = all.filter(f => f.startsWith('design/system/'));
const outward = [];
for (const f of sysFiles.filter(x => /\.(css|js)$/.test(x))) {
  const src = read(f);
  // strip comments so prose that MENTIONS a path is not counted as a reference
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '');
  const refs = [...code.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)].map(m => m[1])
    .concat([...code.matchAll(/@import\s+["']([^"']+)["']/g)].map(m => m[1]));
  for (const r of refs) {
    if (/^(data:|https?:)/.test(r)) continue;
    const target = path.normalize(path.join(path.dirname(f), r));
    const fromComponents = path.normalize(path.join('design/system/components', r));
    const ok = exists(target) || exists(fromComponents);
    if (!ok || !target.startsWith('design/system') && !fromComponents.startsWith('design/system')) {
      outward.push(f + '  ->  ' + r + (ok ? '  (resolves, but outside the folder)' : '  (DOES NOT RESOLVE from this file)'));
    }
  }
}
say('css/js files in design/system/: ' + sysFiles.filter(x => /\.(css|js)$/.test(x)).length);
say('references leaving the folder or failing to resolve: ' + outward.length);
outward.forEach(o => say('   ' + o));
const fonts = sysFiles.filter(x => /\.(css)$/.test(x))
  .filter(f => /@font-face|fonts\.googleapis|fonts\.gstatic/.test(read(f).replace(/\/\*[\s\S]*?\*\//g, '')));
say('files declaring a webfont: ' + fonts.length + (fonts.length ? '  ' + fonts.join(', ') : '   (Inter is asked for by name and never shipped)'));

say('');
say('=== 3. WHAT A COLOURED SCREEN LOADS, AND WHETHER ANY OF IT IS THE STAND ===');
const screens = all.filter(groups['product screens, colour']);
const loadTally = {};
for (const f of screens) {
  const src = read(f);
  const assets = [...src.matchAll(/(?:href|src)=["']([^"']+\.(?:css|js))["']/g)].map(m => m[1]);
  assets.forEach(a => { loadTally[a] = (loadTally[a] || 0) + 1; });
}
Object.entries(loadTally).sort((a, b) => b[1] - a[1])
  .forEach(([a, n]) => say(pad(n, 4) + ' of ' + screens.length + '   ' + a));

say('');
say('=== 4. THE DOORS: WHAT NAMES WHAT ===');
const doors = ['README.md', 'CLAUDE.md', 'index.html', 'DESIGN.md', 'AGENTS.md', 'docs/decisions.md',
  'design/kit/why.html', 'design/overview.html', 'design/kit/overview.html', 'design/rollout.html'];
for (const d of doors) say((exists(d) ? '  present  ' : '  MISSING  ') + pad(exists(d) ? lines(d) : 0, 6) + ' lines   ' + d);

say('');
say('=== 5. EVERY md, AND WHETHER A PAGE SHOWS IT ===');
// CLAUDE.md: an artefact with no visible place does not exist for the person who decides.
const mds = by('.md').filter(f => !f.startsWith('docs-course'));
const htmlSrc = by('.html').map(f => ({ f, s: read(f) }));
const shown = [];
const hidden = [];
for (const m of mds) {
  const base = path.basename(m);
  const hit = htmlSrc.filter(h => h.s.includes(base) || h.s.includes(m));
  (hit.length ? shown : hidden).push(m + (hit.length ? '   named on ' + hit.length + ' page(s)' : ''));
}
say('md files: ' + mds.length + ', named by at least one html: ' + shown.length + ', named by none: ' + hidden.length);
// A md naming another md is NOT a visible place under CLAUDE.md, which asks for a page. It is
// still worth separating, because "nobody can reach it" and "only a reader of another md can"
// are different repairs.
for (const h of hidden) {
  const f = h.split(' ')[0];
  const base = path.basename(f);
  const inMd = mds.filter(m => m !== f && read(m).includes(base));
  say('   NOT NAMED BY ANY PAGE: ' + f + (inMd.length ? '   (named by ' + inMd.length + ' md: ' + inMd.slice(0, 3).join(', ') + ')' : '   (named by nothing at all)'));
}

say('');
say('=== 6. THE INSTRUMENTS, AND WHAT EACH ONE CHECKS ===');
const insts = by('.cjs');
for (const i of insts) {
  const src = read(i);
  const first = (src.split('\n').find(l => /^\s*\*?\s*\w/.test(l.replace(/^\/\*+/, ''))) || '').replace(/^[\s*/]+/, '').trim();
  say('  ' + path.basename(i).padEnd(18) + pad(lines(i), 5) + ' lines   ' + first.slice(0, 96));
}

say('');
say('=== 7. WHAT IS OPEN, COUNTED OFF THE BACKLOG RATHER THAN REMEMBERED ===');
const bl = read('design/kit/docs/backlog.md');
const rows = bl.split('\n').filter(l => l.startsWith('|') && !/^\|\s*-+/.test(l) && !/^\|\s*(What|Still-grey)/.test(l));
// A row can say both words: "CLOSED in part" and "OPEN on the other half" is one row and it is
// open. So the two tests are run separately and the overlap is printed rather than resolved by
// whichever pattern happened to run first.
const saysClosed = rows.filter(r => /CLOSED|Closed/.test(r));
const saysOpen = rows.filter(r => /\bOPEN\b|\bOpen\b/.test(r));
const both = saysClosed.filter(r => saysOpen.includes(r));
const neither = rows.filter(r => !saysClosed.includes(r) && !saysOpen.includes(r));
say('table rows in backlog.md: ' + rows.length);
say('   say closed:            ' + saysClosed.length);
say('   say open:              ' + saysOpen.length);
say('   say both:              ' + both.length + '   (a row with anything unfinished is an open row)');
say('   say neither:           ' + neither.length + '   (read by hand, they are prose rows and section notes)');
say('   OPEN by that reading:  ' + (saysOpen.length) + ' of ' + rows.length);
const founder = rows.filter(r => /\bFounder\b/.test(r));
say('rows naming the founder as owner: ' + founder.length);
const st13 = rows.filter(r => /stage 13|\bhandoff\b/i.test(r));
say('rows naming stage 13 or the handoff: ' + st13.length);
st13.forEach(r => say('   ' + r.slice(0, 150).replace(/\s+/g, ' ')));

say('');
say('=== 8. THE RUN SURFACE: WHAT A RECEIVER NEEDS BEFORE THEY CAN OPEN ANYTHING ===');
const runFiles = ['package.json', 'package-lock.json', '_config.yml', 'Makefile', 'vercel.json', '.nvmrc'];
runFiles.forEach(r => say((exists(r) ? '  present  ' : '  absent   ') + r));
// The first version of this check matched `node ` and reported README.md as an answer, on the
// strength of "one per state node". A test loose enough to match prose about the IA is a test
// that reports a document as an instruction, so the patterns below are the ones a person would
// actually type or read: a command, a local server, or the words themselves.
const howto = all.filter(f => /\.(md|html)$/.test(f) && !f.startsWith('docs-course'))
  .filter(f => /npm (install|run|i )|npx |localhost:|127\.0\.0\.1|http-server|python -m http|`node [a-z]|to run (this|it|the)/i.test(read(f)));
say('files that tell a person how to RUN this: ' + howto.length + (howto.length ? '  ' + howto.slice(0, 6).join(', ') : '   (nothing does)'));
const deps = all.filter(f => f.endsWith('.cjs')).filter(f => /require\(/.test(read(f)));
const ext = new Set();
deps.forEach(f => [...read(f).matchAll(/require\(([^)]*)\)/g)].forEach(m => {
  const q = m[1].replace(/['"]/g, '').trim();
  if (!q.startsWith('.') && !['fs', 'path', 'http', 'child_process', 'url', 'os'].includes(q)) ext.add(q || 'computed at runtime');
}));
say('what the instruments need beyond node: ' + ([...ext].join(', ') || 'nothing'));
say('   (a computed require is playwright: local node_modules first since 2026-08-18, the global npm root after)');

say('');
say('=== 9. THE ROADMAP ITSELF ===');
const nav = read('_nav.js');
const navRows = [...nav.matchAll(/\{\s*label:'([^']+)'[^}]*?done:(true|false)/g)].map(m => m[1] + ' ' + (m[2] === 'true' ? 'done' : 'NOT DONE'));
navRows.forEach(r => say('  ' + r));
