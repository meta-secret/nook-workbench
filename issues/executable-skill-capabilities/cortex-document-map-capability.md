---
title: Move Cortex document-map mechanics to its skill
status: in_progress
priority: p2
automation: agent
owner: cypherkitty
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-31T00:55:35Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/skill-authoring-and-catalog.md
---

# Move Cortex document-map mechanics to its skill

## Context

The [feature summary](README.md) calls for local mechanics to follow semantic
skill ownership after the authoring contract is available.

## Outcome

The Cortex document-map skill owns its parser, checks, verification, fixtures,
and tests while Loom retains generic invocation and audit aggregation.

## Scope

- Move document-structure and migration-ledger mechanics to the skill package.
- Preserve exact Cortex audit behavior and mandatory registration.
- Exclude prose-density, link, and skill-registry checks.

## Acceptance criteria

- [ ] Exact current findings and migration behavior remain compatible.
- [ ] Focused real-value and filesystem tests live with the skill.
- [ ] Loom contains no document-map-specific semantic implementation.

## Progress

- Depends on the authoring and catalog slice.
- 2026-08-31: Claimed for the owner-local executable application slice after
  confirming the dependency is done and the scope is disjoint from the active
  Team Plan stack.

## Findings and decisions

- Semantic policy stays in Cortex. The deterministic implementation belongs to
  the skill capability.

## References

- `.agents/skills/cortex-document-map/SKILL.md`
