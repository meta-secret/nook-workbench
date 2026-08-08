---
title: Block merge when required PR jobs failed
feature: unplanned
issue: none
pr: 945
started_at: 20260808T000651Z
finished_at: 20260808T002910Z
agent: cursor
plan: plans/unplanned/20260808T000651Z-block-merge-on-failed-required-pr-jobs.md
---

# Worklog

## Outcome

Merged https://github.com/meta-secret/nook/pull/945 as `d1c9e06987e6c8141768f021370a5ad7e522f5dd`.

## What changed

- `Verify and preview` now needs Native Rust verification.
- `pr:ready` audits required producer jobs on the latest exact-head PR run.
- Agents must not merge on a green Verify with a failed Native job.

## Validation

- Hosted preflight green after TypeScript ownership fixes.
- Exact-head PR validation green with all required jobs success.
- `pr:ready` reported requiredJobAudits success before merge.
