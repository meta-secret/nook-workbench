---
title: Move fields through owned value conversions
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-10T03:01:11Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Replace Rust conversions that accept a borrowed aggregate only to clone its fields with consuming conversions that move owned values. Start with join-request to vault-member conversion and inspect equivalent authentication, storage, import and event conversions. Use From or TryFrom when the conversion semantics fit.

## Requirements and exclusions

Update full caller ownership chains instead of moving clones to call sites. Keep borrowing when both the original and new value are actually needed, and preserve secret cleanup, error behavior and transactional ownership. Do not resume unrelated blanket mutation or Result migration. Tests, builds, compilation, typechecks, lint, code generation, reviews, workflow dispatch and merge remain deferred. Source inspection and write-only formatting allowed. User waived PR size and visualization limits. Publish to existing PR1573.

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

Read-only CORE discovery identifies avoidable borrowed-clone conversions and direct caller ownership. Root selects finite evidence-backed groups. One CORE writer implements consuming conversions and complete caller/fixture source adaptations at a time, routing any ABI dependencies separately. Record deliberate retained snapshots, commit and push coherent changes, update existing PR and Workbench.

## Safety review

No raw prompt, transcript, secrets, private data, local paths or raw logs included. No unsafe move-out placeholders or clone-at-callsite workaround. Existing domain and secret lifetimes remain preserved.
