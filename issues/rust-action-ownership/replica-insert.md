---
title: Own immutable replica insertion classification
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-replica-insert
created_at: 2026-09-05T10:56:17Z
updated_at: 2026-09-05T11:18:26Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1380
depends_on:
  - issues/rust-action-ownership/identity-epoch.md
---

# Own immutable replica insertion classification

## Outcome

Immutable replica insertion classification belongs to `ReplicaInsertStatus`, and the complete store module enforces function ownership while preserving framework entrypoints.

## Scope

One Rust file with a ceiling of 180 authored additions. Move the insertion classifier onto its result enum, adapt two store callers and the Kani proof, inline two Loom helpers without behavior changes, activate ownership enforcement, and add one bounded empty-payload classification test.

## Acceptance criteria

- [x] First-write immutability, exact duplicate detection, conflict rejection, provider separation, ordering, and dequeue behavior remain unchanged.
- [x] Loom poisoning and panic propagation plus the Kani proof entrypoint remain intact.
- [x] The module denies homeless functions without blanket suppression.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

The reusable store and pure classification receive no artificial typestate. This layer does not add signature, authorization, or durability guarantees and changes no exports, schemas, cryptography, recovery, WASM, TypeScript, dependencies, or logging.

## Progress

DEV-CORE implemented the published one-file plan. PR 1380 merged after current-main integration, exact-head source SECURITY, hosted validation, and readiness. See [the worklog](../../worklogs/rust-action-ownership/2026-09-05T11-18-26Z-pr-1380.md).
