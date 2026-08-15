---
title: Define the structured-article contract and enforcement
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T07:11:40Z
updated_at: 2026-08-15T08:57:02Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1011
depends_on: []
---

# Define the structured-article contract and enforcement

## Context

This is the foundation of [Cortex structured articles](README.md). Navigation is
already universal, but article bodies do not yet share a clear grammar for
explanation, rules, procedures, branches, validation, and failure handling.

## Outcome

Cortex has one canonical structured-article rule, an executable agent skill,
and a Loom audit that protects mechanically provable parts of the rule while
legacy documents migrate through a shrinking ledger.

## Scope

- Define article shapes for explanation, rules, procedures, and reference data.
- Explain when to use headings, ordered lists, unordered lists, nested lists,
  tables, code blocks, and prose.
- Extend the existing Cortex writer guidance without duplicating it.
- Add syntax-aware Loom findings for objectively unstructured articles and
  procedural sections that lack ordered steps.
- Add focused fixtures and migration-ledger protection.
- Register and link the rule from Cortex entry points.

## Acceptance criteria

- [x] The canonical rule makes semantic structure explicit.
- [x] The executable skill is available to agents editing Cortex documents.
- [x] Loom parses Markdown syntax and ignores examples in code, HTML, and quotes.
- [x] New or migrated documents cannot bypass the structured-article audit.
- [x] The migration ledger cannot grow after its baseline.
- [x] Focused Loom, Cortex, preflight, and pre-push checks pass.

## Constraints

- Do not require lists where prose communicates rationale more clearly.
- Do not enforce a literal list percentage.
- Do not add headings solely to satisfy a checker.
- Keep this foundation PR below 5,000 authored changed lines.
- Preserve the existing relationship and document-map contract.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T071140Z-contract-and-enforcement.md)
- [Cortex document navigation](../cortex-document-navigation/README.md)

## Progress

- 2026-08-15: PR 1011 established the semantic article grammar, executable
  skill, GFM-aware Loom audit, shrinking migration ledger, workflow trigger,
  preflight contract, and focused regression suite.
- 2026-08-15: Exact-head PR validation run 31875360411 and the Pages deployment
  passed before squash merge as commit c8fd52ab.

## Findings

- Markdown definitions and pure HTML comments are transparent syntax. They must
  not hide otherwise consecutive prose blocks or make an empty article appear
  populated.
- Procedure detection needs singular, plural, and qualified heading forms such
  as runbooks, recovery procedures, and delivery sequences.
- GFM table parsing is required because Cortex already uses tables as visible
  reference structure.

## Decisions

- The audit enforces mechanically provable structure, not an arbitrary ratio of
  list syntax.
- Legacy documents remain explicit in one non-growing ledger until their body
  structure is semantically migrated.
