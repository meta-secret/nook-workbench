---
title: Merge and deploy registry proxy memory repair
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
plan: plans/hive-isolated-agent-platform/20260817T040800Z-stabilize-registry-proxy-memory.md
nook_pr: 1041
status: completed
started_at: 2026-08-17T04:08:00Z
finished_at: 2026-08-17T05:08:36Z
agent: codex
---

# Merge and deploy registry proxy memory repair

## Outcome

PR #1041 was validated at its exact head, squash-merged, and deployed. The
host-network Traefik registry edge now has a durable 2 GiB memory limit. The
replacement container is healthy with zero restarts, and the public registry
continues to require authentication.

## Evidence

- Kernel OOM records aligned with the registry connection resets, refusals, and
  short reads seen by hosted Hive verification.
- Zot remained healthy and the host had more than 100 GiB available.
- A reversible live mitigation raised Traefik from 256 MiB to 2 GiB before the
  repository contract was changed.
- The Compose resource limit and its focused preflight contract were merged.
- Cortex quality guidance now records the resource contract and OOM failure
  mode after an actionable review finding.
- Complete validation run 31995823790 passed on the rebased exact head after a
  transient BuildKit cache-publication retry.
- Hive verification run 31995816269 passed.
- `task pr:ready PR=1041` reported a fresh base, exact head, successful
  deployment, mergeability, and zero unresolved review threads.
- Merge commit:
  `516dc0f81f9eafeaaa5a68f794d970bb0db8f185`.
- Live Traefik after merged deployment: running, zero restarts, 2 GiB memory
  limit, 4 GiB memory-plus-swap limit, and not OOM-killed.

## Remaining work

The Hive control-plane deployments are healthy, but the most recent durable
task attempts exhausted embedded Codex usage and are terminal until the
reported August 20 reset. The latest bounded queue snapshot has no running or
ready tasks. Eight Hive-labeled pull requests remain open and require renewed
durable ownership after capacity returns.
