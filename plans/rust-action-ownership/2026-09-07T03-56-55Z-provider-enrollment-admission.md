---
title: Type provider enrollment payload admission and selection ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/provider-enrollment-admission-ownership.md
created_at: 2026-09-07T03:56:55Z
status: immutable
---

# Plan

1. Keep the exact six-file closure at fresh main `6a6df67d2473afd12c084b44ab9e3401e34d62ce`; inspect enrollment, storage-argument integration, core exports, WASM architecture adapters, and sync payload types for overlap and line ceilings.
2. Make borrowed `ProviderEnrollmentRequest` own admission inputs and consuming checked construction; preserve personal/shared payload types and repeated replication checks where payload construction already enforces them.
3. Make `SharedGrantProviderSelection` own first-match exact target/preset and usable-token matching, and make core-owned `OnboardingType` observe the enrollment payload without implementing dependency-owned `EnrollmentProvider`.
4. Adapt the three WASM payload constructors, onboarding/selection wrappers, `NookEnrollmentProvider` observation, facade exports, and storage-arguments integration without changing public signatures or schemas.
5. Retain 18 scoped tests and two public API integration tests; add validation-order, shared credential-exclusion, explicit/persisted target, exact-match selection, and private/consuming-state controls.
6. Enable ownership denial only in completed `enrollment.rs`; run scoped formatting/static, symbol, line-budget, and test-retention checks plus `task loom:pre-push` without local product builds/tests.
7. Delegate implementation and exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions. Refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
