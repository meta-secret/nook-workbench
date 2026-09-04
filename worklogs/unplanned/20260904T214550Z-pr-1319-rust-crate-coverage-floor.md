---
title: Pull request 1319 current Rust coverage floors completed
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-floor.md
plan: plans/unplanned/20260904T090312Z-rust-crate-coverage-floor-staged.md
nook_pr: 1319
status: completed
started_at: 2026-09-04T09:03:12Z
finished_at: 2026-09-04T21:45:50Z
agent: codex
---

# Pull request 1319 current Rust coverage floors completed

## Outcome

Pull request [#1319](https://github.com/meta-secret/nook/pull/1319) merged as `743239eb76133904d6e98fe7b7f016d7cbaf4d81`. Every testable first-party crate now has an independent hosted coverage gate at its measured current floor, while `nook-fuzz` and vendored `arrayref` are the only explicit exclusions.

## Progress

- Registered all thirteen testable first-party Rust packages and prevented aggregate masking or silent omission.
- Enforced Hive at 60 percent, Lace at 75 percent, `nook-companion-wasm` at 18 percent, `nook-wasm` at 51 percent, authenticator-domain at 87 percent, and every other registered package at 90 percent.
- Counted 229 declared `nook-wasm` tests: 82 native and 147 browser tests.
- Preserved the canonical preflight source root and isolated build output from copied source.

## Implementation problems

- Main advanced repeatedly during readiness, requiring exact-head rebases and fresh hosted validation.
- One repository-policy attempt exceeded an unrelated Loom timing bound and one browser attempt ended after ChromeDriver received SIGKILL; unchanged failed-job retries passed.

## Decisions

- Current measured floors are explicit policy, not a claim that the final 90 percent target is complete.
- Production behavior, secret isolation, and independent package measurement were preserved; no exclusions or filler tests were added.

## Validation

- Exact head `539ea191dacdfefc7e7b43182c4c45080800698e` passed native Rust, WASM build and Node tests, web verification, Dylint, dependency policy, Kani, fuzz, Loom, Hive Rust, Hive browser coverage, repository policy, preview, and coverage reporting.
- Exact-head Codex review found no major issues and unresolved review threads were zero.
- `task pr:ready PR=1319` returned `ready: true` against Main `c88b92ba8da1ca4b5319c0e2725015dd60c9a412` immediately before merge.

## Remaining work

- [All-crates 90 percent successor](https://github.com/meta-secret/nook-workbench/blob/main/issues/unplanned/rust-crate-coverage-90.md), currently blocked by the one-pull-request size policy.
