---
title: User-authorized major architecture policy
feature: unplanned
issue: issues/unplanned/user-authorized-major-architectural-changes.md
plan: plans/unplanned/20260826T160309Z-user-authorized-major-architecture.md
nook_pr: https://github.com/meta-secret/nook/pull/1148
status: completed
started_at: 2026-08-26T16:03:09Z
finished_at: 2026-08-26T18:52:04Z
agent: codex
---

# Work summary

## Outcome

Nook now requires explicit user initiative before an agent implements a major
architectural direction derived from agent reasoning. The executable-skill
registry and its replacement command registry were removed separately from
Main. No replacement registry or harness runtime was added by this task.

## Progress

- Added the canonical semantic rule to the self-improvement authority.
- Applied the decision before implementation planning in the coding workflow.
- Added a trusted `major_change_authorized` input for automated planning.
- Made unauthorized major plans terminate with validated public-safe blocker
  evidence instead of implementation.
- Updated pull-request, CI, Cortex navigation, and focused validation contracts.
- Handed ownership of `.cortex/workflows/coding-bro.md` to the harness-native
  module-DAG task after merge, without touching PR #1151.

## Implementation problems

- Early iterations gave the automated boundary too much runtime machinery.
  Review-driven revisions reduced it to semantic Cortex policy plus a trusted
  planning input and public-safe blocker output.
- Main advanced during delivery, so the branch was refreshed and exact-head
  validation was repeated on the final current-base head.
- The local merge command reported a worktree branch-deletion error after the
  server accepted the squash merge. GitHub state confirmed the merge and remote
  branch deletion.

## Decisions

- Agents retain autonomy for bounded implementation within a user-selected
  solution and may investigate or propose major alternatives.
- Large, novel, cross-module, security-boundary, or fundamentally new designs
  require explicit user discussion and implementation authorization.
- The policy is not an executable-skill allowlist and does not presume hostile
  repository code.

## Validation

- Exact validated head: `ca39a41758c73c0d8550094c2e228d8afa6405c4`.
- Exact-head validation: https://github.com/meta-secret/nook/actions/runs/33001006775.
- `task pr:ready PR=1148` reported current base, successful deployment,
  required checks green, and no unresolved actionable feedback.
- PR #1148 squash-merged as
  `1ac6df688fae41db55aefb3d8606259f2e6c7def`.

## Remaining work

- The separately owned harness-native module-DAG task will make its small
  compatibility update to `.cortex/workflows/coding-bro.md` and PR #1151.
