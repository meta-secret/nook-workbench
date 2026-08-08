---
title: Formal Bake cache proofs in preflight
feature: unplanned
issue: none
started_at: 20260808T014417Z
agent: cursor
---

# Task plan

## Interpreted request

Add static preflight proofs that encode Bake/Task/Zot cache invariants so
short-chain imports, empty cache clears, and fingerprint rotation fail before
hosted CI cold-cooks.

## Requirements

- New bake_cache_proofs module with six named theorems.
- Repo-wide ban on empty cache-from/cache-to overrides.
- Structured short-parent import graph for native/WASM/ecosystem scopes.
- Context parents never write; publishers write mode=max under write_cache_repository.
- GitHub Actions plus Zot parameter matrix for Main vs PR/Remote.
- Closed allowlist for WASM deps fingerprint hashFiles inputs.
- Native/WASM publish staging order plus Main fresh-builder verifier contract.
- Cortex documents the proof surface.

## Constraints and exclusions

- No live Buildx or Zot solves inside preflight.
- Do not rewrite existing substring contracts; new module is the formal surface.
- No unnecessary scope version rotations.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Implement bake_cache_proofs.rs and wire the module.
3. Update quality.md and ARCHITECTURE.md.
4. Format, push, hosted preflight, exact-head validation, merge.

## Completion evidence

- Hosted preflight green.
- Exact-head PR validation green.
- Squash-merged PR.

## Safety review

- No secrets, raw prompts, or private data.
