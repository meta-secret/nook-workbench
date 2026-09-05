---
title: Raise every testable Rust crate to 90 percent coverage
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-90
created_at: 2026-09-04T21:49:30Z
updated_at: 2026-09-05T02:33:06Z
source_issues: []
related_prs: [1349]
depends_on: [issues/unplanned/rust-crate-coverage-floor.md]
---

# Raise every testable Rust crate to 90 percent coverage

## Context

Pull request 1319 established exhaustive independent coverage gates at measured current floors. The requested successor must raise every remaining crate to 90 percent without exclusions, aggregate masking, assertion-free filler, or coverage-ignore annotations. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Lace removal merged in pull request 1349. The current slice raises authenticator-domain from 87 to 90 percent with focused wire-value tests. Subsequent crates receive fresh plans after each slice merges.

## Scope

- Add focused authenticator-domain wire-string, serialization, display, and period-value assertions.
- Raise only authenticator-domain to 90 percent with hosted proof before merge.
- Preserve the twelve-package inventory and previously merged browser timeout fix.
- Preserve the `nook-fuzz` non-testable harness and vendored `arrayref` as the only explicit exclusions.
- Exclude other crate floors, product behavior changes, aggregate masking, local Rust builds, and any new coverage exemption from this slice.

## Acceptance criteria

- [x] Lace source and all active consumers and build references are removed.
- [ ] Authenticator-domain independently measures at least 90 percent with a matching floor.
- [ ] The remaining package inventory is exhaustive and all other floors remain unchanged.
- [ ] One Nook pull request stays at or below 2,000 authored additions and passes exact-head hosted validation, review, readiness, and merge.

## Progress

- Pull request 1349 squash-merged as 5e2f75239728718825aad08ccd738dcf14ef9df7 after all exact-head checks and readiness passed. The next slice targets authenticator-domain.
- The user explicitly replaced Lace coverage with complete Lace removal on 2026-09-04. The prior coverage result remains historical evidence, not the current delivery target.
- Merged exact-head reports measure `nook-wasm` at 51.42 percent across 229 declared tests and `nook-companion-wasm` at 27.55 percent across eight tests.
- Hive measures 73.73 percent, Lace 86.48 percent, and authenticator-domain 87.93 percent.
- The initial admission assessment preceded implementation; the user explicitly authorized an iterative pull-request sequence on 2026-09-04, superseding that blocker.
- Pull request 1349 adds two Lace generator tests and raises its floor to 90 percent. Hosted coverage measured 94.49 percent; all checks passed on head f05d4c51d before Main advanced. The current merged-base head is undergoing fresh validation.
- The complete authored diff is 67 additions. Browser-runner failures were diagnosed as a 20-second whole-suite timeout, not an external ChromeDriver kill; both browser validation paths passed with the explicit 60-second limit.
- Pull request 1354 raises the authenticator-domain floor to 90 percent with 25 authored additions. Hosted coverage measured 96.09 percent, and its PR and Hive suites passed before the latest Main advancement required a fresh exact-head run.
- After Main pull request 1345, repository policy deterministically discovers `extension-lifecycle-routing.ts` as a generated-binding consumer that is absent from the exact module-expert catalog. The failed policy attempt is rooted in this one catalog invariant; eighteen additional Loom failures cascade from it. No current Nook repair pull request owns the omission.

## Findings and decisions

- Earlier budget estimates were planning hypotheses, not evidence that 90 percent is impossible. Instrumented line totals must not be described as exclusively production code without verifying the report's source classification.
- The user-authorized serial delivery shape permits focused iterations while preserving the 2,000-authored-addition limit per pull request.
- Do not weaken floors, add exclusions, or use assertion-free tests to manufacture compliance.
- The iterative authorization resolves the delivery-shape blocker. Each crate slice receives its own one-PR plan and must merge before the next slice begins.
- The module-expert catalog omission belongs to AI and must be repaired without weakening discovery or silently transferring unrelated Main ownership into the SRE coverage slice. Pull request 1354 cannot satisfy exact-head readiness until that Main invariant is restored.

## References

- [Merged Nook pull request #1319](https://github.com/meta-secret/nook/pull/1319)
- [Budget assessment plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T214930Z-rust-crate-coverage-90-budget.md)
- [Blocked assessment worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260904T214930Z-rust-crate-coverage-90-blocked.md)
- [Lace 90 percent slice plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/unplanned/20260904T220046Z-lace-coverage-90.md)
- [Superseding Lace removal plan](https://github.com/meta-secret/nook-workbench/blob/45aa7a762a91ad8e558bf116bd9b51a2d529e156/plans/unplanned/20260904T224807Z-remove-lace.md)
- [Authenticator-domain slice plan](https://github.com/meta-secret/nook-workbench/blob/8ee8c287bc6c363b36d7925484c047b08a167299/plans/unplanned/20260904T233702Z-authenticator-domain-90.md)
