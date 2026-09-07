---
title: Nook WASM coverage local vault API slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T02:48:34Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260907T020000Z-nook-wasm-coverage-80-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1483
merged with exact hosted evidence of 76.15 percent `nook-wasm` line coverage.
This slice targets the remaining local-vault lifecycle wrappers in `vault_api`.

## Requirements

- Add deterministic browser behavior tests for local-vault listing, selection,
  labeling, and application-compatible storage lifecycle wrappers.
- Raise only the `nook-wasm` floor after exact hosted proof confirms the safe
  floor for this slice.
- Preserve the 90 percent `nook-companion-wasm` floor and all other package
  accounting.

## Constraints and exclusions

- Change only `nook-wasm/src/vault_api.rs` and the executable `nook-wasm`
  coverage floor if hosted evidence supports it.
- Use generated identities and local IndexedDB fixtures; do not touch remote
  providers or production behavior.
- Keep authored additions below 2,000 lines and use static local gates only.
- Do not run local Rust, WASM, or product Docker builds.
- Do not add coverage exclusions, aggregate masking, assertion-free filler, or
  production behavior changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 140
- Owning modules, packages, or layers: `nook-wasm` local-vault API wrappers and browser behavior tests.
- Ownership units:
1. Capability: local-vault API coverage; Gizmo ID: rust-crate-coverage-90; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact hosted coverage proves a safe floor increase and the merged PR is ready.
- Public or cross-module interfaces: existing local-vault WASM wrappers; no interface changes.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 140
- Current PR slice and acceptance evidence: Cover local-vault listing, selection, labeling, and application-compatible lifecycle wrappers; Acceptance evidence: static gates, exact hosted validation, independent coverage, readiness, squash merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-90; Gizmo name: local-vault API coverage; Predecessor Gizmo ID: None; Cover local-vault listing, selection, labeling, and application-compatible lifecycle wrappers; Estimated authored changed lines: 140; Acceptance evidence: static gates, exact hosted validation, independent coverage, readiness, squash merge, and Workbench closeout.

## Initial plan

1. Start from merged Main `4658cd533d906863af16e68b71f97a147c61c328` and keep the
   change isolated to `vault_api.rs` tests.
2. Run formatter, diff, and pre-push static gates without local product builds.
3. Push, run exact-head hosted validation, and inspect independent package
   coverage before changing the floor.
4. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record the evidence.

## Completion evidence

- Browser tests exercise compatible local-vault discovery, active selection,
  labels, and import/slot lifecycle without remote-provider access.
- Exact hosted coverage and readiness support any floor change before merge.

## Safety review

- Tests use generated identities and local IndexedDB fixtures only; no secrets
  or credentials are persisted or logged.
- The slice adds no production behavior, API, or coverage exemption.
