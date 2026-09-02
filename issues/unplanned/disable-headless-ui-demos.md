---
title: Disable headless UI demos in GitHub Actions
status: done
priority: p2
automation: manual
owner: codex
gizmo_id: disable-headless-ui-demos
created_at: 2026-09-02T04:25:35Z
updated_at: 2026-09-02T07:03:42Z
source_issues: []
related_prs: [1287]
depends_on: []
---

# Disable headless UI demos in GitHub Actions

## Context

The retained headless UI-demo lanes add recurring pull-request latency without
serving the current review workflow. This focused repair belongs to
[unplanned engineering repairs](README.md).

## Outcome

GitHub Actions skips headless UI-demo execution and its trusted publishing
jobs while retaining their workflow bodies for a later re-enable.

## Scope

- Disable the PR and Main UI-demo jobs.
- Keep the PR preview gate green when the intentionally disabled demo job skips.
- Disable the trusted UI-demo publish and close jobs.
- Exclude demo scripts, specs, task definitions, and product behavior.

## Acceptance criteria

- [x] PR and Main workflow jobs cannot execute headless UI demos.
- [x] Trusted UI-demo publishing jobs remain present but cannot execute.
- [x] Rust, WASM, Node, web, preview, and browser-regression gates retain their existing requirements.
- [x] Workflow syntax, repository topology checks, exact-head validation, and readiness pass.

## Progress

- 2026-09-02: Started the bounded workflow-only repair.
- 2026-09-02: [Nook PR 1287](https://github.com/meta-secret/nook/pull/1287)
  passed exact-head validation and readiness, then squash-merged as
  `e68921b67987162af5693506b1806a08ea00546d`.
- 2026-09-02: Published the post-merge
  [agent statistics](https://github.com/meta-secret/nook-workbench/blob/main/stats/ai-agent/1287.yaml).

## Findings and decisions

- Preserve the dormant implementation rather than deleting demo tasks, scripts, or specifications.
- Treat an intentionally skipped demo job as success only in the PR aggregation step; retain fail-closed handling for every non-demo dependency.

## References

- [Nook repository](https://github.com/meta-secret/nook)
- [Superseding delivery plan](../../plans/unplanned/20260902T045112Z-disable-headless-ui-demos-superseding.md)
- [Completion worklog](../../worklogs/unplanned/20260902T070342Z-pr-1287-disable-headless-ui-demos.md)
