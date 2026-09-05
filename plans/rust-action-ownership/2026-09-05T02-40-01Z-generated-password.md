---
title: Generated-password response ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/generated-password.md
started_at: 2026-09-05T02:40:01.149Z
agent: codex
gizmo_id: rust-action-ownership-generated-password
---

# Task plan

## Interpreted request

Continue the authorized project migration by giving generated-password response decoding its existing domain owner while preserving secret lifetime and wire behavior.

## Requirements

- Move decode_generated_password_response to GeneratedPasswordResponse::from_wire.
- Remove the obsolete core reexport and update the direct WASM delegate without changing its public signature or error mapping.
- Activate unowned_function deny and invalid_unowned_function_suppression forbid throughout the complete core module.
- Retain both core tests and the existing runtime-message-adapter test; add at most two bounded tests for password byte preservation and numeric discriminator serialization.

## Constraints and exclusions

- Begin after website response PR1361 is integrated, preserving shared exports and adapters.
- Preserve nonempty passwords exactly, including whitespace-only and Unicode. Only rejected reasons use a trimmed nonblank check; return the original reason.
- Preserve Generated=0 and Rejected=1, strict unknown-field rejection, contradictory flags and exact malformed error text.
- Preserve existing secret Zeroize and Drop, with no added Clone or logging. No assertion of JavaScript erasure or freed-memory inspection.
- Report decoding is stateless; do not introduce an artificial typestate or claim generation/fill/save authorization.
- Exclude generation algorithms, entropy, strength, fill authorization, TypeScript, UI, unrelated responses, new dependencies, fallback and recovery behavior.
- Raw wire booleans and flat WASM exports remain explicit later migration work.
- No local product compilation or tests. Inline Rust tests and source-size limits remain mandatory.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-generated-password
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: nook-app/nook-platform/nook-companion-core/src/generated_password_response.rs, nook-app/nook-platform/nook-companion-core/src/lib.rs, nook-app/nook-platform/nook-companion-wasm/src/response_decoding.rs
- Ownership units:
1. Capability: Generated-password response ownership; Gizmo ID: rust-action-ownership-generated-password; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Complete module ownership enforcement, preserved secret and wire behavior, migrated direct consumer and hosted boundary tests
- Public or cross-module interfaces: Core free decoder becomes an associated constructor; public WASM signature and serialized response are unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Generated-password response ownership; Acceptance evidence: Hosted core, WASM, runtime adapter, Dylint and source SECURITY review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-generated-password; Gizmo name: Generated-password response ownership; Predecessor Gizmo ID: None; Generated-password response ownership; Estimated authored changed lines: 180; Acceptance evidence: Hosted core, WASM, runtime adapter, Dylint and source SECURITY review

## Initial plan

1. Start from current main containing website response integration.
2. Implement the three-file ownership change and bounded tests.
3. Format, push and obtain hosted validation and source SECURITY review.
4. Resolve findings, pass readiness, squash merge and publish Workbench completion.

## Completion evidence

Complete module enforcement and all direct consumers verified; secret lifetime and byte-preserving behavior unchanged; hosted tests, source SECURITY, readiness, squash merge and Workbench records verified.

## Safety review

This record contains no raw prompt, transcript, secret, private data, execution output or machine-local context.
