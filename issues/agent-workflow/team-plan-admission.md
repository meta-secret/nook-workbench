---
title: Add Team Plan admission
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-admission
stack_branch: codex/team-plan-runner
stack_predecessor_branch: main
created_at: 2026-08-31T01:30:00Z
updated_at: 2026-08-31T01:30:00Z
source_issues: []
related_prs: [1239]
depends_on: []
---

# Add Team Plan admission

## Context

The [deterministic agent workflows](README.md) feature needs one typed entry
boundary for ordinary reviewed team tasks.

## Outcome

Team Plan admits only reviewed tasks with exact ownership, claims, evidence,
lease, and Git-frontier state.

## Scope

- Reuse the existing module-delivery authority.
- Restore canonical redacted receipt replay from trusted project-owned state.
- Prohibit signatures, MACs, keys, and cryptographic provenance protocols
  between project-owned Team Plan components.
- Preserve validation for external worker output and product security
  boundaries.
- Exclude journal storage and runner commands.

## Acceptance criteria

- [x] Ordinary task ownership and Cortex writer grants are typed and tested.
- [x] Restart replay accepts canonical redacted receipts without key material.
- [x] Inconsistent lifecycle fields fail closed.
- [x] Raw worker evidence is not persisted or replayed.
- [x] The full Loom verification passes locally.
- [ ] PR #1239 passes exact-head hosted review and validation.

## Progress

- The accepted local head is `2c835d5510e1fc47e4890938d09566842cd53d58`.
- The slice measures 1,302 authored additions plus deletions.

## Findings and decisions

- Project-owned Team Plan journal and private Git receipt state is trusted.
- Content digests provide structural consistency. They are not an additional
  authentication system.

## References

- [Team Plan journal](team-plan-journal.md)
- [Team Plan runner](team-plan-runner.md)
- [Team Plan commands](team-plan-commands.md)
- [Superseding plan](../../plans/agent-workflow/20260831T013000Z-team-plan-runner-superseding.md)
- [Nook PR #1239](https://github.com/meta-secret/nook/pull/1239)
