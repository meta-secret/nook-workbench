---
title: Turn Cortex product scenarios into executable coverage
feature: testing-quality
issue: none
started_at: 2026-08-22T17:59:50Z
agent: codex
---

# Turn Cortex product scenarios into executable coverage

## Interpreted request

Use Nook's durable product and architecture descriptions as a source of
high-value test scenarios. Compare those requirements with Rust, WASM, and
Playwright behavior. Add missing executable coverage, and enrich the owning
Cortex authority when existing tests encode useful durable behavior that the
documentation does not explain.

## Requirements

- Audit implemented Cortex product scenarios against gated Rust, WASM, and
  Playwright coverage.
- Distinguish user-observable journeys, portable domain invariants, browser
  boundary behavior, and deployment or artifact contracts.
- Add focused tests for the highest-risk missing scenarios.
- Make existing Playwright specifications reachable from the appropriate
  repository-owned gate.
- Add an executable guard that detects future ungated behavior specifications.
- Enrich product specifications only when test evidence establishes durable
  behavior worth preserving.
- Keep demos distinct from behavior-focused regression evidence.
- Preserve Rust and WASM ownership of validation, cryptography, persistence,
  and authorization policy.

## Constraints and exclusions

- Do not mechanically generate tests from Markdown prose.
- Do not encode speculative or draft product behavior as executable policy.
- Do not weaken security boundaries or move domain policy into TypeScript.
- Do not absorb unrelated source-size or importer-structure refactors from
  dormant worktrees.
- Keep heavy Rust, WASM, and browser execution on configured GitHub Actions
  runners.
- Do not modify branches, pull requests, or Workbench records owned by other
  active tasks.

## Change budget and PR sequence

- Estimated authored changed lines: 1,400
- Owning modules, packages, or layers: Cortex product specifications, Playwright project discovery and behavior specifications, portable Rust domain tests, WASM boundary tests, and preflight test contracts
- Public or cross-module interfaces: Product-scenario coverage contract and Playwright gated-spec registry
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,400
- Current PR slice and acceptance evidence: Bidirectional Cortex scenario audit with high-value Rust, WASM, and Playwright regressions plus executable gated-spec enforcement; Acceptance evidence: focused hosted Rust, WASM, web, and browser checks, Cortex audit, exact-head repository validation, and PR readiness
- PR slices and acceptance evidence: Bidirectional Cortex scenario audit with high-value Rust, WASM, and Playwright regressions plus executable gated-spec enforcement; Acceptance evidence: focused hosted Rust, WASM, web, and browser checks, Cortex audit, exact-head repository validation, and PR readiness

## Initial plan

1. Inventory implemented product invariants and executable scenario names by
   owning product specification.
2. Verify every non-demo Playwright behavior specification belongs to a
   repository-owned gate or has an explicit manual-only classification.
3. Add the highest-value missing item and recovery scenarios across Rust,
   WASM, and Playwright at their authoritative boundaries.
4. Reconcile product specifications with durable behavior proved by the new
   and existing tests.
5. Add structural enforcement for scenario registration and documentation
   consistency where the rule is deterministic.
6. Host-format, review, validate the exact head, address feedback, and
   squash-merge when ready.

## Completion evidence

- Implemented Cortex scenarios map to focused executable evidence at the
  correct architectural layer.
- Important existing behavior specifications cannot silently fall outside the
  default browser gates.
- Added tests cover meaningful security, data-loss, validation, or persistence
  scenarios rather than inflating raw test count.
- Product specifications explain durable behavior discovered from strong test
  scenarios without copying test implementation details.
- The exact pull-request head passes repository-owned validation and readiness.

## Safety review

- This record contains only public-safe product and repository context.
- It contains no transcript, credentials, private data, raw logs, or local
  filesystem paths.
