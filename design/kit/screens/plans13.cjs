/* ============================================================================
   plans13.cjs - where this product parts company by plan, recomputed.

   WHY. The founder, clicking through the coloured screens: "есть такое ощущение
   непонятки где Free а где Pro". The first answer given back was wrong, and it
   was wrong in the way this repository has a rule against: it was remembered
   rather than counted. It said the two plans differ on two screens. They differ,
   as of the day this file was written, in sixteen places across eight screens,
   and every one of those places says so out loud.

   That is the decision this file exists to hold still (B, 2026-08-20, founder):
   ONE PRODUCT, NOT TWO. There are no Pro twins of Home, Alerts or Settings and
   there will not be. A screen states the boundary at the point a person meets
   it, in one shape - what stays free, what Pro adds, a way to see it, a way to
   decline - and everywhere else the plan chip in the app bar is the whole of the
   difference. A rule like that is worth exactly as much as the sweep that
   re-checks it, so here is the sweep.

   WHAT IT ASKS, on all 55 coloured pages and all 55 grey ones:

     chip      the plan named in the app bar: Free, Pro, or none
     places    times the SCREEN body names the plan (comments and the app bar
               stripped, so a note about Pro in a comment is not a place)
     offer     links from the body into the upgrade family
     decline   whether a body that offers Pro also offers a way to say no

   AND THE FOUR THINGS THAT WOULD BE FINDINGS:

     1. an offer that is IN THE WAY. D3 puts the paywall at depth and never at
        basic visibility, so the test is not "does this screen sell" but "is
        selling the only thing left to do on it". A screen that offers Pro and
        carries no other way on is a wall.
        THIS TEST WAS NARROWED ON THE DAY IT WAS WRITTEN and the first version is
        kept here because the narrowing is the finding. It began as "an offer
        with no Maybe later", which flagged five pages and was wrong on all five:
        the two Pro rows on Alerts are rows in a list and the list goes on past
        them, "Manage plan" on Settings is an account control and not a sell,
        the Pro line on the blocked cancel guide is a sentence under two free
        actions, and the gate is a screen whose SUBJECT is the plan. An explicit
        "Maybe later" is right where the offer interrupts something, and four
        pages carry one; requiring it everywhere would have made a rule out of
        one of its shapes. It is reported below and not enforced.
     2. a page whose plan row and plan chip say different words.
     3. a crossing that does not arrive: a page in the upgrade chain with no way
        on. This is the defect that started the whole thing - upgrade-processing
        promised "you go straight back to Your trends, open" and carried no link.
     4. the two corpora disagreeing about which pages carry a plan at all.

   RUN IT:  node design/kit/screens/plans13.cjs
   ============================================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const STANDS = ['overview.html', 'rollout.html'];
const listOf = dir => fs.readdirSync(path.join(ROOT, dir))
  .filter(f => f.endsWith('.html') && !STANDS.includes(f)).sort();

/* THE BODY IS THE SCREEN AND NOTHING ELSE. Comments are stripped first, because
   this file's own explanation of the plan would otherwise count as the product
   saying it; the app bar goes next, because the chip is counted separately and
   counting it twice would make every greeting a statement about the boundary. */
const bodyOf = (src) => {
  let s = src.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/<header class="appbar"[\s\S]*?<\/header>/g, '');
  const m = s.match(/<main class="screen[\s\S]*?<\/main>/);
  return m ? m[0] : '';
};
const textOf = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const chipOf = (src) => {
  const bar = (src.match(/<header class="appbar"[\s\S]*?<\/header>/) || [''])[0];
  const m = bar.match(/class="(?:chip|plan)">(Free|Pro)</);
  return m ? m[1] : null;
};

/* "Maybe later", "Not now" and the close control are all a way out. The close is
   counted because on the upgrade screens it IS the way out: those two carry no
   "Maybe later" and never needed one. */
const DECLINE = /Maybe later|Not now|No thanks|class="close"/i;

const scan = (dir) => listOf(dir).map(f => {
  const src = fs.readFileSync(path.join(ROOT, dir, f), 'utf8');
  const body = bodyOf(src);
  const text = textOf(body);
  const places = (text.match(/Tendd Pro|\bPro\b/g) || []).length;
  const offers = (body.match(/href="upgrade[a-z-]*\.html"/g) || []).length;
  const links = body.match(/href="(?!http)[a-z0-9-]+\.html"/g) || [];
  const onward = links.length;
  const elsewhere = links.filter(h => !/upgrade/.test(h)).length;
  const row = (body.match(/<h2>Your plan<\/h2>\s*<span class="subtotal">(Free|Pro)</) ||
               body.match(/Your plan<\/h2>[\s\S]{0,120}?>(Free|Pro)</) || [])[1] || null;
  return { page: f, chip: chipOf(src), places, offers, onward, elsewhere, row,
           decline: DECLINE.test(body), inChain: /^upgrade/.test(f) };
});

const colour = scan('design');
const grey = scan('wireframes');

const say = (s) => console.log(s);
say('corpora: ' + grey.length + ' grey pages, ' + colour.length + ' coloured pages');
say('');

say('=== 1. THE PLAN STATE OF EVERY PAGE, FROM THE APP BAR ===');
for (const [name, set] of [['coloured', colour], ['grey', grey]]) {
  const by = { Free: [], Pro: [], none: [] };
  set.forEach(r => by[r.chip || 'none'].push(r.page));
  say('  ' + name.padEnd(9) + ' Free ' + String(by.Free.length).padStart(3) +
      '   Pro ' + String(by.Pro.length).padStart(3) +
      '   no chip ' + String(by.none.length).padStart(3));
  say('    Pro: ' + (by.Pro.join(', ') || '-'));
}
say('');

say('=== 2. WHERE THE BOUNDARY IS STATED, IN THE SCREEN AND NOT IN A COMMENT ===');
const stated = colour.filter(r => r.places > 0);
say('  coloured pages that name the plan: ' + stated.length + ' of ' + colour.length +
    ', in ' + stated.reduce((a, r) => a + r.places, 0) + ' places');
stated.forEach(r => say('    ' + r.page.replace('.html', '').padEnd(40) +
  String(r.places).padStart(2) + ' places' + (r.offers ? ',  ' + r.offers + ' way(s) to Pro' : '') +
  (r.decline ? ',  a way to decline' : '')));
say('');

say('=== 3. THE FINDINGS ===');
const f1 = colour.filter(r => r.offers > 0 && r.elsewhere === 0);
const f2 = colour.filter(r => r.row && r.chip && r.row !== r.chip);
const f3 = colour.filter(r => r.inChain && r.onward === 0);
const greyPlan = new Set(grey.filter(r => r.chip).map(r => r.page));
const colPlan = new Set(colour.filter(r => r.chip).map(r => r.page));
const f4 = [...new Set([...greyPlan, ...colPlan])].filter(p => greyPlan.has(p) !== colPlan.has(p));
const report = (n, label, rows) => say('  ' + (rows.length ? 'FINDING  ' : 'ok       ') +
  label.padEnd(58) + rows.length + (rows.length ? '   ' + rows.map(r => r.page || r).join(', ') : ''));
report(1, 'an offer of Pro that is the only way on', f1);
report(2, 'a plan row and a plan chip saying different words', f2);
report(3, 'a page of the upgrade chain with no way on', f3);
report(4, 'the two corpora disagreeing about which pages carry a plan', f4);
say('');
say('  reported and not enforced: ' + colour.filter(r => r.offers > 0 && r.decline).length +
    ' of the ' + colour.filter(r => r.offers > 0).length +
    ' pages that offer Pro carry an explicit way to decline.');
say('  the rest offer it as a row, an account control or the subject of the screen itself.');
say('');
say('  ' + (f1.length + f2.length + f3.length + f4.length === 0
  ? 'ONE PRODUCT, NOT TWO: the boundary is stated where it is met, and nowhere is it a wall.'
  : 'the decision of 2026-08-20 does not hold as written. See above.'));
