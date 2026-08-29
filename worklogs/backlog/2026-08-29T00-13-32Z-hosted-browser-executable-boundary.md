---
title: Hosted browser executable boundary
feature: backlog
issue: issues/backlog/gh-410-add-one-command-download-and-browser-launcher-for-hosted-extension-build.md
plan: plans/backlog/2026-08-29T00-03-08Z-hosted-browser-executable-boundary.md
nook_pr: https://github.com/meta-secret/nook/pull/1190
status: completed
started_at: 2026-08-29T00:03:08Z
finished_at: 2026-08-29T00:13:32Z
agent: codex
---

# Work summary

## Outcome

Opened Nook PR #1190 with a finite Chrome/Brave override allowlist and a mandatory executable check before any approved browser is probed or launched. The focused tests cover unapproved, missing, and non-executable paths while preserving Chromium, stable Chrome, remote-debugging, and isolated-profile behavior.

## Progress

- Started from the exact requested current main commit and changed only the hosted launcher plus its shell test.
- Published the immutable task plan and linked this PR to the existing hosted-launcher Workbench issue.
- Pushed exact head `b1f8f7b6f754d4d2f16a4660897872f0c62ceb75` and completed a clean exact-head Codex review with no review threads.

## Implementation problems

- The first extension gate run found the expected fresh-checkout dependency and generated-WASM prerequisites. Installing locked web dependencies and running the repository WASM build resolved setup, after which the gate passed.
- Complete-validation dispatch did not start because the CI agent classified the Codex connector's own mutable review-summary comment as a current-iteration finding, despite reporting the exact-head review as requested, clean, and settled with zero unresolved threads. The repository policy check passed, and no validation label was applied outside the guarded command.

## Decisions

- Arbitrary explicit executable paths remain intentionally unsupported. The finite platform list is the executable-selection security boundary.
- Executability is enforced in the common browser-binary helper so every approved override fails before version probing or launch.
- The pull request remains unmerged for the parent delivery owner's exact-readiness join.

## Validation

- Focused hosted launcher shell suite passed.
- Extension fast gate passed 203 tests plus formatting, shell syntax, static shell analysis, hosted smoke, and Brave setup checks.
- Root formatting, Loom pre-push, diff checks, repository policy, and exact-head Codex review passed.
- Authored diff is 124 changed lines; the largest authored file is 471 lines.

## Remaining work

- Parent-owned exact-head validation/readiness and merge after the CI-agent review-summary classification is resolved or an authorized validation-dispatch path is selected.
