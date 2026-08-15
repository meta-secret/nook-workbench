---
title: Migrate product specifications and root Cortex documents
status: blocked
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T06:29:58Z
source_issues: []
related_prs: [1007]
depends_on: [migrate-design-and-execution-docs.md]
---

# Migrate product specifications and root Cortex documents

## Context

This is the final family of [Cortex document navigation](README.md). Active
foreign ownership requires an available-files slice followed by final cleanup.

## Outcome

Every Markdown document under `.cortex` follows the mandatory relationship and
document-map contract with no exemptions.

## Scope

- Migrate `.cortex/product-specs/**/*.md`.
- Migrate root `.cortex/*.md` documents.
- Give `AGENTS.md` a concise task-oriented map of its critical rules.
- Remove the migration ledger after its final entry is migrated.
- Run a final full-tree Cortex mechanical and semantic audit.

## Acceptance criteria

- [ ] Every `.cortex/**/*.md` file passes the document-map audit.
- [ ] No migration exemptions remain.
- [ ] `AGENTS.md` provides useful always-required and task-specific navigation.
- [ ] The full Cortex link, index, density, and semantic consistency checks pass.

## Progress

- Nook PR #1007 migrated all 11 available product specs plus `ARCHITECTURE.md`
  and `rules.md`.
- Navigation summaries preserve exact identifiers and current product behavior.
- The migration ledger now contains only the ten files owned by PR #1002.

## Findings and decisions

- PR #1002 still owns `AGENTS.md`, two product specs, three design docs, one
  dynamic skill, and three workflows.
- Final cleanup cannot edit those files until ownership clears.

## References

- [Feature summary](README.md)
- [Nook PR #1007](https://github.com/meta-secret/nook/pull/1007)
- [Delivery worklog](../../worklogs/cortex-document-navigation/20260815T062958Z-pr-1007-product-root.md)
