---
title: Complete Nook web TypeScript API discipline rollout
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
started_at: 2026-08-09T01:50:12Z
agent: codex
---

# Complete Nook web TypeScript API discipline rollout

## Interpreted request

Finish the strict TypeScript API migration across every authored Nook web
package. Deliver the work through coherent pull requests, merge each validated
head, and finish only after the resulting Main branch is green.

## Requirements

- Enforce at most one parameter for authored functions and methods.
- Require named, explicitly typed object call arguments.
- Prohibit authored `unknown` and generic value bags in domain or application
  APIs.
- Permit generic transport values only inside dedicated ingress adapters that
  narrow immediately to concrete domain types or typed failures.
- Complete Simple Vault, Sentinel, the main web application, shared vault UI,
  scripts, tests, and supporting configuration.
- Keep portable domain and validation logic in Rust and expose it through typed
  WASM boundaries.
- Add or retain mechanical ESLint and preflight enforcement without baselines
  or broad suppressions.
- Keep every authored source file at or below 1,000 lines.
- Resolve all actionable review feedback and merge every delivery PR.
- Verify the final Main workflow and repair any failure before completion.

## Constraints and exclusions

- Generated Rust/WASM bindings are excluded from authored-source rules.
- Host-owned callback signatures may use a narrow documented exception.
- Product behavior and visual design should remain unchanged unless required to
  preserve type-safe domain ownership.
- The rollout may use multiple package-sized PRs, but no remaining package may
  be deferred.

## Initial plan

1. Inventory every remaining violation and map it to its owning package.
2. Migrate the smallest independent packages first and expand lint coverage.
3. Migrate shared libraries and application surfaces in dependency order.
4. Run host pre-push hygiene, focused hosted checks, exact-head validation,
   review resolution, readiness, and squash merge for each PR.
5. Close the Workbench rollout issue after every acceptance criterion is met.
6. Inspect the resulting Main workflow and deliver a repair PR if it is red.

## Completion evidence

- All authored Nook web packages are covered by the three static rules.
- Package checks and exact-head repository validation are green for every PR.
- Every delivery PR is squash-merged with zero unresolved review threads.
- Workbench issue, worklogs, and immutable PR statistics are published.
- The final Main workflow completes successfully.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
