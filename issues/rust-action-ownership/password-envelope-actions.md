---
title: Type password envelope actions
authority: rust-action-ownership
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-password-envelope-actions
created_at: 2026-09-07T10:54:31Z
updated_at: 2026-09-07T10:54:31Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/multi-device-join-ownership.md
---

# Type password envelope actions

## Context

Password wrapping, labelled entry creation, password resolution, and key rewrapping still cross the auth2 boundary as free operations. These actions carry vault keys, password material, envelope state, KDF parameters, and security-epoch replacement state through one sensitive graph and need consuming owners with private state.

## Outcome

Borrowed action owners will issue a labelled password entry, attach a password envelope, resolve keys from an envelope or entry, and rewrap a current envelope to fresh vault keys. Existing wire versions, scrypt work factors, age envelopes, zeroization, validation/error order, and public WASM method signatures remain unchanged.

## Scope

Refresh-main closure at `3c6419d9512b3528a56422eb2ba075aa42ae1f76`:

- `nook-app/nook-platform/nook-auth2/src/auth/password_envelope.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/auth/password_envelope.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_recovery_options.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/password.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`

Migrate the public action operations `create_password_entry`, `create_password_entry_with_work_factor`, `attach_password_envelope`, `attach_password_envelope_with_work_factor`, `resolve_keys_from_entry`, `resolve_keys_from_password`, and `rewrap_password_envelope`. Hard ceiling: 1,400 authored additions and user target below 2,000.

## Acceptance criteria

- [ ] Password envelope version handling, scrypt parameters, age recipient wrapping, zeroization, and key parsing remain exact.
- [ ] Entry issuance, envelope attachment, envelope/entry resolution, and rewrap become private-state consuming owners.
- [ ] Legacy/current envelope schemas and public WASM signatures remain unchanged.
- [ ] Existing password, vault-format, recovery, and security-epoch tests remain and use the owned actions.
- [ ] Verification behavior remains fail-closed without exposing key material or password plaintext.
- [ ] No unrelated vault serialization, recovery, cryptographic, or UI behavior changes.
- [ ] Scoped format/static/size gates, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve all cryptographic boundaries, zeroization, persisted payloads, public WASM signatures, and existing error ordering. Defer unrelated password policy predicates and low-level private age helpers.

## Progress

Fresh-main inventory after PR #1511 found no open-PR overlap with the password envelope callers. The scope is limited to the auth2 password action module and its direct core/WASM consumers.

## Completion

Pending implementation and delivery.
