---
title: Nook WASM passkey manager coverage increment completion
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260907T110002Z-nook-wasm-coverage-passkeys.md
started_at: 2026-09-07T11:00:02Z
finished_at: 2026-09-07T11:24:43Z
status: completed
agent: codex
gizmo_id: rust-crate-coverage-90
pull_request: https://github.com/meta-secret/nook/pull/1514
---

## Outcome

Pull request 1514 added behavior-focused browser tests for inactive passkey
ceremonies and malformed extension-vault grants. The executable `nook-wasm`
floor rose from 77.7 to 77.8 percent. Final exact hosted coverage measured
`nook-wasm` at 77.88 percent lines, `manager/passkeys.rs` at 78.41 percent,
and `nook-companion-wasm` at 91.21 percent. The pull request squash-merged as
`42109a86b35b40f9579d6d633d43b2535be0ca8b`.

## Progress

The initial graph `34114608052` passed 310 WASM browser tests and measured
77.94 percent overall lines. Main advanced to `c49e6fcfddbfaea6f8c1d8a0b9cc073c6aff6865`
while the graph was running, so the branch was rebased and the floor was
raised in a replacement exact-head commit. Replacement graph `34115723912`
passed 310 browser tests with the 77.8 percent floor enforced. Authored
additions were 55 test lines plus two floor-record lines; no production
behavior or public contract changed.

## Implementation problems

The local `gh pr merge --delete-branch` wrapper could not perform its checkout
because another worktree owned `main`. The already-ready pull request was
merged through GitHub's squash API at the exact validated head, and the remote
feature ref was confirmed absent afterward.

## Decisions

Raise only the executable `nook-wasm` floor justified by hosted proof, to 77.8
percent. The measured 77.88 percent result leaves a defensible margin; 77.9
percent was not claimed because it would leave only 0.04 points. Preserve
independent package accounting, the companion-WASM 90 percent floor, and the
user-authorized serial delivery shape. No exclusions, assertion-free filler,
or aggregate masking were introduced.

## Validation

Local static gates passed:

- `cargo fmt --all -- --check`
- `git diff --check`
- `task loom:pre-push` (57 authored additions)

The final exact hosted graph `34115723912` passed repository policy, Hive
validation (`34115707582`), Native Rust, WASM build and Node tests, Web
verification, Rust ecosystem checks, coverage, and Pages preview. The WASM
Node job passed 310 browser tests with zero failures; coverage reported
`nook-wasm` at 77.88 percent lines and `nook-companion-wasm` at 91.21 percent.
`task pr:ready PR=1514` returned `ready: true`, `behindBy: 0`, zero unresolved
review threads, and deployment `https://pr-1514.nokey-sh.pages.dev`. The pull
request merged at `2026-09-07T11:24:43Z`; `origin/main` points to the merge
commit and the feature branch is deleted remotely.

## Remaining work

Continue the serial coverage mission from merged Main at the evidence-backed
77.8 percent `nook-wasm` floor, selecting the next bounded behavior-focused
slice from the remaining deterministic manager or storage boundaries.
