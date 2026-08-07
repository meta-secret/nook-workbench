---
title: Fix Main preflight Bake nested fs.write parent entitlement
feature: ci-pipeline
issue: issues/hive-isolated-agent-platform/main-failure-5099615d0e8c17b03c5c78194b179d5fd01f2611.md
plan: plans/ci-pipeline/20260807-144756-fix-main-preflight-bake-entitlements.md
nook_pr: 939
status: completed
started_at: 2026-08-07T14:45:00Z
finished_at: 2026-08-07T15:08:20Z
agent: cursor
---

# Work summary

## Outcome

Merged PR 939. Main Native Rust verification no longer fails when
`preflight:export` writes nested tools under an already-populated rust artifact
root.

## Progress

- Diagnosed Main run 31159905773 as Buildx Bake `fs.write` parent entitlement
  denial after coverage export.
- Granted parent plus dest `fs.write` in `preflight:export` and mkdir the tools
  directory first.
- Extended hosted delivery contracts for the new entitlement wiring.
- Validated with `ci:full-e2e` and squash-merged.

## Implementation problems

- An early bash-c rewrite would have broken single-quoted Bake secret args.
  Switched to a Task `PREFLIGHT_OUTPUT_PARENT` var instead.

## Decisions

- Keep Bake filesystem entitlements enabled.
- Allow the parent CI artifact directory as well as the nested tools dest.

## Validation

- Exact-head PR run https://github.com/meta-secret/nook/actions/runs/31189693629 succeeded.
- Native Rust job exercised parent+dest `fs.write` and passed.
- `task pr:ready PR=939` reported ready before squash merge.

## Remaining work

- None.

