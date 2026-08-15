---
title: Migrate Cortex workflows and references to document maps
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T04:40:00Z
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

- Contract and checker merged in Nook PR #1003.
- The available dynamic-skill slice merged in Nook PR #1004.
- This slice starts from merged commit
  `62b993d335969c8f15e7d9c6407b81b7e23c7f4b`.

## Findings and decisions

- Active Nook PR #1002 owns `coding-bro.md`, `issues.md`, and
  `pull-requests.md`; those files remain read-only.
- The remaining 15 workflow/reference documents form a bounded slice.

## References

- [Feature summary](README.md)
- [Coding workflow](https://github.com/meta-secret/nook/blob/main/.cortex/workflows/coding-bro.md)
