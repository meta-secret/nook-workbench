---
title: Migrate Cortex workflows and references to document maps
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T02:54:05Z
source_issues: []
related_prs: []
depends_on: [migrate-dynamic-skills.md]
---

# Migrate Cortex workflows and references to document maps

## Context

This is the third slice of [Cortex document navigation](README.md). Workflows
and references contain the largest procedural surfaces used during delivery.

## Outcome

Every Cortex workflow and reference exposes concise relationship links and a
hierarchical internal map.

## Scope

- Migrate `.cortex/workflows/*.md`.
- Migrate `.cortex/references/*.md`.
- Preserve workflow ordering, command contracts, and canonical ownership.
- Remove migrated files from the migration ledger.
- Exclude design, product, execution-plan, and root documents.

## Acceptance criteria

- [ ] Every workflow and reference passes the document-map audit.
- [ ] Existing commands and cross-document links remain valid.
- [ ] Cortex link and density checks pass.

## Progress

- Depends on the dynamic-skill family migration.

## Findings and decisions

- Files owned by an active unrelated pull request remain read-only until that
  pull request completes.

## References

- [Feature summary](README.md)
- [Coding workflow](https://github.com/meta-secret/nook/blob/main/.cortex/workflows/coding-bro.md)
