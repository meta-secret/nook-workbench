---
title: Core concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T16:55:00Z
agent: codex
gizmo_id: core-concise-rust-paths
---

# Task plan

## Interpreted request

Migrate the `nook-core` and `nook-companion-wasm` crates to concise, contextual Rust paths. References may retain one meaningful module qualifier, such as `str::from_utf8` or `auth::Item`, but must not spell long crate, standard-library, or dependency paths inline. Enable crate-local Clippy enforcement after each crate is clean so regressions fail validation.

## Requirements

- Replace inline paths longer than two segments throughout both crates, including source, tests, and examples.
- Prefer importing the owning module or a meaningful alias when a bare item or function would lose context.
- Add `#![deny(clippy::absolute_paths)]` to each migrated crate root.
- Preserve behavior and public interfaces.
- Deliver this bounded migration as one serial pull request after the smaller-crates migration.

## Constraints and exclusions

- Keep authored additions at or below 2,000 lines.
- Do not migrate `nook-wasm`, fuzz targets, preflight, Minds, or Cortex in this pull request.
- Do not add compatibility paths, fallback behavior, generated output, dependencies, or unrelated cleanup.
- Do not run local Rust, WASM, or product builds; use repository hygiene locally and hosted validation for compilation and tests.
- Preserve semantic module context rather than reducing qualified calls to ambiguous bare names.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: core-concise-rust-paths
- Estimated authored changed lines: 1100
- Owning modules, packages, or layers: nook-app/nook-platform/nook-core and nook-app/nook-platform/nook-companion-wasm
- Ownership units:
1. Capability: Concise Rust path migration and crate-local lint enforcement; Gizmo ID: core-concise-rust-paths; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: static inventory finds no prohibited paths, authored additions remain within budget, hosted Clippy and Rust/WASM checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1100
- Current PR slice and acceptance evidence: Migrate `nook-core` and `nook-companion-wasm` to contextual paths and enable crate-local enforcement; Acceptance evidence: static path inventory is clean, authored additions are within budget, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and PR readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: core-concise-rust-paths; Gizmo name: Core concise Rust paths; Predecessor Gizmo ID: None; migrate `nook-core` and `nook-companion-wasm` to contextual paths and enable crate-local enforcement; Estimated authored changed lines: 1100; Acceptance evidence: static path inventory is clean, authored additions are within budget, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and PR readiness reports no drift

## Initial plan

1. Inventory long Rust paths in both crates and replace them with imports of meaningful owning modules or concise aliases.
2. Add crate-local Clippy denial only after each crate's source, tests, and examples are clean.
3. Audit the full diff and authored additions, then run the permitted local hygiene gate.
4. Deliver through hosted validation, exact-head review, readiness, squash merge, and immutable Workbench closeout.

## Completion evidence

- Both crate roots deny `clippy::absolute_paths` under the workspace's two-segment threshold.
- No prohibited long path remains in either crate according to static inventory and hosted Clippy.
- Behavior-focused Rust and WASM checks selected by hosted PR validation pass.
- The pull request stays within the authored-addition contract and merges at the reviewed head.

## Safety review

This plan contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. It changes naming style and lint enforcement only, with no cryptographic, authentication, authorization, storage, or protocol boundary change.
