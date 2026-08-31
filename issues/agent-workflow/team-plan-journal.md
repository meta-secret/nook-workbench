---
title: Add the Team Plan journal
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-journal
stack_branch: codex/team-plan-runner-storage
stack_predecessor_branch: codex/team-plan-runner
created_at: 2026-08-31T01:30:00Z
updated_at: 2026-08-31T01:30:00Z
source_issues: []
related_prs: []
depends_on: [team-plan-admission.md]
---

# Add the Team Plan journal

## Context

The [deterministic agent workflows](README.md) feature needs durable local
state after typed admission succeeds.

## Outcome

The Team Plan journal reconstructs attempts, retries, accepted results,
finalization, and discard after process failure.

## Scope

- Persist bounded, strictly decoded project-owned lifecycle state.
- Enforce one active attempt per logical task and sequential retry limits.
- Fail closed on foreign-host locks and premature finalization.
- Make append and discard durable across rename and parent-sync failures.
- Exclude worker execution, CLI commands, and model lifecycle.

## Acceptance criteria

- [x] Escaped plan and path capacity remains below the journal ceiling.
- [x] Retry, finalization, lock, append, and discard invariants are tested.
- [x] Durable discard publishes a resumable tombstone before artifact cleanup.
- [x] The slice remains below 2,000 authored changed lines.
- [ ] The journal PR passes exact-head hosted review and validation.

## Progress

- The accepted journal head is `53121d944c9eee7b8ce8a14b78ef4d2d4fa6a4c0`.
- The slice measures 1,995 authored additions plus deletions.

## Findings and decisions

- The journal is trusted project state, not a cryptographic protocol.
- Raw provider output remains outside persisted state.

## References

- [Team Plan admission](team-plan-admission.md)
- [Team Plan journal fixes](team-plan-journal-fixes.md)
- [Team Plan runner](team-plan-runner.md)
- [Team Plan commands](team-plan-commands.md)
- [Superseding plan](../../plans/agent-workflow/20260831T013000Z-team-plan-runner-superseding.md)
