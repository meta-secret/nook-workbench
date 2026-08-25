---
title: Make BuildKit kernel key capacity reproducible
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-25T19:27:00Z
updated_at: 2026-08-25T19:27:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/hive-isolated-agent-platform/move-trusted-container-workflows-to-arc.md
---

# Make BuildKit kernel key capacity reproducible

## Context

Concurrent rootless BuildKit processes share a host-user kernel key quota. The
operating-system default is too small for the persistent ARC BuildKit topology,
and exhaustion presents as a misleading container-start disk-quota error.

## Outcome

Every qualified ARC build host receives and verifies a persistent kernel key
capacity suitable for concurrent rootless BuildKit workloads before its
BuildKit shard is activated.

## Scope

- Provision the required kernel key limits on every declared ARC build host.
- Persist the limits across reboot and verify the effective runtime values.
- Expose the invariant through repository-owned static contracts.
- Keep the existing regular-Pod, rootless, node-local BuildKit architecture.
- Do not add Docker-in-Docker, Podman, host Docker sockets, or a new runtime.

## Acceptance criteria

- [ ] ARC deployment installs the same persistent kernel key limits on all build hosts.
- [ ] Host preparation fails closed if the effective limits are below the declared floor.
- [ ] Static infrastructure contracts prevent omission or silent reduction of the limits.
- [ ] Focused validation and exact-head review pass.

## Progress

- 2026-08-25: The live cluster was restored by raising the kernel key limits on all current BuildKit hosts.

## Findings and decisions

- The observed disk-quota error was kernel key exhaustion, not filesystem capacity.
- Apply the invariant during existing BuildKit host storage preparation so node activation remains one convergent workflow.

## References

- `infra/tasks/arc.yml`
- `.github/scripts/arc-manifest-contract.ts`
- `infra/k0s/manifests/arc/buildkit.yaml`
