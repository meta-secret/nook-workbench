---
title: Disable headless UI demos in GitHub Actions
status: in_progress
priority: p2
automation: manual
owner: codex
gizmo_id: disable-headless-ui-demos
created_at: 2026-09-02T04:25:35Z
updated_at: 2026-09-02T04:25:35Z
source_issues: []
related_prs: []
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

- [ ] PR and Main workflow jobs cannot execute headless UI demos.
- [ ] Trusted UI-demo publishing jobs remain present but cannot execute.
- [ ] Rust, WASM, Node, web, preview, and browser-regression gates retain their existing requirements.
- [ ] Workflow syntax, repository topology checks, exact-head validation, and readiness pass.

## Progress

- 2026-09-02: Started the bounded workflow-only repair.

## Findings and decisions

- Preserve the dormant implementation rather than deleting demo tasks, scripts, or specifications.
- Treat an intentionally skipped demo job as success only in the PR aggregation step; retain fail-closed handling for every non-demo dependency.

## References

- [Nook repository](https://github.com/meta-secret/nook)
