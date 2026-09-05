---
title: Own legacy identity-member merging
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-legacy-member-merge
created_at: 2026-09-05T17:03:25Z
updated_at: 2026-09-05T18:55:04Z
source_issues: []
related_prs:
  - 1385
depends_on:
  - issues/rust-action-ownership/replica-insert.md
---

# Own legacy identity-member merging

## Outcome

Legacy member reconciliation belongs to `IdentityRecord`, and the complete migration module enforces function ownership.

## Scope

One Rust file with a ceiling of 180 authored additions. Move `merge_member` onto `IdentityRecord`, adapt its sole caller, activate ownership enforcement, and add focused insertion, metadata, and conflict coverage.

## Acceptance criteria

- [x] Member insertion, key equality, signing-key completion/conflict, and label preservation behavior remain unchanged.
- [x] Identity preference, vault ownership rejection, and duplicate rejection remain unchanged.
- [x] The complete module denies homeless functions without blanket suppression.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

The consuming directory migration already owns lifecycle sequencing; this member operation receives no artificial typestate or new recovery/transaction guarantee. No schemas, cryptography, authorization, WASM interfaces, dependencies, fallback, or logging change.

## Progress

PR #1385 merged as `604f062dbb12a89493ef0d6af04feaa73bb8c551` after exact-head hosted validation, source SECURITY, current-main integration, and readiness passed.
