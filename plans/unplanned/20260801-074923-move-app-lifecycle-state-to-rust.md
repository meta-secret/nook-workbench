---
title: Move portable application lifecycle state into Rust
feature: unplanned
issue: none
started_at: 2026-08-01T07:49:23Z
agent: codex
---

# Task plan

## Interpreted request

Delete the shared TypeScript application-lifecycle grab-bag and move its
portable vault operation vocabulary and provider policy into Rust/WASM, while
retaining genuine browser and presentation lifecycle state in focused
TypeScript modules.

## Requirements

- Remove `app-lifecycle-state.ts` and migrate every consumer.
- Make Rust the sole owner of portable pending vault operation kinds used by
  Simple Vault and Sentinel creation flows.
- Remove the TypeScript provider-kind mirror and use the existing Rust-owned
  storage provider type at the browser adapter boundary.
- Keep color-scheme persistence, legal URL routing, extension-connect intent,
  extension setup visibility, and browser-held deferred payloads in focused
  TypeScript modules because they depend on browser or presentation state.
- Consolidate the duplicate extension setup offer model.
- Preserve device-protection deferral, existing-vault import, enrollment,
  extension, legal route, and theme behavior.
- Extend PR 900 and keep it open and unmerged until explicit user direction.

## Constraints and exclusions

- Do not serialize browser objects, credentials, reactive vault snapshots, or
  presentation state into Rust merely to eliminate TypeScript declarations.
- Do not introduce raw-string mirrors of generated Rust enums.
- Avoid unrelated visual changes.
- Keep authored source files below the repository size limit.

## Initial plan

1. Inventory every declaration, constructor, transition, consumer, browser
   boundary, existing Rust model, test, and preflight invariant.
2. Add cohesive Rust domain vocabulary and behavior with typed WASM exports and
   focused Rust tests.
3. Split browser-owned lifecycle models into focused TypeScript modules,
   consolidate duplicates, migrate consumers, and delete the original file.
4. Update syntax-aware preflight and focused tests to enforce the ownership
   boundary and preserve behavior.
5. Format, update PR 900, and run exact-head hosted validation without merging.

## Completion evidence

- Repository inventory finds no `app-lifecycle-state.ts` or imports from it.
- Portable vault operation and provider kinds come from generated Rust/WASM
  types rather than authored TypeScript enums.
- Rust tests cover the new domain vocabulary and web tests cover browser-owned
  adapters and queue transitions.
- Exact-head GitHub-hosted validation passes and PR 900 remains open.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data,
  raw log, local path, or unnecessary infrastructure detail.
