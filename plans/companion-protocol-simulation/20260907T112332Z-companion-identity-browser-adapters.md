---
title: Companion identity browser adapters
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-identity-browser-adapters.md
started_at: 2026-09-07T11:23:32Z
agent: codex
gizmo_id: companion-identity-browser-adapters
---

# Task plan

## Interpreted request

Build the third sequential slice after the merged framework and composition
tests. Migrate production companion identity delivery so browser channels carry
generated Rust values and no longer own portable protocol behavior.

## Requirements

- Use the production Rust endpoints and generated DTOs proven by PR #1508.
- Treat every Chrome-delivered value as untrusted until Rust admission.
- Keep paired-vault discovery, correlation, authorization, sealing, replay,
  and website completion meaning in Rust.
- Retain only browser sender/origin checks, runtime addressing, timeouts,
  service-worker startup, and offscreen lifecycle in TypeScript.
- Preserve observable production behavior and fail-closed outcomes.
- Add focused transport-adapter tests without application mocks.

## Constraints and exclusions

- Do not recreate generated DTOs or portable validators in TypeScript.
- Do not introduce a dependency-injection or callback-mock framework.
- Do not weaken vault, app-key, nonce, sender, origin, or secret boundaries.
- Do not migrate pairing approval, interactive unlock, or event-log protocols
  in this pull request.
- Do not expand or reduce broad browser E2E coverage in this slice.
- Keep authored additions below 2,000 lines; simplify ownership before any
  further split.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-identity-browser-adapters
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: shared website extension transport, extension service-worker identity routing, offscreen manager bridge, generated companion and vault WASM interfaces, focused web tests
- Ownership units:
1. Capability: Website typed transport; Gizmo ID: companion-identity-browser-adapters; Functional owner: Web development; Expertise provider: Development core; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/companion_protocol.rs, nook-app/nook-platform/nook-wasm/src/manager/companion_protocol.rs; Expertise allowed test paths: matching Rust companion protocol test modules; Expertise forbidden paths: nook-app/nook-web; Expertise consumer interfaces: generated discovery, status, handoff request, and response DTOs plus Rust admission; Expertise acceptance evidence: generated interface ownership remains Rust-derived; Capability acceptance evidence: website adapter transports generated DTOs and manager begin/finish owns portable state
2. Capability: Extension typed routing; Gizmo ID: companion-identity-browser-adapters; Functional owner: Web development; Expertise provider: Development core; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs, nook-app/nook-platform/nook-companion-wasm/src/companion_protocol.rs, nook-app/nook-platform/nook-wasm/src/manager/companion_protocol.rs; Expertise allowed test paths: matching Rust companion protocol test modules; Expertise forbidden paths: nook-app/nook-web; Expertise consumer interfaces: generated extension protocol and manager endpoint; Expertise acceptance evidence: authorization and sealing stay one Rust operation; Capability acceptance evidence: service-worker/offscreen adapters contain only Chrome delivery and lifecycle responsibilities
3. Capability: Security acceptance; Gizmo ID: companion-identity-browser-adapters; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head review confirms untrusted browser input reaches Rust admission and sender/origin/vault/app-key/nonce boundaries remain fail closed
4. Capability: Shared delivery; Gizmo ID: companion-identity-browser-adapters; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hosted validation, readiness, squash merge, remote verification, and Workbench closeout complete before the next protocol-family PR
- Public or cross-module interfaces: generated companion discovery/status/handoff DTOs, companion endpoint methods, and thin browser message envelopes
- Delivery shape: One PR in a sequential mission
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Migrate paired identity discovery and handoff browser adapters; Acceptance evidence: removed handwritten selected-flow schemas/validators, focused adapter tests, Security review, hosted Rust/WASM/web validation, readiness, and merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-identity-browser-adapters; Gizmo name: Companion identity browser adapters; Predecessor Gizmo ID: companion-protocol-composition-tests; Migrate production discovery and handoff delivery to generated Rust types and admission; Estimated authored changed lines: 1200; Acceptance evidence: focused adapter tests, Security review, hosted validation, readiness, and squash merge

## Initial plan

1. Compare current production identity routing with the merged Rust endpoints
   and the paused pre-framework adapter experiment.
2. Define the narrow generated message-envelope seam required by Chrome
   without adding portable TypeScript schema.
3. Migrate website discovery/begin/finish and extension discovery/authorize/
   seal routing to generated DTOs.
4. Remove superseded TypeScript protocol decisions and update focused adapter
   tests and architecture documentation.
5. Obtain Security acceptance and complete exact-head hosted delivery before
   creating the next workflow-migration issue.

## Completion evidence

- Production Chrome delivery carries generated Rust DTOs for the selected flow.
- Rust endpoints perform admission, correlation, authorization, sealing, and
  completion through the same operations exercised by direct composition.
- Focused web tests prove transport behavior without browser-independent mocks.
- Security and all applicable hosted checks pass on the exact head.
- The pull request is squash-merged and linked from completed Workbench records.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
