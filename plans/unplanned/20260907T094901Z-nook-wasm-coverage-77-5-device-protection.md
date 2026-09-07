---
title: Nook WASM device-protection coverage increment
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T09:49:01Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260907T085642Z-nook-wasm-coverage-80-multi-device.md
---

## Interpreted request

Continue the user-authorized serial coverage mission from merged Main after
pull request 1506. Add a bounded set of behavior-focused browser tests for the
device-protection manager boundary, then raise the executable `nook-wasm`
floor to 77.5 percent only when exact hosted coverage proves the increment.

## Requirements

- Exercise deterministic device-protection lifecycle and fail-closed guards in
  `manager/device_protection.rs`.
- Preserve independent `nook-wasm` and `nook-companion-wasm` accounting.
- Deliver one pull request with exact-head hosted validation, readiness,
  squash merge, and Workbench closeout evidence.

## Constraints and exclusions

- Product changes are behavior-focused tests plus the executable
  `nook-wasm` floor only if hosted proof supports the change.
- Do not change production behavior, public contracts, coverage exclusions, or
  aggregate accounting.
- Use local synthetic identities and deterministic fixtures; do not access
  remote providers or persist secrets in the ledger.
- Use static local gates only; local Rust, WASM, product Docker, and full
  repository validation remain prohibited.
- Keep authored additions below the 2,000-line pull-request limit and keep
  touched source files under the repository's 1,000-line policy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 180
- Owning module: `nook-wasm` device-protection manager boundary and colocated
  browser tests.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Cover deterministic
  device-protection lifecycle and fail-closed guards; static gates, exact
  hosted validation, independent coverage, readiness, squash merge, and
  Workbench closeout.

## Initial plan

1. Start from merged Main `31c6e5b2d460d75a41d383440be55be47e01d8ba` at the
   executable `nook-wasm` floor of 77.0 percent.
2. Inspect the existing device-protection browser tests and add focused tests
   for uncovered deterministic branches without changing production code.
3. Run formatting, diff, and pre-push static gates without product builds.
4. Push the branch, obtain exact-head hosted validation, and inspect the
   independent coverage result before changing its floor.
5. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record completion evidence.

## Completion evidence

- Tests cover behavior-focused device-protection lifecycle and guard paths.
- Exact hosted coverage, readiness, merged head, and the next-floor decision
  are recorded in the issue and a linked completion worklog.

## Safety review

- Tests use generated identities and local storage only; no credentials or raw
  logs are stored.
- No production implementation or API contract changes are planned.
- No coverage exclusions, assertion-free filler, or aggregate masking are
  allowed.
