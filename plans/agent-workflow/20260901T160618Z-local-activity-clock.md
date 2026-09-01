---
title: Bind agent activity lines to the host-local clock
feature: agent-workflow
issue: null
started_at: 2026-09-01T16:06:18Z
agent: codex
gizmo_id: local-activity-clock
---

# Bind agent activity lines to the host-local clock

## Interpreted request

Make the time prefix on agent activity lines truthful. Require the acting
agent or active harness to sample the host-local clock instead of inventing a
time from model context or deriving it from UTC.

## Requirements

- Define the host-local clock as the authority for each `HH:mm` prefix.
- Sample the clock immediately before a user-visible activity line is emitted.
- Prohibit inferred, converted, cached, or reused timestamps.
- Keep the existing activity schema and pull-request identity rules unchanged.
- Validate the focused Cortex change and complete exact-head delivery.

## Constraints and exclusions

- Change only the Gizmo Cortex contract and its canonical delegation workflow.
- Do not change product code, runtime scheduling, or persisted event timestamps.
- Do not add a fallback clock source.
- Use one pull request because the change is small and cohesive.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: local-activity-clock
- Estimated authored changed lines: 24
- Owning modules, packages, or layers: Gizmo Prime Cortex contract and canonical delegation workflow
- Ownership units:
1. Capability: Truthful host-local activity timestamps; Gizmo ID: local-activity-clock; Functional owner: Gizmo Prime; Expertise provider: AI; Expertise allowed code paths: .cortex/gizmo/AGENTS.md,.cortex/gizmo/workflows/subagent-delegation.md; Expertise allowed test paths: agentic-ai/loom/tests/activity-format-contract.test.ts; Expertise forbidden paths: .cortex/AGENTS.md,agentic-ai/loom/src/agent-workflow/codex-runtime.ts; Expertise consumer interfaces: User-visible HH:mm activity prefix and active-harness activity-line context; Expertise acceptance evidence: Focused Cortex audit and semantic review pass; Capability acceptance evidence: Cortex audit, pre-push validation, exact-head hosted validation, resolved review threads, and readiness audit
- Public or cross-module interfaces: User-visible `HH:mm` activity prefix and delegated worker communication context
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 24
- Current PR slice and acceptance evidence: Bind user-visible activity time to a fresh host-local clock sample; Acceptance evidence: Cortex audit, pre-push validation, exact-head hosted validation, review resolution, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: local-activity-clock; Gizmo name: Host-local activity clock; Predecessor Gizmo ID: None; Bind user-visible activity time to a fresh host-local clock sample; Estimated authored changed lines: 24; Acceptance evidence: Cortex audit, pre-push validation, exact-head hosted validation, review resolution, and readiness

## Initial plan

1. Add an authoritative clock-source rule to the Gizmo contract.
2. Carry the same clock-source rule in the active-harness communication context.
3. Run focused Cortex and pre-push validation.
4. Create the pull request and obtain exact-head hosted evidence.
5. Pass readiness, squash-merge, and publish completion records.

## Completion evidence

- Gizmo Cortex explicitly requires a fresh host-local clock sample.
- Delegated worker communication receives the same clock-source requirement.
- Cortex and pre-push checks pass on the bounded documentation diff.
- The pull request is review-clean, ready, and squash-merged.
- Workbench completion records are visible on its default branch.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
