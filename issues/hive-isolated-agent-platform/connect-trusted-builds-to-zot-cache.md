---
title: Connect trusted builds to the private Zot cache
status: done
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-07-30T04:38:00Z
updated_at: 2026-08-21T19:05:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/879
  - https://github.com/meta-secret/nook/pull/1069
  - https://github.com/meta-secret/nook/pull/1070
depends_on:
  - issues/hive-isolated-agent-platform/run-private-zot-registry.md
---

# Connect trusted builds to the private Zot cache

## Context

The Hive isolated agent platform has a private Zot registry on the production
VM. GitHub-hosted builders cannot reach its loopback-only endpoint, while
untrusted pull-request code must not receive reusable cache credentials.

## Outcome

Trusted same-repository Rust validation uses Zot-backed OCI BuildKit cache from
fresh, job-scoped Kata QEMU microVMs. Fork and runtime-dependent jobs remain on
credential-free GitHub-hosted runners.

## Scope

- Keep cache credentials and trusted cache mutation inside the isolated ARC
  workload boundary.
- Route trusted native Rust and Rust ecosystem checks through `nook-k0s`.
- Preserve hosted execution for fork, WASM, browser, release, and
  runtime-dependent jobs.
- Remove Docker image-format tar export and import from cache-only policy jobs.

## Acceptance criteria

- [x] Zot access is authenticated and limited to trusted job-scoped guests.
- [x] Untrusted pull-request jobs cannot obtain registry credentials or mutate
      trusted cache namespaces.
- [x] BuildKit cache import and export are repository-scoped.
- [x] Exact-head validation proves the trusted and hosted runner split.
- [x] Cache telemetry distinguishes Zot-backed jobs from hosted jobs.
- [x] ARC can place ten simultaneous ephemeral runners without a warm pool.

## Progress

- 2026-08-21: PR 1069 was squash-merged as
  `a9e7e0c981e97277dac894465c07f90bbb5bb9eb` and deployed to production.
- 2026-08-21: PR 1070 addressed all review feedback, expanded capacity to ten,
  corrected Rust runner placement, and removed the Docker cache tar round-trip.
- 2026-08-21: PR 1070 was squash-merged as
  `e55bc7a0a9cdeb43a566df025daa5ac8c371d189` and deployed to production.

## Findings and decisions

- ARC uses chart version 0.14.2 and Kata QEMU runtime-rs. Dragonball remains the
  default for Hive because its 4.0.0 runtime could not execute the nested OCI
  workload required by the private per-job BuildKit sidecar.
- Each job receives a fresh Kata QEMU microVM with a private privileged rootful
  BuildKit sidecar reachable only over guest loopback. Docker-in-Docker, Sysbox,
  shared BuildKit, host runtime sockets, host paths, and runner service-account
  tokens remain prohibited.
- Each job retains an 8 vCPU and 16 GiB burst envelope plus 100 GiB disposable
  BuildKit state. Scheduler requests permit ten concurrent Pods on the measured
  node capacity.
- ARC keeps zero warm runners and permits ten concurrent jobs. A live capacity
  proof placed ten distinct runners concurrently; node memory remained below
  51 percent during the proof.
- The dependency-policy target now uses BuildKit `cacheonly` output. Exact-head
  logs contain no Docker image-format export, `sending tarball`, or `loading
  layer` phase; Zot manifest imports complete in seconds.

## References

- `issues/hive-isolated-agent-platform/run-private-zot-registry.md`
- `plans/hive-isolated-agent-platform/20260821T171000Z-scale-isolated-arc-capacity-to-ten-runners.md`
- `infra/k0s/manifests/arc/runner-scale-set-values.yaml`
- `infra/tasks/arc.yml`
