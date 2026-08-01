---
title: "Guard provider connect against silent vault replacement"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T23:32:38Z
updated_at: 2026-08-01T03:45:00Z
source_issues: ["https://github.com/meta-secret/nook/issues/205"]
related_prs: ["https://github.com/meta-secret/nook/pull/898"]
depends_on: []
legacy_labels: ["bug"]
legacy_state_reason: "COMPLETED"
---

# Guard provider connect against silent vault replacement

## Imported context

This record was imported from [Nook GitHub issue #205](https://github.com/meta-secret/nook/issues/205)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Opening or adding a sync provider must never silently make the current local vault authoritative over a provider that already contains another vault. A user can reproduce the dangerous shape with a file/local-folder provider: Browser/profile A saves a useful encrypted vault into a folder, Browser/profile B opens the same folder with a different or empty local vault, and the app proceeds without a clear choice about which database should win. The same guard should apply to GitHub, Drive, iCloud, and any future provider.

This is a data-loss-risk UX bug even in the event-log world. The remote bytes may be append-only events rather than a mutable `nook-vault.yaml`, but the product behavior still reads as "I connected the provider and Nook silently used/repaired it with my current empty vault" instead of stopping to ask whether the provider already represents a different database.

## Problem

Today the user does not get enough information or control when the selected provider contains data that is not obviously the active local vault:

- no pre-write confirmation that says the provider already contains a different vault/database;
- no clear "use local", "use provider", "import as another vault", or "cancel" decision before provider writes happen;
- no useful vault identity summary such as provider/path, `store_id`, created date/first event date, last modified/synced date, secret count if decryptable, and whether the current device can decrypt/access it;
- no strong notification when the provider vault cannot be decrypted, cannot be accessed by this device, has different secrets/heads, or belongs to another `store_id`;
- a completely empty or newly-created local vault can appear to replace/take over a useful remote/provider vault with no warning.

The current code has pieces of the desired behavior, but they are not consistently enforced across provider-open paths:

- `nook-app/nook-web/src/lib/components/VaultSyncConflictDialog.svelte` already has a conflict dialog for `store_id` and same-version conflicts.
- `nook-app/nook-web/src/lib/vault/sync.ts` stages and resolves `PendingSyncConflict` for some sync paths.
- `nook-app/nook-wasm/src/manager/event_log.rs` discovers event-log store IDs for providers/local folders, but the local-folder sync path can still continue from a non-empty local vault and silently ignore events from another `store_id` while writing local events.
- `nook-app/nook-wasm/src/manager/sync.rs` still has legacy YAML adoption/import paths that need the same user-facing safety invariant.

## Desired behavior

Before Nook writes anything to a newly selected sync provider, it should inspect the provider and classify the situation:

1. Provider empty: safe to initialize from the local vault, but still show normal success status.
2. Provider has the same `store_id` and compatible event heads: safe to union/sync, with normal sync status.
3. Provider has the same `store_id` but unresolved conflicts/security conflicts/access problems: block mutation and show the existing conflict/security UI.
4. Provider has a different `store_id`: block mutation and show a vault-choice dialog.
5. Provider has legacy YAML, unreadable encrypted material, invalid event files, or unknown/multiple vaults: block mutation and show an error/choice that preserves both sides by default.

The vault-choice dialog should make the distinction visually obvious:

- **This device vault**: label, `store_id`, creation/first-event date, last local update, number of secrets if unlocked/decryptable, current access state.
- **Provider vault**: provider type and path/repo/folder/file, `store_id`, first-event/created date, last provider update if known, number of secrets if decryptable, access/decryption state.
- Actions should be explicit and destructive-safe: `Use this device vault`, `Use provider vault`, `Import provider as another vault`, and `Cancel`. Any action that overwrites/repairs provider state must say what will be written.

Do not auto-merge distinct vault databases in this issue. If merging two different `store_id`s is desired later, it should be its own explicit import/merge workflow with reviewable secret-by-secret behavior.

## Acceptance criteria

- Connecting or adding a local-folder sync provider that already contains events for a different `store_id` never writes local events before the user chooses an action.
- The same pre-write guard exists for GitHub, Google Drive, iCloud/OAuth file providers, and legacy YAML provider content.
- An empty or newly-created local vault cannot silently replace, supersede, or take over a provider vault that already has events/YAML.
- The conflict/choice UI includes enough metadata to distinguish the two vaults: provider/path, `store_id`, created/first-event date, last update/sync date when available, secret count when decryptable, and access/decryption status.
- If the app cannot decrypt or access the provider vault, the UI says that explicitly and defaults to preserving remote/provider data.
- Existing `VaultSyncConflictDialog` or a replacement dialog handles different-`store_id` provider-open decisions, not only background sync conflicts.
- Rust tests cover provider classification and fail-closed behavior, especially local-empty-vs-remote-nonempty, local-nonempty-vs-different-remote, unreadable remote, and multiple remote store IDs.
- Web/unit/e2e coverage includes a local-folder reproduction where a useful provider vault is protected from a second empty/local vault.
- `.cortex/design-docs/vault-event-log.md` or the relevant provider workflow docs are updated with the invariant: provider connect must classify before first write and must never silently cross `store_id` boundaries.

## References

- Parent/provider epic: #12
- Event-log sync design: #112
- Multi-vault support: #120
- Local-folder e2e coverage: #188
- Conflict UI: `nook-app/nook-web/src/lib/components/VaultSyncConflictDialog.svelte`
- Web sync state: `nook-app/nook-web/src/lib/vault/sync.ts`
- Provider setup path: `nook-app/nook-web/src/lib/vault/providers.ts`
- Event-log provider/local-folder sync: `nook-app/nook-wasm/src/manager/event_log.rs`
- Legacy sync/import path: `nook-app/nook-wasm/src/manager/sync.rs`
- Architecture invariant: `.cortex/design-docs/vault-event-log.md`


## Historical comments

No comments.

## Progress

- 2026-08-01: Closed the import-as-new-vault follow-through gap for empty-local vs different-provider vaults in [Nook PR #898](https://github.com/meta-secret/nook/pull/898): prior local vault remains registered, multi-vault picker stays visible, and unlock honesty prefers backup password when this device has no auth envelope.
