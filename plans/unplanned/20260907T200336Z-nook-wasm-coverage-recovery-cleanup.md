---
title: Nook WASM recovery cleanup coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 971e77651009618b4f295ff596b80eb1f839025a
---

## Objective

Raise executable `nook-wasm` coverage with a bounded test slice for the low-coverage `storage/identity_record/recovery/cleanup.rs` module, currently measured at 61.88 percent line coverage in the exact PR #1540 report.

## Scope

- Exercise pending-marker absence, serialization round-trip, and malformed stored-value rejection through the existing browser IndexedDB boundary.
- Preserve the existing cleanup marker key, error wording, and completion semantics.
- Keep behavior-focused tests within the repository authored-line budget and raise the executable floor only to the next evidence-backed increment.

## Validation

- Run `cargo fmt --all -- --check` from `nook-app/nook-platform`.
- Run `git diff --check` and `task loom:pre-push` from the product repository root.
- Use exact-head hosted Repository policy and PR validation; extract WASM test count and per-file/total coverage from the fresh WASM Node log.
- Run `task pr:ready PR=<number>` after hosted validation and merge only the exact validated head.
