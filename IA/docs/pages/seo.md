# Page-level IA - SEO Engine (node 8)

- **Node:** 8 SEO. The search strategy for Tendd's public surface. It is deliberately small, because Tendd is mostly an authenticated app. One artifact because SEO is one coherent model applied to one (currently) public screen.
- **Type:** Section (writing principles, keyword model, templates, structured data, technical checklist).
- **Canonical visual:** `IA/seo.html`.
- **Job:** supports J1 at the acquisition edge (a person finds Tendd before they trust it). Not a user job per se; it feeds the AARRR Acquisition stage (master-research: SEO for "subscription tracker").
- **Related:** applied to onboarding 1.1 Welcome (the one public node). Every other node in the library is explicitly private (see each file's SEO section).

---

## Scope (honest)

- **Public and indexable today:** onboarding 1.1 Welcome / Value Intro only. It is reachable before sign-in.
- **Not indexable:** everything from Activation Path Choice (1.2) and Guided Reveal (1.5) onward. These are behind the activation flow and are transactional or private. Each cluster file says so in its own SEO section.
- **Now in this repo (updated 2026-07-04):** the public marketing landing is built in-repo as the Welcome / Value Intro page (`wireframes/welcome.html`), replacing the earlier plan for a separate out-of-repo site. It is the single public, indexable surface (full-width hero, benefits, how-it-works, trust and security, social proof, footer) and it reuses the templates and keyword model below. A separate standalone marketing domain may still come later, but the front door now exists here.

This scope is not forced onto private screens. Do not add schema, titles, or keywords to authenticated app screens.

---

## Writing principles (match Tendd's calm, trust-first tone)

Traces CLAUDE.md design principles.
- **Calm over clever.** No urgency, no "STOP wasting money" fear copy. The promise is relief, not alarm.
- **Plain money language.** "See what you are paying for", not "optimize your recurring expenditure".
- **Trust up front.** Lead with "no bank connection needed to start" because the trust barrier is the biggest gap (master-research key conclusion 2).
- **Name the person, not the power user.** Speak to someone who finds finance apps stressful, not to a budget optimizer (personas.md Emma). Avoid "budget", "net worth", "spreadsheet".
- **Specific and honest.** Real numbers ("the average person has 12 subscriptions") over vague claims.

---

## Keyword model

Grounded in research/docs/master-research.md and research/docs/competitive-analysis.md (which establish "subscription tracker" as the category term and the calm, no-bank, and cancel angles as the gaps). Search volumes and keyword difficulty are marked [?] because they need real tool data.

**Head terms (high volume, high competition):**
- subscription tracker [? vol, KD]
- subscription manager [? vol, KD]
- track subscriptions [? vol, KD]
- cancel subscriptions [? vol, KD]

**Commercial intent (mid volume, buyer intent):**
- best subscription tracker app [? vol, KD]
- subscription tracker app [? vol, KD]
- app to track subscriptions [? vol, KD]
- subscription tracker without bank connection [? vol, KD] (the privacy angle, ReSubs proves demand, master-research conclusion 6)

**Long-tail informational (lower volume, high relevance, low competition):**
- how to find forgotten subscriptions [? vol, KD]
- how much am I spending on subscriptions [? vol, KD]
- how to cancel [specific service] [? vol, KD] (a large templatable set, matches the cancel-guide value, ReSubs' 30+ guides)
- why do I have so many subscriptions [? vol, KD]
- how to see all my subscriptions in one place [? vol, KD]

**Differentiator / brand-position terms (own the gap, low current competition):**
- calm subscription tracker [? vol, KD]
- subscription anxiety [? vol, KD]
- track subscriptions without linking bank [? vol, KD]

Priority order for the public Welcome page: own the differentiator and privacy terms first (uncontested, on-brand), compete on commercial intent second, treat head terms as long-game. The cancel-guide long tail ("how to cancel X") is the strongest future content play if a public marketing site is built.

---

## Templates

**Welcome (1.1) landing, public (updated 2026-07-04 to the full landing):**
- Title (under ~60 chars): "Tendd - See and control your subscriptions, calmly" [? draft copy]
- Meta description (under ~155 chars): "See every subscription and recurring charge in one calm view. No bank connection needed to start. Built for people who find money apps stressful." [? draft copy]
- H1: "See what you are paying for. Calmly." (matches the on-screen hero headline)
- Section H2s now map to the landing's real sections, one differentiator each: "Calm control of your recurring money" (benefits, J1/J2/J4), "How Tendd works" (three steps), "Trusted with your money" (no-bank, read-only, cancel help). These realize the "one H2 per differentiator" template below.

**Standalone marketing domain (still out of repo), template (kept for a future separate site):**
- Title: "<Primary keyword> | Tendd" (for example "Subscription tracker without bank connection | Tendd")
- Description: one calm sentence with the primary keyword and the trust hook.
- H1: the keyword phrased in Tendd's plain, calm voice.
- One H2 per differentiator (calm, no-bank, cancel help), each mapping to a keyword cluster above.

---

## Structured data

- **Organization:** name Tendd, logo, and (when they exist) social profiles. On the public Welcome page or marketing site.
- **WebSite:** site name and, if a public search exists, a SearchAction. On the marketing site if built.
- **No Product or Offer schema** in the app: Tendd is a SaaS, and the in-app Upgrade screen is private and transactional, not an indexable product page. A public pricing page (if built later) could carry Offer schema; that is out of this repo.
- No FAQ or HowTo schema until real public content (for example cancel guides) is published on a crawlable surface.

---

## Technical checklist

- **Canonical:** the public Welcome (or marketing) URL is self-canonical; app routes are never canonicalized to a marketing page.
- **Indexation:** Welcome indexable; everything behind the activation flow returns `noindex` (or is simply not server-rendered for crawlers). A real 404 for unknown server routes (system.md 9.2).
- **Mobile-first:** Tendd is mobile-first responsive; the public surface passes mobile-friendly by construction.
- **Core Web Vitals:** budget the public Welcome for good LCP (the sample preview image is the likely LCP element, so it must be optimized and not block), low CLS (reserve space for the preview), and responsive INP. [? set concrete CWV targets with real field data once live.]
- **Sitemap and robots:** include only public URLs in the sitemap; disallow crawling of app routes in robots where appropriate, without blocking the public Welcome.

---

## Accessibility

Not a UI surface itself; the SEO rules reinforce accessibility (real text headings, not image-only; descriptive titles) which also helps assistive tech. The public Welcome follows onboarding.md's accessibility notes.

---

## Mobile (Tendd is mobile-first responsive web scaling to desktop)

The only public surface (Welcome) has no structural mobile/desktop delta (onboarding.md). SEO does not change by breakpoint.

---

## Locked (draft, 2026-07-03) / Open

- **Updated and locked 2026-07-04:** the public marketing landing is built in-repo as Welcome (1.1) / `wireframes/welcome.html`, not deferred to an out-of-repo site. Public scope is still exactly this one surface; the templates and structured-data model apply to it.
- **Locked (draft, 2026-07-03):**
  - Public scope is Welcome (1.1) only; everything else is explicitly private.
  - Calm, trust-first, plain-language writing principles for public copy.
  - A keyword model grounded in research, prioritizing the uncontested differentiator and privacy terms.
  - Title, description, and heading templates for Welcome and a future marketing page.
  - Organization and WebSite schema only; no in-app Product schema.
- **Still [?] (operational or data, not IA):**
  - Real search volumes and keyword difficulty. Resolving input: a keyword tool (Ahrefs, Semrush, or similar).
  - Concrete Core Web Vitals targets. Resolving input: real field data once the public surface is live.
  - Whether and when a separate standalone marketing domain is built outside this app repo (the in-repo Welcome landing now covers the public front door).
