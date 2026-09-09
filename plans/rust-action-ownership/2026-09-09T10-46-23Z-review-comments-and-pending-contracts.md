---
title: Address PR feedback and pending API contracts
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-09T10:46:23Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Address every actionable comment on PR1573, preserve and complete the pending user-directed TypeScript Result, restricted-static and consuming-state contract refactors, and push changes. Review/comment work is now authorized. Tests and compiler/build execution remain deferred. First repair the runtime-dependency gate integration introduced by the preceding Zod change so the normal delegation renderer works.

## Requirements

- Carry Rust API changes through their WASM and TypeScript consumers.
- Keep unit-test sources consistent with revised APIs and capture meaningful state invariants.
- Preserve cryptography, authorization, wire formats, and secret lifecycle boundaries.
- Deliver one pull request and stop before merge.

## Constraints and exclusions

This snapshot supersedes the earlier typestate plan for workflow scope: remaining work is implementation only. The user has authorized PR comment collection and fixes. Tests, compiler/build execution, lint/check workflows and unrelated validation remain deferred. Normal source inspection and required fixture calculations remain part of implementing coherent changes. Earlier Rust/browser hygiene was completed before this instruction.

- The user explicitly waived the pull-request addition limit for this mission.
- Collect and address PR comments; do not execute tests or dispatch validation suites.
- Keep authored files within the source-size limit. Do not introduce artificial state machines or generic utility owners.
- Generated and vendored code are not independently rewritten. Agent tooling, executable-skill TypeScript implementations, infrastructure scripts and preflight are included through separately assigned owners. Deployment behavior, infrastructure topology and repository PR-budget policy remain unchanged. Canonical function-ownership/domain-API policy and directly relevant Cortex guidance are included.

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

## Migration scope

AI owns canonical TypeScript policy, shared Result convention and tooling consumers. Web owns product TypeScript failure paths and browser/WASM exception adapters. SRE owns infrastructure TypeScript failures. Existing external callbacks and CLI boundaries must expose failures through their required reporting contract without hiding or silently ignoring them. No tests, compilation or review work is authorized.

## Initial plan

1. Repair runtime-dependency package gate integration and collect all paginated PR feedback.
2. Record every actionable comment and route bounded source fixes to owning teams, one writer at a time.
3. Complete pending typed Result, instance-method and consuming-state policies and caller migrations while preserving required external signatures and live effects.
4. Push coherent commits, publish accurate PR metadata and reply/resolve only comments whose requested changes are addressed.
5. Record any explicit outstanding limitation; no tests or merge.

## Completion evidence

- Team handoffs identify exact transformed surfaces and any remaining limitations.
- Implementation handoffs and candidate dispositions are recorded without code-verification claims.
- The pull request links this plan and the final worklog.

## Safety review

This record contains no raw prompt, chat transcript, secrets, credentials, private data, raw logs, local paths, internal hostnames, environment values, or unnecessary infrastructure details.
