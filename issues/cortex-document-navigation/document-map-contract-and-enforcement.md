---
title: Define the Cortex document-map contract and enforcement
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T02:54:05Z
source_issues: []
related_prs: []
depends_on: []
---

# Define the Cortex document-map contract and enforcement

## Context

This is the first slice of [Cortex document navigation](README.md). It creates
the stable document contract and the mechanical guard required for later
family migrations.

## Outcome

New and migrated Cortex Markdown documents expose consistent relationship and
internal navigation sections. Loom rejects structural drift while an explicit
ledger identifies documents that remain for later slices.

## Scope

- Add the canonical Cortex document-map skill and executable agent wrapper.
- Update the dynamic-skill registry and template.
- Extend Loom Cortex audit with syntax-aware structure checks.
- Add focused behavior tests for headings, links, hierarchy, code fences, and
  migration-ledger integrity.
- Migrate the new contract and its immediate canonical documentation.
- Exclude unrelated Cortex content rewrites.
- Exclude complete product PR validation.

## Acceptance criteria

- [ ] The first H2 is `Relationships` and the second H2 is `Document map` for
      every migrated document.
- [ ] Relationship and map entries use standard Markdown links with concise
      nested explanations.
- [ ] The map covers substantive headings after the map and preserves their
      hierarchy.
- [ ] New unregistered exemptions fail the audit.
- [ ] Missing, stale, or duplicate migration-ledger paths fail the audit.
- [ ] Loom unit tests, Cortex audit, and pre-push hygiene pass.

## Progress

- No implementation has started.

## Findings and decisions

- Active PR #1002 owns several Cortex documents. They remain read-only.
- Loom already owns broken-link, skill-index, executable-skill, and density
  checks, so it is the cohesive enforcement surface.

## References

- [Feature summary](README.md)
- [Current Cortex audit](https://github.com/meta-secret/nook/blob/main/agentic-ai/loom/src/commands/cortex-audit.ts)
