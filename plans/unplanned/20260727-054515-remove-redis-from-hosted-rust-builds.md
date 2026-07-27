---
title: Remove Redis from hosted Rust builds
feature: unplanned
issue:
started_at: 2026-07-27T05:45:15Z
agent: codex
---

# Task plan

## Interpreted request

Simplify Rust dependency caching by relying on stable, dependency-fingerprinted
BuildKit layers in hosted delivery builds and removing the optional Redis
compiler-cache credential path that makes the build topology harder to reason
about. Prevent the removed secret mount from being reintroduced unnoticed.

## Requirements

- Use one cross-run cache mechanism for hosted Rust dependency builds: the
  GitHub Actions BuildKit cache.
- Key the WASM dependency cache scope from all inputs that can change its
  dependency graph or compiler environment.
- Remove Redis secret transport and secret mounts from hosted Docker builds.
- Add a hard preflight regression test that rejects Redis secret mounts in Rust
  Dockerfiles and Redis secret attachment in Bake configuration.
- Keep cache restoration backward compatible long enough to seed the new
  fingerprinted generation.
- Complete the normal formatting, focused validation, pull-request, CI, and
  delivery workflow.

## Constraints and exclusions

- A genuinely new dependency fingerprint or external cache eviction may require
  one cold dependency compile.
- Local and runtime Redis diagnostic tooling is not removed in this focused
  change; only the Docker build credential path is retired.
- No cache gateway, object-store protocol, or additional persistent service is
  introduced.

## Initial plan

1. Remove Redis secret attachment from Bake and all Rust Docker build stages.
2. Finalize the dependency-fingerprinted BuildKit cache scope and legacy
   read-only fallbacks.
3. Harden preflight around both the fingerprint contract and the absence of
   Docker build secret mounts.
4. Run focused tests, inspect the resolved Bake graph, format, and deliver
   through repository-owned CI.

## Completion evidence

- Focused preflight tests pass and fail if the forbidden build secret path is
  restored.
- The resolved Bake graph imports and exports the fingerprinted dependency
  scope without any Redis secret.
- Repository formatting and applicable GitHub Actions checks pass.
- The merged pull request and linked Workbench worklog record the result.

## Safety review

This record contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
