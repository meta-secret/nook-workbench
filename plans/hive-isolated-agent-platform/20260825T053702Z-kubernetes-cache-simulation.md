---
title: Prove Zot and BuildKit on containerized Kubernetes
feature: hive-isolated-agent-platform
issue: none
started_at: 20260825T053702Z
agent: codex
---

# Prove Zot and BuildKit on containerized Kubernetes

## Interpreted request

Add a reproducible containerized Kubernetes integration proof between the fast
Bake cache simulator and live k0s verification. Exercise the production-shaped
Zot and rootless BuildKit workloads through Kubernetes scheduling, service,
storage, policy, authentication, restart, and cache-reuse boundaries.

## Requirements

- Pin the simulated Kubernetes minor to the production Kubernetes minor.
- Run real Zot and rootless BuildKit workloads inside an ephemeral k3d cluster.
- Reuse production manifests through a narrow simulation overlay instead of
  copying their behavior into unrelated fixtures.
- Prove cold publication, same-shard reuse, fresh-shard Zot restoration,
  concurrent isolated scopes, retained state, access control, NetworkPolicy,
  readiness, and deterministic cleanup.
- Keep the existing fast Bake and Zot simulator as an independent proof.
- Expose one documented Task entrypoint and enforce its structure with static
  preflight contracts.
- Run the k3d runtime proof locally. Keep hosted CI limited to static contracts
  and normal exact-head validation.
- Deliver through exact-head validation, review, readiness, squash merge, and
  Workbench completion records.

## Constraints and exclusions

- The k3d node containers are the only authorized nested runtime boundary.
- Do not mount a host runtime socket into Kubernetes workloads and do not run a
  Docker daemon, Podman service, or privileged BuildKit workload.
- Do not claim coverage of k0s-specific host networking, WireGuard, Kata,
  GitHub ARC lifecycle, production capacity, or production performance.
- Keep active production-provisioning work and its pull request read-only.
- Do not weaken production manifests merely to make the simulation pass.
- Do not change ARC routing or deployment workflows for the local proof.
- Do not run heavy product validation locally.

## Change budget and PR sequence

- Estimated authored changed lines: 2,400
- Owning modules, packages, or layers: infrastructure simulation, Kubernetes manifest overlays, Task orchestration, preflight contracts, and CI quality guidance
- Public or cross-module interfaces: `task infra:kubernetes-cache:prove`; no product runtime API changes
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,400
- Current PR slice and acceptance evidence: Complete containerized Kubernetes cache proof; Acceptance evidence: static manifest contracts, local k3d runtime scenarios, and exact-head PR validation
- PR slices and acceptance evidence: Complete containerized Kubernetes cache proof; Acceptance evidence: static manifest contracts, local k3d runtime scenarios, and exact-head PR validation

## Initial plan

1. Define the k3d topology and thin overlays around production Zot and BuildKit manifests.
2. Add deterministic lifecycle orchestration and fixture builds through disposable Kubernetes clients.
3. Assert security, policy, persistence, isolation, restoration, and cleanup behavior.
4. Add preflight and Cortex coverage without replacing the existing fast proof.
5. Format, review, push, run the local k3d proof, validate static contracts on
   the exact head, resolve findings, merge, and publish completion records.

## Completion evidence

- The k3d proof creates and removes its cluster without leaked credentials or state.
- Real Zot and rootless BuildKit Pods become ready from production-derived manifests.
- The cache scenarios demonstrate both retained local reuse and restoration by a fresh shard.
- Unauthorized registry and network access fail while authorized access succeeds.
- Static contracts and exact-head repository checks pass on the merged implementation.

## Safety review

- This record contains no copied request, conversation text, credential,
  private data, execution-output dump, local path, or unnecessary endpoint.
- The proof uses generated ephemeral credentials and removes them during cleanup.
