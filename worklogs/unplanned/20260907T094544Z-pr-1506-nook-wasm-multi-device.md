---
title: Nook WASM multi-device join lifecycle coverage completion
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260907T085642Z-nook-wasm-coverage-80-multi-device.md
started_at: 2026-09-07T08:56:42Z
finished_at: 2026-09-07T09:45:44Z
status: completed
agent: codex
gizmo_id: rust-crate-coverage-90
pull_request: https://github.com/meta-secret/nook/pull/1506
---

## Outcome

Pull request 1506 added focused browser tests for the Simple keys-mode
multi-device join lifecycle: device signing initialization, join-request
creation and listing, denial, approval, roster projection, and the durable
owner rename path. It also covered fail-closed local request and enrollment
paths when no vault or valid keys are available. Exact hosted coverage measured
`nook-wasm` at 77.58 percent lines and `nook-companion-wasm` at 91.01 percent;
the pull request squash-merged as
`31c6e5b2d460d75a41d383440be55be47e01d8ba`.

## Progress

The branch was rebased onto current Main `e053af208be9074fa168a9c0047afe5e9d1de740`
after Main advanced during validation, then force-pushed at exact head
`ab836501970af77ca8af58ce5c4cbeb183ba7216`. The final graph ran 303 WASM
browser tests with zero failures. Authored additions were 122 test lines; no
production behavior or public contract changed.

## Implementation problems

The first hosted attempt exposed test-only `JsError` conversion and formatting
issues; the browser helpers were corrected to use explicit debug diagnostics.
The first runtime fixture attempted to rename a synthetic approved joiner,
which the persisted-record path correctly rejected as not yet durable. The
fixture was narrowed to approve the synthetic joiner while exercising rename
against the durable genesis owner. A subsequent projection assertion was
removed because simple event-log re-projection does not expose the label
immediately; core roster tests remain responsible for label semantics. Main
advancing during validation required one rebase and fresh exact-head graphs.

## Decisions

Keep independent package accounting and retain the companion-WASM 90 percent
floor. Do not raise the executable `nook-wasm` floor inside this merged PR;
the 77.58 percent proof supports a follow-up 77.5 percent floor increment.
Preserve the user-authorized serial delivery shape and keep the broader 90
percent mission in progress; no exclusions, assertion-free filler, or
aggregate masking were introduced.

## Validation

Local static gates passed:

- `cargo fmt --manifest-path nook-app/nook-platform/Cargo.toml --all -- --check`
- `cargo fmt --manifest-path preflight/Cargo.toml --all -- --check`
- `git diff --check`
- `task loom:pre-push`

Final exact hosted PR graph `34106933549` passed native Rust, WASM build and
Node tests, web verification, Rust ecosystem checks, coverage, repository
policy, and Pages preview. The WASM Node job passed 303 browser tests; coverage
reported `nook-wasm` at 77.58 percent lines and `nook-companion-wasm` at 91.01
percent. `task pr:ready PR=1506` returned `ready: true`, `behindBy: 0`, zero
unresolved review threads, and deployment
`https://pr-1506.nokey-sh.pages.dev`. The pull request merged at
`2026-09-07T09:45:44Z`; `origin/main` now points to the merge commit.

## Remaining work

Continue the serial coverage mission from merged Main at the evidence-backed
77.0 percent `nook-wasm` floor. The next bounded slice should raise the
executable floor to 77.5 percent while adding behavior-focused coverage in a
low-coverage deterministic manager or storage boundary.
