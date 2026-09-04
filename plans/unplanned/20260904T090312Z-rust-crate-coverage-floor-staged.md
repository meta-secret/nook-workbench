---
title: Stage complete Rust crate coverage floors
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-floor.md
started_at: 2026-09-04T09:03:12Z
agent: codex
gizmo_id: rust-crate-coverage-floor
supersedes: plans/unplanned/20260904T012700Z-rust-crate-coverage-floor-superseding.md
---

# Task plan

## Interpreted request

Finish the current pull request with independently enforced interim floors of 60 percent for Hive and 75 percent for Lace, including focused tests that clear those floors comfortably. After this delivery closes, a separately planned successor will raise both crates to the final 90 percent target and add the remaining behavior tests.

## Requirements

- Preserve the exhaustive registry of twelve testable first-party crates and the explicit fuzz-harness and vendored-source exclusions.
- Keep every platform crate and preflight independently enforced at 90 percent.
- Set explicit package-specific interim floors of 60 percent for Hive and 75 percent for Lace in pull request 1319.
- Add behavior-focused Hive and Lace tests so the interim floors pass with useful margin.
- Validate, review, ready, and squash-merge pull request 1319 before starting the successor.
- Preserve the measured evidence and successor intent needed to plan the final 90 percent work from the merged main head.

## Constraints and exclusions

- Do not run Rust compilation, Rust tests, WASM compilation, or product coverage locally; use the trusted hosted path.
- Do not restore aggregate masking, silently omit a crate, use coverage-ignore attributes, add assertion-free filler, or weaken any platform or preflight threshold.
- Keep the canonical preflight source root and isolated Cargo target directory.
- Keep each pull request below the repository's 2,000-authored-addition limit. If the successor cannot honestly reach 90 percent within that limit, stop at the limit and report the measured blocker rather than manufacturing coverage.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-floor
- Estimated authored changed lines: 1100
- Owning modules, packages, or layers: Rust coverage Taskfiles and Docker stages, Hive and Lace behavior tests, Workbench delivery records
- Ownership units:
1. Capability: Configure explicit interim Hive and Lace floors while preserving the exhaustive independent coverage policy; Gizmo ID: rust-crate-coverage-floor; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted policy contracts and package-specific commands enforce Hive at 60 percent and Lace at 75 percent
2. Capability: Add focused Hive and Lace tests that clear the interim floors with useful margin; Gizmo ID: rust-crate-coverage-floor; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted per-package coverage passes above 60 percent for Hive and above 75 percent for Lace
3. Capability: Coordinate exact-head validation, review, merge, successor creation, and lifecycle records; Gizmo ID: rust-crate-coverage-floor; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Pull request 1319 merges before a successor starts from updated main
- Public or cross-module interfaces: Per-crate coverage thresholds, coverage reports, and hosted readiness evidence
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1100
- Current PR slice and acceptance evidence: Finish pull request 1319 with Hive at 60 percent and Lace at 75 percent; Acceptance evidence: hosted independent coverage gates pass and pull request readiness succeeds
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-floor; Gizmo name: Interim Minds coverage floors; Predecessor Gizmo ID: None; Finish pull request 1319 with Hive at 60 percent and Lace at 75 percent; Estimated authored changed lines: 1100; Acceptance evidence: hosted independent coverage gates pass and pull request readiness succeeds

## Initial plan

1. Change only the Hive and Lace threshold configuration and policy contracts to express the approved interim floors.
2. Add the smallest behavior-focused Hive and Lace tests needed to pass with useful margin.
3. Run focused deterministic checks locally where permitted, push the exact head, and use hosted coverage for Rust measurement.
4. Resolve owned review or validation failures, complete readiness, squash-merge pull request 1319, and publish its completion worklog.
5. Record the measured remaining gap so a separate successor plan can start from merged main and continue behavior-test coverage toward 90 percent.

## Completion evidence

- Pull request 1319 independently enforces every testable first-party Rust crate, with Hive at least 60 percent, Lace at least 75 percent, and all other enforced crates at least 90 percent.
- Added tests assert meaningful Hive and Lace behavior.
- Pull request 1319 passes exact-head hosted validation and readiness and is squash-merged.
- The completion record preserves the measured remaining gap and final 90 percent target for the separately planned successor.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data, unfiltered execution output, local path, username, environment value, internal address, or unnecessary infrastructure detail.
