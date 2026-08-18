/* ============================================================================
   shape12.cjs - what each coloured screen actually DOES with a wider window.

   THE AUDIT ROW STAGE 10 ASKED STAGE 12 FOR. Stage 10 wrote one row per screen
   saying what a wider screen SHOULD give the person there: SAME, WIDER by grid,
   WIDER by air, and NEW BEHAVIOUR nowhere. Seventeen of those rows were written
   against `wireframes/`, because that is where the whole product was; ten of the
   seventeen had no coloured screen to check against at all. This file checks the
   built product against them.

   WHAT IT READS, at 360 and at 1440 on every coloured page:

     pane      the width of the content carrier, `.screen` or `.landing`
     wider     every painted block whose box is wider at 1440 than at 360
     columns   every grid or wrapping flex container, and how many children
               share a line at each width. This is the difference between WIDER
               BY AIR and WIDER BY GRID, and it is the only one of the three
               that a box width alone cannot tell you.
     carrier   the form of the one navigation carrier at each width

   A SCREEN THAT ONLY GROWS ITS BOXES IS WIDER BY AIR. A screen where some
   container's children go from one per line to two or three is WIDER BY GRID.
   A screen whose pane does not move is SAME. The verdict is computed here and
   compared to the row stage 10 wrote, so a disagreement is a finding rather
   than an impression.

   RUN IT:  node design/kit/screens/shape12.cjs > design/kit/screens/shape12.txt
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../..');
const { chromium } = (() => { try { return require('playwright'); } catch (e) { return require(execSync('npm root -g').toString().trim() + '/playwright'); } })();

/* stage 10's audit, Part B of docs/responsive.md, one entry per screen */
const PLAN = {
  'Welcome (landing)': 'WIDER grid',
  'Path Choice': 'SAME',
  'Connect Bank': 'SAME',
  'Add a Subscription': 'WIDER grid',
  'Guided Reveal': 'SAME',
  'Sign In': 'SAME',
  'Home': 'WIDER grid',
  'Subscription Detail': 'WIDER grid',
  'Alerts': 'WIDER air',
  'Cancel Guide': 'WIDER air',
  'Cancel Win': 'SAME',
  'Share Snapshot': 'SAME',
  'History and Trends': 'WIDER grid',
  'Upgrade to Pro': 'WIDER grid',
  'Connections': 'SAME',
  'Data and Privacy': 'WIDER air',
  'Settings': 'SAME'
};

function pagesFromRegistry() {
  const src = fs.readFileSync(path.join(ROOT, 'design/_nav.js'), 'utf8');
  const body = src.slice(src.indexOf('var SCREENS'), src.indexOf('function stateFile'));
  const out = [];
  const re = /\{\s*name:\s*'([^']+)',\s*base:\s*'([^']+)',\s*states:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const states = m[3].split(',').map(s => s.trim().replace(/'/g, '')).filter(Boolean);
    out.push({ screen: m[1], file: m[2] });
    states.forEach(st => out.push({ screen: m[1], file: m[2].replace('.html', '-' + st + '.html'), state: st }));
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
  const painted = el => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  const name = el => el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim()
    ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '');
  const key = el => {
    /* a path that survives a width change: tag.class chain from the carrier */
    const parts = [];
    for (let n = el; n && n !== document.body; n = n.parentElement) parts.unshift(name(n));
    return parts.join('>');
  };

  const carrier = document.querySelector('.screen') || document.querySelector('.landing') || document.body;
  const pane = Math.round(carrier.getBoundingClientRect().width);

  const boxes = {};
  const cols = {};
  /* THE CARRIER ITSELF IS IN THE WALK, and leaving it out cost the first run of
     this file its most important row: the detail screen's two columns ARE the
     carrier's own children, so `.screen` going from one child per line to two
     was invisible while every descendant was measured. */
  [carrier, ...carrier.querySelectorAll('*')].forEach(el => {
    if (!painted(el)) return;
    boxes[key(el)] = Math.round(el.getBoundingClientRect().width);
    const cs = getComputedStyle(el);
    const kids = [...el.children].filter(painted);
    if (kids.length < 2) return;
    /* NO DISPLAY FILTER, and the first run of this file needed one removed
       rather than added. A container that is a plain block at 360 and a grid at
       1440 is the most interesting case there is - it is what the detail screen
       and the dashboard head do - and filtering on `display` at both ends threw
       exactly those away, because the 360 reading did not exist to compare
       against. What is measured is children per line, whatever produces it. */
    const isGrid = /grid/.test(cs.display);
    /* how many children share the topmost line */
    const top = Math.min(...kids.map(k => Math.round(k.getBoundingClientRect().top)));
    const perLine = kids.filter(k => Math.abs(Math.round(k.getBoundingClientRect().top) - top) < 4).length;
    cols[key(el)] = { n: perLine, grid: isGrid };
  });

  const bar = document.querySelector('.tabbar');
  const carrierForm = bar && painted(bar)
    ? (getComputedStyle(bar).flexDirection === 'column' || bar.getBoundingClientRect().width < 300 ? 'rail' : 'bar')
    : 'none';

  return { pane, boxes, cols, carrierForm };
};

(async () => {
  const { server, port } = await serve();
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 360, height: 900 }, deviceScaleFactor: 1 });
  /* THE SCROLLBAR IS SUPPRESSED so the container IS the width this run states: a
     container query reads the content box and a classic scrollbar sits outside
     it. Stage 10's note on the price of that is in width10.txt.
     THE GUARD IS NOT DECORATION: an init script runs before the document has an
     element to append to, and the first version of this file threw
     "Cannot read properties of null" into every page it measured. The style
     still landed, so the numbers were right and the console was lying. */
  await context.addInitScript(() => {
    const css = '::-webkit-scrollbar{width:0;height:0;display:none}html{scrollbar-width:none}*{animation-duration:0s!important;transition-duration:0s!important}';
    const put = () => {
      const root = document.head || document.documentElement;
      if (!root) return false;
      const s = document.createElement('style');
      s.textContent = css;
      root.appendChild(s);
      return true;
    };
    if (!put()) document.addEventListener('readystatechange', put, { once: true });
  });
  const page = await context.newPage();

  const rows = [];
  for (const p of pagesFromRegistry()) {
    await page.goto(`http://127.0.0.1:${port}/design/${p.file}`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.setViewportSize({ width: 360, height: 900 });
    await page.waitForTimeout(40);
    const a = await page.evaluate(PROBE);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(40);
    const b = await page.evaluate(PROBE);

    const wider = Object.keys(b.boxes).filter(k => a.boxes[k] !== undefined && b.boxes[k] > a.boxes[k] + 1);
    /* A CONTENT GRID IS NOT A CONTROL ROW, and stage 10's three categories only
       make sense with the two kept apart. `display: grid` on a block of content
       going from one child per line to three is the screen laying itself out
       differently: WIDER by grid. A `.actions` row whose two buttons stop
       stacking is `flex-wrap` doing what it does at every width it is given, and
       stage 10 counted that as air. */
    const regrid = Object.keys(b.cols)
      .filter(k => a.cols[k] !== undefined && b.cols[k].n !== a.cols[k].n)
      .map(k => ({ k, from: a.cols[k].n, to: b.cols[k].n, grid: b.cols[k].grid }));

    rows.push({
      screen: p.screen, file: p.file,
      pane360: a.pane, pane1440: b.pane,
      wider: wider.length, regrid,
      carrier: a.carrierForm + ' -> ' + b.carrierForm
    });
    process.stderr.write(`  ${p.file} (${rows.length})\n`);
  }
  await browser.close(); server.close();

  const L = [];
  const say = s => L.push(s);
  say('STAGE 12: WHAT EACH COLOURED SCREEN DOES WITH A WIDER WINDOW');
  say('Produced by design/kit/screens/shape12.cjs at a real 360 and a real 1440.');
  say('');

  const byScreen = {};
  rows.forEach(r => { (byScreen[r.screen] = byScreen[r.screen] || []).push(r); });

  say('PER SCREEN, against the row stage 10 wrote');
  say('  screen                 plan         pane 360 -> 1440   regrids  verdict');
  Object.keys(byScreen).forEach(name => {
    const ps = byScreen[name];
    const base = ps[0];
    const gridRe = [...new Set(ps.flatMap(p => p.regrid.filter(g => g.grid).map(g => g.k.split('>').pop() + ' ' + g.from + '->' + g.to)))];
    const flexRe = [...new Set(ps.flatMap(p => p.regrid.filter(g => !g.grid).map(g => g.k.split('>').pop() + ' ' + g.from + '->' + g.to)))];
    const regrids = gridRe.concat(flexRe.map(x => x + '  (a control row, wrap)'));
    /* SAME IS NOT "DOES NOT MOVE", and stage 10 said so in the same row it wrote
       the word in: its SAME screens all carry "container" in the how-column. A
       flow screen grows from a phone to --container-column, 620, and stops
       there; that IS the container answer and it is what SAME means. Past 620 a
       screen is using the pane, which is WIDER. So the pane decides SAME against
       WIDER, and a content regrid decides air against grid. */
    const COLUMN = 620;
    const wide = base.pane1440 > COLUMN + 1;
    const verdict = !wide ? (gridRe.length ? 'SAME, grid inside' : 'SAME')
      : gridRe.length ? 'WIDER grid' : 'WIDER air';
    const plan = PLAN[name] || '?';
    say(`  ${name.padEnd(22)} ${plan.padEnd(12)} ${String(base.pane360).padStart(4)} -> ${String(base.pane1440).padStart(4)}      ${String(regrids.length).padStart(2)}     ${verdict}${verdict.replace(', grid inside', '') === plan ? '' : '   <-- DIFFERS'}`);
    regrids.forEach(g => say(`      ${g}`));
  });
  say('');
  say('PER PAGE');
  rows.forEach(r => say(`  ${r.file.replace('.html', '').padEnd(34)} pane ${String(r.pane360).padStart(4)} -> ${String(r.pane1440).padStart(4)}  wider boxes ${String(r.wider).padStart(3)}  regrid ${r.regrid.length}  carrier ${r.carrier}`));
  console.log(L.join('\n'));
})();
