---
title: Cortex document navigation
status: done
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T07:03:09Z
---

# Cortex document navigation

## Goal

Make every Cortex Markdown document easy to scan before reading its detailed
content.

Each document begins with concise relationship links followed by a hierarchical
document map. Standard Markdown links remain readable in GitHub, editors, and
agent tooling.

## Current state

Every `.cortex/**/*.md` document now begins with `Relationships` and `Document
map`. Loom validates link targets, fragments, heading coverage, ordering,
hierarchy, and the two-bullet explanation contract.

The six-PR migration is complete. The temporary migration ledger has been
removed, so there are no document exemptions.

## Decisions

- Every Cortex Markdown document uses `Relationships` as its first H2.
- Every Cortex Markdown document uses `Document map` as its second H2.
- Relationships use standard Markdown links.
- Document maps use local Markdown heading links.
- Each link has exactly two concise nested explanations.
- Document maps preserve the document's heading hierarchy.
- Loom owns syntax-aware mechanical enforcement.
- The final state has no migration ledger or exemptions.
- Complete product PR validation was excluded by request.
- Each slice ran Cortex-specific Loom checks and pre-push hygiene.

## Issues

- [x] [Define the document-map contract and enforcement](document-map-contract-and-enforcement.md)
- [x] [Migrate dynamic skills](migrate-dynamic-skills.md)
- [x] [Migrate workflows and references](migrate-workflows-and-references.md)
- [x] [Migrate design documents and execution plans](migrate-design-and-execution-docs.md)
- [x] [Migrate product specifications and root Cortex documents](migrate-product-and-root-docs.md)

## Delivery

- [PR #1003](https://github.com/meta-secret/nook/pull/1003) — contract and enforcement
- [PR #1004](https://github.com/meta-secret/nook/pull/1004) — dynamic skills
- [PR #1005](https://github.com/meta-secret/nook/pull/1005) — workflows and references
- [PR #1006](https://github.com/meta-secret/nook/pull/1006) — design and execution records
- [PR #1007](https://github.com/meta-secret/nook/pull/1007) — product and root records
- [PR #1009](https://github.com/meta-secret/nook/pull/1009) — final cleanup and ledger removal

## References

- [Nook Cortex](https://github.com/meta-secret/nook/tree/main/.cortex)
- [Loom Cortex audit](https://github.com/meta-secret/nook/blob/main/agentic-ai/loom/src/commands/cortex-audit.ts)
- [lat.md](https://github.com/1st1/lat.md)
