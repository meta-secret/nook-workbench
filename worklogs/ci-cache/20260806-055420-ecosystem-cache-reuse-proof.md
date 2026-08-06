---
title: Prove Rust ecosystem BuildKit cache reuse on a probe PR
feature: ci-cache
issue: none
plan: plans/ci-cache/20260806-053600-ecosystem-cache-reuse-proof.md
nook_pr: https://github.com/meta-secret/nook/pull/932
status: completed
started_at: 2026-08-06T05:35:45Z
finished_at: 2026-08-06T05:53:37Z
agent: cursor
---

# Work summary

## Outcome

Opened and merged a comment-only probe PR after the trusted main seed. Cargo fuzz
smoke restored `rust-ecosystem-nightly` as BuildKit `CACHED` from the trusted
`nook-rust-ecosystem-nightly-v1` ref and finished in about 3m18s versus about
6m08s on the cold seed.

## Progress

- Published superseding plan
  `plans/ci-cache/20260806-053600-ecosystem-cache-reuse-proof.md`.
- Opened #932 with a Bake comment marker that does not touch Dockerfile RUN layers.
- Exact-head validation run 31074706448 succeeded; squash-merged the probe.

## Implementation problems

- Dylint still cold-installed nightly (~145s) despite importing the trusted
  nightly manifest. Logs show an isolated PR `rust-base` ref becoming available
  mid-run, which can desync the parent chain from the trusted nightly layers.
- Policy imported trusted `nook-rust-ecosystem-policy-v1` successfully but still
  rebuilt `rust-ecosystem-policy-tools` (~6s install). Needs a follow-up if that
  remains cold across later PRs.

## Decisions

- Treat the fuzz `CACHED` nightly stage as the hard proof that trusted seeding
  and main-fallback reads work end to end.
- Record the dylint/policy inconsistency as remaining cache-reuse work rather
  than blocking the seed-auth fix.

## Validation

- Probe fuzz job: import trusted nightly manifest, then
  `[rust-ecosystem-nightly 1/1] ...` followed by `CACHED` with no rustup install
  output.
- Contrast cold seed fuzz job: same RUN executed for ~143s before export.
- Main seed run 31074034039 exported trusted caches with no registry deny.

## Remaining work

- Investigate why dylint/policy can miss toolchain layers even after successful
  trusted manifest import, including isolated PR rust-base ordering.
