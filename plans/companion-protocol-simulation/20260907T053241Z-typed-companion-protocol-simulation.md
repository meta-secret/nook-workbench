---
title: Typed companion protocol simulation
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/typed-companion-protocol-simulation.md
started_at: 2026-09-07T05:32:41Z
agent: codex
gizmo_id: companion-protocol-simulation
---

# Task plan

## Interpreted request

Create a coherent testing and production boundary for website-extension
interoperation. Portable protocol behavior must be implemented as typed Rust
operations that real website and extension objects can call directly in fast
tests. Browser APIs must become interchangeable transport implementations
rather than participants in application behavior.

## Requirements

- Move selected pairing, discovery, unlock, handoff, and encrypted event-log
  protocol types and admission from TypeScript to Rust-generated contracts.
- Preserve existing cryptographic, application-capability, origin, device,
  nonce, vault, revocation, storage-isolation, and fail-closed boundaries.
- Provide deterministic direct composition using real domain and WASM objects
  plus in-memory infrastructure implementations.
- Use no application-layer mocks; retain only faithful alternate
  implementations of external infrastructure boundaries.
- Keep TypeScript limited to browser metadata acquisition, transport, and
  browser lifecycle actions.
- Deliver behavior-focused Rust tests, generated-WASM TypeScript tests, focused
  browser adapter coverage, Cortex architecture, security review, exact-head
  hosted validation, readiness, merge, and Workbench completion.

## Constraints and exclusions

- Production still uses Chrome and window messaging across isolated origins.
- Separate WASM memories exchange generated structural DTOs or canonical bytes,
  never wasm-bindgen object handles.
- Simulation-only constructors and data do not ship in production artifacts or
  expose plaintext secret material.
- Do not introduce compatibility paths, generic recovery machinery, a general
  dependency-injection framework, or new scheduled automation.
- Preserve unrelated code and keep authored additions below the one-PR limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-protocol-simulation
- Estimated authored changed lines: 1850
- Owning modules, packages, or layers: companion-core protocol domain, companion and vault WASM bindings, web shared extension contracts, extension browser adapters, focused tests, and Cortex architecture
- Ownership units:
1. Capability: Rust protocol and real-instance simulation; Gizmo ID: companion-protocol-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused native Rust and generated-WASM behavior tests prove typed direct composition and fail-closed admission
2. Capability: Browser transport consumers; Gizmo ID: companion-protocol-simulation; Functional owner: Web development; Expertise provider: Development core; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-core/src/lib.rs, nook-app/nook-platform/nook-companion-wasm/src/lib.rs, nook-app/nook-platform/nook-wasm/src/public_api/companion_protocol.rs; Expertise allowed test paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/lib.rs, nook-app/nook-platform/nook-wasm/src/public_api/companion_protocol.rs; Expertise forbidden paths: nook-app/nook-web/nook-web-shared/src, nook-app/nook-web/nook-web-extension/src; Expertise consumer interfaces: generated companion protocol request, response, admission, and direct simulation APIs; Expertise acceptance evidence: Rust and generated ABI tests compile and reject malformed or mismatched inputs; Capability acceptance evidence: web adapters contain browser transport only and focused tests compose generated contracts through in-memory transport
3. Capability: Security acceptance; Gizmo ID: companion-protocol-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head review confirms secret, sender, nonce, capability, vault, revocation, and fail-closed boundaries
4. Capability: Architecture authority; Gizmo ID: companion-protocol-simulation; Functional owner: AI; Expertise provider: Development core; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/lib.rs, nook-app/nook-platform/nook-wasm/src/public_api/companion_protocol.rs; Expertise allowed test paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/lib.rs, nook-app/nook-platform/nook-wasm/src/public_api/companion_protocol.rs; Expertise forbidden paths: .cortex; Expertise consumer interfaces: implemented typed protocol and simulation contracts; Expertise acceptance evidence: implementation paths and focused evidence returned before Cortex authoring; Capability acceptance evidence: Cortex records ownership, direct composition, simulation implementations, generated DTO rules, and retained browser adapter boundary
5. Capability: Shared delivery; Gizmo ID: companion-protocol-simulation; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: one exact-head pull request passes review, hosted validation, readiness, squash merge, remote verification, and Workbench completion
- Public or cross-module interfaces: Rust-generated companion protocol request and result DTOs; direct protocol endpoint methods; thin browser transport interface
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1850
- Current PR slice and acceptance evidence: Deliver typed Rust-owned companion protocol composition and migrate selected browser consumers; Acceptance evidence: focused Rust and generated-WASM tests, web adapter tests, source SECURITY review, Cortex validation, exact-head hosted validation, readiness, and squash merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-protocol-simulation; Gizmo name: Typed companion protocol simulation; Predecessor Gizmo ID: None; Deliver typed Rust-owned companion protocol composition and migrate selected browser consumers; Estimated authored changed lines: 1850; Acceptance evidence: focused Rust and generated-WASM tests, web adapter tests, source SECURITY review, Cortex validation, exact-head hosted validation, readiness, and squash merge

## Initial plan

1. Inventory the selected existing request and response paths and preserve their
   security and error-ordering behavior.
2. Implement canonical Rust protocol owners, direct endpoint composition, and
   faithful in-memory infrastructure with focused native tests.
3. Export structural generated WASM contracts and prove cross-boundary use from
   TypeScript without browser infrastructure.
4. Migrate browser consumers to thin transports and remove superseded authored
   TypeScript domain schema and callback-mock behavioral tests.
5. Record the implemented architecture, obtain security review, and complete
   exact-head delivery.

## Completion evidence

- Behavior-focused native Rust and generated-WASM tests pass.
- Direct TypeScript composition uses real generated endpoints and in-memory
  infrastructure implementations.
- Focused browser tests cover only external transport metadata and lifecycle.
- Security and Cortex checks pass on the exact pull-request head.
- The pull request is ready, squash-merged, remotely verified, and linked from
  the completed Workbench records.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.

