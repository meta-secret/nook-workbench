---
title: Deliver proactive PR Steward failure summaries
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward.md
started_at: 2026-09-08T03:23:45Z
agent: codex
gizmo_id: proactive-pr-steward
---

# Deliver proactive PR Steward failure summaries

## Interpreted request

Complete the reactive PR delivery boundary so PR Steward, not Gizmo, receives
GitHub lifecycle notifications, reconciles the exact pull request and failing
job state, and hands Gizmo enough bounded evidence to route the responsible
functional team immediately.

## Requirements

- Subscribe to explicit GitHub job lifecycle events as well as existing PR,
  check, workflow, review, comment, and status events.
- Decode typed unsuccessful states without exposing the original webhook body.
- Have PR Steward use `gh` and GitHub APIs to reconcile job, workflow, check,
  review, deployment, mergeability, and exact-head state when an event arrives.
- Send Gizmo a concise summary containing identities, conclusions, URLs,
  first actionable failure context, and any ambiguity or blocker.
- Keep Gizmo responsible for functional routing and final delivery decisions,
  while removing GitHub-job investigation from Gizmo.
- Prove behavior with focused tests, hosted exact-head validation, security
  review, readiness evidence, merge verification, and Workbench closeout.

## Constraints and exclusions

- No persistent PR Steward service, scheduler, retry queue, durable consumer,
  journal, compatibility path, or speculative recovery.
- No product-code changes, automated repairs, technical adjudication by PR
  Steward, raw logs, credentials, or sensitive payloads in summaries.
- One PR from current `origin/main`; authored additions must stay below 2,000.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Loom PR Steward event tooling and tests; AI-owned PR Steward and Gizmo Cortex contracts; SRE-owned Argo GitHub webhook manifests and validation tasks
- Ownership units:
  1. Capability: Actionable PR Steward event summary and GitHub reconciliation contract; Gizmo ID: proactive-pr-steward; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused Loom tests prove typed job/check/workflow failures, exact PR/head association, safe summary fields, and the PR Steward-to-Gizmo boundary
  2. Capability: Individual workflow-job webhook delivery; Gizmo ID: proactive-pr-steward; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Infrastructure manifests and checks require `workflow_job`, deployment updates the live hook, and the active hook reports the exact event set
  3. Capability: Event summary security review; Gizmo ID: proactive-pr-steward; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security confirms least-privilege event consumption, bounded output, and absence of credentials, raw payloads, or sensitive logs
- Public or cross-module interfaces: `default.github-webhook.pr-lifecycle`; PR Steward NDJSON event summary; PR Steward-to-Gizmo notification contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Deliver the complete proactive failure-summary boundary; Acceptance evidence: focused tests, security review, live event configuration, hosted exact-head validation, readiness, merge, and remote verification
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: proactive-pr-steward; Gizmo name: Proactive PR Steward; Predecessor Gizmo ID: None; Deliver the complete proactive failure-summary boundary; Estimated authored changed lines: 650; Acceptance evidence: focused tests, security review, live event configuration, hosted exact-head validation, readiness, merge, and remote verification

## Initial plan

1. Publish the focused Workbench issue and immutable plan, then render and
   dispatch the complete native Team Agent sequence.
2. Have AI implement typed events, actionable summaries, GitHub reconciliation
   ownership, Cortex updates, and focused tests.
3. Have SRE add explicit workflow-job delivery and infrastructure validation.
4. Obtain a bounded security review and route any correction to its owner.
5. Run pre-push hygiene, publish the branch and PR, then have PR Steward own
   validation observation, summaries, readiness evidence, merge, and remote
   verification.
6. Publish the Workbench worklog and completion state.

## Completion evidence

- Focused local Loom and infrastructure checks pass for the changed contracts.
- Hosted validation passes on the exact pushed head.
- The live GitHub hook includes the exact job and PR lifecycle event set.
- Security review reports no unresolved boundary finding.
- PR Steward returns readiness and merge evidence; the squash merge and remote
  result are verified before Workbench closeout.

## Safety review

- This record contains no raw prompt, transcript, secret, private data, raw
  log, local path, or unnecessary infrastructure detail.
