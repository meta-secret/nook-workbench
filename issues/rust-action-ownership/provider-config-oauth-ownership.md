---
title: Type provider configuration save and OAuth state ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-config-oauth
created_at: 2026-09-07T02:12:57Z
updated_at: 2026-09-07T03:16:46Z
source_issues: []
related_prs:
  - 1485
depends_on:
  - issues/rust-action-ownership/extension-identity-handoff-ownership.md
---

# Type provider configuration save and OAuth state ownership

## Context

Provider save evaluation and OAuth configuration projection still expose fifteen homeless production operations across core and direct WASM consumers. Setup/storage selection, duplicate handling, OAuth field precedence, mode clearing, and remote-reference precedence are distributed across raw arguments and adapters without a single typed owner carrying the policy.

## Outcome

Existing `ProviderSaveRequest` owns save evaluation, provider construction, and target selection. Core-owned `OAuthFileConfig` and named merge/update requests own OAuth mode changes, folder binding, token merge precedence, remote-reference observation, and updates. These owners preserve configuration projection semantics without claiming authentication, authorization, persistence, or I/O.

## Scope

Exact eight-file core/WASM closure:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/save.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/oauth.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/mod.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/provider_state.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/provider_architecture.rs`

Move the fifteen listed production operations plus `save.rs` fixture helpers (`request`, `saved`) onto bounded owners. Estimated 900–1,250 additions, hard ceiling 1,600; preserve every existing file ceiling and public WASM signature.

## Acceptance criteria

- [x] Setup-versus-storage selection, active-vault scope, explicit duplicate rejection, implicit duplicate handling, local-folder-required outcome, local-row seeding/rebinding, provider order, IDs, timestamps, and save DTO behavior remain exact.
- [x] Shared-Drive filename selection and every default/trim distinction remain exact.
- [x] OAuth merge precedence preserves usable active access token, persisted refresh token, known persisted expiry/account, active remote ID/modes, specified active folder/share target, and persisted-first nonblank filename.
- [x] Mode switching preserves precise credential and target clearing, including intentionally retained fields.
- [x] Shared-folder binding validates before cloning and leaves credentials/filename unchanged on failure.
- [x] Remote-reference precedence remains iCloud share target, shared Drive folder, then file ID; blank/unchanged updates remain `None`.
- [x] Existing `.ok()` handling and defaults remain unchanged; tokens remain configuration data and never proof of authentication, ciphertext validity, permissions, or recipient binding.
- [x] Retain 14 focused save/OAuth tests, 2 facade tests, and 13 tests in affected WASM files; add bounded duplicate/local, cross-vault, OAuth precedence, mode-clearing, folder-failure, and remote-reference matrices.
- [x] Ownership denial covers completed `save.rs` and `oauth.rs`; unrelated facade/WASM operations remain outside blanket activation.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No authorization or persistence typestates, provider I/O, storage transactions, cryptographic, schema, TSify/WASM signature, durable-publication, fallback, recovery, or generic phase-framework changes. Preserve zeroizing ownership for credential-bearing temporaries where introduced.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `50e19bc1fa60f6a6515f0f4754d0036f68719d9b` found fifteen homeless production operations and two fixture helpers in an exact eight-file closure with no live PR overlap. Estimated scope is 900–1,250 additions with a hard ceiling of 1,600.


## Completion

PR #1485 merged as `8fb5efb877273dfd64331b76bc902039605f4fda` from delivery head `186cbf8f56d83544049af147333c045faeefe643`, based on main `4658cd533d906863af16e68b71f97a147c61c328`. The exact eight-file closure added 720 lines and removed 478. Hosted PR `34078145329`, repository policy `34078122661`, remote Loom `34078864322`, exact-head security review, and readiness passed; readiness deployment was `https://pr-1485.nokey-sh.pages.dev`. Linear UI demos `34079091880` passed on the delivery head.
