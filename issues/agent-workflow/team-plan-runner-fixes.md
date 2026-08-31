---
title: Fix Team Plan runner recovery edges
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-runner-fixes
stack_branch: codex/team-plan-runner-fixes
stack_predecessor_branch: codex/team-plan-runner-runtime
created_at: 2026-08-31T04:40:00Z
updated_at: 2026-08-31T04:40:00Z
source_issues: []
related_prs: [1254]
depends_on: [team-plan-runner.md]
---

# Fix Team Plan runner recovery edges

## Context

The runner slice reached 1,884 authored lines before exact-head review found
additional failed-run, frontier-retention, and discard recovery edges. A small
runner-owned successor preserves the repository's 2,000-line review boundary.

## Outcome

Team Plan returns only durable frontiers, finalizes terminal failures, and
binds destructive discard to the intended immutable run.

## Scope

- Block replacement starts while a discard tombstone exists.
- Finalize and clean up terminally failed runs.
- Retain issued frontiers and finalized heads until durable discard.
- Bound plan reads through one validated handle.
- Require the expected run ID under the discard lock.

## Acceptance criteria

- [x] Focused recovery and pruning tests pass.
- [x] Complete Loom verification and pre-push pass locally.
- [x] The successor remains below 2,000 authored changed lines.
- [ ] PR #1254 passes exact-head hosted review and validation.

## Progress

- The accepted successor head is `984865bb9f49e31c38a7ff34cbc02cd20dc3c11d`.
- The slice measures 945 authored additions plus deletions.

## Findings and decisions

- The successor exists because the runner predecessor is at its review-size
  ceiling, not because runtime ownership changed.
- Project-owned state remains trusted; recovery uses lifecycle invariants, not
  an added cryptographic verification layer.

## References

- [Team Plan runner](team-plan-runner.md)
- [Team Plan commands](team-plan-commands.md)
- [Superseding plan](../../plans/agent-workflow/20260831T013000Z-team-plan-runner-superseding.md)
- [Nook PR #1254](https://github.com/meta-secret/nook/pull/1254)
