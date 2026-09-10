---
title: Reduce handwritten boilerplate with established libraries
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-10T02:19:52Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Reduce maintenance complexity by replacing duplicate transport schemas, generic parsing, browser declarations, and presentation plumbing with established libraries or native runtime APIs. This supersedes blanket Result and mutation expansion: only demonstrated simplifications and their necessary consumers are included.

## Requirements and exclusions

Preserve public wire formats, domain validation, authorization, secret cleanup, and existing error behavior. Reuse existing dependencies first. Implement Zod schema reuse and native CLI parsing in Loom and infrastructure; official Chrome typings, existing dialog/QR primitives and native globbing in browser packages; Serde serialization derives and compatible existing COSE library reuse in Rust. Conditional Base32, MCP SDK, Clap and archive-library swaps are excluded unless they prove clearly simpler without compatibility machinery. No new state-machine, Result or queue frameworks. No tests, compilation, builds, typechecks, lint, code generation, reviews, workflow dispatch or merge. Write formatting and scripts-disabled lockfile-only dependency resolution remain authorized. User waived PR size and delegation visualization limits. Stop at updated existing PR1573.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: global-type-safety-refactor
- Estimated authored changed lines: 3000
- Owning modules, packages, or layers: Loom, infrastructure tooling, Rust core/auth wire types, browser and extension packages.
- Ownership units:
1. Capability: Schema and CLI simplification; Gizmo ID: global-type-safety-refactor; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Duplicate schemas and argument scanners replaced with fewer maintained source lines.
2. Capability: Infrastructure document simplification; Gizmo ID: global-type-safety-refactor; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Established schemas preserve document constraints and redaction.
3. Capability: Rust serialization reuse; Gizmo ID: global-type-safety-refactor; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing Serde and COSE implementations replace equivalent manual code without changed domain admission.
4. Capability: Browser library reuse; Gizmo ID: global-type-safety-refactor; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Maintained typings, UI primitives and native traversal remove custom plumbing.
- Public or cross-module interfaces: Existing wire and CLI contracts retained; native Chrome typings may require direct consumer annotations.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 3000
- Current PR slice and acceptance evidence: Library simplification on existing PR; scoped source handoffs and net diff evidence, execution deferred.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: global-type-safety-refactor; Gizmo name: Library simplification; Predecessor Gizmo ID: None; Established library reuse; Estimated authored changed lines: 3000; Acceptance evidence: Coherent source consumers, deletion totals, committed and pushed existing branch.

## Ordered execution

AI schema/CLI replacement, SRE schema/CLI replacement, CORE Serde/COSE compatibility implementation, WEB typing/dialog/QR/glob simplification; one repository writer at a time. Publish source changes and accurate worklog with execution explicitly deferred. Reject substitutions that need more custom machinery than they remove.

## Safety review

No raw prompt, transcript, secrets, private data, local paths or raw logs included. Protocol/domain rules stay owned by application code.
