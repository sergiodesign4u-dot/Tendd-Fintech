# Node 3.8 - Alerts / Activity

Template: `1-1-welcome.md`. Supersedes the 3.8 section of `../pages/alerts.md`.

## Node, type, scope

**Node 3.8 · Alerts / Activity · page · MVP**

## Purpose and jobs

Close J4, never be surprised by a price change or a failed payment. This screen also decides
whether the product is a source of calm or one more thing that buzzes at you.

- **J4 stay ahead of financial surprises** (primary).
- Feeds **J2** and **J3**: an alert is the shortest path to the charge behind it.

**The category has no such screen.** Subo and Orbit configure reminders per subscription and
deliver them outside the app; Rocket Money sells the promise on its landing and exposes
nothing behind it. On the craft side, the good examples are enterprise audit logs, whose
register is the opposite of ours. This node is invented, not adapted, and the bank says why.

## URL and breadcrumbs

`/alerts`. No breadcrumbs; it is a tab. In through GC2, or through the **email** that announced
the alert. Out to node 2.7, node 4.9, node 6.16.

**The channel is email, decided 2026-08-10.** This line said "or a push notification" until
then. Tendd is a mobile-first responsive web app and a native app is out of scope, and on iOS
web push only reaches a site the person has installed to their home screen, so push would have
covered a minority of exactly this audience while reading on paper as though it covered
everyone. J4 is "never be surprised", and a message that only exists inside the app cannot keep
that promise. Push is deferred, not rejected, and it changes no block here when it arrives.

## Content blocks, mobile-first priority

From `../blocks.md`, type E.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | App header (GC1) | GC1 | TAKE |
| 2 | **"Needs you"**, usually empty: a failed payment in desaturated clay, a price change in amber | J4, principle 2, growth zone 3 | TAKE: **exists in no source.** A feed sorted by date makes the person scan to find out whether anything is wrong; sorting by whether it needs them answers that before they read |
| 3 | **"Just so you know"**: charges due in the next seven days, a newly detected subscription | J4 | TAKE |
| 4 | The alert item (GC5): icon, one plain sentence, the merchant and the amount, when, the source, and one inline action | GC5, J4, principle 3, principle 4 | TAKE plus TAKE-DIFFERENTLY: an alert with no action is a notification; an alert that cannot say where it came from is a rumour |
| 5 | Price change alerts show the old price, the new price and the difference | J4, growth zone 2, D-Concept | TAKE: **exists in no source.** Every product tells you the new number; the old one beside it turns a surprise into an explanation |
| 6 | Older, collapsed | principle 2 | TAKE: the recent past is the job, the distant past is node 5.12 |
| 7 | What we tell you about, a link into node 6.16 | J4 | TAKE, DIFFERENTLY: one place instead of a reminder toggle on every subscription |
| 8 | Tab bar (GC2) | GC2 | TAKE |

**THE ONE DOT THIS PRODUCT DOES DRAW, decided 2026-08-23.** The tab bar carries a small quiet dot
on the Alerts destination, and until today this node refused the whole family without saying
anything about the one that had shipped. The rule: **it appears when an alert arrives that was
not there last time, and it clears the moment the Alerts screen is opened**, whether or not every
alert on it was read. It carries **no number, ever**, and it never takes a colour that reads as an
alarm: it reads the body ink role like the rest of the bar. What separates it from what is refused
below is that a count is a demand and a dot is an offer - "there is something here" is an
invitation to look, "3 unread" is a debt. Clearing it on arrival rather than on reading is the
same distinction one layer down: a person who opened the screen has been told, and asking them to
tick each line is the anxiety machine in a smaller box.

**Named and not added:** unread counts, badges and red dots (D-Concept: status is a quiet gray
badge, never red; a red badge on a money app is an anxiety machine, and our person already
avoids opening it); search, a filter row and a multi-column audit table (the enterprise
register); a notes field.

## Components and variants

GC1 App Header, app variant. GC2 Global Tab Bar. GC5 Alert Item: price-change, payment-failed,
trial-ending, upcoming-charge and new-subscription variants. GC7 Pro Gate, on the alert types
that are Pro depth only, never on the two that carry J4.

**What each variant can actually know, settled 2026-08-10.** Price-change and payment-failed
are computed by us and have no field behind them in any bank API; the rules are in
`../../../docs/bank-connection.md` section 6. **Trial-ending only fires on a subscription the
person entered themselves**, because a trial that has not charged produces no transaction, no
stream and no date: there is nothing for a bank to report. The bank-side counterpart is the
new-subscription variant at the other end of the same event, "the first full charge has
landed", which is detectable and is the more useful half anyway.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | Both groups, "Needs you" usually empty | Anything to report |
| 3.8.1 | All clear | **"Nothing needs your attention right now"**, and what would show up here if it did | Nothing to report |
| 3.8.2 | Loading alerts | A skeleton of the list | Fetch in progress |
| 3.8.3 | Could not load alerts | "Nothing is wrong with your money, we just could not reach your alerts" | Fetch failed |

**On 3.8.1:** in most products an empty feed reads as a dead end. Here it is the product
working, and it is the most reassuring sentence in the app. It is designed as the best state,
not the missing one.

**On 3.8.3:** the error copy separates the two fears on purpose. The person's first thought at
an error on a money screen is that something happened to their money.

## Filters and facets

None. A handful of events is not an audit trail.

## Primary CTA

**None on the screen; one inside every item.** The action belongs to the alert it concerns:
"see what changed" to node 2.7, "what to do" for a failed payment, "help me cancel" to node
4.9. An empty screen has no action at all, and that is correct.

## Emotional support

No mechanism from the table has this node as its home. **E1** through the voice rules of every
state, and most of all through the empty state, which says the product is working rather than
that something is missing. Nothing else is claimed here.

## Responsive

Mobile: two groups, one column, the older section collapsed. Desktop: the same order at a
wider measure; the groups never become columns side by side, because "needs you" must be read
first and not scanned in parallel.

## SEO

**noindex, no schema.** Private and personal.

## Status

**Locked:** the two groups, the inline action, the old price beside the new one, the empty
state as the best state, no red badges.

**Done at the wireframe rebuild, 2026-08-05:** the July screen was one feed sorted by
date and it is now the two groups, every alert names its source and its date, the price change
carries the old price beside the new one and the difference, and the empty state says what
would appear here if it did.
**Open:** `[?]` which alert types are Free and which are Pro depth. D3 fixes the principle
(price change and failed payment are basic, so they are free), but the full list is a pricing
decision. Resolving input: the founder, alongside the Pro feature list.
