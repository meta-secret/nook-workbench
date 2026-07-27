---
title: Stabilize the Rust dependency cache scope
feature: unplanned
issue: issues/backlog/gh-35-optimize-docker-builds-cache-rust-dependencies-with-cargo-chef.md
started_at: 2026-07-27T05:38:39Z
agent: codex
supersedes: plans/unplanned/20260727-051429-protect-rust-dependency-cache-boundary.md
---

# Stabilize the Rust dependency cache scope

## Interpreted request

Prevent unchanged Cargo dependency graphs from recompiling while retaining
remote compiler-cache acceleration for genuinely cold dependency builds.

## Requirements

- Keep the Redis credential in a standard BuildKit secret mount so cold
  `cargo-chef` compilation can use sccache without exposing the password.
- Make the hosted WASM dependency cache location deterministic for the exact
  Cargo and Docker dependency graph instead of repeatedly overwriting one
  mutable scope.
- Add preflight contracts for the dependency-scope fingerprint inputs and the
  exact secret mount identity and path.
- Preserve credential-free pull request execution and direct-compilation
  fallback.
- Deliver through the normal pull request, exact-head validation, and merge
  workflow.

## Constraints and exclusions

- Do not add a custom Redis proxy, new registry authentication path, or SOPS
  service.
- Do not pass secrets through Docker build arguments, ordinary environment
  variables, copied files, or image layers.
- Secret values must not participate in the cache fingerprint; only stable
  mount properties and dependency inputs may do so.

## Initial plan

1. Derive a hosted cache scope from all files that define the Rust dependency
   graph and its compiler environment.
2. Use that scope consistently for Main publication and pull request restore,
   retaining the previous scope as a migration fallback.
3. Extend preflight to reject missing fingerprint inputs or changed secret
   mount identity and path.
4. Run the focused contract, format, publish a pull request, and monitor
   repository-owned checks through exact-head squash merge.
5. Publish the linked completion worklog and agent statistics.

## Completion evidence

- Preflight proves the scope fingerprint covers Cargo manifests, lockfile,
  dependency Docker inputs, and sccache wrapper configuration.
- Preflight proves all Rust compiler secret mounts use the canonical stable
  mount definition.
- The implementation pull request passes repository-owned checks and exact-head
  readiness, then merges.
- A linked Workbench worklog and statistics record capture the result.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data,
raw logs, local paths, or unnecessary infrastructure details.
