---
title: Nook WASM provider event-log boundary coverage slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T06:53:00Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260907T045300Z-nook-wasm-coverage-80-event-log.md
---

## Interpreted request

Continue the user-authorized serial coverage mission from merged Main after
pull request 1493. Add a bounded set of behavior-focused tests for the
`nook-wasm` event-log provider boundary, then use exact hosted coverage to
raise the executable floor only when the new evidence supports it.

## Requirements

- Exercise local-mode provider dispatch, event-log import safeguards, and
  deterministic provider-sync classification and export behavior.
- Keep `nook-companion-wasm` at its existing 90 percent floor and preserve
  independent package accounting.
- Deliver one pull request with exact-head hosted validation, readiness, merge,
  and Workbench closeout evidence.

## Constraints and exclusions

- Limit product changes to behavior-focused tests beside the event-log provider
  boundary and the executable `nook-wasm` floor only if hosted proof supports a
  change.
- Do not change production behavior, public contracts, coverage exclusions, or
  aggregate accounting.
- Use deterministic local fixtures only; do not access remote providers or
  persist secrets.
- Use static local gates only; local Rust, WASM, product Docker, and full
  repository validation remain prohibited.
- Keep authored additions below the 2,000-line pull-request limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 420
- Owning modules, packages, or layers: `nook-wasm` event-log provider I/O,
  import safeguards, provider-sync guards, and colocated tests.
- Ownership units:
1. Capability: event-log provider boundary coverage; Gizmo ID:
   rust-crate-coverage-90; Functional owner: Development core; Expertise
   provider: None; Expertise allowed code paths: None; Expertise allowed test
   paths: None; Expertise forbidden paths: None; Expertise consumer
   interfaces: existing typed event-log provider methods; Expertise acceptance
   evidence: exact hosted coverage and readiness.
- Public or cross-module interfaces: existing event-log provider APIs only; no
  interface changes.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 420
- Current PR slice and acceptance evidence: Cover local provider dispatch,
  import-preservation safeguards, and deterministic provider-sync guards;
  static gates, exact hosted validation, independent coverage, readiness,
  squash merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-90; Gizmo name: provider event-log boundary
   coverage; Predecessor Gizmo ID: None; Cover deterministic provider boundary
   behavior; Estimated authored changed lines: 420; Acceptance evidence:
   exact hosted coverage proves the safe floor, then readiness and merge
   complete the slice.

## Initial plan

1. Start from merged Main `caaef127dad2d2c390378fd5e007f36dd33850c5` and add
   focused browser or native tests beside the provider event-log modules.
2. Run formatting, diff, and pre-push static gates without product builds.
3. Push the branch, obtain exact-head hosted validation, and inspect the
   independent `nook-wasm` coverage result before changing its floor.
4. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record the completion evidence.

## Completion evidence

- Tests cover safe local provider dispatch, import preservation, malformed or
  mismatched provider classifications, and deterministic event export.
- Exact hosted coverage, readiness, and the merged head are recorded in the
  issue and a linked completion worklog.

## Safety review

- Tests use synthetic event values and local browser storage only; no secrets,
  credentials, or raw logs are stored.
- No production implementation or API contract changes are planned.
- No coverage exclusions, assertion-free filler, or aggregate masking are
  allowed.
