---
title: All-crates 90 percent successor blocked at admission
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260904T214930Z-rust-crate-coverage-90-budget.md
nook_pr: null
status: blocked
started_at: 2026-09-04T21:49:30Z
finished_at: 2026-09-04T21:53:00Z
agent: codex
---

# All-crates 90 percent successor blocked at admission

## Outcome

The requested one-pull-request successor was not created because the complete behavior-test scope cannot honestly fit the mandatory 2,000-authored-addition ceiling. The final 90 percent target remains explicit and no threshold, exclusion, or coverage definition was weakened.

## Progress

- Read merged exact-head coverage reports and counted the existing `nook-wasm` native and browser tests.
- Calculated the minimum additional production lines and currently unexecuted functions that must be covered.
- Recorded the complete successor scope and its admission blocker before creating a branch or implementation pull request.

## Implementation problems

- The five deficit crates require at least 13,105 newly executed production lines, dominated by 10,769 lines in `nook-wasm`.
- Roughly 2,330 additional functions must become covered while tests remain behavior-focused.

## Decisions

- Estimate 4,500 to 7,500 authored test additions for the complete outcome.
- Do not automatically split or stack the work, because repository policy requires one PR and directs an over-budget task to stop.
- Do not create a partial or nominal pull request and do not manufacture coverage through filler or exclusions.

## Validation

- Merged reports: `nook-wasm` 51.42 percent, `nook-companion-wasm` 27.55 percent, Hive 73.73 percent, Lace 86.48 percent, and authenticator-domain 87.93 percent.
- Required additional covered lines: 10,769, 807, 1,514, 12, and three respectively.
- Repository authority caps one pull request at 2,000 authored additions and prohibits size-driven automatic decomposition.

## Remaining work

- An explicit user decision must either authorize a bounded multi-PR capability sequence or narrow the target; the all-crates 90 percent requirement itself remains unchanged.
