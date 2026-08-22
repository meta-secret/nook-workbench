---
title: Isolated-write module DAG execution
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-22T18:40:13Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-workflow/typed-module-context-and-read-only-dag.md
---

# Isolated-write module DAG execution

## Context

The read-only DAG must gain a controlled write path before independent module
experts can implement code concurrently.

## Outcome

Ready module experts write only inside disposable isolated worktrees. Loom
validates, accepts, hashes, and integrates their change sets before dependent
nodes start from a new exact baseline.

## Scope

- Add an isolated-write workspace policy and disposable worktree lifecycle.
- Enforce allowed and forbidden paths, clean baselines, and non-overlapping
  ready-wave resources.
- Add Loom-owned change-set finalization and validation receipts.
- Integrate accepted changes in deterministic topological order.
- Record workspace, validation, acceptance, integration, and cleanup events.
- Make the first local implementation explicitly non-resumable and fail closed
  after process loss.
- Exclude shared-worktree writers, automatic conflict resolution, and Hive.

## Acceptance criteria

- [ ] Concurrent writers cannot share a worktree or overlap resource claims.
- [ ] Out-of-scope changes and dirty or drifting baselines fail closed.
- [ ] Dependents see only accepted, digest-verified ancestor changes.
- [ ] Shared files remain serialized under the delivery owner or an explicit
      integration node.
- [ ] Failure cleanup and event replay validation are covered by focused tests.
- [ ] Exact-head hosted validation and readiness pass before squash merge.

## Progress

- Waiting for typed read-only module planning.

## Findings and decisions

- Loom, not a child agent, owns diff inspection, artifact identity, acceptance,
  and integration.

## References

- `agentic-ai/loom/src/agent-workflow/`
- `.cortex/workflows/subagent-delegation.md`

