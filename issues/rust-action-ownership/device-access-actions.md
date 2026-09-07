---
title: Own device access profile and grant actions
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-09-07T18:20:00Z
updated_at: 2026-09-07T18:20:00Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/vault-meta-projection-actions.md
---

# Own device access profile and grant actions

## Context

The portable device-access boundary still exposes homeless operations for vault-linked identity selection, app-grant classification, profile decoding, protection and identity-state classification, safe WebAuthn identifiers, and provider/name normalization. These operations carry directory, vault, identity, profile, credential, and validation state as detached arguments, so callers can invoke policy without an owning domain action.

## Outcome

Device-access domain owners carry the selected directory/vault evidence, identity grant evidence, profile decoding state, browser credential bytes, and normalized labels through simple consuming or associated transitions. Existing device-access semantics, serialized profile data, safe identifier format, errors, and public WASM behavior remain unchanged.

## Scope

Fresh-main base `456f149837aa32854835eaa68a3010020be65ddc7`:

- `nook-app/nook-platform/nook-core/src/vault/device_access.rs`
- direct core, WASM, storage, manager, and migration callers of the nine migrated operations.

Migrate `identities_linked_to_vault`, `classify_identity_vault_app_grant`, `decode_device_access_profile`, `classify_device_access_protection`, `classify_device_access_identity_state`, `passkey_credential_identifier`, `passkey_user_handle_identifier`, `normalize_device_access_provider_label`, and `normalize_device_access_passkey_name`. Keep the existing `DeviceAccessProfile` mutation methods as owned methods. Hard ceiling: 1,500 authored additions and user target below 2,000.

## Acceptance criteria

- [ ] Vault-linked identity selection and app-grant classification retain DEK ownership, membership, dual-envelope, and revocation semantics.
- [ ] Profile decoding preserves current/future/recoverable version behavior, malformed-input handling, credential-fingerprint requirements, and serialized shape.
- [ ] Protection and identity-state classification preserve all existing variants and precedence.
- [ ] Safe credential and user-handle identifiers retain stable non-secret hashing and exact prefixes.
- [ ] Provider-label and passkey-name normalization retain trimming, control-character, length, and error behavior.
- [ ] Direct core, WASM, storage, manager, and migration callers use typed owners; old free exports are removed for this scope.
- [ ] Existing behavior tests remain and focused owner construction, nonmutation, and consuming-action coverage is colocated with the migrated implementation.
- [ ] Ownership denial and invalid-suppression prohibition cover only the completed device-access child; no blanket suppression is added.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No device-access schema, storage, cryptographic, authorization, browser ABI, or error-contract changes. Do not add generic session infrastructure, compatibility free-function wrappers, fallback, or recovery exceptions. No local Rust/WASM/product builds or tests.

## Progress

The fresh-main inventory after PR #1532 found nine related core device-access operations and their bounded direct callers. The slice stays focused on portable domain classification and normalization; browser ceremony and persistence orchestration remain adapter concerns.
