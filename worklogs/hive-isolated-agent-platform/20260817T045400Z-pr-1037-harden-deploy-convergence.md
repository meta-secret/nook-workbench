---
title: Harden Hive deploy convergence
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
plan: plans/hive-isolated-agent-platform/20260817T030835Z-harden-hive-deploy-convergence.md
nook_pr: 1037
status: completed
started_at: 2026-08-17T03:08:35Z
finished_at: 2026-08-17T04:54:00Z
agent: codex
---

# Harden Hive deploy convergence

## Outcome

PR #1037 made Hive deployments converge safely when Kubernetes retains
terminal pod records or replaces disposable workers during verification. The
merged release deployed on its first attempt and remained healthy through
multiple worker heartbeat intervals.

## Progress

- Changed graph-client drain logic to ignore only terminal `Succeeded` and
  `Failed` pods while running or terminating graph clients continue to block.
- Changed readiness to count four non-terminating running pods whose Hive
  container is ready across three consecutive samples.
- Added an executable inline-shell harness and static infrastructure contracts
  for terminal records, terminating pods, and stable readiness.
- Addressed every actionable review finding, passed complete exact-head
  validation, and squash-merged PR #1037.
- Deployed merge commit `3f4737cee1fb45348de59dd2aa9556b9c0c47997`
  as pinned image digest
  `sha256:2529c818d9887b3ff6572368f19202960e4225d5fe7f43a5bd7ebd3e5c836fb3`.

## Implementation problems

- The initial standalone shell helper violated the infrastructure source
  policy and was moved into the owning Taskfile with exact extraction tests.
- Review found that terminating running clients must still block drain and
  that terminating ready workers must not satisfy the ready-pool predicate.
- Hosted validation encountered transient registry resets and shared-runner
  failures. An unchanged-tree exact-head retry passed.
- Frequent REST polling exhausted the GitHub core quota, so final monitoring
  used lower-frequency GraphQL rollups until the authoritative readiness audit
  could run after reset.

## Validation

- Host-applied pre-push formatting and Cortex consistency audits passed.
- Final Hive run 31994494995 and repository-policy run 31994495086 passed on
  exact head `6700cde2f8bfd4d630c52d2d0f6d2fac671bbb53`.
- Complete PR validation run 31994517103 passed, including native, WASM, Node,
  web, coverage, Dylint, Kani, Proptest, Insta, Loom, fuzz, and dependency
  security checks. Browser and extension E2E were correctly skipped for the
  non-UI change.
- `task pr:ready PR=1037` reported a current mergeable head, successful Pages
  deployment, and zero unresolved review threads.
- The production deployment completed without manual pod deletion. All four
  workers and the dispatcher, observer, and reaper became ready. Forced worker
  replacement temporarily reduced the pool to three, then returned it to four
  and passed stable readiness.
- All active workers had zero restarts. Kata retained guest seccomp, non-root
  UID/GID 1000, zero capabilities, and `NoNewPrivs`.
- Neo4j reported schema version 9, 26 artifact-lineage edges, and a fully
  terminal queue: 2 completed and 48 truthful historical failures. Multiple
  post-deploy snapshots showed no running or blocked tasks and no new task
  creation.

## Remaining work

No follow-up is required for this incident. One old terminal
`ContainerStatusUnknown` pod record remains as harmless Kubernetes history and
correctly does not block future deployments.
