---
title: Deliver typed API enforcement for Simple Vault and Sentinel
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
plan: plans/unplanned/20260809-015012-complete-nook-web-typescript-api-rules.md
nook_pr: 955
status: completed
started_at: 2026-08-09T01:50:12Z
finished_at: 2026-08-09T03:27:12Z
agent: codex
---

# Deliver typed API enforcement for Simple Vault and Sentinel

## Outcome

Simple Vault and Sentinel now enforce the single-parameter, named typed object
argument, and no-authored-`unknown` rules. Sentinel's disabled extension surface
uses the same explicit domain contract as the real consent component.

## Progress

- Added both small vault packages to the shared typed API ESLint rules.
- Replaced Sentinel placeholder values with `VaultState` and
  `ExtensionConnectRequest`.
- Migrated extension identity adoption to one named argument object.
- Added typed named Vite configuration and SPA option values.
- Repaired the focused hosted web task so its sealed image receives the exact
  source revision, with a preflight regression contract.

## Implementation problems

- Focused hosted web checks initially failed before lint because the focused
  setup task did not export the commit value consumed by Bake. The task binding
  and preflight contract were added.
- A stale sealed formatting snapshot briefly conflicted with CI's extension
  Prettier output. The CI-authoritative formatting was restored and passed a
  fresh exact-head host-format run.
- Review found an optional consent decision and panic-based test setup. Both
  were corrected before merge.

## Decisions

- Disabled feature aliases must preserve the concrete domain API, not weaken it
  with generic placeholders or optional decisions.
- Generic transport models such as `ExternalValue` remain prohibited migration
  debt and will be removed in a dedicated extension follow-up slice.
- Continue with package-sized PRs; do not defer the remaining application and
  shared UI migration.

## Validation

- `task loom:pre-push`
- Focused hosted `web:check,web:test`
- Exact-head PR validation: 14 required checks passed.
- `task pr:ready PR=955`
- [Nook PR 955](https://github.com/meta-secret/nook/pull/955)

## Remaining work

- Remove remaining reusable `ExternalValue` APIs from the extension.
- Migrate the research package, shared vault UI, and main web application.
- Verify the final merged Main workflow and repair any failure.
