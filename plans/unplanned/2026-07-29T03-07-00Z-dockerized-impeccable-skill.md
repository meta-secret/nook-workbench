---
title: Dockerize the Impeccable skill toolchain
feature: unplanned
issue: none
started_at: 2026-07-29T03:07:00Z
agent: codex
---

# Task plan

## Interpreted request

Replace the checked-in upstream Impeccable distribution with a reproducible,
containerized installation path that works consistently for local Codex
sessions and isolated Hive workers, while retaining Nook's small first-party UI
taste adapter and mandatory dual-skill policy.

## Requirements

- Pin the upstream Impeccable tooling inside a repository-owned Docker image.
- Expose installation and verification through normal Taskfile commands.
- Keep generated upstream skill files out of version control while preserving
  Codex discovery and detector-hook behavior.
- Update repository policy and references so upstream Impeccable is treated as
  an installed dependency rather than authored Nook source.
- Remove the vendored upstream payload and prevent unrelated formatting or
  refactors from mutating it again.
- Deliver through the repository PR workflow and exact-head GitHub Actions
  validation.

## Constraints and exclusions

- Keep `design-taste-frontend` as Nook-owned Svelte and Rust/WASM guidance.
- Do not change product UI or domain behavior.
- Do not require host-global Node package installation.
- Do not introduce Docker cache mounts or unpinned runtime dependencies.

## Initial plan

1. Inventory Impeccable's installer output, Docker and Taskfile conventions,
   hook requirements, and existing ignored generated paths.
2. Add the pinned container and Task targets for install, check, and update
   workflows.
3. Remove the tracked upstream copy and migrate policy, hook, formatting, and
   preflight references to the generated dependency boundary.
4. Format, publish the implementation PR, and resolve repository checks and
   feedback through squash merge.

## Completion evidence

- A clean checkout can build the pinned image and materialize a discoverable
  Codex Impeccable skill through Task.
- Generated upstream files remain ignored and absent from the Git diff.
- Repository checks pass for the exact PR head and the PR is squash-merged.
- A linked Workbench worklog and delivery statistics record the outcome.

## Safety review

This plan contains no raw prompt, transcript, secret, private data, raw log,
local path, or unnecessary infrastructure detail.
