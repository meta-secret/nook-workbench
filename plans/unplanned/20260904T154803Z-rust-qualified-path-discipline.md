---
title: Prohibit overlong Rust qualified paths across authored workspaces
feature: unplanned
issue: null
started_at: 2026-09-04T15:48:03Z
agent: codex
gizmo_id: rust-qualified-path-discipline
supersedes: plans/unplanned/20260904T154508Z-rust-qualified-path-discipline.md
---

# Prohibit overlong Rust qualified paths across authored workspaces

## Interpreted request

Establish a repository-wide Rust import discipline that keeps item references
short and readable. Apply the same mechanically enforced convention to product,
preflight, and agent-runtime Rust, then record it in canonical Rust guidance.

## Requirements

- Deny Clippy `absolute_paths` in every authored Rust workspace.
- Set the accepted qualified-path maximum to two segments.
- Retain short module-qualified names when they communicate useful context.
- Rewrite all current authored violations without changing behavior.
- Keep vendored sources outside enforcement and mutation scope.
- Add the same rule to the owning Cortex Rust guidance.
- Complete one pull request through exact-head validation, readiness, merge,
  and lifecycle records.

## Constraints and exclusions

- Do not run Rust, WASM, or product compilation locally.
- Do not add lint allowances, wildcard imports, or alternate scanners.
- Do not modify public APIs or runtime behavior.
- Keep each workspace and Cortex edit with its functional owner.
- Stop and simplify if authored additions approach the one-PR limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-qualified-path-discipline
- Estimated authored changed lines: 1600
- Owning modules, packages, or layers: Nook platform Rust, preflight Rust, Minds Rust, workspace Clippy configuration, and canonical Cortex Rust guidance.
- Ownership units:
1. Capability: Nook platform qualified-path enforcement; Gizmo ID: rust-qualified-path-discipline; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hosted product Rust Clippy accepts every authored platform target with the two-segment limit.
2. Capability: Preflight qualified-path enforcement; Gizmo ID: rust-qualified-path-discipline; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hosted preflight validation accepts every authored preflight target with the two-segment limit.
3. Capability: Minds qualified-path enforcement and Cortex policy; Gizmo ID: rust-qualified-path-discipline; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hosted Minds Clippy and Cortex audit accept the concise-path rule and implementation.
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1600
- Current PR slice and acceptance evidence: Enforce concise paths across all authored Rust workspaces and align canonical Cortex guidance; Acceptance evidence: exact-head Rust, preflight, Minds, and Loom validation plus readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-qualified-path-discipline; Gizmo name: Rust qualified path discipline; Predecessor Gizmo ID: None; Enforce concise paths across all authored Rust workspaces and align canonical Cortex guidance; Estimated authored changed lines: 1600; Acceptance evidence: exact-head Rust, preflight, Minds, and Loom validation plus readiness.

## Initial plan

1. Apply the Clippy rule and shorten paths in the product Rust workspace.
2. Apply the same rule and cleanup to the preflight workspace.
3. Apply the rule to Minds and update canonical Cortex Rust guidance.
4. Run shared hygiene and exact-head hosted validation.
5. Resolve owned findings, prove readiness, squash merge, and publish the
   completion worklog.

## Completion evidence

- Every authored Rust workspace configures and denies Clippy
  `absolute_paths` at two segments.
- Hosted Rust, preflight, Minds, and Cortex validation passes for the exact pull
  request head.
- The pull request is ready, squash-merged, and recorded in Workbench.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
