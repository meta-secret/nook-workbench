---
title: Restore failed Main verification for 9c0c426c3398
status: completed
priority: p1
automation: hive
owner: unassigned
created_at: 2026-08-07T04:39:16Z
updated_at: 2026-08-17T03:16:00Z
source_issues: []
related_prs: [937, 940]
depends_on: []
---

# Restore failed Main verification for 9c0c426c3398

## Context

The trusted Main workflow failed after a push to the default branch.

## Outcome

The development deployment verification was restored by [PR #940](https://github.com/meta-secret/nook/pull/940).

## Acceptance criteria

- [x] The failure was diagnosed and covered by cache-isolation regression tests.
- [x] The repair passed repository-owned checks and the resulting Main browser suites.
- [x] The repair was squash-merged and Main verification completed successfully.

## Progress

<!-- main-run:31146982353:attempt:1 -->
- 2026-08-07T04:39:16Z: Main run [31146982353 attempt 1](https://github.com/meta-secret/nook/actions/runs/31146982353)
  failed for `9c0c426c33986f23e4bffe3f9bcf36244885d3bc`. Failed jobs: Deploy development.
- 2026-08-07T17:00:22Z: [PR #940](https://github.com/meta-secret/nook/pull/940) was squash-merged.
- 2026-08-07T17:34:55Z: Replacement Main run [31202963922](https://github.com/meta-secret/nook/actions/runs/31202963922)
  completed successfully, including development deployment and browser suites.

## Findings and decisions

- The deployment build reached an uncached web verification path after a cache clear override.
- PR #940 removed empty cache clears and keyed isolated BuildKit cache writes by commit SHA.
- The PR added focused cache-contract regression coverage.
- The delivered PR carries `ci:full-e2e` because the regression was observed on Main.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/31146982353)
- [Repair PR #940](https://github.com/meta-secret/nook/pull/940)
- [Successful replacement Main run](https://github.com/meta-secret/nook/actions/runs/31202963922)
