---
title: Replace scheduled agent polling with explicit dispatch
feature: development-workbench
issue: issues/development-workbench/replace-agent-implement-polling.md
started_at: 2026-08-16T19:46:00Z
agent: codex
---

# Task plan

## Interpreted request

Stop repeated empty Agent implement workflow runs while preserving the bounded
agent path for explicitly selected Workbench issues and manual prompts.

## Requirements

- Remove periodic implementation discovery.
- Require an explicit issue path or prompt at dispatch time.
- Preserve atomic issue authorization and claiming before expensive setup.
- Preserve planning, implementation, PR creation, ownership handoff, and
  Workbench result publication.
- Reconcile structural tests and durable workflow documentation.
- Deliver the correction through a normal reviewed and validated Nook PR.

## Constraints and exclusions

- Do not add a Workbench write credential or cross-repository dispatcher.
- Do not weaken `status: ready`, `automation: agent`, owner, or collaborator
  permission checks.
- Do not modify the Cursor SDK implementation harness or PR merge authority.
- Do not run focused remote tasks unless exact-head validation exposes a need.

## Change budget and PR sequence

- Estimated authored changed lines: 350
- Owning modules, packages, or layers: Agent implement GitHub workflow, Workbench preflight contracts, and Cortex workflow documentation
- Public or cross-module interfaces: `workflow_dispatch` inputs and Workbench issue-claim lifecycle
- Delivery shape: One PR
- Current PR estimated authored changed lines: 350
- Current PR slice and acceptance evidence: Replace scheduled discovery with explicit dispatch; Acceptance evidence: structural tests, one manual dispatch contract, exact-head validation, resolved review, and squash merge
- PR slices and acceptance evidence:
  1. Replace scheduled discovery with explicit dispatch; Acceptance evidence: structural tests, one manual dispatch contract, exact-head validation, resolved review, and squash merge

## Initial plan

1. Start from current Nook `origin/main` and claim the focused manual issue.
2. Remove the schedule trigger and reject empty or ambiguous manual dispatches.
3. Replace recursive Workbench discovery with direct requested-path lookup.
4. Preserve atomic claim, owner authorization, and all downstream agent steps.
5. Update `preflight/tests/workbench.rs` and every Cortex reference to scheduled
   Agent implement scanning.
6. Run pre-push hygiene, push one focused PR, and trigger complete validation.
7. Address feedback immediately, rerun exact-head validation after fixes, and
   squash-merge when readiness passes.
8. Complete the Workbench issue, worklog, and PR statistics.

## Completion evidence

- No scheduled Agent implement Actions runs can be created.
- Explicit eligible issues and prompts retain their authorization behavior.
- Recursive Workbench issue discovery is absent from the workflow.
- Tests and Cortex documentation agree with the explicit-dispatch boundary.
- The final PR is merged with successful exact-head evidence and no unresolved
  review threads.

## Safety review

The plan contains only public engineering scope and durable acceptance
criteria. Sensitive operational material and private user content are absent.
