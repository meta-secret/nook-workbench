---
title: "Implement typed plan and validation foundation"
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-28T00:56:30Z
updated_at: 2026-08-28T08:14:41Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1181"]
depends_on: ["issues/gizmo-multi-team-delivery/cortex-multi-team-contracts.md"]
---

# Implement typed plan and validation foundation

## Context

This is the second slice of [Gizmo multi-team delivery](README.md). Review and
compatibility repair expanded the original typed runtime candidate to 3,052
authored lines. The work is therefore split by responsibility: this issue owns
the stable plan/validation foundation, and
[admission and evidence authority](admission-evidence-authority.md) consumes it.

AI owns capability semantics and acceptance. Web development implements the
listed TypeScript boundary. Security reviews owner, lineage, evidence-input,
claim, generation, and stale-state invariants. Gizmo owns integration, PR,
readiness, merge, and Workbench state.

## Outcome

Loom decodes legacy plans without breaking current integration and validates a
version-2 plan that separately records execution team and functional acceptance
owner, freezes parent lineage, declares typed evidence inputs and expected
producer identities, contains resource claims, derives deterministic
precedence, rejects cycles, and produces a stable accepted-plan digest.

## Scope

- Estimated authored changed lines: 1,800.
- Included source files:
  - `agentic-ai/loom/src/module-delivery/codec.ts`
  - `agentic-ai/loom/src/module-delivery/domain.ts`
  - `agentic-ai/loom/src/module-delivery/resource-claim-containment.ts`
  - `agentic-ai/loom/src/module-delivery/validation.ts`
- Included test files:
  - `agentic-ai/loom/tests/module-delivery/cli.test.ts`
  - `agentic-ai/loom/tests/module-delivery/integration.test.ts` (type-only legacy compatibility annotation)
  - `agentic-ai/loom/tests/module-delivery/plan-validation.test.ts`
- Excluded: admission, evidence verification, integration provenance, barrel
  activation, provider Git integration, finalization, cleanup, Cortex edits,
  scheduling, durable storage, Hive coupling, and lifecycle authority.

## Acceptance criteria

- [x] Starts from merged PR 1172 Main frontier and consumes no unmerged API.
- [x] Legacy plans remain buildable for the current wave integration layer.
- [x] The public plan input type is version-exact; the legacy wave fixture uses
  a separately named compatibility view and cannot broaden new plan input.
- [x] Version-2 plans round-trip generation, execution team, functional owner,
  acceptance owner, frozen parent lineage, evidence-input schema, expected
  producer identities, bounded claims, and acceptance evidence.
- [x] Validation rejects missing or mismatched providers, owners, lineage,
  evidence inputs, escaped claims, hierarchy violations, conflicting
  precedence, and cycles.
- [x] Plan digests are stable and bind every security-relevant field.
- [x] Every authored source file is at or below 1,000 lines and the complete
  PR is below 3,000 authored lines without compression or test-only extraction.
- [x] Focused codec, CLI, and validation tests, legacy integration tests,
  TypeScript-state, source-architecture, Loom validation, pre-push, exact-head
  hosted validation, required verdicts, and readiness pass.
- [x] The PR squash-merges before admission/evidence work is claimed, then its
  issue update, worklog, and statistics are published.

## Progress

- 2026-08-28: Compatibility and adversarial review repaired the preserved
  implementation, but the corrected combined typed slice measured 3,052 lines.
  The stable plan/validation responsibility is now claimed as the first
  independently buildable successor.
- 2026-08-28: Exact public input typing exposed one legacy integration-test
  consumer. Its type-only annotation is now included so compatibility is
  explicit rather than weakening the public plan alias.
- 2026-08-28: PR 1181 passed exact-head AI, web-development, and Security
  review at `363b68a1cd1a2d84725ca210aff718b6f37219bf`; the focused suite reported
  45 passing and 13 deliberately gated integration tests, while the complete
  Loom suite reported 551 passing and 13 gated tests with no failures.
- 2026-08-28: PR 1181 passed hosted policy and readiness, then squash-merged as
  `5e060a38516076dd0416ee12a138020cd70ea5ee`. The configured administrator
  bypass was required because the repository requires a `github-pages`
  deployment while `agentic-ai/**` is excluded from the workflow that creates
  it; no failed check or review block was waived.

## Findings and decisions

- The preserved implementation omitted distinct functional-owner and parent-
  lineage fields, exposed final-integration APIs too early, shallow-froze
  claims, and under-tested evidence verification. None may be carried forward.
- `resource-claim-containment.ts` belongs here because validation consumes it
  directly and admission depends only on the accepted-plan interface.

## References

- [Superseding runtime split plan](../../plans/agent-orchestration/20260828T061453Z-gizmo-multi-team-runtime-resplit.md)
- [Superseding compatibility repair plan](../../plans/agent-orchestration/20260828T064307Z-typed-plan-consumer-repair.md)
- [Nook PR 1172](https://github.com/meta-secret/nook/pull/1172)
- [Nook PR 1181](https://github.com/meta-secret/nook/pull/1181)
- [Preservation draft PR 1176](https://github.com/meta-secret/nook/pull/1176)
