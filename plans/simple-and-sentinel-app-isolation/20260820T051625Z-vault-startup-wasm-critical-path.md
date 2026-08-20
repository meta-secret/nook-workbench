---
title: Reduce the vault startup WASM critical path
feature: simple-and-sentinel-app-isolation
issue: issues/simple-and-sentinel-app-isolation/reduce-vault-startup-wasm-critical-path.md
started_at: 2026-08-20T05:16:25Z
agent: codex
---

# Reduce the vault startup WASM critical path

## Interpreted request

Make cold Simple Vault startup feel responsive and remain scalable as the Rust
engine grows. Users must see truthful product state immediately, while vault
behavior remains unavailable until the security engine is actually ready.

## Requirements

- Render an accessible, stable startup surface without waiting for WASM.
- Keep application identity and every vault decision inside the existing typed
  Rust/WASM boundary.
- Remove unrelated companion initialization from the universal vault critical
  path without regressing extension pairing or browser-companion behavior.
- Surface initialization failure instead of leaving a blank document.
- Measure the production artifact, enforce an explicit size ceiling, and retain
  immutable caching and correct WASM MIME behavior.
- Cover the visible lifecycle with the repository UI demo/browser contract.
- Update the owning product specification with the startup contract.
- Deliver through exact-head hosted validation, review resolution, readiness,
  squash merge, and Workbench completion records.

## Constraints and exclusions

- Do not move validation, authorization, cryptography, persistence decisions,
  or session state into TypeScript or Svelte.
- Do not expose secrets in the loading DOM, logs, URLs, or analytics.
- Preserve Simple and Sentinel product isolation and their shared audited Rust
  source.
- No new UI or animation dependency is needed.
- A broad capability-specific WASM binary split is excluded from this slice
  unless direct measurements show a small, safe change can deliver it without
  crossing session or security boundaries.
- No heavy local product tests; GitHub-hosted checks are authoritative.
- Subagents are not used because the current collaboration policy does not
  authorize delegation.

## Change budget and PR sequence

- Estimated authored changed lines: 800
- Owning modules, packages, or layers: shared vault-app bootstrap and shell, extension-companion integration boundary, UI demo coverage, production web build verification, and vault-app isolation product specification.
- Public or cross-module interfaces: shared mountVaultApp startup contract and production artifact verification.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 800
- Current PR slice and acceptance evidence: Vault startup critical path; Acceptance evidence: pending, failure, and ready browser behavior plus production size-budget proof and exact-head validation.
- PR slices and acceptance evidence: Vault startup critical path; Acceptance evidence: pending, failure, and ready browser behavior plus production size-budget proof and exact-head validation.

## Initial plan

1. Baseline the current bootstrap imports, route consumers, production artifact
   sizes, and existing loading/error primitives.
2. Introduce a localized startup shell that mounts synchronously, then replace
   it after vault WASM initialization and identity verification.
3. Move companion initialization behind the consuming feature boundary and add
   targeted lifecycle coverage.
4. Add deterministic production WASM size reporting and a regression ceiling.
5. Update product documentation, run pre-push hygiene, obtain advisory review,
   and deliver the exact head through hosted validation and squash merge.

## Completion evidence

- Browser/demo evidence observes the startup shell before a controlled WASM
  release, then the normal vault surface afterward, plus an initialization
  failure state.
- Static/build evidence proves vault entrypoints no longer await companion WASM.
- Production artifact output records raw and compressed WASM size and passes the
  documented ceiling.
- Exact-head repository checks, review inspection, readiness audit, squash merge,
  linked Workbench worklog, and PR statistics are visible.

## Safety review

This plan contains no raw prompt, transcript, secrets, private data, raw logs,
local paths, or unnecessary infrastructure details.
