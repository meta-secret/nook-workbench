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
- PR #1087 is 25 files with 2,783 changed lines at
  `47aff944d33b1579a886dbcd7946a1e4ec297567`.
- PR #1096 is 12 files with 3,371 changed lines at
  `00a819683d2baccb09d1cf9eaeafc9206b742c64`.
- PR #1097 is 31 files with 1,454 changed lines at
  `bf2487cba4354431dffc723934112ff22f000535`.
- The preserved full-work baseline tree is
  `07b6c8d456ae10690c868e491c883a875747130a`; the final stack adds the scoped
  actuation review fix and has exact tree
  `e1f645a299c92f248dcd736b5e2b96bb2a0840f5`.
- Focused browser submission suites pass 61 of 61 tests. Compact-policy and
  runtime-message suites pass 31 of 31 tests.

## Remaining work

- Review, validate, and prepare PR #1087, then #1096, then #1097 in dependency
  order. Do not merge without separate authorization.
