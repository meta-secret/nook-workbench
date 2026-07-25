---
title: "Persist and migrate architecture mode metadata safely"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T05:59:52Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/281"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Persist and migrate architecture mode metadata safely

## Imported context

This record was imported from [Nook GitHub issue #281](https://github.com/meta-secret/nook/issues/281)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

The new architecture modes must survive reloads, provider sync, migrations, diagnostics, and future app versions. Today vault YAML and provider snapshots have schema/versioning, but they do not persist an explicit architecture-mode record.

## Scope

- Decide where mode metadata lives: vault YAML/event metadata, provider snapshot, device-local record, or a split across those layers.
- Add forward-compatible serialization and migration defaults for existing vaults/providers.
- Ensure mode-sensitive diagnostics explain why a device cannot unlock/sync without leaking secret material.
- Preserve the difference between persisted browser storage names and crate/package renames.

## Out of Scope

- UI creation wizard.
- Provider-specific sharing API calls.

## Acceptance Criteria

- Existing vaults/providers load with deterministic default modes and no destructive migration.
- Future/unknown mode values fail with a recoverable unsupported-version or unsupported-mode error.
- Event-log/provider sync does not accidentally replicate device-local `anti-hacker` secrets or nonce material.
- Tests cover round-trip serialization, legacy defaults, unsupported future modes, and diagnostics redaction.

## Notes

- Current anchors: `nook-app/nook-core/src/vault/vault_format.rs`, `nook-app/nook-core/src/vault/vault_event_store.rs`, `nook-app/nook-core/src/sync/sync_provider_store.rs`, `nook-app/nook-wasm/src/storage/auth_providers.rs`, `.cortex/references/logging.md`.

## Definition of Done

- Rust tests cover serialization round trips, legacy defaults, unsupported future modes, and migration behavior.
- Tests prove device-local `anti-hacker` material is never replicated through sync providers, event logs, app logs, or plaintext storage.
- Diagnostics identify unsupported/mismatched modes without leaking secrets.
- Any browser storage migrations preserve existing persisted storage names unless an explicit migration is implemented and tested.


## Historical comments

### cypherkitty — 2026-07-09T18:26:40Z

## Closeout
Done in PR #288.

- Architecture metadata persisted in vault format/event projection (`VaultArchitecture` in YAML)
- Legacy defaults via `VaultArchitecture::default_legacy()`
- Architecture preserved across lock/reload; nexus share meta materialization for locked joiners

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:41Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:52:52Z

Reopened because architecture metadata could be changed from simple to nexus after vault creation while retaining incompatible auth records, and persisted records were not validated against the selected architecture. Immutability and record-aware serialization/load validation are in progress.

### cypherkitty — 2026-07-10T00:50:11Z

Implemented persisted architecture metadata, validation, backward-compatible defaults, and fail-closed event/history checks in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Rust coverage passed at 92.28%.
