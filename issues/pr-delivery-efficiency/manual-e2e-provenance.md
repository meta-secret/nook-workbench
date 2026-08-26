---
title: Expose manual E2E pull-request provenance
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T07:55:00Z
updated_at: 2026-08-26T07:55:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/pr-delivery-efficiency/per-head-delivery-statistics.md
---

# Expose manual E2E pull-request provenance

## Context

The manually dispatched `E2E (PR)` workflow runs on its dispatch ref and
resolves the requested pull-request head inside the job. The Actions run API
therefore exposes neither the source pull request nor the checked-out head to
the statistics collector.

## Outcome

Every future manual E2E run exposes durable, API-readable source PR and exact
head evidence that the per-head statistics collector can associate without
time or commit-history heuristics.

## Scope

- Instrument the manual E2E workflow with durable source metadata.
- Collect the metadata and include the run in per-head Actions totals.
- Fail closed when an applicable instrumented run is incomplete or malformed.
- Preserve the existing manual suite choices and trust boundaries.
- Exclude changes to product browser behavior.

## Acceptance criteria

- [ ] A dispatched E2E run identifies its source PR and resolved full head SHA.
- [ ] Statistics associate the run with that exact delivery head.
- [ ] Stale or foreign dispatch evidence cannot be attributed to the PR.
- [ ] Workflow and collector contract tests pass on the exact head.

## Progress

- The need was isolated after the collector review circuit opened on PR 1116.

## Findings and decisions

- Branch-name filtering cannot discover these runs because the dispatch ref is
  independent of the checked-out PR head.
- Commit timestamps are not a reliable substitute for push-time provenance.
- This remains a required feature slice rather than optional future work.

## References

- [Feature](README.md)
- [Statistics issue](per-head-delivery-statistics.md)
- [Nook PR 1116](https://github.com/meta-secret/nook/pull/1116)
