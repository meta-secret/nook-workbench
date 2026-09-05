---
title: Prepared encrypted search catalog write
feature: rust-action-ownership
issue: issues/rust-action-ownership/search-catalog-write-state.md
started_at: 2026-09-05T23:19:16Z
agent: codex
gizmo_id: rust-action-ownership-search-catalog-write
---

# Task plan

## Interpreted request

Encode encrypted search-catalog persistence as a private preparation and effect transition while assigning restore behavior to its existing domain owner.

## Requirements

- Put encrypted catalog restore and load behavior on `SearchCatalogRestore`.
- Prepare selected bucket writes completely before persistence, carrying destination and captured pending mask.
- Consume the prepared state to save writes and clear only its captured mask after success.
- Preserve store/crypto checks, bucket selection and order, empty deletion, encryption, zeroization, reconciliation, dirty state, exact error handling, and cache logging.
- Enable full-module ownership lints and add bounded behavior coverage.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-wasm/src/manager/search_catalog.rs`.
- Keep authored additions at or below 240 and final file below 400 lines.
- The prepared state must not implement `Clone`, `Copy`, `Default`, or serialization.
- Do not add inherent methods to dependency-owned `SecretSearchCatalog` or `VaultCrypto`.
- Existing save-error continuation remains unchanged; no additional fallback or recovery behavior.
- No public API, WASM ABI, storage schema, dependency, or logging policy change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-search-catalog-write
- Estimated authored changed lines: 240
- Owning modules, packages, or layers: nook-wasm encrypted search catalog cache
- Ownership units:
1. Capability: Prepared encrypted search catalog persistence; Gizmo ID: rust-action-ownership-search-catalog-write; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/manager/search_catalog.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/manager/search_catalog.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: private SearchCatalogRestore and PreparedSearchCatalogWrite methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted Rust, WASM behavior, Dylint, and remote Loom checks pass
- Public or cross-module interfaces: None; existing manager method and storage calls remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 240
- Current PR slice and acceptance evidence: Prepared encrypted search catalog persistence; Acceptance evidence: Hosted Rust/WASM behavior, Dylint, remote Loom, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-search-catalog-write; Gizmo name: Prepared encrypted search catalog persistence; Predecessor Gizmo ID: None; Prepared encrypted search catalog persistence; Estimated authored changed lines: 240; Acceptance evidence: Hosted Rust/WASM behavior, Dylint, remote Loom, and source SECURITY

## Initial plan

1. Implement the one-file preparation/effect state and focused restore/persistence tests.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced prepared-write persistence, preserved cache semantics, module ownership enforcement, hosted Rust/WASM/Dylint and remote Loom checks, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
