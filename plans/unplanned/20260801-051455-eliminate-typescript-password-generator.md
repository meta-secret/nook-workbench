---
title: Move password generation contract fully into Rust
feature: unplanned
issue: none
started_at: 2026-08-01T05:14:55Z
agent: codex
---

# Task plan

## Interpreted request

Remove the shared TypeScript password-generator module and make Rust the sole
owner of password-generation options, defaults, validation, and generation for
the vault applications and browser extension.

## Requirements

- Delete the TypeScript generator module and remove every import, type, helper,
  configuration entry, and test that depends on it.
- Define the option model and secure default configuration in `nook-core`.
- Expose a typed Rust/WASM boundary that accepts the complete option value rather
  than an authored TypeScript DTO or positional argument adapter.
- Preserve configurable length and character-set controls in the vault UI and
  preserve the extension's default suggested-password behavior.
- Add behavior-focused Rust coverage for defaults, validation, character-set
  selection, and generated length, plus focused web coverage where caller
  behavior changes.
- Keep the implementation PR open and unmerged until explicit user direction.

## Constraints and exclusions

- Preserve cryptographically secure randomness and existing length bounds.
- Keep presentation-only reactivity and browser lifecycle in TypeScript/Svelte;
  do not mirror Rust-owned password-generation policy there.
- Do not alter unrelated vault, extension, or secret-storage behavior.
- Do not merge the implementation PR as part of this work session.

## Initial plan

1. Inventory the TypeScript module, all consumers, generated bindings, Rust
   implementation, and relevant tests/configuration.
2. Introduce a cohesive Rust-owned password-generation option contract and
   typed WASM interface with Rust-owned defaults.
3. Migrate the vault and extension callers to the generated binding and delete
   the TypeScript module and stale configuration.
4. Add boundary enforcement and focused tests so the TypeScript ownership does
   not return.
5. Format, publish the implementation branch and PR, and run focused and
   complete GitHub-hosted validation without merging.

## Completion evidence

- Repository search finds no authored TypeScript password-generation policy or
  references to the deleted module.
- Rust tests cover the default contract and option-driven generation behavior.
- Focused hosted Rust/web checks and complete exact-head PR validation pass.
- The implementation PR remains open and unmerged for user review.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
