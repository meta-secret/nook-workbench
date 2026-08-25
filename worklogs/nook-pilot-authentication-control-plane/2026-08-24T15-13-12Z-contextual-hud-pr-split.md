---
title: Contextual Nook Pilot pull request split
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/contextual-hud-rust-wasm-policy.md
plan: plans/nook-pilot-authentication-control-plane/2026-08-24T14-59-55Z-contextual-hud-multi-pr-sequence.md
nook_pr: https://github.com/meta-secret/nook/pull/1087
status: completed
started_at: 2026-08-24T14:59:55Z
finished_at: 2026-08-24T15:13:12Z
agent: codex
---

# Contextual Nook Pilot pull request split

## Outcome

Replaced the oversized contextual Pilot delivery shape with three ordered draft
pull requests. The full reviewed baseline remains preserved, every changed file
has one owning slice, and later exact-head review fixes remain isolated in their
owning slice.

## Progress

- Preserved all implementation and latest review fixes at
  `f75f7b8bb90a77bce72de86de5a131d3f7a1c58d`.
- Reduced PR #1087 to Rust/WASM policy and typed interfaces.
- Created PR #1096 for shared DOM observation, scoping, actuation, browser unit
  tests, and the owning UI demo.
- Created PR #1097 for extension Pilot presentation, saved-login availability,
  product specification, and rendered extension coverage.
- Published the feature index, three focused issues, ordered dependencies, and
  preservation inventory to Workbench Main.

## Implementation problems

- The initial shared DOM boundary omitted the Playwright demo. The repository
  pre-push contract correctly rejected that boundary, so the demo and its stub
  moved into PR #1096 before the branch was pushed.
- Workbench repository-wide validation is currently red on pre-existing Main
  records. The new records introduced no findings, so the concurrency-safe
  publisher made the validated changed records durable on Main and the redundant
  Workbench PR was closed.
- The first rewritten PR #1087 retained two internal-API catalog entries for
  consumers introduced only by PR #1097. Exact-slice policy validation caught the
  mismatch. The entries moved to PR #1097 and the stack was rebased without
  changing the preserved baseline.
- Exact-head browser tests then exposed two scoped actuation regressions. PR #1096
  now preserves the Rust-selected localized control, normalizes root submissions
  to their owning form, and rejects generic fallback activation. The control-query
  primitives moved to a focused module so `password-forms.ts` remains 932 lines.
- Exact-head Rust review then found reset-password and OTP-resend policy gaps.
  PR #1087 now accepts credential reset only with `new-password` evidence and
  rejects resend/request-new-code controls before progression acceptance.
- A later exact-head review found that the split removed the Rust-owned approval decision. PR #1087 now exposes semantic `explicit-user-approval` and `takeover-required` requirements, PR #1096 carries the field through owned fixtures, and PR #1097 refuses Pilot execution without explicit Rust approval.
- Exact-head review also required scoped ownership for login-labeled controls and classification ownership on `AuthenticationAdvanceControlObservation`. The stack now rejects generic unowned controls, preserves explicit local containers, and moves the extension observation test from PR #1096 to its implementation owner in PR #1097.

## Decisions

- Split by module and responsibility: Rust/WASM policy, shared browser DOM
  observation, then extension presentation.
- Keep the PRs stacked because each later slice consumes the prior stable typed
  interface.
- Keep all three PRs draft until their rewritten exact heads receive independent
  review, hosted validation, and readiness evidence.

## Validation

- Mandatory pre-push format and UI-demo contract passed on all three exact slice
  trees.
- PR #1087 is 25 files with 2,427 insertions and 490 deletions at
  `bfbc338498c248b5164b66670e0a228c16d2b633`.
- PR #1096 is 11 files with 3,001 insertions and 331 deletions at
  `33873f1871eb70f4c17f9e7b84c06650613585d2`.
- PR #1097 is 32 files with 1,412 insertions and 198 deletions at
  `6dda5c55eaf2dab9d7dd79e8cb2ce02fc02d13ff`.
- The preserved full-work baseline tree is
  `07b6c8d456ae10690c868e491c883a875747130a`; the final stack adds the scoped
  actuation review fix and has exact tree
  `d302b7c8c692a1ba3da6d010c056c3e517161a68`.
- Five focused DOM suites pass 103 of 103 tests against freshly rebuilt companion WASM. Approval-policy and runtime-message suites pass 33 of 33 tests. The extension-owned observation contract passes 5 of 5 tests. The full extension check passes 221 tests with zero Svelte diagnostics. Focused companion-core workflow tests pass 30 of 30; page-classification tests pass 15 of 15; the companion-WASM boundary test and Clippy pass.

## Remaining work

- Review, validate, and prepare PR #1087, then #1096, then #1097 in dependency
  order. Do not merge without separate authorization.
