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
- PR #1087 is 25 files with 2,414 insertions and 490 deletions at
  `85654f5b08963e825a1a15664826b2725bd40a13`.
- PR #1096 is 12 files with 3,084 insertions and 331 deletions at
  `d152ef295e137bcbf0f837d516d684fc21a9060d`.
- PR #1097 is 31 files with 1,329 insertions and 198 deletions at
  `38994976f6908095eb224d2dafcfd7f8e3cd299e`.
- The preserved full-work baseline tree is
  `07b6c8d456ae10690c868e491c883a875747130a`; the final stack adds the scoped
  actuation review fix and has exact tree
  `ff3a906ab90d1000e06612036a301ea3a59a8ecf`.
- Focused browser submission suites pass 63 of 63 tests. Approval-policy and runtime-message suites pass 33 of 33 tests. The full extension check passes 221 tests with zero Svelte diagnostics. Focused companion-core workflow tests pass 30 of 30 and the companion-WASM boundary test passes.

## Remaining work

- Review, validate, and prepare PR #1087, then #1096, then #1097 in dependency
  order. Do not merge without separate authorization.
