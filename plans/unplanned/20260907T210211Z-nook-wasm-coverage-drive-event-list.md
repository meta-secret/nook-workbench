---
title: Nook WASM Drive event-list coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 7d8c1b9833995f9ca3b7e066662e117ec2655f44
---

## Objective

Raise executable `nook-wasm` coverage with a bounded test slice for the low-coverage `storage/drive_events.rs` adapter, currently measured at 50.97 percent line coverage in the exact PR #1541 report.

## Scope

- Extract deterministic Drive list-response projection from the network-bound adapter.
- Preserve digest validation, `appProperties.event_id` matching, malformed-row skipping, and pagination behavior.
- Add behavior-focused tests for accepted rows, junk names, missing metadata, and malformed response fields.
- Keep the change under the authored-line budget and raise the executable floor only to the next evidence-backed increment.

## Validation

- Run `cargo fmt --all -- --check` from `nook-app/nook-platform`.
- Run `git diff --check` and `task loom:pre-push` from the product repository root.
- Use exact-head hosted Repository policy and PR validation; extract WASM test count and per-file/total coverage from the fresh WASM Node log.
- Run `task pr:ready PR=<number>` after hosted validation and merge only the exact validated head.
