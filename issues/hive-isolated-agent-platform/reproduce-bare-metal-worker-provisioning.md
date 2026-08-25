---
title: Reproduce bare-metal k0s worker provisioning
status: in_progress
priority: high
automation: manual
owner: cypherkitty
created_at: 2026-08-25T02:50:20Z
updated_at: 2026-08-25T02:50:20Z
source_issues: []
related_prs: []
depends_on: []
---

# Reproduce bare-metal k0s worker provisioning

## Context

The [Hive isolated agent platform](README.md) now spans heterogeneous bare-metal
workers. Capacity can recover quickly only when provider installation, host
bootstrap, private mesh enrollment, k0s joining, ARC qualification, and retained
BuildKit storage are all represented as reviewed repository automation.

## Outcome

An operator can take a compatible blank OVH dedicated server from provider-ready
state to a verified ARC build node with one documented Taskfile workflow and no
interactive host configuration.

## Scope

- Add a typed Bun OVH API client for bounded dedicated-server inspection,
  Debian installation, task polling, and status verification.
- Generate cloud-init from a reviewed repository template and keep credentials
  outside the repository.
- Make host bootstrap and k0s worker enrollment idempotent and fail closed on an
  unexpected server, OS, address, node identity, or storage contract.
- Expand the persistent BuildKit and ARC capacity contract for one additional
  NVMe build node.
- Deploy and verify the purchased worker in the production k0s cluster.
- Exclude an Ironic control plane, public Kubernetes endpoints, DNS changes,
  Docker-in-Docker, host Docker sockets, and migration of durable storage.

## Acceptance criteria

- [ ] One Taskfile entrypoint installs a supported blank OVH server, waits for
      cloud-init and SSH, joins k0s, and qualifies ARC without manual host steps.
- [ ] Provider credentials are read from the private Nook credential store and
      never printed or committed.
- [ ] Re-running host and worker provisioning converges safely.
- [ ] The fourth worker owns its own retained local BuildKit shard and the live
      scale set admits the expanded burst envelope.
- [ ] Manifest contracts, remote validation, live node readiness, ARC dispatch,
      and cold/warm BuildKit reuse pass.

## Progress

- 2026-08-25: Started from the purchased, provider-ready Rise-S server and
  confirmed its exact hardware class, datacenter, blank OS state, and address
  through the authenticated provider API before any reinstall mutation.

## Findings and decisions

- OVH's current reinstall API accepts config-drive cloud-init directly.
- Cloud-init plus idempotent Taskfile reconciliation is the smallest portable
  bootstrap boundary. Ironic would require an unnecessary PXE, BMC, image, and
  lifecycle control plane for the current managed fleet.

## References

- Nook PR 1083
- `infra/Taskfile.yml`
- `infra/tasks/k0s-workers.yml`
- `infra/tasks/arc.yml`

