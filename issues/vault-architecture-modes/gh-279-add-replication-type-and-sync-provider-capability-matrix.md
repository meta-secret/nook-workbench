---
title: "Add replication_type and sync provider capability matrix"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T05:59:48Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/279"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Add replication_type and sync provider capability matrix

## Imported context

This record was imported from [Nook GitHub issue #279](https://github.com/meta-secret/nook/issues/279)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

`replication_type` is group 3 in the #275 architecture. It is specifically about sync providers: whose credentials are used, whether credentials can be copied to another device, and whether the provider can share storage across accounts.

- `personal`: all devices are highly trusted because they belong to the same owner. Devices can use the same sync-provider credentials, so onboarding can include all sync-provider credentials in the QR/code.
- `shared`: each device/person uses their own provider account, and the owner shares provider storage with that identity where the provider supports it. Example: two Google Drive accounts using a shared Drive directory/file.

Provider capability is group 5:

| Provider | Supported `replication_type` | Notes |
| --- | --- | --- |
| Google Drive / `gdrive` | `personal`, `shared` | Shared flow collects joiner identity, e.g. email, and grants shared Drive storage. |
| GitHub / `github` | `personal` | Initial model is personal-only. Shared GitHub collaborator/repo access needs a separate design. |
| Other providers | Provider-specific | If shared access is impossible, shared onboarding must be unavailable. |

## Scope

- Add a provider capability matrix for `personal` and `shared` replication.
- Define capability metadata for `github`, `oauth-file/google-drive`, `local`, `local-folder`, and `icloud` as applicable.
- Make provider validation fail closed when a requested replication mode is unsupported.
- Keep provider credentials separate from vault encryption material.
- Preserve the distinction between provider credentials, vault access keys, and provider sharing grants.

## Out of Scope

- Actually calling Google Drive share APIs.
- Full onboarding UX.
- Defining shared GitHub collaborator semantics.

## Acceptance Criteria

- Rust tests encode at least: `github` supports `personal`; `github` rejects `shared`; Google Drive supports `personal` and `shared`.
- Provider picker/management can surface unsupported combinations without relying on English literals in Svelte.
- Existing provider rows migrate to explicit default capability semantics.
- The docs keep sync providers as replica targets for one vault, not vault selectors.
- Shared-capable provider metadata includes what joiner identity is required, starting with email for Google Drive.

## Notes

- Current anchors: #275, `.cortex/design-docs/auth-providers.md`, `.cortex/design-docs/vault-session-and-lock.md`, `nook-app/nook-core/src/sync/validation.rs`, `nook-app/nook-core/src/sync/sync_provider_store.rs`, `nook-app/nook-web/nook-web-app/src/lib/components/ProviderPicker.svelte`.

## Definition of Done

- Rust tests encode provider capability for personal/shared replication, including GitHub personal-only and Google Drive shared-capable behavior.
- Validation rejects unsupported provider/mode combinations before onboarding payload creation.
- UI changes include component/e2e coverage for disabled or explained unsupported combinations.
- Provider credentials remain separate from vault encryption material in tests and docs.


## Historical comments

### cypherkitty — 2026-07-09T18:26:32Z

## Closeout
Done in PR #288.

- `replication_type` personal/shared + provider capability matrix in Rust
- Unsupported providers gated in UI/onboarding
- Shared Drive uses `drive.file` folder grant path; personal stays `drive.appdata`

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:34Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:43:10Z

Reopened because capability enforcement is complete in the add-provider picker but incomplete in existing-provider management/onboarding surfaces. Shared vault onboarding can still default-select a personal-only provider and only fail later. Fix and tests are in progress.

### cypherkitty — 2026-07-10T00:50:11Z

Implemented the Rust-owned replication and provider capability matrix in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Provider gating and shared-target requirements are covered by unit and production browser tests.
