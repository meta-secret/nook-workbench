---
title: Replace ambiguous optional domain outcomes
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-10T02:51:34Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Replace the multi-device join-request optional response and related public optional domain outcomes with named exhaustive states that explain legitimate absence. Update every direct Rust and WASM consumer. This change must preserve existing behavior and distinguish domain absence from failure.

## Requirements and exclusions

Use domain-specific outcome enums and exhaustive matching, not a generic renamed Option. Preserve cryptography, authorization, state transitions and secret ownership. Start with MultiDeviceResult optional public APIs in authentication and vault metadata; discovery determines the directly coupled scope. Standard-library/third-party optional APIs and private algorithmic absence are not blanket rewritten. No tests, builds, compiler/typecheck/lint/checks, code generation, PR review collection, workflow dispatch or merge. Source inspection and write-only formatting allowed. User waived PR size/visualization limits. Publish to existing PR1573.

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

CORE identifies named outcome semantics and consumers, then implements complete Rust/WASM chains as sole writer. Any generated ABI change receives a sequential WEB consumer task; do not edit generated artifacts manually. Record exact changes and deferred execution, commit, push and update existing PR metadata and Workbench.

## Safety review

No raw prompt, transcript, secrets, private data, local paths or raw logs included. Failure and legitimate absence remain explicit, with no invented successful default.
