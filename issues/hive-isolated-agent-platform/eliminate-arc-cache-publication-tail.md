---
title: Eliminate the ARC verified-cache publication tail
status: proposed
priority: high
automation: manual
owner: unassigned
created_at: 2026-08-22T21:33:00Z
updated_at: 2026-08-22T21:33:00Z
source_issues: []
related_prs:
  - 1077
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

- [ ] Main and Hive report verification time separately from cache publication.
- [ ] An unchanged fresh ARC job reuses the promoted cache without transferring
      the full cache through the registry.
- [ ] Concurrent successful jobs cannot corrupt or overwrite a newer seed.
- [ ] Cache telemetry runs with Bun and has no best-effort `node` failure.
- [ ] Exact-head and post-merge runtime evidence quantify the improvement.

## Progress

- 2026-08-22: Merged run evidence showed Hive verification had completed while
  the job remained active in `Publish verified Hive cache`; a superseded Main
  job showed the same behavior for native cache publication.

## Findings and decisions

- Ten ephemeral runners and local Zot remove scheduling and network-distance
  defects, but do not remove BuildKit cache serialization cost.
- The solution must preserve per-microVM isolation and support concurrent jobs;
  a shared mutable BuildKit service is not assumed.

## References

- Nook PR 1077
- Main run 32599101656
- Hive run 32599101547
