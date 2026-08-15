---
title: Migrate product specifications and root Cortex documents
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T02:54:05Z
source_issues: []
related_prs: []
depends_on: [migrate-design-and-execution-docs.md]
---

# Migrate product specifications and root Cortex documents

## Context

This is the final slice of [Cortex document navigation](README.md). It migrates
the remaining product and repository entrypoint documents and closes the
temporary migration boundary.

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

- Depends on the design and execution-plan migration.

## Findings and decisions

- This slice is the completion boundary for the feature.

## References

- [Feature summary](README.md)
- [Nook agent entrypoint](https://github.com/meta-secret/nook/blob/main/.cortex/AGENTS.md)
