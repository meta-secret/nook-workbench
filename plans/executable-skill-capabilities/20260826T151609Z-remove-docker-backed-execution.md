---
title: Remove Docker-backed cluster execution
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/sealed-source-analyzer.md
started_at: 2026-08-26T15:16:09Z
agent: codex
---

# Remove Docker-backed cluster execution

## Interpreted request

Make the k8s and k0s execution boundary unambiguous and executable. Docker must
never act as a nested runtime inside a cluster Pod. Remove the recently merged
Docker-backed executable-skill runtime slices. Preserve reusable pure source
policy and reachability analysis.

## Requirements

- Close the open Docker-backed runtime PR before it can merge.
- Add the no-Docker-runtime rule to the authoritative Cortex documents.
- Enforce the rule mechanically for cluster workflow and runtime code.
- Run Playwright directly in a purpose-built Pod image.
- Permit an Actions Pod to install Playwright only when image reuse is not
  practical and the cost is understood.
- Preserve BuildKit as an image build service. It must never become a nested
  execution runtime.
- Remove the merged Docker analyzer, its runtime integration, and downstream
  registry authority in dependency-safe order.
- Keep each rollback PR below the 3,015-line hard limit.

## Constraints and exclusions

- Local-machine execution policy remains undecided.
- Local choices cannot weaken the k8s and k0s prohibition.
- Do not roll back pure source policy, finite loader proofs, or runtime
  reachability analysis.
- Do not introduce DinD, Docker sockets, host runtime sockets, privileged Pods,
  or nested daemons.

## Change budget and PR sequence

- Estimated authored changed lines: 8300
- Owning modules, packages, or layers: Cortex execution policy, preflight invariants, Loom executable-skill registry, immutable closure, analyzer integration, and analyzer containment
- Public or cross-module interfaces: executable-skill registry authority, closure plans, source-analysis runtime, and cluster validation rules
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 1900
- Current PR slice and acceptance evidence: Enforce the cluster rule and remove registry authority; Acceptance evidence: Cortex audit, preflight contracts, and focused Loom tests pass.
- PR slices and acceptance evidence:
1. Enforce the cluster rule and remove registry authority; Acceptance evidence: Cortex audit, preflight contracts, and focused Loom tests pass.
2. Remove immutable closure consumers; Acceptance evidence: Loom type checks and focused closure tests pass.
3. Remove analyzer integration and hardening; Acceptance evidence: no downstream analyzer imports remain and focused tests pass.
4. Remove the Docker analyzer implementation and image; Acceptance evidence: no Docker execution remains in the executable-skill surface and hosted preflight passes.

## Initial plan

1. Close the incompatible open runtime PR and freeze the affected stack.
2. Publish the cluster-runtime invariant and its mechanical guard.
3. Revert downstream consumers before their providers.
4. Validate and merge each dependency-safe slice.
5. Update Workbench records with the rejected architecture and replacement
   boundary.

## Completion evidence

- The incompatible open runtime PR is closed.
- Four bounded rollback PRs merge in order.
- Cortex states one consistent cluster execution rule.
- Preflight rejects Docker-backed nested execution in k8s and k0s surfaces.
- Playwright cluster workflows execute directly in their Pod environment.
- No executable-skill production path depends on Docker containment.

## Safety review

This record contains no copied request text, sensitive material, private data,
machine output, local path, or unnecessary infrastructure detail.
