---
title: Tighten TS→Rust domain boundaries and ship companion WASM
feature: rust-domain-modeling
issue: none
started_at: 2026-07-31T03:25:00Z
agent: cursor
---

# Tighten TS→Rust domain boundaries and ship companion WASM

## Interpreted request

Finish the domain-boundary cleanup after the first TS→Rust wave: structure
portable observation inputs instead of loose string bags, stop mirroring Rust
enums in TypeScript, and remove content-script / host-policy TypeScript copies
by shipping a tiny companion WASM package that does not pull the full vault
runtime.

## Requirements

- `has_login_context` and similar classifiers take a named observation struct,
  not a bag of loose strings.
- Web OAuth origin call sites use generated WASM enums and support types
  directly; delete string enum mirrors and reason-mapping helpers.
- Extract portable companion heuristics and host policy into a lightweight core
  crate consumed by a dedicated companion WASM package.
- Extension content scripts and Manifest/Node host policy call that companion
  package; delete aligned TypeScript heuristic mirrors.
- Full vault `nook-wasm` remains for background, popup, and vault apps.
- No CLI or mobile apps are introduced.
- Preflight ownership gates stay green; behavior stays covered by Rust tests.

## Constraints and exclusions

- Do not inject the full vault WASM into content scripts.
- Keep DOM query, visibility, fill, OAuth SDK ceremony, and Manifest wiring in
  TypeScript/host adapters.
- Do not rewrite sync/provider orchestration already delegated to WASM.

## Initial plan

1. Structure login-context and related observation inputs in core.
2. Delete TypeScript OAuth enum mirrors; update vault-app call sites.
3. Extract companion-core and companion-wasm; wire build/CI.
4. Point content scripts and Manifest/Node host policy at companion WASM; delete
   TypeScript mirrors.
5. Format, validate on GitHub Actions, squash merge, publish Workbench records.

## Completion evidence

- Merged Nook PR with green exact-head checks.
- Content/host-policy TypeScript heuristic mirrors removed or reduced to DOM
  adapters.
- Workbench worklog and agent statistics published.

## Safety review

- No raw prompts, transcripts, secrets, private data, or raw logs.
