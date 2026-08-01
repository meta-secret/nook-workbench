---
title: Eliminate the TypeScript password generator
feature: unplanned
issue: none
plan: plans/unplanned/20260801-051455-eliminate-typescript-password-generator.md
nook_pr: 900
status: completed
started_at: 2026-08-01T05:14:55Z
finished_at: 2026-08-01T06:12:47Z
agent: codex
---

# Eliminate the TypeScript password generator

## Outcome

Removed the shared TypeScript password-generator module. Rust now owns the
password-generation option type, secure defaults, validation, and random
generation, exposed to the vault applications and browser extension through a
typed WASM API. Nook PR https://github.com/meta-secret/nook/pull/900 is ready
for review and intentionally remains open and unmerged.

## Progress

- Added the Rust-owned `PasswordGenerationOptions` contract and defaults in
  `nook-core`, with typed WASM exports for defaults and generation.
- Migrated vault UI and browser-extension callers to generated Rust/WASM
  bindings and removed TypeScript wrappers, mirrors, imports, and configuration.
- Deleted the TypeScript generator module and added preflight enforcement that
  prevents an authored TypeScript option mirror from returning.
- Added behavior-focused Rust tests, targeted component coverage, and a UI demo
  assertion for the Rust-owned default generated-password length.

## Implementation problems

- Main advanced during implementation. The branch was rebased onto the new
  `origin/main`, conflicts were resolved without changing the ownership model,
  and all evidence was regenerated against the rebased head.
- The first hosted validation observed the UI demo change before it was part of
  the pushed commit. The demo assertion was committed, formatting was rerun,
  the stale run was cancelled, and complete validation was triggered again on
  the exact replacement head.

## Decisions

- Rust is the sole owner of password-generation policy, including option shape,
  defaults, bounds, charset validation, and secure randomness.
- TypeScript and Svelte retain only presentation state and browser lifecycle;
  they consume the generated Rust type instead of defining a parallel DTO.
- Typed free WASM functions provide defaults and generation without adding
  unrelated manager borrowing or application state.
- The implementation PR remains unmerged until explicit user approval.

## Validation

- `task format` passed after the final source and UI demo changes.
- Exact-head complete PR validation passed on
  `aec413c268e537a4079dd6ead1eb168ef0e4bac4`, including source architecture,
  native Rust, WASM, web checks, production builds, security checks, and the
  recorded UI demo.
- A separate full browser end-to-end workflow passed on the same head.
- Repository inventory found no remaining references to the deleted module,
  former TypeScript option type, or positional generation adapter.
- Nook PR: https://github.com/meta-secret/nook/pull/900

## Remaining work

- Merge only after explicit user instruction.
