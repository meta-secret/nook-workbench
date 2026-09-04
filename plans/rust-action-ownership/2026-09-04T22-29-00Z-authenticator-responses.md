---
title: Authenticator response decoder ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/authenticator-responses.md
started_at: 2026-09-04T22:29:00Z
agent: codex
gizmo_id: rust-action-ownership-authenticator-responses
---

# Task plan

## Interpreted request

Continue the authorized project-wide migration by attaching the authenticator response decoders to meaningful existing domain types and enabling ownership enforcement in their complete core modules.

## Requirements

- Move seven response decoders to their response types as from_wire constructors.
- Own account decoding on WebsiteAuthenticatorOption and code validation on AuthenticatorCodeSecret as private methods.
- Own the three core fixture helpers and the code bridge error-formatting fixture helper.
- Remove obsolete core free-function reexports and update seven WASM delegates.
- Enable unowned_function deny and invalid_unowned_function_suppression forbid in all six core response modules.
- Preserve all 16 core tests and the existing code-expiry WASM bridge test, plus runtime-message-adapter coverage.

## Constraints and exclusions

- Pure response interpretation does not gain artificial typestate or verified ceremony claims.
- Preserve wire forms, public WASM signatures, validation order, unknown fields, contradictory success handling, response discriminators, and errors.
- Preserve six-through-eight-digit code acceptance and the distinct code and picker expiry rules.
- Preserve secret ownership and zeroization; add no secret clone.
- Remove fixture boolean parameters with explicit contradictory data, and avoid unreachable or panic shortcuts.
- Existing wire success booleans, raw picker expiry, and flat WASM exports remain later migration scope.
- No new dependency, fallback, recovery behavior, TypeScript change, or local product build/test.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-authenticator-responses
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: nook-app/nook-platform/nook-companion-core/src/authenticator_preview_response.rs, nook-app/nook-platform/nook-companion-core/src/authenticator_options_response.rs, nook-app/nook-platform/nook-companion-core/src/authenticator_enrollment_response.rs, nook-app/nook-platform/nook-companion-core/src/authenticator_backup_attach_response.rs, nook-app/nook-platform/nook-companion-core/src/authenticator_code_response.rs, nook-app/nook-platform/nook-companion-core/src/authenticator_picker_open_response.rs, nook-app/nook-platform/nook-companion-core/src/lib.rs, nook-app/nook-platform/nook-companion-wasm/src/response_decoding.rs, nook-app/nook-platform/nook-companion-wasm/src/authenticator_code_response.rs
- Ownership units:
1. Capability: Authenticator response ownership; Gizmo ID: rust-action-ownership-authenticator-responses; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Complete module ownership enforcement with preserved decoder and WASM behavior and all direct consumers migrated
- Public or cross-module interfaces: Core decoder free functions become existing response constructors; public WASM exports and serialized contracts remain unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Authenticator response ownership; Acceptance evidence: Hosted core and WASM behavior, runtime message adapter tests, Dylint, and exact-head review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-authenticator-responses; Gizmo name: Authenticator response ownership; Predecessor Gizmo ID: None; Authenticator response ownership; Estimated authored changed lines: 1200; Acceptance evidence: Hosted core and WASM behavior, runtime message adapter tests, Dylint, and exact-head review

## Initial plan

1. Move response operations and fixture helpers to existing owners and migrate direct consumers.
2. Compare decoder branches, inspect receiver bindings, and format the scoped files.
3. Obtain hosted validation and review, repair accepted defects, and squash merge after readiness.
4. Publish completion evidence and continue remaining project domains.

## Completion evidence

- Complete six-module ownership enforcement and all consumer updates are verified.
- Existing tests retain every documented validation boundary and pass hosted checks.
- No public WASM or serialization behavior changes.
- Exact-head readiness, squash merge, and Workbench completion are verified.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
