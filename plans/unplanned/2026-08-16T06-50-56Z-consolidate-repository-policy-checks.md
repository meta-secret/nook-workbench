---
title: Consolidate automatic repository policy checks
feature: unplanned
issue: issues/unplanned/consolidate-repository-policy-checks.md
started_at: 2026-08-16T06:50:56Z
agent: codex
---

# Task plan

## Interpreted request

Audit workflows that run for the same commit and combine the compatible
automatic repository-policy checks without crossing security, deployment, or
product-delivery boundaries.

## Requirements

- Replace separate Loom and source-architecture PR runs with one workflow run.
- Keep source architecture enforcement automatic for every PR update.
- Run Loom-specific jobs only for the paths they currently own.
- Keep path-scoped Loom verification on Main pushes.
- Preserve existing commands, permissions, and concurrency cancellation.
- Validate, review, squash-merge, and publish completion evidence.

## Constraints and exclusions

- Do not combine Main, Hive, research, release, remote-task, scheduled, or
  trusted workflow-run consumers.
- Do not change the checks themselves beyond orchestration and shared setup.
- Do not launch unnecessary focused remote tasks.
- Keep this delivery in one bounded semantic PR.

## Change budget and PR sequence

- Estimated authored changed lines: 260
- Owning modules, packages, or layers: GitHub workflow orchestration, CI structural tests, and Cortex CI documentation
- Public or cross-module interfaces: automatic PR check names and workflow run topology
- Delivery shape: One PR
- Current PR estimated authored changed lines: 260
- Current PR slice and acceptance evidence: Consolidate automatic repository policy orchestration; Acceptance evidence: one PR run, conditional Loom coverage, exact-head validation, review, and squash merge
- PR slices and acceptance evidence:
  1. Consolidate automatic repository policy orchestration; Acceptance evidence: one PR run, conditional Loom coverage, exact-head validation, review, and squash merge

## Initial plan

1. Publish this focused issue and task plan.
2. Define one workflow trigger surface covering every PR plus Loom-relevant Main pushes.
3. Add changed-path classification for conditional Loom verification on PRs.
4. Move source architecture enforcement into the unified workflow.
5. Remove the superseded standalone workflow and update structural contracts.
6. Reconcile Cortex CI documentation.
7. Run pre-push hygiene, open the PR, and trigger complete exact-head validation.
8. Address feedback immediately, squash-merge, and publish completion records.

## Completion evidence

- Loom-relevant PR changes show one automatic policy workflow run.
- Unrelated PR changes still enforce source architecture and skip Loom work.
- Relevant Main changes retain Loom verification.
- `task pr:ready` reports a current base, exact-head success, and zero unresolved threads.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
