---
title: Own identity epoch projection
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-identity-epoch
created_at: 2026-09-05T10:37:30Z
updated_at: 2026-09-05T10:37:30Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/identity-dek-grant.md
---

# Own identity epoch projection

## Outcome

Identity epoch labels and event-id test construction belong to their existing domain types, and the complete child module enforces function ownership.

## Scope

One Rust file with a ceiling of 180 authored additions. Move `epoch_label` onto `IdentityVaultDekEpoch`, move the test constructor onto `IdentityVaultEventId`, activate ownership enforcement, and add focused epoch admission and diagnostic evidence.

## Acceptance criteria

- [ ] Legacy initialization, same-epoch advancement, descendant rotation, repeated rotation, and stale rejection behavior remains unchanged.
- [ ] Stale-epoch diagnostic strings remain exact.
- [ ] The module denies homeless functions without invalid suppressions.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

This pure epoch projection receives no artificial typestate. It adds no cryptographic authority and does not alter upstream ancestry validation, schemas, recovery, WASM, TypeScript, dependencies, or logging.

## Progress

DEV-CORE completed a read-only current-main inventory and selected this non-overlapping one-file boundary. Implementation awaits the immutable plan.
