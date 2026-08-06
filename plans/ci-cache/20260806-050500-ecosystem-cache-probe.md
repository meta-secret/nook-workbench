---
title: Probe Rust ecosystem BuildKit cache reuse
feature: ci-cache
issue: none
started_at: 2026-08-06T05:05:00Z
agent: cursor
---

# Task plan

## Interpreted request

Open a minimal PR that exercises the Rust ecosystem Bake gates and confirm the
new policy/nightly/deterministic BuildKit caches are restored instead of cold
rebuilt.

## Requirements

- Branch from current origin/main after the #929 cache scopes landed.
- Make a tiny non-functional change that still goes through labeled PR
  validation including ecosystem jobs.
- Trigger exact-head validation and inspect fuzz/dylint/policy logs for cache
  hits on the toolchain stages.
- Report whether the reuse promise holds.

## Constraints and exclusions

- Do not change rust.Dockerfile toolchain install commands or pinned versions.
- Do not run heavy local Docker builds.

## Initial plan

1. Wait for main's post-merge ecosystem run to seed trusted caches when useful.
2. Publish this plan and open a tiny bake-comment PR.
3. Run task pr:validate and inspect ecosystem job logs for CACHED stages.
4. Merge if green and report timings.

## Completion evidence

- PR URL plus log excerpts showing rust-ecosystem-nightly / policy-tools as
  CACHED, or clear evidence they were still cold.

## Safety review

- No raw prompts, transcripts, secrets, private data, or local paths.
