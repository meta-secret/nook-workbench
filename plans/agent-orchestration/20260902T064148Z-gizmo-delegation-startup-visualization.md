---
title: Gizmo delegation startup visualization contract
feature: agent-orchestration
issue: null
started_at: 2026-09-02T06:41:48Z
agent: codex
gizmo_id: gizmo-delegation-startup-visualization
---

# Task plan

## Interpreted request

Make the existing Loom delegation hierarchy reliably visible when Gizmo begins delegated work. Bind Gizmo's documented startup procedure to the validated immutable plan and its deterministic renderer.

## Requirements

- Gizmo must build the complete currently known delegation plan before dispatching a Team Agent.
- Gizmo must start that plan through the existing Loom delegated-agent boundary.
- Gizmo must publish the generated hierarchy as one compact user-visible plan visualization.
- The displayed hierarchy must come from the decoded and validated plan.
- A failed plan start or visualization must block worker dispatch.

## Constraints and exclusions

- Change only the Gizmo Team Agent delegation workflow in Cortex.
- Do not change Loom runtime behavior or delegation semantics.
- Do not embed a static example hierarchy in Cortex.
- Do not add fallback behavior.
- Later dependencies that were not knowable at startup remain governed by the existing dependency-routing procedure.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-delegation-startup-visualization
- Estimated authored changed lines: 24
- Owning modules, packages, or layers: Gizmo Team Agent delegation workflow
- Ownership units:
1. Capability: Delegation startup visualization contract; Gizmo ID: gizmo-delegation-startup-visualization; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex audit passes and semantic review confirms the workflow requires validated-plan visualization before worker dispatch
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 24
- Current PR slice and acceptance evidence: Bind startup to validated-plan rendering; Acceptance evidence: Cortex audit and exact-head review pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-delegation-startup-visualization; Gizmo name: Gizmo delegation startup visualization; Predecessor Gizmo ID: None; Bind startup to validated-plan rendering; Estimated authored changed lines: 24; Acceptance evidence: Cortex audit and exact-head review pass

## Initial plan

1. Verify the current Gizmo workflow against the existing Loom CLI and renderer.
2. Add concise startup and failure rules to the owning delegation procedure.
3. Run focused Cortex validation and self-review the semantic contract.
4. Deliver the one-PR change through exact-head validation, readiness, merge, and Workbench closeout.

## Completion evidence

- The Cortex diff explicitly requires the validated plan hierarchy before worker dispatch.
- Focused Cortex checks and repository exact-head validation pass.
- The successor pull request is squash-merged.
- Workbench completion records link the delivered pull request.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
