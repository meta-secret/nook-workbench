---
title: Raise every testable Rust crate to 90 percent coverage
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-90
created_at: 2026-09-04T21:49:30Z
updated_at: 2026-09-05T05:01:32Z
source_issues: []
related_prs: [1349, 1354]
depends_on: [issues/unplanned/rust-crate-coverage-floor.md]
---

# Raise every testable Rust crate to 90 percent coverage

## Context

Pull request 1319 established exhaustive independent coverage gates at measured current floors. The requested successor must raise every remaining crate to 90 percent without exclusions, aggregate masking, assertion-free filler, or coverage-ignore annotations. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Lace removal merged in pull request 1349. Authenticator-domain reached its 90 percent floor in pull request 1354 with focused wire-value tests. The next remaining crate receives a fresh measured plan from the new Main baseline.

## Scope

- Add focused authenticator-domain wire-string, serialization, display, and period-value assertions.
- Raise only authenticator-domain to 90 percent with hosted proof before merge.
- Preserve the twelve-package inventory and previously merged browser timeout fix.
- Preserve the `nook-fuzz` non-testable harness and vendored `arrayref` as the only explicit exclusions.
- Exclude other crate floors, product behavior changes, aggregate masking, local Rust builds, and any new coverage exemption from this slice.

## Acceptance criteria

- [x] Lace source and all active consumers and build references are removed.
- [x] Authenticator-domain independently measures at least 90 percent with a matching floor.
- [x] The remaining package inventory is exhaustive and all other floors remain unchanged.
- [x] One Nook pull request stays at or below 2,000 authored additions and passes exact-head hosted validation, review, readiness, and merge.

## Progress

- Pull request 1349 squash-merged as 5e2f75239728718825aad08ccd738dcf14ef9df7 after all exact-head checks and readiness passed. The next slice targets authenticator-domain.
- The user explicitly replaced Lace coverage with complete Lace removal on 2026-09-04. The prior coverage result remains historical evidence, not the current delivery target.
- Merged exact-head reports measure `nook-wasm` at 51.42 percent across 229 declared tests and `nook-companion-wasm` at 27.55 percent across eight tests.
- Hive measures 73.73 percent, Lace 86.48 percent, and authenticator-domain 87.93 percent.
- The initial admission assessment preceded implementation; the user explicitly authorized an iterative pull-request sequence on 2026-09-04, superseding that blocker.
- The initial pull request 1349 coverage approach measured Lace at 94.49 percent, but the user superseded it with complete Lace removal. The final removal diff contained 67 authored additions and passed the browser paths after their whole-suite timeout was made explicit.
- During pull request 1354, Main pull request 1345 exposed a missing `extension-lifecycle-routing.ts` entry in exact module-expert discovery. The user authorized the minimal AI-owned catalog repair, which restored the fail-closed policy without transferring broader ownership.
- Pull request 1354 raised the authenticator-domain floor to 90 percent with 26 authored additions and squash-merged as `4157dfa45e00bbb4cabb8436e93ffb23a2f8b0d9`. Hosted coverage measured 96.09 percent; repository policy, PR, Hive, review resolution, and readiness passed on exact head `88dcf4f1bdc181cdf1e73c83ddb9e0be9cc4130d` after merging Main through `73965ffc87e70af6997948766a4005ef6c5907aa`.

## Findings and decisions

- Earlier budget estimates were planning hypotheses, not evidence that 90 percent is impossible. Instrumented line totals must not be described as exclusively production code without verifying the report's source classification.
- The user-authorized serial delivery shape permits focused iterations while preserving the 2,000-authored-addition limit per pull request.
- Do not weaken floors, add exclusions, or use assertion-free tests to manufacture compliance.
- The iterative authorization resolves the delivery-shape blocker. Each crate slice receives its own one-PR plan and must merge before the next slice begins.
- The user authorized the one-line AI-owned module-expert catalog repair inside pull request 1354. Exact discovery remained fail-closed and the repaired invariant passed hosted repository policy before merge.

## References

- [Merged Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Budget assessment plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T214930Z-rust-crate-coverage-90-budget.md)
- [Blocked assessment worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T214930Z-rust-crate-coverage-90-blocked.md)
- [Lace 90 percent slice plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T220046Z-lace-coverage-90.md)
- [Superseding Lace removal plan](https://github.com/meta-secret/nook-workbench/blob/45aa7a762a91ad8e558bf116bd9b51a2d529e156/plans/unplanned/20260904T224807Z-remove-lace.md)
- [Authenticator-domain slice plan](https://github.com/meta-secret/nook-workbench/blob/8ee8c287bc6c363b36d7925484c047b08a167299/plans/unplanned/20260904T233702Z-authenticator-domain-90.md)
- [Authenticator-domain completion worklog](../../worklogs/unplanned/20260905T050132Z-pr-1354-authenticator-domain-90.md)
