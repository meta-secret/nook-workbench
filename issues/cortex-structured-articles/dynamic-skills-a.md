---
title: Migrate structured dynamic skills A
status: in_progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T09:04:00Z
updated_at: 2026-08-15T09:04:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/cortex-structured-articles/structured-article-contract-and-enforcement.md
---

# Migrate structured dynamic skills A

## Context

The structured-article contract is enforced for new and migrated Cortex
documents. Thirteen small dynamic-skill documents remain in the legacy ledger
and form a bounded first semantic migration slice.

## Outcome

The selected skills expose their real rule, procedure, branch, and reference
hierarchy while preserving policy meaning and synchronized document maps.

## Scope

- Migrate the dynamic-skill index and authoring template.
- Migrate eleven small skill cards through TypeScript single-parameter guidance.
- Convert ordered actions into ordered lists and parallel invariants into
  bullets with genuine containment.
- Preserve explanatory prose where rationale is the primary content.
- Remove exactly the migrated documents from the legacy ledger.

## Acceptance criteria

- [ ] Every selected document passes the structured-article audit without a
  migration exemption.
- [ ] Procedure articles expose ordered action sequences and owned branches.
- [ ] Rules and reference content use semantic peer lists or compact tables.
- [ ] Document maps match all heading changes and source order.
- [ ] Policy meaning and cross-document consistency are preserved.
- [ ] Focused Cortex, format, pre-push, and exact-head PR validation pass.

## Constraints

- Do not shorten away durable rationale or operational detail.
- Do not introduce cosmetic headings or artificial nesting.
- Do not change product, architecture, or delivery policy.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Foundation](structured-article-contract-and-enforcement.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T090400Z-dynamic-skills-a.md)
