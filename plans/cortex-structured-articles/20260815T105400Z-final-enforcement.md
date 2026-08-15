---
title: Migrate root Cortex documents and enable final enforcement
feature: cortex-structured-articles
issue: issues/cortex-structured-articles/final-enforcement.md
started_at: 2026-08-15T10:54:00Z
agent: codex
---

# Migrate root Cortex documents and enable final enforcement

## Interpreted request

Complete the universal article grammar across Cortex by migrating the three root
manuals and removing the temporary exemption mechanism. Preserve all policy and
architecture authority while making it structurally transparent.

## Requirements

- Preserve repository policy, architecture, security boundaries, and commands.
- Use ordered lists only where workflow or recovery order changes the outcome.
- Use bullets and nesting for peer rules, authority, boundaries, and choices.
- Keep rationale and explanation in clearly bounded articles.
- Synchronize document maps and relationships.
- Delete the migration ledger after the final three paths comply.

## Constraints and exclusions

- This is a Markdown-only structural migration.
- No corpus family remains after this slice.
- Runtime, CI, and Workbench behavior do not change.

## Change budget and PR sequence

- Estimated authored changed lines: 4900
- Owning modules, packages, or layers: Root `.cortex/AGENTS.md`, `.cortex/ARCHITECTURE.md`, `.cortex/rules.md`, and the migration ledger.
- Public or cross-module interfaces: Repository policy, architecture, security rules, commands, document maps, and relationships.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 4900
- Current PR slice and acceptance evidence: Three root manuals plus ledger deletion and final global audit; Acceptance evidence: Cortex audit, semantic consistency review, pre-push, hosted Loom, and PR readiness.
- PR slices and acceptance evidence:
  Three root manuals plus ledger deletion and final global audit; Acceptance evidence: Cortex audit, semantic consistency review, pre-push, hosted Loom, and PR readiness.

## Initial plan

1. Remove the final three exemptions to expose mechanical findings.
2. Classify each finding and surrounding article by semantic shape.
3. Restructure policy, authority, boundaries, commands, and ordered procedures.
4. Delete the empty ledger and run a corpus-wide audit without exemptions.
5. Confirm unchanged policy and architecture meaning, then deliver one exact-head
   PR.

## Completion evidence

- No migration ledger remains.
- Loom reports no structure, density, map, relationship, or link finding across
  the complete corpus.
- Semantic review confirms policy, architecture, and security preservation.
- Hosted docs checks and repository readiness pass.

## Safety review

- This record contains public project scope only.
- It contains no transcript, confidential value, private data, unfiltered
  execution output, local path, or unnecessary infrastructure detail.
