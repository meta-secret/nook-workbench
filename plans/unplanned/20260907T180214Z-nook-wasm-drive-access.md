---
title: Nook WASM Drive access adapter coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 735b5e5fba425576035543c858df06c7b0eab518
---

## Objective

Raise executable `nook-wasm` coverage through a bounded test slice for the
small Google Drive access-verification adapter. The merged-main evidence leaves
`storage/drive.rs` below 60 percent; this slice covers OAuth input validation,
typed response decoding, and deterministic header/error projections without
credentials or external Drive state.

## Scope

- Add browser tests proving invalid or empty OAuth access tokens fail closed
  before any network request.
- Add native tests for optional Drive user response shapes and exact error
  projection behavior.
- Keep production behavior, public contracts, package inventory, exclusions,
  and existing floors unchanged unless exact hosted coverage proves a
  defensible floor increment.

## Constraints and proof

- Keep authored additions below 2,000 lines and preserve the 1,000-line
  per-source-file policy.
- Do not add coverage exclusions, assertion-free tests, or fixtures that
  mutate external Drive state.
- Run `cargo fmt --all -- --check`, `git diff --check`, and
  `task loom:pre-push` locally; do not run local Rust/WASM or product Docker
  builds.
- Require exact-head hosted native, WASM, web, ecosystem, coverage, preview,
  review-resolution, readiness, and merge evidence before closeout.
