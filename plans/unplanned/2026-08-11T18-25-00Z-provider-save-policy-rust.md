---
title: Move provider-save policy into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-11T18:25:00Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Continue the 750-line migration by removing portable provider construction,
duplicate handling, vault scoping, and OAuth configuration merge policy from
the oversized Svelte provider action owner. Put that deterministic behavior in
`nook-core`, expose it through the typed Rust/WASM boundary, and retain browser
storage, OAuth lifecycle, translations, and reactive state application in
TypeScript.

## Requirements

- Reduce `vault/providers.svelte.ts` from 968 lines to at most 750 lines.
- Represent provider-save inputs and outcomes with typed Rust domain models.
- Preserve duplicate-provider and missing-local-folder user behavior.
- Preserve provider IDs, timestamps, vault scopes, labels, credentials, and
  OAuth merge semantics.
- Add behavior-focused Rust tests for the migrated policy and targeted web
  adapter coverage where needed.
- Pass focused and complete exact-head validation before squash merge.

## Constraints and exclusions

- No mobile application, mobile scaffold, bindings, or UI are included.
- Browser IndexedDB persistence, OAuth popup flows, Svelte state mutation, and
  translated error presentation remain TypeScript/browser responsibilities.
- No arbitrary numbered fragments or test-only extraction is allowed.
- Heavy validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 1,600
- Owning modules, packages, or layers: `nook-core` sync-provider save policy,
  typed `nook-wasm` adapter, and the web provider action adapter
- Public or cross-module interfaces: Add typed provider-save request/outcome
  DTOs and one WASM function; existing UI action interfaces remain stable.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,600
- Current PR slice and acceptance evidence: Provider-save domain ownership; Acceptance evidence: Rust tests cover provider creation, duplicate outcomes, local-row scoping, and OAuth merge behavior; the TypeScript owner is below 750 lines; focused and complete exact-head validation passes.
- PR slices and acceptance evidence:
Provider-save domain ownership; Acceptance evidence: Rust tests cover provider creation, duplicate outcomes, local-row scoping, and OAuth merge behavior; the TypeScript owner is below 750 lines; focused and complete exact-head validation passes.

## Initial plan

1. Model the current TypeScript provider-save transition as typed Rust inputs
   and outcomes without importing browser lifecycle concerns.
2. Implement the pure transition in a focused sync-provider module with inline
   behavior tests.
3. Export the transition through the typed WASM API.
4. Replace the TypeScript policy block with projection and outcome application.
5. Verify line counts, generated bindings, format, and pre-push hygiene.
6. Run focused hosted Rust/WASM/web checks and complete exact-head validation.
7. Resolve actionable feedback, pass readiness, squash merge, and publish the
   Workbench completion records.

## Completion evidence

- The provider-save policy has direct Rust tests for each behavioral branch.
- `providers.svelte.ts` and every new or changed source file are at or below 750
  physical lines.
- The typed web adapter preserves existing user-visible errors and lifecycle.
- Complete exact-head validation and readiness pass on current Main.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
