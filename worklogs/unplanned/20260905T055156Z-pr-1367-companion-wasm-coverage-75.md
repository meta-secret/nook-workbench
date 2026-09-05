---
title: Pull request 1367 companion WASM 75 percent completed
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260905T050836Z-companion-wasm-coverage-60.md
nook_pr: 1367
status: completed
started_at: 2026-09-05T05:08:36Z
finished_at: 2026-09-05T05:51:56Z
agent: codex
---

# Pull request 1367 companion WASM 75 percent completed

## Outcome

Pull request [#1367](https://github.com/meta-secret/nook/pull/1367) squash-merged as `fd82b6206f93465046b532a4e91d99bbc2c7c578`. `nook-companion-wasm` now has an independent 75 percent line-coverage floor, up from 18 percent, without production changes or new exclusions.

## Progress

- Registered 18 existing behavior tests for both native and WASM execution while retaining one pre-existing dual-target test.
- Added page-policy wrapper and account-picker cleanup/release lifecycle behavior tests.
- Replaced two touched panic branches with fallible test results.
- Raised the provisional 60 percent floor to 75 percent after exact hosted measurement supported the stronger threshold.

## Implementation problems

- Main advanced twice during delivery through pull requests 1364 and 1360. Each was merged before a fresh exact-head validation cycle.
- The portable coverage artifact excludes WASM packages, so the authoritative companion result had to be read from the hosted WASM Node job summary.

## Decisions

- Kept 0.87 percentage points of headroom below the measured result rather than enforcing the exact floating-point percentage.
- Reused substantial existing behavior tests instead of adding filler or production-only reachability hooks.
- Deferred response-decoding and authentication-workflow fixtures to a later companion slice on the path to 90 percent.

## Validation

- Exact head `fcf6c546949051f721ce084934d453eebf0be01b` ran 28 companion-WASM tests twice through the hosted flow, with all tests passing.
- Independent coverage measured 75.87 percent, covering 1,110 of 1,463 lines and 118 of 209 functions.
- Repository policy run `33947789506`, PR run `33947848620`, and Hive run `33947789491` completed successfully.
- Unresolved review threads were zero and `task pr:ready PR=1367` returned `ready: true` against Main `eeda5600274018cdf4da2a5c6ae9a40ba4e673ed` immediately before merge.

## Remaining work

- Re-measure remaining low-floor crates from merged Main and create the next serial coverage slice.
- A later companion-WASM slice must cover response decoding and authentication workflow behavior to continue from 75 toward 90 percent.
