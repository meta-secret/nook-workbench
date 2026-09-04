---
title: Enforce 90 percent coverage for every Rust crate
status: done
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-floor
created_at: 2026-09-04T01:04:28Z
updated_at: 2026-09-04T21:49:30Z
source_issues: []
related_prs: [1319]
depends_on: []
---

# Enforce 90 percent coverage for every Rust crate

## Context

The repository reported one aggregate Rust coverage percentage for part of the platform workspace. That aggregate could hide package-level deficits, while other first-party Rust packages had no threshold at all. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Every testable first-party Rust crate is independently coverage-gated in the trusted hosted path. Pull request 1319 establishes measured current floors, and a separate blocked successor record preserves the final 90 percent target without masking its test budget.

## Scope

- Enforce separate coverage thresholds for platform, WASM adapter, Minds, and preflight crates.
- Correct coverage metadata, base-change classification, and focused infrastructure contracts.
- Add behavior-focused Rust tests where hosted measurements identify a deficit.
- Explicitly exclude the non-testable fuzz harness and vendored third-party crate.
- Exclude product behavior changes, aggregate masking, local Rust builds, and additional coverage systems.

## Acceptance criteria

- [x] Every Rust manifest is registered as independently enforced or explicitly excluded with a reason.
- [x] Pull request 1319 enforces Hive at 60 percent, Lace at 75 percent, `nook-companion-wasm` at 18 percent, `nook-wasm` at 51 percent, authenticator-domain at 87 percent, and every other enforced crate at 90 percent.
- [x] Added tests assert meaningful behavior and clear the registered current floors with useful margin.
- [x] Exact-head repository validation and readiness passed before pull request 1319 was squash-merged.
- [x] The merged pull request and hosted evidence are linked from its completion worklog.
- [x] A separate successor record preserves the all-crates 90 percent target and its measured one-PR size blocker.

## Progress

- Pull request [#1319](https://github.com/meta-secret/nook/pull/1319) adds an exhaustive registry, explicit fuzz and vendor exclusions, independent hosted gates, corrected base-change classification, and one canonical preflight source root.
- Hosted run [33854626271](https://github.com/meta-secret/nook/actions/runs/33854626271) passed every platform crate gate and passed preflight at 92.44 percent line coverage.
- The same run measured Hive at 48.46 percent and Lace at 68.75 percent.
- The staged plan now implements the explicitly approved 60 percent Hive and 75 percent Lace floors in pull request 1319, followed by a separately planned 90 percent successor after merge.
- Pull request [#1319](https://github.com/meta-secret/nook/pull/1319) merged as `743239eb76133904d6e98fe7b7f016d7cbaf4d81` after exact-head validation and readiness succeeded.
- The merged coverage reports count 229 `nook-wasm` tests and measure 51.42 percent line coverage; `nook-companion-wasm` measures 27.55 percent from eight tests.

## Findings and decisions

- The old preflight container source path was replaced with the canonical repository path, while Cargo output was isolated outside the copied source tree.
- Hive's environment-backed Neo4j integration test exits before exercising behavior inside the coverage stage because the service-backed execution occurs later. Focused unit and protocol tests will provide the current PR's margin without pretending this closes the final 90 percent gap.
- The final 90 percent Hive and Lace work remains required and will not use coverage-ignore attributes, assertion-free filler, aggregate masking, or hidden exclusions.

## References

- [Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Current staged task plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T090312Z-rust-crate-coverage-floor-staged.md)
- [Prior blocked worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T085530Z-rust-crate-coverage-floor.md)
- [Completion worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T214550Z-pr-1319-rust-crate-coverage-floor.md)
- [Blocked 90 percent successor](https://github.com/meta-secret/nook-workbench/blob/main/issues/unplanned/rust-crate-coverage-90.md)
