---
title: Split Docker base lineages and install Node via curl
feature: agent-workflow
issue: none
started_at: 2026-08-05T04:32:00Z
agent: cursor
---

# Task plan

## Interpreted request

Split the shared Docker base definition into independent Rust and web Dockerfiles, and install the Node runtime with a pinned curl download instead of copying it from a Node base image. Keep wasm-bindgen Node tests working in the Rust lineage and Playwright worker Node support in the web lineage.

## Requirements

- Replace `nook-app/docker/base.Dockerfile` with separate Rust and web Dockerfiles.
- Keep the full Rust dependency graph (`rust-base` through cargo-chef and builder-deps stages) inside the Rust Dockerfile so hosted cache identity stays stable.
- Install a binary-only Node runtime via curl with version and sha256 pins in both lineages that need it.
- Update Bake targets, Task wiring, preflight contracts, and architecture docs that hardcode the old base Dockerfile path.
- Preserve existing bake target names (`rust-base`, `web-base`, `web-e2e-base`) for callers.

## Constraints and exclusions

- Do not move Rust dependency stages behind a named-target image context.
- Do not install npm/npx into sealed images.
- Do not change wasm-pack Node test behavior in this task.
- Do not merge Rust and web image lineages.
- No UI source changes.

## Initial plan

1. Publish this plan and branch from `origin/main`.
2. Create `rust.Dockerfile` and `web.Dockerfile` from the current base stages.
3. Replace the Node image stage with a pinned Node linux-x64 tarball install.
4. Retarget Bake and contracts; remove or redirect the old base Dockerfile.
5. Format, push, open PR, run hosted validation, merge, and publish the worklog.

## Completion evidence

- PR updates Bake to the new Dockerfiles and preflight contracts pass.
- Hosted PR checks are green on the exact head.
- Squash merge lands; Workbench worklog and agent stats are published.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
