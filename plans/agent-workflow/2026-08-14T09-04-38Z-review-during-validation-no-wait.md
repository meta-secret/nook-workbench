---
title: Run Codex review during validation without added latency
feature: agent-workflow
issue: none
started_at: 2026-08-14T09:04:38Z
agent: codex
supersedes: plans/agent-workflow/2026-08-14T03-16-08Z-review-before-validation.md
---

# Run Codex review during validation without added latency

## Interpreted request

Reduce obsolete full validation cycles by pairing AI review with the expensive
exact-head gate. Preserve GitHub Actions as the authoritative product validation
surface. Use Actions runtime as the entire review opportunity so service latency
cannot add a separate delay.

## Requirements

- Add an advisory local Codex review command for the initial branch diff.
- Reuse the existing exact-head Cloud review request marker.
- Dispatch complete validation before requesting exact-head Cloud review.
- Do not poll or wait for Cloud review after GitHub Actions completes.
- Fail when the PR head changes during validation or review dispatch.
- Avoid duplicate manual requests for the same current head.
- Keep existing actionable feedback mandatory once it has arrived.
- Add behavior-focused tests for dispatch ordering and head replacement.
- Update all active workflow guidance and Task entrypoints consistently.

## Constraints and exclusions

- This plan supersedes the earlier plan because the review timing policy changed
  materially from convergence before validation to review during validation.
- Codex review remains advisory and is not a permanent merge requirement.
- Local review does not replace GitHub Actions tests or builds.
- Missing Codex access or service responses must not block validation or
  readiness.
- Other agents' issues, branches, pull requests, reviews, and checks remain
  read-only.
- PR #997 remains outside this task's ownership.
- Heavy product validation runs only on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 1,200
- Owning modules, packages, or layers: CI agent review orchestration, Task
  entrypoints, Loom delivery flow, preflight, and Cortex workflow guidance.
- Public or cross-module interfaces: `task pr:review-local`, `task pr:validate`,
  and exact-head Cloud review dispatch.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,200
- Current PR slice and acceptance evidence: Review during complete validation; Acceptance evidence: CI-agent tests, workflow preflight, exact-head validation, readiness, and zero unresolved conversations.
- PR slices and acceptance evidence:
Review during complete validation; Acceptance evidence: CI-agent tests, workflow preflight, exact-head validation, readiness, and zero unresolved conversations.

## Initial plan

1. Inventory review request, feedback audit, validation, and readiness callers.
2. Add local review and idempotent exact-head Cloud review Task entrypoints.
3. Add regression tests for dispatch ordering and head replacement.
4. Align Cortex, prompts, Loom, and preflight with review-during-validation.
5. Run pre-push hygiene and push one workflow-focused PR.
6. Run exact-head validation, handle feedback already present, pass readiness
   immediately after Actions, and merge.
7. Publish the completion worklog and immutable agent statistics.

## Completion evidence

- Agents can run a local advisory review before the initial push.
- Cloud review dispatch is exact-head, non-blocking, and duplicate-safe.
- Actionable feedback already present prevents premature merge.
- A missing reviewer adds no wait after repository-owned checks.
- Complete validation starts on the head expected to merge.
- The implementation PR is squash-merged with zero unresolved conversations.

## Safety review

This record contains no source request, conversation record, sensitive access
material, private data, diagnostic dump, machine path, or unnecessary
infrastructure detail.
