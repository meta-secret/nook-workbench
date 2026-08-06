---
title: Trusted writer fix for Rust ecosystem cache seeding
feature: ci-cache
issue: none
plan: plans/ci-cache/20260806-053600-ecosystem-cache-reuse-proof.md
nook_pr: https://github.com/meta-secret/nook/pull/931
status: completed
started_at: 2026-08-06T05:05:00Z
finished_at: 2026-08-06T05:34:14Z
agent: cursor
---

# Work summary

## Outcome

Main can seed trusted `nook-rust-ecosystem-*` BuildKit caches. The prior post-#929
main seed failed with registry deny because ecosystem Bake jobs authenticated as
the remote writer while `cache-write=true` targeted trusted `nook/buildcache/**`.

## Progress

- Switched main-push ecosystem docker-setup credentials to the trusted registry
  writer; PRs keep the remote writer with isolated writes plus main fallback.
- Squash-merged #931 and confirmed main ecosystem run 31074034039 succeeded.
- Seed logs show `exporting cache to registry` completing with `writing config`
  and `DONE` for policy, nightly, and deterministic scopes, with zero deny errors.

## Implementation problems

- #929 cache exporters were correct, but main seeding used the wrong registry
  identity for trusted writes.
- First successful seed necessarily rebuilt toolchain stages cold because the
  trusted refs did not exist yet (`...: not found` on import).

## Decisions

- Keep PR writes isolated under `remote-buildcache` and only use the trusted
  writer on `push` to `main`.

## Validation

- PR #931 exact-head validation run 31073483418 succeeded.
- Main ecosystem seed run 31074034039 succeeded and exported all three ecosystem
  scopes.

## Remaining work

- Probe PR to prove PR jobs restore those trusted layers as `CACHED`.
