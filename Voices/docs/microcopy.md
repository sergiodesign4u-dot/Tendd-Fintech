# Microcopy inventory (Tendd)

Phase: Voices, Step 1. This is the full transcript of the interface text that
already lives in the wireframes, plus the places where screens say the same
thing in different words. Nothing here is rewritten yet. By the end of this
phase this file becomes the source of truth: every product line on every screen
is in this table, with a "was" and a "became" column, and no line ships that is
not accounted for here.

Sources: all 41 pages in `wireframes/*.html` (read July 2026). The binding voice
rules will live in `Voices/docs/voice.md` (built in Steps 2 to 4).

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
| welcome | hero | No bank connection needed to start. Read-only, we can never move your money. | body |
| welcome | hero-preview | Example, not your data | body |
| welcome | hero-preview | You're paying for 14 subscriptions | body |
| welcome | hero-preview | a month, for what you have signed up for | body |
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
| welcome | how-it-works | Securely connect your bank, or add your subscriptions by hand from 400+ presets. Your choice, no pressure to link an account. | body |
| welcome | how-it-works | See it all, calmly | heading |
| welcome | how-it-works | Tendd finds your recurring charges and shows them in one clear list, with your real monthly total as the biggest thing on screen. | body |
| welcome | how-it-works | Cancel and save | heading |
| welcome | how-it-works | Spot what you no longer use and cancel it with a step-by-step guide. Feel the small win when the number goes down. | body |
| welcome | trust | Trusted with your money | heading |
| welcome | trust | Trust is earned, not claimed. Here is exactly what Tendd can and cannot do. | body |
| welcome | trust | Read-only, always | body |
| welcome | trust | Tendd can see your recurring charges but can never move, spend, or touch your money. | body |
| welcome | trust | Bank-level connection | body |
| welcome | trust | We connect through Plaid, the same secure service used by many major finance apps. We never see your bank password. | body |
| welcome | trust | You are in control | body |
| welcome | trust | Disconnect any account or delete all of your data at any time, in one tap. It is gone when you say so. | body |
| welcome | trust | We never sell your data | body |
| welcome | trust | Your financial life is yours. Tendd does not sell or share it, full stop. | body |
| welcome | trust | Read what we access | link |
| welcome | social-proof | People feel the difference | heading |
| welcome | social-proof | Most people find at least one subscription they had forgotten about in their first session. | body |
| welcome | social-proof | I finally know what is leaving my account every month, and I stopped feeling anxious about it. | body (USER) |
| welcome | social-proof | Emma, 29 | body |
| welcome | social-proof | I added everything by hand without connecting my bank. That mattered to me, and it still took five minutes. | body (USER) |
| welcome | social-proof | Ravi, 34 | body |
| welcome | social-proof | Found three subscriptions I forgot about and cancelled them in an afternoon. It felt great. | body (USER) |
| welcome | social-proof | Claudia, 41 | body |
| welcome | final-cta | See what you're paying for. Calmly. | heading |
| welcome | final-cta | Start free. No bank connection needed, and nothing to cancel later if it is not for you. | body |
| welcome | final-cta | Get started free | button |
| welcome | final-cta | Already using Tendd? | body |
| welcome | final-cta | Sign in | link |
| welcome | footer | A calm way to see and control your recurring payments. Built for people who are not into finance. | footer |
| welcome | footer | Product / Company / Legal (How it works, Trust and security, Pricing, About, Contact, Careers, Privacy, Terms, Data and privacy) | footer |

### path-choice

| Screen | Zone | Line | Type |
|--------|------|------|------|
| path-choice | appbar | ‹ Back | link |
| path-choice | appbar | Step 1 of 3 | status |
| path-choice | title | How do you want to start? | heading |
| path-choice | path-option | Connect your bank | heading |
| path-choice | path-option | Fast and automatic. Read-only, we can never move your money. | body |
| path-choice | path-option | Choose this path → | button |
| path-choice | path-option | Add them yourself | heading |
| path-choice | path-option | Private. Pick from 400+ services, nothing leaves your control. | body |
| path-choice | path-option | Choose this path → | button |
| path-choice | reassurance | Either way, you land on the same calm view. | body |
| path-choice | reassurance | What does each option access? | link |

---

## Cluster B: Connect Bank, Add Subscription, Guided Reveal

### connect-bank (+ empty, error, loading)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| connect-bank | header | Step 2 of 3 | status |
| connect-bank | title | Connect your bank | heading |
| connect-bank | trust-note | Here is exactly what we do | body |
| connect-bank | trust-note | We read your recurring charges, read-only. We can never move your money. Powered by Plaid. | body |
| connect-bank | primary-action | Choose your bank | button |
| connect-bank | primary-action | Add them yourself instead | button |
| connect-bank | region-note | Available for US banks today. More regions soon. | body |
| connect-bank-empty | state-message | Connected, but nothing recurring yet | heading |
| connect-bank-empty | state-message | We linked your bank but did not find recurring charges yet. Some show up only on the next billing cycle. You can add the ones you know about now. | state-message |
| connect-bank-empty | primary-action | Add them yourself | button |
| connect-bank-empty | primary-action | Check again | button |
| connect-bank-error | state-message | We could not connect to your bank | state-message |
| connect-bank-error | state-message | This is usually temporary. You can try again, or add your subscriptions yourself and connect later. | state-message |
| connect-bank-error | primary-action | Try again | button |
| connect-bank-error | primary-action | Add them yourself instead | button |
| connect-bank-loading | state-message | Syncing your bank | heading |
| connect-bank-loading | state-message | This takes a few seconds. We are reading your recurring charges, read-only. | state-message |

### add-subscription (+ empty, error, loading)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| add-subscription | title | Add a subscription | heading |
| add-subscription | title | Pick from 400+ services, or add your own. Nothing leaves your control. | body |
| add-subscription | field | Find a service | field-label |
| add-subscription | field | Search 400+ services | hint |
| add-subscription | list | Chosen / Use | status |
| add-subscription | list | Typically $17.99 / month | body |
| add-subscription | custom-fallback | Can't find it? | body |
| add-subscription | custom-fallback | Add it manually | link |
| add-subscription | custom-fallback | and fill the details yourself. | body |
| add-subscription | field | Name / Amount / Billing frequency / Next payment date / Category | field-label |
| add-subscription | field | Monthly / Every 4 weeks / Quarterly / Yearly / Custom | body |
| add-subscription | field | Streaming / Music / Fitness / Software / News / Other | body |
| add-subscription | primary-action | Add subscription | button |
| add-subscription | primary-action | Add another | button |
| add-subscription | progress | Saved as you go | body |
| add-subscription | progress | 3 added so far. Your list is saved, so you can stop and come back any time. | body |
| add-subscription | primary-action | See my list | button |
| add-subscription | field | net / Netflix / $17.99 / Aug 3, 2026 | field-label (USER) |
| add-subscription-empty | field | Cerebro Cloud | field-label (USER) |
| add-subscription-empty | state-message | No match for "Cerebro Cloud" | state-message |
| add-subscription-empty | state-message | Not every service is in our list yet. You can add it by hand below, and it will sit alongside the rest. | state-message |
| add-subscription-empty | field | For example, Aug 3, 2026 | hint |
| add-subscription-empty | primary-action | Add it manually | button |
| add-subscription-empty | primary-action | Search again | button |
| add-subscription-empty | primary-action | See my list | button |
| add-subscription-error | state-message | We could not load the service list | state-message |
| add-subscription-error | state-message | You can still add subscriptions by hand below, and the search will come back on its own. | state-message |
| add-subscription-error | primary-action | Try the list again | button |
| add-subscription-error | field | For example, Spotify Premium | hint |
| add-subscription-error | primary-action | Add subscription | button |
| add-subscription-error | primary-action | Add another | button |
| add-subscription-error | primary-action | See my list | button |
| add-subscription-loading | state-message | Loading services... | state-message |

### guided-reveal (+ empty)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| guided-reveal | header | Step 3 of 3 | status |
| guided-reveal | reveal-step | Step 1 of 3 - count first | status |
| guided-reveal | reveal-step | You are subscribed to 14 things. | body |
| guided-reveal | reveal-step | Step 2 of 3 - the 14, grouped | status |
| guided-reveal | list | Streaming (4 subscriptions), Software (4), Music, Fitness, News (6) | body |
| guided-reveal | reveal-step | Step 3 of 3 - total, paired with an action | status |
| guided-reveal | reveal-step | That is $192.90 a month. | body |
| guided-reveal | reveal-step | Here are 2 you might not be using: Peloton App and The New York Times. | body |
| guided-reveal | primary-action | Review these 2 | button |
| guided-reveal | primary-action | See my full list | button |
| guided-reveal | tone-line | This is what you have signed up for, not what you wasted. | body |
| guided-reveal-empty | state-message | Nothing to reveal yet | heading |
| guided-reveal-empty | state-message | Add at least one subscription and your list appears here. Even a partial list is saved, so you can come back any time. | state-message |
| guided-reveal-empty | primary-action | Add a subscription | button |

---

## Cluster C: Home and Subscription Detail

### home (+ empty, error, loading, savefocus)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| home | header | Hi, Emma | body |
| home | summary-strip | You're paying for 14 subscriptions | body |
| home | summary-strip | a month, for what you have signed up for | body |
| home | summary-strip | Read-only. Tendd cannot move your money. | body |
| home | alert-banner | Netflix went up by $2.50, now $17.99 a month. | body |
| home | alert-banner | See what changed → | link |
| home | list | Streaming (4) / Software (4) / Music (2) / Fitness (2) / News (2) | heading |
| home | list-row | (the canonical list, one GC4 row each) | body |
| home | cancel-candidates | 2 you might not be using | body |
| home | cancel-candidates | Peloton App, The New York Times | body |
| home | cancel-candidates | Review → | link |
| home | add-action | + Add subscription | button |
| home | history-link | See your trends | button |
| home | history-link | Pro | status |
| home | detail-pane | Next payment / Category / Source / Status | field-label |
| home | detail-pane | From Chase ...1234, read-only | body |
| home | detail-pane | The price went up by $2.50 on Jul 28, now $17.99 a month. | body |
| home | detail-pane | Cancel this subscription | button |
| home | detail-pane | Open full detail | button |
| home | tab-bar | Home / Alerts / Save / You | nav |
| home-empty | summary-strip | Nothing to add up yet | body |
| home-empty | summary-strip | Connect your bank or add a subscription, and your monthly total appears here as the biggest thing on screen. | body |
| home-empty | state-message | Nothing here yet | heading |
| home-empty | state-message | See everything you pay for in one calm place. Pick the way that feels right; you can change it later. | body |
| home-empty | state-message | Connect your bank | button |
| home-empty | state-message | Add a subscription | button |
| home-error | state-message | We could not refresh just now. Showing your last update from today, 9:14 AM. | state-message |
| home-error | state-message | Try again | button |
| home-error | summary-strip | a month, as of your last update | body |
| home-loading | summary-strip | Getting your subscriptions. This usually takes a moment. | body |
| home-savefocus | summary-strip | a month. You could save up to $29.99 a month by cutting 2 you might not use. | body |
| home-savefocus | cancel-candidates | Two you have not opened in a while. No pressure, just a nudge. | body |
| home-savefocus | cancel-candidates | Trial ends: Aug 18 · not opened in 3 weeks | body |
| home-savefocus | cancel-candidates | Next: Aug 11 · not opened in 6 weeks | body |
| home-savefocus | cancel-candidates | Cancel | button |

### subscription-detail (+ empty, error, loading)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| subscription-detail | header | ‹ Home | link |
| subscription-detail | master-pane | (the canonical list, kept beside the detail on desktop) | body |
| subscription-detail | header | Netflix | heading |
| subscription-detail | header | $17.99 / month | body |
| subscription-detail | next-payment | Next payment | field-label |
| subscription-detail | next-payment | $17.99 on Aug 3 | body |
| subscription-detail | category-source | Category / Source / Status | field-label |
| subscription-detail | category-source | From Chase ...1234, read-only | body |
| subscription-detail | alert-banner | The price went up by $2.50 on Jul 28, now $17.99 a month. | body |
| subscription-detail | history-link | See price and payment history | button |
| subscription-detail | history-link | Pro | status |
| subscription-detail | cancel-action | Cancel this subscription | button |
| subscription-detail-empty | header | SQ *BLUEBOTTLE 8890 | heading (USER) |
| subscription-detail-empty | header | $14.00, seen monthly | body |
| subscription-detail-empty | state-message | We could not identify this | body |
| subscription-detail-empty | state-message | It repeats like a subscription, but we could not match it to a service. Name it and pick a category so it reads clearly next time. | body |
| subscription-detail-empty | state-message | Name this charge | button |
| subscription-detail-empty | state-message | Not a subscription | button |
| subscription-detail-error | state-message | We could not load this subscription | heading |
| subscription-detail-error | state-message | This is usually temporary. Try again, or go back to your list. | body |
| subscription-detail-error | state-message | Try again | button |
| subscription-detail-error | state-message | Back to Home | button |

---

## Cluster D: Alerts, Cancel Guide, Cancel Win, Share Snapshot

### alerts (+ empty, error, loading)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| alerts | title | Alerts | heading |
| alerts | title | The few things worth knowing about, newest first. A quiet dot marks what is new since your last visit. | body |
| alerts | alert-row | Netflix went up by $2.50, now $17.99 a month | body |
| alerts | alert-row | Price change · Netflix · Your next payment is Aug 3 | body |
| alerts | alert-row | See what changed → | link |
| alerts | alert-row | A payment to Amazon Prime did not go through | body |
| alerts | alert-row | Payment failed · Amazon Prime · It usually tries again in a day or two | body |
| alerts | alert-row | What to do → | link |
| alerts | alert-row | Your Peloton App trial ends soon | body |
| alerts | alert-row | Trial ending · Peloton App · Tendd Pro explains this in plain language | body |
| alerts | alert-row | Unlock with Tendd Pro → | link |
| alerts | alert-row | We noticed something about your Adobe charge | body |
| alerts | alert-row | Unusual charge · Adobe Creative Cloud · Tendd Pro explains this in plain language | body |
| alerts | alert-row | We could not take your Spotify Premium payment on Jun 28 | body |
| alerts | alert-row | Payment failed · Spotify Premium · This one has since gone through | body |
| alerts | alert-row | See Spotify Premium → | link |
| alerts | alert-row | New / Pro | status |
| alerts-empty | state-message | All clear | heading |
| alerts-empty | state-message | Nothing needs your attention right now. If a price changes or a payment does not go through, you will see it here first, in plain language. | state-message |
| alerts-empty | primary-action | Back to your subscriptions | button |
| alerts-error | state-message | We could not load your alerts | heading |
| alerts-error | state-message | Nothing is wrong with your money, we just could not reach your alerts right now. Give it another try, or head back to your subscriptions. | state-message |
| alerts-error | primary-action | Try again | button |
| alerts-error | secondary-action | Back to your subscriptions | button |
| alerts-loading | state-message | Checking for anything worth knowing about. This usually takes a moment. | state-message |

### cancel-guide (+ empty, error)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| cancel-guide | header | Back to Netflix | link |
| cancel-guide | detail-head | Cancel Netflix | heading |
| cancel-guide | detail-head | $17.99 / month · you can always resubscribe later | body |
| cancel-guide | step | Here is how to cancel Netflix | heading |
| cancel-guide | step | Go to your Netflix account page. / Select Cancel Membership. / Confirm the cancellation. | body |
| cancel-guide | primary-action | Open netflix.com/account | button |
| cancel-guide | pro-callout | Step-by-step with screenshots for Netflix, plus a one-tap direct cancel link so you skip the retention screens. | body |
| cancel-guide | pro-callout | See Tendd Pro | button |
| cancel-guide | confirm | Managed to cancel? Mark it here and we will show what you saved. | body |
| cancel-guide | confirm | I cancelled it | button |
| cancel-guide | help-path | Ran into a wall or a "please stay" screen? | body |
| cancel-guide | help-path | Couldn't cancel? | button |
| cancel-guide-empty | state-message | We do not have step-by-step for this one yet | heading |
| cancel-guide-empty | state-message | Here is the general way most subscriptions cancel. It works for The New York Times too. | state-message |
| cancel-guide-empty | step | Open the service's website and sign in. / Go to Account or Subscription settings. / Look for Cancel or Manage plan. / Confirm, and watch for a confirmation email. | body |
| cancel-guide-empty | request-guide | Want us to build a tailored guide for The New York Times? Tell us and we will add it. | body |
| cancel-guide-empty | request-guide | Ask us to add this guide | button |
| cancel-guide-empty | confirm | Managed to cancel with the general steps? Mark it here. | body |
| cancel-guide-empty | confirm | I cancelled it | button |
| cancel-guide-error | state-message | Cancelling can be made deliberately hard, and it is not your fault. Here is what else to try. | state-message |
| cancel-guide-error | step | Skip the "special offers" screen and keep choosing Cancel, not Pause. / Try cancelling from a web browser instead of the app. / If billed through Apple or Google, cancel in your device subscriptions. / Still stuck? Keep this open and come back, nothing is lost. | body |
| cancel-guide-error | primary-action | I cancelled it | button |
| cancel-guide-error | secondary-action | Remind me later | button |
| cancel-guide-error | next-move | Prefer a guided walk-through with a direct link? | body |
| cancel-guide-error | next-move | Full step-by-step guide | button |

### cancel-win

| Screen | Zone | Line | Type |
|--------|------|------|------|
| cancel-win | header | A small win | body |
| cancel-win | win-summary | Nice. You just cancelled Netflix and freed up $17.99 a month. That is $215.88 a year back in your pocket. | body |
| cancel-win | win-summary | On your word. You can always resubscribe if you miss it. | body |
| cancel-win | running-total | With Tendd so far | heading |
| cancel-win | running-total | You have freed up $32.98 a month, about $395 a year, across the subscriptions you have cut. | body |
| cancel-win | share | Feeling good about it? You can share a simple card. No bank details, ever. | body |
| cancel-win | share | Share this win | button |
| cancel-win | continue | Done, back to my list | button |

### share-snapshot (+ error, loading)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| share-snapshot | header | Back | link |
| share-snapshot | share-preview | Card preview | heading |
| share-snapshot | share-preview | On Tendd, I am keeping an eye on 13 subscriptions | body |
| share-snapshot | share-preview | a month, all in one calm place | body |
| share-snapshot | share-preview | Just cancelled Netflix and freed up $17.99 a month. | body |
| share-snapshot | primary-action | Share | button |
| share-snapshot | privacy-note | What is on this card | heading |
| share-snapshot | privacy-note | No account numbers, no bank details, and no list of your exact subscriptions. Only what you see above. | body |
| share-snapshot | continue | Done, back to my list | button |
| share-snapshot-error | state-message | We could not create the card just now | heading |
| share-snapshot-error | state-message | Nothing is wrong with your account, and your cancel win is still saved. Let's try the card again. | state-message |
| share-snapshot-error | primary-action | Try again | button |
| share-snapshot-error | secondary-action | Done, back to my list | button |
| share-snapshot-loading | state-message | Creating your card... | heading |
| share-snapshot-loading | state-message | Making your card. This usually takes a moment. | state-message |

---

## Cluster E: History and Trends, Upgrade, Connections, Data and Privacy, Settings

### history-trends (+ empty, loading)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| history-trends | header | Your trends | heading |
| history-trends | header | Pro | status |
| history-trends | header | How your recurring spend has moved over time. Nothing to act on here, just the shape of it. | body |
| history-trends | time-range | 3 months / 6 months / 12 months | button |
| history-trends | chart-area | Text summary: your monthly recurring total went from $172.90 in May to $192.90 in July, up about $20 across three months. | state-message |
| history-trends | trend-list | Up $2.50 since May, now $17.99 / month | body |
| history-trends | trend-list | New since June, $20.00 / month | body |
| history-trends | trend-list | No change since March, $4.25 / month | body |
| history-trends | trend-list | Higher / New / Steady | status |
| history-trends | trend-list | By category | body |
| history-trends | trend-list | Streaming is up $6 since March. Everything else held steady. | body |
| history-trends | export | Export as CSV | button |
| history-trends | export | Downloads your history as a spreadsheet. Part of Tendd Pro. | body |
| history-trends-empty | state-message | Still gathering your history | heading |
| history-trends-empty | state-message | Trends need a few months to be worth looking at. We have less than three months so far. Check back in a few weeks and the shape of your spending will be here. | state-message |
| history-trends-empty | state-message | Back to Home | button |
| history-trends-loading | chart-area | Adding up your last few months. This usually takes a moment. | state-message |

### upgrade

| Screen | Zone | Line | Type |
|--------|------|------|------|
| upgrade | header | Tendd Pro | heading |
| upgrade | header | Free | status |
| upgrade | header | Pay less per month than most of the subscriptions you will cancel. | body |
| upgrade | context | You came here from Your trends. History and trends are part of Tendd Pro. | body |
| upgrade | feature-list | History and trends (3, 6, and 12 month views) | body |
| upgrade | feature-list | Advanced alerts (Trial ending, unusual, duplicate) | body |
| upgrade | feature-list | Full cancel guides (Step by step, one-tap links) | body |
| upgrade | feature-list | Export (Your history as a spreadsheet) | body |
| upgrade | price | $69 a year | heading |
| upgrade | price | That is $5.75 a month. Our calmest option, and two months cheaper than paying monthly. | body |
| upgrade | price | Best value | status |
| upgrade | price | $7.99 a month | heading |
| upgrade | price | Month to month. Cancel any time, no lock-in. | body |
| upgrade | price | A one-time lifetime option is planned; its price is still being decided. [? D4 lifetime price open] | body |
| upgrade | primary-action | Start Tendd Pro - $69 a year | button |
| upgrade | primary-action | Maybe later | link |
| upgrade | primary-action | Pays for itself with the first subscription you cancel. | body |

### connections (+ empty, error)

| Screen | Zone | Line | Type |
|--------|------|------|------|
| connections | header | Your sources | heading |
| connections | header | Where Tendd gets the list of what you pay for. You are always in control of these. | body |
| connections | header | Read-only. Tendd cannot move your money. | body |
| connections | header | What we read → | link |
| connections | connection-row | Chase ····1234 | body |
| connections | connection-row | Bank connection via Plaid | body |
| connections | connection-row | Connected / Private | status |
| connections | connection-row | Last synced / Tracking from here / Access / Added / Tracking here | field-label |
| connections | connection-row | Read-only, cannot move money | body |
| connections | connection-row | Added by you | body |
| connections | connection-row | Private, entered by hand | body |
| connections | connection-row | Only what you type | body |
| connections | connection-row | Add another by hand | link |
| connections | connection-row | Remove | link |
| connections | add-source | Add a source | body |
| connections | add-source | Connect a bank | heading |
| connections | add-source | Find your subscriptions automatically. Read-only through Plaid. | body |
| connections | add-source | Add manually | heading |
| connections | add-source | Type them in yourself from a list of 400+ services. No bank needed. | body |
| connections | add-source | Choose this → | link |
| connections | add-source | You can connect up to 2 banks on Free. Tendd Pro is unlimited. | body |
| connections | provider-note | US banks connect through Plaid. More regions soon. | body |
| connections-empty | state-message | No sources connected yet | heading |
| connections-empty | state-message | Connect a bank to find your subscriptions automatically, or add them yourself by hand. You can change this later. | state-message |
| connections-empty | state-message | Connect a bank / Add manually | link |
| connections-error | state-message | Chase needs to reconnect. Banks ask for this now and then to keep your connection secure. Your last update is still shown below. | state-message |
| connections-error | state-message | Reconnect Chase | link |
| connections-error | connection-row | Reconnect needed | status |
| connections-error | connection-row | Reconnect | link |

### data-privacy

| Screen | Zone | Line | Type |
|--------|------|------|------|
| data-privacy | header | Data and privacy | heading |
| data-privacy | header | Exactly what Tendd reads, and how to remove it whenever you want. | body |
| data-privacy | privacy-section | The plain answer | body |
| data-privacy | privacy-section | Worried what an app does with your bank data? Here is exactly what we do. | body |
| data-privacy | privacy-section | We read your recurring charges, read-only. | body |
| data-privacy | privacy-section | We can never move your money. | body |
| data-privacy | privacy-section | We do not sell your data. | body |
| data-privacy | privacy-section | If you delete | body |
| data-privacy | privacy-section | This deletes your subscriptions, sources, and account. It cannot be undone. | body |
| data-privacy | primary-action | Delete everything | button |
| data-privacy | primary-action | Keep my data | link |
| data-privacy | privacy-section | Bank connection (Read-only transaction history via Plaid) / Added by you (Only what you type) | field-label |
| data-privacy | privacy-section | Your sources | link |
| data-privacy | permissions | Refresh my bank data automatically | field-label |
| data-privacy | permissions | Read-only. Keeps your list current without you asking. | hint |
| data-privacy | permissions | Use my activity to improve Tendd | field-label |
| data-privacy | permissions | Off by default. We never sell your data either way. | hint |
| data-privacy | export | Download everything Tendd holds for you. This is your right and is free. (Exporting your spend history as a CSV is a separate Tendd Pro feature, on History and Trends.) | body |
| data-privacy | export | Download my data | link |

### settings

| Screen | Zone | Line | Type |
|--------|------|------|------|
| settings | account | You | heading |
| settings | account | Name / Email | field-label |
| settings | account | Emma Carter / emma@example.com | body (USER) |
| settings | plan-card | Tendd Free | body |
| settings | plan-card | Unlimited subscriptions. Up to 2 bank connections. History, trends and advanced alerts are Pro. | body |
| settings | plan-card | Free / Pro | status |
| settings | plan-card | Manage plan | link |
| settings | notifications | Choose what Tendd tells you about. All in plain language, never alarming. | body |
| settings | notifications | A price goes up (Like "Netflix went up by $2.50".) | field-label |
| settings | notifications | A payment does not go through (Like "A payment to Peloton did not go through".) | field-label |
| settings | notifications | A free trial is ending soon (Advanced alert.) | field-label |
| settings | notifications | Weekly email digest (A calm Sunday summary of what is coming up.) | field-label |
| settings | settings-row | Data and privacy (What we read, and delete everything) | body |
| settings | settings-row | Your sources (Banks and manual entries you track) | body |
| settings | settings-row | Help and support (Guides and how to reach us) | body |
| settings | settings-row | Sign out | body |

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
unrecognized raw descriptor `SQ *BLUEBOTTLE 8890` (subscription-detail-empty), the
sample account `Emma Carter` / `emma@example.com` (settings), and the three quoted
testimonials on welcome. Merchant names in the canonical dataset (Netflix, Spotify
Premium, and so on) are product fixtures, not authored voice copy, and also stay.

### Allowed placeholders (deferred assets, not copy)

`[logo]`, `[merchant logo]`, `[chart]`, `[preview image]`. These stand for a
Design-phase asset, not for missing text, and are out of scope for voice.
