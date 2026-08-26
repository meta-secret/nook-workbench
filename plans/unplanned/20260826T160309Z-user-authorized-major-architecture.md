---
title: Require user initiative for major architectural changes
feature: unplanned
issue: issues/unplanned/user-authorized-major-architectural-changes.md
started_at: 2026-08-26T16:03:09Z
agent: codex
---

# Require user initiative for major architectural changes

## Interpreted request

Remove the dormant executable-skill registry through its already active
rollback owner. Add a durable agent protocol that prevents an agent from
turning its own novel, large, or architecturally difficult idea into an
implementation initiative without explicit user selection and authorization.

## Requirements

- Preserve PR #1142 as the owner of registry deletion.
- Define recognizable signals for a major architectural initiative.
- Permit investigation, risk analysis, and bounded proposals without granting
  implementation authority.
- Require explicit user discussion and an explicit request to implement the
  selected major solution.
- Preserve agent autonomy for bounded decisions inside an already authorized
  implementation.
- Keep the rule in existing canonical Cortex authorities.

## Constraints and exclusions

- Do not modify, push, review, validate, or merge the foreign rollback stack.
- Do not duplicate registry deletion in another branch.
- Do not make semantic architectural judgment appear mechanically decidable.
- Do not require user approval for ordinary implementation details, repairs,
  or refactors that retain the accepted architecture.

## Change budget and PR sequence

- Estimated authored changed lines: 90
- Owning modules, packages, or layers: Cortex agent protocol and coding workflow
- Public or cross-module interfaces: Agent implementation-authorization boundary
- Delivery shape: One PR
- Current PR estimated authored changed lines: 90
- Current PR slice and acceptance evidence: Add the user-initiative rule to existing authorities; Acceptance evidence: Cortex audit, Loom pre-push, exact-head review, and repository validation pass.
- PR slices and acceptance evidence:
1. Add the user-initiative rule to existing authorities; Acceptance evidence: Cortex audit, Loom pre-push, exact-head review, and repository validation pass.

## Initial plan

1. Publish the focused Workbench issue and immutable task plan.
2. Branch from current `origin/main` without touching the rollback branches.
3. Update the self-improvement authority and coding workflow.
4. Synchronize the knowledge graph and verify one-hop Cortex consistency.
5. Validate, review, and deliver the owned policy PR.
6. Confirm the foreign rollback still owns registry removal.

## Completion evidence

- PR #1142 remains the visible registry-deletion owner.
- The canonical self-improvement protocol contains the new authorization rule.
- The default coding workflow applies it before implementation planning.
- The knowledge graph resolves every changed heading.
- Exact-head checks and readiness pass for the policy PR.

## Safety review

This record contains no copied request, conversation history, sensitive
material, private data, machine output, machine-local path, or unnecessary
infrastructure detail.
