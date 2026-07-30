---
title: Run the private OCI registry on k0s with Zot
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-07-30T03:02:25Z
updated_at: 2026-07-30T03:02:25Z
source_issues: []
related_prs: []
depends_on: []
---

# Run the private OCI registry on k0s with Zot

## Context

The [Hive isolated agent platform](README.md) currently depends on a legacy OCI
Distribution container managed beside Kubernetes with Docker Compose. Moving
the registry into k0s gives the stateful server workload one deployment,
storage, health, and recovery model.

## Outcome

The production Linux node runs a pinned, durable Zot registry in k0s. Existing
Hive images survive the migration, the host and containerd keep using the
private loopback endpoint, and the legacy Compose registry is retired only
after verified cutover.

## Scope

- Add the Zot Kubernetes workload, retained local storage, configuration,
  private host access path, migration, operations, recovery documentation, and
  contract coverage.
- Deploy and verify the merged implementation on the production node.
- Keep hosted GitHub Actions caches unchanged unless a safe authenticated
  consumer path is proven as part of this delivery.
- Exclude public unauthenticated exposure and secret-bearing access from
  untrusted pull-request code.

## Acceptance criteria

- [ ] Zot runs non-root with a read-only root filesystem, bounded resources,
      health probes, a pinned image digest, and retained local storage.
- [ ] The OCI API is reachable only through the server loopback path by
      default.
- [ ] Existing tagged registry content is copied and digest-verified before
      legacy registry shutdown.
- [ ] Hive image push and k0s/containerd pull behavior continues at the existing
      registry name.
- [ ] Repeated deployment is idempotent and restart-safe.
- [ ] Infrastructure contract coverage rejects lost persistence, unsafe
      exposure, unpinned images, and incorrect migration ordering.
- [ ] The merged revision is deployed and verified on the production node.

## Progress

- Published the task-start plan and mapped the existing Compose, k0s,
  containerd, storage, firewall, and CI cache boundaries.

## Findings and decisions

- Hosted BuildKit cache replacement is a separate trust decision: pull-request
  code cannot safely receive a reusable write credential, while an anonymous
  cache would no longer be private.
- The server's existing loopback registry endpoint is retained so Docker and
  containerd callers do not require a coordinated name migration.

## References

- `plans/hive-isolated-agent-platform/2026-07-30T03-02-25Z-run-private-zot-registry.md`
- `infra/compose.yaml`
- `infra/k0s/config/registry-hosts.toml`
