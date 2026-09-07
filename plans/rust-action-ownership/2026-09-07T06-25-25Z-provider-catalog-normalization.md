---
title: Type provider catalog normalization and local-row ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/provider-catalog-normalization.md
created_at: 2026-09-07T06:25:25Z
status: immutable
---

# Plan

1. Keep the exact eleven-file closure at fresh main `52196e5278bce64b469adbed1d484f3f04c31058`; inspect catalog operations, direct callers, all 65 scoped tests, and browser/publication boundaries.
2. Move provider display and target observations onto `StorageProviderData` and `ProviderLabelLabels`; keep duplicate selection on a borrowed request owner containing providers, candidate, and exclusion.
3. Move auth snapshot normalization onto `NormalizedAuthSnapshot` with private borrowed/mutable snapshot, provider, and OAuth wire owners; preserve permissive normalization, raw-input cloning, malformed filtering, active-scope parsing, and changed comparison.
4. Move semantic string handling onto a named descriptor; local-row insertion onto a snapshot plus named local-row request; provider text defaults onto a borrowed text owner; move five fixture helpers onto meaningful owners.
5. Preserve PAT duplicate identity and missing-PAT rejection, iCloud shared-target substitution, first-match/exclusion and clone behavior, local-row precedence/scope/order, labels/suffixes/masking, ABI/schema, credential opening order, publication transactions, rollback comparison, and Sentinel admission order.
6. Retain all 65 scoped tests and add bounded matrices for malformed/state-tagged normalization, unchanged-input detection, duplicate ordering/exclusion, local-row scope precedence, and display/default behavior. Leave target-key algorithms and five tests in `sync/validation/provider_configuration.rs` unchanged.
7. Enable ownership denial and invalid-suppression prohibition only in `catalog.rs`; run scoped formatting/static, symbol, retention, and line-budget checks plus `task loom:pre-push` without local product builds/tests.
8. Rebase before exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates and remote Loom, obtain readiness, merge, and publish Workbench completion records.
