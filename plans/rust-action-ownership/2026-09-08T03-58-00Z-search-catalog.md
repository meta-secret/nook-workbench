---
title: Rust search catalog action ownership
status: planned
plan_type: implementation
mission_controller: Gizmo Prime
current_gizmo_id: rust-action-ownership-search-catalog
issue: issues/rust-action-ownership/search-catalog-actions.md
gizmo_id: rust-action-ownership-search-catalog
created_at: 2026-09-08T03:58:00Z
---

# Task plan

## Interpreted request

Continue the Rust action ownership migration in a cohesive slice. The search catalog's production actions must be owned by the catalog domain types so the action graph is explicit and the Dylint policy can enforce it, while ordinary test helpers remain valid under `cfg(test)`.

## Requirements

- Keep search catalog bucket selection, bucket masks, payload digests, and integrity tags attached to existing domain types.
- Activate `unowned_function` and invalid-suppression enforcement for the module.
- Preserve encrypted bucket persistence, tamper recovery, reconciliation, and query behavior.
- Keep the implementation simple and within the 2,000 authored-addition limit.
- Validate with formatting, diff hygiene, Cortex pre-push, hosted required checks, exact-head readiness, remote Loom verification, and merge verification.
- Publish the issue, immutable plan, worklog, and statistics through Workbench.

## Constraints and exclusions

- No new wrapper or subsystem; use associated functions on `SecretSearchCatalog` and `SecretSearchCatalogEntry`.
- No changes to storage formats, cryptographic domains, public WASM contracts, or unrelated modules.
- Do not run local product compilation or tests; use repository-permitted formatting and hosted validation.
- Test-only free helpers remain allowed by the established `cfg(test)` exception.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-search-catalog
- Estimated authored changed lines: 420
- Owning modules, packages, or layers: nook-core vault search catalog and its Rust lint boundary
- Ownership units:
1. Capability: Search catalog action ownership; Gizmo ID: rust-action-ownership-search-catalog; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: behavior-preserving catalog tests and no production free functions.
- Public or cross-module interfaces: None; all migrated actions remain private associated functions.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 420
- Current PR slice and acceptance evidence: migrate bucket, digest, mask, and integrity actions and activate enforcement; Acceptance evidence: formatting and Cortex pre-push pass, hosted Dylint and behavior checks pass, readiness and remote Loom verify pass, and merged main contains the exact head.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-search-catalog; Gizmo name: Search Catalog Action Ownership; Predecessor Gizmo ID: None; migrate bucket, digest, mask, and integrity actions and activate enforcement; Estimated authored changed lines: 420; Acceptance evidence: formatting and Cortex pre-push pass, hosted Dylint and behavior checks pass, readiness and remote Loom verify pass, and merged main contains the exact head.

## Initial plan

1. Add the module-level ownership policy attributes.
2. Replace free production helpers with associated functions on the catalog and entry types; update internal callers and test references.
3. Run rustfmt and diff checks, then the permitted Cortex pre-push gate.
4. Publish one focused PR, resolve review findings, run exact-head hosted validation and remote Loom verification, merge, verify main, and publish Workbench closeout records.

## Completion evidence

- The search catalog module has no production free functions.
- Test-only helper functions remain accepted under `cfg(test)`.
- Hosted Dylint, required checks, exact-head readiness, and remote Loom verification pass.
- The PR is merged and main is verified at the merge SHA.
- Workbench issue, worklog, and statistics are published.

## Safety review

This plan contains no secrets, private data, raw prompts, transcripts, raw logs, or local paths. It changes only the bounded Rust search catalog ownership surface and preserves existing encryption and integrity behavior.
