---
title: "PR 1287 disable headless UI demos"
feature: unplanned
issue: issues/unplanned/disable-headless-ui-demos.md
plan: plans/unplanned/20260902T045112Z-disable-headless-ui-demos-superseding.md
nook_pr: https://github.com/meta-secret/nook/pull/1287
status: completed
started_at: 2026-09-02T04:25:35Z
finished_at: 2026-09-02T07:03:42Z
agent: codex
---

# PR 1287 disable headless UI demos

## Outcome

[Nook PR 1287](https://github.com/meta-secret/nook/pull/1287) squash-merged the
GitHub Actions change as `e68921b67987162af5693506b1806a08ea00546d`.
PR, Main, and new trusted publishing lanes now skip headless UI demos while
the implementation remains available for a later re-enable.

## Progress

- Retained the complete demo jobs and trust predicates behind a shared static
  disablement contract.
- Kept cleanup active for previously published Linear demo issues.
- Preserved independent full-e2e browser-image production while normal PR
  validation avoids the demo-only image cost.
- Aligned executable preflight coverage and durable CI authority documents.

## Validation

- Exact-head PR run
  [33601101929](https://github.com/meta-secret/nook/actions/runs/33601101929)
  passed every required gate.
- The final run skipped `Headless UI demo` and the normal-validation browser
  image publication step while `Verify and preview` succeeded.
- Exact-head review completed cleanly with zero unresolved threads.
- `task pr:ready PR=1287` returned `ready: true` against the current Main base.

## Delivery observations

Review closed fail-open aggregation and stale-authority gaps before merge.
Three Main advances required refreshed exact-head validation; the published
[agent statistics](../../stats/ai-agent/1287.yaml) preserve those cycles.

## Remaining work

None for this repair. Demo scripts, specs, task definitions, and workflow
bodies remain intentionally dormant rather than deleted.
