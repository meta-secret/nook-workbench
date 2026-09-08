---
title: Deliver proactive PR Steward notifications in three serial slices
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward.md
started_at: 2026-09-08T07:50:00Z
agent: codex
gizmo_id: proactive-pr-steward
supersedes: plans/agent-orchestration/20260908T073046Z-proactive-pr-steward-owned-contract.md
---

# Deliver proactive PR Steward notifications in three serial slices

## Interpreted request

Make PR Steward reactive and proactive without turning one PR into a line-budget exercise. Review comments are compact routing notices for Gizmo; GitHub failure investigation and the resulting bounded summary remain PR Steward responsibilities.

## Requirements

- Deliver compact body-free event and review routing first.
- Deliver a strict closed routing codec, observer lifecycle, and assigned-head GitHub reader second.
- Deliver exact failure reconciliation and bounded actionable summaries third.
- Merge and remotely verify each PR before creating its successor from fresh `origin/main`.
- Have PR Steward clear existing review threads and request fresh review on each exact head.

## Constraints and exclusions

- No review bodies, logs, raw payloads, credentials, or unnecessary GitHub data through Gizmo.
- No persistent service, scheduler, retry queue, journal, compatibility reader, migration fallback, or automatic repair.
- Gizmo routes work and decides delivery; PR Steward performs GitHub mechanics and investigation.
- One shared checkout and one writer at a time. No stacked branches or unmerged predecessor bases.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward
- Estimated authored changed lines: 3000
- Owning modules, packages, or layers: Loom PR Steward event tooling and tests; AI-owned PR Steward and Gizmo Cortex contracts; SRE-owned Argo GitHub webhook manifests and validation tasks
- Ownership units:
  1. Capability: Compact producer-side PR event and review routing hints; Gizmo ID: proactive-pr-steward; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused tests prove direct PR and head attribution, bounded scalar metadata, malformed-event continuation, and absence of bodies, logs, and raw payloads
  2. Capability: Closed routing codec, observer lifecycle, and assigned-head reader; Gizmo ID: proactive-pr-steward-reconciliation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused tests prove a strict closed decoder, fixed read-only GitHub access, and exact assigned-head binding
  3. Capability: Exact failure reconciliation and actionable summaries; Gizmo ID: proactive-pr-steward-failure-summary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused tests prove exact triggering-object attribution, bounded pagination, terminal-state handling, sanitized blockers, and summaries that remove GitHub-job investigation from Gizmo
- Public or cross-module interfaces: `default.github-webhook.pr-lifecycle`; compact `pr-steward-routing/v1` producer hints in slice one; closed `pr-steward-ndjson/v1` in slice two; exact-summary `pr-steward-ndjson/v2` in slice three
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 750
- Current PR slice and acceptance evidence: Deliver compact producer-side PR event and review routing hints; Acceptance evidence: focused attribution and payload-minimization tests, live workflow-job configuration, Security review, hosted exact-head validation, readiness, merge, and remote verification
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: proactive-pr-steward; Gizmo name: Compact PR Steward routing hints; Predecessor Gizmo ID: None; Deliver compact producer-side PR event and review routing hints; Estimated authored changed lines: 750; Acceptance evidence: focused attribution and payload-minimization tests, live workflow-job configuration, Security review, hosted exact-head validation, readiness, merge, and remote verification
  2. Gizmo ID: proactive-pr-steward-reconciliation; Gizmo name: Closed PR Steward routing contract; Predecessor Gizmo ID: proactive-pr-steward; Deliver the strict closed codec, observer lifecycle, and assigned-head GitHub reader; Estimated authored changed lines: 1050; Acceptance evidence: focused codec, malformed-input, API-unavailable, and head-binding tests, Security review, hosted exact-head validation, readiness, merge, and remote verification
  3. Gizmo ID: proactive-pr-steward-failure-summary; Gizmo name: Exact PR Steward failure summaries; Predecessor Gizmo ID: proactive-pr-steward-reconciliation; Deliver exact failure reconciliation and bounded actionable summaries; Estimated authored changed lines: 1200; Acceptance evidence: focused source, pagination, mismatch, terminal-state, and blocker tests, Security review, hosted exact-head validation, readiness, merge, and remote verification

## Initial plan

1. Preserve the two superseded implementations as local backup refs and reconstruct PR #1560 from fresh `origin/main` without cherry-picking mixed commits.
2. Deliver only compact producer-side routing hints and the existing `workflow_job` ingress in PR #1560.
3. Have PR Steward reply to and resolve every superseded review thread, request fresh review, then validate, merge, remotely verify, and close the first Workbench issue.
4. Create the closed-routing branch from fresh merged `origin/main`; fully deliver and close it before starting the failure-summary branch.
5. Deliver exact GitHub failure reconciliation last, with PR Steward supplying Gizmo the necessary bounded summary.

## Completion evidence

- Every PR stays below its declared estimate and comfortably below the 2,000-line hard stop.
- Review/comment notifications contain identifiers and location metadata, never bodies or logs.
- Each predecessor is merged, remotely verified, and closed before the successor branch exists.
- Final evidence proves PR Steward investigates GitHub failures and Gizmo only routes the resulting summary.

## Safety review

- This record contains only bounded planning metadata and public repository references.
