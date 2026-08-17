---
title: Bound Hive blocker dependency amplification
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
plan: plans/hive-isolated-agent-platform/20260817T003635Z-bound-hive-blocker-amplification.md
nook_pr: 1036
status: completed
started_at: 2026-08-17T00:36:35Z
finished_at: 2026-08-17T03:08:01Z
agent: codex
---

# Bound Hive blocker dependency amplification

## Outcome

PR #1036 bounded Hive prerequisite depth, added truthful terminal failure for
blocker leaves, migrated the retained graph to schema 9, and preserved
completed dependency artifacts as lineage instead of scheduling edges. The
merged release is deployed on all Hive controllers and four Kata workers.

## Progress

- Correlated the live worker pool with the retained queue and found recursive
  credential, infrastructure-access, and toolchain prerequisite chains.
- Added worker, enqueue, store, and graph guards so a blocker cannot create a
  child prerequisite.
- Added schema-valid blocker failure semantics and behavior-focused Rust
  coverage.
- Preserved completed dependency artifacts through
  `INCLUDES_ARTIFACT_FROM` while active scheduling edges drain normally.
- Addressed every actionable review finding, passed complete exact-head
  validation, and squash-merged PR #1036.
- Deployed merge commit `80688520aa868493bc20c94f3c65311f9f2d0c21`
  as pinned image digest
  `sha256:b8e66f307b7aa982562479a7d3da57b2c000ff864d2cbf55a0fdd77ddd8b2861`.

## Implementation problems

- Automated review found migration, active-chain, lineage, rollback, and
  prompt edge cases over successive exact-head revisions.
- Final validation encountered transient registry short reads. Unchanged-head
  reruns passed.
- Production deployment exposed terminal `Evicted` pod records that blocked
  the drain predicate and a one-shot ready-replica assertion that raced normal
  disposable-worker replacement. Terminal records were removed safely and a
  follow-up deploy hardening slice was opened.

## Validation

- Host-applied `task loom:pre-push` and Cortex audits passed on every pushed
  head.
- Final Hive run 31988007970 passed on the exact PR head.
- Final Rust ecosystem run 31988244923 passed on the exact PR head.
- `task pr:ready PR=1036` reported ready, current base, mergeable state, and
  zero unresolved threads.
- Main and Hive verification passed on the squash merge.
- The guarded production deploy proved Kata sandboxing and forced one worker
  replacement before returning to four ready workers.
- Neo4j reports schema version 9, zero tasks created since deployment, 26
  preserved artifact-lineage edges, and no post-deploy blocker amplification.
- Across multiple heartbeat intervals, blocker leaves moved from blocked to
  failed while the newest task timestamp remained unchanged.

## Remaining work

Harden the deployment drain and readiness predicates under plan
`plans/hive-isolated-agent-platform/20260817T030835Z-harden-hive-deploy-convergence.md`.
