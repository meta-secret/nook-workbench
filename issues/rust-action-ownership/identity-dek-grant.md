---
title: Own identity-held DEK grant comparison
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-identity-dek-grant
created_at: 2026-09-05T10:16:00Z
updated_at: 2026-09-05T10:18:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/enrollment-admission.md
---

# Own identity-held DEK grant comparison

## Outcome

The predicate deciding whether an identity already holds the current authorized DEK grant belongs to `IdentityVaultDek`, and the complete child module enforces function ownership.

## Scope

Two Rust files, estimated 120–180 authored additions and ceiling 220. Move `already_grants` onto the existing owner, migrate its sole reconciliation caller, activate ownership deny and invalid-suppression forbid, and add focused behavior plus private-method compile-fail evidence.

## Acceptance criteria

- [ ] Exact epoch, envelope coverage, duplicate rejection, current-app decryptability, and key equality behavior is preserved.
- [ ] Existing reconciliation tests for repeated, stale, revoked, and advanced-checkpoint paths remain green.
- [ ] The comparison stays internal and its method ownership is compile-fail controlled.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

This is a pure semantic predicate and receives no artificial lifecycle state. It does not independently authenticate every recipient ciphertext, change membership or epoch authority, add recovery, change schemas or cryptography, or alter WASM/TypeScript interfaces.

## Progress

DEV-CORE completed a read-only refreshed inventory and is implementing the published two-file plan from main dbc555139. Validation remains pending.
