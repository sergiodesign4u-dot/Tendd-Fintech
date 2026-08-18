/* ============================================================================
   inert12.cjs - "checked rather than assumed", re-checked on the whole product.

   WHY. Nine component pages carry a States section that says the same thing in
   the same shape: this thing is not a target, and here is the sweep that proves
   it. Every one of those sweeps was run when the coloured corpus was 28 or 32
   pages. The corpus is 55 now, twenty-three of them screens no sweep had ever
   touched, so each of those sentences is a true measurement of a product that no
   longer exists. Rewriting the number without re-running the sweep would be
   worse than leaving it: this file re-runs it.

   WHAT IT ASKS, per component, on all 55 coloured pages and all 55 grey ones:

     hosts     how many pages carry the class at all
     anchors   anchors, buttons and summaries INSIDE it
     itself    times the element IS an anchor, a button or a summary
     tabindex  times it or anything in it declares tabindex or a role

   A component that answers zero to the last three is inert, and the page may go
   on saying so. One that does not is a finding.

   RUN IT:  node design/kit/screens/inert12.cjs
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../..');
const { chromium } = (() => { try { return require('playwright'); } catch (e) { return require(execSync('npm root -g').toString().trim() + '/playwright'); } })();

const STANDS = ['overview.html', 'rollout.html'];
const listOf = dir => fs.readdirSync(path.join(ROOT, dir))
  .filter(f => f.endsWith('.html') && !STANDS.includes(f));

/* the classes whose pages say "checked rather than assumed", plus the two the
   brand pages assert about the shape of the element itself */
const SUBJECTS = ['.total', '.card', '.charges', '.k', '.group-head', '.pairs',
  '.promises', '.summary', '.textblock', '.wordmark', '.brand', '.tabbar', '.app'];

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
function serve() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const file = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

const PROBE = (subjects) => {
  const out = {};
  const TARGET = 'a, button, summary, [tabindex], [role]';
  subjects.forEach(sel => {
    const els = [...document.querySelectorAll(sel)];
    if (!els.length) { out[sel] = null; return; }
    let inside = 0, isTarget = 0, roles = 0;
    els.forEach(el => {
      inside += el.querySelectorAll('a, button, summary').length;
      if (el.matches('a, button, summary')) isTarget++;
      if (el.hasAttribute('tabindex') || el.hasAttribute('role')) roles++;
      roles += el.querySelectorAll('[tabindex], [role]').length;
    });
    out[sel] = { n: els.length, inside, isTarget, roles };
  });
  /* the tab bar's own two promises, asked of the page rather than of a class */
  const bars = [...document.querySelectorAll('.tabbar')];
  out['#tabbar'] = bars.length
    ? { bars: bars.length, links: bars.reduce((n, b) => n + b.querySelectorAll('a').length, 0),
        current: document.querySelectorAll('.tabbar [aria-current]').length }
    : null;
  /* the shell's landmark promise: a div.app around a main.screen, never main in main */
  const app = document.querySelector('.app');
  out['#shell'] = app ? { tag: app.tagName.toLowerCase(), mains: document.querySelectorAll('main').length } : null;
  return out;
};

(async () => {
  const { server, port } = await serve();
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();

  const tally = {};
  const notes = [];
  for (const corpus of ['design', 'wireframes']) {
    tally[corpus] = {};
    for (const file of listOf(corpus)) {
      await page.goto(`http://127.0.0.1:${port}/${corpus}/${file}`, { waitUntil: 'load' });
      const r = await page.evaluate(PROBE, SUBJECTS);
      Object.keys(r).forEach(sel => {
        if (!r[sel]) return;
        const t = tally[corpus][sel] = tally[corpus][sel] || { pages: 0, n: 0, inside: 0, isTarget: 0, roles: 0, bars: 0, links: 0, current: 0, mains: 0, divApp: 0 };
        t.pages++;
        ['n', 'inside', 'isTarget', 'roles', 'bars', 'links', 'current'].forEach(k => { if (r[sel][k]) t[k] += r[sel][k]; });
        if (sel === '#shell') { t.mains += r[sel].mains; if (r[sel].tag === 'div') t.divApp++; }
      });
      if (r['#shell'] && (r['#shell'].tag !== 'div' || r['#shell'].mains !== 1)) notes.push(`${corpus}/${file}: .app is <${r['#shell'].tag}>, ${r['#shell'].mains} main elements`);
    }
  }
  await browser.close(); server.close();

  const L = [];
  L.push('INERT CHECK, both corpora, 55 pages each. Run 2026-08-17 by inert12.cjs.');
  L.push('');
  L.push('  subject      corpus     pages  places  targets inside  is a target  tabindex/role');
  SUBJECTS.forEach(sel => {
    ['design', 'wireframes'].forEach(c => {
      const t = tally[c][sel];
      if (!t) { L.push(`  ${sel.padEnd(12)} ${c.padEnd(10)} -`); return; }
      L.push(`  ${sel.padEnd(12)} ${c.padEnd(10)} ${String(t.pages).padStart(4)}  ${String(t.n).padStart(6)}  ${String(t.inside).padStart(12)}  ${String(t.isTarget).padStart(11)}  ${String(t.roles).padStart(12)}`);
    });
  });
  L.push('');
  const tb = tally.design['#tabbar'] || {};
  L.push(`  tab bar, coloured: ${tb.pages} pages, ${tb.bars} bars, ${tb.links} links, ${tb.current} carrying aria-current`);
  const tbg = tally.wireframes['#tabbar'] || {};
  L.push(`  tab bar, grey:     ${tbg.pages} pages, ${tbg.bars} bars, ${tbg.links} links, ${tbg.current} carrying aria-current`);
  const sh = tally.design['#shell'] || {};
  L.push(`  shell, coloured:   ${sh.pages} pages, ${sh.divApp} of them with .app as a <div>, ${sh.mains} <main> elements in total`);
  const shg = tally.wireframes['#shell'] || {};
  L.push(`  shell, grey:       ${shg.pages} pages, ${shg.divApp} with .app as a <div>, ${shg.mains} <main> elements`);
  if (notes.length) { L.push(''); L.push('  EXCEPTIONS'); notes.forEach(n => L.push('    ' + n)); }
  console.log(L.join('\n'));
})();
