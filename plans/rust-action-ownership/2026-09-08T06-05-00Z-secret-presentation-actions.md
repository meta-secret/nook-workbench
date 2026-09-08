---
title: Own secret host and presentation actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/secret-presentation-actions.md
started_at: 2026-09-08T06:05:00Z
agent: codex
gizmo_id: rust-action-ownership-secret-presentation-actions
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with a cohesive secret presentation slice. Host and grouping operations must belong to host catalog or secret-item owners, with the test-only exception preserved and public behavior unchanged.

## Requirements

- Enforce `unowned_function` and invalid-suppression policy in the three scoped modules.
- Move bundled host normalization and lookup onto host catalog owners.
- Move URL normalization, login matching, authenticator grouping, and entity grouping onto `SecretListItem`.
- Adapt core and WASM callers and re-exports without changing wire or ABI contracts.
- Preserve allowlist fail-closed behavior, URL precedence, account-match preference, host-length and lexical tie-breaks, and all existing tests.
- Validate with focused repository gates, hosted exact-head checks, readiness, remote Loom, merge, and Workbench closeout.

## Constraints and exclusions

- Keep implementation simple with existing domain owners; no generic utility wrapper or compatibility free-function layer.
- No storage, schema, cryptographic, authorization, public data-shape, or fallback changes.
- Keep ordinary `cfg(test)` free fixtures allowed by the ownership lint.
- Stay below the 2,000-authored-addition ceiling; avoid local Rust/WASM/product builds and tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-secret-presentation-actions
- Estimated authored changed lines: 420
- Owning modules, packages, or layers: `nook-core` secret host catalogs, secret presentation, and direct `nook-wasm` projections.
- Ownership units:
1. Capability: Own host catalog normalization, allowlist matching, issuer mapping, and `SecretListItem` presentation grouping; Gizmo ID: rust-action-ownership-secret-presentation-actions; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Dylint, hosted Rust/WASM behavior checks, and preserved grouping tests prove typed ownership and unchanged projections.
- Public or cross-module interfaces: Existing core re-exports and WASM call sites are adapted to associated owners; serialized and JS-visible shapes remain unchanged.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 420
- Current PR slice and acceptance evidence: Move host catalog and SecretListItem presentation operations onto domain owners with narrow consumer adaptations; Acceptance evidence: Focused pre-push, hosted exact-head validation, readiness, remote Loom, merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-secret-presentation-actions; Gizmo name: Own secret host and presentation actions; Predecessor Gizmo ID: None; Move host catalog and SecretListItem presentation operations onto domain owners with narrow consumer adaptations; Estimated authored changed lines: 420; Acceptance evidence: Focused pre-push, hosted exact-head validation, readiness, remote Loom, merge, and Workbench closeout.

## Initial plan

1. Activate ownership enforcement in the three secret presentation modules.
2. Move host catalog and SecretListItem actions onto meaningful owners and update internal call sites.
3. Adapt core re-exports and direct WASM consumers while preserving public shapes.
4. Run formatting, diff hygiene, and `task loom:pre-push`; inspect authored size.
5. Commit, push, run exact-head hosted validation, resolve substantive review, and rebase if main advances.
6. Run readiness and remote Loom, then merge and publish Workbench closeout records.

## Completion evidence

- Clean formatted diff with authored-line budget evidence.
- Hosted Dylint, Native Rust, WASM, web, coverage, preview, policy, and ecosystem checks on the final head.
- Exact-head readiness with zero unresolved review threads and current base.
- Passing remote `task remote TASK_NAME=loom:verify`, merged SHA, and Workbench issue/worklog/stats records.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
