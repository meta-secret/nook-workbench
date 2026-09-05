---
title: Prohibit fully qualified Rust paths in Cortex
feature: unplanned
issue: null
started_at: 2026-09-05T00:44:00Z
agent: codex
gizmo_id: rust-qualified-path-cortex
---

# Task plan

## Interpreted request

Capture the completed Rust path migration as canonical Cortex guidance. Prohibit long fully qualified names while preserving meaningful module or type context.

## Requirements

- Limit authored non-import Rust paths to two inline segments.
- Allow concise contextual names such as `auth::Item`.
- Require standard-library calls such as `str::from_utf8(data)` instead of `std::str::from_utf8(data)`.
- Prohibit context-free imports such as a bare `from_utf8(data)` call.
- Name Clippy `absolute_paths` denial and `absolute-paths-max-segments = 2` as the mechanical baseline.

## Constraints and exclusions

- Update the existing Rust coding card instead of creating duplicate policy.
- Do not change Rust code, manifests, Loom implementation, or knowledge-graph paths.
- Keep the change instruction-only and below the 2,000-authored-addition limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-qualified-path-cortex
- Estimated authored changed lines: 45
- Owning modules, packages, or layers: Development Core Rust skill card and AI skill registry
- Ownership units:
1. Capability: canonical Rust qualified-path rule; Gizmo ID: rust-qualified-path-cortex; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: semantic review against the merged crate migrations and Cortex audit
2. Capability: skill-registry purpose alignment; Gizmo ID: rust-qualified-path-cortex; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex audit reports the registry description matches the owning card
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 45
- Current PR slice and acceptance evidence: Update the canonical Rust card and registry; Acceptance evidence: Cortex audit, exact-head review, readiness, and merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-qualified-path-cortex; Gizmo name: Rust qualified path Cortex rule; Predecessor Gizmo ID: None; Update the canonical Rust card and registry; Estimated authored changed lines: 45; Acceptance evidence: Cortex audit, exact-head review, readiness, and merge

## Initial plan

1. Publish this task-start plan.
2. Delegate the Rust-card edit to Development Core.
3. Delegate the registry description edit to AI.
4. Review the combined diff against current manifests and migrated source examples.
5. Run the canonical Cortex checks required by the authoring cards.
6. Open, validate, review, merge, and close out the final PR.

## Completion evidence

- The canonical Rust card states the two-segment rule and meaningful-qualifier examples.
- The AI registry exposes the expanded purpose.
- Cortex mechanical checks and exact-head PR gates pass.

## Safety review

- This record contains no prompt transcript, secrets, private data, raw logs, local paths, or infrastructure credentials.
