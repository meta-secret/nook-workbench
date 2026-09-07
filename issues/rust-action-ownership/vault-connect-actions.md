---
title: Own vault connect and hydration actions
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-connect-actions
created_at: 2026-09-07T14:05:00Z
updated_at: 2026-09-07T14:05:00Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/sentinel-quorum-admission.md
---

# Own vault connect and hydration actions

## Context

Vault connect still exposes content inspection, unlock, sentinel loading, metadata capture, and session hydration as homeless functions. Callers pass raw YAML and identities independently, so the action graph does not carry the stored content or validated unlock state through the transition.

## Outcome

`VaultContent` owns connect inspection, access assessment, metadata capture, normal unlock, and sentinel unlock transitions. `UnlockedVault` owns consuming hydration into `LoadedVault`. `VaultMetaState` owns member-roster replacement. WASM and sync callers use these typed actions while preserving existing errors, sentinel fail-closed behavior, metadata precedence, and public browser behavior.

## Scope

Fresh-main base `9c5be29233baf10b532094b3b405bae77acb60f0`:

- `nook-core/src/vault/vault_connect.rs`
- `nook-core/src/lib.rs`
- `nook-auth2/src/auth/multi_device/state.rs`
- `nook-wasm/src/conversion.rs`
- direct WASM manager callers and core sync/test callers.

The slice is one cohesive connect/session action graph with a hard ceiling of 1,400 authored additions and no local product builds or tests.

## Acceptance criteria

- [ ] Raw content actions are owned by `VaultContent` and normal/sentinel unlocks consume the content owner.
- [ ] `UnlockedVault` owns consuming hydration; member-row replacement is owned by `VaultMetaState`.
- [ ] All direct core, sync, WASM, and workflow callers use typed actions; homeless connect exports are removed.
- [ ] Empty content, force-genesis, access status, metadata fallback, sentinel fail-closed behavior, record validation, and error ordering remain unchanged.
- [ ] Ownership enforcement covers the new connect owner without blanket suppression.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.
