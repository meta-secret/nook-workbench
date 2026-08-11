---
title: Preserve Rust and TypeScript WASM function-name coherence
status: in-progress
feature: unplanned
owner: codex
---

# Preserve Rust and TypeScript WASM function-name coherence

## Outcome

Rust WASM function and method exports keep their authored Rust names in the
generated JavaScript API. Authentication workflow views use typed domain state
instead of independent string fields.

## Requirements

- Prohibit `js_name` on exported Rust functions and methods.
- Permit JavaScript naming metadata only where it does not rename a callable,
  such as property getters or imported browser APIs.
- Enforce the rule with syntax-aware repository preflight.
- Migrate existing exported callables and their TypeScript consumers.
- Replace `AuthenticationWorkflowView` string fields with enums or structured
  domain state.
- Refactor directly related stringly typed workflow views found by inventory.
- Pass exact-head validation with zero unresolved review conversations.
- Merge only this owned feature and verify the resulting Main head.

## Safety

The refactor must preserve authentication, authorization, vault-storage, and
browser-extension boundaries. No secret value may be added to transport or log
surfaces.
