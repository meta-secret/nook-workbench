---
title: Type vault epoch cryptography actions
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-epoch-crypto
created_at: 2026-09-07T11:46:14Z
updated_at: 2026-09-07T11:46:14Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/security-epoch-commit-state.md
---

# Type vault epoch cryptography actions

## Context

Security-epoch cryptography still crosses the core boundary through free operations for secret re-encryption, key rotation, member checkpoint hashing, and auth/member metadata rewrapping. These operations carry old and replacement keys, encrypted records, roster state, and replacement metadata through one sensitive action graph.

## Outcome

Borrowed epoch action owners will consume explicit input state to re-encrypt secrets, rotate vault keys, compute member checkpoints, rebuild replacement metadata, and apply the replacement metadata to a vault state. Existing ciphertext formats, zeroization, roster validation, key generation, and error ordering remain unchanged.

## Scope

Fresh-main closure at `815622718542f23b137de833816ea7ac38669087`:

- `nook-app/nook-platform/nook-core/src/crypto/vault_epoch_crypto.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_event_session.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log.rs`

Move the five production operations `reencrypt_user_secrets_for_epoch`, `rotate_vault_keys_with_secrets`, `members_checkpoint_hash_from_roster`, `rewrapped_vault_meta_records_for_epoch`, and `rewrap_vault_meta_for_epoch` to private-state consuming owners. Hard ceiling: 1,400 authored additions and user target below 2,000.

## Acceptance criteria

- [ ] Secret plaintext is still zeroized after re-encryption and the same age ciphertext and key parsing behavior remains.
- [ ] Key rotation, member checkpoint hashing, metadata rebuilding, and metadata application become consuming owned actions.
- [ ] Existing epoch operation payloads, auth/member rows, roster validation, error order, and public WASM signatures remain unchanged.
- [ ] Existing epoch crypto, event-session, and security-epoch manager tests use the owned actions.
- [ ] The migrated module activates both ownership lints without blanket suppression or authored free helpers.
- [ ] No unrelated event-log, vault schema, crypto, recovery, or UI behavior changes.
- [ ] Scoped format/static/size gates, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve cryptographic boundaries, zeroization, persisted event payloads, public WASM signatures, and existing error ordering. Leave the event-session checkpoint method outside this focused crypto-owner migration.

## Progress

Fresh-main inventory after PR #1513 found no open-PR overlap with `vault_epoch_crypto.rs`; open PR #1516 is limited to password-manager coverage. The direct core and WASM callers are bounded to the listed files.

## Completion

Pending implementation and delivery.
