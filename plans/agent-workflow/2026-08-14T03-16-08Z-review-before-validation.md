---
title: Converge Codex review before full PR validation
feature: agent-workflow
issue: none
started_at: 2026-08-14T03:16:08Z
agent: codex
---

# Converge Codex review before full PR validation

## Interpreted request

Reduce obsolete full validation cycles by moving AI review ahead of the
expensive exact-head gate. Preserve GitHub Actions as the authoritative product
validation surface. Keep external review bounded so service unavailability
cannot block an otherwise ready pull request indefinitely.

## Requirements

- Add an advisory local Codex review command for the branch diff.
- Reuse the existing exact-head Cloud review request marker.
- Give automatic Cloud review a grace period before posting a manual request.
- Poll the exact head for a bounded interval.
- Report clean review, actionable feedback, timeout, and stale-head outcomes.
- Avoid duplicate manual requests when current-head review has settled.
- Run complete PR validation only after review convergence or timeout.
- Keep existing feedback mandatory once it has arrived.
- Add behavior-focused tests for review timing and state transitions.
- Update all active workflow guidance and Task entrypoints consistently.

## Constraints and exclusions

- Codex review remains advisory and is not a permanent merge requirement.
- Local review does not replace GitHub Actions tests or builds.
- Missing Codex access or service responses must have an explicit skip or
  timeout outcome.
- Other agents' issues, branches, pull requests, reviews, and checks remain
  read-only.
- PR #997 remains outside this task's ownership.
- Heavy product validation runs only on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 1,200
- Owning modules, packages, or layers: CI agent review orchestration, Task
  entrypoints, Loom delivery flow, preflight, and Cortex workflow guidance.
- Public or cross-module interfaces: `task pr:review-local` and bounded
  exact-head Cloud review convergence.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,200
- Current PR slice and acceptance evidence: Review convergence before full validation; Acceptance evidence: CI-agent tests, workflow preflight, exact-head review, repository validation, and zero unresolved conversations.
- PR slices and acceptance evidence: Review convergence before full validation; Acceptance evidence: CI-agent tests, workflow preflight, exact-head review, repository validation, and zero unresolved conversations.

## Initial plan

1. Inventory review request, feedback audit, validation, and readiness callers.
2. Add typed bounded convergence behavior and local review Task entrypoints.
3. Add regression tests for automatic grace, manual fallback, timeout,
   feedback, and head replacement.
4. Align Cortex, prompts, Loom, and preflight with review-before-validation.
5. Run pre-push hygiene and push one workflow-focused PR.
6. Converge review, run exact-head validation once, pass readiness, and merge.
7. Publish the completion worklog and immutable agent statistics.

## Completion evidence

- Agents can run a local advisory review before push.
- Cloud review convergence is exact-head, bounded, and duplicate-safe.
- Actionable feedback prevents premature full validation.
- A missing reviewer times out without becoming a permanent merge gate.
- Complete validation starts only on a head expected to merge.
- The implementation PR is squash-merged with zero unresolved conversations.

## Safety review

This record contains no source request, conversation record, sensitive access
material, private data, diagnostic dump, machine path, or unnecessary
infrastructure detail.
