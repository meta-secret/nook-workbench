---
title: Correct Cortex compiler ownership and close review findings
feature: agent-workflow
issue: issues/agent-workflow/cortex-semantic-debt.md
plan: plans/agent-workflow/20260831T052249Z-cortex-contract-compiler-superseding.md
nook_pr: https://github.com/meta-secret/nook/pull/1256
status: completed
started_at: 2026-08-31T05:42:00Z
finished_at: 2026-08-31T07:21:00Z
agent: codex
---

# Correct Cortex compiler ownership and close review findings

## Outcome

Reworked PR #1256 so the executable Cortex consistency skill owns its typed
policy registry, path and ownership rules, persistence safeguards, compiler,
request codec, action, manifest, and tests. Loom now provides only the
repository Markdown adapter and invokes the skill application.

All visible review threads are addressed and resolved. Codex reviewed final
exact head `bf872d73a750978370996f42ebc3cd038286f447` without new findings.

## Review findings addressed

- Derived effective ownership from canonical document paths instead of authored
  owner claims, and restricted contexts to the closed authority-document set.
- Replaced partial Markdown matching with parsed links and CommonMark-compatible
  first-definition behavior; normalized fragments, queries, and traversal.
- Kept persisted representation contracts coupled to schema authority and
  compatibility evidence.
- Registered `cortexConsistency.compile` in the executable-skill host with a
  strict bounded request decoder and provider edge.
- Moved the compiler and policy tests into the skill package; Loom retains only
  reference-extraction and repository-integration coverage.

## Validation

- `task skills:verify`: 29 article tests, 9 consistency tests, and 31 host tests
  passed.
- Focused Loom Markdown-adapter suite: 8 tests passed.
- `task loom:cortex-audit`: passed with no contract findings.
- `task loom:pre-push`: passed against base
  `d4985405112fc4c84bd9599082d3dc5d8a0dd7ec`.
- Final exact-head Codex review: clean, zero unresolved threads.
- Hosted validation reached only the known module-expert catalog baseline:
  645 passing and 19 failing tests in run `33367731974`.
- Authored PR size after compaction: 1,934 additions and 48 deletions.

## Known baseline failure

The full Loom suite still has the independently reproduced 19-test
module-expert catalog baseline failure for the already-present
`account-pickers.ts` and `pairing-identity.ts` consumers. This PR does not alter
that catalog.

## Decision

The earlier claim that Loom should own consistency enforcement was incorrect.
The durable boundary is a self-contained executable skill, while Loom remains a
small deterministic repository adapter and orchestration caller.
