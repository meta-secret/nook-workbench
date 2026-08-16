---
title: Route minds and product ecosystem checks through Main
feature: unplanned
issue: issues/unplanned/unify-main-rust-ecosystem-workflow.md
started_at: 2026-08-16T06:00:49Z
agent: codex
---

# Superseding task plan

## Interpreted request

Ensure every merged commit selects one Rust ecosystem orchestrator, including
product-only, minds-only, and mixed product-plus-minds changes.

## Requirements

- Make Main the only merged-head Rust ecosystem orchestrator.
- Let Main start for `agentic-ai/minds/**` changes.
- Classify whether a Main push contains product paths.
- Skip the product build, browser, and deployment chain for minds-only pushes.
- Preserve scheduled, manual, and minds-only PR specialist execution.
- Keep the trusted workflow-run branch filters from the original plan.

## Constraints and exclusions

- Supersedes the specialist Main-push exception in the prior plan.
- Do not weaken or delete any ecosystem gate.
- Do not run the product pipeline for minds-only changes.
- Do not change product code, Bake targets, credentials, or cache policy.
- Do not launch unnecessary focused remote tasks.

## Change budget and PR sequence

- Estimated authored changed lines: 500
- Owning modules, packages, or layers: GitHub Actions Main and specialist ecosystem entry points, trusted PR consumers, CI structural tests, and Cortex workflow documentation
- Public or cross-module interfaces: Main trigger and job topology, specialist trigger, Main statistics and failure-handoff input, and trusted workflow-run branch filtering
- Delivery shape: One PR
- Current PR estimated authored changed lines: 500
- Current PR slice and acceptance evidence: Route all merged-head ecosystem execution through Main while retaining isolated specialist PR and scheduled entry points; Acceptance evidence: structural tests, exact-head validation, review resolution, and post-merge Main topology
- PR slices and acceptance evidence:
  1. Route all merged-head ecosystem execution through Main while retaining isolated specialist PR and scheduled entry points; Acceptance evidence: structural tests, exact-head validation, review resolution, and post-merge Main topology

## Initial plan

1. Publish this superseding plan and update the focused issue.
2. Include minds paths in Main and add a changed-path classifier.
3. Gate the product job chain on the classifier while always running ecosystem jobs.
4. Remove the specialist Main-push trigger.
5. Tighten structural tests and reconcile Cortex and README wording.
6. Run pre-push hygiene, push the correction, and retrigger exact-head validation.
7. Address feedback immediately, squash-merge, verify Main topology, and publish completion records.

## Completion evidence

- Product-only, minds-only, and mixed changes select Main as the sole merged-head ecosystem orchestrator.
- Minds-only changes skip the product build, browser, and deployment chain.
- PR-close events do not start empty trusted-consumer runs.
- `task pr:ready` reports exact-head readiness and zero unresolved threads.
- Workbench links the merged PR, worklog, and statistics.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
