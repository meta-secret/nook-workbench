---
title: Explicit browser coverage suite deadline
feature: rust-action-ownership
issue: issues/rust-action-ownership/browser-deadline.md
started_at: 2026-09-04T23:13:00Z
agent: codex
gizmo_id: rust-action-ownership-browser-deadline
---

# Task plan

## Interpreted request

Continue domain migration delivery with the bounded correction for the repeated inherited browser coverage timeout identified during PR validation.

## Requirements

- Set WASM_BINDGEN_TEST_TIMEOUT=60 only on the existing nook-wasm browser-wasm-tests coverage invocation.
- Add a short adjacent comment explaining that the deadline covers the entire browser suite.
- Preserve the runner, command, package, coverage settings and floor, failure propagation, and every test.

## Constraints and exclusions

- One Dockerfile only; no retries, workflow, Taskfile, product, dependency, or test edits.
- Sixty seconds is an explicit finite engineering margin around three times the slower observed successful 18.52-second suite, not a measured runtime requirement.
- No local compilation or product tests; hosted validation supplies behavior evidence.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-browser-deadline
- Estimated authored changed lines: 10
- Owning modules, packages, or layers: nook-app/nook-platform/docker/rust/product.Dockerfile
- Ownership units:
1. Capability: Explicit browser coverage deadline; Gizmo ID: rust-action-ownership-browser-deadline; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted runner reports 60-second deadline, all browser tests pass, and existing coverage floor succeeds
- Public or cross-module interfaces: Existing browser test command receives one scoped environment value; no product API changes
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 10
- Current PR slice and acceptance evidence: Explicit browser coverage deadline; Acceptance evidence: Hosted timeout setting, full browser suite, coverage floor, review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-browser-deadline; Gizmo name: Browser coverage deadline; Predecessor Gizmo ID: None; Explicit browser coverage deadline; Estimated authored changed lines: 10; Acceptance evidence: Hosted timeout setting, full browser suite, coverage floor, review, and readiness

## Initial plan

1. SRE edits and commits the single scoped invocation and explanatory comment.
2. Publish promptly after hygiene and dispatch complete hosted validation.
3. Review exact diff and test output, squash merge after readiness, and publish completion records.
4. Refresh affected domain PRs against the corrected main.

## Completion evidence

- Only the intended browser coverage command has the new finite deadline.
- Hosted output reports 60 seconds, all browser tests pass, and the existing coverage floor succeeds.
- Complete exact-head checks, review, readiness, squash merge, and Workbench records pass.

## Safety review

This record contains no raw prompt, transcript, secrets, raw logs, or local paths.
