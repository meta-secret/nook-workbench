---
title: Nest Rust crates under nook-app/nook-platform
feature: unplanned
issue: none
plan: plans/unplanned/20260806-024645-nook-platform-regroup.md
nook_pr: https://github.com/meta-secret/nook/pull/927
status: completed
started_at: 2026-08-06T02:46:45Z
finished_at: 2026-08-06T03:53:13Z
agent: cursor
---

# Work summary

## Outcome

Nested the eight Rust workspace crates under `nook-app/nook-platform/` and
landed the path-contract updates on main via squash-merged PR 927.

## Progress

- Moved crates with `git mv` and updated workspace members plus the fuzz path
  dependency.
- Rewrote Docker COPY destinations, bake paths, Task/wasm find and wasm-pack
  invocations, GHA hashFiles, preflight contracts, web fixture scripts, and
  cortex architecture docs.
- Fixed extension locale root resolution under the nested platform tree.

## Implementation problems

- Host format initially failed because the extension build still read
  `nook-app/nook-app-common/locales`.
- Preflight rustfmt failed on lengthened path strings after the rewrite.
- One preflight ownership test still built consumer manifests with
  `nook-app/{consumer}` instead of `nook-app/nook-platform/{consumer}`.

## Decisions

- Keep the Cargo workspace root at `nook-app/` and nest members under
  `nook-platform/` rather than extracting a repo-root workspace.
- Keep crate package names and generated web wasm import paths unchanged.

## Validation

- Local `cargo metadata` resolved the nested members.
- Hosted PR checks on exact head were green, including Native Rust verification,
  WASM verification, Verify and preview, and Rust ecosystem checks.
- Squash-merged https://github.com/meta-secret/nook/pull/927

## Remaining work

- None.
