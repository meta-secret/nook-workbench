---
title: Replace optional state with explicit domain models
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-10T03:15:52Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Interpreted outcome

Inventory authored Rust Option uses throughout the repository and replace optional field bags, string discriminators and domain outcomes with explicit meaningful states. Begin with duplicated sentinel payload headers. Update complete caller chains and typed boundary consumers. Preserve protocol admission, persisted data semantics, cryptographic boundaries and secret cleanup. Do not substitute an anonymous generic renamed Option. External trait requirements must remain compatible and be identified explicitly.

# Constraints

User defers all tests, builds, compiler runs, typechecks, lint, code generation, reviews and workflow dispatch. Source inspection and write-only formatting are permitted. The user waived PR size and visualization prerequisites. Keep existing PR open and unmerged.

# Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: global-type-safety-refactor
- Estimated authored changed lines: 10000 (user waived size cap; inventory refines estimate)
- Owning modules, packages, or layers: Rust auth2, core, WASM and supporting crates; direct TypeScript consumers when required.
- Ownership units:
1. Capability: Explicit Rust domain states; Gizmo ID: global-type-safety-refactor; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Complete inventoried caller chains use meaningful outcomes and maintain admission semantics.
2. Capability: Typed browser consumers; Gizmo ID: global-type-safety-refactor; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Authored consumers match changed Rust contract source.
- Public or cross-module interfaces: Named absence and lifecycle outcomes; preserve serialized contracts or explicitly document necessary migration.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 10000 (user waiver)
- Current PR slice and acceptance evidence: Inventory-guided complete optional-state migration with source handoffs; execution validation deferred.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: global-type-safety-refactor; Gizmo name: Explicit optional states; Predecessor Gizmo ID: None; Estimated authored changed lines: 10000; Acceptance evidence: Coherent source and callers, scoped commits pushed to PR1573, remaining external constraints explicitly recorded.

# Execution

Read-only inventory runs alongside the first sentinel implementation. Sequence one repository writer through the resulting module groups. Each writer returns changed contracts, callers, persisted-shape decisions and deferred execution evidence. Publish coherent commits and update PR/Workbench records.

# Safety

No raw prompt, transcript, secrets, private data, local paths or raw logs included. Avoid defaulting absent required values, weakened admission or unsafe move-out techniques.
