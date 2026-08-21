---
title: Connect trusted builds to the private Zot cache
status: done
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-07-30T04:38:00Z
updated_at: 2026-08-21T10:55:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/879
  - https://github.com/meta-secret/nook/pull/1069
depends_on:
  - issues/hive-isolated-agent-platform/run-private-zot-registry.md
---

# Connect trusted builds to the private Zot cache

## Context

The [Hive isolated agent platform](README.md) now has a private Zot registry on
the production VM, but GitHub-hosted builders cannot reach its loopback-only
endpoint. Untrusted pull-request code must not receive a reusable credential
that can read or overwrite private cache content.

## Outcome

Trusted branch and release builds can use Zot-backed OCI BuildKit cache through
an authenticated, encrypted, auditable path, while fork and untrusted
pull-request jobs retain a credential-free cache backend.

## Scope

- Design TLS identity, short-lived authorization, repository isolation,
  retention, and cache poisoning protections.
- Enable Zot cache export/import only for workflows with a proven trusted
  identity.
- Preserve a credential-free GitHub-hosted path for untrusted PR code.
- Exclude public anonymous registry writes and reusable credentials in PR
  workflows.

## Acceptance criteria

- [x] The Zot endpoint used by hosted trusted runners is TLS-protected and
      authenticated with short-lived, least-privilege identity.
- [x] Untrusted pull-request jobs cannot obtain registry credentials or mutate
      trusted cache namespaces.
- [x] BuildKit cache import/export is digest-verifiable and repository-scoped.
- [x] Hosted validation proves trusted use, untrusted denial, fallback
      behavior, retention, and cache-poisoning boundaries.
- [x] Cache telemetry distinguishes Zot-backed trusted jobs from direct or
      GitHub-cache untrusted jobs.

## Progress

- 2026-08-21: Claimed for implementation through the repository-scoped ARC
  scale set described by
  `plans/hive-isolated-agent-platform/20260821T010000Z-run-trusted-actions-on-k0s-with-arc.md`.
- 2026-08-21: PR 1069 was squash-merged as
  `a9e7e0c981e97277dac894465c07f90bbb5bb9eb` and deployed to the production
  k0s cluster. Exact-head ARC smoke run 32473602676 and complete validation run
  32473850527 passed.

## Findings and decisions

- The production registry is intentionally loopback-only today.
- Registry hosting and safe CI cache consumption are separate trust and
  networking problems.
- ARC runners will use Kubernetes container hooks and the Buildx Kubernetes
  driver on the existing Kata Dragonball microVM runtime.
- Docker-in-Docker, Sysbox, nested container engines, and host runtime socket
  mounts are prohibited.
- The earlier container-hook and Dragonball choice is superseded by live
  runtime evidence. Dragonball 4.0.0 could not run the required nested OCI
  workload and left stale just-in-time runners, while QEMU passed the same
  qualification. QEMU is therefore limited to the ARC scale set; Hive and the
  cluster default remain on Dragonball.
- Each selected job receives a fresh Kata QEMU microVM with the runner and its
  own privileged rootful BuildKit sidecar inside that guest. BuildKit is
  reachable only over guest loopback. There is no shared BuildKit service,
  Docker daemon, Docker socket, host path, or runner service-account token.
- The per-job envelope is 8 vCPU, 16 GiB memory, and 100 GiB disposable storage.
  BuildKit uses a 96 GiB sparse ext4 loop image and an 80 GB garbage-collection
  target. ARC keeps zero warm runners and permits at most four concurrent jobs.
- Trusted cache health is proved with a signed, uncached SeaweedFS S3 probe.
  Zot layer access stays local to the cluster, and the registry main-writer
  credential is not mounted into the runner namespace.
- No remaining implementation work is required for this focused issue.

## References

- `issues/hive-isolated-agent-platform/run-private-zot-registry.md`
- `infra/k0s/manifests/registry/zot.yaml`
- `infra/tasks/registry.yml`
