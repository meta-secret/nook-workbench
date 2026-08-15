---
title: Migrate structured dynamic skills B
status: in_progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T09:23:00Z
updated_at: 2026-08-15T09:33:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1013
depends_on:
  - issues/cortex-structured-articles/dynamic-skills-a.md
---

# Migrate structured dynamic skills B

## Context

Slice A established the migration pattern for small dynamic skills. Sixteen
larger skill cards remain in the ledger and complete the registry family.

## Outcome

Every remaining dynamic-skill card exposes its actual explanation, rule,
procedure, branch, and proof hierarchy without changing its durable policy.

## Scope

- Migrate all sixteen remaining dynamic-skill cards.
- Preserve detailed rationale and examples inside semantically owned articles.
- Convert action order, branch ownership, and peer invariants to the matching
  Markdown structures.
- Synchronize all document maps and relationships affected by the rewrite.
- Remove the complete dynamic-skills family from the migration ledger.

## Acceptance criteria

- [ ] No dynamic-skill document remains in the migration ledger.
- [ ] Ordered lists represent real action order rather than peer facts.
- [ ] Nested lists represent real ownership, branches, or exceptions.
- [ ] Long explanation remains readable and policy-complete.
- [ ] Maps, links, executable mirrors, and current code remain consistent.
- [ ] Cortex audit, format, pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change runtime behavior or create new executable skills.
- Do not remove rationale merely to shorten documents.
- Do not introduce repeated boilerplate or cosmetic nesting.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Slice A](dynamic-skills-a.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T092300Z-dynamic-skills-b.md)
