---
title: Add structural refactoring experts
feature: agent-workflow
issue: issues/agent-workflow/refactoring-experts.md
plan: plans/agent-workflow/20260823T041241Z-refactoring-experts.md
nook_pr: https://github.com/meta-secret/nook/pull/1084
status: completed
started_at: 2026-08-23T04:12:41Z
finished_at: 2026-08-23T06:16:23Z
agent: codex
---

# Add structural refactoring experts

## Outcome

PR 1084 added a separate structural-expert layer beside module experts.
`code_refactoring_expert` and `cortex_refactoring_expert` inspect bounded,
exact-commit repository evidence. `system_coherence_synthesizer` reads only
replay-verified child projections. Every role is read-only, nondelegating, and
returns evidence to the delivery owner rather than write authority.

## Progress

- Added exact role definitions, canonical skill cards, executable skill
  mirrors, Cortex architecture, workflow guidance, and public Loom commands.
- Added a deterministic three-profile structural catalog and audit.
- Added typed code, Cortex, plan, and synthesis result contracts.
- Added one-shot isolation receipts plus journal and completion authorities.
- Reused the credential-isolated, exact-commit, bounded read-only runtime.
- Added strict exact-file or descendant scopes and commit-bound evidence
  validation.
- Added an exact ordered all-terminal synthesis barrier that preserves completed
  and failed child evidence.
- Kept system coherence synthesis repository-blind and parent-owned.

## Implementation problems

- Independent review found that the initial synthesis plan tried to freeze
  future child projection hashes before those children could run. The final
  plan preauthorizes ordered child identities only; the post-barrier request
  carries paths and hashes that Loom replay-verifies.
- Independent review found that the SDK runtime did not automatically consume
  the checked-in synthesizer TOML. The final catalog owns the exact behavior
  contract, audits it against TOML, and includes it in the actual runtime
  prompt.
- The pre-push wrapper twice reached an unrelated Hive formatter path that
  could not resolve Docker Hub through Docker Desktop DNS. The changed Loom
  formatter reported every file unchanged, all source gates passed, and hosted
  validation completed successfully on the unchanged head.

## Decisions

- Keep structural roles separate from the production-module catalog because
  refactoring scopes intentionally overlap module ownership.
- Keep exactly two repository-reading reusable roles. Treat system coherence as
  a synthesis-only join, not a repository-wide god agent.
- Freeze child lane identities before execution and bind actual projection
  hashes only after the all-terminal barrier.
- Require explicit typed `findings` or `none` assessments for every category.
- Leave `affectedPaths` proposal-capable while requiring cited evidence to be a
  tracked regular blob in the exact materialized snapshot.
- Keep all writes, joins, scheduling, and final judgment with the delivery
  owner.

## Validation

- `task loom:verify` passed with 299 tests and 1,534 assertions.
- Module expert audit passed with 9 profiles, 14 modules, and zero findings.
- Structural expert audit passed with 3 profiles and zero findings.
- Cortex audit, Loom contracts, TypeScript state, source architecture, and
  repository-language gates passed.
- Advisory and independent coherence reviews finished with no remaining P1 or
  P2 findings.
- Exact-head hosted validation passed all 16 applicable checks.
- `task pr:ready PR=1084` reported current base, successful preview deployment,
  mergeable state, and zero unresolved conversations.
- PR 1084 squash-merged as `82958645993acf5b295ce863831b0b050dd95b5a`.

## Remaining work

None. Additional refactoring categories should be added only after repeated
evidence shows that neither existing reader owns the concern.
