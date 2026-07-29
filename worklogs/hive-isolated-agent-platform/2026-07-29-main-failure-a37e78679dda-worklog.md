---
title: Main browser repair blocked by formatter environment
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-a37e78679dda994c3a211bf67a89c041a0705b78.md
plan: plans/hive-isolated-agent-platform/2026-07-29-main-failure-a37e78679dda.md
nook_pr: null
status: blocked
started_at: 2026-07-29T06:12:00Z
finished_at: 2026-07-29T06:24:00Z
agent: codex
---

# Work summary

## Outcome

The repair could not be published because the required repository formatting
command cannot execute in this worker environment.

## Progress

- Reviewed the recorded Main run and identified the failed web and extension
  browser jobs.
- Traced the web failure to an enrollment-label assertion that still expects a
  scalar although the core contract serializes an explicit labeled state.
- Prepared a focused browser regression assertion and Main browser-diagnostic
  retention wiring.

## Implementation problems

- `task format` invokes the sealed guest formatter, which runs `cargo fmt`.
  Cargo is not installed in the supplied worker, so formatting exits before any
  commit or pull request can be created.

## Decisions

- Do not bypass the required formatting gate or publish an unformatted repair.
- Retain mounted Playwright output for both Main browser jobs to make a future
  browser failure diagnosable from its workflow artifacts.

## Validation

- Reviewed Main run 30424807396 and its failed job evidence.
- `task format` failed before formatting because Cargo is unavailable in the
  sealed guest.
- `git diff --check` passed for the prepared scoped changes.

## Remaining work

- Provide a worker image with Cargo/rustfmt, then run `task format`, commit the
  prepared repair, create the labeled PR, run full exact-head validation, merge,
  verify Main, and publish delivery statistics.
