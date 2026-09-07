---
title: Type multi-device join and enrollment actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/multi-device-join-ownership.md
created_at: 2026-09-07T10:18:55Z
status: immutable
---

# Plan

1. Refresh origin/main and inventory all join/enrollment callers and open-PR overlap.
2. Add a private ownership-enforced child with consuming owners for request issuance, approval, denial, and enrollment.
3. Preserve exact join payload fields, trusted signing key semantics, auth/member envelope construction, roster fallback, denial filtering, and shared/separate key paths.
4. Adapt only auth2/core/WASM callers and tests; remove the migrated free exports without changing the WASM manager method signatures.
5. Retain existing behavior tests and add focused owner consumption, pending-request binding, and nonmutation controls.
6. Run scoped formatting/static/size checks and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 1,400 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
