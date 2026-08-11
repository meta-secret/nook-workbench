---
title: Enforce agent feature ownership boundaries
status: active
created_at: 2026-08-11T06:51:04Z
updated_at: 2026-08-11T06:51:04Z
agent: codex
---

# Enforce agent feature ownership boundaries

## Interpreted request

Make task ownership a durable Nook agent rule. Prevent an agent from changing,
reviewing, pushing, resolving, closing, or merging work owned by another active
agent.

## Requirements

- Limit each agent to its claimed feature and focused issue set.
- Treat branches and pull requests from another active task as foreign work.
- Require an explicit handoff before ownership can move between agents.
- Permit read-only inspection when needed to avoid conflicts.
- Capture the rule as an invocable dynamic skill.

## Constraints and exclusions

- Do not change product code.
- Do not modify another active agent's branch or pull request.
- Do not prevent a task owner from completing all issues in its own feature.
- Do not prevent explicitly requested cross-feature coordination.

## Change budget and PR sequence

- Estimated authored changed lines: 260
- Owning modules, packages, or layers: Agent workflow and dynamic-skill guidance
- Public or cross-module interfaces: Agent ownership workflow contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 260
- Current PR slice and acceptance evidence: Ownership rule and executable skill; Acceptance evidence: Cortex audit and focused contract checks pass
- PR slices and acceptance evidence: Ownership rule and executable skill; Acceptance evidence: Cortex audit and focused contract checks pass

## Initial plan

1. Inspect the active ownership guidance and related workflow docs.
2. Add a focused dynamic skill for feature ownership.
3. Link the rule from the agent entry point and implementation workflow.
4. Add a mechanical contract that prevents accidental removal.
5. Validate, publish a dedicated PR, and merge it after exact-head readiness.

## Completion evidence

- The ownership rule is indexed and directly invocable.
- The agent entry point and implementation workflow agree with the skill.
- Preflight or an equivalent focused contract protects the rule.
- Exact-head repository checks pass with zero unresolved conversations.

## Safety review

- The change contains only public development workflow guidance.
- It records no prompts, credentials, runtime data, or private repository state.
