---
title: Standardize agent activity and real delegation
feature: agent-workflow
issue: null
started_at: 2026-09-01T04:13:54Z
agent: codex
gizmo_id: activity-log-team-agent
---

# Standardize agent activity and real delegation

## Interpreted request

Make every user-visible activity stream begin with stable unformatted YAML
context for the pull request and actual Nook executor. Follow it with concise
timestamped action lines that expose commands, exact wait targets, elapsed
time, and current state. Require Gizmo Prime to delegate worker-executable work
to real Team Agents through the active harness and stop without taking over
when the canonical worker process cannot produce accepted completion.

## Requirements

- Add stable pull-request, team, and agent context to the activity schema.
- Keep context as unformatted YAML and activity descriptions as plain text.
- Re-emit context only when an identity value changes.
- Apply the format to Gizmo Prime, real Team Agents, subagents, and skill-driven
  activity.
- Preserve action types, abbreviated long commands, elapsed waits, failures,
  and current-state reporting.
- Require every wait line to identify the exact Task command or linked GitHub
  run or job.
- Delegate every worker-executable task to a real active-harness Team Agent.
- Prohibit external Codex tasks, threads, cloud tasks, and external agents as
  delegation or handoff transport.
- Stop on worker creation, dispatch, or startup failure and after exhausted
  canonical retries without accepted completion.
- Carry current pull-request identity in delegated worker contracts and refresh
  it before post-transition activity.
- Validate the Cortex contract and the exact pull-request head.
- Resolve actionable findings, prove readiness, and squash-merge the change.

## Constraints and exclusions

- Change only the root Cortex contract and canonical subagent-delegation
  workflow.
- Do not change product behavior, runtime automation, or trust boundaries.
- Do not claim a team or authority that the acting agent does not hold.
- Do not add runtime enforcement for pull-request context propagation.
- Use one pull request because the complete change is small and cohesive.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: activity-log-team-agent
- Estimated authored changed lines: 140
- Owning modules, packages, or layers: Root Cortex agent contract and canonical Gizmo subagent-delegation workflow
- Ownership units:
1. Capability: Agent activity and real Team Agent delegation contract; Gizmo ID: activity-log-team-agent; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex audit, pre-push validation, exact-head hosted validation, resolved review threads, and readiness audit
- Public or cross-module interfaces: User-visible agent activity schema and delegated worker task contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 140
- Current PR slice and acceptance evidence: Canonical activity streams identify real executors and Gizmo delegates worker work through the active harness; Acceptance evidence: Cortex audit, exact-head hosted validation, review resolution, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: activity-log-team-agent; Gizmo name: Agent activity and delegation; Predecessor Gizmo ID: None; Canonical activity streams identify real executors and Gizmo delegates worker work through the active harness; Estimated authored changed lines: 140; Acceptance evidence: Cortex audit, exact-head hosted validation, review resolution, and readiness

## Initial plan

1. Stabilize the root activity-stream and real-Team-Agent rules.
2. Align the canonical delegated worker contract and pull-request context.
3. Run Cortex and pre-push validation on the bounded documentation diff.
4. Complete circuit-breaker review stabilization and hosted validation.
5. Pass readiness, squash-merge, and publish completion records.

## Completion evidence

- The root contract contains the grouped YAML activity schema and identity
  rules.
- Worker-executable work is delegated through the active harness and fails
  closed without Gizmo takeover.
- Delegated workers receive current pull-request activity context.
- Cortex and pre-push checks pass without unrelated mutations.
- The pull request is review-clean, ready, and squash-merged.
- Workbench completion records are visible on its default branch.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
