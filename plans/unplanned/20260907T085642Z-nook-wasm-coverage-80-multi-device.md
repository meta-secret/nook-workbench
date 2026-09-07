---
title: Nook WASM multi-device join lifecycle coverage slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T08:56:42Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260907T074300Z-nook-wasm-coverage-80-sync-guards.md
---

## Interpreted request

Continue the user-authorized serial coverage mission from merged Main after
pull request 1503. Add a bounded set of behavior-focused browser tests for
the deterministic keys-mode multi-device join lifecycle, then use exact
hosted coverage to raise the executable floor only when the proof supports it.

## Requirements

- Exercise join-request creation, listing, denial, approval, and roster-label
  projection for a local Simple keys-mode vault.
- Exercise fail-closed request and enrollment paths when no local vault or
  valid keys exist.
- Preserve independent `nook-wasm` and `nook-companion-wasm` accounting.
- Deliver one pull request with exact-head hosted validation, readiness,
  squash merge, and Workbench closeout evidence.

## Constraints and exclusions

- Product changes are behavior-focused tests in `manager/multi_device.rs` and
  the executable `nook-wasm` floor only if hosted proof supports a change.
- Do not change production behavior, public contracts, coverage exclusions, or
  aggregate accounting.
- Use local synthetic identities, local IndexedDB, and deterministic timestamps;
  do not access remote providers or persist secrets in the ledger.
- Use static local gates only; local Rust, WASM, product Docker, and full
  repository validation remain prohibited.
- Keep authored additions below the 2,000-line pull-request limit and keep the
  source file under the repository's 1,000-line policy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 130
- Owning modules, packages, or layers: `nook-wasm` multi-device manager
  lifecycle and colocated browser tests.
- Ownership units:
1. Capability: keys-mode join request and enrollment lifecycle;
   Gizmo ID: rust-crate-coverage-90; Functional owner: Development core;
   Expertise provider: None; Expertise allowed code paths: None; Expertise
   allowed test paths: None; Expertise forbidden paths: None; Expertise
   consumer interfaces: existing typed multi-device manager methods; Expertise
   acceptance evidence: exact hosted coverage and readiness.
- Public or cross-module interfaces: existing typed multi-device APIs only; no
  interface changes.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 130
- Current PR slice and acceptance evidence: Cover deterministic join lifecycle
  and guarded enrollment; static gates, exact hosted validation, independent
  coverage, readiness, squash merge, and Workbench closeout.

## Initial plan

1. Start from merged Main `e8feb70d5f86970791745db202a2db86cf24142d` at the
   executable `nook-wasm` floor of 77.0 percent.
2. Add focused browser tests for local Simple keys-mode join lifecycle and
   no-vault/invalid-key guards.
3. Run formatting, diff, and pre-push static gates without product builds.
4. Push the branch, obtain exact-head hosted validation, and inspect the
   independent coverage result before changing its floor.
5. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record completion evidence.

## Completion evidence

- Tests cover join request creation/listing/denial, approval, member label
  projection, and guarded local enrollment paths.
- Exact hosted coverage, readiness, merged head, and the next-floor decision
  are recorded in the issue and a linked completion worklog.

## Safety review

- Tests use generated identities, local IndexedDB, and fixed timestamps only;
  no credentials or raw logs are stored.
- No production implementation or API contract changes are planned.
- No coverage exclusions, assertion-free filler, or aggregate masking are
  allowed.
