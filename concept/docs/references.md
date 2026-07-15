# References - Visual Language Sources

**Phase:** Concept (Design track, Etap 06), Step 1.
**Method:** Reference is an input, not an output. One base, specific techniques borrowed from others, no wholesale clone. A palette guessable from the category ("calm fintech" gives mint-green or beige) is a model reflex, discarded before it is proposed.
**Research tool:** Refero MCP (live, verified working 2026-07-15). App interiors that sit behind a login (Apple Wallet, Copilot, the Monzo app) are not in Refero's public-page index, so for those the technique is sourced from `research/docs/benchmark-trust.md` plus the public style page plus the local screenshots in `research/screens/`. This is noted per source.

## The benchmark this draws from

The strategic dimension was already named at Etap 01: **trust and first-time clarity** (`research/docs/benchmark-trust.md`), the single most important dimension for Tendd because the target user is anxious and non-financial, so trust and clarity are activation requirements, not nice-to-haves.

- **Base = Monzo.** Take the mechanism (flat calm surface system, a single reserved accent, plain-language active-voice rows, a quiet status badge). **Reject its Hot Coral.** Red reads as alarm and breaks Design Principle 1 (calm, avoid red) and Emma's stated red-aversion.
- **One technique from Apple Card / Apple Wallet.** The transaction clarity layer: real logo, real name, category, one big number.
- **One technique from Copilot Money.** Category color-coding as a soft pill tag. **Reject its dark midnight canvas** (Emma is a calm-light user; a dark finance UI reads as "serious tool for finance people").

---

## Source 1 (BASE): Monzo

- **Refero style:** `aa5196ac-072e-42ec-8248-1174ae843063` (https://refero.design, "Hot Coral Digital Craftsmanship")
- **Live:** https://monzo.com, tone of voice at https://monzo.com/tone-of-voice
- **Local:** research/screens/monzo-landing.png, research/screens/monzo-tone-of-voice.png
- **Role:** base of the visual language (surface system, accent discipline, badge treatment, row voice).

### Techniques taken (concrete, with tokens)

**T1. Flat calm surface system.** Off-white page canvas (Mist Gray `#f2f8f3`) with Snow White `#ffffff` cards, a single reserved accent, generous breathing room: card radius 32px, card padding 30px, element gap 24px, section gap 64px, and one subtle card shadow (`rgba(0,0,0,0.1) 0 0 10px`). No gradients, no multi-color surfaces.
- **Relieves:** Emma P4, "every app she has tried felt overwhelming, too many numbers, too many graphs" (personas.md P4), and her trust trigger "a calm, non-urgent visual environment" (personas.md Trust Triggers). The generous, one-thing-at-a-time surface is Design Principle 2 made structural.

**T2. Quiet status badge.** Monzo's status badge is Mist Gray background with Steel Gray text, 4px radius, 4/12px padding. It is a low-contrast informational tag, NOT a colored alert.
- **Relieves:** Emma's hard line, "if anything is red or uses words like warning or overspending, she closes it" (personas.md Trust Triggers, "What scares her off"). A status tag can inform without alarming.

**T3. Plain-language, active-voice rows.** Monzo's documented principle is "say who did the thing": "we blocked the payment" not "the payment was blocked" (benchmark-trust.md Mechanism 1). Applied to alert and activity rows: "Spotify raised your price from $9.99 to $11.99 last month" not "a price change was detected."
- **Relieves:** J4 the alert job, "notified immediately in plain language, so I am never caught off guard" (jtbd.md J4), and E1 feel competent, not judged (jtbd.md E1). This is already codified in voice/docs/voice.md Principle 2, so it inherits directly.

### Rejected from Monzo

**Hot Coral `#ff4f40` as the accent.** Monzo uses it as the single brand accent for every primary action. Red is an alarm signal for our user. We keep Monzo's *mechanism* of one reserved accent used sparingly, but the hue is chosen non-red in Step 2 and Step 3, derived from attributes, not borrowed. (Design Principle 1; personas.md red-aversion.)

---

## Source 2 (ONE technique): Apple Card / Apple Wallet

- **Where sourced:** benchmark-trust.md Mechanism 3 (highest benchmark score, 34/40), https://www.apple.com/apple-card/, https://support.apple.com/en-us/102329
- **Local:** research/screens/applecard-landing.png, research/screens/applecard-features.png
- **Refero note:** the Apple Card / Wallet transaction interior sits behind a login and is not in Refero's public-page index. The technique is documented from the benchmark doc and Apple's own support page, and anchored to concrete layout patterns available in Refero (see "Screen anchors" below).

### Technique taken

**T4. Transaction clarity layer.** Every subscription row shows a real brand logo, the real readable name (not "NFLX*COM 123"), a category, the amount last charged, and the next date, with one number given clear size hierarchy (the most important number is the biggest thing on the row or screen).
- **Relieves:** Emma P2, "she sees SPOTIFYAB STOCKHOLM and DCSF MEDIA GROUP and cannot decode half the charges, which makes looking feel futile and stressful" (personas.md P2), and J3 the clarity job (jtbd.md J3). It also fits BP2, "users recognize Spotify and Netflix logos instantly, they cannot process SPOTIFYAB STOCKHOLM" (personas.md O23). This is why Tendd's content layer is real brand logos, not stock photos.

---

## Source 3 (ONE technique): Copilot Money

- **Refero style:** `3b22504a-d380-4a65-8063-f74a0226eae7` ("Midnight ocean with glowing buoys")
- **Live:** https://copilot.money
- **Local:** research/screens/copilot-landing.png

### Technique taken

**T5. Category as a soft colored pill.** Copilot's Vibrant Category Tag is a pill (40px radius) with one distinct color per category, used as a recognition signal. We take the *mechanism* (a quiet color-coded category chip that lets the eye pattern-match) and tone it down from Copilot's neon inset glow to a calm, light-mode chip: one restrained tint per category, low saturation, no glow.
- **Relieves:** J3 the clarity job and BP2 pattern recognition over analysis (personas.md O23), and E1 (a chip to recognize, not a chart to decode). The category is a glance, not a task.

### Rejected from Copilot

**The dark midnight canvas** (`#000814` page, white-on-dark). Copilot's whole system is dark mode. For Emma, calm-light is the trust environment; a dark finance UI signals "serious tool for finance people," the opposite of our position. We take only the category-tag technique, on a light canvas.

---

## Screen anchors (concrete layout, not style clones)

Refero's screen index covers SaaS billing and product screens well. These anchor specific layout patterns; none is copied, each contributes one arrangement idea:

- **Polar dashboard** (`dab41ea2-8cf8-4b03-82f1-ab7e597527f6`, `2754fd34-474c-40d4-a762-547cc310ef5f`): calm light dashboard, single accent, rounded white metric cards, one big number (MRR) given clear hierarchy. Anchor for "one big number plus calm metric cards plus a single accent" (Design Principle 2), for the Home etalon.
- **Duolingo Super settings** (`cbce989c-30cb-4180-9597-55a434008700`): a subscription-status card with a quiet status treatment and plain layout. Anchor for the subscription card plus status pattern.
- **Designstripe billing** (`18153f75-efbc-4b92-a2e9-62910447f542`): off-white background, single accent, plan card plus a receipts list with a badge. Anchor for the recurring-charges list row.
- **Family transfer detail** (`b0bcb8f7-9e99-4699-ab50-72e04036f599`): label and value rows in a single calm column with one primary action. Anchor for the Subscription Detail key-value layout (the contrast screen).

---

## Anxiety-to-mechanism map (summary)

| Persona anxiety (source) | Technique | From |
|---|---|---|
| "Every app felt overwhelming, too many numbers" (personas.md P4) | T1 flat calm surface, generous space | Monzo base |
| "If anything is red or says warning, she closes it" (personas.md Trust Triggers) | T2 quiet gray status badge, no red | Monzo base |
| "Never caught off guard by a charge" (jtbd.md J4) | T3 plain-language active-voice rows | Monzo base |
| "SPOTIFYAB STOCKHOLM, cannot decode half the charges" (personas.md P2, O23) | T4 real logo, real name, category, one big number | Apple Card / Wallet |
| "They pattern-match, they do not analyze" (personas.md O23, jtbd.md J3) | T5 soft color-coded category chip | Copilot Money |

## What we deliberately reject (guards for Step 3)

- **Any red as the accent** (Monzo Hot Coral and its relatives). Red equals alarm for this user.
- **A dark finance canvas** (Copilot midnight). Calm-light is the trust environment for Emma.
- **The reflex "calm fintech" palette** (mint-green, sage, beige-and-terracotta). Guessable from the category, so it is a reflex, not a decision. Discarded before the three directions are proposed.
- **Stock photography as content.** Tendd is data-first. The content layer is real brand logos (Mechanism 3), never stock photos.

---

*Next (Step 2): translate these techniques and the founder's recorded taste into 3 to 5 attribute pairs, each with a source line, in concept/docs/concept.md.*
