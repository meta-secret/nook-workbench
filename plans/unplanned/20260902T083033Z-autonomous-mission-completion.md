---
issue: null
gizmo_id: autonomous-mission-completion
---

# Task plan

## Interpreted request

Make autonomous continuation the explicit default for repository agents. Agents must resolve routine implementation and delivery choices with evidence and continue through the requested terminal state. They may ask the user only when safe progress requires new authority or a material decision that cannot be inferred from the mission.

## Requirements

- State the autonomy rule in the root Cortex contract where every agent receives it.
- Prevent routine uncertainty, implementation breadth, validation failures, or delivery sequencing from becoming reasons to stop and ask the user.
- Preserve fail-closed stops for missing authority, safety constraints, ownership conflicts, and genuinely non-inferable product or architecture decisions.
- Keep Gizmo responsible for end-to-end pull-request delivery, repair, readiness, merge, and Workbench completion.
- Add deterministic regression coverage when the existing Cortex audit architecture supports the rule.

## Constraints and exclusions

- Do not broaden agent permissions or authorize destructive or unrelated work.
- Do not weaken team ownership, security review, no-fallback behavior, or explicit user stop instructions.
- Do not add another workflow engine, scheduled task, compatibility path, or fallback.
- Keep the change within one pull request and below 2,000 authored additions.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: autonomous-mission-completion
- Estimated authored changed lines: 120
- Owning modules, packages, or layers: Root Cortex routing contract and AI-owned Cortex audit policy
- Ownership units:
1. Capability: Autonomous mission continuation policy; Gizmo ID: autonomous-mission-completion; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused policy review, Cortex audit, pre-push hygiene, hosted Loom validation, exact-head readiness, and squash merge
- Public or cross-module interfaces: Repository agent autonomy and terminal-state contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 120
- Current PR slice and acceptance evidence: Clarify and enforce autonomous mission continuation without broadening authority; Acceptance evidence: focused policy tests, Cortex audit, exact-head review and validation, readiness, and merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: autonomous-mission-completion; Gizmo name: Autonomous mission completion; Predecessor Gizmo ID: None; Clarify and enforce autonomous mission continuation without broadening authority; Estimated authored changed lines: 120; Acceptance evidence: focused policy tests, Cortex audit, exact-head review and validation, readiness, and merge

## Initial plan

1. Identify the narrow authoritative Cortex locations and existing audit seams.
2. Add the autonomy rule and focused deterministic coverage where supported.
3. Validate, publish, review, repair, and merge the exact pull-request head.
4. Publish the linked Workbench completion record.

## Completion evidence

- The root Cortex contract explicitly requires autonomous continuation for routine in-scope decisions.
- The rule preserves explicit authority and safety blockers.
- Cortex and exact-head hosted validation pass.
- The pull request is squash-merged and the Workbench worklog is visible on main.

## Safety review

- This record contains only public-safe repository policy and delivery information.
- Credentials, private materials, execution traces, and machine-specific paths are excluded.
