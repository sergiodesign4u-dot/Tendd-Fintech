# Nodes 0.1 to 0.7 - The seven global elements

The reusable chrome and sections. They are not screens, so the eleven-point node template does
not fit them: a component has no URL, no SEO and no job of its own. **The contract below is
fixed here for all seven**, the way `1-1-welcome.md` fixed the template for screens.

1. **What it is**, in one line.
2. **Where it appears**, node by node.
3. **Content, in order.**
4. **Variants.**
5. **States.**
6. **What it must never do.** The rules that keep it calm, each traced.
7. **Who owns the strings**, and what the next stage inherits.

Consolidated from `../pages/navigation.md` (GC1, GC2), `../pages/core.md` (GC3, GC4),
`../pages/alerts.md` (GC5), `../pages/account.md` (GC6) and `../pages/pro.md` (GC7), which are
the cluster artifacts these seven were scattered across. **The real reader of this file is the
next stage:** Tokens and Components takes its component list from here, not from a screen.

---

## GC1 - App Header

**What it is.** The top strip of every steady-state screen: where you are, one way back, and at
most one thing to do.

**Where it appears.** Every node from 2.6 onward. Hidden or replaced across the whole
onboarding chain (1.2 to 1.5), and node 1.1 does not use it at all: the public landing has its
own marketing top nav with section links, sign in and a Get started action.

**Content, in order.** (1) back or menu, (2) the screen title or, on the app variant of the You
tab, a greeting built from the address on file, (3) one contextual action slot.
On the Pro cluster that slot carries the plan chip instead of an action: it is status, and a
status is not a thing to do.

**Variants.** App (title plus the tab bar below), detail (back plus the title, on 2.7, 4.9,
5.12, 6.14, 6.15), minimal (node 4.10: nothing competing with the moment), light (node 4.11),
onboarding (brand mark only), no-account-yet.

**States.** Onboarding, signed-in, no-account-yet.

**The `[?]` on no-account-yet closed on 2026-08-10.** It was waiting on the auth model, which
is now decided: the manual path runs with no account, so this is not a trial mode with an
expiry, it is the steady state of everyone who came in through node 1.4. The shell differs in
exactly two places: the You tab lands on node 6.16.1 instead of node 6.16, and **the header
carries no greeting**, because a greeting needs an address and this person has not given one.
Nothing counts down, nothing says the word trial, and nothing nags. Built on
`wireframes/settings-no-account.html`.

**Never.** Two actions at once (one thing at a time, principle 2). An icon with no label. A
count, a notification dot, or any badge that moves: a number that climbs is the thing this
product exists to quiet. **One static chip is the exception, decided 2026-08-10:** GC7's plan
chip, the word Free or Pro, hosted in slot 3 on the Pro cluster (node 5.12 with its states,
node 5.12.4, node 5.13 with its states, including 5.13.3 from 2026-08-10: nine pages). GC7 specifies it and node 5.12 block 1
already named it there; this line exists so that GC1 stops forbidding what GC7 requires. It
counts nothing and never changes on its own, and `voice/docs/microcopy.md` owns those three
lines as `status` rather than as a label. Node 5.12.4 exists only because a person on Free has
to see which side of the gate she is standing on, which no screen can say without saying which
plan she is on. It stays forbidden where it was already retired for reading as an upsell: nodes
2.6 and 2.7, whose job is the calm view (`microcopy.md`, the two "Pro status badge retired"
rows). On desktop it folds into the top of the left rail rather than staying a separate bar.

**Strings:** `voice/docs/microcopy.md`. **Next stage:** one component, six variants.

---

## GC2 - Global Tab Bar

**What it is.** Four destinations, always the same four.

**Where it appears.** Every steady-state screen. Hidden across the whole onboarding chain.

**Content, in order.** Home to node 2.6, Trends to node 5.12, Alerts to node 3.8, You to node
6.16. Icon plus a visible text label, never icon-only.

**FOUR, AND IT HAS BEEN FOUR TWICE.** Trends joined on 2026-08-18 on the founder's decision and
Save left on 2026-08-21 on the founder's question - "зачем нам страница Save когда она очень
похожа на Home" - so the count went 4, 5, 4 in three days and the set is not the set it started
as. Each move went sitemap first, component second, which is the order the prohibition below
demands.

**Variants.** Bottom bar on mobile, left rail on desktop. **This is the main breakpoint delta
of the whole product**, decided once here so no screen re-decides it.

**States.** Default with the current tab marked, hidden (onboarding), and a quiet dot on Alerts
when something is new since the last visit.

**Never.** A fifth tab. A numeric badge. Red, anywhere, ever (D-Concept). A tab set that
changes by persona or by plan: D3 gates what sits behind a destination, never the destination
itself, and a navigation that stays put is itself calming.

**Save is not a destination either, since 2026-08-21.** FLAG 1 asked where the Save tab should
land and answered "Home, parameterized", which solved the build question and left the
navigation one standing: a destination that is not a place. Measured, the state was 2099px tall
at 390 with 331 of them its own, and nothing but the tab bar linked to it. The cancel
candidates are now block 6b of node 2.6, shown only when they are true, and the bar carries
four destinations instead of a door into a room you were already standing in.

**Strings:** `voice/docs/microcopy.md`. **Next stage:** one component, two layouts.

---

## GC3 - Recurring Summary Strip

**What it is.** The count and the monthly total, and one line that gives them meaning.

**Where it appears.** Node 2.6 (where it is the largest thing on the screen) and node 1.5, the
reveal that produces it.

**Content, in order.** (1) the subscription count, (2) the monthly total, rendered as the
biggest number on the screen, (3) one context line.

**Variants.** One, "what you have signed up for". **The savings variant retired 2026-08-21**
with the Save tab: "you could save up to $X a month" made the calm view a savings pitch, and
the figure is a fact about two rows rather than about the total, so it is stated on them in
block 6b of node 2.6.

**States.** Populated, loading (a calm placeholder while the numbers resolve, not a spinner
over them), empty (an invite, never a bare $0).

**Never.** A bare shock number with no meaning beside it (D1: the reveal is gradual and the
total is always paired). A chart. Anything sold beside it: the upsell was removed from node 2.6
on purpose and lives on node 6.16.

**Changed from `../pages/core.md`, 2026-08-04.** That file lists node 5.12 as a third place
this strip appears. It does not appear there: the strip states the present, node 5.12 states
the past, and its own text summary already carries the current figure. Two renderings of one
number on one screen is the duplication the calm principle exists to prevent. Recorded as a
change, not left as drift.

**Strings:** `voice/docs/microcopy.md`. **Next stage:** one component, two variants, three
states.

---

## GC4 - Subscription List Item

**What it is.** One recurring charge, as a row. The most repeated object in the product.

**Where it appears.** Node 2.6 (the list), node 1.5 (the reveal), node 2.7 (as the hero of the
detail).

**Content, in order.** (1) the merchant logo, (2) the **real** merchant name, (3) the amount
and the cycle, (4) when the next charge lands, with the days leading and the date following,
(5) a quiet status tag.

**Variants.** Default; attention (amber, when a price changed or a payment failed);
cancel-candidate (in save focus, with an inline cancel affordance); unrecognized (the name
could not be resolved, so the row says "tap to name this charge" instead of pretending); trial;
cancelled (muted). Hero, on node 2.7.

**States.** As the variants, plus loading (a skeleton row).

**Never.** Red for a status (D-Concept: status is a quiet gray badge, a price change is amber,
only a genuine error is clay). A cryptic bank string shown as if it were a merchant name: that
is what the decoder line on node 2.7 exists for. A checkbox column. A row where only part of it
is tappable.

**The trend row is not GC4.** Node 5.12 lists rows that carry a change rather than a next
charge. They answer a different question, so they are a different component, and they are
specified in the round that builds cluster 5. Named here so the difference is a decision.

**Strings:** `voice/docs/microcopy.md`. **Next stage:** one component, six variants. This is
the component the design system should get right first.

---

## GC5 - Alert Item

**What it is.** One thing that happened, in one plain sentence, with one thing to do about it.

**Where it appears.** Node 3.8 (the feed), node 2.6 (at most one, as the attention row), node
2.7 (scoped to one subscription).

**Content, in order.** (1) a type icon, (2) one plain sentence, (3) the merchant and the
amount, (4) when, (5) **where it came from**, (6) one inline action.

**Variants.** Price change (the old price beside the new one and the difference), payment
failed (desaturated clay), trial ending, upcoming charge, newly detected subscription.

**States.** Default, read, and gated for a free person on the Pro-only types.

**Never.** Passive voice: "we could not take your payment", never "payment declined"
(master-research M1, a copy rule enforced on this component). An alert with no action, which is
a notification. An alert that cannot say where it came from, which is a rumour. A red dot or a
count.

**Strings:** `voice/docs/microcopy.md`. **Next stage:** one component, five type variants.

---

## GC6 - Data Source and Trust

**What it is.** Where this figure came from, when it was last checked, and what we can and
cannot do with the connection.

**Where it appears.** Node 6.14 in full, node 6.15 short, and as one line on nodes 1.3, 2.6 and
2.7.

**Content, in order.** (1) the current source, a bank or "added by you", (2) read-only, stated
in the same breath, and that we cannot move your money, (3) **the last successful check**, (4)
a link to the full answer on node 6.15.

**Variants.** Full row (a card per source), one line (inside another screen), short (a header
strip).

**States.** Bank-connected, private and manual, needs-reauth.

**Never.** "Bank-level security" and any other reassurance that is a phrase instead of a fact:
vague security language is precisely what this audience distrusts (master-research M2). A
figure with no source. A freshness claim with no date behind it.

**The last successful check exists in none of the sources the bank read.** It is the block that
makes the difference on this component: a silently stale connection makes the whole calm view
quietly wrong, and the person has no way to know.

**Strings:** `voice/docs/microcopy.md`. **Next stage:** one component, three variants, three
states. It carries **E3** on four different screens.

---

## GC7 - Pro Gate and Plan Chip

**What it is.** Two things in one component, and saying so is the point: **the chip states the
plan, the gate offers the upgrade.** They are never the same element and never in the same
place.

**Where it appears.** The chip on node 6.16 (its home **on paper**: the built settings screens render a `.subtotal` in the plan group head instead, and `.plan` appears on none of them, which the kit inventory records as a gap rather than as a fix), and in the GC1 header slot across the
Pro cluster: node 5.12 with its states, node 5.12.4, and node 5.13 with its states. That is
nine header pages (**corrected 2026-08-10**: GC1's line said nine and this one said eight; `grep
-l 'class="plan"'` returns nine, and node 5.13.3 is the ninth), and it is the exception named
under GC1: the chip is the one
static thing allowed in a header that otherwise carries no badge. The gate at real gated
features only: node 5.12's lock, the Pro alert types on node 3.8, the Pro depth block on node
4.9.

**Content, in order.** The chip: the plan name, and nothing else. The gate: (1) what this
unlocks, in one line, (2) an upgrade action into node 5.13, which then names the gate the
person came from.

**Variants.** Chip (free, Pro) and gate (inline block, and the full-screen lock on node 5.12).

**States.** Free (the gate is shown at gates), Pro (a badge, and no gate anywhere).

**Never.** A standing invitation to pay: the gate only ever appears where a person wants the
thing it unlocks. At basic visibility, which is node 2.6 (D3). At the cancel moment, which is
node 4.9 and node 4.10 (D3). On the two alert types that carry J4, a price change and a failed
payment, which are basic and free.

**One lock treatment, and the contradiction that produced it (2026-08-04).** `../pages/pro.md`
locks "a real preview frame, not a fake blurred chart" for node 5.12. `../pages/alerts.md`
locks the opposite for the same job: a Pro alert "rendered as a gated, blurred-with-label item".
GC7 renders both, so it cannot hold both rules. **Resolved to no blur anywhere**, by applying
the pro.md rule, which is the one grounded in principle 4: a blur pretends there is text being
withheld, and on a money screen an anxious person fills that blur with something bad. The
honest form states the type and the merchant, says that something was noticed, and holds only
the explanation: "We noticed something about Netflix. Tendd Pro explains what." `alerts.md` was
corrected to match; if this is wrong, it is wrong visibly and in one place.

**Strings:** `voice/docs/microcopy.md`. **Next stage:** two components that ship together.

---

## What this file hands over

Seven components, twenty-eight variants (6, 2, 2, 6, 5, 3, 4), and a written rule for each
about what it must never do. Tokens
and Components builds from this list; `wireframes/` draws them; nothing else in the project may
invent an eighth global element without a row here.
