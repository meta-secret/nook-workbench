---
title: Deliver source file size enforcement through focused stacked refactors
feature: unplanned
issue: none
started_at: 2026-07-28T01:07:27Z
agent: codex
supersedes: plans/unplanned/2026-07-28T00-57-34Z-enforce-source-file-line-limit.md
---

# Deliver source file size enforcement through focused stacked refactors

## Interpreted request

Introduce language-aware source-file limits without hiding existing violations,
and deliver the necessary architectural refactors as a sequence of focused,
reviewable stacked pull requests.

## Requirements

- Enforce a 1,000-line hard limit for authored non-Rust source files.
- Treat Rust files over 1,000 lines as a strong refactoring signal and enforce a
  1,500-line hard limit to accommodate idiomatic colocated unit tests.
- Keep production, test, automation, and developer-tool source in scope.
- Exclude only generated output, vendored dependencies, build output, coverage,
  and non-source fixture data.
- Refactor every hard-limit violation using cohesive responsibility boundaries,
  SOLID dependency direction, behavior-preserving tests, and language-specific
  conventions.
- Deliver independently reviewable stacked pull requests grouped by
  architectural boundary.
- Add the static enforcement gate only on the final stack layer, after the
  preceding refactors make the complete repository pass.

## Constraints and exclusions

- Preserve the existing vault-state pull request as the base of the stack.
- Do not merge pull requests or wait for asynchronous checks.
- Do not use baselines, changed-file-only enforcement, per-file allowlists,
  minification, compressed formatting, generated indirection, or arbitrary
  line shuffling.
- Preserve public behavior, storage formats, typed Rust/WASM boundaries, and
  browser-extension security boundaries.
- Run required host formatting before each push; use GitHub Actions as the
  product validation boundary.

## Initial plan

1. Update the existing vault-state branch with current main and establish it as
   the stack base.
2. Refactor oversized files in focused layers for Rust services, Rust/WASM
   boundaries, browser-extension runtime, web application and UI modules, and
   test/developer tooling.
3. Keep each layer behavior-preserving and add or retain focused coverage around
   extracted responsibilities.
4. Add the dynamic skill, repository instructions, scanner, and preflight gate
   on the final layer.
5. Format, push, and open each pull request against the preceding stack branch,
   without merging or waiting for asynchronous checks.

## Completion evidence

- Every authored non-Rust source file is at most 1,000 lines and every authored
  Rust source file is at most 1,500 lines.
- Focused scanner tests prove language-specific boundaries, deterministic
  diagnostics, and generated/vendor exclusions.
- The repository-wide source-size integration test passes without baselines or
  per-file exemptions for authored code.
- Each architectural layer has a linked pull request with a narrow diff and
  explicit dependency on the preceding stack layer.
- The final pull request contains the durable skill and CI/preflight
  enforcement.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
