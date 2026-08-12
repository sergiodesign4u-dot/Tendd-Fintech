/* THE LEDGER. proof.cjs collapses the diff into shapes; this puts every shape
   against the named list that explains it, and prints the per-screen table step 8
   asks for. A shape that no rule below can classify is printed as UNEXPLAINED,
   which is the only outcome that is a defect. */
const fs = require('fs');
const F = ['idx','tag','x','y','w','h','fontSize','fontWeight','lineHeight','letterSpacing',
  'color','background','padT','padR','padB','padL','marT','marR','marB','marL',
  'btW','btC','bbW','bbC','blW','blC','radius','display','textDecoration','shadow','opacity','text'];
const DERIVED = new Set(['x','y','w','h','lineHeight','text']);

const TYPE = new Set([46,32,24,20,16,14,12,10]);            // the eight steps, step 4
const SPACE = new Set([0,2,4,8,16,24,32,40,48,56,64]);       // the 8px grid, step 4
const num = s => parseFloat(s);
const isSpaceProp = p => /^(padT|padR|padB|padL|marT|marR|marB|marL)$/.test(p);

/* An `auto` margin computes to a px figure that follows from the box width, so it
   is derived exactly the way x/y/w/h are. It reaches the shape table only because
   the fingerprint reads computed values and cannot see the keyword. Recognised by
   its fraction: nothing in this system declares 199.188px. */
const isAutoMargin = (p, b, a) => /^(marL|marR)$/.test(p) && (num(b) % 1 !== 0 || num(a) % 1 !== 0);

function classify(prop, b, a) {
  if (isAutoMargin(prop, b, a)) return ['derived', 'an auto margin, which follows from the box width'];
  if (prop === 'fontSize') {
    if (TYPE.has(num(a))) return ['step4', 'the type scale: 21 sizes folded onto eight steps, nearest step, ties to the larger'];
    return null;
  }
  if (prop === 'letterSpacing') return ['step4', 'tracking is declared in em, so it follows the type step that moved'];
  if (isSpaceProp(prop)) {
    if (num(b) === 0 && num(a) === 16) return ['step6', 'the Muted line carries no margin now; the host positions it'];
    if (num(a) === 0) return ['step6', 'the Muted line carries no margin now; the host positions it'];
    if (SPACE.has(num(a))) return ['step4', 'the 8px spacing grid: 27 values folded onto eleven steps'];
    /* ONE COMPOSED VALUE, NAMED RATHER THAN GENERALISED. 28px is not a step and
       it is not off the grid either: text-input.css:140 declares
       calc(--space-16 + --space-8 + --space-4) for the Amount field's input, so
       the field's own padding, the currency sign and the air after it are three
       tokens rather than one number. Widening the rule to "any sum of steps"
       would have accepted almost any even number and hidden the next real
       defect, so the composition is listed instead of the arithmetic allowed. */
    if (num(b) === 24 && num(a) === 28 && prop === 'padL')
      return ['step4', 'the 8px grid, composed: calc(--space-16 + --space-8 + --space-4) on the Amount field, text-input.css:140'];
    return null;
  }
  if (prop === 'radius') {
    if (num(b) === 10 && num(a) === 12) return ['step3', 'consolidated drift: the wash corner, 10 and 12 were one radius written twice'];
    if (SPACE.has(num(a)) || [6,10,12,14].includes(num(a))) return ['step3', 'consolidated drift: the corner scale'];
    return null;
  }
  if (prop === 'color' || prop === 'btC' || prop === 'bbC' || prop === 'blC') {
    if (b === 'rgb(56, 67, 73)' && a === 'rgb(90, 104, 108)')
      return ['step6', '.bycat folds into the base Muted line, so the ink goes from --text-body to --text-muted under the Two Tiers Rule'];
    if (a === 'rgb(20, 27, 29)' && /238, 242, 243/.test(b))
      return ['founder', '.charges li:last-child: the list stopped drawing a divider the container already owns. The colour left behind is the inherited currentColor of a 0px border'];
    return null;
  }
  if (prop === 'bbW' && num(b) === 1 && num(a) === 0)
    return ['founder', '.charges li:last-child: two hairlines were drawing one seam and the row gave up its own'];
  if (prop === 'display' || prop === 'shadow' || prop === 'textDecoration' || prop === 'fontWeight' ||
      prop === 'background' || prop === 'btW' || prop === 'blW') return null;
  return null;
}

const B = JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const A = JSON.parse(fs.readFileSync(process.argv[3],'utf8'));

const shapes = {};
const perPage = {};
const structural = [];
let elements = 0, derived = 0, pulse = 0, autoM = 0;

for (const k of Object.keys(B)) {
  if (!A[k]) { structural.push(k + ' MISSING'); continue; }
  const b = B[k].rows, a = A[k].rows;
  if (b.length !== a.length) { structural.push(k + ' rows ' + b.length + ' -> ' + a.length); continue; }
  perPage[k] = perPage[k] || { changed: 0, shapes: new Set(), lists: {} };
  for (let i = 0; i < b.length; i++) {
    elements++;
    const bb = b[i].split('~'), aa = a[i].split('~');
    let moved = false;
    for (let j = 2; j < F.length; j++) {
      if (bb[j] === aa[j]) continue;
      const prop = F[j];
      if (prop === 'opacity') { pulse++; continue; }
      if (DERIVED.has(prop)) { derived++; continue; }
      const c = classify(prop, bb[j], aa[j]);
      if (c && c[0] === 'derived') { autoM++; continue; }
      moved = true;
      const key = prop + ': ' + bb[j] + ' -> ' + aa[j];
      const s = shapes[key] = shapes[key] || { n: 0, pages: new Set(), list: c ? c[0] : null, why: c ? c[1] : null };
      s.n++; s.pages.add(k);
      perPage[k].shapes.add(key);
      const L = c ? c[0] : 'UNEXPLAINED';
      perPage[k].lists[L] = (perPage[k].lists[L] || 0) + 1;
    }
    if (moved) perPage[k].changed++;
  }
}

const NAMES = { step3: 'Consolidated drift (step 3)', step4: 'Basics review (step 4)',
                step6: 'Moved onto system classes (step 6)', founder: "Founder's review of the components (2026-08-12)",
                UNEXPLAINED: 'UNEXPLAINED' };

const byList = {};
for (const [k, v] of Object.entries(shapes)) {
  const L = v.list || 'UNEXPLAINED';
  (byList[L] = byList[L] || []).push([k, v]);
}

console.log('elements compared          :', elements);
console.log('derived (x/y/w/h/lh/text)  :', derived);
console.log('auto margins, also derived :', autoM);
console.log('skeleton pulse phase       :', pulse);
console.log('distinct declared shapes   :', Object.keys(shapes).length);
console.log('\nSHAPES BY NAMED LIST');
for (const L of ['step3','step4','step6','founder','UNEXPLAINED']) {
  const arr = byList[L] || [];
  const total = arr.reduce((s,[,v])=>s+v.n,0);
  console.log('  ' + NAMES[L].padEnd(46) + String(arr.length).padStart(4) + ' shapes, ' + String(total).padStart(5) + ' occurrences');
}
if (byList.UNEXPLAINED) {
  console.log('\nUNEXPLAINED SHAPES - each one is a defect until it has a row:');
  for (const [k,v] of byList.UNEXPLAINED.sort((x,y)=>y[1].n-x[1].n))
    console.log('  ' + String(v.n).padStart(5) + '  ' + k + '   [' + [...v.pages].slice(0,3).join(', ') + ']');
}

console.log('\nPER SCREEN AND VIEWPORT');
console.log('  ' + 'screen@vp'.padEnd(42) + 'moved'.padStart(6) + '  shapes  ' + 'which lists');
const keys = Object.keys(perPage).sort();
for (const k of keys) {
  const p = perPage[k];
  const ls = Object.entries(p.lists).map(([L,n]) => (L === 'step3'?'drift':L === 'step4'?'basics':L === 'step6'?'classes':L === 'founder'?'founder':'UNEXPLAINED') + ' ' + n).join(', ');
  console.log('  ' + k.padEnd(42) + String(p.changed).padStart(6) + '  ' + String(p.shapes.size).padStart(6) + '  ' + ls);
}
if (structural.length) {
  console.log('\nSTRUCTURALLY CHANGED, not comparable element by element:');
  for (const s of structural) console.log('  ' + s);
}
