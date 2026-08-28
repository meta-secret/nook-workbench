---
title: "Implement admission and evidence authority"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-28T06:14:53Z
updated_at: 2026-08-28T08:17:10Z
source_issues: []
related_prs: []
depends_on: ["issues/gizmo-multi-team-delivery/typed-plan-evidence-admission.md"]
---

# Implement admission and evidence authority

## Context

This issue consumes the merged typed plan and validation foundation. It owns
runtime generation authority, deterministic admission, immutable leases,
conclusive disposition, generation restart, and authenticated evidence without
giving plans or evidence worker-lifecycle authority.

AI owns semantics and acceptance. Web development implements the listed
TypeScript boundary. Security reviews authority, immutability, acceptance,
evidence, and stale-state rejection. Gizmo owns delivery lifecycle.

## Outcome

Gizmo can authorize exact task attempts from an accepted plan, select a stable
maximal safe ready set within concurrency and lease limits, freeze every
capability and claim, retain leases through conclusive disposition, restart a
new generation without stale state, and verify evidence against its exact
source, plan, generation, task, attempt, team, functional owner, claims,
artifact digest, terminal verdict, and frozen acceptance requirements.

## Scope

- Estimated authored changed lines: 1,900.
- Included source files:
  - `agentic-ai/loom/src/module-delivery/admission.ts`
  - `agentic-ai/loom/src/module-delivery/evidence.ts`
  - `agentic-ai/loom/src/module-delivery/index.ts`
  - `agentic-ai/loom/src/module-delivery/integration-provenance.ts`
- Included test files:
  - `agentic-ai/loom/tests/module-delivery/admission.test.ts`
  - `agentic-ai/loom/tests/module-delivery/evidence.test.ts`
- Excluded: plan codec and validation changes, provider-local Git integration,
  finalization, cleanup, Cortex edits, generic scheduling, durable storage,
  Hive coupling, and worker-lifecycle authority.

## Acceptance criteria

- [ ] Begins from the merged plan/validation foundation and changes none of its
  owned files.
- [ ] Admission selects a deterministic maximal safe ready set and blocks
  consumers until every direct provider barrier is satisfied.
- [ ] Admitted arrays, lineage, claims, owner data, and acceptance evidence are
  deep-copied and frozen against caller mutation.
- [ ] Claims remain leased through accepted, rejected, failed, and cancelled
  disposition; every disposition deterministically recomputes readiness.
- [ ] Generation restart migrates no old attempt, evidence, lease, or private
  integration state.
- [ ] Evidence rejects forged, stale, mismatched, or self-asserted task,
  attempt, team, functional owner, source, claim, artifact, verdict, and
  acceptance data.
- [ ] Current wave integration remains buildable; final task-at-a-time
  integration APIs are not exported before their owning successor.
- [ ] Focused admission, mutation, positive evidence, and adversarial evidence
  tests, complete Loom checks, TypeScript-state, source architecture, pre-push,
  exact-head hosted validation, required verdicts, and readiness pass.
- [ ] The PR squash-merges before provider integration is claimed, then its
  issue update, worklog, and statistics are published.

## Progress

- Corrected implementation exists as a local full-candidate handoff and will be
  reconstructed from the merged foundation after its PR lands.
- 2026-08-28: Foundation PR 1181 merged as
  `5e060a38516076dd0416ee12a138020cd70ea5ee`; admission/evidence is now claimed
  from that exact frontier under a focused immutable plan.

## Findings and decisions

- Evidence acceptance is bound to the declared functional owner, never merely
  the provider execution team.
- Optional evidence remains input data and cannot authorize workers, retries,
  scheduling, integration, or lifecycle operations.

## References

- [Superseding runtime split plan](../../plans/agent-orchestration/20260828T061453Z-gizmo-multi-team-runtime-resplit.md)
- [Focused admission/evidence plan](../../plans/agent-orchestration/20260828T081710Z-admission-evidence-authority.md)
- [Typed plan foundation](typed-plan-evidence-admission.md)
- [Preservation draft PR 1176](https://github.com/meta-secret/nook/pull/1176)
