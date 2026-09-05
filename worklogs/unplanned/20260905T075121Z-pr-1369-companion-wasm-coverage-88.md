---
title: Pull request 1369 companion WASM 88 percent completed
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260905T055936Z-companion-wasm-coverage-90.md
nook_pr: 1369
status: completed
started_at: 2026-09-05T05:59:36Z
finished_at: 2026-09-05T07:50:27Z
agent: codex
---

# Pull request 1369 companion WASM 88 percent completed

## Outcome

Pull request [#1369](https://github.com/meta-secret/nook/pull/1369) squash-merged as `d636fed26ff7a3c6b362aff53152916430353e1b`. `nook-companion-wasm` now has an independent 88 percent line-coverage floor, up from 75 percent, with exact hosted coverage at 88.99 percent.

## Progress

- Added accepted and rejected typed fixtures for every companion response-decoding export.
- Added inline behavior coverage for persistence, authentication outcomes, pairing, OAuth-origin policy, and vault URL ownership wrappers.
- Kept the tests colocated with the implementation-owned test modules and stayed within the 1,000-line source-file policy.
- Raised only the companion-WASM floor and its executable policy expectation; unrelated package floors and exclusions were preserved.

## Implementation problems

- A separate integration-test target passed its behavior assertions but could not link under the pinned WASM llvm-cov flags because the `cdylib` target referenced `__llvm_profile_runtime`. The tests were consolidated into the supported library test harness.
- The first consolidation used a path-based external unit-test module, which hosted preflight correctly rejected as a P1 test-architecture violation. The final layout keeps the behavior tests inline and reduced authored additions to 387.
- One hosted run lost DNS access to the shared S3 sccache endpoint, failing native and deterministic dependency compilation before repository code ran. The unchanged exact head passed both jobs on the next run.
- Main advanced during delivery through pull requests 1366, 1368, and 1370; each revision was merged before replacement exact-head validation.

## Decisions

- Enforced 88 percent rather than claiming 90 percent from a measured 88.99 percent result.
- Preserved meaningful assertions and removed redundant test duplication instead of adding filler or coverage exceptions.
- Deferred the measured 18-line gap to a focused successor pull request under the user-authorized serial delivery model.

## Validation

- Exact head `131bb6502dbeac15b084d6890cf33e1f5737fcb7` passed PR run `33952568615`, repository policy, and Hive validation.
- Hosted WASM Node validation passed 34 companion tests and measured 1,527 of 1,716 lines, or 88.99 percent; `nook-wasm` separately ran 157 tests and measured 53.61 percent.
- Native verification, Rust coverage reporting, dependency policy and RustSec, fuzz, deterministic/proptest/Loom, Kani, Dylint, WASM build, web verification, and aggregate verification passed.
- Unresolved review threads were zero and `task pr:ready PR=1369` returned `ready: true` against Main `53a0c3fcd98d017bfc0345a7310b5dd446e42932` immediately before merge.

## Remaining work

- Add focused coverage for at least 18 currently missed companion-WASM lines and raise its independent floor from 88 to 90 percent.
- After companion WASM reaches 90 percent, continue the serial mission with the next low-floor crate, using fresh merged-Main measurements.
