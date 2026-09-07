---
title: Type provider configuration save and OAuth state ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/provider-config-oauth-ownership.md
created_at: 2026-09-07T02:12:57Z
status: immutable
---

# Plan

1. Keep the exact eight-file core/WASM closure at fresh main `50e19bc1fa60f6a6515f0f4754d0036f68719d9b`; inspect save, OAuth, facade, and direct adapter consumers for overlap and file ceilings.
2. Make existing `ProviderSaveRequest` own setup/storage selection, duplicate and local-folder outcomes, provider construction, defaults, and target selection while preserving IDs, timestamps, order, and DTOs.
3. Make core-owned `OAuthFileConfig` own mode changes, shared-folder binding, remote-reference precedence, and token merge through named borrowed/consuming requests; keep configuration semantics distinct from authentication or persistence.
4. Migrate the eight direct adapters and facade/root exports without changing public WASM signatures, TSify output, serialization, provider I/O, or storage transactions.
5. Retain 14 save/OAuth core tests, 2 facade tests, and 13 affected WASM tests; add focused duplicate/local, cross-vault, OAuth precedence, mode-clearing, folder-validation, remote-reference, zeroization, privacy, and consuming controls.
6. Enable ownership denial only in completed `save.rs` and `oauth.rs`; preserve unrelated free operations in facade/WASM parents. Run scoped formatting/static, symbol, line-budget, and test-retention checks plus `task loom:pre-push`.
7. Delegate implementation and exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions. Refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
