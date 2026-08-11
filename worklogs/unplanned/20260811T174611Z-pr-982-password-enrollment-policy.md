---
title: Move password enrollment policy to portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-11T08-38-14Z-lower-source-line-limit-continuation.md
nook_pr: 982
status: completed
started_at: 2026-08-11T16:28:08Z
finished_at: 2026-08-11T17:46:11Z
agent: codex
---

# Work summary

## Outcome

Merged the password-enrollment portability and source-size slice. Rust now
owns shared provider selection and the decision to flush a shared-storage
grant. Typed WASM exports expose those decisions to the browser. TypeScript
retains OAuth state projection, provider object lookup, storage I/O, and UI
lifecycle orchestration. The enrollment issuance ceremony moved into its own
focused flow owner, bringing every affected file below 750 lines.

## Progress

- Added Rust provider-selection policy with behavior tests for provider preset,
  usable credential, and exact shared-target matching.
- Added Rust grant-flush policy with behavior tests for granted, manual,
  unsupported, and missing-credential outcomes.
- Exposed both decisions through typed WASM adapters and replaced the duplicate
  TypeScript branches with those portable decisions.
- Split password-enrollment issuance from join and connection orchestration.
- Added a Playwright demo that records the password-enrollment link flow.

## Implementation problems

- Strict all-target Clippy rejected a test-only `expect`; the behavior test now
  returns an explicit error instead of panicking.
- The first complete run correctly rejected the UI-facing shared TypeScript
  change because no demo spec was present. A focused enrollment demo was added,
  then the complete suite passed at the corrected exact head.
- Loom's demo contract compares the base commit with `HEAD`, so the new demo
  became visible only after its isolated correction commit. The mandatory
  pre-push gate then passed before push.

## Decisions

- Keep reusable provider and grant policy in Rust for future non-browser
  clients without adding any mobile project, API, or scaffold in this slice.
- Keep browser-owned OAuth observations and storage effects in TypeScript.
- Separate enrollment issuance from join/connect ceremony by responsibility,
  not by arbitrary file numbering or test extraction.

## Validation

- Host-applied format and Loom pre-push checks passed before both pushes.
- Focused hosted preflight, Rust, WASM, web checks, and tests passed in run
  `31515073645` on the initial implementation head.
- Complete exact-head run `31518261162` passed native Rust, WASM, WASM Node,
  web verification, deterministic Rust, Kani, Dylint, dependency policy,
  coverage, preview, and the recorded password-enrollment demo on
  `c5402851fec0b0fe1e98ed47755f6899f0ba9fde`.
- The review audit found no submitted reviews, actionable comments, or review
  threads. The readiness audit reported `ready: true` against current Main.
- [Nook PR 982](https://github.com/meta-secret/nook/pull/982) squash-merged as
  `ad654755fc3e61740c71f1b7d770e5cc009d8c57` from the validated head.

## Remaining work

- Continue decomposing authored files above 750 lines by focused ownership.
- Move import-format WASM bindings from the oversized secrets manager into the
  existing secret-import owner.
- Lower scanner and guidance thresholds only after the violation count is zero.
