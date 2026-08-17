---
title: Restore sequential Rust crate BuildKit layers
feature: ci-cache
issue: none
started_at: 2026-08-17T06:35:00Z
agent: cursor
---

# Restore sequential Rust crate BuildKit layers

## Interpreted request

Finish the open cache proof pull request as a real graph fix, not a note in
the product tree. Hosted BuildKit must keep earlier crate compile layers
after an unrelated later crate edit, and after a new commit restores the
trusted Main source graph. The runtime Bake proof must encode that
sequential-crate contract. Production native and WASM source restores must
stop merging a shorter dependency index that can orphan those crate RUN
steps.

## Requirements

- Sequential crate COPY then RUN layers stay cached across a fresh builder
  when only a later crate input changes.
- Trusted Main source graphs restore without importing a shorter dependency
  index in the same solve.
- Cold source graphs still restore source-free dependency cooks when the Main
  source ref is absent.
- WASM source compilation follows crate dependency order instead of one bulk
  snapshot compile.
- Static Bake theorems and Cortex cache guidance match the new restore arms.
- Planning and outcome records live in Workbench, not the product repository.

## Constraints and exclusions

- Empty Bake cache-from or cache-to overrides remain forbidden.
- Main remains the only writer of shared buildcache refs.
- Isolated jobs still write only git-scoped remote-buildcache refs.
- SeaweedFS compiler objects are not treated as BuildKit layer proof.
- Unrelated local work on the primary checkout stays untouched.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: Bake cache simulation, Rust product Dockerfile, native and WASM source cache-from arms, preflight Bake theorems, and Cortex cache guidance.
- Public or cross-module interfaces: hosted native and WASM source restore selection plus sequential crate layer proof markers.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: sequential crate simulation, Main-only source restore, and per-crate WASM compile; Acceptance evidence: bake-cache prove, preflight theorems, and exact-head PR validation.
- PR slices and acceptance evidence:
  sequential crate simulation, Main-only source restore, and per-crate WASM compile; Acceptance evidence: bake-cache prove, preflight theorems, and exact-head PR validation.

## Initial plan

1. Rebase the existing proof branch onto current Main and drop the root note.
2. Add a Bake simulation scenario for two sequential crate stages.
3. Probe trusted Main source refs and import that graph alone when present.
4. Compile WASM crates in dependency order before sibling clippy and package steps.
5. Update theorems and Cortex, then host-format, push, and validate.

## Completion evidence

- Simulation scenario reports both crate markers with the earlier crate cached
  after a later-crate edit.
- Native and WASM source restore arms import Main alone when that ref exists.
- WASM source stage compiles crates in dependency order.
- Exact-head repository checks pass and the pull request squash-merges.

## Safety review

- This record contains no raw prompt, transcript, secret, private data, raw
  log, local path, or unnecessary infrastructure detail.
