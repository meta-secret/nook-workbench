---
title: Raise every testable Rust crate to 90 percent coverage
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-90
created_at: 2026-09-04T21:49:30Z
updated_at: 2026-09-04T22:00:46Z
source_issues: []
related_prs: []
depends_on: [issues/unplanned/rust-crate-coverage-floor.md]
---

# Raise every testable Rust crate to 90 percent coverage

## Context

Pull request 1319 established exhaustive independent coverage gates at measured current floors. The requested successor must raise every remaining crate to 90 percent without exclusions, aggregate masking, assertion-free filler, or coverage-ignore annotations. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

The first authorized iterative slice raises Lace from 86.48 percent to an independently enforced 90 percent hosted line-coverage floor using behavior-focused tests. Later crates receive fresh focused plans only after this pull request merges.

## Scope

- Add behavior-focused retry and dependency-chain tests for Lace.
- Raise the Lace registry floor only after hosted measurement proves at least 90 percent.
- Preserve the `nook-fuzz` non-testable harness and vendored `arrayref` as the only explicit exclusions.
- Exclude other crate floors, product behavior changes, aggregate masking, local Rust builds, and any new coverage exemption from this slice.

## Acceptance criteria

- [ ] Lace independently reaches at least 90 percent line coverage.
- [ ] Added tests assert meaningful retry or dependency-chain behavior and do not exist only to execute lines.
- [ ] The Lace floor is raised from 75 percent to 90 percent only with matching hosted evidence.
- [ ] One Nook pull request stays at or below 2,000 authored additions and passes exact-head hosted validation, review, readiness, and merge.

## Progress

- Merged exact-head reports measure `nook-wasm` at 51.42 percent across 229 declared tests and `nook-companion-wasm` at 27.55 percent across eight tests.
- Hive measures 73.73 percent, Lace 86.48 percent, and authenticator-domain 87.93 percent.
- No successor branch, implementation commit, or pull request was created because admission failed the repository size constraint before implementation.
- The user explicitly authorized an iterative pull-request sequence on 2026-09-04. The first independently deliverable slice is Lace because only twelve additional production lines need coverage.

## Findings and decisions

- Reaching 90 percent requires at least 10,769 newly executed `nook-wasm` lines, 807 `nook-companion-wasm` lines, 1,514 Hive lines, 12 Lace lines, and three authenticator-domain lines: 13,105 production lines in total.
- The same reports require coverage of roughly 2,330 additional currently unexecuted functions across the five deficit crates.
- A behavior-test implementation is estimated at 4,500 to 7,500 authored additions. The repository permits at most 2,000 additions and prohibits automatic splitting, stacking, or a size-driven successor sequence.
- Do not create a nominal pull request, weaken a floor, or add exclusions to manufacture compliance. A new explicit delivery-shape decision is required before implementation can start.
- The iterative authorization resolves the delivery-shape blocker. Each crate slice receives its own one-PR plan and must merge before the next slice begins.

## References

- [Merged Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Budget assessment plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T214930Z-rust-crate-coverage-90-budget.md)
- [Blocked assessment worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T214930Z-rust-crate-coverage-90-blocked.md)
- [Lace 90 percent slice plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T220046Z-lace-coverage-90.md)
