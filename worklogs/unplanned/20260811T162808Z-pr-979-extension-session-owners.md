---
title: Refactor extension session owners below 750 lines
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-11T08-38-14Z-lower-source-line-limit-continuation.md
nook_pr: 979
status: completed
started_at: 2026-08-11T08:38:14Z
finished_at: 2026-08-11T16:28:08Z
agent: codex
---

# Work summary

## Outcome

Merged the extension-session source-size batch. Rust protocol requests, login
selection, and queueing now have focused domain owners. TypeScript offscreen
lifecycle, vault operations, website passkey operations, and authenticator
recovery handling now have focused browser-facing owners. Every affected
source file is below 750 lines.

## Progress

- Decomposed the Rust extension session protocol by request, login-picker, and
  queue responsibility while retaining behavior tests with their owners.
- Decomposed the offscreen session facade into lifecycle, vault, website
  passkey, and operation coordination owners.
- Added direct isolated tests for extracted vault and website-passkey behavior.
- Isolated shared provider-type constants from the broad WASM-aware provider
  adapter so extension tests can consume vocabulary without loading a browser
  runtime dependency.

## Implementation problems

- Review found implicit response and dependency boundaries after the initial
  split. Closed unions, concrete fixture state, and direct dependency entry
  points replaced those ambiguities.
- Main advanced with an authenticator recovery-code repair. The recovery
  handler was integrated into the new operation owner rather than restoring
  the removed session monolith.
- A shared provider constant initially came from a module that imports the WASM
  runtime. The isolated extension test rejected that dependency leak, so the
  narrow provider vocabulary received its own module.
- The local readiness container twice failed GitHub API access because Node did
  not trust the local root CA. The same exact-head audit passed with Node system
  CA support; no product or validation result was bypassed.

## Decisions

- Keep protocol decoding and response policy in Rust while browser lifecycle
  and extension API orchestration remain in TypeScript.
- Keep provider string vocabulary in a dependency-light typed module; broad
  provider adapters may re-export it for compatibility.
- Integrate current-Main recovery behavior in the extracted operation owner
  instead of growing the lifecycle facade again.

## Validation

- Host-applied Loom pre-push checks passed before every pushed correction.
- Focused hosted Rust, WASM, web, extension-test, and source-architecture
  validation passed through the delivery sequence.
- Complete exact-head run `31511119236` passed native Rust, WASM, WASM Node,
  web verification, deterministic Rust, Kani, Dylint, dependency policy,
  coverage, preview, and the headless demo on
  `7dfe1ada2c89d053ab2b9f8daf3ab623979b3905`.
- Every actionable review thread received a targeted visible reply and was
  resolved.
- The exact-head readiness audit reported `ready: true` against current Main.
- [Nook PR 979](https://github.com/meta-secret/nook/pull/979) squash-merged as
  `a26a6828d7c5c420ed98fa5194ab1c68598dd95f` from the validated head.

## Remaining work

- Continue decomposing authored files above 750 lines by focused ownership.
- Move portable password-enrollment provider-selection and grant-flush policy
  from TypeScript into Rust while retaining browser orchestration in
  TypeScript.
- Lower scanner and guidance thresholds only after the violation count is zero.
