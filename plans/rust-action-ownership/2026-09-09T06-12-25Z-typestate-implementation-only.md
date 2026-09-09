---
title: Restrict application operations to valid typed stages
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-09T06:12:25Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Extend PR #1573 with a repository-wide inventory and implementation of simple typestate opportunities. Represent real actionable phases as separate data-carrying types with private construction and stage-specific operations. Consume transitions where ownership permits, carry validated values forward, and make wrong-state API use unavailable while preserving runtime authorization and product behavior.

## Requirements

- Carry Rust API changes through their WASM and TypeScript consumers.
- Keep unit-test sources consistent with revised APIs and capture meaningful state invariants.
- Preserve cryptography, authorization, wire formats, and secret lifecycle boundaries.
- Deliver one pull request and stop before merge.

## Constraints and exclusions

This snapshot supersedes the earlier typestate plan for workflow scope: remaining work is implementation only. The user has deferred all verification until separate instruction; no formatter checks, lint, source audits, typechecks, compilation, tests, reviews, or validation workflows will be run. Normal source inspection and required fixture calculations remain part of implementing coherent changes. Earlier Rust/browser hygiene was completed before this instruction.

- The user explicitly waived the pull-request addition limit for this mission.
- Do not execute tests or local or GitHub code reviews. Do not dispatch validation suites containing tests.
- Keep authored files within the source-size limit. Do not introduce artificial state machines or generic utility owners.
- Generated and vendored code are not independently rewritten. Agent tooling, executable-skill TypeScript implementations, infrastructure scripts and preflight are included through separately assigned owners. Deployment behavior, infrastructure topology, policy Markdown, and the repository PR-budget policy remain unchanged.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: global-type-safety-refactor
- Estimated authored changed lines: 160000
- Owning modules, packages, or layers: Product Rust platform, WASM boundary, browser TypeScript and Svelte consumers, agent tooling, executable-skill TypeScript implementations, infrastructure TypeScript scripts, and Rust preflight.
- Ownership units:
1. Capability: Rust operation and state ownership; Gizmo ID: global-type-safety-refactor; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Consistent Rust callers and inline test sources with explicit state transitions and meaningful owners.
2. Capability: Typed browser consumption; Gizmo ID: global-type-safety-refactor; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: All affected browser consumers use revised typed APIs and coherent test sources.
3. Capability: Pull-request delivery; Gizmo ID: global-type-safety-refactor; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Published PR with accurate scope and explicitly unexecuted tests and reviews.
4. Capability: Agent tooling API ownership; Gizmo ID: global-type-safety-refactor; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Meaningful Rust and TypeScript operation owners with preserved tooling contracts.
5. Capability: Infrastructure preflight API ownership; Gizmo ID: global-type-safety-refactor; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Typed preflight operations and coherent callers without executing validation suites.
- Public or cross-module interfaces: Rust domain methods, WASM operation owners, TypeScript adapter contracts.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 160000
- Current PR slice and acceptance evidence: Broad product type-safety refactoring; Acceptance evidence: Scoped implementation handoffs, formatting evidence, consistent caller migration, and published PR.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: global-type-safety-refactor; Gizmo name: Product type safety; Predecessor Gizmo ID: None; Broad product type-safety refactoring; Estimated authored changed lines: 120000; Acceptance evidence: Scoped implementation handoffs, formatting evidence, consistent caller migration, and published PR.

## Typestate scope

Development core owns authored Rust/WASM in nook-app/nook-platform. Web development owns browser TypeScript/Svelte. AI owns Loom and authored Cortex executable scripts. SRE owns preflight, Hive, CI and infrastructure sources. Each owner inventories operation preconditions and capability construction, implements applicable state splits, and records why remaining candidates are already safe or do not have a real lifecycle. Keep simple separate structs/classes and exhaustive outcomes; do not introduce a generic phase framework, ornamental states, or speculative recovery.

## Initial plan

1. Inspect concrete actionable state flows across all four ownership areas using Cortex simple typestate examples.
2. Refactor Rust stages, constructors and consumers; adapt unit sources without executing tests.
3. Refactor browser lifecycle capabilities and Rust consumers, then tooling and infrastructure with one writer at a time.
4. Resolve cross-team typed contract dependencies and account for remaining candidates.
5. Commit and push the completed refactoring, update existing PR #1573 and Workbench records, and defer all verification until separately instructed.

## Completion evidence

- Team handoffs identify exact transformed surfaces and any remaining limitations.
- Formatting and changed-file hygiene are recorded without claiming compilation or test success.
- The pull request links this plan and the final worklog.

## Safety review

This record contains no raw prompt, chat transcript, secrets, credentials, private data, raw logs, local paths, internal hostnames, environment values, or unnecessary infrastructure details.
