---
title: WASM storage concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T17:56:00Z
agent: codex
gizmo_id: wasm-storage-concise-paths
---

# Task plan

## Interpreted request

Migrate the `nook-wasm` storage module tree to concise Rust paths while retaining meaningful type and module context. Enforce the configured two-segment Clippy rule at the storage module root once its complete subtree is clean.

## Requirements

- Replace every path above two segments in `nook-wasm/src/storage` outside complete `use` declarations.
- Prefer imported types or meaningful owning-module aliases; keep function and entity context visible.
- Add module-root `#![deny(clippy::absolute_paths)]` after the storage subtree is clean.
- Preserve runtime behavior, WASM interfaces, and storage/security boundaries.
- Deliver this module migration as one serial pull request.

## Constraints and exclusions

- Keep authored additions at or below 2,000 lines and within the 1,200-line estimate.
- Do not change manager, public API, type, secret API, Cortex, preflight, Minds, or fuzz code.
- Do not add fallback behavior, migrations, dependencies, generated output, or unrelated cleanup.
- Do not add crate-wide denial while other `nook-wasm` modules remain unmigrated.
- Do not run local Rust, WASM, or product builds; hosted validation owns compilation and tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: wasm-storage-concise-paths
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: nook-app/nook-platform/nook-wasm/src/storage
- Ownership units:
1. Capability: Concise Rust paths and module-local lint enforcement for WASM storage; Gizmo ID: wasm-storage-concise-paths; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: use-aware inventory is clean, storage module denial is present, authored additions remain within budget, hosted Rust/WASM checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Migrate the complete `nook-wasm` storage subtree and enable module-local concise-path enforcement; Acceptance evidence: use-aware inventory is clean, module denial is active, authored additions are within budget, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: wasm-storage-concise-paths; Gizmo name: WASM storage concise paths; Predecessor Gizmo ID: None; migrate the complete `nook-wasm` storage subtree and enable module-local concise-path enforcement; Estimated authored changed lines: 1200; Acceptance evidence: use-aware inventory is clean, module denial is active, authored additions are within budget, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and readiness reports no drift

## Initial plan

1. Inventory non-`use` long paths throughout the storage module tree.
2. Replace them with contextual imported types or module aliases and audit import scope/collisions.
3. Enable the deny lint at the storage module root, measure the full diff, and run permitted local hygiene.
4. Complete hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Completion evidence

- The storage module tree has no non-`use` path above two segments and denies regressions at its module root.
- Hosted Rust and WASM compilation/tests pass without storage or security behavior changes.
- The reviewed exact head stays within budget and merges with zero drift or unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. It preserves existing cryptographic, authentication, authorization, identity, vault-storage, and migration boundaries.
