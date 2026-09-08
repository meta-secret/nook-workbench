---
title: Complete the closed compact Steward contract
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward.md
started_at: 2026-09-08T06:35:01Z
agent: codex
gizmo_id: proactive-pr-steward
supersedes: plans/agent-orchestration/20260908T055827Z-proactive-pr-steward-sequential.md
---

# Deliver proactive PR Steward failure summaries

## Interpreted request

Deliver the reactive PR boundary in two independent sequential capabilities.
First establish compact versioned event and review routing. After it merges,
add exact failure reconciliation and summaries without making Gizmo inspect
GitHub jobs.

## Requirements

- Subscribe to explicit GitHub job lifecycle events as well as existing PR,
  check, workflow, review, comment, and status events.
- Decode typed unsuccessful states without exposing the original webhook body.
- Have PR Steward use `gh` and GitHub APIs to reconcile job, workflow, check,
  review, deployment, mergeability, and exact-head state when an event arrives.
- Send Gizmo compact review/comment routing metadata without full bodies or
  logs, then route detailed failure evidence only in the dependent slice.
- Keep Gizmo responsible for functional routing and final delivery decisions,
  while removing GitHub-job investigation from Gizmo.
- Prove behavior with focused tests, hosted exact-head validation, security
  review, readiness evidence, merge verification, and Workbench closeout.
- Merge and remotely verify the compact routing slice before creating the
  exact failure-reconciliation branch from fresh `origin/main`.

## Constraints and exclusions

- No persistent PR Steward service, scheduler, retry queue, durable consumer,
  journal, compatibility path, or speculative recovery.
- No product-code changes, automated repairs, technical adjudication by PR
  Steward, raw logs, credentials, or sensitive payloads in summaries.
- Sequential PRs only; no stacked branches, unmerged predecessor base, or
  extra Team Agent worktree. Each slice stays comfortably below 2,000 authored
  additions without optimizing architecture or tests for line count.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward
- Estimated authored changed lines: 2800
- Owning modules, packages, or layers: Loom PR Steward event tooling and tests; AI-owned PR Steward and Gizmo Cortex contracts; SRE-owned Argo GitHub webhook manifests and validation tasks
- Ownership units:
  1. Capability: Compact versioned PR event and review routing contract; Gizmo ID: proactive-pr-steward; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused Loom tests prove assigned PR/head filtering and bounded routing metadata without review bodies, logs, secrets, or raw payloads
  2. Capability: Individual workflow-job webhook delivery; Gizmo ID: proactive-pr-steward; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Infrastructure manifests and checks require `workflow_job`, deployment updates the live hook, and the active hook reports the exact event set
  3. Capability: Routing event security review; Gizmo ID: proactive-pr-steward; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security confirms least-privilege event consumption and absence of credentials, review bodies, raw payloads, or logs
  4. Capability: Exact GitHub failure reconciliation and bounded summaries; Gizmo ID: proactive-pr-steward-reconciliation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused tests prove every failure source and mismatch path, safe URLs, sanitized blockers, and Steward-owned GitHub investigation
  5. Capability: Failure evidence security review; Gizmo ID: proactive-pr-steward-reconciliation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security accepts repository/head/object binding, fixed read-only API capabilities, output bounds, and authority separation
- Public or cross-module interfaces: `default.github-webhook.pr-lifecycle`; `pr-steward-ndjson/v1`; compact PR Steward-to-Gizmo routing notification; exact failure summary variants consumed by the dependent slice
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 1550
- Current PR slice and acceptance evidence: Deliver compact versioned PR event and review routing; Acceptance evidence: focused routing tests, security review, live workflow-job configuration, hosted exact-head validation, readiness, merge, and remote verification
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: proactive-pr-steward; Gizmo name: Compact PR Steward routing; Predecessor Gizmo ID: None; Deliver compact versioned PR event and review routing; Estimated authored changed lines: 1550; Acceptance evidence: focused routing tests, security review, live workflow-job configuration, hosted exact-head validation, readiness, merge, and remote verification
  2. Gizmo ID: proactive-pr-steward-reconciliation; Gizmo name: Exact PR Steward failure reconciliation; Predecessor Gizmo ID: proactive-pr-steward; Deliver exact-head GitHub failure reconciliation and bounded summaries; Estimated authored changed lines: 1250; Acceptance evidence: focused source and mismatch tests, security review, hosted exact-head validation, readiness, merge, and remote verification

## Initial plan

1. Preserve the complete implementation, then reconstruct PR #1560 in the
   shared checkout as the compact routing foundation from current main.
2. Have AI implement and test compact versioned review/comment/job routing;
   have SRE preserve the deployed workflow-job subscription.
3. Obtain Security acceptance, complete hosted validation and review, merge
   PR #1560, verify remote state, and close out the first issue.
4. Fetch fresh `origin/main`, create the dependent branch, and have AI add the
   exact failure reconciler and bounded summaries against the merged contract.
5. Obtain Security acceptance, hosted validation, review, readiness, merge,
   remote verification, and second-slice Workbench closeout.

## Completion evidence

- Each slice stays below its declared estimate and the 2,000-line hard limit.
- Compact review/comment routing is validated without transferring bodies or
  logs through Gizmo.
- The first PR is merged and remotely verified before the second branch starts
  from fresh `origin/main`.
- The final slice proves exact failure reconciliation, Security acceptance,
  hosted validation, readiness, squash merge, and remote verification.

## Safety review

- This record contains no raw prompt, transcript, secret, private data, raw
  log, local path, or unnecessary infrastructure detail.
