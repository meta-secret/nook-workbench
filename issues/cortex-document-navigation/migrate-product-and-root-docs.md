---
title: Migrate product specifications and root Cortex documents
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T06:34:00Z
source_issues: []
related_prs: [1007]
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

- Migrate the ten paths still listed in the migration ledger.
- Give `AGENTS.md` a concise task-oriented map of its critical rules.
- Remove the migration ledger.
- Run a final full-tree Cortex mechanical and semantic audit.

## Acceptance criteria

- [ ] Every `.cortex/**/*.md` file passes the document-map audit.
- [ ] No migration exemptions remain.
- [ ] `AGENTS.md` provides useful always-required and task-specific navigation.
- [ ] The full Cortex link, index, density, and semantic consistency checks pass.

## Progress

- PRs #1003 through #1007 migrated all other Cortex documents.
- The final slice starts from Nook commit
  `5acf3d1c164cf12f25cecbaf6c5043a3cd229f77`.

## Findings and decisions

- PR #1002 will absorb navigation changes during its periodic main merges.
- Its own Cortex audit must map any headings added after this current-main
  baseline.

## References

- [Feature summary](README.md)
- [Nook PR #1007](https://github.com/meta-secret/nook/pull/1007)
