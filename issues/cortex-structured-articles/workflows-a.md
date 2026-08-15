---
title: Migrate structured workflows A
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T09:37:00Z
updated_at: 2026-08-15T09:46:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1014
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

- [x] Selected workflow manuals have no ledger exemptions.
- [x] Procedures and recovery sequences use ordered steps.
- [x] Rules, choices, and ownership use peer and nested lists.
- [x] Detailed rationale remains within clear explanation articles.
- [x] Cortex audit and semantic consistency review pass.
- [x] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change workflow behavior or CI policy.
- Do not replace useful explanation with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T093700Z-workflows-a.md)

## Progress

- 2026-08-15: PR 1014 migrated seven workflow manuals and reduced the ledger by
  those paths.
- 2026-08-15: Hosted Loom run 31877711626 and Source architecture passed on the
  exact head before squash merge.

## Findings

- Four manuals required material restructuring; three already complied and
  graduated after semantic review.
- Exact-head invalidation and timeout cleanup became clearer as explicit
  condition-to-action sequences.

## Decisions

- Preserve command examples verbatim while structuring the rules around them.
- Use ordered recovery steps only where order changes the outcome.
