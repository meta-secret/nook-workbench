---
title: Reconcile Cortex semantic debt found by the first static workflow
status: in_progress
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-08-14T07:26:00Z
updated_at: 2026-08-31T05:34:29Z
source_issues: []
related_prs: [https://github.com/meta-secret/nook/pull/1000, https://github.com/meta-secret/nook/pull/1256]
depends_on: []
---

# Reconcile Cortex semantic debt found by the first static workflow

## Context

The first full static Cortex workflow completed against the reviewed PR #1000 topology. Its mechanical lane passed, while independent semantic lanes identified older guidance that does not consistently match current Task, CI, package, and runtime behavior. See the [deterministic agent workflow feature](README.md).

## Outcome

Reconcile verified Cortex inconsistencies in focused, size-bounded documentation and Task changes without weakening current validation, security, or ownership boundaries.

## Scope

- Verify and correct stale pre-push and direct-format instructions.
- Reconcile public Playwright worker-count descriptions with executed scripts.
- Clarify retry ownership: the first workflow has one explicit attempt and no hidden retry.
- Clarify resource claims as scheduler conflict metadata rather than filesystem enforcement.
- Reconcile static-workflow documentation with the implemented event, skipped-task, timeout, and host-tooling boundaries.
- Correct stale package maps, paths, CI maps, and secret-store lifecycle statements only after code verification.
- Explicitly exclude Hive materialization, write-capable workers, Lace replacement, and new workflow families.

## Acceptance criteria

- [ ] Every retained finding is verified against current code or executable Task and CI entrypoints.
- [ ] Cortex documents agree with one another and with implementation behavior.
- [ ] `task loom:cortex-audit` passes.
- [ ] The static Cortex semantic workflow is run once against the final exact head and produces no P1 inconsistency in the changed scope.
- [ ] Changes remain within one focused PR or are split before implementation begins.

## Progress

- PR #1000 produced typed, source-attributed findings from separate document and runtime lanes.
- No implementation has started for the broader semantic-debt follow-up.
- 2026-08-31: Published the bounded TypeScript-native contract compiler experiment
  as Nook PR #1256 at exact head `34fc99ec769584d4e267d20e3881512dc64ba546`.
- 2026-08-31: Exact-head Codex review found three unresolved P1 compiler gaps:
  context owner/path validation, complete Markdown link parsing, and persisted
  safeguards that cannot be bypassed by a general-only scope.

## Findings and decisions

- Mechanical Cortex checks do not prove semantic agreement; both evidence classes are required.
- Agent-authored findings are proposals until a delivery owner verifies them against source.
- The follow-up must not blindly apply every model recommendation. In particular, cancellation must continue to fail closed for read-only workers and must not create terminal state while an adapter can still operate.
- Markdown remains the readable authority; only selected policy relationships
  should be promoted into typed compile-time contracts.

## References

- [Nook PR #1000](https://github.com/meta-secret/nook/pull/1000)
- [Nook PR #1256](https://github.com/meta-secret/nook/pull/1256)
- [Implementation plan](../../plans/agent-workflow/20260814T052642Z-static-agent-workflows.md)
- [Contract compiler plan](../../plans/agent-workflow/20260831T052249Z-cortex-contract-compiler-superseding.md)
- [Contract compiler worklog](../../worklogs/agent-workflow/20260831T053429Z-cortex-contract-compiler.md)
