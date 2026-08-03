---
title: Repair Hive dispatcher process exhaustion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-02T17:18:47Z
agent: codex
status: completed
finished_at: 2026-08-03T10:32:28Z
---

# Repair Hive dispatcher process exhaustion

## Interpreted request

Restore end-to-end Hive ownership of failed Main revisions. The immediate
production incident must be unblocked, and the dispatcher must remain healthy
across long-running Workbench polling rather than silently exhausting its
ability to launch Git operations.

## Requirements

- Remove the detached Git-process lifecycle that accumulates unreaped children
  while the dispatcher is the container's first process.
- Add behavior-focused regression coverage for foreground Workbench cleanup and
  an operational health signal that detects stalled synchronization.
- Preserve the token-free dispatcher, Kata isolation, Neo4j durability, and
  the existing Main-failure handoff contract.
- Restore production service, deploy the immutable repair, and verify that the
  waiting Main incident is claimed and progresses through normal Hive delivery.
- Validate and deliver the source change through the repository's hosted,
  exact-head pull-request workflow.

## Constraints and exclusions

- Do not suppress or retire the failed Main incident.
- Do not weaken sandboxing, network policy, credential isolation, validation,
  or squash-merge requirements.
- The product failure remains owned by Hive after dispatcher recovery; this
  task repairs the orchestration path rather than bypassing it with a direct
  product change.

## Initial plan

1. Recover the live dispatcher and capture bounded proof that Workbench polling
   and queue access resume.
2. Make Git cleanup synchronous and add process-lifecycle plus health-contract
   regressions.
3. Format, publish, and run focused and complete hosted validation on the exact
   pull-request head.
4. Squash-merge, deploy the pinned Hive image, and verify dispatcher health,
   durable queue state, and Main-repair progress.
5. Publish the completion worklog, issue update, and agent statistics.

During the production soak, the new startup probe exposed a second bounded
failure: a cold dispatcher reconciles more ready incident records than the
shared anonymous GitHub REST API budget reliably permits. Read and fail-closed
validate the public run page instead, preserving the dispatcher credential
boundary while avoiding the REST rate budget, before restarting the soak.

The merged public-page repair rollout exposed a third deployment-lifecycle
failure: normal image deployment can overwrite Hive's newer cluster-persisted
Codex refresh credential with an older local bootstrap file. Separate
one-time/explicit credential rotation from routine deployment, preserve the
cluster-owned Secret during public-Zot image rollouts, and cover that ownership
contract mechanically before the final production soak.

## Completion evidence

- PRs #905 through #908 and #911 were squash-merged after exact-head Hive,
  source-architecture, Rust ecosystem, and complete PR validation.
- Production uses the public Zot digest
  `sha256:95e575769d203a043b3f94734a88833a46984a89d3ba91b2c78275b45f7ce4dc`.
  Four workers, dispatcher, observer, and reaper are ready with zero restarts.
- Dispatcher health and progress remained green for more than two polling
  intervals. The health contract found zero unreaped child processes.
- The original Main run succeeded on its unchanged retry. Final merge commit
  `44ae7e6ff28237a37ecc2d19aaf0dc69e7c4b436` passed Main run
  [30803662302](https://github.com/meta-secret/nook/actions/runs/30803662302),
  including both browser suites and deployment.
- Routine deploy preserved the cluster-owned Codex Secret; explicit rotation
  completed separately and restored the four-replica pool.
- Linked Workbench issue, completion worklog, and PR statistics are published.

## Safety review

- This plan contains no raw prompt, chat transcript, secret, private data, raw
  log, local path, or unnecessary infrastructure detail.
