---
title: Restore E2E collection
feature: unplanned
issue: issues/hive-isolated-agent-platform/main-failure-7a46fd3883520a4d58eef0b7dac0b6ba7c7f69ec.md
started_at: 2026-09-04T20:41:00Z
agent: codex
gizmo_id: restore-e2e-collection
---

# Task plan

## Interpreted request

Restore browser and extension test execution so authentication changes receive real browser validation. Existing Main evidence shows collection aborting before tests execute. No fix PR exists and Hive execution is stopped.

## Requirements

- Supersedes the initial plan after browser execution exposed credentials-mock prototype corruption and stale popup/dialog assumptions. Correct those test harness defects and retain a focused regression; no product redesign is required.
- Diagnose the shared collection failure and implement its smallest direct correction.
- Preserve test assertions and verify both browser and extension suites through hosted full E2E validation.
- Deliver the reviewed fix through squash merge, then assess remaining simulator acceptance work.

## Constraints and exclusions

- One WEB-DEV writer; Gizmo owns delivery. No local product builds or browser test execution.
- Preserve authentication and secret boundaries. Do not disable failing tests or add alternate execution paths.
- No Hive infrastructure changes or unrelated product redesign.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: restore-e2e-collection
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: Web test fixtures, helpers, and Playwright configuration.
- Ownership units:
1. Capability: Restore browser test collection; Gizmo ID: restore-e2e-collection; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted browser and extension suites execute and pass.
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Correct shared Playwright collection; Acceptance evidence: Hosted browser and extension E2E plus required PR checks pass.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: restore-e2e-collection; Gizmo name: Restore E2E collection; Predecessor Gizmo ID: None; Correct shared Playwright collection; Estimated authored changed lines: 300; Acceptance evidence: Hosted browser and extension E2E plus required PR checks pass.

## Initial plan

1. Verify failure evidence and absence of competing execution.
2. Diagnose, implement, and commit the focused test correction.
3. Open a PR and run hosted full E2E validation with review.
4. Resolve failures and feedback, merge when ready, and publish completion evidence.

## Completion evidence

- Root cause linked to the focused diff, successful full browser and extension checks, readiness audit, and verified squash merge.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
