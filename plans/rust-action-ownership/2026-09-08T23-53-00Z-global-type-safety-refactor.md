---
title: Consolidate product type and action ownership
feature: rust-action-ownership
issue: null
started_at: 2026-09-08T23:51:00Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Supersedes the initial product-only plan after discovery confirmed additional authored Rust and TypeScript tooling surfaces.

Complete a broad product refactoring around the existing Cortex architecture: meaningful Rust operation owners, validated domain values, explicit state transitions, and coherent typed browser consumers. Preserve product behavior and security boundaries while eliminating inconsistent API shapes.

## Requirements

- Carry Rust API changes through their WASM and TypeScript consumers.
- Keep unit-test sources consistent with revised APIs and capture meaningful state invariants.
- Preserve cryptography, authorization, wire formats, and secret lifecycle boundaries.
- Deliver one pull request and stop before merge.

## Constraints and exclusions

- The user explicitly waived the pull-request addition limit for this mission.
- Do not execute tests or local or GitHub code reviews. Do not dispatch validation suites containing tests.
- Keep authored files within the source-size limit. Do not introduce artificial state machines or generic utility owners.
- Generated and vendored code are not independently rewritten. Agent tooling and infrastructure preflight are included through separately assigned owners. Deployment behavior and infrastructure topology remain unchanged.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: global-type-safety-refactor
- Estimated authored changed lines: 25000
- Owning modules, packages, or layers: Product Rust platform, WASM boundary, browser TypeScript and Svelte consumers, agent tooling, and Rust preflight.
- Ownership units:
1. Capability: Rust operation and state ownership; Gizmo ID: global-type-safety-refactor; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Consistent Rust callers and inline test sources with explicit state transitions and meaningful owners.
2. Capability: Typed browser consumption; Gizmo ID: global-type-safety-refactor; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: All affected browser consumers use revised typed APIs and coherent test sources.
3. Capability: Pull-request delivery; Gizmo ID: global-type-safety-refactor; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Published PR with accurate scope and explicitly unexecuted tests and reviews.
4. Capability: Agent tooling API ownership; Gizmo ID: global-type-safety-refactor; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Meaningful Rust and TypeScript operation owners with preserved tooling contracts.
5. Capability: Infrastructure preflight API ownership; Gizmo ID: global-type-safety-refactor; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Typed preflight operations and coherent callers without executing validation suites.
- Public or cross-module interfaces: Rust domain methods, WASM operation owners, TypeScript adapter contracts.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 25000
- Current PR slice and acceptance evidence: Broad product type-safety refactoring; Acceptance evidence: Scoped implementation handoffs, formatting evidence, consistent caller migration, and published PR.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: global-type-safety-refactor; Gizmo name: Product type safety; Predecessor Gizmo ID: None; Broad product type-safety refactoring; Estimated authored changed lines: 25000; Acceptance evidence: Scoped implementation handoffs, formatting evidence, consistent caller migration, and published PR.

## Initial plan

1. Map remaining product ownership and state API transformations using existing architecture and lint policies.
2. Implement Rust changes and adapt Rust consumers and test sources with one writer.
3. Adapt browser consumers and test sources after the Rust interfaces settle.
4. Sequence agent-tooling and infrastructure-preflight owners for remaining repository Rust and TypeScript APIs.
5. Publish the branch, record outcomes, and create the pull request without requesting reviews or running tests.

## Completion evidence

- Team handoffs identify exact transformed surfaces and any remaining limitations.
- Formatting and changed-file hygiene are recorded without claiming compilation or test success.
- The pull request links this plan and the final worklog.

## Safety review

This record contains no raw prompt, chat transcript, secrets, credentials, private data, raw logs, local paths, internal hostnames, environment values, or unnecessary infrastructure details.
