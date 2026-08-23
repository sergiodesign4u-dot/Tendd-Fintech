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
const { execSync } = require('child_process');
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
/* COUNTED THE WAY `wc -l` COUNTS, since 2026-08-18. It was `split('\n').length`,
   which returns one extra element for the empty string after a file's final
   newline - so every line figure this census printed was inflated by one PER
   FILE, and with 618 files the group totals were out by the number of files in
   them. Found by the stage 13 critique: the read-only pass flagged the handoff
   page saying "CLAUDE.md, 200 lines" against this file's own 201, and the page
   was right. A census that is off by one on every file is worse than no census,
   because the error is invisible at any single row. */
const lines = p => { const t = read(p); if (t === '') return 0;
  return t.split('\n').length - (t.endsWith('\n') ? 1 : 0); };
const say = (...a) => console.log(...a);
const pad = (s, n) => String(s).padStart(n);

/* THE CORPUS IS WHAT GIT CARRIES, since 2026-08-23, and not what happens to sit in the
   working directory. This file's own question is "what does a person who did not build
   this actually receive", and git is the authority on that: the clean-clone test of step 6
   received 566 files where this walk had been counting 648, and the 82 it was counting are
   the screenshot logs of a local tool, the course notes and one macOS artefact - every one
   of them named in `.gitignore` and none of them ever handed to anybody. A census of a
   receiver's package that counts files the receiver never gets is off in the one direction
   that flatters it. The tree walk stays as the fallback for a copy that is not a checkout. */
const tracked = (() => {
  try {
    return execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' })
      .split('\n').filter(Boolean).map(f => path.normalize(f))
      .filter(f => fs.existsSync(path.join(ROOT, f)));
  } catch (e) { return null; }
})();
const all = tracked || walk('.').filter(f => !f.startsWith('.git'));
const by = ext => all.filter(f => f.endsWith(ext));

say('=== 1. WHAT IS ON DISK ===');
const groups = {
  'product screens, colour': f => /^design\/[^/]+\.html$/.test(f) && !/(overview|rollout)\.html$/.test(f),
  'product screens, grey':   f => /^wireframes\/[^/]+\.html$/.test(f) && !/overview\.html$/.test(f),
  'system css':              f => /^design\/system\/.*\.css$/.test(f),
  'system js':               f => /^design\/system\/.*\.js$/.test(f),
  'stand pages':             f => /^design\/kit\/[^/]+\.html$/.test(f),
  /* `handoff/` joined this group on 2026-08-18, the day the stage got a page. It
     had been landing in "everything else", which is where a file goes when nobody
     has told the census it exists - and a census that cannot see its own stage's
     page is the first thing that page would have to correct. */
  'stage pages, other':      f => /^(research|ia|voice|handoff)\/.*\.html$/.test(f)
                                  || /^design\/(overview|rollout)\.html$/.test(f),
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
  /* A BOUNDARY MATCH AND NOT A SUBSTRING, since 2026-08-23. `includes('map.md')` is true of
     every page that names `sitemap.md`, so `handoff/docs/map.md` was reported as shown by
     eleven pages while nothing in the repository named it at all. The check that exists to
     find an artefact with no visible place was the one hiding one. A preceding `/` is fine,
     a preceding letter is not. */
  const esc = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('(^|[^A-Za-z0-9_.-])' + esc);
  const hit = htmlSrc.filter(h => re.test(h.s) || h.s.includes(m));
  (hit.length ? shown : hidden).push(m + (hit.length ? '   named on ' + hit.length + ' page(s)' : ''));
}
say('md files: ' + mds.length + ', named by at least one html: ' + shown.length + ', named by none: ' + hidden.length);
// A md naming another md is NOT a visible place under CLAUDE.md, which asks for a page. It is
// still worth separating, because "nobody can reach it" and "only a reader of another md can"
// are different repairs.
for (const h of hidden) {
  const f = h.split(' ')[0];
  const base = path.basename(f);
  const inMd = mds.filter(m => m !== f && new RegExp('(^|[^A-Za-z0-9_.-])' + base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(read(m)));
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
/* TWO READINGS AND NOT ONE, since 2026-08-23. The strict test is the owner column, which
   this file writes capitalised; the loose one is any mention of the word. They were 20 and 20
   on 2026-08-19 and they are not now, because the founder took twenty-one decisions on
   2026-08-20 and the rows that record them still say the word in their prose. Printing one
   number would make a closed decision look like an open one. */
const founder = rows.filter(r => /\bFounder\b/.test(r));
const founderLoose = rows.filter(r => /founder/i.test(r));
const founderOpen = founder.filter(r => saysOpen.includes(r));
say('rows naming the founder as OWNER (capitalised): ' + founder.length + ', of them still open: ' + founderOpen.length);
say('rows mentioning the founder anywhere: ' + founderLoose.length);
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
