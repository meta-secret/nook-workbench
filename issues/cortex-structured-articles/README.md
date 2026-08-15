---
title: Cortex structured articles
status: in-progress
created_at: 2026-08-15T07:11:40Z
updated_at: 2026-08-15T07:11:40Z
---

# Cortex structured articles

## Goal

Make the body of every Cortex document expose its real semantic structure.

Procedures use ordered steps with nested branches. Rules and parallel facts use
bullets. Long explanations remain prose, but live inside clearly owned articles
and subarticles instead of an undifferentiated manual.

## Current state

All 83 Cortex documents have standardized relationship and document-map
navigation. Their bodies still mix prose, bullets, tables, and procedures
without one shared article grammar.

The corpus contains about 22,000 lines. Workflows, design documents, and dynamic
skills are the largest families. The migration therefore requires bounded PR
slices below the 5,000 authored-line limit.

## Decisions

- Structure follows meaning, not a fixed percentage of list syntax.
- Every content article has one visible purpose and a coherent body shape.
- Ordered lists express actions that must happen in sequence.
- Unordered and nested lists express parallel rules, choices, and ownership.
- Prose remains the right form for rationale, tradeoffs, and explanation.
- H3 headings identify substantial reusable subarticles, not cosmetic labels.
- Document maps must reflect every heading introduced by the migration.
- Loom enforces only syntax-aware facts that can be proven mechanically.
- A temporary shrinking migration ledger permits bounded delivery.
- Final enforcement has no exemptions.

## Delivery sequence

- [ ] [Define the structured-article contract and enforcement](structured-article-contract-and-enforcement.md)
- [ ] Migrate dynamic skills in two bounded slices.
- [ ] Migrate workflows in two bounded slices.
- [ ] Migrate design documents in two bounded slices.
- [ ] Migrate product specifications in bounded slices.
- [ ] Migrate references, execution plans, and Cortex root documents.
- [ ] Remove the migration ledger and run the final semantic audit.

## References

- [Cortex document navigation](../cortex-document-navigation/README.md)
- [Nook Cortex](https://github.com/meta-secret/nook/tree/main/.cortex)
- [Cortex writer rule](../../plans/unplanned/20260805T160000Z-cortex-writer-rule.md)

