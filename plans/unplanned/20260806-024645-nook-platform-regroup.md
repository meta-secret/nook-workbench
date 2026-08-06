---
title: Nest Rust crates under nook-app/nook-platform
feature: unplanned
issue: none
started_at: 2026-08-06T02:46:45Z
agent: cursor
---

# Task plan

## Interpreted request

Regroup the eight Rust workspace crates currently sitting beside `nook-web`
and `docker` into a nested parent directory `nook-app/nook-platform/`, while
keeping the Cargo workspace root at `nook-app/` and updating every path
contract that would break.

## Requirements

- Move `nook-app-common`, `nook-auth2`, `nook-companion-core`,
  `nook-companion-wasm`, `nook-core`, `nook-event-log`, `nook-replication`, and
  `nook-wasm` under `nook-app/nook-platform/`.
- Keep package names and Cargo `-p` selectors unchanged.
- Keep the workspace root, `Cargo.lock`, `.cargo/`, `docker/`, and `nook-web/`
  at `nook-app/`.
- Update Docker COPY and bake paths, Task wasm find/build/`--out-dir` paths,
  GitHub Actions `hashFiles` globs, preflight path contracts, web fixture
  scripts, and cortex architecture docs that encode filesystem locations.
- Update the external fuzz path dependency on `nook-auth2`.

## Constraints and exclusions

- Do not move the workspace root to the repository root.
- Do not rename crates or generated wasm package import paths under
  `nook-web-shared`.
- Do not move `fuzz/` or `preflight/` into `nook-platform`.
- Prefer mechanical path rewrites over behavioral changes.

## Initial plan

1. Publish this plan and branch from `origin/main`.
2. `git mv` the eight crates and rewrite workspace members plus the fuzz path
   dependency.
3. Rewrite Docker, bake, Task/wasm, GitHub Actions, preflight, web fixture, and
   cortex path strings.
4. Host-apply format, push, open a PR, run focused hosted proof and exact-head
   validation until green, then squash-merge and publish Workbench completion
   records.

## Completion evidence

- Crates live under `nook-app/nook-platform/` and the workspace resolves.
- Path contracts in Docker, Task, Actions, and preflight match the new layout.
- Exact-head repository-owned PR checks are green and the PR is squash-merged.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, or unnecessary infrastructure details.
