---
title: Structured dynamic skills A
feature: cortex-structured-articles
issue: issues/cortex-structured-articles/dynamic-skills-a.md
plan: plans/cortex-structured-articles/20260815T090400Z-dynamic-skills-a.md
nook_pr: https://github.com/meta-secret/nook/pull/1012
status: completed
started_at: 2026-08-15T09:04:00Z
finished_at: 2026-08-15T09:20:42Z
agent: codex
---

# Structured dynamic skills A

## Outcome

PR 1012 migrated thirteen small dynamic-skill documents into the universal
semantic article structure and reduced the legacy ledger to seventy documents.

## Progress

- Ordered procedures now expose lifecycle and refactor action order.
- Nested lists expose ownership, conditions, and exceptions.
- Peer rules and proof obligations remain bullets or checklists.
- All changed headings are synchronized with document maps.

## Implementation problems

- Semantic review found one stale executable-skill path. The card now agrees
  with the `.agents` canonical wrapper and host symlink mirrors.
- GitHub's generic merge policy awaited a product check that is intentionally
  absent for Markdown-only changes. The merge used the docs-only administrative
  path after hosted Loom, Source architecture, and readiness passed.

## Decisions

- Already structured cards can graduate after semantic audit without cosmetic
  churn.
- Numbering is reserved for actual order; peer review obligations keep checkbox
  or bullet form.

## Validation

- `task loom:cortex-audit` passed with no findings.
- `task format` and `task loom:pre-push` passed.
- Hosted Loom run 31876654984 and Source architecture passed on `363072661`.
- `task pr:ready PR=1012` reported ready with no unresolved feedback.

## Remaining work

- Migrate the remaining dynamic-skill cards in slice B.
