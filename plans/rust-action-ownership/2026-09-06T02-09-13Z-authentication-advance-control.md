---
title: Authentication advance-control checked classification
feature: rust-action-ownership
issue: issues/rust-action-ownership/authentication-advance-control.md
started_at: 2026-09-06T02:09:13Z
agent: codex
gizmo_id: rust-action-ownership-authentication-advance-control
---

# Task plan

## Interpreted request

Continue the project-wide Rust migration with a substantial companion authentication boundary that makes destination admission and advance-control classification type-directed.

## Requirements

- Add a private `CheckedAuthenticationControl` that borrows the original observation and carries canonical path/route evidence produced after existing destination validation.
- Make the checked state the only input to advance policy and consume it for the final decision.
- Move route/form classifiers onto borrowed domain owners and control/provider-label classifiers onto a borrowed control owner.
- Preserve every current match set, normalization rule, veto precedence, semantic-submit count, provider boundary, and OTP-context decision.
- Preserve public wrappers and DTO signatures so consumers outside the exact scope remain unchanged.
- Enable complete ownership enforcement and invalid-suppression rejection in the four complete child modules.
- Retain existing tests and add focused checked-state and classification matrices.

## Constraints and exclusions

- Exact scope: `page_field_classification/form_identity.rs`, `page_field_classification/control_identity.rs`, `page_field_classification/authentication_advance_control.rs`, `page_field_classification/authentication_advance_control/policy.rs`, and `page_field_classification.rs` under `nook-app/nook-platform/nook-companion-core/src`.
- Target 1,050–1,400 authored additions; hard ceiling 1,700 and every final file below 1,000 lines.
- The checked state proves classification admission only; it is not a browser-freshness or actuation capability.
- Pure predicate owners remain reusable borrowed observations rather than artificial typestate.
- No destination canonicalizer/public reexport, sibling input-role/passkey/OTP migration, browser execution, WASM ABI, TypeScript, provider-policy, dependency, schema, logging, fallback, retry, or recovery change.
- No file overlap with live PRs #1420, #1417, or #1210.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-authentication-advance-control
- Estimated authored changed lines: 1400
- Owning modules, packages, or layers: companion-core authentication advance-control classification
- Ownership units:
1. Capability: Borrowed route, form, and control identity classifiers; Gizmo ID: rust-action-ownership-authentication-advance-control; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/page_field_classification/form_identity.rs,nook-app/nook-platform/nook-companion-core/src/page_field_classification/control_identity.rs; Expertise allowed test paths: nook-app/nook-platform/nook-companion-core/src/page_field_classification/form_identity.rs,nook-app/nook-platform/nook-companion-core/src/page_field_classification/control_identity.rs; Expertise forbidden paths: nook-app/nook-platform/nook-companion-core/src/authentication_workflow; Expertise consumer interfaces: Existing classifier wrappers remain source-compatible; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted native behavior and Dylint checks pass
2. Capability: Checked authentication-control admission and consuming policy decision; Gizmo ID: rust-action-ownership-authentication-advance-control; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control.rs,nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control/policy.rs,nook-app/nook-platform/nook-companion-core/src/page_field_classification.rs; Expertise allowed test paths: nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control.rs,nook-app/nook-platform/nook-companion-core/src/page_field_classification.rs; Expertise forbidden paths: nook-app/nook-platform/nook-companion-core/src/authentication_workflow; Expertise consumer interfaces: Existing public classification functions and DTOs remain unchanged; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted behavior, compile-fail and Dylint checks pass
- Public or cross-module interfaces: Existing public DTO and wrapper signatures remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1400
- Current PR slice and acceptance evidence: Checked authentication advance-control classification and complete helper ownership; Acceptance evidence: Remote Loom, hosted Rust behavior and Dylint, exact-head source SECURITY, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-authentication-advance-control; Gizmo name: Authentication advance-control checked classification; Predecessor Gizmo ID: None; Checked classification, route/form/control owners, and direct consumer adaptation; Estimated authored changed lines: 1400; Acceptance evidence: Remote Loom, hosted Rust behavior and Dylint, exact-head source SECURITY, and readiness

## Initial plan

1. Implement the borrowed classifier owners and private checked state within the five-file hard budget.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings within scope, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced checked classification, preserved authentication policy behavior, complete child-module ownership enforcement, hosted behavior and Dylint gates, remote Loom, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
