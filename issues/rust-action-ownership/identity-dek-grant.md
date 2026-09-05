---
title: Own identity-held DEK grant comparison
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-identity-dek-grant
created_at: 2026-09-05T10:16:00Z
updated_at: 2026-09-05T10:32:51Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1378
depends_on:
  - issues/rust-action-ownership/enrollment-admission.md
---

# Own identity-held DEK grant comparison

## Outcome

The predicate deciding whether an identity already holds the current authorized DEK grant belongs to `IdentityVaultDek`, and the complete child module enforces function ownership.

## Scope

Two Rust files, estimated 120–180 authored additions and ceiling 220. Move `already_grants` onto the existing owner, migrate its sole reconciliation caller, activate ownership deny and invalid-suppression forbid, and add focused behavior plus private-method compile-fail evidence.

## Acceptance criteria

- [x] Exact epoch, envelope coverage, duplicate rejection, current-app decryptability, and key equality behavior is preserved.
- [x] Existing reconciliation tests for repeated, stale, revoked, and advanced-checkpoint paths remain green.
- [x] The comparison stays internal and its method ownership is compile-fail controlled.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

This is a pure semantic predicate and receives no artificial lifecycle state. It does not independently authenticate every recipient ciphertext, change membership or epoch authority, add recovery, change schemas or cryptography, or alter WASM/TypeScript interfaces.

## Progress

DEV-CORE completed a read-only refreshed inventory and implemented the published two-file plan from main `dbc555139`.

- 2026-09-05T10:32:51Z: [PR 1378](https://github.com/meta-secret/nook/pull/1378) merged as `83a7e2a5694af9a5b29f87f142200e0ee12863a0` after source SECURITY, one full hosted validation cycle, and exact-head readiness passed. See the [completion worklog](../../worklogs/rust-action-ownership/2026-09-05T10-32-51Z-pr-1378.md).
