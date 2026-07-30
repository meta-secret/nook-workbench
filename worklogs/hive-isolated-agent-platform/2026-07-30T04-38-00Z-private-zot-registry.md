---
title: Private Zot registry production delivery
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/run-private-zot-registry.md
plan: plans/hive-isolated-agent-platform/2026-07-30T03-02-25Z-run-private-zot-registry.md
nook_pr: 879
status: completed
started_at: 2026-07-30T03:02:25Z
finished_at: 2026-07-30T04:38:00Z
agent: codex
---

# Private Zot registry production delivery

## Outcome

The production Linux VM now runs Zot v2.1.18 inside k0s as Hive's private OCI
registry. It retains data on a local PV, is exposed only at
`127.0.0.1:5000`, and replaced the legacy Compose Distribution container
without losing any tagged manifests.

## Progress

- Added a digest-pinned, non-root Zot Deployment, restrictive security
  contexts, health probes, default-deny network policies, and a retained local
  PV/PVC.
- Added deploy, health, diagnostic, uninstall, and guarded legacy migration
  tasks.
- Preserved the existing host registry name through a hardened, restartable
  systemd loopback forwarder.
- Added Ruby, Python, and Rust contract coverage for workload hardening,
  migration ordering, digest preservation, cleanup, and private exposure.
- Merged PRs #879, #881, and #882 after exact-head hosted validation.
- Migrated 26 tags, built and pushed the current Hive image, and rolled four
  healthy Hive workers through the new registry.

## Implementation problems

- Distribution rejected the initial `_catalog?n=10000` query. The migration now
  uses a supported 1,000-item bound and fails closed if pagination appears.
- The first temporary port-forward cleanup stopped its sudo wrapper but could
  leave the k0s child alive. Cleanup now terminates and bounds both processes.
- Zot returned HTTP 415 for existing Docker Schema2 manifests. Official Zot
  compatibility configuration showed that `docker2s2` must be explicitly
  enabled to preserve those manifests and their digests.
- Each failed production rehearsal left the old registry serving and avoided
  cutover; the next merged repair resumed the same guarded migration.

## Decisions

- Keep Zot private and loopback-only rather than add unauthenticated cluster or
  public exposure.
- Retain the legacy Docker volume after successful cutover as a recoverable
  rollback artifact.
- Keep GitHub-hosted PR BuildKit cache on GitHub's cache backend. A private Zot
  cache consumer requires a separate authenticated, trusted-workflow design.

## Validation

- PR #879 exact-head PR, Rust ecosystem, source-architecture, focused
  preflight, and Hive verification runs passed.
- PR #881 passed both its initial and base-refreshed complete gate sets; PR
  #882 passed PR run `30513207754`, Rust run `30513207608`, source run
  `30513202779`, and Hive run `30513202750`.
- Production `task infra:deploy` completed with four `4/4` Hive pods healthy.
- `task infra:registry:check` and `task infra:registry:diagnose` passed.
- Zot is `1/1` available; its PVC is Bound and PV reclaim policy is Retain.
- The systemd loopback service is enabled and active, and `ss` shows only
  `127.0.0.1:5000`.
- The old registry container count is zero and the recovery volume
  `nook-infra_registry-data` remains.
- A forced Zot rollout restart preserved current-image manifest digest
  `sha256:891182aeac4797cbefce3d582c0f3d8e4954b9eed5409825d9555ec87ef7a67b`
  and all 26 tags.

## Remaining work

- `issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md`
  tracks authenticated cache use by trusted builds. It must not expose
  reusable registry credentials to untrusted pull-request code.
