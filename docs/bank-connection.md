# Bank connection: where every figure on the screen comes from

Engineering ground, written 2026-08-10. Like `decisions.md`, this file is never loaded into
a session automatically: read it when you need to know what is behind a number.

The product half of the bank connection is already specified: `ia/docs/nodes/1-3-connect-bank.md`
owns the handoff, `ia/docs/nodes/6-14-connections.md` owns the sources, and
`ia/docs/nodes/6-15-data-privacy.md` owns the promise. This file owns the other half, the one
nothing in the repository stated: which field feeds which place, what the provider gives us,
and what we compute ourselves and are therefore answerable for.

**The strategy, decided 2026-08-10:** the recurring model is ours, Plaid Recurring is the US
adapter. See `decisions.md`, same date.

---

## 1. The boundary

Unchanged from node 1.3, restated here once so this file stands on its own.

Plaid Link owns institution search, credential entry, multi-factor authentication, the bank's
own OAuth screens, error handling inside the flow, and the bank's confirmation email. We never
see a password, and we do not design any of those screens.

We own the screen before the handoff (`wireframes/connect-bank.html`) and the four states
after it. Everything below the handoff line is ours.

## 2. The handshake

1. Our server calls `/link/token/create` with products `transactions` and our webhook URL.
2. The client opens Link with that token. The person picks a bank and signs in there.
3. Link returns a short-lived `public_token` to the client.
4. Our server exchanges it: `/item/public_token/exchange` gives an `access_token` and an
   `item_id`.
5. The `access_token` is encrypted at rest and never reaches the client. It is the key to one
   person's one institution, and there is nothing else in the system worth stealing.

**Who the token belongs to, settled 2026-08-10.** Step 1 does not happen for an anonymous
visitor. Node 1.3 takes an email in the same breath as the bank ask and creates an account
there, unverified, and Link opens with no wait. That is the whole reason the auth model splits
by path: a live Item tied to nothing but a cookie is a bank connection nobody can reclaim when
the cookie is lost, and one we cannot honour the deletion promise on node 6.15 against. The
manual path creates no account, because three lines a person typed need no owner.

**`transactions.days_requested` is set to 730 at creation.** Two reasons, both from screens
that already exist: Recurring wants at least 180 days of history to detect well, and
"Paid so far, $143.88 since Aug 2025" on `wireframes/subscription-detail.html` needs 365 or
more. Raising the window after the Item exists is not free, so it is set generously once.

## 3. The four return states, wired

Node 1.3 has four states after the handoff and not three, because Link has four outcomes.

| State | Page | Trigger |
|---|---|---|
| 1.3.2 Syncing your bank | `connect-bank-loading.html` | `onSuccess`, token exchanged, first pass running |
| 1.3.4 Came back without connecting | `connect-bank-cancelled.html` | `onExit` with no error: the person backed out inside Link |
| 1.3.1 Connection error | `connect-bank-error.html` | `onExit` with an error, or an Item error afterwards |
| 1.3.3 Connected, nothing found | `connect-bank-empty.html` | first recurring pass returns zero outflow streams |

The distinction between 1.3.4 and 1.3.1 is the whole reason the copy can say "nothing is lost"
in one and "something failed" in the other. Collapsing them into one error state, which is
what the category does, would tell a person who simply changed their mind that they broke
something.

## 4. What the wait is actually waiting for

Data is not ready at the moment the token is exchanged. Four webhooks carry the connection
from "linked" to "showable":

- `INITIAL_UPDATE` and `HISTORICAL_UPDATE`: transactions are available, first 30 days then the
  full window.
- `SYNC_UPDATES_AVAILABLE`: there is something new to pull with `/transactions/sync`.
- `RECURRING_TRANSACTIONS_UPDATE`: the recurring streams have changed.

Consequences for the flow as designed:

- **1.3.2 is an honest wait, not a decorative spinner.** There is a real event it is waiting
  for, which is what the state was written to be.
- **Node 1.5 Guided Reveal cannot open before the first recurring pass lands.** The reveal is
  D1, the gradual count then categories then total, and it has nothing to count until then.
- **"About a minute" on `connect-bank.html` describes the Link part.** The wait after it is
  ours to keep honest, and it is not always under a minute on the first pull.

## 5. The field map

Every string in the left column exists on a wireframe page today.

| On the screen | Our field | Source |
|---|---|---|
| "You're paying for 14 subscriptions" (`home.html`) | count of active rows | active outflow streams plus manual rows. 11 from Chase plus 3 typed, exactly as `connections.html` states |
| "$192.90" and "a month, for what you have signed up for" | monthly total | `average_amount` normalized by `frequency`, summed |
| "Streaming (4)", "Software (4)", "Music (2)", "Fitness (2)", "News (2)" | our category | **ours.** Mapped from `personal_finance_category` plus a merchant dictionary. Plaid's taxonomy is not these five, so the mapping table is a product asset, not a passthrough |
| "Next charge, in 6 days, Aug 7" | next charge date | `predicted_next_date`. **A prediction, printed as a fact.** See section 6 |
| "Billing cycle, Monthly" | cycle | `frequency` (weekly, biweekly, semi-monthly, monthly, annually) |
| "Charged to, Chase checking" | account | `account_id` resolved to institution name plus account type |
| "Paid so far, $143.88 since Aug 2025" | lifetime in window | sum of the stream's transactions inside `days_requested` |
| "SPOTIFYAB STOCKHOLM", "AMZN Digital*2H4KL9", "SQ *BLUEBOTTLE 8890" | the raw bank line | `original_description`. Design principle 4 rendered literally: this is the receipt for the row above it |
| "Recent charges" list | the charges | the transactions behind `transaction_ids` |
| "seen monthly", "3 times, monthly since May" (`subscription-detail-unrecognized.html`) | pattern summary | `frequency`, `first_date`, occurrence count |
| "Not identified" | unmatched | `status: EARLY_DETECTION`, or a mature stream with no merchant match |
| "Last checked, today, 9:14 AM" (`subscription-detail.html`, `connections.html` block 4) | freshness | **ours.** The timestamp of our last successful sync run. Plaid reports no such thing |
| "Tracking from here, 11 subscriptions" | per-source count | rows whose `source` is that Item |
| "Peloton App, trial ends in 17 days, Aug 18" | trial end | **typed by the person.** No provider can see a trial that has not charged. See section 6 |

**One rule the table cannot hold: how a yearly subscription enters a monthly number.** The
entity model in `ia/docs/sitemap.md` allows monthly, quarterly, yearly and custom, the canonical
set happens to be all monthly, and "$192.90 a month" is the biggest sentence in the product. A
yearly plan is divided by twelve into the total and is labelled by its real cycle on its own
row, never converted on the row itself. The total answers "what is this costing me a month" and
the row answers "what will actually leave my account and when", and those are two different
questions that a single normalised number would blur.

## 6. What no provider gives, so we compute it

This section is the reason the model is ours. Two of the loudest states in the product have no
field behind them anywhere in any bank API.

**Price change.** `subscription-detail-price-change.html` says "Netflix went up by $2.50 on
Jul 28. Your next charge is $17.99 instead of $15.49", and `home.html` carries the same line
as a banner. Nothing reports that. We compute it: compare `last_amount` against the stream's
prior amounts, with our own threshold and direction rules. Small variable charges must not
trip it, and a genuine increase must not be missed. This feeds the Home banner, the 2.7
price-change state, and node 3.8 Alerts.

**Payment failed.** `subscription-detail-payment-failed.html` says "A payment to Amazon Prime
did not go through on Jul 20. Amazon usually tries again within a few days, and Tendd will
tell you when it does." **No US aggregator reports a failed outgoing card charge.** We infer
it: `predicted_next_date` passes by N days with no matching transaction, or a charge and its
reversal appear as a pair. This is the weakest inference in the product carrying the most
confident copy in the product. It is written down here rather than fixed on the page, because
the wireframes are frozen: it is a real question for UI + Visual, where that state gets colored
anyway, and for Handoff.

**A free trial ending.** `home.html`, `index.html` and `alerts.html` all show "Peloton App,
trial ends in 17 days, Aug 18", and Settings sells it as part of Pro. **A trial that has not
charged produces no transaction**, therefore no stream, therefore no date. This is not a
limitation of Plaid, it is arithmetic: there is nothing to observe. The date is something the
person tells us through the "Next payment date" field node 1.4 already has, and Peloton App is
named in the canonical set as one of the three manual entries so that every screen showing that
row is honest. What the bank side can do instead is the far end of the same event: a brand new
stream whose first full charge has landed is "you are now paying for this", which is detectable
and is arguably the more useful of the two alerts.

**The twelve monthly totals on Trends.** Added 2026-08-19, when the range control on
`history-trends.html` became real and had to have something to switch to. This is the whole
series, and every step in it is a subscription on Home at the price Home prints. **Nothing here
is invented; it is the same fourteen rows read backwards through three dated events.**

| Month | Monthly total | What moved |
|---|---|---|
| Aug 2025 | $143.91 | |
| Sep 2025 | $143.91 | |
| Oct 2025 | $143.91 | |
| Nov 2025 | $166.90 | Adobe Creative Cloud arrives, **+22.99** |
| Dec 2025 | $166.90 | |
| Jan 2026 | $166.90 | |
| Feb 2026 | $166.90 | |
| Mar 2026 | $166.90 | |
| Apr 2026 | $172.90 | Disney+ goes 7.99 to 13.99, **+6.00** |
| May 2026 | $172.90 | |
| Jun 2026 | $192.90 | ChatGPT Plus arrives, **+20.00** |
| Jul 2026 | $192.90 | |

It closes in both directions: 143.91 + 22.99 + 6.00 + 20.00 = **192.90**, the figure on Home.
The three ranges are the last 3, 6 and 12 completed months of it, and the readout sentence over
each one states its two ends. **"Monthly total" here is the COMMITMENT level and not the amount
charged** - what you have signed up for at the end of that month - which is the same definition
`home.html` prints under its own figure, and it is why Netflix's rise, dated Jul 28 and not yet
charged, does not appear in July.

Two things were repaired by writing it down. The screen's "By category" line said **"Streaming
is up $6 since March"** under a view that begins in May, and Netflix's $2.50 was being counted
twice - once as a price change and once inside the Streaming rise. The $6 is Disney+, in April,
and it is now stated in the range that contains it.

**Where the real thing comes from.** `average_amount` by `frequency`, summed per calendar month
over `days_requested`, which is the same arithmetic as the Home total run once per month rather
than once. A stream that started mid-window contributes from its first full month. **Twelve
months needs twelve months of history**, and section 4 already says Recurring wants at least 180
days to detect well: a person who connected a bank in May has a six-month view at best, which is
what node 5.12.1, "still gathering", exists for.

**Display name and category.** "Netflix" rather than `NETFLIX.COM 866-579-7172` comes from our
merchant dictionary, which is the same list behind the 400+ presets on node 1.4
(`add-subscription.html`, "Pick from 400+ services"). One dictionary serves both sources, which
is what lets a bank row and a typed row sit in the same category on the same list.

## 7. Cadence and freshness

Plaid checks institutions between one and four times a day. We do not poll: we sync on
`SYNC_UPDATES_AVAILABLE`, and we stamp "Last checked" from our own successful run, never from
the webhook and never from a scheduled attempt that failed.

The "refresh automatically" toggle on node 6.15 block 4 is the user-facing lever over this. It
is also the cost lever, which is section 11.

## 8. Reconnect and disconnect

**Reconnect.** `ITEM_LOGIN_REQUIRED` and `PENDING_EXPIRATION` put the source into state 6.14.2
(`connections-reconnect.html`) and make "Reconnect" the primary action on that screen. The fix
is Link in update mode, opened with a link token created against the existing `access_token`:
the person re-authenticates and the same Item continues, with no new connection and no lost
history. This is exactly the "banks ask for this now and then to keep your connection secure"
framing the IA locked, and it is true: expiry is maintenance, not failure. The last figures
stay visible and dated while the source is stale, which is why the Chase count is 11 on both
the default and the reconnect state.

**Disconnect.** `/item/remove` at Plaid, plus our own deletion of the raw transaction data. The
subscriptions already found stay on the list and become manual rows, which is what
`connections.html` promises in the same sentence as the button.

## 9. The manual source

D2, and no provider is involved. Our presets catalogue supplies the name, the typical price and
the category; the person supplies the cycle and the next date.

Every row in the model carries a `source`. That single field is what the screens are already
built on:

- a bank row is hidden on removal, because the charge will come back and lying about that would
  be worse than the row ("If the charge appears again, Tendd will show it again")
- a manual row is deleted, because it exists nowhere else, and `connections.html` says so
- the trust line only appears under rows that came from a bank

**When the two sources meet, they merge.** Peloton is typed by hand today. The day the trial
converts, Chase reports a real charge and the detector opens a stream for it, and the default
behaviour of a two-source system is to show fourteen subscriptions as fifteen. A new stream
that matches a manual row on merchant, amount within tolerance and cycle **becomes the same
subscription**: the bank takes over the figures, and what the person contributed survives, the
name they gave it, the category they picked, the date they entered. They are told once, quietly,
on the row.

The count is the product. "You're paying for 14 subscriptions" is the sentence the whole reveal
builds to, and a product that double-counts the moment its two sources agree has broken the
only number it sells. The same rule runs in reverse: a stream that disappears does not silently
delete a row a person typed.

## 10. EU, deferred

D5 defers EU, and the normalized model is the seam that keeps it cheap later. GoCardless Bank
Account Data and TrueLayer return raw transactions with no recurring product, so the EU adapter
has to carry a detection step that the US path gets from Plaid. Writing our own model now means
that adapter plugs into the same rows rather than forcing a second product.

This is the concrete reason the hybrid was chosen over reading Plaid Recurring straight onto
the screen.

## 11. Cost against D-Free

Plaid bills per connected Item per month, and Recurring is a paid add-on on top of Transactions.
D-Free promises no cap on bank connections and no cap on subscriptions. Those two facts pull
against each other, and the resolution is settled: **the lever is cadence, never a cap.** A cap
on connections is a visibility cap in disguise and D-Free rejected it on that ground. Refresh
frequency for a Free account is a business dial that costs a person nothing they can see, as
long as the freshness line stays honest about it.

## 12. Build blockers worth knowing before the build

- **Plaid production access** is a review, not a signup. It needs a company entity and a
  privacy policy that matches what node 6.15 already promises.
- **OAuth institutions.** The large US banks, Chase included, require registered redirect URIs
  and per-institution approval. `home.html` and `connections.html` both name Chase, so this is
  on the critical path, not a detail.
- **Webhook verification.** Webhooks are verified with the JWT scheme
  (`/webhook_verification_key/get`). An unverified webhook endpoint is an open door into the
  data model.
- **Encryption at rest** for `access_token`, with a real key manager. It is the only credential
  in the system.
- **A transactional mail provider**, which the auth model and the alert channel both now depend
  on. Sign-in links and alerts are not marketing mail and must not share a sending reputation
  with any.

## 13. The three datasets a person maintains, not a machine

Three things in this product are content rather than code. None of them appeared anywhere in
the design, and all three cost money every month for as long as the product lives.

| Dataset | What it feeds | How it fails | Visible to the person? |
|---|---|---|---|
| **The merchant dictionary**, with the category mapping | `NETFLIX.COM 866-579-7172` becoming Netflix in Streaming; the display name on every row; the five category headers on Home | quietly. A new or renamed merchant simply does not match, and the row lands as an unrecognized charge | Yes, and gracefully: node 2.7.1 already turns the failure into "name this charge" |
| **The presets catalogue**, 400+ services with typical prices | node 1.4, "Pick from 400+ services", and the manual path that D2 makes an equal door | quietly, as a wrong typical price or a service that cannot be found | Partly: node 1.4.3 "no preset matches" already exists as the fallback |
| **The cancel guides**, per service and per channel | node 4.9, the screen that turns "I should cancel this" into "it is cancelled" | fastest and most visibly. A guide that describes a flow the merchant changed sends a person into a wall | Yes, by design: node 4.9 block 10 shows **when the steps were last checked**, and node 4.9.1 covers the long tail with no guide |

Two of the three share a spine: the merchant dictionary and the presets catalogue are the same
list of services seen from two sides, which is what lets a typed row and a detected row sit in
one category on one screen. Keeping them as one asset with two views is cheaper than keeping
two lists in agreement forever.

**The open question is a number, not a design.** Node 4.9 still carries `[?]` on guide coverage
at launch, and its resolving input is how many guides are authored before release. That is a
budget line, and it belongs to whoever writes the budget. What this section fixes is that the
line now exists to be filled in.
