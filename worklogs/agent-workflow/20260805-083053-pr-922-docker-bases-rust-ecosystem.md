---
title: Split Docker bases and Dockerized Rust ecosystem gates
feature: agent-workflow
issue: none
plan: plans/agent-workflow/20260805-073550-rust-ecosystem-in-rust-dockerfile.md
nook_pr: https://github.com/meta-secret/nook/pull/922
status: completed
started_at: 2026-08-05T04:32:00Z
finished_at: 2026-08-05T08:30:53Z
agent: cursor
---

# Split Docker bases and Dockerized Rust ecosystem gates

## Outcome

Merged PR 922. Rust and web Docker bases are split, Clippy owns expect/unwrap
panic-shortcut policy, and Rust ecosystem gates (cargo-deny, cargo-audit,
fuzz, Dylint, Proptest/Insta/Loom) run as separate Bake stages off rust-base
instead of host cargo installs.

## Progress

- Split rust.Dockerfile and web.Dockerfile with dedicated bake files; kept
  rust-base lean for product builds.
- Added rust-ecosystem-policy-tools, nightly, fuzz, dylint, and deterministic
  check stages; rewired rust-ecosystem.yml through nook-docker-setup + Bake.
- Moved expect/unwrap enforcement to workspace clippy.toml files and removed the
  syn AST expect scanner from preflight.
- Quieted cargo-deny inclusion-tree spam with `--log-level error` and
  `check --hide-inclusion-graph`.

## Implementation problems

- Host cargo-audit install was too slow; pinned release binaries in Docker.
- Dylint release archives baked a broken CI driver path; install cargo-dylint
  and dylint-link via cargo install inside the nightly image instead.
- cargo-audit must be invoked as `cargo-audit audit`.
- cargo-deny rejects `--hide-inclusion-graph` before `check`; flag order was
  corrected after a failed dependency-policy run.

## Decisions

- Keep ecosystem CLIs out of rust-base so product image rebuilds stay lean.
- Leave Kani on its official action.
- Treat multiple-versions deny trees as warnings and suppress graph dumps in CI
  logs rather than changing deny policy severity.

## Validation

- Exact-head Dependency policy and RustSec passed in run 30987980484 (quiet logs).
- Exact-head Rust ecosystem, Source architecture, Hive, PR/preview, WASM, and
  Native Rust checks passed on head 074ccb21ef098066115ca0a454f70517002f4265.
- `task pr:ready PR=922` reported ready with zero unresolved threads.
- Squash-merged as c131fa56391972cc0148865d423a3cdde4834d7a.

## Remaining work

- None.
