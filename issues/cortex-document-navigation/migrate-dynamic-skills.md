---
title: Migrate Cortex dynamic skills to document maps
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T02:54:05Z
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

- Depends on the contract and checker slice.

## Findings and decisions

- The migration changes navigation structure, not product or coding policy.

## References

- [Feature summary](README.md)
- [Dynamic-skill registry](https://github.com/meta-secret/nook/blob/main/.cortex/dynamic-skills/index.md)
