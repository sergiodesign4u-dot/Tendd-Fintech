# Microcopy inventory (Tendd)

Phase: Voices, Step 1. This is the full transcript of the interface text that
already lives in the wireframes, plus the places where screens say the same
thing in different words. Nothing here is rewritten yet. By the end of this
phase this file becomes the source of truth: every product line on every screen
is in this table, with a "was" and a "became" column, and no line ships that is
not accounted for here.

Sources: all 41 pages in `wireframes/*.html` (read July 2026). The binding voice
rules will live in `voice/docs/voice.md` (built in Steps 2 to 4).

## How to read this

- **Screen**: the wireframe file (state included, for example `home-empty`).
- **Zone**: the region of the screen the line sits in.
- **Line**: the exact text on screen today, verbatim.
- **Type**: heading, button, link, field-label, hint, body, state-message,
  status, nav, footer. A line a user types (not product copy) is tagged `(USER)`
  and is never rewritten.

Not listed, on purpose: the reviewer wireframe tree (nav.js), and deferred
asset placeholders (`[logo]`, `[chart]`, `[preview image]`), which stand for a
missing asset, not missing copy.

## Rewrite log (was / became)

**Two page names in this log no longer exist and are not rewritten: `home-savefocus`, retired
2026-08-21 with the Save tab, and the strings that moved with it.** A rewrite log records what
was decided on the day it was decided; renaming its subject afterwards would make the record
say something that did not happen. The live inventory below is the one that is kept current.

The running record of every product line changed in Steps 5 to 7, screen by
screen. Step 5 does the sample (the Home set); Steps 6 and 7 add the rest. Lines
not listed for a rewritten screen were checked against voice.md and already
conform.

### Home set (Step 5 sample, done)

All five Home pages (home, home-empty, home-error, home-loading, home-savefocus)
were checked line by line against voice.md. Home was the hand-built reference for
the whole wireframe set, so it already embodies the voice: only two lines needed
normalizing. Structure and markup were not touched, only text.

| Screen | Zone | Was | Became | Rule |
|--------|------|-----|--------|------|
| home | add-action | + Add subscription | Add a subscription | Dictionary D1: one label for the add-one affordance, matching home-empty; drops the decorative "+". |
| home-savefocus | summary-strip | ... by cutting 2 you might not use. | ... by cutting 2 you might not be using. | Consistency: the recurring cancel-candidates phrase is "you might not be using" (home base, guided-reveal). |

Verified already-conformant on the Home set (no change needed), the anchors the
rollout must preserve:
- Trust line "Read-only. Tendd cannot move your money." (Dictionary D7), on every populated Home page.
- "You're paying for 14 subscriptions" and "a month, for what you have signed up for" (Principle 3 framing).
- Loader "Getting your subscriptions. This usually takes a moment." (Dictionary D10 pattern).
- Error "We could not refresh just now. Showing your last update from today, 9:14 AM." plus "Try again" (Dictionary D4; error keeps the last known list).
- "Connect your bank" and "Add a subscription" on home-empty (Dictionary D2, D1).
- Alert banner "Netflix went up by $2.50, now $17.99 a month." (Principle 2, active voice, names the actor).

### Step 6: rollout to the remaining 15 screens (done)

Every non-Home screen was rewritten by one subagent per screen, all writing to
voice.md, then reconciled here. 37 lines changed across 11 screens; 4 screens
(Alerts, Cancel Guide, Upgrade, Settings) were already fully in voice. Structure,
markup, reviewer annotations, aria-labels, user content, and data fixtures were
not touched (only visible product copy).

| Screen | Zone | Was | Became | Rule |
|--------|------|-----|--------|------|
| welcome | hero | Read-only, we can never move your money. | Read-only, we cannot move your money. | D7 (firm verb "cannot" in a "we" sentence) |
| welcome | how-it-works | ... by hand from 400+ presets. | ... by hand from 400+ services. | D5/D6 (catalog term is "service") |
| welcome | trust | ... but can never move, spend, or touch your money. | ... but cannot move, spend, or touch your money. | D7 |
| path-choice | path-option | Fast and automatic. Read-only, we can never move your money. | Fast and automatic. Read-only, we cannot move your money. | D7 |
| connect-bank | trust-note | We read your recurring charges, read-only. We can never move your money. Powered by Plaid. | We read your recurring charges, read-only, through Plaid. We cannot move your money. | D7 + D8 ("through Plaid", not "Powered by") |
| connect-bank | primary-action | Choose your bank | Connect your bank | D2 |
| connect-bank | primary-action | Add them yourself instead | Add them yourself | D1 (drop "instead") |
| connect-bank-error | primary-action | Add them yourself instead | Add them yourself | D1 |
| add-subscription | custom-fallback | Add it manually | Add it by hand | D1 (avoid "manually") |
| add-subscription | primary-action | See my list | See your subscriptions | D3 (second person) |
| add-subscription-empty | primary-action | Add it manually | Add it by hand | D1 |
| add-subscription-empty | primary-action | See my list | See your subscriptions | D3 |
| add-subscription-error | primary-action | Try the list again | Try again | D4 |
| add-subscription-error | primary-action | See my list | See your subscriptions | D3 |
| add-subscription-loading | state-message | Loading services... | Getting the list of services. This usually takes a moment. | D10 (loader pattern) |
| guided-reveal | reveal-step | You are subscribed to 14 things. | You're paying for 14 subscriptions. | D5 ("subscriptions", not "things"); matches Home summary |
| guided-reveal | primary-action | See my full list | See your subscriptions | D3 |
| subscription-detail-error | state-message | Back to Home | Back to your subscriptions | D3 |
| cancel-win | win-summary | Nice. You just cancelled Netflix and freed up $17.99 a month. | You just cancelled Netflix and freed up $17.99 a month. | D12 / Principle 5 (drop praise interjection) |
| cancel-win | share | Feeling good about it? You can share a simple card. No bank details, ever. | You can share a simple card. No bank details, ever. | D12 (drop performative emotion prompt) |
| cancel-win | continue | Done, back to my list | Back to your subscriptions | D3 |
| share-snapshot | continue | Done, back to my list | Back to your subscriptions | D3 |
| share-snapshot-error | secondary-action | Done, back to my list | Back to your subscriptions | D3 |
| share-snapshot-loading | heading | Creating your card... | Making your card | D10 (no gerund-plus-ellipsis; matches its message line) |
| history-trends | header | How your recurring spend has moved over time. | How your monthly total has moved over time. | D9 (prefer "total" over "spend") |
| history-trends-empty | state-message | Back to Home | Back to your subscriptions | D3 |
| connections | connection-row | Bank connection via Plaid | Bank connection through Plaid | D8 |
| connections-reconnect | connection-row | Bank connection via Plaid | Bank connection through Plaid | D8 |
| connections | connection-row | Read-only, cannot move money | Read-only, cannot move your money | D7 (keep "your") |
| connections | connection-row | Add another by hand | Add a subscription | D1 (canonical add-one affordance) |
| connections | add-source | Connect a bank | Connect your bank | D2 |
| connections | add-source | Add manually | Add them yourself | D1 (manual method) |
| connections-empty | empty-invite | Connect a bank | Connect your bank | D2 |
| connections-empty | empty-invite | Add manually | Add them yourself | D1 |
| connections-empty | empty-invite | Connect a bank to find your subscriptions... | Connect your bank to find your subscriptions... | D2 (same-screen prose consistency) |
| data-privacy | privacy-section | We can never move your money. | We cannot move your money. | D7 |
| data-privacy | privacy-section | Read-only transaction history via Plaid | Read-only transaction history through Plaid | D8 |

Fully conformant, no change (verified line by line): Alerts (and states), Cancel
Guide (and states), Upgrade, Settings. Their in-voice anchors: the alert lines
name the actor in active voice ("A payment to Amazon Prime did not go through"),
Cancel Guide keeps the reversible-action framing ("you can always resubscribe
later") and the non-judgmental "it is not your fault", Upgrade keeps the single
dismissible Pro gate with "Maybe later", Settings keeps its plain notification
copy.

### Cross-screen consistency (checked after the rollout)

The canonical labels now read identically everywhere they appear: "Back to your
subscriptions" (7 pages), "See your subscriptions" (4), "Connect your bank" (5),
"Add them yourself" (6), "through Plaid" (6), and the read-only line "cannot ...
your money" on every trust surface.

The manual-add family carries three distinct labels on purpose, one per action:
"Add them yourself" (the method, paired against Connect your bank), "Add a
subscription" (the affordance to add one, on Home, empty states, and Connections),
and "Add it by hand" (the in-page toggle on Add Subscription that reveals the
custom-entry fields when a preset is not found). These are three different
actions, so they keep three labels; none uses the banned word "manually".

### Finalization fixes (accessibility and reviewer notes)

Three references outside the visible copy still named retired labels; they were
synced so nothing points at a string that no longer exists:
- share-snapshot-loading: aria-label "Creating your card" to "Making your card" (matches the visible heading).
- alerts-error: the reviewer zaction note "Back to Home" to "Back to your subscriptions".
- add-subscription: the reviewer zaction note "See my list" to "See your subscriptions".

### Step 7: verify and fix (done)

Four adversarial reviewers re-checked all 41 pages against voice.md. They found
four real voice misses (fixed below), two consistency judgments (resolved with no
change), and coverage gaps (now recorded). Screens and this log were fixed
together.

| Screen | Zone | Was | Became | Rule |
|--------|------|-----|--------|------|
| connect-bank-loading | state-message | This takes a few seconds. We are reading your recurring charges, read-only. | We are reading your recurring charges, read-only. This usually takes a moment. | D10 (single loader pattern, canonical closer) |
| history-trends-empty | state-message | ... the shape of your spending will be here. | ... the shape of your monthly total will be here. | D9 / Principle 3 (no spending/exposure frame) |
| history-trends | chart summary | your monthly recurring total went from $172.90 in May ... | your monthly total went from $172.90 in May ... | D9 (canonical "monthly total"; matches the header) |
| data-privacy | export | Exporting your spend history as a CSV ... | Exporting your history as a CSV ... | D9 / Principle 3 (drop "spend") |
| home-cancelled | summary-strip + list-row | (no lines existed) | Four lines for the state after a person reports a cancellation | 2026-08-23, founder, closing N6. **The big number counts what you are PAYING for and drops to 13 immediately**, because that is the answer to the question the screen exists to answer; the cancelled one is named quietly on the line under it rather than folded into the count, because "14 (13 active)" makes a person do arithmetic to learn something calm. The row keeps its amount and its badge is the quiet grey chip the trial already uses - D-Concept, status is never red - and its when-line says the date the money actually stops, which is the one fact the person cannot see anywhere else |
| settings | appearance | (no line existed) | How Tendd looks + Dark mode (Easier on the eyes at night. Nothing else changes.) | 2026-08-23, founder: the theme becomes a product feature and not only a system capability. The heading names the place in plain dictionary words rather than instructing; the hint answers the only question a person asks of a dark mode in a money app, which is whether anything else moves |
| cancel-guide-no-guide | detail-head (data fix) | $4.25 / month, you can always resubscribe later | $17.00 / month, you can always resubscribe later | Data fixture: The New York Times is $17.00/month in the canonical dataset. |

Consistency judgments (resolved, no change):
- subscription-detail base/empty/loading appbar "back to Home" chevron: kept. It is the back-nav chevron to the parent (the Home tab keeps its nav label per D3), uniform across all four detail states; the error state's "Back to your subscriptions" is the separate content-recovery button. Two patterns by design, not a drift. **Closed on 2026-08-11:** this exemption rested on the chevron saying "Home", and a later round changed all six detail chevrons to "Your subscriptions", so the error page carried one destination under two wordings a screen apart. The button is now "Your subscriptions" too.
- subscription-detail-unrecognized "We could not identify this": kept. Active voice with the actor, and the next sentence names the object ("match it to a service").

Coverage additions (lines on screen but missing from the Step 1 inventory, now recorded so nothing ships outside this file):
- cancel-guide-no-guide detail-head: "Cancel The New York Times" (heading) and "$17.00 / month, you can always resubscribe later" (body).
- cancel-guide-blocked detail-head: "Cancel Netflix" (heading) and "$17.99 / month, still active for now" (body). The "still active for now" amount variant is authored copy specific to the error state.
- connections "Added by you" source card: the "Added" field value "Kept up to date by you".

Reviewer-note syncs (outside visible copy, aligned to current labels):
- add-subscription-empty zaction: "add it manually" to "add it by hand".
- connect-bank zaction: "choose your bank" to "Connect your bank".

### Wireframes rebuild, Home as the etalon (2026-08-05)

The wireframe stage was re-run against the upgraded IA, and Home was rebuilt as
the etalon. **No line was rewritten.** What changed is which lines the screen
carries and where they sit, and this file follows, because a line inventory that
lists lines no screen shows is wrong in the same way a missing line is.

| Screen | Zone | Change | Why |
|--------|------|--------|-----|
| home | add-action | Inventory row corrected to "Add a subscription" | The Step 5 log had already resolved D1 and the screen already said it. The inventory row still carried the pre-rewrite "+ Add subscription" |
| home | summary-strip to trust-line | "Read-only. Tendd cannot move your money." moved zone | Node 2.6 gives the strip the count, the total and one line of context. Source and trust are block 7, GC6, whose content order states read-only in the same breath as the source. The line itself is untouched (D7 anchor) |
| home | trust-line | Three lines added: the source, the last successful check, and the way to the full answer | Node 2.6 block 7 requires GC6, and GC6 requires the last successful check. Home showed a figure with no source and no freshness. "Data and privacy" is the existing name of node 6.15, not a new label |
| home | list-group | The five subtotals recorded | Node 2.6 block 4: each group carries its own subtotal. They are derived from the canonical dataset, not authored |
| home | cancel-candidates | Three lines retired from the base screen | The nudge is not one of the eight blocks of node 2.6, and its own state is 2.6.4, whose trigger is "the person came here to cut". home-savefocus carries the same lines and keeps them. The Save tab is the door |
| home | history-link | "Pro" status badge retired | Node 5.12 requires a route from Home, and node 2.6 forbids an upsell on the calm view ("any upsell" is the load-bearing skip of the type). The route stays, the badge goes: the gate belongs to node 5.12, where GC7 shows a real preview |
| home | detail-pane | Five lines retired with the pane itself | The desktop right-hand pane was removed: one action must not have two destinations depending on the width of the window, and the pane duplicated node 2.7. The lines live on `subscription-detail`, which is where they were copied from. Ground: `docs/decisions.md`, 2026-08-05 |

**Not a copy change, but recorded here because the screen reads differently:** the
next charge is rendered days first and the date second (conventions section 5, and
node 2.6 block 5), against a fixed fixture date of 1 August. "in 2 days, Aug 3",
and "tomorrow" at one day.

### The four states of Home (2026-08-05, same rebuild)

Again no line was rewritten. Two stale inventory rows were corrected against the
Step 5 log, which had already resolved both and whose decisions the screens have
been rendering since July: `home-savefocus` summary-strip is "you might not be
using", and the door label is "Add a subscription".

| Screen | Zone | Change | Why |
|--------|------|--------|-----|
| home-empty | state-message | The two door support lines recorded | Node 2.6.1 says both paths are offered "in the same words used at node 1.2", so the doors carry the path-choice support lines. They were on screen and missing from the inventory |
| home-error | trust-line | GC6 added, with the link pointing at `connections` rather than `data-privacy` | Node 2.6.3 requires a way into node 6.14 from this state: the figures are stale, and the place to do something about that is the source |
| home-savefocus | trust-line | GC6 added | Every populated Home page shows where its figures came from. The state does not change the source |

**Two findings for Voice, left open rather than fixed here, because the words are
not this stage's to change:**

1. **`home-empty` carries two headings that say the same thing** a hundred pixels
   apart: "Nothing to add up yet" in the summary strip and "Nothing here yet" over
   the two doors. Both are in the inventory, both are now visible on one screen
   with no zone boxes between them, and together they read as a stutter.
2. **The two `home-savefocus` candidate rows put the date first** ("Trial ends:
   Aug 18", "Next: Aug 11") while every other row in the product now leads with
   the days (conventions section 5). These two lines pair the next charge with how
   long it has been unopened, so the fix is a rewrite and not a reformat.


### The rest of the main flow (2026-08-05, same rebuild)

Nodes 1.1, 1.2, 1.3 with its four returns, 1.5 with its empty state, and 2.7
with its five states. Unlike the Home rebuild this one **does add lines**: three
blocks of the landing and most of the detail screen had no copy at all, because
the July screens did not have the blocks. Every new line is in the inventory
below. What follows is what changed about lines that already existed.

| Screen | Zone | Change | Why |
|--------|------|--------|-----|
| welcome | social-proof | Seven lines retired with the block | Node 1.1 names the testimonial block as a SKIP row of the block bank: authored copy with no real quote behind it. It was carried from July and is now off the screen |
| welcome | how-it-works | "from 400+ presets" to "from 400+ services", and "Securely connect your bank" to "Connect your bank read-only" | The dictionary makes "service" the word for a catalog entry (D5), and "securely" is exactly the vague reassurance the trust block exists to replace with a fact |
| welcome | trust | "Bank-level connection" to "Bank connection through Plaid", and the body rewritten to lead with signing in on your own bank site | D8 fixes the preposition. A label whose content is the reassurance itself is the pattern this audience distrusts |
| welcome | hero, trust | "can never move your money" to "cannot move your money" | D7 fixes the verb of the fixed trust line. The Step 6 log had already resolved it for path-choice, and three inventory rows still carried the old form |
| welcome | top-nav | "Pricing" lands on the page own pricing block instead of node 5.13 | Node 5.13 is reached only from a real gate. A public nav item pointing into the in-app upgrade screen is a gate with nothing behind it |
| path-choice | path-option | Both support lines rewritten | Node 1.2 block 4 asks each door for one line of consequence ("read-only, about a minute" against "start with one, add more later"). The July lines described the doors instead ("Fast and automatic", "Private") |
| path-choice | reassurance | "What does each option access?" retired | The two doors answer it themselves now, and node 1.2 block 6 asks for a legal line in that place |
| connect-bank | primary-action | "Choose your bank" to "Connect your bank" | D2, resolved at Step 6 of the Voice stage and never applied to the inventory row |
| connect-bank | trust-note | One sentence became three named facts | Node 1.3 block 5 asks for three lines: what Tendd can see, what it can never do, what you can undo. The fixed trust line is the middle one, verbatim, directly above the button |
| guided-reveal | reveal-step | "You are subscribed to 14 things." to "You're paying for 14 subscriptions" | The Forbidden table names this exact line. The screen was fixed in July, the inventory row was not |
| guided-reveal | primary-action | "See my full list" to "See your subscriptions", and "Review these 2" retired with the save-focus line | D3 for the label. The second button left with it: one action at the emotional peak, and node 2.6.4 is one tap away the moment the tab bar appears |
| guided-reveal | reveal-step | "That is $192.90 a month." became the summary strip form: the number, then the context line | GC3 has one rendering. The reveal and Home now show the total the same way, which is what makes it the same component |
| guided-reveal | reveal-step | "Show me what they are" to "See what they are", same for the total | Buttons are Tendd labels in the second person. "Show me" is the person speaking, which the address rule reserves for the share card alone |
| subscription-detail | header | "Home" to "Your subscriptions" on the back control | D3: the tab keeps its nav label, the descriptive control says where you land |
| subscription-detail | master-pane | Retired with the pane itself | docs/decisions.md, 2026-08-05 |
| subscription-detail | history-link | "See price and payment history" and the "Pro" badge retired | Three months of charges are on the screen and free (D3, node 2.7 block 6). GC7 sits below them, states what Pro adds, and carries "Maybe later" beside it |
| subscription-detail | alert-banner | "The price went up by $2.50 on Jul 28, now $17.99 a month." to "Netflix went up by $2.50 on Jul 28. Your next charge is $17.99 instead of $15.49." | Active voice names who did the thing (Principle 2), and the old price beside the new is what node 2.7.2 asks the state to show |
| subscription-detail-unrecognized | state-message | "Not a subscription" to "This is not a subscription" | It is the same correction control as on the base screen, so it is the same label |
| subscription-detail-error | state-message | "We could not load this subscription" to "We could not load the rest of this subscription. This is usually temporary, and nothing about your money changed." | The name and the amount survive from the list, so the old line overstated the loss. The money-screen reassurance is the error rule |

**Two fixtures corrected, which is data and not copy.** The base detail page now
renders **Spotify Premium**, because the screen exists for the decoder line and
its default should be the case that shows one; Netflix moved to the price-change
state, which is where the canonical alert case belongs. And the failed payment is
**Amazon Prime**, not Peloton: `alerts.html` and this inventory both said Amazon
Prime, and only `wireframes/docs/conventions.md` said Peloton. It has been
corrected there. The failure was dated Jul 2 on the July screen, which its own
billing cycle contradicts; the rebuilt Alerts dates it Jul 20, and that is now
the only date in the set.

**One finding for the map, not for Voice.** Node 2.7 block 8 asks for "edit the
details" and the map has no node to send it to: node 1.4 owns the only form in
the product, and the grey screen borrows it. Recorded in
`ia/docs/nodes/2-7-subscription-detail.md`.

### The rest of the set (2026-08-05, same rebuild)

The nineteen MVP pages that were still on the July frame: node 1.4 with its
three states, node 3.8 with its three, node 4.9 with its two, node 4.10, node
6.14 with its three, node 6.15 with its dialog, and node 6.16. Two of those
state pages had never existed. The three LATER screens (4.11, 5.12, 5.13) are
untouched and keep their rows above: round 2 brings them to the same contract.

| Screen | Zone | Change | Why |
|--------|------|--------|-----|
| add-subscription | field | The Category select retired | Node 1.4 names category among the fields it does not ask for: it is derived from the service, and every extra field on this screen is a reason to close the tab. It was on the July form |
| add-subscription | presets | A "Most tracked" tile row added, with six services | Node 1.4 block 3. The July screen went straight from the search field to its results, so the catalogue never appeared to a person who had not typed anything, which is the arrival case this block exists for |
| add-subscription | custom-fallback | "Add it manually" to "Add it by hand" | The reviewer-note sync of the Voice rollout had already resolved this; the inventory row still carried the old form |
| add-subscription | progress | The saved-as-you-go line became one sentence | It is the anti-abandon block of Flow B and it was two fragments in a callout. One sentence says the same thing where a person actually reads it |
| add-subscription-empty | primary-action | "Add it by hand" to "Add subscription" on the form button | The dictionary gives the form submit one label. "By hand" is the method, and it is already said above the form |
| alerts | group | Two groups added: "Needs you" and "Just so you know" | Node 3.8 block 2 and block 3, and the invention the node is built on. The July screen was one feed sorted by date, which makes a person scan to find out whether anything is wrong. Sorting by whether it needs them answers that before they read |
| alerts | alert-row | Every meta line now carries the amount, the date and the source | Node 3.8 block 4: an alert that cannot say where it came from is a rumour. The July lines named the type and the merchant and stopped |
| alerts | alert-row | The price-change alert shows the old price, the new price and the difference | Node 3.8 block 5, which exists in none of the sources. Every product shows the new number; the old one beside it turns a surprise into an explanation |
| alerts | alert-row | Three items added: two upcoming charges and one newly detected subscription | Node 3.8 block 3. Without them "Just so you know" would have had nothing in it, and the group is the half of the screen that is usually not empty |
| alerts | alert-row | The Amazon Prime failure is dated Jul 20, not Jul 2 | Its billing cycle is the 20th, so Jul 2 was impossible. Carried in from the conventions fixture list |
| alerts | alert-row | Older moved into a collapsed group | Node 3.8 block 6: the recent past is the job of this screen and the distant past is node 5.12 |
| alerts | settings-link | "What Tendd tells you about" added | Node 3.8 block 7. One place that answers what will reach you, instead of a reminder toggle on every subscription |
| alerts-empty | group | "What shows up here" added, with the four things | Node 3.8.1 asks the empty state to say what would appear if it did. An empty screen that does not say what it is for reads as broken rather than as calm |
| cancel-guide | what-happens | What happens when you cancel, with the real date | Node 4.9 block 3, missing from the July screen. The category can only promise this in general; we know the billing period, and the anxiety of an irreversible action is mostly the not knowing |
| cancel-guide | strip | The meta strip: about five minutes, and where the steps came from | Node 4.9 block 4, missing from the July screen |
| cancel-guide | freshness | When we last checked these steps | Node 4.9 block 10, missing from the July screen. A guide that silently rots is worse than no guide |
| cancel-guide | step | The steps became the netflix.com path specifically | Node 4.9 block 5, the sharpest difference in the block bank. ReSubs publishes three channel sections because it does not know how you subscribed. The decoder line on node 2.7 says NETFLIX.COM, so we do |
| cancel-guide | primary-action | "Open netflix.com/account" to "Open netflix.com and cancel" | A button says the result, not the URL |
| cancel-guide | pro-callout | The Pro line now says the free steps stay free before it says what Pro adds | D3 binds hardest on this screen: the basic instruction is always free and always first, and the Pro block is an addition below it |
| cancel-guide-blocked | state-message | The not-your-fault sentence became the heading | It is the whole job of this state, and it was a callout under a heading that repeated the subscription name |
| cancel-win | win-summary | "Nice." dropped, and the sentence split into a line and a number | The Forbidden table bans praise interjections by name and the Voice log had already dropped this one. The number is the emotional payload, so it is the large thing rather than a clause in the middle of a sentence |
| cancel-win | share | The two share lines are off the screen | Node 4.11 is LATER under D-Share, so an MVP screen cannot lead there. The lines stay in this inventory rather than being deleted and rewritten later |
| connections | connection-row | The last successful check added to every source | Node 6.14 block 4, and GC6 requires it. A silently stale connection makes the whole calm view quietly wrong and the person has no way to know |
| connections | connection-row | Disconnect now states the consequence in the same sentence | Node 6.14 block 6. Every product offers this control and none of them says what becomes of the data already collected |
| connections | connection-row | Chase shows 11 subscriptions on both the default and the reconnect state | They were 11 and 8: same source, same story, two numbers. A stale connection does not reduce the count |
| connections | connection-row | The card digits are gone from the source name | Node 2.7 already banned card digits on the payment source line, and there is no reason for this screen to hold to a different rule |
| connections | add-source | The inline chooser became a real dialog page | Node 6.14.3, which had no page. It creates no new screen: it reopens node 1.3 and node 1.4 and returns here |
| data-privacy | delete | The delete confirmation became its own page | Node 6.15.1, which lived inside the page and had no page of its own |
| settings | account | The Name field retired, and a Currency row added | Node 6.16 block 2: an email and a currency, and nothing else. We have no reason to hold a name, and not holding it is easier to explain than protecting it |
| settings | notifications | The failed-payment example is Amazon Prime, not Peloton | One fixture for one event across the whole product |

**Every carried fix from the IA work is closed.** The share block is off
`cancel-win`, the Name field is off `settings` and the currency row is on it,
`cancel-guide` has the three blocks the block bank found missing, and
`connections` states the last check and the disconnect consequence on every
source with one number for Chase instead of two.

**Nothing was rewritten for style.** Every change above is a block the node asks
for and the screen did not have, a fixture that disagreed with itself, or a
label the dictionary had already settled and the inventory had not caught up
with.

### The critique (2026-08-05, Step 9)

One line left the product, and it is the only copy change the critique produced.

| Screen | Zone | Change | Why |
|--------|------|--------|-----|
| guided-reveal | header | "Step 3 of 3" retired from the header | The screen carries its own three steps, so two counters read "of 3" at once and meant different things: the header said step 3 of the chain while the first line under it said step 1 of the reveal. The chain ends when the reveal starts, so the counter that stays is the reveal's own. `guided-reveal-empty` keeps the header counter: it has no reveal to count, and there the chain genuinely ended |

Everything else the critique found was structure or a document that had fallen
behind the screens, and none of it touched a line. The log is
`wireframes/docs/critique.md`.

### Round 2: the three LATER screens (2026-08-05)

The last seven pages left the July frame and three states were drawn for the
first time, so the inventories for node 4.11, node 5.12 and node 5.13 are
rewritten above. Their compositions come from the second bank round
(`ia/docs/blocks.md`, types H, I and J), which ran before the screens were drawn.

| Screen | Zone | Change | Why |
|--------|------|--------|-----|
| history-trends | header | "How your recurring spend has moved" to "How your monthly total has moved" | The dictionary settled on "monthly total" at D5, and the node block says the same. The inventory was the last place still saying "recurring spend" |
| history-trends | chart-area | The summary sentence moved above the chart and lost the words "Text summary" | Node 5.12 block 4 and the whole of bank type H: in every source the number lives inside the picture, and growth zone 3 says a picture is what makes this person close a finance app. The sentence is the fact; the chart illustrates it |
| history-trends | trend-list | The New York Times reads $17.00 a month, not $4.25 | One fixture for one subscription across the product. $4.25 was a July invention and it contradicted the canonical set on Home |
| history-trends | export | The export line now names the free export beside the Pro one | D-Export: a plain copy of your own data is free and lives on node 6.15, and the screen that sells the analytical one is where that split has to be visible |
| history-trends-locked | whole screen | **New.** The frame, the person's own category labels, what Pro adds, and the gate | Node 5.12.4, numbered on 2026-08-05. Emma is on Free everywhere else in the product, so this is the only view of this screen she can have, and node 5.13 says she came to the upgrade screen "from Your trends" |
| home | "See your trends" in the secondary row | **retired 2026-08-18** | Trends became a tab bar destination the same day, so the secondary was a second door to a room that now has one on every screen. The row keeps "Add a subscription", the only item in it that is an action rather than a place. The label lives on as the tab's, shortened to "Trends" |
| history-trends-locked | an empty frame and five category words | **a real readout and two real months**, 2026-08-18 | The founder, on the coloured screen: "оно как то виглядає типа пусто и не понятно что показіваем и зачем". Free now gets ONE comparison of its own - this month against last - and the frame draws those two months. The category labels went with the change: two of the person's own months carrying their own total is more theirs than five category words. The lock keeps everything it listed; one line of it gained "and so are these two months" |
| history-trends | range views | **New, 2026-08-19.** The readout is written three times, one per range: "went from $172.90 in May to $192.90 in July, up about $20 across three months" / "from $166.90 in February ... up about $26 across six months" / "from $143.91 last August ... up about $49 across the year". The trend list gains Disney+ ("Up $6.00 since March, now $13.99 a month", Higher) in the six and twelve month views and Adobe Creative Cloud ("New since November, $22.99 a month", New) in the year, and the steady row is written once per range, because "no change since March" is not a true sentence inside a window that begins in May | The founder made the range control real: "кнопки переключения очень большие и не работают". A control that switches the picture and leaves the sentences alone is a screen that lies in two of its three states. Every figure is derived in `docs/bank-connection.md` section 6 and nothing is invented here |
| every screen with a greeting | app-bar | **The plan chip joins the account link on all 15 of them**, 2026-08-19: "Hi, Emma" gains **Free** on Home and its four states, Alerts and its three, Save, You and the Pro gate, and **Pro** on the four pages of the Pro trend view. Each link's accessible name states it: "Hi Emma, you are on the free plan, open your account" | The founder: "Free должно быть везде а не только в трендс", overruling the narrower answer of an hour earlier. A person who does not know which plan they are on cannot reason about what they are seeing. It stays a statement and not a sell because the link goes to Settings, where a plan can be read and changed, and never to the upgrade screen |
| add-subscription | field | **The Amount placeholder gets a row**, 2026-08-20. It reads `0.00` and it read `$0.00` until the founder decided the field takes digits only | With the sign drawn beside the input, the old placeholder rendered `$ $0.00`. The string changed then and no row owned it either way, so neither the old nor the new one was ever a Voice decision. The hint beside it, "Enter an amount, like $9.99", keeps its dollar sign and is right to: that is a sentence about money, not a field that takes digits |
| add-subscription | presets | **The three result-count strings get a row**, 2026-08-20: `No match for "QUERY"`, `1 match for "QUERY"`, `N matches for "QUERY"` | Written into `behaviour.js` when the tile filter was built on 2026-08-11 and never given an owner. Only two of the three are new: the zero case is the exact line `add-subscription-empty` already carries, which is why it was reused rather than a fourth string invented. All three follow the plain-language rule and the singular is spelled out rather than written "1 match(es)" |
| sign-in | secondary-action | **New, 2026-09-08.** "Continue with Google" | The founder, after a sign-in link of his own opened `localhost` on his phone: "и почему нету авторизации через Google простой". Node 1.6 was drawn as an email and a link and nothing in the record ever weighed that against a provider button, so this is an absence being filled and not a decision being reversed. **The wording is the one people have already read a thousand times and it promises nothing extra**: not "Sign up", which is false for a returning person on a screen that serves both, and not "Sign in with Google", which claims the account is Google's. It is the secondary action and not the primary one, because the way in this product was designed around is still the link, and two primaries on one screen is the One Voice Rule failing. G41 |
| path-choice | way-across | **New, 2026-08-20.** "Already have an account? Sign in" | The landing offers both doors twice and `sign-in` leads back with "No account yet? Start here". This screen led back to neither: a person who tapped the wrong door had the browser's back button and nothing on the screen, and this is the audience that does not recover from a dead end |
| upgrade | primary-action | **"Start Tendd Pro - $69 a year" became "Start Pro - $69 a year"**, and the monthly the same way | The label wrapped below a 913px window, measured: the three cards are narrower than the 282.78 it needed. Two words out fixes it, and fixes the same reading on a phone, where a layout change would not have |
| settings | nav-row | **"Sign out" lost its chevron**, 2026-08-20. The word is unchanged | Not a copy change but the mark beside it. A chevron means "there is more this way" everywhere else in this product; on the one control that ends the session it says the opposite of what the control does |
| home (+ error, savefocus) | list-head | **New, 2026-08-20.** The list gains a head of its own, "Your subscriptions", with "Add a subscription" at the far end of it | The founder, on Home at 1440: "я бы перенес кнопку в правую часть а в левой поставил бы что то типа заголовка Subscription list". The row held one button and 1370px of nothing. **The words are "Your subscriptions" and not "Subscription list"**: that string already belongs to this region as the back control of all twelve detail pages, and one owner per string means a place is not named twice in two ways. It is also the first name `.groups` has ever had for a screen reader |
| upgrade-processing | consequence | **"Your trends" became a link**, 2026-08-20 | The sentence promised "you go straight back to Your trends, open" on a page that carried no outgoing link at all, so the only crossing from Free to Pro in the product dead ended at the moment it promised delivery. No word changed |
| history-trends | app-bar | **"Your subscriptions" back control removed**, and the account greeting "Hi, Emma" arrives in its place, carrying the plan chip inside it. Its accessible name grows to "Hi Emma, you are on Tendd Pro, open your account", and on the gate to "Hi Emma, you are on the free plan, open your account" | The founder: "мне не нравится что у нас в трендс есть кнопка назад когда это стало отдельным пунктом". Trends became a tab destination on 2026-08-18 and kept the bar it was given as a detail screen. Every other destination greets by name and offers no way back, because the way out of a destination is the tab bar. The plan moved into the link because a plan is a fact about the account, and the accessible name is where a chip that has no words of its own gets them |
| history-trends | data-source | **New, 2026-08-19.** "Every month here is your own history, from Chase and the 3 subscriptions you added yourself. / Read-only. Tendd cannot move your money. / Last checked today, 9:14 AM." | The founder pointed at the empty right half of the summary strip. What went into it is not filler: 5.12 was **the only screen in the product with figures on it and no statement of where they came from**, which is design principle 4 unmet. Its own edition and not Home's: 2.6's block names the LIST ("From Chase, 11 subscriptions, and 3 you added yourself"), this one names the HISTORY, and one product line may not exist in two editions. The middle line is the read-only declaration, which is the same sentence everywhere by design |
| history-trends | export | The line is **split at a sentence it already had** and wrapped around the button: "Your history as a spreadsheet, for reading it somewhere else. Part of Tendd Pro." above it, "A plain copy of everything we hold is free and lives in Data and privacy." below. **Not a word changed** | The founder: the button "смотрится как-то просто и странновато ... может их как-то объединить". A bare button on the canvas with a long line under it is two orphans, and they are one thing: D-Export's whole point is that this export is the Pro one and the plain copy is free, which is a sentence a button cannot say by itself. The order now reads offer, action, honest footnote |
| history-trends | by-category | "By category. Streaming is up $6 since March. Everything else held steady." became **five bars with their amounts**, and one summary line per range under them: "Software is up $20.00 since May, when ChatGPT Plus arrived. Everything else held steady." / "Software is up $20.00 and Streaming $6.00 since February." / "Software is up $42.99 and Streaming $6.00 since last August." | The founder: "должен быть график со столбиками по категориям, а его нет". The question found a second defect at the same time: the old line measured **since March** under a three-month view that begins in May, and it was counting Netflix's $2.50 twice, once as a price change and once inside the Streaming rise. The $6 is Disney+, in April, and it is now stated only in the ranges that contain it |
| history-trends-empty | state-message | "We have less than three months so far" gained the date the first line appears | Node 5.12.1 is not the lock: this person has paid, so the screen owes them a date and never an offer |
| history-trends-error | whole screen | **New.** Node 5.12.3 | It says what is unaffected in the same breath: the list, the total and the alerts are a different request |
| upgrade | header | "Close" added | Node 5.13 block 1: close, not back. The screen interrupts something the person was doing |
| upgrade | feature-list | "One-tap links" to "with the direct link" | The dictionary has no "tap" in it: the product is a responsive web app read on a desktop as often as a phone |
| upgrade-processing | whole screen | **New.** Node 5.13.1 | The payment provider owns its sheet; we own the wait around it. It says nothing is charged twice, which is the fear at that moment |
| upgrade-payment-failed | whole screen | **New.** Node 5.13.2 | A payment that did not go through is a fact with a next step, never a fault. It states that nothing was charged before it offers to try again |
| share-snapshot | header | "Card preview" to "Share this win", with "nothing is shared until you tap Share" | The old heading named the component. The new one names the moment, and the second line answers the only question a person has on this screen |
| share-snapshot | privacy-note | The list of what is on the card is now specific | Bank type J: this exists in no source, and it is the one thing this screen adds to the category. "No account numbers" is a promise; naming the three things that are on it is proof |
| share-snapshot | continue | "Done, back to my list" to "Back to your subscriptions" | The dictionary gives this destination one label, in second person. D3 in the discrepancy list settled it and this page had not caught up |

### Round 3: the auth model (2026-08-10)

Five pages and one field, from the decision that closed the last structural `[?]` in the
map. This is the round that re-opened a stage marked Done, and the copy carries the reason
rather than hiding it: on the bank path the email is asked with the trust argument attached,
not as a signup.

| Screen | Zone | Change | Why |
|--------|------|--------|-----|
| sign-in | whole screen | **New.** Node 1.6, with 1.6.1 and 1.6.2 | The landing header already said "Sign in" and Settings already said "Sign out", so the product had a door in and a door out of an account nothing in it created |
| sign-in-expired | state-message | Written in the reconnect register, not the error register | Node 6.14.2 already settled the tone for a credential that expired by design: it is maintenance, and the screen says nothing was lost before it asks for anything |
| connect-bank | account | **New field**, with the reason in the hint rather than in a tooltip | Node 1.3 block 4. The category asks for an account before showing anything; this asks on the one screen where the reason is true and fits in a sentence. "cannot" and "delete" are spelled out, per the contraction rule for money and data |
| settings-no-account | whole screen | **New.** Node 6.16.1, which stood as "logged out `[?]`" until the auth model | The manual path creates no account, so this is a steady state and not an edge case. Its three lines say what an account changes in the person's terms, never in ours |
| upgrade-current-plan | whole screen | **New.** Node 5.13.3 | Settings routed "manage plan" into the screen that sells Pro, and there was no way anywhere to cancel it. The cancel line carries no discount, no "are you sure", and no "tell us why" |

---

### Round 4: the copy latch after UI + Visual (2026-08-11)

Stage 07 compared every coloured page against this file and found thirteen divergences. **None
was a colouring error:** the visible text of all 28 coloured pages is character-identical to its
grey original, so every one of them was a gap between the frozen grey and this inventory, opened
before colour existed. Voice reopens for exactly that, and closes them here.

| Where | Was | Became | Why |
|---|---|---|---|
| upgrade AND the welcome landing, lifetime card | "Not on sale yet. [? D4, the lifetime price, $99 to $139, is still being decided]" | "Not on sale yet. We are still working out the price." | **The worst of the thirteen, and it was on two screens rather than one.** The project's own open-question notation was printed as product copy, and this file carried the bracket verbatim on both, so the inventory blessed the leak. Stage 07 only saw it on the paywall, because the landing is not in the coloured sample; the twin was found by grepping for the notation across all 55 grey pages before fixing the one that was reported. The question is not closed; it lives where a question belongs, in node 5.13's Status and in `docs/decisions.md` |
| upgrade, plan cards | one feature list inventoried, two rendered | `feature-list-compact` declared beside `feature-list` | The four lines appear three times inside the plan row and once, alone, on current-plan. Inside a card the label carries it; standing alone it earns its parenthetical. One list, two authored forms, and the form is now named instead of being a silent difference |
| upgrade, yearly card | "That is $5.75 a month. Our calmest option, and it saves about $27 a year..." | "That is $5.75 a month, and it saves about $27 a year..." | The screen had already dropped it. "Our calmest option" is an adjective about ourselves next to a figure that argues better than it does |
| upgrade | four strings shipped and never inventoried | "Everything in Tendd Pro", "Start Tendd Pro - $7.99 a month", "one payment", the rewritten lifetime sentence | A shipped line that is in no inventory is a line nobody owns |
| home-empty, second heading | "Nothing here yet" | "Two ways to start" | Two headings a hundred pixels apart doing one job. The first says what is true, the second says what to do. Logged at the wireframes critique and never closed |
| home-empty, body | "Pick the way that feels right" | "Pick the one that feels right" | "Two ways to start" above it already said ways |
| home-empty, the two doors | this file carried a retired trust line and a door blurb neither screen has | the shipped lines | **Here the screen was right and the document was wrong.** The inventory still held "we can never move your money", the exact form D7 retired. Shipping this file yesterday would have shipped a banned variant |
| home-savefocus, both candidate rows | "Trial ends: Aug 18", "Next: Aug 11" | "trial ends in 17 days", "next in 10 days" | Every other row in the product leads with the days, and the group list on the same screen says "trial ends in 17 days" for the same subscription. The date stays in the accessible name, where it is useful and costs no width |
| subscription-detail-error | button "Back to your subscriptions" | "Your subscriptions" | One destination, two wordings, one screen apart. The documented exemption rested on the chevron saying "Home", which a later round changed |
| add-subscription | one rendering inventoried | the pattern, marked as a pattern | Six "Typically $X a month" strings are six renderings of one authored line. Low severity, and an inventory that lists one of six teaches the wrong thing about the other five |
| history-trends-locked | no "Maybe later" | **the rule narrowed, the screen unchanged** | `voice.md` said "Maybe later" is always present on a Pro gate. On the full-screen gate the appbar chevron is the exit, and a second control one line under it going to the same place is chrome, not kindness. What "always" protects is that no gate is a dead end; a chevron protects that too. Recorded as a decision either way, and this is the way |

**What this round did not do.** It did not touch the eleven ARIA and form-semantics findings from
the same pass. Those are markup, not copy, and they belong to the stage that owns structure.

### D-Gate: the locked list, and one promise that had to go (2026-09-02)

**The first lines written in this repository rather than copied into it**, and the first written
after the design repository was frozen. Ground: `docs/decisions.md`, D-Gate. A free person now
walks through the bank door once, the scan runs, and the reveal returns the count, the total and
three names across three categories. The rest are on the list, counted in the total, and not
named until Tendd Pro.

**Everything below is checked against `voice.md` twice**, because this is exactly the kind of
copy its Forbidden table was written to stop. Two rules bind hardest here:

- **No exposure framing.** The locked lines say what IS on the list, never what it is costing
  somebody, and never a number framed as a shock with the answer sold behind it. "They are on
  your list and counted in your total" is the fact; "you have 11 unknown charges" would be the
  alarm, and it is the line this whole set was written to avoid.
- **No hype and no urgency.** A gate is a statement of what a plan includes, in the register the
  rest of the product already uses on `history-trends-locked` ("Your list, your total and your
  alerts stay free and uncapped"). Nothing here says "unlock", "now", or "don't miss".

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| path-choice | "Either way you land on the same calm view, and you can add the other one later." | "Adding them yourself is free and unlimited. The first bank scan is free too, and seeing every name it finds is Tendd Pro." | **The old line is now false, and it was the sentence the whole screen rested on.** The two paths no longer land on the same view: one ends in a complete list and the other in three names and a gate. Saying so at the door is the alternative to a person finding out at the moment they were promised the opposite, which is where an avoider decides whether to trust us. D-Gate, and the same reason G25 exists |
| guided-reveal, step 2 | "Five categories, and the real names behind the charges." | "Five categories. Three of the names are below, and the rest are part of Tendd Pro." | "the real names behind the charges" is the promise step 2 exists to keep, and it is kept for three of them. The count of categories stays because it is true and it is the point of the step: the scan reached across a life, not into one corner of it |
| home, trust line | "From Chase, 11 subscriptions, and 3 you added yourself." | (unchanged, and joined by a second edition) "Found in Chase on Aug 30. Nothing is being read now, and the list is yours to keep up to date." | The bank edition assumes a live connection, and under D-Gate a free person's Item is removed once the scan is done. GC6 still requires the source and the freshness, so the source becomes a date and the freshness becomes the plain fact that nothing is reading. The second clause is `bank-connection.md` section 8 and the card on node 6.14, word for word |

**Two more, and they were nearly typed straight onto the screen.** Node 5.13.3 lists what a Pro
person has, each row a name and a short second half. D-Gate adds two things to Pro and the list
had four rows, so building the screen produced two halves that no inventory owned. They are
written here first, which is the whole point of the rule surviving the move: the friction that
used to be another repository is now four keystrokes, and only these are legal.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| upgrade-current-plan, feature list | (four rows; the bank was free under D-Free) | + "Every name in your bank scan (Nothing on your list is withheld)" and "A bank connection that keeps the list up to date (Read again when your bank reports a change)" | The second halves say what the row means in the register the other four already use: a plain restatement, no selling, because this screen states and does not pitch. "Read again when your bank reports a change" is `bank-connection.md` section 7 in a person's words: the product does not poll and syncs on the provider's own update webhook |

**One more line, written 2026-09-02 when the upgrade screen was built.** Node 5.13 draws two
priced buttons, and Tendd cannot take a payment yet, so they are not drawn. The design already
solved this exact problem once, on the lifetime card: it carries no button and says "Not on sale
yet. We are still working out the price", on the stated ground that "a button that cannot state
an amount is worse than no button". The two priced cards CAN state an amount and still cannot
be pressed, which is a different absence and needs its own sentence rather than a borrowed one.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| upgrade, the two priced cards | (no line; the design draws a working button) | "Not open yet. Tendd cannot take a payment, so these have no button." | It says what is true, names the actor, and explains the thing the person is actually looking at, which is a card with a price and nothing to press. A disabled button would be the alternative and it is worse: a control that cannot be used still invites the press, and the system already refuses that pattern on the inert range picker of `history-trends-locked` |

**What was written and then dropped.** "You have 11 more subscriptions than we can show you" and
"See what you are really paying for": the first is a count framed as a deficit and the second is
"what you wasted" wearing a different coat. Both are the Forbidden table's exposure framing, on
the one screen whose own line is "This is what you have signed up for, not what you wasted."

### The two public documents, and the links that had been pointing at a locked door (2026-09-20)

Two screens joined the inventory whole rather than by rewrite, `terms` and `privacy`, and they
are the first strings in this file written for a reader who is not signed in and may never be.
The voice does not change for them. A privacy policy is exactly the place the Forbidden table
was written for: "we take your privacy seriously" is the line Principle 4 exists to refuse, and
every claim on these two pages is one a person could check.

**Nothing on them was composed from what a policy usually says.** The list of who else can see
your data is the list of hostnames the running product talks to, read out of the code: Supabase,
Plaid, Google when you press the Google button, Vercel, and Google Fonts, which is on the list
because the typeface is fetched from Google on every page load and a reader deserves to be told
so. "There is no advertising, no analytics and no tracking of any kind in Tendd" is a falsifiable
sentence and it was verified before it was typed: there is no analytics SDK, no logging service
and no `console` call anywhere in `app/`, `lib/` or `components/`.

The three promises are not new strings. They are the three `data-privacy` already owns, printed
again, because a promise that is worded differently in two places is two promises.

**What changed is where six existing links point.** The rule they now follow is one line: a
public screen links to a public document, an in-app screen links to the in-app screen. P12.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| path-choice, legal | "Terms and Privacy Policy" as one link to `/data-privacy` | two links, "Terms" to `/terms` and "Privacy Policy" to `/privacy` | The sentence is unchanged and was always correct; it named two documents and had one destination, which was a screen that asks a stranger to sign in. G38 |
| welcome, footer Legal | "Terms" pointed at `#`, "Privacy" and "Data and privacy" at `/data-privacy` | "Terms" to `/terms`, both of the others to `/privacy` | Two footer labels for one destination is the design's own redundancy and it stays. On a page a stranger arrives at, both of them mean the public document. G38, G40 |
| welcome, trust | "Read what we access" to `/data-privacy` | to `/privacy` | The whole job of that button is to answer the fear before there is an account, and it was answering it with a sign-in form |
| sign-in, trust line | "What we read" to `/data-privacy` | to `/privacy` | Same bounce, on the screen where it is least forgivable: the person is being asked for their email and the reassurance link asks them to sign in first |
| data-privacy, policy | "The full privacy policy is at tendd.com/privacy." | "Read the full privacy policy" | The address was printed rather than linked because the page did not exist, which is what G30 recorded. It exists. A printed URL that a person has to retype was never the intent, it was the honest form of an absence |

The five in-app links that say "Data and privacy" did not move. They belong to the screen with
the switches and the download button, which is a control panel and not a document, and a person
already signed in wants the controls.

### The address on the two documents, and the entity that is still missing (2026-09-23)

The founder bought `tendd.co` on 2026-09-23, the product moved onto it, and `privacy@tendd.co`
now forwards to a person. So the one section both documents were written without could be
written: **who runs Tendd, and where to write about your own data.**

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| terms, privacy | (no section; the closing line went straight to the other document) | "Who runs Tendd", plus "Tendd is run by one person and not by a company. There is no business registered behind it yet, and when there is, this page will name it." | The honest half of G43. A policy that implies a company where there is none is the vague reassurance the Forbidden table bans, wearing a legal coat. The founder's own name is not printed, because publishing a private person's legal name is his decision and not a builder's |
| terms, privacy | (no address anywhere) | "Write to privacy@tendd.co about anything on this page: what Tendd holds about you, how to get a copy of it, how to remove it, or a sentence here that does not match what you see. One person reads that address." | The last clause is the one that matters and it is an invitation to falsify: every claim on both pages was read out of the code, so the correct response to a reader who finds one untrue is to hear about it. "One person reads that address" is true today and is the plainest form of the same fact the section above states |
| terms, privacy | "Last updated 20 September 2026." | "Last updated 23 September 2026." | Both documents promise that this date is the day they last changed, and this is the first time that promise had to be kept |

### The sign-in email, which nobody had written (2026-09-24)

G46. The letter was Supabase's default, "Magic Link" and "Follow this link to login", sent
from Supabase's own address. It is now two letters in the product's voice, sent from
`signin@tendd.co`, and the rows are under `sign-in-mail` below.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| sign-in-mail | "Magic Link" | "Your sign-in link for Tendd" | A subject names what is inside and who it is from. "Magic" is the capability pattern Principle 1 stands apart from, and the recipient has never heard the word from us |
| sign-in-mail | "Follow this link to login:" and a bare link | a heading, one sentence naming the address, a button, and the same link printed as text | The address is named because the commonest failure on this route is a typo, and the letter is the last place it can be seen. The link is printed twice because some clients strip buttons |
| sign-in-mail | (nothing) | "If you did not ask for this, you can ignore it. Nothing happens unless the link is opened." | The one fear a sign-in letter raises in somebody who did not ask for it, answered with the fact rather than with "your account is secure" |
| sign-in-mail-first | (the same default as a returning person) | "There is no Tendd account under this address yet, so opening the link starts one." and the line after it | The screen may not say whether an address has an account; the letter may, because only the owner of the address reads it |

### The policy follows the mail (2026-09-24)

G46 moved the sign-in email off Supabase's shared sender and onto Resend, and the founder
routed every address on `tendd.co` to one Gmail inbox kept for his projects. Both made a
line of `/privacy` untrue on the day they happened, and "That is the whole list" with it.
`npm run check:mail` now fails when the policy and the sender disagree.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| privacy, processors | Supabase: "holds the database, and sends your sign-in email" | Supabase: "holds the database" | It stopped sending on 2026-09-24 |
| privacy, processors | (no row) | Resend: "sends your sign-in email, and our replies when you write to us, so it sees your address and what the email says" | Named with what it sees and not only what it does, because the letter carries a working sign-in link and a reader deserves to know who handles that |
| privacy, processors | (no row) | Cloudflare: "only if you write to privacy@tendd.co, and then it passes your letter on to the Gmail inbox where it is read" | The address the policy asks people to write to lands in a Gmail inbox, so a letter about your data is read on Google's servers. "Only if" is the same shape the Google row already uses for a processor you meet by your own choice |
| privacy | "Last updated 23 September 2026." | "Last updated 24 September 2026." | The promise at the top of the page. Terms did not change and keep their date |

### Sign in becomes a panel, and most of its words leave (2026-09-27)

P17. The founder asked for a sign-in with the action in front and the explanation elsewhere:
Google first and largest, email as a second button that leads to the field, in a dialog over
the public page rather than on a page of its own, and the descriptions moved to the two public
documents. They were already there, or in the letter: `/privacy` says what Tendd holds and why
the address is kept, and the letter says the link works once. So nothing had to be written
into either document, and every line below was cut or shortened rather than added, except
three: the line under the heading, "Continue with email", and the line that points at the two
documents.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| sign-in | "Type the email you used, and we'll send you a link. There is no password to remember, and nothing to reset." | choose: "New to Tendd? Either way starts your account." / email: "We'll email you a link. There is no password." | The first step no longer has a field, so the old line described a control that is one step away. What a stranger needs to know at the door is that it is also the way to start, which "No account yet? Start here" used to say by sending them away to node 1.2. The password fact stays, on the step where the field is |
| sign-in | "Continue with Google" as the secondary action | the primary action, first and largest | The founder's call. The link was the way in this product was designed around, and Google is the way people actually expect; one primary on the screen still, so the One Voice Rule holds |
| sign-in | (no row) | "Continue with email" | The second way in is now a button that opens the field. It is worded as Google's twin so the two read as one choice. Not "Sign in with email", for the reason the Google row gave on 2026-09-08: the same button starts an account |
| sign-in | "The address your list is kept under." (hint) | (cut) | The label says it |
| sign-in | "What arrives" and "How long it works", with their two sentences | (cut) | The letter says "The link works once", and the step above the field says there is no password |
| sign-in | "No account yet? Start here" | (cut) | Both ways in start an account; the fork at node 1.2 is still where the landing's own action goes |
| sign-in | "Tendd holds an email and a currency, and nothing else." / "What we read" | "By continuing you agree to our Terms and Privacy Policy." | The founder's note: the description goes to the documents. The line that points at them is the same shape node 1.2 already uses ("By starting you agree to our Terms and Privacy Policy") |
| sign-in | "‹ Back" in an app bar | "Back" as the name of an arrow on the email step, and the lockup as the way home on the page | Back now means back to the two ways in, which is the step a person came from |
| sign-in | (no row) | "Close" as the name of the dialog's corner | The word upgrade already uses for the same act |
| sign-in-sent | "A link is on its way to emma@example.com. Tap it and you are back in your list." | "A link is on its way to emma@example.com." | The address is the point of the line, and the letter says what the link opens |
| sign-in-sent | "If it has not arrived / Give it a minute, and look in your spam folder" | "Give it a minute, and look in your spam folder." | The advice without its label |
| sign-in-sent | "If the address is wrong / Go back and type it again. Nothing was sent anywhere else" | (cut) | "Use a different email" under it is that advice as a control |
| sign-in-expired | "A sign-in link works once and then stops, which is what keeps an old email from being a way in. Nothing is wrong with your account and nothing was lost." | "Nothing is wrong with your account and nothing was lost." | The reassurance is the half that matters in this register; why a link expires is the letter's to say |
| sign-in-expired | "Send a new link" / "Use a different email" | the two ways in, "Continue with Google" and "Continue with email" | An expired link is answered by going in again, by either door |

The same day the founder asked for "Get started" to be treated the same way, and node 1.2 became
two pictured doors in the same card, opened over the landing. Its words stayed; three went.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| path-choice | "‹ Back" in an app bar | (cut) in the dialog; the lockup on the page | A dialog closes, and the page goes home the way sign-in does |
| path-choice | "Step 1 of 3" in the app bar | the same words, as the eyebrow over the heading | There is no app bar to stand in |
| path-choice | "By starting you agree to our Terms and Privacy Policy. Tendd asks for read-only access and never for permission to move money." | (cut) | Agreeing now happens one step later, where an account is actually made: "By continuing you agree to our Terms and Privacy Policy." The read-only fact is already the bank door's own line |

### The policy follows Turnstile (2026-09-27)

P18. The sign-in letter is now asked for behind Cloudflare Turnstile, which sees the browser
and its address for the moment it checks. Cloudflare was already on the list for mail to
privacy@tendd.co, so its row grew rather than a new one appearing, and "That is the whole list"
stays true.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| privacy, processors | Cloudflare: "only if you write to privacy@tendd.co, and then it passes your letter on to the Gmail inbox where it is read" | Cloudflare: "checks that a person and not a script is asking for a sign-in link, so it sees your browser and your internet address for that moment; and if you write to privacy@tendd.co, it passes your letter on to the Gmail inbox where it is read" | Named with what it sees, like every row on the list. "Only if" had stopped being true: everybody who asks for a link meets it |
| privacy | "Last updated 24 September 2026." | "Last updated 27 September 2026." | The promise at the top of the page |

The same day the founder asked for a minute between two letters. N5 had already set it and the
provider already held to it, in silence.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| sign-in-sent | "Send another link", ready at once, and a second letter inside the minute refused with nothing said | "Send another link in 0:42", counting down, then "Send another link" | N5: a second request inside sixty seconds is "answered and not silently dropped". The count is the answer, given before the press rather than after it |
| sign-in, sign-in-sent | (nothing: a letter that did not go returned the form in silence, G1) | "We could not send a link just now. Try again a little later." | The founder pressed a ready-looking button more than once and saw nothing happen. Written to the error rule: who (we), what (could not send), what to do (try again), no apology and no red. When the provider says how many seconds are left, the resend button counts them down instead. It said "in a minute" for one hour: the refusal the founder met next was the project's hourly allowance, which a minute does not clear, so the line promises no time it cannot keep |

### The free scan runs once, and the second door says so (2026-09-28)

P20. D-Gate always said a free person's Item is removed once the scan is done, and the product
never removed it. Now it does, and that makes two lines necessary: the trust line for a bank
that read and stopped, which was owned on 2026-09-02 and never printed (G3), and one for the
person who presses "Connect your bank" a second time. Every door keeps its words; the route
behind them sends a used scan to node 5.13.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| home, trust line | the manual edition, "No bank is connected, so nothing is read from anywhere.", printed under rows a bank found | "Found in Chase on Aug 30. Nothing is being read now, and the list is yours to keep up to date." | Owned since D-Gate and printed now that the state exists. The date is the day of the last read, which is the day the rows were found |
| home, the quiet line under the last group | "...or connect your bank and Tendd finds the rest." for anyone with no live bank | (not drawn when a bank has already read) | "Tendd finds the rest" is what the scan they had already did. A line may not offer as free the thing the next screen sells |
| upgrade, context | (no line for the bank door) | "You came here from Connect your bank. The first scan is done, and a bank connection that keeps the list up to date is part of Tendd Pro." | The same shape as the two contexts already owned: where you came from, then what is behind it, in the plan's own words. "A bank connection that keeps the list up to date" is the feature row on the same screen, word for word, so the gate and the list below it name one thing once. No "unlock", no "again for $7.99" |

### The screen before Plaid stops promising the wrong next screen (2026-09-28)

G25. Plaid shows its own returning-user screen before any bank: a phone number, a code by
text, and "Continue as guest" under them. It is on for every customer and `/link/token/create`
has no parameter to refuse it. The line before the button promised a bank picker, so the first
thing an avoider met after trusting us was a request for a phone number nobody had mentioned.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| connect-bank, title body | "Next you'll pick your bank and sign in on your bank's own site. Tendd never sees your password, and you choose which accounts to share." | "Next, Plaid opens. It may first ask for your phone number, to remember you in other apps that use Plaid; you can skip that with Continue as guest. Then you pick your bank and sign in on your bank's own site. Tendd never sees your password, and you choose which accounts to share." | Principle 4: name the thing a person is about to be asked for before they are asked. The actor is Plaid, named, and the way past it is Plaid's own label, so the words on the next screen match the words on this one. "To remember you in other apps that use Plaid" is what the phone number is for, said plainly, because an unexplained phone request at a bank step reads as a trap. The rest of the line is unchanged |

One more, from the same cause. Every free scan now ends disconnected, and node 6.14 drew no
card for a disconnected source, so a person whose list came from one scan read "No sources yet"
over it (G52).

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| connections, a bank that stopped | (no card; "No sources yet" when nothing else was there) | the bank card with the chip "Disconnected", its last check and its count, and under them "Found in Chase on Aug 30. Nothing is being read now, and the list is yours to keep up to date." | "Disconnected" is the plain opposite of the "Connected" tag already on the card, and it is true of a free scan and of a disconnect alike. The sentence is Home's third trust edition reused whole, because it is the same fact about the same source. No button: there is nothing to disconnect |

The same round closed G39 on paper, where it had already closed on screen: since P17 the first
step of sign-in says "New to Tendd? Either way starts your account.", and "Type the email you
used" is gone. The duplicate of clusters A and B that P17 left behind (one copy with the new
sign-in rows, one with the old rows and the letter) is one copy again: the new sign-in rows and
the letter, each once.

### Tendd Pro can be paid for, in test mode (2026-09-28)

P24. Stripe landed, so node 5.13's buttons and 5.13.3's facts have values. Every line below was
owned already except three, and those three are the smallest forms of lines that were.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| upgrade, the two priced buttons | "Not open yet. Tendd cannot take a payment, so these have no button." | "Start Tendd Pro - $69 a year" / "Start Tendd Pro - $7.99 a month", where payments are on; the old line where they are not | Both buttons owned since the design. The old line stays true wherever it is printed, which is the live site until G54 |
| upgrade-current-plan, facts | (not printed, G35) | "Your plan / Tendd Pro, yearly" or "Tendd Pro, monthly"; "Renews / 1 May 2027, at $69" | "monthly" is new and is the owned "yearly" with the other interval. The amount prints as the cards print it: $69, $7.99 |
| upgrade-current-plan, facts after cancelling | (no form) | "Ends / 1 May 2027. It does not renew" | Cancelling in the portal keeps Pro to the end of the paid period, and "Renews" would then be false. Said as the fact and the absence, no regret and no offer |
| upgrade-current-plan, the action | "Cancel Tendd Pro" (link) | "Cancel Tendd Pro" (button, to Stripe's portal); "Manage plan" once it is cancelled or has no date; "Update your payment method" while a renewal is being retried | A button because it can end a payment (P5). "Manage plan" is Settings' own label and "Update your payment method" is renewal-failed's, reused whole |

### Settings says when a cancelled Pro ends (2026-09-29)

The founder cancelled Tendd Pro on dev.tendd.co, went to Settings, and read a bare "Pro" with no
date: nothing on the screen said the plan was ending. /upgrade said it ("Ends / 1 May 2027. It
does not renew"), Settings did not.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| settings, plan-card status after cancelling | "Pro" | "Pro until 1 May 2027" | The founder's own form ("Pro up to 28 Oct 2026"), in the date form 5.13.3 prints. "until" is renewal-failed's "Still Tendd Pro until 8 May" |
| settings, plan-card body after cancelling | (none) | "Then Free. It does not renew, and nothing more is charged." | What comes after, said first as the plan and then as the money, which is the question a person who just cancelled has. "It does not renew" is the owned half of "Ends" |
| settings, plan-card status while Pro renews | "Pro" | "Pro, renews 1 May 2027" | Asked for by the founder the same day, so the two states read as a pair. "Renews" and the date are 5.13.3's. Not printed while a renewal is being retried: that date has passed |
| settings, plan-card body while Pro renews | (none) | "At $69 a year. Cancel any time in Manage plan." (or "$7.99 a month") | The amount as the priced buttons say it, and where the way out is, named by the button under it. No pressure either way |

### Your trends opens for Tendd Pro (2026-09-29)

P25, closing G18. The founder paid on dev.tendd.co, opened Trends and met the lock he had just
paid to open, because the Pro view had never been built. It is built from node 5.12's owned
lines; what is new is only what real data needs and a fixture never showed: a total that fell,
a price that went down, a subscription that was cancelled inside the window, and a list where
nothing moved.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| history-trends, readout | three fixed sentences, one per range | the same sentence composed from the person's own months; "down about" where the total fell; the locked view's "the same as it was in May" where it held; "across two months" when the history is shorter than three | The sentence is the fact and the chart illustrates it. A fixture only ever went up |
| history-trends, readout, a month last year | "from $143.91 last August" (owned) | kept, and the rule behind it made general: a month in an earlier year is "last August", with no "in" | "in last August" is not English, and a bare "August" in September reads as the one to come |
| history-trends, trend list | one Steady row per range | only the rows that moved, then "The other 11 held steady." | With fourteen real rows the list was eleven Steady rows under three that moved, and the heading is "What moved". The count keeps the lock's promise "which held steady" true |
| history-trends, trend list, new kinds | (none) | "Down $2.00 since May, now $5.99 a month" / Lower; "Cancelled in June, was $7.99 a month" / Cancelled | The mirror of "Up"/Higher, and the one way the total falls that is not a price. "Cancelled" is the chip Home already prints on that row (N6) |
| history-trends, trend list, empty | (none) | "Nothing moved. Every subscription is where it was in May." | A calm window is a real result, said as a fact |
| history-trends, by category | three fixed sentences | composed: "Software is up $20.00 and Streaming $2.50 since May. Everything else held steady.", with "is down" where a category fell and "Every category held steady since May." where none moved | The owned form, with the direction said once and carried until it changes. The fixture's "when ChatGPT Plus arrived" clause is dropped: the list beside it already says which row arrived |
| history-trends, data source | Chase only | the owned bank edition, and "Every month here is your own history, from the 14 subscriptions on your list." where no bank is reading | GC6 on a list typed by hand, or found by a scan that is not reading now |
| history-trends, chart label | a sentence per range describing the shape | "Line chart of your monthly total from May to July. The figures are the sentence above" | The shape is the sentence above it; a label that describes it would be a second, unowned reading of the same figures |

### A cancelled Tendd Pro can be kept (2026-09-29)

P27. The founder cancelled, then asked whether he could change his mind. He could, but only
inside Stripe's portal ("Don't cancel subscription"), behind a button called "Manage plan", and
no line on either screen said so.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| upgrade-current-plan and settings, after cancelling, the action | "Manage plan" only | "Keep Tendd Pro" (primary), then "Manage plan" | The verb is what the person wants to do, and "Tendd Pro" is the product's own name for it. Not "Resume" (nothing is paused) and not "Undo" (it names our action, not their plan) |
| upgrade-current-plan and settings, after cancelling, over the action | (none) | "Keeping it means it renews on 1 May 2027, at $69. Nothing is charged before then." | Voice's rule that the consequence stands above the action: keeping it is a charge on a date, said with the date and the amount in the form "Renews" already uses, and the second sentence answers the fear that pressing it charges now. No offer, no discount, no regret |

### The letters about your subscriptions (2026-09-29)

P29. Settings had four switches and nothing behind them: no letter was ever sent. Now two
letters exist, and every word in them is below. They are cut from `lib/letters.ts`, which
`lib/letters.test.ts` holds to these sentences. The item sentences are the alerts screen's own
where one exists ("went up by", "did not go through", "charges ... in 2 days", "See what
changed", "What to do", "See Netflix"), so a person reads the same fact in the same words in
the inbox and on the screen.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| settings, notifications | four switches | a fifth, "A charge is coming up (Two days before, with the amount. Part of Tendd Pro.)" | P30 narrowed advanced alerts to the two that are real, and this is the second. Says when and what it carries, like the other four |
| privacy, processors, Resend | "sends your sign-in email, and our replies when you write to us, ..." | adds "the emails about your subscriptions that you choose in Settings" | Resend now carries these too, and the list names what each processor sees. "that you choose" is true: two are on by default and every one can be turned off |
| alert-mail, subject with several items | (none) | "3 things about your subscriptions" | A count, no adjective. One item is its own sentence instead |
| alert-mail, trial | (none) | "Your Peloton App trial ends in 2 days, and then it charges $12.99." | Who (the trial), when, and the consequence with its amount, the order voice asks for |
| alert-mail, footer | (none) | "Tendd emails you about these because of your choices in Settings, and you can change them at any time." and the link "Change what Tendd emails you about" | Says why the letter came and hands over the lever in the same line. No "unsubscribe" scare word, and no "you are receiving this because you signed up" |
| digest-mail | (none) | "Your week ahead", the count and the sum, one line per charge, "Open your list" | The switch promised "A calm Sunday summary of what is coming up", so it is exactly that: what charges in the next seven days, soonest first |

### renewal-mail

P35. The notice the terms promise before a yearly plan renews. Behind no switch.

| Screen | Zone | Line | Type |
|--------|------|------|------|
| renewal-mail | sender | Tendd, alerts@tendd.co | status |
| renewal-mail | subject | Tendd Pro renews on 29 September 2027, at $69 | heading |
| renewal-mail | preview | Nothing needs doing if you want to keep it. | body |
| renewal-mail | title | Your yearly plan renews by itself on 29 September 2027, and $69 is charged then. Nothing needs doing if you want to keep it. | body |
| renewal-mail | title | If you would rather not, cancel before then in Settings, under Manage plan, and nothing more is charged. | body |
| renewal-mail | primary-action | Manage plan | button |
| renewal-mail | footer | Tendd sends this before every yearly renewal, so a charge a year apart is never a surprise. | footer |

### alert-mail (+ digest-mail)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| alert-mail | sender | Tendd | status |
| alert-mail | sender | alerts@tendd.co | status |
| alert-mail | subject | Netflix went up by $2.50, now $17.99 a month | heading (one item: its sentence, without the full stop) |
| alert-mail | subject | 3 things about your subscriptions | heading (more than one) |
| alert-mail | preview | From your list in Tendd. | body (one item) |
| alert-mail | header | Tendd | status |
| alert-mail | item | Netflix went up by $2.50, now $17.99 a month. | body |
| alert-mail | item | A payment to Amazon Prime did not go through. | body |
| alert-mail | item | Your Peloton App trial ends in 2 days, and then it charges $12.99. | body |
| alert-mail | item | Spotify Premium charges $11.99 tomorrow. | body |
| alert-mail | item | See what changed / What to do / See Netflix | link |
| alert-mail | footer | Tendd emails you about these because of your choices in Settings, and you can change them at any time. | footer |
| alert-mail | footer | Change what Tendd emails you about | link |
| alert-mail | footer | Tendd, tendd.co | footer |
| digest-mail | subject | Your week ahead: 3 charges, $45.97 | heading |
| digest-mail | subject | Your week ahead: 1 charge, $17.99 | heading |
| digest-mail | subject | Your week ahead: nothing charges | heading |
| digest-mail | title | Your week ahead | heading |
| digest-mail | title | 3 subscriptions charge this week, $45.97 in all. | body |
| digest-mail | title | 1 subscription charges this week, $17.99 in all. | body |
| digest-mail | title | Nothing on your list charges this week. | body |
| digest-mail | item | Netflix charges $17.99 in 2 days | link |
| digest-mail | primary-action | Open your list | button |

The when-words are the alerts screen's: "today", "tomorrow", "in 2 days". Where the charges are
in more than one currency the sum is left out of both the subject and the line ("Your week ahead:
3 charges", "3 subscriptions charge this week."), because a sum across currencies is true of
nothing. The digest footer is the alert letter's.

### What Tendd Pro says it adds, made true (2026-09-29)

P30, G56. The founder asked that every line on the Pro list be true before a live key, without
asking anybody for access to their accounts. Two promises were not: screenshots for each cancel
step and a link that "skips the retention screens" (Tendd has neither, and no link can skip a
service's own "please stay" screen), and "unusual" and "duplicate" charges among the advanced
alerts (nothing detects either).

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| cancel-guide, pro-callout | "The steps above are free and always will be. Tendd Pro adds screenshots for each one and a direct link that skips the retention screens." | "The steps above are free and always will be. Tendd Pro adds a direct link to the cancel page on netflix.com, so you start where the steps end." Drawn on Free only, and only where the service publishes a cancel page | The first sentence stays word for word, because D3 binds hardest here. The second says what Pro actually adds and where it goes. "Skips the retention screens" was a promise no link can keep: Netflix's own cancel page still offers a pause, and the steps say so |
| cancel-guide, primary-action on Pro | "Open netflix.com and cancel" | "Open the cancel page on netflix.com" | Names the page and not the site, which is the whole difference Pro pays for. The domain is the one the link opens, read off the address |
| cancel-guide, under the Pro link | (none) | "We last checked this link on Sep 29." | Node 4.9 block 10's rule for the steps, applied to the link: a link that rots quietly is worse than none |
| cancel-guide-blocked, next-move | "Prefer a guided walk-through with a direct link that skips the retention screens?" / "See what Pro adds" | Free: "Tendd Pro links straight to the cancel page on netflix.com." / "See what Pro adds". Pro: "Want to try again from the start?" / "Open the cancel page on netflix.com" | Still one line at the foot and nothing above the actions. On Free it is a fact, not a question aimed at somebody who just hit a wall; on Pro it is the link itself |
| upgrade-current-plan, feature-list | "Advanced alerts (Trial ending, unusual, duplicate)" / "Full cancel guides (Step by step, with the direct link)" | "Advanced alerts (A trial ending, and a charge coming up)" / "Full cancel guides (With a direct link to the cancel page)" | The alerts are the two that are sent by email; the steps are free for everybody, so the Pro half of the guide is the link |
| alerts, alert-row | "We noticed something about your Adobe Creative Cloud charge" / "Unusual charge · Adobe Creative Cloud · Jul 15 · Tendd Pro explains what we saw" | (retired) | Nothing detects an unusual charge, and the row was never built. It returns with the detection, if it is ever built |

### What a free scan does not name, said once (2026-09-29)

P31, G53. The founder: show a couple of names and one block with a lock, "you have XX more
subscriptions, go Pro and see everything, or add them yourself", with a button to the plans.
The same day a free scan stopped keeping the names it does not show, so nothing on these rows
is hidden by the screen any more: there is nothing behind them to hide.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| home and guided-reveal, the withheld rows | a grey bar per row, "Shown with Tendd Pro", inside the categories | (removed) | A row with no name and no logo is a hole in a list whose promise is names. The rows are counted in one place instead, the block below, and every figure above still includes them |
| home, locked-list | "11 of these came from your bank and are not named yet." and "See every name" | "You have 11 more subscriptions", "$138.93 a month, already counted in your total.", "Tendd found them in your bank. Tendd Pro shows every name, or you can add the ones you know yourself.", "Get Tendd Pro", "Add them yourself" | The founder's own shape. The amount line keeps the total honest: the named groups plus this line are the figure at the top. "You have" and not "There are": they are the person's. Two ways on, and the free one is real, which is what keeps the offer from being a wall (voice, Pro gate). "Get Tendd Pro" leads to the plans and not to a payment, so it names the plan and not a price |
| guided-reveal, locked-list | "The other 11 are here too" and its body | the same block as Home, without the amount line | One offer, said the same way in both places. No amount on the reveal: D1 puts the number third, and step 2 has none on purpose |
| home, the same block on Pro | (none) | "They came from your free bank scan, which keeps no names. Connect your bank again and Tendd names every one." and "Connect your bank" | Someone who pays before reconnecting has nameless rows for a while; the block says why and the one thing that names them. "Connect your bank" is D2's word |
| history-trends and its export, a nameless row | (none) | "Not named yet" | A nameless row still has months and figures, and on Pro the list prints it under a label rather than a blank until the bank is read again |

### A free scan is held for seven days, and paying names the rest (2026-09-29)

P32. The founder, on P31's consequence that paying no longer named anything until the bank was
read again: "хотелось бы автоматически после оплаты делать скан". A free scan's connection is
now kept for seven days without being read, paying reads it, and every line that described the
old ending says the new one, with its date.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| home, trust line after a free scan | "Found in Chase on Aug 30. Nothing is being read now, and the list is yours to keep up to date." | "Found in Chase on Aug 30. Tendd keeps the connection until Sep 6 without reading it, and then it ends by itself." | The old line would be false for seven days: something IS kept. Said as what Tendd does, what it does not do, and when it stops, in that order. The old line returns once the hold ends |
| home and reveal, locked block | (none) | "Choose Tendd Pro before Sep 6 and Tendd names them straight away, without asking your bank again." | The one reason the hold exists, said while it is true. A date and a consequence, not a countdown: no "only", no "hurry" |
| connections, a held bank | chip "Disconnected", no control | chip "Kept until Sep 6", the sentence, and "Disconnect Chase" | A held connection is a standing permission, so the card says so and hands over the control that ends it sooner |
| connect-bank, `?from=pro` | "Step 2 of 3" and the ordinary lines | the step marker dropped, and "Sign in to your bank once more and Tendd names every subscription your free scan found." | Paying after the seven days lands here: one line of why, and no onboarding counter for a journey this person finished long ago |
| privacy, your rights | (none) | "A free bank scan reads once. Tendd then keeps the connection for seven days without reading it, ..." | The policy names every standing permission Tendd holds; this is a new one |

### The locked block in the landing's language (2026-09-29)

P34. The founder turned down P33's redesign and asked for the public page's techniques. One
string is new; the heading keeps its words and is set in three parts.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| home and reveal, locked-list | (none) | the eyebrow "Tendd Pro" | Every landing section opens with a dotted eyebrow naming its subject; here the subject is the plan the block leads to. The product's own name, no adjective |
| home and reveal, locked-list heading | "You have 3 more subscriptions", one line | the same words, with "3" set as the landing's figure | The count is the fact that sells, so it is the biggest thing in the block, as "14 subscriptions" is on the public page. Read aloud it is the same sentence |

### How paying works, written before anybody pays (2026-09-29)

P35, G54. The terms promised "these terms will say how paying works before you are ever asked
for money", and now they do. Every line is one the code keeps; the refund window is the founder's.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| terms, plans | "Adding subscriptions yourself is free and unlimited. Connecting a bank and seeing every name the first scan finds is Tendd Pro." | "... and so is your first bank scan, which names three of what it finds. Every name, and a bank connection that keeps your list up to date, are Tendd Pro." | The old line said connecting a bank was Pro; since D-Gate the first scan is free, and the terms must say what the product does |
| terms, plans | "Tendd Pro is not on sale yet. There is no price, ..." | a section, "Paying for Tendd Pro", with eight facts; the not-on-sale sentence stays at its head only where no payment can be taken | Price, who takes it, renewing, cancelling, refunds, a failed payment, the end, a price change: the eight questions a person has before paying, each answered by what the product does |
| privacy, holds and processors | (none) | "If you pay for Tendd Pro", "The emails Tendd sent you", and Stripe with what it sees | A new processor and two new kinds of record: the policy names each with what it holds |

### Tendd Pro's monthly price moves to $9.99 (2026-09-30)

D4 amended by the founder after a pricing audit: $9.99 a month, $69 a year unchanged. Every line
that prints the monthly price or the yearly saving was changed with it; the rows above that record
earlier changes keep the price they were written at.

| Screen | Was | Became | Why |
|--------|-----|--------|-----|
| upgrade, landing pricing, terms, FAQ | "$7.99 a month" | "$9.99 a month" | D4, amended |
| upgrade and landing, the yearly card | "it saves about $27 a year versus paying monthly" | "it saves about $50 a year versus paying monthly" | $9.99 x 12 = $119.88, less $69 is $50.88; "about" rounds down, never up |

### Help, About and Contact exist (2026-09-30)

P36, G32 and G40. The founder: "дальше делай сам страницы Help, About и Contact". No design ever
drew them, so each is built from lines the product already says and keeps: the landing's FAQ, the
terms, the privacy page, the footer. The new lines are only the ones that say where something is
("On Your sources, choose Reconnect") or what is absent ("There is no phone line and no chat").
The footer's "Careers" became "Help": there are no jobs, and a page saying so would be a link for
the sake of a column.

### help

| Screen | Zone | Line | Type |
|--------|------|------|------|
| help | appbar | Back | link |
| help | title | Help | heading |
| help | title | Answers to what people ask most, and how to reach a person when these are not enough. | body |
| help | group | Getting your list | heading |
| help | group | Your bank | heading |
| help | group | Cancelling a subscription | heading |
| help | group | Tendd Pro | heading |
| help | group | Signing in | heading |
| help | group | Your data | heading |
| help | answer | Do I have to connect my bank? / No. You can add your subscriptions yourself from 400+ services and get the same calm view. Connecting a bank is one of two ways in, not the price of entry. | field-label / body |
| help | answer | A subscription is missing / Tendd finds what your bank reports as a repeating charge. Something paid another way, or too new to have repeated yet, will not appear. Add it yourself with Add a subscription, on your list. | field-label / body |
| help | answer | A subscription is wrong / Open it and choose Edit the details. | field-label / body |
| help | answer | Is connecting my bank safe? / You sign in on your bank's own site, through Plaid, so Tendd never sees your password. The connection is read-only. Tendd cannot move your money, and you can disconnect at any time. | field-label / body |
| help | answer | My bank says Reconnect needed / Banks ask for this now and then to keep the connection secure. On Your sources, choose Reconnect and sign in to your bank once more. Your list and its history stay as they are. | field-label / body |
| help | answer | How do I disconnect a bank? / On Your sources, choose Disconnect. Tendd stops reading, the key it held is deleted, and the subscriptions already found stay on your list. | field-label / body |
| help | answer | Can Tendd cancel subscriptions for me? / Tendd shows you how to cancel, step by step, and that part is free. It does not cancel on your behalf, because that would mean asking for more than read-only access to your money. | field-label / body |
| help | answer | The service would not let me cancel / On the cancel guide, choose Couldn't cancel? for what to try next. | field-label / body |
| help | answer | What does Tendd Pro add? / Every name in your bank scan, a bank connection that keeps your list up to date, history and trends, alerts for a trial ending and a charge coming up, a direct link to each cancel page, and your history as a spreadsheet. | field-label / body |
| help | answer | How do I cancel Tendd Pro? / In Settings, under Manage plan, in one step and with no questions. Tendd Pro stays open until the end of the period you paid for, and nothing more is charged. | field-label / body |
| help | answer | I was charged by mistake / Write to privacy@tendd.co within 14 days of the charge and we refund it in full. | field-label / body |
| help | answer | The sign-in email did not arrive / Look in the spam folder, and check that the address on the sign-in page is the one you use. You can ask for a new link after a minute. | field-label / body |
| help | answer | The link says it has expired / A sign-in link works once. Ask for a new one on the sign-in page, and open the newest. | field-label / body |
| help | answer | Download or delete everything / Both are on Data and privacy, and both are free. Deleting removes your account and keeps no copy. | field-label / body |
| help | contact | Still stuck | heading |
| help | contact | Write to hello@tendd.co. One person reads every letter and answers it. | body |
| help | way-across | Every way to reach us | link |

### about

| Screen | Zone | Line | Type |
|--------|------|------|------|
| about | appbar | Back | link |
| about | title | About Tendd | heading |
| about | title | A calm way to see and control your recurring payments. Built for people who are not into finance. | body (the footer's line) |
| about | why | Why it exists | heading |
| about | why | Subscriptions are easy to start and easy to forget, and looking at all of them at once can feel like an audit. Tendd is the opposite of an audit: one list of what you have signed up for, with the monthly total as the biggest thing on the screen. | body |
| about | promises | What it will not do | heading |
| about | promises | It can never move your money / The connection has no permission to, and we never ask for one. | field-label / body |
| about | promises | It does not sell your data / Not to advertisers, not to anyone, on any plan. | field-label / body |
| about | promises | It does not judge / No budgets to set up, no red warnings, no lectures. Just your numbers in plain language. | field-label / body |
| about | operator | Who runs Tendd | heading |
| about | operator | Tendd is run by one person and not by a company. There is no business registered behind it yet, and when there is, this page will name it. | body (the terms' line) |
| about | way-across | Every way to reach us | link |

### contact

| Screen | Zone | Line | Type |
|--------|------|------|------|
| contact | appbar | Back | link |
| contact | title | Contact | heading |
| contact | title | One person reads every letter, and answers it. | body |
| contact | addresses | Where to write | heading |
| contact | addresses | Anything about Tendd / hello@tendd.co | field-label / link |
| contact | addresses | Your data: a copy, a correction, or removing it / privacy@tendd.co | field-label / link |
| contact | addresses | A charge you think was a mistake / privacy@tendd.co, within 14 days of it, and we refund it in full | field-label / body |
| contact | absence | There is no phone line and no chat. Tendd is one person, and email is how every letter gets a real answer. | body |
| contact | way-across | Answers to what people ask most | link |
| welcome | footer | About / Contact / Help | link (Help replaces Careers) |

## Canonical subscription dataset (product fixtures, not authored copy)

The 14-subscription sample that repeats across Home, its states, and the
Subscription Detail master pane is product data, not voice copy, and is not
rewritten. It is listed once here and referenced elsewhere as "the canonical
list". Total: `$192.90 / month`.

| Category | Subscription | Amount | Next / Trial | Status |
|----------|--------------|--------|--------------|--------|
| Streaming | Netflix | $17.99 / month | Next: Aug 3 | Active |
| Streaming | Disney+ | $13.99 / month | Next: Aug 12 | Active |
| Streaming | Amazon Prime | $14.99 / month | Next: Aug 20 | Active |
| Streaming | Hulu | $7.99 / month | Next: Aug 25 | Active |
| Software | Adobe Creative Cloud | $22.99 / month | Next: Aug 15 | Active |
| Software | ChatGPT Plus | $20.00 / month | Next: Aug 5 | Active |
| Software | iCloud+ | $2.99 / month | Next: Aug 2 | Active |
| Software | Notion | $8.00 / month | Next: Aug 9 | Active |
| Music | Spotify Premium | $11.99 / month | Next: Aug 7 | Active |
| Music | Apple Music | $10.99 / month | Next: Aug 14 | Active |
| Fitness | Peloton App | $12.99 / month | Trial ends: Aug 18 | Trial |
| Fitness | Strava | $11.99 / month | Next: Aug 22 | Active |
| News | The New York Times | $17.00 / month | Next: Aug 11 | Active |
| News | The Economist | $19.00 / month | Next: Aug 28 | Active |

---

## Cluster A: Welcome landing and Path Choice

### welcome (public marketing landing)

**The story, added 2026-08-14 (D-Hero).** The public page's second block is a stage that
holds still while the reader scrolls through it: the canonical fourteen drift as a field,
gather into a list, and three of them are cancelled one at a time. The same decision took
the proof panel out of the hero, so the four lines that stood in it (the label, the count,
the total and the caption) are now the head of the stage and are listed once, under
`story`. The zone was called `cut-list` for one day. Four totals and four counts are real text in the page, one per state, because
CSS cannot rewrite the words inside an element and a string rendered from a stylesheet
would be a line of product copy this file cannot own. **`Cancelled`** is the one new
word on the whole page, and it is spelled the way `cancel-win` already spells it ("You
just cancelled Netflix"), not the American single-l. The three that are cancelled are
the three the product itself names: Netflix, which `cancel-win` cancels, and Peloton
App and The New York Times, the two the cancel nudge on `home` flags as not opened (it was
`home-savefocus` until 2026-08-21). Their prices
are the fixture prices, so $192.90 minus $47.98 is $144.92 and a reader can check it
against the rows in front of them.

**Light 2, added 2026-09-26 (P16).** The page was rebuilt around the same argument and
kept every line below; it adds no sentence. What it adds is five uses of lines it already
owned, each listed in the last rows of this table: the swap button's second label, which is
the bar's own "Sign in" uncovered under a pointer while the link keeps "Get started free" as
its name; the three section labels, which are the bar's three links set again above the
blocks they point at; four figures counted up on a panel, each standing over a sentence the
page already says; the three step titles repeated large and grey as moving decoration; and
the name, set huge and faint at the foot. The count and the total also appear once more, on
two glass cards in the whirlpool, before the list forms.

| Screen | Zone | Line | Type |
|--------|------|------|------|
| welcome | top-nav | Tendd | nav |
| welcome | top-nav | How it works | nav |
| welcome | top-nav | Trust and security | nav |
| welcome | top-nav | Pricing | nav |
| welcome | top-nav | Sign in | link |
| welcome | top-nav | Get started free | button |
| welcome | hero | For people who are not into finance | body |
| welcome | hero | See what you're paying for. Calmly. | heading |
| welcome | hero | Tendd shows every subscription and recurring charge in one calm view, so you always know what is going out. No spreadsheets, no judgment, no surprises. | body |
| welcome | hero | Get started free | button |
| welcome | hero | See how it works | button |
| welcome | hero | No bank connection needed to start. Read-only, we cannot move your money. | body |
| welcome | story | Example, not your data | body |
| welcome | story | $192.90 / $174.91 / $161.92 / $144.92 | body |
| welcome | story | 14 subscriptions / 13 subscriptions / 12 subscriptions / 11 subscriptions | body |
| welcome | story | a month, for what you have signed up for | body |
| welcome | story | Active | badge |
| welcome | story | Trial | badge |
| welcome | story | Cancelled | badge |
| welcome | benefit-card | Calm control of your recurring money | heading |
| welcome | benefit-card | Tendd is not a budgeting app. It is a simple, low-pressure way to see and control what you are subscribed to. | body |
| welcome | benefit-card | Everything in one place | heading |
| welcome | benefit-card | Every subscription and recurring charge, pulled together and grouped by category. One calm list instead of a dozen forgotten logins. | body |
| welcome | benefit-card | Clear, never judged | heading |
| welcome | benefit-card | No budgets to set up, no red warnings, no lectures. Just your numbers in plain language, so you feel in control instead of anxious. | body |
| welcome | benefit-card | Never caught off guard | heading |
| welcome | benefit-card | Tendd tells you in plain words when a price goes up, a free trial is about to end, or a payment does not go through. | body |
| welcome | how-it-works | How Tendd works | heading |
| welcome | how-it-works | Three steps, a few minutes. You are in control the whole way. | body |
| welcome | how-it-works | Connect or add | heading |
| welcome | how-it-works | Connect your bank read-only, or add your subscriptions yourself from 400+ services. Your choice, no pressure to link an account. | body |
| welcome | how-it-works | See it all, calmly | heading |
| welcome | how-it-works | Tendd finds your recurring charges and shows them in one clear list, with your real monthly total as the biggest thing on screen. | body |
| welcome | how-it-works | Cancel and save | heading |
| welcome | how-it-works | Spot what you no longer use and cancel it with a step-by-step guide. Feel the small win when the number goes down. | body |
| welcome | two-paths | Two ways to start | heading |
| welcome | two-paths | Neither one is the real way in. You pick when you start, and you can add the other later. | body |
| welcome | two-paths | Connect your bank | heading |
| welcome | two-paths | Read-only, through Plaid, and about a minute. Tendd finds the charges that repeat and names them for you. | body |
| welcome | two-paths | Add them yourself | heading |
| welcome | two-paths | Pick from 400+ services and add what you already know about. No bank is involved, and nothing leaves your control. | body |
| welcome | trust | Trusted with your money | heading |
| welcome | trust | Trust is earned, not claimed. Here is exactly what Tendd can and cannot do. | body |
| welcome | trust | Read-only, always | body |
| welcome | trust | Tendd can see your recurring charges but cannot move, spend, or touch your money. | body |
| welcome | trust | Bank connection through Plaid | body |
| welcome | trust | You sign in on your bank's own site, through Plaid, the same service many major finance apps use. We never see your bank password. | body |
| welcome | trust | You are in control | body |
| welcome | trust | Disconnect any account or delete all of your data at any time, in one tap. It is gone when you say so. | body |
| welcome | trust | We never sell your data | body |
| welcome | trust | Your financial life is yours. Tendd does not sell or share it, full stop. | body |
| welcome | trust | Read what we access | link |
| welcome | pricing | Simple, honest pricing | heading |
| welcome | pricing | The whole calm view is free. Tendd Pro adds history, trends and advanced alerts. | body |
| welcome | price | $69 a year | heading |
| welcome | price | That is $5.75 a month, and it saves about $50 a year versus paying monthly. | body |
| welcome | price | Best value | status |
| welcome | price | $9.99 a month | heading |
| welcome | price | Month to month. Cancel any time, no lock-in. | body |
| welcome | price | Lifetime | heading |
| welcome | price | one payment | body |
| welcome | price | Tendd Pro stays open, for people who would rather never think about a renewal again. | body |
| welcome | price | Not on sale yet. We are still working out the price. | body |
| welcome | plan-card | Everything in Tendd Pro | field-label |
| welcome | feature-list-compact | History and trends / Advanced alerts / Full cancel guides / Export | body |
| welcome | primary-action | Start Tendd Pro - $69 a year | button |
| welcome | primary-action | Start Tendd Pro - $9.99 a month | button |
| welcome | pricing | The whole calm view is free. Tendd Pro, $9.99 a month or $69 a year, adds history, trends, and advanced alerts. | body |
| welcome | pricing | No cap on subscriptions and no cap on banks in Free. Cancelling is free, always. | body |
| welcome | faq | Questions people ask first | heading |
| welcome | faq | Do I have to connect my bank? | heading |
| welcome | faq | No. You can add your subscriptions yourself from 400+ services and get the same calm view. Connecting a bank is one of two ways in, not the price of entry. | body |
| welcome | faq | Is connecting my bank safe? | heading |
| welcome | faq | You sign in on your bank's own site, through Plaid, so Tendd never sees your password. The connection is read-only. Tendd cannot move your money, and you can disconnect at any time. | body |
| welcome | faq | What does Tendd cost? | heading |
| welcome | faq | The calm view is free, with no cap on how many subscriptions or banks you add. Tendd Pro is $9.99 a month or $69 a year, and it adds history, trends, and advanced alerts. | body |
| welcome | faq | Can Tendd cancel subscriptions for me? | heading |
| welcome | faq | Tendd shows you how to cancel, step by step, and that part is free. It does not cancel on your behalf, because that would mean asking for more than read-only access to your money. | body |
| welcome | final-cta | See what you're paying for. Calmly. | heading |
| welcome | final-cta | Start free. No bank connection needed, and nothing to cancel later if it is not for you. | body |
| welcome | final-cta | Get started free | button |
| welcome | final-cta | Already using Tendd? | body |
| welcome | final-cta | Sign in | link |
| welcome | footer | A calm way to see and control your recurring payments. Built for people who are not into finance. | footer |
| welcome | footer | Product / Company / Legal (How it works, Trust and security, Pricing, About, Contact, Careers, Privacy, Terms, Data and privacy) | footer |
| welcome | footer-bar | (c) 2026 Tendd | footer |
| welcome | footer-bar | Read-only. Tendd cannot move your money. | footer |
| welcome | footer-bar | Tendd is not affiliated with the services shown. Their names and logos belong to their owners. | footer |
| welcome | swap-button | Sign in | button (the label a pointer uncovers; the accessible name stays "Get started free") |
| welcome | section-label | How it works / Trust and security / Pricing | label |
| welcome | stats | $192.90 / 400+ / 3 / $5.75 | figure |
| welcome | ghost-words | Connect or add / See it all, calmly / Cancel and save | decoration (hidden from assistive technology) |
| welcome | footer | Tendd | decoration (the watermark, hidden from assistive technology) |

The bar at the foot arrived on 2026-08-16, on the founder's decision, and it added one string
rather than two: its second line is the D7 trust line word for word, the sentence this product
repeats on purpose, and reusing it is not a second edition of it. The year in the first line is
the only literal the public page carries that nothing else owns.

The third line arrived on 2026-09-26, after the fourteen tiles became the services' own
published marks. The page shows other companies' names and logos in its story and nowhere
says whose they are, and a reader could take a logo on a marketing page for a partnership.
It says who does not stand behind the page and whose the marks are, in two plain sentences,
and it claims nothing about the law. Whether that is enough is a lawyer's question, G49.

### path-choice

**The doors of node 1.2 are a card since 2026-09-27 (P17)**, opened over the landing by "Get
started free" and standing on `/path-choice` for everybody who arrives by address. Every line is
the one the screen had, less the three the rewrite log above lists.

| Screen | Zone | Line | Type |
|--------|------|------|------|
| path-choice | eyebrow | Step 1 of 3 | status |
| path-choice | title | How do you want to start? | heading |
| path-choice | title | Adding them yourself is free and unlimited. The first bank scan is free too, and seeing every name it finds is Tendd Pro. | body |
| path-choice | path-option | Connect your bank | heading |
| path-choice | path-option | Read-only, through Plaid, and about a minute. Tendd cannot move your money. | body |
| path-choice | path-option | Choose this path | button |
| path-choice | path-option | Add them yourself | heading |
| path-choice | path-option | Start with one and add more later. No bank is involved, and nothing leaves your control. | body |
| path-choice | path-option | Choose this path | button |
| path-choice | later | Do this later | link |
| path-choice | way-across | Already have an account? Sign in | body |

---

### terms

**The public document, added 2026-09-20.** Node 1.2 promises "Terms and Privacy Policy" and the
landing's footer promises "Terms", and until this page existed both pointed at a screen that
asks a stranger to sign in. P12.

| Screen | Zone | Line | Type |
|--------|------|------|------|
| terms | appbar | ‹ Back | link |
| terms | title | Terms | heading |
| terms | title | What Tendd does, what it does not do, and what we each agree to. | body |
| terms | title | Last updated 29 September 2026. | body |
| terms | what-it-is | What Tendd is | heading |
| terms | what-it-is | Tendd keeps one list of what you pay for: what it costs, how often it repeats and when it is next due. The list is built from the recurring charges your bank reports, from what you type in yourself, or from both. | body |
| terms | what-it-is | Tendd is read-only | field-label |
| terms | what-it-is | It cannot move your money. The bank connection has no permission to, and we never ask for one. | body |
| terms | what-it-is | Tendd cannot cancel anything for you | field-label |
| terms | what-it-is | Cancelling happens at the service. Tendd shows you where to go and what to say. | body |
| terms | what-it-is | Tendd is not financial advice | field-label |
| terms | what-it-is | It is a record of what you signed up for. The decisions stay yours. | body |
| terms | accuracy | What the list is worth | heading |
| terms | accuracy | Tendd finds what your bank reports as a repeating charge. Something paid another way, or too new to have repeated yet, will not appear, and you can add it yourself. | body |
| terms | accuracy | Your bank's own record is the one that counts. Your list is a clear view of what you are paying for, and it is not a statement. | body |
| terms | account | Your account | heading |
| terms | account | Your account is reached by your email address, so anyone who can open your email can open Tendd as you. Keep it safe. | body |
| terms | account | Everything Tendd holds for you is yours to download or to remove, at any time, on Data and privacy. | body |
| terms | plans | Free and Tendd Pro | heading |
| terms | plans | Adding subscriptions yourself is free and unlimited, and so is your first bank scan, which names three of what it finds. Every name, and a bank connection that keeps your list up to date, are Tendd Pro. | body |
| terms | paying | Paying for Tendd Pro | heading |
| terms | paying | Tendd Pro is not on sale yet, and nothing in Tendd charges you today. When it is on sale, this is how paying works. | body (where no payment can be taken) |
| terms | paying | The price / $9.99 a month or $69 a year, in US dollars. The payment page shows the total before you pay. | field-label / body |
| terms | paying | Who takes the payment / Stripe, on its own page. Tendd never sees your card number: it learns which plan you chose and whether the payment went through. | field-label / body |
| terms | paying | Renewing / Tendd Pro renews by itself at the end of each month or year, at the same price, until you cancel. Before a yearly plan renews, Tendd emails you a month ahead with the date and the amount. | field-label / body |
| terms | paying | Cancelling / In Settings, under Manage plan, in one step and with no questions. Tendd Pro stays open until the end of the period you paid for, nothing more is charged, and until that day you can keep it after all. | field-label / body |
| terms | paying | Refunds / If a charge was a mistake, such as a renewal you meant to stop, write to privacy@tendd.co within 14 days of it and we refund it in full. After that we do not refund part of a period that has started, unless the law where you live says we must. | field-label / body |
| terms | paying | A payment that does not go through / Stripe tries again over the following days, and Tendd Pro stays open while it does. If it still does not go through, your plan returns to Free. | field-label / body |
| terms | paying | When Tendd Pro ends / Your list stays yours, with every name it had. The bank connection ends, as it does on Free, so the list stops updating by itself. | field-label / body |
| terms | paying | If the price changes / We email you at least 30 days before a new price applies to you, and you can cancel before then. | field-label / body |
| terms | bank | The bank connection | heading |
| terms | bank | Banks are connected through Plaid. You enter your bank details with Plaid and never with us, their terms cover that part, and you can disconnect a bank whenever you want, on Your sources. | body |
| terms | availability | When Tendd does not work | heading |
| terms | availability | Tendd is young, and it will sometimes be down, late or wrong. We do not promise it is always available or always complete, and we cannot take on what a missed charge costs you. What we do promise is the read-only limit above, which is enforced in the code and not only written here. | body |
| terms | ending | Ending it | heading |
| terms | ending | You can delete everything at any time, and nothing is kept back: no copy, no archive. | body |
| terms | ending | We can close an account that is being used to break the law or to damage Tendd for other people, and we will tell you why. | body |
| terms | changes | When these terms change | heading |
| terms | changes | The date at the top of this page is the day it last changed. If a change affects what you get or what you pay, we will tell you by email before it takes effect. | body |
| terms | operator | Who runs Tendd | heading |
| terms | operator | Tendd is run by one person and not by a company. There is no business registered behind it yet, and when there is, this page will name it. | body |
| terms | operator | Write to privacy@tendd.co about anything on this page: what Tendd holds about you, how to get a copy of it, how to remove it, or a sentence here that does not match what you see. One person reads that address. | body |
| terms | way-across | Privacy is a separate page | link |

---

### privacy

**The public document, added 2026-09-20.** Every claim on it was read out of the code before it
was written down, the way `data-privacy` is: the three promises are the same three strings that
screen owns, and the list of who else can see your data is the list of hostnames the running
product actually talks to. P12.

| Screen | Zone | Line | Type |
|--------|------|------|------|
| privacy | appbar | ‹ Back | link |
| privacy | title | Privacy | heading |
| privacy | title | What Tendd holds about you, who else can see it, and how to take it all back. | body |
| privacy | title | Last updated 29 September 2026. | body |
| privacy | promises | We read your recurring charges | body |
| privacy | promises | Read-only, and nothing else you do with your money. | body |
| privacy | promises | We can never move your money | body |
| privacy | promises | The connection has no permission to, and we never ask for one. | body |
| privacy | promises | We do not sell your data | body |
| privacy | promises | Not to advertisers, not to anyone, on any plan. | body |
| privacy | holds | What Tendd holds | heading |
| privacy | holds | Your email address | field-label |
| privacy | holds | how you sign in, and where a sign-in link is sent | body |
| privacy | holds | Your subscriptions | field-label |
| privacy | holds | the name, the amount, how often it repeats and when it is next due | body |
| privacy | holds | Where each one came from | field-label |
| privacy | holds | the bank you connected, or the fact that you typed it in | body |
| privacy | holds | The line your bank prints | field-label |
| privacy | holds | the text as it appears on your statement, kept unchanged so the same charge is recognised next month | body |
| privacy | holds | Your settings | field-label |
| privacy | holds | your currency, your plan, and which alerts you want | body |
| privacy | holds | If you pay for Tendd Pro / the plan you chose, its price, when it renews or ends, and whether the last payment went through, as Stripe reports them. Never the card | field-label / body |
| privacy | holds | The emails Tendd sent you / which alert went out and when, so that none is sent twice | field-label / body |
| privacy | holds | Tendd does not hold your name, your address, your card numbers or your bank login. It never sees them. | body |
| privacy | processors | Who else can see it | heading |
| privacy | processors | Supabase | field-label |
| privacy | processors | holds the database | body |
| privacy | processors | Resend | field-label |
| privacy | processors | sends your sign-in email, the emails about your subscriptions that you choose in Settings, and our replies when you write to us, so it sees your address and what the email says | body |
| privacy | processors | Cloudflare | field-label |
| privacy | processors | checks that a person and not a script is asking for a sign-in link, so it sees your browser and your internet address for that moment; and if you write to privacy@tendd.co, it passes your letter on to the Gmail inbox where it is read | body |
| privacy | processors | Plaid | field-label |
| privacy | processors | Stripe / takes the payment for Tendd Pro, on its own page, so it sees your card, your email and the billing address it asks for. Tendd learns only the plan and whether the payment went through | field-label / body |
| privacy | processors | makes the bank connection and reads recurring charges. We ask Plaid for transactions and for nothing else | body |
| privacy | processors | Google | field-label |
| privacy | processors | only if you sign in with Google, and then it tells us your email address and nothing more | body |
| privacy | processors | Vercel | field-label |
| privacy | processors | serves the pages, and keeps the ordinary record of requests that a web server keeps | body |
| privacy | processors | Google Fonts | field-label |
| privacy | processors | the typeface is loaded from Google, so Google sees your address when a page opens. We plan to serve it ourselves | body |
| privacy | processors | That is the whole list. There is no advertising, no analytics and no tracking of any kind in Tendd. | body |
| privacy | browser | What your browser keeps | heading |
| privacy | browser | One cookie, and it is the one that keeps you signed in. Whether you chose light or dark is kept in your browser too, and that never reaches us. | body |
| privacy | controls | What you can do about it | heading |
| privacy | controls | Download everything Tendd holds for you. It is free, it is yours, and it is on Data and privacy. | body |
| privacy | controls | Disconnect a bank, on Your sources. The standing permission is withdrawn at Plaid and the key we held is deleted. The subscriptions already on your list stay there until you remove them. | body |
| privacy | your-rights | A free bank scan reads once. Tendd then keeps the connection for seven days without reading it, so Tendd Pro can name what the scan found without asking your bank again, and after that it ends by itself. You can end it sooner on Your sources. | body (P32) |
| privacy | controls | Delete everything, and your account goes with it. There is no archive and no copy kept back. | body |
| privacy | retention | How long Tendd keeps it | heading |
| privacy | retention | Until you delete it. Nothing here expires on its own, because a list you have kept for two years is the reason to keep a list. | body |
| privacy | changes | When this page changes | heading |
| privacy | changes | The date at the top is the day it last changed. If Tendd ever holds something new, or hands your data to someone not named above, this page will say so. | body |
| privacy | operator | Who runs Tendd | heading |
| privacy | operator | Tendd is run by one person and not by a company. There is no business registered behind it yet, and when there is, this page will name it. | body |
| privacy | operator | Write to privacy@tendd.co about anything on this page: what Tendd holds about you, how to get a copy of it, how to remove it, or a sentence here that does not match what you see. One person reads that address. | body |
| privacy | way-across | Terms are a separate page | link |

---

## Cluster B: Connect Bank, Add Subscription, Guided Reveal, Sign In

### connect-bank (+ loading, error, empty, cancelled)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| connect-bank | appbar | ‹ Back | link |
| connect-bank | appbar | Step 2 of 3 | status |
| connect-bank | title | Connect your bank | heading |
| connect-bank | title | Sign in to your bank once more and Tendd names every subscription your free scan found. | body (`?from=pro`, P32) |
| connect-bank | title | Next, Plaid opens. It may first ask for your phone number, to remember you in other apps that use Plaid; you can skip that with Continue as guest. Then you pick your bank and sign in on your bank's own site. Tendd never sees your password, and you choose which accounts to share. | body |
| connect-bank | facts | How long it takes / About a minute | field-label |
| connect-bank | facts | What you need / Your online banking login, entered on your bank's site | field-label |
| connect-bank | account | Your email | field-label |
| connect-bank | account | Bank data needs somewhere that is yours: a place you can sign back into, and a place you can tell us to delete. We'll send a link to confirm it, and you can carry on now. | hint |
| connect-bank | trust-note | What Tendd can see | body |
| connect-bank | trust-note | The charges that repeat on your account, and nothing else you do with your money. | body |
| connect-bank | trust-note | What Tendd can never do | body |
| connect-bank | trust-note | Read-only. Tendd cannot move your money. | body |
| connect-bank | trust-note | What you can undo | body |
| connect-bank | trust-note | Disconnect at any time, and your bank data goes with it. | body |
| connect-bank | primary-action | Connect your bank | button |
| connect-bank | primary-action | Add them yourself | button |
| connect-bank | region-note | Available for US banks today. More regions soon. | body |
| connect-bank-loading | state-message | Syncing your bank | heading |
| connect-bank-loading | state-message | We are reading your recurring charges, read-only. This usually takes a moment. | state-message |
| connect-bank-error | state-message | We could not connect to your bank | heading |
| connect-bank-error | state-message | This is usually temporary. You can try again, or add your subscriptions yourself and connect later. | state-message |
| connect-bank-error | primary-action | Try again | button |
| connect-bank-error | primary-action | Add them yourself | button |
| connect-bank-error | later | Do this later | link |
| connect-bank-empty | state-message | Connected, but nothing recurring yet | heading |
| connect-bank-empty | state-message | We linked your bank but did not find recurring charges yet. Some show up only on the next billing cycle. You can add the ones you know about now. | state-message |
| connect-bank-empty | primary-action | Add them yourself | button |
| connect-bank-empty | primary-action | Check again | button |
| connect-bank-empty | trust-line | Connected to Chase, read-only. Tendd cannot move your money. Last checked today, 9:14 AM. | body |
| connect-bank-empty | trust-line | Your sources | link |
| connect-bank-cancelled | state-message | You came back without connecting | heading |
| connect-bank-cancelled | state-message | Nothing was shared and nothing was lost. Both ways in are still open, and you can pick either one now. | state-message |
| connect-bank-cancelled | primary-action | Connect your bank | button |
| connect-bank-cancelled | primary-action | Add them yourself | button |
| connect-bank-cancelled | later | Do this later | link |

### add-subscription (+ loading, error, empty)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| add-subscription | appbar | ‹ Back | link |
| add-subscription | appbar | Step 2 of 3 | status |
| add-subscription | title | Add a subscription | heading |
| add-subscription | form-group | Details of this subscription | accessible name |
| add-subscription | title | Pick from 400+ services, or add your own. Nothing leaves your control. | body |
| add-subscription | field | Find a service | field-label |
| add-subscription | field | Search 400+ services | hint |
| add-subscription | presets | Most tracked | heading |
| add-subscription | presets | Netflix / Spotify Premium / Disney+ / Amazon Prime / Adobe Creative Cloud / The New York Times | body |
| add-subscription | presets | Typically $AMOUNT a month | body (PATTERN, once per preset tile) |
| add-subscription | custom-fallback | Can't find it? | body |
| add-subscription | custom-fallback | Add it by hand | link |
| add-subscription | custom-fallback | and fill the details yourself. | body |
| add-subscription | field | Name / Amount / Billing frequency / Next payment date | field-label |
| add-subscription | field | Netflix / $17.99 / Monthly / Aug 3, 2026 | field-label (USER) |
| add-subscription | field | Monthly / Every 4 weeks / Quarterly / Yearly / Custom | body |
| add-subscription | field | For example, Aug 3, 2026 | hint |
| add-subscription | field | 0.00 | placeholder (the sign is drawn beside the input, not typed into it) |
| add-subscription | presets | No match for "QUERY" / 1 match for "QUERY" / N matches for "QUERY" | status (PATTERN, live, one per keystroke) |
| add-subscription | primary-action | Add subscription | button |
| add-subscription | primary-action | Add another | button |
| add-subscription | progress | Saved as you go: 3 added so far. Your list is saved, so you can stop and come back any time. | body |
| add-subscription | primary-action | See your subscriptions | button |
| add-subscription-loading | state-message | Getting the list of services. This usually takes a moment. | state-message |
| add-subscription-error | state-message | We could not load the service list | heading |
| add-subscription-error | state-message | You can still add subscriptions by hand below, and the search will come back on its own. | state-message |
| add-subscription-error | primary-action | Try again | button |
| add-subscription-error | field | For example, Spotify Premium | hint |
| add-subscription-error | field | Enter an amount, like $9.99 | hint |
| add-subscription-empty | field | Cerebro Cloud | field-label (USER) |
| add-subscription-empty | state-message | No match for "Cerebro Cloud" | heading |
| add-subscription-empty | state-message | Not every service is in our list yet. You can add it by hand below, and it will sit alongside the rest. | state-message |
| add-subscription-empty | primary-action | Search again | button |

### guided-reveal (+ empty)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| guided-reveal | reveal-step | Step 1 of 3 | status |
| guided-reveal | reveal-step | You're paying for 14 subscriptions | heading |
| guided-reveal | reveal-step | Found in your Chase account. No total yet, and no verdict. | body |
| guided-reveal | reveal-step | See what they are | link |
| guided-reveal | reveal-step | Step 2 of 3 | status |
| guided-reveal | reveal-step | Here they are, grouped | heading |
| guided-reveal | reveal-step | Five categories. Three of the names are below, and the rest are part of Tendd Pro. | body |
| guided-reveal | list | Streaming (4) / Software (4) / Music (2) / Fitness (2) / News (2), each with its merchant names and no amounts | body |
| guided-reveal | locked-list | You have 11 more subscriptions | heading |
| guided-reveal | locked-list | You have 1 more subscription | heading |
| guided-reveal | locked-list | Tendd Pro | eyebrow (P34) |
| guided-reveal | locked-list | Tendd found them in your bank. Tendd Pro shows every name, or you can add the ones you know yourself. | body |
| guided-reveal | locked-list | Choose Tendd Pro before Sep 6 and Tendd names them straight away, without asking your bank again. | body (while the scan is held, P32) |
| guided-reveal | locked-list | Get Tendd Pro | button |
| guided-reveal | locked-list | Add them yourself | button |
| guided-reveal | reveal-step | See the monthly total | link |
| guided-reveal | reveal-step | Step 3 of 3 | status |
| guided-reveal | reveal-step | All together | heading |
| guided-reveal | reveal-step | $192.90 | body |
| guided-reveal | reveal-step | a month, for what you have signed up for | body |
| guided-reveal | tone-line | This is what you have signed up for, not what you wasted. | body |
| guided-reveal | primary-action | See your subscriptions | button |
| guided-reveal-empty | state-message | Nothing to reveal yet | heading |
| guided-reveal-empty | state-message | Add at least one subscription and your list appears here. Even a partial list is saved, so you can come back any time. | state-message |
| guided-reveal-empty | primary-action | Add a subscription | button |
| guided-reveal-empty | later | Do this later | link |

---

### sign-in (+ sent, expired)

Added 2026-08-10 with the auth model. Node 1.6 is the one screen in the onboarding
family that returns a person rather than activating one, so it takes the shape and
none of the persuasion.

**One panel in three steps since 2026-09-27 (P17)**, and it stands in two places: a
dialog over the public page and the page `/sign-in`. `choose` is the two ways in, `email`
the field, `sent` the address stated back. With Google off the panel opens on `email`,
and on the expired state the heading changes and the steps do not. The rewrite log above
says what each line was.

| Screen | Zone | Line | Type |
|--------|------|------|------|
| sign-in | dialog | Close | button (accessible name) |
| sign-in | title | Sign in | heading |
| sign-in | title | New to Tendd? Either way starts your account. | body (choose) |
| sign-in | primary-action | Continue with Google | button |
| sign-in | secondary-action | Continue with email | button |
| sign-in | email | Back | button (accessible name) |
| sign-in | email | We'll email you a link. There is no password. | body |
| sign-in | email | Email | field-label |
| sign-in | email | Send a sign-in link | button |
| sign-in | legal | By continuing you agree to our Terms and Privacy Policy. | body |
| sign-in | legal | Terms / Privacy Policy | link |
| sign-in-sent | state-message | Check your email | heading |
| sign-in-sent | state-message | A link is on its way to emma@example.com. | state-message |
| sign-in-sent | note | Give it a minute, and look in your spam folder. | body |
| sign-in-sent | secondary-action | Send another link | button |
| sign-in-sent | secondary-action | Send another link in 0:42 | button (disabled, while the minute after a letter runs; the figure counts down) |
| sign-in, sign-in-sent | failure | We could not send a link just now. Try again a little later. | state-message (G1) |
| sign-in-sent | later | Use a different email | button |
| sign-in-expired | state-message | That link has expired | heading |
| sign-in-expired | state-message | Nothing is wrong with your account and nothing was lost. | state-message |

**Deliberately absent, and it is a line that must never be written here:** "that email
is not registered", or any wording that tells the reader whether an address has an
account. Saying it to one person says it to anybody who asks. The screen behaves the
same either way, and the mail that arrives is the one that fits.

### sign-in-mail (+ first)

Added 2026-09-24 with G46. The letter node 1.6 promises, and until this day the one
product surface whose words nobody here had written: Supabase's default said "Magic
Link" and "Follow this link to login". Built from `supabase/templates/sign-in.html`,
which `npm run check:mail` holds to these rows in both directions.

**Two letters, because Supabase sends two.** An address it has never seen gets
`sign-in-mail-first`, and that is where the screen's promise above is kept: the screen
says the same thing to everybody, and the letter, which only the owner of the address
reads, is allowed to say which case this is. It says so because of the person the
screen was built around, who typed an address from a month ago: the first letter tells
them their list is under another one, instead of opening an empty Tendd.

`{{ .Email }}` is printed as it is written, because the template is the line.

| Screen | Zone | Line | Type |
|--------|------|------|------|
| sign-in-mail | sender | Tendd | status |
| sign-in-mail | sender | signin@tendd.co | status |
| sign-in-mail | subject | Your sign-in link for Tendd | heading |
| sign-in-mail | preview | The link works once, and it opens your list. | body |
| sign-in-mail | header | Tendd | status |
| sign-in-mail | title | Sign in to Tendd | heading |
| sign-in-mail | title | You asked for a link to sign in as {{ .Email }}. Open it and you are back in your list. | body |
| sign-in-mail | primary-action | Sign in to Tendd | button |
| sign-in-mail | facts | The link works once, and then it stops. You can ask for a new one on the sign-in page at any time. | hint |
| sign-in-mail | facts | If you did not ask for this, you can ignore it. Nothing happens unless the link is opened. | hint |
| sign-in-mail | fallback | If the button does not open, copy this address into your browser: | hint |
| sign-in-mail | footer | Tendd, tendd.co | footer |
| sign-in-mail-first | preview | The link works once, and it starts your list. | body |
| sign-in-mail-first | title | You asked for a link to sign in as {{ .Email }}. There is no Tendd account under this address yet, so opening the link starts one. | body |
| sign-in-mail-first | title | If you already keep a list in Tendd, it is under a different address. Sign in with that one instead. | body |

`sign-in-mail-first` carries everything `sign-in-mail` does except its `preview` line and
the `title` body line, which it replaces with its own three.

**Deliberately absent: "tap".** The screen above still says it, and the upgrade screen
dropped it on the ground that the product is read on a desktop as often as a phone. A
letter is opened on either, so it says "open".

## Cluster C: Home and Subscription Detail

### home (+ empty, one, few, error, loading)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| home | header | Hi, Emma | body |
| home | summary-strip | You're paying for 14 subscriptions | body |
| home-cancelled | summary-strip | You're paying for 13 subscriptions | body |
| home-cancelled | summary-strip | One more is cancelled and stops on 18 August. | body |
| home-cancelled | list-row | Cancelled | status |
| home-cancelled | list-row | cancelled - stops Aug 18 | body |
| home | summary-strip | a month, for what you have signed up for | body |
| home | alert-banner | Netflix went up by $2.50, now $17.99 a month. | body |
| home | alert-banner | See what changed → | link |
| home | list | Streaming (4) / Software (4) / Music (2) / Fitness (2) / News (2) | heading |
| home | list-group | $54.96 a month / $53.98 a month / $22.98 a month / $24.98 a month / $36.00 a month | body |
| home | list-row | (the canonical list, one GC4 row each) | body |
| home | list-head | Your subscriptions | heading |
| home | add-action | Add a subscription | button |
| home | history-link | See your trends | button |
| home | locked-list | You have 11 more subscriptions | heading |
| home | locked-list | You have 1 more subscription | heading |
| home | locked-list | $138.93 a month, already counted in your total. | body |
| home | locked-list | Tendd Pro | eyebrow (P34) |
| home | locked-list | Tendd found them in your bank. Tendd Pro shows every name, or you can add the ones you know yourself. | body |
| home | locked-list | Choose Tendd Pro before Sep 6 and Tendd names them straight away, without asking your bank again. | body (while the scan is held, P32) |
| home | locked-list | Get Tendd Pro | button |
| home | locked-list | Add them yourself | button |
| home-pro-unnamed | locked-list | They came from your free bank scan, which keeps no names. Connect your bank again and Tendd names every one. | body |
| home-pro-unnamed | locked-list | Connect your bank | button |
| history-trends | trend-list | Not named yet | body (a row a free scan did not name, and its line in the export) |
| home | trust-line | From Chase, 11 subscriptions, and 3 you added yourself. | body |
| home | trust-line | Found in Chase on Aug 30. Nothing is being read now, and the list is yours to keep up to date. | body |
| home | trust-line | Found in Chase on Aug 30. Tendd keeps the connection until Sep 6 without reading it, and then it ends by itself. | body (a free scan, held, P32) |
| home | trust-line | Read-only. Tendd cannot move your money. | body |
| home | trust-line | Last checked today, 9:14 AM. | body |
| home | trust-line | Data and privacy | link |
| home | tab-bar | Home / Alerts / Save / You | nav |
| home-empty | summary-strip | Nothing to add up yet | body |
| home-empty | summary-strip | Connect your bank or add a subscription, and your monthly total appears here as the biggest thing on screen. | body |
| home-empty | state-message | Two ways to start | heading |
| home-empty | state-message | See everything you pay for in one calm place. Pick the one that feels right; you can change it later. | body |
| home-empty | state-message | Connect your bank | button |
| home-empty | state-message | Read-only, through Plaid, and about a minute. Tendd cannot move your money. | body |
| home-empty | state-message | Add a subscription | button |
| home-empty | state-message | Start with one and add more later. No bank is involved, and nothing leaves your control. | body |
| home-error | state-message | We could not refresh just now. Showing your last update from today, 9:14 AM. | state-message |
| home-error | state-message | Try again | button |
| home-error | summary-strip | a month, as of your last update | body |
| home-error | trust-line | (the GC6 lines as on home, with the link pointing at connections) | body |
| home-error | trust-line | Your sources | link |
| home-loading | summary-strip | Getting your subscriptions. This usually takes a moment. | body |
| home | cancel-nudge | Two you have not opened in a while. No pressure, just a nudge. Cutting both would save you $29.99 a month. | body |
| home | cancel-nudge | trial ends in 17 days · not opened in 3 weeks | body |
| home | cancel-nudge | next in 10 days · not opened in 6 weeks | body |
| home | cancel-nudge | Cancel | button |
| home-one | summary-strip | You're paying for 1 subscription | body |
| home-one | list-row | Spotify Premium / in 6 days &middot; Aug 7 / $11.99 | body |
| home-one | way-on | That is the whole list. Add more as you think of them, or connect your bank and Tendd finds the rest. | body |
| home-one | way-on | connect your bank | link |
| home-one | trust-line | 1 subscription, added by you. | body |
| home-one | trust-line | No bank is connected, so nothing is read from anywhere. | body |
| home-one | trust-line | Last updated by you, today, 9:14 AM. | body |
| home-few | summary-strip | You're paying for 3 subscriptions | body |
| home-few | list-row | (three GC4 rows, by the next charge date, soonest first) | body |
| home-few | way-on | (the home-one line, unchanged) | body |
| home-few | trust-line | 3 subscriptions, added by you. | body |
| home-few | trust-line | (the other two lines as on home-one) | body |

### subscription-detail (+ price-change, payment-failed, unrecognized, loading, error)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| subscription-detail | appbar | ‹ Your subscriptions | link |
| subscription-detail | hero | Spotify Premium | heading |
| subscription-detail | hero | $11.99 | body |
| subscription-detail | hero | a month | body |
| subscription-detail | status | Active | status |
| subscription-detail | facts | Next charge / Billing cycle / Charged to / Category / Paid so far | field-label |
| subscription-detail | facts | in 6 days, Aug 7 / Monthly / Chase checking / Music / $143.88 since Aug 2025 | body |
| subscription-detail | decoder | Appears on your statement as | body |
| subscription-detail | decoder | SPOTIFYAB STOCKHOLM | body (USER) |
| subscription-detail | charges | Recent charges | heading |
| subscription-detail | gate | Three months are free. Longer history and trends are part of Tendd Pro. | body |
| subscription-detail | gate | See what Pro adds | button |
| subscription-detail | gate | Maybe later | button |
| subscription-detail | cancel-action | Cancel this subscription | button |
| subscription-detail | correction | Edit the details | button |
| subscription-detail | correction | This is not a subscription | button |
| subscription-detail | removal | This one came from Chase, so removing it hides the row rather than deleting it. If the charge appears again, Tendd will show it again. | body |
| subscription-detail | removal | Remove from your list | link |
| subscription-detail | trust-line | From Chase, read-only. Tendd cannot move your money. | body |
| subscription-detail | trust-line | Last checked today, 9:14 AM. | body |
| subscription-detail | trust-line | Data and privacy | link |
| subscription-detail-price-change | hero | Netflix / $17.99 / a month | heading |
| subscription-detail-price-change | status | Price changed | status |
| subscription-detail-price-change | alert-banner | Netflix went up by $2.50 on Jul 28. Your next charge is $17.99 instead of $15.49. | body |
| subscription-detail-price-change | charges | Aug 3, next / $17.99 / was $15.49 | body |
| subscription-detail-payment-failed | hero | Amazon Prime / $14.99 / a month | heading |
| subscription-detail-payment-failed | status | Payment failed | status |
| subscription-detail-payment-failed | state-message | A payment to Amazon Prime did not go through on Jul 20. Amazon usually tries again within a few days, and Tendd will tell you when it does. Nothing is wrong with your money. | state-message |
| subscription-detail-payment-failed | facts | Next attempt / expected in the next few days | field-label |
| subscription-detail-payment-failed | charges | Jul 20 / $14.99 / did not go through | body |
| subscription-detail-payment-failed | correction | See all your alerts | button |
| subscription-detail-unrecognized | hero | SQ *BLUEBOTTLE 8890 | heading (USER) |
| subscription-detail-unrecognized | hero | $14.00, seen monthly | body |
| subscription-detail-unrecognized | status | Not identified | status |
| subscription-detail-unrecognized | state-message | It repeats like a subscription, but we could not match it to a service. Name it and pick a category so it reads clearly next time. | state-message |
| subscription-detail-unrecognized | facts | Seen / Last charge / Charged to / Category | field-label |
| subscription-detail-unrecognized | facts | 3 times, monthly since May / Jul 12 / Chase checking / not set yet | body |
| subscription-detail-unrecognized | decoder | All we have is how it appears on your statement | body |
| subscription-detail-unrecognized | primary-action | Name this charge | button |
| subscription-detail-loading | state-message | Getting the details. This usually takes a moment. | state-message |
| subscription-detail-error | state-message | We could not load the rest of this subscription. This is usually temporary, and nothing about your money changed. | state-message |
| subscription-detail-error | primary-action | Try again | button |
| subscription-detail-error | secondary-action | Your subscriptions | button |
| subscription-detail-error | trust-line | Your sources | link |

---

## Cluster D: Alerts, Cancel Guide, Cancel Win, Share Snapshot

### alerts (+ empty, loading, error)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| alerts | title | Alerts | heading |
| alerts | title | The few things worth knowing about. A quiet dot marks what is new since your last visit. | body |
| alerts | group | Needs you | heading |
| alerts | alert-row | Netflix went up by $2.50, now $17.99 a month | body |
| alerts | alert-row | Price change · Netflix · Jul 28 · from Chase | body |
| alerts | alert-row | Was $15.49 / Now $17.99 / Difference $2.50 | body |
| alerts | alert-row | See what changed | link |
| alerts | alert-row | A payment to Amazon Prime did not go through | body |
| alerts | alert-row | Payment failed · Amazon Prime · $14.99 · Jul 20 · from Chase | body |
| alerts | alert-row | What to do | link |
| alerts | group | Just so you know | heading |
| alerts | alert-row | iCloud+ charges $2.99 tomorrow | body |
| alerts | alert-row | Coming up · iCloud+ · Aug 2 · from Chase | body |
| alerts | alert-row | ChatGPT Plus charges $20.00 in 4 days | body |
| alerts | alert-row | Tendd found a new subscription, Strava, $11.99 a month | body |
| alerts | alert-row | New subscription · Strava · found Jul 29 · from Chase | body |
| alerts | alert-row | Your Peloton App trial ends soon | body |
| alerts | alert-row | Trial ending · Peloton App · Aug 18 · Tendd Pro explains what happens next | body |
| alerts | alert-row | See what Pro adds | link |
| alerts | alert-row | Pro | status |
| alerts | group | Older | heading |
| alerts | alert-row | We could not take your Spotify Premium payment on Jun 28 | body |
| alerts | alert-row | Payment failed · Spotify Premium · $11.99 · from Chase · this one has since gone through | body |
| alerts | alert-row | See Spotify Premium | link |
| alerts | settings-link | What Tendd tells you about | link |
| alerts-empty | state-message | All clear | heading |
| alerts-empty | state-message | Nothing needs your attention right now. If a price changes or a payment does not go through, you will see it here first, in plain language. | state-message |
| alerts-empty | group | What shows up here | heading |
| alerts-empty | group | A price goes up (with the old price beside the new one) / A payment does not go through (and what usually happens next) / A charge is coming (in the next seven days) / Tendd finds a new subscription (on one of your sources) | body |
| alerts-empty | primary-action | Back to your subscriptions | button |
| alerts-loading | state-message | Checking for anything worth knowing about. This usually takes a moment. | state-message |
| alerts-error | state-message | We could not load your alerts | heading |
| alerts-error | state-message | Nothing is wrong with your money, we just could not reach your alerts right now. Give it another try, or head back to your subscriptions. | state-message |
| alerts-error | primary-action | Try again | button |
| alerts-error | secondary-action | Back to your subscriptions | button |
| alerts-error | trust-line | Your sources | link |

### cancel-guide (+ no-guide, blocked)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| cancel-guide | appbar | ‹ Netflix | link |
| cancel-guide | title | Cancel Netflix | heading |
| cancel-guide | title | $17.99 a month. You can always resubscribe later. | body |
| cancel-guide | what-happens | You keep Netflix until / Aug 3, the end of the month you paid for | field-label |
| cancel-guide | what-happens | After that / no further charges, and $17.99 a month stops going out | field-label |
| cancel-guide | what-happens | If you change your mind / resubscribing takes a minute and your profiles are kept | field-label |
| cancel-guide | strip | About five minutes | body |
| cancel-guide | strip | Steps for netflix.com, which is how you pay for this one | body |
| cancel-guide | step | How to cancel Netflix | heading |
| cancel-guide | step | Go to netflix.com and sign in. / Open Account, then Membership and Billing. / Choose Cancel Membership. / Netflix will offer to pause instead. Keep choosing Cancel, and watch for the confirmation email. | body |
| cancel-guide | freshness | We last checked these steps on Jul 24. If Netflix has changed them, tell us and we will fix the guide. | body |
| cancel-guide | primary-action | Open netflix.com and cancel | button |
| cancel-guide | primary-action | Open the cancel page on netflix.com | button (Tendd Pro, where the service publishes a cancel page) |
| cancel-guide | freshness | We last checked this link on Sep 29. | hint (Tendd Pro, under the link) |
| cancel-guide | pro-callout | The steps above are free and always will be. Tendd Pro adds a direct link to the cancel page on netflix.com, so you start where the steps end. | body (Free, where the service publishes a cancel page) |
| cancel-guide | pro-callout | See what Pro adds | button |
| cancel-guide | pro-callout | Maybe later | button |
| cancel-guide | confirm | Managed to cancel? Mark it here and we will show what you saved. | body |
| cancel-guide | confirm | I cancelled it | button |
| cancel-guide | help-path | Ran into a wall or a "please stay" screen? | body |
| cancel-guide | help-path | Couldn't cancel? | link |
| cancel-guide-no-guide | title | Cancel The New York Times | heading |
| cancel-guide-no-guide | state-message | We do not have step-by-step for this one yet | heading |
| cancel-guide-no-guide | state-message | Here is the general way most subscriptions cancel. It works for The New York Times too. | state-message |
| cancel-guide-no-guide | strip | The general path, because we have no tailored steps for this service yet | body |
| cancel-guide-no-guide | step | The general way | heading |
| cancel-guide-no-guide | step | Open the service's website and sign in. / Go to Account or Subscription settings. / Look for Cancel or Manage plan. / Confirm, and watch for a confirmation email. | body |
| cancel-guide-no-guide | freshness | These general steps were last checked on Jul 24. | body |
| cancel-guide-no-guide | request-guide | Want a tailored guide? Tell us and we will add one for The New York Times. | body |
| cancel-guide-no-guide | request-guide | Ask us to add this guide | button |
| cancel-guide-no-guide | confirm | Managed to cancel with the general steps? Mark it here. | body |
| cancel-guide-blocked | state-message | Cancelling can be made deliberately hard, and it is not your fault | heading |
| cancel-guide-blocked | state-message | Netflix is still active. Here is what else to try, and none of it costs you the progress you have made. | state-message |
| cancel-guide-blocked | step | Skip the "special offers" screen and keep choosing Cancel, not Pause. / Try cancelling from a web browser instead of the app. / If you are billed through Apple or Google, cancel in your device subscriptions instead. / Still stuck? Leave it and come back. Nothing is lost, and we will remind you before the next charge on Aug 3. | body |
| cancel-guide-blocked | primary-action | I cancelled it | button |
| cancel-guide-blocked | secondary-action | Remind me later | button |
| cancel-guide-blocked | next-move | Tendd Pro links straight to the cancel page on netflix.com. | body (Free, where the service publishes a cancel page) |
| cancel-guide-blocked | next-move | Want to try again from the start? | body (Tendd Pro) |
| cancel-guide-blocked | next-move | Open the cancel page on netflix.com | link (Tendd Pro) |
| cancel-guide-blocked | next-move | See what Pro adds | link |

### cancel-win

| Screen | Zone | Line | Type |
|--------|------|------|------|
| cancel-win | header | A small win | body |
| cancel-win | win-summary | You just cancelled Netflix and freed up | heading |
| cancel-win | win-summary | $17.99 a month | body |
| cancel-win | win-summary | That is $215.88 a year back in your pocket. | body |
| cancel-win | win-summary | On your word. You can always resubscribe if you miss it. | body |
| cancel-win | running-total | With Tendd so far / $32.98 a month freed up | field-label |
| cancel-win | running-total | Over a year / about $395, across the subscriptions you have cut | field-label |
| cancel-win | continue | Back to your subscriptions | button |
| cancel-win | share | Feeling good about it? You can share a simple card. No bank details, ever. | body, LATER |
| cancel-win | share | Share this win | button, LATER |


The two `share` lines are authored and kept, and they are **out of MVP**: node 4.11 Share
Snapshot is LATER, so an MVP screen cannot lead there (D-Share, founder, 2026-08-04, raised
by `ia/docs/blocks.md`). In MVP the win screen ends on the continue line. The copy stays here
rather than being deleted and rewritten later; the same applies to every `share-snapshot` line
below.

### share-snapshot (+ loading, error)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| share-snapshot | header | Back | link |
| share-snapshot | header | Share this win | heading |
| share-snapshot | header | Here is the card, exactly as it will look. Nothing is shared until you tap Share. | body |
| share-snapshot | share-preview | On Tendd, I am keeping an eye on | body |
| share-snapshot | share-preview | 13 subscriptions | body |
| share-snapshot | share-preview | $174.91 | body |
| share-snapshot | share-preview | a month, all in one calm place | body |
| share-snapshot | share-preview | Just cancelled Netflix and freed up $17.99 a month. | body |
| share-snapshot | primary-action | Share | button |
| share-snapshot | secondary-action | Back to your subscriptions | button |
| share-snapshot | privacy-note | What is on this card | heading |
| share-snapshot | privacy-note | The number of subscriptions, the monthly total, and the one you just cancelled. No account numbers, no bank details, and no list of what you pay for. | body |
| share-snapshot-loading | state-message | Making your card. This usually takes a moment. | state-message |
| share-snapshot-loading | privacy-note | Nothing is shared while this is being made, and nothing is shared afterwards until you tap Share. | body |
| share-snapshot-error | state-message | We could not create the card | heading |
| share-snapshot-error | state-message | Nothing is wrong with your account, and your cancel win is saved. This is only the picture. | state-message |
| share-snapshot-error | primary-action | Try again | button |
| share-snapshot-error | secondary-action | Back to your subscriptions | button |
| share-snapshot-error | privacy-note | Nothing was shared, and nothing was posted anywhere. | body |

---

## Cluster E: History and Trends, Upgrade, Connections, Data and Privacy, Settings

### history-trends (+ locked, empty, loading, error)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| history-trends | header | Your subscriptions | link |
| history-trends | header | Your trends | heading |
| history-trends | header | Pro | status |
| history-trends | header | How your monthly total has moved over time. Nothing to act on here, just the shape of it. | body |
| history-trends | time-range | 3 months / 6 months / 12 months | button |
| history-trends | chart-area | Your monthly total went from $172.90 in May to $192.90 in July, up about $20 across three months. | body |
| history-trends | trend-list | What moved | heading |
| history-trends | trend-list | Up $2.50 since May, now $17.99 a month | body |
| history-trends | trend-list | New since June, $20.00 a month | body |
| history-trends | trend-list | No change since March, $17.00 a month | body |
| history-trends | trend-list | Higher / New / Steady | status |
| history-trends | trend-list | By category | body |
| history-trends | trend-list | Streaming is up $6 since March. Everything else held steady. | body |
| history-trends | export | Export as CSV | button |
| history-trends | chart-area | Your monthly total went from $166.90 in February to $192.90 in July, up about $26 across six months. / ... from $143.91 last August ... across the year. / ... across two months. | body (per range) |
| history-trends | chart-area | Your monthly total went from $192.90 in May to $172.90 in July, down about $20 across three months. | body (the total fell) |
| history-trends | chart-area | Your monthly total is $192.90 a month, the same as it was in May. | body (the total held) |
| history-trends | chart-area | Line chart of your monthly total from May to July. The figures are the sentence above | label |
| history-trends | data-source | Every month here is your own history, from Chase and the 3 subscriptions you added yourself. / Read-only. Tendd cannot move your money. / Last checked today, 9:14 AM. | body (bank connected) |
| history-trends | data-source | Every month here is your own history, from the 14 subscriptions on your list. | body (no bank reading) |
| history-trends | trend-list | Down $2.00 since May, now $5.99 a month | body |
| history-trends | trend-list | Cancelled in June, was $7.99 a month | body |
| history-trends | trend-list | Lower / Cancelled | status |
| history-trends | trend-list | The other 11 held steady. / The other one held steady. | body |
| history-trends | trend-list | Nothing moved. Every subscription is where it was in May. | body |
| history-trends | by-category | $192.90 a month | status |
| history-trends | by-category | Software is up $20.00 and Streaming $2.50 since May. Everything else held steady. / Streaming is down $7.99 since May. / Every category held steady since May. | body (composed) |
| history-trends | export | Your history as a spreadsheet, for reading it somewhere else. Part of Tendd Pro. A plain copy of everything we hold is free and lives in Data and privacy. | body |
| history-trends-locked | header | Free | status |
| history-trends-locked | lock | Trends are part of Tendd Pro | heading |
| tab bar | destination | Trends | label |
| history-trends-locked | readout | Your monthly total is $192.90 a month, the same as it was in June. | body |
| history-trends-locked | chart | Line chart of your monthly total for June and July, the two months a free plan shows | label |
| history-trends-locked | lock | Your list, your total and your alerts stay free and uncapped, and so are these two months. What Pro adds is the rest of the past: | body |
| history-trends-locked | lock | How your monthly total moved, over 3, 6 or 12 months | body |
| history-trends-locked | lock | Which subscriptions went up, which are new, which held steady | body |
| history-trends-locked | lock | Your history as a spreadsheet | body |
| history-trends-locked | primary-action | See what Pro adds | button |
| history-trends-locked | export | A plain copy of everything we hold about you is free, and it is in Data and privacy. This is the analytical export, which is the Pro one. | body |
| history-trends-empty | state-message | Still gathering your history | heading |
| history-trends-empty | state-message | Trends need a few months to be worth looking at, and we have less than three so far. Come back in a few weeks and the shape of your spending will be here. | state-message |
| history-trends-empty | chart-area | Two months so far. Your first trend line appears once September closes. | body |
| history-trends-empty | primary-action | Back to your subscriptions | button |
| history-trends-empty | reassurance | Nothing is missing and nothing failed. Your list, your total and your alerts are all working as usual. | body |
| history-trends-loading | state-message | Adding up your last few months. This usually takes a moment. | state-message |
| history-trends-error | state-message | We could not load your trends | heading |
| history-trends-error | state-message | Something on our side did not answer. Your subscriptions, your total and your alerts are not affected: this is only the history view. | state-message |
| history-trends-error | primary-action | Try again | button |
| history-trends-error | secondary-action | Back to your subscriptions | button |
| history-trends-error | reassurance | Nothing about your plan or your data changed. If it keeps happening, tell us and we will look at it. | body |

### upgrade (+ processing, payment-failed, current-plan, renewal-failed)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| upgrade | header | Close | link |
| upgrade | header | Tendd Pro | heading |
| upgrade | header | Free | status |
| upgrade | header | Pay less per month than most of the subscriptions you will cancel. | body |
| upgrade | context | You came here from Your trends. History and trends are part of Tendd Pro. | body |
| upgrade | context | You came here from your list. The names behind your bank scan are part of Tendd Pro. | body |
| upgrade | context | You came here from Connect your bank. The first scan is done, and a bank connection that keeps the list up to date is part of Tendd Pro. | body |
| upgrade | plan-card | Everything in Tendd Pro | field-label |
| upgrade | feature-list-compact | Every name in your bank scan | body |
| upgrade | feature-list-compact | A bank connection that keeps the list up to date | body |
| upgrade | feature-list-compact | History and trends | body |
| upgrade | feature-list-compact | Advanced alerts | body |
| upgrade | feature-list-compact | Full cancel guides | body |
| upgrade | feature-list-compact | Export | body |
| upgrade | price | $69 a year | heading |
| upgrade | price | That is $5.75 a month, and it saves about $50 a year versus paying monthly. | body |
| upgrade | price | Best value | status |
| upgrade | price | $9.99 a month | heading |
| upgrade | price | Month to month. Cancel any time, no lock-in. | body |
| upgrade | price | Lifetime | heading |
| upgrade | price | one payment | body |
| upgrade | price | Tendd Pro stays open, for people who would rather never think about a renewal again. | body |
| upgrade | price | Not on sale yet. We are still working out the price. | body |
| upgrade | price | Not open yet. Tendd cannot take a payment, so these have no button. | body |
| upgrade | primary-action | Start Tendd Pro - $69 a year | button |
| upgrade | primary-action | Start Tendd Pro - $9.99 a month | button |
| upgrade | primary-action | Maybe later | button |
| upgrade | primary-action | Pays for itself with the first subscription you cancel. | body |
| upgrade-processing | state-message | Setting up your Pro plan | heading |
| upgrade-processing | state-message | This takes a few seconds. Do not close this page, and nothing is charged twice if it takes a moment longer. | state-message |
| upgrade-processing | context | When it is done you go straight back to Your trends, open. | body |
| upgrade-payment-failed | state-message | That payment did not go through | heading |
| upgrade-payment-failed | state-message | Your bank did not approve it, so nothing was charged. This happens most often with a card that has expired or a bank that wants to confirm a new payment. | state-message |
| upgrade-payment-failed | facts | What was charged: Nothing. There is no payment to reverse | body |
| upgrade-payment-failed | facts | Your plan: Still Free, and everything free is still working | body |
| upgrade-payment-failed | primary-action | Try another payment method | button |
| upgrade-payment-failed | secondary-action | Maybe later | button |
| upgrade-payment-failed | reassurance | You can come back to this from any Pro feature. Nothing about your subscriptions or your data changed. | body |
| upgrade-current-plan | appbar | ‹ Back | link |
| upgrade-current-plan | appbar | Pro | status |
| upgrade-current-plan | title | You are on Tendd Pro | heading |
| upgrade-current-plan | title | Everything below is open to you. Nothing here needs doing unless you want to stop. | body |
| upgrade-current-plan | facts | Your plan / Tendd Pro, yearly | field-label |
| upgrade-current-plan | facts | Renews / 1 May 2027, at $69 | field-label |
| upgrade-current-plan | facts | Your plan / Tendd Pro, monthly | field-label |
| upgrade-current-plan | facts | Ends / 1 May 2027. It does not renew | field-label |
| upgrade-current-plan | primary-action | Manage plan | button (after cancelling) |
| upgrade-current-plan | consequence | Keeping it means it renews on 1 May 2027, at $69. Nothing is charged before then. | body (after cancelling) |
| upgrade-current-plan | primary-action | Keep Tendd Pro | button (after cancelling) |
| upgrade-current-plan | primary-action | Update your payment method | button (renewal being retried) |
| upgrade-current-plan | consequence | Cancelling keeps everything you can see without Pro. Your subscriptions, the monthly total and the basic alerts are Free and uncapped, and they stay. History, trends and the advanced alerts close at the end of the period you have already paid for, on 1 May 2027, and you can start Pro again any time. | body |
| upgrade-current-plan | feature-list | Every name in your bank scan (Nothing on your list is withheld) | body |
| upgrade-current-plan | feature-list | A bank connection that keeps the list up to date (Read again when your bank reports a change) | body |
| upgrade-current-plan | feature-list | History and trends (3, 6 and 12 month views) | body |
| upgrade-current-plan | feature-list | Advanced alerts (A trial ending, and a charge coming up) | body |
| upgrade-current-plan | feature-list | Full cancel guides (With a direct link to the cancel page) | body |
| upgrade-current-plan | feature-list | Export (Your history as a spreadsheet) | body |
| upgrade-current-plan | primary-action | Cancel Tendd Pro | button |
| upgrade-current-plan | later | Back to your settings | link |
| upgrade-renewal-failed | appbar | Close | link |
| upgrade-renewal-failed | appbar | Pro | status |
| upgrade-renewal-failed | title | Tendd Pro did not renew | heading |
| upgrade-renewal-failed | title | Your bank did not approve the payment on 1 May, so nothing was charged. This happens most often with a card that has expired, or with a bank that wants to confirm a repeat payment. | body |
| upgrade-renewal-failed | facts | What was charged / Nothing. There is no payment to reverse | field-label |
| upgrade-renewal-failed | facts | Your plan / Still Tendd Pro until 8 May, while the payment is tried again | field-label |
| upgrade-renewal-failed | facts | Your subscriptions / All 14 are here, with the monthly total and your alerts | field-label |
| upgrade-renewal-failed | primary-action | Update your payment method | button |
| upgrade-renewal-failed | secondary-action | Not now | button |
| upgrade-renewal-failed | consequence | If it has not gone through by 8 May, your plan goes back to Free. Nothing is deleted and nothing is capped: your subscriptions, your monthly total, your basic alerts and this month against last stay exactly as they are. The 3, 6 and 12 month views, the full cancel guides and the advanced alerts come back the moment a payment works. | body |

**On the cancel nudge, 2026-08-21, and it is one line where there were two.** The Save tab
was retired and its block moved onto Home, which merged two strings into one: the summary
strip's "a month. You could save up to $29.99 a month by cutting 2 you might not be using"
and the block's own "Two you have not opened in a while. No pressure, just a nudge." **The
strip goes back to "a month, for what you have signed up for" on every state of Home**, because
a savings figure in the biggest thing on the screen makes the calm view a pitch, and this
product's first principle is that the calm view sells nothing. The figure is a fact about two
rows, so it is stated on them: **"Cutting both would save you $29.99 a month."** "Cutting both"
and not "by cutting 2 you might not be using", which counted the same two things twice in one
sentence.

**On the renewal line, 2026-08-20, and why it is not the payment-failed line with a
different date.** `upgrade-payment-failed` can afford to be short because nothing is at
stake: the person is on Free, nothing was charged, and the worst case is that they stay
where they are. Here the plan is already theirs and the money is already flowing, so the
sentence has to carry a date, a grace period and a downgrade - and it has to put what is
NOT lost before what is. The order is deliberate and it is D-Free read out loud: nothing
deleted, nothing capped, the list and the total and this month against last unchanged;
then, and only then, the four things that pause. **"Not now" and not "Maybe later"**,
because "later" is what you say to an offer and this is not an offer.

**On the cancel line, and the three things it does not say.** No discount, no "are you
sure you want to lose", no "tell us why". A product whose whole promise is that
cancelling should be easy cannot make its own subscription the hard one, and every
retention pattern the category uses here is the pattern node 4.9 exists to help people
survive. The consequence is stated above the action rather than sprung after it, and
what it says first is what the person is actually afraid of: the list stays.

### connections (+ empty, reconnect, add-source)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| connections | appbar | ‹ You | link |
| connections | header | Your sources | heading |
| connections | header | Where Tendd gets the list of what you pay for. You are always in control of these. Read-only. Tendd cannot move your money. | body |
| connections | connection-row | Chase | heading |
| connections | connection-row | Bank connection through Plaid | body |
| connections | connection-row | Connected / Private / Reconnect needed / Disconnected | status |
| connections | connection-row | Last checked / Accounts included / Tracking from here / Access | field-label |
| connections | connection-row | today, 9:14 AM / Checking / 11 subscriptions / Read-only. Tendd cannot move your money. | body |
| connections | connection-row | Disconnecting stops Tendd from reading new charges. The 11 subscriptions already found stay on your list and become yours to keep up to date. | body |
| connections | connection-row | Disconnect Chase | button |
| connections | connection-row | Added by you | heading |
| connections | connection-row | Private, entered by hand | body |
| connections | connection-row | Last updated / Tracking here / Access | field-label |
| connections | connection-row | by you, Jul 30 / 3 subscriptions / Only what you type. Nothing is read from anywhere. | body |
| connections | connection-row | Removing this source deletes the 3 subscriptions you typed. They exist nowhere else, so this one cannot be undone. | body |
| connections | connection-row | Add a subscription | button |
| connections | connection-row | Remove this source | button |
| connections | add-source | Add a source | button |
| connections | provider-note | US banks connect through Plaid. More regions soon. | body |
| connections | provider-note | What we read | link |
| connections-empty | state-message | No sources yet | heading |
| connections-empty | state-message | Add one and your subscriptions appear on your list. You can change this later, and you can have both. | state-message |
| connections-empty | state-message | Connect your bank / Add a subscription | button |
| connections-stopped | connection-row | Disconnected | status |
| connections-stopped | connection-row | Found in Chase on Aug 30. Nothing is being read now, and the list is yours to keep up to date. | body (the Home trust line, reused) |
| connections-held | connection-row | Kept until Sep 6 | status |
| connections-held | connection-row | Tendd keeps this connection until Sep 6 without reading it, so Tendd Pro can name what the free scan found without asking your bank again. After that it ends by itself. | body |
| connections-held | connection-row | Disconnect Chase | button (the connected card's own) |
| connections-reconnect | state-message | Chase needs to reconnect. Banks ask for this now and then to keep your connection secure. Your last update is still below, and nothing about your money has changed. | state-message |
| connections-reconnect | connection-row | Until it reconnects, your list is the one from Jul 29. New charges and price changes will not appear. | body |
| connections-reconnect | connection-row | Jul 29, 8:02 AM | body |
| connections-reconnect | primary-action | Reconnect Chase | button |
| connections-add-source | state-message | Add a source | heading |
| connections-add-source | state-message | The same two ways in, and you can have both. There is no limit on how many you add. | state-message |
| connections-add-source | path-option | Connect your bank | heading |
| connections-add-source | path-option | Read-only, through Plaid, and about a minute. Tendd cannot move your money. | body |
| connections-add-source | path-option | Add them yourself | heading |
| connections-add-source | path-option | Start with one and add more later. No bank is involved, and nothing leaves your control. | body |
| connections-add-source | path-option | Choose this path | button |
| connections-add-source | later | Not now | link |

### data-privacy (+ delete-confirm)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| data-privacy | appbar | ‹ You | link |
| data-privacy | header | Data and privacy | heading |
| data-privacy | header | Exactly what Tendd reads, and how to remove it whenever you want. | body |
| data-privacy | privacy-section | Worried what an app does with your bank data? Here is exactly what we do. | body |
| data-privacy | privacy-section | We read your recurring charges | body |
| data-privacy | privacy-section | Read-only, and nothing else you do with your money. | body |
| data-privacy | privacy-section | We can never move your money | body |
| data-privacy | privacy-section | The connection has no permission to, and we never ask for one. | body |
| data-privacy | privacy-section | We do not sell your data | body |
| data-privacy | privacy-section | Not to advertisers, not to anyone, on any plan. | body |
| data-privacy | privacy-section | What each source can reach | heading |
| data-privacy | privacy-section | Bank connection / read-only transaction history, through Plaid | field-label |
| data-privacy | privacy-section | Added by you / only what you type | field-label |
| data-privacy | privacy-section | Your sources | link |
| data-privacy | permissions | Controls | heading |
| data-privacy | permissions | Refresh my bank data automatically | field-label |
| data-privacy | permissions | Read-only. Keeps your list current without you asking. | hint |
| data-privacy | permissions | Use my activity to improve Tendd | field-label |
| data-privacy | permissions | Off by default. We never sell your data either way. | hint |
| data-privacy | export | Your data | heading |
| data-privacy | export | Download everything Tendd holds for you. This is your right and it is free. Exporting your history as a spreadsheet is a separate Tendd Pro feature, on Your trends. | body |
| data-privacy | export | Download your data | button |
| data-privacy | delete | Deleting removes your subscriptions, your sources and your account. It cannot be undone. | body |
| data-privacy | delete | Delete everything | button |
| data-privacy | policy | Read the full privacy policy | link |
| data-privacy-delete-confirm | state-message | Delete everything Tendd holds for you? | heading |
| data-privacy-delete-confirm | state-message | This deletes your 14 subscriptions, both of your sources, and your account. It cannot be undone, and we keep no copy. | state-message |
| data-privacy-delete-confirm | consequence | Your subscriptions / deleted, including the 3 you typed | field-label |
| data-privacy-delete-confirm | consequence | Your bank connection / disconnected at Chase, and the read access ends | field-label |
| data-privacy-delete-confirm | consequence | Your account / closed, and you are signed out | field-label |
| data-privacy-delete-confirm | export | Want a copy first? Download your data is free and takes a moment. | body |
| data-privacy-delete-confirm | primary-action | Delete everything | button |
| data-privacy-delete-confirm | primary-action | Keep my data | button |

### settings (+ no-account)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| settings | account | You | heading |
| settings | account | Your details, your plan, and the two screens that hold everything about your data. | body |
| settings | account | Your details | heading |
| settings | account | Email | field-label |
| settings | account | emma@example.com | body (USER) |
| settings | account | Currency | field-label |
| settings | account | US dollar ($) / Euro / British pound | body |
| settings | account | Every amount in Tendd is shown in this currency. | hint |
| settings | plan-card | Your plan | heading |
| settings | plan-card | Free / Pro | status |
| settings | plan-card | Pro until 1 May 2027 | status (after cancelling) |
| settings | plan-card | Then Free. It does not renew, and nothing more is charged. | body (after cancelling) |
| settings | plan-card | Pro, renews 1 May 2027 | status (renewing) |
| settings | plan-card | At $69 a year. Cancel any time in Manage plan. | body (renewing) |
| settings | plan-card | Keeping it means it renews on 1 May 2027, at $69. Nothing is charged before then. | body (after cancelling) |
| settings | plan-card | Keep Tendd Pro | button (after cancelling) |
| settings | plan-card | Unlimited subscriptions and unlimited bank connections. History, trends and advanced alerts are part of Tendd Pro. | body |
| settings | plan-card | Manage plan | button |
| settings | notifications | What Tendd tells you about | heading |
| settings | notifications | All in plain language, never alarming. | body |
| settings | notifications | A price goes up (Like "Netflix went up by $2.50".) | field-label |
| settings | notifications | A payment does not go through (Like "A payment to Amazon Prime did not go through".) | field-label |
| settings | notifications | A free trial is ending soon (Part of Tendd Pro.) | field-label |
| settings | notifications | A charge is coming up (Two days before, with the amount. Part of Tendd Pro.) | field-label |
| settings | notifications | Weekly email digest (A calm Sunday summary of what is coming up.) | field-label |
| settings | appearance | How Tendd looks | heading |
| settings | appearance | Dark mode (Easier on the eyes at night. Nothing else changes.) | field-label |
| settings | settings-row | Your sources (Banks and manual entries you track) | body |
| settings | settings-row | Data and privacy (What we read, and delete everything) | body |
| settings | settings-row | Help and support (Guides and how to reach us) | body |
| settings | settings-row | Sign out | body |
| settings-no-account | account | You | heading |
| settings-no-account | account | Your plan, and the two screens that hold everything about your data. | body |
| settings-no-account | account | Create an account to keep your list | heading |
| settings-no-account | account | You have 3 subscriptions saved in this browser. An account is one email, and it is what lets them follow you. | body |
| settings-no-account | account | Email | field-label |
| settings-no-account | primary-action | Send a sign-in link | button |
| settings-no-account | trust-note | Your list follows you | body |
| settings-no-account | trust-note | Right now it lives in this browser only. Clear it, or open Tendd on your phone, and the list is not there. | body |
| settings-no-account | trust-note | What we tell you about can reach you | body |
| settings-no-account | trust-note | A price change or a payment that did not go through can be sent to you, instead of waiting here until you look. | body |
| settings-no-account | trust-note | What we would hold | body |
| settings-no-account | trust-note | An email and a currency. Nothing is read from a bank, because you have not connected one. | body |
| settings-no-account | settings-row | Your sources (3 subscriptions you typed, and nothing connected) | body |
| settings-no-account | settings-row | Already have an account? (Sign in and this list joins it) | body |

**Two rows are missing from this state on purpose.** There is no "What Tendd tells you
about" block, because there is no address to send anything to, and a preference screen
for messages that cannot arrive is theatre. That fact is not hidden: it is the second
of the three lines above, written as what an account changes rather than as a lack.
And there is no "Sign out", because there is nothing to sign out of.

---

## Discrepancies flagged (Step 1, not yet resolved)

Nothing below is rewritten. These are the places where the product says the same
thing in different words, or slips into a tone we said we would avoid. Step 3
(Dictionary and Forbidden) and Step 4 (Microcopy rules) decide each one.

### D1. The manual-add action has 7 different labels

The single job "add a subscription by hand" is written as: `Add them yourself`
(path-choice), `Add them yourself instead` (connect-bank, connect-bank-error),
`Add them yourself` (connect-bank-empty), `Add subscription` (add-subscription,
add-subscription-error), `Add it manually` (add-subscription custom link,
add-subscription-empty), `+ Add subscription` (home), `Add a subscription`
(home-empty, guided-reveal-empty), `Add manually` (connections, connections-empty),
`Add another by hand` (connections). Needs one canonical button label.

### D2. The connect-bank action has 3 labels

`Connect your bank` (path-choice, connect-bank, home-empty) vs `Choose your bank`
(connect-bank primary button) vs `Connect a bank` (connections, connections-empty).

### D3. "Go back to Home" is the same destination under 4 names

`Back to your subscriptions` (alerts-empty, alerts-error), `Back to Home`
(subscription-detail-error, history-trends-empty), `Done, back to my list`
(cancel-win, share-snapshot, share-snapshot-error), `See my list` /
`See my full list` (add-subscription, guided-reveal). All land on Home.

### D4. The retry action has 4 labels

`Try again` (connect-bank-error, home-error, alerts-error, subscription-detail-error,
share-snapshot-error) vs `Check again` (connect-bank-empty) vs `Search again`
(add-subscription-empty) vs `Try the list again` (add-subscription-error).

### D5. The tracked thing is named 5 ways

`subscription` (most screens), `thing` (guided-reveal: "subscribed to 14 things"),
`service` (add-subscription: "Find a service", "400+ services", "Loading services"),
`recurring charge` (welcome, connect-bank, data-privacy), `what you pay for`
(connections, home-empty). The catalog of presets is `presets` on welcome but
`services` everywhere else. Dictionary must fix one term per concept and say when
"service" (the catalog entry) legitimately differs from "subscription" (the thing
being tracked).

### D6. The bank-or-manual origin is named 3 ways

`source` (connections: "Your sources", "Add a source"; settings; data-privacy),
`connection` ("Bank connection via Plaid", "bank connections"), `bank` /
`account`. One dictionary term needed, with "connection" reserved for the Plaid
link specifically if we keep both.

### D7. The read-only trust line drifts across 4 forms

`Read-only, we can never move your money.` (welcome, path-choice) /
`We can never move your money.` (connect-bank, data-privacy) /
`Read-only. Tendd cannot move your money.` (home, connections) /
`Read-only, cannot move money` (connections access value). Two variables move
independently: "we" vs "Tendd", and whether "Read-only" leads. This is Tendd's
most important trust sentence and should be one fixed line.

### D8. "Plaid" takes 3 prepositions

`Powered by Plaid` (connect-bank) / `via Plaid` (connections) / `through Plaid`
(connections, welcome). Pick one.

### D9. The monthly total concept is phrased 4 ways

`monthly total` (welcome, home-empty), `recurring spend` (history-trends header),
`monthly recurring total` (history-trends summary), `recurring money` (welcome
benefit card). Choose one label for the headline number.

### D10. Loading screens are inconsistent

Most loaders use one calm sentence ending "This usually takes a moment."
(home-loading, alerts-loading, history-trends-loading, share-snapshot-loading).
But two use a terse gerund title with an ellipsis: `Loading services...`
(add-subscription-loading) and `Creating your card...` (share-snapshot-loading).
The ellipsis + "-ing..." pattern reads generic and is the one place loaders drift
from the calm sentence. Microcopy rule (Step 4) should settle the loading pattern.

### D11. Contractions are used inconsistently

Contracted in places: `You're paying`, `Can't find it?`, `Couldn't cancel?`,
`Let's try the card again`. Spelled out elsewhere: `We could not`, `cannot`,
`did not`, `It is`, `That is`. The clearest clash: `You're paying for 14
subscriptions` (home) vs `You are subscribed to 14 things` (guided-reveal), the
same statement, one contracted and one not, with a different noun on top of it.
Voice needs one rule on contractions.

### D12. Celebratory / hype tone (candidates for the Forbidden list)

`Nice.` opener and `A small win` (cancel-win); `Feeling good about it?`
(cancel-win share); `It felt great.` (welcome testimonial, quoted, so lower
priority). Design principle 5 says the cancel moment is the one place a small win
is allowed, so this is a deliberate-versus-drift call for Step 3, not an
automatic delete.

### User content, never rewritten

Values a user types or that stand in for their input: the add-subscription form
values (`net`, `Netflix`, `$17.99`, `Aug 3, 2026`, `Cerebro Cloud`), the
unrecognized raw descriptor `SQ *BLUEBOTTLE 8890` (subscription-detail-unrecognized), the
sample account `Emma Carter` / `emma@example.com` (settings), and the three quoted
testimonials on welcome. Merchant names in the canonical dataset (Netflix, Spotify
Premium, and so on) are product fixtures, not authored voice copy, and also stay.

### Allowed placeholders (deferred assets, not copy)

`[logo]`, `[merchant logo]`, `[chart]`, `[preview image]`. These stand for a
Design-phase asset, not for missing text, and are out of scope for voice.
