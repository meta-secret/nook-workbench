---
title: Own remaining vault policy adapter actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/runtime-policy-actions.md
started_at: 2026-09-08T05:59:00Z
agent: codex
gizmo_id: rust-action-ownership-runtime-policy-actions
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with one cohesive vault policy slice. Production policy operations must have meaningful owners, while the established `cfg(test)` exception keeps ordinary test fixtures simple.

## Requirements

- Enforce `unowned_function` and invalid-suppression policy in both scoped modules.
- Move runtime configuration parsing onto `VaultRuntimePolicy`.
- Move verified device and store identifier deserialization onto `VerifiedVaultAccess`.
- Preserve runtime defaults, minimums, run-mode gating, typed validation, serde wire shape, and existing callers.
- Validate with focused repository gates, hosted exact-head checks, readiness, remote Loom, merge, and Workbench closeout.

## Constraints and exclusions

- Keep implementation simple with existing domain owners and no compatibility free-function wrappers.
- No storage, schema, cryptographic, authorization, public WASM ABI, or fallback changes.
- Keep ordinary `cfg(test)` free fixtures allowed by the ownership lint.
- Stay below the 2,000-authored-addition ceiling; avoid local Rust/WASM/product builds and tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-runtime-policy-actions
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: `nook-core` vault runtime policy and device-access policy modules.
- Ownership units:
1. Capability: Own runtime configuration parsing and verified device/store identifier deserialization; Gizmo ID: rust-action-ownership-runtime-policy-actions; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Dylint and hosted behavior checks show all production operations have meaningful owners.
- Public or cross-module interfaces: Existing associated serde callbacks and private runtime helper placement only; no public interface change.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Move the three remaining production policy adapters onto existing domain owners; Acceptance evidence: Focused pre-push, hosted exact-head validation, readiness, remote Loom, merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-runtime-policy-actions; Gizmo name: Own remaining vault policy adapter actions; Predecessor Gizmo ID: None; Move the three remaining production policy adapters onto existing domain owners; Estimated authored changed lines: 180; Acceptance evidence: Focused pre-push, hosted exact-head validation, readiness, remote Loom, merge, and Workbench closeout.

## Initial plan

1. Activate the ownership lint in the two policy modules.
2. Move the three production free functions onto their existing domain owners and update serde callback paths.
3. Run formatting, diff hygiene, and `task loom:pre-push`; inspect authored size.
4. Commit, push, run exact-head hosted validation, resolve substantive review, and rebase if main advances.
5. Run readiness and remote Loom, then merge and publish Workbench closeout records.

## Completion evidence

- Clean formatted diff with authored-line budget evidence.
- Hosted Dylint, Native Rust, WASM, web, coverage, preview, policy, and ecosystem checks on the final head.
- Exact-head readiness with zero unresolved review threads and current base.
- Passing remote `task remote TASK_NAME=loom:verify`, merged SHA, and Workbench issue/worklog/stats records.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
