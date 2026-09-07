---
title: BuildKit capacity and multi-node cache rollout
feature: hive-isolated-agent-platform
issue: null
plan: plans/hive-isolated-agent-platform/20260906T205202Z-buildkit-cache-capacity-placement.md
nook_pr: 1472
status: completed
started_at: 2026-09-06T20:52:02Z
finished_at: 2026-09-06T21:47:21Z
agent: codex
---

# BuildKit capacity and multi-node cache rollout

## Outcome

Expanded all four persistent node-local BuildKit caches to 128 GiB, raised the active GC envelope to 8/112/16 GiB, retained one Ready shard and local endpoint per qualified node, and deployed and merged PR #1472.

## Progress

- Preserved the four-shard BuildKit topology and existing PVC identities while expanding bound capacity.
- Kept runner affinity tiers at primary 100, secondary 50, and overflow 1.
- Verified four Ready BuildKit Pods, four Bound 128 GiB PV/PVC pairs, and node-local Service delivery.

## Implementation problems

- GitHub runner creation paused when the shared API credential exhausted its 5,000-request window; ARC recovered after the automatic reset.
- Hard `maxSkew: 2` made near-equal cross-tier placement a scheduling requirement under burst load, overwhelming the slower secondary VM. PR #1476 corrected that policy.
- Native cache publication exposed a separate long cache-export preparation tail; the existing focused issue remains owned independently.

## Decisions

- Disk capacity is intentionally favored over aggressive cache eviction.
- Each BuildKit shard remains node-local; the Service routes a runner to its local shard rather than sharing cache state across nodes.
- Capacity and placement are separate controls: cache size remains 128 GiB while runner placement is corrected independently.

## Validation

- Focused ARC manifest contracts and `task loom:pre-push` passed.
- Hosted PR, Hive, repository-policy, readiness, and preview validation passed at exact head `1c1c7967d1c9e39fabc3179ca1f563024e58a11b`.
- Live `task infra:arc:deploy` and status verification proved all four 128 GiB shards and retained cache identity.
- Nook PR: https://github.com/meta-secret/nook/pull/1472

## Remaining work

- Placement regression corrected by https://github.com/meta-secret/nook/pull/1476.
- Cache-publication tail remains in the separately owned focused issue.
