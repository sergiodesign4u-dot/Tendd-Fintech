/* ============================================================================
   route13.cjs - the route, checked by an instrument instead of by eye.

   WHY IT EXISTS. Stage 13 hands the repository to somebody who was not here.
   What that person meets first is not a screen and not a token, it is a ROUTE:
   a link on the entry page, a link on the page it opens, and then the artefact.
   A route is the one artefact of this project that nobody has ever checked
   mechanically, and it is also the easiest to break silently: a file moves, a
   markdown link keeps its old path, and the page still renders perfectly.

   FIVE CHECKS, and the fourth is the one the stage exists for.

     1. LINKS IN HTML. Every href and src in every page of the repository,
        resolved against the file that writes it. External, anchors, mailto and
        data: are skipped; everything else must exist on disk.
     2. LINKS IN MARKDOWN. Every `[text](target)` in every md outside
        `docs-course/`. A md is not rendered here, but GitHub renders it, and a
        README that points at a file that moved is a route into nothing.
     3. `](` INSIDE HTML. A markdown link pasted into a page renders as literal
        text and looks like a typo to a reader and like nothing to a linter.
        The count must be zero.
     4. CLICK DEPTH FROM THE ENTRY PAGE, measured in a real browser, because the
        project roadmap is rendered by `_nav.js` at runtime and a static parse
        cannot see a single one of its links. Every artefact of the handoff must
        be reachable from `/index.html` in at most two clicks.
     5. THE THREE LINKS. The repository, the product and the design system have
        one author and two visible places, `README.md` and `handoff/handoff.html`.
        Both must carry all three, and they must be the same three.

   RUN IT:  node design/kit/screens/route13.cjs
   Output is checked in beside it as route13.txt.
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../..');
/* playwright local first, global after - the rule every instrument here follows since
   2026-08-18, so this runs for a receiver who typed `npm install` and on a machine that
   never had one. */
const { chromium } = (() => {
  try { return require('playwright'); }
  catch (e) { return require(execSync('npm root -g').toString().trim() + '/playwright'); }
})();

const SKIP_DIR = ['.git', 'node_modules', 'docs-course', '.playwright-mcp', '.impeccable', '.github', '.claude'];
const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const rel = dir ? dir + '/' + e.name : e.name;
    if (e.isDirectory()) { if (SKIP_DIR.includes(e.name)) continue; walk(rel, out); }
    else out.push(rel);
  }
  return out;
};
const ALL = walk('');
const HTML = ALL.filter(f => f.endsWith('.html'));
const MD = ALL.filter(f => f.endsWith('.md'));
const say = (...a) => console.log(...a);
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

/* A TARGET IS A PATH ONLY IF IT POINTS AT ONE. Everything below is deliberately not a
   link into this repository and is not a finding: a fragment stays on the page, an
   external URL is somebody else's route, and `data:`/`mailto:`/`javascript:` are not
   addresses at all. */
const external = t => /^(https?:|mailto:|tel:|data:|javascript:|#|\/\/)/.test(t);
const resolveRel = (from, target) => {
  const clean = target.split('#')[0].split('?')[0];
  if (!clean) return null;
  const base = clean.startsWith('/') ? clean.slice(1) : path.posix.join(path.posix.dirname(from), clean);
  return path.posix.normalize(base);
};
const onDisk = rel => {
  if (rel === '' || rel === '.') return true;
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return false;
  /* a link ending in `/` is a directory and the server answers it with its index.html */
  if (fs.statSync(abs).isDirectory()) return fs.existsSync(path.join(abs, 'index.html'));
  return true;
};

/* ---------- 1. LINKS IN HTML ---------------------------------------------- */
say('ROUTE CHECK - node design/kit/screens/route13.cjs');
say('corpus: ' + HTML.length + ' html, ' + MD.length + ' md, derived from the tree');
say('');
say('=== 1. EVERY href AND src IN EVERY PAGE ===');
let htmlLinks = 0;
const htmlDead = [];
/* A LINK IS AN ANCHOR AND NEVER A SPECIMEN. The stand pages of `design/kit/` print a
   component's own markup as escaped text inside `<code>`, so `&lt;a href="subscription-
   detail.html"` is a picture of a link on a screen and not a link on the stand. The first
   run of this instrument reported 60 of them as dead, which would have made a clean route
   unreadable behind noise that was never a route at all. Comments, scripts and styles go
   with them for the same reason: none of the three is a corridor. */
const linkable = src => src
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<(script|style|code|pre)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  /* AND ESCAPED MARKUP IS NOT MARKUP. One stand page prints a specimen tag inside a plain
     `<span>` rather than a `<code>`, so the rule cannot be "which element is it in": what
     makes `&lt;a href="..."&gt;` a picture of a link is that it is escaped. */
  .replace(/&lt;[\s\S]*?&gt;/g, '');
for (const f of HTML) {
  const src = linkable(read(f));
  const targets = [...src.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)].map(m => m[1]);
  for (const t of targets) {
    if (external(t)) continue;
    htmlLinks++;
    const rel = resolveRel(f, t);
    if (rel && !onDisk(rel)) htmlDead.push(f + '  ->  ' + t);
  }
}
say('links resolved: ' + htmlLinks + '   dead: ' + htmlDead.length);
htmlDead.forEach(d => say('   DEAD  ' + d));

/* ---------- 2. LINKS IN MARKDOWN ------------------------------------------ */
say('');
say('=== 2. EVERY MARKDOWN LINK ===');
let mdLinks = 0;
const mdDead = [];
for (const f of MD) {
  const src = read(f);
  /* the target of a markdown link, and never the label: a label may contain brackets and
     a code span may contain the two characters in prose, so the match is anchored on
     `](` and stops at the first closing paren or whitespace. */
  const targets = [...src.matchAll(/\]\(\s*([^)\s]+)/g)].map(m => m[1]);
  for (const t of targets) {
    if (external(t)) continue;
    mdLinks++;
    const rel = resolveRel(f, t);
    if (rel && !onDisk(rel)) mdDead.push(f + '  ->  ' + t);
  }
}
say('links resolved: ' + mdLinks + '   dead: ' + mdDead.length);
mdDead.forEach(d => say('   DEAD  ' + d));

/* ---------- 3. A MARKDOWN LINK INSIDE AN HTML PAGE ------------------------ */
say('');
say('=== 3. `](` INSIDE A BUILT PAGE ===');
const pasted = [];
for (const f of HTML) {
  const n = (linkable(read(f)).match(/\]\(/g) || []).length;
  if (n) pasted.push(f + '  ' + n);
}
say('pages carrying the two characters: ' + pasted.length);
pasted.forEach(p => say('   ' + p));

/* ---------- 4. CLICK DEPTH, IN A BROWSER ---------------------------------- */
/* THE ARTEFACTS THE ROUTE OWES. Derived from the folder rather than typed: everything
   the handoff stage put on disk has to be reachable, including a file added after this
   instrument was written. */
const OWED = ALL.filter(f => f.startsWith('handoff/'));

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2', '.md': 'text/plain' };
const srv = http.createServer((q, res) => {
  let f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0].split('#')[0]));
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});

srv.listen(0, '127.0.0.1', async () => {
  const port = srv.address().port;
  const base = 'http://127.0.0.1:' + port + '/';
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();

  /* a page's anchors AFTER the registry has drawn itself. `_nav.js` renders the roadmap at
     runtime, so a static read of index.html sees exactly zero of the project's stage links. */
  const anchorsOf = async rel => {
    const r = await page.goto(base + rel, { waitUntil: 'domcontentloaded' });
    if (!r || r.status() >= 400) return null;
    await page.waitForTimeout(60);
    return page.evaluate(() =>
      [...document.querySelectorAll('a[href]')]
        .map(a => a.getAttribute('href'))
        .filter(h => h && !/^(https?:|mailto:|tel:|data:|javascript:|#)/.test(h)));
  };

  const depth = new Map([['index.html', 0]]);
  let frontier = ['index.html'];
  const failedToOpen = [];
  for (let d = 1; d <= 2; d++) {
    const next = [];
    for (const from of frontier) {
      if (!from.endsWith('.html')) continue;          /* a md is an artefact, not a corridor */
      const hrefs = await anchorsOf(from);
      if (hrefs === null) { failedToOpen.push(from); continue; }
      for (const h of hrefs) {
        const rel = resolveRel(from, h);
        if (!rel) continue;
        const target = onDisk(rel) && fs.statSync(path.join(ROOT, rel)).isDirectory()
          ? path.posix.join(rel, 'index.html') : rel;
        if (depth.has(target)) continue;
        depth.set(target, d);
        next.push(target);
      }
    }
    frontier = next;
  }

  say('');
  say('=== 4. CLICK DEPTH FROM /index.html, MEASURED IN A BROWSER ===');
  say('pages opened while walking: ' + [...depth.keys()].filter(k => k.endsWith('.html')).length
      + '   failed to open: ' + failedToOpen.length);
  failedToOpen.forEach(f => say('   COULD NOT OPEN  ' + f));
  say('');
  say('the handoff owes ' + OWED.length + ' artefacts, and every one of them must sit at 2 clicks or fewer:');
  let tooDeep = 0;
  for (const f of OWED) {
    const d = depth.has(f) ? depth.get(f) : null;
    if (d === null || d > 2) tooDeep++;
    say('   ' + (d === null ? 'UNREACHABLE' : d + ' click' + (d === 1 ? ' ' : 's')).padEnd(12) + f);
  }
  say('   artefacts further than two clicks away: ' + tooDeep);

  /* ---------- 5. THE THREE LINKS ----------------------------------------- */
  say('');
  say('=== 5. THE THREE LINKS, ONE AUTHOR AND TWO VISIBLE PLACES ===');
  const urlsIn = f => [...new Set((read(f).match(/https?:\/\/[^\s"'<>)\]]+/g) || [])
    .map(u => u.replace(/[.,*)\]]+$/, ''))
    .filter(u => /github\.com\/|github\.io\//.test(u)))];
  const inReadme = urlsIn('README.md');
  const inPage = urlsIn('handoff/handoff.html');
  const onlyReadme = inReadme.filter(u => !inPage.includes(u));
  const onlyPage = inPage.filter(u => !inReadme.includes(u));
  say('README.md carries ' + inReadme.length + ', handoff.html carries ' + inPage.length);
  inReadme.forEach(u => say('   README   ' + u));
  inPage.forEach(u => say('   PAGE     ' + u));
  if (onlyReadme.length) onlyReadme.forEach(u => say('   ONLY IN README  ' + u));
  if (onlyPage.length) onlyPage.forEach(u => say('   ONLY ON THE PAGE  ' + u));
  say('the two places disagree on: ' + (onlyReadme.length + onlyPage.length) + ' link(s)');

  /* ---------- the verdict ------------------------------------------------- */
  const fails = htmlDead.length + mdDead.length + pasted.length + failedToOpen.length + tooDeep
              + onlyReadme.length + onlyPage.length;
  say('');
  say('=== VERDICT ===');
  say('  dead links in html:            ' + htmlDead.length);
  say('  dead links in markdown:        ' + mdDead.length);
  say('  markdown pasted into a page:   ' + pasted.length);
  say('  pages that would not open:     ' + failedToOpen.length);
  say('  handoff artefacts past 2 clicks: ' + tooDeep);
  say('  the three links disagreeing:   ' + (onlyReadme.length + onlyPage.length));
  say(fails === 0 ? '  THE ROUTE HOLDS.' : '  ' + fails + ' FINDING(S).');

  await browser.close();
  srv.close();
});
