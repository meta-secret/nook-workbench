---
title: Own legacy identity-member merging
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-legacy-member-merge
created_at: 2026-09-05T17:03:25Z
updated_at: 2026-09-05T17:03:25Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/replica-insert.md
---

# Own legacy identity-member merging

## Outcome

Legacy member reconciliation belongs to `IdentityRecord`, and the complete migration module enforces function ownership.

## Scope

One Rust file with a ceiling of 180 authored additions. Move `merge_member` onto `IdentityRecord`, adapt its sole caller, activate ownership enforcement, and add focused insertion, metadata, and conflict coverage.

## Acceptance criteria

- [ ] Member insertion, key equality, signing-key completion/conflict, and label preservation behavior remain unchanged.
- [ ] Identity preference, vault ownership rejection, and duplicate rejection remain unchanged.
- [ ] The complete module denies homeless functions without blanket suppression.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

The consuming directory migration already owns lifecycle sequencing; this member operation receives no artificial typestate or new recovery/transaction guarantee. No schemas, cryptography, authorization, WASM interfaces, dependencies, fallback, or logging change.

## Progress

DEV-CORE selected this non-overlapping one-file boundary from current main. Implementation awaits the immutable plan.
