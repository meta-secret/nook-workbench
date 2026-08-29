---
title: "Deliver named Micro-Gizmo PR orchestration"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/micro-gizmo-pr-controllers.md
started_at: 2026-08-29T06:12:27Z
agent: codex
---

# Deliver named Micro-Gizmo PR orchestration

## Interpreted request

Extend Gizmo into a hierarchical delivery system where one main controller
assigns semantic pull-request slices to distinct named Micro-Gizmos, accepts
their verified results, and improves later slice contracts using accepted
evidence without weakening immutable in-flight work.

## Requirements

- Keep the main Gizmo as the only owner of the complete feature graph, GitHub
  stack, cross-slice integration, readiness, merge order, and completion.
- Give each Micro-Gizmo one stable name, one bounded PR slice, one worker-task
  graph, and one exact-head typed result.
- Let Micro-Gizmos request harness-managed team workers only inside their slice.
- Forbid Micro-Gizmo nesting, cross-slice writes, direct lifecycle creation,
  and mutation of active contracts.
- Restore the complete executable ordinary-delegation admission contract before
  enabling controller dispatch.
- Propagate accepted interface corrections only to unstarted downstream slices
  through a new immutable generation.

## Constraints and exclusions

- Micro-Gizmo is not a new engineering team identity and does not implement
  product work itself.
- The active harness remains the only worker and controller process-lifecycle authority.
- No generic scheduler, durable task service, nested daemon, Hive coupling, or
  third-party stacking dependency is introduced.
- Every PR slice stays at or below 2,000 authored additions plus deletions and
  every authored source file stays at or below 1,000 lines.

## Change budget and PR sequence

- Estimated authored changed lines: 4,850
- Owning modules, packages, or layers: Cortex delegation authority, Loom ordinary-delegation domain and validation, Loom admission runtime, Loom Micro-Gizmo mission and handoff domain, focused tests, and Task entry points
- Ownership units:
1. Capability: Pull-request budget and native stack prerequisite; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing focused policy tests, CI-agent tests, Cortex audit, pre-push, and exact-head PR validation pass
2. Capability: Canonical ordinary-delegation contract foundation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Typed decoding and adversarial validation prove closed owners, immutable generations, claims, provider edges, evidence surfaces, capacity, topology, and exact frontiers
3. Capability: Ordinary-delegation runtime activation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Runtime and CLI tests prove deterministic selection, admission authorization, leases, disposition, retry sequencing, and fail-closed lifecycle handoff
4. Capability: Named Micro-Gizmo PR controllers; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Adversarial mission, handoff, correction, nesting, stale-head, and cross-slice tests plus complete Loom verification pass
5. Capability: Integrated stacked delivery; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Every exact-head PR passes review, repository checks, readiness, bottom-up squash merge, and Workbench closeout
- Public or cross-module interfaces: Versioned ordinary-delegation plan and admission transport; versioned Micro-Gizmo mission, slice, exact-head handoff, and downstream correction transport; native GitHub stack lifecycle
- Delivery shape: Multiple PRs
- PR sequence mode: Stacked PRs
- Current PR estimated authored changed lines: 246
- Current PR slice and acceptance evidence: Enforce the 2,000-line ceiling and native GitHub stacked delivery; Acceptance evidence: focused Workbench and CI-agent tests, Cortex audit, pre-push, review, and exact-head hosted validation pass
- PR slices and acceptance evidence:
1. Enforce the 2,000-line ceiling and native GitHub stacked delivery; Acceptance evidence: focused Workbench and CI-agent tests, Cortex audit, pre-push, review, and exact-head hosted validation pass.
2. Add the canonical ordinary-delegation domain, codec, deterministic validation, and adversarial contract tests; Acceptance evidence: focused positive and negative tests, source-size checks, complete Loom verification, Cortex audit, and exact-head readiness pass.
3. Activate ordinary-delegation selection, admission, leases, disposition, retries, CLI, Task entry points, and governing Cortex policy; Acceptance evidence: runtime and CLI tests, complete Loom verification, Cortex audit, and exact-head readiness pass.
4. Add named one-PR Micro-Gizmo controllers, exact-head handoffs, downstream correction generations, CLI, policy, and adversarial tests; Acceptance evidence: focused mission and handoff tests, complete Loom verification, Cortex audit, and exact-head readiness pass.

## Initial plan

1. Publish this superseding hierarchy and preserve the existing validated
   PR-size policy as the bottom native stack layer.
2. Recover only the reviewed concepts from the preserved ordinary-delegation
   branch, rebase them onto the exact current predecessor, and split contract
   validation from runtime activation.
3. Build the Micro-Gizmo domain on the merged ordinary-delegation interface,
   with one-level controller authority and immutable correction generations.
4. Validate and squash-merge every layer bottom-up, updating successor bases,
   exact heads, Workbench records, and downstream contracts after each merge.

## Completion evidence

- Cortex and Loom agree on executable ordinary delegation and Micro-Gizmo authority.
- A validated example mission assigns multiple named Micro-Gizmos one PR each,
  rejects nesting and stale handoffs, and safely refines an unstarted successor.
- Each stack layer remains below 2,000 authored changed lines and passes its
  focused, complete, hosted, review, and readiness gates.
- The complete feature closes only after every required slice is merged and the
  final Workbench outcome is published.

## Safety review

This record contains only public development contracts. It contains no raw
prompt, chat transcript, secrets, private data, raw logs, local paths, internal
addresses, or unnecessary infrastructure details.
