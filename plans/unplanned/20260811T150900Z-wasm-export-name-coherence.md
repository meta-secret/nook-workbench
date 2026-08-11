---
title: Enforce coherent Rust WASM export names and typed workflow state
feature: unplanned
issue: issues/unplanned/wasm-export-name-coherence.md
started_at: 2026-08-11T15:09:00Z
agent: codex
---

# Enforce coherent Rust WASM export names and typed workflow state

## Interpreted request

Make Rust and TypeScript WASM callables directly searchable by the same name.
Do not rename exported Rust functions or methods with `js_name`. Capture the
rule in Cortex, enforce it mechanically, migrate existing callables, and replace
stringly typed authentication workflow view state with domain enums or structs.

## Requirements

- Add a concise dynamic-skill card and update the Cortex registry.
- Add syntax-aware preflight that rejects callable `js_name` renames.
- Keep getter/property metadata and imported browser bindings outside the ban.
- Remove existing callable renames from authored Nook WASM crates.
- Update generated API consumers to use the authored Rust names.
- Refactor authentication workflow kind, stage, and action to typed state.
- Add behavior and checker tests for every new invariant.
- Pass exact-head validation and merge with no unresolved feedback.

## Constraints and exclusions

- Do not modify foreign issues, branches, or pull requests.
- Do not change browser or authentication behavior solely to simplify naming.
- Keep portable policy and domain state in Rust.
- Heavy product validation runs through pull-request checks.

## Change budget and PR sequence

- Estimated authored changed lines: 2,500
- Owning modules, packages, or layers: Cortex, preflight, nook-companion-wasm,
  nook-wasm, generated TypeScript bindings, and direct web consumers.
- Public or cross-module interfaces: generated Rust/WASM JavaScript API names.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,500
- Current PR slice and acceptance evidence: callable-name migration, checker, and typed authentication workflow state; Acceptance evidence: exact-head validation and green Main.
- PR slices and acceptance evidence: 1. callable-name migration, checker, and typed authentication workflow state; Acceptance evidence: exact-head validation and green Main.

## Initial plan

1. Inventory callable `js_name` attributes and distinguish allowed properties
   and imported browser APIs.
2. Add Cortex guidance and a syntax-aware preflight rule with fixtures.
3. Remove callable renames and update all generated TypeScript consumers.
4. Replace stringly typed authentication workflow view state and similar direct
   cases with domain enums or structs.
5. Format, validate, address current feedback, merge, and verify Main.

## Completion evidence

- Preflight reports zero callable `js_name` renames.
- Rust and web tests pass against the renamed generated API.
- Workflow-state tests prove every domain branch is typed.
- Exact-head PR and merged-Main workflows pass.
- Workbench issue, worklog, and statistics are current.

## Safety review

This record contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
