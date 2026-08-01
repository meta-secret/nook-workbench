---
title: Move vault application-kind behavior into Rust
feature: unplanned
issue: none
started_at: 2026-08-01T06:15:27Z
agent: codex
---

# Task plan

## Interpreted request

Delete the shared TypeScript application-kind module and make the existing
Rust `VaultApplication` domain model the sole owner of application identity,
capabilities, and application-root URL normalization used by the isolated
vault applications.

## Requirements

- Remove `app-kind.ts` and every import or configuration contract that exists
  only to support it.
- Configure the immutable Rust/WASM application identity directly from each
  isolated application entry point before shared application code loads.
- Replace TypeScript-derived Simple, Sentinel, and extension-support booleans
  with Rust-owned capability behavior exposed through typed WASM bindings.
- Move Simple Vault application-root URL defaulting and normalization into
  Rust while preserving deployment-channel URL injection.
- Preserve the Simple, Sentinel, unified-development, and extension isolation
  behavior and existing public routes.
- Extend the existing implementation PR and keep it open and unmerged until
  explicit user direction.

## Constraints and exclusions

- Keep browser build-environment reading and the one-time WASM bootstrap in
  TypeScript because they are browser/build lifecycle boundaries.
- Do not introduce a TypeScript mirror of `VaultApplication` or its capability
  policy.
- Preserve the generated Rust/WASM enum and stable serialized application
  names.
- Avoid unrelated UI or visual changes.

## Initial plan

1. Inventory the module, build-time injection, all consumers, Rust application
   policy, WASM bootstrap, preflight contracts, and app-isolation tests.
2. Add cohesive Rust application capability and URL behavior with focused Rust
   tests and typed WASM exports.
3. Configure Rust from each entry point, migrate all shared callers to the
   Rust-owned API, delete `app-kind.ts`, and remove obsolete build definitions.
4. Update preflight and focused web tests to enforce the new boundary.
5. Format, update PR 900, and run exact-head hosted validation without merging.

## Completion evidence

- Repository inventory finds no `app-kind.ts`, `$lib/app-kind` import, or
  obsolete `__NOOK_APP_KIND__` build global.
- Rust tests cover all application capability variants and URL normalization.
- App-isolation/preflight checks assert that identity and capability policy are
  Rust-owned.
- Exact-head GitHub-hosted validation passes and PR 900 remains open.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data,
  raw log, local path, or unnecessary infrastructure detail.
