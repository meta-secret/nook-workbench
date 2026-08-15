---
title: Migrate product specifications and root Cortex documents
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T05:51:00Z
source_issues: []
related_prs: []
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

- Foundation, dynamic-skill, workflow/reference, and design/execution slices
  have merged.
- This slice starts from Nook commit
  `b2c05d809425e9ead314df50b09c1ab14d3f3670`.

## Findings and decisions

- Nook PR #1002 owns `AGENTS.md`, two product specs, and other deferred files.
- The 11 available product specs plus `ARCHITECTURE.md` and `rules.md` form one
  bounded slice.

## References

- [Feature summary](README.md)
- [Nook agent entrypoint](https://github.com/meta-secret/nook/blob/main/.cortex/AGENTS.md)
