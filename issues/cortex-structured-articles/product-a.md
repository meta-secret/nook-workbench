---
title: Migrate structured product specifications A
status: in-progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:27:00Z
updated_at: 2026-08-15T10:27:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/cortex-structured-articles/design-b.md
---

# Migrate structured product specifications A

## Context

All design documents are structurally enforced. The eight smallest product
specifications form a bounded first product slice covering item types, app
isolation, repository setup, and device access.

## Outcome

The selected product specs expose user behavior, requirements, state choices,
security boundaries, and delivery order through the shared semantic grammar.

## Scope

- Migrate the product index, secure notes, file attachments, credit cards,
  authenticator items, vault app isolation, monorepo setup, and devices/access.
- Synchronize every changed heading with its document map.
- Preserve product behavior, security boundaries, and exact commands.
- Remove the eight compliant paths from the ledger.

## Acceptance criteria

- [ ] Selected product specs have no ledger exemptions.
- [ ] Requirements, choices, ownership, and states use semantic peer and nested
  structures.
- [ ] Ordered user flows and delivery work use numbered steps.
- [ ] Detailed rationale remains in clear explanation articles.
- [ ] Cortex audit and semantic consistency review pass.
- [ ] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change product behavior, architecture, or security policy.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T102700Z-product-a.md)

## Progress

- 2026-08-15: Selected the eight smallest product specifications as slice A.

## Findings

- Pending migration audit.

## Decisions

- Graduate already clear specs without presentation-only churn.
