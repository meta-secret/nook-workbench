---
title: Fix Main preflight Bake fs.write parent entitlement
feature: ci-pipeline
issue: issues/hive-isolated-agent-platform/main-failure-5099615d0e8c17b03c5c78194b179d5fd01f2611.md
started_at: 2026-08-07T14:50:00Z
agent: cursor
---

# Task plan

## Interpreted request

Latest Main failed during Native Rust verification after coverage export succeeded. The follow-on `preflight:export` Bake step asked for write access to the parent CI artifact directory and aborted with "additional privileges requested". Restore Main by granting that parent entitlement and locking the contract so nested local exports do not regress.

## Requirements

- Diagnose from the failed Main run and keep the failing revision evidence intact.
- Grant Buildx `fs.write` for the parent of `PREFLIGHT_OUTPUT_DIR` when exporting nested preflight tools.
- Create the nested output directory before Bake, matching other CI export tasks.
- Add hosted-delivery contract coverage for the parent entitlement.
- Label the fix PR with `ci:full-e2e` because the failure was observed on Main.
- Merge through normal PR validation; do not push directly to Main.

## Constraints and exclusions

- Do not disable Bake filesystem entitlements globally.
- Do not weaken cache isolation or skip checks.
- No product behavior changes outside CI export wiring and contracts.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Update `preflight:export` to mkdir the dest and allow parent plus dest `fs.write`.
3. Extend hosted delivery contracts to require the parent entitlement.
4. Format, open the PR with `ci:full-e2e`, validate, and squash-merge.

## Completion evidence

- `preflight:export` grants `fs.write` for both the nested tools dir and its parent.
- Hosted delivery contracts assert that parent entitlement wiring.
- Exact-head PR checks are green, including Main-equivalent browser suites.
- The Main failure incident records the merged PR.

## Safety review

- No raw prompts, transcripts, secrets, private data, raw logs, or local machine paths.