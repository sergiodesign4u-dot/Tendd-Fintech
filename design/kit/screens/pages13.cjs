/* ============================================================================
   pages13.cjs - the sweep of everything that is NOT a product screen.

   WHY IT EXISTS. `width12.cjs` walks the 110 product screens across 58 widths and
   reports "no document scrolls sideways at any stop", and that has been true for
   two stages. The 127 pages AROUND them - every stage account, every stand page,
   every IA node - had never been swept at all, and a receiver opening this project
   on a phone meets those pages before any product screen.

   The first run, 2026-08-18, found TEN of them scrolling sideways at 320:
   research (85px), directions (34), interruption (28), subscription-row (16),
   checkbox (12), destination-icon (8), design/overview (8), eyebrow, readout and
   summary (4 each), plus one page logging three console errors. Four causes, and
   every one of them already had a solved form somewhere in the product:

     a grid floor taller than its own container, which `design/system/` has
     carried `min(floor, 100%)` against since stage 10 and the pages that talk
     about the system had not;
     a `<code>` holding a path, which is one unbreakable token;
     a flex item with no `min-width: 0` beside a fixed-width label;
     a column count written by hand (`1fr 1fr`, `repeat(3, 1fr)`) in an inline
     style, which cannot become one column however narrow the screen gets.

   RUN IT:  node design/kit/screens/pages13.cjs
   Clean, 2026-08-18: 0 of 127 pages scroll sideways at 320, 360 or 390.
   ============================================================================ */

const fs=require('fs'),path=require('path'),http=require('http'),{execSync}=require('child_process');
const ROOT='/Users/sergiyshevchenko/Claud Projects/Fintech Tendd';
const {chromium}=(()=>{try{return require('playwright');}catch(e){return require(execSync('npm root -g').toString().trim()+'/playwright');}})();
const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.woff2':'font/woff2'};
const srv=http.createServer((q,res)=>{const f=path.join(ROOT,decodeURIComponent(q.url.split('?')[0]));if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(res);});

function walk(d,out=[]){for(const f of fs.readdirSync(path.join(ROOT,d))){const rel=d?d+'/'+f:f;const st=fs.statSync(path.join(ROOT,rel));
  if(st.isDirectory()){ if(['.git','node_modules','docs-course','design/screens','design/kit/screens'].some(x=>rel===x||rel.startsWith(x+'/')))continue; walk(rel,out);}
  else if(f.endsWith('.html')) out.push(rel);}
  return out;}
const all=walk('');
// the 55 coloured product screens and the 55 grey ones are swept by width12.cjs; this is everything else
const isProduct = f => (/^design\/[^/]+\.html$/.test(f) && !/(overview|rollout)\.html$/.test(f)) || (/^wireframes\/[^/]+\.html$/.test(f) && !/overview\.html$/.test(f));
const pages = all.filter(f=>!isProduct(f));
const W=[320,360,390];
srv.listen(0,'127.0.0.1',async()=>{const port=srv.address().port;
const b=await chromium.launch();
const c=await b.newContext({viewport:{width:320,height:800},isMobile:true,hasTouch:true});
const p=await c.newPage();
const rows=[];
for(const f of pages){
  const errs=[];const on=m=>{if(m.type()==='error')errs.push(m.text());};p.on('console',on);
  let worst=0,at=0,who='';
  for(const w of W){
    await p.setViewportSize({width:w,height:800});
    await p.goto('http://127.0.0.1:'+port+'/'+f,{waitUntil:'domcontentloaded'});
    await p.waitForTimeout(30);
    const r=await p.evaluate(()=>{
      const sx=document.documentElement.scrollWidth-document.documentElement.clientWidth;
      let who='';
      if(sx>0){
        const scrolls=e=>{let x=e.parentElement;while(x&&x!==document.body){if(getComputedStyle(x).overflowX!=='visible')return true;x=x.parentElement;}return false;};
        document.querySelectorAll('body *').forEach(e=>{
          if(who)return; const cs=getComputedStyle(e); if(cs.position==='fixed'||e.closest('.sidebar'))return;
          if(e.scrollWidth>e.clientWidth+1 && cs.overflowX==='visible' && !scrolls(e))
            who=e.tagName.toLowerCase()+'.'+String(e.className).split(' ').slice(0,2).join('.')+' needs '+e.scrollWidth+' in '+e.clientWidth;});
      }
      return {sx,who};});
    if(r.sx>worst){worst=r.sx;at=w;who=r.who;}
  }
  p.off('console',on);
  if(worst>0||errs.length) rows.push({f,worst,at,who,errs:errs.length});
}
console.log('PAGES SWEPT (everything that is not one of the 110 product screens): '+pages.length);
console.log('widths: '+W.join(' '));
console.log('');
if(!rows.length) console.log('  no page scrolls sideways and no page logs a console error');
rows.sort((a,b)=>b.worst-a.worst).forEach(r=>console.log('  '+String(r.worst+'px').padStart(6)+' at '+r.at+'   '+r.f.padEnd(44)+(r.who||'')+(r.errs?'   console errors '+r.errs:'')));
console.log('');
console.log('  pages that scroll sideways: '+rows.filter(r=>r.worst>0).length+' of '+pages.length);
await b.close();srv.close();});
