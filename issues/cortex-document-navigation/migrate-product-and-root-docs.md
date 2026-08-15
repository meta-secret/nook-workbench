---
title: Migrate product specifications and root Cortex documents
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T07:03:09Z
source_issues: []
related_prs: [1007, 1009]
depends_on: [migrate-design-and-execution-docs.md]
---

# Migrate product specifications and root Cortex documents

## Context

This is the final family of [Cortex document navigation](README.md). The user
authorized the remaining documents to migrate from current `main` while PR
#1002 absorbs the navigation through regular main merges.

## Outcome

Every Markdown document under `.cortex` follows the mandatory relationship and
document-map contract with no exemptions.

## Scope

- Migrate the ten paths previously listed in the migration ledger.
- Give `AGENTS.md` a concise task-oriented map of its critical rules.
- Remove the migration ledger.
- Run a final full-tree Cortex mechanical and semantic audit.

## Acceptance criteria

- [x] Every `.cortex/**/*.md` file passes the document-map audit.
- [x] No migration exemptions remain.
- [x] `AGENTS.md` provides useful always-required and task-specific navigation.
- [x] The full Cortex link, index, density, and semantic consistency checks pass.

## Progress

- PRs #1003 through #1007 migrated all other Cortex documents.
- PR #1009 migrated the final ten documents and removed the ledger.
- The final full-tree audit passed on merged commit
  `41c2f9155f9963e19741e381f6e5f0d71070da8a`.

## Findings and decisions

- PR #1002 will absorb navigation changes during its periodic main merges.
- Its own Cortex audit must map any headings added after the migration baseline.
- Relationship and map summaries route readers; they do not duplicate policy.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-document-navigation/20260815T063400Z-final-cleanup.md)
- [Completion worklog](../../worklogs/cortex-document-navigation/20260815T070309Z-final-navigation.md)
- [Nook PR #1007](https://github.com/meta-secret/nook/pull/1007)
- [Nook PR #1009](https://github.com/meta-secret/nook/pull/1009)
