---
title: Migrate Cortex design documents and execution plans
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T05:27:00Z
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

- Foundation, dynamic-skill, and workflow/reference slices have merged.
- This slice starts from Nook commit
  `8690bacc3a205998169c6bc8692fc30c20220561`.

## Findings and decisions

- Active Nook PR #1002 owns three design documents; they remain read-only.
- The remaining 12 design documents and 5 execution plans form one bounded
  documentation slice.

## References

- [Feature summary](README.md)
- [Design index](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/index.md)
