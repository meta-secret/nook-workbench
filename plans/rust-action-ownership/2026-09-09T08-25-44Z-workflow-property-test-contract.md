---
title: Express workflow invariants with property-based tests
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
started_at: 2026-09-09T08:25:44Z
agent: codex
gizmo_id: global-type-safety-refactor
---

# Task plan

## Interpreted request

Replace duplicated test-only classifier contract checking with property-based source coverage where appropriate. Trace the cited helper before removing it: runtime admission of untrusted snapshots must remain enforced. Generate meaningful domain observations and test independent invariants, valid projections and rejection boundaries without duplicating the implementation as an oracle. The user has requested test-source refactoring, not test execution.

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

## Migration scope

Development core owns the focused authentication workflow snapshot contract and inline property-test sources, plus necessary existing test-framework dev dependency wiring. Preserve runtime wire admission, typed domain models, legal progress combinations and failure behavior. Prefer an existing property framework; avoid introducing a general test infrastructure or weakening production validation.

## Initial plan

1. Trace runtime and test uses of the cited helper and identify current property-testing conventions.
2. Refactor test-only duplicated checking into independent generated properties, retaining necessary runtime admission.
3. Update affected source examples and dependency declarations only where required.
4. Commit and push to PR #1573; publish exact source changes and execution limitations.

## Completion evidence

- Team handoffs identify exact transformed surfaces and any remaining limitations.
- Implementation handoffs and candidate dispositions are recorded without code-verification claims.
- The pull request links this plan and the final worklog.

## Safety review

This record contains no raw prompt, chat transcript, secrets, credentials, private data, raw logs, local paths, internal hostnames, environment values, or unnecessary infrastructure details.
