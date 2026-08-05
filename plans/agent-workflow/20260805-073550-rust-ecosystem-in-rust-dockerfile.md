---
title: Move Rust ecosystem gates into rust.Dockerfile
feature: agent-workflow
issue: none
started_at: 2026-08-05T07:40:00Z
agent: cursor
---

# Task plan

## Interpreted request

Stop compiling cargo-audit, cargo-fuzz, and cargo-dylint on the GitHub-hosted
runner. Put their pinned release binaries and Bake check stages into
nook-app/docker/rust.Dockerfile so ecosystem jobs reuse rust-base.

## Requirements

- Install cargo-deny and cargo-audit in rust-base from pinned release archives.
- Add rust-ecosystem-nightly with pinned cargo-fuzz, cargo-dylint, dylint-link,
  and the pinned Dylint nightly toolchain.
- Bake stages for dependency-policy, fuzz-smoke, dylint, and deterministic
  Proptest/Insta/Loom tests.
- Rewire rust-ecosystem.yml through nook-docker-setup + Bake (no host
  rust-toolchain / cargo install / rust-cache for those jobs).
- Delete the side rust-dependency-policy Dockerfile experiment.

## Constraints and exclusions

- Kani remains on its official action.
- Do not compile ecosystem CLIs with cargo install on the runner host.

## Initial plan

1. Extend rust.Dockerfile and rust.docker-bake.hcl.
2. Rewire the workflow and contracts.
3. Format, push, revalidate PR 922.

## Completion evidence

- Ecosystem CLIs and stages live in rust.Dockerfile.
- Workflow Bakes those targets after nook-docker-setup.
- Branch pushed for PR 922.

## Safety review

- Contains no raw prompt, transcript, secrets, private data, or raw logs.
