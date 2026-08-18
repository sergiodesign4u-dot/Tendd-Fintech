/* ============================================================================
   quality13.cjs - one instrument, six checks, the whole coloured product.

   WHY. By 2026-08-18 the product had been corrected screen by screen for a week,
   each fix found by a founder looking at a picture. That works and it does not
   scale: the founder should not be the corpus sweep. This file asks the six
   questions those corrections turned out to be instances of, over all 55 coloured
   screens at two widths and two themes, so the next one is found by a run rather
   than by a screenshot.

   WHAT IT ASKS
     page-overflow      the document scrolls sideways
     overflows-parent   an element crosses its parent's content box
     button-wraps       a control's label takes more than one line
     small-target       a control is under 40px tall
     flush-text         a paragraph or heading sits under 12px from a surface
     empty-box          a bordered box with nothing in it

   TWO FALSE POSITIVES ARE FIXED IN THE INSTRUMENT RATHER THAN TOLERATED IN THE
   REPORT, because a check that cries wolf is a check people stop reading: a
   preset tile is a card and not a one-line control, and a checkbox's target is
   the label around it and not the input inside it. Both exclusions are one line
   each and both are named at the line.

   RUN IT:  node design/kit/screens/quality13.cjs
   Clean, 2026-08-18: two flush-text pairs remain in the whole corpus and both are
   legitimate - a loading skeleton, and a group head sitting close to the list it
   labels. Everything else reads zero.
   ============================================================================ */

const fs=require('fs'),path=require('path'),http=require('http'),{execSync}=require('child_process');
const ROOT='/Users/sergiyshevchenko/Claud Projects/Fintech Tendd';
const {chromium}=(() => { try { return require('playwright'); } catch (e) { return require(execSync('npm root -g').toString().trim() + '/playwright'); } })();
const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp'};
const srv=http.createServer((q,res)=>{const f=path.join(ROOT,decodeURIComponent(q.url.split('?')[0]));if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(res);});
const STANDS=new Set(['overview.html','rollout.html']);
const pages=fs.readdirSync(path.join(ROOT,'design')).filter(f=>f.endsWith('.html')&&!STANDS.has(f));

const PROBE = () => {
  const out=[];
  const push=(kind,el,detail)=>out.push({kind,sel:el?(el.tagName.toLowerCase()+(el.className&&typeof el.className==='string'?'.'+el.className.split(' ').slice(0,2).join('.'):'')):'-',detail});
  const R=e=>e.getBoundingClientRect();
  const cs=e=>getComputedStyle(e);
  // 1 page overflow
  const sx=document.documentElement.scrollWidth-document.documentElement.clientWidth;
  if(sx>0) push('page-overflow',null,sx+'px');
  // 2 element crossing its parent's content box
  document.querySelectorAll('main *').forEach(e=>{
    const p=e.parentElement; if(!p) return;
    const ps=cs(p); if(ps.overflowX!=='visible') return;
    const pr=R(p), er=R(e);
    if(er.width===0||pr.width===0) return;
    const padR=parseFloat(ps.paddingRight)||0, padL=parseFloat(ps.paddingLeft)||0;
    const over=Math.round(er.right-(pr.right-padR));
    const overL=Math.round((pr.left+padL)-er.left);
    if(over>1) push('overflows-parent',e,'+'+over+'px right of '+p.tagName.toLowerCase()+'.'+String(p.className).split(' ')[0]);
    else if(overL>1) push('overflows-parent',e,'+'+overL+'px left of '+p.tagName.toLowerCase()+'.'+String(p.className).split(' ')[0]);
  });
  // 3 a button label on more than one line
  document.querySelectorAll('main .btn, main button, main .tabbar a').forEach(e=>{
    if(e.classList.contains('tile')) return;   /* a preset tile is a card, not a one-line control */
    const rg=document.createRange(); rg.selectNodeContents(e);
    const n=rg.getClientRects().length;
    if(n>1 && e.textContent.trim()) push('button-wraps',e,n+' lines: "'+e.textContent.trim().slice(0,40)+'"');
  });
  // 4 tap target under 44
  document.querySelectorAll('main a, main button, main summary, main input, main select').forEach(e=>{
    const r=R(e); if(r.width===0||r.height===0) return;
    if(cs(e).display==='inline') return;
    if(e.closest('label')) return;             /* the label is the target, not the input inside it */
    if(e.closest('.skel')) return;
    if(r.height<40) push('small-target',e,Math.round(r.height)+'px tall');
  });
  // 5 flush text over a surface
  const surf=e=>{const s=cs(e); return (s.backgroundColor!=='rgba(0, 0, 0, 0)'&&s.backgroundColor!=='transparent')||parseFloat(s.borderTopWidth)>0;};
  document.querySelectorAll('main p, main h1, main h2, main h3').forEach(e=>{
    const n=e.nextElementSibling; if(!n) return;
    if(cs(n).position==='absolute') return;
    let target=null;
    if(surf(n)) target=n; else { const k=[...n.children].filter(surf); if(k.length&&k.length===n.children.length) target=k[0]; }
    if(!target) return;
    const rs=[...e.getClientRects()]; if(!rs.length) return;
    const gap=Math.round(R(target).top-rs[rs.length-1].bottom);
    if(gap<12&&gap>-40) push('flush-text',e,gap+'px to '+n.tagName.toLowerCase()+'.'+String(n.className).split(' ')[0]);
  });
  // 6 an empty bordered box
  document.querySelectorAll('main section, main div, main ul').forEach(e=>{
    const s=cs(e); if(!(parseFloat(s.borderTopWidth)>0)) return;
    const r=R(e); if(r.height<24) return;
    if(e.textContent.trim().length===0 && e.querySelectorAll('svg,img,canvas,.skel').length===0) push('empty-box',e,Math.round(r.width)+'x'+Math.round(r.height));
  });
  return out;
};

srv.listen(0,'127.0.0.1',async()=>{const port=srv.address().port;
const b=await chromium.launch();
const all=[];
for(const theme of ['light','dark']){
 for(const [w,h] of [[390,844],[1440,900]]){
  const c=await b.newContext({viewport:{width:w,height:h},isMobile:w<500,hasTouch:w<500});
  const p=await c.newPage();
  for(const f of pages){
    const errs=[]; const on=m=>{if(m.type&&m.type()==='error')errs.push(m.text());};
    p.on('console',on); const pe=e=>errs.push(String(e)); p.on('pageerror',pe);
    await p.goto('http://127.0.0.1:'+port+'/design/'+f,{waitUntil:'load'});
    if(theme==='dark') await p.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));
    await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(20);
    const r=await p.evaluate(PROBE);
    r.forEach(x=>all.push({page:f,theme,w,...x}));
    errs.forEach(e=>all.push({page:f,theme,w,kind:'console-error',sel:'-',detail:e.slice(0,80)}));
    p.off('console',on); p.off('pageerror',pe);
  }
  await c.close();
 }
}
const by={};
all.forEach(x=>{by[x.kind]=(by[x.kind]||0)+1;});
console.log('=== FINDINGS BY KIND');
Object.entries(by).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>console.log('  '+String(v).padStart(4)+'  '+k));
console.log('\n=== DETAIL (deduped by page+kind+sel+detail, light 1440 first)');
const seen=new Set();
all.sort((a,b)=>a.kind.localeCompare(b.kind)||a.page.localeCompare(b.page)).forEach(x=>{
  const k=x.kind+x.page+x.sel+x.detail; if(seen.has(k))return; seen.add(k);
  console.log('  '+x.kind.padEnd(17)+x.page.padEnd(38)+x.sel.padEnd(28)+x.detail+'   ['+x.theme+' '+x.w+']');
});
await b.close();srv.close();});
