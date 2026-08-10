---
title: Run the private OCI registry on k0s with Zot
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-07-30T03:02:25Z
updated_at: 2026-08-10T00:00:06Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/879
  - https://github.com/meta-secret/nook/pull/881
  - https://github.com/meta-secret/nook/pull/882
  - https://github.com/meta-secret/nook/pull/959
depends_on: []
---

# Run the private OCI registry on k0s with Zot

## Context

The [Hive isolated agent platform](README.md) depended on a legacy OCI
Distribution container managed beside Kubernetes with Docker Compose. Moving
the registry into k0s gives the stateful server workload one deployment,
storage, health, and recovery model.

## Outcome

The production Linux node runs pinned Zot v2.1.18 in k0s with retained local
storage. Existing Hive images survived the digest-verified migration. The
registry now serves authenticated internal consumers through its stable
ClusterIP and authenticated remote consumers through the HTTPS edge. The
legacy Compose registry and loopback port-forward are retired.

Zot reserves one CPU and 2 GiB of memory. It may burst to four CPUs and 8 GiB
during concurrent BuildKit cache transfers.

## Scope

- Add the Zot Kubernetes workload, retained local storage, configuration,
  authenticated access paths, migration, operations, recovery documentation,
  and contract coverage.
- Deploy and verify the merged implementation on the production node.
- Keep write credentials unavailable to untrusted pull-request code.
- Exclude public unauthenticated exposure.

## Acceptance criteria

- [x] Zot runs non-root with a read-only root filesystem, bounded resources,
      health probes, a pinned image digest, and retained local storage.
- [x] The OCI API requires authentication on both internal and public paths.
- [x] Existing tagged registry content is copied and digest-verified before
      legacy registry shutdown.
- [x] Hive image push and k0s/containerd pull behavior continues at the stable
      registry name.
- [x] Repeated deployment is idempotent and restart-safe.
- [x] Infrastructure contract coverage rejects lost persistence, unsafe
      exposure, unpinned images, incorrect migration ordering, and resource
      regressions.
- [x] The merged revision is deployed and verified on the production node.

## Progress

- Published the task-start plan and mapped the Compose, k0s, containerd,
  storage, firewall, and CI cache boundaries.
- Merged the workload and migration in PR #879.
- Hardened bounded catalog access and temporary port-forward cleanup in PR
  #881 after the first production rehearsal.
- Enabled Zot's `docker2s2` compatibility in PR #882 after the second
  production rehearsal exposed Docker Schema2 manifest rejection.
- Migrated and verified all 26 legacy `nook-hive` tags before cutover.
- Completed the initial production deployment through the loopback registry.
- Later retired the loopback port-forward in favor of authenticated ClusterIP
  and HTTPS access for BuildKit cache consumers.
- On 2026-08-09, merged PR #959 and deployed higher Zot capacity for concurrent
  cache traffic. The live rollout and authenticated registry checks passed.
- The merge-triggered Hive job overlapped the Zot metadata rebuild and received
  one transient 502. Its failed job was rerun after readiness and passed.

## Findings and decisions

- Zot rejects Docker Schema2 manifests by default; `http.compat: ["docker2s2"]`
  is required to preserve the existing manifest bytes and digest identity.
- The original loopback-only access decision was superseded by authenticated
  ClusterIP and HTTPS access. No host port-forward remains.
- The retained PV stores data at `/var/lib/hive/zot`; the previous
  `nook-infra_registry-data` Docker volume remains available for recovery.
- Untrusted pull-request code does not receive a reusable registry write
  credential. Cache publication remains limited to trusted paths.
- Four CPUs is the initial burst ceiling because the production storage path,
  rather than CPU, is expected to bound cold transfers. Raise it only when
  production telemetry proves Zot is CPU-bound.

## References

- `plans/hive-isolated-agent-platform/2026-07-30T03-02-25Z-run-private-zot-registry.md`
- `plans/hive-isolated-agent-platform/20260809T232040Z-scale-zot-buildkit-capacity.md`
- `worklogs/hive-isolated-agent-platform/2026-07-30T04-38-00Z-private-zot-registry.md`
- `worklogs/hive-isolated-agent-platform/20260810T000006Z-pr-959-zot-capacity.md`
- `issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md`
- `infra/k0s/manifests/registry/zot.yaml`
- `infra/tasks/registry.yml`

