---
title: Nook WASM provider-sync and security-epoch guard coverage slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T07:43:00Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260907T065300Z-nook-wasm-coverage-80-provider-io.md
---

## Interpreted request

Continue the user-authorized serial coverage mission from current Main after
pull request 1499 and the subsequent Main update. Add a bounded set of
behavior-focused tests for deterministic provider synchronization and
security-epoch guards, then use exact hosted coverage to raise the executable
floor only when the new evidence supports it.

## Requirements

- Exercise provider-sync export, merge, classification, and safe-guard paths.
- Exercise security-epoch recovery and fail-closed guard behavior where local
  fixtures can prove the contract without remote providers.
- Preserve independent `nook-wasm` and `nook-companion-wasm` accounting.
- Deliver one pull request with exact-head hosted validation, readiness, merge,
  and Workbench closeout evidence.

## Constraints and exclusions

- Limit product changes to behavior-focused tests beside provider-sync and
  security-epoch modules, plus the executable `nook-wasm` floor only if hosted
  proof supports a change.
- Do not change production behavior, public contracts, coverage exclusions, or
  aggregate accounting.
- Use deterministic synthetic events and local browser storage only; do not
  access remote providers or persist secrets.
- Use static local gates only; local Rust, WASM, product Docker, and full
  repository validation remain prohibited.
- Keep authored additions below the 2,000-line pull-request limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: `nook-wasm` event-log provider-sync,
  security-epoch guards, and colocated tests.
- Ownership units:
1. Capability: event-log synchronization and security-epoch guard coverage;
   Gizmo ID: rust-crate-coverage-90; Functional owner: Development core;
   Expertise provider: None; Expertise allowed code paths: None; Expertise
   allowed test paths: None; Expertise forbidden paths: None; Expertise
   consumer interfaces: existing typed event-log provider methods; Expertise
   acceptance evidence: exact hosted coverage and readiness.
- Public or cross-module interfaces: existing event-log provider APIs only; no
  interface changes.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Cover deterministic provider-sync
  and security-epoch guards; static gates, exact hosted validation, independent
  coverage, readiness, squash merge, and Workbench closeout.

## Initial plan

1. Start from current Main `69e431f159c717e6d78e0151e75157932f3af88f3` and add
   focused native or browser tests beside provider-sync and security-epoch
   implementations.
2. Run formatting, diff, and pre-push static gates without product builds.
3. Push the branch, obtain exact-head hosted validation, and inspect the
   independent `nook-wasm` coverage result before changing its floor.
4. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record completion evidence.

## Completion evidence

- Tests cover deterministic provider-sync classification, export/merge guards,
  and security-epoch recovery/fail-closed behavior.
- Exact hosted coverage, readiness, and the merged head are recorded in the
  issue and a linked completion worklog.

## Safety review

- Tests use synthetic event values and local browser storage only; no secrets,
  credentials, or raw logs are stored.
- No production implementation or API contract changes are planned.
- No coverage exclusions, assertion-free filler, or aggregate masking are
  allowed.
