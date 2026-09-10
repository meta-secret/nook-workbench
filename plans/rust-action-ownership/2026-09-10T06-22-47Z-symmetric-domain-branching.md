---
title: Symmetric domain branching
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-10T06:22:47Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Outcome

Make domain branching express real alternatives through shallow exhaustive matches. Replace guard-return followed by success where an expression makes both outcomes clear. Move nested decisions to their data owners; use if-let or let-else for dependent admission where matching would obscure flow. Update canonical Cortex guidance and refactor the referenced sentinel family plus evidence-backed equivalent domain owners. This is not mechanical removal of every return, propagation operator, or useful guard.

# Constraints

Preserve error, evaluation, side-effect, transaction and secret cleanup order. No tests, builds, compiler runs, typechecks, lint, code generation, reviews or validation workflows. Source inspection and write-only formatting permitted. User waived PR size and visualization prerequisites. Keep PR1573 open and unmerged.

# Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: global-type-safety-refactor
- Estimated authored changed lines: 2000; refine through source discovery, user waived size cap
- Owning modules, packages, or layers: Cortex canonical guidance and Rust domain owners
- Ownership units:
1. Capability: Canonical branching guidance; Gizmo ID: global-type-safety-refactor; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Clear match/locality guidance without universal return ban or artificial nesting.
2. Capability: Domain branching refactor; Gizmo ID: global-type-safety-refactor; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Complete selected domain owner caller chains preserve behavior and express named alternatives.
- Public or cross-module interfaces: Existing domain/serialized contracts preserved.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 2000
- Current PR slice and acceptance evidence: Canonical guidance and evidence-backed branching refactor, source handoffs only.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: global-type-safety-refactor; Gizmo name: Symmetric domain branching; Predecessor Gizmo ID: None; Estimated authored changed lines: 2000; Acceptance evidence: Committed coherent domain changes and documentation pushed to existing PR.

# Execution

Read-only discovery alongside canonical guidance authoring; one repository writer at a time. Apply selected complete domain refactor groups, preserving true early exit semantics. Commit and push, then update PR and Workbench with exact scope and deferred validation.

# Safety

No raw prompt, transcript, secret, private data or raw logs included. No new fallback machinery or widened authorization.
