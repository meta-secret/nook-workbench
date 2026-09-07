---
title: Type Sentinel onboarding issuance admission and codec ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-onboarding-ownership.md
created_at: 2026-09-07T04:23:44Z
status: immutable
---

# Plan

1. Keep the exact six-file closure at fresh main `f241def08d9610d8f6df554d5429a9c52623065f`; inspect the existing Sentinel onboarding module, delivery adapter, core exports, and current tests for overlap and wire/durable boundaries.
2. Split production responsibilities into `issuance.rs`, `admission.rs`, and `codec.rs` with colocated tests: issuance owns structural package creation and sealing, admission owns recipient/share/provider checks and consuming completion, and the package type owns codec operations.
3. Preserve issuance’s weaker structural checks, acceptance’s share-before-decrypt order, schema-1 provider projection, recipient encryption, exact limits, and all existing error/partial-effect behavior.
4. Adapt `lib.rs` and WASM delivery without changing parse/identity/error order, public ABI, durable sequence, or future-drop behavior.
5. Retain all three core and three delivery tests plus the unchanged parent test; add bounded mismatch, provider matrix, wrong-recipient, malformed snapshot, codec limit/version, and privacy/consumption controls.
6. Enable ownership denial across the completed core onboarding subtree; run scoped formatting/static, symbol, line-budget, and test-retention checks plus `task loom:pre-push` without local product builds/tests.
7. Delegate implementation and exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions. Refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
