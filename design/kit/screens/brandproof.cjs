/* The brand's own pixel ledger. The lockup INSERTS three elements per screen, so
   document-order pairing by index cannot be used: every row after the app bar
   would shift. Rows are aligned by an LCS on (tag, text) instead, which is the
   weakest key that survives an insertion, and only MATCHED rows are compared. */
const fs = require('fs');
const F = ['idx','tag','x','y','w','h','fontSize','fontWeight','lineHeight','letterSpacing',
  'color','background','padT','padR','padB','padL','marT','marR','marB','marL',
  'btW','btC','bbW','bbC','blW','blC','radius','display','textDecoration','shadow','opacity','text'];
const key = r => { const a = r.split('~'); return a[1] + ' ' + a[31]; };

function lcs(A, B) {
  const n = A.length, m = B.length;
  const d = Array.from({length: n + 1}, () => new Int32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    d[i][j] = key(A[i]) === key(B[j]) ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);
  const pairs = [], addedB = [], droppedA = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (key(A[i]) === key(B[j])) { pairs.push([A[i], B[j]]); i++; j++; }
    else if (d[i + 1][j] >= d[i][j + 1]) { droppedA.push(A[i]); i++; }
    else { addedB.push(B[j]); j++; }
  }
  while (i < n) droppedA.push(A[i++]);
  while (j < m) addedB.push(B[j++]);
  return { pairs, addedB, droppedA };
}

const B = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const A = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const shapes = {}, perPage = {};
const DERIVED = ['x', 'y', 'w', 'h', 'lineHeight', 'text'];
const WHO = {};
let matched = 0, added = 0, dropped = 0, movedEls = 0;

for (const k of Object.keys(B)) {
  const r = lcs(B[k].rows, A[k].rows);
  matched += r.pairs.length; added += r.addedB.length; dropped += r.droppedA.length;
  perPage[k] = { added: r.addedB.length, dropped: r.droppedA.length, moved: 0 };
  for (const pair of r.pairs) {
    const bb = pair[0].split('~'), aa = pair[1].split('~');
    let moved = false;
    for (let j = 2; j < F.length; j++) {
      if (bb[j] === aa[j]) continue;
      const p = F[j];
      if (p === 'opacity') continue;
      if (DERIVED.indexOf(p) !== -1) continue;
      moved = true;
      const s = p + ' : ' + bb[j] + ' => ' + aa[j];
      (shapes[s] = shapes[s] || { n: 0, pages: new Set() }).n++;
      shapes[s].pages.add(k);
    }
    if (moved) { movedEls++; perPage[k].moved++; var who = bb[1] + ' "' + bb[31] + '"'; who = who.slice(0, 46); (WHO[who] = WHO[who] || 0); WHO[who]++; }
  }
}
console.log('matched elements   :', matched);
console.log('added by the brand :', added, '  dropped:', dropped);
console.log('matched and moved  :', movedEls);
console.log('');
console.log('DECLARED SHAPES');
Object.entries(shapes).sort(function (x, y) { return y[1].n - x[1].n; }).forEach(function (e) {
  console.log('  ' + String(e[1].n).padStart(4) + '  on ' + String(e[1].pages.size).padStart(2) + ' page-vps  ' + e[0]);
});
const odd = Object.entries(perPage).filter(function (e) { return e[1].added !== 3 || e[1].dropped !== 0; });
console.log('');
console.log('WHICH ELEMENTS MOVED');
Object.entries(WHO).sort(function(x,y){return y[1]-x[1];}).forEach(function(e){console.log('  ' + String(e[1]).padStart(4) + '  ' + e[0]);});
console.log('');
console.log('page-viewports where the insertion was not exactly 3 and 0:', odd.length ? JSON.stringify(odd) : 'none');
