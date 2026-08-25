---
title: Move trusted container workflows onto ARC
status: in_progress
priority: high
automation: manual
owner: codex
created_at: 2026-08-25T05:53:58Z
updated_at: 2026-08-25T05:53:58Z
source_issues: []
related_prs: []
depends_on:
  - issues/hive-isolated-agent-platform/complete-actions-arc-migration.md
---

# Move trusted container workflows onto ARC

## Context

The repository-wide placement inventory records many trusted workflows as
hosted-runtime exceptions. The remote browser suite is one such exception and
spent almost thirty minutes on a GitHub-hosted runner despite available ARC
capacity. ARC runners intentionally expose BuildKit without a Docker daemon,
so changing only the runner label would break Tasks that still invoke runtime
containers.

## Outcome

Trusted jobs use ARC through Kubernetes-native job and service containers.
Browser and other runtime Tasks no longer require a nested container daemon.
Hosted execution remains only where untrusted fork or Dependabot input must not
reach private infrastructure.

## Scope

- Enable and validate ARC Kubernetes job-container execution.
- Replace runtime container wrappers needed by trusted workflows.
- Route every compatible trusted workflow job to the general or Hive ARC set.
- Preserve GitHub-hosted isolation for untrusted pull-request inputs.
- Keep DinD, host runtime sockets, Podman, Python automation, and Kata out of the
  new regular-pod execution path.

## Acceptance criteria

- [ ] The remote browser suite runs successfully on `nook-k0s`.
- [ ] Every workflow job has an explicit, executable placement classification.
- [ ] All trusted compatible jobs use ARC; hosted jobs are limited to explicit
      untrusted-input exceptions.
- [ ] Kubernetes job containers and services replace runtime Docker calls in
      the migrated paths.
- [ ] Focused contracts, exact-head validation, performance evidence, review,
      and merge pass.

## Progress

- 2026-08-25: The triggering remote browser run was measured at 29m28s on a
  GitHub-hosted runner. The current workflow inventory contains 45 jobs, 14 ARC
  routes, and 31 hosted placements.

## Findings and decisions

- A runner-label-only migration is invalid because the current ARC image has
  BuildKit client access but no runtime daemon or socket.
- Untrusted fork and Dependabot code remains outside the private ARC trust
  domain.

## References

- Nook PR 1101
- `.github/workflows/remote.yml`
- `infra/k0s/manifests/arc/runner-scale-set-values.yaml`
- `.github/scripts/runner-placement.ts`
