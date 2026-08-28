---
title: "Integrate and materialize verified providers"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/provider-integration-materialization.md
started_at: 2026-08-28T12:33:04Z
agent: codex
---

# Task plan

## Interpreted request

Complete the last useful runtime behavior preserved in draft PR 1176 by
activating provider integration on the merged admission/evidence and generation
authorities, then prove the preservation draft has nothing unique left and
close it without merging.

## Requirements

- Begin at merged PR 1183 commit
  `172ddec77c0e34b477ac9c87b4a3aeeb681a08d4`.
- Verify every exact-attempt write handoff against repository identity,
  starting frontier, declared path scope, source snapshot, terminal outcome,
  and current generation before integrating it locally.
- Mint integrated-writer-frontier capability only inside verified integration;
  the capability binds exact task, attempt, generation, plan, integrated head,
  and complete predecessor closure.
- Keep accepted read-only evidence outside Git ancestry while allowing it to
  satisfy only its declared provider edge.
- Materialize consumers only from the complete direct and transitive provider
  frontier; reject omission, overlap, forged/stale handoffs, drift, wrong
  repository/worktree identity, and unauthorized commits.
- Finalize only after the all-task barrier and clean up idempotently while
  retaining required provenance.
- Remove the temporary integration gate atomically and restore every intentional
  provider-integration test.

## Constraints and exclusions

- Source scope: `integration.ts`, `integration-provenance.ts`, and only the
  narrow admission/index seam needed to consume private exact-attempt frontier
  capabilities.
- Test scope: `integration.test.ts`, `core-wasm-web-pilot.test.ts`,
  `worktree-test-support.ts`, and narrowly necessary admission lifecycle proof.
- Reconstruct from preservation commit
  `ce47c73562755427d6471cf1209f50db625fb023`; adapt to merged APIs instead of
  copying whole files.
- No Cortex, Hive, durable storage, generic scheduler, nested runtime, worker
  lifecycle, or plan/codec/validation semantic changes.
- Below 3,000 authored changed lines; every authored source and test file at or
  below 1,000 lines.

## Change budget and PR sequence

- Estimated authored changed lines: 2,400
- Owning modules, packages, or layers: Loom provider integration and materialization
- Ownership units:
1. Capability: Verified provider integration; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/integration.ts,agentic-ai/loom/src/module-delivery/integration-provenance.ts,agentic-ai/loom/src/module-delivery/admission.ts,agentic-ai/loom/src/module-delivery/index.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/integration.test.ts,agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts,agentic-ai/loom/tests/module-delivery/worktree-test-support.ts,agentic-ai/loom/tests/module-delivery/admission.test.ts; Expertise forbidden paths: .cortex,agentic-ai/loom/src/module-delivery/codec.ts,agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: Verified submissions, exact-attempt integrated frontiers, public admission-state advancement, finalization, and cleanup; Expertise acceptance evidence: All provider integration gates removed and end-to-end adversarial flows pass; Capability acceptance evidence: Exact-head AI, Web, Security, local, hosted, readiness, and merge gates pass
2. Capability: Preservation retirement; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Final inventory proves no useful code remains unique before PR 1176 closes
- Public or cross-module interfaces: Verified provider submissions and exact integrated frontier materialization
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,400
- Current PR slice and acceptance evidence: Provider integration materialization; Acceptance evidence: Active end-to-end write, evidence, synthesis, consumer, finalization, drift rejection, cleanup, exact-head reviews, hosted validation, readiness, and squash merge pass
- PR slices and acceptance evidence: Provider integration materialization; Acceptance evidence: Active end-to-end write, evidence, synthesis, consumer, finalization, drift rejection, cleanup, exact-head reviews, hosted validation, readiness, and squash merge pass

## Initial plan

1. Reconcile the preservation integration implementation with the merged
   generation and evidence APIs.
2. Implement private capability minting and task-at-a-time provider
   integration without weakening repository verification.
3. Activate public admission-state advancement and restore gated integration
   and core-WASM-web pilot coverage.
4. Prove exact frontier closure, evidence-only edges, finalization barriers,
   drift rejection, and idempotent cleanup.
5. Pass exact-head team and repository gates, squash merge, compare the
   preservation inventory against Main, close PR 1176, and publish closure.

## Completion evidence

- No task becomes ready without an exact verified provider handoff or accepted
  evidence capability from its current generation and attempt.
- Historical overlapping writers are allowed only when later frontiers carry
  the earlier writer; later overlapping writes without closure reject.
- Full Loom has zero provider-integration skips and public end-to-end flow
  covers write, evidence, synthesis, consumer, finalization, and cleanup.
- Final comparison accounts for every preservation file and behavioral repair.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
