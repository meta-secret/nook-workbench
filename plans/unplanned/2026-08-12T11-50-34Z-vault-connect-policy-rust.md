---
title: Move vault connection gating into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-12T11:50:34Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Continue the 750-line migration by moving reusable vault connection decisions
out of the TypeScript secrets workflow and into portable Rust. Decompose the
oversized Rust client-policy owner along cohesive connection, editing, session,
and synchronization responsibilities. Keep browser and Svelte orchestration in
TypeScript.

## Requirements

- Reduce the 833-line TypeScript secrets workflow and 778-line Rust
  client-policy source to at most 750 lines.
- Move remote enrollment probe selection and password-versus-enrollment gate
  decisions into `nook-core`.
- Expose the new portable decisions through the typed `nook-wasm` boundary.
- Preserve storage queues, provider calls, animation scheduling, translations,
  reactive state, and WASM resource cleanup in TypeScript.
- Add behavior-focused Rust tests and targeted actual-WASM adapter tests.
- Pass focused and complete exact-head validation before squash merge.

## Constraints and exclusions

- No mobile application, binding, scaffold, or UI work is included.
- Do not move browser lifecycle or presentation state into Rust.
- Rust tests remain colocated with their focused production modules.
- No arbitrary numbered fragments or test-only extraction is allowed.
- Heavy validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 2,100
- Owning modules, packages, or layers: nook-core vault client policy,
  nook-wasm runtime adapter, and vault secrets connection orchestration
- Public or cross-module interfaces: Add typed connection probe and enrollment
  gate decisions while retaining existing `NookVaultClientPolicy` entrypoints.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,100
- Current PR slice and acceptance evidence: Vault connection policy ownership; Acceptance evidence: Rust tests cover all access, authentication, provider, password, and join combinations; actual-WASM tests cover exported decisions; affected authored sources are below 750 lines; focused and complete exact-head validation passes.
- PR slices and acceptance evidence:
Vault connection policy ownership; Acceptance evidence: Rust tests cover all access, authentication, provider, password, and join combinations; actual-WASM tests cover exported decisions; affected authored sources are below 750 lines; focused and complete exact-head validation passes.

## Initial plan

1. Inventory the existing client-policy types, methods, callers, and direct
   tests before changing the public boundary.
2. Decompose client policy into cohesive connection, editing, session, and
   synchronization modules with colocated behavior tests.
3. Add portable decisions for whether to probe the first remote provider and
   whether connection should proceed, prompt for a password, request
   enrollment, or await approval.
4. Expose the decisions through the typed WASM adapter and replace the
   corresponding TypeScript condition trees with Rust results.
5. Preserve browser storage selection and side effects in the TypeScript
   executor, then add targeted adapter and workflow coverage.
6. Verify physical line counts, format, and pre-push hygiene.
7. Run focused hosted Rust and web checks, complete exact-head validation,
   resolve actionable feedback, pass readiness, squash merge, and publish the
   Workbench completion records.

## Completion evidence

- Vault connection and enrollment gates have one portable Rust authority.
- TypeScript retains only host-specific orchestration and explicit translation
  of Rust decisions into browser/Svelte effects.
- Every changed authored source is at or below 750 physical lines.
- Complete exact-head validation and readiness pass on current Main.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
