---
title: Disable headless UI demos with structural CI contracts
feature: unplanned
issue: issues/unplanned/disable-headless-ui-demos.md
started_at: 2026-09-02T04:51:12Z
agent: codex
gizmo_id: disable-headless-ui-demos
---

# Disable headless UI demos with structural CI contracts

## Interpreted request

Remove recurring headless UI-demo execution from GitHub Actions while keeping
the dormant implementation easy to restore. Preserve every independent
verification and lifecycle boundary.

## Requirements

- Statically disable PR and Main headless UI-demo execution.
- Disable new demo-artifact publication while retaining close cleanup for previously published issues.
- Keep PR readiness structurally independent of the disabled job.
- Preserve the complete dormant implementation and its trust predicates.
- Align executable preflight and authoritative CI guidance with the selected behavior.
- Deliver through exact-head validation, review, readiness, and squash merge.

## Constraints and exclusions

- Do not delete demo scripts, specifications, task commands, or workflow bodies.
- Do not convert a skipped job into a successful result.
- Do not weaken Rust, WASM, Node, web, preview, browser-regression, credential, or exact-head boundaries.
- Exclude product behavior and demo content changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: disable-headless-ui-demos
- Estimated authored changed lines: 100
- Owning modules, packages, or layers: GitHub Actions workflows, operational preflight contracts, and authoritative CI delivery guidance
- Ownership units:
1. Capability: Disable UI-demo execution with structural readiness and retained lifecycle cleanup; Gizmo ID: disable-headless-ui-demos; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: YAML parse, workflow topology contract, focused preflight test, and exact-head PR validation
2. Capability: Align durable CI authorities with the dormant workflow behavior; Gizmo ID: disable-headless-ui-demos; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: CI guidance matches the disabled recording and publication lanes while preserving demo contracts and cleanup
- Public or cross-module interfaces: GitHub Actions job topology, PR preview dependency results, and operational CI guidance
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 100
- Current PR slice and acceptance evidence: UI-demo execution and new artifact publication are skipped without deleting implementation or masking job results; Acceptance evidence: YAML parse, focused preflight contract, Cortex audit, exact-head PR validation, review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: disable-headless-ui-demos; Gizmo name: Disable headless UI demos; Predecessor Gizmo ID: None; UI-demo execution and new artifact publication are skipped without deleting implementation or masking job results; Estimated authored changed lines: 100; Acceptance evidence: YAML parse, focused preflight contract, Cortex audit, exact-head PR validation, review, and readiness

## Initial plan

1. Retain the complete PR and Main demo jobs behind static false guards.
2. Remove the disabled PR job from readiness aggregation and update its executable topology contract.
3. Disable new trusted publication while keeping existing-issue close cleanup active.
4. Update only the CI authorities that describe these lanes and validate Cortex consistency.
5. Publish the corrected head, settle review, pass readiness, and squash merge.

## Completion evidence

- The retained demo commands exist only beneath disabled jobs.
- PR readiness has no disabled-demo result substitution.
- Focused workflow, preflight, and Cortex checks pass.
- Exact-head hosted validation reports the demo job skipped without runner time.
- The PR is review-clean, ready, and squash-merged with a linked Workbench closeout.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
