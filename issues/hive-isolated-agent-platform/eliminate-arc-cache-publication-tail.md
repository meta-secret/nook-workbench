---
title: Eliminate the ARC verified-cache publication tail
status: done
priority: high
automation: agent
owner: cypherkitty
created_at: 2026-08-22T21:33:00Z
updated_at: 2026-09-08T14:00:23Z
source_issues: []
related_prs:
  - 1077
  - 1083
  - 1562
  - 1566
depends_on:
  - issues/hive-isolated-agent-platform/route-trusted-main-workloads-through-arc.md
---

# Eliminate the ARC verified-cache publication tail

## Context

PR 1077 proved that trusted workloads start promptly on ephemeral `nook-k0s`
and `nook-k0s-hive` Kata runners. Exact merged-run evidence also isolated a
remaining long tail after verification: successful jobs continue serializing
and publishing verified BuildKit cache state to the registry.

## Outcome

Successful ARC jobs preserve useful cache lineage without a large serialized
registry-export tail. A fresh isolated runner can consume the result without
sharing a writable BuildKit daemon or another job's mutable filesystem.

## Scope

- Measure cache publication duration and bytes independently from verification.
- Design concurrency-safe promotion for content-addressed or copy-on-write
  BuildKit state local to the k0s node.
- Retain registry export only where it provides recovery or cross-node value.
- Run cache telemetry through the repository Bun toolchain.
- Do not introduce Docker-in-Docker, Sysbox, a host Docker socket, or shared
  writable per-job BuildKit state.

## Acceptance criteria

- [x] Main and Hive report verification time separately from cache publication.
- [x] An unchanged fresh ARC job reuses the promoted cache without transferring
      the full cache through the registry.
- [x] Concurrent successful jobs cannot corrupt or overwrite a newer seed.
- [x] Cache telemetry runs with Bun and has no best-effort `node` failure.
- [x] Exact-head and post-merge runtime evidence quantify the improvement.

## Progress

- 2026-08-22: Merged run evidence showed Hive verification had completed while
  the job remained active in `Publish verified Hive cache`; a superseded Main
  job showed the same behavior for native cache publication.
- 2026-08-23: PR 1083 replaced full registry publication on the qualified ARC
  worker with generation-checked Btrfs reflink promotion. Exact-head Hive and
  ordinary smoke runs completed with reusable state, and ten concurrent
  ordinary runtime jobs succeeded on one ephemeral scale set.
- 2026-08-23: Post-merge Main evidence showed that production jobs still run a
  multi-minute minimal registry handoff because only the operational smoke path
  requests local seed promotion. Reopened the issue for a bounded follow-up
  that lets successful trusted jobs request promotion without exposing the host
  cache-control directory to job code.
- 2026-09-08: PR 1562 reduced Docker cache probes from fourteen to three for
  native and WASM, to one for preflight and web, and to zero for the portable
  WASM proof. It also isolated cache publication from required outcome gates,
  published one verified native graph, added phase telemetry, pinned a current
  immutable Dockerfile frontend, and restored the intended four-shard BuildKit
  fleet without deleting caches.
- 2026-09-08: PR 1566 repaired the public Main Rust task dispatch exposed by
  the first replacement run. The exact merge commit's Main run passed. Native
  verification fell from 14m20s to 9m05s; setup fell from 1m06s to 3s and
  publication from 9m40s to 6m06s. Export telemetry attributed 190.3s to
  BuildKit preparation and 16.3s to registry sending, while sccache reported
  2,760 hits with no misses or errors.

## Findings and decisions

- Ten ephemeral runners and local Zot remove scheduling and network-distance
  defects, but do not remove BuildKit cache serialization cost.
- The solution must preserve per-microVM isolation and support concurrent jobs;
  a shared mutable BuildKit service is not assumed.
- Each Kata job receives a private 32 GiB sparse BuildKit filesystem cloned
  from a read-only seed. Successful jobs promote through an exclusive lock only
  when the seed generation still matches, preventing stale overwrite.
- A 64 GiB compute node can admit ten ordinary ARC microVMs. Hive's linker
  workload needs a larger BuildKit memory budget, so seven fully saturated Hive
  microVMs are the safe per-node capacity while the scale set may queue up to
  ten.
- Required validation and cache publication remain on the same verified shard,
  but lightweight outcome gates let downstream work depend on validation
  without inheriting publisher latency.
- Registry bandwidth is not the dominant residual cost. The measured send took
  16.3s; content preparation and compression took 190.3s, so future tuning must
  preserve portable-cache correctness while targeting BuildKit preparation.

## References

- Nook PR 1077
- Nook PR 1083
- Main run 32599101656
- Hive run 32599101547
- Exact-head Hive smoke run 32620006296
- Exact-head ordinary smoke run 32620238859
- Nook PR 1562
- Nook PR 1566
- Main run 34232082164
- Worklog 2026-09-08T14-00-23Z-arc-cache-publication-throughput.md
