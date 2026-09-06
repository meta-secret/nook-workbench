---
title: X authentication simulation completion
feature: mock-auth-pilot-e2e-coverage
issue: null
plan: plans/mock-auth-pilot-e2e-coverage/20260906T115504Z-x-auth-simulation.md
nook_pr: https://github.com/meta-secret/nook/pull/1447
status: completed
started_at: 2026-09-06T11:55:04Z
finished_at: 2026-09-06T16:57:58Z
agent: codex
---

# Outcome

PR #1447 added faithful X identifier-first authentication coverage and the portable detection and actuation support required by the observed page shape. The pull request was squash-merged as `104d876a4a9e7158377dcb5158a9ae17f2767709`, which was verified as the exact `origin/main` head.

# Implemented behavior

- Reproduced the observed X redirect from `/i/flow/login` to `/i/jf/onboarding/web?mode=login`.
- Modeled the omitted method and action, effective GET, visible `username_or_email`, hidden same-form password, hidden responsive duplicate, Apple and phone buttons, sandboxed Google iframe, and non-semantic Continue div.
- Preserved provider alternatives as detailed observations without allowing them to suppress the safe implicit identifier flow.
- Added one shared Rust-owned rule for both classification and final actuation. The rule requires an empty form and control identity, same-origin canonical destination, exact sole `?mode=login`, GET, one strong or explicit identifier, and no password, new-password, or OTP fields.
- Preserved the legacy implicit-submission policy and used the new predicate only after legacy rejection.
- Reconstructed live DOM facts and rechecked both safety and the original user approval immediately before submission.
- Added a required offline Playwright demo and prevented Playwright from collecting Vitest files.

# Security and failure resolution

- Independent Security review first rejected a fallback that could bypass conflicting form identities. Development Core changed it to require an exactly empty observed form identity and added registration, recovery, provider, passkey, auxiliary, destructive, account-management, and whitespace negatives.
- Hosted E2E exposed that actionable Apple and phone alternatives suppressed implicit submission before Core. Web Development changed suppression to consider only Rust-safe actionable advances.
- Security then identified classification and final actuation drift. Development Core added a typed actuation observation and shared the same exact Rust helper; Web kept legacy activation first and added the new predicate only as a narrow alternative.
- Repository policy caught an authored TypeScript `undefined`; the code now uses the established `false` absence sentinel.
- Hosted Web tests caught a stale expected detailed-control kind and then a misleading Svelte rune error. Artifact-backed reproduction showed the latter was Chai formatting a mismatched Happy DOM `Document`; the test now asserts the correct page-owned root without traversing it.
- One validation attempt hit a transient sccache S3 DNS failure. A clean exact-head retry passed the WASM build.

# Final validation

Exact head `e93e606c30b9f736017c5db3401355818ce0efe8` passed:

- Repository policy run `34046256755`.
- PR matrix run `34046294408`: 13 successful jobs, 4 intentional skips, 0 failures.
- Native Rust, WASM build, WASM Node, RustSec/dependency policy, Dylint, Kani, fuzz, Proptest/Insta/Loom, and Rust coverage.
- Web verification: 79 files and 698 tests; DOM simulation 14/14, mock-auth contract 10/10, implicit-actuation and drift suite 7/7.
- Authentication-sensitive Chromium: 11/11 in `mock-auth-pilot-coverage.spec.ts`; the X test passed and proved redirect, effective GET, visible identifier fill, untouched hidden password and duplicate tree, untouched Apple/phone/Google alternatives, untouched non-semantic Continue, and successful implicit submission.
- Preview/deployment `6295375962` for unified, site, simple, sentinel, and extension artifacts.
- `task pr:ready PR=1447`: `ready: true`, no reasons, zero substantive comments, and zero unresolved threads.

The headless UI demo job remained intentionally disabled by the repository-wide `UI_DEMOS_ENABLED=false` setting. The required X demo source and Loom UI-demo contract passed.

# Remaining work

None for this mission. Future provider fixtures should be added only for genuinely different authentication structures.
