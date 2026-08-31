---
title: Add the Team Plan runner
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-runner
stack_branch: codex/team-plan-runner-runtime
stack_predecessor_branch: codex/team-plan-runner-storage
created_at: 2026-08-30T00:00:00Z
updated_at: 2026-08-31T01:30:00Z
source_issues: []
related_prs: [1239, 1241]
depends_on: [team-plan-journal.md]
---

# Add the Team Plan runner

## Context

The [deterministic agent workflows](README.md) feature needs a small executable
adapter over accepted admission and journal state.

## Outcome

Team Plan exposes deterministic start, select, record, restart, finalize, and
discard commands while the active harness retains worker lifecycle.

## Scope

- Consume typed admission and durable journal interfaces from predecessor
  slices.
- Pin accepted writes and canonical redacted receipts in private run-scoped Git
  state.
- Keep workspaces outside the source repository.
- Expose deterministic runner and discard commands.
- Keep native worker lifecycle in the active harness.

## Non-goals

- No model runner, scheduler, transcript protocol, hosted service, or Hive
  integration.
- No product vault UI or product cryptographic changes in this prerequisite.
- No second admission model or web reimplementation of domain eligibility.

## Acceptance criteria

- [x] Restart replay uses only canonical redacted project-owned receipts.
- [x] Raw worker evidence is absent from the journal and pinned receipt.
- [x] The active harness remains the sole native worker lifecycle owner.
- [x] Finalized runs expose explicit durable discard.
- [ ] The runner slice remains below 2,000 authored changed lines.
- [ ] PR #1241 passes exact-head hosted review and validation.

## Progress

- The earlier two-slice stack is superseded because admission, journal, and
  runner are separate cohesive ownership boundaries.
- Historical published heads were PR #1239 at `3f7f3e65b66e05fb9a6a74481227c708c33597ed`
  and PR #1241 at `8094bad1c85ad66d03c5f850cc3c295901159584`.
- The new runtime head is being reconstructed on the accepted journal slice.

## Authorization

The user selected this prerequisite and the simple name Team Plan. The user
also explicitly rejected cryptographic provenance between project-owned Team
Plan components.

## References

- `.cortex/gizmo/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`
- `agentic-ai/loom/src/module-delivery/`
- `agentic-ai/loom/src/team-plan/`
- [Team Plan admission](team-plan-admission.md)
- [Team Plan journal](team-plan-journal.md)
- [Superseding plan](../../plans/agent-workflow/20260831T013000Z-team-plan-runner-superseding.md)
