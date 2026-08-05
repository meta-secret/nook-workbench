---
title: Move Rust panic-shortcut enforcement to Clippy
feature: agent-workflow
issue: none
started_at: 2026-08-05T07:15:00Z
agent: cursor
---

# Task plan

## Interpreted request

Stop duplicating Clippy's panic-shortcut lints in preflight syn scanners.
Make Clippy the owner of `.expect` / `.unwrap` (including tests), keep
preflight for contracts Clippy cannot express cleanly, and document the
ownership split.

## Requirements

- Explicit `clippy.toml` in each Rust workspace denies expect/unwrap in tests.
- Workspace Clippy still denies `expect_used` and `unwrap_used`.
- Preflight keeps a contract that those Clippy settings remain configured.
- Remove the redundant authored-source `.expect` AST walk from preflight.
- Docs state: JsValue, authored macros, and untyped JSON test assertions stay
  in preflight; custom Dylint is deferred until a reusable typed rule needs it.
- Fuzz workspace also denies `expect_used`.

## Constraints and exclusions

- Do not enable Clippy `disallowed_types` for `JsValue` (wasm-bindgen false
  positives).
- Do not author a custom Dylint library in this change.
- Do not migrate TypeScript/Svelte or delivery topology checks out of preflight.

## Initial plan

1. Publish this plan.
2. Add workspace `clippy.toml` files and fuzz `expect_used` deny.
3. Thin preflight panic-shortcut tests to Clippy config contracts.
4. Update Cortex/rules guidance for the ownership split.
5. Format, commit, and push on the active branch.

## Completion evidence

- clippy.toml present for nook-app, preflight, minds, and fuzz.
- Preflight no longer walks syn for `.expect` calls.
- Docs and contracts describe Clippy ownership for panic shortcuts.
- Branch commit pushed.

## Safety review

- Contains no raw prompt, transcript, secrets, private data, or raw logs.
