---
title: Prohibit overlong Rust qualified paths
feature: unplanned
issue: null
started_at: 2026-09-04T15:45:08Z
agent: codex
gizmo_id: rust-qualified-path-discipline
---

# Prohibit overlong Rust qualified paths

## Interpreted request

Make authored Rust use imports or concise module aliases instead of long
qualified item paths. Enforce the style with Clippy and record the same rule in
canonical Cortex Rust guidance.

## Requirements

- Deny Clippy `absolute_paths` across every authored Rust workspace.
- Configure the maximum accepted path length at two segments.
- Preserve concise qualified forms such as `auth::Item` when they improve
  clarity.
- Replace every current violation without changing runtime behavior.
- Document the enforced Rust rule in the owning Cortex guidance.
- Deliver one exact-head pull request through remote validation, readiness,
  squash merge, and completion records.

## Constraints and exclusions

- Do not run Rust, WASM, or product compilation locally.
- Do not edit vendored Rust sources.
- Do not add lint allowances or fallback enforcement.
- Keep imports explicit and avoid wildcard imports.
- This is a style and maintainability change with no intended public API or
  runtime behavior change.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-qualified-path-discipline
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: Authored Rust workspaces, Clippy configuration, and canonical Cortex Rust guidance.
- Ownership units:
1. Capability: Rust qualified-path enforcement and cleanup; Gizmo ID: rust-qualified-path-discipline; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: all authored Rust paths satisfy Clippy `absolute_paths` with a two-segment maximum.
2. Capability: Cortex Rust qualified-path policy; Gizmo ID: rust-qualified-path-discipline; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: owning Rust guidance states the same enforced rule and passes Cortex audit.
- Public or cross-module interfaces: None.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Enforce concise authored Rust paths and align canonical Cortex guidance; Acceptance evidence: exact-head Rust and Loom validation plus readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-qualified-path-discipline; Gizmo name: Rust qualified path discipline; Predecessor Gizmo ID: None; enforce concise authored Rust paths and align canonical Cortex guidance; Estimated authored changed lines: 1200; Acceptance evidence: exact-head Rust and Loom validation plus readiness.

## Initial plan

1. Inventory workspace lint configuration and current overlong paths.
2. Enable the Clippy restriction and shorten all authored Rust violations.
3. Add the canonical Cortex Rust rule and check topic consistency.
4. Run shared hygiene, publish one pull request, and obtain exact-head hosted
   validation.
5. Resolve owned findings, prove readiness, squash merge, and publish the
   completion worklog.

## Completion evidence

- Every authored Rust workspace denies `clippy::absolute_paths` with a maximum
  of two path segments.
- Remote Rust validation and Cortex/Loom verification pass on the exact pull
  request head.
- The pull request is ready, squash-merged, and recorded in Workbench.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
