---
title: Migrate structured workflows A
status: in_progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T09:37:00Z
updated_at: 2026-08-15T09:37:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/cortex-structured-articles/dynamic-skills-b.md
---

# Migrate structured workflows A

## Context

Dynamic skills are fully enforced. Seven smaller workflow manuals form the first
bounded workflow slice and contain policy, procedures, commands, and branches
that benefit directly from semantic structure.

## Outcome

The selected workflow manuals expose action order, decision branches, ownership,
failure handling, and proof without losing operational explanation.

## Scope

- Migrate monorepo, Main statistics, dynamic skills, code review, agent
  statistics, remote execution, and subagent delegation manuals.
- Synchronize every changed heading with its document map.
- Preserve exact commands, policy, and workflow authority.
- Remove the seven compliant paths from the ledger.

## Acceptance criteria

- [ ] Selected workflow manuals have no ledger exemptions.
- [ ] Procedures and recovery sequences use ordered steps.
- [ ] Rules, choices, and ownership use peer and nested lists.
- [ ] Detailed rationale remains within clear explanation articles.
- [ ] Cortex audit and semantic consistency review pass.
- [ ] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change workflow behavior or CI policy.
- Do not replace useful explanation with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T093700Z-workflows-a.md)
