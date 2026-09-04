---
title: Complete nook-wasm concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T19:40:25Z
agent: codex
gizmo_id: wasm-remaining-concise-paths
---

# Task plan

## Interpreted request

Migrate every remaining `nook-wasm` source module to concise Rust paths while retaining meaningful type and owning-module context. Enforce the configured two-segment Clippy rule at the crate root after the complete source tree is clean.

## Requirements

- Replace every path above two segments outside complete `use` declarations in the remaining `nook-wasm/src` modules outside the already migrated manager and storage trees.
- Prefer imported types or meaningful owning-module aliases; retain context for functions, associated items, and standard-library operations.
- Use contextual standard-library calls such as `str::from_utf8` through module imports, never ambiguous bare function imports.
- Add crate-root `#![deny(clippy::absolute_paths)]` after the full library source tree is clean.
- Preserve runtime behavior, WASM interfaces, authentication boundaries, device identity, passkeys, event-log semantics, and vault-storage behavior.
- Deliver the remaining library migration as one serial pull request.

## Constraints and exclusions

- Keep authored additions at or below 2,000 lines and within the 1,200-line estimate.
- Do not change fuzz targets, preflight, Minds, Cortex, generated output, or unrelated crates.
- Do not add fallback behavior, migrations, dependencies, generated output, lint allowances, or unrelated cleanup.
- Keep the existing manager-root and storage-root denial unless mechanical consolidation makes their removal necessary; crate-root enforcement is authoritative.
- Do not run local Rust, WASM, or product builds; hosted validation owns compilation and tests.
- Monitor `identity_record.rs`, which begins at 956 lines, against the 1,000-line source limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: wasm-remaining-concise-paths
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: all remaining nook-app/nook-platform/nook-wasm/src modules outside manager and storage
- Ownership units:
1. Capability: Concise Rust paths and crate-wide lint enforcement for the remaining WASM library source; Gizmo ID: wasm-remaining-concise-paths; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: use-aware inventory is clean across all 36 audited files, crate-root denial is present, authored additions remain within budget, hosted Rust/WASM checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Migrate all remaining `nook-wasm` library source modules and enable crate-root concise-path enforcement; Acceptance evidence: use-aware inventory is clean, crate-root denial is active, authored additions are within budget, source-size limits hold, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: wasm-remaining-concise-paths; Gizmo name: Complete nook-wasm concise paths; Predecessor Gizmo ID: None; Migrate all remaining `nook-wasm` library source modules and enable crate-root concise-path enforcement; Estimated authored changed lines: 1200; Acceptance evidence: use-aware inventory is clean, crate-root denial is active, authored additions are within budget, source-size limits hold, local hygiene passes, hosted Rust/WASM validation passes, exact-head review is clean, and readiness reports no drift

## Initial plan

1. Use the read-only inventory of 791 candidate paths across 36 files to migrate API/domain adapters first, then browser and crate-root adapters.
2. Replace long paths with contextual imported types or owning-module aliases and audit import scope, configuration gates, and name collisions.
3. Enable the deny lint at `src/lib.rs`, measure the full diff and source sizes, and run permitted local hygiene.
4. Complete hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Completion evidence

- All 36 audited `nook-wasm` source files have no non-`use` path above two segments and the crate root denies regressions.
- Hosted Rust and WASM compilation and tests pass without authentication, identity, passkey, event-log, or vault behavior changes.
- The reviewed exact head stays within budget and source-size limits and merges with zero drift or unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. It preserves existing cryptographic, authentication, authorization, device-identity, passkey, vault-storage, and migration boundaries.
