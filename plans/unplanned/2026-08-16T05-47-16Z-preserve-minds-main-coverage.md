---
title: Preserve minds-only merged-head ecosystem coverage
feature: unplanned
issue: issues/unplanned/unify-main-rust-ecosystem-workflow.md
started_at: 2026-08-16T05:47:16Z
agent: codex
---

# Superseding task plan

## Interpreted request

Consolidate simultaneous merged-head checks without removing the isolated Rust
ecosystem coverage required when the product Main workflow does not run.

## Requirements

- Run product-merge ecosystem jobs inside Main in parallel.
- Keep a narrow specialist Main-push trigger for `agentic-ai/minds/**`.
- Preserve scheduled, manual, and minds-only PR ecosystem execution.
- Suppress empty trusted-consumer runs caused by the PR-close workflow.
- Keep specialist and trusted workflows whose boundaries differ from Main.
- Complete review, exact-head validation, squash merge, and records.

## Constraints and exclusions

- Supersedes the trigger design in the earlier task-start plan.
- Do not weaken or delete any ecosystem gate.
- Do not run the product Main pipeline for minds-only changes.
- Do not change product code, Bake targets, credentials, or cache policy.
- Do not launch unnecessary focused remote tasks.

## Change budget and PR sequence

- Estimated authored changed lines: 425
- Owning modules, packages, or layers: GitHub Actions Main and specialist ecosystem entry points, trusted PR consumers, CI structural tests, and Cortex workflow documentation
- Public or cross-module interfaces: Main job topology, specialist minds-only trigger, Main statistics and failure-handoff input, and trusted workflow-run branch filtering
- Delivery shape: One PR
- Current PR estimated authored changed lines: 425
- Current PR slice and acceptance evidence: Consolidate product Main orchestration while preserving isolated minds coverage and trusted boundaries; Acceptance evidence: structural tests, exact-head validation, non-overlapping trigger contracts, and squash merge
- PR slices and acceptance evidence:
  1. Consolidate product Main orchestration while preserving isolated minds coverage and trusted boundaries; Acceptance evidence: structural tests, exact-head validation, non-overlapping trigger contracts, and squash merge

## Initial plan

1. Publish this superseding plan and update the focused issue.
2. Restore only the minds-only Main-push path in the specialist workflow.
3. Tighten structural tests around Main and specialist trigger ownership.
4. Reconcile Cortex and README wording with the exception.
5. Run pre-push hygiene, amend the commit, and push the focused PR.
6. Trigger exact-head validation and address feedback immediately.
7. Squash-merge and publish completion records.

## Completion evidence

- Product changes start one Main run containing ecosystem jobs.
- Minds-only changes start the specialist ecosystem run without product Main.
- PR-close events do not start empty trusted-consumer runs.
- `task pr:ready` reports exact-head readiness and zero unresolved threads.
- Workbench links the merged PR, worklog, and statistics.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
