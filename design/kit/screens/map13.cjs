/* ============================================================================
   map13.cjs - the correspondence map of stage 13, the Handoff.

   WHY THIS FILE EXISTS. The first question anybody asks inside somebody else's
   product is "if I touch this, what moves". The answer has two directions and
   only one of them is easy: screen down to token is a walk, token up to screens
   is the one a person actually needs before they change anything. This file
   takes BOTH off the code, and it derives the second by INVERTING the first
   rather than by walking the tree a second time: two editions of one dataset
   drift apart, and the one used less often goes stale first.

   WHAT IT READS, and nothing is typed by hand:
     screens     design/*.html minus overview.html and rollout.html, the two
                 stands of that folder. The same corpus rollout12.cjs uses.
     zones       the DOM, in a real browser: the direct children of .app, and
                 the direct children of <main class="screen"> inside it. A zone
                 is a region of a screen and the markup already names them.
     components  design/system/components/*.css and patterns/*.css. A class
                 belongs to the file whose selectors define it.
     tokens      every var(--x) inside a component or pattern file, PLUS a
                 separate pass over base.css, which reads tokens and is not a
                 component: without that pass its tokens land in the dead list.
     levels      design/system/tokens.css. A declaration whose value contains
                 var() is a SEMANTIC role; one with a raw value is a PRIMITIVE.
     copy        voice/docs/microcopy.md, whose rows are screen + zone + line,
                 so screen and zone already ARE the address of a string.

   THE INVERSION IS TWO KNEES DEEP, and that is not a detail. Rule 2 of
   design/system/CLAUDE.md says a component reads colour ONLY through a semantic
   role, so a flat grep of var() over the components names no primitive at all
   and a one-knee idle control would declare the WHOLE primitive level dead. A
   token is dead here when no chain reaches it: component -> semantic -> primitive.

   RUN IT:  node design/kit/screens/map13.cjs
            node design/kit/screens/map13.cjs --json
   It serves the repository to a headless browser itself and needs playwright,
   local first and global after, like every other instrument here.
   ============================================================================ */

const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = path.resolve(__dirname, '../../..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const list = (dir, ext) => fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith(ext)).sort();

/* playwright: local first, global after. The same resolution every instrument
   in this folder uses, so a receiver who typed `npm install` and a machine that
   never did both run it. */
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
const SCREENS = list('design', '.html').filter(isProductScreen);

/* --- the class vocabulary of each component file -------------------------- */
/* Same selector reader rollout12.cjs uses: everything before a { on a rule
   head, comments stripped. Cheap and sufficient, because a class name in a
   declaration value is not a thing. */
function selectorsOf(css) {
  const out = new Set();
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const re = /\.([A-Za-z_][-\w]*)/g;
  stripped.split('}').forEach(block => {
    const head = block.split('{')[0];
    if (!head) return;
    let m;
    while ((m = re.exec(head)) !== null) out.add(m[1]);
    re.lastIndex = 0;
  });
  return out;
}

/* THE HOST SCOPE AND THE KEY SELECTOR, and without both the map is wrong
   rather than rough.

   HOST. Every selector in this system carries its host, `.app` or `.landing`,
   and the two vocabularies overlap: `.lockup` is written by app-bar.css AND by
   landing-bar.css. A class read without its host puts the landing's components
   on fifty screens they have never stood on.

   OWNERSHIP. A component file mentions many classes that are not its own: the
   host, and the CONTEXT it styles inside. `button.css` writes `.app .btn` and
   plan-option.css writes `.app .plan-opt .btn`; both mention `.btn` and only
   the first owns it. So ownership is read off the DEPTH under the host: one
   segment means the file owns that class, more than one means it is decorating
   somebody else's class inside its own context, which is a declared pattern
   here and not a defect. A file with no depth-one rule at all keeps its
   shallowest keys instead, so a component that only ever renders nested is
   still owned by somebody. */
function scopedClassesOf(css) {
  const owned = new Map();             // class -> Set('app'|'landing'|'any')
  const byDepth = new Map();           // depth -> [[class, host]]
  /* an at-rule prelude becomes a bare brace, so a rule INSIDE @container keeps a
     real selector head. Without this every rule in a container query is read as
     part of the prelude and a component collects classes it never writes. */
  const stripped = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/@[a-z-]+[^{;]*\{/gi, '{');
  /* Heads are read by walking the braces rather than by splitting on one of
     them. Splitting on `}` and taking what stands before the first `{` loses
     every rule nested in a container query, because that block holds two
     opening braces and the first belongs to the query. groups-column-set.css
     has exactly one rule and it is inside one, so the bug reads as a component
     that stands nowhere. */
  const heads = [];
  let pending = '';
  stripped.split(/([{}])/).forEach(tok => {
    if (tok === '{') { heads.push(pending); pending = ''; }
    else if (tok === '}') pending = '';
    else pending = tok;
  });
  heads.forEach(rawHead => {
    const head = rawHead.includes(';') ? rawHead.slice(rawHead.lastIndexOf(';') + 1) : rawHead;
    if (!head || head.includes('@')) return;
    head.split(',').forEach(raw => {
      const sel = raw.trim();
      if (!sel) return;
      const host = /\.app\b/.test(sel) ? 'app' : /\.landing\b/.test(sel) ? 'landing' : 'any';
      /* drop the host, drop combinators, then split into compound segments */
      const body = sel
        .replace(/\.app\b|\.landing\b/g, ' ')
        .replace(/[>+~]/g, ' ')
        .replace(/:[a-z-]+(\([^)]*\))?/gi, '')
        .replace(/\[[^\]]*\]/g, '')
        .trim();
      const segs = body.split(/\s+/).filter(Boolean).filter(x => x.includes('.'));
      if (!segs.length) return;
      const key = segs[segs.length - 1];
      const classes = [...key.matchAll(/\.([A-Za-z_][-\w]*)/g)].map(m => m[1])
        .filter(c => c !== 'app' && c !== 'landing').sort();
      if (!classes.length) return;
      /* a COMPOUND key is a signature, not two owners. `.btn.cand` is written by
         the candidate and read only where an element carries both, so matching a
         zone on `.btn` alone would put that component on every screen with a
         button. The signature is the whole compound. */
      const sig = classes.join('.');
      const depth = segs.length;
      if (!byDepth.has(depth)) byDepth.set(depth, []);
      byDepth.get(depth).push([sig, classes, host]);
      if (depth === 1) {
        if (!owned.has(sig)) owned.set(sig, { classes, hosts: new Set() });
        owned.get(sig).hosts.add(host);
      }
    });
  });
  if (!owned.size && byDepth.size) {
    const min = Math.min(...byDepth.keys());
    byDepth.get(min).forEach(([sig, classes, h]) => {
      if (!owned.has(sig)) owned.set(sig, { classes, hosts: new Set() });
      owned.get(sig).hosts.add(h);
    });
  }
  return owned;
}
function varsOf(css) {
  const out = new Set();
  const re = /var\(\s*(--[-\w]+)/g;
  let m;
  while ((m = re.exec(css)) !== null) out.add(m[1]);
  return out;
}

const COMPONENT_FILES = list('design/system/components', '.css')
  .map(f => ({ name: f.replace(/\.css$/, ''), level: 'component', file: 'design/system/components/' + f }));
const PATTERN_FILES = list('design/system/patterns', '.css')
  .map(f => ({ name: f.replace(/\.css$/, ''), level: 'pattern', file: 'design/system/patterns/' + f }));
const UNITS = COMPONENT_FILES.concat(PATTERN_FILES);

UNITS.forEach(u => {
  const css = read(u.file);
  u.classes = selectorsOf(css);
  u.scoped = scopedClassesOf(css);
  u.tokens = varsOf(css);
});

/* class -> the units that define it. A class can be defined in more than one
   file (a component and the pattern that arranges it), and that is reported
   rather than resolved: picking one silently would hide a real overlap. */
/* every signature any unit owns, flattened once so a zone is matched in one
   pass rather than once per unit */
const SIGNATURES = [];
UNITS.forEach(u => u.scoped.forEach((v, sig) => {
  SIGNATURES.push({ unit: u.name, sig, classes: v.classes, hosts: v.hosts });
}));
/* a zone carries a unit when SOME element in it carries every class of one of
   that unit's signatures, under this screen's host */
function unitsInZone(elementSets, host) {
  const out = new Set();
  SIGNATURES.forEach(s => {
    if (!(s.hosts.has(host) || s.hosts.has('any'))) return;
    for (const set of elementSets) {
      if (s.classes.every(c => set.has(c))) { out.add(s.unit); return; }
    }
  });
  return out;
}

/* base.css is not a component and it reads tokens. Without this pass every
   token only base.css touches would be reported dead. */
const BASE_TOKENS = varsOf(read('design/system/base.css'));

/* --- token levels, off tokens.css ----------------------------------------- */
/* A declaration whose value contains var() is a SEMANTIC role; one with a raw
   value is a PRIMITIVE. That is rule 1 of design/system/CLAUDE.md read as code
   rather than quoted. Both themes are scanned: a role exists in :root and in
   [data-theme="dark"] or it does not exist, and the dark edition points at the
   -dark primitives, which is exactly the second knee we need. */
const tokensCss = read('design/system/tokens.css').replace(/\/\*[\s\S]*?\*\//g, '');
const DECL = /(--[-\w]+)\s*:\s*([^;]+);/g;
const primitives = new Set();
const semantic = new Map();      // role -> Set(primitives or roles it reads)
let d;
while ((d = DECL.exec(tokensCss)) !== null) {
  const name = d[1], value = d[2].trim();
  const refs = [...value.matchAll(/var\(\s*(--[-\w]+)/g)].map(x => x[1]);
  if (refs.length) {
    if (!semantic.has(name)) semantic.set(name, new Set());
    refs.forEach(r => semantic.get(name).add(r));
  } else if (!semantic.has(name)) {
    primitives.add(name);
  }
}
/* a name declared both ways anywhere is a role: it reads something at least once */
semantic.forEach((_, k) => primitives.delete(k));
const ALL_TOKENS = new Set([...primitives, ...semantic.keys()]);

/* --- microcopy: screen + zone is the address of a line --------------------- */
/* The rows read | Screen | Zone | Line | Type |. There is no "screens" column
   to invert and no Globals section: a global line (the bar, the tab bar) is
   listed under every screen that carries it, so screen and zone address it
   directly. Recorded here because the pack for this stage expects the other
   shape and a reader will look for it. */
const copyRows = [];
read('voice/docs/microcopy.md').split('\n').forEach(line => {
  const m = line.match(/^\|\s*([a-z0-9-]+)\s*\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|\s*([a-z-]+(?:\s*\(USER\))?)\s*\|\s*$/i);
  if (m) copyRows.push({ screen: m[1], zone: m[2], type: m[4] });
});
const copyByScreen = new Map();
copyRows.forEach(r => {
  if (!copyByScreen.has(r.screen)) copyByScreen.set(r.screen, new Map());
  const z = copyByScreen.get(r.screen);
  z.set(r.zone, (z.get(r.zone) || 0) + 1);
});

/* --- the registry, for the roll-call -------------------------------------- */
const navSrc = read('design/_nav.js');
const registry = [];
[...navSrc.matchAll(/\{\s*name:\s*'([^']+)',\s*base:\s*'([^']+)',\s*states:\s*\[([^\]]*)\]/g)].forEach(m => {
  const base = m[2];
  registry.push(base);
  m[3].split(',').map(s => s.trim().replace(/^'|'$/g, '')).filter(Boolean)
    .forEach(st => registry.push(base.replace(/\.html$/, '') + '-' + st + '.html'));
});

/* --- serve and walk -------------------------------------------------------- */
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

const IN_BROWSER = () => {
  /* A ZONE is a region of a screen, and the markup already names them: the
     direct children of .app (the bar, the screen, the tab bar) with the screen
     expanded one level further, because <main class="screen"> is the page and
     its children are its regions. */
  const app = document.querySelector('.app') || document.querySelector('.landing');
  if (!app) return { zones: [], host: '' };
  const host = app.classList.contains('app') ? 'app' : 'landing';
  const roots = [];
  /* THE SHELL IS A ZONE TOO, and it has to be added by hand because the walk
     below expands <main class="screen"> into its children and would otherwise
     never look at the two elements that ARE the shell: .app and .screen. A map
     that identifies a component by the classes under it cannot see the host it
     is standing in unless the host is entered as a place of its own. */
  const shellEl = { classes: [] };
  Array.from(app.classList).forEach(c => shellEl.classes.push(c));
  const screenEl = app.querySelector(':scope > main.screen, :scope > .screen');
  Array.from(app.children).forEach(ch => {
    if (ch.matches('main.screen, .screen')) Array.from(ch.children).forEach(k => roots.push(k));
    else roots.push(ch);
  });
  const zones = roots.map(el => {
    const sets = new Set();
    const add = n => { if (n.classList.length) sets.add(Array.from(n.classList).sort().join(' ')); };
    add(el);
    el.querySelectorAll('[class]').forEach(add);
    const name = el.classList.length ? Array.from(el.classList).join(' ') : el.tagName.toLowerCase();
    return { zone: name, tag: el.tagName.toLowerCase(), sets: Array.from(sets) };
  });
  const shellSets = [Array.from(app.classList).sort().join(' ')];
  if (screenEl && screenEl.classList.length) shellSets.push(Array.from(screenEl.classList).sort().join(' '));
  zones.unshift({ zone: 'the shell', tag: app.tagName.toLowerCase(), sets: shellSets });
  return { zones, host };
};

(async () => {
  const { chromium } = playwright();
  const { server, port } = await serve();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  const map = [];                       // one row per screen/zone/component
  const componentScreens = new Map();   // component -> Set(screens)
  const screenZones = new Map();

  for (const file of SCREENS) {
    await page.goto(`http://127.0.0.1:${port}/design/${file}`, { waitUntil: 'domcontentloaded' });
    const { zones, host } = await page.evaluate(IN_BROWSER);
    screenZones.set(file, zones.map(z => z.zone));
    const screenKey = file.replace(/\.html$/, '');
    zones.forEach(z => {
      const elementSets = z.sets.map(x => new Set(x.split(' ')));
      const units = unitsInZone(elementSets, host);
      units.forEach(u => {
        if (!componentScreens.has(u)) componentScreens.set(u, new Set());
        componentScreens.get(u).add(file);
      });
      map.push({
        screen: file,
        zone: z.zone,
        components: Array.from(units).sort(),
        copy: copyByScreen.has(screenKey)
          ? Array.from(copyByScreen.get(screenKey).keys())
          : []
      });
    });
  }

  await browser.close();
  server.close();

  /* --- the inversion, two knees ------------------------------------------- */
  /* Level one: a component reads a token directly. Level two: that token is a
     semantic role, and the role reads a primitive. Both knees are recorded so
     the reverse list can answer either question. */
  const tokenComponents = new Map();  // token -> Set(component) reading it DIRECTLY
  UNITS.forEach(u => u.tokens.forEach(t => {
    if (!tokenComponents.has(t)) tokenComponents.set(t, new Set());
    tokenComponents.get(t).add(u.name);
  }));
  BASE_TOKENS.forEach(t => {
    if (!tokenComponents.has(t)) tokenComponents.set(t, new Set());
    tokenComponents.get(t).add('base.css');
  });

  /* reached: a token any chain arrives at */
  const reached = new Set();
  const walk = (tok, seen) => {
    if (seen.has(tok)) return;
    seen.add(tok);
    reached.add(tok);
    (semantic.get(tok) || new Set()).forEach(next => walk(next, seen));
  };
  tokenComponents.forEach((_, t) => walk(t, new Set()));

  /* token -> screens, INVERTED from the map above rather than walked again */
  const tokenScreens = new Map();
  const addTokenScreen = (tok, screen, via) => {
    if (!tokenScreens.has(tok)) tokenScreens.set(tok, { screens: new Set(), via: new Set() });
    tokenScreens.get(tok).screens.add(screen);
    tokenScreens.get(tok).via.add(via);
  };
  map.forEach(row => row.components.forEach(c => {
    const u = UNITS.find(x => x.name === c);
    if (!u) return;
    u.tokens.forEach(t => {
      addTokenScreen(t, row.screen, c);
      /* second knee */
      (semantic.get(t) || new Set()).forEach(p => addTokenScreen(p, row.screen, c + ' -> ' + t));
    });
  }));

  /* --- idle control -------------------------------------------------------- */
  const deadTokens = [...ALL_TOKENS].filter(t => !reached.has(t)).sort();
  const idleComponents = UNITS.filter(u => !componentScreens.has(u.name)).map(u => u.name).sort();
  const registrySet = new Set(registry);
  const notInRegistry = SCREENS.filter(f => !registrySet.has(f) && f !== 'index.html').sort();
  const registryNoFile = registry.filter(f => !SCREENS.includes(f)).sort();

  /* --- report -------------------------------------------------------------- */
  const out = [];
  const p = s => out.push(s);
  p('THE CORRESPONDENCE MAP - node design/kit/screens/map13.cjs');
  p('');
  p(`screens in the corpus              ${SCREENS.length}   (every file design/_nav.js names; on disk and unregistered: ${list('design', '.html').filter(f => !isProductScreen(f)).join(', ')})`);
  p(`rows in the map (screen x zone)    ${map.length}`);
  p(`components and patterns            ${UNITS.length}   (${COMPONENT_FILES.length} components, ${PATTERN_FILES.length} patterns)`);
  p(`tokens declared in tokens.css      ${ALL_TOKENS.size}   (${primitives.size} primitive, ${semantic.size} semantic)`);
  p(`microcopy rows parsed              ${copyRows.length} across ${copyByScreen.size} screen keys`);
  p('');
  p('ROLL-CALL AGAINST design/_nav.js');
  p(`   screens the registry names       ${registry.length}`);
  p(`   in the map                       ${registry.filter(f => SCREENS.includes(f)).length}`);
  p(`   named by the registry, no file    ${registryNoFile.length}${registryNoFile.length ? '  ' + registryNoFile.join(' ') : ''}`);
  p(`   on disk, not in the registry      ${notInRegistry.length}${notInRegistry.length ? '  ' + notInRegistry.join(' ') : ''}`);
  p('');
  p('IDLE CONTROL');
  p(`   tokens no chain reaches           ${deadTokens.length}`);
  deadTokens.forEach(t => p(`      ${t}${/^--bp-/.test(t) ? '   NOT dead: a width point is a REGISTER, and a container query cannot read a var(), so its literal is the application' : ''}`));
  p(`   components on no screen           ${idleComponents.length}`);
  idleComponents.forEach(c => p(`      ${c}`));
  p('');
  p('THE TEN MOST WIDELY READ TOKENS, by screens they stand on');
  [...tokenScreens.entries()]
    .sort((a, b) => b[1].screens.size - a[1].screens.size)
    .slice(0, 10)
    .forEach(([t, v]) => p(`   ${t.padEnd(28)} ${String(v.screens.size).padStart(3)} screens`));
  p('');
  p('COMPONENTS BY REACH');
  [...componentScreens.entries()]
    .sort((a, b) => b[1].size - a[1].size)
    .forEach(([c, s]) => p(`   ${c.padEnd(26)} ${String(s.size).padStart(3)} screens`));

  if (process.argv.includes('--json')) {
    const json = {
      screens: SCREENS,
      map: map,
      componentScreens: Object.fromEntries([...componentScreens].map(([k, v]) => [k, [...v].sort()])),
      tokenScreens: Object.fromEntries([...tokenScreens].map(([k, v]) => [k, { screens: [...v.screens].sort(), via: [...v.via].sort() }])),
      semantic: Object.fromEntries([...semantic].map(([k, v]) => [k, [...v]])),
      primitives: [...primitives].sort(),
      deadTokens, idleComponents, registryNoFile, notInRegistry,
      unitTokens: Object.fromEntries(UNITS.map(u => [u.name, [...u.tokens].sort()])),
      unitSignatures: Object.fromEntries(UNITS.map(u => [u.name, [...u.scoped.keys()].sort()]))
    };
    fs.writeFileSync(path.join(__dirname, 'map13.json'), JSON.stringify(json, null, 1));
    p('');
    p('wrote design/kit/screens/map13.json');
  }

  console.log(out.join('\n'));
})();
