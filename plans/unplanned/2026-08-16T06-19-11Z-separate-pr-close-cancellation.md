---
title: Separate PR close cancellation from validation
feature: unplanned
issue: issues/unplanned/unify-main-rust-ecosystem-workflow.md
started_at: 2026-08-16T06:19:11Z
agent: codex
---

# Follow-up task plan

## Interpreted request

Complete workflow consolidation by preventing PR-close cancellation from
emitting a skipped `PR` source run that wakes trusted `workflow_run` consumers.

## Requirements

- Keep close-time cancellation of in-flight PR validation.
- Stop the `PR` workflow from running on close.
- Reuse the existing trusted Linear close workflow to claim the shared PR
  concurrency group and cancel validation.
- Remove ineffective source-branch filters and replace their tests with the
  actual cancellation boundary.
- Validate, review, squash-merge, and verify the next merged topology.

## Constraints and exclusions

- Follow-up to merged PR 1023 after post-merge evidence disproved its filter assumption.
- Do not weaken exact-head validation or trusted artifact checks.
- Do not add a new workflow when the existing close workflow can own cancellation.
- Do not launch unnecessary focused remote tasks.

## Change budget and PR sequence

- Estimated authored changed lines: 160
- Owning modules, packages, or layers: PR validation trigger, trusted Linear close workflow, CI structural tests, and Cortex workflow documentation
- Public or cross-module interfaces: PR workflow event topology and repository-wide concurrency group
- Delivery shape: One PR
- Current PR estimated authored changed lines: 160
- Current PR slice and acceptance evidence: Move close cancellation out of the PR source workflow; Acceptance evidence: exact-head validation, resolved review, squash merge, and absence of close-induced trusted consumer runs
- PR slices and acceptance evidence:
  1. Move close cancellation out of the PR source workflow; Acceptance evidence: exact-head validation, resolved review, squash merge, and absence of close-induced trusted consumer runs

## Initial plan

1. Publish this follow-up plan and update the focused issue.
2. Remove `closed` from the PR workflow trigger.
3. Give the existing trusted close workflow the `pr-<number>` concurrency group.
4. Replace ineffective branch-filter tests and reconcile Cortex documentation.
5. Run pre-push hygiene, push a follow-up PR, and trigger exact-head validation.
6. Address feedback immediately, squash-merge, and verify the close topology.
7. Publish completion records for both linked PRs.

## Completion evidence

- Closing a PR does not create a source run named `PR`.
- The trusted close workflow cancels any in-flight `pr-<number>` validation.
- No close-induced handoff or UI-demo `workflow_run` run is created.
- `task pr:ready` reports exact-head readiness and zero unresolved threads.
- Workbench links both merged PRs, worklog, and statistics.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
