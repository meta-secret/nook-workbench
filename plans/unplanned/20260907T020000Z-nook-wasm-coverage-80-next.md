---
title: Nook WASM coverage 80 percent Sentinel delivery slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T02:00:00Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T194502Z-nook-wasm-coverage-80-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1473
merged with exact hosted evidence of 75.97 percent `nook-wasm` line coverage.
This slice targets an evidence-backed increase through the low-coverage
Sentinel onboarding delivery boundary.

## Requirements

- Add deterministic behavior-focused tests for Sentinel onboarding JSON,
  delivery installation, and browser fail-closed guards.
- Raise only the `nook-wasm` floor after exact hosted proof confirms the safe
  floor for this slice.
- Preserve the 90 percent `nook-companion-wasm` floor and all other package
  accounting.

## Constraints and exclusions

- Change only `nook-wasm/src/manager/sentinel/delivery.rs` and the executable
  `nook-wasm` coverage floor if hosted evidence supports it.
- Cover both JSON parsing outcomes, the state projection after installing an
  accepted share, and no-identity/invalid-package browser guards.
- Keep authored additions below 2,000 lines; use static local gates only.
- Do not run local Rust, WASM, or product Docker builds.
- Do not add coverage exclusions, aggregate masking, assertion-free filler, or
  production behavior changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 150
- Owning modules, packages, or layers: nook-wasm Sentinel onboarding delivery boundary and browser behavior tests.
- Ownership units:
1. Capability: Sentinel onboarding delivery coverage; Gizmo ID: rust-crate-coverage-90; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact hosted coverage proves a safe floor increase and the merged PR is ready.
- Public or cross-module interfaces: existing `NookVaultManager` Sentinel onboarding methods and vault state projections; no interface changes.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 150
- Current PR slice and acceptance evidence: Cover Sentinel onboarding JSON parsing, accepted-share installation, and browser fail-closed guards; Acceptance evidence: static gates, exact hosted validation, independent coverage, readiness, squash merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-90; Gizmo name: Sentinel onboarding delivery coverage; Predecessor Gizmo ID: None; Cover Sentinel onboarding JSON parsing, accepted-share installation, and browser fail-closed guards; Estimated authored changed lines: 150; Acceptance evidence: static gates, exact hosted validation, independent coverage, readiness, squash merge, and Workbench closeout.

## Initial plan

1. Start from merged Main `4bd068de5aa7acb4defea75c4abfc1d371a434c5` and keep the
   change isolated to the delivery module.
2. Run formatter, diff, and pre-push static gates without local product builds.
3. Push, run exact-head hosted validation, and inspect independent package
   coverage before changing the floor.
4. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record the evidence.

## Completion evidence

- Both valid-JSON/invalid-core and invalid-delivery-JSON wrapper paths are
  exercised.
- Accepted delivery installation projects store identity, Sentinel policy, and
  the encrypted share into the live manager state.
- Browser guards reject invalid packages and missing identities without
  mutating storage.
- Exact hosted coverage and readiness support any floor change before merge.

## Safety review

- Tests use generated identities and encrypted fixtures only; no secrets or
  credentials are persisted or logged.
- Provider and IndexedDB writes are not invoked by the deterministic tests.
- The slice adds no production behavior, API, or coverage exemption.
