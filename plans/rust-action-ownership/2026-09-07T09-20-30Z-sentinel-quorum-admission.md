---
title: Type Sentinel opened-share admission and quorum reconstruction ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-quorum-admission.md
created_at: 2026-09-07T09:20:30Z
status: immutable
---

# Plan

1. Refresh origin/main and inventory all four free operations, their callers, existing tests, and the open PR overlap before editing.
2. Extract a private quorum child with data-carrying owners for opened contributions, validation, first-threshold selection, reconstruction, and consuming key derivation.
3. Add borrowed share-opening and reconstruction requests that retain exact identity, records, contribution material, and version-specific paths through consuming transitions.
4. Adapt only the native identity-opening and existing auth/core call sites; preserve public WASM signatures, response/session checks, storage ordering, zeroization, HKDF labels, and schemas.
5. Retain the existing 38 tests and add focused contribution mismatch/error-order, extra-share validation, nonmutation, private-state, and consumption controls.
6. Enable ownership denial and invalid-suppression prohibition only in the completed new quorum child; leave issuance/counting helpers deferred.
7. Run scoped formatting/static/retention/symbol/size checks and `task loom:pre-push` without local product builds/tests; rebase before exact-head SECURITY review.
8. Deliver one cohesive PR below 1,400 authored additions, refresh main before hosted validation and merge, run hosted gates and remote Loom, obtain readiness, merge, and publish Workbench completion records.
