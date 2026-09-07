---
title: Pull request 1531 Nook WASM GitHub storage coverage completion
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260907T164500Z-nook-wasm-coverage-github-storage.md
agent: codex
gizmo_id: rust-crate-coverage-90
pr: 1531
merged_commit: 71248ade6298674f529e66d83192623d047935a1
---

## Scope

PR #1531 added 116 authored test lines for the GitHub storage boundary:
GitHub tree and directory response decoding, request-body wire shape,
event-tree filtering, root-empty and empty-token short-circuits, and
fail-closed mismatched event-id rejection before network publication.
Production behavior, public contracts, and coverage exclusions were unchanged.

## Static gates

- `cargo fmt --all -- --check` passed from `nook-app/nook-platform`.
- `git diff --check` passed.
- `task loom:pre-push` passed with 116 authored additions. It passed against
  each tested base (`1476eef…`, `33d6c41…`, and final `5a7ff77…`) with no UI or
  format violations.

## Hosted evidence

- Initial graph `34144868206` correctly exposed two test-only policy failures:
  a typed-JSON contract violation and a missing `unowned_function` expectation.
  Those were corrected without production changes.
- Corrected graph `34146262710` passed all jobs on head `2e4817d…` and measured
  325 WASM tests, `nook-wasm` at 80.19% lines, `storage/github.rs` at 40.37%,
  and `storage/github_events.rs` at 41.88%.
- Final exact-head graph `34148019362` passed after rebasing onto Main
  `5a7ff77e32d0dacb03f50fb29633ec85da3de5e7`; it ran 325 WASM tests with zero
  failures and measured `nook-wasm` at 80.20% lines, `nook-companion-wasm` at
  91.20%, `storage/github.rs` at 40.37%, and `storage/github_events.rs` at
  41.88%.

## Delivery

- `task pr:ready PR=1531` returned `ready: true`, `behindBy: 0`, zero
  unresolved threads/comments, successful exact-head Pages deployment at
  `https://pr-1531.nokey-sh.pages.dev`, and all required jobs successful.
- PR #1531 squash-merged as
  `71248ade6298674f529e66d83192623d047935a1` on 2026-09-07T17:40:30Z.
  `origin/main` and the deleted PR branch were verified afterward.
