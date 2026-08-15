---
title: Migrate structured design documents A
status: in-progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:01:35Z
updated_at: 2026-08-15T10:01:35Z
source_issues: []
related_prs: []
depends_on:
  - issues/cortex-structured-articles/workflows-b.md
---

# Migrate structured design documents A

## Context

The workflow and dynamic-skill families are fully enforced. The eight smallest
design documents form a bounded first architecture slice. Their invariants,
tradeoffs, modes, and implementation sequences need a consistent semantic
shape without changing architecture authority.

## Outcome

The selected design documents expose decisions, invariants, alternatives,
ownership, and ordered implementation work through a transparent hierarchy.

## Scope

- Migrate the design index, vault schema versioning, passkey manager, secret
  store identity, typed newtypes, core beliefs, vault architecture modes, and
  identity vault architecture documents.
- Synchronize every changed heading with its document map.
- Preserve security boundaries, architectural decisions, and exact commands.
- Remove the eight compliant paths from the ledger.

## Acceptance criteria

- [ ] Selected design documents have no ledger exemptions.
- [ ] Invariants, alternatives, and ownership use peer and nested lists.
- [ ] Ordered implementation or migration sequences use numbered steps.
- [ ] Detailed rationale remains within clear explanation articles.
- [ ] Cortex audit and semantic consistency review pass.
- [ ] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change architecture, security policy, or product behavior.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T100135Z-design-a.md)

## Progress

- 2026-08-15: Selected the eight smallest design documents as the first bounded
  architecture slice.

## Findings

- Pending migration audit.

## Decisions

- Treat structure as a representation of meaning, not a target percentage of
  bullets.
