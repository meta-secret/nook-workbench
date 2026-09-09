---
title: Complete Result and ownership migrations
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-09T15:44:46Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Complete the remaining explicit Result propagation, instance-owned TypeScript behavior, and consuming Rust state transitions across product and tooling code. The earlier comment pass completed its review scope but left these migrations unfinished. Resume them through complete consumer chains and publish to the existing PR.

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

AI owns canonical TypeScript policy, shared Result convention and tooling consumers. Web owns product TypeScript failure paths and browser/WASM exception adapters. SRE owns infrastructure TypeScript failures. Existing external callbacks and CLI boundaries must expose failures through their required reporting contract without hiding or silently ignoring them. No tests, compilation or new review work is authorized.

## Initial plan

1. AI completes executable skill providers and host Result propagation, then Loom codec, host services, statistics, agent workflows and module delivery. Existing dependency foundation is reused.
2. Development core completes consuming aggregate transitions and all callers, preserving external trait signatures and secret cleanup.
3. Web development completes explicit Result and instance operations throughout browser consumers, with coherent boundary handling and package dependencies.
4. SRE completes tooling dependency ownership, infrastructure and CI-agent Result chains, Hive console boundaries and pure Rust traversal ownership.
5. Functional owners finish discovered cross-team caller dependencies sequentially. Publish changes and accurate completion records without running tests, compilation, reviews or validation workflows; stop at the open PR.

## Completion evidence

- Team handoffs identify exact transformed surfaces and any remaining limitations.
- Implementation handoffs and candidate dispositions are recorded without code-verification claims.
- The pull request links this plan and the final worklog.

## Safety review

This record contains no raw prompt, chat transcript, secrets, credentials, private data, raw logs, local paths, internal hostnames, environment values, or unnecessary infrastructure details.

## Superseding scope

This snapshot supersedes the comments-first plan for the remaining implementation. All 13 collected review threads were addressed in the preceding pass. The user now explicitly authorizes completion of the queued migrations and proceeding without the delegation visualization prerequisite. No further confirmation is needed for dependency repairs within this scope.
