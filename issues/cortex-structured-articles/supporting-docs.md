---
title: Migrate structured references and execution plans
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:45:00Z
updated_at: 2026-08-15T10:52:26Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1020
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

- [x] No reference or execution plan remains in the migration ledger.
- [x] Commands, options, evidence, status, and ownership use semantic peer and
  nested structures.
- [x] Ordered procedures and delivery work use numbered steps.
- [x] Historical and explanatory context remains clear.
- [x] Cortex audit and semantic consistency review pass.
- [x] Pre-push, hosted Loom, and readiness pass.

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
- 2026-08-15: PR 1020 removed all supporting-document exemptions and passed
  hosted Loom run 31880552992 plus Source architecture before squash merge.

## Findings

- Nine dense articles across four references needed material restructuring.
  Two references and all five execution plans already complied.

## Decisions

- Preserve completed-plan history while improving its semantic presentation.
- Keep exact commands and tool ownership unchanged.
