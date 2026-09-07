---
title: Sequential PR delivery policy
feature: agent-orchestration
issue: null
plan: plans/agent-orchestration/20260907T070235Z-sequential-pr-delivery-policy.md
nook_pr: 1501
status: completed
started_at: 2026-09-07T07:02:35Z
finished_at: 2026-09-07T07:50:27Z
agent: codex
---

# Sequential PR delivery policy

## Outcome

Pull request 1501 replaced the one-PR-only planning rule with enforced
sequential delivery for necessary oversized features. Each planned slice now
has distinct observable functionality and acceptance evidence. The workflow
requires full merge verification and Workbench closeout before implementation
of the next slice begins from current `origin/main`.

## Progress

- Updated Gizmo planning, pull-request, issue, and mission-delivery policy.
- Updated the trusted implementation-agent planning prompt.
- Extended Workbench admission to accept one PR or a strict sequential series.
- Rejected independent and stacked modes, invalid predecessor chains,
  incomplete estimates, oversized slices, and duplicate slice contracts.
- Updated focused regression tests and trusted workflow blocker messaging.
- Squash-merged PR 1501 and verified the result on remote `main`.

## Implementation problems

- `origin/main` advanced once during implementation. The branch rebased cleanly
  before publication.
- The first hosted `WASM Node tests` attempt could not reach its ARC BuildKit
  builder within the health window. No product compilation began in that job.
- One exact-head rerun completed successfully without a code change.
- The optional Codex review was unavailable because the account usage limit
  was reached. Repository readiness accepted the exact head without it.

## Decisions

- One PR remains the default when the complete necessary feature fits cleanly.
- Simplification and redesign precede every multi-PR decision.
- A necessary estimate above 2,000 additions uses only sequential PRs.
- Every slice stays within 2,000 authored additions.
- Successor branches and implementation wait for predecessor merge,
  verification, and closeout.
- Stacked branches and pull requests are prohibited.

## Validation

- Workbench record tests passed 109 of 109 cases.
- Focused preflight Workbench tests passed 20 of 20 cases.
- Rust formatting and Git diff hygiene passed.
- Cortex audit returned `auditOk: true`.
- `task loom:pre-push` passed with 388 authored additions.
- PR workflow run 34095358644 succeeded on attempt 2.
- Repository policy run 34095227789 succeeded.
- GitHub Pages deployment 6304153778 succeeded.
- `task pr:ready PR=1501` returned `ready: true`.
- Remote `main` contains squash commit
  `a377a6635f27e53cbde2c7bf413289f77d3bb27e`.

## Remaining work

- None.
