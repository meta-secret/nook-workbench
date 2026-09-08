---
title: Own onboarding and recovery actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/onboarding-recovery.md
started_at: 2026-09-08T01:20:00Z
agent: codex
gizmo_id: rust-action-ownership-onboarding-recovery
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with a cohesive onboarding and recovery boundary. Keep genesis operation construction, recovery projection, and device hint formatting attached to the types that carry event, identity, graph, and identifier invariants.

## Requirements

- Move Sentinel genesis operation emission, simple identity roster emission, recovery projection, and device hint formatting onto existing domain owners.
- Migrate core, WASM, and focused tests in the same closure.
- Enforce homeless-function denial in the completed onboarding and recovery modules.
- Keep the complete change below the 1,800-addition ceiling and deliver one cohesive PR.
- Run formatting, diff, Loom, hosted validation, exact-head readiness, merge, and Workbench closeout.

## Constraints and exclusions

Preserve operation ordering, payloads, labels, error ordering, encrypted envelope handling, recovery redaction, DTO shape, and passkey hint strings. Exclude provider I/O, authentication, authorization, persistence, schema, cryptography, fallback, recovery, retry, and generic phase-framework changes. Do not run local product builds or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-onboarding-recovery
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: nook-app/nook-platform/nook-core Sentinel genesis, multi-device identity, and recovery modules; direct core and nook-wasm onboarding/passkey/diagnostic adapters
- Ownership units:
  1. Capability: Genesis event operation construction; Gizmo ID: rust-action-ownership-onboarding-recovery; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Sentinel and simple identity operation order, payloads, enrollment checks, labels, and envelope selection remain unchanged.
  2. Capability: Recovery projection and device identity display policy; Gizmo ID: rust-action-ownership-onboarding-recovery; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Event-graph redaction, revocation/rename handling, sentinel quorum signal, password projection, and passkey hint formatting remain unchanged.
- Public or cross-module interfaces: Existing nook-core genesis/recovery domain types and direct nook-wasm onboarding, passkey, and diagnostics adapters
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Genesis event operation construction and recovery projection/device identity display policy with all direct callers; Acceptance evidence: hosted required checks, remote Loom, readiness, and exact-head deployment pass with current operation payloads and recovery outputs.
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: rust-action-ownership-onboarding-recovery; Gizmo name: Onboarding and recovery ownership; Predecessor Gizmo ID: None; Genesis event operation construction and recovery projection/device identity display policy with all direct callers; Estimated authored changed lines: 1200; Acceptance evidence: hosted required checks, remote Loom, readiness, and exact-head deployment pass with current operation payloads and recovery outputs.

## Initial plan

1. Inventory genesis and recovery declarations and every direct caller from refreshed `main`.
2. Add associated domain actions and focused owner tests without changing values or errors.
3. Remove detached core exports and migrate onboarding, passkey, diagnostics, and test callers.
4. Enable ownership denial and run format, diff, size, and Loom gates.
5. Push one cohesive PR, complete exact-head hosted validation, merge, and publish Workbench closeout.

## Completion evidence

- Final PR head, merge SHA, remote Loom, hosted checks, deployment, readiness, and published Workbench issue, worklog, and statistics.

## Safety review

- This record contains no prompt text, credentials, private information, raw diagnostics, local filesystem paths, or unnecessary infrastructure detail.
