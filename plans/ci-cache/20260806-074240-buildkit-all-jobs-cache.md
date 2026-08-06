---
title: Fix BuildKit cache reuse across all Rust CI jobs
feature: ci-cache
issue: none
started_at: 2026-08-06T07:42:40Z
agent: cursor
---

# Task plan

## Interpreted request

Same-PR BuildKit reuse is still broken in multiple Rust jobs.
Nightly, policy-tools, and deps graphs rebuild cold.
Rust looks like it recompiles everything even when sccache is hot.

## Requirements

- One writer per shared ecosystem registry cache ref.
- Ecosystem and product deps parents must use trusted rust-base.
- Drop PR rust-base from deps/source cache-from lists.
- Give policy-tools its own cache scope and bake it explicitly.
- Prove second exact-head validation caches toolchain stages.

## Constraints and exclusions

- Do not treat sccache hit rates as success.
- Keep deny/audit work after COPY . as expected invalidation.
- Keep PR-scoped writes under remote-buildcache only.

## Initial plan

1. Publish this plan.
2. Restore sole nightly writer (dylint).
3. Split policy-tools cache scope and bake it first.
4. Remove PR rust-base from deps/source cache-from.
5. Fix cargo-audit audit.toml quiet field.
6. Update preflight contracts and cortex cache rules.
7. Validate twice on one SHA; merge on CACHED proof.

## Completion evidence

- Second validation: nightly and policy-tools CACHED.
- Dylint does not cold rustup after fuzz.
- Deterministic/Native prefer trusted parents for chef-deps.

## Safety review

- No raw prompts, transcripts, secrets, private data, or local paths.
