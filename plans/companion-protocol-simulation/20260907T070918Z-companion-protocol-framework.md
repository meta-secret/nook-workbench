---
title: Companion protocol simulation framework
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/typed-companion-protocol-simulation.md
started_at: 2026-09-07T07:09:18Z
agent: codex
gizmo_id: companion-protocol-simulation
---

# Task plan

## Interpreted request

Deliver the first sequential slice of the companion communication redesign.
This slice establishes typed Rust protocol contracts and direct real-instance
simulation endpoints. It does not migrate browser adapters or build the broad
generated-WASM scenario suite.

## Requirements

- Keep browser-independent discovery and handoff schema, validation, state,
  authorization, and failure outcomes in Rust.
- Let native tests call the same real endpoint and manager operations that
  production WASM exposes.
- Use no application mocks. External facilities may later provide faithful
  in-memory or direct-delivery simulation implementations.
- Generate structural Tsify DTOs for future composition between independent
  WASM memories.
- Preserve one-shot nonce use, discovery correlation, exact app-key and vault
  binding, encrypted secret transfer, and zeroization.
- Record the staged architecture without describing deferred work as complete.

## Constraints and exclusions

- Production Chrome and window adapters remain unchanged in this slice.
- Broad generated-JavaScript ABI scenarios remain a successor slice.
- Pairing, unlock, and event-log protocol expansion remain successor slices.
- No application mock framework, compatibility path, or generic dependency
  injection container is introduced.
- The pull request remains below 2,000 authored additions.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-protocol-simulation
- Estimated authored changed lines: 1500
- Owning modules, packages, or layers: nook-companion-core, nook-companion-wasm, nook-wasm companion endpoint, and development-core Cortex architecture
- Ownership units:
1. Capability: Typed companion protocol and direct simulation framework; Gizmo ID: companion-protocol-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: direct Rust behavior tests use real endpoint and manager objects and fail closed for replay, mismatch, expiry, and capability errors
2. Capability: Security acceptance; Gizmo ID: companion-protocol-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head review confirms request correlation, nonce consumption, vault and app-key binding, encrypted transfer, and zeroization
3. Capability: Architecture authority; Gizmo ID: companion-protocol-simulation; Functional owner: AI; Expertise provider: Development core; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/companion_protocol.rs, nook-app/nook-platform/nook-wasm/src/manager/companion_protocol.rs; Expertise allowed test paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/companion_protocol.rs, nook-app/nook-platform/nook-wasm/src/manager/companion_protocol.rs; Expertise forbidden paths: .cortex; Expertise consumer interfaces: typed companion DTOs and real endpoint composition; Expertise acceptance evidence: implementation and security evidence precede Cortex authoring; Capability acceptance evidence: Cortex records implemented ownership, simulation semantics, structural DTO seam, and successor slice boundaries
4. Capability: Shared delivery; Gizmo ID: companion-protocol-simulation; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: one exact-head pull request passes hosted validation, readiness, squash merge, remote verification, and Workbench completion
- Public or cross-module interfaces: Rust-generated companion discovery and identity-handoff DTOs; direct extension and website endpoint operations
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1500
- Current PR slice and acceptance evidence: Deliver the typed Rust protocol and direct simulation framework; Acceptance evidence: focused Rust and WASM checks, source security review, Cortex validation, exact-head readiness, and squash merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-protocol-simulation; Gizmo name: Companion protocol simulation framework; Predecessor Gizmo ID: None; Deliver the typed Rust protocol and direct simulation framework; Estimated authored changed lines: 1500; Acceptance evidence: focused Rust and WASM checks, source security review, Cortex validation, exact-head readiness, and squash merge

## Initial plan

1. Define canonical Rust protocol DTOs, admission outcomes, and state machines.
2. Compose real extension and website managers through the production endpoint.
3. Add behavior tests for valid handoff, replay, mismatch, expiry, and rollback.
4. Record the implemented architecture and the deferred successor boundaries.
5. Obtain Security acceptance and complete exact-head hosted delivery.

## Completion evidence

- Direct native Rust tests exercise real objects without browser infrastructure.
- WASM bridge checks confirm the structural typed boundary compiles.
- Security review passes the exact head.
- Cortex checks pass and the architecture matches implemented code.
- The pull request is ready, squash-merged, remotely verified, and linked from
  Workbench.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
