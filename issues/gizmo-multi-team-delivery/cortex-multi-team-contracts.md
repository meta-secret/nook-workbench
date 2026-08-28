---
title: "Define Cortex multi-team delivery contracts"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-28T00:56:30Z
updated_at: 2026-08-28T00:56:30Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1172"]
depends_on: []
---

# Define Cortex multi-team delivery contracts

## Context

PR 1172 is the first slice of [Gizmo multi-team delivery](README.md). The
complete 4,399-line implementation is preserved at
`ce47c73562755427d6471cf1209f50db625fb023`; this issue narrows the active PR to
the 629-line Cortex semantic contract before either Loom successor starts.

AI is the functional owner. No TypeScript expertise provider writes this slice.
Security reviews the declared trust and lifecycle boundaries. Gizmo owns
full-work preservation, integration, PR 1172, exact-head verdicts, readiness,
merge, and Workbench lifecycle.

## Outcome

Root, Gizmo, and AI authorities consistently define exhaustive bounded-task
discovery, one functional team per task, explicit provider edges, immutable
generations, deterministic admission and integration prerequisites, bounded
hierarchy, resource claims, provider-local joins, and a parent-owned final join.
The documents preserve harness lifecycle authority and prohibit Gizmo from
implementing team work or overriding blocking team and Security verdicts.

## Scope

- Estimated authored changed lines: 629 (505 additions and 124 deletions).
- Included files:
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
- Included behavior: one team identity per task; exact starting frontiers;
  typed write-provider and read-only-evidence barriers; conflict precedence;
  immutable generation restart; leased claims through disposition; local
  provider integration before consumer admission; final all-task barrier;
  selective context; and Gizmo-only delivery state.
- Excluded: every `agentic-ai/loom/` runtime or test change; new schedulers,
  stores, graph languages, model runners, Hive coupling, or nested daemons; and
  any transfer of lifecycle authority from the active harness.

## Acceptance criteria

- [ ] A linked draft preserves
  `ce47c73562755427d6471cf1209f50db625fb023` before PR 1172 is reduced.
- [ ] PR 1172 contains exactly the ten listed Cortex files and measures 629
  authored changed lines against its intended base.
- [ ] Root and Gizmo contracts assign every reached bounded task to exactly one
  team and distinguish independent ready work from provider-dependent waves.
- [ ] A write provider satisfies its edge only after terminal success, owner
  acceptance, commit and scope verification, and integration into the consumer
  frontier; read-only evidence remains outside Git ancestry and lifecycle
  authority.
- [ ] Plan mutation starts a new immutable generation without migrating old
  attempts, evidence, leases, or private integration state.
- [ ] Claims remain leased through conclusive disposition, edge-local joins
  control consumers, and only finalization uses the all-task barrier.
- [ ] Cortex consistently keeps worker lifecycle in the active harness and
  integration, PR, review, readiness, merge, and Workbench state with Gizmo.
- [ ] Security confirms that Cortex does not permit evidence, workers, or Gizmo
  to forge authority or waive a required blocking verdict.
- [ ] Semantic review, `task loom:cortex-audit`, `task loom:pre-push`, hosted
  exact-head validation, required verdicts, and `task pr:ready PR=1172` pass.
- [ ] PR 1172 squash-merges before the typed successor is claimed, and its
  issue update, worklog, and statistics are published.

## Progress

- 2026-08-28: PR 1172 is in progress. The superseding plan fixes this issue as
  the first dependency and preserves the remaining runtime and test work for
  two linked successors.

## Findings and decisions

- The measured full-work baseline is
  `5cc4957201a0c4a06c871b385ec99b1d4f05c7c0`; the preserved full-work commit is
  `ce47c73562755427d6471cf1209f50db625fb023`.
- Whole-file copying is not an acceptable split because each successor must
  remain buildable against its merged predecessor interface.
- Security review is binding but does not transfer implementation ownership.
  Gizmo may block integration evidence but cannot implement or fix AI-owned
  Cortex work.

## References

- [Superseding plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/agent-orchestration/20260828T005630Z-gizmo-multi-team-dispatch-superseding.md)
- [Nook PR 1172](https://github.com/meta-secret/nook/pull/1172)
- [Preserved full-work commit](https://github.com/meta-secret/nook/commit/ce47c73562755427d6471cf1209f50db625fb023)
