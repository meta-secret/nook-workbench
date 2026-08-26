---
title: Deliver truthful statistics, review stabilization, and smaller pull requests
feature: pr-delivery-efficiency
issue: issues/pr-delivery-efficiency/per-head-delivery-statistics.md
started_at: 2026-08-26T04:22:43Z
agent: codex
---

# Deliver truthful statistics, review stabilization, and smaller pull requests

## Interpreted request

Repair delivery measurement first. Then prevent repeated full validation while
review is still discovering defects. Finally make 3,000 authored changed lines
the actively enforced pull-request boundary and use focused GitHub stacks for
dependent semantic slices.

## Requirements

- Preserve exact pull-request heads and all associated delivery events.
- Measure review, validation, cancellation, and obsolete compute per head.
- Add a bounded review-first lane without making Cloud review a permanent gate.
- Cancel obsolete validation immediately after a replacement head appears.
- Batch review fixes and stop pathological review/check cycling.
- Enforce an active 3,000-line limit with small numerical tolerance.
- Split by logical domain change, stable interface, tests, and documentation.
- Use native GitHub stacks for dependent slices and ordinary PRs for independent slices.

## Constraints and exclusions

- Existing active branches and pull requests remain read-only.
- Statistics history remains immutable.
- GitHub Actions remains the authoritative product validation surface.
- Exact-head readiness and squash-only history remain mandatory.
- Cloud review failure or absence cannot block delivery indefinitely.
- GitHub stacked pull requests are public preview, so the workflow needs a standard-branch fallback.

### Change budget and PR sequence

- Estimated authored changed lines: 7,500
- Owning modules, packages, or layers: Loom agent statistics, PR delivery orchestration, GitHub workflow cancellation, Workbench records, Cortex delivery policy, and plan validation
- Public or cross-module interfaces: `agentStats.assemble`, statistics schema version, `task pr:review`, `task pr:validate`, pull-request synchronization events, plan change-budget fields, and GitHub stack metadata
- Delivery shape: Three ordered PRs; use a native GitHub stack only where an upper implementation slice depends on an unmerged lower contract
- Current PR estimated authored changed lines: 2,500
- Current PR slice and acceptance evidence: Per-head statistics foundation; focused Loom tests, Workbench schema validation, exact-head hosted validation, review, readiness, and squash merge
- PR slices and acceptance evidence:
1. Per-head statistics foundation; Acceptance evidence: final and historical PR heads, review/validation/cancellation events, obsolete-compute derivation, schema tests, exact-head validation, and readiness
2. Review-first stabilization and cancellation; Acceptance evidence: bounded clean-or-timeout transition, idempotent review, immediate obsolete-run cancellation, circuit-breaker tests, exact-head validation, and readiness
3. Active 3,000-line semantic splitting and GitHub stacks; Acceptance evidence: planning warnings, fail-closed limit checks, preservation inventory, stack/fallback contracts, Cortex consistency, exact-head validation, and readiness

## Initial plan

1. Land truthful per-head statistics without changing delivery behavior.
2. Start the review-first slice from current `main` after the foundation merges.
3. Add immediate cancellation and the repeated-review circuit breaker.
4. Start the size-policy slice from current `main` unless it requires an unmerged lower interface.
5. Enforce the 3,000-line limit in planning, implementation, and readiness tooling.
6. Validate and squash-merge every slice independently.
7. Publish linked issue updates, worklogs, and immutable statistics after each merge.

## Completion evidence

- Workbench can reconstruct review and validation cost for every PR head.
- Ordinary delivery spends complete validation on one stabilized head.
- Replacement pushes stop obsolete complete pipelines promptly.
- Near-3,000-line changes trigger a durable semantic split before scope is discarded.
- Dependent slices appear as a native GitHub stack when the feature is available.
- All three PRs merge with current bases, green repository-owned checks, and zero unresolved feedback.

## Safety review

This plan contains no request transcript, secrets, private data, raw logs,
machine paths, or unnecessary infrastructure detail.
