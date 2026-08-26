---
title: Merge production runtime reachability
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/production-runtime-reachability.md
plan: plans/executable-skill-capabilities/20260826T080541Z-sixteen-slice-executable-skill-stack.md
nook_pr: 1124
status: completed
started_at: 2026-08-26T09:09:13Z
finished_at: 2026-08-26T09:40:27Z
agent: codex
---

# Merge production runtime reachability

## Outcome

PR #1124 merged the 1,515-line production import and subprocess closure after
the preceding stack layers were merged independently.

## Progress

- Traversed production imports, repository aliases, subprocesses, and tracked
  extensionless executables.
- Resolved the exact Bun package-script and working-directory contracts.
- Failed closed on dynamic evaluators, compound shell commands, symlinks,
  mutable or aliased launch aggregates, and unsupported shell launches.
- Added exact regressions for every bypass found by read-only semantic review.

## Implementation problems

- Initial shell and package-script handling produced false positives for the
  UI demo contract and package runner syntax.
- Repeated semantic review found fail-open cases in argument flattening,
  lexical shadows, path rebasing, and aggregate mutation.

## Decisions

- Preserve supported literal launch shapes and reject unsupported ambiguity.
- Resolve package scripts only through exact tracked package metadata.
- Keep production reachability separate from runnable configuration roots.

## Validation

- Focused verification passed 25 tests with 336 assertions.
- Full Loom verification passed 356 tests with 2,034 assertions.
- Complete exact-head PR validation, repository policy, preview deployment, and
  `task pr:ready PR=1124` passed at
  `cd3b94af0e8b5010513a81ede929938975fccdeb`.
- Every authored file remained below 1,000 lines.

## Remaining work

- Reconstruct executable source policy as the next independent small PR.
- Preserve analyzer, registry, executor, and activation as later layers.
