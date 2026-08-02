---
title: Repair Remote Rust cold builds with SeaweedFS and Zot writes
feature: unplanned
issue: issues/unplanned/remove-redis-from-hosted-rust-builds.md
started_at: 2026-08-01T17:00:00Z
agent: codex
supersedes: plans/unplanned/20260801T160000Z-repair-remote-rust-cold-cache.md
---

# Repair Remote Rust cold builds with SeaweedFS and Zot writes

## Interpreted request

Stop focused hosted Rust and WASM tasks from repeatedly downloading and compiling
the dependency graph. Use SeaweedFS for trusted compiler-object reuse and the
private Zot registry as the authoritative BuildKit layer cache, while preserving
strict branch isolation and Main fallback.

## Requirements

- Identify the first uncached BuildKit stage from current Remote workflow logs.
- Distinguish Zot-backed BuildKit layer reuse from SeaweedFS-backed compiler-object
  reuse and measure both services with concrete health and capacity evidence.
- Let explicitly dispatched same-repository Remote tasks read compiler objects
  from SeaweedFS while keeping Main as its only writer.
- Let each Remote branch write only deterministic branch-isolated Zot cache refs,
  so genuinely new dependencies are immediately reusable; restore from that
  branch first and trusted Main refs second.
- Mount cache credentials through stable BuildKit secret IDs and paths whose
  contents are excluded from layer cache checksums; never expose secrets as build
  arguments, image environment, source files, URLs, or logs.
- Give the build identity only bucket-scoped read, write, list, and tagging actions;
  keep administrative SeaweedFS credentials server-side and out of GitHub.
- Add mechanical regression coverage for credentials, permissions, fallback
  order, stable secret mounts, and Remote workflow wiring.

## Constraints and exclusions

- Same-repository pull-request validation may authenticate with the ACL-limited
  Remote Zot identity to restore caches, but exporters stay disabled. Forks
  receive no credentials. Trusted Main alone publishes Main cache refs.
- Branch jobs cannot write Main Zot refs or gain SeaweedFS administrative actions.
- Cache outages fall back to direct compilation, and Zot imports retain Main
  fallback behavior.
- No persistent runner or persistent Docker daemon is introduced.

## Initial plan

1. Correct the Docker Bake graph so Remote branches restore branch Zot refs first,
   restore Main refs second, and export only their deterministic branch refs.
2. Pass scoped read-only SeaweedFS credentials to Remote compiler vertices via
   stable optional BuildKit secret mounts and keep secret contents outside cache
   checksums.
3. Split server-only SeaweedFS administration from the bucket-scoped build identity
   and verify authenticated read/write behavior plus denied anonymous access.
4. Add and run preflight contracts, format, then prove two repeated hosted Rust/WASM
   runs: the first populates missing objects/layers and the second reuses them.
5. Run complete exact-head validation and readiness, squash merge, and publish the
   linked worklog and statistics.

## Completion evidence

- The original missing dependency fingerprint and cold cargo-chef cook are recorded.
- Live SeaweedFS and Zot checks report health and summarized usage without secrets.
- First-run logs show branch-isolated cache export; second-run logs show SeaweedFS
  compiler hits and Zot layer reuse with materially reduced compile time.
- Preflight, focused hosted tasks, complete exact-head validation, and readiness pass.
- The implementation pull request is squash-merged and linked completion records
  are visible on Workbench Main.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
