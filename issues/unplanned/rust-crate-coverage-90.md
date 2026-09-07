---
title: Raise every testable Rust crate to 90 percent coverage
status: in_progress
priority: p1
automation: manual
owner: codex
gizmo_id: rust-crate-coverage-90
created_at: 2026-09-04T21:49:30Z
updated_at: 2026-09-07T02:44:56Z
source_issues: []
related_prs: [1349, 1354, 1367, 1369, 1374, 1397, 1401, 1404, 1417, 1423, 1425, 1431, 1436, 1439, 1442, 1445, 1448, 1450, 1453, 1455, 1459, 1462, 1468, 1473, 1483]
depends_on: [issues/unplanned/rust-crate-coverage-floor.md]
---

# Raise every testable Rust crate to 90 percent coverage

## Context

Pull request 1319 established exhaustive independent coverage gates at measured current floors. The requested successor must raise every remaining crate to 90 percent without exclusions, aggregate masking, assertion-free filler, or coverage-ignore annotations. This focused repair belongs to the [unplanned engineering repairs](README.md) feature.

## Outcome

Lace removal merged in pull request 1349, authenticator-domain reached 90 percent in pull request 1354, and companion WASM reached a 90 percent enforced floor in pull request 1374. The next slice will be selected from fresh merged-Main measurements of the remaining crates below 90 percent.

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
- [x] `nook-companion-wasm` independently measures at least 90 percent with a matching floor.
- [x] The companion-WASM 90 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 53 percent with a matching floor.
- [x] The `nook-wasm` pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 55 percent with a matching floor.
- [x] The `nook-wasm` 55 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 56 percent with a matching floor.
- [x] The `nook-wasm` 56 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 60 percent with a matching floor.
- [x] The `nook-wasm` 60 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 65 percent with a matching floor.
- [x] The `nook-wasm` 65 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 64 percent with a matching floor.
- [x] The `nook-wasm` 64 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 69.5 percent with a matching floor.
- [x] The `nook-wasm` 69.5 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 70 percent with a matching floor.
- [x] The `nook-wasm` 70 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 72.5 percent with a matching floor.
- [x] The `nook-wasm` 72.5 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 73 percent with a matching floor.
- [x] The `nook-wasm` 73 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 74 percent with a matching floor.
- [x] The `nook-wasm` 74 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 74.5 percent with a matching floor.
- [x] The `nook-wasm` 74.5 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 74.7 percent with a matching floor.
- [x] The `nook-wasm` 74.7 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 74.8 percent with a matching floor.
- [x] The `nook-wasm` 74.8 percent pull request passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 75.0 percent in the next behavior-test slice.
- [x] Pull request 1462 raises the executable `nook-wasm` floor to 75.4 percent after exact hosted evidence measures 75.42 percent.
- [x] Pull request 1462 passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 75.5 percent in the next behavior-test slice.
- [x] Pull request 1468 passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 75.9 percent in the next behavior-test slice.
- [x] Pull request 1473 passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.
- [x] `nook-wasm` independently measures at least 76.0 percent in the next Sentinel delivery slice.
- [x] Pull request 1483 passes exact-head hosted validation, review resolution, readiness, and merge below 2,000 authored additions.

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
- Pull request 1374 added focused companion authentication-workflow, decoder-rejection, grant-authority, persistence, pairing, timeout, and vault-URL behavior tests. Hosted WASM validation ran 39 companion tests and measured 1,638 of 1,799 lines, or 91.05 percent, so the independent floor was raised from 88 to 90 percent.
- Pull request 1374 passed exact-head validation on final head `42be2a5241adba15e03608541ffb24a3dfaeba23`, returned `ready: true` with zero unresolved review threads, and squash-merged as `fb5716cd98865a51e97ccc242861681fecd5ee0b` with 90 authored additions.
- Pull request 1397 added deterministic `nook-wasm` projection tests for mnemonic, provider-label, OAuth, revision/scope, and vault-architecture wrappers. After merging Main through `ef6460e61037cee9aa0da6029065d1266c596eb9`, exact hosted run `33990481298` passed 96 native and 159 browser tests and measured `nook-wasm` at 54.81 percent, so the independent floor was raised from 51 to 53 percent.
- Pull request 1397 passed exact-head validation on final head `97bfb4a041a3502983059b7898119b6911f90ebc`, returned `ready: true` with zero unresolved review threads, and squash-merged as `ae4e2512b93bf5dd359f07990a30fc2e9f41ad0a` with 282 authored additions.
- Pull request 1401 added deterministic `nook-wasm` runtime-wrapper projection tests and raised its floor from 53 to 55 percent. Exact hosted run `33993311760` passed 99 native and 160 browser tests and measured `nook-wasm` at 55.56 percent, with companion WASM at 91.05 percent.
- Pull request 1401 passed exact-head validation on final head `992219518459c31fab3118c8a6f602670d744da6`, returned `ready: true` with zero unresolved review threads, and squash-merged as `35201094a4368c14d41b673f868d52ab3bf5b943` with 103 authored additions after merging the latest Main.
- Pull request 1404 split the WASM runtime policy adapter into its focused implementation module, colocated the policy tests with that implementation, and corrected the executable `nook-wasm` floor from 55 to 56 percent. The final exact hosted run `33998240431` passed 106 native tests and 160 browser tests and measured 56.85 percent line coverage; the companion package remained above its 90 percent floor.
- Pull request 1417 added behavior-focused WASM projection tests with 717 authored additions and raised the executable `nook-wasm` floor from 56 to 60 percent. The final exact hosted run `34005705471` ran 119 native and 172 browser tests and measured 18,776 of 30,248 lines, or 62.07 percent combined WASM line coverage; the companion package remained at 91.05 percent.
- Pull request 1417 passed exact-head validation, review resolution, and readiness with zero unresolved review threads on head `4db94d9ccf98c3e3be45afedf9f4b68db0d4d94c`, then squash-merged as `4b41d2a842282f509c962ad5aba180ab5182f05c`. The next bounded slice starts from merged Main at a 65 percent floor.
- Pull request 1423 added focused `nook-wasm` adapter and projection behavior tests. Exact hosted coverage measured 30,871 lines with 11,111 missed, or 64.01 percent, while companion WASM remained at 91.05 percent. The executable `nook-wasm` floor was raised from 60 to 64 percent after the final proof; the user-authorized iterative delivery continues in 5-to-10-point increments.
- Pull request 1423 passed exact-head validation, review resolution, and readiness with zero unresolved review threads on head `b66a60730bc86ca47844af762d44c1c46e6c189b`, then squash-merged as `698f73155fa4cbb53879e43db967ed9f9541ed3d`. The next bounded slice starts from merged Main at a 64 percent floor and targets 70 percent.
- Pull request 1425 added behavior-focused browser tests for conversion, public projections, provider architecture and operations, secret-record projections, authentication and diagnostics types, and vault API helpers. The production public API was split into cohesive provider-operation and provider-architecture modules to preserve the source-size policy; no coverage exclusions or filler were added.
- Pull request 1425's exact hosted run measured `nook-wasm` at 69.66 percent line coverage across 32,707 lines and companion WASM at 91.05 percent. The evidence-backed executable floor was raised from 64 to 69.5 percent, because the bounded slice did not reach a defensible 70 percent floor.
- Pull request 1425 passed exact-head validation, review resolution, and readiness with zero unresolved review threads on head `1d673c62dcaa4b5ae9792e4b176210f8a25d740e`, then squash-merged as `e00cb372a60d3e7333ea395bb1fc864d0dd487c9`. The next bounded slice continues from merged Main at a 69.5 percent floor.
- Pull request 1431 added 37 behavior-focused browser tests for authenticator fill, login fill/save, and Sentinel state projections. Its exact hosted run passed 226 browser tests and measured `nook-wasm` at 70.32 percent line coverage across 33,023 lines; companion WASM remained at 91.05 percent.
- Pull request 1431 passed exact-head validation, review resolution, and readiness with zero unresolved review threads on head `6779ae4a0069a7eb86d4f32f8fd1d5a6eaa0af0a`, then squash-merged as `00a99bf33624c063b83174479c7b12e7e090cb4b`. The next bounded slice starts from merged Main at the evidence-backed 70 percent floor and targets 75 percent.
- Pull request 1436 added focused manager and storage behavior tests, plus the first executable 70 percent floor. Its final exact hosted run `34022675922` passed 231 browser tests and measured `nook-wasm` at 70.87 percent line coverage across 33,181 lines; companion WASM remained at 91.05 percent. A transient 5-second Loom timeout in the parallel policy run was cleared by rerunning attempt 2 (`34022674684`).
- Pull request 1436 passed exact-head validation, review resolution, and readiness with zero unresolved review threads on final head `715602e311c0db81ce7fce99fae73a25096afa52`, then squash-merged as `ebc68859ccb69a255e2f0d6254fe9c7e71383377`. The next bounded slice starts from merged Main at the evidence-backed 70 percent floor and targets 75 percent.
- Pull request 1439 added focused connect, Sentinel, and vault API behavior tests. Its final exact hosted run `34025559161` passed 242 browser tests and measured `nook-wasm` at 71.73 percent line coverage across 33,773 lines after rebasing onto Main `80f5e4596`; companion WASM remained at 91.05 percent.
- Pull request 1439 corrected a test-only genesis-record key classification assertion after the first hosted runtime failure, then passed exact-head validation, review resolution, and readiness on final head `80e13bd22e892d01379487259c6e593b452c4ef7`. It squash-merged as `0fbd5bc726efd26b7107da4caf7e2a6001479d59` with the executable `nook-wasm` floor intentionally remaining at 70 percent because this bounded slice did not reach a defensible 75 percent proof.
- Pull request 1442 added behavior-focused tests for diagnostics, identity/passkey projections, Sentinel multi-device overflow, sync, and vault API wrappers. After correcting test fixtures to match runtime contracts and isolating the persisted event-log marker, exact hosted run `34029222290` passed the full required validation and measured `nook-wasm` at 72.50 percent line coverage across 34,340 lines; companion WASM remained at 91.05 percent.
- Pull request 1442 raised the executable `nook-wasm` floor from 70 to 72.5 percent, passed `task pr:ready PR=1442` with zero unresolved review threads and a successful Pages deployment on exact head `118632b086599276473a8ffcae15553fd9d38fc8`, and squash-merged as `ab84eea871fa2e40b22c14adaeecfabae18fa24e` after rebasing onto Main `6100a2650636e566f188f0103e1b54f81ea28483`.
- The next bounded slice continues from merged Main `ab84eea871fa2e40b22c14adaeecfabae18fa24e` and targets a defensible 75 percent `nook-wasm` floor with focused behavior tests in the remaining low-coverage manager/storage adapters.
- Pull request 1445 added 193 behavior-focused tests in manager and storage adapters and raised the executable `nook-wasm` floor from 72.5 to 73.0 percent. Exact hosted run `34031529707` passed the required native, WASM, web, ecosystem, coverage, and preview jobs and measured 25,391 of 34,774 lines, or 73.02 percent; companion WASM remained at 91.05 percent.
- Pull request 1445 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, and a successful Pages deployment on head `479426348054fc68d76b5d91d1f0ebfca994770b`, then squash-merged as `c7cfd0a5ee787c211734b416879c7cc2f0cf0db9` after rebasing onto Main `49b2bf9a590b968f50f3f29bf00fa15080e8c967`. The next slice continues from merged Main at the 73.0 percent floor and targets the next 5-to-10-point increment.
- Pull request 1448 added focused lifecycle, Drive-helper, and GitHub-helper tests, extracted the genesis lifecycle implementation into a cohesive manager module to preserve the source-size policy, and raised the executable `nook-wasm` floor from 73.0 to 74.0 percent. Exact hosted run `34034890563` passed 260 WASM tests and the full required validation matrix; the coverage proof measured `nook-wasm` at 74.05 percent line coverage and `nook-companion-wasm` at 91.08 percent.
- Pull request 1448 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, and a successful Pages deployment on head `16fd5b9b35018c2b77a08eaabfc0f10be87b3980`, then squash-merged as `f753a6e00822591d128706d3eed4c09769c5bf51` after rebasing onto Main `ea7820a4245733b26b9d49836eadc288f316e6d1`. The next slice continues from merged Main at the 74.0 percent floor and targets the next evidence-backed increment.
- Pull request 1450 added 244 behavior-focused manager and event-log tests, raised the executable `nook-wasm` floor from 74.0 to 74.5 percent, and preserved independent package accounting. Exact hosted run `34038377198` passed native Rust, WASM build and Node tests, web verification, Hive, ecosystem, coverage, and preview checks; coverage measured `nook-wasm` at 74.70 percent lines and `nook-companion-wasm` at 91.08 percent.
- Pull request 1450 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, and a successful Pages deployment on head `35090078655ea9bef8e2ee881d367f9544906b1d`, then squash-merged as `43c64d38b7a2fe798dda180a3a9659d944f0b88b` after rebasing onto Main `694ff764b7b7fd7c4998b3aab9abb7ad6383c342`. The next bounded slice starts from merged Main at the 74.5 percent floor.
- Pull request 1453 added 263 behavior-focused tests for session metadata, password listing and Sentinel fail-closed paths, identity-handoff enrollment projections, and empty extension pairing state. After correcting test-only compile issues and rebasing onto Main `74506792dacfcd6047e6dc8925126ab8cb81bf76`, exact hosted run `34040707235` passed the required native Rust, WASM build and Node, web, Hive, ecosystem, coverage, and preview checks. Coverage measured `nook-wasm` at 74.94 percent lines and `nook-companion-wasm` at 91.08 percent, so the executable `nook-wasm` floor was raised from 74.5 to 74.7 percent.
- Pull request 1453 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, and a successful Pages deployment on head `605d62b4dd2d667ceb948b0528415792ef3aab7f`, then squash-merged as `cabc0fb830f12e1c8f06a6c3865454d91cded01d`. The next bounded slice starts from merged Main at the 74.7 percent floor and targets the largest remaining deterministic manager gaps.
- Pull request 1455 added focused handoff-enrollment, Sentinel policy, recovery, and state-cleanup tests. It also split two cohesive production implementation modules to satisfy the source-size policy without changing behavior. Exact hosted run `34044410832` measured `nook-wasm` at 75.05 percent line coverage and `nook-companion-wasm` at 91.08 percent, so the executable `nook-wasm` floor was raised from 74.7 to 74.8 percent.
- Pull request 1455 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, and a successful Pages deployment on head `396492f0d27a342d00a1ae8bb20aa555f2660df1`, then squash-merged as `4bd982da68a98d7d69c46a0fdf613c416ab649c5`. The next bounded slice starts from merged Main at the 74.8 percent floor and targets the largest remaining deterministic manager gaps.
- Pull request 1459 added 156 behavior-focused browser tests for multi-device share quorum, security-epoch projection guards, provider classification, unknown-device rejection, and pre-genesis no-op behavior. Its final exact hosted run `34048107994` passed the required validation matrix at head `d7a7a2dff47015bb7f6ac95e483de0f5d49f6414`; coverage measured `nook-wasm` at 75.13 percent lines and `nook-companion-wasm` at 91.44 percent. The executable floor remains 74.8 percent until the next bounded slice establishes additional margin.
- Pull request 1459 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, and a successful Pages deployment, then squash-merged as `0d06c5821ff4219088b51f08cf1f263262ffa8e3`. The next slice starts from merged Main at the 74.8 percent floor and targets 76 percent through the largest remaining deterministic manager gaps.
- Pull request 1462 added 156 behavior-focused browser tests for Sentinel session and delivery guards, passkey projection branches, and security-epoch prepared-event handling. It also extracted the Sentinel delivery boundary into a cohesive module to preserve the source-size policy. Exact hosted run `34055064970` measured `nook-wasm` at 75.42 percent lines and `nook-companion-wasm` at 91.44 percent, so the executable `nook-wasm` floor was raised from 74.8 to 75.4 percent.
- Pull request 1462 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, a successful Pages deployment, and final base `c864273e0cd29ddd14a4d6281a0706af34464426`; it squash-merged as `88194e6d3b482d6dacc3da68d78690684c6ed001`. The next slice starts from merged Main at the 75.4 percent floor and targets 80 percent through deterministic manager and storage behavior gaps.
- Pull request 1468 added behavior-focused `nook-wasm` session-state tests for crypto lock state, ceremonies, search catalogs, resets, public app identity, sync outbox state, status channels, event-log state, and clear-sync-issue projections. The final exact hosted run `34063428197` measured `nook-wasm` at 75.54 percent lines and `nook-companion-wasm` at 91.57 percent, so the executable `nook-wasm` floor was raised from 75.4 to 75.5 percent.
- Pull request 1468 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, a successful Pages deployment, and final base `d27b39c81d8b3e40f01d7710327615abacb943f4`; it squash-merged as `d48b2758b25c1e9424bfb9e07f0031acc3fa727b`. The next slice starts from merged Main at the 75.5 percent floor and continues toward 80 percent through deterministic manager and storage behavior gaps.
- Pull request 1473 added 209 authored test lines covering device-protection browser guards, vault provider/storage adapter rejection paths, and shared-storage grant policy branches. The final exact hosted run `34073090126` passed 285 WASM tests and measured `nook-wasm` at 75.97 percent line coverage, so the executable floor was raised from 75.5 to 75.9 percent. The branch was rebased onto Main through `7b6dacc3cad39d479e5262a61aec41bc52d946ff` as Main advanced during hosted validation.
- Pull request 1473 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, a successful Pages deployment, and final head `489b74b8156c7dfe4fafe192f5f8b4a626948f12`; it squash-merged as `4bd068de5aa7acb4defea75c4abfc1d371a434c5`. The next slice starts from merged Main at the 75.9 percent floor and continues toward 80 percent through deterministic manager and storage behavior gaps.
- Pull request 1483 added 136 authored browser and native test lines for Sentinel delivery installation and onboarding-wrapper validation, plus three floor-record lines. The final exact hosted run `34076270101` passed 287 WASM browser tests with zero failures and measured `nook-wasm` at 76.15 percent line coverage; the executable floor was raised from 75.9 to 76.0 percent.
- Pull request 1483 passed exact-head readiness with `behindBy: 0`, zero unresolved review threads, and a successful Pages deployment on head `0b6d397fdb50b7416cde502e49adbd082f27839b` and base `2a9c21993c23cfa2c8ab33f378b7dd1386cd8846`. It squash-merged as `a00364c87be8d58fb05469cad9acf42ff8073a42`; the next slice starts from merged Main `4658cd533d906863af16e68b71f97a147c61c328` at the 76.0 percent floor.
- Pull request 1404 passed exact-head validation after merging the latest Main through `89092f0bfd950ef1ca85737cf5648bc45e7db342`, returned `ready: true` with zero unresolved review threads, and squash-merged as `e368014c0b2b2b7a39a86c2085cbdcd825294af6` with 774 authored additions.

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
- [Companion WASM 90 percent completion worklog](../../worklogs/unplanned/20260905T194314Z-pr-1374-companion-wasm-coverage-90.md)
- [Nook WASM 80 percent next-slice plan](../../plans/unplanned/20260906T194502Z-nook-wasm-coverage-80-next.md)
- [Nook WASM 75.5 percent completion worklog](../../worklogs/unplanned/20260906T222503Z-pr-1468-nook-wasm-coverage-75-5.md)
- [Merged Nook pull request #1468](https://github.com/meta-secret/nook/pull/1468)
