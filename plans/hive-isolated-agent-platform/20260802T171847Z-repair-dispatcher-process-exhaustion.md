---
title: Repair Hive dispatcher process exhaustion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-02T17:18:47Z
agent: codex
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
  existing Main-failure handoff contract.
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

## Completion evidence

- A merged Nook pull request with green exact-head repository checks.
- A pinned production Hive deployment with no accumulating defunct Git
  children and a passing dispatcher health signal.
- The waiting Main-failure incident is durably claimed and advances through a
  Hive-owned repair or truthful terminal result.
- Linked Workbench issue, worklog, and statistics records.

## Safety review

- This plan contains no raw prompt, chat transcript, secret, private data, raw
  log, local path, or unnecessary infrastructure detail.
