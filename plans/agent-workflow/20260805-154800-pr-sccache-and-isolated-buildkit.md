---
title: PR SeaweedFS sccache and isolated BuildKit write scopes
feature: agent-workflow
issue: none
started_at: 2026-08-05T15:48:00Z
agent: cursor
---

# Task plan

## Interpreted request

Speed up hosted Rust PR checks by giving same-repository PR jobs SeaweedFS
sccache and isolated BuildKit cache write scopes, without letting them overwrite
Main's trusted Zot buildcache refs.

## Requirements

- Same-repository PR Rust producers (native, WASM) and Rust ecosystem Docker
  jobs mount SeaweedFS sccache credentials, matching the Hive trust model.
- Fork PRs remain secret-free and fall back to direct compile.
- PR BuildKit exporters write only under isolated `nook/remote-buildcache`
  scopes keyed by PR number, while still restoring Main's trusted refs.
- Main's `nook/buildcache/**` stays Main-publish-only.
- Update preflight contracts and CI policy docs to match.

## Constraints and exclusions

- Do not grant PR jobs write access to Main Zot buildcache refs.
- Do not introduce GitHub Actions `type=gha` BuildKit cache.
- Kani and non-Docker jobs stay unchanged.
- No product feature changes.

## Initial plan

1. Extend nook-docker-setup isolated-cache-write for pull_request events.
2. Wire sccache and isolated write into pr.yml Rust jobs and rust-ecosystem.yml.
3. Update contracts and quality/ci-pipeline docs.
4. Format, open PR, validate, merge.

## Completion evidence

- Contracts encode the new credential and cache-write boundaries.
- PR opened with exact-head validation green.
- Squash-merged to main.

## Safety review

- Contains no raw prompt, transcript, secrets, private data, or raw logs.
