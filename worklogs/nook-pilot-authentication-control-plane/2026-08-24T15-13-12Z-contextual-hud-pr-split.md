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
pull requests. The full reviewed implementation remains preserved, every changed
file has one owning slice, and the final stacked tree is identical to the
preserved full-work tree.

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
  changing the preserved final tree.

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
- PR #1096 is 11 files with 3,257 changed lines at
  `4a654edd6edcb036a686c44dcf9df351780ac93b`.
- PR #1097 is 31 files with 1,454 changed lines at
  `e3a91922703972b8b5ae06c26c82b11162b028b2`.
- The final remote tree hash matches the preserved full-work tree hash
  `07b6c8d456ae10690c868e491c883a875747130a`.

## Remaining work

- Review, validate, and prepare PR #1087, then #1096, then #1097 in dependency
  order. Do not merge without separate authorization.
