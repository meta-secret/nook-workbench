---
title: Consolidate Main and Rust ecosystem workflow ownership
feature: unplanned
issue: issues/unplanned/unify-main-rust-ecosystem-workflow.md
plan: plans/unplanned/2026-08-16T05-29-27Z-unify-main-rust-ecosystem.md
nook_pr: meta-secret/nook#1023
status: completed
started_at: 2026-08-16T05:29:27Z
finished_at: 2026-08-16T06:48:09Z
agent: codex
---

# Consolidate Main and Rust ecosystem workflow ownership

## Outcome

Main now owns product and Rust ecosystem merged-head verification in one
workflow run. Reusable ecosystem jobs remain available to specialist PR,
scheduled, and manual entry points. A focused correction moved PR-close
cancellation to the existing trusted close workflow without waking empty
workflow-run consumers.

## Progress

- Embedded dependency policy, deterministic tests, fuzz, Kani, and Dylint in
  the Main orchestrator as parallel reusable jobs.
- Routed minds-only Main pushes through the same orchestrator while skipping
  the product build and deployment chain.
- Prevented mixed product-plus-minds pushes from creating two ecosystem runs.
- Removed the close event from the explicit PR validation workflow.
- Reused trusted Linear UI demo close handling to cancel in-flight PR work.

## Implementation problems

- The first review found overlapping positive path filters on mixed
  product-plus-minds commits. Main became the single merged-head orchestrator
  and gained product-path classification.
- Filtering workflow-run consumers by source branch did not suppress a source
  PR close run. The correction removed the close trigger at its source.
- The first correction validation exposed a stale structural assertion for the
  old close trigger. The contract was updated and exact-head validation reran.

## Decisions

- Consolidate orchestration ownership while preserving reusable job
  definitions.
- Keep weekly, manual, and minds-only PR ecosystem verification available.
- Keep Hive, research deployment, releases, and trusted collectors separate
  because they have different triggers, services, credentials, or trust
  boundaries.
- Evaluate Loom and source-architecture PR checks as a separate semantic
  consolidation rather than expanding the correction PR.

## Validation

- PR 1023 exact-head run 31930632423 passed before squash merge `f6bea343d`.
- PR 1024 exact-head run 31931853912 passed the product pipeline and all five
  ecosystem jobs before squash merge `c9e0a6406`.
- `task pr:ready PR=1024` reported current base, successful preview, zero
  unresolved threads, and ready state.
- Trusted close run 31932234749 completed without a close-triggered `PR` run or
  downstream empty workflow-run consumers.

## Remaining work

- Deliver the separately tracked Loom and source-architecture PR workflow
  consolidation.
