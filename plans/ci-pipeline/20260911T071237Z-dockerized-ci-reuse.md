---
title: Consolidate container CI execution
feature: ci-pipeline
issue: null
started_at: 2026-09-11T07:12:37Z
agent: codex
gizmo_id: dockerized-ci-reuse
---

# Task plan

## Interpreted request

Reduce CI preparation overhead by sharing useful container build results and making Rust validation consistently enter through Task targets backed by containers. Integrate the improvement into the current PR 1573 branch selected by the user.

## Requirements

- Inspect run 34571876679 and distinguish BuildKit connection delay from build or cache export cost.
- Remove native Rust provisioning and GitHub Cargo cache restoration from affected Actions execution paths.
- Preserve required validation, source identity, secret isolation, and trusted cache publication boundaries.
- Reuse existing container infrastructure and avoid adding alternate execution paths.

## Constraints and exclusions

- Base the change on the latest PR 1573 head as explicitly requested; do not merge PR 1573 into main.
- Preserve daemonless hosted runners and secret-free handling of untrusted contributions.
- No product behavior changes, infrastructure rollout, or unrelated default-branch repairs.
- Run focused automation checks locally and complete product validation on hosted runners.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: dockerized-ci-reuse
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: SRE GitHub workflows and composite actions, Taskfiles, container build definitions, and their focused contracts.
- Ownership units:
1. Capability: Shared container preparation and Dockerized Rust CI; Gizmo ID: dockerized-ci-reuse; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused workflow and Taskfile contracts plus exact-head hosted validation.
- Public or cross-module interfaces: Task target entry points and workflow cache selection inputs.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Dockerized Rust execution and reduced repeated cache preparation; Acceptance evidence: Focused contracts and hosted CI.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: dockerized-ci-reuse; Gizmo name: Consolidate container CI execution; Predecessor Gizmo ID: None; Dockerized Rust execution and reduced repeated cache preparation; Estimated authored changed lines: 900; Acceptance evidence: Focused contracts and hosted CI.

## Initial plan

1. Inspect workflow timing and trace Rust execution and Docker cache consumers.
2. Assign SRE implementation with bounded ownership and focused tests.
3. Independently review workflow behavior and trust boundaries.
4. Publish the coherent branch, validate the exact head, and deliver into the user-selected base.

## Completion evidence

- Changed workflows contain no host Cargo execution or redundant Rust cache restoration.
- Container builds use the required cache inputs and avoid unnecessary duplicate preparation.
- Focused automation tests and exact-head hosted checks pass.
- Implementation PR and final worklog document the result and remaining limitations.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
