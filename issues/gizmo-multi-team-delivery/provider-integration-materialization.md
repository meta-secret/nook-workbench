---
title: "Integrate and materialize verified providers"
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-28T00:56:30Z
updated_at: 2026-08-28T00:56:30Z
source_issues: []
related_prs: []
depends_on: ["issues/gizmo-multi-team-delivery/typed-plan-evidence-admission.md"]
---

# Integrate and materialize verified providers

## Context

This is the final slice of [Gizmo multi-team delivery](README.md). It begins only
after the typed plan, evidence, and admission issue merges. It consumes that
stable interface to integrate accepted providers locally, materialize complete
consumer frontiers, finalize only after the all-task barrier, and clean up
idempotently.

AI owns the capability and acceptance. Web development implements the listed
TypeScript integration and test files under the AI contract. Security reviews
commit authorization, source and path scope, evidence linkage, frontier
integrity, drift rejection, finalization, and cleanup boundaries. Gizmo owns
handoff integration, the exact starting frontier, successor PR, final integrated
verdict, readiness, merge, and Workbench lifecycle.

## Outcome

Every accepted write provider is commit-verified and integrated immediately
into its consumer's Git frontier; accepted read-only evidence satisfies its edge
without entering ancestry. Consumers start only from complete predecessor
closure. Finalization rejects incomplete tasks, unresolved leases, drift,
forged handoffs, and wrong repository or worktree identity, then releases
resources through repeatable cleanup.

## Scope

- Estimated authored changed lines: 1,252 (861 additions and 391 deletions).
- Included files:
  - `agentic-ai/loom/src/module-delivery/integration.ts`
  - `agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts`
  - `agentic-ai/loom/tests/module-delivery/integration.test.ts`
  - `agentic-ai/loom/tests/module-delivery/worktree-test-support.ts`
- Included behavior: prepare integration state; verify provider submissions;
  integrate write providers locally; accept read-only evidence outside Git
  ancestry; compute complete predecessor closure; advance exact frontiers;
  materialize consumer worktrees; reject forged, stale, drifted, or
  out-of-scope handoffs; enforce the final all-task barrier; preserve
  provenance; and clean up idempotently.
- Excluded: Cortex edits; changes to admission, validation, codec, evidence,
  domain, plan-version, or resource-containment semantics; generic repository
  scheduling or task storage; Hive coupling; nested daemons; and any Gizmo
  implementation of AI-owned integration code or fixes.

## Acceptance criteria

- [ ] The typed issue is done and this branch starts from its merged Main
  frontier with all required plan, evidence, admission, provenance, and export
  interfaces available.
- [ ] Full-work commit `ce47c73562755427d6471cf1209f50db625fb023`
  remains linked and the four listed files preserve all assigned integration
  behavior.
- [ ] The slice measures 1,252 authored changed lines before review repair and
  remains below 3,000 lines with every authored source file at or below 1,000.
- [ ] Accepted write providers are terminal-successful, owner-accepted,
  commit-verified against their declared frontier and scope, and integrated
  before a dependent consumer becomes ready.
- [ ] Accepted read-only evidence satisfies only its declared edge and never
  enters Git ancestry or gains scheduling, mutation, retry, or lifecycle
  authority.
- [ ] Consumer worktrees start at exact integrated frontiers containing the
  complete direct and transitive predecessor closure, without unrelated task
  output.
- [ ] Integration rejects wrong repository or worktree identity, unauthorized
  commits, path-scope escape, stale generation or attempt evidence, mutable
  submissions, forged handoffs, and post-verification drift.
- [ ] Finalization fails while any required task, lease disposition, provider
  edge, exact-head verdict, or integration state is incomplete; the all-task
  barrier is used only there.
- [ ] Cleanup is safe after success or failure, preserves required provenance,
  and is idempotent across repeated calls.
- [ ] Integration and core-WASM-web pilot tests prove immediate local
  disposition, evidence-only acceptance, predecessor closure, incomplete
  finalization rejection, immutability, forged-handoff and drift rejection,
  and idempotent cleanup.
- [ ] Web-development review confirms typed integration boundaries,
  deterministic state transitions, behavior-focused coverage, and cohesive
  files below the source ceiling; `integration.ts` is decomposed by
  responsibility if repair would push it beyond its preserved 971 lines.
- [ ] Security returns a non-blocking exact-head verdict for commit, path,
  evidence, frontier, finalization, and cleanup trust boundaries.
- [ ] Focused integration and pilot tests, complete Loom tests,
  TypeScript-state and source-architecture checks, pre-push, hosted exact-head
  validation, required verdicts, and readiness pass.
- [ ] The final successor squash-merges and all three issue updates, worklogs,
  statistics, and the feature completion state are published.

## Progress

- No implementation started. This successor remains proposed until the typed
  predecessor merges and Gizmo records the exact integrated frontier.

## Findings and decisions

- The preserved full-work baseline is
  `5cc4957201a0c4a06c871b385ec99b1d4f05c7c0`; full-work commit
  `ce47c73562755427d6471cf1209f50db625fb023` is the preservation source.
- `integration.ts` was 971 lines and `integration.test.ts` 990 lines in the
  preserved implementation. Source growth beyond 1,000 lines requires cohesive
  responsibility extraction; test-only extraction is prohibited.
- The typed predecessor owns compatibility-safe changes to
  `integration-provenance.ts` and `index.ts`. This slice migrates integration
  consumers and must not duplicate or rewrite that predecessor ownership.
- Optional evidence remains outside ancestry. Only verified write-provider
  commits advance a Git frontier.

## References

- [Superseding plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/agent-orchestration/20260828T005630Z-gizmo-multi-team-dispatch-superseding.md)
- [Nook PR 1172 root predecessor](https://github.com/meta-secret/nook/pull/1172)
- [Preserved full-work commit](https://github.com/meta-secret/nook/commit/ce47c73562755427d6471cf1209f50db625fb023)
