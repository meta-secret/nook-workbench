---
title: Compile Cortex policy relationships
feature: agent-workflow
issue: issues/agent-workflow/cortex-semantic-debt.md
started_at: 2026-08-31T05:08:27Z
agent: codex
gizmo_id: cortex-contract-compiler
---

# Task plan

## Interpreted request

Add a small repository-native compiler that prevents mechanically decidable
Cortex inconsistencies before review. Keep policy definitions in reviewed
TypeScript. Prove the design on missing cross-team policy reachability and
missing compatibility safeguards for persisted representation changes.

## Requirements

- Keep the implementation inside the existing Loom TypeScript and Bun stack.
- Reject policy coverage that is unreachable from the owning context.
- Reject persisted-schema policy without an explicit compatibility safeguard.
- Produce focused diagnostics with concrete policy and context identifiers.
- Integrate the checks into the normal Cortex audit.
- Add positive and adversarial Bun tests for both inconsistency classes.
- Update only the AI-owned Cortex authority needed to describe the compiler.
- Open one pull request and obtain exact-head GitHub Actions and Codex review
  evidence.

## Constraints and exclusions

- Do not introduce another configuration language, policy engine, or runtime.
- Do not infer executable topology from Markdown or model output.
- Do not attempt to compile arbitrary prose semantics.
- Do not modify foreign-team policy meaning in this slice.
- Do not run local Rust, WASM, product, browser, or container builds.
- Leave the pull request open for review rather than merging it.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: cortex-contract-compiler
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Loom Cortex contract domain, compiler, Cortex audit integration, focused Bun tests, and AI Cortex consistency policy
- Ownership units:
1. Capability: Typed Cortex policy relationship compilation; Gizmo ID: cortex-contract-compiler; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused positive and adversarial Bun tests prove policy reachability and persisted-schema safeguards, the Cortex audit reports typed findings, and exact-head hosted validation plus Codex review complete
- Public or cross-module interfaces: Cortex audit report findings and static policy/context contract definitions
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Compile deterministic Cortex policy relationships and safeguards; Acceptance evidence: focused Bun tests, complete Loom verification, Cortex audit, pre-push hygiene, exact-head GitHub Actions, and Codex review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: cortex-contract-compiler; Gizmo name: Cortex contract compiler; Predecessor Gizmo ID: None; Compile deterministic Cortex policy relationships and safeguards; Estimated authored changed lines: 650; Acceptance evidence: focused Bun tests, complete Loom verification, Cortex audit, pre-push hygiene, exact-head GitHub Actions, and Codex review

## Initial plan

1. Model contexts, policies, coverage, dependencies, and safeguards as closed
   TypeScript enums and discriminated unions.
2. Compile the reviewed registry into deterministic reachability and safeguard
   diagnostics.
3. Integrate findings into the Cortex audit and add adversarial fixtures for
   the two observed review classes.
4. Update the AI Cortex consistency authority and run focused plus complete
   Loom gates.
5. Push one PR, request exact-head validation and Codex review, then preserve
   the open review result for evaluation.

## Completion evidence

- The compiler rejects a foreign policy that applies to an owned context but
  lacks a direct read-only import.
- The compiler rejects persisted representation policy without compatibility
  evidence requirements and a schema-policy dependency.
- The current reviewed registry compiles without findings.
- Loom verification, Cortex audit, pre-push, hosted validation, and Codex
  review results are recorded against the same pull-request head.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
