---
title: Type password envelope actions
authority: rust-action-ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-password-envelope-actions
created_at: 2026-09-07T10:54:31Z
updated_at: 2026-09-07T11:42:00Z
source_issues: []
related_prs: [1513]
dependencies:
  - issues/rust-action-ownership/multi-device-join-ownership.md
---

# Type password envelope actions

## Context

Password wrapping, labelled entry creation, password resolution, and key rewrapping still cross the auth2 boundary as free operations. These actions carry vault keys, password material, envelope state, KDF parameters, and security-epoch replacement state through one sensitive graph and need consuming owners with private state.

## Outcome

Borrowed action owners issue a labelled password entry, attach a password envelope, resolve keys from an envelope or entry, and rewrap a current envelope to fresh vault keys. Existing wire versions, scrypt work factors, age envelopes, zeroization, validation/error order, and public WASM method signatures remain unchanged.

## Scope

Final delivery was rebased onto main `42109a86b35b40f9579d6d633d43b2535be0ca8b` and merged as PR #1513 (`815622718542f23b137de833816ea7ac38669087`):

- `nook-app/nook-platform/nook-auth2/src/auth/password_envelope.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/auth/password_envelope.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_recovery_options.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/password.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api.rs`

Migrate the public action operations `create_password_entry`, `create_password_entry_with_work_factor`, `attach_password_envelope`, `attach_password_envelope_with_work_factor`, `resolve_keys_from_entry`, `resolve_keys_from_password`, and `rewrap_password_envelope`. The final delivery also moved password policy queries and private age helpers under owned types. Final authored additions: 558.

## Acceptance criteria

- [x] Password envelope version handling, scrypt parameters, age recipient wrapping, zeroization, and key parsing remain exact.
- [x] Entry issuance, envelope attachment, envelope/entry resolution, and rewrap become private-state consuming owners.
- [x] Legacy/current envelope schemas and public WASM signatures remain unchanged.
- [x] Existing password, vault-format, recovery, and security-epoch tests remain and use the owned actions.
- [x] Verification behavior remains fail-closed without exposing key material or password plaintext.
- [x] No unrelated vault serialization, recovery, cryptographic, or UI behavior changes.
- [x] Scoped format/static/size gates, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve all cryptographic boundaries, zeroization, persisted payloads, public WASM signatures, and existing error ordering. Password policy predicates and low-level private age helpers were included in this scope and moved under `PasswordPolicy` and `PasswordEnvelope` owners so the activated lint has no authored free-function bypass.

## Progress

Fresh-main inventory after PR #1511 found no open-PR overlap with the password envelope callers. The scope stayed limited to the auth2 password action module and its direct core/WASM consumers. A first hosted Dylint pass identified the test fixture as a remaining free function; it was moved into a test-only owner before final validation.

## Completion

PR #1513 merged successfully as `815622718542f23b137de833816ea7ac38669087`.

- Final head: `a6ff8799213fe4b6fd863a9590a640e69f871109`
- Final base: `42109a86b35b40f9579d6d633d43b2535be0ca8b`
- Hosted PR run: `34116541711`
- Repository policy: `34116516360`
- Remote Loom: `34117669451`
- Preview: `https://pr-1513.nokey-sh.pages.dev`
- Security exact-head review passed with no P1/P2 findings.
- `task pr:ready PR=1513` returned `ready: true` immediately before merge.
- No local product builds or tests were run.
