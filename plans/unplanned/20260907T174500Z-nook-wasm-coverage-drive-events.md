---
title: Nook WASM Drive event storage coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 71248ade6298674f529e66d83192623d047935a1
---

## Objective

Raise executable `nook-wasm` coverage through a bounded, behavior-focused
test slice for the Google Drive immutable event adapter. Hosted evidence leaves
`storage/drive_events.rs` near 40 percent line coverage; this slice targets
deterministic parent/query projections, event-file selection, response-shape
decoding, and fail-closed publication validation before network access.

## Scope

- Add behavior tests for Drive event admission and event-id mismatch handling.
- Cover deterministic Drive list-row and duplicate-event selection branches.
- Exercise multipart metadata/body projections without credentials or external
  Drive state.
- Keep production behavior, public contracts, package inventory, exclusions,
  and existing floors unchanged unless exact hosted coverage proves a
  defensible floor increment.

## Constraints and proof

- Keep authored additions below 2,000 lines and preserve the 1,000-line
  per-source-file policy.
- Do not add coverage exclusions, assertion-free tests, or fixtures that
  mutate external Drive accounts.
- Run `cargo fmt --all -- --check`, `git diff --check`, and
  `task loom:pre-push` locally; do not run local Rust/WASM or product Docker
  builds.
- Require exact-head hosted native, WASM, web, ecosystem, coverage, preview,
  review-resolution, readiness, and merge evidence before closeout.
