---
title: "Implement typed plan, evidence, and admission"
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-28T00:56:30Z
updated_at: 2026-08-28T00:56:30Z
source_issues: []
related_prs: []
depends_on: ["issues/gizmo-multi-team-delivery/cortex-multi-team-contracts.md"]
---

# Implement typed plan, evidence, and admission

## Context

This is the second slice of [Gizmo multi-team delivery](README.md). It starts
only after the PR 1172 Cortex contract merges and must preserve the predecessor
integration API while introducing the typed plan version 2, evidence,
generation, admission, lease, and disposition contracts.

AI owns the capability and acceptance. Web development is the implementation
expert for the listed TypeScript and test files, without authority to redefine
Cortex semantics or delivery state. Security reviews evidence, generation,
claims, authority, and stale-state rejection. Gizmo owns the integrated
frontier, successor PR, exact-head verdicts, readiness, merge, and Workbench
lifecycle.

## Outcome

Loom decodes and validates a deterministic plan version 2; derives precedence,
rejects cycles, and admits the maximal safe stable ready set within concurrency
and lease limits. Evidence is authenticated to its source, generation, plan,
task, attempt, team, claims, artifact, and terminal verdict. Claims remain
leased until disposition, and plan mutation restarts reached tasks without
reusing stale attempts, evidence, or private integration state. Existing
integration consumers remain buildable throughout this slice.

## Scope

- Estimated authored changed lines: 2,518 (2,454 additions and 64 deletions).
- Included source files:
  - `agentic-ai/loom/src/module-delivery/admission.ts`
  - `agentic-ai/loom/src/module-delivery/codec.ts`
  - `agentic-ai/loom/src/module-delivery/domain.ts`
  - `agentic-ai/loom/src/module-delivery/evidence.ts`
  - `agentic-ai/loom/src/module-delivery/index.ts`
  - `agentic-ai/loom/src/module-delivery/integration-provenance.ts`
  - `agentic-ai/loom/src/module-delivery/resource-claim-containment.ts`
  - `agentic-ai/loom/src/module-delivery/validation.ts`
- Included test files:
  - `agentic-ai/loom/tests/module-delivery/admission.test.ts`
  - `agentic-ai/loom/tests/module-delivery/cli.test.ts`
  - `agentic-ai/loom/tests/module-delivery/evidence.test.ts`
  - `agentic-ai/loom/tests/module-delivery/plan-validation.test.ts`
- Included behavior: plan version 2 round-trip; team and provider contracts;
  exact frontiers; evidence-surface and resource-claim containment; generation
  authority; precedence and cycle validation; deterministic bounded admission;
  leases, disposition, readiness recomputation, restart, compatibility-safe
  provenance, and barrel exports.
- Excluded: Cortex edits; provider-local Git materialization, finalization, and
  cleanup; `integration.ts`, `integration.test.ts`,
  `core-wasm-web-pilot.test.ts`, and `worktree-test-support.ts`; repository
  scheduling, durable task storage, Hive coupling, graph languages, model
  runners, or lifecycle authority for plans and evidence.

## Acceptance criteria

- [ ] The Cortex issue is done and this branch starts from its merged Main
  frontier; no unmerged API is consumed.
- [ ] Full-work commit `ce47c73562755427d6471cf1209f50db625fb023`
  remains linked and the twelve listed files preserve their assigned behavior.
- [ ] The diff is re-measured after compatibility repair, remains below 3,000
  authored lines, and receives a cohesive additional slice if it reaches that
  threshold.
- [ ] `ModuleDeliveryPlan` version 2 round-trips team, generation,
  evidence-surface, provider, claim, and execution-precedence fields.
- [ ] Validation rejects missing providers, cycles, conflicting precedence,
  hierarchy violations, escaped claims, invalid evidence surfaces, and stale or
  mismatched generations.
- [ ] Admission chooses a stable maximal safe ready set within concurrency and
  lease capacity and does not admit consumers before all direct provider
  barriers are satisfied.
- [ ] Evidence verification binds source, generation, plan, task, attempt,
  team, claims, artifact, and terminal verdict; optional evidence remains
  read-only and has no lifecycle authority.
- [ ] Claims remain leased through accepted, rejected, failed, or cancelled
  disposition, and every disposition deterministically recomputes readiness.
- [ ] Generation restart reinitializes every reached task and migrates no old
  attempt, evidence, lease, or private integration state.
- [ ] The predecessor integration layer compiles and its compatibility-focused
  tests pass against the new exports.
- [ ] Web-development review confirms strict TypeScript state, deterministic
  APIs, behavior-focused tests, and cohesive source files below 1,000 lines;
  growth does not use test-only extraction.
- [ ] Security adversarial review rejects forged authority, stale evidence,
  path escape, lifecycle takeover, and mutable-generation reuse.
- [ ] Focused codec, CLI, plan-validation, evidence, and admission tests;
  TypeScript-state and source-architecture checks; Loom validation; pre-push;
  hosted exact-head validation; required verdicts; and readiness pass.
- [ ] The successor squash-merges before the integration issue is claimed, and
  its issue update, worklog, and statistics are published.

## Progress

- No implementation started. This successor remains proposed until PR 1172 is
  merged and Gizmo records the exact starting frontier.

## Findings and decisions

- The preserved full-work baseline is
  `5cc4957201a0c4a06c871b385ec99b1d4f05c7c0`; full-work commit
  `ce47c73562755427d6471cf1209f50db625fb023` is the preservation source.
- `admission.ts` was 940 lines and `validation.ts` 997 lines in the preserved
  implementation. Any growth beyond 1,000 lines requires cohesive domain
  decomposition; moving tests alone is prohibited.
- `integration-provenance.ts` and `index.ts` belong to this slice because they
  establish compatibility-safe contracts consumed by the final integration
  slice. The final slice migrates consumers without duplicating these files.

## References

- [Superseding plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/agent-orchestration/20260828T005630Z-gizmo-multi-team-dispatch-superseding.md)
- [Nook PR 1172 predecessor](https://github.com/meta-secret/nook/pull/1172)
- [Preserved full-work commit](https://github.com/meta-secret/nook/commit/ce47c73562755427d6471cf1209f50db625fb023)
