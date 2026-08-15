---
title: Migrate Cortex workflows and references to document navigation
feature: cortex-document-navigation
issue: issues/cortex-document-navigation/migrate-workflows-and-references.md
started_at: 2026-08-15T04:40:00Z
agent: codex
---

# Migrate Cortex workflows and references to document navigation

## Interpreted request

Apply the scan-first navigation contract to the workflow and reference
families. Preserve procedural detail while exposing each document's related
context and complete article hierarchy at the start.

## Requirements

- Add `Relationships` and `Document map` as the first two H2 sections.
- Map every content heading in source order and hierarchy.
- Give every linked navigation entry exactly two concise child bullets.
- Represent body links to other Cortex documents in `Relationships`.
- Use only standard Markdown links.
- Remove every compliant document from the monotonic migration ledger.

## Constraints and exclusions

- Do not edit `coding-bro.md`, `issues.md`, or `pull-requests.md` while Nook PR
  #1002 owns them.
- Do not change workflow ordering, command contracts, or architecture policy.
- Do not touch design, product, execution-plan, dynamic-skill, or root Cortex
  families.
- Do not trigger complete product PR validation.
- Run focused Cortex, Loom, TypeScript-state, and pre-push checks.

## Change budget and PR sequence

- Estimated authored changed lines: 1,200
- Owning modules, packages, or layers: Cortex workflow and reference documentation families
- Public or cross-module interfaces: Workflow relationship graph and internal navigation maps
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,200
- Current PR slice and acceptance evidence: Migrate 15 unowned workflow/reference documents and shrink the ledger; Acceptance evidence: Loom Cortex audit, Loom verification, focused TypeScript-state and contract checks, and pre-push hygiene pass
- PR slices and acceptance evidence: Migrate 15 unowned workflow/reference documents and shrink the ledger; Acceptance evidence: Loom Cortex audit, Loom verification, focused TypeScript-state and contract checks, and pre-push hygiene pass

## Initial plan

1. Inventory headings and existing Cortex links in the unowned documents.
2. Add complete relationship and hierarchical map sections.
3. Replace generic summaries with concise article-specific routing text.
4. Remove the 15 migrated paths from the monotonic ledger.
5. Run focused Loom, Cortex, TypeScript-state, contract, and pre-push checks.
6. Review, publish, and squash-merge the bounded documentation PR.

## Completion evidence

- Every unowned workflow and reference passes the structural audit.
- Existing commands and contextual links remain unchanged and valid.
- The ledger retains only the three workflow files owned by Nook PR #1002.
- The PR remains below 5,000 authored changed lines and squash-merges.

## Safety review

- This migration adds routing metadata without changing procedural semantics.
- The plan contains no prompt transcript, secrets, private data, raw logs, or
  local paths.
