---
title: Remote-first agent validation
feature: pr-delivery-efficiency
issue: null
started_at: 2026-08-29T16:56:29Z
agent: codex
gizmo_id: remote-first-agent-validation
---

# Task plan

## Interpreted request

Make remote execution the unambiguous default for agent implementation feedback: publish each coherent implementation or correction promptly, then use the repository's focused remote-task or complete exact-head GitHub Actions path instead of consuming the agent host with builds, tests, browser suites, or duplicate validation.

## Requirements

- Establish one authoritative remote-first invariant across the Cortex agent and delivery entry points.
- Retain only the minimal local pre-push hygiene required to produce a valid pushed head.
- Require a prompt commit and push when implementation or a correction is coherent.
- Require an immediate remote follow-up: focused remote execution for targeted iteration or explicit complete PR validation for a validation-ready head.
- Prohibit broad local builds, tests, browser suites, containerized product checks, and local mirrors of repository validation unless an explicit diagnostic exception applies.
- Keep exact-head replacement semantics: every correction push invalidates prior head-specific evidence and must receive new remote evidence.

## Constraints and exclusions

- This is a bounded policy clarification inside the existing GitHub Actions and remote-task architecture, not a new execution platform.
- Do not change runner, workflow, cluster, product, or security behavior.
- Do not weaken formatting, UI-demo contract, exact-head review, readiness, or merge requirements.
- Preserve untracked and unrelated work.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: remote-first-agent-validation
- Estimated authored changed lines: 240
- Owning modules, packages, or layers: Cortex agent routing and pull-request delivery policy
- Ownership units:
1. Capability: Remote-first agent implementation and validation contract; Gizmo ID: remote-first-agent-validation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex policy consistently requires prompt publication and remote execution while limiting local work to pre-push hygiene, and the Cortex audit passes
- Public or cross-module interfaces: Agent delivery behavior for local hygiene, pushed branch heads, focused remote tasks, and explicit exact-head PR validation
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 240
- Current PR slice and acceptance evidence: Clarify and align the Cortex remote-first delivery contract; Acceptance evidence: targeted policy inventory, Cortex audit, minimal pre-push hygiene, pushed exact-head review, GitHub Actions validation, and readiness pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: remote-first-agent-validation; Gizmo name: Remote-first agent validation; Predecessor Gizmo ID: None; Clarify and align the Cortex remote-first delivery contract; Estimated authored changed lines: 240; Acceptance evidence: targeted policy inventory, Cortex audit, minimal pre-push hygiene, pushed exact-head review, GitHub Actions validation, and readiness pass

## Initial plan

1. Audit the owning Cortex entry points and delivery skills for local-first or ambiguous validation language.
2. Update the smallest authoritative set so coherent changes are pushed promptly and all substantive feedback runs remotely by default.
3. Validate documentation consistency, publish the branch, and complete exact-head review and GitHub Actions readiness.

## Completion evidence

- The root and AI/delivery authorities agree on the same remote-first sequence and exceptions.
- No changed guidance requires broad local product validation.
- Cortex audit and minimal pre-push hygiene pass.
- The pull request has successful exact-head hosted validation and satisfies readiness.

## Safety review

This plan contains no raw prompt or transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
