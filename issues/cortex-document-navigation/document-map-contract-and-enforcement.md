---
title: Define the Cortex document-map contract and enforcement
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T04:10:33Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1003
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

- [x] The first H2 is `Relationships` and the second H2 is `Document map` for
      every migrated document.
- [x] Relationship and map entries use standard Markdown links with concise
      nested explanations.
- [x] The map covers substantive headings after the map and preserves their
      hierarchy.
- [x] New unregistered exemptions fail the audit.
- [x] Missing, stale, or duplicate migration-ledger paths fail the audit.
- [x] Loom unit tests, Cortex audit, and pre-push hygiene pass.

## Progress

- PR #1003 squash-merged as `ee825c3b6dd7da602d07a4bd9e0fd491aaecbc5e`.
- Five canonical documents now comply with the contract.
- The monotonic ledger contains the 78 remaining Cortex documents.
- Loom runs the AST audit for every `.cortex/**` pull request and main push.

## Findings and decisions

- Active PR #1002 owns several Cortex documents. They remain read-only.
- Loom already owns broken-link, skill-index, executable-skill, and density
  checks, so it is the cohesive enforcement surface.
- Standard Markdown links are the portable identity. Wiki links and
  programming-style relationship identifiers are not used.
- Complete product validation remained excluded. The selected Loom and source
  architecture checks passed on the exact merged head.

## References

- [Feature summary](README.md)
- [Current Cortex audit](https://github.com/meta-secret/nook/blob/main/agentic-ai/loom/src/commands/cortex-audit.ts)
