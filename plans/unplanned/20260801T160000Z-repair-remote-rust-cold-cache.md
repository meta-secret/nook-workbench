---
title: Repair repeated Remote Rust cold builds
feature: unplanned
issue: issues/unplanned/remove-redis-from-hosted-rust-builds.md
started_at: 2026-08-01T16:00:00Z
agent: codex
---

# Repair repeated Remote Rust cold builds

## Interpreted request

Stop focused hosted Rust and WASM tasks from downloading and compiling the full
dependency graph on every run, verify the current SeaweedFS compiler-cache
service with concrete capacity and health evidence, and preserve the repository's
cache trust boundaries while making repeated cold-start work reusable.

## Requirements

- Identify the first uncached BuildKit stage from current Remote workflow logs.
- Distinguish OCI BuildKit layer reuse from SeaweedFS-backed compiler-object reuse.
- Measure the live SeaweedFS service without publishing credentials or raw logs.
- Make repeated exact-head Remote tasks reuse compiler work when a branch changes
  its Cargo dependency fingerprint.
- Prevent branch jobs from mutating the trusted compiler cache or Main-owned OCI
  cache namespaces.
- Add mechanical regression coverage for cache permissions, fallback behavior,
  and Remote workflow wiring.
- Deliver through hosted focused proof, complete exact-head validation, readiness,
  squash merge, and completion records.

## Constraints and exclusions

- Main remains the only writer of shared OCI dependency cache refs.
- Pull-request validation remains secret-free; any compiler-cache reader is
  limited to explicitly dispatched same-repository Remote tasks.
- Compiler-cache outages must fall back to direct compilation.
- No persistent runner or persistent Docker daemon is introduced.
- The first compile for a genuinely new cache key may still perform work; repeated
  runs must reuse prior trusted compiler objects.

## Initial plan

1. Measure current Remote job logs and live SeaweedFS health, usage, and object count.
2. Add a read-only SeaweedFS identity and connect only the trusted Remote workflow,
   with cache-write failures ignored and direct compilation fallback retained.
3. Add preflight contracts and cache telemetry assertions for the read-only path.
4. Format, push, and prove the change with repeated hosted Rust/WASM tasks on an
   independent builder before complete pull-request validation.
5. Pass exact-head readiness, squash merge, and publish the linked worklog and
   statistics.

## Completion evidence

- Logs show the original missing dependency fingerprint and full cargo-chef cook.
- Live service checks report authenticated health and summarized cache usage.
- A repeated Remote task reports SeaweedFS compiler-cache hits without shared-cache
  writes, while BuildKit continues restoring trusted Main refs read-only.
- Regression tests and exact-head GitHub Actions checks pass.
- The implementation pull request is squash-merged and linked completion records
  are visible on Workbench Main.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
