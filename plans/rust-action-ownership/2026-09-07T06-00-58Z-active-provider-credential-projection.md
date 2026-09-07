---
title: Type active provider credential projection ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/active-provider-credential-projection-ownership.md
created_at: 2026-09-07T06:00:58Z
status: immutable
---

# Plan

1. Keep the exact four-file closure at fresh main `79ad3e2abb46a4082fcd35262f27a3c32a939e29`; inspect active credential projection, core exports, the sole vault API caller, and all 17 scoped tests for overlap and serialization boundaries.
2. Keep projection on `ActiveProviderCredentialsRequest`; add a private borrowed provider-text owner for ECMAScript trimming and non-empty default selection; move the three fixture helpers to meaningful owners.
3. Preserve local-vault/login/first-provider precedence, first-row behavior, malformed and blank fields, exact ECMAScript whitespace, defaults, provider-specific clearing, PAT projection, input nonmutation, DTOs, serialization, and public WASM signatures.
4. Remove obsolete core reexports and adapt only the existing vault API caller without changing storage, crypto, authorization, or browser lifecycle behavior.
5. Retain all 17 scoped tests plus untouched downstream provider-state tests; add bounded precedence, login-mode, first-row, whitespace/default, and nonmutation matrices.
6. Enable ownership denial and invalid-suppression prohibition only in the completed active-credentials subtree; run scoped formatting/static, symbol, test-retention, and line-budget checks plus `task loom:pre-push` without local product builds/tests.
7. Rebase before exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates and remote Loom, obtain readiness, merge, and publish Workbench completion records.
