---
title: Migrate structured dynamic skills A
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T09:04:00Z
updated_at: 2026-08-15T09:20:42Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1012
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

- [x] Every selected document passes the structured-article audit without a
  migration exemption.
- [x] Procedure articles expose ordered action sequences and owned branches.
- [x] Rules and reference content use semantic peer lists or compact tables.
- [x] Document maps match all heading changes and source order.
- [x] Policy meaning and cross-document consistency are preserved.
- [x] Focused Cortex, format, pre-push, and docs-only hosted validation pass.

## Constraints

- Do not shorten away durable rationale or operational detail.
- Do not introduce cosmetic headings or artificial nesting.
- Do not change product, architecture, or delivery policy.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Foundation](structured-article-contract-and-enforcement.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T090400Z-dynamic-skills-a.md)

## Progress

- 2026-08-15: PR 1012 migrated thirteen small skill documents and reduced the
  legacy ledger from 83 to 70 documents.
- 2026-08-15: Hosted Loom run 31876654984 and Source architecture passed for
  the exact head before squash merge.

## Findings

- Several selected cards already matched the semantic grammar and needed only
  an explicit audit plus ledger graduation.
- Dynamic-skill authoring still named `.cursor/skills` as canonical. Current
  workflow and code use `.agents/skills`, with Cursor and Claude symlink mirrors.

## Decisions

- Preserve checklists when items are peer proof obligations.
- Convert lifecycle actions to ordered procedures and place conditions beneath
  the step that owns them.
