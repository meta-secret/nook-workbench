---
title: Type password envelope actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/password-envelope-actions.md
created_at: 2026-09-07T10:54:31Z
status: immutable
---

# Plan

1. Refresh origin/main and inventory password-envelope callers and open-PR overlap.
2. Add private consuming owners for entry issuance, envelope attachment, envelope/entry resolution, and envelope rewrap.
3. Preserve wire versions, KDF/work-factor checks, age wrapping, zeroization, and validation/error order exactly.
4. Adapt only auth2/core/WASM direct callers and tests; remove migrated free action exports without changing WASM method signatures.
5. Retain existing behavior coverage for password, vault format, recovery, and security-epoch flows.
6. Run scoped formatting/static/size checks and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 1,400 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
