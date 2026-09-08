---
title: Keep observation assigned-PR-only
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-observation.md
started_at: 2026-09-08T13:45:00Z
agent: codex
gizmo_id: proactive-pr-steward-observation
supersedes: plans/agent-orchestration/20260908T120400Z-pr-steward-remaining-four-slices.md
---

# Keep observation assigned-PR-only

## Interpreted request

Deliver the two remaining capabilities serially. The current PR owns asynchronous observation of one assigned pull request and suppresses every PR-less workflow job. The final PR proves unique commit association before investigating a job and producing a bounded failure summary.

## Requirements

- Preserve the fixed assigned-PR API boundary in observation rather than claiming repository-wide uniqueness from head equality.
- Merge and close observation before creating the failure-reconciliation branch from fresh main.
- Keep review bodies and job output outside compact routing.
- PR Steward owns GitHub evidence gathering; Gizmo only routes bounded results to specialists.

## Constraints and exclusions

- No stacked branches, unmerged predecessor bases, extra worktrees, compatibility readers, fallbacks, persistence, replay, retry, schedulers, or automatic repairs.
- Observation excludes commit association, job/check/run investigation, diagnosis, and failure summaries.
- Each slice remains below 2,000 additions without compressing tests or ownership.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward-observation
- Estimated authored changed lines: 2050
- Owning modules, packages, or layers: Loom assigned-PR observer; exact GitHub failure association and summaries; AI-owned Cortex lifecycle contracts
- Ownership units:
  1. Capability: Asynchronous assigned-PR exact-head observation; Gizmo ID: proactive-pr-steward-observation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Fixed nonblocking reader, URL and head binding, unavailable blocker, responsive subscriber, PR-less job suppression, and live canary
  2. Capability: Exact failure reconciliation and actionable summaries; Gizmo ID: proactive-pr-steward-failure-summary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Bounded commit association, triggering-object binding, pagination, terminal state, safe summary, and sanitized blocker tests
- Public or cross-module interfaces: observation closed record version in the current slice; final closed failure-summary version in the last slice
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 850
- Current PR slice and acceptance evidence: Deliver nonblocking fixed assigned-PR observation and exact-head binding while suppressing PR-less jobs; Acceptance evidence: focused async runner, fixed request, URL and head binding, unavailable blocker, responsive observer, PR-less job suppression, live canary, Security, hosted exact-head, readiness, merge, and remote verification evidence
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: proactive-pr-steward-observation; Gizmo name: Asynchronous PR Steward exact-head observation; Predecessor Gizmo ID: None; Deliver nonblocking fixed assigned-PR observation and exact-head binding while suppressing PR-less jobs; Estimated authored changed lines: 850; Acceptance evidence: focused async runner, fixed request, URL and head binding, unavailable blocker, responsive observer, PR-less job suppression, live canary, Security, hosted exact-head, readiness, merge, and remote verification evidence
  2. Gizmo ID: proactive-pr-steward-failure-summary; Gizmo name: Exact PR Steward failure summaries; Predecessor Gizmo ID: proactive-pr-steward-observation; Deliver bounded commit-to-PR uniqueness, exact triggering-object failure reconciliation, and actionable summaries; Estimated authored changed lines: 1200; Acceptance evidence: focused association, source, pagination, mismatch, terminal-state, blocker and summary tests, Security, hosted exact-head validation, readiness, merge, and remote verification

## Initial plan

1. Finish observation with one fixed assigned-PR read, exact-head filtering, unavailable evidence, URL preservation, responsive subscriber behavior, and unconditional PR-less job suppression.
2. Resolve review, validate, merge, verify, and close observation before creating the successor branch.
3. In the final PR, add a separate bounded association query and route a PR-less job only when exactly one open PR matches and it is the assigned exact head.
4. Reconcile the exact triggering failure object and emit only bounded actionable summaries or sanitized blockers.

## Completion evidence

- Observation stays at or below 850 additions and the final slice stays at or below 1,200.
- Observation is merged, remotely verified, and closed before the final branch exists.
- No component outside PR Steward reads GitHub job evidence.

## Safety review

- This record contains only bounded planning metadata and public repository references.
