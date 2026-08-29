---
title: "Deliver adaptive Gizmo feature orchestration"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/gizmo-prime-pr-slice-controllers.md
started_at: 2026-08-29T06:40:09Z
agent: codex
---

# Deliver adaptive Gizmo feature orchestration

This immutable plan supersedes
`20260829T061808Z-gizmo-prime-pr-slice-orchestration-superseding.md` after the
user clarified that small features must not be fragmented by Team Agent count.

## Interpreted request

Use the existing feature model adaptively: Gizmo Prime creates one named Gizmo
and one pull request by default. Only a measured semantic size split or genuine
delivery independence may create additional Gizmos. Team Agents remain bounded
implementation workers and do not determine pull-request cardinality.

## Requirements

- Define Gizmo Prime as the single mission owner, feature-DAG owner, native-stack
  integrator, readiness authority, and final delivery owner.
- Give each feature one Gizmo by default and each Gizmo exactly one PR slice.
- Permit multiple Team Agents to contribute to one Gizmo-owned slice without
  creating additional pull requests.
- When expected or actual authored additions plus deletions exceed 2,000, split
  at semantic boundaries into the minimum useful number of individually
  estimated Gizmo slices, each at or below 2,000 lines.
- Permit multiple independent PRs below the ceiling only for genuine delivery
  independence, never merely because multiple teams or agents contribute.
- Forbid Gizmo nesting and keep controller and worker process lifecycle under
  the active harness.
- Let Gizmo Prime refine only unstarted downstream contracts through a new
  immutable generation.

### Change budget and PR sequence

- Estimated authored changed lines: 4,850
- Owning modules, packages, or layers: Cortex delivery authority, Workbench plan validation, Loom ordinary delegation, Loom adaptive Gizmo mission and handoff contracts, focused tests, and Task entry points
- Ownership units:
1. Capability: Pull-request budget and adaptive feature policy; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused policy tests, CI-agent tests, Cortex audit, pre-push, and exact-head review pass
2. Capability: Canonical ordinary-delegation contract foundation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Typed decoding and adversarial validation prove closed owners, immutable generations, claims, provider edges, evidence surfaces, capacity, topology, and exact frontiers
3. Capability: Ordinary-delegation runtime activation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Runtime and CLI tests prove deterministic selection, admission authorization, leases, disposition, retry sequencing, and fail-closed lifecycle handoff
4. Capability: Adaptive Gizmo feature orchestration; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Tests prove one-Gizmo default, size-driven semantic splitting, Team Agent aggregation, exact-head handoff, correction generations, and nesting rejection
5. Capability: Integrated delivery; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Every exact-head PR passes review, repository checks, readiness, merge, and Workbench closeout
- Public or cross-module interfaces: Versioned ordinary-delegation transport; adaptive Gizmo Prime mission and Gizmo slice transport; exact-head handoff and downstream correction transport; native GitHub stack lifecycle
- Delivery shape: Multiple PRs
- PR sequence mode: Stacked PRs
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Enforce the 2,000-line ceiling, one-Gizmo default, per-slice estimates, and native GitHub stacked delivery above the ceiling; Acceptance evidence: focused Workbench and CI-agent tests, Cortex audit, pre-push, local review, and exact-head hosted validation pass
- PR slices and acceptance evidence:
1. Estimated authored changed lines: 500; Enforce adaptive feature delivery and the 2,000-line ceiling; Acceptance evidence: focused Workbench and CI-agent tests, Cortex audit, pre-push, review, and exact-head hosted validation pass.
2. Estimated authored changed lines: 1,700; Add the canonical ordinary-delegation domain, codec, deterministic validation, and adversarial contract tests; Acceptance evidence: focused positive and negative tests, complete Loom verification, Cortex audit, and exact-head readiness pass.
3. Estimated authored changed lines: 1,500; Activate ordinary-delegation selection, admission, leases, disposition, retries, CLI, Task entry points, and governing Cortex policy; Acceptance evidence: runtime and CLI tests, complete Loom verification, Cortex audit, and exact-head readiness pass.
4. Estimated authored changed lines: 1,150; Add the adaptive Gizmo Prime mission, one-Gizmo default, size-driven splitting, exact-head handoffs, correction generations, policy, and adversarial tests; Acceptance evidence: focused mission and handoff tests, complete Loom verification, Cortex audit, and exact-head readiness pass.

## Constraints and exclusions

- Do not create one pull request per Team Agent or per engineering team.
- Do not preallocate several Gizmos for a small feature.
- A named Gizmo is not a new engineering team identity and cannot create another
  Gizmo, mutate another slice, or own the mission-level stack.
- No generic scheduler, durable task service, nested daemon, Hive coupling, or
  third-party stacking dependency is introduced.
- Every PR slice stays at or below 2,000 authored additions plus deletions and
  every authored source file stays at or below 1,000 lines.

## Initial plan

1. Correct the stack-base policy so exactly 2,000 lines remains valid, every
   proposed slice has its own estimate, and the adaptive Gizmo cardinality is
   authoritative and test-enforced.
2. Restore the canonical ordinary-delegation contract and runtime in separately
   bounded successor slices.
3. Add adaptive Gizmo mission and handoff validation on that executable base.
4. Validate and deliver each required stack layer bottom-up; do not create a
   successor PR unless its semantic work is actually needed.

## Completion evidence

- A 200-line multi-agent feature validates as one Gizmo and one PR.
- A feature above 2,000 lines validates only with individually estimated,
  semantic Gizmo slices at or below the ceiling.
- Team Agent count cannot change PR count, nested Gizmos are rejected, and
  accepted evidence can refine only unstarted successors.
- Every delivered PR passes focused, complete, hosted, review, readiness, and
  Workbench gates on its exact head.

## Safety review

This record contains only public development contracts. It contains no raw
prompt, chat transcript, secrets, private data, raw logs, local paths, internal
addresses, or unnecessary infrastructure details.
