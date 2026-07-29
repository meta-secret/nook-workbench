---
title: Correct TypeScript null and void semantics
feature: unplanned
issue: ""
started_at: 2026-07-29T06:34:33Z
agent: codex
supersedes: plans/unplanned/2026-07-29T00-26-42Z-explicit-typescript-state.md
---

# Task plan

## Interpreted request

Correct the explicit-state policy so absence values and effect completion are
not conflated. Authored JavaScript, TypeScript, and Svelte must not use `null`
or `undefined` to model state, while `void` remains the normal unit/effect type
for callbacks, commands, promises, and intentionally discarded results.

## Requirements

- Update canonical Cortex guidance and its dynamic-skill registry entry with
  the semantic distinction between absence and unit/effect completion.
- Keep authored `null` prohibited and remove platform-specific null allowlists
  from static enforcement.
- Permit `void` in effect positions including `(): void`, `Promise<void>`, and
  the unary `void` operator.
- Continue rejecting `T | void` when it is used as mutable application-state
  absence rather than as a return contract.
- Cover the distinction with syntax-aware positive and negative fixtures.
- Preserve generated declarations that truthfully mirror external nullable
  APIs without allowing generated contracts to leak into authored state.

## Constraints and exclusions

- Do not replace `null` with a disguised sentinel, fake value, cast, or quoted
  comparison.
- Do not rewrite valid effect signatures merely to remove the `void` token.
- Do not weaken the existing explicit-state requirements for domain,
  lifecycle, workflow, or resource state.
- Run product validation on GitHub-hosted workers rather than locally.

## Initial plan

1. Inventory policy text, static-analysis behavior, null allowlists, and current
   authored null sites.
2. Correct Cortex guidance and the canonical explicit-state skill.
3. Remove null exceptions, expand authored-code coverage, and add semantic
   checker fixtures for valid effect `void` and invalid absence unions.
4. Refactor newly exposed authored null sites without hiding absence.
5. Format, push, and validate the focused preflight remotely.

## Completion evidence

- Canonical guidance describes `void` as TypeScript unit/effect completion.
- Static fixtures accept effect `void` and reject authored null plus mutable
  `T | void` absence.
- The authored-code null inventory is empty outside generated declarations.
- Exact-head hosted preflight reports no null/void-policy failure.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
