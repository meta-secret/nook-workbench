---
title: Fix same-PR BuildKit cache reuse for Rust ecosystem gates
feature: ci-cache
issue: none
started_at: 2026-08-06T06:01:00Z
agent: cursor
---

# Task plan

## Interpreted request

BuildKit registry cache must reuse toolchain stages across retriggers of the same
PR on the same commit. Proof must come from a second exact-head validation, not
from a main seed.

## Requirements

- Stop ecosystem Bake targets from importing PR-isolated rust-base (and PR
  rust-deps for deterministic), which orphans trusted/PR toolchain layers.
- Stop fuzz and dylint from racing writes to the same nightly cache ref.
- Prove with two `task pr:validate` runs on one unchanged SHA that
  rust-ecosystem-nightly and policy-tools are CACHED on the second run.

## Constraints and exclusions

- Do not treat sccache hit rates as success criteria.
- Do not require a main push to demonstrate reuse.
- Keep trusted main fallback reads for cold first runs.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Fix ecosystem cache-from lists and nightly cache-to ownership.
3. Update preflight bake contracts.
4. Open PR, validate twice on the same head, extract log proof.
5. Merge only after the second run shows CACHED toolchain stages.

## Completion evidence

- Second validation logs: nightly and policy-tools stages marked CACHED with no
  cold rustup/cargo-deny install output.

## Safety review

- No raw prompts, transcripts, secrets, private data, or local paths.
