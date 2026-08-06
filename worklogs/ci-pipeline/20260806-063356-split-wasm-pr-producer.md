---
title: Drop PR WASM artifact polling
feature: ci-pipeline
issue: ""
plan: plans/ci-pipeline/20260806-042548-split-wasm-pr-producer.md
nook_pr: 930
status: completed
started_at: 2026-08-06T04:25:48Z
finished_at: 2026-08-06T06:33:50Z
agent: cursor
---

# Work summary

## Outcome

Merged PR 930. PR CI no longer polls for the WASM package. Web verification starts through job needs after the build handoff, Node tests run beside it, and preview deploy waits on both.

## Progress

- Split WASM build and Node tests into separate PR jobs.
- Replaced the Verify poll loops with `needs` plus `download-artifact`.
- Added a host dist handoff and pinned-wrangler preview deploy path.
- Updated handoff promotion, hosted delivery contracts, and cortex CI docs.

## Implementation problems

- Host preview deploy initially lacked Task and had the wrong dist restore root.
- Background deploy PIDs were captured through command substitution, so `wait` failed.
- Fixed by calling the deploy script directly, restoring under `nook-app/nook-web`, and assigning `$!` in the parent shell.

## Decisions

- Keep Node tests off the build runner so web can start from the uploaded package.
- Keep preview as the required `Verify and preview` check name.
- Deploy from host dist instead of transferring the sealed web image.

## Validation

- Remote `preflight` passed on the merge head.
- Exact-head PR run https://github.com/meta-secret/nook/actions/runs/31077065121 succeeded.
- `task pr:ready PR=930` reported ready before squash merge.

## Remaining work

- None.
