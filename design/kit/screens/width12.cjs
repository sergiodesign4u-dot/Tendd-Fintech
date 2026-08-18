/* ============================================================================
   width12.cjs - the width sweep of stage 12, over the WHOLE coloured product.

   WHY A SECOND SWEEP. Stage 10 swept 32 coloured pages by 58 widths and found
   five defects that three screenshots cannot see. Twenty-three pages have been
   coloured since, and not one of them has ever been walked across its range: the
   sweep is the only instrument in this repository that looks BETWEEN the two
   points, which is where a defect lives. This file is stage 10's harness with
   two changes and no third: the page list is derived from `design/_nav.js`
   rather than typed, so it can never be stale, and it drives headless Chromium
   itself instead of asking a person to press Run.

   WHAT IT READS AT EVERY STOP, the same four questions stage 10 asked:

     1  hscroll   the DOCUMENT scrollbar, scrollWidth > clientWidth. Kept because
                  it is the standard check and kept loud that it is not enough:
                  past the tablet point the shell gives `.screen` its own
                  overflow, so a layout that does not fit scrolls INSIDE the pane
                  while this flag stays false.
     2  pane      the same question asked of every scroll container on the page,
                  which is the half that found the 28px band at stage 10.
     3  out       every painted element whose box leaves the viewport.
     4  carriers  visible `.tabbar` elements and the links inside them: exactly
                  one carrier of top-level navigation at any width.
     5  ch        the reading measure of every prose leaf over 90 characters, in
                  ch, using the element's OWN computed font.

   A FRESH ORIGIN IS PART OF THE INSTRUMENT: it serves on an ephemeral port and
   the browser is launched clean, so a cached stylesheet cannot produce a clean
   run that is a lie.

   RUN IT:  node design/kit/screens/width12.cjs > design/kit/screens/width12.txt
            node design/kit/screens/width12.cjs --pages home,alerts   (a subset)
            node design/kit/screens/width12.cjs --widths 320,768,1440 (a subset)
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../..');
/* LOCAL FIRST, GLOBAL AFTER, since 2026-08-18: a receiver who runs `npm install`
   in this repository gets playwright in `node_modules/` and never had a global
   one, and the stage 13 census found this line naming an absolute path inside one
   machine's npm cache. The fallback is kept because the machine this was written
   on has no local install and the instruments must keep running there too. */
const { chromium } = (() => { try { return require('playwright'); } catch (e) {
  return require(execSync('npm root -g').toString().trim() + '/playwright'); } })();

const argv = process.argv.slice(2);
const argOf = name => {
  const i = argv.indexOf('--' + name);
  return i >= 0 ? argv[i + 1] : null;
};

/* --- the page list, derived from the coloured screen registry -------------- */
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

let PAGES = pagesFromRegistry();
const only = argOf('pages');
if (only) {
  const wanted = only.split(',');
  PAGES = PAGES.filter(p => wanted.includes(p.file.replace('.html', '')));
}

/* --- the widths, stage 10's set ------------------------------------------- */
let WIDTHS = (() => {
  const s = [];
  for (let w = 320; w <= 1920; w += 40) s.push(w);
  [730, 740, 750, 770, 780, 790, 450, 460, 470, 890, 900, 910, 960, 963, 965, 1305, 1311, 1315]
    .forEach(x => { if (s.indexOf(x) < 0) s.push(x); });
  return s.sort((a, b) => a - b);
})();
const wArg = argOf('widths');
if (wArg) WIDTHS = wArg.split(',').map(Number);

/* --- a static server on an ephemeral port ---------------------------------- */
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.json': 'application/json' };
function serve() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const rel = decodeURIComponent(req.url.split('?')[0]);
      const file = path.join(ROOT, rel);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404); res.end('not found'); return;
      }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

/* --- what is read in the page --------------------------------------------- */
const PROBE = () => {
  const vw = document.documentElement.clientWidth;
  const doc = document.documentElement;

  const painted = el => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  /* 1 + 2: the document, then every scroll container on the page */
  const hscroll = doc.scrollWidth > doc.clientWidth + 1;
  const panes = [];
  document.querySelectorAll('*').forEach(el => {
    if (!painted(el)) return;
    const cs = getComputedStyle(el);
    const scrolls = /(auto|scroll)/.test(cs.overflowX) || /(auto|scroll)/.test(cs.overflow);
    if (scrolls && el.scrollWidth > el.clientWidth + 1) {
      panes.push({
        sel: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''),
        by: el.scrollWidth - el.clientWidth
      });
    }
  });

  /* 3: elements leaving the viewport.
     CLIPPED IS NOT OUT. A marquee track is wider than the window on purpose and
     runs inside a box with `overflow: hidden`; nothing of it is visible past the
     edge and nothing of it can scroll the page. The first run of this file
     reported the landing's orbit at all 58 widths for exactly that reason. So an
     element counts as out only when no ancestor clips it, and the clipped ones
     are counted separately rather than dropped in silence. */
  const out = [];
  let clipped = 0;
  const isClipped = el => {
    const r = el.getBoundingClientRect();
    for (let p = el.parentElement; p && p !== document.documentElement; p = p.parentElement) {
      const cs = getComputedStyle(p);
      if (!/hidden|clip|scroll|auto/.test(cs.overflowX)) continue;
      const pr = p.getBoundingClientRect();
      if (r.right > pr.right + 1 || r.left < pr.left - 1) return true;
    }
    return false;
  };
  const scope = document.querySelector('.app') || document.querySelector('.landing') || document.body;
  scope.querySelectorAll('*').forEach(el => {
    if (!painted(el)) return;
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) {
      if (isClipped(el)) { clipped++; return; }
      out.push({
        sel: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : ''),
        right: Math.round(r.right), left: Math.round(r.left)
      });
    }
  });

  /* 4: carriers of top-level navigation */
  let carriers = 0, links = 0;
  document.querySelectorAll('.tabbar').forEach(el => {
    if (!painted(el)) return;
    carriers++;
    links += [...el.querySelectorAll('a')].filter(painted).length;
  });

  /* 5: the reading measure of prose leaves */
  let worst = null;
  const leaves = document.querySelectorAll('p, li, h1, h2, h3, dd, blockquote');
  leaves.forEach(el => {
    if (el.querySelector('p, li, h1, h2, h3')) return;
    const text = (el.textContent || '').trim();
    if (text.length < 90) return;
    if (!painted(el)) return;
    const cs = getComputedStyle(el);
    /* A LINE IS NOT A ROW, and this filter is the difference between a reading
       measure and a number. A `p` that is itself a flex or grid box holds items
       side by side, not a sentence, and its box width says nothing about how far
       an eye travels: the ruled meta row on cancel-guide read 94.7ch that way in
       the first run of this file, and what it actually holds is two spans. The
       same for a list row whose children are blocks. So: the element lays its
       own text out inline, no child of it is a block, and most of the text is
       the element's own rather than a child's. */
    if (/flex|grid/.test(cs.display)) return;
    const blockChild = [...el.children].some(c => {
      const d = getComputedStyle(c).display;
      return /block|flex|grid|list-item|table/.test(d);
    });
    if (blockChild) return;
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim().length;
    if (own / text.length < 0.6) return;
    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;';
    probe.style.font = cs.font || (cs.fontWeight + ' ' + cs.fontSize + '/' + cs.lineHeight + ' ' + cs.fontFamily);
    probe.textContent = '0';
    document.body.appendChild(probe);
    const ch = probe.getBoundingClientRect().width || 8;
    probe.remove();
    /* THE CONTENT BOX AND NOT THE BORDER BOX. `box-sizing` is border-box
       everywhere here, so a leaf with a gutter - the numbered step carries 40px
       for its numeral - reads wider than the line a person's eye actually
       crosses. The first run after stage 12's fixes reported that step at 56.5ch
       when the words were at 52: the cap was right and the ruler was wrong. */
    const pad = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const measure = (el.getBoundingClientRect().width - (isNaN(pad) ? 0 : pad)) / ch;
    if (!worst || measure > worst.ch) {
      worst = {
        ch: Math.round(measure * 10) / 10,
        px: Math.round(el.getBoundingClientRect().width - (isNaN(pad) ? 0 : pad)),
        sel: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : '')
      };
    }
  });

  return { hscroll, panes, out, clipped, carriers, links, worst };
};

/* --- the run --------------------------------------------------------------- */
(async () => {
  const { server, port } = await serve();
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 360, height: 900 }, deviceScaleFactor: 1 });
  /* the scrollbar is suppressed so the container IS the width this run states:
     a container query reads the content box, and a classic scrollbar sits
     outside it. Stage 10's note on the price of this is on width10.txt. */
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

  const findings = [];
  const perPage = [];
  const t0 = Date.now();

  for (const p of PAGES) {
    await page.goto(`http://127.0.0.1:${port}/design/${p.file}`, { waitUntil: 'load' });
    await page.waitForTimeout(60);
    const rec = { file: p.file, screen: p.screen, hscroll: [], panes: [], out: [], clipped: 0, carriers: {}, worst: null };
    for (const w of WIDTHS) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.waitForTimeout(12);
      const r = await page.evaluate(PROBE);
      if (r.hscroll) rec.hscroll.push(w);
      if (r.panes.length) rec.panes.push({ w, panes: r.panes });
      if (r.out.length) rec.out.push({ w, out: r.out.slice(0, 4) });
      if (r.clipped > rec.clipped) rec.clipped = r.clipped;
      const key = r.carriers + '/' + r.links;
      rec.carriers[key] = (rec.carriers[key] || 0) + 1;
      if (r.worst && (!rec.worst || r.worst.ch > rec.worst.ch)) rec.worst = { ...r.worst, w };
    }
    perPage.push(rec);
    if (rec.hscroll.length || rec.panes.length || rec.out.length || Object.keys(rec.carriers).length > 1)
      findings.push(rec);
    process.stderr.write(`  ${p.file} done (${perPage.length}/${PAGES.length})\n`);
  }

  await browser.close();
  server.close();

  /* --- the ledger ---------------------------------------------------------- */
  const L = [];
  const say = s => L.push(s);
  say('STAGE 12 WIDTH SWEEP, the whole coloured product.');
  say('Produced by design/kit/screens/width12.cjs, headless Chromium, scrollbar suppressed.');
  say('');
  say(`${PAGES.length} pages x ${WIDTHS.length} widths = ${PAGES.length * WIDTHS.length} measurements`);
  say(`widths: ${WIDTHS.join(' ')}`);
  say(`run took ${Math.round((Date.now() - t0) / 1000)}s`);
  say('');
  say('VIOLATIONS');
  if (!findings.length) {
    say('  none');
    say('  no document scrolls sideways at any stop');
    say('  no pane scrolls sideways at any stop');
    say('  no element leaves the viewport at any stop');
    say('  no page changes the number of navigation carriers with width');
  } else findings.forEach(f => {
    say(`  ${f.file}`);
    if (f.hscroll.length) say(`     document scrolls sideways at ${f.hscroll.join(', ')}`);
    f.panes.slice(0, 3).forEach(x => say(`     pane scrolls at ${x.w}: ${x.panes.map(q => q.sel + ' by ' + q.by).join('; ')}`));
    if (f.panes.length > 3) say(`     ... and ${f.panes.length - 3} more widths`);
    f.out.slice(0, 3).forEach(x => say(`     leaves the viewport at ${x.w}: ${x.out.map(q => q.sel + ' right ' + q.right).join('; ')}`));
    if (f.out.length > 3) say(`     ... and ${f.out.length - 3} more widths`);
    if (Object.keys(f.carriers).length > 1) say(`     carrier states: ${JSON.stringify(f.carriers)}`);
  });
  say('');
  say('CARRIER OF TOP-LEVEL NAVIGATION, distinct states across all widths');
  const byCarrier = {};
  perPage.forEach(p => {
    const k = Object.keys(p.carriers).sort().join(' + ');
    (byCarrier[k] = byCarrier[k] || []).push(p.file.replace('.html', ''));
  });
  Object.keys(byCarrier).sort().forEach(k => {
    say(`  ${k.padEnd(10)} ${String(byCarrier[k].length).padStart(3)} pages`);
    say(`     ${byCarrier[k].join(', ')}`);
  });
  say('');
  const clippedPages = perPage.filter(p => p.clipped);
  say('CLIPPED AND THEREFORE NOT COUNTED AS OUT');
  if (!clippedPages.length) say('  none');
  else clippedPages.forEach(p => say(`  ${p.file.replace('.html', '').padEnd(34)} up to ${p.clipped} elements run past the window inside a box that hides them`));
  say('');
  say('WORST READING MEASURE PER SCREEN, in ch, with the width it was worst at');
  const worstAll = perPage.filter(p => p.worst).sort((a, b) => b.worst.ch - a.worst.ch);
  worstAll.slice(0, 20).forEach(p => {
    say(`  ${String(p.worst.ch).padStart(5)}ch  ${String(p.worst.px).padStart(4)}px at ${String(p.worst.w).padStart(4)}  ${p.file.replace('.html', '').padEnd(34)} ${p.worst.sel}`);
  });
  say(`  (${worstAll.length} pages carry a prose leaf over 90 characters; the rest carry none)`);
  say('');
  say('PER SCREEN, the audit row stage 10 asked stage 12 for');
  const byScreen = {};
  perPage.forEach(p => { (byScreen[p.screen] = byScreen[p.screen] || []).push(p); });
  Object.keys(byScreen).forEach(name => {
    const ps = byScreen[name];
    const carriers = [...new Set(ps.flatMap(p => Object.keys(p.carriers)))].join(' + ');
    const worst = ps.filter(p => p.worst).sort((a, b) => b.worst.ch - a.worst.ch)[0];
    const bad = ps.filter(p => p.hscroll.length || p.panes.length || p.out.length).map(p => p.file);
    say(`  ${name.padEnd(22)} ${String(ps.length).padStart(2)} pages  carrier ${carriers.padEnd(8)} worst ${worst ? (worst.worst.ch + 'ch on ' + worst.file.replace('.html','') + ' at ' + worst.worst.w + ' (' + worst.worst.sel + ')') : 'no prose leaf'}${bad.length ? '  VIOLATIONS on ' + bad.join(', ') : ''}`);
  });
  say('');
  say('EVERY PROSE LEAF PAST THE 52ch MEASURE');
  const over = perPage.filter(p => p.worst && p.worst.ch > 52.5).sort((a, b) => b.worst.ch - a.worst.ch);
  if (!over.length) say('  none');
  over.forEach(p => say(`  ${String(p.worst.ch).padStart(5)}ch  ${String(p.worst.px).padStart(4)}px at ${String(p.worst.w).padStart(4)}  ${p.file.replace('.html', '').padEnd(34)} ${p.worst.sel}`));
  say('');
  say('PER PAGE, one line each');
  perPage.forEach(p => {
    const clean = !p.hscroll.length && !p.panes.length && !p.out.length && Object.keys(p.carriers).length === 1;
    say(`  ${clean ? 'ok  ' : 'BAD '} ${p.file.replace('.html', '').padEnd(34)} carrier ${Object.keys(p.carriers).join('+').padEnd(6)} worst ${p.worst ? p.worst.ch + 'ch' : '-'}`);
  });

  console.log(L.join('\n'));
})();
