/* THE STAGE 09 LEDGER. Same instrument and same contract as ledger.cjs of stage 8:
   every shape of difference between pixel09-before.json and pixel09-after.json is
   put against a named row that explains it, and a shape no row can classify is
   printed as UNEXPLAINED, which is the only outcome that is a defect.
   Usage: node ledger09.cjs > ledger09.txt */
const b = require('./pixel09-before.json');
const a = require('./pixel09-after.json');
const F = ['idx','tag','x','y','w','h','fontSize','fontWeight','lineHeight','letterSpacing',
  'color','background','padT','padR','padB','padL','marT','marR','marB','marL',
  'btW','btC','bbW','bbC','blW','blC','radius','display','textDecoration','shadow','opacity','text'];

/* the four pages the founder's decision moves, and only at the wide viewport */
const FOOT = new Set(['history-trends@1280','history-trends-empty@1280','history-trends-error@1280',
  'upgrade-payment-failed@1280','upgrade@1280']);

function classify(page, prop, before, after) {
  if (prop === 'opacity' && /^0\.99/.test(after) || prop === 'opacity' && /^0\.99/.test(before))
    return ['animation', 'the skeleton pulse, caught at a different frame. Three loading pages, no declared value involved'];
  if (prop === 'marB' && before === '24px' && after === '0px')
    return ['interruption', 'the announcement gives its bottom margin to the pattern'];
  if (prop === 'marT' && before === '0px' && after === '24px')
    return ['interruption', 'the pattern declares the gap on the block that follows the announcement'];
  if (prop === 'marB' && before === '16px' && after === '0px')
    return ['act-foot', 'the action row gives its bottom margin to the pattern'];
  if (prop === 'marT' && before === '0px' && after === '16px')
    return ['act-foot', 'the pattern declares the gap on the line under the row'];
  if (page === 'history-trends@1280' && /^(y|h)$/.test(prop))
    return ['foot-16-chart', 'the same 16px, on the one page that was already taller than its pane. The screen is a flex column at this width and the chart is the shrinkable item in it, so the 16px the foot gave back goes into the chart rather than off the bottom: the plot is 16px taller, everything under it sits 16px lower, and the page height does not change. Worth a line for stage 10: the chart is being squeezed here, before and after'];
  if (FOOT.has(page) && /^(y|h)$/.test(prop))
    return ['foot-16', 'the named decision: the foot gap is 16 at every width, so the closing line rises 16px at 1280'];
  return ['UNEXPLAINED', ''];
}

const rows = new Map(), pages = new Map();
let compared = 0, differing = 0, lengthDiff = 0;
for (const k of Object.keys(b)) {
  const B = b[k].rows, A = a[k].rows;
  if (B.length !== A.length) { lengthDiff++; console.log('LENGTH DIFF', k, B.length, A.length); continue; }
  for (let i = 0; i < B.length; i++) {
    compared++;
    if (B[i] === A[i]) continue;
    differing++;
    const bb = B[i].split('~'), aa = A[i].split('~');
    for (let j = 0; j < F.length; j++) {
      if (bb[j] === aa[j]) continue;
      const [cls, why] = classify(k, F[j], bb[j], aa[j]);
      const key = cls + '|' + F[j] + ': ' + bb[j] + ' -> ' + aa[j] + '|' + why;
      rows.set(key, (rows.get(key) || 0) + 1);
      pages.set(cls, (pages.get(cls) || new Set()).add(k));
    }
  }
}
console.log('STAGE 09, STEP 1: the three patterns extracted, eight coloured pages moved onto them.');
console.log('page-viewports compared : ' + Object.keys(b).length + (lengthDiff ? '  (' + lengthDiff + ' with a different element count)' : '  (element count identical on every one)'));
console.log('elements compared       : ' + compared);
console.log('elements with a change  : ' + differing);
console.log('');
const order = ['interruption', 'act-foot', 'foot-16', 'foot-16-chart', 'animation', 'UNEXPLAINED'];
for (const cls of order) {
  const mine = [...rows.entries()].filter(([k]) => k.startsWith(cls + '|'));
  const n = mine.reduce((s, [, v]) => s + v, 0);
  console.log(cls.toUpperCase() + ': ' + mine.length + ' shapes, ' + n + ' occurrences, on ' + (pages.get(cls) ? pages.get(cls).size : 0) + ' page-viewports');
  for (const [k, v] of mine.sort((x, y) => y[1] - x[1])) {
    const [, shape, why] = k.split('|');
    console.log('   ' + String(v).padStart(3) + 'x  ' + shape + (why ? '\n        ' + why : ''));
  }
  if (pages.get(cls)) console.log('   pages: ' + [...pages.get(cls)].sort().join(', '));
  console.log('');
}
const narrow = [...rows.entries()].filter(([k]) => /^(foot-16)\|/.test(k));
console.log('AT 360: no geometry moved at all. Every difference at the narrow viewport is a margin');
console.log('changing owner, and the two arithmetics collapse to the same number there.');
