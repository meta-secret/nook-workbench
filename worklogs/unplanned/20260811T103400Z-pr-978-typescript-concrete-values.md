---
title: Prohibit generic TypeScript object types
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
plan: plans/unplanned/20260811T082229Z-typescript-object-type-ban.md
nook_pr: 978
status: completed
started_at: 2026-08-11T08:22:29Z
finished_at: 2026-08-11T10:31:28Z
agent: codex
---

# Work summary

## Outcome

Nook PR 978 was squash-merged. Authored lowercase `object` is prohibited in
Loom and Nook web, generic domain-value substitutes are documented as invalid,
and existing violations in the enforced scope now use concrete domain or
transport-boundary types.

## Progress

- Extended Loom and Nook ESLint contracts plus preflight regression coverage.
- Updated Cortex and executable skill guidance with the narrow immediate
  transport-decoder exception for `unknown` and no exception for `object`.
- Replaced generic extension message and runtime values with concrete unions,
  enums, response types, and Rust/WASM-owned protocol values.
- Added explicit invalid sensitive-payload state so malformed backup-code
  replacement cannot become an empty destructive operation.
- Added a Playwright regression that saves recovery codes, attempts a malformed
  replace request, and verifies the original recovery code survives.
- Shared the generate-password discriminator across sender, receiver, test,
  and serialized demo fixture.

## Implementation problems

- Review found that malformed backup-code values were initially normalized to
  an empty array. The root cause was staging before preserving an invalid
  branch. Staging now rejects and scrubs malformed values before Rust/WASM
  validation.
- Svelte did not preserve a non-null narrowing through a compound queue guard.
  The guard now uses an explicit early-return branch.
- The first final-head Loom run found `undefined` in the new Playwright grant
  decoder. A discriminated valid or invalid parse result replaced it.

## Decisions

- Lowercase `object`, `Object`, `{}`, broad records, `any`, and recursive
  generic value aliases are not domain models.
- `unknown` is permitted only at an unavoidable host transport boundary and
  must narrow immediately into a concrete value or typed failure.
- Browser validation and protocol policy stay in Rust/WASM wherever portable;
  TypeScript remains browser-lifecycle and presentation glue.
- Review comments are polled before check completion. Superseded validation is
  cancelled as soon as actionable feedback or a failure appears.

## Validation

- `task format`
- UI demo contract for the changed UI surface
- `task loom:cortex-audit`
- Extension ESLint and focused TypeScript-state preflight
- Exact-head PR run 31482024448: all required Rust, WASM, web, coverage,
  preview, and headless demo gates passed.
- `task pr:ready PR=978`: ready with zero unresolved conversations.
- [Nook PR 978](https://github.com/meta-secret/nook/pull/978)

## Remaining work

None.
