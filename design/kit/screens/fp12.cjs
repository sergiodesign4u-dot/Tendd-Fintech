/* ============================================================================
   fp12.cjs - the box fingerprint of the whole coloured product, before and
   after a change, at a real 360 and a real 1440.

   The rule stage 10 left behind and this stage inherits is asymmetric, and both
   halves of it are checked here: **at 360 the difference must be zero**, which
   is the promise mobile-first makes, and at 1440 every changed box has to belong
   to a named row. So this file does not judge. It records the box of every
   painted element on all 55 pages at both widths, and a second run diffs itself
   against the first.

   RUN IT:  node design/kit/screens/fp12.cjs before   (writes fp12-before.json)
            node design/kit/screens/fp12.cjs after    (writes fp12-after.json
                                                       and prints the diff)
            node design/kit/screens/fp12.cjs before shell   (a labelled pair)
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../..');
const { chromium } = (() => { try { return require('playwright'); } catch (e) { return require(execSync('npm root -g').toString().trim() + '/playwright'); } })();
const WHICH = process.argv[2] === 'after' ? 'after' : 'before';
/* AN OPTIONAL LABEL, so a second change gets its own pair instead of overwriting
   the first one's baseline. `node fp12.cjs before shell` writes
   fp12-before-shell.json, and the `after` run of the same label diffs against
   it. A record that is overwritten by the next change stops being a record. */
const LABEL = process.argv[3] ? '-' + process.argv[3].replace(/[^\w-]/g, '') : '';
const OUT = path.join(__dirname, `fp12-${WHICH}${LABEL}.json`);

function pagesFromRegistry() {
  const src = fs.readFileSync(path.join(ROOT, 'design/_nav.js'), 'utf8');
  const body = src.slice(src.indexOf('var SCREENS'), src.indexOf('function stateFile'));
  const out = [];
  const re = /\{\s*name:\s*'([^']+)',\s*base:\s*'([^']+)',\s*states:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const states = m[3].split(',').map(s => s.trim().replace(/'/g, '')).filter(Boolean);
    out.push(m[2]);
    states.forEach(st => out.push(m[2].replace('.html', '-' + st + '.html')));
  }
  return out;
}

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

const PROBE = () => {
  const out = {};
  const name = el => el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim()
    ? '.' + el.className.trim().split(/\s+/).join('.') : '');
  const walk = (el, prefix) => {
    const kids = [...el.children];
    const seen = {};
    kids.forEach(k => {
      const n = name(k);
      seen[n] = (seen[n] || 0) + 1;
      const key = prefix + '>' + n + '#' + seen[n];
      const cs = getComputedStyle(k);
      if (cs.display === 'none') return;
      const r = k.getBoundingClientRect();
      out[key] = [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)];
      walk(k, key);
    });
  };
  walk(document.body, '');
  return out;
};

(async () => {
  const { server, port } = await serve();
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 360, height: 900 }, deviceScaleFactor: 1 });
  await context.addInitScript(() => {
    const css = '::-webkit-scrollbar{width:0;height:0;display:none}html{scrollbar-width:none}*{animation:none!important;transition:none!important}';
    const put = () => {
      const root = document.head || document.documentElement;
      if (!root) return false;
      const s = document.createElement('style'); s.textContent = css; root.appendChild(s); return true;
    };
    if (!put()) document.addEventListener('readystatechange', put, { once: true });
  });
  const page = await context.newPage();

  const data = {};
  for (const file of pagesFromRegistry()) {
    await page.goto(`http://127.0.0.1:${port}/design/${file}`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    for (const w of [360, 1440]) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.waitForTimeout(40);
      data[file + '@' + w] = await page.evaluate(PROBE);
    }
    process.stderr.write(`  ${file}\n`);
  }
  await browser.close(); server.close();
  fs.writeFileSync(OUT, JSON.stringify(data));

  if (WHICH === 'before') { console.log('fp12-before.json written'); return; }

  const before = JSON.parse(fs.readFileSync(path.join(__dirname, `fp12-before${LABEL}.json`), 'utf8'));
  const L = [];
  const per = {};
  Object.keys(data).forEach(k => {
    const a = before[k] || {}, b = data[k];
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    const diff = [];
    keys.forEach(el => {
      const x = a[el], y = b[el];
      if (!x || !y) { diff.push({ el, was: x || 'absent', now: y || 'absent' }); return; }
      if (x.join(',') !== y.join(',')) diff.push({ el, was: x, now: y });
    });
    if (diff.length) per[k] = diff;
  });
  const at360 = Object.keys(per).filter(k => k.endsWith('@360'));
  const at1440 = Object.keys(per).filter(k => k.endsWith('@1440'));
  L.push('FINGERPRINT DIFF, 55 pages at 360 and at 1440');
  L.push(`  pages differing at 360:  ${at360.length}   (the promise is zero)`);
  L.push(`  pages differing at 1440: ${at1440.length}`);
  L.push(`  boxes differing at 360:  ${at360.reduce((n, k) => n + per[k].length, 0)}`);
  L.push(`  boxes differing at 1440: ${at1440.reduce((n, k) => n + per[k].length, 0)}`);
  L.push('');
  Object.keys(per).forEach(k => {
    L.push(`  ${k}  ${per[k].length} boxes`);
    per[k].slice(0, 6).forEach(d => L.push(`     ${d.el}\n        was ${d.was}  now ${d.now}`));
    if (per[k].length > 6) L.push(`     ... and ${per[k].length - 6} more`);
  });
  console.log(L.join('\n'));
})();
