---
title: Eliminate authored Rust unwrap calls
feature: rust-domain-modeling
issue: none
started_at: 2026-07-26T23:20:21Z
agent: codex
---

# Task plan

## Interpreted request

Extend the Rust domain-modeling refactor by auditing every authored `.unwrap()`
and removing unwrap-based panics. Keep the occurrence review out of `.cortex`,
enforce the result through Clippy, and retain explicit test failure context.

## Requirements

- Audit every authored Rust `.unwrap()` across Nook, Hive/Lace, and preflight.
- Propagate or classify production failures rather than panicking.
- Replace test-only unwrap assertions with invariant-specific failure context.
- Include `.unwrap_err()` in the panic audit.
- Deny `clippy::unwrap_used` for all targets in every Rust workspace.
- Update the durable Rust coding rule without adding generated inventory files.
- Validate every Rust workspace and deliver through the existing PR.

## Constraints and exclusions

- Do not rewrite non-panicking `unwrap_or`, `unwrap_or_else`, or
  `unwrap_or_default`; those express explicit fallback policy and require
  separate domain review.
- Do not add a generated occurrence dump to `.cortex`.
- Do not change production behavior merely to silence a lint.
- No user-interface behavior is in scope.

## Initial plan

1. Count textual unwrap calls and use all-target Clippy to separate production
   paths from test-only assertions.
2. Remove `.unwrap()` and `.unwrap_err()` calls with contextual test invariants.
3. Add workspace lint enforcement and durable agent guidance.
4. Run all-target Clippy, full Rust workspace tests, repository formatting, and
   exact-head GitHub Actions.
5. Squash-merge and publish the linked completion worklog and statistics.

## Completion evidence

- Repository search finds no authored `.unwrap()` or `.unwrap_err()` calls.
- All-target Clippy enforces `clippy::unwrap_used = deny`.
- Nook, Hive/Lace, and preflight tests pass.
- Exact-head PR checks, readiness audit, and squash merge succeed.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
