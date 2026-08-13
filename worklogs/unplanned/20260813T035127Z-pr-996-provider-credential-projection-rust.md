---
title: Move active-provider credential projection into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-12T15-09-00Z-provider-credential-projection-rust.md
nook_pr: 996
status: completed
started_at: 2026-08-12T15:09:00Z
finished_at: 2026-08-13T03:51:27Z
agent: codex
---

# Work summary

## Outcome

Active-provider credential selection now has one portable Rust authority,
exposed through typed WASM requests and outcomes. TypeScript retains only
browser-specific setup and reactive host mutations. The provider adapter is
736 lines and every changed authored source is below the 750-line limit.

## Progress

- Added the Rust active-provider request, login setup, credential projection,
  draft, and apply policy with behavior-focused unit coverage.
- Exposed typed WASM projection state, draft access, provider-save outcome,
  local-folder classification, and Rust-owned login-setup constructors.
- Replaced the TypeScript credential-selection condition tree with a thin
  typed adapter and added actual-WASM adapter coverage.
- Preserved browser persistence, OAuth lifecycle, folder handles, logging,
  translation, and Svelte state mutation in the web layer.

## Implementation problems

- Exact ECMAScript trimming semantics initially differed at Unicode boundary
  code points. The Rust normalization was aligned with JavaScript, including
  the byte-order mark while excluding the next-line control character.
- Review found that TypeScript still authored serialized Rust enum literals.
  Rust/WASM constructors now own both active and inactive variants.
- The local Docker socket stopped responding during validation. Restarting
  Docker restored the engine; the full Docker-backed formatting pass then
  completed successfully without changing validation scope.

## Decisions

- Portable credential selection, provider defaults, normalization, and enum
  wire shapes belong in Rust for reuse across future hosts.
- Browser storage, provider I/O, OAuth transport, folder handles, and reactive
  mutations remain host-specific TypeScript responsibilities.
- Unknown host observations remain explicit; this change does not infer
  provider facts or introduce mobile application code.

## Validation

- Local `task format` and `task loom:pre-push` passed with Docker healthy.
- Focused hosted `preflight,rust:test,web:check` passed on the final head.
- Complete exact-head PR validation passed native Rust, WASM build and Node
  tests, web verification, headless UI demo, coverage, dependency and RustSec,
  fuzz, Dylint, Kani, proptest, Insta, Loom, and preview verification.
- `task pr:ready PR=996` reported the PR current, mergeable, previewed, with
  zero unresolved threads and every required workflow successful.
- [Nook PR 996](https://github.com/meta-secret/nook/pull/996) squash-merged as
  `e0224ad0af719b23369d4b19ce27854f3c46c3e8`.

## Remaining work

- Continue the ordered 750-line migration until every remaining authored
  source violation is decomposed and the executable threshold can be lowered.
