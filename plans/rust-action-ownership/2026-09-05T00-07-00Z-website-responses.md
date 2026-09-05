---
title: Website login and passkey response ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/website-responses.md
started_at: 2026-09-05T00:07:00Z
agent: codex
gizmo_id: rust-action-ownership-website-responses
---

# Task plan

## Interpreted request

Continue the authorized project migration by giving website login options, save responses, and passkey account lists meaningful owners and enforcing ownership across their complete core modules.

## Requirements

- Move nine production operations to existing response types; use consuming match-availability projection where appropriate.
- Remove obsolete core decoder reexports and update six direct WASM delegates.
- Enable unowned_function deny and invalid_unowned_function_suppression forbid in all three core modules.
- Retain seven core tests and existing WASM and host-adapter coverage. Add focused cases for required identifiers, valid empty lists, permitted blank presentation fields, save decision 1, contradictory success flags, and numeric/string serialization.

## Constraints and exclusions

- These types interpret reported responses and gain no artificial typestate or authorization capability.
- Preserve wire forms, all six public WASM signatures, unknown-field rejection, contradictory success handling, error text, and atomic passkey-list rejection.
- Preserve the distinct validation rules: login account IDs and generation are nonblank, presentation fields may be blank; save-offer IDs and vault name are nonblank; passkey credential ID alone must be nonblank after complete deserialization.
- Keep numeric login/passkey discriminators, kebab-case save-response discriminators, and save decisions exactly numeric 0 or 1.
- Raw IDs, wire success booleans, and flat WASM exports remain later migration scope.
- Exclude passkey proposals, picker protocols, authentication-workflow decoding, generated passwords, and origin policy.
- No new dependency, TypeScript change, logging, secret clone, fallback, recovery behavior, or local product build/test.
- Begin implementation only after the authenticator response slice is integrated; preserve its shared exports and adapters.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-website-responses
- Estimated authored changed lines: 800
- Owning modules, packages, or layers: nook-app/nook-platform/nook-companion-core/src/website_login_options_response.rs, nook-app/nook-platform/nook-companion-core/src/website_login_save_offer_response.rs, nook-app/nook-platform/nook-companion-core/src/website_passkey_account_list.rs, nook-app/nook-platform/nook-companion-core/src/lib.rs, nook-app/nook-platform/nook-companion-wasm/src/response_decoding.rs, nook-app/nook-platform/nook-companion-wasm/src/authentication_workflow.rs
- Ownership units:
1. Capability: Website response ownership; Gizmo ID: rust-action-ownership-website-responses; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Complete module ownership enforcement with preserved decoder and WASM behavior and all direct consumers migrated
- Public or cross-module interfaces: Core decoder free functions become existing response constructors; public WASM exports and serialized contracts remain unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 800
- Current PR slice and acceptance evidence: Website response ownership; Acceptance evidence: Hosted core and WASM behavior, runtime message adapter tests, Dylint, and exact-head review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-website-responses; Gizmo name: Website response ownership; Predecessor Gizmo ID: None; Website response ownership; Estimated authored changed lines: 800; Acceptance evidence: Hosted core and WASM behavior, runtime message adapter tests, Dylint, and exact-head review

## Initial plan

1. Start from current main containing the authenticator response merge.
2. Move operations to meaningful owners and migrate every direct consumer.
3. Add focused boundary cases, compare serialization and validation behavior, and format the scope.
4. Obtain hosted validation and review; fix accepted defects, squash merge after readiness, and publish Workbench completion.

## Completion evidence

- Complete three-module ownership enforcement and all direct consumers are verified.
- Existing and added tests protect the distinct validation and serialization boundaries in hosted checks.
- No public WASM signature or serialization behavior changes.
- Exact-head review, readiness, squash merge, and Workbench completion are verified.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
