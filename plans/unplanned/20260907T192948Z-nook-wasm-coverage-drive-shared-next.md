---
title: Nook WASM shared Drive adapter coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 01e44917e308ccce088141bfddf12fb4f4bc6264
---

## Objective

Raise executable `nook-wasm` coverage with a bounded test slice for the low-coverage `storage/drive_shared.rs` adapter, currently measured at 43.15 percent line coverage in the exact PR #1539 report.

## Scope

- Extract deterministic shared-folder name normalization and Drive response projection helpers from the network-bound adapter.
- Preserve all existing validation messages, fallback names, folder-type checks, and writable-capability checks.
- Add behavior-focused tests for trimmed/default names, missing identifiers, metadata type rejection, non-writable folders, and valid/defaulted projections.
- Keep the change under the repository authored-line budget and raise the executable floor only to the next evidence-backed increment.

## Validation

- Run `cargo fmt --all -- --check` from `nook-app/nook-platform`.
- Run `git diff --check` and `task loom:pre-push` from the product repository root.
- Use exact-head hosted Repository policy and PR validation; extract WASM test count and per-file/total coverage from the fresh WASM Node log.
- Run `task pr:ready PR=<number>` after hosted validation and merge only the exact validated head.
