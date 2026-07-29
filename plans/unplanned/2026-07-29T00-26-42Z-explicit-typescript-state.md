---
title: Replace implicit TypeScript absence with explicit application state
feature: unplanned
issue: ""
started_at: 2026-07-29T00:26:42Z
agent: codex
---

# Task plan

## Interpreted request

Make authored TypeScript and Svelte application state describe meaningful
domain and lifecycle variants instead of using `undefined` as an implicit
state. Capture the rule as durable repository guidance, enforce it with
syntax-aware static analysis, and migrate the complete in-scope codebase.

## Requirements

- Inventory authored TypeScript and Svelte `undefined` usage and classify each
  occurrence by semantics before editing.
- Replace domain, workflow, and lifecycle absence with discriminated unions or
  equivalent explicit state machines that make illegal combinations
  unrepresentable.
- Preserve truthful structural absence at browser, generated, optional-input,
  lookup, cache, and interoperability boundaries, normalizing it at the owning
  boundary when necessary.
- Add a canonical `.cortex` dynamic-skill card and registry entry describing
  the preferred pattern, scope, exceptions, examples, and validation.
- Add syntax-aware preflight enforcement with behavior-focused fixtures so new
  implicit application-state absence fails CI.
- Preserve Nook's Rust/WASM ownership boundary and existing behavior.
- Deliver through a formatted PR, applicable GitHub Actions validation,
  readiness audit, review-feedback resolution, and squash merge.

## Constraints and exclusions

- Do not globally ban the JavaScript `undefined` value where it is part of a
  truthful language, browser, generated, lookup, or optional-input contract.
- Do not replace `undefined` mechanically with sentinel strings, fake defaults,
  non-null assertions, casts, or one-variant wrapper types.
- Do not move browser lifecycle mechanics into Rust; portable domain policy
  remains Rust-owned.
- Do not weaken existing quality gates or add broad source exclusions.

## Initial plan

1. Build an occurrence and semantic-classification inventory across authored
   TypeScript and Svelte.
2. Define the explicit-state rule in `.cortex` and encode it in AST-backed
   preflight tests.
3. Refactor all modeled application-state occurrences package by package,
   adding focused behavior coverage where state transitions change.
4. Apply repository formatting and the UI demo contract when triggered.
5. Push a coherent branch, monitor and fix applicable GitHub Actions checks,
   settle existing feedback, pass the exact-head readiness audit, and squash
   merge.
6. Publish the linked completion worklog and AI-agent statistics.

## Completion evidence

- A committed semantic inventory and durable `.cortex` rule.
- Preflight fixtures proving forbidden application-state absence fails and
  legitimate structural absence remains accepted.
- No remaining in-scope authored domain or lifecycle state represented with
  `undefined`.
- Green applicable repository-owned PR checks on the exact merged head.
- Linked Workbench worklog and statistics record.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
