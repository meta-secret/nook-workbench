---
title: Optimize preflight Docker with rust-base chef and sccache
feature: agent-workflow
issue: none
started_at: 2026-08-05T06:47:53Z
agent: cursor
---

# Task plan

## Interpreted request

Speed up the standalone preflight Docker build by reusing the shared rust-base
toolchain, adding cargo-chef dependency layers, and wiring SeaweedFS sccache
secrets through Bake.

## Requirements

- Preflight Dockerfile stages FROM rust-base via Bake named context.
- cargo-chef prepare/cook separates dependency and source layers.
- SeaweedFS sccache secret mounts on cook/build/test compile steps.
- Taskfile uses Bake with rust-base + preflight bake files.
- Preflight contracts and architecture docs reflect the new graph.

## Constraints and exclusions

- Do not extract a thinner shared Rust tools base in this change.
- Keep the full-repo COPY for the preflight test stage.
- Do not edit the attached Cursor plan file.

## Initial plan

1. Rewrite preflight Dockerfile with chef and sccache mounts.
2. Add preflight bake file and update Taskfile wiring.
3. Update contracts and brief architecture note.
4. Format, commit, and push.

## Completion evidence

- Preflight Dockerfile and Taskfile use rust-base, chef, and sccache.
- Contracts assert the new topology.
- Branch commit pushed.

## Safety review

- Contains no raw prompt, transcript, secrets, private data, or raw logs.
