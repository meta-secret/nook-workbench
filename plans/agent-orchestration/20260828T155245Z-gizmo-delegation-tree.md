---
title: "Render Gizmo delegation hierarchy"
feature: agent-orchestration
started_at: 2026-08-28T15:52:45Z
agent: codex
---

# Task plan

## Interpreted request

Make the start of an ordinary delegated agent run understandable to a person
without weakening its machine interface. The accepted immutable plan should
produce a compact terminal tree that exposes Gizmo, each planned team or agent,
its assigned task, and nested delegation lineage.

## Requirements

- Derive the display only from the decoded and validated delegation plan.
- Render a stable Unicode tree rooted at Gizmo.
- Show agent identities and human-readable task names in declared plan order.
- Preserve actual parent-child lineage through the existing depth bound.
- Keep command stdout strictly JSON for automation and send the human display
  to stderr.
- Cover root-only, sibling-team, and nested-subagent plans with focused tests.

## Constraints and exclusions

- Limit implementation to Loom delegated-agent workflow source and tests.
- Do not change plan schema, admission semantics, scheduling, lifecycle
  authority, dependencies, Cortex policy, product code, or infrastructure.
- Keep each authored source file below 1,000 lines.

## Change budget and PR sequence

- Estimated authored changed lines: 204
- Owning modules, packages, or layers: Loom delegated-agent journal CLI and plan presentation
- Ownership units:
1. Capability: Delegation plan terminal hierarchy; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused renderer and CLI stream tests, complete Loom verification, exact-head review, hosted validation, readiness, and squash merge pass
- Public or cross-module interfaces: Existing loom-agent-delegation start command stdout and stderr contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 204
- Current PR slice and acceptance evidence: Add the plan-tree renderer and start-command presentation; Acceptance evidence: exact tree assertions, stdout JSON separation, Loom formatting, lint, typecheck, full tests, hosted validation, readiness, and squash merge pass
- PR slices and acceptance evidence: Add the plan-tree renderer and start-command presentation; Acceptance evidence: exact tree assertions, stdout JSON separation, Loom formatting, lint, typecheck, full tests, hosted validation, readiness, and squash merge pass

## Initial plan

1. Render the validated delegation lineage as a deterministic Unicode tree.
2. Attach the renderer to the start command without contaminating JSON output.
3. Prove formatting, ordering, nesting, and stream separation with focused tests.
4. Push a focused branch, complete exact-head review and hosted validation,
   squash merge, and publish completion records.

## Completion evidence

- The start command visibly prints Gizmo's planned hierarchy before workers are
  operated.
- Existing automation can continue parsing stdout as one JSON response.
- Complete Loom checks and repository PR readiness pass on the merged scope.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
