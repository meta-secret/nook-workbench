---
title: Restore Main dependency-policy completion after the first repair merge
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-83f845c0d0a3b535b4b0db46efe918ef34314bef.md
started_at: 2026-08-22T14:06:44Z
agent: codex
---

# Task plan

## Interpreted request

Complete the same Main repair after the first delivery exposed a second exact
Main-only timeout. Preserve the merged frontend retry, raise only the
dependency-policy job's undersized wall-clock allowance, protect that allowance
with a repository contract, and deliver the required `-g2` PR through full
review, exact-head checks, squash merge, and a green resulting Main run.

## Requirements

- Preserve the first failed Main run and PR 1074 evidence.
- Record that dependency policy completed its deny checks but was canceled by
  the 20-minute job boundary before the audit command and cleanup could finish.
- Give dependency policy the same 30-minute ceiling already used by sibling
  Rust ecosystem checks.
- Add behavior-focused preflight coverage for the timeout contract.
- Deliver on the deterministic `-g2` branch with `hive` and `ci:full-e2e`, then
  repeat exact-head readiness and resulting-Main verification.

## Constraints and exclusions

- Do not weaken dependency policy, RustSec, cache isolation, or any command.
- Do not bypass checks or retry the immutable red Main delivery as completion.
- No product logic, dependency policy rule, public API, or schema change is in
  scope.

## Change budget and PR sequence

- Estimated authored changed lines: 12
- Owning modules, packages, or layers: Rust ecosystem workflow and preflight workflow contracts
- Public or cross-module interfaces: no public interface; repository-owned CI timeout contract only
- Delivery shape: One PR
- Current PR estimated authored changed lines: 12
- Current PR slice and acceptance evidence: raise the dependency-policy ceiling and lock it with preflight coverage; Acceptance evidence: focused preflight test, exact-head repository checks, browser suites, and green resulting Main
- PR slices and acceptance evidence: raise the dependency-policy ceiling and lock it with preflight coverage; Acceptance evidence: focused preflight test, exact-head repository checks, browser suites, and green resulting Main

## Initial plan

1. Increase only the dependency-policy reusable job timeout from 20 to 30 minutes.
2. Extend the Rust ecosystem preflight contract to assert the dedicated
   30-minute allowance without weakening the executed command.
3. Run focused and pre-push validation, publish and review the `-g2` PR, and
   complete full exact-head validation.
4. Squash-merge only after readiness, verify the new Main run is green, then
   publish final incident, worklog, and statistics records.

## Completion evidence

- The focused preflight contract passes.
- Exact-head PR checks and both browser suites pass with no unresolved review.
- The `-g2` PR is squash-merged and its resulting Main run passes dependency
  policy, native verification, and all other selected lanes.
- Workbench records link both deliveries and the final green Main run.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure detail.
