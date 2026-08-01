---
title: Eliminate redundant authored Rust macros
feature: rust-domain-modeling
issue: none
started_at: 2026-08-01T04:38:54Z
agent: codex
---

# Eliminate redundant authored Rust macros

## Interpreted request

Make explicit Rust code the repository default: remove repository-defined
macros whose code generation or control-flow shorthand hides ordinary behavior,
and preserve the preference as durable Cortex guidance with mechanical coverage.

## Requirements

- Inventory authored Rust macro definitions and classify their callers before
  changing code.
- Replace redundant declarative macros with ordinary structs, implementations,
  functions, and explicit control flow, accepting small amounts of boilerplate.
- Add a durable Cortex skill card and prominent repository rule that future Rust
  code avoids authored macros by default.
- Add syntax-aware preflight coverage so repository-defined macro definitions do
  not silently return.
- Preserve serialization, identifiers, error messages, and public APIs.
- Deliver through exact-head GitHub Actions validation and squash merge.

## Constraints and exclusions

- Compiler- and ecosystem-provided derives and attributes remain allowed when
  they are the idiomatic integration boundary, including Serde, thiserror,
  wasm-bindgen, Tsify, and test attributes.
- Standard value, formatting, logging, assertion, and test helper macros are not
  mechanically expanded into worse code in this migration.
- Generated code and third-party dependencies are outside the authored-source
  rule.

## Initial plan

1. Complete the macro definition and call-site inventory and classify each use.
2. Capture the rule in Cortex and add syntax-aware preflight tests.
3. Replace every redundant repository-defined Rust macro with explicit code.
4. Format, run focused hosted checks, validate the complete PR head, address
   existing feedback, and squash merge.
5. Publish the linked Workbench worklog and agent statistics.

## Completion evidence

- No repository-defined Rust macro remains without a documented exception.
- Preflight rejects new authored macro definitions while accepting supported
  derives, attributes, and ordinary external macro invocations.
- Exact-head repository checks pass and the implementation PR is squash-merged.
- Workbench worklog and statistics are published.

## Safety review

- This plan contains no raw prompt, transcript, secret, private data, raw log,
  local path, or unnecessary infrastructure detail.
