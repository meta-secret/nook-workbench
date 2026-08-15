---
title: Define the Cortex document-map contract and enforcement
feature: cortex-document-navigation
issue: issues/cortex-document-navigation/document-map-contract-and-enforcement.md
started_at: 2026-08-15T02:54:05Z
agent: codex
---

# Define the Cortex document-map contract and enforcement

## Interpreted request

Introduce a uniform scan-first layout for the repository knowledge base.
Begin with one bounded specification and linter slice. Continue through the
ordered family records until the temporary exception set is empty.

## Requirements

- Reserve the opening H2 for connections to material outside the current file.
- Reserve the following H2 for a hierarchy of local section anchors.
- Express navigation with portable Markdown and short child descriptions.
- Detect navigation drift whenever headings change.
- Add deterministic Loom enforcement with narrow behavior tests.
- Track the complete conversion as a dependency-ordered Workbench feature.

## Constraints and exclusions

- Keep every implementation pull request below 5,000 authored changed lines.
- Do not mutate Cortex files owned by another active pull request.
- Do not change the meaning of unrelated product, architecture, or workflow
  guidance during navigation-only migration.
- Do not run complete product PR validation for documentation-only slices.
- Run Cortex-specific Loom checks and required pre-push hygiene.

## Change budget and PR sequence

- Estimated authored changed lines: 1,800
- Owning modules, packages, or layers: Cortex documentation structure and Loom Cortex audit
- Public or cross-module interfaces: Mandatory Cortex Markdown section contract and Cortex audit report
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,800
- Current PR slice and acceptance evidence: Document-map contract, migration ledger, Loom checker, tests, and canonical template migration; Acceptance evidence: Loom verification, Cortex audit, migration-ledger tests, and pre-push hygiene pass
- PR slices and acceptance evidence: Document-map contract, migration ledger, Loom checker, tests, and canonical template migration; Acceptance evidence: Loom verification, Cortex audit, migration-ledger tests, and pre-push hygiene pass

## Initial plan

1. Inventory current headings, links, indexes, and active file ownership.
2. Define the canonical relationship and document-map structure.
3. Add the reusable Cortex skill and update its registry and template.
4. Extend Loom with structural findings and focused fixtures.
5. Add an exact migration ledger for documents assigned to later slices.
6. Migrate the canonical contract documents.
7. Run Loom verification, Cortex audit, and pre-push hygiene.
8. Commit, review, publish, and squash-merge the bounded pull request.

## Completion evidence

- New or migrated Markdown cannot omit or reorder the required sections.
- Broken map anchors, missing heading coverage, and stale exemptions fail.
- The canonical template demonstrates the required structure.
- Later family slices have explicit Workbench ownership and dependencies.
- The pull request is squash-merged after its scoped checks pass.

## Safety review

- This record contains only public-safe documentation architecture and delivery
  context.
- It contains no prompt transcript, secrets, private data, raw logs, or local
  paths.
