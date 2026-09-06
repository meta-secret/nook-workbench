---
title: Expand BuildKit cache capacity and balance ARC placement
feature: hive-isolated-agent-platform
issue: null
started_at: 2026-09-06T20:52:02Z
agent: codex
gizmo_id: buildkit-cache-capacity-placement
---

# Expand BuildKit cache capacity and balance ARC placement

## Interpreted request

Increase retained BuildKit cache capacity for maximum repeated-build performance and prevent concurrent GitHub Actions workloads from concentrating on one build host. Preserve node-local cache access, favor the primary compute nodes, place a smaller share on the lower-tier VM, and keep the control host as overflow capacity.

## Requirements

- Increase each persistent node-local BuildKit cache to 128 GiB and align garbage-collection capacity with that storage envelope.
- Continue routing every runner to the BuildKit shard on the same Kubernetes node.
- Distribute concurrent general ARC runners across the two primary nodes before using lower-tier capacity.
- Give the secondary VM less load than the primary pair and retain the control host as last-resort overflow.
- Add focused static contracts for storage capacity, locality, and placement behavior.
- Deliver one exact-head pull request through review, hosted validation, readiness, squash merge, and Workbench completion.

## Constraints and exclusions

- Do not introduce a cross-node BuildKit proxy, shared writable cache filesystem, Docker-in-Docker, Podman, privileged runners, host runtime sockets, or speculative fallback behavior.
- Preserve one rootless persistent BuildKit shard per qualified node and the existing Zot portability boundary.
- Do not change product, browser, cryptographic, vault, or application behavior.
- Do not run product compilation or full repository validation locally.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: buildkit-cache-capacity-placement
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: ARC BuildKit manifest, ARC runner scheduling values, Kubernetes cache simulation overlay, SRE operational contracts and focused static tests
- Ownership units:
1. Capability: Node-local BuildKit capacity and weighted ARC placement; Gizmo ID: buildkit-cache-capacity-placement; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused manifest and scheduler contracts prove 128 GiB cache envelopes, same-node BuildKit routing, primary-node distribution, reduced secondary load, and overflow isolation
- Public or cross-module interfaces: ARC runner scheduling contract and node-local BuildKit Service and storage configuration
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Expand node-local BuildKit caches and implement capacity-aware ARC placement; Acceptance evidence: focused static contracts, diff hygiene, hosted infrastructure validation, live cluster convergence, exact-head review, and readiness audit
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: buildkit-cache-capacity-placement; Gizmo name: BuildKit cache capacity and ARC placement; Predecessor Gizmo ID: None; Expand node-local BuildKit caches and implement capacity-aware ARC placement; Estimated authored changed lines: 180; Acceptance evidence: focused static contracts, diff hygiene, hosted infrastructure validation, live cluster convergence, exact-head review, and readiness audit

## Initial plan

1. Confirm current node tiers, BuildKit cache configuration, scheduler behavior, and live capacity.
2. Expand the persistent cache contract and adjust garbage collection to use the larger envelope.
3. Tighten scheduling so primary nodes share concurrent work while secondary and overflow nodes receive progressively less.
4. Extend focused manifest and simulation contracts without weakening node-local routing.
5. Publish the exact branch, validate and deploy the reviewed infrastructure change, verify live convergence, and complete pull-request and Workbench lifecycle records.

## Completion evidence

- Focused infrastructure contracts pass and the authored diff stays within the declared SRE scope.
- Hosted validation passes on the exact pull-request head with no unresolved review findings.
- Every live BuildKit shard is ready with the expanded cache contract and runners retain same-node routing.
- The pull request is squash-merged and the linked Workbench completion records are visible on the default branch.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
