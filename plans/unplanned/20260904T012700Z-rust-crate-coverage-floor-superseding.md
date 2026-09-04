---
title: Enforce 90 percent coverage for every Rust crate
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-floor.md
started_at: 2026-09-04T01:27:00Z
agent: codex
gizmo_id: rust-crate-coverage-floor
supersedes: plans/unplanned/20260904T010300Z-rust-crate-coverage-floor.md
---

# Task plan

## Interpreted request

Make Rust coverage enforcement complete and honest across the repository: every testable first-party crate must independently satisfy a 90 percent line floor, and focused behavior tests must close any deficits exposed by the new gates.

## Requirements

- Inventory every Rust package across the platform workspace, Minds workspace, standalone preflight tool, fuzz harness, and vendored sources.
- Replace the current multi-package aggregate check with independent 90 percent line thresholds so one package cannot mask another.
- Add missing coverage execution for the two WASM adapters, Hive, Lace, and preflight while preserving the existing trusted hosted execution path.
- Correct stale coverage metadata and base-change classification for every enforced package.
- Use one canonical repository-root layout for the preflight build and repository-inspection tests instead of maintaining a detached crate build root.
- Add behavior-focused Rust tests for each package reported below the floor by hosted coverage.
- Keep coverage artifacts and pull-request reporting accurate for the exact pushed head.
- Complete one focused pull request through hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Constraints and exclusions

- Do not run Rust compilation, Rust tests, WASM compilation, or product coverage locally; use the repository-owned hosted path.
- Treat `nook-fuzz` as an explicit fuzz-harness exclusion because its only binary is intentionally not a test target.
- Treat vendored `arrayref` as an explicit third-party exclusion rather than modifying upstream code or silently omitting it.
- Do not weaken the 90 percent floor, preserve the aggregate-only loophole, add fallback behavior, or introduce a second coverage system.
- Do not retain or add a split-root preflight container layout.
- Keep every authored source file within the repository size limit and keep total authored additions below 2,000.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-floor
- Estimated authored changed lines: 1750
- Owning modules, packages, or layers: Rust coverage Taskfiles and Docker stages, canonical preflight container root, coverage floor metadata and preflight contracts, nine platform crates, Hive, Lace, and nook-preflight
- Ownership units:
1. Capability: Independently enforce and report a 90 percent line floor for every testable first-party Rust crate, explicitly classify exclusions, and keep preflight build and repository inspection under one canonical root; Gizmo ID: rust-crate-coverage-floor; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused infrastructure contracts prove one preflight root and hosted coverage reports a separate successful threshold for every enforced crate
2. Capability: Add behavior-focused tests for platform crates that hosted coverage reports below 90 percent; Gizmo ID: rust-crate-coverage-floor; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted per-crate platform coverage passes at or above 90 percent with focused Rust behavior tests
3. Capability: Add behavior-focused tests for Hive and Lace that hosted coverage reports below 90 percent; Gizmo ID: rust-crate-coverage-floor; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted per-crate Minds coverage passes at or above 90 percent with focused Rust behavior tests
4. Capability: Coordinate the shared branch, exact-head validation, review, squash merge, and lifecycle records; Gizmo ID: rust-crate-coverage-floor; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: One exact-head pull request passes repository validation and readiness, is squash-merged, and has linked Workbench completion evidence
- Public or cross-module interfaces: Per-crate coverage commands, coverage floor metadata, base-change classification, and hosted coverage artifacts and reporting
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1750
- Current PR slice and acceptance evidence: Enforce complete per-crate Rust coverage and close measured deficits; Acceptance evidence: focused infrastructure contracts, separate hosted coverage results at or above 90 percent for every enforced crate, exact-head review, repository validation, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-floor; Gizmo name: Complete Rust crate coverage floor; Predecessor Gizmo ID: None; Enforce complete per-crate Rust coverage and close measured deficits; Estimated authored changed lines: 1750; Acceptance evidence: focused infrastructure contracts, separate hosted coverage results at or above 90 percent for every enforced crate, exact-head review, repository validation, and readiness

## Initial plan

1. Add the smallest coverage configuration and contract changes needed to enumerate every crate, enforce thresholds independently, use one canonical preflight root, and expose all deficits in one hosted run.
2. Push the infrastructure head and use hosted Rust coverage to obtain exact per-crate measurements.
3. Route measured platform deficits to Development Core and Minds deficits to AI, adding only behavior-focused tests needed to reach the floor.
4. Re-run exact-head hosted coverage and repository validation, resolve owned findings, complete readiness, squash-merge, and publish the worklog.

## Completion evidence

- The repository has an exhaustive first-party Rust crate registry with explicit fuzz and vendor exclusions.
- Every enforced crate reports at least 90 percent line coverage independently in hosted validation.
- Added tests exercise behavior rather than padding coverage with unreachable or assertion-free cases.
- The final pull-request head passes repository checks, exact-head review, and readiness before squash merge.
- Public Workbench plan and completion records link the delivered pull request and validation evidence.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data, unfiltered execution output, local path, username, environment value, internal address, or unnecessary infrastructure detail.
