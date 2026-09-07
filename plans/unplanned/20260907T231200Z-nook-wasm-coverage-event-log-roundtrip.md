---
title: Nook WASM event-log and adapter coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: a3f10cc5172a18076e95eb721418670b2d9759f3
---

## Objective

Continue the serial `nook-wasm` coverage mission from the merged 81.0 percent executable floor with a larger behavior-focused increment, prioritizing deterministic event-log and adapter projections over network-only branches.

## Scope

- Cover event-log mode, signing-seed, heads/epoch, event-index, and outbox round-trip contracts in browser tests.
- Add focused tests for deterministic adapter response/error projections that remain below the current floor.
- Preserve event ordering, duplicate suppression, malformed-input rejection, and fail-closed storage behavior.
- Keep authored changes within the 2,000-line policy and raise the floor only to a fresh hosted measurement.

## Validation

- Run `cargo fmt --all -- --check` from `nook-app/nook-platform`.
- Run `git diff --check` and `task loom:pre-push` from the product repository root.
- Use exact-head hosted Repository policy and PR validation; extract WASM test count and per-file/total coverage from the fresh WASM Node log.
- Run `task pr:ready PR=<number>` after hosted validation and merge only the exact validated head.
