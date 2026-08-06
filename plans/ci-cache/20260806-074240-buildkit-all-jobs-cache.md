---
title: Fix BuildKit cache reuse across all Rust CI jobs
feature: ci-cache
issue: none
started_at: 2026-08-06T07:42:40Z
finished_at: 2026-08-06T09:50:40Z
status: completed
agent: cursor
nook_pr: https://github.com/meta-secret/nook/pull/934
---

# Task plan

## Interpreted request

Same-PR BuildKit reuse was still broken in multiple Rust jobs.
Nightly, policy-tools, and deps graphs rebuilt cold.
Rust looked like it recompiled everything even when sccache was hot.

## Requirements

- One writer per shared ecosystem registry cache ref.
- Drop short-chain rust-base importers from ecosystem toolchain scopes.
- Verify with cache-to off, then publish with cache-from cleared.
- Prove second exact-head validation caches toolchain stages.

## Constraints and exclusions

- Do not treat sccache hit rates as success.
- Keep deny/audit work after COPY . as expected invalidation.
- Keep PR-scoped writes under remote-buildcache only.

## Initial plan

1. Publish this plan.
2. Restore sole nightly writer.
3. Split policy-tools cache scope and bake it first.
4. Remove PR rust-base from deps/source cache-from.
5. Stop thin re-exports from wiping warm indexes.
6. Update preflight contracts and cortex cache rules.
7. Validate twice on one SHA; merge on CACHED proof.

## Completion evidence

- Seed run 31089532791 on `8b4d804bc` cold-built then published v3 scopes.
- Proof run 31090185124 same SHA:
  - `[rust-ecosystem-policy-tools 1/1] ... #28 CACHED`
  - `[rust-ecosystem-nightly 1/1] ... #28 CACHED` (no rustup sync)
- Dylint proof ~4m24s vs seed ~8m29s.
- PR product jobs verify read-only, then publish with cache-from cleared.

## Safety review

- No raw prompts, transcripts, secrets, private data, or local paths.
