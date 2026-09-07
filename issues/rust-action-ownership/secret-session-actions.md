---
title: Own ciphertext-backed secret session actions
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-secret-session-actions
created_at: 2026-09-07T14:38:00Z
updated_at: 2026-09-07T14:38:00Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/vault-connect-actions.md
---

# Own ciphertext-backed secret session actions

## Context

Ciphertext-backed secret reads and projected user-record hydration still expose free operations. Raw secret maps, vault crypto, pagination, and mutable metadata are passed separately, so callers can decrypt or hydrate outside a session owner carrying the relevant state.

## Outcome

`VaultSecretSession` owns single-record decryption and paged search over a borrowed encrypted session. `VaultMetaState` owns consuming replacement of projected user records, while the armored hydration action consumes its record batch into a database and state update. Core and WASM callers use these owners without changing zeroization, filtering, pagination, or secret replacement behavior.

## Scope

Fresh-main base `36eb82c5eb171d858e6a0646a5c5f301626b17d7`:

- `nook-core/src/vault/vault_session.rs`
- `nook-core/src/vault/vault_event_session.rs`
- `nook-core/src/vault/vault_search_catalog.rs`
- `nook-core/src/secrets/session.rs`
- `nook-core/src/auth/multi_device/state.rs`
- `nook-core/src/lib.rs`
- direct WASM manager and event-log callers plus existing session tests.

The slice is one cohesive encrypted-session action graph with a hard ceiling of 1,500 authored additions and no local product builds or tests.

## Acceptance criteria

- [ ] `VaultSecretSession` owns decryption and paged encrypted search; old free exports are removed.
- [ ] `VaultMetaState` owns user-record replacement and armored hydration preserves atomic replacement order.
- [ ] All direct core/WASM callers use typed actions; secret zeroization, type filtering, sorting, pagination, and errors remain unchanged.
- [ ] Ownership enforcement covers the session owner without blanket suppression.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.
