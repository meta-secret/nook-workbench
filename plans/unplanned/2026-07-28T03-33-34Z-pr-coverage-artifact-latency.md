---
title: Remove duplicate base coverage builds from PR verification
feature: unplanned
issue: none
started_at: 2026-07-28T03:33:34Z
agent: codex
---

# Remove duplicate base coverage builds from PR verification

## Interpreted request

Stop the source-size delivery temporarily and repair the PR validation path
that allowed Verify and preview to take more than twenty minutes.

## Requirements

- Identify the exact slow PR job step from GitHub Actions timing evidence.
- Reuse commit-keyed base coverage as soon as Main's Rust producer publishes it,
  regardless of unrelated later Main job outcomes.
- Authenticate the artifact's workflow, event, branch, and exact commit before
  trusting it.
- Never launch a second cold Docker coverage build after current PR coverage
  has already completed.
- Preserve absolute coverage-floor enforcement if an exact base artifact is
  unavailable.
- Add focused tests for in-progress, failed, expired, and untrusted artifact
  cases.
- Deliver the fix through the complete PR validation, review, merge, and
  Workbench publication loop before resuming refactor PRs.

## Initial plan

1. Cancel the active slow PR run and record its per-step timing.
2. Replace successful-overall-Main lookup with exact commit-keyed artifact
   lookup and trusted workflow validation.
3. Remove the cold base-coverage Docker fallback.
4. Format, push, run full Main-fix PR validation, address feedback, and merge.
5. Verify the resulting PR timing before resuming the source-size stack.

## Completion evidence

- Resolver unit tests cover valid artifacts from running and failed Main runs
  and reject expired or untrusted artifacts.
- PR validation downloads the existing base artifact instead of exporting base
  coverage in Docker.
- Verify and preview completes without the removed 12-minute fallback step.
- The exact-head readiness audit passes and the fix is squash-merged.

## Safety review

This record contains no credentials, raw logs, private data, local paths, or
chat transcript.
