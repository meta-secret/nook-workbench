---
title: Isolated-write module DAG execution
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-26T19:40:15Z
source_issues: []
related_prs: [1156, 1159]
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

- [x] Concurrent writers cannot share a worktree or overlap resource claims.
- [x] Out-of-scope changes and dirty or drifting baselines fail closed.
- [x] Dependents see only accepted, digest-verified ancestor changes.
- [x] Shared files remain serialized under the delivery owner or an explicit
      integration node.
- [x] Failure, cancellation, retry, and cleanup paths have focused tests.
- [x] Focused local validation and independent review passed before squash
      merge. Hosted validation was intentionally excluded by task authority.

## Progress

- Disposable direct-child worktrees start at exact commits and yield verified
  one-commit handoffs constrained to declared write claims.
- Deterministic tree integration uses a temporary index and a plan-private CAS
  ref. It leaves the source branch, index, worktree, and non-private refs
  untouched.
- Squash-merged Nook PRs
  [#1156](https://github.com/meta-secret/nook/pull/1156) and
  [#1159](https://github.com/meta-secret/nook/pull/1159).

## Findings and decisions

- The delivery owner, not a child agent, owns diff inspection, artifact
  identity, acceptance, and integration.
- The active harness owns subagent lifecycle and communication.

## References

- `agentic-ai/loom/src/agent-workflow/`
- `.cortex/workflows/subagent-delegation.md`
