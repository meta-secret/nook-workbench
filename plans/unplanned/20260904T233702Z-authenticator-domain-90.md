---
title: Raise authenticator domain coverage to 90 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-04T23:37:02Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260904T224807Z-remove-lace.md
---

# Task plan

## Interpreted request

Continue the serial coverage mission after merged Lace removal. Cover authenticator-domain wire value branches and enforce an independent 90 percent line floor.

## Requirements

- Add assertions for uncovered closed-vocabulary string, serialization, display, and period-value behavior.
- Raise only authenticator-domain from 87 to 90 percent; preserve all other package floors and exclusions.
- Require hosted coverage proof before merge, with no production behavior changes or filler tests.

## Constraints and exclusions

- No local product compilation or tests; formatting and static checks only.
- Keep this one pull request below 2,000 authored additions.
- Begin no other crate implementation until this slice merges.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 100
- Owning modules, packages, or layers: authenticator-domain inline tests and coverage policy
- Ownership units:
1. Capability: Test authenticator wire values; Gizmo ID: rust-crate-coverage-90; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Behavior assertions and hosted package line coverage at least 90 percent
2. Capability: Enforce authenticator coverage floor; Gizmo ID: rust-crate-coverage-90; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Registry and independent hosted package gate enforce 90 percent without lowering other floors
3. Capability: Deliver the coverage slice; Gizmo ID: rust-crate-coverage-90; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head readiness and squash merge succeed
- Public or cross-module interfaces: Independent authenticator-domain line coverage floor
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 100
- Current PR slice and acceptance evidence: Raise authenticator-domain to 90 percent; Acceptance evidence: Hosted independent coverage reaches 90 percent and exact-head validation and merge succeed
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-90; Gizmo name: Authenticator domain 90 percent; Predecessor Gizmo ID: None; Raise authenticator-domain to 90 percent; Estimated authored changed lines: 100; Acceptance evidence: Hosted independent coverage reaches 90 percent and exact-head validation and merge succeed

## Initial plan

1. Add focused inline serialization and value tests.
2. Raise the independent floor and policy expectation.
3. Run pre-push hygiene, push, create the pull request, and request hosted validation and review.
4. Fix in-scope findings, verify coverage and readiness, squash-merge, and record results before the next crate.

## Completion evidence

- Authenticator-domain independently measures at least 90 percent and its enforced floor is 90 percent.
- Every other crate floor is preserved.
- Exact-head validation, review, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
