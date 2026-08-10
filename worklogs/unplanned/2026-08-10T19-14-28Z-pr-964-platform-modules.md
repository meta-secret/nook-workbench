---
title: Refactor the first platform modules below 750 lines
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-10T16-34-48Z-lower-source-line-limit.md
nook_pr: 964
status: completed
started_at: 2026-08-10T16:34:48Z
finished_at: 2026-08-10T19:14:28Z
agent: codex
---

# Work summary

## Outcome

Merged the first source-size rollout batch. Fourteen oversized platform owners
were decomposed into focused production modules, and every touched or created
file is at or below 750 lines.

## Progress

- Split authenticator backup codes and file-attachment secret behavior.
- Split GitHub provider validation, device passkey observations, vault access
  diagnostics, vault application/device-mode policy, and vault-format modeling.
- Split WASM access, conflict, core, diagnostics, runtime, secret-data,
  Sentinel, and sync types.
- Split preflight Dockerfile-cache and TypeScript/Svelte analysis helpers.
- Moved focused Rust tests beside each extracted implementation and added direct
  passkey-observation merge coverage.

## Implementation problems

- The first preflight extraction misplaced a closing delimiter and then exposed
  a parent/child helper-visibility error. Both were corrected and verified by
  the focused hosted preflight task.
- Root formatting did not cover the standalone preflight crate. The crate was
  formatted explicitly; this ownership gap should receive mechanical coverage.
- Review found six focused Rust test groups still in parent modules. All were
  colocated before final validation and every targeted thread received a reply.

## Decisions

- Keep the executable ceiling at 1,000 during the stacked migration so each
  focused batch can merge independently.
- Extract by domain ownership, never by arbitrary line ranges or numbered files.
- Lower the scanner and guidance to 750 only after every violation is removed.

## Validation

- Focused hosted `preflight,rust:test` passed on exact head
  `8bffb399121b7ed3a2811d3469014f47b3121ce3`.
- Complete exact-head run 31422182358 passed native Rust, coverage, WASM build,
  WASM Node, web verification, preview, fuzz, dependency policy, Dylint, Kani,
  and deterministic Rust ecosystem gates.
- `task pr:ready PR=964` reported `ready: true` with zero unresolved threads.
- [Nook PR 964](https://github.com/meta-secret/nook/pull/964) squash-merged as
  `44fbcdcb23f13a1fd9ac3e11147c5dbc20a99e43`.

## Remaining work

- Decompose the remaining authored files above 750 lines in focused batches.
- Add standalone preflight formatting to the mechanical root formatter.
- Lower and contract-test the executable ceiling and canonical guidance after
  the violation inventory reaches zero.

