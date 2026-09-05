---
title: Own identity epoch projection
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-identity-epoch
created_at: 2026-09-05T10:37:30Z
updated_at: 2026-09-05T10:53:03Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1379
depends_on:
  - issues/rust-action-ownership/identity-dek-grant.md
---

# Own identity epoch projection

## Outcome

Identity epoch labels and event-id test construction belong to their existing domain types, and the complete child module enforces function ownership.

## Scope

One Rust file with a ceiling of 180 authored additions. Move `epoch_label` onto `IdentityVaultDekEpoch`, move the test constructor onto `IdentityVaultEventId`, activate ownership enforcement, and add focused epoch admission and diagnostic evidence.

## Acceptance criteria

- [x] Legacy initialization, same-epoch advancement, descendant rotation, repeated rotation, and stale rejection behavior remains unchanged.
- [x] Stale-epoch diagnostic strings remain exact.
- [x] The module denies homeless functions without invalid suppressions.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

This pure epoch projection receives no artificial typestate. It adds no cryptographic authority and does not alter upstream ancestry validation, schemas, recovery, WASM, TypeScript, dependencies, or logging.

## Progress

DEV-CORE completed a read-only current-main inventory and implemented the published one-file plan.

- 2026-09-05T10:53:03Z: [PR 1379](https://github.com/meta-secret/nook/pull/1379) merged as `d4ee11a7128f7fdbcd8b4051861c9833e0015da4` after source SECURITY, one full hosted validation cycle, and exact-head readiness passed. See the [completion worklog](../../worklogs/rust-action-ownership/2026-09-05T10-53-03Z-pr-1379.md).
