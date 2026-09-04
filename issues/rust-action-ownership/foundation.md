---
title: Rust action ownership architecture and lint foundation
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-foundation
created_at: 2026-09-04T19:33:00Z
updated_at: 2026-09-04T20:28:01Z
source_issues: []
related_prs: [1339]
depends_on: []
---

# Rust action ownership architecture and lint foundation

## Context

The [feature](README.md) extends domain typing to action ownership and availability.

## Outcome

A canonical Rust policy and opt-in Dylint enforcement establish a small foundation for incremental domain migration.

## Scope

- Cortex policy and a dedicated ownership lint with compiler fixtures.
- Excludes product migrations and global activation.

## Acceptance criteria

- [x] Canonical policy prioritizes simple typestate and controlled state construction.
- [x] Compiler fixtures cover owned methods, unowned functions, and narrow boundary expectations.
- [x] Hosted Dylint checks and exact-head review pass.
- [x] PR readiness and squash merge are verified.

## Progress

- 2026-09-04: Inventory completed; policy implementation assigned.

## Findings and decisions

- Lint starts opt-in; changed code follows policy through review.
- Semantic ownership and authorization require human review and domain tests.

## References

- [Immutable plan](https://github.com/meta-secret/nook-workbench/blob/340cf75ef56c11df05877119eda32c8e7b2cb6e1/plans/rust-action-ownership/2026-09-04T19-32-00Z-foundation.md)

- 2026-09-04: [PR 1339](https://github.com/meta-secret/nook/pull/1339) opened. Cortex audit and security review passed. First hosted cycle identified pinned compiler API mismatch and macro-fixture policy violations; both assigned for correction. Kani also encountered a missing registry layer before proof execution.
- 2026-09-04: Completed. Exact-head hosted validation and readiness passed; PR 1339 squash-merged as b2bc663c0ed6d963f3ce13461731a5887dfafa3b. [Worklog](../../worklogs/rust-action-ownership/2026-09-04T20-28-01Z-pr-1339.md). Product adoption remains a separate proposed deliverable.
