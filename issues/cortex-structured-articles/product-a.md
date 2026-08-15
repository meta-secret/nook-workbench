---
title: Migrate structured product specifications A
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:27:00Z
updated_at: 2026-08-15T10:33:44Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1018
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

- [x] Selected product specs have no ledger exemptions.
- [x] Requirements, choices, ownership, and states use semantic peer and nested
  structures.
- [x] Ordered user flows and delivery work use numbered steps.
- [x] Detailed rationale remains in clear explanation articles.
- [x] Cortex audit and semantic consistency review pass.
- [x] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change product behavior, architecture, or security policy.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T102700Z-product-a.md)

## Progress

- 2026-08-15: Selected the eight smallest product specifications as slice A.
- 2026-08-15: PR 1018 graduated all eight paths and passed hosted Loom run
  31879765940 plus Source architecture before squash merge.

## Findings

- Three dense articles across devices/access and vault-app isolation needed
  material restructuring. Six selected specs already complied.

## Decisions

- Graduate already clear specs without presentation-only churn.
- Keep product state and security semantics exact while grouping them by owner.
