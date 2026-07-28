---
title: Deliver source file size refactors and enforcement end to end
feature: unplanned
issue: none
started_at: 2026-07-28T01:09:00Z
agent: codex
supersedes: plans/unplanned/2026-07-28T01-07-27Z-source-file-size-stacked-refactors.md
---

# Deliver source file size refactors and enforcement end to end

## Interpreted request

Complete the language-aware source-size migration through a sequence of focused
pull requests, owning validation, fixes, review resolution, and squash merges
until the repository-wide hard gate is green on main.

## Requirements

- Preserve the 1,000-line non-Rust and 1,500-line Rust hard limits.
- Treat Rust files over 1,000 lines as a design warning while allowing
  idiomatic colocated unit-test headroom.
- Refactor every existing hard-limit violation using cohesive architectural
  boundaries and behavior-preserving coverage.
- Keep each pull request focused and independently understandable.
- Run required host formatting before pushes and use exact-head GitHub Actions
  as the product validation boundary.
- Address actionable review feedback and fix every repository-owned check
  failure.
- Squash-merge each pull request when its exact head is ready.
- Publish linked Workbench worklogs and agent statistics for each completed
  pull request.
- Add the source-size skill, instructions, scanner, and hard preflight gate only
  after the migration makes the complete repository compliant.

## Constraints and exclusions

- Do not use baselines, changed-file-only enforcement, per-file allowlists,
  minification, generated indirection, or arbitrary line shuffling.
- Preserve product behavior, public interfaces, storage formats, typed
  Rust/WASM ownership, and browser-extension security boundaries.
- Exclude only generated code, vendored dependencies, build output, coverage,
  and non-source fixture data.
- Do not wait for optional external reviewers or post-merge Main deployment
  unless a repository-owned readiness requirement makes action necessary.

## Initial plan

1. Bring the existing vault-state refactor pull request current, fix its checks
   and feedback, and squash-merge it.
2. Re-inventory violations on current main and group them into focused
   architectural pull requests.
3. Refactor and merge Rust service, auth, WASM, extension-runtime, web UI, and
   test/tooling layers in dependency-safe order.
4. Add and merge the final durable skill and preflight enforcement layer.
5. Verify the final repository inventory, publish all required Workbench
   completion records and statistics, and report the delivered PR sequence.

## Completion evidence

- Every focused pull request is squash-merged with green exact-head
  repository-owned checks and settled actionable feedback.
- Every authored non-Rust source file is at most 1,000 lines and every authored
  Rust source file is at most 1,500 lines.
- The repository-wide scanner integration test passes without authored-code
  exemptions.
- Main contains the canonical dynamic skill, executable mirrors, repository
  instructions, and CI/preflight enforcement.
- Workbench contains linked worklogs and PR statistics for the delivered
  sequence.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
