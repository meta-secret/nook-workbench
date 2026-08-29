---
title: "Feature: Gizmo multi-team delivery"
status: in_progress
created_at: 2026-08-28T00:56:30Z
updated_at: 2026-08-29T06:18:08Z
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

The typed plan/validation successor merged in PR 1181 as
`5e060a38516076dd0416ee12a138020cd70ea5ee`, and the single-generation
admission/evidence successor merged in PR 1182 as
`413cb40378732b1e731868e3f2f635e7b1c4f7c9`. Authenticated generation lifecycle
merged in PR 1183 as `172ddec77c0e34b477ac9c87b4a3aeeb681a08d4`.
Provider integration merged in PR 1184 as
`c4e0d8464c04ce0529950cf4a13e830be5570a5e`. A final path-union audit found
all 25 preservation paths covered by the five merged successors, so draft PR
1176 was retired without merge.

A new explicitly authorized follow-up is adding named Gizmo controllers under
Gizmo Prime. Gizmo Prime will assign one semantic PR slice to each Gizmo, accept
exact-head typed handoffs, and refine only unstarted downstream slice contracts.
This follow-up also closes the remaining ordinary-delegation admission gap that
currently prevents nested orchestration from executing safely.

## Decisions

- Cortex owns semantic policy, the active harness owns worker lifecycle, and
  Loom owns deterministic decoding, validation, admission, evidence, and Git
  integration mechanics.
- AI is the functional owner. Web development supplies TypeScript implementation
  expertise only for the two Loom slices. Security reviews generation, evidence,
  claim, Git-frontier, and lifecycle trust boundaries. Gizmo alone owns handoff
  integration, Workbench state, PR sequencing, exact-head verdicts, readiness,
  and merge lifecycle.
- Delivery order is Cortex contracts, typed plan/validation,
  admission/evidence authority, then provider integration/materialization. A
  successor starts from the merged predecessor frontier and consumes only
  buildable interfaces present there.
- The full-work commit must remain reachable from a linked draft before PR 1172
  is reduced. No full-work behavior may be dropped during reconstruction.
- The corrected typed slice measured 3,052 authored lines and is split between
  stable plan validation and runtime admission/evidence authority. Required
  behavior and adversarial evidence are retained instead of compressed.
- Authenticated optional evidence is read-only and has no scheduling or lifecycle
  authority. Plan mutation creates a new immutable generation; old attempts,
  evidence, and private integration state do not migrate.
- Gizmo Prime is the one mission owner and native-stack integrator.
- A named Gizmo is a one-PR orchestration controller, not an implementation
  worker or a new engineering team identity.
- Gizmo names are stable and unique within one mission. Controllers may
  request harness-managed team-worker attempts for their own slice, but may not
  create another Gizmo.
- Gizmo Prime alone owns the complete feature DAG, GitHub stack, cross-slice
  contract correction, integration order, final readiness, and completion.

## Issues

- [x] [Cortex multi-team delivery contracts](cortex-multi-team-contracts.md) —
  2,760 authored lines; merged in PR 1172.
- [x] [Typed plan and validation foundation](typed-plan-evidence-admission.md) —
  2,698 authored lines; merged in PR 1181.
- [x] [Admission and evidence authority](admission-evidence-authority.md) —
  2,996 authored additions; merged in PR 1182.
- [x] [Authenticated generation lifecycle](generation-lifecycle-authority.md) —
  merged in PR 1183.
- [x] [Provider integration and materialization](provider-integration-materialization.md)
  — 2,635 authored additions; merged in PR 1184.
- [ ] [Gizmo Prime and named PR-slice Gizmos](gizmo-prime-pr-slice-controllers.md) —
  executable ordinary delegation plus one-controller-per-PR orchestration.

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

### Slice 2: Typed plan and validation foundation — approximately 1,800 lines

- `agentic-ai/loom/src/module-delivery/codec.ts`
- `agentic-ai/loom/src/module-delivery/domain.ts`
- `agentic-ai/loom/src/module-delivery/resource-claim-containment.ts`
- `agentic-ai/loom/src/module-delivery/validation.ts`
- `agentic-ai/loom/tests/module-delivery/cli.test.ts`
- `agentic-ai/loom/tests/module-delivery/plan-validation.test.ts`

### Slice 3: Admission and evidence authority — approximately 1,900 lines

- `agentic-ai/loom/src/module-delivery/admission.ts`
- `agentic-ai/loom/src/module-delivery/evidence.ts`
- `agentic-ai/loom/src/module-delivery/index.ts`
- `agentic-ai/loom/src/module-delivery/integration-provenance.ts`
- `agentic-ai/loom/tests/module-delivery/admission.test.ts`
- `agentic-ai/loom/tests/module-delivery/evidence.test.ts`

### Slice 4: Provider integration and materialization — 1,252 preserved lines

- `agentic-ai/loom/src/module-delivery/integration.ts`
- `agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts`
- `agentic-ai/loom/tests/module-delivery/integration.test.ts`
- `agentic-ai/loom/tests/module-delivery/worktree-test-support.ts`

## Feature acceptance criteria

- [x] The linked draft preserves full-work commit
  `ce47c73562755427d6471cf1209f50db625fb023` before PR 1172 scope reduction.
- [x] The five issue inventories account for all 25 preservation paths and every
  compatibility/security repair without overlap or omission.
- [x] Every slice is independently buildable, below 3,000 authored additions, and
  merged in dependency order from current Main.
- [x] Tests prove plan version 2, authenticated evidence, generation authority,
  cycle and precedence handling, conflict-safe capacity admission, lease
  retention, disposition, provider-local integration, predecessor closure,
  exact frontiers, finalization, drift rejection, and idempotent cleanup.
- [x] Security returns a non-blocking exact-head verdict for every slice that
  reaches a trust boundary; Gizmo does not waive a team or Security block.
- [x] Each PR passes its focused tests, repository policy, pre-push hygiene,
  hosted exact-head validation, required reviews, readiness, and squash merge.
- [x] Workbench issue updates, worklogs, and delivery statistics are published
  after every merge; the feature remains incomplete until all five issues are
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
- [Superseding runtime split plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/agent-orchestration/20260828T061453Z-gizmo-multi-team-runtime-resplit.md)
- [Nook PR 1172](https://github.com/meta-secret/nook/pull/1172)
- [Nook PR 1184](https://github.com/meta-secret/nook/pull/1184)
- [Provider finalization superseding plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/agent-orchestration/20260828T140217Z-provider-integration-finalization-superseding.md)
- [Preservation draft PR 1176](https://github.com/meta-secret/nook/pull/1176)
- [Preserved full-work commit](https://github.com/meta-secret/nook/commit/ce47c73562755427d6471cf1209f50db625fb023)
