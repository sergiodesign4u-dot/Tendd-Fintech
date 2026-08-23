/* ============================================================================
   a11y13.cjs - the accessibility checklist of stage 13, run rather than recalled.

   WHY THIS FILE EXISTS. Accessibility in this product was not added at the end:
   it was built at stages 08 to 11, in the focus token, in the contrast pairs of
   both themes, in the two points being `rem`, and in the reduced-motion block.
   A handoff that merely LISTS that has written a plan and called it a proof.
   The rule this stage works under is that "confirmed" means a run TODAY with a
   named instrument, and a line for which no instrument can be named never gets
   the word at all.

   So this file is the instrument for the four claims that had none:

     1 CONTRAST   every visible text node, its effective ink against the first
                  opaque surface behind it, by the WCAG formula, in BOTH themes.
                  Thresholds by surface: 4.5:1 body ink, 3:1 large ink
                  (>=24px, or >=18.66px at 700+), 3:1 a border or a fill.
     2 FOCUS      a real TAB pass. Every element the keyboard can reach, in both
                  themes, asked whether an indicator exists and whether it is
                  visible against what it sits on (3:1, WCAG 1.4.11). Reported
                  by CONTROL TYPE rather than by page, because the question is
                  "does every kind of control answer the keyboard".
     3 MOTION     the same screens under emulated prefers-reduced-motion: reduce,
                  computed. Every transition and animation duration read back,
                  and every infinite iteration count hunted.
     4 ZOOM       WCAG 1.4.4: the browser's font size doubled to 32px, the page
                  asked whether it now scrolls sideways. This is the check the
                  two `rem` points of stage 10 exist to pass.

   NOT ASKED HERE, because instruments already own them and this file cites them
   rather than repeating them: semantics and accessible names (`aria13.cjs`),
   tap-target size and label wrapping (`quality13.cjs`), the width sweep
   (`width12.cjs`), the right edges (`edges13.cjs`).

   THIS FILE FIXES NOTHING. A failure is a row for `design/kit/docs/backlog.md`
   and a decision for the founder. The product was accepted at stage 12 and an
   edit here would void every pixel comparison it stands on.

   RUN IT:  node design/kit/screens/a11y13.cjs
            node design/kit/screens/a11y13.cjs --json
            node design/kit/screens/a11y13.cjs --fast   (a 12-screen spine)
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = path.resolve(__dirname, '../../..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const list = (dir, ext) => fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith(ext)).sort();

function playwright() {
  try { return require(path.join(ROOT, 'node_modules', 'playwright')); } catch (e) {}
  try { return require('playwright'); } catch (e) {}
  const { execSync } = require('child_process');
  try {
    const g = execSync('npm root -g', { encoding: 'utf8' }).trim();
    return require(path.join(g, 'playwright'));
  } catch (e) {}
  console.error('playwright not found. Run `npm install` in the repository root.');
  process.exit(1);
}

/* THE PRODUCT CORPUS IS READ OFF THE REGISTRY, since 2026-08-23, and not off a typed list of
   what to leave out. `design/_nav.js` names every coloured screen and its states, and a file it
   does not name is not a product screen whatever it is called. The exclusion used to be the
   literal ['overview.html', 'rollout.html'], which meant that the next page added beside the
   screens would silently join the product corpus and be measured as one. Found by the read-only
   pass of stage 13, whose sharpest form of it was that map13.cjs promised in its own header that
   nothing here is typed by hand. The two names are still computed and printed, so a page that
   drops out of the registry is visible rather than merely absent. */
const NAV_SRC = fs.readFileSync(path.join(ROOT, 'design', '_nav.js'), 'utf8');
const REGISTERED = (() => {
  const set = new Set();
  for (const m of NAV_SRC.matchAll(/base:\s*'([^']+)'\s*,\s*states:\s*\[([^\]]*)\]/g)) {
    const base = m[1];
    set.add(base);
    for (const s of m[2].matchAll(/'([^']+)'/g)) set.add(base.replace('.html', '') + '-' + s[1] + '.html');
  }
  return set;
})();
const isProductScreen = f => REGISTERED.has(f);
const ALL = list('design', '.html').filter(isProductScreen);
/* the spine: one screen of every shape the product has, for --fast */
const SPINE = ['index.html', 'path-choice.html', 'connect-bank.html', 'add-subscription.html',
  'guided-reveal.html', 'home.html', 'home-loading.html', 'subscription-detail.html',
  'alerts.html', 'history-trends.html', 'upgrade.html', 'settings.html']
  .filter(f => ALL.includes(f));
const ONLY = (process.argv.find(a => a.startsWith('--only=')) || '').replace('--only=', '');
const SCREENS = ONLY ? ONLY.split(',').filter(f => ALL.includes(f))
  : process.argv.includes('--fast') ? SPINE : ALL;
const THEMES = ['light', 'dark'];

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2' };
function serve() {
  return new Promise(resolve => {
    const s = http.createServer((req, res) => {
      const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
      fs.readFile(p, (err, buf) => {
        if (err) { res.writeHead(404); res.end(); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
        res.end(buf);
      });
    });
    s.listen(0, '127.0.0.1', () => resolve({ server: s, port: s.address().port }));
  });
}

/* ---- the page-side helpers, one string, injected once per page ------------- */
const HELPERS = `
window.__a11y = (function () {
  function parse(c) {
    var m = String(c).match(/rgba?\\(([^)]+)\\)/);
    if (!m) return null;
    var p = m[1].split(',').map(function (x) { return parseFloat(x); });
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }
  function over(fg, bg) {           // fg composited onto an opaque bg
    var a = fg.a;
    return { r: fg.r * a + bg.r * (1 - a), g: fg.g * a + bg.g * (1 - a), b: fg.b * a + bg.b * (1 - a), a: 1 };
  }
  function lum(c) {
    var s = [c.r, c.g, c.b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
  }
  function ratio(a, b) {
    var l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  /* the first OPAQUE surface behind an element, composited through every
     translucent layer between. A ratio taken against a transparent background
     is the commonest way a contrast check lies. */
  function surfaceOf(el) {
    var layers = [], n = el;
    while (n && n !== document.documentElement) {
      var cs = getComputedStyle(n);
      /* A MASKED BACKGROUND IS NOT A SURFACE. The destination icons are painted
         as background-color through a mask, so the box is mostly not there. Read
         as a surface it becomes the backdrop of the alerts dot sitting on it and
         returns 1.00, the worst number in the product, for a mark that in fact
         sits on the tab bar. */
      var masked = (cs.maskImage && cs.maskImage !== 'none') ||
                   (cs.webkitMaskImage && cs.webkitMaskImage !== 'none');
      var bg = masked ? null : parse(cs.backgroundColor);
      if (bg && bg.a > 0) { layers.push(bg); if (bg.a === 1) break; }
      n = n.parentElement;
    }
    var base = parse(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 };
    if (base.a < 1) base = { r: 255, g: 255, b: 255, a: 1 };
    var out = base;
    for (var i = layers.length - 1; i >= 0; i--) out = over(layers[i], out);
    return out;
  }
  function visible(el) {
    var s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) === 0) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }
  function label(el) {
    var c = el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '';
    return el.tagName.toLowerCase() + c;
  }
  return {
    ratio: ratio, parse: parse, surfaceOf: surfaceOf, visible: visible, label: label,

    /* --- 1. contrast ---------------------------------------------------- */
    /* rootSel ADDED 2026-08-23, and no backticks in this comment on purpose: the
       whole block is a template literal and one of them ends it.
       This function used to root itself at the app or the landing and return
       nothing when it found neither, which is every page in this repository that
       is not a product screen. That is how a WCAG AA failure sat unmeasured on
       twenty stage pages for the whole project: the corpus never included them,
       AND the walker would have refused them anyway. One argument, one edition of
       the contrast machinery, and check 5 below is its consumer. */
    text: function (rootSel) {
      var out = [];
      var root = rootSel ? document.querySelector(rootSel)
                         : (document.querySelector('.app') || document.querySelector('.landing'));
      if (!root) return out;
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      var seen = new Set(), node;
      while ((node = walker.nextNode())) {
        if (!node.nodeValue || !node.nodeValue.trim()) continue;
        var el = node.parentElement;
        if (!el || seen.has(el) || !visible(el)) continue;
        seen.add(el);
        var s = getComputedStyle(el);
        /* font-size 0 is not text. The nav row's chevron is a size-zero glyph
           whose visible mark is a masked BACKGROUND painted in currentColor, so
           measuring its text node against its own colour returns 1.00 and reads
           as the worst failure in the product. It is measured as a mark below
           instead, which is what it is. */
        if (parseFloat(s.fontSize) < 1) continue;
        /* A DISABLED CONTROL IS EXEMPT, and WCAG says so rather than this file:
           1.4.3 excludes text that is part of an inactive user interface
           component. The concept page draws one on purpose, to show what the
           disabled state looks like, and reading it as a failure would make the
           check unreadable to keep a rule the standard does not have. */
        if (el.closest('[disabled],:disabled,[aria-disabled="true"]')) continue;
        var fg = parse(s.color); if (!fg) continue;
        var surf = surfaceOf(el);
        var ink = fg.a < 1 ? over(fg, surf) : fg;
        var size = parseFloat(s.fontSize), weight = parseInt(s.fontWeight, 10) || 400;
        var large = size >= 24 || (size >= 18.66 && weight >= 700);
        var hex = function (c) { return '#' + [c.r, c.g, c.b].map(function (v) {
          return ('0' + Math.round(v).toString(16)).slice(-2); }).join(''); };
        out.push({ sel: label(el), size: size, weight: weight, large: large,
                   ink: hex(ink), surface: hex(surf),
                   ratio: Math.round(ratio(ink, surf) * 100) / 100, need: large ? 3 : 4.5,
                   text: node.nodeValue.trim().slice(0, 40) });
      }
      return out;
    },
    /* NON-TEXT, WCAG 1.4.11, and the SCOPE is the whole question. 1.4.11 asks
       3:1 of "visual information required to identify user interface components
       and states" and of meaningful graphics. A divider between two list rows is
       neither: it is decoration, and this product's hairlines are deliberately
       soft. Asking 3:1 of every border in the tree returns 280 failures, none of
       them real, and a check that cries wolf is a check people stop reading.
       So the scope here is exactly two things:
         a  the border of an INTERACTIVE element or a form control, which is what
            tells a person where the control is
         b  a meaningful MARK painted as a background rather than as text: the
            destination icons, the nav row's chevron, the alerts dot */
    nonText: function () {
      var out = [];
      var root = document.querySelector('.app') || document.querySelector('.landing');
      if (!root) return out;
      var CONTROL = 'a, button, input, select, textarea, summary, [role="button"], [tabindex]';
      root.querySelectorAll(CONTROL).forEach(function (el) {
        if (!visible(el)) return;
        var s = getComputedStyle(el);
        var w = Math.max(parseFloat(s.borderTopWidth) || 0, parseFloat(s.borderBottomWidth) || 0,
                         parseFloat(s.borderLeftWidth) || 0, parseFloat(s.borderRightWidth) || 0);
        if (w <= 0) return;
        var bc = parse(s.borderTopColor);
        if (!bc || bc.a === 0) bc = parse(s.borderBottomColor);
        if (!bc || bc.a === 0) return;
        var behind = el.parentElement ? surfaceOf(el.parentElement) : surfaceOf(el);
        var line = bc.a < 1 ? over(bc, behind) : bc;
        out.push({ sel: label(el), kind: 'control border', ratio: Math.round(ratio(line, behind) * 100) / 100, need: 3 });
      });
      root.querySelectorAll('.ic, .arrow, .dot, .check').forEach(function (el) {
        if (!visible(el)) return;
        var s = getComputedStyle(el);
        var behind = el.parentElement ? surfaceOf(el.parentElement) : surfaceOf(el);
        /* A RING IS THE MARK WHERE THERE IS A RING. The chart cursor is a donut:
           its fill is the surface colour on purpose and the petrol border is the
           thing a person sees. Measured as a fill it returns 1.00 against the
           card it sits on, which is the design working rather than failing. */
        var bw = Math.max(parseFloat(s.borderTopWidth) || 0, parseFloat(s.borderBottomWidth) || 0);
        var bc = parse(s.borderTopColor);
        var col, kind;
        if (bw > 0 && bc && bc.a > 0) { col = bc; kind = 'mark ring'; }
        else { col = parse(s.backgroundColor); kind = 'mark fill'; }
        if (!col || col.a === 0) return;
        var mark = col.a < 1 ? over(col, behind) : col;
        out.push({ sel: label(el), kind: kind, ratio: Math.round(ratio(mark, behind) * 100) / 100, need: 3 });
      });
      return out;
    },
    /* --- 2. focus -------------------------------------------------------- */
    /* THE RING IS NOT ALWAYS ON THE FOCUSED ELEMENT, and a check that assumes it
       is reports the product's most carefully built control as unreachable. A
       preference switch stands its own ring down and the ROW draws it through
       :has(input:focus-visible), which is two lines in two files and the only
       way to avoid two concentric rings on every preference. So the indicator is
       looked for on the focused element and then up to three ancestors, and the
       element that actually carries it is named. */
    focusInfo: function () {
      var el = document.activeElement;
      if (!el || el === document.body) return null;
      function ringOf(n) {
        var s = getComputedStyle(n);
        var ow = parseFloat(s.outlineWidth) || 0;
        var oc = parse(s.outlineColor);
        var shadow = s.boxShadow && s.boxShadow !== 'none';
        if (ow > 0 && s.outlineStyle !== 'none' && oc && oc.a > 0) {
          var behind = n.parentElement ? surfaceOf(n.parentElement) : surfaceOf(n);
          var ring = oc.a < 1 ? over(oc, behind) : oc;
          return { ow: ow, style: s.outlineStyle, shadow: shadow,
                   ratio: Math.round(ratio(ring, behind) * 100) / 100 };
        }
        if (shadow) return { ow: 0, style: s.outlineStyle, shadow: true, ratio: null };
        return null;
      }
      var n = el, hops = 0, found = null;
      while (n && hops <= 3) { found = ringOf(n); if (found) break; n = n.parentElement; hops++; }
      var s0 = getComputedStyle(el);
      return { sel: label(el), tag: el.tagName.toLowerCase(),
               outlineWidth: found ? found.ow : (parseFloat(s0.outlineWidth) || 0),
               outlineStyle: found ? found.style : s0.outlineStyle,
               shadow: found ? found.shadow : (s0.boxShadow !== 'none'),
               on: found && n !== el ? label(n) : 'itself',
               hops: found ? hops : null,
               ratio: found ? found.ratio : null, need: 3 };
    },
    /* --- 3. motion ------------------------------------------------------- */
    motion: function () {
      var out = [];
      var root = document.querySelector('.app') || document.querySelector('.landing') || document.body;
      root.querySelectorAll('*').forEach(function (el) {
        var s = getComputedStyle(el);
        var td = (s.transitionDuration || '').split(',').map(function (x) { return parseFloat(x) || 0; });
        var ad = (s.animationDuration || '').split(',').map(function (x) { return parseFloat(x) || 0; });
        var it = (s.animationIterationCount || '').split(',').map(function (x) { return x.trim(); });
        var maxT = Math.max.apply(null, td.concat(0));
        var maxA = Math.max.apply(null, ad.concat(0));
        var inf = it.indexOf('infinite') !== -1 && maxA > 0;
        if (maxT > 0 || maxA > 0) out.push({ sel: label(el), t: maxT, a: maxA, infinite: inf });
      });
      return out;
    },
    sideways: function () {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    }
  };
})();
`;

const THEME_INIT = t => `try{localStorage.setItem('tendd-screen-theme','${t}');localStorage.setItem('tendd-kit-theme','${t}');}catch(e){}
document.addEventListener('DOMContentLoaded',function(){document.documentElement.setAttribute('data-theme','${t}');});
document.documentElement.setAttribute('data-theme','${t}');`;

(async () => {
  const { chromium } = playwright();
  const { server, port } = await serve();
  const browser = await chromium.launch();

  const contrastFails = [];
  const lineFails = [];
  const focusByType = new Map();     // "type|theme" -> {seen, noIndicator, weak, minRatio}
  const focusFails = [];
  const motionLive = new Map();      // sel -> max duration seen with motion allowed
  const motionReduced = [];
  const zoomFails = [];
  let textNodes = 0, lineNodes = 0, tabStops = 0;

  for (const theme of THEMES) {
    /* MEASURED WITH MOTION OFF, and this is the fix for the only real bug this
       instrument had. base.css transitions background-color, border-color and
       color over --dur-state on every interactive element, so re-asserting the
       theme starts a 150ms cross-fade on the whole page. Sampled inside it, ink
       from one theme is compared against a surface halfway to the other, and the
       run reports catastrophic failures that move to different screens every
       time. Emulating prefers-reduced-motion makes the product's own reduce
       block zero every duration, so the colours are final the moment they are
       set. It changes no colour: motion has no theme axis, which is rule 6. */
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, colorScheme: 'light', reducedMotion: 'reduce' });
    await ctx.addInitScript(THEME_INIT(theme));
    const page = await ctx.newPage();

    for (const file of SCREENS) {
      await page.goto(`http://127.0.0.1:${port}/design/${file}`, { waitUntil: 'load' });
      /* THE THEME IS RE-ASSERTED HERE AND THE MEASUREMENT WAITS A FRAME, and
         that is not belt and braces. Every screen boots its own theme from
         localStorage in a pre-paint script and the reviewer's chrome sets it
         again when its script runs; measured across a flip, some elements read
         one theme's ink against the other theme's surface, and a long run
         reported sixteen catastrophic contrast failures on two screens that
         measure clean when either is opened alone. An instrument that is right
         only most of the time is worse than none, because the report looks the
         same either way. */
      await page.evaluate(t => document.documentElement.setAttribute('data-theme', t), theme);
      await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
      await page.waitForTimeout(120);
      await page.addScriptTag({ content: HELPERS });

      /* 1. contrast */
      const text = await page.evaluate(() => window.__a11y.text());
      textNodes += text.length;
      text.forEach(t => { if (t.ratio < t.need) contrastFails.push({ file, theme, ...t }); });
      const lines = await page.evaluate(() => window.__a11y.nonText());
      lineNodes += lines.length;
      lines.forEach(l => { if (l.ratio < l.need) lineFails.push({ file, theme, ...l }); });

      /* 2. focus, a real tab pass */
      await page.evaluate(() => { const a = document.querySelector('.app, .landing'); if (a) a.scrollIntoView(); });
      await page.keyboard.press('Tab');
      for (let i = 0; i < 40; i++) {
        const info = await page.evaluate(() => window.__a11y.focusInfo());
        if (!info) break;
        tabStops++;
        const type = info.sel.split('.').slice(0, 2).join('.') || info.tag;
        const key = type + '|' + theme;
        if (!focusByType.has(key)) focusByType.set(key, { type, theme, seen: 0, none: 0, weak: 0, min: 99 });
        const rec = focusByType.get(key);
        rec.seen++;
        const hasRing = (info.outlineWidth > 0 && info.outlineStyle !== 'none') || info.shadow;
        if (!hasRing && !info.shadow) { rec.none++; focusFails.push({ file, theme, ...info, why: 'no indicator' }); }
        else if (info.ratio !== null) {
          rec.min = Math.min(rec.min, info.ratio);
          if (info.ratio < 3) { rec.weak++; focusFails.push({ file, theme, ...info, why: 'indicator under 3:1' }); }
        }
        await page.keyboard.press('Tab');
      }

    }
    await ctx.close();
  }

  /* 3a. motion, ALLOWED, and it needs a context of its own. The two theme
     contexts above run with prefers-reduced-motion emulated, because that is
     what makes a colour reading stable; measuring the baseline inside them
     would report the product's own reduce block as the product's motion, which
     is a check that always passes and proves nothing. */
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await ctx.addInitScript(THEME_INIT('light'));
    const page = await ctx.newPage();
    for (const file of SCREENS) {
      await page.goto(`http://127.0.0.1:${port}/design/${file}`, { waitUntil: 'load' });
      await page.addScriptTag({ content: HELPERS });
      const live = await page.evaluate(() => window.__a11y.motion());
      live.forEach(m => {
        const k = m.sel;
        const cur = motionLive.get(k) || { t: 0, a: 0, infinite: false };
        motionLive.set(k, { t: Math.max(cur.t, m.t), a: Math.max(cur.a, m.a), infinite: cur.infinite || m.infinite });
      });
    }
    await ctx.close();
  }

  /* 3b. motion, reduced. One theme is enough: motion has no theme axis, which is
     rule 6 of design/system/CLAUDE.md, and this run is also the check of it. */
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    await ctx.addInitScript(THEME_INIT('light'));
    const page = await ctx.newPage();
    for (const file of SCREENS) {
      await page.goto(`http://127.0.0.1:${port}/design/${file}`, { waitUntil: 'domcontentloaded' });
      await page.addScriptTag({ content: HELPERS });
      const m = await page.evaluate(() => window.__a11y.motion());
      m.forEach(x => { if (x.t > 0.05 || x.a > 0.05 || x.infinite) motionReduced.push({ file, ...x }); });
    }
    await ctx.close();
  }

  /* 4. zoom 200%: the browser's own font size doubled, both widths */
  {
    for (const width of [390, 1440]) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 } });
      await ctx.addInitScript(THEME_INIT('light'));
      const page = await ctx.newPage();
      await page.addInitScript(`document.addEventListener('DOMContentLoaded',function(){document.documentElement.style.fontSize='32px';});`);
      for (const file of SCREENS) {
        await page.goto(`http://127.0.0.1:${port}/design/${file}`, { waitUntil: 'domcontentloaded' });
        await page.evaluate(() => { document.documentElement.style.fontSize = '32px'; });
        await page.addScriptTag({ content: HELPERS });
        const bad = await page.evaluate(() => window.__a11y.sideways());
        if (bad) {
          const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
          zoomFails.push({ file, width, over });
        }
      }
      await ctx.close();
    }
  }

  /* ==========================================================================
     5. THE PAGES AROUND THE PRODUCT.  Added 2026-08-23.

     Everything above reads the 57 coloured screens. `aria13.cjs` reads those and
     their 57 grey twins. NOTHING in this repository has ever read a stage
     account, a stand page or an IA node - and a receiver meets those pages before
     any product screen, because the roadmap is how they arrive.

     What that blind spot cost is one measured number: `.nav-section` in
     `/_nav.css`, the sub-links under the active stage, were drawn in the grey the
     registry reserves for a stage nobody can open yet. 2.65:1 at 13px, on twenty
     pages, since the file was written, and found by hand at the closing audit
     rather than by any instrument. This is that instrument.

     One theme, because these pages are chrome and chrome is theme-blind here; and
     contrast plus landmarks, because a tab pass over 129 pages costs more than it
     is worth while the ring is one rule in one file. Corpus derived the way
     `pages13.cjs` derives it: everything that is not a product screen.
     ========================================================================== */
  const chromeFails = [], landmarkFails = [];
  let chromeNodes = 0;
  const ALL_HTML = (function walkAll(dir, out) {
    for (const e of fs.readdirSync(path.join(ROOT, dir || '.'), { withFileTypes: true })) {
      const rel = dir ? dir + '/' + e.name : e.name;
      if (e.isDirectory()) {
        if (['.git', 'node_modules', 'docs-course', '.playwright-mcp', '.impeccable', '.github', '.claude', 'screens'].includes(e.name)) continue;
        walkAll(rel, out);
      } else if (e.name.endsWith('.html')) out.push(rel);
    }
    return out;
  })('', []);
  const isProduct = f => (/^design\/[^/]+\.html$/.test(f) && isProductScreen(f.split('/').pop()))
                      || (/^wireframes\/[^/]+\.html$/.test(f) && f !== 'wireframes/overview.html');
  const CHROME = ALL_HTML.filter(f => !isProduct(f));
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 950 }, colorScheme: 'light', reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    for (const file of CHROME) {
      await page.goto(`http://127.0.0.1:${port}/${file}`, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(60);
      await page.addScriptTag({ content: HELPERS });
      const r = await page.evaluate(() => {
        var rows = window.__a11y.text('body');
        var hs = [].slice.call(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(function (h) { return +h.tagName[1]; });
        var skips = 0;
        for (var i = 1; i < hs.length; i++) if (hs[i] - hs[i - 1] > 1) skips++;
        return { rows: rows, mains: document.querySelectorAll('main,[role=main]').length,
                 h1: document.querySelectorAll('h1').length, skips: skips };
      });
      chromeNodes += r.rows.length;
      r.rows.filter(x => x.ratio < x.need).forEach(x => chromeFails.push(Object.assign({ file }, x)));
      if (r.mains !== 1 || r.h1 !== 1 || r.skips) landmarkFails.push({ file, mains: r.mains, h1: r.h1, skips: r.skips });
    }
    await ctx.close();
  }

  await browser.close();
  server.close();

  /* ---- report ------------------------------------------------------------- */
  const out = [];
  const p = s => out.push(s);
  p('THE ACCESSIBILITY RUN - node design/kit/screens/a11y13.cjs');
  p(`corpus: ${SCREENS.length} screens x ${THEMES.length} themes` + (process.argv.includes('--fast') ? '  (--fast: the spine)' : ''));
  p('');
  p('1. CONTRAST, computed on the live screen, WCAG formula');
  p(`   text nodes measured                ${textNodes}`);
  p(`   below threshold                    ${contrastFails.length}`);
  contrastFails.slice(0, 30).forEach(f =>
    p(`      ${f.theme.padEnd(5)} ${f.ratio.toFixed(2)} < ${f.need}  ${f.file}  ${f.sel}  "${f.text}"`));
  if (contrastFails.length > 30) p(`      ... and ${contrastFails.length - 30} more`);
  p(`   control borders and marks measured ${lineNodes}   (WCAG 1.4.11 scope, see the file header)`);
  p(`   below 3:1                          ${lineFails.length}`);
  const lineGrouped = new Map();
  lineFails.forEach(f => {
    const k = f.theme + ' ' + f.sel;
    if (!lineGrouped.has(k)) lineGrouped.set(k, { n: 0, min: 99 });
    const g = lineGrouped.get(k); g.n++; g.min = Math.min(g.min, f.ratio);
  });
  [...lineGrouped.entries()].sort((a, b) => a[1].min - b[1].min).slice(0, 20)
    .forEach(([k, g]) => p(`      ${g.min.toFixed(2)}  x${String(g.n).padStart(4)}  ${k}`));
  if (lineGrouped.size > 20) p(`      ... and ${lineGrouped.size - 20} more shapes`);
  p('');
  p('2. FOCUS, a real tab pass, by control type');
  p(`   tab stops walked                   ${tabStops}`);
  p(`   control types reached              ${new Set([...focusByType.values()].map(v => v.type)).size}`);
  p(`   stops with no indicator at all     ${focusFails.filter(f => f.why === 'no indicator').length}`);
  p(`   stops with an indicator under 3:1  ${focusFails.filter(f => f.why !== 'no indicator').length}`);
  const failGrouped = new Map();
  focusFails.forEach(f => {
    const k = `${f.why} | ${f.theme} | ${f.sel} | ${f.outlineStyle} | ${f.ratio === null ? '-' : f.ratio}`;
    if (!failGrouped.has(k)) failGrouped.set(k, { n: 0, files: new Set() });
    const g = failGrouped.get(k); g.n++; g.files.add(f.file);
  });
  [...failGrouped.entries()].forEach(([k, g]) =>
    p(`      ${k}   x${g.n}   on ${[...g.files].slice(0, 4).join(' ')}${g.files.size > 4 ? ' and ' + (g.files.size - 4) + ' more' : ''}`));
  p('');
  [...focusByType.values()].sort((a, b) => a.type.localeCompare(b.type) || a.theme.localeCompare(b.theme))
    .forEach(v => p(`      ${v.type.padEnd(30)} ${v.theme.padEnd(6)} stops ${String(v.seen).padStart(4)}   no ring ${v.none}   weak ${v.weak}   min ${v.min === 99 ? '-' : v.min.toFixed(2)}`));
  p('');
  p('3. MOTION');
  p(`   elements with a duration, allowed  ${motionLive.size}`);
  p(`   of them declaring infinite         ${[...motionLive.values()].filter(v => v.infinite).length}`);
  p(`   still moving under reduce          ${motionReduced.length}`);
  motionReduced.slice(0, 20).forEach(m => p(`      ${m.file}  ${m.sel}  transition ${m.t}s  animation ${m.a}s${m.infinite ? '  INFINITE' : ''}`));
  p('');
  p('5. THE PAGES AROUND THE PRODUCT, which nothing had ever read');
  p(`   pages swept                        ${CHROME.length}   (every html that is not a product screen or its grey twin)`);
  p(`   text nodes measured                ${chromeNodes}`);
  p(`   below threshold                    ${chromeFails.length}`);
  chromeFails.slice(0, 30).forEach(f =>
    p(`      ${f.ratio.toFixed(2)} < ${f.need}  ${f.file}  ${f.sel}  "${f.text}"`));
  if (chromeFails.length) p('      ^ read these before believing them: text on a page that DEMONSTRATES a colour is a');
  if (chromeFails.length) p('        picture of a colour and not interface text. The residue here is exactly that, and it');
  if (chromeFails.length) p('        is left visible rather than excluded by a typed list of selectors.');
  /* THE THREE ARE REPORTED APART, since 2026-08-23, because only one of them is
     always a defect. A page with no `main` gives a screen reader nothing to skip
     to, and that is a finding anywhere. A page with SEVERAL `h1`s is a finding on
     a document and is the normal shape of a stand page, whose whole content is
     specimens of a component that happens to be a heading: `dashboard-head`
     draws eight of them on purpose. Rolled into one number the second kind buries
     the first, which is how 87 pages read as one problem when they were two. */
  const noMain = landmarkFails.filter(f => f.mains !== 1);
  const manyH1 = landmarkFails.filter(f => f.mains === 1 && f.h1 !== 1);
  const skipped = landmarkFails.filter(f => f.skips > 0);
  p(`   pages with no single main landmark                                       ${noMain.length}`);
  noMain.slice(0, 20).forEach(f => p(`      ${f.file}   main ${f.mains}`));
  p(`   pages with more than one h1                                              ${manyH1.length}   (a stand page draws specimens, and a specimen of a heading is a heading)`);
  manyH1.slice(0, 20).forEach(f => p(`      ${f.file}   h1 ${f.h1}`));
  p(`   pages skipping a heading level                                           ${skipped.length}`);
  skipped.slice(0, 20).forEach(f => p(`      ${f.file}   level skips ${f.skips}`));
  p('');
  p('4. ZOOM 200%, root font size 32px, WCAG 1.4.4');
  p(`   screens x widths measured          ${SCREENS.length * 2}`);
  p(`   scrolling sideways                 ${zoomFails.length}`);
  zoomFails.slice(0, 30).forEach(z => p(`      ${z.file}  at ${z.width}  by ${z.over}px`));

  if (process.argv.includes('--json')) {
    fs.writeFileSync(path.join(__dirname, 'a11y13.json'), JSON.stringify({
      screens: SCREENS, contrastFails, lineFails, focusFails,
      focusByType: [...focusByType.values()], motionReduced, zoomFails,
      chrome: CHROME, chromeFails, landmarkFails,
      counts: { textNodes, lineNodes, tabStops, chromeNodes }
    }, null, 1));
    p('');
    p('wrote design/kit/screens/a11y13.json');
  }

  console.log(out.join('\n'));
})();
