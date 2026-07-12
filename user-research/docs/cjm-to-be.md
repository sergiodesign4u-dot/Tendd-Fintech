# CJM To-Be - Tendd

**Focus:** Emma (The Anxious Non-Looker, 29) x J-MAIN - "When I suspect I am paying for things I forgot about or never use, I want to see all my recurring charges clearly in one calm view, so that I feel in control of my money without needing to become a finance person." (personas.md Persona 1; jtbd.md Part 1)

**Scope note:** Same focus as cjm-as-is.md (Emma x J-MAIN), bank path. The To-Be path is designed inside Tendd and must stay consistent with the already-locked structure: ia/docs/flows.md Flow A, the wireframes, and founder decisions D1-D5 (CLAUDE.md).

**Status:** To-Be path, tracing, reconciliation, backlog, and critique complete (Steps 7-9). HTML artifact comes in Step 10; living-docs update in Step 11.

---

## To-Be journey (Emma inside Tendd, bank path)

The same trigger from As-Is (a surprise charge or renewal) still brings Emma here; the To-Be difference starts at arrival. Where As-Is met her with a bank wall and lost her, To-Be shows value first, then inverts the friction pit into a gradual, paired-with-action reveal. Each step traces to a concrete As-Is barrier or growth zone (from cjm-as-is.md) and serves a job (jtbd.md). Target emotions are projected design goals, not measured. The reconciliation column checks each step against the already-locked structure.

| # | Step in product | Serves job / closes As-Is barrier (trace) | Needed capability | Target emotion (projected) | Covered by (locked: screen / flow / decision) |
|---|-----------------|-------------------------------------------|-------------------|----------------------------|-----------------------------------------------|
| 1 | Arrive without a bank demand | J1 (trust before bank); closes P3 and zone 1 (bank wall at first contact) plus zone 3 (calm space) | Value-before-bank: a calm sample-list preview plus a plain-language trust statement (see DC1) | Cautious curiosity ("this is not like the others") | flows.md Flow A (bank ask is not step 1); welcome.html (calm app preview, trust and security section); trust principle |
| 2 | Choose a path on equal footing | J1 plus agency; closes P3 (the bank demand felt forced) | Dual activation paths, equal visual weight, neither preselected | In control ("I am choosing, not being forced") | flows.md Flow A PathQ; path-choice.html; D2 |
| 3 | Connect with a read-only promise | J1 plus E3 (feel safe sharing data); closes P3 and O16/O17 (fear of what apps access) | Plain-language data explanation plus the read-only line ("Read-only. Tendd cannot move your money.", "through Plaid") plus a calm loading state | Reassured | flows.md ConnectBank and SyncLoad; connect-bank.html and connect-bank-loading.html; voice.md read-only line |
| 4 | The Guided Reveal (pit to paired-with-action) [H0 crux] | J-MAIN plus E1 (competent, not judged); closes zone 2 (cryptic charges), zone 3 (overwhelm), zone 4 (all-or-nothing shock) | (a) transaction enrichment (real names, logos, categories); (b) gradual disclosure: count, then categories with logos, then total; (c) total always paired with a concrete action (see DC2) | Relief and agency - PROJECTED, gated by H0 | flows.md Reveal (gradual per D1); guided-reveal.html; D1 |
| 5 | Land on the calm list | J-MAIN plus J3 (understand a charge); closes P2 (cryptic on the card) and P4 (overwhelm) and the As-Is incompletion | Calm categorized list plus monthly total plus per-card real name/logo/category; Subscription Detail with a plain-language "what is this charge" | Calm control ("I know what is going out, and I am okay") | flows.md Home and Success; home.html and subscription-detail.html |
| 6 | A gentle return hook | J4 (stay ahead) plus retention; closes zone 5 (no return hook, the job never repeats) | Basic price-change and payment-failure alerts (free), written in plain active voice; app opens on Home in 0 to 1 tap (see DC3) | Sustained calm ("I will be told before anything surprises me") | flows.md Flow D; alerts.html; D3 (basic alerts free) |

## Diverge to converge (where a barrier had more than one answer)

- **DC1 (Step 1, value-before-bank).** Candidates: (i) a full interactive demo mode with sample data; (ii) a static preview of a sample calm list plus a plain-language trust statement; (iii) trust copy only. **Chosen: (ii).** Why: (i) is heavier than the trust moment needs at launch and delays time-to-value; (iii) is not enough because Emma needs to SEE the calm list, not be told about it ("even a demo with sample data that looks like her life would help", personas.md Trust Triggers). (ii) matches the welcome.html calm-preview wireframe.
- **DC2 (Step 4, reveal sequence).** Candidates: (i) total first, then the list; (ii) list first, then the total; (iii) count, then categories with logos, then the total paired with an action. **Chosen: (iii).** Why: (i) reproduces the As-Is shock (the pit); (ii) buries the emotional payoff and still risks overwhelm. Resolved by founder decision D1, referenced here, not re-litigated.
- **DC3 (Step 6, return hook).** Candidates: (i) push notifications for basic alerts; (ii) a weekly email digest; (iii) a home-screen widget or ambient number. **Chosen: (i) basic alerts as the primary free hook, with (ii) email digest secondary.** Why: (iii) is a later-stage ambient mechanic (competitors lean on widgets, O2), not MVP-critical; basic alerts double as the J4 value and the return engine (BP4).

## Reconciliation with the locked structure (the key finding)

**Every To-Be step is COVERED by the already-locked structure (Flow A plus the wireframes plus D1-D5). No step CONTRADICTS the locked structure.** This is the load-bearing result of the To-Be: the CJM validates that the existing IA and wireframes already cover Emma's As-Is pains, rather than surfacing a structural gap. That is expected, because the IA and wireframes were built from the same research; the CJM is the emotional cross-check that confirms it.

**The one thing NOT confirmed (a validation gap, not a structural conflict):** Step 4's target emotion (relief and agency) is the projected payoff that the riskiest assumption H0 gates. It is designed to D1 but not validated with actual avoiders. This is the same carried [?] from cjm-as-is.md; the clickable-prototype test with 5-8 screened avoiders is the close (strategy.md section 5).

**Boundary note (acquisition, upstream of this map):** the To-Be starts at "Arrive" (Welcome). What brings an avoider to Welcome in the first place is the same surprise-charge or renewal trigger from As-Is Phase 2, which the product cannot create; it can only be ready when it happens. How an avoider is acquired at all is an AARRR Acquisition question outside the in-product journey, noted here for completeness, not a structural conflict.

## Orphan check

None. Every To-Be step traces to an As-Is barrier or growth zone AND serves a job. No feature is present "because it is nice." The full-audit orphan pass is Step 9.

---

## Backlog and MVP core (Step 8)

This refines the existing MVP core (strategy.md section 4, jtbd.md Part 5 and the "3 Jobs for the MVP Core", CLAUDE.md MVP Feature Scope). It is one list, sharpened and ordered, not a second parallel backlog. Priority is relative to THIS To-Be path (Emma x J-MAIN): MVP means the reveal path breaks without it; LATER means the path works without it. Success signals tie to the AARRR stages (aarrr.md). Implementation status checks each item against the locked structure.

| # | Feature / capability | Parent (As-Is barrier or growth zone / job) | Priority | Success signal (AARRR) | Implementation status |
|---|----------------------|--------------------------------------------|----------|------------------------|-----------------------|
| B1 | Value-before-bank onboarding: calm sample-list preview plus a plain-language trust statement | zone 1 (bank wall) and zone 3 (calm) / J1 | MVP | Activation: fewer drop-offs before the reveal; path split measured from day 1 | Covered: welcome.html and path-choice.html (Flow A). Confirms structure. |
| B2 | Dual activation paths, equal weight (bank and privacy) | P3 (forced bank) / J1, J5 | MVP | Activation: bank vs privacy path split | Covered: path-choice.html; Flow A and B; D2 |
| B3 | Plain-language data explanation plus read-only trust line | P3, O16/O17 / J1, E3 | MVP | Activation: bank-connect completion | Covered: connect-bank.html; voice.md read-only line |
| B4 | Transaction enrichment: real merchant names, logos, categories | zone 2 (cryptic charges) / J3 | MVP | Activation: the reveal lands only if names are recognizable (the aha) | Display covered (guided-reveal / home / subscription-detail wireframes); the enrichment pipeline itself is NEW (a backend build capability, not just a screen) |
| B5 | Guided Reveal: gradual (count, then categories, then total), total always paired with an action | zone 4 (all-or-nothing shock), zone 3 (overwhelm) / J-MAIN, E1 | MVP | Activation: % who see 3+ subscriptions in session 1 (target 35-40%). H0 is tested here. | Covered: guided-reveal.html; Flow A Reveal; D1. Emotional outcome is H0-gated [?] |
| B6 | Calm categorized list plus monthly total (Home); Subscription Detail with a plain-language "what is this charge" | P2, P4 / J-MAIN, J3 | MVP | Activation (a populated list is the aha) plus Retention (return to a calm list) | Covered: home.html and subscription-detail.html; Flow A Home and Success |
| B7 | Basic alerts (price change, payment failed), free, active voice; app opens on Home | zone 5 (no return hook) / J4, retention | MVP | Retention: 30-day active rate (30% free / 60% paid); "Tendd caught that before I did" trust | Covered: alerts.html; Flow D; D3 (basic alerts free) |
| L1 | Weekly email digest and home-screen widget | J4 / retention | LATER (retention track; aarrr MVP overall, but not reveal-critical for this path) | Retention | Partly new; retention layer, off the reveal path |
| L2 | Full cancel guides plus direct cancel links (Pro) | J2 (Claudia's cut job) | LATER (Pro; Flow C, not Emma's J-MAIN) | Revenue: conversion at the depth gate | Covered: cancel-guide.html; D3 (Pro) |
| L3 | History and trends; advanced/predictive alerts (Pro) | J4 depth | LATER (Pro; the revenue gate per D3) | Revenue: 6-10% conversion | Covered: history-trends.html, upgrade.html; D3 |
| L4 | Privacy-safe share snapshot | S1 / referral | LATER (referral; fires post-cancel, not on the J-MAIN reveal) | Referral: 15-20% of signups from referrals | Covered: share-snapshot.html |
| L5 | Household / shared view | JH1 [? hypothesis] | LATER-stage (out of MVP, strategy.md Segment C) | not set | Deferred |
| L6 | Full privacy build: manual entry plus 400+ presets | J5 (Ravi) | MVP for the product overall, but exercised by Ravi's CJM card, not Emma's | Activation (privacy path) | Covered: add-subscription.html; Flow B; D2 |

### Cross-check against the existing MVP core

**Confirmed by the To-Be map:**
- jtbd MVP Core Job 1 (calm reveal plus trust before bank) -> B1, B2, B3, B5.
- jtbd MVP Core Job 2 (understand a charge: real names and logos) -> B4.
- jtbd MVP Core Job 3 (privacy path to the same aha) -> B2 (the visible alternative) and L6 (the full build lives in Ravi's card).
- strategy.md D3 free scope (full visibility, basic alerts free, basic cancel free) -> B6, B7.
- aarrr.md "Activation is everything" -> B5 carries the primary activation metric and is where H0 is measured.

**Refined (sharper or newly explicit):**
- Make "value-before-bank preview" an EXPLICIT free-tier MVP item (B1). Today it is implied by welcome.html but is not spelled out in the CLAUDE.md feature list.
- Enrichment is split: the display is covered by wireframes, but the enrichment pipeline is a distinct backend build capability (B4).
- The reveal sequence is pinned to gradual plus paired-action (B5, per D1).

**Orphan / stale in the OLD core (conflicts with locked decisions, needs update):**
- CLAUDE.md free tier lists "up to 10 tracked subscriptions" and "connect up to 2 bank accounts." These CONFLICT with locked D3 (free = full visibility, unlimited tracked subscriptions; limited by depth and history, never by the core relief). They also break Emma's To-Be directly: a 10-item cap or a 2-account cap truncates the reveal, so she cannot see all her charges and cannot feel relief. **Action: update CLAUDE.md MVP Feature Scope in Step 11 to remove the count and account caps and align to D3.** Not a new decision, an alignment to an already-locked one.
- aarrr.md carries the same stale "10-subscription free limit" (Revenue) and "AI import from screenshot/Gmail" at launch (Activation, which conflicts with D2: manual plus presets only, Gmail/AI is v2). Out of scope to fix in this CJM; flagged here for a later aarrr.md cleanup.

**One consistent backlog:** B1-B7 (MVP for the J-MAIN reveal path) plus L1-L6 (LATER for this path), every item traced to a parent, cross-checked against the old core, with the stale caps flagged for alignment. No parallel second list.

---

## Critique (Step 9)

**Parent audit:** no true orphans. Every backlog item has a parent (an As-Is barrier or a job). Three caveats, all already LATER: L2 (cancel guides) serves J2, Claudia's cut job, not Emma x J-MAIN, so it is off this focus but valid in the product backlog; L4 (share) hangs on S1, a [? hypothesis] job (virality unproven); L5 (household) hangs on JH1, a [? hypothesis] job explicitly deferred (strategy.md Segment C). Nothing is cut.

**Accretion, not fork:** the backlog is one list that refines the existing core (jtbd.md Part 5, strategy.md D3, aarrr.md), not a parallel second list. The one divergence is that the old CLAUDE.md free-tier caps ("up to 10 tracked subscriptions", "connect up to 2 bank accounts") contradict locked D3; the backlog surfaces this rather than duplicating it. No contradiction with strategy.md or jtbd.md.

**Consistency with the locked structure:** every MVP item (B1-B7) is covered by a wireframe plus a flow plus a decision, and none contradicts the locked structure. The only conflict is the stale CLAUDE.md caps versus D3, which is an alignment (D3 already decided this), not a new decision. Action: update CLAUDE.md MVP Feature Scope in Step 11 to drop the caps.

**MVP consistency:** B1 to B6 sit inside the activation and reveal scope that the riskiest assumption H0 covers, and each breaks the To-Be path if removed (B3, the read-only trust line, is the softest: it strengthens trust more than it strictly breaks the path). B7 (the return hook) is the one boundary item: it is marked MVP, but it is a retention bet beyond H0, and removing it does not break the first-session reveal, only the durable "feel in control." It stays MVP (justified by D3 and As-Is growth zone 5), but it is explicitly a separate bet from the H0 reveal test, not part of it.

**Three most dangerous questions (ordered by danger):**
1. H0, not closeable by desk research. The whole MVP core (the B4 plus B5 plus B6 reveal) delivers a moment whose emotional payoff is unproven with actual avoiders. The clickable-prototype test with 5-8 screened avoiders is the gate (strategy.md section 5). This is the single most consequential open item for the backlog.
2. Enrichment feasibility (B4). The reveal's quality depends on the enrichment pipeline covering the user's real charges with recognizable names and logos. If coverage is thin, the reveal shows cryptic codes anyway and B5 fails. Partly checkable from evidence (Rocket Money uses Plaid enrichment; Apple Card is the clarity benchmark), partly a build-time risk. Not the value risk that H0 is, but the second-biggest MVP risk.
3. B7 scoping. Whether the return hook is MVP or LATER for the J-MAIN focus is a scoping call; the retention hypotheses it rests on are [?] in aarrr.md. Kept MVP for now, flagged for revisit.

**Edits applied this step:** none cut (no orphans). B7 annotated as a retention bet beyond H0. The CLAUDE.md caps alignment is deferred to Step 11 (living-docs update), since it edits CLAUDE.md, not this file.
