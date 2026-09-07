---
title: Nook WASM GitHub event storage coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 8503d611026ed4c05ec5added7b2e302f1ed986e
---

## Objective

Raise executable `nook-wasm` coverage through a bounded test slice for the
GitHub immutable event adapter. The merged-main evidence leaves
`storage/github_events.rs` at 41.88 percent lines; this slice makes repository
and tree response handling, event filtering, retry classification, and UTF-8
admission deterministic and testable without GitHub credentials or external
repository state.

## Scope

- Extract small pure helpers for GitHub repository/tree response projections,
  event-id filtering, retry classification, and event-content validation while
  preserving network behavior and error text.
- Add behavior-focused native tests for missing resources, protocol failures,
  malformed JSON, truncated trees, blob filtering, retryable conflicts, and
  invalid UTF-8.
- Keep production behavior, public contracts, package inventory, exclusions,
  and existing floors unchanged unless exact hosted coverage proves a
  defensible floor increment.

## Constraints and proof

- Keep authored additions below 2,000 lines and preserve the 1,000-line
  per-source-file policy.
- Do not add coverage exclusions, assertion-free tests, or fixtures that
  mutate external GitHub state or contain credentials.
- Run `cargo fmt --all -- --check`, `git diff --check`, and
  `task loom:pre-push` locally; do not run local Rust/WASM or product Docker
  builds.
- Require exact-head hosted native, WASM, web, ecosystem, coverage, preview,
  review-resolution, readiness, and merge evidence before closeout.
