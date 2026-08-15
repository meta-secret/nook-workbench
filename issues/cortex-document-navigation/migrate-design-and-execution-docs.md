---
title: Migrate Cortex design documents and execution plans
status: blocked
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T05:49:22Z
source_issues: []
related_prs: [1006]
depends_on: [migrate-workflows-and-references.md]
---

# Migrate Cortex design documents and execution plans

## Context

This is the fourth slice of [Cortex document navigation](README.md). It covers
architecture decisions and durable execution context.

## Outcome

Every Cortex design document and execution plan presents its relationships and
section hierarchy before detailed content.

## Scope

- Migrate `.cortex/design-docs/**/*.md`.
- Migrate `.cortex/exec-plans/**/*.md`.
- Preserve explicit active, proposed, completed, and historical meaning.
- Remove migrated files from the migration ledger.
- Exclude product specifications and root Cortex documents.

## Acceptance criteria

- [ ] Every design document and execution plan passes the document-map audit.
- [x] Historical and superseding relationships remain clear.
- [x] Existing links and document-family indexes remain valid.

## Progress

- Nook PR #1006 migrated all 5 execution plans and 12 available design docs.
- Map summaries are grounded in target-article content.
- Design-index links describe catalog direction rather than dependencies.
- Focused local, hosted, and readiness checks passed.

## Findings and decisions

- Active Nook PR #1002 owns three design documents; those remain the only
  family ledger entries and block full completion.

## References

- [Feature summary](README.md)
- [Nook PR #1006](https://github.com/meta-secret/nook/pull/1006)
- [Delivery worklog](../../worklogs/cortex-document-navigation/20260815T054922Z-pr-1006-design-execution.md)
