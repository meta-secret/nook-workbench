---
title: Prohibit generic TypeScript object types
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
started_at: 2026-08-11T08:22:29Z
agent: codex
---

# Prohibit generic TypeScript object types

## Interpreted request

Extend Nook's strict TypeScript API discipline so generic object types cannot
erase the meaning of domain values or message branches. Replace current
violations with concrete protocol, domain, or host-boundary types. Deliver the
change through a validated and merged pull request.

## Requirements

- Prohibit authored lowercase `object` types in enforced TypeScript and Svelte.
- Keep type guards such as `typeof value === 'object'` available for runtime
  inspection.
- Reject generic substitutes that reduce branch clarity.
- Require concrete structs, enums, unions, identifiers, or dedicated boundary
  types.
- Update durable TypeScript guidance and executable skill metadata.
- Extend ESLint and preflight contracts with regression coverage.
- Migrate every existing violation in the newly enforced source scope.
- Resolve actionable review feedback and squash-merge the exact validated head.

## Constraints and exclusions

- Generated Rust/WASM bindings are excluded.
- Runtime uses of the JavaScript string `'object'` are not type annotations.
- Product behavior and visual design remain unchanged.
- Foreign branches, pull requests, issues, reviews, and checks remain read-only.
- Heavy product validation runs only on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: shared TypeScript API rules, extension
  message adapters, Loom lint configuration, preflight, and Cortex guidance.
- Public or cross-module interfaces: typed browser runtime message guards and
  shared ESLint configuration.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Guidance, enforcement, and source migration; Acceptance evidence: lint fixtures reject generic object types and exact-head repository validation passes.
- PR slices and acceptance evidence: Guidance, enforcement, and source migration; Acceptance evidence: lint fixtures reject generic object types and exact-head repository validation passes.

## Initial plan

1. Inventory lowercase `object` type annotations and existing enforcement.
2. Update the canonical rule, mirrors, ESLint configuration, and preflight.
3. Replace violations with concrete domain and transport boundary types.
4. Run host pre-push hygiene and publish one cohesive implementation PR.
5. Address current review feedback while exact-head checks run.
6. Pass readiness, squash-merge, and publish completion records.

## Completion evidence

- Static lint fixtures reject lowercase `object` annotations.
- Preflight proves the prohibition remains enabled in Loom and Nook web.
- Existing enforced packages pass their hosted lint, type, and test gates.
- The implementation PR is squash-merged with zero unresolved conversations.
- The linked Workbench issue, worklog, and immutable PR statistics are current.

## Safety review

This record contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
