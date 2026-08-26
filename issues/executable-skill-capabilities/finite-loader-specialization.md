---
title: Prove finite executable loader specialization
status: done
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T09:34:53Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1125
depends_on:
  - issues/executable-skill-capabilities/runtime-boundary-analysis.md
---

# Prove finite executable loader specialization

## Context

Repository tooling contains legitimate finite package, local-data, and generated
artifact loaders. Their exact closure proof must precede broader reachability.

## Outcome

Closed loader callsites are specialized for boundary inspection only when every
package, local source, output path, and producer is statically proven.

## Scope

- Specialize finite external package and tracked local-data loaders.
- Prove generated artifacts from exact tracked producers and fixed outputs.
- Reject computed, escaped, repository-backed, or incomplete loader patterns.
- Exclude configuration and production runtime graph traversal.

## Acceptance criteria

- [x] Exact closed fixtures specialize deterministically.
- [x] Escaped and computed callsites remain boundary violations.
- [x] Generated artifacts require source-closed producer evidence.
- [x] Focused tests, full validation, and exact-head review pass.

## Progress

- Merged PR #1125 as `3f4312b6b02a37265716f4970102753e5688d8b7`.

## Findings and decisions

- Specialization is analysis-only and grants no runtime authority.
- Lexical evaluator identity and descending non-overlapping replacements are
  required before finite loader specialization is accepted.

## References

- `agentic-ai/loom/tests/skill-provider-bounded-package-loader.ts`
