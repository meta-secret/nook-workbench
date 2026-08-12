---
title: Complete semantic TypeScript parameter contracts and WASM name coherence
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
started_at: 2026-08-12T08:13:00Z
agent: codex
---

# Complete semantic TypeScript parameter contracts and WASM name coherence

## Interpreted request

Finish the stricter TypeScript API migration across the main vault and shared
vault sources after completing the extension and research slices. Preserve
Rust ownership for portable policy. Complete the related Rust/WASM callable
name migration, merge every owned delivery PR, and verify the resulting Main
head.

## Requirements

- Require one parameter per authored function or method.
- Require named semantic contracts for every object-shaped parameter.
- Reject raw object call arguments, generic contract names, object-valued
  defaults, `object`, `unknown`, and generic application value bags.
- Use explicit domain variants instead of optional-state ambiguity.
- Keep portable policy, validation, workflow state, and closed vocabularies in
  Rust and expose them through typed WASM boundaries.
- Preserve authored Rust callable names in generated JavaScript without
  callable `js_name` overrides or TypeScript aliases.
- Resolve review feedback before waiting for checks, validate exact heads, and
  squash-merge every owned PR.
- Verify the final Main workflow and repair regressions before completion.

## Constraints and exclusions

- Generated bindings are excluded from authored TypeScript checks.
- Host-owned callback signatures may retain narrow documented exceptions.
- Product behavior and visual design remain unchanged.
- Each PR remains below 5,000 authored changed lines and owns a cohesive module
  boundary.
- Other agents' issues, branches, pull requests, and checks remain untouched.

## Change budget and PR sequence

- Estimated authored changed lines: 12000
- Owning modules, packages, or layers: shared vault libraries, vault UI,
  application tests and e2e helpers, Rust WASM exports, preflight, and Cortex.
- Public or cross-module interfaces: shared vault function contracts and
  generated Rust/WASM callable names.
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 4500
- Current PR slice and acceptance evidence: shared vault libraries and leaf callers; Acceptance evidence: enabled ESLint scope, focused web checks, exact-head validation, and zero unresolved review threads.
- PR slices and acceptance evidence:
1. shared vault libraries and leaf callers; Acceptance evidence: enabled ESLint scope, focused web checks, exact-head validation, and zero unresolved review threads.
2. vault components and application tests and e2e; Acceptance evidence: complete web validation and zero unresolved review threads.
3. remaining Rust WASM callable names and syntax-aware preflight; Acceptance evidence: focused Rust and WASM tests plus exact-head validation.
4. final enforcement expansion and Main verification; Acceptance evidence: repository exact-head and Main workflows green.

## Initial plan

1. Inventory violations against current Main and compare the saved checkpoint
   only for intended feature changes.
2. Migrate shared leaf modules before dependent vault components.
3. Expand ESLint enforcement after each source slice is compliant.
4. Complete callable-name migration and syntax-aware preflight enforcement.
5. Validate, address comments, merge, and repeat for every slice.
6. Publish completion records and verify or repair the resulting Main head.

## Completion evidence

- All authored Nook web packages are covered by the semantic parameter rules.
- Rust/WASM callable names remain directly coherent and are mechanically
  enforced.
- Every delivery PR passes exact-head validation with zero unresolved threads.
- Every owned PR is squash-merged.
- The final Main head completes all required workflows successfully.

## Safety review

- This record contains no raw prompt, transcript, secret, private data, raw
  log, local path, or unnecessary infrastructure detail.
