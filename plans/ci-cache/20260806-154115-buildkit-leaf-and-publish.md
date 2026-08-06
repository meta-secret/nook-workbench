---
title: Fix BuildKit leaf caches and publish cold rebuilds
feature: ci-cache
issue: none
started_at: 2026-08-06T15:41:15Z
agent: cursor
---

# Task plan

## Interpreted request

Toolchain stages can hit CACHED, but leaf work still cold-fetches crates.
Deterministic publish rebuilds chef-deps after clearing cache-from.
Dylint nightly hits, then cargo dylint redownloads Clippy driver deps.
Every PR workflow job must reuse BuildKit layers on same-SHA revalidation.

## Requirements

- Stop publish steps from cold-rebuilding graphs that already hit remotely.
- Persist source-sensitive dylint (and fuzz) leaf layers in Zot.
- Keep deny/audit after COPY . as expected invalidation.
- Prove same-SHA second validation avoids crates.io downloads for chef cook and dylint driver fetch.

## Constraints

- Do not treat sccache hits as success.
- PR writes stay under remote-buildcache.
- One writer per shared registry ref.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Audit PR jobs for cold Downloading crates / rustup.
3. Fix publish cache-from so parents stay available; avoid self-thin reimport.
4. Add dylint (and fuzz if needed) leaf cache scopes with import/publish split.
5. Contract tests + cortex notes.
6. Double validate one SHA; merge; workbench worklog.
