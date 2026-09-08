---
title: Split closed codec from webhook writing
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-reconciliation.md
started_at: 2026-09-08T12:04:00Z
agent: codex
gizmo_id: proactive-pr-steward-reconciliation
supersedes: plans/agent-orchestration/20260908T105904Z-pr-steward-remaining-three-slices.md
---

# Split closed codec from webhook writing

## Interpreted request

Continue after merged PR #1560 with four honest serial capabilities. PR #1564 owns only the closed routing and blocker codec. The next PR owns live webhook decoding and writing. Asynchronous observation and exact failure summaries remain later capabilities.

## Requirements

- Resolve every current PR #1564 finding without exceeding its already-full budget or compressing tests and ownership.
- Merge and close each predecessor before creating its successor branch from fresh main.
- Keep review bodies and job output outside the Steward-to-Gizmo routing boundary.
- PR Steward supplies bounded GitHub failure summaries; Gizmo only routes those summaries to specialists.

## Constraints and exclusions

- No stacked branches, unmerged predecessor bases, extra worktrees, compatibility readers, fallbacks, persistence, replay, or automatic repairs.
- Gizmo routes specialists and decides delivery; PR Steward owns GitHub operations and later failure investigation.
- Each slice has one observable capability and remains comfortably below 2,000 additions without test or ownership compression.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward-reconciliation
- Estimated authored changed lines: 3250
- Owning modules, packages, or layers: Loom PR Steward closed codec; owned webhook decoding/writing; asynchronous assigned-PR observation; exact GitHub failure reconciliation; AI-owned Cortex lifecycle contracts
- Ownership units:
  1. Capability: Closed source-discriminated routing and blocker codec; Gizmo ID: proactive-pr-steward-reconciliation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Closed variants, validated routing and blocker identifiers, impossible combinations, safe URLs, and exact codec tests
  2. Capability: Owned webhook decoding and writing; Gizmo ID: proactive-pr-steward-webhook-decoder; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Source-owned metadata, attribution-aware malformed blockers, continuation, operational propagation, atomic cutover, and live subscriber tests
  3. Capability: Asynchronous assigned-PR exact-head observation; Gizmo ID: proactive-pr-steward-observation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Fixed nonblocking reader, URL/head binding, unavailable blocker, responsive subscriber, and PR-less job attribution tests plus live canary
  4. Capability: Exact failure reconciliation and actionable summaries; Gizmo ID: proactive-pr-steward-failure-summary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Triggering-object, pagination, terminal-state, safe summary, and sanitized blocker tests
- Public or cross-module interfaces: closed codec in the current slice; atomic live writer adoption in the decoder slice; a new closed version for observation; a final closed version for failure summaries
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Deliver only the closed source-discriminated routing and blocker codec; Acceptance evidence: focused closed-variant, validated routing and blocker identifier, impossible-combination, safe-URL, Security, hosted exact-head, readiness, merge, and remote verification evidence
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: proactive-pr-steward-reconciliation; Gizmo name: Closed PR Steward routing codec; Predecessor Gizmo ID: None; Deliver only the closed source-discriminated routing and blocker codec; Estimated authored changed lines: 650; Acceptance evidence: focused closed-variant, validated routing and blocker identifier, impossible-combination, safe-URL, Security, hosted exact-head, readiness, merge, and remote verification evidence
  2. Gizmo ID: proactive-pr-steward-webhook-decoder; Gizmo name: Owned PR Steward webhook decoding and writing; Predecessor Gizmo ID: proactive-pr-steward-reconciliation; Deliver source-owned webhook decoding, attribution-aware malformed blockers, continuation, propagation, and atomic writer cutover; Estimated authored changed lines: 550; Acceptance evidence: focused decoder, attribution, malformed continuation, operational propagation, atomic cutover, live canary, Security, hosted exact-head, readiness, merge, and remote verification evidence
  3. Gizmo ID: proactive-pr-steward-observation; Gizmo name: Asynchronous PR Steward exact-head observation; Predecessor Gizmo ID: proactive-pr-steward-webhook-decoder; Deliver nonblocking fixed assigned-PR observation and exact-head binding; Estimated authored changed lines: 850; Acceptance evidence: focused async runner, fixed request, URL/head binding, unavailable blocker, responsive observer, PR-less job attribution, live canary, Security, hosted exact-head, readiness, merge, and remote verification evidence
  4. Gizmo ID: proactive-pr-steward-failure-summary; Gizmo name: Exact PR Steward failure summaries; Predecessor Gizmo ID: proactive-pr-steward-observation; Deliver exact triggering-object failure reconciliation and bounded actionable summaries; Estimated authored changed lines: 1200; Acceptance evidence: focused source, pagination, mismatch, terminal-state, blocker and summary tests, Security, hosted exact-head validation, readiness, merge, and remote verification

## Initial plan

1. Rewrite PR #1564 from its current reviewed head to retain only the closed codec and contract tests; implement the validated blocker-PR finding there.
2. Reply and resolve current threads against their published successor ownership, validate, merge, verify, and close the codec issue.
3. Create the webhook decoder/writer branch from fresh merged main and deliver it completely before starting observation.
4. Deliver asynchronous observation, then exact failure summaries, through the same serial lifecycle.

## Completion evidence

- Every slice stays at or below its honest estimate and below the repository hard stop.
- Each predecessor is merged, remotely verified, and closed before its successor branch exists.
- Review routing remains compact while the final PR gives Gizmo bounded actionable failure summaries.

## Safety review

- This record contains only bounded planning metadata and public repository references.
