---
title: Migrate concise Rust paths in the smaller product crates
feature: unplanned
issue: null
started_at: 2026-09-04T15:50:00Z
agent: codex
gizmo_id: rust-paths-small-crates
supersedes: plans/unplanned/20260904T154803Z-rust-qualified-path-discipline.md
---

# Migrate concise Rust paths in the smaller product crates

## Interpreted request

Begin a serial pull-request migration toward concise Rust item references.
Group the smaller product crates into one bounded first delivery while retaining
module context in every shortened reference.

## Requirements

- Configure Clippy's qualified-path threshold at two segments.
- Deny the lint in each migrated crate.
- Migrate `nook-companion-core`, `nook-app-common`, `nook-auth2`,
  `nook-authenticator-domain`, `nook-replication`, and `nook-event-log`.
- Prefer imports or aliases that retain the owning module name.
- Keep behavior and public interfaces unchanged.
- Complete this first serial pull request through hosted validation, readiness,
  merge, and lifecycle records before the next crate group starts.

## Constraints and exclusions

- Do not run Rust, WASM, or product compilation locally.
- Do not migrate `nook-core`, either WASM crate, fuzz, preflight, or Minds in
  this pull request.
- Do not add wildcard imports, lint allowances, or bare function imports that
  erase useful context.
- Keep authored additions below 2,000.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-paths-small-crates
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: Six smaller Nook platform Rust crates and the shared platform Clippy threshold.
- Ownership units:
1. Capability: Qualified-path migration for smaller product crates; Gizmo ID: rust-paths-small-crates; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hosted Rust Clippy accepts all migrated crate targets with context-preserving two-segment references.
2. Capability: First serial pull-request delivery; Gizmo ID: rust-paths-small-crates; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head checks pass and the pull request is squash-merged before the next group starts.
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Migrate concise paths in six smaller product crates; Acceptance evidence: exact-head Rust and repository validation plus readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-paths-small-crates; Gizmo name: Small product crate path migration; Predecessor Gizmo ID: None; Migrate concise paths in six smaller product crates; Estimated authored changed lines: 900; Acceptance evidence: exact-head Rust and repository validation plus readiness.

## Initial plan

1. Migrate each selected crate sequentially and commit its bounded change.
2. Measure the combined diff before publication.
3. Run shared hygiene and push the coherent first branch.
4. Obtain exact-head hosted validation and resolve owned findings.
5. Prove readiness, squash merge, and publish the worklog.

## Completion evidence

- Each selected crate denies and satisfies Clippy's qualified-path rule.
- Contextual module names remain at shortened call sites.
- Hosted validation passes on the exact head.
- The first serial pull request is merged and recorded in Workbench.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
