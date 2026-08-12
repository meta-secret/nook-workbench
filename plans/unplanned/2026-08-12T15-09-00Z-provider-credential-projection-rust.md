---
title: Move active-provider credential projection into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-12T15:09:00Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Continue the 750-line migration and TypeScript-to-Rust ownership audit by
moving reusable active-provider credential projection from the oversized
TypeScript provider workflow into portable Rust. Keep Svelte mutations,
browser storage, provider I/O, and OAuth lifecycle in TypeScript.

## Requirements

- Reduce the 751-line TypeScript provider workflow to at most 750 lines.
- Move local, login-setup, and sync-provider credential selection into
  `nook-core` as a typed projection.
- Preserve the current GitHub repository and OAuth remote-file defaulting
  semantics.
- Expose the projection through the existing provider WASM boundary.
- Keep browser persistence, OAuth setup, folder handles, logging, translation,
  and reactive state mutations in TypeScript.
- Add behavior-focused Rust tests and targeted actual-WASM adapter tests.
- Pass focused and complete exact-head validation before squash merge.

## Constraints and exclusions

- No mobile application, binding, scaffold, or UI behavior is included.
- Do not move browser lifecycle, IndexedDB, OAuth transport, or folder-handle
  access into Rust.
- Rust tests remain beside the focused production projection.
- No arbitrary fragments or test-only extraction is allowed.
- Heavy validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: nook-core sync-provider store,
  nook-wasm provider adapter, and shared vault provider orchestration
- Public or cross-module interfaces: Add one typed active-provider credential
  projection and WASM result wrapper.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Active-provider credential projection ownership; Acceptance evidence: Rust tests cover local vault, active login setup, absent sync provider, GitHub, OAuth, and local-folder projections; actual-WASM tests cover the exported projection; the TypeScript provider owner is below 750 lines; focused and complete exact-head validation passes.
- PR slices and acceptance evidence:
Active-provider credential projection ownership; Acceptance evidence: Rust tests cover local vault, active login setup, absent sync provider, GitHub, OAuth, and local-folder projections; actual-WASM tests cover the exported projection; the TypeScript provider owner is below 750 lines; focused and complete exact-head validation passes.

## Initial plan

1. Inventory the active-provider credential projection, callers, typed provider
   models, defaults, and existing Rust provider policies.
2. Define a portable Rust input and output projection with colocated tests for
   every provider mode and missing-provider path.
3. Expose the projection through the existing typed WASM provider adapter and
   add actual-WASM assertions.
4. Replace the TypeScript condition tree with a thin typed projection adapter
   that performs only Svelte state mutations.
5. Verify retained callers and ownership guards, and keep every changed source
   below 750 lines.
6. Run mandatory formatting and pre-push hygiene, then focused hosted and
   complete exact-head validation.
7. Resolve existing feedback, pass readiness, squash merge, and publish the
   Workbench issue update, linked worklog, and agent statistics.

## Completion evidence

- Active-provider credential selection has one portable Rust authority.
- TypeScript retains only host-specific effects and typed projection execution.
- Every changed authored source is at or below 750 physical lines.
- Complete exact-head validation and readiness pass on current Main.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
