---
title: Prove Rust ecosystem BuildKit cache reuse after trusted seed fix
feature: ci-cache
issue: none
started_at: 2026-08-06T05:36:00Z
agent: cursor
---

# Task plan

## Interpreted request

Land the trusted-writer fix so main can seed ecosystem BuildKit caches, confirm
that seed succeeds, then open a minimal PR that proves policy, nightly, and
deterministic stages restore as cache hits instead of cold toolchain installs.

## Requirements

- Merge the trusted registry writer fix for main ecosystem Bake jobs.
- Confirm the post-merge main ecosystem run exports
  nook-rust-ecosystem-policy/nightly/deterministic caches without registry deny.
- Open a tiny non-functional PR that still runs labeled ecosystem validation.
- Capture log evidence that rust-ecosystem-nightly and policy-tools are CACHED.
- Contrast with the earlier cold nightly toolchain install path.

## Constraints and exclusions

- Do not change Dockerfile toolchain install commands or pinned versions.
- Do not run heavy local Docker builds.
- Keep the probe change comment-only in Bake wiring.

## Initial plan

1. Finish exact-head validation and squash-merge the trusted-writer fix.
2. Monitor main's ecosystem seed for successful registry cache exports.
3. Publish this plan and open a bake-comment probe PR from origin/main.
4. Trigger exact-head validation and extract cache-hit proof from job logs.
5. Merge the probe when green and publish Workbench completion records.

## Completion evidence

- Merged fix PR URL and successful main ecosystem run URL.
- Probe PR URL with log excerpts showing ecosystem toolchain stages as CACHED
  and successful import of the trusted buildcache refs.

## Safety review

- No raw prompts, transcripts, secrets, private data, or local paths.
