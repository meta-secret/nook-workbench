---
title: "Trusted stacked PR workflow integration"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: gizmo-stacked-pr-workflow
stack_branch: codex/pr-size-stacked-workflow
stack_predecessor_branch: codex/pr-size-stacked-runtime
created_at: 2026-08-29T12:50:15Z
updated_at: 2026-08-29T12:50:15Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1201"]
depends_on: [issues/gizmo-multi-team-delivery/trusted-stacked-pr-runtime.md]
---

# Trusted stacked PR workflow integration

## Context

Exact-head review of the stacked runtime found that trusted workflow checkout,
direct-host formatting, source-task transport, and standalone rerun handling
formed a separate semantic layer. Adding that layer to PR 1199 would have taken
the runtime slice beyond 2,000 authored changed lines. This passive third Gizmo
record therefore owns PR 1201 in GitHub stack 1200; Team Agent count did not
cause the split.

## Outcome

The agent implementation workflow runs strict editing against an isolated
implementation worktree without repository credentials, network access, Task,
or a container runtime, then uses workflow-SHA tooling to format and publish the
validated result while preserving standalone and stacked lifecycle semantics.

## Scope

- Pin trusted checkout and executable prompts to the workflow SHA while keeping
  the implementation source in a separate detached worktree.
- Install only the pinned direct-host Node, Bun/Prettier, and rustfmt tooling;
  do not invoke Docker, Podman, nested runtimes, Task setup, or registry access.
- Hash-bind the validated plan before strict editing and bind every CI-agent
  Node boundary to the exact trusted tooling root.
- Apply trusted formatting after strict editing and before credentialed
  delivery, with the isolated worktree as data rather than executable tooling.
- Use a random collision-checked environment-file delimiter so source task text
  cannot inject trusted workflow variables.
- Detect real authored changes while excluding forced-staged or unignored plan
  and worklog artifacts; skip formatter and delivery on a standalone no-op while
  still publishing the Workbench result.
- Preserve open or merged standalone reruns as terminal no-ops and fail closed
  for closed-unmerged or orphan branches.
- Exercise workflow ordering, forbidden-runtime, environment-hardening, and
  change-detection contracts in focused preflight tests.
- Exclude adaptive plan policy from PR 1198 and CI-agent target/delivery runtime
  behavior from PR 1199.

## Acceptance criteria

- [x] The strict editor receives no PAT, registry credential, or ambient control
  variable and runs with network denied in the isolated source worktree.
- [x] Workflow-SHA tooling performs planning, formatting, and delivery; every
  CI-agent Node boundary binds the trusted tooling root explicitly.
- [x] No Docker, Podman, nested runtime, Task setup, or registry login is active
  on the ARC implementation path.
- [x] Random collision-checked environment transport rejects delimiter-shaped
  task injection, and tests retain the adversarial payload contract.
- [x] Standalone no-change results exclude plan/worklog artifacts, skip format
  and delivery, and continue to Workbench publication.
- [x] Open and merged reruns are idempotent; closed-unmerged and orphan states
  fail closed; stacked delivery retains exact frozen head/base validation.
- [x] The exact PR 1201 diff is 1,112 authored additions plus deletions and all
  authored source files remain within the 1,000-line file ceiling.
- [ ] Hosted validation, exact-head readiness, and squash merge pass for PR 1201.

## Progress

- PR 1201 is bounded at 1,112 authored changed lines on exact head `e6fbd837` and
  is based on the PR 1199 runtime branch in GitHub stack 1200.
- Focused CI-agent, Workbench, source-size, formatting, and Cortex validation
  pass at the recorded head; merge-lifecycle evidence remains pending.

## Findings and decisions

- The third slice is required by the 2,000-line ceiling after review identified
  a distinct trusted-workflow boundary; it is unrelated to Team Agent count.
- The implementation source is data. Only workflow-SHA scripts, prompts, and
  dependencies may execute in trusted planning, formatting, or delivery steps.
- Strict editing and credentialed delivery remain separate processes; the
  runtime's monolithic `implement` command remains compatible for PR 1199.
- Gizmo Prime alone owns stack integration, retargeting, readiness, merge, and
  feature completion.

## References

- [Feature index](README.md)
- [Runtime predecessor](trusted-stacked-pr-runtime.md)
- [Final three-slice stack plan](../../plans/gizmo-multi-team-delivery/20260829T125015Z-final-three-pr-stack-superseding.md)
- [Nook PR 1201](https://github.com/meta-secret/nook/pull/1201)
