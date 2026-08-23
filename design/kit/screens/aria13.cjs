/* ============================================================================
   aria13.cjs - the semantics findings, recounted on the corpus that exists now.

   WHY. `docs/backlog.md` has carried a row called "eleven ARIA and form-semantics
   findings from stage 07" through four stages. It is the row that file itself
   calls "the largest piece of real WORK left, and the one row here a builder can
   simply do". Two things were true of it and only one was known: none of the
   eleven is a taste call, and ALL ELEVEN WERE COUNTED ON 28 COLOURED PAGES. The
   corpus is 55. A list of defects measured on half a product is not a list of
   that product's defects, and this repository's own rule says a claim counted off
   a corpus is recounted when the corpus grows, by script and never from memory.

   So this file does not fix the eleven. It asks the same questions of all 110
   pages and reports what is there today.

   THE CHECKS, and every one of them is a fact rather than an opinion:

     A  a <fieldset> with NO NAME AT ALL. A <legend> is the preferred mechanism
        and an aria-label is a valid one, because a fieldset maps to role `group`
        and a group does take a name from the author. The check asks for a name
        rather than for a legend: the defect is a group nobody can hear the name
        of, not a missing tag.
     B  aria-label or aria-labelledby on an element whose implicit role is
        generic - p, span, div, li with no role. ARIA DISCARDS IT. The attribute
        looks like a fix and does nothing at all, which is worse than its absence
        because it stops anybody looking again.
     C  a screen that renders skeletons and does not declare aria-busy on its
        <main>. Seven of the eight waits declare it; the eighth is the finding.
     D  a form control with no accessible name.
     E  a link or a button with no accessible name.
     F  a heading level skipped inside .app - h1 to h3 with no h2 between.

   NOT ASKED, because they are decisions rather than defects: whether a control
   that cannot be pressed should answer a pointer, whether the icon set is
   optically balanced, and every contrast question, which lives in
   `docs/tokens-audit.md` and was settled once already.

   RUN IT:  node design/kit/screens/aria13.cjs
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../..');
const { chromium } = (() => { try { return require('playwright'); } catch (e) { return require(execSync('npm root -g').toString().trim() + '/playwright'); } })();

const STANDS = ['overview.html', 'rollout.html'];
const listOf = dir => fs.readdirSync(path.join(ROOT, dir))
  .filter(f => f.endsWith('.html') && !STANDS.includes(f)).sort().map(f => dir + '/' + f);

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
const serve = () => new Promise(resolve => {
  const s = http.createServer((q, res) => {
    const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
    if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  s.listen(0, '127.0.0.1', () => resolve(s));
});

const INSPECT = () => {
  const out = [];
  const app = document.querySelector('.app') || document.body;
  const sel = (s) => [...app.querySelectorAll(s)];
  const label = (el) => {
    const by = el.getAttribute('aria-labelledby');
    if (by) { const t = by.split(/\s+/).map(id => (document.getElementById(id) || {}).textContent || '').join(' ').trim(); if (t) return t; }
    const al = (el.getAttribute('aria-label') || '').trim(); if (al) return al;
    const ti = (el.getAttribute('title') || '').trim(); if (ti) return ti;
    return (el.textContent || '').replace(/\s+/g, ' ').trim();
  };
  const where = (el) => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : '');

  sel('fieldset').forEach(f => {
    if (f.querySelector(':scope > legend')) return;
    if ((f.getAttribute('aria-label') || '').trim() || f.getAttribute('aria-labelledby')) return;
    out.push(['A', where(f), '(no legend, no aria-label)']);
  });

  const GENERIC = ['p', 'span', 'div', 'li'];
  sel('[aria-label],[aria-labelledby]').forEach(el => {
    if (!GENERIC.includes(el.tagName.toLowerCase())) return;
    if (el.getAttribute('role')) return;
    out.push(['B', where(el), (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'))]);
  });

  const main = app.querySelector('main');
  if (app.querySelector('.skel') && main && main.getAttribute('aria-busy') !== 'true') out.push(['C', 'main.' + (main.className || ''), 'renders skeletons, declares no aria-busy']);

  sel('input,select,textarea').forEach(el => {
    if (el.type === 'hidden') return;
    let n = (el.getAttribute('aria-label') || '').trim();
    if (!n && el.id) { const l = app.querySelector('label[for="' + CSS.escape(el.id) + '"]'); if (l) n = (l.textContent || '').trim(); }
    if (!n && el.closest('label')) n = (el.closest('label').textContent || '').trim();
    if (!n) out.push(['D', where(el), '#' + (el.id || '(no id)')]);
  });

  sel('a[href],button').forEach(el => { if (!label(el)) out.push(['E', where(el), '(empty accessible name)']); });

  const hs = sel('h1,h2,h3,h4,h5,h6').map(h => +h.tagName[1]);
  for (let i = 1; i < hs.length; i++) if (hs[i] > hs[i - 1] + 1) out.push(['F', 'h' + hs[i], 'follows h' + hs[i - 1]]);

  return out;
};

const NAMES = { A: 'a fieldset with no name at all', B: 'aria-label on an element ARIA discards it on',
  C: 'a wait that does not declare aria-busy', D: 'a form control with no accessible name',
  E: 'a link or button with no accessible name', F: 'a heading level skipped' };

(async () => {
  const server = await serve();
  const port = server.address().port;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const pages = [...listOf('design'), ...listOf('wireframes')];
  const found = [];
  for (const u of pages) {
    await page.goto('http://127.0.0.1:' + port + '/' + u, { waitUntil: 'load' });
    const rows = await page.evaluate(INSPECT);
    rows.forEach(r => found.push({ page: u, kind: r[0], sel: r[1], detail: r[2] }));
  }
  await browser.close(); server.close();

  /* the split is COUNTED rather than written down. It read "(55 coloured + 55
     grey)" from the day this file was made until 2026-08-23, while the total
     beside it was already live: the corpus grew to 57 and 57 and the sentence
     did not, which is the exact defect this repository's live-count rule exists
     to stop. Found at stage 13 by reading this instrument's own output. */
  const nColour = pages.filter(u => u.startsWith('design/')).length;
  const nGrey = pages.length - nColour;
  console.log('pages swept: ' + pages.length + '  (' + nColour + ' coloured + ' + nGrey + ' grey, the two stand pages excluded)');
  console.log('');
  console.log('=== FINDINGS BY KIND ===');
  for (const k of Object.keys(NAMES)) {
    const rows = found.filter(f => f.kind === k);
    console.log('  ' + k + '  ' + String(rows.length).padStart(3) + '  ' + NAMES[k]);
  }
  console.log('');
  console.log('=== DETAIL, deduped by page and kind and selector ===');
  const seen = new Set();
  for (const f of found) {
    const key = f.page + '|' + f.kind + '|' + f.sel + '|' + f.detail;
    if (seen.has(key)) continue; seen.add(key);
    console.log('  ' + f.kind + '  ' + f.page.padEnd(46) + f.sel.slice(0, 44).padEnd(46) + f.detail.slice(0, 52));
  }
  console.log('');
  console.log('total: ' + found.length + ' in ' + new Set(found.map(f => f.page)).size + ' pages');
})();
