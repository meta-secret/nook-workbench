---
title: Type vault access diagnostic evaluation ownership
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-access-diagnostic-evaluation
created_at: 2026-09-07T07:16:45Z
updated_at: 2026-09-07T07:16:45Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/provider-catalog-normalization.md
---

# Type vault access diagnostic evaluation ownership

## Context

Vault access diagnostics still expose free evaluation, status explanation, epoch projection, and payload-count operations across core and WASM adapters. These observations belong to diagnostic requests, reports, status enums, projections, and operation diagnostic owners while preserving exact status/error and serialization behavior.

## Outcome

A borrowed `VaultAccessDiagnosticRequest` owns diagnostic evaluation and a private consuming evaluation owner keeps epoch/key evidence coherent through report assembly. Status enums own explanations and conversions, projections own epoch-history diagnostics, and a borrowed operation diagnostic owner counts payloads without changing operation ownership or security semantics.

## Scope

Exact four-file closure on fresh main `5d64ff95d1491a707dbe7c157932f1ad906c5066`:

- `nook-app/nook-platform/nook-core/src/vault/vault_access_diagnostics.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_access_diagnostics/model.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/diagnostics.rs`

Move eleven production operations and four fixture builders to meaningful owners. Estimated 650–950 additions and 350–550 removals; strict ceiling 1,200 additions; no new files.

## Acceptance criteria

- [ ] Epoch-index construction remains before key diagnosis; unsupported-schema precedence remains before pending join, auth-row selection, envelope parsing, and key resolution.
- [ ] Exact status mappings, explanation strings, sorted/deduplicated auth IDs, sorted secret/event reports, and epoch-history order remain unchanged.
- [ ] Existing decryptability checks and error propagation remain unchanged; event diagnostics classify metadata without newly authenticating events.
- [ ] Key/plaintext lifetime and zeroization remain unchanged; no additional secret clones or secret-bearing report fields are introduced.
- [ ] Payload counts cover every operation variant, including password entries and legacy checkpoint behavior.
- [ ] WASM identity acquisition, event loading, skipped-event warnings, output conversion, public ABI, and report serialization remain unchanged.
- [ ] Retain nine core tests and two browser tests; add status-precedence, epoch/sorting, report-metadata, input-nonmutation, and private-state construction/consumption cases. Keep tests colocated and explanations in the model child.
- [ ] Ownership denial and invalid-suppression prohibition cover only the completed diagnostics subtree; unrelated WASM methods remain unchanged.
- [ ] Scoped gates, hosted validation, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No new files, storage/schema changes, authorization or crypto changes, browser lifecycle changes, public ABI changes, compatibility fallbacks, or local product builds/tests. `VaultOperation` remains dependency-owned; do not add inherent methods to it.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `5d64ff95d1491a707dbe7c157932f1ad906c5066` found eleven homeless production operations and four fixture helpers in an exact four-file closure with no live PR overlap. The scope stays below authored-file guardrails.

## Completion

Pending implementation and delivery.
