---
title: Restore failed Main verification for 5a1acf37f0c3
status: done
priority: p1
automation: hive
owner: unassigned
created_at: 2026-07-31T10:29:26Z
updated_at: 2026-08-02T18:00:00Z
source_issues: []
related_prs: [891, 887]
depends_on: []
---

# Restore failed Main verification for 5a1acf37f0c3

## Context

Main run 30620621589 failed after PR #891. Retained artifacts identified a shared Companion WASM startup defect affecting both Extension e2e and the browser enrollment UI demo.

## Progress

<!-- main-run:30620621589:attempt:1 -->
- 2026-07-31T10:29:26Z: Main run [30620621589 attempt 1](https://github.com/meta-secret/nook/actions/runs/30620621589) failed for `5a1acf37f0c304f0eb8564e165cc4df1b413a89d`. Failed jobs: Extension e2e, UI demos.
- 2026-08-02T18:00:00Z: Confirmed merged PR [#887](https://github.com/meta-secret/nook/pull/887) supplies the root-cause fix and regression coverage; Main run [30653103828](https://github.com/meta-secret/nook/actions/runs/30653103828) passed Extension e2e and UI demos.

## Findings and decisions

- Content-script startup previously resolved companion WASM through an unsafe page/Node path. PR #887 loads bytes safely for packaged content scripts and Node tooling, and includes the regression coverage.
- The failed revision and workflow evidence are preserved by this incident record and its immutable Main statistics record. No duplicate repair PR was created after the root-cause fix had already squash-merged.

## Validation

- [Main 30653103828](https://github.com/meta-secret/nook/actions/runs/30653103828): all seven jobs passed, including Extension e2e and UI demos.
- [Main 30737806787](https://github.com/meta-secret/nook/actions/runs/30737806787): all seven jobs passed again on a later Main revision.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30620621589)
- [Root-cause fix PR #887](https://github.com/meta-secret/nook/pull/887)