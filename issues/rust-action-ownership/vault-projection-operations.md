---
title: Own vault operation application on projection
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-projection
created_at: 2026-09-05T22:49:49Z
updated_at: 2026-09-05T23:15:58Z
source_issues: []
related_prs:
  - 1412
depends_on:
  - issues/rust-action-ownership/secret-import-commit-state.md
---

# Own vault operation application on projection

## Outcome

Vault operation application, secret insertion, and password upsert belong to the `VaultProjection` aggregate that owns the mutated state.

## Scope

Two Rust files with a ceiling of 260 authored additions. Move the operation application helpers onto `VaultProjection`, activate full-module ownership enforcement in the child module, migrate local fixtures, and add focused checkpoint-preservation coverage.

## Acceptance criteria

- [x] `VaultProjection` owns restricted operation application and its private secret/password mutation helpers.
- [x] Topological order, store/schema checks, secret history/conflict semantics, password/checkpoint behavior, membership no-ops, and errors remain unchanged.
- [x] The child module denies homeless functions without blanket suppression.
- [x] Existing five behavior tests and focused checkpoint-preservation coverage pass.
- [x] Hosted Rust/Dylint checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

Projection is a reusable mutable aggregate, so no artificial one-use typestate is introduced. The parent file shrank and the child remains below 550 lines. No public API, wire format, authorization, signature, membership, schema, dependency, logging, fallback, or recovery change.

## Progress

PR #1412 merged as `89092f0bfd950ef1ca85737cf5648bc45e7db342` after exact-head remote Loom verification, hosted PR validation, source SECURITY, and readiness passed.
