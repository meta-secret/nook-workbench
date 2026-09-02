---
title: Disable headless UI demos in GitHub Actions
feature: unplanned
issue: issues/unplanned/disable-headless-ui-demos.md
started_at: 2026-09-02T04:25:35Z
agent: codex
gizmo_id: disable-headless-ui-demos
---

# Disable headless UI demos in GitHub Actions

## Interpreted request

Remove the recurring headless UI-demo runtime cost from pull-request and Main
GitHub Actions while leaving the implementation available for a future
re-enable.

## Requirements

- Statically disable every GitHub Actions job dedicated to recording or publishing UI demos.
- Keep the remaining PR verification and preview aggregation fail closed.
- Retain demo scripts, specifications, task commands, and workflow bodies.
- Deliver through exact-head validation, review, readiness, and squash merge.

## Constraints and exclusions

- Limit Nook changes to the three UI-demo-related workflow files.
- Do not change product behavior, browser regression coverage, security boundaries, or cache credentials.
- Do not delete dormant UI-demo functionality.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: disable-headless-ui-demos
- Estimated authored changed lines: 25
- Owning modules, packages, or layers: GitHub Actions PR, Main, and trusted UI-demo publication workflows
- Ownership units:
1. Capability: Disable UI-demo execution while retaining workflow implementation; Gizmo ID: disable-headless-ui-demos; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: YAML parse, diff hygiene, workflow topology contract, and exact-head PR validation
- Public or cross-module interfaces: GitHub Actions job topology and PR preview dependency results
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 25
- Current PR slice and acceptance evidence: UI-demo recording and publishing jobs are skipped without deleting implementation; Acceptance evidence: YAML parse, workflow topology contract, exact-head PR validation, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: disable-headless-ui-demos; Gizmo name: Disable headless UI demos; Predecessor Gizmo ID: None; UI-demo recording and publishing jobs are skipped without deleting implementation; Estimated authored changed lines: 25; Acceptance evidence: YAML parse, workflow topology contract, exact-head PR validation, and readiness

## Initial plan

1. Inventory every UI-demo execution and publishing job in GitHub Actions.
2. Apply static job guards and preserve non-demo merge-gate behavior.
3. Run focused local workflow validation and pre-push hygiene.
4. Publish one PR, obtain exact-head validation and review, then squash merge.

## Completion evidence

- The three scoped workflow files contain the complete retained-but-disabled implementation.
- Focused syntax and topology checks pass.
- The exact PR head passes repository-owned validation, review, and readiness.
- The pull request is squash-merged and the Workbench issue is closed with a linked worklog.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
