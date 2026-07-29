---
title: Hive PR lifecycle reliability completion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
plan: plans/hive-isolated-agent-platform/2026-07-28T22-31-28Z-hive-pr-lifecycle-reliability.md
nook_pr: 877
status: completed
started_at: 2026-07-28T22:31:28Z
finished_at: 2026-07-29T22:07:36Z
agent: codex
---

# Hive PR lifecycle reliability completion

## Outcome

Hive now marks its PRs, owns checks and review follow-ups through merge, resumes
durably after rollout, and completes the originating task only after verified
delivery. The historical Main-repair root completed in production.

## Progress

- Merged lifecycle and production repairs in PRs #872 through #877.
- Added the stable `hive` label and `[Hive]` title convention.
- Reconciled review findings left on merged PR #865 through follow-up PR #875.
- Normalized invalid blocker-only completion metadata for Main repairs.
- Made delivery feedback pagination compatible with the deployed `gh` runtime.
- Preserved atomic extension-vault replacement and rollback behavior uncovered
  while closing the original repair review.

## Implementation problems

- Production replay exposed stale merged-PR review ownership, invalid
  blocker-only completion metadata, and a deployed CLI compatibility mismatch.
- The release-scoped retry intentionally replayed the retired dependency chain
  after each platform repair before the root could be verified again.

## Decisions

- Use the immutable `hive` label as the primary provenance marker and retain
  `[Hive]` in titles for list visibility.
- Keep obsolete retirement strict for blocker tasks while normalizing the flag
  for non-blocker completions.
- Share the production feedback-query argument builder with its regression test
  so unsupported flags cannot return unnoticed.

## Validation

- PR #875 exact-head product, browser, extension, Rust, and Hive checks passed;
  merge `9efca1d14b210b996699243f6e0a27baa4c0dd55` passed Main.
- PRs #876 and #877 passed exact-head Hive, Rust ecosystem, source-architecture,
  formatting, and focused Hive tests.
- Production image:
  `sha256:891182aeac4797cbefce3d582c0f3d8e4954b9eed5409825d9555ec87ef7a67b`.
- Original root
  `main-failure-0efc901a549db6d4aa5ec59d3d88c09892794211-run-30414277979-attempt-1`
  completed on attempt 14.
- Final audit: zero `RUNNING` tasks, zero `READY` tasks, zero open Hive PRs,
  four available workers, and zero container restarts.

## Remaining work

None.
