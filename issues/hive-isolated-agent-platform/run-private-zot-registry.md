---
title: Run the private OCI registry on k0s with Zot
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-07-30T03:02:25Z
updated_at: 2026-07-30T04:38:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/879
  - https://github.com/meta-secret/nook/pull/881
  - https://github.com/meta-secret/nook/pull/882
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
storage. Existing Hive images survived the digest-verified migration, host
Docker and k0s containerd continue using the private loopback endpoint, and the
legacy Compose registry container is retired.

## Scope

- Add the Zot Kubernetes workload, retained local storage, configuration,
  private host access path, migration, operations, recovery documentation, and
  contract coverage.
- Deploy and verify the merged implementation on the production node.
- Keep hosted GitHub Actions caches unchanged until a safe authenticated
  consumer path exists.
- Exclude public unauthenticated exposure and secret-bearing access from
  untrusted pull-request code.

## Acceptance criteria

- [x] Zot runs non-root with a read-only root filesystem, bounded resources,
      health probes, a pinned image digest, and retained local storage.
- [x] The OCI API is reachable only through the server loopback path by
      default.
- [x] Existing tagged registry content is copied and digest-verified before
      legacy registry shutdown.
- [x] Hive image push and k0s/containerd pull behavior continues at the existing
      registry name.
- [x] Repeated deployment is idempotent and restart-safe.
- [x] Infrastructure contract coverage rejects lost persistence, unsafe
      exposure, unpinned images, and incorrect migration ordering.
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
- Completed the full production deployment through the new loopback registry.

## Findings and decisions

- Zot rejects Docker Schema2 manifests by default; `http.compat: ["docker2s2"]`
  is required to preserve the existing manifest bytes and digest identity.
- The server's existing `127.0.0.1:5000` registry endpoint remains the stable
  Docker and containerd interface. There is no Service, Ingress, NodePort, or
  wildcard host listener.
- The retained PV stores data at `/var/lib/hive/zot`; the previous
  `nook-infra_registry-data` Docker volume remains available for recovery.
- Hosted BuildKit cache replacement remains a separate trust decision:
  untrusted pull-request code cannot safely receive a reusable private-registry
  write credential, and GitHub-hosted runners cannot reach the loopback-only
  endpoint.

## References

- `plans/hive-isolated-agent-platform/2026-07-30T03-02-25Z-run-private-zot-registry.md`
- `worklogs/hive-isolated-agent-platform/2026-07-30T04-38-00Z-private-zot-registry.md`
- `issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md`
- `infra/k0s/manifests/registry/zot.yaml`
- `infra/tasks/registry.yml`
