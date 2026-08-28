---
title: "Implement authenticated generation lifecycle"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/generation-lifecycle-authority.md
started_at: 2026-08-28T12:00:29Z
agent: codex
---

# Task plan

## Interpreted request

Complete the preservation-only runtime mission by restoring authenticated,
transactional generation restart as a narrow successor before provider
integration, then retire draft PR 1176 only after every useful behavior has a
merged owner.

## Requirements

- Begin at merged PR 1182 commit
  `413cb40378732b1e731868e3f2f635e7b1c4f7c9`.
- Retain the canonical repository root only inside authority state and
  authenticate replacement source commits with scrubbed Git `^{commit}` checks.
- Validate replacement plan, increasing generation, expected lineage, and
  terminal old state before mutation.
- Make restart transactional: every failure leaves the old generation usable;
  success invalidates old states and clears generation-local authority.
- Preserve globally monotonic attempts for surviving task IDs and enforce the
  plan attempt budget across generations, including explicit blocked closure.
- Prove invalid commit, blob, root, lineage, stale state, success, attempt
  monotonicity, budget exhaustion, and blocked propagation with real fixtures.

## Constraints and exclusions

- Allowed source: `authority.ts`, `admission.ts`, `index.ts`.
- Allowed test: `admission.test.ts`.
- Provider Git integration and its runtime gate are reserved for the next PR.
- No Cortex, Hive, storage, infrastructure, worker lifecycle, minification, or
  broad public export changes.
- Below 3,000 authored changed lines; every source file at or below 1,000 lines.

## Change budget and PR sequence

- Estimated authored changed lines: 1,200
- Owning modules, packages, or layers: Loom module-delivery generation authority
- Ownership units:
1. Capability: Authenticated generation lifecycle; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/authority.ts,agentic-ai/loom/src/module-delivery/admission.ts,agentic-ai/loom/src/module-delivery/index.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/integration.ts,.cortex; Expertise consumer interfaces: Transactional generation restart, authenticated replacement source, monotonic attempt history, and blocked closure; Expertise acceptance evidence: Real Git fixture lifecycle and adversarial tests pass; Capability acceptance evidence: Exact-head AI, Web, Security, local, hosted, readiness, and merge gates pass
2. Capability: Provider integration successor; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Starts only from the merged generation-lifecycle frontier
- Public or cross-module interfaces: Curated transactional generation restart
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,200
- Current PR slice and acceptance evidence: Authenticated generation lifecycle; Acceptance evidence: Transactionality, commit authentication, monotonic attempts, attempt-budget blocking, exact-head reviews, hosted validation, readiness, and squash merge pass
- PR slices and acceptance evidence: Authenticated generation lifecycle; Acceptance evidence: Transactionality, commit authentication, monotonic attempts, attempt-budget blocking, exact-head reviews, hosted validation, readiness, and squash merge pass

## Initial plan

1. Reconcile preserved restart behavior with the merged private authority API.
2. Implement repository-authenticated transactional supersession.
3. Preserve cross-generation attempt history while clearing generation-local
   leases, dispositions, evidence, and states.
4. Add real-repository adversarial and lifecycle tests.
5. Run focused and full checks, exact-head team review, hosted validation,
   readiness, squash merge, and Workbench closure.

## Completion evidence

- Failed restart cannot mutate or stale the prior generation.
- Successful restart cannot inherit old readiness proof or attempt identity.
- Exhausted surviving tasks are blocked deterministically and propagate to
  dependents while independent work remains selectable.
- Provider integration can start only from the merged generation successor.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
