---
title: Type device-protection registration and completion
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-device-protection-registration
created_at: 2026-09-06T06:55:00Z
updated_at: 2026-09-06T07:32:07Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1432
depends_on:
  - issues/rust-action-ownership/passkey-authenticator.md
---

# Type device-protection registration and completion

## Context

The Rust action-ownership migration continues through device protection, where registration, PRF continuation, unlock derivation, record conversion, and browser persistence are split across 11 production free operations. The current `NeedsAssertion` continuation lets callers supply the original user handle and protection mode again when completing the operation.

## Outcome

Device-protection registration uses a private continuation that retains credential, user-handle, PRF-input, and protection-mode evidence until consuming completion. Derivation, recovery, assertion-request, unlock, and record operations live on meaningful owners while preserving the existing browser contract.

## Scope

- One cohesive fourteen-file auth/core/WASM boundary with a 1,700 authored-addition ceiling.
- Move the 11 production free operations onto registration, continuation, protected-record, derivation, unlock, and request owners.
- Add the simplest private non-Clone awaiting-assertion state needed to retain setup and consume PRF output.
- Adapt direct Rust and WASM consumers without changing public DTOs, exported signatures, persistence order, or browser observations.
- Keep `protected_identity.rs` as a separate PIN/encryption/serialization boundary; migrate only its existing test consumers.
- Exclude cryptographic changes, stronger browser-authentication claims, recovery fallbacks, schema/storage migrations, TypeScript, and unrelated helpers.

## Acceptance criteria

- [x] Standard deterministic derivation and AntiHacker random wrapped-identity behavior remain unchanged.
- [x] Exact HKDF contexts, salts, typed-byte validation, version checks, error precedence, stored-device-ID comparison, serialization, redaction, and zeroization remain unchanged.
- [x] Registration retains credential ID, user handle, PRF input, and protection mode through the awaiting-assertion continuation.
- [x] The continuation exposes the existing assertion request and consumes itself with PRF output; incomplete or repeated completion is impossible through its private state.
- [x] Existing missing-registration-PRF assertion behavior remains unchanged and makes no verified browser-ceremony claim.
- [x] Existing record/request/material owners own derivation, recovery, assertion-request, unlock, and conversion actions.
- [x] WASM browser call order, observations, persistence, cleanup, failure behavior, and direct completion ABI remain unchanged.
- [x] The new complete registration and unlock children deny homeless functions and reject invalid suppression; the parent has no remaining production operations, while `protected_identity.rs` remains outside this enforcement slice because parent denial would inherit into its excluded helpers.
- [x] Colocated tests retain all existing behavior coverage and add continuation retention, equivalent branches, stored-identity rejection, dropped-incomplete-state, privacy, construction, and consuming-state controls.
- [x] Remote Loom, hosted PR checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

PR #1432 merged the fourteen-file device-protection ownership boundary as `8980f2fa6ec04ca943453c3d61782672c2be9fdd` after exact-head Remote Loom run `34018716176`, hosted PR run `34018476059`, exact-head SECURITY PASS, readiness, and squash merge. The first Remote Loom attempt timed out in the unrelated semantic-adapter test; the exact same head passed on retry. The lint-boundary amendment at `2026-09-06T07-05-00Z-device-protection-lint-boundary.md` remains the governing scope decision: parent denial is deferred because it would inherit into excluded `protected_identity.rs` helpers, while the parent has no production operations and the new registration/unlock children enforce ownership.


## Findings and decisions

The new capability types bind local setup data only. They must not imply that Rust verified the browser passkey ceremony or authenticated the PRF output beyond the existing checks.

## References

- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/registration.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/unlock.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/protected_identity.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/mod.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/auth/device_key_protection.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format/vault_yaml.rs`
- `nook-app/nook-platform/nook-wasm/src/passkey_browser/options.rs`
- `nook-app/nook-platform/nook-wasm/src/types/access.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/device_access.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/indexed_db/device_identity.rs`
