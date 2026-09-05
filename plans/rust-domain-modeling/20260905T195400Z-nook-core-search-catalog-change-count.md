---
title: Type Nook Core search-catalog change counts
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T19:54:00Z
agent: codex
gizmo_id: nook-core-search-catalog-change-count
---

# Nook Core search-catalog change counts

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace all three raw numeric `SecretSearchCatalogReconcile` fields with one `SecretSearchCatalogChangeCount` domain.
- Preserve default, changed-state, reconciliation increment, and overflow behavior.
- Preserve private WASM diagnostic logging through explicit primitive extraction.
- Reexport the domain, adapt focused zero/add/update/remove coverage, and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not expose a new wire or JavaScript API, change catalog behavior, or migrate another numeric surface.
- No Core activation, suppressions, lint changes, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated work.
- Hard limit: 40 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-search-catalog-change-count
- Estimated authored changed lines: 40
- Owning modules, packages, or layers: Nook Core search-catalog domain and facade, private WASM diagnostics, and Development Core guidance.
- Ownership units:
1. Capability: Typed search-catalog reconciliation counts; Gizmo ID: nook-core-search-catalog-change-count; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: All three reconciliation counts use one domain, default and changed semantics remain stable, private diagnostics remain numeric, residual inventory drops by three, and exact-head hosted validation passes.
- Public or cross-module interfaces: `SecretSearchCatalogReconcile` exposes typed added, updated, and removed fields; private WASM logging explicitly projects usize.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 40
- Current PR slice and acceptance evidence: Type all search-catalog reconciliation counts and the exact diagnostic consumer; Acceptance evidence: zero/add/update/remove assertions, unchanged changed/default behavior, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-search-catalog-change-count; Gizmo name: Nook Core search-catalog change counts; Predecessor Gizmo ID: None; Type all search-catalog reconciliation counts and the exact diagnostic consumer; Estimated authored changed lines: 40; Acceptance evidence: zero/add/update/remove assertions, unchanged changed/default behavior, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the count domain and type all three reconciliation fields together.
2. Reexport it and adapt internal increments, focused tests, and the private WASM log sink.
3. Verify default/change semantics, residual inventory, scope, sizes, and exact budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- Search-catalog reconciliation no longer exposes three raw numeric fields through Nook Core.
- Default, changed-state, increment, overflow, and private diagnostic behavior remain unchanged.
- Residual inventory becomes 79 declarations: 70 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
