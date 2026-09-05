---
title: Raise every testable Rust crate to 90 percent coverage
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-90
created_at: 2026-09-04T21:49:30Z
updated_at: 2026-09-05T07:53:11Z
source_issues: []
related_prs: [1349, 1354, 1367, 1369]
depends_on: [issues/unplanned/rust-crate-coverage-floor.md]
---

# Raise every testable Rust crate to 90 percent coverage

## Context

Pull request 1319 established exhaustive independent coverage gates at measured current floors. The requested successor must raise every remaining crate to 90 percent without exclusions, aggregate masking, assertion-free filler, or coverage-ignore annotations. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Lace removal merged in pull request 1349, authenticator-domain reached 90 percent in pull request 1354, and companion WASM reached an 88 percent floor in pull request 1369. The next slice targets the remaining 1.01 percentage-point `nook-companion-wasm` gap to 90 percent.

## Scope

- Add grouped success and rejection tests for all 16 companion response-decoding exports.
- Add behavior suites for uncovered persistence, outcome, pairing, OAuth, and vault-host wrappers.
- Measure under the current 75 percent floor, then raise only `nook-companion-wasm` to 90 percent after exact hosted proof.
- Preserve the twelve-package inventory and the previously merged browser timeout fix.
- Preserve the `nook-fuzz` non-testable harness and vendored `arrayref` as the only explicit exclusions.
- Exclude other crate floors, product behavior changes, aggregate masking, local Rust/WASM builds, and any new coverage exemption from this slice.

## Acceptance criteria

- [x] Lace source and all active consumers and build references are removed.
- [x] Authenticator-domain independently measures at least 90 percent with a matching floor.
- [x] The remaining package inventory is exhaustive and all other floors remain unchanged.
- [x] One Nook pull request stays at or below 2,000 authored additions and passes exact-head hosted validation, review, readiness, and merge.
- [x] Eighteen existing companion-WASM behavior tests execute under both native and WASM harnesses.
- [x] Focused page-policy and account-picker lifecycle behaviors are covered.
- [x] `nook-companion-wasm` independently measures at least 60 percent with a matching floor.
- [x] The companion-WASM pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] All companion response decoders have behavior-focused accepted and rejected fixture coverage.
- [x] The planned companion public wrappers have behavior-focused projection and error coverage.
- [ ] `nook-companion-wasm` independently measures at least 90 percent with a matching floor.
- [ ] The companion-WASM 90 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.

## Progress

- Pull request 1349 squash-merged as 5e2f75239728718825aad08ccd738dcf14ef9df7 after all exact-head checks and readiness passed. The next slice targets authenticator-domain.
- The user explicitly replaced Lace coverage with complete Lace removal on 2026-09-04. The prior coverage result remains historical evidence, not the current delivery target.
- Merged exact-head reports measure `nook-wasm` at 51.42 percent across 229 declared tests and `nook-companion-wasm` at 27.55 percent across eight tests.
- Hive measures 73.73 percent, Lace 86.48 percent, and authenticator-domain 87.93 percent.
- The initial admission assessment preceded implementation; the user explicitly authorized an iterative pull-request sequence on 2026-09-04, superseding that blocker.
- The initial pull request 1349 coverage approach measured Lace at 94.49 percent, but the user superseded it with complete Lace removal. The final removal diff contained 67 authored additions and passed the browser paths after their whole-suite timeout was made explicit.
- During pull request 1354, Main pull request 1345 exposed a missing `extension-lifecycle-routing.ts` entry in exact module-expert discovery. The user authorized the minimal AI-owned catalog repair, which restored the fail-closed policy without transferring broader ownership.
- Pull request 1354 raised the authenticator-domain floor to 90 percent with 26 authored additions and squash-merged as `4157dfa45e00bbb4cabb8436e93ffb23a2f8b0d9`. Hosted coverage measured 96.09 percent; repository policy, PR, Hive, review resolution, and readiness passed on exact head `88dcf4f1bdc181cdf1e73c83ddb9e0be9cc4130d` after merging Main through `73965ffc87e70af6997948766a4005ef6c5907aa`.
- Fresh hosted evidence after the latest Main changes measures `nook-companion-wasm` at 26.88 percent across 1,332 lines and `nook-wasm` at 53.45 percent across 28,633 lines. The next slice selects companion WASM as the smaller bounded target.
- Pull request 1367 implemented the planned companion-WASM slice with 110 authored additions and raised its floor from 18 to 75 percent after hosted evidence measured 75.87 percent across 1,463 lines. It squash-merged as `fd82b6206f93465046b532a4e91d99bbc2c7c578` after exact-head policy, PR, Hive, review resolution, and readiness passed.
- Exact per-file evidence leaves 353 companion-WASM lines uncovered. Response decoding and `lib.rs` contain 289 of those missed lines; covering their typed behavior is projected to raise the package above 90 percent within a 900-addition budget.
- Pull request 1369 added focused response-decoder and inline public-wrapper behavior tests, measured `nook-companion-wasm` at 88.99 percent across 1,716 lines, raised its independent floor from 75 to 88 percent, and squash-merged as `d636fed26ff7a3c6b362aff53152916430353e1b` after exact-head readiness passed. The remaining gap to 90 percent is 18 covered lines at the measured denominator.
- The final companion-WASM slice targets uncovered authentication-workflow variants and decoder rejection paths in focused implementation modules, with a 150-addition budget and no production changes.

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
- [Companion WASM 60 percent slice plan](../../plans/unplanned/20260905T050836Z-companion-wasm-coverage-60.md)
- [Companion WASM 75 percent completion worklog](../../worklogs/unplanned/20260905T055156Z-pr-1367-companion-wasm-coverage-75.md)
- [Companion WASM 90 percent slice plan](../../plans/unplanned/20260905T055936Z-companion-wasm-coverage-90.md)
- [Companion WASM 88 percent completion worklog](../../worklogs/unplanned/20260905T075121Z-pr-1369-companion-wasm-coverage-88.md)
- [Final companion WASM 90 percent plan](../../plans/unplanned/20260905T075311Z-companion-wasm-coverage-90-final.md)
