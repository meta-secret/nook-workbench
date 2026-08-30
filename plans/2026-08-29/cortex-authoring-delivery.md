---
issue: null
gizmo_id: cortex-authoring-delivery
---

# Task plan

## Interpreted request

Make team skill composition deterministic and make complete pull-request delivery the fail-closed terminal state for implementation missions.

## Requirements

- Preserve one team identity while composing generic and domain-specific skills.
- Automatically attach the canonical Cortex authoring bundle to Cortex writes.
- Prevent a local worker commit from being presented as mission completion.
- Carry the integrated change through review, exact-head readiness, merge, and Workbench completion.

## Constraints and exclusions

- Do not duplicate the canonical Cortex Writer in team-local wrappers.
- Do not treat skill ownership as a second team identity.
- Do not weaken team ownership or Gizmo delivery boundaries.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: cortex-authoring-delivery
- Estimated authored changed lines: 380
- Owning modules, packages, or layers: Cortex routing and Loom team-task context
- Ownership units:
1. Capability: Dynamic team skill composition; Gizmo ID: cortex-authoring-delivery; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Loom context tests, Cortex audit, and Loom verification pass
2. Capability: Integrated pull request delivery; Gizmo ID: cortex-authoring-delivery; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head readiness succeeds and the pull request merges
- Public or cross-module interfaces: Team task context resolution and implementation mission completion contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 380
- Current PR slice and acceptance evidence: Deterministic authoring context and terminal delivery enforcement; Acceptance evidence: Loom verification and exact-head readiness pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: cortex-authoring-delivery; Gizmo name: Cortex authoring delivery; Predecessor Gizmo ID: None; Deterministic authoring context and terminal delivery enforcement; Estimated authored changed lines: 380; Acceptance evidence: Loom verification and exact-head readiness pass

## Initial plan

1. Add deterministic generic-skill composition from task resource claims.
2. Strengthen the root and Gizmo completion contracts.
3. Add focused adversarial audit coverage.
4. Publish, monitor, repair, validate, and merge the exact pull-request head.

## Completion evidence

- Cortex and Loom validation pass.
- The PR has no unresolved blocking feedback.
- Repository readiness passes for the exact head.
- The PR is squash-merged.
- Workbench completion state is published.

## Safety review

- The plan contains only public-safe repository architecture and delivery information.
- No credentials, private prompts, or runtime tokens are included.
