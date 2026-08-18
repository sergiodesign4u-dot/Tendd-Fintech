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
| history-trends-locked | an empty frame and five category words | **a real readout and two real months**, 2026-08-18 | The founder, on the coloured screen: "оно как то виглядає типа пусто и не понятно что показіваем и зачем". Free now gets ONE comparison of its own - this month against last - and the frame draws those two months. The category labels went with the change: two of the person's own months carrying their own total is more theirs than five category words. The lock keeps everything it listed; one line of it gained "and so are these two months" |
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
App and The New York Times, the two `home-savefocus` flags as not opened. Their prices
are the fixture prices, so $192.90 minus $47.98 is $144.92 and a reader can check it
against the rows in front of them.

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
| welcome | price | That is $5.75 a month, and it saves about $27 a year versus paying monthly. | body |
| welcome | price | Best value | status |
| welcome | price | $7.99 a month | heading |
| welcome | price | Month to month. Cancel any time, no lock-in. | body |
| welcome | price | Lifetime | heading |
| welcome | price | one payment | body |
| welcome | price | Tendd Pro stays open, for people who would rather never think about a renewal again. | body |
| welcome | price | Not on sale yet. We are still working out the price. | body |
| welcome | plan-card | Everything in Tendd Pro | field-label |
| welcome | feature-list-compact | History and trends / Advanced alerts / Full cancel guides / Export | body |
| welcome | primary-action | Start Tendd Pro - $69 a year | button |
| welcome | primary-action | Start Tendd Pro - $7.99 a month | button |
| welcome | pricing | The whole calm view is free. Tendd Pro, $7.99 a month or $69 a year, adds history, trends, and advanced alerts. | body |
| welcome | pricing | No cap on subscriptions and no cap on banks in Free. Cancelling is free, always. | body |
| welcome | faq | Questions people ask first | heading |
| welcome | faq | Do I have to connect my bank? | heading |
| welcome | faq | No. You can add your subscriptions yourself from 400+ services and get the same calm view. Connecting a bank is one of two ways in, not the price of entry. | body |
| welcome | faq | Is connecting my bank safe? | heading |
| welcome | faq | You sign in on your bank's own site, through Plaid, so Tendd never sees your password. The connection is read-only. Tendd cannot move your money, and you can disconnect at any time. | body |
| welcome | faq | What does Tendd cost? | heading |
| welcome | faq | The calm view is free, with no cap on how many subscriptions or banks you add. Tendd Pro is $7.99 a month or $69 a year, and it adds history, trends, and advanced alerts. | body |
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

The bar at the foot arrived on 2026-08-16, on the founder's decision, and it added one string
rather than two: its second line is the D7 trust line word for word, the sentence this product
repeats on purpose, and reusing it is not a second edition of it. The year in the first line is
the only literal the public page carries that nothing else owns.

### path-choice

| Screen | Zone | Line | Type |
|--------|------|------|------|
| path-choice | appbar | ‹ Back | link |
| path-choice | appbar | Step 1 of 3 | status |
| path-choice | title | How do you want to start? | heading |
| path-choice | title | Either way you land on the same calm view, and you can add the other one later. | body |
| path-choice | path-option | Connect your bank | heading |
| path-choice | path-option | Read-only, through Plaid, and about a minute. Tendd cannot move your money. | body |
| path-choice | path-option | Choose this path | button |
| path-choice | path-option | Add them yourself | heading |
| path-choice | path-option | Start with one and add more later. No bank is involved, and nothing leaves your control. | body |
| path-choice | path-option | Choose this path | button |
| path-choice | later | Do this later | link |
| path-choice | legal | By starting you agree to our Terms and Privacy Policy. Tendd asks for read-only access and never for permission to move money. | body |

---

## Cluster B: Connect Bank, Add Subscription, Guided Reveal, Sign In

### connect-bank (+ loading, error, empty, cancelled)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| connect-bank | appbar | ‹ Back | link |
| connect-bank | appbar | Step 2 of 3 | status |
| connect-bank | title | Connect your bank | heading |
| connect-bank | title | Next you'll pick your bank and sign in on your bank's own site. Tendd never sees your password, and you choose which accounts to share. | body |
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
| guided-reveal | reveal-step | Five categories, and the real names behind the charges. | body |
| guided-reveal | list | Streaming (4) / Software (4) / Music (2) / Fitness (2) / News (2), each with its merchant names and no amounts | body |
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

| Screen | Zone | Line | Type |
|--------|------|------|------|
| sign-in | appbar | ‹ Back | link |
| sign-in | title | Sign in | heading |
| sign-in | title | Type the email you used, and we'll send you a link. There is no password to remember, and nothing to reset. | body |
| sign-in | account | Email | field-label |
| sign-in | account | The address your list is kept under. | hint |
| sign-in | facts | What arrives / A link you tap. There is no code to copy out | field-label |
| sign-in | facts | How long it works / Once, and then it expires. You can send another at any time | field-label |
| sign-in | primary-action | Send a sign-in link | button |
| sign-in | later | No account yet? Start here | link |
| sign-in | trust-line | Tendd holds an email and a currency, and nothing else. | body |
| sign-in | trust-line | What we read | link |
| sign-in-sent | state-message | Check your email | heading |
| sign-in-sent | state-message | A link is on its way to emma@example.com. Tap it and you are back in your list. | state-message |
| sign-in-sent | facts | If it has not arrived / Give it a minute, and look in your spam folder | field-label |
| sign-in-sent | facts | If the address is wrong / Go back and type it again. Nothing was sent anywhere else | field-label |
| sign-in-sent | secondary-action | Send another link | button |
| sign-in-sent | later | Use a different email | link |
| sign-in-expired | state-message | That link has expired | heading |
| sign-in-expired | state-message | A sign-in link works once and then stops, which is what keeps an old email from being a way in. Nothing is wrong with your account and nothing was lost. | state-message |
| sign-in-expired | primary-action | Send a new link | button |
| sign-in-expired | later | Use a different email | link |

**Deliberately absent, and it is a line that must never be written here:** "that email
is not registered", or any wording that tells the reader whether an address has an
account. Saying it to one person says it to anybody who asks. The screen behaves the
same either way, and the mail that arrives is the one that fits.

## Cluster C: Home and Subscription Detail

### home (+ empty, error, loading, savefocus)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| home | header | Hi, Emma | body |
| home | summary-strip | You're paying for 14 subscriptions | body |
| home | summary-strip | a month, for what you have signed up for | body |
| home | alert-banner | Netflix went up by $2.50, now $17.99 a month. | body |
| home | alert-banner | See what changed → | link |
| home | list | Streaming (4) / Software (4) / Music (2) / Fitness (2) / News (2) | heading |
| home | list-group | $54.96 a month / $53.98 a month / $22.98 a month / $24.98 a month / $36.00 a month | body |
| home | list-row | (the canonical list, one GC4 row each) | body |
| home | add-action | Add a subscription | button |
| home | history-link | See your trends | button |
| home | trust-line | From Chase, 11 subscriptions, and 3 you added yourself. | body |
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
| home-savefocus | summary-strip | a month. You could save up to $29.99 a month by cutting 2 you might not be using. | body |
| home-savefocus | trust-line | (the GC6 lines as on home) | body |
| home-savefocus | cancel-candidates | Two you have not opened in a while. No pressure, just a nudge. | body |
| home-savefocus | cancel-candidates | trial ends in 17 days · not opened in 3 weeks | body |
| home-savefocus | cancel-candidates | next in 10 days · not opened in 6 weeks | body |
| home-savefocus | cancel-candidates | Cancel | button |

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
| alerts | alert-row | We noticed something about your Adobe Creative Cloud charge | body |
| alerts | alert-row | Unusual charge · Adobe Creative Cloud · Jul 15 · Tendd Pro explains what we saw | body |
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
| cancel-guide | pro-callout | The steps above are free and always will be. Tendd Pro adds screenshots for each one and a direct link that skips the retention screens. | body |
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
| cancel-guide-blocked | next-move | Prefer a guided walk-through with a direct link that skips the retention screens? | body |
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
| history-trends | export | Your history as a spreadsheet, for reading it somewhere else. Part of Tendd Pro. A plain copy of everything we hold is free and lives in Data and privacy. | body |
| history-trends-locked | header | Free | status |
| history-trends-locked | lock | Trends are part of Tendd Pro | heading |
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

### upgrade (+ processing, payment-failed, current-plan)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| upgrade | header | Close | link |
| upgrade | header | Tendd Pro | heading |
| upgrade | header | Free | status |
| upgrade | header | Pay less per month than most of the subscriptions you will cancel. | body |
| upgrade | context | You came here from Your trends. History and trends are part of Tendd Pro. | body |
| upgrade | plan-card | Everything in Tendd Pro | field-label |
| upgrade | feature-list-compact | History and trends | body |
| upgrade | feature-list-compact | Advanced alerts | body |
| upgrade | feature-list-compact | Full cancel guides | body |
| upgrade | feature-list-compact | Export | body |
| upgrade | price | $69 a year | heading |
| upgrade | price | That is $5.75 a month, and it saves about $27 a year versus paying monthly. | body |
| upgrade | price | Best value | status |
| upgrade | price | $7.99 a month | heading |
| upgrade | price | Month to month. Cancel any time, no lock-in. | body |
| upgrade | price | Lifetime | heading |
| upgrade | price | one payment | body |
| upgrade | price | Tendd Pro stays open, for people who would rather never think about a renewal again. | body |
| upgrade | price | Not on sale yet. We are still working out the price. | body |
| upgrade | primary-action | Start Tendd Pro - $69 a year | button |
| upgrade | primary-action | Start Tendd Pro - $7.99 a month | button |
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
| upgrade-current-plan | consequence | Cancelling keeps everything you can see without Pro. Your subscriptions, the monthly total and the basic alerts are Free and uncapped, and they stay. History, trends and the advanced alerts close at the end of the period you have already paid for, on 1 May 2027, and you can start Pro again any time. | body |
| upgrade-current-plan | feature-list | History and trends (3, 6 and 12 month views) | body |
| upgrade-current-plan | feature-list | Advanced alerts (Trial ending, unusual, duplicate) | body |
| upgrade-current-plan | feature-list | Full cancel guides (Step by step, with the direct link) | body |
| upgrade-current-plan | feature-list | Export (Your history as a spreadsheet) | body |
| upgrade-current-plan | primary-action | Cancel Tendd Pro | link |
| upgrade-current-plan | later | Back to your settings | link |

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
| connections | connection-row | Connected / Private / Reconnect needed | status |
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
| data-privacy | export | Download everything Tendd holds for you. This is your right and it is free. Exporting your spend history as a spreadsheet is a separate Tendd Pro feature, on Your trends. | body |
| data-privacy | export | Download my data | button |
| data-privacy | delete | Deleting removes your subscriptions, your sources and your account. It cannot be undone. | body |
| data-privacy | delete | Delete everything | button |
| data-privacy | policy | The full privacy policy is at tendd.com/privacy. | body |
| data-privacy-delete-confirm | state-message | Delete everything Tendd holds for you? | heading |
| data-privacy-delete-confirm | state-message | This deletes your 14 subscriptions, both of your sources, and your account. It cannot be undone, and we keep no copy. | state-message |
| data-privacy-delete-confirm | consequence | Your subscriptions / deleted, including the 3 you typed | field-label |
| data-privacy-delete-confirm | consequence | Your bank connection / disconnected at Chase, and the read access ends | field-label |
| data-privacy-delete-confirm | consequence | Your account / closed, and you are signed out | field-label |
| data-privacy-delete-confirm | export | Want a copy first? Download my data is free and takes a moment. | body |
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
| settings | plan-card | Unlimited subscriptions and unlimited bank connections. History, trends and advanced alerts are part of Tendd Pro. | body |
| settings | plan-card | Manage plan | button |
| settings | notifications | What Tendd tells you about | heading |
| settings | notifications | All in plain language, never alarming. | body |
| settings | notifications | A price goes up (Like "Netflix went up by $2.50".) | field-label |
| settings | notifications | A payment does not go through (Like "A payment to Amazon Prime did not go through".) | field-label |
| settings | notifications | A free trial is ending soon (Part of Tendd Pro.) | field-label |
| settings | notifications | Weekly email digest (A calm Sunday summary of what is coming up.) | field-label |
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
