---
title: Migrate structured dynamic skills A
feature: cortex-structured-articles
issue: issues/cortex-structured-articles/dynamic-skills-a.md
started_at: 2026-08-15T09:04:00Z
agent: codex
---

# Migrate structured dynamic skills A

## Interpreted request

Apply the universal Cortex article grammar to a bounded first group of dynamic
skills. Make their operational hierarchy visually transparent without removing
necessary explanation or changing the rules they encode.

## Requirements

- Structure each article according to explanation, rules, procedure, or
  reference semantics.
- Use ordered lists only for actions whose order matters.
- Use nested items only for real ownership, branches, or substeps.
- Keep document maps synchronized with every heading change.
- Remove migrated paths from the shrinking ledger.
- Review relationships and durable meaning for consistency.

## Constraints and exclusions

- This slice changes documentation structure only.
- It does not change runtime code or redefine existing skill policy.
- It excludes larger dynamic skills reserved for the second slice.
- It excludes the already compliant structured-article and document-map cards.

## Change budget and PR sequence

- Estimated authored changed lines: 3200
- Owning modules, packages, or layers: `.cortex/dynamic-skills` and the
  structured-article migration ledger.
- Public or cross-module interfaces: Agent-readable dynamic-skill manuals,
  their relationship graph, and internal document maps.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 3200
- Current PR slice and acceptance evidence: Thirteen small dynamic-skill documents plus ledger reduction; Acceptance evidence: Cortex audit, semantic consistency review, pre-push, and exact-head PR readiness.
- PR slices and acceptance evidence:
  Thirteen small dynamic-skill documents plus ledger reduction; Acceptance evidence: Cortex audit, semantic consistency review, pre-push, and exact-head PR readiness.

## Initial plan

1. Classify every selected article by semantic body shape.
2. Restructure procedures, rules, branches, and references in small groups.
3. Synchronize each document map and preserve external relationships.
4. Remove exactly the compliant paths from the migration ledger.
5. Run Cortex audit, formatting, semantic consistency review, and pre-push.
6. Deliver and validate one exact-head PR.

## Completion evidence

- All selected documents are absent from the migration ledger.
- Loom reports no article-structure or document-map findings for the slice.
- Semantic review confirms unchanged policy meaning.
- The exact PR head is green and ready with no unresolved feedback.

## Safety review

- The plan contains public project documentation scope only.
- It contains no prompt transcript, confidential value, private data,
  unfiltered execution output, local path, or unnecessary infrastructure
  detail.
