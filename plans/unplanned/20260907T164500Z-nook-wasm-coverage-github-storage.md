---
title: Nook WASM GitHub storage coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 1476eefabb846509f0aae0305f1cbcaa8b093026
---

## Objective

Raise executable `nook-wasm` coverage through a bounded, behavior-focused
test slice for the GitHub event and file-storage adapters. The current hosted
evidence identifies `storage/github_events.rs` and `storage/github.rs` as
large remaining gaps; this slice will cover deterministic path filtering,
response decoding, request-header/body projections, and validation failures
that must terminate before network publication.

## Scope

- Add native tests for GitHub event-tree filtering and response decoding.
- Add browser tests for GitHub event-write admission and fail-closed malformed
  or mismatched event bytes before any network request.
- Add focused browser/native tests for GitHub storage request projections where
  they are deterministic without credentials or external state.
- Keep production behavior, public contracts, package inventory, exclusions,
  and existing floors unchanged unless exact hosted coverage provides a
  defensible margin for a floor increment.

## Constraints and proof

- Keep authored additions below 2,000 lines and preserve the 1,000-line
  per-source-file policy.
- Do not add coverage exclusions, assertion-free tests, or network-dependent
  fixtures that require user credentials or mutate external repositories.
- Run `cargo fmt --all -- --check`, `git diff --check`, and
  `task loom:pre-push` locally; do not run local Rust/WASM or product Docker
  builds.
- Require exact-head hosted native, WASM, web, ecosystem, coverage, preview,
  review-resolution, readiness, and merge evidence before closeout.
