---
title: Migrate Cortex design documents and execution plans
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T02:54:05Z
source_issues: []
related_prs: []
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
- [ ] Historical and superseding relationships remain clear.
- [ ] Existing links and document-family indexes remain valid.

## Progress

- Depends on the workflow and reference migration.

## Findings and decisions

- Active unrelated ownership must finish before overlapping documents move.

## References

- [Feature summary](README.md)
- [Design index](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/index.md)
