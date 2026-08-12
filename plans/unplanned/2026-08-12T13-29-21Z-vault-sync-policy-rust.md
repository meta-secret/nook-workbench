---
title: Move scheduled vault sync policy into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-12T13:29:21Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Continue the 750-line migration and TypeScript-to-Rust ownership audit by
moving reusable scheduled-sync and storage-sync routing decisions from the
oversized TypeScript sync workflow into portable Rust. Keep browser timers,
provider I/O, logging, and reactive mutations in TypeScript.

## Requirements

- Reduce the 758-line TypeScript vault sync workflow to at most 750 lines.
- Move sync timer start, scheduled tick, and storage route decisions into
  `nook-core`.
- Expose typed decisions through the existing `NookVaultClientPolicy` WASM
  adapter.
- Preserve provider access, timers, browser credentials, logging, error
  handling, and Svelte state mutations in TypeScript.
- Add behavior-focused Rust tests and targeted actual-WASM adapter tests.
- Pass focused and complete exact-head validation before squash merge.

## Constraints and exclusions

- No mobile application, binding, scaffold, or UI behavior is included.
- Do not move browser lifecycle or provider transport into Rust.
- Rust tests remain colocated with the focused production policy.
- No arbitrary fragments or test-only extraction is allowed.
- Heavy validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 1,100
- Owning modules, packages, or layers: nook-core vault client policy,
  nook-wasm runtime adapter, and shared vault sync orchestration
- Public or cross-module interfaces: Add typed sync timer and storage routing
  decisions to `NookVaultClientPolicy`.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,100
- Current PR slice and acceptance evidence: Scheduled and storage sync policy ownership; Acceptance evidence: Rust tests cover locked, idle, busy, unauthenticated, local-only, and provider-backed routes; actual-WASM tests cover exported decisions; the TypeScript sync owner is below 750 lines; focused and complete exact-head validation passes.
- PR slices and acceptance evidence:
Scheduled and storage sync policy ownership; Acceptance evidence: Rust tests cover locked, idle, busy, unauthenticated, local-only, and provider-backed routes; actual-WASM tests cover exported decisions; the TypeScript sync owner is below 750 lines; focused and complete exact-head validation passes.

## Initial plan

1. Inventory every scheduled-sync and storage-sync predicate, caller, and
   enforcement test before editing.
2. Define typed Rust decisions for timer startup, scheduled ticks, and storage
   route selection with colocated behavior tests.
3. Expose those decisions through the existing typed WASM client-policy
   adapter and add actual-WASM tests.
4. Replace TypeScript condition trees with explicit enum execution while
   preserving timers, transport calls, logs, and reactive effects.
5. Verify all retained symbol references and source-path ownership guards,
   then keep every changed authored source below 750 lines.
6. Run mandatory formatting and pre-push hygiene with the required demo change
   committed before the final HEAD-based contract.
7. Run focused hosted validation, complete exact-head validation, resolve all
   actionable feedback, pass readiness, squash merge, and publish Workbench
   completion records.

## Completion evidence

- Scheduled and storage sync gates have one portable Rust authority.
- TypeScript retains only host-specific orchestration and typed decision
  execution.
- Every changed authored source is at or below 750 physical lines.
- Complete exact-head validation and readiness pass on current Main.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
