---
title: Type vault access diagnostic evaluation ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/vault-access-diagnostic-evaluation.md
created_at: 2026-09-07T07:16:45Z
status: immutable
---

# Plan

1. Keep the exact four-file closure at fresh main `5d64ff95d1491a707dbe7c157932f1ad906c5066`; inspect diagnostics, model, sole WASM caller, and all nine core/two browser tests.
2. Move diagnostic evaluation onto borrowed `VaultAccessDiagnosticRequest`; retain a private non-Clone evaluation owner for epoch index, key outcome, and diagnosis, consuming it during report assembly.
3. Move explanations and status conversions onto existing model enums; move epoch history to `ProjectionDiagnosticInput`; use a borrowed operation diagnostic owner for payload counts while leaving `VaultOperation` dependency-owned.
4. Preserve epoch/schema/status precedence, exact mappings and strings, sorted/deduplicated IDs and reports, epoch order, decryptability/errors, event metadata classification, zeroization, and no secret-bearing report fields.
5. Preserve payload counts for every operation variant, password entries, and legacy checkpoints; preserve WASM identity/event loading, skipped-event warnings, output conversion, ABI, and serialization.
6. Retain nine core and two browser tests; add focused precedence, sorting, metadata, nonmutation, and private-state construction/consumption cases; keep explanations in model.rs.
7. Enable ownership denial and invalid-suppression prohibition only in the diagnostics subtree; run scoped formatting/static, symbol, retention, and line-budget checks plus `task loom:pre-push` without local product builds/tests.
8. Rebase before exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates and remote Loom, obtain readiness, merge, and publish Workbench completion records.
