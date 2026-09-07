---
title: Own vault connect and hydration actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-connect-actions
created_at: 2026-09-07T14:05:00Z
updated_at: 2026-09-07T14:34:00Z
source_issues: []
related_prs: [1525]
dependencies:
  - issues/rust-action-ownership/sentinel-quorum-admission.md
---

# Own vault connect and hydration actions

## Context

Vault connect still exposes content inspection, unlock, sentinel loading, metadata capture, and session hydration as homeless functions. Callers pass raw YAML and identities independently, so the action graph does not carry the stored content or validated unlock state through the transition.

## Outcome

`VaultContent` owns connect inspection, access assessment, metadata capture, normal unlock, and sentinel unlock transitions. `UnlockedVault` owns consuming hydration into `LoadedVault`. `VaultMetaState` owns member-roster replacement. WASM and sync callers use these typed actions while preserving existing errors, sentinel fail-closed behavior, metadata precedence, and public browser behavior.

## Scope

Fresh-main base `9c5be29233baf10b532094b3b405bae77acb60f0`, merged as `36eb82c5eb171d858e6a0646a5c5f301626b17d7`:

- `nook-core/src/vault/vault_connect.rs`
- `nook-core/src/lib.rs`
- `nook-auth2/src/auth/multi_device/state.rs`
- `nook-core/src/vault/vault_session_cache.rs`
- `nook-wasm/src/conversion.rs`
- direct WASM manager callers and core sync/test callers.

The slice was one cohesive connect/session action graph with 273 authored additions and no local product builds or tests.

## Acceptance criteria

- [x] Raw content actions are owned by `VaultContent` and normal/sentinel unlocks consume the content owner.
- [x] `UnlockedVault` owns consuming hydration; member-row replacement is owned by `VaultMetaState`.
- [x] All direct core, sync, WASM, and workflow callers use typed actions; homeless connect exports are removed.
- [x] Empty content, force-genesis, access status, metadata fallback, sentinel fail-closed behavior, record validation, and error ordering remain unchanged.
- [x] Ownership enforcement covers the new connect owner without blanket suppression.
- [x] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.


## Progress

The migration landed in PR #1525 with 273 authored additions across the connect owner, projection-cache owner, metadata state, core sync, WASM conversion, manager callers, and workflow tests. Scoped formatting, whitespace, and `task loom:pre-push` checks passed. Exact-head SECURITY review passed with no P1/P2/P3 findings. Hosted PR run `34131891549`, repository policy run `34131867505`, and remote `loom:verify` run `34133325050` passed.

## Completion

PR #1525 was squash-merged at `36eb82c5eb171d858e6a0646a5c5f301626b17d7` on 2026-09-07. `origin/main` was verified at the merge commit.
