---
title: Local Kubernetes cache portability proof
feature: hive-isolated-agent-platform
issue: none
plan: plans/hive-isolated-agent-platform/20260825T053702Z-kubernetes-cache-simulation.md
nook_pr: 1103
status: completed
started_at: 2026-08-25T05:37:02Z
finished_at: 2026-08-25T07:58:45Z
agent: codex
---

# Local Kubernetes cache portability proof

## Outcome

PR 1103 added a production-derived local k3d proof for Zot and rootless
BuildKit. The proof runs three BuildKit shards on three agents and uses Zot as
the portable cache boundary.

The final delivery does not change ARC routing, production deployment
manifests, or hosted Remote execution. CI checks the proof's static contracts.
The full k3d runtime remains a local operator proof.

## Progress

- Reused production namespace, Zot, BuildKit, and NetworkPolicy resources
  through a thin Kustomize overlay.
- Added one documented entrypoint: `task infra:kubernetes-cache:prove`.
- Proved authorized and denied BuildKit access through the production
  node-local Service.
- Proved Remote cannot write stable Main refs while exact-head isolated refs
  remain separate.
- Proved local cache reuse after BuildKit Pod recreation, Zot recovery after
  Pod recreation, and cold-shard restoration through Zot.
- Pinned k3d, K3s, BuildKit, and helper images. Generated ephemeral registry
  credentials and removed the exact proof cluster on completion.
- Added static preflight contracts for manifest reuse, isolation, lifecycle,
  cache assertions, and the local-only execution boundary.

## Implementation problems

- GitHub-hosted k3d could not reliably route direct or Service traffic between
  its containerized nodes. Those experiments were removed from the delivery
  when the owner established that the runtime proof should remain local.
- The first review found that failed cluster inventory could be treated as an
  absent cluster. The final controller fails closed and grants cleanup
  ownership only after successful cluster creation.
- The first ACL assertion accepted any authorization error. The final proof
  requires evidence that BuildKit reached the cache-export phase before Zot
  denied the stable-ref write.

## Decisions

- Keep the k3d runtime proof local. Do not add it to ARC or hosted Remote
  routing.
- Keep production Kubernetes manifests read-only and derive simulation scale
  and storage changes through one overlay.
- Use same-node clients and the production node-local BuildKit Service.
- Treat k0s lifecycle, multi-host WireGuard, Kata, ARC lifecycle, capacity, and
  performance as production-only evidence.

## Validation

- The exact-head local k3d v5.9.0 proof passed all cache, authorization,
  NetworkPolicy, restart, restore, isolation, and cleanup scenarios.
- Exact-head hosted static preflight run 32823465745 passed.
- Complete exact-head PR validation run 32823488341 passed every required Rust,
  WASM, web, coverage, policy, Hive, and preview gate.
- Review findings were fixed or dispositioned with visible replies. All four
  conversations were resolved.
- `task pr:ready PR=1103` passed on current Main with zero unresolved threads.
- PR 1103 squash-merged as `d41d457222844812fe9fca0fd6081a694fbd1767`.

## Remaining work

None for this delivery. Live k0s remains the authority for production routing,
isolation, capacity, and lifecycle behavior.
