---
title: Nook WASM provider-sync and security-epoch coverage completion
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260907T074300Z-nook-wasm-coverage-80-sync-guards.md
started_at: 2026-09-07T07:43:00Z
finished_at: 2026-09-07T08:46:33Z
status: completed
agent: codex
gizmo_id: rust-crate-coverage-90
pull_request: https://github.com/meta-secret/nook/pull/1503
---

## Outcome

Pull request 1503 added focused provider-sync export, classification,
roundtrip, projected-epoch, idempotent-adoption, and Sentinel fail-closed
tests, plus security-epoch recovery-plan rejection tests. The executable
`nook-wasm` floor rose from 76.8 to 77.0 percent. Exact hosted coverage
measured `nook-wasm` at 77.06 percent and `nook-companion-wasm` at 92.15
percent; the pull request squash-merged as
`e8feb70d5f86970791745db202a2db86cf24142d`.

## Progress

The branch was rebased onto current Main `485f5de38bf42a25a0f920cfc9df20b07b090753`
after Main advanced during hosted validation, then force-pushed at exact head
`77fdd1af0b2dfad00b766db5c3b59d07cfaf17e0`. The final graph ran 301 WASM
browser tests with zero failures. Authored additions were 216, including the
floor record and cohesive export-boundary extraction.

## Implementation problems

The first hosted pass exposed fixture and Dylint boundary issues; the signed
event fixture was corrected to a valid StoreId and the test-only callback
received the accepted framework-boundary expectation. A malformed StoreId
case was changed to an actually invalid empty value. The test additions first
put `provider_sync.rs` above the 1,000-line source limit, so the event-export
boundary was extracted into `provider_sync_export.rs` without changing
runtime behavior. Main advancing during validation required one rebase and a
fresh exact-head graph.

## Decisions

Keep independent package accounting and retain the companion-WASM 90 percent
floor. Raise only the executable `nook-wasm` floor justified by hosted proof,
to 77.0 percent. Preserve the user-authorized serial delivery shape and keep
the broader 90 percent mission in progress; no exclusions, assertion-free
filler, or aggregate masking were introduced.

## Validation

Local static gates passed:

- `cargo fmt --manifest-path nook-app/nook-platform/Cargo.toml --all -- --check`
- `cargo fmt --manifest-path preflight/Cargo.toml --all -- --check`
- `git diff --check`
- `task loom:pre-push`

Final exact hosted PR graph `34101297389` passed native Rust, WASM build and
Node tests, web verification, Hive, Rust ecosystem checks, coverage,
repository policy, and Pages preview. Hive run `34101274196` passed image,
control-center, and infrastructure verification. `task pr:ready PR=1503`
returned `ready: true`, `behindBy: 0`, zero unresolved review threads, and a
successful deployment at `https://pr-1503.nokey-sh.pages.dev`. The pull request
merged at `2026-09-07T08:46:33Z`; `origin/main` now points to the merge commit.

## Remaining work

Continue the serial coverage mission from merged Main at the evidence-backed
77.0 percent `nook-wasm` floor, with the next bounded behavior-focused slice.
No unresolved blocker remains for that next slice.
