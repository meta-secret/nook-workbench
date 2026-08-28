---
title: Finish PR 1087 Rust and WASM authentication policy slice
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/contextual-hud-rust-wasm-policy.md
plan: plans/nook-pilot-authentication-control-plane/2026-08-24T14-59-55Z-contextual-hud-multi-pr-sequence.md
nook_pr: https://github.com/meta-secret/nook/pull/1087
status: blocked
started_at: 2026-08-27T00:00:00Z
finished_at: 2026-08-28T03:39:34Z
agent: codex
---

# Finish PR 1087 Rust and WASM authentication policy slice

## Outcome

Finished the Rust/WASM policy slice for PR #1087 and moved it to the exact
current-main baseline. The PR is open, non-draft, mergeable, and remains open
because the stacked browser slices #1096 and #1097 consume its typed boundary.

## Progress

- Rebuilt and hardened Rust-owned authentication workflow, page-control,
  recovery/destructive-action, OTP, password/passkey, and approval policy.
- Added typed companion and vault WASM boundaries with fail-closed reduced and
  detailed evidence handling.
- Replied to and resolved all current-head review threads, including reset
  destination evidence and raw OTP submission-signal derivation.
- Removed the public WASM constructor's non-authored `js_name` rename after
  repository preflight identified it as an authored-name violation.
- Exact implementation head: `0c98fe82f9f96484617fa48bfe7f3d65e62a97a9`.
- Base: `5cc4957201a0c4a06c871b385ec99b1d4f05c7c0`.

## Implementation problems

- The first hosted validation run failed repository preflight on the public
  detailed-observation constructor's `js_name` rename. The minimal one-line
  removal fixed the policy violation; the replacement repository-policy job
  passed.
- Two exact-head hosted validation attempts then failed only in Web
  verification at the shared private ARC BuildKit health probe
  (`_buildx:healthy`, exit 201). The same failure prevented `Verify and
  preview` and the exact-head GitHub Pages deployment. No product test failed.

## Decisions

- Keep PR #1087 open and ready for its dependent stack rather than closing a
  still-needed base slice.
- Do not merge: the delivery policy requires explicit authorization, which was
  not included in this request.
- Keep the infrastructure failure separate from the completed Rust/WASM
  implementation and security verdict.

## Validation

- Focused local Rust tests: companion-core 118 passed, companion-WASM 5 passed,
  nook-WASM 74 passed.
- Native and wasm32 Clippy with warnings denied passed; Rust formatting passed.
- Mandatory `task loom:pre-push` passed with current base
  `5cc4957201a0c4a06c871b385ec99b1d4f05c7c0`.
- Exact-head security-owner review for `0c98fe82f9f96484617fa48bfe7f3d65e62a97a9`:
  satisfied, no security blocker.
- Current-head review stabilization: clean, zero substantive comments, zero
  unresolved threads.
- Hosted run `33138937758`: native Rust, WASM build, WASM Node tests, Rust
  ecosystem checks, fuzz smoke, Dylint, Kani, deterministic tests, dependency
  policy, and coverage passed; Web verification failed at shared BuildKit
  health.
- Hosted retry run `33139265358`: the same code-validation jobs passed; Web
  verification again failed at the identical shared BuildKit health probe.
- `task pr:ready PR=1087` confirms current base/head and clean review but reports
  the external web verification, preview, and exact-head deployment blocker.

## Remaining work

- Restore the shared private ARC BuildKit worker's health/access, rerun exact
  head validation, and wait for successful GitHub Pages deployment.
- After readiness, mark the focused issue done and record the deployment link;
  then continue the dependent #1096/#1097 stack.
