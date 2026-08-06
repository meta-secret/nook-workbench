---
title: Cache Bake-backed Rust ecosystem toolchain stages
feature: ci-cache
issue: none
plan: plans/ci-cache/20260806-042115-ecosystem-nightly-cache.md
nook_pr: https://github.com/meta-secret/nook/pull/929
status: completed
started_at: 2026-08-06T04:21:15Z
finished_at: 2026-08-06T05:02:13Z
agent: cursor
---

# Work summary

## Outcome

Landed dedicated BuildKit registry caches for every Bake-backed Rust ecosystem
gate, with main seeding trusted refs and PRs writing isolated remote refs.

## Progress

- Added `nook-rust-ecosystem-nightly-v1`, `nook-rust-ecosystem-policy-v1`, and
  `nook-rust-ecosystem-deterministic-v1` cache scopes.
- Wired cache-from/cache-to on policy, nightly/fuzz/dylint, and deterministic
  Bake targets.
- After main moved ecosystem jobs into a reusable workflow, applied the write
  policy there for all four Bake-backed jobs.
- Updated preflight contracts for the new exporters and markers.
- Merged https://github.com/meta-secret/nook/pull/929.

## Implementation problems

- First commit failed a preflight exporter-count contract (8 -> 9); fixed by
  updating hosted delivery contracts.
- Merge from main relocated ecosystem jobs into
  `rust-ecosystem-checks.yml`; reapplied cache write settings there.
- Extended the same cold-cache gap fix from nightly to policy and deterministic
  after review of sibling Bake targets.

## Decisions

- Keep ecosystem tooling out of product `rust-base`.
- Use ignore-error on new/cold ecosystem cache-from refs so first seed cannot
  fail the bake.
- Leave Kani on the GitHub Action path; it is not a Bake/BuildKit stage.

## Validation

- PR 929 exact-head checks green, including Native Rust verification and all
  Rust ecosystem jobs.
- Policy job exported layers to the new policy cache scope with
  `GHA_CACHE_WRITE_ENABLED=1`.

## Remaining work

- None for this cache wiring. First post-merge main ecosystem run seeds trusted
  refs; later PRs should restore nightly/policy/deterministic as CACHED.
