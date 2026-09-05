---
title: Raise companion WASM coverage to 60 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-05T05:08:36Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260904T233702Z-authenticator-domain-90.md
---

# Task plan

## Interpreted request

Continue the serial coverage mission after authenticator-domain reached its 90 percent floor. Materially raise `nook-companion-wasm` coverage with behavior-focused WASM tests, then enforce the exact hosted result without weakening other package policy.

## Requirements

- Dual-register the 18 existing native behavior tests so they also execute through the WASM test harness.
- Add focused page-form-policy wrapper and account-picker final-cleanup/release lifecycle behavior tests.
- Start with a provisional 60 percent independent line floor and adjust only to exact hosted evidence.
- Preserve all production behavior, package inventory, exclusions, and every unrelated package floor.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this one pull request below 2,000 authored additions and target 140 to 220 additions.
- Limit implementation to four `nook-companion-wasm` Rust test-bearing files plus the coverage policy and its executable policy test.
- Defer response-decoding and authentication-workflow fixture expansion to a later slice unless exact hosted evidence proves 60 percent is not reached.
- Begin no other crate implementation until this slice merges.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 220
- Owning modules, packages, or layers: companion WASM bridge tests and coverage policy
- Ownership units:
1. Capability: Execute existing companion bridge behavior tests on WASM; Gizmo ID: rust-crate-coverage-90; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Eighteen existing behavior tests retain native execution and execute under wasm-bindgen-test
2. Capability: Cover missing page policy and account-picker lifecycle behavior; Gizmo ID: rust-crate-coverage-90; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused assertions cover wrapper mappings, final cleanup, successful release, successor outcome, and epoch preservation
3. Capability: Enforce the measured companion WASM floor; Gizmo ID: rust-crate-coverage-90; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Independent hosted companion WASM line coverage reaches at least 60 percent and policy records the exact defensible floor
4. Capability: Deliver the companion WASM slice; Gizmo ID: rust-crate-coverage-90; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head validation, review resolution, readiness, squash merge, and Workbench closeout succeed
- Public or cross-module interfaces: Independent `nook-companion-wasm` line coverage floor
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 220
- Current PR slice and acceptance evidence: Raise `nook-companion-wasm` to at least 60 percent; Acceptance evidence: hosted WASM behavior tests and independent package floor pass on the exact head
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-90; Gizmo name: Companion WASM 60 percent; Predecessor Gizmo ID: None; Dual-register existing tests, add two focused behavior clusters, and enforce the hosted result; Estimated authored changed lines: 220; Acceptance evidence: independent hosted coverage reaches at least 60 percent and exact-head delivery succeeds

## Initial plan

1. Convert the 18 existing native-only test attributes to dual native/WASM registration without changing their behavior.
2. Add the focused page-policy wrapper matrix and account-picker lifecycle cases.
3. Update the independent package floor and executable policy expectation provisionally to 60 percent.
4. Run static pre-push gates, create the pull request, and use hosted WASM coverage to confirm or correct the floor.
5. Address in-scope findings, verify readiness, squash-merge, and record results before the next crate.

## Completion evidence

- `nook-companion-wasm` independently measures at least 60 percent on the hosted WASM harness and its enforced floor matches the defensible result.
- Existing native behavior tests remain registered and the new focused behaviors are asserted.
- Every unrelated crate floor and exclusion is preserved.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
