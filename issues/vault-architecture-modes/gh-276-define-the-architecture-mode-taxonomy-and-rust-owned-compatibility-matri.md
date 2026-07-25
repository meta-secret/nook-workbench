---
title: "Define the architecture mode taxonomy and Rust-owned compatibility matrix"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T05:59:42Z
updated_at: 2026-07-09T18:26:23Z
source_issues: ["https://github.com/meta-secret/nook/issues/276"]
related_prs: []
depends_on: []
legacy_labels: ["documentation","enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Define the architecture mode taxonomy and Rust-owned compatibility matrix

## Imported context

This record was imported from [Nook GitHub issue #276](https://github.com/meta-secret/nook/issues/276)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

The architecture is not a flat set of independent flags. It is a grouped model with five ownership boundaries:

1. `device_mode`: per-device local age/device-key protection.
2. `vault_type`: vault DEK access model, either per-device envelope or threshold shares.
3. `replication_type`: sync-provider credential/account trust model.
4. `onboarding_type`: concrete flow implied by `replication_type` plus provider capability.
5. `sync_provider_type`: provider-specific support for replication types.

Without this grouping, implementation issues will encode policy in ad hoc UI branches or collapse onboarding/provider semantics into one vague field.

## Scope

- Define canonical names for `device_mode`, `vault_type`, `replication_type`, `onboarding_type`, and `sync_provider_type`.
- Preserve the group ownership boundaries from #275: device mode is local protection; vault type is DEK access; replication type is sync-provider account trust; onboarding type is selected by replication/provider; sync provider type is the capability declaration.
- Decide whether user-facing `nexus` maps to the existing `Quorum Vault` naming in #259 or becomes the product term.
- Add Rust domain enums/config structs for valid combinations and explain how the values cross WASM.
- Update `.cortex` docs so future agents start from the grouped architecture matrix.

## Out of Scope

- Implementing cryptographic primitives.
- Building the full onboarding UI.

## Acceptance Criteria

- A `.cortex` architecture/design doc describes the five groups, their ownership boundaries, invalid combinations, and migration defaults for existing vaults.
- Rust tests reject invalid combinations, for example `vault_type=nexus` with single-device DEK envelopes or `replication_type=shared` on a provider that cannot share.
- Existing vaults map explicitly to defaults, likely `device_mode=standard`, `vault_type=simple`, `replication_type=personal` unless later migration chooses otherwise.
- `onboarding_type` is modeled as selected from replication/provider capability, not as a free independent axis.
- The resulting types are exported through `nook-wasm` without duplicating policy in TypeScript.

## Notes

- Current anchors: #275, `.cortex/design-docs/unified-vault.md`, `.cortex/design-docs/vault-session-and-lock.md`, `nook-app/nook-core/src/vault/vault_format.rs`, `nook-app/nook-core/src/sync/validation.rs`.

## Definition of Done

- Rust unit tests cover every valid and invalid mode combination named by the taxonomy.
- Existing vaults/providers have explicit default-mode tests.
- `.cortex` docs are updated in the same PR as the domain model.
- No UI code becomes the source of truth for compatibility decisions.


## Historical comments

### cypherkitty — 2026-07-09T18:26:21Z

## Closeout
Done in PR #288.

- Rust-owned taxonomy + compatibility matrix in `nook-core/src/vault/vault_architecture.rs` (`VaultArchitecture`, `DeviceMode`, `VaultType`, `ReplicationType`, provider capability checks)
- Design doc: `.cortex/design-docs/vault-architecture-modes.md`

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:22Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.
