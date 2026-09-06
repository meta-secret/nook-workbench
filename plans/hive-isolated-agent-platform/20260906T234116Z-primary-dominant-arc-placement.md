---
title: Restore primary-dominant ARC runner placement
feature: hive-isolated-agent-platform
issue: null
started_at: 2026-09-06T23:41:16Z
agent: codex
gizmo_id: arc-primary-dominant-placement
---

# Restore primary-dominant ARC runner placement

## Interpreted request

Correct the observed build-time regression caused by hard hostname spreading across unequal machines. Retain the expanded node-local BuildKit caches, place normal build load on the faster primary pair, use the slower secondary node for a smaller share, and keep the control host as true overflow.

This plan supersedes the placement portion of `plans/hive-isolated-agent-platform/20260906T205202Z-buildkit-cache-capacity-placement.md`; that plan's 128 GiB cache-capacity outcome remains accepted.

## Requirements

- Remove the hard all-hostname placement behavior that drove near-equal burst load across unequal nodes.
- Preserve 128 GiB persistent cache capacity, the 8/112/16 GB garbage-collection policy, one BuildKit shard per node, and same-node Service routing.
- Prefer and distribute work across both primary nodes before admitting secondary capacity.
- Assign the secondary node less work than the primary pair and keep the overflow/control node last-resort.
- Cover regular ARC runner Pods and ordinary container-job Pods with focused behavioral placement evidence.
- Deliver and deploy one corrective exact-head pull request, then verify live scheduling and merge completion.

## Constraints and exclusions

- Do not reduce cache capacity, prune caches, add BuildKit daemons, or introduce a cross-node proxy.
- Do not introduce a custom scheduler, controller, fallback state machine, nested runtime, privileged runner, or host runtime socket.
- Do not change product, browser, cryptographic, vault, or application behavior.
- Do not run product compilation or full repository validation locally.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: arc-primary-dominant-placement
- Estimated authored changed lines: 120
- Owning modules, packages, or layers: ARC runner scheduling manifests, container-job placement template, focused infrastructure contracts, and SRE placement authority
- Ownership units:
1. Capability: Primary-dominant ARC scheduling correction; Gizmo ID: arc-primary-dominant-placement; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused behavioral model and manifest contracts prove primary-pair distribution, reduced secondary admission, last-resort overflow, and preserved node-local BuildKit routing
- Public or cross-module interfaces: ARC runner and container-job Kubernetes scheduling contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 120
- Current PR slice and acceptance evidence: Replace hard equalizing spread with primary-dominant placement while retaining 128 GiB caches; Acceptance evidence: focused scheduling contracts, exact-job timing comparison, hosted validation, live rollout, post-rollout burst observation, and readiness audit
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: arc-primary-dominant-placement; Gizmo name: Primary-dominant ARC placement repair; Predecessor Gizmo ID: None; Replace hard equalizing spread with primary-dominant placement while retaining 128 GiB caches; Estimated authored changed lines: 120; Acceptance evidence: focused scheduling contracts, exact-job timing comparison, hosted validation, live rollout, post-rollout burst observation, and readiness audit

## Initial plan

1. Model the observed 24-runner burst and identify a native Kubernetes scheduling composition that does not equalize unequal tiers.
2. Update regular-runner and container-job placement without changing BuildKit storage or cache locality.
3. Extend focused behavioral and static contracts for primary, secondary, and overflow admission.
4. Validate the exact head remotely, deploy it to k0s, and observe new runner placement under live demand.
5. Complete readiness, squash merge, and Workbench records.

## Completion evidence

- Focused contracts reject hard all-node equalization and prove the accepted tier behavior.
- Hosted exact-head validation passes with no unresolved review findings.
- Live ARC resources retain 128 GiB node-local caches and exhibit primary-dominant placement for newly created runners.
- The corrective pull request is squash-merged and completion records are visible on Workbench main.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
