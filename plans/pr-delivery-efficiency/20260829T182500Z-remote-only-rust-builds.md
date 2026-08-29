---
title: Prohibit accidental local Rust builds
feature: pr-delivery-efficiency
issue: null
started_at: 2026-08-29T18:25:00Z
agent: codex
gizmo_id: remote-only-rust-builds
---

# Task plan

## Interpreted request

Make local source work predictably lightweight by preventing ordinary developer and agent commands from compiling the Rust workspace on the host or through the local container builder. Keep source formatting fast and route substantive Rust build, lint, test, coverage, and WASM evidence through the existing trusted remote execution architecture.

## Requirements

- Inventory every public Task selector and setup path that can compile Rust or WASM locally, including indirect web and aggregate commands.
- Add one fail-closed local execution boundary that prevents accidental Rust compilation while allowing trusted GitHub Actions execution.
- Give users actionable remote commands for supported validation and require an explicit, documented human diagnostic override for exceptional local compilation.
- Preserve the changed-file, tool-only formatting path; Rust formatting may use pinned rustfmt but must never compile the workspace or install product dependencies per worktree.
- Cover the enforcement, trusted-runner exception, explicit diagnostic exception, indirect callers, and formatter non-regression with repository-owned contract tests.
- Update the most specific SRE Cortex architecture, workflow, skill, and toolchain guidance so the remote-only default and narrow exceptions are unambiguous.
- Deliver one exact-head PR through focused remote evidence, complete validation, readiness, merge, and Workbench completion records.

## Constraints and exclusions

- Keep the existing ARC, Kubernetes, BuildKit, Zot, and sccache architecture; do not introduce a new execution platform.
- Do not modify portable Rust product logic, frontend behavior, security policy, or foreign-team Cortex documents.
- Do not run Cargo compilation, Rust tests, clippy, coverage, or WASM compilation on the local machine while implementing or validating this change.
- Do not weaken formatting, UI-demo, review, exact-head validation, readiness, cache isolation, or runner security boundaries.
- Preserve unrelated branches, worktrees, untracked files, and active agent work.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: remote-only-rust-builds
- Estimated authored changed lines: 700
- Owning modules, packages, or layers: SRE Task orchestration, remote execution workflow contracts, local build enforcement tests, and SRE Cortex operational guidance
- Ownership units:
1. Capability: Remote-only Rust build and verification enforcement; Gizmo ID: remote-only-rust-builds; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Contract tests prove accidental direct and indirect local Rust compilation fails closed, trusted Actions paths remain available, formatting stays compile-free, remote selectors remain allowlisted, and the SRE Cortex audit passes
- Public or cross-module interfaces: Public Task selectors for build, Rust and WASM verification, focused remote task names, and the explicit local diagnostic override
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 700
- Current PR slice and acceptance evidence: Enforce and document the existing remote-first Rust execution boundary across all local Task entry points; Acceptance evidence: shell and manifest contract tests, task graph inspection, focused remote Rust validation, complete exact-head PR validation, readiness, and Workbench records
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: remote-only-rust-builds; Gizmo name: Remote-only Rust builds; Predecessor Gizmo ID: None; Enforce and document the existing remote-first Rust execution boundary across all local Task entry points; Estimated authored changed lines: 700; Acceptance evidence: shell and manifest contract tests, task graph inspection, focused remote Rust validation, complete exact-head PR validation, readiness, and Workbench records

## Initial plan

1. Freeze current Main and map all direct and indirect local Rust and WASM compilation paths plus their remote equivalents.
2. Implement one centralized fail-closed policy, actionable remote routing, explicit diagnostic escape hatch, and focused contract coverage without running local Rust work.
3. Update SRE Cortex at the owning architecture, workflow, skill, and toolchain boundaries.
4. Validate non-Rust contracts locally, publish the exact branch head, obtain focused remote Rust evidence, and complete PR and Workbench delivery.

## Completion evidence

- Ordinary local Task paths cannot compile Rust or WASM accidentally and explain the supported remote command.
- The pinned changed-file formatter remains locally usable without Cargo builds or per-worktree dependency installation.
- Trusted GitHub Actions and the explicit human diagnostic path retain the required capability.
- Repository-owned contract tests and Cortex validation pass without local Rust compilation.
- Focused remote Rust evidence and complete exact-head PR validation pass, readiness succeeds, the PR is merged, and Workbench records are complete.

## Safety review

This plan contains no raw prompt or transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
