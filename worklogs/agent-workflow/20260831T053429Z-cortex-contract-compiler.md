---
title: Compile selected Cortex policy contracts and test review durability
feature: agent-workflow
issue: issues/agent-workflow/cortex-semantic-debt.md
plan: plans/agent-workflow/20260831T052249Z-cortex-contract-compiler-superseding.md
nook_pr: https://github.com/meta-secret/nook/pull/1256
status: completed
started_at: 2026-08-31T05:08:27Z
finished_at: 2026-08-31T05:34:29Z
agent: codex
---

# Compile selected Cortex policy contracts and test review durability

## Outcome

Published an open exact-head experiment in Nook PR #1256. The minimal native
TypeScript compiler makes selected policy ownership, context imports, direct
authority references, schema authority, and persisted compatibility evidence
mechanically checkable through `task loom:cortex-audit`.

The requested durability test failed usefully: exact-head Codex review found
three unresolved P1 gaps in the compiler itself. The PR remains open and the
threads remain unresolved for evaluation.

## Progress

- Added a closed typed contract model and repository registry without a new
  configuration language or dependency.
- Integrated contract findings into the existing Cortex audit.
- Added synthetic tests for the SRE/Web routing and persisted-boolean migration
  scenarios shown in the source request.
- Froze and published commit `34fc99ec769584d4e267d20e3881512dc64ba546`.
- Triggered the repository-owned exact-head Codex review on PR #1256.

## Implementation problems

- Full `task loom:verify` reached 646 passing tests and 19 failures. The failures
  originate from pre-existing baseline drift: the module-expert catalog omits
  the already-present `account-pickers.ts` and `pairing-identity.ts` WASM
  consumers, causing the module-expert audit and dependent runtime tests to
  fail before this change is exercised.
- Exact-head Codex review found that the compiler does not validate context
  owner/path agreement, parses Markdown links with a partial regex, and lets a
  persisted policy evade safeguards by declaring only general scope.

## Decisions

- Markdown remains the readable policy authority; only deliberately promoted
  relationships enter the typed registry.
- Policy document paths are the identity, avoiding a parallel symbolic naming
  system.
- Keep the compiler and tests in TypeScript/Bun to avoid a new language or
  package lifecycle.
- Do not repair or resolve review findings in this experiment; preserving the
  exact-head result is the evidence the user requested.

## Validation

- `task loom:pre-push` passed.
- `bun test tests/cortex-contracts.test.ts tests/cortex-audit-session.test.ts`
  passed: 15 tests, 0 failures.
- `task loom:cortex-audit` passed with no contract findings.
- `task loom:cortex-session-clean` passed.
- `task loom:verify` produced 646 passes and the 19 disclosed baseline failures.
- `task pr:validate PR=1256` reached settled exact-head Codex review and stopped
  with one finding batch and three unresolved threads, as intended.

## Remaining work

- Decide whether to revise the design around a single persisted discriminator,
  the existing Markdown parser, and authority-path-derived context ownership.
- Repair the unrelated module-expert catalog drift in its own bounded change.
- PR #1256 intentionally remains open and unmerged.
