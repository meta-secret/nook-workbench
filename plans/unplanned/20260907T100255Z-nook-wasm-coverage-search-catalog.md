---
title: Nook WASM search-catalog coverage slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T10:02:55Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260907T094901Z-nook-wasm-coverage-77-5-device-protection.md
---

## Interpreted request

Continue the user-authorized serial coverage mission from merged Main after
pull request 1509. Add a bounded set of behavior-focused tests for the
deterministic search-catalog manager boundary, then raise the executable
`nook-wasm` floor only when exact hosted coverage proves a safe increment.

## Requirements

- Exercise search-catalog query, invalidation, persistence, and fail-closed
  branches in `manager/search_catalog.rs`.
- Preserve independent `nook-wasm` and `nook-companion-wasm` accounting.
- Deliver one pull request with exact-head hosted validation, readiness,
  squash merge, and Workbench closeout evidence.

## Constraints and exclusions

- Product changes are behavior-focused tests plus the executable
  `nook-wasm` floor only if hosted proof supports the change.
- Do not change production behavior, public contracts, coverage exclusions, or
  aggregate accounting.
- Use local synthetic records and deterministic fixtures; do not access remote
  providers or persist secrets in the ledger.
- Use static local gates only; local Rust, WASM, product Docker, and full
  repository validation remain prohibited.
- Keep authored additions below the 2,000-line pull-request limit and keep
  touched source files under the repository's 1,000-line policy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 180
- Owning module: `nook-wasm` search-catalog manager boundary and colocated
  tests.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Cover deterministic search-catalog
  branches; static gates, exact hosted validation, independent coverage,
  readiness, squash merge, and Workbench closeout.

## Initial plan

1. Start from merged Main `9944b2a6d69cb486bf2bca916d4122baf47a7eb3` at the
   executable `nook-wasm` floor of 77.5 percent.
2. Inspect existing search-catalog tests and add focused behavior tests for
   uncovered deterministic branches without changing production code.
3. Run formatting, diff, and pre-push static gates without product builds.
4. Push the branch, obtain exact-head hosted validation, and inspect the
   independent coverage result before changing its floor.
5. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record completion evidence.

## Completion evidence

- Tests cover behavior-focused search-catalog query, invalidation, persistence,
  and guard paths.
- Exact hosted coverage, readiness, merged head, and the next-floor decision
  are recorded in the issue and a linked completion worklog.

## Safety review

- Tests use local deterministic records only; no credentials or raw logs are
  stored.
- No production implementation or API contract changes are planned.
- No coverage exclusions, assertion-free filler, or aggregate masking are
  allowed.
