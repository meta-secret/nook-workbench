---
title: Migrate available Cortex product and root documents
feature: cortex-document-navigation
issue: issues/cortex-document-navigation/migrate-product-and-root-docs.md
started_at: 2026-08-15T05:51:00Z
agent: codex
---

# Migrate available Cortex product and root documents

## Interpreted request

Apply immediate, semantically grounded navigation to every available product
specification and root Cortex authority. Preserve product/security meaning and
defer only documents under active foreign ownership.

## Requirements

- Put relationships and the document map immediately after each title.
- Ground each map summary in its target article.
- Make product-index relationships explicitly catalog-directional.
- Preserve product, security, compatibility, and historical meaning.
- Remove every compliant path from the monotonic ledger.

## Constraints and exclusions

- Do not edit `AGENTS.md`, `devices-and-access.md`, or `password-envelope.md`
  while Nook PR #1002 owns them.
- Do not change product or architecture decisions.
- Use focused Cortex/Loom validation rather than the complete product suite.
- This PR cannot remove the ledger while foreign ownership remains active.

## Change budget and PR sequence

- Estimated authored changed lines: 2,100
- Owning modules, packages, or layers: Cortex product specifications and available root authorities
- Public or cross-module interfaces: Product relationship graph and root navigation maps
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 1,400
- Current PR slice and acceptance evidence: Migrate 11 product specs plus ARCHITECTURE.md and rules.md; Acceptance evidence: Cortex audit, Loom verification, focused preflight, semantic review, and pre-push hygiene
- PR slices and acceptance evidence:
1. Migrate 11 product specs plus ARCHITECTURE.md and rules.md; Acceptance evidence: Cortex audit, Loom verification, focused preflight, semantic review, and pre-push hygiene
2. Migrate the documents released by PR #1002 and remove the ledger; Acceptance evidence: Full-tree Cortex audit, focused preflight, semantic review, and pre-push hygiene

## Initial plan

1. Inventory headings and relationships in the 13 available documents.
2. Add immediate navigation and indexed overview articles.
3. Ground summaries in article content and curate catalog direction.
4. Preserve product and security boundaries.
5. Shrink the ledger and run focused validation.
6. Review, publish, and merge this bounded slice.

## Completion evidence

- All 13 available documents pass structural and semantic review.
- The ledger retains only #1002-owned files.
- The PR is below 5,000 authored changed lines and merges.
- The Workbench issue remains blocked until final cleanup is possible.

## Safety review

- This slice adds navigation without changing product contracts.
- It contains no prompt transcript, secrets, private data, raw logs, or local
  paths.
