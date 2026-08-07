---
title: Relocate Rust workspace root into nook-platform
feature: rust-workspace-layout
issue: unplanned
started_at: 2026-08-07T03:59:35Z
agent: cursor
---

# Task plan

## Interpreted request

Move the Nook product Rust workspace root from `nook-app/` into
`nook-app/nook-platform/`. Cargo manifests, lockfile, Clippy config, and
adjacent Cargo tooling config belong with the Rust crates rather than beside
the web and Docker command surface.

## Requirements

- Relocate workspace `Cargo.toml`, `Cargo.lock`, `clippy.toml`, `.cargo/`,
  `.config/`, and `.insta.yaml` under `nook-app/nook-platform/`.
- Update workspace member paths so crates remain package members of the moved
  root.
- Retarget Task, Docker, GitHub Actions, preflight, CI-agent path filters, and
  cortex docs that assume the old workspace root.
- Keep cargo invocations working through the existing Task entrypoints.
- Preserve Clippy panic-shortcut policy and mold/linker Cargo config behavior.

## Constraints and exclusions

- Do not relocate `nook-web`, Docker orchestration, or app Taskfiles.
- Do not change Rust domain logic beyond path and workspace layout updates.
- Do not run heavy local product builds or test suites; validate on hosted
  workers after push.
- Exclude unrelated formatting or dependency upgrades.

## Initial plan

1. Publish this plan, then branch from `origin/main`.
2. Move the Rust workspace root files into `nook-platform` and fix member paths.
3. Update Task, Docker, workflow, preflight, agent, README, and cortex path
   references.
4. Host-apply format, commit, push, open the PR, and run focused then complete
   hosted validation.
5. Fix any CI or contract failures, squash-merge when ready, and publish the
   Workbench completion records.

## Completion evidence

- Workspace root files exist under `nook-app/nook-platform/`.
- Path contracts and rust ecosystem references point at the new root.
- Applicable repository-owned PR checks are green on the exact head.
- PR is squash-merged with linked Workbench plan and worklog.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local filesystem paths, or unnecessary infrastructure details.
