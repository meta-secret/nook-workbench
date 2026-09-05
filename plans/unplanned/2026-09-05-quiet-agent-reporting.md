---
title: Quiet agent reporting
feature: unplanned
issue: null
started_at: 2026-09-05T00:00:00Z
agent: codex
gizmo_id: quiet-agent-reporting
---

# Task plan

## Interpreted request

Make routine execution quiet while keeping consequential changes visible to the user.

## Requirements

- Replace repetitive command and wait narration with actionable notifications.
- Preserve completion evidence and reported blocker resolutions.
- Keep internal handoffs concise without losing required evidence.

## Constraints and exclusions

- Edit only the existing Cortex communication contract.
- Preserve instruction hierarchy and required validation.
- Add no runtime, skill, or token-savings claim.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: quiet-agent-reporting
- Estimated authored changed lines: 90
- Owning modules, packages, or layers: Cortex communication policy
- Ownership units:
1. Capability: Quiet agent reporting; Gizmo ID: quiet-agent-reporting; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Scoped semantic review and unchanged-state reporting conflict search.
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 90
- Current PR slice and acceptance evidence: Quiet agent reporting; Acceptance evidence: Scoped semantic review and unchanged-state reporting conflict search.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: quiet-agent-reporting; Gizmo name: Quiet agent reporting; Predecessor Gizmo ID: None; Quiet agent reporting; Estimated authored changed lines: 90; Acceptance evidence: Scoped semantic review and unchanged-state reporting conflict search.

## Initial plan

1. Assign the communication section to the AI team.
2. Review policy semantics and adjacent references.
3. Publish one PR and complete applicable readiness and merge.

## Completion evidence

- The policy suppresses routine unchanged updates while preserving essential notifications.
- The final diff contains only authorized instruction changes.
- The PR passes applicable readiness requirements.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
