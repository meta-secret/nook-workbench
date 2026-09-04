---
title: Enforce 90 percent coverage for every Rust crate
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-floor
created_at: 2026-09-04T01:04:28Z
updated_at: 2026-09-04T09:04:49Z
source_issues: []
related_prs: [1319]
depends_on: []
---

# Enforce 90 percent coverage for every Rust crate

## Context

The repository reported one aggregate Rust coverage percentage for part of the platform workspace. That aggregate could hide package-level deficits, while other first-party Rust packages had no threshold at all. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Every testable first-party Rust crate is independently coverage-gated in the trusted hosted path. Pull request 1319 establishes approved interim floors for the two measured Minds deficits; a separately planned successor will raise them to the final 90 percent target.

## Scope

- Enforce separate coverage thresholds for platform, WASM adapter, Minds, and preflight crates.
- Correct coverage metadata, base-change classification, and focused infrastructure contracts.
- Add behavior-focused Rust tests where hosted measurements identify a deficit.
- Explicitly exclude the non-testable fuzz harness and vendored third-party crate.
- Exclude product behavior changes, aggregate masking, local Rust builds, and additional coverage systems.

## Acceptance criteria

- [x] Every Rust manifest is registered as independently enforced or explicitly excluded with a reason.
- [ ] Pull request 1319 enforces Hive at 60 percent, Lace at 75 percent, and every other enforced crate at 90 percent.
- [ ] Added Hive and Lace tests assert meaningful behavior and clear the interim floors with useful margin.
- [ ] Exact-head repository validation and readiness pass before pull request 1319 is squash-merged.
- [ ] The merged pull request and hosted evidence are linked from its completion worklog.
- [ ] A separately planned successor starts from merged main and raises Hive and Lace toward the final 90 percent target.

## Progress

- Pull request [#1319](https://github.com/meta-secret/nook/pull/1319) adds an exhaustive registry, explicit fuzz and vendor exclusions, independent hosted gates, corrected base-change classification, and one canonical preflight source root.
- Hosted run [33854626271](https://github.com/meta-secret/nook/actions/runs/33854626271) passed every platform crate gate and passed preflight at 92.44 percent line coverage.
- The same run measured Hive at 48.46 percent and Lace at 68.75 percent.
- The staged plan now implements the explicitly approved 60 percent Hive and 75 percent Lace floors in pull request 1319, followed by a separately planned 90 percent successor after merge.

## Findings and decisions

- The old preflight container source path was replaced with the canonical repository path, while Cargo output was isolated outside the copied source tree.
- Hive's environment-backed Neo4j integration test exits before exercising behavior inside the coverage stage because the service-backed execution occurs later. Focused unit and protocol tests will provide the current PR's margin without pretending this closes the final 90 percent gap.
- The final 90 percent Hive and Lace work remains required and will not use coverage-ignore attributes, assertion-free filler, aggregate masking, or hidden exclusions.

## References

- [Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Current staged task plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T090312Z-rust-crate-coverage-floor-staged.md)
- [Prior blocked worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T085530Z-rust-crate-coverage-floor.md)
