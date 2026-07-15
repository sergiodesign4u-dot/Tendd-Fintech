# Concept - Designer Taste and Attributes

**Phase:** Concept (Etap 06). This file records how the visual language was found: the founder's taste (named, not adjectives), the attribute pairs derived from data, the three directions, and the locked choice. Step 2 fills Taste and Attributes. Directions and the logo list are appended at Step 3 and Step 4.

Every visual decision downstream must trace to a line here (an attribute pair or the taste), or to `concept/docs/references.md`. A color, form, or font with no pair here is an invention, not a decision.

---

## Designer Taste

Recorded from the founder on 2026-07-15. Taste is data too: written down next to the personas, not held in the head, so a new prompt cannot reset it to the model default.

### Liked (named products, one trait each)

- **Monzo** - warm, plain-language character with one confident accent. Character without corporate stiffness. (We take this, minus the Hot Coral. See references.md, rejected.)
- **Apple Card / Wallet** - radical clarity: one big number, zero jargon, generous whitespace, real merchant names.
- **Copilot Money** - the calm of a beautifully categorized data view. We take the calm and the category color, not the dark mode. (references.md, rejected: dark canvas.)
- **Monarch Money** - warm oat-and-white restraint, with the accent spent only on the single most important action.

### Anti-references (what to actively avoid)

- **The reflex "calm fintech" palette** - mint-green, sage, and beige-or-terracotta. This is the first thing a model reaches for on the word "calm." Guessable from the category, so it is a reflex, not a decision.
- **Beige tones** in general. Called out separately by the founder. The warm neutral leans off-white, not beige.
- **Red alerts, or red as the accent.** Red reads as alarm. Against Design Principle 1 and Emma's stated red-aversion (personas.md).
- **Rounded-everything plus friendly blob illustrations.** Reads as a toy, not as trustworthy money software.
- **AI cliches / generic AI-slop.** Purple-to-blue gradients for no reason, glassmorphism as decoration, emoji bullets, everything centered, fake-3D blobs. Reads as generated, not designed. The impeccable slop-test guards this at Step 3.

### Taste tension (named honestly)

The four liked products do not all pull the same way. Monzo and Monarch are warm-light; Apple Card is cool and minimal; Copilot is dark-mode. The resolution, already set in references.md: keep Apple's clarity but warm it toward Monzo and Monarch; take Copilot's calm categorized data and category color, but on a light canvas, not its dark one. No pair below contradicts the taste; where data and taste could diverge, it is flagged in the pair.

---

## Attributes (visual opposites)

Five pairs. Each is a visual opposition drawn from a real data line and built from a specific borrowed technique (T1 to T5 in references.md). A pair with no source is an invention.

### A1. Calm, not alarming

- **Source:** Emma, "if anything is red or uses words like warning or overspending, she closes it" (personas.md, Trust Triggers, "What scares her off"). Design Principle 1 (calm, avoid red).
- **Technique:** T1 flat calm surface (off-white canvas, white cards, generous space) plus T2 quiet gray status badge, with one reserved non-red accent (Monzo base, minus the coral).
- **Guards:** the red-accent and mint/sage anti-references.

### A2. Trust shown, not claimed

- **Source:** J1 activate without anxiety (jtbd.md J1); Emma's trust trigger, "explicit plain-language explanation of what the product reads and why" (personas.md); benchmark-trust.md C2 and Mechanism 2 (a specific claim beats vague reassurance).
- **Technique:** the read-only source line ("Read-only. Tendd cannot move your money", voice.md dictionary) rendered as a first-class, legible element next to the data, not as fine print. Specific, not "bank-level security."
- **Guards:** vague-reassurance and buried-trust patterns.

### A3. One big number, not a dashboard

- **Source:** Design Principle 2, "the most important number is always the biggest thing on screen"; Emma P4, "too many numbers, too many graphs" (personas.md).
- **Technique:** T4 Apple Wallet number hierarchy (one number owns the screen), anchored by the Polar single-big-number layout (references.md, screen anchors). The monthly total is the largest thing; everything else is secondary.
- **Guards:** the 10-numbers-at-once dashboard.

### A4. Recognition, not codes

- **Source:** Emma P2, "she sees SPOTIFYAB STOCKHOLM and cannot decode half the charges" (personas.md P2); O23, "they pattern-match, they do not analyze" (personas.md); J3 the clarity job (jtbd.md J3).
- **Technique:** T4 real brand logo plus real name plus amount plus next date, and T5 a soft, low-saturation category chip (Apple clarity plus Copilot category color, toned to light mode). Content is real brand logos, never stock photos.
- **Guards:** stock-photo content, cryptic codes.

### A5. Warm restraint, not clinical

- **Source:** voice.md, warmth by default (warm contractions, human tone); Emma wants calm that is human, not sterile; the taste (Monzo, Monarch) is warm, but Apple's clarity risks reading cold.
- **Technique:** Monzo's warm off-white canvas plus Monarch's "accent only on the one key action" restraint. The neutral is not pure clinical gray and not beige; it carries a slight lean toward the accent (decided in Step 3). Restraint means the accent is spent rarely and deliberately.
- **Guards:** the beige reflex on one side and the cold, ledger-clinical extreme (N26) on the other.

---

## Attribute-to-decision note

At Step 3, each of the three directions is labeled with which attributes it is built from. At Step 4, every color, radius, and font in concept.html carries the attribute (A1 to A5) or taste line it traces to. A decision with no such line does not ship.

---

## Directions

Three contrasting directions were built live in `concept/directions.html`, each a different answer to the same brief, each on a light canvas, each Restrained, none using red, a dark canvas, a mint/sage/beige reflex palette, or AI-slop. Each was labeled with the attributes it leads with.

- **1. Ink & Marigold** (recorded, not chosen). Warm, human, unhurried. Marigold accent `#d99a2b`, pill buttons, one warm humanist sans (Hanken Grotesk). Leads A5 warm restraint.
- **2. Petrol & Paper** (CHOSEN). Precise, trustworthy, unfussy. Deep petrol accent `#1c6a76`, crisper 10px corners, one neutral grotesk (Inter). Leads A2 trust shown.
- **3. Plum & Fog** (recorded, not chosen). Premium, gentle, distinctive. Plum accent `#7c3d67` (non-red), editorial serif total (Instrument Serif) as the reveal beat. Leads A4 recognition.

### Locked choice: Direction 2, Petrol & Paper

Founder decision, 2026-07-15. Rationale: for a user whose activation gate is trust (J1, benchmark-trust.md C2), the direction that leads with A2 (trust shown, not claimed) is the safest and most on-thesis. Deep petrol is a calm, institutional, non-red hue that reads trustworthy without alarm (A1). Inter is the clean grotesk that disappears into the task (product register). The total stays ink and biggest (A3); recognition and category color (A4, A5) ride on top of this base.

The other two directions stay on record above and can be returned to. They are not deleted.

**Locked tokens (Petrol & Paper):**

| Role | Value | Attribute |
|---|---|---|
| bg | `#ffffff` | A1 calm, true white (not beige) |
| surface | `#eef3f4` | A1, a whisper cool, cards and panels |
| ink | `#141b1d` | A3 the biggest thing is ink, near-black |
| muted | `#5a686c` | secondary text and meta |
| accent (petrol) | `#1c6a76` | A2 trust, primary action, selection, the trust line |
| hairline | `#eef2f3` | row and section separators |

Type: Inter, one family. Total 44px/800, headings 20 to 28, body 15, tight scale. Form: card radius 14px, control radius 10px, badge 6px, one soft shadow. Accent is spent only on the primary action, the current selection, and the trust line, never as decoration. Status "Active" is a quiet gray badge, never red. Semantic tones are calm: success is a muted green (#2e6b52), a price change is a warm amber (#8a5c0c text on a #f6efe0 wash, not red), a genuine error is a desaturated clay (#9a5842, on a #f3e9e5 wash), never alarm-red (per voice.md). The clay tone is scoped to genuine failures only, the sync-error banner and the could-not-load screen; the price-change alert keeps the amber wash so the two read apart. Secondary and meta text, including the next-payment date line, is the one muted #5a686c (no lighter third tier, so every text-on-surface pair clears WCAG AA).

*Next (Step 4 continued): the full stand is built in concept/concept.html and the Concept roadmap sidebar is wired. Step 5 colors Home in ui-visual/.*
