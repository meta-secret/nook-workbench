---
title: Type vault epoch cryptography actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-epoch-crypto
created_at: 2026-09-07T11:46:14Z
updated_at: 2026-09-07T12:02:36Z
source_issues: []
related_prs: [1517]
dependencies:
  - issues/rust-action-ownership/security-epoch-commit-state.md
---

# Type vault epoch cryptography actions

## Context

Security-epoch cryptography crossed the core boundary through free operations for secret re-encryption, key rotation, member checkpoint hashing, and auth/member metadata rewrapping. These operations carried old and replacement keys, encrypted records, roster state, and replacement metadata through one sensitive action graph.

## Outcome

Borrowed epoch action owners now consume explicit input state to re-encrypt secrets, rotate vault keys, compute member checkpoints, rebuild replacement metadata, and apply the replacement metadata to a vault state. Existing ciphertext formats, zeroization, roster validation, key generation, and error ordering remain unchanged.

## Scope

Final delivery was based on main `815622718542f23b137de833816ea7ac38669087` and merged as PR #1517 (`cf86b07f9e857c23f6d8bf64b8a77085fe453611`):

- `nook-app/nook-platform/nook-core/src/crypto/vault_epoch_crypto.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_event_session.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log.rs`

The five production operations became private-state consuming owners. Final authored additions: 215.

## Acceptance criteria

- [x] Secret plaintext remains zeroized after re-encryption and the same age ciphertext and key parsing behavior remains.
- [x] Key rotation, member checkpoint hashing, metadata rebuilding, and metadata application are consuming owned actions.
- [x] Existing epoch operation payloads, auth/member rows, roster validation, error order, and public WASM signatures remain unchanged.
- [x] Existing epoch crypto, event-session, and security-epoch manager tests use the owned actions.
- [x] The migrated module activates both ownership lints without blanket suppression or authored free helpers.
- [x] No unrelated event-log, vault schema, crypto, recovery, or UI behavior changes.
- [x] Scoped format/static/size gates, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve cryptographic boundaries, zeroization, persisted event payloads, public WASM signatures, and existing error ordering. The event-session checkpoint method stayed outside this focused crypto-owner migration.

## Progress

Fresh-main inventory after PR #1513 found no open-PR overlap with `vault_epoch_crypto.rs`; open PR #1516 remained limited to password-manager coverage. Direct core and WASM callers stayed bounded to the listed files. The module ownership lints passed in hosted Dylint without authored free operations or helpers.

## Completion

PR #1517 merged successfully as `cf86b07f9e857c23f6d8bf64b8a77085fe453611`.

- Final head: `f4c61a50b41c324181c785692b8a272364d785fb`
- Final base: `815622718542f23b137de833816ea7ac38669087`
- Hosted PR run: `34118762506`
- Repository policy: `34118746212`
- Remote Loom: `34119539029`
- Preview: `https://pr-1517.nokey-sh.pages.dev`
- Security exact-head review passed with no P1/P2/P3 findings.
- `task pr:ready PR=1517` returned `ready: true` immediately before merge.
- No local product builds or tests were run.
