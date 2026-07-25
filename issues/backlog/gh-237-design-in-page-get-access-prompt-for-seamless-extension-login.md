---
title: "Design in-page Get access prompt for seamless extension login"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T01:51:55Z
updated_at: 2026-07-21T04:16:22Z
source_issues: ["https://github.com/meta-secret/nook/issues/237"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Design in-page Get access prompt for seamless extension login

## Imported context

This record was imported from [Nook GitHub issue #237](https://github.com/meta-secret/nook/issues/237)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #234.

## Problem

Password filling should not feel like a clunky field-by-field autofill tool. The Nook browser extension should act like a keeper for authentication: when it detects a login opportunity, it can present a small trusted Nook prompt near the top-right of the page, similar in spirit to “Continue with Google” account chooser prompts. The user clicks a clear action such as **Get access**, and Nook handles selecting the right vault entry and filling/submitting the login flow as safely as possible.

This should make authentication feel seamless and low-friction without turning the extension into a hidden form scraper or surprising auto-submit tool.

## Scope

- Design an in-page extension prompt anchored near the top-right of the viewport for login pages and login modals.
- Use a clear Nook-owned action such as **Get access** / **Continue with Nook** instead of exposing raw password-field mechanics.
- Let the prompt show the matched account or a compact account chooser when several credentials match the site.
- Fill username/password fields automatically after explicit user action.
- Decide when Nook may submit the form automatically versus when it should only fill and let the user click the site's submit button.
- Keep decrypted credentials inside the extension background/popup/WASM session; content scripts receive only the minimum fill payload needed for the active page action.
- Ensure the prompt works with common login patterns: classic forms, email-then-password flows, login modals, and dynamically inserted fields.
- Include fallback behavior when Nook cannot confidently identify fields or when the page blocks script-driven filling.

## Product Direction

Nook should be a trusted authentication companion, not just a password-field filler. The desired experience is:

1. User lands on a site that needs login.
2. Nook recognizes a likely login flow.
3. A small Nook prompt appears in the page chrome area, not buried inside the extension popup.
4. User chooses **Get access**.
5. Nook picks or asks for the right credential, fills the flow, and gets the user through login with minimal pain.

## UX Requirements

- The overlay must be visually distinct as Nook and not pretend to be the site.
- The overlay must not cover important site controls or password manager/browser UI.
- The overlay must include dismissal and a way to disable prompts for a site.
- The overlay must respect extension lock state; if locked, it should prompt to unlock Nook before offering credentials.
- The overlay must be keyboard-accessible and screen-reader understandable.
- The overlay must avoid dark-pattern behavior: no silent filling/submitting without a user action.
- The overlay should explain mismatches or uncertainty instead of guessing dangerously.

## Acceptance Criteria

- On a page with a detected login form, the extension can show a top-right Nook prompt offering **Get access**.
- If exactly one credential confidently matches the site, the prompt can offer one-click fill.
- If multiple credentials match, the prompt shows a compact account chooser before filling.
- If no credential matches, the prompt can offer to open Nook or create/save a credential, without blocking the page.
- Filling works for at least one standard username/password form and one two-step email-then-password flow in tests.
- Auto-submit, if implemented, is gated behind explicit user consent and confidence checks; otherwise Nook fills only.
- The content script does not own vault search, crypto, password generation, or secret policy; those remain in Rust/WASM/domain-owned code.
- Tests cover prompt rendering, dismissal, locked state, single-match fill, multi-match chooser, and no-confident-match fallback.

## Notes

- This complements #235 and #236: the extension first becomes a paired passkey-protected Nook device, then this issue defines the in-page login experience once the extension has vault access.
- This should not be implemented as blind DOM auto-submit. Nook should be helpful, explicit, and reversible.
- Relevant code paths: `nook-app/nook-web/nook-web-extension/src/content/autofill.ts`, `nook-app/nook-web/nook-web-extension/src/popup/PopupApp.svelte`, `nook-app/nook-web/nook-web-shared/src/extension/password-forms.ts`, `nook-app/nook-web/nook-web-extension/e2e/extension-smoke.spec.ts`.


## Historical comments

### cypherkitty — 2026-07-15T01:04:36Z

PR #391 delivers the first widget slice: login-page detection, a compact top-right Nook launcher, keyboard-accessible controls, dismissal, Simple/Sentinel exclusion, and an explicit **Open vault** action that opens the full Simple Vault website.

This does not close #237. Matched-account presentation, locked-state authorization, single/multi-account selection, and explicit credential fill remain here and depend on the encrypted extension-owned state in #244.


### cypherkitty — 2026-07-17T06:27:52Z

Related feature pack: #. # owns the universal auth-gate shell/CTA model that evolves the current Open vault widget; matched-account fill acceptance criteria here remain in force.

### cypherkitty — 2026-07-17T06:28:33Z

Correction/follow-up: universal auth-gate shell is #464 under epic #461. Matched-account fill acceptance criteria in this issue remain in force.

### cypherkitty — 2026-07-17T07:39:16Z

Fill path for Continue with Nook landed in https://github.com/meta-secret/nook/pull/466: host-matched list/reveal via Rust/WASM, form fill + submit, locked → companion unlock then retry. Multi-match chooser included; richer confidence/auto-submit policy can still refine here.

### cypherkitty — 2026-07-21T04:16:21Z

Closing as completed against the current Simple Vault companion architecture.

Shipped in-tree:
- in-page Nook Pilot / Continue with Nook auth gate
- host-matched login list/reveal via Rust/WASM
- explicit fill + submit, multi-match chooser, locked-state unlock retry
- username/password and related extension e2e coverage

Superseded wording: literal “Get access” CTA (now Continue with Nook). Remaining broader Pilot automation belongs under #461+, not this issue.

Parent #234 is being closed together with this cleanup.
