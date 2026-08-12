---
title: Move password-form policy into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-12T00-17-50Z-password-form-policy-rust.md
nook_pr: 986
status: completed
started_at: 2026-08-12T00:17:50Z
finished_at: 2026-08-12T01:46:39Z
agent: codex
---

# Move password-form policy into portable Rust

## Outcome

Authentication form priority and login-advance label policy now live in
portable Rust behind both typed WASM bridges. Browser DOM discovery, field
mutation, focus, native events, and submission remain in TypeScript.

## Progress

- Added Rust form-priority and advance-label policy with behavior tests.
- Added companion and full WASM adapters with direct adapter coverage.
- Split browser-only DOM mechanics into a focused TypeScript owner.
- Reduced `password-forms.ts` and the companion WASM root below 750 lines.
- Added a headless UI demo for separator-free login advance controls.

## Implementation problems

- Review found that compact and variably spaced login labels were not fully
  preserved. Rust normalization and focused tests now cover those forms.
- Review identified that the policy needed the full Nook WASM bridge as well
  as the companion bridge. The same portable owner now feeds both clients.
- The local GitHub watcher encountered transient certificate errors while the
  hosted workflows continued successfully; direct status refreshes confirmed
  the unchanged exact-head runs.

## Decisions

- Portable authentication classification and ranking belong in Rust for reuse
  by future clients.
- DOM traversal, rendering visibility, native event dispatch, focus, and form
  submission remain browser TypeScript responsibilities.
- Both WASM surfaces expose the same Rust policy so browser entry points do not
  recreate domain decisions.

## Validation

- Focused hosted preflight, Rust, web checks, and web tests passed in run
  31553310923.
- Complete exact-head validation run 31554093845 passed every required job.
- `task pr:ready PR=986` passed at head
  `f0683ab6b588d0ef4b342719a2897ab5cc89bf22`.
- PR 986 squash-merged as
  `a897828e53aa04b2a4eaf44fada6c15c63aa4801`.

## Remaining work

- Continue decomposing remaining authored files above 750 lines.
- Continue auditing TypeScript for portable policy that belongs in Rust.
