---
title: Complete the Rust Option domain-state refactor
feature: rust-domain-modeling
issue: none
started_at: 2026-07-27T00:01:11Z
agent: codex
---

# Task plan

## Interpreted request

Complete an occurrence-by-occurrence review of every authored Rust `Option` use
and replace product, lifecycle, workflow, persistence, and result states with
explicit enums or required validated values. This supersedes the earlier
decision to defer named-state candidates.

## Requirements

- Review every current authored Rust `Option` occurrence in this PR.
- Convert revision presence, guarded-write results, authentication
  classification, locale parsing, sync ancestry, and all comparable named
  states instead of recording them as follow-up work.
- Preserve the already implemented required event fingerprints, signing-key
  state, no-compatibility behavior, and no-unwrap enforcement.
- Add behavior-focused tests for each converted domain state.
- Deliver through the normal formatted PR, GitHub Actions,
  feedback-resolution, readiness, and squash-merge workflow.

## Constraints and exclusions

- Retain `Option` only when it expresses an intrinsically structural Rust API
  fact such as an iterator item, collection lookup, or standard-library
  adapter, and justify the residual categories in the completion worklog.
- Do not commit a generated occurrence inventory under `.cortex` or elsewhere.
- Do not defer product, lifecycle, workflow, persistence, or result-state
  conversions.
- Do not introduce backward-compatibility DTOs or synthesized legacy fallback.
- No user-interface redesign is in scope.

## Initial plan

1. Re-audit every authored Rust `Option` occurrence and group related domain
   conversions by owning module.
2. Introduce explicit, domain-named enums or required validated values and
   update all producers, consumers, Rust/WASM boundaries, and tests.
3. Re-scan the repository and review every remaining structural `Option`.
4. Format, push the exact head, resolve feedback, and pass repository-owned
   validation.
5. Squash-merge and publish the linked completion worklog and statistics.

## Completion evidence

- Implemented domain-state conversions with behavior-focused Rust tests.
- A residual repository scan containing only justified structural uses.
- Zero authored `.unwrap()` and `.unwrap_err()` calls with Clippy enforcement.
- Green repository-owned checks on the exact PR head, resolved actionable
  feedback, successful readiness audit, and squash merge.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs,
local paths, or unnecessary infrastructure details.
