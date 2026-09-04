---
title: Enforce 90 percent coverage for every Rust crate
status: blocked
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-floor
created_at: 2026-09-04T01:04:28Z
updated_at: 2026-09-04T08:55:30Z
source_issues: []
related_prs: [1319]
depends_on: []
---

# Enforce 90 percent coverage for every Rust crate

## Context

The repository reported one aggregate Rust coverage percentage for part of the platform workspace. That aggregate could hide package-level deficits, while other first-party Rust packages had no threshold at all. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Every testable first-party Rust crate independently satisfies a 90 percent line-coverage floor in the trusted hosted path, and every non-enforced Rust manifest is explicitly classified.

## Scope

- Enforce separate coverage thresholds for platform, WASM adapter, Minds, and preflight crates.
- Correct coverage metadata, base-change classification, and focused infrastructure contracts.
- Add behavior-focused Rust tests only where hosted measurements identify a deficit.
- Explicitly exclude the non-testable fuzz harness and vendored third-party crate.
- Exclude product behavior changes, threshold reductions, local Rust builds, and additional coverage systems.

## Acceptance criteria

- [x] Every Rust manifest is registered as independently enforced or explicitly excluded with a reason.
- [ ] Every enforced crate reports at least 90 percent line coverage without aggregate masking.
- [ ] Added tests assert meaningful behavior at the owning Rust boundary.
- [ ] Exact-head repository validation and readiness pass before squash merge.
- [ ] The merged pull request and hosted evidence are linked from the completion worklog.

## Progress

- Pull request [#1319](https://github.com/meta-secret/nook/pull/1319) adds an exhaustive registry, explicit fuzz and vendor exclusions, independent hosted gates, corrected base-change classification, and one canonical preflight source root.
- Hosted run [33854626271](https://github.com/meta-secret/nook/actions/runs/33854626271) passed every platform crate gate and passed preflight at 92.44 percent line coverage.
- The same run measured Hive at 48.46 percent and Lace at 68.75 percent. Those honest deficits now prevent the Minds gate from passing.

## Findings and decisions

- The old preflight container source path was replaced with the canonical repository path, while Cargo output was isolated outside the copied source tree.
- Hive's environment-backed Neo4j integration test exits before exercising behavior inside the coverage stage because the service-backed execution occurs later. Instrumenting that existing suite is necessary but insufficient to close Hive's remaining deficit.
- Behavior-focused Hive and Lace coverage is estimated to require another 2,730 to 3,950 authored lines. Together with the current 312 additions, that exceeds the approved one-pull-request limit of 2,000 additions.
- Work is blocked on an explicit delivery-scope decision. The 90 percent threshold, package inventory, and behavior-test standard will not be weakened to fit the current limit.

## References

- [Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Superseding task plan](https://github.com/meta-secret/nook-workbench/blob/25eed34e186b8a4b65a0d5bfdf9bb635aa2d42b0/plans/unplanned/20260904T012700Z-rust-crate-coverage-floor-superseding.md)
