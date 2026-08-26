---
title: Isolated-write module DAG execution
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-26T17:15:10Z
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

Ready module experts write only inside disposable isolated worktrees. The
delivery owner uses Nook's deterministic Git safeguards to validate, accept,
hash, and integrate their commits before dependent nodes start from a new exact
baseline.

## Scope

- Add harness-neutral disposable worktree preparation and inspection.
- Enforce allowed and forbidden paths, clean baselines, and non-overlapping
  ready-wave resources.
- Add parent-owned commit handoff validation receipts.
- Integrate accepted changes in deterministic topological order.
- Keep lifecycle records optional and human-facing.
- Isolate every retry in a fresh workspace at the same declared baseline.
- Exclude agent scheduling, transcript processing, shared-worktree writers,
  automatic conflict resolution, Docker, and Hive.

## Acceptance criteria

- [ ] Concurrent writers cannot share a worktree or overlap resource claims.
- [ ] Out-of-scope changes and dirty or drifting baselines fail closed.
- [ ] Dependents see only accepted, digest-verified ancestor changes.
- [ ] Shared files remain serialized under the delivery owner or an explicit
      integration node.
- [ ] Failure, cancellation, retry, and cleanup paths have focused tests.
- [ ] Focused local validation and readiness pass before squash merge.

## Progress

- Waiting for typed read-only module planning.

## Findings and decisions

- The delivery owner, not a child agent, owns diff inspection, artifact
  identity, acceptance, and integration.
- The active harness owns subagent lifecycle and communication.

## References

- `agentic-ai/loom/src/agent-workflow/`
- `.cortex/workflows/subagent-delegation.md`
