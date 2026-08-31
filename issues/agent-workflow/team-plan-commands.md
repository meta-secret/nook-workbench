---
title: Expose Team Plan commands
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-commands
stack_branch: codex/team-plan-runner-commands
stack_predecessor_branch: codex/team-plan-runner-runtime
created_at: 2026-08-31T01:50:00Z
updated_at: 2026-08-31T01:50:00Z
source_issues: []
related_prs: []
depends_on: [team-plan-runner.md]
---

# Expose Team Plan commands

## Context

The [deterministic agent workflows](README.md) feature needs a small tracked
entrypoint after admission, journal, and runner behavior is complete.

## Outcome

Task and CLI commands expose Team Plan start, select, record, restart,
finalize, and discard.

## Scope

- Add bounded command decoding and Task aliases.
- Expose the runner without adding another scheduler or worker lifecycle.
- Make every reachable subprocess boundary statically auditable.
- Exclude admission, journal format, and runner-engine behavior.

## Acceptance criteria

- [x] CLI input is bounded and strictly decoded.
- [x] Finalized discard is available through Task and CLI.
- [x] Reachable Git and process probes use fixed environment keys and static
  executable paths.
- [x] Focused command tests and complete Loom verification pass.
- [ ] The commands PR passes exact-head hosted review and validation.

## Progress

- The accepted commands head is `4c202c9d1bbebe3df22ee8e9bf7a809392db9f37`.
- The commands slice measures 499 authored changed lines.

## Findings and decisions

- Command exposure is separate because the journal slice reached the 2,000-line
  ceiling after required restart and reachability fixes.
- Tests and behavior remain intact. No code is compressed or discarded to fit
  the limit.

## References

- [Team Plan admission](team-plan-admission.md)
- [Team Plan journal](team-plan-journal.md)
- [Team Plan runner](team-plan-runner.md)
- [Superseding plan](../../plans/agent-workflow/20260831T013000Z-team-plan-runner-superseding.md)
- [Nook PR #1249](https://github.com/meta-secret/nook/pull/1249)
