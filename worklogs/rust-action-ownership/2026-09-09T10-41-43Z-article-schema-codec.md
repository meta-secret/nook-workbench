---
title: Replace handwritten article decoding with Zod schemas
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T10-31-36Z-article-schema-codec.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T10:31:36Z
finished_at: 2026-09-09T10:41:43Z
agent: codex
---

# Work summary

## Outcome

CortexArticleTransport now uses Zod 4.4.3 strict schemas for structural admission and schema-inferred DTO types. Published [PR #1573](https://github.com/meta-secret/nook/pull/1573) at 23e77f1a9a721004dfdef857cf924abf9f00fd51. Native JSON parsing remains at the syntax boundary; handwritten field decoding is removed.

## Progress

AI committed eight files, with 537 insertions and 592 deletions across the complete change. Added canonical schema, vocabulary, focused decode-error and domain-admission modules; simplified codec and inferred domain DTOs. Added the direct runtime dependency and exact already-recorded package entry to the Cortex lockfile without installing or resolving dependencies.

## Implementation problems

The existing codec used native JSON.parse but manually checked records, exact keys, scalar fields and arrays, then rebuilt DTOs. Its first-error ordering, path redaction and domain relations required preserving staged admission rather than flattening all library errors. Host-advertised text restrictions intentionally differ from the direct codec, so the host schema was retained.

## Decisions

- Strict Zod schemas own object keys, required fields, literals/enums, arrays and numeric/string bounds; readonly public DTO types derive from them.
- Removed ten structural helpers, six key allow-lists, finding-code rediscovery and failure factories. No custom refinement callbacks recreate the parser.
- Keep UTF8 byte admission and native JSON syntax handling at transport. Pinned library string limits preserve the current UTF16 contract.
- Document duplicate/order rules, request-derived capacity and canonical finding diagnostics remain named domain admission owners.
- The focused error adapter preserves staged unknown/missing/ordinary-field priority and redacts untrusted keys. Library issues/messages/payloads are not exposed or logged.
- Preserve the stricter host schema and its custom keywords without introducing a schema-generation framework.

## Validation

No tests, typechecks, compilation, dependency installation/resolution, generation, checks, audits, reviews or workflows ran. Write-mode formatting only. The delegation renderer displayed the required plan; publication receipts are metadata, not code validation. Dependency integration and runtime equivalence remain unverified.

## Remaining work

The scoped structural codec refactor is implemented. Dependency installation and all code verification await separate user instruction. Existing generated binding limitations from earlier rounds remain. Delivery stops at the open PR.

## Exact source scope

The Cortex workspace lockfile plus cortex-article-structure/scripts/package.json and src/schema.ts, vocabulary.ts, domain.ts, codec.ts, decode-error.ts and admission.ts. Existing public imports and wire shapes are retained; no unrelated transport or host-schema rewrite.
