---
title: Companion protocol composition tests
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-protocol-composition-tests.md
started_at: 2026-09-07T09:03:43Z
agent: codex
gizmo_id: companion-protocol-composition-tests
---

# Task plan

## Interpreted request

Build the second sequential slice after the merged simulation framework. This
pull request adds broad direct Rust and independent dual-WASM composition tests
without changing production browser adapters.

## Requirements

- Exercise concrete production protocol endpoints and manager objects.
- Keep browser-independent validation, lifecycle, and failure meaning in Rust.
- Provide deterministic scenarios without Chrome, window messaging, or remote
  storage.
- Use faithful direct-delivery or in-memory implementations only at external
  infrastructure seams.
- Instantiate the two generated WASM packages independently in TypeScript and
  exchange structural DTOs or canonical bytes.
- Cover success and fail-closed protocol transitions, including replay and
  secret cleanup.

## Constraints and exclusions

- Do not introduce application mocks, callback stubs, or a general dependency
  injection framework.
- Do not migrate production web adapters in this pull request.
- Do not expand pairing, unlock, or event-log production schema yet.
- Do not weaken sender, origin, nonce, app-key, vault, or secret boundaries.
- Keep authored additions below 2,000 lines.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-protocol-composition-tests
- Estimated authored changed lines: 1400
- Owning modules, packages, or layers: companion protocol Rust tests, WASM bridge test exports where required, and generated-package TypeScript tests
- Ownership units:
1. Capability: Native real-instance scenarios; Gizmo ID: companion-protocol-composition-tests; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused native scenarios cover success, malformed input, expiry, mismatch, replay, revoked access, sealing failure, and state cleanup through production endpoints
2. Capability: Independent generated-WASM composition; Gizmo ID: companion-protocol-composition-tests; Functional owner: Web development; Expertise provider: Development core; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/companion_protocol.rs, nook-app/nook-platform/nook-wasm/src/manager/companion_protocol.rs; Expertise allowed test paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/companion_protocol.rs, nook-app/nook-platform/nook-wasm/src/manager/companion_protocol.rs; Expertise forbidden paths: nook-app/nook-web; Expertise consumer interfaces: generated structural DTOs and production companion endpoint methods; Expertise acceptance evidence: exact generated declarations and direct Rust scenario semantics are supplied before TypeScript tests; Capability acceptance evidence: Node tests load both generated packages and move structural values between independent WASM memories without browser APIs
3. Capability: Security acceptance; Gizmo ID: companion-protocol-composition-tests; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head review confirms tests do not expose secrets, bypass authorization, or make the simulation stricter than production
4. Capability: Shared delivery; Gizmo ID: companion-protocol-composition-tests; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: one exact-head pull request passes hosted validation, readiness, squash merge, remote verification, and Workbench completion
- Public or cross-module interfaces: existing Rust-generated companion DTOs and production endpoint methods; no new browser-facing product behavior
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1400
- Current PR slice and acceptance evidence: Add native and independent dual-WASM protocol composition tests; Acceptance evidence: focused scenario results, Security review, hosted Rust/WASM/web validation, readiness, and squash merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-protocol-composition-tests; Gizmo name: Companion protocol composition tests; Predecessor Gizmo ID: None; Add native and independent dual-WASM protocol composition tests; Estimated authored changed lines: 1400; Acceptance evidence: focused scenario results, Security review, hosted Rust/WASM/web validation, readiness, and squash merge

## Initial plan

1. Inventory the existing native and generated-package test harnesses.
2. Add reusable real-instance scenario construction at the narrowest owner.
3. Add native failure matrices through production-shared operations.
4. Add independent dual-WASM TypeScript composition tests without browser APIs.
5. Obtain Security acceptance and complete exact-head hosted delivery.

## Completion evidence

- Native tests exercise real protocol and manager objects directly.
- Generated-package Node tests instantiate both WASM artifacts independently.
- No application mocks or external infrastructure are required.
- Security and all applicable hosted checks pass on the exact head.
- The pull request is squash-merged and linked from completed Workbench records.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
