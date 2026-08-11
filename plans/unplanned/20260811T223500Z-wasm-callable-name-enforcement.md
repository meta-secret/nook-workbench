---
title: Enforce Rust WASM callable name coherence
feature: unplanned
issue: issues/unplanned/wasm-export-name-coherence.md
started_at: 2026-08-11T22:35:00Z
agent: codex
---

# Enforce Rust WASM callable name coherence

## Interpreted request

Add the mechanical enforcement split from the callable-name migration. Reject
callable Rust `js_name` overrides and alternate TypeScript names for generated
WASM callables. Keep accessors and external JavaScript imports outside the ban.

## Requirements

- Add a syntax-aware Rust preflight for callable `js_name` attributes.
- Inventory generated Rust/WASM callable and type names.
- Reject direct, re-exported, namespace, CommonJS, dynamic-import, class, and
  instance aliases in authored web sources.
- Track lexical dynamic-import provenance.
- Reject statically computed callable-member aliases.
- Exclude getters and setters from the callable inventory.
- Restore the Cortex statement that preflight enforces the rule.
- Pass exact-head validation and merge with no unresolved feedback.

## Constraints and exclusions

- Do not modify foreign issues, branches, or pull requests.
- Do not rename generated types or property accessors.
- Do not change application behavior.
- Keep every authored source file below 1,000 lines.
- Keep the pull request below 5,000 authored changed lines.

## Change budget and PR sequence

- Estimated authored changed lines: 2,100
- Owning modules, packages, or layers: preflight and Cortex.
- Public or cross-module interfaces: repository validation only.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,100
- Current PR slice and acceptance evidence: callable-name enforcement; Acceptance evidence: focused preflight tests, exact-head validation, and green Main.
- PR slices and acceptance evidence: 1. callable-name enforcement; Acceptance evidence: focused preflight tests, exact-head validation, and green Main.

## Initial plan

1. Restore the syntax-aware checker from the saved enforcement checkpoint.
2. Add regression coverage for every deferred review case.
3. Keep checker responsibilities in cohesive modules below the source limit.
4. Restore accurate Cortex enforcement guidance.
5. Format, validate, address current feedback, merge, and verify Main.

## Completion evidence

- Focused checker tests reject every prohibited alias form.
- Getter and setter property aliases remain accepted.
- Exact-head PR checks pass with no unresolved review threads.
- The merged Main workflow is green.
- Workbench issue, worklog, and statistics are current.

## Safety review

This record contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
