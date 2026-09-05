---
title: Enrollment envelope admission ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/enrollment-admission.md
started_at: 2026-09-05T04:02:42.825Z
agent: codex
gizmo_id: rust-action-ownership-enrollment-admission
---

# Task plan

## Interpreted request

Continue the authorized project migration by binding structurally checked encrypted enrollment input to a private consuming decryption owner.

## Requirements

- Add private child code/admission.rs with CheckedEnrollmentEnvelope, private envelope field, parse, immutable envelope observation and consuming decrypt.
- Relocate existing parsing, structural validation and decrypt logic without changing error precedence or cryptography.
- Remove obsolete free reexports and migrate peeks, direct WASM delegate and existing inline tests.
- Activate ownership deny and invalid-suppression forbid in the complete new child. Add positive and compile-fail ownership controls plus focused validation-order tests.

## Constraints and exclusions

- Begin after OAuth origin ownership integration.
- Preserve structural admission before password rejection, existing base64/IV/KDF/AEAD/provider checks, exact error mapping, provider generics, wire format and WASM signature.
- This local capability proves structural admission only: no authenticated outer metadata, expiry, replay protection or end-to-end provider/vault authorization claim. Existing runtime checks remain unchanged.
- No new credentials clones, logs, schema, cryptography, dependencies, fallback, recovery, storage or TypeScript changes. Existing decrypted DTO remains a report.
- No public construction, Clone or Deserialize on the checked owner; immutable metadata observation cannot create checked authority. Re-parsing remains possible.
- No local product compilation or tests. Keep inline Rust tests and source files within1000lines.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-enrollment-admission
- Estimated authored changed lines: 550
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth/enrollment/code/admission.rs, nook-app/nook-platform/nook-auth2/src/auth/enrollment/code.rs, nook-app/nook-platform/nook-auth2/src/auth/enrollment.rs, nook-app/nook-platform/nook-auth2/src/lib.rs, nook-app/nook-platform/nook-core/src/auth/enrollment.rs, nook-app/nook-platform/nook-core/src/lib.rs, nook-app/nook-platform/nook-wasm/src/public_api/enrollment_entry.rs
- Ownership units:
1. Capability: Enrollment envelope admission ownership; Gizmo ID: rust-action-ownership-enrollment-admission; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Complete checked child ownership, consuming decryption, unchanged cryptography and public WASM behavior, hosted domain and compile-fail tests
- Public or cross-module interfaces: Free parse and decrypt functions become CheckedEnrollmentEnvelope methods; decrypted DTO and public WASM signature are unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 550
- Current PR slice and acceptance evidence: Enrollment envelope admission ownership; Acceptance evidence: Hosted domain, WASM, compile-fail controls, Dylint and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-enrollment-admission; Gizmo name: Enrollment envelope admission ownership; Predecessor Gizmo ID: None; Enrollment envelope admission ownership; Estimated authored changed lines: 550; Acceptance evidence: Hosted domain, WASM, compile-fail controls, Dylint and source SECURITY

## Initial plan

1. Start from current main after the preceding OAuth scope.
2. Implement the seven-file admission/decryption ownership change and bounded tests.
3. Format, push and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge and publish Workbench completion.

## Completion evidence

Exact encrypted-input ownership and unchanged validation/decryption behavior; compile-fail and positive controls; direct consumers migrated; hosted domain and WASM tests, source SECURITY, readiness, squash merge and Workbench records verified.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output or machine-local context.
