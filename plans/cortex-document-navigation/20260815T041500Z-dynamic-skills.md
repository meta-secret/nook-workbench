---
title: Migrate Cortex dynamic skills to document navigation
feature: cortex-document-navigation
issue: issues/cortex-document-navigation/migrate-dynamic-skills.md
started_at: 2026-08-15T04:15:00Z
agent: codex
---

# Migrate Cortex dynamic skills to document navigation

## Interpreted request

Apply the merged scan-first navigation contract to the cohesive dynamic-skill
family. Preserve each card's detailed rule while making its relationships and
internal articles visible at the start.

## Requirements

- Add `Relationships` and `Document map` as the first two H2 sections.
- Map every content heading in source order and hierarchy.
- Give every linked navigation entry exactly two concise child bullets.
- Use only standard Markdown links.
- Remove each compliant card from the monotonic migration ledger.
- Keep the skill registry and executable wrappers synchronized.

## Constraints and exclusions

- Do not edit `issue-scope-management.md` while Nook PR #1002 owns it.
- Do not change the meaning of existing coding, review, security, or delivery
  rules.
- Do not touch workflow, design, product, reference, execution-plan, or root
  Cortex families.
- Do not trigger complete product PR validation.
- Run focused Cortex, Loom, TypeScript-state, and pre-push checks.

## Change budget and PR sequence

- Estimated authored changed lines: 1,400
- Owning modules, packages, or layers: Cortex dynamic-skill documentation family
- Public or cross-module interfaces: Dynamic-skill relationship graph and internal navigation maps
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,400
- Current PR slice and acceptance evidence: Migrate 23 unowned dynamic-skill cards and shrink the ledger; Acceptance evidence: Loom Cortex audit, registry audit, focused TypeScript-state check, and pre-push hygiene pass
- PR slices and acceptance evidence: Migrate 23 unowned dynamic-skill cards and shrink the ledger; Acceptance evidence: Loom Cortex audit, registry audit, focused TypeScript-state check, and pre-push hygiene pass

## Initial plan

1. Inventory the remaining dynamic-skill headings and existing related links.
2. Generate concise relationship and hierarchical map sections per card.
3. Review summaries for meaning preservation and Cortex writing quality.
4. Remove the 23 migrated paths from the monotonic ledger.
5. Run Loom verification, Cortex audit, TypeScript-state preflight, and
   pre-push hygiene.
6. Review, publish, and squash-merge the bounded family PR.

## Completion evidence

- Every unowned dynamic-skill card passes the structural audit.
- The registry continues to match canonical cards and executable wrappers.
- The migration ledger retains only the one card owned by Nook PR #1002 from
  this family.
- The scoped PR is below 5,000 authored changed lines and squash-merged.

## Safety review

- This migration adds navigation metadata without changing skill semantics.
- The plan contains no prompt transcript, secrets, private data, raw logs, or
  local paths.
