---
title: Nook WASM GitHub storage adapter coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
agent: codex
gizmo_id: rust-crate-coverage-90
base_commit: 456f149837aa32854835eaa68a3010020be65ddc
---

## Objective

Raise executable `nook-wasm` coverage through a bounded test slice for the
GitHub storage adapter. The merged-main evidence leaves
`storage/github.rs` around 40 percent; this slice makes status handling,
response decoding, and wire-shape projections deterministic and testable
without GitHub credentials or external repository state.

## Scope

- Extract small pure helpers for GitHub response/status projections while
  preserving the existing network requests and error text.
- Add behavior-focused native tests for success, missing-resource, protocol
  failure, malformed JSON, invalid UTF-8, and write-response branches.
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
