---
title: Migrate Cortex design and execution documents
feature: cortex-document-navigation
issue: issues/cortex-document-navigation/migrate-design-and-execution-docs.md
started_at: 2026-08-15T05:27:00Z
agent: codex
---

# Migrate Cortex design and execution documents

## Interpreted request

Apply first-class navigation to durable architecture decisions and execution
plans. Preserve status, historical meaning, and detailed content while making
relationships and article structure immediately scannable.

## Requirements

- Put `Relationships` and `Document map` immediately after every H1.
- Move existing preamble content into an indexed `Overview` when non-empty.
- Map every structural heading in source order and hierarchy.
- Write article-specific what/when summaries with standard Markdown links.
- Preserve design status, supersession, and execution-plan history.
- Remove compliant paths from the monotonic ledger.

## Constraints and exclusions

- Do not edit the three design documents owned by active Nook PR #1002.
- Do not change architecture decisions or execution-plan outcomes.
- Do not touch product, workflow, reference, dynamic-skill, or root families.
- Use focused Cortex/Loom validation rather than the complete product suite.

## Change budget and PR sequence

- Estimated authored changed lines: 1,500
- Owning modules, packages, or layers: Cortex design documents and execution plans
- Public or cross-module interfaces: Architecture relationship graph and internal article navigation
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,500
- Current PR slice and acceptance evidence: Migrate 12 unowned design documents and 5 execution plans; Acceptance evidence: Cortex audit, Loom verification, focused preflight, semantic review, and pre-push hygiene
- PR slices and acceptance evidence: Migrate 12 unowned design documents and 5 execution plans; Acceptance evidence: Cortex audit, Loom verification, focused preflight, semantic review, and pre-push hygiene

## Initial plan

1. Inventory status, headings, and relationships for the 17 unowned files.
2. Add immediate navigation and indexed overview articles.
3. Curate summaries from each article's actual content.
4. Preserve index, historical, and supersession semantics.
5. Shrink the ledger and run focused validation.
6. Review, publish, and squash-merge the bounded slice.

## Completion evidence

- All 17 unowned documents pass structural and semantic review.
- Existing status and relationship meaning remains intact.
- The ledger retains only the three #1002-owned design paths in this family.
- The PR remains below 5,000 authored changed lines and merges.

## Safety review

- This slice changes navigation metadata, not architecture policy.
- It contains no prompt transcript, secrets, private data, raw logs, or local
  paths.
