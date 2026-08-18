/* DOM fingerprint of every coloured product screen, at both viewports.
   Keyed by DOCUMENT ORDER, not by class, so a class rename does not break the pair.
   Usage: node fp.cjs <output.json> */
/* LOCAL FIRST, GLOBAL AFTER, since 2026-08-18. This line used to be an ABSOLUTE
   PATH into one machine's npx cache - `/Users/<name>/.npm/_npx/<hash>/...` - which
   is the single least liftable line in the repository and the stage 13 census
   named it. It now resolves the same way every other instrument here does. */
const { execSync } = require('child_process');
const { chromium } = (() => { try { return require('playwright'); } catch (e) {
  return require(execSync('npm root -g').toString().trim() + '/playwright'); } })();
const fs = require('fs');

const PAGES = ["add-subscription-empty","add-subscription-error","add-subscription-loading","add-subscription","guided-reveal-empty","guided-reveal","history-trends-empty","history-trends-error","history-trends-loading","history-trends-locked","history-trends","home-empty","home-error","home-loading","home-savefocus","home","settings-no-account","settings","subscription-detail-error","subscription-detail-loading","subscription-detail-payment-failed","subscription-detail-price-change","subscription-detail-unrecognized","subscription-detail","upgrade-current-plan","upgrade-payment-failed","upgrade-processing","upgrade"];

const grab = () => {
  const rows = [];
  let i = -1;
  for (const el of document.querySelectorAll('body *')) {
    i++;
    const t = el.tagName.toLowerCase();
    if (t === 'script' || t === 'style' || t === 'link') continue;
    if (el.closest('.sidebar, .nav-toggle, .sidebar-overlay')) continue;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    rows.push([
      i, t,
      Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height),
      cs.fontSize, cs.fontWeight, cs.lineHeight, cs.letterSpacing,
      cs.color, cs.backgroundColor,
      cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft,
      cs.marginTop, cs.marginRight, cs.marginBottom, cs.marginLeft,
      cs.borderTopWidth, cs.borderTopColor, cs.borderBottomWidth, cs.borderBottomColor,
      cs.borderLeftWidth, cs.borderLeftColor,
      cs.borderRadius, cs.display, cs.textDecorationLine, cs.boxShadow, cs.opacity,
      (el.textContent || '').trim().slice(0, 40).replace(/\s+/g, ' ')
    ].join('~'));
  }
  return {
    rows,
    docH: document.documentElement.scrollHeight,
    docW: document.documentElement.scrollWidth,
    overflow: document.documentElement.scrollWidth > window.innerWidth
  };
};

(async () => {
  const outPath = process.argv[2];
  const browser = await chromium.launch();
  const out = {};
  for (const vp of [360, 1280]) {
    const ctx = await browser.newContext({ viewport: { width: vp, height: vp === 360 ? 800 : 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const p of PAGES) {
      await page.goto('http://127.0.0.1:8778/design/' + p + '.html', { waitUntil: 'load' });
      out[p + '@' + vp] = await page.evaluate(grab);
    }
    await ctx.close();
  }
  await browser.close();
  fs.writeFileSync(outPath, JSON.stringify(out));
  const n = Object.values(out).reduce((s, v) => s + v.rows.length, 0);
  console.log('captured', Object.keys(out).length, 'page-viewports,', n, 'element fingerprints ->', outPath);
})();
