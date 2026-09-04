---
title: WASM manager concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T18:38:20Z
agent: codex
gizmo_id: wasm-manager-concise-paths
---

# Task plan

## Interpreted request

Migrate the `nook-wasm` manager module tree to concise Rust paths while retaining meaningful type and owning-module context. Enforce the configured two-segment Clippy rule at the manager module root after its complete subtree is clean.

## Requirements

- Replace every path above two segments in `nook-wasm/src/manager` outside complete `use` declarations.
- Prefer imported types or meaningful owning-module aliases; retain context for functions, associated items, and standard-library operations.
- Add module-root `#![deny(clippy::absolute_paths)]` after the manager subtree is clean.
- Preserve runtime behavior, WASM interfaces, authentication boundaries, device identity, event-log semantics, and vault-storage behavior.
- Deliver this module migration as one serial pull request.

## Constraints and exclusions

- Keep authored additions at or below 2,000 lines and within the 1,200-line estimate.
- Do not change storage, public API, type, secret API, Cortex, preflight, Minds, or fuzz code.
- Do not add fallback behavior, migrations, dependencies, generated output, or unrelated cleanup.
- Do not add crate-wide denial while other `nook-wasm` modules remain unmigrated.
- Do not run local Rust, WASM, or product builds; hosted validation owns compilation and tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: wasm-manager-concise-paths
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: nook-app/nook-platform/nook-wasm/src/manager
- Ownership units:
1. Capability: Concise Rust paths and module-local lint enforcement for the WASM manager tree; Gizmo ID: wasm-manager-concise-paths; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: use-aware inventory is clean, manager module denial is present, authored additions remain within budget, hosted Rust/WASM checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Migrate the complete `nook-wasm` manager subtree and enable module-local concise-path enforcement; Acceptance evidence: use-aware inventory is clean, module denial is active, authored additions are within budget, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: wasm-manager-concise-paths; Gizmo name: WASM manager concise paths; Predecessor Gizmo ID: None; migrate the complete `nook-wasm` manager subtree and enable module-local concise-path enforcement; Estimated authored changed lines: 1200; Acceptance evidence: use-aware inventory is clean, module denial is active, authored additions are within budget, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and readiness reports no drift

## Initial plan

1. Inventory non-`use` long paths throughout the manager module tree.
2. Replace them with contextual imported types or owning-module aliases and audit import scope and collisions.
3. Enable the deny lint at the manager module root, measure the full diff, and run permitted local hygiene.
4. Complete hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Completion evidence

- The manager module tree has no non-`use` path above two segments and denies regressions at its module root.
- Hosted Rust and WASM compilation and tests pass without authentication, identity, event-log, or vault behavior changes.
- The reviewed exact head stays within budget and merges with zero drift or unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. It preserves existing cryptographic, authentication, authorization, device-identity, vault-storage, and migration boundaries.
