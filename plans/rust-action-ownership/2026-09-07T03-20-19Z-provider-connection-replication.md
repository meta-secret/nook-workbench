---
title: Type provider connection arguments and replication selection ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/provider-connection-replication-ownership.md
created_at: 2026-09-07T03:20:19Z
status: immutable
---

# Plan

1. Keep the exact eight-file closure at fresh main `8fb5efb877273dfd64331b76bc902039605f4fda`; inspect storage arguments, enrollment checks, facade exports, and four WASM adapter consumers for overlap and ceilings.
2. Make existing `StorageProviderData` own persisted connection arguments and replication checks. Add borrowed ProviderSelectionRequest and named draft/staged/vault connection owners for precedence and projection.
3. Preserve local-vault precedence, authenticated persisted selection, unauthenticated drafts, raw-versus-trimmed distinctions, missing staged credentials, shared Drive filename precedence, remote references, target parsing, and compatible-provider ordering.
4. Migrate core facade and WASM adapters without changing public signatures, credential copying, schemas, storage behavior, or runtime checks.
5. Retain 8 storage-args, 3 enrollment, 2 facade, and 5 affected WASM tests; add focused normalization, malformed-target, ordering, missing-credential, nonmutation, privacy, and consuming controls.
6. Enable ownership denial only in completed `storage_args.rs`; run scoped formatting/static, symbol, line-budget, and test-retention checks plus `task loom:pre-push`.
7. Delegate implementation and exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions. Refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
