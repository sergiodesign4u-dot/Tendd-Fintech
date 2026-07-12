# Voice (Tendd)

Phase: Voices. This is the binding document for how Tendd talks. By its rules any
line of the product can be written the same way, by a person or by Claude. Voice
is rules, not a mood: every rule has an example (a line written to it), an
anti-example (a line that breaks it), and a reason traced to a source line in the
research. Adjectives without examples are not accepted: you cannot write a button
from "friendly".

Sources read for this document: user-research/docs/personas.md, user-research/docs/jtbd.md,
research/docs/master-research.md, research/docs/benchmark-trust.md,
research/docs/competitive-analysis.md, research/docs/ux-patterns.md,
research/docs/strategy.md, and the five design principles in CLAUDE.md. The line
inventory this voice is measured against is voice/docs/microcopy.md.

Structure of this file:
1. Principles (Step 2, below): the rules Tendd speaks by, sourced from data.
2. Dictionary (Step 3, below): one concept, one word.
3. Forbidden (Step 3, below): what we never write, with fixes.
4. Microcopy (Step 4, below): rules per element type and per state tone.

The tone is set by state, not by mood: an error does not joke, an empty state
leads to an action, a success does not celebrate. That is written as rules in
sections 3 and 4; the principles below are what all of them obey.

---

## Principles

Two sources feed every principle. The personas say **how to write** (the words and
tone that lower this person's anxiety). The competitors' language says **where to
stand apart**: where every finance product writes the same way, that sameness is
Tendd's opening to sound different. Five principles, each earning its place from a
source line. Fewer honest rules beat more pretty ones.

### Principle 1: Lead with calm and being in control, not with capability

**Rule.** Every headline and promise names the feeling of knowing what is going
out and being okay, not the feature that produces it. Calm is the position no
competitor has taken, so it is the one Tendd leads with. Calm does not mean silent
or so soft it discourages looking; it invites the person to look ("here is what
you have").

**Example (written to the rule).**
- "See what you're paying for. Calmly." (welcome hero)
- "One calm list instead of a dozen forgotten logins." (welcome benefit card)
- "This is what you have signed up for, not what you wasted." (guided-reveal)

**Anti-example (breaks the rule).**
- "Save more, spend less, see everything, and take back control of your financial
  life." (this is Rocket Money's actual value prop: capability stacked on
  capability, no feeling)
- "Take control of your finances and optimize your spending."

**Why (from the data).**
- "no competitor, including new entrant ReSubs, leads with 'calm' as a design or
  brand promise. Every product leads with capability ('find subscriptions,' 'save
  money,' 'control your finances') not emotional state." (competitive-analysis.md)
- "'I know what's going out, and I'm okay.' Calm, not optimization."
  (strategy.md, Segment A motivation)
- "the more people talk about their personal finances, the better they feel... the
  Guided Reveal must be engaging enough to get the user to LOOK." (master-research.md,
  Q1) This is why calm still invites looking.

### Principle 2: Say who did the thing, in plain words

**Rule.** Write in active voice and name the actor. Tendd, a merchant, or the
person did the thing, so the sentence says who. No passive constructions, no
system-log phrasing, no jargon. Plain language is a core differentiator here
because no subscription tracker has made it one.

**Example (written to the rule).**
- "A payment to Amazon Prime did not go through." (alerts)
- "Netflix went up by $2.50, now $17.99 a month." (home alert banner)
- "We could not connect to your bank." (connect-bank-error)

**Anti-example (breaks the rule).**
- "Payment declined." / "A price change was detected." (passive, no actor)
- "Sync error." / "Something went wrong." (system-log phrasing, names nobody)

**Why (from the data).**
- Monzo's principle: "Say who did the thing." Instead of "your payment was
  declined" they write "we couldn't take this payment, your card was declined by
  [merchant]". (benchmark-trust.md)
- "Passive voice in financial communication creates anxiety because the user does
  not know who is responsible for what." (benchmark-trust.md)
- "Plain language and active voice... no subscription tracker has made it a core
  differentiator." (master-research.md, Key Conclusion 4)

### Principle 3: Frame money as what you signed up for, never as judgment

**Rule.** Present numbers as what is scheduled to go out, "what you have signed up
for", never as "what you spent" or "what you wasted". No red, no failure language,
no implication the person did something wrong. The list is a discovery, not an
audit. This is the difference between exposure (which the person avoids) and
control (which they came for).

**Example (written to the rule).**
- "a month, for what you have signed up for" (home summary strip)
- "This is what you have signed up for, not what you wasted." (guided-reveal)
- A found subscription reads as "look what we found", not "warning".

**Anti-example (breaks the rule).**
- "Monthly recurring expenditure: $247.83." (finance-speak, exposure framing)
- "You wasted $215 this year on things you never use." (judgment, shame)
- "Warning: unexpected charge." (alarm, not reveal)

**Why (from the data).**
- "Do not present the subscription total as 'how much you are spending.' Present it
  as 'what you have signed up for'... The framing of control vs. exposure makes a
  real psychological difference." (master-research.md, Q2)
- "every screen must be judgment-free. No red. No language implying failure. The
  subscription list is presented as discovery, not audit." (jtbd.md, E1)
- "surface surprises as positive discoveries ('look what we found') rather than
  alarms... Design it as a reveal, not an alert." (ux-patterns.md, BP3)

### Principle 4: Earn trust by naming the fear and answering it with specifics

**Rule.** At every money-and-data moment, say plainly what Tendd does and does not
do, in a precise and falsifiable way, before asking for anything. Name the fear
the person actually has and answer it with a specific fact. Vague reassurance is
worse than none, because it makes the person ask why you needed to say it.

**Example (written to the rule).**
- "Read-only. Tendd cannot move your money." (home summary strip)
- "Here is exactly what we do. We read your recurring charges, read-only. We can
  never move your money. Powered by Plaid." (connect-bank)
- "No account numbers, no bank details, and no list of your exact subscriptions.
  Only what you see above." (share-snapshot)

**Anti-example (breaks the rule).**
- "Bank-level security." (vague, names no fear, falsifies nothing)
- "We take your privacy seriously." (generic reassurance that backfires)

**Why (from the data).**
- "vague reassurances trigger more anxiety than no reassurance at all ('why do they
  need to say that?'). A specific, direct statement that names the fear... is
  processed as evidence of honesty, not marketing." (benchmark-trust.md, Mechanism 2)
- Ravi is scared off by "Vague language like 'bank-level security' without
  specifics". (personas.md, Ravi)
- "Trust must be earned through transparency and design, not just claimed."
  (CLAUDE.md, Target Audience)
- Apple Card's "No fees. Not even hidden ones." works because "it is a precise,
  falsifiable claim." (benchmark-trust.md)

### Principle 5: Mark the small win with a number and a next step, then stop

**Rule.** The moment a person catches or cancels a subscription is the product's
most important emotional beat, so it is named, but quietly: state the fact, the
specific amount, and the next step, and then stop. Tendd does not celebrate at the
person, does not use confetti tone, exclamations, or a generic success toast. A
total is never a standalone reveal; it always sits next to what to do about it.

**Example (written to the rule).**
- "You just cancelled Netflix and freed up $17.99 a month. That is $215.88 a year
  back in your pocket." (cancel-win)
- "That is $192.90 a month. Here are 2 you might not be using: Peloton App and The
  New York Times." (guided-reveal, total paired with an action)

**Anti-example (breaks the rule).**
- "Congratulations! You're crushing it! [confetti]" (celebrates at the person)
- "Success! Subscription cancelled successfully." (empty toast, no number, no next
  step, and the forbidden word "successfully")
- A dramatic monthly total shown alone, with nothing to do about it.

**Why (from the data).**
- "not a generic success toast but a moment with specific numbers ('you just freed
  up $14.99/month, that's $179.88/year')." (jtbd.md, E2)
- Users describe the win as "a little pay raise", "the mental relief of knowing I'm
  not bleeding cash... was priceless". (personas.md, O7 and Emma mood quote)
- "The total is NOT presented as a dramatic culmination, it is shown on the same
  screen as an action... The exposure serves calm, not shock." (strategy.md, D1)

---

## Dictionary

One concept, one word. Every choice below resolves a discrepancy flagged in
microcopy.md (the D-numbers). The terms come from the persona's plain language and
the research, not from finance-speak. When a screen currently uses a different
word, the word here wins.

### Address and style rules (apply to every line)

- **Second person, "you" and "your".** Tendd speaks to the person. Buttons are
  Tendd's labels, so they say "your", never first-person "my" or "I". "Back to
  your subscriptions", not "Back to my list". The one exception is the share card,
  which is written in the user's own voice ("On Tendd, I am keeping an eye on..."),
  because there the user is the speaker, not Tendd. (Resolves the mixed voice in D3
  and D11.)
- **Contractions: warm by default, firm on money and data.** Use contractions in
  everyday copy ("you're", "can't find it", "we'll"). Spell the words out in safety
  claims and negations about money or data, where firmness carries the trust:
  "cannot move your money", "we do not sell your data", "did not go through". A
  softened "can't move your money" reads as less certain, and certainty is the
  point (Principle 4). (Resolves D11.)
- **Numbers in plain context, never as exposure.** "You're paying for 14
  subscriptions", "$192.90 a month". Never "expenditure" or a bare dramatic figure
  (Principle 3).
- **Proper terms kept as-is:** Plaid, Tendd Pro, Free, CSV, and real merchant names
  (Netflix, Spotify Premium). These are not jargon.

### One concept, one word

| Concept | Use | Not | Why |
|---------|-----|-----|-----|
| The thing being tracked | subscription | thing, item | The word the person recognizes; "14 things" is vague. (D5) |
| A preset in the 400+ catalog | service | subscription (before it is added) | A "service" is what you pick from the list; it becomes your "subscription" once added. The two words are allowed to differ because they name two states of the same object. (D5) |
| The raw bank pattern before it is named | recurring charge | transaction, item | What Tendd reads from the bank before it is matched to a service. (D5) |
| Where the list comes from | source | account | "Your sources" covers both a connected bank and your manual entries. (D6) |
| The Plaid bank link specifically | connection (bank connection) | (do not use "connection" for manual entries) | Reserved for the technical bank link, so "source" and "connection" stay distinct. (D6) |
| Choosing to add by hand instead of a bank | Add them yourself | Add manually, Add it yourself | This is the method that pairs with "Connect your bank" on the fork. (D1) |
| The affordance to add one subscription | Add a subscription | + Add subscription, Add manually | The entry point on Home and empty states. (D1) |
| The form button that commits the entry | Add subscription | Save, Done, Add it | The submit on the add form. (D1) |
| Connecting a bank (the action) | Connect your bank | Choose your bank, Connect a bank | "your" is personal and plain, and it reads the same on every screen. (D2) |
| Returning to the main list | Back to your subscriptions | Back to Home, Back to my list, Done back to my list | Plain money language over the nav label, in second person. The Home tab keeps its nav label "Home"; the descriptive button says where you land. (D3) |
| Seeing the list after adding | See your subscriptions | See my list, See my full list | Second person. (D3) |
| Retrying after an error | Try again | Try the list again | One label for error recovery. A specific verb is allowed only when the action is a named re-run, not a generic retry: "Check again" (re-poll for charges), "Search again" (re-run a search). (D4) |
| The read-only safety line | Read-only. Tendd cannot move your money. | Read-only, cannot move money; bank-level security | Fixed line: the fact leads, the actor is named, the claim is falsifiable. Inside a sentence where Tendd already speaks as "we", use "we ... cannot move your money" with the same verb. (D7) |
| The bank-data service | through Plaid | Powered by Plaid, via Plaid | The plainest preposition; "Powered by" is badge-speak. (D8) |
| The headline number | monthly total | recurring spend, recurring expenditure, recurring money | "total" avoids the spending frame (Principle 3). "recurring money" is allowed only as a marketing phrase on the landing, never as the number's label. In the trends view prefer "total" over "spend". (D9) |

---

## Forbidden

What Tendd never writes, each with the fix. The "was" column is either a line
currently in the wireframes (flagged in microcopy.md) or the straw-man pattern the
research names as the thing to avoid. This list is the default that otherwise
creeps back in with every new prompt: hype, exclamations, and empty praise are the
model's reflex, so they are banned by name.

| Never | Was / pattern | Write instead | Why |
|-------|---------------|---------------|-----|
| Generic or AI error copy | "Something went wrong", "Oops, something went wrong" | "We could not load your alerts." | Name who and what (Principle 2). |
| The word "success" or "successfully" | "Subscription cancelled successfully" | "You cancelled Netflix." | State the fact, not the system's satisfaction (Principle 5). None ships today; banned going forward. |
| Praise interjections, celebrating at the user | "Nice.", "Great!", "Congratulations!", "You're crushing it!" | Go straight to the fact and the number: "You cancelled Netflix and freed up $17.99 a month." | The win is the person's, not Tendd's applause (Principle 5). Resolves D12: the cancel-win opener "Nice." is dropped; the quiet header "A small win" stays, because it frames the moment without cheering. |
| Performative emotion prompts | "Feeling good about it?" (cancel-win) | "You can share a simple card. No bank details, ever." | Do not narrate the person's feelings back to them (Principle 5). Resolves D12. |
| Exclamation marks in product copy | "All done!" | "All done." | Calm is declarative (Principle 1). The set ships with zero today; keep it zero. |
| Emoji in product or system copy | "Saved 🎉" | Plain text only. | Calm, and never in a system message (Principle 1). |
| Motivational or hype tone | "Take control of your financial life", "start your journey" | "See what you're paying for. Calmly." | Capability-and-hype is the competitor pattern Tendd stands apart from (Principle 1). |
| Finance jargon and exposure framing | "Monthly recurring expenditure", "how much you spent", "what you wasted", "optimize your spending" | "monthly total", "what you have signed up for" | Exposure framing is what the person avoids (Principle 3). |
| Alarm framing | "Warning: unexpected charge", red urgency | "We noticed something about your Adobe charge." | A reveal, not an alert (Principle 3). |
| Vague reassurance | "bank-level security", "we take your privacy seriously" | "Read-only. Tendd cannot move your money." | Vague reassurance raises anxiety; specifics read as honesty (Principle 4). |
| Passive voice with no actor | "Payment declined", "A price change was detected", "Sync error" | "A payment to Amazon Prime did not go through.", "Netflix went up by $2.50." | Say who did the thing (Principle 2). |
| Gerund-plus-ellipsis or generic loaders | "Loading services...", "Creating your card..." | "Getting the list of services. This usually takes a moment." | Resolves D10; the full loader rule is in the Microcopy section (Step 4). |
| First person in Tendd's own labels | "Back to my list", "See my list" | "Back to your subscriptions", "See your subscriptions" | Tendd addresses the person as "you" (address rule; D3, D11). |
| "thing(s)" for a subscription | "You are subscribed to 14 things" | "You're paying for 14 subscriptions" | Use the dictionary word (D5). |

## Microcopy

The last section, and with it voice.md is complete: from here every line of the
product is written and checked against this file. These are the rules by element
type and by state tone. Each rule carries one real Tendd example, and each obeys
the Principles, Dictionary, and Forbidden sections above. Sourced against the
screen and state inventory in wireframes/_screens.md.

### By element type

**Button.** A verb that shows the result, in the dictionary's words. Never "OK",
"Next", "Submit", "Done".
- Yes: "Connect your bank", "Add subscription", "Cancel this subscription".
- No: "OK", "Continue" (says nothing about what happens).

**Screen heading (one h1 per screen).** Names the place in plain dictionary words,
not a slogan and not an instruction. A detail screen uses the subscription's real
name.
- Yes: "Your trends", "Data and privacy", "Netflix" (on its detail).
- Exception: the onboarding chain may ask a question as its heading, because it is
  a step, not a place: "How do you want to start?" (path-choice).

**Summary strip and the headline number.** The biggest thing on the screen: a
count and a total in plain context, framed as what you have signed up for, never
as exposure. The number never stands alone; on Home it carries a context line, in
the reveal it is paired with an action (Principle 3, Principle 5).
- Yes: "You're paying for 14 subscriptions" / "$192.90" / "a month, for what you
  have signed up for".
- No: a bare "$192.90" as a dramatic reveal; "Monthly expenditure: $192.90".

**Form field.** The label says what to enter; the hint says how, with a real
example; the validation error says exactly what to fix, with no blame.
- Yes: label "Next payment date", hint "For example, Aug 3, 2026". Validation:
  "Enter an amount, like $9.99".
- No: label "Input", hint "Required", error "Invalid input".

**Alert line (J4).** Active voice, name who did the thing, plain language, no
alarm. The title is the plain-English event; the context line adds who and when;
the action says what to do (Principle 2, Principle 3).
- Yes: "A payment to Amazon Prime did not go through" / "Payment failed · Amazon
  Prime · It usually tries again in a day or two" / "What to do →".
- No: "Payment failure detected" / "Warning".

**Trust line.** The fixed safety sentence wherever money or data is touched: fact
first, actor named, falsifiable. Never vague (Principle 4, Dictionary D7).
- Yes: "Read-only. Tendd cannot move your money."
- No: "Bank-level security", "Your data is safe with us".

**Status tag.** One plain word or short phrase for a state, from a fixed small set,
no punctuation, no sentence.
- Yes: "Active", "Trial", "Cancelled", "Connected", "Reconnect needed", "Pro",
  "Free", "Best value".
- No: "Active!", "This subscription is currently active".

**Pro gate and upsell.** State what Pro adds and why it is relevant here, in one
calm line tied to the context, and make it dismissible. One offer, never a nag,
and never across the relief moment: cancelling stays free (strategy §4, the
Emma-problem upsell ban).
- Yes: "History and trends are part of Tendd Pro." with "Maybe later" always
  present.
- No: "Upgrade now!", a Pro wall on the cancel step, repeated prompts.

### By state tone

**Empty.** Say why it is empty and give the way out. Never a bare "nothing here";
every empty page has a real action into a flow.
- Yes: "Nothing here yet" / "See everything you pay for in one calm place." /
  "Connect your bank" / "Add a subscription" (home-empty).
- No: "No data", with no action.

**Error.** Say what happened and what to do, name who, and if it is a money screen,
reassure that the money itself is fine. No apology, no joke. Keep the last known
data visible where it exists.
- Yes: "We could not refresh just now. Showing your last update from today, 9:14
  AM." / "Try again" (home-error). "Nothing is wrong with your money, we just
  could not reach your alerts right now." (alerts-error).
- No: "Oops! Something went wrong.", a blank error page that drops the list.

**Loading.** One calm sentence naming what is loading, ending "This usually takes a
moment." Skeleton placeholders carry the shape. No spinner-only screen, no
gerund-plus-ellipsis, no bare "Loading...". This is the single loader pattern; it
retires "Loading services..." and "Creating your card..." (Dictionary D10).
- Yes: "Getting your subscriptions. This usually takes a moment." (home-loading).
- No: "Loading services...", "Creating your card...".

**Success.** The normal populated view is the success; it states the result and
does not celebrate (no toast, no "Success"). The one dedicated success screen,
Cancel Win, names the fact, the specific amount, and the next step, then stops
(Principle 5).
- Yes (steady): the populated Home list, no announcement. Yes (the one
  celebration): "You just cancelled Netflix and freed up $17.99 a month. That is
  $215.88 a year back in your pocket."
- No: "Success!", "Nice.", "Cancelled successfully".

**Dangerous action.** Before the tap, say plainly what will happen and what cannot
be undone; the confirm button names the action, and a step-back option sits beside
it. Destructive actions are never one tap. A reversible action is framed calmly and
says so.
- Yes (irreversible): "This deletes your subscriptions, sources, and account. It
  cannot be undone." / "Delete everything" / "Keep my data" (data-privacy).
- Yes (reversible): "you can always resubscribe later" beside "Cancel this
  subscription" (cancel-guide).
- No: a one-tap "Delete" with no warning; "Are you sure?" with an "OK" button.

---

voice.md is now complete. Steps 5 to 7 apply it: rewrite Home and its states as the
sample against these rules, roll the rewrite out to every remaining screen by
subagent, then verify the whole set and update microcopy.md so no product line
ships outside the table.

---

## Note on competitor microcopy (scope of the sources)

The research holds competitors' real marketing and tagline language (enough to
establish that everyone sells capability and nobody sells calm, which grounds
Principle 1). It does not hold competitors' in-product UI strings (buttons,
errors, alerts): app interiors are marked "[? behind login]" throughout. The
anti-examples above that are not attributed to a named competitor are the
straw-man patterns the research itself names as what to avoid ("a price change was
detected", "sync error", "something went wrong"), not captured competitor UI. If
side-by-side microcopy contrasts are wanted later, live competitor copy would need
to be fetched and added to research as its own section.
