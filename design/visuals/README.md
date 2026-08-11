# Visuals - Tendd

Stage 07, UI + Visual, step 4. This file is the asset plan: what imagery this product carries,
where every piece comes from, and what has to be true of it before it lands on a screen.

**This step was rewritten after its first attempt failed.** The first version specified six
generated still-life photographs. They were rejected at review: see the closing section.

## What this product does not carry

**No stock art, and no photograph inside a product screen.** `DESIGN.md` and `concept.md` both
say it. The content of a Tendd screen is real merchant marks, real names, real amounts and real
dates. A person opening a money app to a smiling stranger on a sofa learns that the product is
selling her a feeling instead of showing her a number.

**No photography on the landing either** (founder, 2026-08-10). Every one of the ten landing
blocks has a better answer than a photograph, and the hero has the best one: the product. The
landing's own markup agrees, it carries no image slot at all.

**No illustrated empty states.** An empty state gets a sentence and a button. That is principle
1 and the Flat Paper Rule, applied where products usually reach for a mascot.

So Tendd's imagery is three things: the merchant marks, the icon set, and renders of the product
itself. All three are content or system, none of them is decoration.

## 1. Merchant marks, the largest asset in the product

**111 places.** The wireframes carry 94 `<span class="logo">[logo]</span>` plus 17 in the
skeleton state, across 14 distinct merchants. Every list row, every detail screen, every preset
in the manual path. Nothing else in the product comes close to this count.

**Full colour, real logos** (founder, 2026-08-10). This is deliberately a hole punched in the
palette rule, and the reasoning is that a merchant mark is **data, not chrome**: it is the user's
own Netflix, rendered as Netflix. The One Voice Rule still holds for everything the product
itself says, because petrol remains the only colour Tendd uses to speak. See the containment
rules below, which are what keep 14 brand colours from turning the calm list loud.

### Containment, and these are binding

- **The mark lives inside a fixed 36px square** with `--radius-xs`, and never bleeds past it. The
  row's geometry does not change per merchant.
- **The mark is the only saturated thing in its row.** Amount, name and date stay ink and muted.
  A row never tints its background, its border or its text to match the brand.
- **Petrol never sits inside the square.** The one accent and the brand colour do not touch, so
  the eye never has to decide which one is Tendd speaking.
- **No brand colour anywhere outside that square.** Not in the category, not in the chart, not in
  a hover.

### The 14 files

Put them in `design/visuals/logos/`, exactly these names:

| File | Merchant on screen |
|---|---|
| `netflix.svg` | Netflix |
| `spotify.svg` | Spotify Premium |
| `amazon-prime.svg` | Amazon Prime |
| `disney-plus.svg` | Disney+ |
| `hulu.svg` | Hulu |
| `apple-music.svg` | Apple Music |
| `icloud.svg` | iCloud+ |
| `adobe-cc.svg` | Adobe Creative Cloud |
| `chatgpt.svg` | ChatGPT Plus |
| `notion.svg` | Notion |
| `strava.svg` | Strava |
| `peloton.svg` | Peloton App |
| `nyt.svg` | The New York Times |
| `economist.svg` | The Economist |

**What each file has to be:** SVG, full colour, `viewBox="0 0 64 64"`, full-bleed square, flat
fill, the glyph optically centred, no fixed `width` or `height` so CSS owns the size, no gradient,
no shadow, no embedded raster, **and no baked corner radius**, because `.logo` in `kit.css` is
`overflow: hidden` with its own `border-radius` and a second radius fights it.

### Where they came from, and what is still wrong with them

The plan was to take every mark from the brand's own press page. What is committed today is not
that, and the gap is written here rather than discovered later.

The stock catalogue was tried first and **covers 5 of the 14**: Netflix, Spotify, iCloud, Adobe
and an iTunes mark standing in for Apple Music. Prime Video, Disney+, Hulu, ChatGPT, Notion,
Strava, Peloton, the NYT and the Economist are absent from it entirely. The failure mode is the
dangerous kind: a brand query does not come back empty, it resolves to the nearest generic, so
"peloton" returns a stationary bike and "economist" returns a businessman with a chart. Any of
those would have shipped as a confident wrong logo. The best coherent stock family found covers
2 of the 14 and bakes in both a diagonal shading and a corner radius.

So the 14 committed files are **drawn to one specification** rather than sourced, which buys
uniformity and costs fidelity. Recognisable and close to right: Netflix, Spotify, iCloud, Notion,
Apple Music, Adobe. **The other eight are monograms or approximations** and are marked for
replacement from official press pages before the stage closes:

`amazon-prime`, `disney-plus`, `hulu`, `chatgpt`, `strava`, `peloton`, `nyt`, `economist`.

Four of those eight (Disney+, Hulu, the Economist, Peloton) have no glyph in real life at all,
only a wordmark, and a wordmark cannot be read inside a 36px square, so a monogram may turn out
to be the permanent answer for them. The other four have a real glyph and should get it.

**Why they ship anyway:** a coherent placeholder set is worth more than 111 grey `[logo]` boxes,
and it unblocks the whole sample assembly. The risk is named honestly: a wrong logo reads as
careless where a missing one reads as unfinished, so this list does not get to quietly expire.

### The fallback is not optional

The product ships 400+ presets (node 1.4) and connects to whatever a bank returns. Fourteen files
do not scale to that, so the `.logo` atom has **three states**, and all three go into the kit:

1. **`.logo`** with an image, when we have the file or the provider returns a `logo_url`.
2. **`.logo.is-mono`**, the monogram fallback: the merchant's first letter, ink on a `--panel`
   disc, for everything unmatched. This is the state most merchants will actually get in
   production, so it is designed as a real state and not as a failure.
3. **`.logo.is-skel`**, already in the kit, for the loading pass.

Where the image itself comes from at runtime is written in `docs/bank-connection.md` section 6,
under the merchant dictionary.

## 2. Icons

One set for the whole product, **Solar**, inline SVG, never an icon font and never a raster.
Sized in `em` so an icon tracks the text beside it. Currently needed: the four tab-bar
destinations, the row chevron, the back arrow, the alert dot, and the states of the connection
screens. An icon that carries meaning gets a label beside it or an `aria-label`, never alone.

## 3. Product renders

**The landing hero is the reveal moment**: the Home screen showing the count, the categories and
the monthly total, in colour, at the mobile width. It is assembled at step 5 from the kit like
any other screen, then captured. It costs no generation, and it is the only image in the whole
product that is literally true.

Captured at step 5, once the sample is accepted, into `design/screens/`:

| Render | What it shows | Where |
|---|---|---|
| `hero-home.png` | Home, the count and the total | Landing hero |
| `hero-detail.png` | Subscription Detail, one object in focus | Landing, "How Tendd works" |
| `og-card.png` | Wordmark, the promise line, the petrol accent, composed | Open Graph, node 8 |

The OG card is composed markup captured at 1200x630, not a photograph and not a screenshot: it
is the only place the product speaks to someone who has not arrived yet.

## Delivery

- **Logos:** SVG, committed as delivered, no re-drawing by us.
- **Renders:** PNG from the accepted coloured screens, at 2x, then WebP quality 82 for the page.
- **Alt text:** written when the image lands on a page, by the owner of that page's copy
  (`voice/docs/microcopy.md`). An image with no alt is a defect in `ia/docs/accessibility.md`.
- **The grey `wireframes/` folder is untouched.** It stays frozen and keeps its `[logo]` text.

## What was rejected, and why it is written down

The first version of this step specified six generated editorial still lifes: a desk with a
notebook and a petrol cup, paper squares, a key on linen, an empty interior, two ceramic bowls.
A reusable style prefix was written so the set could be regenerated in the same light.

The first image came back exactly as specified, and that was the problem. It was indistinguishable
from stock: it could have belonged to a candle brand, a stationery shop or a meditation app.
Nothing in it said "see what you are paying for". A brief that produces a mood instead of a
message fails even when the generator succeeds, and this one also broke the rule it was written
under, since `DESIGN.md` bans stock art and the result was stock art in everything but licence.

The structural error underneath: the landing has no image slot. Six destinations were invented
for pictures the structure never asked for, which is what happens when the question answered is
"the stage says make visuals" instead of "what does this page need". The prompts are not kept.
Regenerating them is not a thing anyone should be able to do by accident.
