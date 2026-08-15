---
title: Migrate Cortex dynamic skills to document maps
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T04:15:00Z
source_issues: []
related_prs: []
depends_on: [document-map-contract-and-enforcement.md]
---

# Migrate Cortex dynamic skills to document maps

## Context

This is the second slice of [Cortex document navigation](README.md). Dynamic
skills are cohesive agent-facing rules and form the best first complete family.

## Outcome

Every Cortex dynamic-skill card exposes relationship links and a complete
internal document map.

## Scope

- Migrate every remaining `.cortex/dynamic-skills/*.md` document.
- Preserve each skill's canonical meaning and executable mirror relationship.
- Remove migrated files from the migration ledger.
- Exclude workflow, design, product, reference, and root Cortex documents.

## Acceptance criteria

- [ ] Every dynamic-skill document passes the document-map audit.
- [ ] The dynamic-skill registry remains synchronized with executable skills.
- [ ] Standard Cortex link and density checks pass.

## Progress

- Contract and checker slice merged in Nook PR #1003.
- Migration starts from merged commit
  `ee825c3b6dd7da602d07a4bd9e0fd491aaecbc5e`.

## Findings and decisions

- The migration changes navigation structure, not product or coding policy.
- Active Nook PR #1002 owns `issue-scope-management.md`; that card remains in
  the ledger until the foreign PR merges or closes.

## References

- [Feature summary](README.md)
- [Dynamic-skill registry](https://github.com/meta-secret/nook/blob/main/.cortex/dynamic-skills/index.md)
