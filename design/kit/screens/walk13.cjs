/* ============================================================================
   walk13.cjs - the click graph of the coloured product, and the one thing about
   it a reviewer actually feels.

   WHY. 2026-08-19 the founder walked the prototype and hit the same wall twice,
   on two screens that look nothing alike. `connect-bank-loading`: "для меня
   тупик ... а что тут может быть дальше - success или ошибка". Then
   `sign-in-sent`: "и тут получается та же проблема, не видно, куда двигаться
   дальше - правильный имейл и ты перешёл дальше, или ошибка".

   THE FIRST HAD NO CONTROLS AND THE SECOND HAD TWO, so "count the links" finds
   one and misses the other. What they share is not markup: on both, the step
   that moves the screen FORWARD happens somewhere the prototype cannot go. The
   system takes it (a wait) or the person leaves to take it (a mail link). That
   is the class, and it has to be declared rather than inferred.

   WHAT IT ASKS, three things, over the 55 coloured screens.

     1  NO FORWARD DOOR. Every link this screen has points at a screen that links
        back to it, so a reviewer standing here can only retreat. Every screen in
        this list must have a declared next step in `design/_nav.js`, and that is
        the check: a cul-de-sac the chrome does not answer is a defect.

     2  UNREACHABLE BY CLICKING. Nothing in the product links here, so the state
        can only be reached from the side panel. Reported with and without the
        chrome's own doors, because the difference is exactly what the strip buys
        a reviewer. It is NOT a violation: no product screen links to
        `home-error`, and it should not - that screen IS Home when the refresh
        fails. The number is here to be read, not to be driven to zero.

     3  WHAT THE CHROME DECLARES, against what it stands on: every screen in the
        AFTER map, and whether it is a wait (a skeleton or `aria-busy`) or a
        hand-off. A map that grows onto ordinary screens has stopped being about
        this problem.

   The graph reads only what is INSIDE `.app`, so the side panel's fifty-five
   links and the chrome's own strip do not make everything reachable by accident.

   RUN IT:  node design/kit/screens/walk13.cjs
   ============================================================================ */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');
const STANDS = new Set(['overview.html', 'rollout.html']);
const dir = path.join(ROOT, 'design');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !STANDS.has(f));

const out = {}, wait = {};
for (const f of files) {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  const m = s.match(/<div class="app[^"]*">([\s\S]*?)<\/div>\s*<\/div><!-- \/stage -->/);
  const body = m ? m[1] : s.slice(s.indexOf('<body>'));
  out[f] = [...new Set([...body.matchAll(/href="([a-z0-9-]+\.html)"/g)].map(x => x[1]))]
    .filter(h => h !== f && files.indexOf(h) > -1);
  wait[f] = /class="skel|aria-busy="true"/.test(body);
}

/* the chrome's declared next steps, parsed out of design/_nav.js so this file
   holds no second copy of them */
const nav = fs.readFileSync(path.join(dir, '_nav.js'), 'utf8');
const block = nav.slice(nav.indexOf('var AFTER = {'), nav.indexOf('function stateFile'));
const declared = {};
for (const m of block.matchAll(/'([a-z0-9-]+\.html)':\s*\{([\s\S]*?)\n    \}/g)) {
  declared[m[1]] = [...m[2].matchAll(/\['([a-z0-9-]+\.html)'/g)].map(x => x[1]);
}

const indeg = (edges) => {
  const d = {}; files.forEach(f => d[f] = 0);
  for (const f of files) for (const t of (edges[f] || [])) if (t in d) d[t]++;
  return d;
};
const withChrome = {};
files.forEach(f => withChrome[f] = (out[f] || []).concat(declared[f] || []));
const dProduct = indeg(out), dChrome = indeg(withChrome);

const noForward = files.filter(f => {
  const l = out[f] || [];
  if (!l.length) return true;
  return l.every(t => (out[t] || []).includes(f));
});
/* ONE NAMED EXCEPTION, verified before it was written. `history-trends-locked`
   trips test 1 and is not a cul-de-sac: its forward door is `upgrade.html`, the
   "See what Pro adds" button, and `upgrade` links back only because the gate is
   where the person came from. The test cannot tell a two-way pair from a retreat,
   and refining it would mean teaching this file which direction a flow runs,
   which is `ia/docs/flows.md`'s job. Named here so the check stays at zero and
   the exception stays visible; delete this line and the run reports it again. */
const NOT_A_CULDESAC = {
  'history-trends-locked.html': 'its forward door is upgrade.html, which links back because the gate is where you came from'
};
const unanswered = noForward.filter(f => !declared[f] && !NOT_A_CULDESAC[f]);

const p = console.log;
p('THE CLICK GRAPH OF THE COLOURED PRODUCT - node design/kit/screens/walk13.cjs');
p('screens: ' + files.length + '   links inside .app: ' + files.reduce((a, f) => a + out[f].length, 0));
p('');
p('1. NO FORWARD DOOR: ' + noForward.length);
for (const f of noForward) {
  p('   ' + f.replace('.html', '').padEnd(30) +
    (declared[f] ? 'declared: ' + declared[f].length + ' doors'
      : NOT_A_CULDESAC[f] ? 'not a cul-de-sac: ' + NOT_A_CULDESAC[f] : 'NOT DECLARED') +
    '   ' + (out[f].length ? 'links back to: ' + out[f].join(', ') : 'no link at all'));
}
p('   VIOLATIONS (a cul-de-sac the chrome does not answer): ' + unanswered.length +
  (unanswered.length ? '  ' + unanswered.join(', ') : ''));
p('');
const orphP = files.filter(f => !dProduct[f]), orphC = files.filter(f => !dChrome[f]);
p('2. UNREACHABLE BY CLICKING');
p('   by product links alone           ' + orphP.length + ' of ' + files.length);
p('   with the chrome\'s doors counted  ' + orphC.length + ' of ' + files.length +
  '   (the strip recovers ' + (orphP.length - orphC.length) + ')');
p('   still unreachable, and every one is a state no product screen should link to:');
orphC.forEach(f => p('      ' + f.replace('.html', '')));
p('');
p('3. WHAT THE CHROME DECLARES: ' + Object.keys(declared).length + ' screens, ' +
  Object.values(declared).reduce((a, d) => a + d.length, 0) + ' doors');
for (const f of Object.keys(declared)) {
  p('   ' + f.replace('.html', '').padEnd(30) + (wait[f] ? 'a wait' : 'a hand-off') +
    '   -> ' + declared[f].map(x => x.replace('.html', '')).join(', '));
}
const notWait = Object.keys(declared).filter(f => !wait[f] && f !== 'sign-in-sent.html');
p('   declared on a screen that is neither a wait nor the one hand-off: ' + notWait.length +
  (notWait.length ? '  ' + notWait.join(', ') : ''));
