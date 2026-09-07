---
title: Nook WASM device-protection coverage increment completion
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260907T094901Z-nook-wasm-coverage-77-5-device-protection.md
started_at: 2026-09-07T09:49:01Z
finished_at: 2026-09-07T10:01:29Z
status: completed
agent: codex
gizmo_id: rust-crate-coverage-90
pull_request: https://github.com/meta-secret/nook/pull/1509
---

## Outcome

Pull request 1509 added a behavior-focused browser test for the PIN
device-protection round trip: persistence, mode and status projection, lock,
authorization-required setup, successful unlock, and wrong-PIN rejection. The
executable `nook-wasm` floor rose from 77.0 to 77.5 percent. Exact hosted
coverage measured `nook-wasm` at 77.59 percent lines and
`nook-companion-wasm` at 91.21 percent; the pull request squash-merged as
`9944b2a6d69cb486bf2bca916d4122baf47a7eb3`.

## Progress

The branch was rebased onto current Main `b702bebf7842d3cf354df0cd8f5be1600a988fef`
after Main advanced immediately after PR creation, then force-pushed at exact
head `ca15e0266203c479f420852a21d56784d384707f`. The final graph ran 304 WASM
browser tests with zero failures. Authored additions were 44 test lines and
one executable floor-record line; no production behavior or public contract
changed.

## Implementation problems

Main advanced between PR creation and validation, so the initial branch was
rebased before checks were accepted. The PIN fixture used the existing local
IndexedDB lifecycle and was kept fully local; no hosted runtime or product
implementation changes were necessary.

## Decisions

Keep independent package accounting and retain the companion-WASM 90 percent
floor. Raise only the executable `nook-wasm` floor justified by hosted proof,
to 77.5 percent. Preserve the user-authorized serial delivery shape and keep
the broader 90 percent mission in progress; no exclusions, assertion-free
filler, or aggregate masking were introduced.

## Validation

Local static gates passed:

- `cargo fmt --manifest-path nook-app/nook-platform/Cargo.toml --all -- --check`
- `cargo fmt --manifest-path preflight/Cargo.toml --all -- --check`
- `git diff --check`
- `task loom:pre-push`

Final exact hosted PR graph `34108352423` passed native Rust, WASM build and
Node tests, web verification, Hive, Rust ecosystem checks, coverage,
repository policy, and Pages preview. The WASM Node job passed 304 browser
tests; coverage reported `nook-wasm` at 77.59 percent lines and
`nook-companion-wasm` at 91.21 percent. `task pr:ready PR=1509` returned
`ready: true`, `behindBy: 0`, zero unresolved review threads, and deployment
`https://pr-1509.nokey-sh.pages.dev`. The pull request merged at
`2026-09-07T10:01:29Z`; `origin/main` now points to the merge commit.

## Remaining work

Continue the serial coverage mission from merged Main at the evidence-backed
77.5 percent `nook-wasm` floor, with the next bounded behavior-focused slice
in the remaining low-coverage manager or storage boundaries.
