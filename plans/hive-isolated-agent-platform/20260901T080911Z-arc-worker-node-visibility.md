---
title: Expose ARC worker node in Remote logs
feature: hive-isolated-agent-platform
issue: null
started_at: 2026-09-01T08:09:11Z
agent: codex
gizmo_id: arc-worker-node-visibility
---

# Task plan

## Interpreted request

Make the physical Kubernetes worker selected for a focused Remote job visible in durable GitHub Actions output instead of exposing only the ephemeral runner Pod identity.

## Requirements

- Obtain the scheduled worker identity from Kubernetes' native Pod metadata projection.
- Emit the worker identity near the start of the focused Remote batch job.
- Fail observably if the required identity is missing.
- Protect the manifest and workflow behavior with the existing executable ARC contract.
- Deliver and validate one exact-head pull request through merge.

## Constraints and exclusions

- Do not grant the runner Kubernetes API credentials or add a cluster lookup from the workflow.
- Do not alter scheduling, node selection, runner capacity, or isolation.
- Do not add visibility to unrelated hosted-runner workflows in this slice.
- Do not include cluster addresses, credentials, captured command output, or machine inventory.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: arc-worker-node-visibility
- Estimated authored changed lines: 30
- Owning modules, packages, or layers: ARC general runner values, focused Remote workflow, and ARC manifest contract
- Ownership units:
1. Capability: ARC worker node visibility; Gizmo ID: arc-worker-node-visibility; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: ARC manifest contract passes and Remote emits the required node notice
- Public or cross-module interfaces: General ARC runner environment exposes KUBERNETES_NODE_NAME to workflow steps
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 30
- Current PR slice and acceptance evidence: Project the scheduled node and log it in Remote; Acceptance evidence: focused executable manifest contract and exact-head PR validation pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: arc-worker-node-visibility; Gizmo name: ARC worker node visibility; Predecessor Gizmo ID: None; Project the scheduled node and log it in Remote; Estimated authored changed lines: 30; Acceptance evidence: focused executable manifest contract and exact-head PR validation pass

## Initial plan

1. Add the fail-closed Kubernetes node metadata projection to the general ARC runner.
2. Add an early Remote batch placement notice.
3. Extend and run the executable ARC manifest contract.
4. Publish, validate, review, and squash-merge the exact pull-request head.

## Completion evidence

- The rendered ARC values retain the node metadata projection without service-account access.
- The focused Remote job emits a Kubernetes worker notice and rejects missing identity.
- Exact-head repository validation and readiness pass.
- The pull request is squash-merged and the Workbench worklog is published.

## Safety review

- This record contains only public-safe implementation scope and repository interfaces.
- It contains no source wording, conversation transcript, credential material, private data, captured command output, local path, or unnecessary infrastructure detail.
