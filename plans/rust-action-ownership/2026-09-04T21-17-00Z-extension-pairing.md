---
title: Extension pairing and persistence ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/extension-pairing.md
started_at: 2026-09-04T21:17:00Z
agent: codex
gizmo_id: rust-action-ownership-extension-pairing
---

# Task plan

## Interpreted request

Continue project-wide Rust architecture adoption with one cohesive extension pairing and persistence domain. Attach its existing transformations and fixture construction to meaningful types and enforce ownership throughout the adopted modules.

## Requirements

- Move pairing creation and refresh onto ExtensionPairingState, grant conversion and storage keys onto StoredExtensionPairingGrant, and setup conversion onto ExtensionReadySetup.
- Own existing legacy decoding on ExtensionPairingState without changing its behavior.
- Own persistence classification on ExtensionPersistenceArea.
- Remove obsolete core free-function reexports and update all companion WASM delegates.
- Preserve all 20 core tests, host behavior tests, public WASM signatures, serialization, and validation order.
- Enable ownership and invalid-suppression lints for the complete pairing and persistence module scopes.

## Constraints and exclusions

- Pure data transformations do not receive artificial phases or verification claims.
- Browser-supplied access observations remain untrusted boundary data.
- No new legacy path, compatibility alias, fallback, recovery behavior, or dependency.
- Shared root-file edits are limited to pairing exports and consumers; independent Clippy policy changes in PR 1344 remain untouched.
- No TypeScript changes or local product compilation/tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-extension-pairing
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: nook-app/nook-platform/nook-companion-core/src/extension_pairing_state.rs, nook-app/nook-platform/nook-companion-core/src/extension_pairing_state/legacy.rs, nook-app/nook-platform/nook-companion-core/src/extension_persistence.rs, nook-app/nook-platform/nook-companion-core/src/lib.rs, nook-app/nook-platform/nook-companion-wasm/src/lib.rs
- Ownership units:
1. Capability: Extension pairing and persistence ownership; Gizmo ID: rust-action-ownership-extension-pairing; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing core and host behaviors preserved with complete consumer migration and hosted ownership enforcement
- Public or cross-module interfaces: Core free operations become associated methods; public WASM exports and wire contracts remain unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Extension pairing and persistence domain ownership; Acceptance evidence: Hosted Rust and host behavior tests plus Dylint and exact-head review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-extension-pairing; Gizmo name: Extension pairing ownership; Predecessor Gizmo ID: None; Extension pairing and persistence domain ownership; Estimated authored changed lines: 900; Acceptance evidence: Hosted Rust and host behavior tests plus Dylint and exact-head review

## Initial plan

1. Move domain operations and fixture helpers to meaningful existing owners.
2. Update all consumers, remove free-function exports, and enable module enforcement.
3. Obtain hosted validation and security review, resolve findings, and squash merge.
4. Record completed scope and continue the remaining package inventory.

## Completion evidence

- No unowned authored operations remain in the migrated module scopes.
- Existing tests retain behavior and hosted checks pass.
- Public WASM and serialization contracts remain unchanged.
- Exact-head readiness, squash merge, and Workbench completion are verified.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
