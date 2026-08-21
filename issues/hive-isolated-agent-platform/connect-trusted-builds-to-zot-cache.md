---
title: Connect trusted builds to the private Zot cache
status: in_progress
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-07-30T04:38:00Z
updated_at: 2026-08-21T05:05:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/879
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

- [ ] The Zot endpoint used by hosted trusted runners is TLS-protected and
      authenticated with short-lived, least-privilege identity.
- [ ] Untrusted pull-request jobs cannot obtain registry credentials or mutate
      trusted cache namespaces.
- [ ] BuildKit cache import/export is digest-verifiable and repository-scoped.
- [ ] Hosted validation proves trusted use, untrusted denial, fallback
      behavior, retention, and cache-poisoning boundaries.
- [ ] Cache telemetry distinguishes Zot-backed trusted jobs from direct or
      GitHub-cache untrusted jobs.

## Progress

- 2026-08-21: Claimed for implementation through the repository-scoped ARC
  scale set described by
  `plans/hive-isolated-agent-platform/20260821T010000Z-run-trusted-actions-on-k0s-with-arc.md`.

## Findings and decisions

- The production registry is intentionally loopback-only today.
- Registry hosting and safe CI cache consumption are separate trust and
  networking problems.
- ARC runners will use Kubernetes container hooks and the Buildx Kubernetes
  driver on the existing Kata Dragonball microVM runtime.
- Docker-in-Docker, Sysbox, nested container engines, and host runtime socket
  mounts are prohibited.

## References

- `issues/hive-isolated-agent-platform/run-private-zot-registry.md`
- `infra/k0s/manifests/registry/zot.yaml`
- `infra/tasks/registry.yml`
