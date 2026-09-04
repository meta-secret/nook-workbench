---
title: Rust crate coverage floor blocked by measured Minds deficits
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-floor.md
plan: plans/unplanned/20260904T012700Z-rust-crate-coverage-floor-superseding.md
nook_pr: 1319
status: blocked
started_at: 2026-09-04T01:03:00Z
finished_at: 2026-09-04T08:55:30Z
agent: codex
---

# Rust crate coverage floor blocked by measured Minds deficits

## Outcome

Pull request [#1319](https://github.com/meta-secret/nook/pull/1319) now exposes every testable first-party Rust crate through an independent 90 percent hosted line-coverage gate and explicitly classifies the fuzz and vendored exclusions. The task stopped before merge because honest Hive and Lace measurements require more behavior-test work than the approved one-pull-request size permits.

## Progress

- Inventoried fourteen Rust packages: twelve independently enforced first-party crates, one non-testable fuzz harness exclusion, and one vendored third-party exclusion.
- Replaced the platform aggregate threshold with package-specific thresholds and added coverage execution for both WASM adapters, Hive, Lace, and preflight.
- Corrected stale coverage metadata and base-change classification.
- Replaced the legacy preflight container source path with the canonical repository path and isolated Cargo output outside the copied repository.
- Added focused preflight policy tests that reject incomplete package registration, aggregate masking, and legacy or generated source roots.

## Implementation problems

- The first hosted run exposed a legacy preflight container source path. The implementation was corrected to use the canonical repository root.
- The second hosted run exposed Cargo output generated inside the repository snapshot. The target directory was isolated outside the source tree.
- The third hosted run passed platform and preflight coverage but measured Hive at 48.46 percent and Lace at 68.75 percent.
- Hive's existing service-backed integration execution is outside the coverage collection stage. Including it closes part of the measurement gap, but at least 3,398 additional Hive lines must be exercised to reach 90 percent.

## Decisions

- Keep 90 percent as an independent per-crate floor; do not restore aggregate masking.
- Do not use exclusions, coverage-ignore attributes, assertion-free filler, or threshold reductions to manufacture a pass.
- Stop at the repository's 2,000-authored-addition boundary. The current pull request has 312 additions; the remaining meaningful test and harness work is estimated at 2,730 to 3,950 additions.

## Validation

- Hosted run [33854626271](https://github.com/meta-secret/nook/actions/runs/33854626271): platform Rust coverage passed, preflight passed at 92.44 percent, Hive measured 48.46 percent, and Lace measured 68.75 percent.
- `task loom:pre-push PR=1319` passed on exact pull-request head `24ab34361c747df6258e5ea40a1239ba73869ef8`.
- The remote pull-request head matches the validated local head.

## Remaining work

- Obtain an explicit delivery-scope decision that permits the estimated Hive and Lace behavior-test work beyond the current one-pull-request addition limit.
- Instrument the existing Hive service-backed integration suite under coverage and add focused coordinator, observer, authentication, worker, delivery, dispatcher, and residual protocol tests.
- Add focused Lace retry and dependency-chain behavior tests.
- Re-run exact-head hosted coverage, repository validation, readiness, and merge only after every enforced crate independently reaches 90 percent.
