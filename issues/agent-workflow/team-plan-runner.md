---
title: Add the Team Plan runner
status: in_review
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-runner
created_at: 2026-08-30T00:00:00Z
updated_at: 2026-08-30T22:37:38Z
source_issues: []
related_prs: [1239]
depends_on: []
---

# Add the Team Plan runner

## Context

Nook already has the complete typed module-delivery admission domain and a
separate durable generic delegation journal. Ordinary multi-team work remains
fail-closed because no executable adapter combines those two authorities. The
generic journal cannot prove the canonical admission contract, while the
module-delivery validator only validates a bounded plan and does not persist a
live run.

The product vault-conflict redesign is waiting on this capability so its Rust,
WASM, web, and security ownership can execute through the repository's trusted
multi-team path.

## Outcome

Provide one small Loom capability called **Team Plan** (described to humans as
the **Gizmo team runner**) that durably executes the existing module-delivery
admission contract. It validates an immutable team plan, exposes only
authorized attempts to the active harness, records attempt dispositions and
leases, reconstructs exact state, and joins only a completed run.

## Scope

- Reuse the existing `module-delivery` authority, admission, resource-claim,
  evidence, integration, and frontier types; do not duplicate their decisions.
- Add a persisted Team Plan run adapter and focused CLI/Task entry points for
  starting a run, selecting the next authorized attempts, recording results,
  and finalizing the run.
- Bind every run to the exact source commit and immutable plan digest.
- Persist enough reviewed events to reconstruct admissions, attempt leases,
  dispositions, accepted provider evidence, and exact frontiers without
  trusting Markdown summaries or worker output.
- Keep native subagent lifecycle, communication, cancellation, and model
  execution in the active harness.
- Add adversarial behavior tests for ineligible work, conflicting or
  over-capacity claims, stale attempts, missing provider evidence, plan/source
  drift, and premature finalization.
- Update the canonical Cortex delegation gate only after the executable runner
  and tests prove the complete contract.
- Keep all authored files below 1,000 lines and total authored additions plus
  deletions below 2,000 lines.

## Non-goals

- No new model runner, scheduler, transcript protocol, hosted service, or Hive
  integration.
- No product vault UI or cryptographic-domain changes in this slice.
- No second admission model and no web/TypeScript reimplementation of domain
  eligibility.

## Acceptance criteria

- [x] One immutable Team Plan starts only from a reviewed module-delivery plan
      and exact Git baseline.
- [x] Selection returns only the deterministic, capacity-safe, conflict-free,
      evidence-complete attempts authorized by existing module-delivery policy.
- [x] Attempt leases and results are source-bound, cardinality-safe, persisted,
      and reconstructable after process restart.
- [x] Failed, rejected, stale, or incomplete attempts cannot advance provider
      evidence or consumer frontiers.
- [x] Finalization fails closed until every required node has an accepted
      disposition and the integration frontier is complete.
- [x] The active harness remains the sole owner of native subagent lifecycle.
- [ ] Focused Loom tests and repository validation pass at the published exact
      PR head.
- [x] Canonical Cortex prose names Team Plan/Gizmo team runner and removes the
      ordinary multi-team block only to the extent proven by executable tests.

## Progress

- Trusted implementation run 33337223701 claimed the issue and stopped before
  planning or code changes because its external planning credential was
  rejected.
- The active harness bootstrapped the AI-owned runtime without a Cortex grant,
  then corrected the typed owner boundary so Gizmo Prime remains a functional
  and acceptance owner rather than becoming a worker team.
- Team Plan generation 2 admitted exactly one AI Cortex writer at source
  `3e91e80a10a207a7cc10f9d421f6213633e1fc58`, recorded its verified handoff,
  reconstructed the released lease and integrated frontier, and finalized at
  `55b613a24bc24e6eec34ba7c0d28ddb192270cc5`.
- Nook PR #1239 is open at exact head
  `17b1bf6a1646bdb74fab345495f88bfa154612dc`; focused tests and Cortex audit
  pass locally, and hosted exact-head review and validation are pending.

## Authorization

The user explicitly selected and requested this architectural prerequisite on
2026-08-30.

## References

- `.cortex/gizmo/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`
- `agentic-ai/loom/src/module-delivery/`
- `.github/workflows/agent-implement.yml`
