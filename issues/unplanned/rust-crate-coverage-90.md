---
title: Raise every testable Rust crate to 90 percent coverage
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-90
created_at: 2026-09-04T21:49:30Z
updated_at: 2026-09-04T22:42:15Z
source_issues: []
related_prs: [1349]
depends_on: [issues/unplanned/rust-crate-coverage-floor.md]
---

# Raise every testable Rust crate to 90 percent coverage

## Context

Pull request 1319 established exhaustive independent coverage gates at measured current floors. The requested successor must raise every remaining crate to 90 percent without exclusions, aggregate masking, assertion-free filler, or coverage-ignore annotations. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

The first authorized iterative slice raises Lace from 86.48 percent to an independently enforced 90 percent hosted line-coverage floor using behavior-focused tests. Later crates receive fresh focused plans only after this pull request merges.

## Scope

- Add behavior-focused generator tests for nested contracts, retry settings, payload defaults, and invalid inputs in Lace.
- Configure an explicit 60-second instrumented browser-suite timeout and assert its policy contract after hosted failures proved the default 20-second limit insufficient.
- Raise the Lace registry floor only after hosted measurement proves at least 90 percent.
- Preserve the `nook-fuzz` non-testable harness and vendored `arrayref` as the only explicit exclusions.
- Exclude other crate floors, product behavior changes, aggregate masking, local Rust builds, and any new coverage exemption from this slice.

## Acceptance criteria

- [ ] Lace independently reaches at least 90 percent line coverage.
- [ ] Added tests assert meaningful generator output and error behavior and do not exist only to execute lines.
- [ ] The Lace floor is raised from 75 percent to 90 percent only with matching hosted evidence.
- [ ] One Nook pull request stays at or below 2,000 authored additions and passes exact-head hosted validation, review, readiness, and merge.

## Progress

- Merged exact-head reports measure `nook-wasm` at 51.42 percent across 229 declared tests and `nook-companion-wasm` at 27.55 percent across eight tests.
- Hive measures 73.73 percent, Lace 86.48 percent, and authenticator-domain 87.93 percent.
- The initial admission assessment preceded implementation; the user explicitly authorized an iterative pull-request sequence on 2026-09-04, superseding that blocker.
- Pull request 1349 adds two Lace generator tests and raises its floor to 90 percent. Hosted coverage measured 94.49 percent; all checks passed on head f05d4c51d before Main advanced. The current merged-base head is undergoing fresh validation.
- The complete authored diff is 67 additions. Browser-runner failures were diagnosed as a 20-second whole-suite timeout, not an external ChromeDriver kill; both browser validation paths passed with the explicit 60-second limit.

## Findings and decisions

- Earlier budget estimates were planning hypotheses, not evidence that 90 percent is impossible. Instrumented line totals must not be described as exclusively production code without verifying the report's source classification.
- The user-authorized serial delivery shape permits focused iterations while preserving the 2,000-authored-addition limit per pull request.
- Do not weaken floors, add exclusions, or use assertion-free tests to manufacture compliance.
- The iterative authorization resolves the delivery-shape blocker. Each crate slice receives its own one-PR plan and must merge before the next slice begins.

## References

- [Merged Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Budget assessment plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T214930Z-rust-crate-coverage-90-budget.md)
- [Blocked assessment worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T214930Z-rust-crate-coverage-90-blocked.md)
- [Lace 90 percent slice plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T220046Z-lace-coverage-90.md)
