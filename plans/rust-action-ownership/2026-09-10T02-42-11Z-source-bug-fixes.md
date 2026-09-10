---
title: Fix concrete Rust and TypeScript source defects
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-10T02:42:11Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Inspect current Rust, browser TypeScript and tooling source for concrete defects, then apply minimal fixes and update direct consumers. Prioritize regressions exposed by recent ownership, Result and library simplification changes. This is behavior correction, not another broad refactor.

## Requirements and exclusions

Require an actual failure path or source inconsistency for each fix. Preserve security, wire formats, secret cleanup and public APIs wherever possible. No speculative frameworks or blanket Result conversion. Tests, compilation, builds, typechecks, lint, code generation, PR review collection, workflow dispatch and merge remain deferred. Source inspection and write-only formatting are permitted. User waived PR size and visualization prerequisites. Deliver fixes to existing PR1573.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: global-type-safety-refactor
- Estimated authored changed lines: 2000
- Owning modules, packages, or layers: Loom, infrastructure tooling, Rust core/auth wire types, browser and extension packages.
- Ownership units:
1. Capability: Tooling bug correction; Gizmo ID: global-type-safety-refactor; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Duplicate schemas and argument scanners replaced with fewer maintained source lines.
2. Capability: Infrastructure bug correction; Gizmo ID: global-type-safety-refactor; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Established schemas preserve document constraints and redaction.
3. Capability: Rust behavior correction; Gizmo ID: global-type-safety-refactor; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing Serde and COSE implementations replace equivalent manual code without changed domain admission.
4. Capability: Browser behavior correction; Gizmo ID: global-type-safety-refactor; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Maintained typings, UI primitives and native traversal remove custom plumbing.
- Public or cross-module interfaces: Existing wire and CLI contracts retained; native Chrome typings may require direct consumer annotations.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 2000
- Current PR slice and acceptance evidence: Library simplification on existing PR; scoped source handoffs and net diff evidence, execution deferred.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: global-type-safety-refactor; Gizmo name: Library simplification; Predecessor Gizmo ID: None; Established library reuse; Estimated authored changed lines: 2000; Acceptance evidence: Coherent source consumers, deletion totals, committed and pushed existing branch.

## Ordered execution

Read-only functional owners investigate Rust, browser and Loom source concurrently. Gizmo selects concrete findings and grants one repository writer at a time for minimal fixes with direct caller adaptations. Record source evidence and deferred execution. Commit and push coherent fixes, update existing PR metadata, and publish worklog.

## Safety review

No raw prompt, transcript, secrets, private data, local paths or raw logs included. Concrete source defects determine the implementation scope.
