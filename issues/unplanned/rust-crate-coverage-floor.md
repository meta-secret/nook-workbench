---
title: Enforce 90 percent coverage for every Rust crate
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-floor
created_at: 2026-09-04T01:04:28Z
updated_at: 2026-09-04T01:04:28Z
source_issues: []
related_prs: []
depends_on: []
---

# Enforce 90 percent coverage for every Rust crate

## Context

The repository currently reports one aggregate Rust coverage percentage for part of the platform workspace. That aggregate can hide package-level deficits, while other first-party Rust packages have no threshold at all. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Every testable first-party Rust crate independently satisfies a 90 percent line-coverage floor in the trusted hosted path, and every non-enforced Rust manifest is explicitly classified.

## Scope

- Enforce separate coverage thresholds for platform, WASM adapter, Minds, and preflight crates.
- Correct coverage metadata, base-change classification, and focused infrastructure contracts.
- Add behavior-focused Rust tests only where hosted measurements identify a deficit.
- Explicitly exclude the non-testable fuzz harness and vendored third-party crate.
- Exclude product behavior changes, threshold reductions, local Rust builds, and additional coverage systems.

## Acceptance criteria

- [ ] Every Rust manifest is registered as independently enforced or explicitly excluded with a reason.
- [ ] Every enforced crate reports at least 90 percent line coverage without aggregate masking.
- [ ] Added tests assert meaningful behavior at the owning Rust boundary.
- [ ] Exact-head repository validation and readiness pass before squash merge.
- [ ] The merged pull request and hosted evidence are linked from the completion worklog.

## Progress

- Read-only SRE and Development Core audits identified fourteen Rust packages and the aggregate-gate defect; implementation has not started.

## Findings and decisions

- Seven platform packages currently share one aggregate floor, so none is independently guaranteed at 90 percent.
- The two WASM adapters, Hive, Lace, and preflight currently have no coverage threshold.
- The fuzz harness has no test target and vendored code remains third-party; both require explicit exclusion rather than silent omission.

## References

- [Nook repository](https://github.com/meta-secret/nook)
