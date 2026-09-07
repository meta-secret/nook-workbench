---
title: Own vault format read and write actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/vault-format-actions.md
started_at: 2026-09-07T16:06:28Z
agent: codex
gizmo_id: rust-action-ownership-vault-format-actions
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with one cohesive vault-format slice that replaces homeless YAML detection, metadata, deserialization, and serialization operations with data-carrying owners and moves all direct callers to those actions.

## Requirements

- Introduce `VaultFormatDocument` for borrowed stored content and its format/metadata/deserialization transitions.
- Introduce `VaultRecordSet` for record serialization with unlock, name, version, and architecture inputs.
- Move YAML section conversion and partitioning onto meaningful YAML document/record owners.
- Preserve existing errors, normalization, section ordering, schema behavior, persisted YAML, and public browser ABI.
- Activate ownership denial and invalid-suppression prohibition only for the migrated format modules.
- Keep the complete PR below 2,000 authored additions and avoid local product builds or tests.
- Complete scoped checks, exact-head SECURITY, hosted validation, remote Loom, readiness, merge, and Workbench closeout.

## Constraints and exclusions

- Rust core remains authoritative for format policy; WASM remains an adapter.
- Do not change schema, cryptography, storage semantics, authorization, or generated ABI.
- Do not retain compatibility free-function exports after caller migration.
- Do not introduce a generic session framework or blanket lint suppression.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-vault-format-actions
- Estimated authored changed lines: 900
- Hard ceiling: 1,500 authored additions
- Owning modules: `nook-core` vault format parent and YAML child modules plus direct consumers.
- Delivery shape: One cohesive PR.

## Initial plan

1. Refresh `origin/main` and inventory format functions, YAML helpers, exports, and direct callers.
2. Implement `VaultFormatDocument` and `VaultRecordSet` while preserving current parsing, normalization, and serialization behavior.
3. Move YAML conversion helpers onto `StoredVaultYaml`, `AuthYamlRecord`, and `MembersYamlRecord`; retain focused test fixtures as owned helpers.
4. Migrate core, sync, WASM, storage, and workflow callers and remove old free exports.
5. Run formatting, diff, authored-size, and Loom hygiene checks without local product builds/tests.
6. Push one cohesive PR, obtain exact-head SECURITY and hosted validation, run remote Loom and readiness, squash-merge, and publish Workbench completion records.

## Completion evidence

- Old free format exports are absent and direct callers use typed owners.
- Hosted Rust, WASM, Dylint, policy, deployment, and Node checks pass at the exact head.
- Exact-head SECURITY, remote Loom, readiness, squash merge, and `origin/main` verification pass.
- Issue, worklog, and agent statistics identify the PR and merge commit.

- PR #1529 exact head `0d91d78f8a6726472d8ac41668833a91ec8500b1` passed hosted policy run `34146837265`, hosted product run `34146845580`, remote Loom run `34147413310`, and `task pr:ready PR=1529`.
- Squash merge commit: `5a7ff77e32d0dacb03f50fb29633ec85da3de5e7`; `origin/main` was verified at that commit.

## Safety review

This plan contains no credentials, raw logs, private data, or unnecessary infrastructure details.
