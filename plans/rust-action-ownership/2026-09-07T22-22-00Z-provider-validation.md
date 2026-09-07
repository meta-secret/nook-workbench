---
title: Type storage-provider validation and identity actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/provider-validation.md
started_at: 2026-09-07T22:22:00Z
agent: codex
gizmo_id: rust-action-ownership-provider-validation
---

# Task plan

## Interpreted request

Continue the project-wide Rust action-ownership migration with a cohesive provider-validation boundary. Keep provider policy attached to the provider/value types that carry mode, format, credential, and stable-identity invariants while preserving every wire string and error contract.

## Requirements

- Move provider validation, selection, labeling, formatting, masking, credential presence, and identity-key behavior onto existing domain types.
- Migrate core sync-store, WASM, composition, and focused test callers in the same closure.
- Enforce homeless-function denial in the provider validation modules while keeping public WASM methods as adapters.
- Keep the complete change below the 1,800-addition ceiling and deliver one cohesive PR.
- Run formatting, diff, Loom, hosted validation, exact-head readiness, merge, and Workbench closeout.

## Constraints and exclusions

Preserve provider strings, aliases, defaults, validation order, error variants, and public boundary names. Exclude provider I/O, authentication, authorization, persistence, schema, cryptography, fallback, recovery, retry, and generic phase-framework changes. Do not run local product builds or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-provider-validation
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: nook-app/nook-platform/nook-core/src/sync/validation.rs, nook-app/nook-platform/nook-core/src/sync/validation/provider_configuration.rs, nook-app/nook-platform/nook-core/src/sync/validation/provider_configuration/github.rs, nook-app/nook-platform/nook-core/src/sync/sync_provider_store, nook-app/nook-platform/nook-wasm provider adapters
- Ownership units:
  1. Capability: Provider value parsing and formatting; Gizmo ID: rust-action-ownership-provider-validation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Validated Drive, GitHub, and OAuth types own parse, format, mask, and normalization actions.
  2. Capability: Provider selection and stable identity policy; Gizmo ID: rust-action-ownership-provider-validation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Mode selection, labels, credentials, cache references, and target keys remain behaviorally unchanged.
- Public or cross-module interfaces: Existing nook-core provider value types and public nook-wasm provider adapter functions
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Provider value parsing, mode selection, labels, credential presence, stable keys, cache references, connect admission, and all direct callers; Acceptance evidence: Focused behavior tests and hosted Rust/WASM/Dylint checks pass with exact public strings preserved.
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: rust-action-ownership-provider-validation; Gizmo name: Provider validation ownership; Predecessor Gizmo ID: None; Provider value parsing, mode selection, labels, credential presence, stable keys, cache references, connect admission, and all direct callers; Estimated authored changed lines: 900; Acceptance evidence: Focused behavior tests and hosted Rust/WASM/Dylint checks pass with exact public strings preserved.

## Initial plan

1. Inventory provider validation declarations and every direct caller from refreshed `main`.
2. Add associated provider/value actions and focused owner tests without changing wire behavior.
3. Remove detached core exports and migrate sync-store, WASM, composition, and test callers.
4. Enable ownership denial and run formatting, diff, size, and Loom gates.
5. Push one cohesive PR, complete exact-head hosted validation, merge, and publish Workbench closeout.

## Completion evidence

- Final PR head, merge SHA, remote Loom, hosted checks, deployment, readiness, and Workbench worklog/statistics.

## Safety review

- This plan contains no prompt transcript, secret, private data, diagnostic detail, local path, or unnecessary infrastructure detail.
