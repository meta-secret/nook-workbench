---
title: Migrate structured references and execution plans
status: in-progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:45:00Z
updated_at: 2026-08-15T10:45:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/cortex-structured-articles/product-b.md
---

# Migrate structured references and execution plans

## Context

Design, workflow, dynamic-skill, and product families are fully enforced. Six
references and five execution plans form the remaining non-root Cortex corpus.

## Outcome

All Cortex references and execution plans expose commands, evidence, states,
decisions, and ordered work through the shared semantic article grammar.

## Scope

- Migrate all six reference manuals.
- Migrate all five execution plans, including the completed restructure plan.
- Synchronize every changed heading with its document map.
- Preserve exact commands, historical status, and operational meaning.
- Remove all eleven supporting-document paths from the ledger.

## Acceptance criteria

- [ ] No reference or execution plan remains in the migration ledger.
- [ ] Commands, options, evidence, status, and ownership use semantic peer and
  nested structures.
- [ ] Ordered procedures and delivery work use numbered steps.
- [ ] Historical and explanatory context remains clear.
- [ ] Cortex audit and semantic consistency review pass.
- [ ] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change workflow behavior, command meaning, or plan status.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T104500Z-supporting-docs.md)

## Progress

- 2026-08-15: Grouped the remaining six references and five execution plans
  into one bounded non-root slice.

## Findings

- Pending migration audit.

## Decisions

- Preserve completed-plan history while improving its semantic presentation.
