# Node 1.6 - Sign In

Template: `1-1-welcome.md`. Added 2026-08-10, with the auth model decision in
`../../../docs/decisions.md`. Nothing in the map specified it before: `1-1-welcome.md` block 1
already had a "Sign in" link in the header and `6-16-settings.md` block 7 already had "sign
out", and the screen between them did not exist.

## Node, type, scope

**Node 1.6 · Sign In · page plus two states · MVP**

## Purpose and jobs

Let a person who already has an account get back to their list, and let them do it without a
password. It carries no activation work: everything persuasive already happened at node 1.1.

- **J1 activate without anxiety** (indirectly: the return has to be as calm as the arrival) and
  **J5 keep control of my data**.
- Realizes the auth model decision of 2026-08-10.

## The boundary, stated first

**There is no password anywhere in this product.** A person types their email, we send a link,
the link signs them in. The same mechanism verifies a new email, so one thing does both jobs
and there is nothing to reset, nothing to store and nothing to leak.

**This node never creates an account on the bank path.** That happens on node 1.3, in the same
breath as the bank ask. This screen is only for coming back.

## URL and breadcrumbs

`/signin`. In from the "Sign in" link in the node 1.1 header, from an expired session on any
app screen, and from the account-creation offer on node 6.16.1 for a person who turns out to
have an account already. Out to node 2.6 on success.

## Content blocks, mobile-first priority

From `../blocks.md`, type B, the onboarding-step shape. It is the one type B page that returns
a person rather than activating one, so it takes the shape and none of the persuasion.

| # | Block | Carries | From the bank |
|---|---|---|---|
| 1 | Step chrome: the brand mark, and a way back to node 1.1 | GC1 onboarding variant | TAKE |
| 2 | H1 and one line: what this does and what will arrive | J1 | TAKE |
| 3 | One field, the email | principle 2 | TAKE |
| 4 | **What arrives, said before it is asked for**: a link, not a code to copy, and it expires | J1, principle 4 | TAKE, DIFFERENTLY: the category sends the mail and explains afterwards. A person who does not know a mail is coming reads the empty screen as a failure |
| 5 | The one action | principle 2 | TAKE |
| 6 | **"No account yet? Start here", into node 1.2** | J1 | TAKE: a sign-in screen that is a dead end for a new person is the commonest dead end in the category |
| 7 | The trust line (GC6), short: we hold an email and a currency | J5, E3, principle 4 | TAKE, DIFFERENTLY: stating what little we hold is cheaper than a security badge and it is true |

**Blocks 3 and 5 are the field and the action, and block 4 sits between them on purpose.** What
will arrive is the one thing a person needs to know *before* they commit, not after: the screen
that explains the mail once it is already sent has explained it too late.

**Named and not added:** a password field, "remember me", social sign-in buttons, and a
CAPTCHA. The first three do not exist in this model, and the fourth is a wall in front of a
person who is already ours, on the screen where they are least patient.

## Components and variants

GC1 App Header, onboarding variant (brand mark only). GC6 Data Source and Trust, short variant,
inside block 7. No GC2: this sits outside the signed-in shell.

## States

| Node | State | Reads like | Trigger |
|---|---|---|---|
| - | default | The seven blocks, one field | Opened |
| 1.6.1 | Check your email | "A link is on its way to <address>", what to do if it does not arrive, and how to send another | The address was submitted |
| 1.6.2 | That link has expired | Plainly not the person's fault, and one action to send a fresh one | An old or used link was opened |

**On 1.6.1:** the screen states the address it sent to, because the commonest failure is a typo
the person cannot see once the field is gone. Resending is available but not loud.

**On 1.6.2:** links expire, and this is maintenance, not an error, in exactly the register node
6.14.2 uses for a bank connection that needs reconnecting. Nothing was lost and the screen says
so before it asks for anything.

**Deliberately not a state:** "that email is not registered". Saying which addresses have
accounts tells anybody who asks which addresses have accounts. The screen behaves identically
either way, and the mail that arrives is the one that fits.

## Filters and facets

None.

## Primary CTA

**"Send a sign-in link"**. One action. Block 6 is the only other route and it leads out of this
node entirely.

## Emotional support

- **E3 feel safe, control data** -> the screen holds one field, states what we hold, and asks
  for no secret -> **where exactly:** blocks 3 and 7.

## Responsive

Mobile: single column, the field above the fold, the trust line under the action. Desktop: the
same order, centred at a narrow measure. Nothing about this screen changes with width.

## SEO

**noindex, no schema.** Transactional.

## Status

**Locked:** passwordless, one field, no account enumeration, a way out to node 1.2, the same
mechanism for verification and for return.

**Open:** none in the IA. Link lifetime and rate limiting are operations.

**Drawn 2026-08-10**, in the round that re-opened the grey stage on purpose:
`wireframes/sign-in.html`, with `sign-in-sent.html` (1.6.1) and `sign-in-expired.html` (1.6.2).
The landing's "Sign in" link pointed at `settings.html` until that round, because there was
nowhere else for it to go.
