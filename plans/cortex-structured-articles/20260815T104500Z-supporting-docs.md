---
title: Migrate structured references and execution plans
feature: cortex-structured-articles
issue: issues/cortex-structured-articles/supporting-docs.md
started_at: 2026-08-15T10:45:00Z
agent: codex
---

# Migrate structured references and execution plans

## Interpreted request

Apply the universal article grammar to every Cortex reference and execution
plan. Make commands, evidence, status, decisions, and work order easy to scan
while retaining operational and historical explanation.

## Requirements

- Preserve exact commands, evidence meaning, plan status, and historical facts.
- Use ordered lists only where procedure or delivery order changes the outcome.
- Use bullets and nesting for peer options, evidence, state, and ownership.
- Keep rationale and reference explanation in clearly bounded articles.
- Synchronize document maps and relationships.
- Remove all eleven reference and execution-plan paths from the ledger.

## Constraints and exclusions

- This is a Markdown-only structural migration.
- Root Cortex documents remain for the final enforcement slice.
- Runtime, CI, and Workbench behavior do not change.

## Change budget and PR sequence

- Estimated authored changed lines: 4800
- Owning modules, packages, or layers: Six `.cortex/references` manuals, five `.cortex/exec-plans` records, and the structured-article migration ledger.
- Public or cross-module interfaces: Operational references, commands, evidence, execution status, document maps, and relationships.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 4800
- Current PR slice and acceptance evidence: All references and execution plans plus ledger reduction; Acceptance evidence: Cortex audit, semantic consistency review, pre-push, hosted Loom, and PR readiness.
- PR slices and acceptance evidence:
  All references and execution plans plus ledger reduction; Acceptance evidence: Cortex audit, semantic consistency review, pre-push, hosted Loom, and PR readiness.

## Initial plan

1. Remove the eleven supporting-document paths to expose mechanical findings.
2. Classify each finding and surrounding article by semantic shape.
3. Restructure commands, evidence, status, decisions, and ordered procedures.
4. Synchronize maps and confirm unchanged operational and historical meaning.
5. Run docs-specific validation and deliver one exact-head PR.

## Completion evidence

- No reference or execution-plan path remains in the ledger.
- Loom reports no structure, density, map, relationship, or link finding.
- Semantic review confirms command, status, and history preservation.
- Hosted docs checks and repository readiness pass.

## Safety review

- This record contains public project scope only.
- It contains no transcript, confidential value, private data, unfiltered
  execution output, local path, or unnecessary infrastructure detail.
