---
title: Split closed routing from asynchronous observation
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-reconciliation.md
started_at: 2026-09-08T10:59:04Z
agent: codex
gizmo_id: proactive-pr-steward-reconciliation
supersedes: plans/agent-orchestration/20260908T075000Z-proactive-pr-steward-three-slices.md
---

# Split closed routing from asynchronous observation

## Interpreted request

Continue after merged PR #1560 with three smaller serial capabilities. PR #1564 owns only closed source-discriminated routing and webhook decoding. A later PR owns asynchronous exact-head observation. Failure investigation and summaries remain last.

## Requirements

- Resolve the seven current PR #1564 findings without compressing separate observation behavior into the codec slice.
- Merge and close the closed routing contract before creating the observation branch.
- Merge and close exact-head observation before creating the failure-summary branch.
- Keep review bodies and job output outside the Steward-to-Gizmo routing boundary.

## Constraints and exclusions

- No stacked branches, unmerged predecessor bases, extra worktrees, compatibility readers, fallbacks, persistence, replay, or automatic repairs.
- Gizmo routes specialists and decides delivery; PR Steward owns GitHub operations and later failure investigation.
- Each slice has one observable capability and remains comfortably below 2,000 additions without test or ownership compression.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward-reconciliation
- Estimated authored changed lines: 2950
- Owning modules, packages, or layers: Loom PR Steward closed records and webhook decoding; asynchronous assigned-PR observation; exact GitHub failure reconciliation; AI-owned Cortex lifecycle contracts
- Ownership units:
  1. Capability: Closed source-discriminated routing contract and webhook decoder; Gizmo ID: proactive-pr-steward-reconciliation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Closed variant, opaque identifier, impossible combination, malformed continuation, and atomic cutover tests
  2. Capability: Asynchronous assigned-PR exact-head observation; Gizmo ID: proactive-pr-steward-observation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Fixed nonblocking reader, URL/head binding, unavailable blocker, responsive subscriber, and PR-less job attribution tests plus live canary
  3. Capability: Exact failure reconciliation and actionable summaries; Gizmo ID: proactive-pr-steward-failure-summary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Triggering-object, pagination, terminal-state, safe summary, and sanitized blocker tests
- Public or cross-module interfaces: closed `pr-steward-ndjson/v1` in the current slice; a new closed version for observation; a final closed version for failure summaries
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Deliver the closed source-discriminated routing contract and owned webhook decoder; Acceptance evidence: focused closed-variant, opaque identifier, impossible combination, malformed continuation, atomic cutover, Security, hosted exact-head, readiness, merge, and remote verification evidence
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: proactive-pr-steward-reconciliation; Gizmo name: Closed PR Steward routing contract; Predecessor Gizmo ID: None; Deliver the closed source-discriminated routing contract and owned webhook decoder; Estimated authored changed lines: 900; Acceptance evidence: focused closed-variant, opaque identifier, impossible combination, malformed continuation, atomic cutover, Security, hosted exact-head, readiness, merge, and remote verification evidence
  2. Gizmo ID: proactive-pr-steward-observation; Gizmo name: Asynchronous PR Steward exact-head observation; Predecessor Gizmo ID: proactive-pr-steward-reconciliation; Deliver nonblocking fixed assigned-PR observation and exact-head binding; Estimated authored changed lines: 850; Acceptance evidence: focused async runner, fixed request, URL/head binding, unavailable blocker, responsive observer, PR-less job attribution, live canary, Security, hosted exact-head, readiness, merge, and remote verification evidence
  3. Gizmo ID: proactive-pr-steward-failure-summary; Gizmo name: Exact PR Steward failure summaries; Predecessor Gizmo ID: proactive-pr-steward-observation; Deliver exact triggering-object failure reconciliation and bounded actionable summaries; Estimated authored changed lines: 1200; Acceptance evidence: focused source, pagination, mismatch, terminal-state, blocker and summary tests, Security, hosted exact-head validation, readiness, merge, and remote verification

## Initial plan

1. Preserve the combined reviewed draft on a local backup ref and reconstruct PR #1564 without the reader or observer capability.
2. Resolve the seven current review threads against the narrower exact head, validate, merge, verify, and close Workbench.
3. Create the asynchronous observation branch from fresh merged main and deliver it completely before starting failure reconciliation.
4. Deliver failure summaries last and prove Gizmo never investigates GitHub jobs.

## Completion evidence

- Every slice stays below its estimate and the repository hard stop.
- Each predecessor is merged, remotely verified, and closed before its successor branch exists.
- Review routing remains compact while the final PR gives Gizmo bounded actionable failure summaries.

## Safety review

- This record contains only bounded planning metadata and public repository references.
