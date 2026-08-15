---
title: Cortex document navigation
status: in_progress
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T02:54:05Z
---

# Cortex document navigation

## Goal

Make every Cortex Markdown document easy to scan before reading its detailed
content.

Each document begins with concise relationship links followed by a hierarchical
document map. Standard Markdown links remain readable in GitHub, editors, and
agent tooling.

## Current state

Cortex has directory indexes and many contextual links, but individual files
do not share one internal navigation contract. Status, relationships, and
section discovery are expressed inconsistently. Large documents require humans
and agents to read deeply before they can find the relevant article.

The migration must remain safe while other active pull requests own some Cortex
files. Those files remain read-only until their current owners finish.

## Decisions

- Every Cortex Markdown document will use `Relationships` as its first H2.
- Every Cortex Markdown document will use `Document map` as its second H2.
- Relationships use standard Markdown links.
- Document maps use local Markdown heading links.
- Each link has a short nested explanation.
- Document maps preserve the document's heading hierarchy.
- Loom owns syntax-aware mechanical enforcement.
- A checked-in migration ledger keeps intermediate pull requests valid.
- The final slice removes every migration exemption.
- Complete product PR validation is excluded by request.
- Each slice runs Cortex-specific Loom checks and pre-push hygiene.

## Issues

- [ ] [Define the document-map contract and enforcement](document-map-contract-and-enforcement.md)
- [ ] [Migrate dynamic skills](migrate-dynamic-skills.md)
- [ ] [Migrate workflows and references](migrate-workflows-and-references.md)
- [ ] [Migrate design documents and execution plans](migrate-design-and-execution-docs.md)
- [ ] [Migrate product specifications and root Cortex documents](migrate-product-and-root-docs.md)

## References

- [Nook Cortex](https://github.com/meta-secret/nook/tree/main/.cortex)
- [Loom Cortex audit](https://github.com/meta-secret/nook/blob/main/agentic-ai/loom/src/commands/cortex-audit.ts)
- [lat.md](https://github.com/1st1/lat.md)
