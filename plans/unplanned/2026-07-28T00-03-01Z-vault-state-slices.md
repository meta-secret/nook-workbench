---
title: Split the Svelte vault facade into cohesive state slices
feature: unplanned
issue: none
started_at: 2026-07-28T00:03:01Z
agent: codex
---

# Split the Svelte vault facade into cohesive state slices

## Interpreted request

Refactor the oversized Svelte vault state module into a grouped directory of
cohesive reactive state slices while retaining one stable root facade for
cross-feature workflows and existing consumers.

## Requirements

- Create a dedicated vault state directory that groups reactive UI and browser
  lifecycle state by responsibility rather than by page.
- Preserve one authoritative source for each value; admin and onboarding remain
  composed views and workflows rather than duplicated stores.
- Keep portable vault policy and closed domain types in Rust/WASM.
- Preserve runtime behavior, lifecycle cleanup, generated WASM object ownership,
  and existing component APIs during the initial extraction.
- Add focused behavior coverage for extracted state where it provides useful
  regression protection.
- Prepare a focused pull request without merging it or waiting for asynchronous
  checks to complete.

## Constraints and exclusions

- This is an internal organization refactor with no intended visual or product
  behavior change.
- Avoid a whole-application call-site rewrite; compatibility accessors on the
  root facade are acceptable during incremental extraction.
- Do not introduce page-shaped stores, copied domain DTOs, storage migrations,
  or new sensitive-data flows.
- Local validation is limited to formatting, lightweight static checks, and
  focused unit tests when useful.

## Initial plan

1. Inventory state fields, mutations, and action-module dependencies to define
   cohesive slice boundaries.
2. Add the grouped state modules and compose them from the root vault facade.
3. Migrate low-risk UI state first, then additional cohesive slices where
   contracts remain clear and behavior-preserving.
4. Add focused tests, apply formatting and the UI demo contract, and inspect the
   resulting diff for ownership or lifecycle regressions.
5. Commit, push, and open a focused pull request, then hand it off without
   merging or waiting for checks.

## Completion evidence

- The root vault facade is materially smaller and composes state from the new
  grouped directory.
- Existing call sites retain their behavior and do not gain duplicate state.
- Focused tests and lightweight repository checks pass for the extracted code.
- A non-merged pull request contains the formatted implementation.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
