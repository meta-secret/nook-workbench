---
title: "Feature: Gizmo multi-team delivery"
status: in_progress
created_at: 2026-08-28T00:56:30Z
updated_at: 2026-08-28T05:14:40Z
---

# Feature: Gizmo multi-team delivery

## Goal

Deliver deterministic multi-team module orchestration across Cortex policy and
Loom enforcement while preserving the active harness as lifecycle authority.
Each task has one functional team, explicit provider dependencies, authenticated
evidence, exact Git frontiers, bounded resource claims, and a parent-owned final
join.

## Current state

The Cortex contract and executable structural-audit slice merged in PR 1172 as
`31868536a39a7f3d7b2aae8a06a7dfcd6f0f9528`. Review expanded the slice to 28
files and 2,760 authored changed lines so all governing authorities, generated
router behavior, and drift tests agree.

The runtime-oriented implementation remains preserved at Nook commit
`ce47c73562755427d6471cf1209f50db625fb023` and draft PR 1176. The typed runtime
and provider-integration issues remain open and must be reconstructed from the
merged contract frontier in dependency order.

## Decisions

- Cortex owns semantic policy, the active harness owns worker lifecycle, and
  Loom owns deterministic decoding, validation, admission, evidence, and Git
  integration mechanics.
- AI is the functional owner. Web development supplies TypeScript implementation
  expertise only for the two Loom slices. Security reviews generation, evidence,
  claim, Git-frontier, and lifecycle trust boundaries. Gizmo alone owns handoff
  integration, Workbench state, PR sequencing, exact-head verdicts, readiness,
  and merge lifecycle.
- Delivery order is Cortex contracts, typed plan/evidence/admission, then
  provider integration/materialization. A successor starts from the merged
  predecessor frontier and consumes only buildable interfaces present there.
- The full-work commit must remain reachable from a linked draft before PR 1172
  is reduced. No full-work behavior may be dropped during reconstruction.
- The 2,518-line typed slice must be re-measured after compatibility repair. If
  it reaches 3,000 authored lines, it receives another cohesive responsibility
  split rather than compressed code or reduced evidence.
- Authenticated optional evidence is read-only and has no scheduling or lifecycle
  authority. Plan mutation creates a new immutable generation; old attempts,
  evidence, and private integration state do not migrate.

## Issues

- [x] [Cortex multi-team delivery contracts](cortex-multi-team-contracts.md) —
  2,760 authored lines; merged in PR 1172.
- [ ] [Typed plan, evidence, and admission](typed-plan-evidence-admission.md) —
  2,518 authored lines; proposed after the Cortex slice.
- [ ] [Provider integration and materialization](provider-integration-materialization.md)
  — 1,252 authored lines; proposed after the typed slice.

## Preservation inventory

### Slice 1: Cortex contracts and structural enforcement — 2,760 lines

- `.cortex/AGENTS.md`
- `.cortex/gizmo/AGENTS.md`
- `.cortex/gizmo/architecture/team-ownership.md`
- `.cortex/gizmo/dynamic-skills/team-oriented-development.md`
- `.cortex/gizmo/workflows/module-oriented-development.md`
- `.cortex/gizmo/workflows/subagent-delegation.md`
- `.cortex/gizmo/workflows/team-oriented-development.md`
- `.cortex/knowledge-graph.md`
- `.cortex/teams/ai/architecture/module-experts.md`
- `.cortex/teams/ai/design-docs/agent-workflow-orchestration.md`
- Related Cortex authority and navigation documents required for semantic
  consistency.
- `agentic-ai/loom/src/lib/cortex-index.ts`
- `agentic-ai/loom/src/structural-experts/audit.ts`
- `agentic-ai/loom/src/structural-experts/catalog.ts`
- `agentic-ai/loom/tests/cortex-index.test.ts`
- `agentic-ai/loom/tests/structural-experts/catalog.test.ts`

### Slice 2: Typed plan, evidence, and admission — 2,518 lines

- `agentic-ai/loom/src/module-delivery/admission.ts`
- `agentic-ai/loom/src/module-delivery/codec.ts`
- `agentic-ai/loom/src/module-delivery/domain.ts`
- `agentic-ai/loom/src/module-delivery/evidence.ts`
- `agentic-ai/loom/src/module-delivery/index.ts`
- `agentic-ai/loom/src/module-delivery/integration-provenance.ts`
- `agentic-ai/loom/src/module-delivery/resource-claim-containment.ts`
- `agentic-ai/loom/src/module-delivery/validation.ts`
- `agentic-ai/loom/tests/module-delivery/admission.test.ts`
- `agentic-ai/loom/tests/module-delivery/cli.test.ts`
- `agentic-ai/loom/tests/module-delivery/evidence.test.ts`
- `agentic-ai/loom/tests/module-delivery/plan-validation.test.ts`

### Slice 3: Provider integration and materialization — 1,252 lines

- `agentic-ai/loom/src/module-delivery/integration.ts`
- `agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts`
- `agentic-ai/loom/tests/module-delivery/integration.test.ts`
- `agentic-ai/loom/tests/module-delivery/worktree-test-support.ts`

## Feature acceptance criteria

- [x] The linked draft preserves full-work commit
  `ce47c73562755427d6471cf1209f50db625fb023` before PR 1172 scope reduction.
- [ ] The three issue inventories account for all 26 changed files and all
  4,399 authored changed lines without overlap or omission.
- [ ] Every slice is independently buildable, below 3,000 authored lines, and
  merged in dependency order from current Main.
- [ ] Tests prove plan version 2, authenticated evidence, generation authority,
  cycle and precedence handling, conflict-safe capacity admission, lease
  retention, disposition, provider-local integration, predecessor closure,
  exact frontiers, finalization, drift rejection, and idempotent cleanup.
- [ ] Security returns a non-blocking exact-head verdict for every slice that
  reaches a trust boundary; Gizmo does not waive a team or Security block.
- [ ] Each PR passes its focused tests, repository policy, pre-push hygiene,
  hosted exact-head validation, required reviews, readiness, and squash merge.
- [ ] Workbench issue updates, worklogs, and delivery statistics are published
  after every merge; the feature remains incomplete until all three issues are
  done.

## Exclusions

- Generated topology, a generic graph language, model runners, repository
  schedulers, durable task stores, Hive coupling, nested daemons, and lifecycle
  authority for Cortex, Loom plans, or evidence.
- Whole-file copying that consumes an unmerged predecessor API, line-count-only
  splitting, test-only extraction, compressed source, or removal of acceptance
  evidence to meet a size threshold.
- Gizmo implementation of team-owned code or fixes, worker mutation of shared
  delivery state, and migration of stale-generation attempts or private state.

## References

- [Superseding delivery plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/agent-orchestration/20260828T005630Z-gizmo-multi-team-dispatch-superseding.md)
- [Nook PR 1172](https://github.com/meta-secret/nook/pull/1172)
- [Preservation draft PR 1176](https://github.com/meta-secret/nook/pull/1176)
- [Preserved full-work commit](https://github.com/meta-secret/nook/commit/ce47c73562755427d6471cf1209f50db625fb023)
