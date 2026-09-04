---
title: Restore authentication E2E and preserve independent extension sessions
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

- Supersedes the earlier harness plan after browser execution and security review identified an unpaired vault update incorrectly closing an independent extension session. Correct that bounded lifecycle routing defect without changing Rust grant validation or accepting unauthorized updates.
- Preserve closed typed outcomes for local event-log updates. Only the exact unpaired rejection preserves the existing session; revoked access, import failure, and unknown failures remain fail-closed.
- Security review additionally requires policy-readiness failures to become typed import failures and unexpected routing exceptions to close authorization. Add direct importer tests for absent, malformed, and failed-policy states using explicit required dependencies.
- Correct credentials-mock prototype corruption, unsafe positive mock submission actions, and stale dialog expectations. Retain real component-to-observer-to-WASM regressions and direct warm-popup assertions.
- Update the existing rendered extension-popup demo to show an already-unlocked popup reopening without another credential ceremony. This UI projection demo complements, but does not replace, real routing, importer, and extension E2E evidence.
- Diagnose the shared collection failure and implement its smallest direct correction.
- Preserve test assertions and verify both browser and extension suites through hosted full E2E validation.
- Deliver the reviewed fix through squash merge, then assess remaining simulator acceptance work.

## Constraints and exclusions

- One WEB-DEV writer with read-only SECURITY review; Gizmo owns delivery. No local product builds or browser test execution.
- Preserve authentication and secret boundaries. Do not disable failing tests or add alternate execution paths.
- No Hive infrastructure changes or unrelated product redesign.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: restore-e2e-collection
- Estimated authored changed lines: 500
- Owning modules, packages, or layers: Web test fixtures and helpers; extension background pairing-import and lifecycle routing; focused routing regression tests.
- Ownership units:
1. Capability: Restore authentication E2E and preserve independent extension sessions; Gizmo ID: restore-e2e-collection; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted browser and extension suites pass; unpaired updates stay rejected without closing the session; revoked and failed imports close it.
2. Capability: Verify extension session and grant boundaries; Gizmo ID: restore-e2e-collection; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Read-only exact-head security verdict confirms no unauthorized update acceptance or weakened revocation.
- Public or cross-module interfaces: Closed local event-log update outcomes between pairing import and browser lifecycle routing; existing Rust validation remains authoritative.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 500
- Current PR slice and acceptance evidence: Restore authentication E2E and independent extension session retention; Acceptance evidence: Hosted browser and extension E2E plus required PR checks and exact-head security review pass.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: restore-e2e-collection; Gizmo name: Restore authentication E2E; Predecessor Gizmo ID: None; Restore authentication E2E and independent extension session retention; Estimated authored changed lines: 500; Acceptance evidence: Hosted browser and extension E2E plus required PR checks and exact-head security review pass.

## Initial plan

1. Verify failure evidence and absence of competing execution.
2. Diagnose, implement, and commit the focused test correction.
3. Open a PR and run hosted full E2E validation with review.
4. Resolve failures and feedback, merge when ready, and publish completion evidence.

## Completion evidence

- Root cause linked to the focused diff, successful full browser and extension checks, readiness audit, and verified squash merge.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
