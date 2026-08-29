---
title: Repair internal API expert consumer scope
feature: agent-workflow
issue: issues/agent-workflow/named-module-subagent-foundation.md
plan: plans/backlog/20260829T005848Z-repair-internal-api-expert-scope.md
nook_pr: https://github.com/meta-secret/nook/pull/1192
status: completed
started_at: 2026-08-29T00:58:48Z
finished_at: 2026-08-29T01:06:11Z
agent: codex
---

# Work summary

## Outcome

Merged PR #1192, restoring the exact internal API expert consumer inventory for the two production vault-login generated-binding consumers introduced by #1186.

## Progress

- Added both discovered consumer paths to the sorted canonical catalog.
- Updated the existing production Svelte consumer cardinality regression.
- Unblocked the dependent Docker trust-boundary pull request and rebased it onto the repair merge.

## Implementation problems

- Repository policy exposed a deterministic base-branch catalog mismatch as nineteen cascading module-expert failures. The direct audit reduced the root cause to two missing paths.
- The readiness wrapper classified the clean review comment as substantive because the reviewed SHA was shortened. Direct exact-head review, zero-thread, mergeability, and green policy evidence were used for the authorized merge.

## Decisions

- Kept discovery and fail-closed audit policy unchanged; the repair updates only the canonical inventory and its exact count regression.
- Delivered the base repair independently before revalidating the dependent SRE leaf.

## Validation

- Direct module-expert audit reported zero findings.
- Focused module-expert audit and consumer-scope tests passed 40 tests.
- Full Loom verification passed 574 tests.
- Module-expert validation, Cortex audit, pre-push, repository policy, and clean Codex review passed.

## Remaining work

- Complete exact-head CI and review stabilization for dependent PR #1189.
