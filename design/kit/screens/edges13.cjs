/* ============================================================================
   edges13.cjs - every right edge on every screen, and the one thing about them
   that is falsifiable. The instrument behind usage rule U15.

   WHY. 2026-08-19 the founder opened History and trends at a 1920 window and
   said: "что то растянуто на всю ширину что то нет ... я бы хотел чтобы это
   выглядело круто, а не дёшево". Measured, the direct children of that one
   screen ended at 1280, 780, 525, 459 and 384. Five right edges. Nothing was
   broken by any single one of them - each block was doing what its own file
   said - and the screen read as cheap because no two of them agreed.

   WHAT IT PRINTS, and what it CHECKS, are deliberately two different things.

   IT PRINTS every distinct width among the direct children of every app screen,
   split into blocks that declare a `max-width` of their own and blocks that do
   not. Whether four edges on one screen read as one object is a judgement, and
   this file's job is to put the numbers in front of the eye that makes it, not
   to pretend the judgement is arithmetic.

   IT CHECKS one thing, and that one thing is falsifiable: **every state of one
   screen ends at the same place.** A screen that changes width when it fails,
   when it is empty or while it loads is a layout that moves under a person for
   reasons that have nothing to do with them. Families are derived from the file
   names rather than declared here: a page belongs to the longest other page name
   that is a prefix of it, so `history-trends-error` belongs to `history-trends`
   and `cancel-win` belongs to nobody.

   AND ONE MORE, ADDED THE SAME EVENING: **every interruption ends in the same
   place.** An interruption outside the onboarding chain is pulled out of its
   family and checked against the other interruptions instead, because it is not
   the screen it replaces - it is one message and one way out, at
   `--container-page` wherever it stands. See the note at the rule.

   RUN IT:  node design/kit/screens/edges13.cjs
   Clean, 2026-08-19: 0 families split, 1 width across the interruptions. The
   family check went 1 -> 0 -> 1 -> 0 in a day: History and trends measured 780 in
   four states and 1280 in its error until `.app:not(.flow) > .screen.interruption`
   closed it, then split again when the founder widened the screen to Home's 1280
   and its two interruptions stayed at 780 - which was the right answer arriving
   through the wrong test.
   ============================================================================ */
const fs = require('fs'), path = require('path'), http = require('http'), { execSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..', '..', '..');
let pw; try { pw = require(ROOT + '/node_modules/playwright'); }
catch (e) { pw = require(execSync('npm root -g').toString().trim() + '/playwright'); }
const { chromium } = pw;
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
const srv = http.createServer((q, res) => {
  const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
/* the two stands that live in design/ and are not product screens */
const STANDS = new Set(['overview.html', 'rollout.html']);
const files = fs.readdirSync(path.join(ROOT, 'design')).filter(f => f.endsWith('.html') && !STANDS.has(f));
const names = files.map(f => f.replace('.html', ''));
function family(n) {
  let best = n;
  for (const other of names) if (other !== n && n.startsWith(other + '-') && other.length > (best === n ? 0 : best.length)) best = other;
  return best;
}

srv.listen(0, '127.0.0.1', async () => {
  const port = srv.address().port;
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: 1920, height: 1080 } });
  const p = await c.newPage();
  const rows = [];
  for (const f of files) {
    await p.goto('http://127.0.0.1:' + port + '/design/' + f, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    const r = await p.evaluate(() => {
      const sc = document.querySelector('.app > .screen');
      if (!sc) return null;                        /* the landing is not an app screen */
      const app = sc.parentElement;
      const interruption = sc.classList.contains('interruption') && !app.classList.contains('flow');
      const free = [], held = [];
      [...sc.children].forEach(el => {
        const w = Math.round(el.getBoundingClientRect().width);
        if (!w) return;
        const name = el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className ? '.' + el.className.split(' ')[0] : '');
        (getComputedStyle(el).maxWidth === 'none' ? free : held).push({ w, name });
      });
      return { free, held, interruption };
    });
    if (!r) continue;
    const uniq = a => [...new Set(a.map(x => x.w))].sort((x, y) => y - x);
    rows.push({ n: f.replace('.html', ''), fam: family(f.replace('.html', '')), free: uniq(r.free), held: uniq(r.held), int: r.interruption, all: r });
  }
  console.log('EVERY RIGHT EDGE, AT 1920 - node design/kit/screens/edges13.cjs');
  console.log('app screens read: ' + rows.length + '\n');
  console.log('  screen                                  the pane gives      declared its own');
  for (const x of rows.slice().sort((a, b) => a.n.localeCompare(b.n)))
    console.log('  ' + x.n.padEnd(38) + x.free.join(' ').padEnd(20) + x.held.join(' '));

  const fams = {};
  /* a member with NO free child is not in the comparison, and there are 13 of
     them: the list-column screens, where the one block is `.rows-col` at its
     declared 620, and the single-card interruptions at 480. A screen whose every
     block owns its measure is not asking the pane for one, so there is nothing to
     compare. Counted out loud below rather than dropped in silence. */
  const solo = rows.filter(x => !x.free.length);
  /* AN INTERRUPTION IS MEASURED AGAINST INTERRUPTIONS, 2026-08-19, and it is a
     generalisation and not an escape hatch. `.screen.interruption` outside the
     onboarding chain is one message and one way out; the shell gives it
     `--container-page` on every screen it appears on, and it does not become a
     different object because the screen it replaces happens to be a dashboard.
     History and trends is where the two first met: its three data views take
     Home's 1280 on the founder's decision, its empty and its error are
     interruptions at 780. Comparing those five as one family asks the error
     message to be as wide as the chart, which is the wrong answer.
     They are pulled out of the family comparison and CHECKED AS THEIR OWN SET
     below, which is a stricter test than the one they left: every interruption in
     the product has to end at the same place, across screens and not only across
     the states of one. */
  const ints = rows.filter(x => x.int && x.free.length);
  for (const x of rows) if (x.free.length && !x.int) (fams[x.fam] = fams[x.fam] || []).push(x);
  /* ONE NAMED EXCEPTION, and it is a decision rather than a defect: `upgrade`
     carries the plan row and takes 59rem for it (app-shell.css, 2026-08-18, the
     arithmetic in grid.css), while its three states carry no plan row and keep the
     chain's 620. Named here so the check stays at zero and the exception stays
     visible; delete this line and the run reports it again. */
  const DECLARED = { upgrade: 'the plan row asks for 59rem, its three states do not carry one' };
  const all = Object.keys(fams).filter(k => new Set(fams[k].map(x => x.free[0])).size > 1);
  const split = all.filter(k => !DECLARED[k]);
  console.log('\nONE SCREEN, ONE MEASURE, ACROSS ITS STATES');
  console.log('  families: ' + Object.keys(fams).length + '   split: ' + split.length +
    '   declared exceptions: ' + all.filter(k => DECLARED[k]).length +
    '   screens where every block owns its measure: ' + solo.length);
  for (const k of all.filter(k => DECLARED[k]))
    console.log('    declared  ' + k + ': ' + DECLARED[k] + '  [' + fams[k].map(x => x.n + ' ' + x.free[0]).join(', ') + ']');
  for (const k of split) for (const x of fams[k]) console.log('    SPLIT  ' + k + '  ->  ' + x.n + '  ' + x.free[0]);
  if (!split.length) console.log('  no screen changes width between its states');

  const intW = [...new Set(ints.map(x => x.free[0]))];
  console.log('\nEVERY INTERRUPTION ENDS IN THE SAME PLACE');
  console.log('  interruptions outside the flow: ' + ints.length + '   distinct widths: ' + intW.length +
    (intW.length === 1 ? '  (' + intW[0] + ')' : '  SPLIT: ' + intW.join(' ')));
  for (const x of ints) console.log('    ' + x.n.padEnd(38) + x.free[0]);
  await b.close(); srv.close();
});
