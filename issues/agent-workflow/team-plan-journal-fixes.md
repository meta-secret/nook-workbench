---
title: Fix Team Plan journal lifecycle edges
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-journal-fixes
stack_branch: codex/team-plan-journal-fixes
stack_predecessor_branch: codex/team-plan-runner-storage
created_at: 2026-08-31T04:00:00Z
updated_at: 2026-08-31T04:00:00Z
source_issues: []
related_prs: [1251]
depends_on: [team-plan-journal.md]
---

# Fix Team Plan journal lifecycle edges

## Context

The journal slice reached 1,995 authored lines before exact-head review found
additional lifecycle edge cases. A small journal-owned successor preserves the
repository's 2,000-line review boundary without hiding or compressing behavior.

## Outcome

Team Plan journal replay and locking remain deterministic across derived
precedence, PID namespaces, partial writes, and reachable Git execution.

## Scope

- Use a fixed auditable Git PATH at every reachable journal subprocess.
- Bind local lock reclamation to the PID namespace.
- Remove partial temporary files after write, sync, or close failures.
- Propagate terminal failure through accepted execution precedence.
- Match the authoritative task identifier grammar.

## Acceptance criteria

- [x] Focused journal and reachability tests pass.
- [x] Complete Loom verification and pre-push pass locally.
- [x] The successor remains below 2,000 authored changed lines.
- [ ] PR #1251 passes exact-head hosted review and validation.

## Progress

- The accepted successor head is `861334984ef8e345c2442f82df042bec4de4dd8b`.
- The slice measures 950 authored additions plus deletions.

## Findings and decisions

- The successor exists because the journal predecessor is at its review-size
  ceiling, not because lifecycle ownership changed.
- Project-owned journal state remains trusted; no cryptographic provenance
  layer is introduced.

## References

- [Team Plan journal](team-plan-journal.md)
- [Team Plan runner](team-plan-runner.md)
- [Superseding plan](../../plans/agent-workflow/20260831T013000Z-team-plan-runner-superseding.md)
- [Nook PR #1251](https://github.com/meta-secret/nook/pull/1251)
