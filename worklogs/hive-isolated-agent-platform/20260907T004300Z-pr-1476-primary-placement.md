---
title: Primary-dominant ARC placement correction
feature: hive-isolated-agent-platform
issue: null
plan: plans/hive-isolated-agent-platform/20260906T234116Z-primary-dominant-arc-placement.md
nook_pr: 1476
status: completed
started_at: 2026-09-06T23:41:16Z
finished_at: 2026-09-07T00:39:49Z
agent: codex
---

# Primary-dominant ARC placement correction

## Outcome

Replaced hard cross-node spreading with soft `ScheduleAnyway` scoring, retained `maxSkew: 2` and 100/50/1 tier weights, added grouped primary-first host activation, restored the cluster, and squash-merged PR #1476.

## Progress

- Diagnosed the reported 9m06 job as execution on the slower secondary VM rather than queueing or a BuildKit cache miss.
- Proved the identical companion compile took 50.86 seconds on secondary versus 8.27 seconds on a primary node.
- Deployed soft primary-dominant placement while preserving all BuildKit storage, GC, locality, and shard invariants.
- Added primary-first grouped activation so a queued backlog cannot see secondary or overflow before both primaries.
- Observed the final exact-head workload placement at 13 primary, 1 secondary, and 0 overflow, with initial jobs starting 9–24 seconds after run creation.

## Implementation problems

- The first deploy SSH session reset after the remote rollout but before guarded activation.
- A second half-open SSH transport blocked local task progress after remote convergence; only the verified stale local wrapper and SSH child were terminated.
- Hostname-ordered activation briefly exposed `bynull-servo` first and released the backlog there. Normal ephemeral turnover rebalanced live work, and the final source change prevents the weaker-first activation boundary.

## Decisions

- Soft topology spreading lets scheduler scoring and live pressure prefer powerful nodes without making exact ratios a correctness claim.
- Both primaries are activated as one group before secondary and overflow; no sleeps, custom scheduler, or job cancellation were introduced.
- The four 128 GiB node-local BuildKit caches and 8/112/16 GiB GC policy remain unchanged.

## Validation

- Focused ARC contracts, Task dry rendering, Cortex audit, diff/source-size checks, and `task loom:pre-push` passed.
- Hosted PR run 34070116292, Hive run 34070095257, repository-policy run 34070095296, preview deployment, and `task pr:ready PR=1476` passed at exact head `ea22e43d6a322458d62828464a7e830b7e8b6e22`.
- Guarded recovery completed in 2m46.34s with four active nodes, three Ready listeners, four Ready BuildKit shards, Bound 128 GiB storage, unchanged GC, and one local endpoint per node.
- Nook PR: https://github.com/meta-secret/nook/pull/1476

## Remaining work

- Track bounded SSH keepalive and transport timeout hardening for `infra:arc:deploy` as a separate SRE reliability change.
- The independently owned cache-publication tail issue remains outside this correction.
