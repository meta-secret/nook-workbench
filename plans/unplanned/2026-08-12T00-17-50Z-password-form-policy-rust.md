---
title: Move password-form policy into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-12T00:17:50Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Continue the 750-line migration by separating browser password-form mechanics
from portable authentication policy. Move advance-control classification and
form-priority decisions into `nook-companion-core`. Expose them through the
typed companion WASM boundary. Keep DOM discovery, visibility, native input
events, focus, and form submission in TypeScript.

## Requirements

- Reduce `extension/password-forms.ts` from 977 lines to at most 750 lines.
- Reduce the 753-line companion WASM root below 750 through a cohesive binding
  owner rather than an arbitrary fragment.
- Preserve field discovery, form scoping, autofill, credential capture, and
  submission behavior.
- Put portable control-label and form-priority policy in Rust.
- Add behavior-focused Rust tests and targeted web adapter coverage.
- Pass focused and complete exact-head validation before squash merge.

## Constraints and exclusions

- No mobile application, mobile scaffold, mobile binding, or mobile UI work is
  included.
- DOM traversal, browser rendering checks, event dispatch, focus, and submit
  observation remain TypeScript responsibilities.
- No arbitrary numbered fragments or test-only extraction is allowed.
- Heavy validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 1,800
- Owning modules, packages, or layers: companion-core page/form policy,
  companion-WASM page/form bindings, and the shared browser DOM adapter
- Public or cross-module interfaces: Add typed Rust/WASM form-priority and
  advance-label functions. Preserve the existing password-form TypeScript API.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,800
- Current PR slice and acceptance evidence: Password-form policy ownership; Acceptance evidence: Rust tests cover form priority and advance labels, web tests preserve DOM behavior, every touched source is below 750 lines, and focused plus complete exact-head validation passes.
- PR slices and acceptance evidence:
Password-form policy ownership; Acceptance evidence: Rust tests cover form priority and advance labels, web tests preserve DOM behavior, every touched source is below 750 lines, and focused plus complete exact-head validation passes.

## Initial plan

1. Model the existing advance-label and form-priority rules as portable Rust
   policy beside the current page-field classifiers.
2. Add typed companion WASM exports and actual adapter coverage.
3. Extract DOM field discovery and browser observation into a focused
   TypeScript adapter without changing its public behavior.
4. Replace TypeScript regex and ranking policy with Rust/WASM calls.
5. Verify physical line counts, generated bindings, format, and pre-push
   hygiene.
6. Run focused hosted Rust/WASM/web checks and complete exact-head validation.
7. Resolve actionable feedback, pass readiness, squash merge, and publish the
   Workbench completion records.

## Completion evidence

- Portable label and form-priority policy has direct Rust behavior tests.
- The generated companion package exposes and exercises the typed functions.
- `password-forms.ts`, the companion WASM root, and every new or changed source
  file are at or below 750 physical lines.
- Complete exact-head validation and readiness pass on current Main.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
