# Flows - Tendd

Phase IA, Prompt 1: Information Architecture. How the personas actually move
through the product, with decision points, states, and dead ends, not just
the happy path. Structure only, no per-screen content.

Reading the diagrams:
- **Rectangle nodes `[ ]` are screens.** Every rectangle here matches a
  screen name in ia/docs/sitemap.md. No new screens are introduced.
- **Diamonds `{ }` are decision points** with labeled branches.
- **Stadium nodes `( )` are states, steps, events, or outcomes**, not
  screens. Amber = a loading, empty, or error state. Green = a success end.
  Red = a dead end where the person could get stuck.

The dead ends are drawn on purpose. They are the honest failure points a
person could hit, and the Critique section of ia/docs/sitemap.md lists them
as defects with fixes. They are not accepted as normal.

---

## Flow A: J-MAIN, see all recurring charges calmly (Emma, bank path)

The main job, first session, bank-connected path. Ends at the calm list.

```mermaid
flowchart TD
  classDef state fill:#fff7e6,stroke:#d9a441,color:#5c4813;
  classDef success fill:#e9f5ee,stroke:#3f9c68,color:#1e4d33;
  classDef dead fill:#fdeaea,stroke:#c96a6a,color:#6b2b2b;

  Welcome["Welcome / Value Intro"] --> PathQ{"Bank or privacy path?"}
  PathQ -->|Privacy| AddSub["Add Subscription"]
  PathQ -->|Bank| ConnectBank["Connect Bank"]
  ConnectBank --> SyncLoad(["Loading: syncing your bank"])
  SyncLoad --> ConnOK{"Connection succeeded?"}
  ConnOK -->|no| ConnErr(["Error: could not connect"])
  ConnErr --> RetryQ{"Try again?"}
  RetryQ -->|yes| ConnectBank
  RetryQ -->|no| FallbackQ{"Use the manual path instead?"}
  FallbackQ -->|yes| AddSub
  FallbackQ -->|no| StuckExit(["Dead end: leaves without any list"])
  ConnOK -->|yes| FoundQ{"Any recurring charges found?"}
  FoundQ -->|no| NoneEmpty(["Empty: no recurring charges found"])
  NoneEmpty --> AddSub
  FoundQ -->|yes| Reveal["Guided Reveal"]
  AddSub --> Reveal
  Reveal --> Home["Home / Subscription List"]
  Home --> Success(["Success: sees all charges calmly"])

  class SyncLoad,ConnErr,NoneEmpty state
  class Success success
  class StuckExit dead
```

**Decisions:**
- Bank or privacy path? The first fork, given equal weight per D2. Privacy
  hands off to Flow B.
- Connection succeeded? If the bank link fails.
- Try again? After a connection error.
- Use the manual path instead? The recovery offer if the user will not
  retry the bank connection.
- Any recurring charges found? A clean connection can still surface nothing.

**States:**
- Loading: syncing your bank (after Connect Bank).
- Error: could not connect (bank link failed).
- Empty: no recurring charges found (connected, but nothing detected).
- Success: sees all charges calmly (the intended end).

**Dead end (defect, see Critique):** "leaves without any list" if the user
declines both retry and the manual fallback. The Guided Reveal is drawn as
one node; internally it is gradual per D1 (count, then categories with logos,
then total paired with an action).

---

## Flow B: J5, track without sharing bank data (Ravi, manual + presets)

The privacy path, manual entry with the 400+ preset library (D2). The
manual-entry trap (Ravi P1) is the risk this flow must survive.

```mermaid
flowchart TD
  classDef state fill:#fff7e6,stroke:#d9a441,color:#5c4813;
  classDef success fill:#e9f5ee,stroke:#3f9c68,color:#1e4d33;
  classDef dead fill:#fdeaea,stroke:#c96a6a,color:#6b2b2b;

  Welcome2["Welcome / Value Intro"] --> PathQ2{"Bank or privacy path?"}
  PathQ2 -->|Bank| BankRef(["Bank path: see Flow A"])
  PathQ2 -->|Privacy| AddSub2["Add Subscription"]
  AddSub2 --> PresetLoad(["Loading: preset library"])
  PresetLoad --> PresetOK{"Preset library loaded?"}
  PresetOK -->|no| LibErr(["Error: presets unavailable"])
  LibErr --> ManualCustom(["Step: add a custom subscription by hand"])
  PresetOK -->|yes| SearchQ{"Service in the presets?"}
  SearchQ -->|yes| AddFromPreset(["Step: add from a preset, prefilled"])
  SearchQ -->|no| ManualCustom
  AddFromPreset --> MoreQ{"Add another?"}
  ManualCustom --> MoreQ
  MoreQ -->|yes| AddSub2
  MoreQ -->|no| EnoughQ{"Anything added yet?"}
  EnoughQ -->|no| EmptyReveal(["Empty: nothing to reveal yet"])
  EmptyReveal --> AbandonRisk(["Dead end: abandons half-done, manual entry trap"])
  EnoughQ -->|yes| Reveal2["Guided Reveal"]
  Reveal2 --> Home2["Home / Subscription List"]
  Home2 --> Success2(["Success: private list, no bank"])

  class PresetLoad,LibErr,EmptyReveal state
  class Success2 success
  class AbandonRisk dead
```

**Decisions:**
- Bank or privacy path? Same fork as Flow A; the bank branch points back to
  Flow A.
- Preset library loaded? The preset library is launch-critical per D2, so
  its failure is a real state.
- Service in the presets? Found means prefilled and fast; not found means
  manual custom entry.
- Add another? The loop that builds the list.
- Anything added yet? Guards the reveal against being empty.

**States:**
- Loading: preset library.
- Error: presets unavailable (fallback is manual custom entry).
- Empty: nothing to reveal yet.
- Success: private list, no bank.

**Dead end (defect, see Critique):** "abandons half-done, manual entry trap."
Ravi has twice abandoned manual entry in the research. If nothing pulls him
back, he leaves with a half-built list.

---

## Flow C: J2 + E2, find, cancel, and feel the win (Claudia)

The cut job and the pride moment. Basic cancel instruction is free (D3); the
full guide and direct link are Pro. The external dark pattern is the risk.

```mermaid
flowchart TD
  classDef state fill:#fff7e6,stroke:#d9a441,color:#5c4813;
  classDef success fill:#e9f5ee,stroke:#3f9c68,color:#1e4d33;
  classDef dead fill:#fdeaea,stroke:#c96a6a,color:#6b2b2b;

  Home3["Home / Subscription List"] --> Detail3["Subscription Detail"]
  Detail3 --> CancelQ{"Cancel this one?"}
  CancelQ -->|no| Home3
  CancelQ -->|yes| Guide["Cancel Guide"]
  Guide --> DepthQ{"Free basic steps or Pro full guide?"}
  DepthQ -->|"Basic, free"| BasicSteps(["Step: basic instruction, link plus steps"])
  DepthQ -->|"Wants full guide"| Upgrade3["Upgrade / Tendd Pro"]
  Upgrade3 --> PayQ{"Upgrade now?"}
  PayQ -->|no| BasicSteps
  PayQ -->|yes| FullGuide(["Step: full guide plus direct link"])
  BasicSteps --> DoneQ{"Managed to cancel?"}
  FullGuide --> DoneQ
  DoneQ -->|yes| Win["Cancel Win Moment"]
  DoneQ -->|"no, blocked by retention flow"| BlockedErr(["Error: stuck in the service dark pattern"])
  BlockedErr --> HelpQ{"In-app help offered?"}
  HelpQ -->|no| StuckCancel(["Dead end: gives up, no in-app next step"])
  HelpQ -->|yes| Guide
  Win --> ShareQ{"Share the win?"}
  ShareQ -->|yes| Share["Share Snapshot"]
  ShareQ -->|no| Success3(["Success: saved money, calm"])
  Share --> Success3

  class BlockedErr state
  class Success3 success
  class StuckCancel dead
```

**Decisions:**
- Cancel this one? From a subscription's detail.
- Free basic steps or Pro full guide? The D3 split, never a hard paywall on
  the relief moment.
- Upgrade now? If the user wants the Pro depth. Declining still returns the
  free basic instruction, so the moment is never blocked.
- Managed to cancel? The real-world outcome of an external cancellation.
- In-app help offered? Whether the product catches a blocked cancellation.
- Share the win? Optional, per S1.

**States:**
- Error: stuck in the service dark pattern (the external retention flow).
- Success: saved money, calm.

**Dead end (defect, see Critique):** "gives up, no in-app next step" if a
blocked cancellation is not caught with an in-app help path.

---

## Flow D: J4, stay ahead of a surprise (alert to action)

Entry is a notification (the return hook, research BP4). Price change and
payment-failed alerts are free; trial-ending and unusual are Pro (D3).

```mermaid
flowchart TD
  classDef state fill:#fff7e6,stroke:#d9a441,color:#5c4813;
  classDef success fill:#e9f5ee,stroke:#3f9c68,color:#1e4d33;
  classDef dead fill:#fdeaea,stroke:#c96a6a,color:#6b2b2b;

  Notif(["Event: notification, price change or payment failed"]) --> Alerts["Alerts / Activity"]
  Alerts --> AnyQ{"Any alerts to show?"}
  AnyQ -->|"load failed"| AlertErr(["Error: could not load alerts"])
  AlertErr --> RetryA{"Retry?"}
  RetryA -->|yes| Alerts
  RetryA -->|no| HomeA["Home / Subscription List"]
  AnyQ -->|no| AllClear(["Empty: all clear"])
  AllClear --> HomeA
  AnyQ -->|yes| TypeQ{"Alert type?"}
  TypeQ -->|"Trial ending or unusual, Pro"| UpgradeA["Upgrade / Tendd Pro"]
  TypeQ -->|"Price change or payment failed, free"| DetailA["Subscription Detail"]
  UpgradeA --> HomeA
  DetailA --> NeedQ{"Price change or payment failure?"}
  NeedQ -->|"price change"| ActQ{"Keep or cancel?"}
  ActQ -->|keep| SuccessA(["Success: caught it early, nothing to do"])
  ActQ -->|cancel| GuideA["Cancel Guide"]
  NeedQ -->|"payment failure"| FixQ{"Is the fix inside the app?"}
  FixQ -->|"yes"| SuccessA
  FixQ -->|"no, at the bank or merchant"| NoNext(["Dead end: no in-app next step for a failed payment"])

  class AlertErr,AllClear state
  class SuccessA success
  class NoNext dead
```

**Decisions:**
- Any alerts to show? Splits into loaded, empty, or a load failure.
- Retry? After a failed load.
- Alert type? Free alerts open the subscription; Pro alerts hit the upgrade
  gate.
- Price change or payment failure? Routes to the right next step.
- Keep or cancel? A price change either is accepted or hands off to Flow C.
- Is the fix inside the app? A failed payment is usually fixed at the bank or
  merchant, which is the risk below.

**States:**
- Error: could not load alerts.
- Empty: all clear (a calm, healthy empty state, not a dead end).
- Success: caught it early, nothing to do.

**Dead end (defect, see Critique):** "no in-app next step for a failed
payment" when the fix lives at the bank or merchant and the app stops at
"informed" without telling the person what to do next.
