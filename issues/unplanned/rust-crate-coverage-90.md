---
title: Raise every testable Rust crate to 90 percent coverage
status: blocked
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-90
created_at: 2026-09-04T21:49:30Z
updated_at: 2026-09-04T21:49:30Z
source_issues: []
related_prs: []
depends_on: [issues/unplanned/rust-crate-coverage-floor.md]
---

# Raise every testable Rust crate to 90 percent coverage

## Context

Pull request 1319 established exhaustive independent coverage gates at measured current floors. The requested successor must raise every remaining crate to 90 percent without exclusions, aggregate masking, assertion-free filler, or coverage-ignore annotations. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Every testable first-party Rust crate independently passes a 90 percent hosted line-coverage floor using behavior-focused tests.

## Scope

- Add behavior-focused tests for `nook-wasm`, `nook-companion-wasm`, Hive, Lace, and authenticator-domain.
- Raise only those registered floors after hosted measurements prove at least 90 percent.
- Preserve the `nook-fuzz` non-testable harness and vendored `arrayref` as the only explicit exclusions.
- Exclude product behavior changes, aggregate masking, local Rust or WASM builds, and any new coverage exemption.

## Acceptance criteria

- [ ] `nook-wasm`, including its native and browser suites, independently reaches at least 90 percent line coverage.
- [ ] `nook-companion-wasm`, Hive, Lace, and authenticator-domain independently reach at least 90 percent line coverage.
- [ ] Added tests assert meaningful public or domain behavior and do not exist only to execute lines.
- [ ] One Nook pull request stays at or below 2,000 authored additions and passes exact-head hosted validation, review, readiness, and merge.

## Progress

- Merged exact-head reports measure `nook-wasm` at 51.42 percent across 229 declared tests and `nook-companion-wasm` at 27.55 percent across eight tests.
- Hive measures 73.73 percent, Lace 86.48 percent, and authenticator-domain 87.93 percent.
- No successor branch, implementation commit, or pull request was created because admission failed the repository size constraint before implementation.

## Findings and decisions

- Reaching 90 percent requires at least 10,769 newly executed `nook-wasm` lines, 807 `nook-companion-wasm` lines, 1,514 Hive lines, 12 Lace lines, and three authenticator-domain lines: 13,105 production lines in total.
- The same reports require coverage of roughly 2,330 additional currently unexecuted functions across the five deficit crates.
- A behavior-test implementation is estimated at 4,500 to 7,500 authored additions. The repository permits at most 2,000 additions and prohibits automatic splitting, stacking, or a size-driven successor sequence.
- Do not create a nominal pull request, weaken a floor, or add exclusions to manufacture compliance. A new explicit delivery-shape decision is required before implementation can start.

## References

- [Merged Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Budget assessment plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T214930Z-rust-crate-coverage-90-budget.md)
- [Blocked assessment worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T214930Z-rust-crate-coverage-90-blocked.md)
