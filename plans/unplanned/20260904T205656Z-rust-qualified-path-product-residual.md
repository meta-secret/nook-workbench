---
title: Complete product workspace concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T20:56:56Z
agent: codex
gizmo_id: product-residual-concise-paths
---

# Task plan

## Interpreted request

Remove every remaining authored Rust path above two inline segments from the product workspace and standalone Dylint crate, then consolidate the Clippy denial at each manifest-owned package boundary.

## Requirements

- Preserve meaningful owning-module context instead of importing ambiguous bare functions or types.
- Configure the product workspace and standalone Dylint crate for `absolute_paths = "deny"` with `absolute-paths-max-segments = 2`.
- Remove redundant file-level lint attributes after manifest enforcement becomes authoritative.
- Reduce the residual qualified-path inventory from 16 candidates to zero without changing behavior.
- Deliver this cleanup as one small serial pull request.

## Constraints and exclusions

- Keep authored additions below 2,000 lines and minimize net code.
- Do not change preflight, Minds, Cortex, generated output, lockfiles, dependencies, or unrelated code.
- Do not add lint allowances, wildcard imports, fallback behavior, or unrelated cleanup.
- Do not run local Rust or product builds; hosted validation owns compilation and Clippy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: product-residual-concise-paths
- Estimated authored changed lines: 80
- Owning modules, packages, or layers: nook-app/nook-platform workspace and dylint/nook-domain-api
- Ownership units:
1. Capability: Residual concise Rust paths and consolidated lint enforcement; Gizmo ID: product-residual-concise-paths; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: use-aware inventory is clean, both manifest boundaries deny absolute paths under a two-segment configuration, redundant source attributes are removed, authored additions remain within budget, hosted Clippy checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 80
- Current PR slice and acceptance evidence: Complete the product and Dylint residual migration and consolidate enforcement; Acceptance evidence: zero residual candidates, manifest denial and two-segment configuration are active at both boundaries, net code is reduced, local hygiene passes, hosted Clippy validation passes, exact-head review is clean, and readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: product-residual-concise-paths; Gizmo name: Product residual concise paths; Predecessor Gizmo ID: None; Complete the product and Dylint residual migration and consolidate enforcement; Estimated authored changed lines: 80; Acceptance evidence: zero residual candidates, manifest denial and two-segment configuration are active at both boundaries, net code is reduced, local hygiene passes, hosted Clippy validation passes, exact-head review is clean, and readiness reports no drift

## Initial plan

1. Replace the 16 residual product and Dylint paths with local imports or meaningful module-qualified paths.
2. Move product-member denial into the workspace lint table and add equivalent standalone Dylint enforcement.
3. Remove now-redundant file-level lint attributes and verify formatting, inventory, scope, and change budget.
4. Complete hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Completion evidence

- Product-member and standalone Dylint authored Rust have no non-`use` path above two segments.
- Both manifest boundaries reject future absolute-path regressions with the explicit two-segment configuration.
- The reviewed exact head reduces enforcement boilerplate, stays within budget, and merges with no unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. The change preserves product behavior and all security boundaries.
