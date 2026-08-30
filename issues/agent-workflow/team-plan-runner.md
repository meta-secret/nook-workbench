---
title: Add the Team Plan runner
status: ready
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: team-plan-runner
created_at: 2026-08-30T00:00:00Z
updated_at: 2026-08-30T00:00:00Z
source_issues: []
related_prs: []
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

- [ ] One immutable Team Plan starts only from a reviewed module-delivery plan
      and exact Git baseline.
- [ ] Selection returns only the deterministic, capacity-safe, conflict-free,
      evidence-complete attempts authorized by existing module-delivery policy.
- [ ] Attempt leases and results are source-bound, cardinality-safe, persisted,
      and reconstructable after process restart.
- [ ] Failed, rejected, stale, or incomplete attempts cannot advance provider
      evidence or consumer frontiers.
- [ ] Finalization fails closed until every required node has an accepted
      disposition and the integration frontier is complete.
- [ ] The active harness remains the sole owner of native subagent lifecycle.
- [ ] Focused Loom tests and repository validation pass at the published exact
      PR head.
- [ ] Canonical Cortex prose names Team Plan/Gizmo team runner and removes the
      ordinary multi-team block only to the extent proven by executable tests.

## Authorization

The user explicitly selected and requested this architectural prerequisite on
2026-08-30. Dispatch it with `major_change_authorized: true`.

## References

- `.cortex/gizmo/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`
- `agentic-ai/loom/src/module-delivery/`
- `.github/workflows/agent-implement.yml`
