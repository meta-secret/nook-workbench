---
title: "Bind admission and evidence to trusted runtime authority"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/admission-evidence-authority.md
started_at: 2026-08-28T08:17:10Z
agent: codex
---

# Task plan

## Interpreted request

Reconstruct the useful admission and evidence behavior preserved in draft PR
1176 on top of the merged validation foundation, without activating provider
Git integration or granting plans and evidence worker-lifecycle authority.

## Requirements

- Only a canonical `ValidatedModuleDeliveryPlan` plus trusted generation and
  expected-lineage context can authorize an exact task attempt.
- Admission deterministically selects the maximal safe ready set, honors
  concurrency, immutable claims and leases, exact integrated-writer frontiers,
  dispositions, and generation restart.
- Evidence is read-only input and is accepted only when its exact source,
  generation, task, attempt, team, functional owner, artifact digest,
  provenance, terminal verdict, claims, and frozen acceptance requirements
  match trusted expectations.
- Synthesis cannot become ready until every declared, nonempty accepted
  evidence identity is present and exact.
- The temporary provider-integration gate remains active in this slice.

## Constraints and exclusions

- Source scope is limited to `admission.ts`, `evidence.ts`, `index.ts`, and
  `integration-provenance.ts`; tests are limited to `admission.test.ts` and
  `evidence.test.ts`.
- Do not change validation-foundation-owned files, provider Git integration,
  finalization, cleanup, Cortex, scheduling, durable storage, Hive, or worker
  lifecycle.
- Every source and test file remains at or below 1,000 lines and the PR stays
  below 3,000 authored lines.

## Change budget and PR sequence

- Estimated authored changed lines: 1,900
- Owning modules, packages, or layers: Loom admission and evidence authority
- Ownership units:
1. Capability: Admission and authenticated evidence authority; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/admission.ts,agentic-ai/loom/src/module-delivery/evidence.ts,agentic-ai/loom/src/module-delivery/index.ts,agentic-ai/loom/src/module-delivery/integration-provenance.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts,agentic-ai/loom/tests/module-delivery/evidence.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/integration.ts,agentic-ai/loom/src/module-delivery/codec.ts,agentic-ai/loom/src/module-delivery/domain.ts,agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: Validated plan, trusted generation and lineage context, admissions, leases, dispositions, accepted evidence identities, and exact frontier readiness; Expertise acceptance evidence: Focused mutation and adversarial tests pass; Capability acceptance evidence: Only trusted context authorizes exact attempts and synthesis requires exact accepted evidence
2. Capability: Security acceptance; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review rejects forged authority, lineage, frontiers, claims, leases, and evidence
3. Capability: Successor integration; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Local and hosted gates pass before squash merge
- Public or cross-module interfaces: Trusted admission context, authorized task attempts, accepted evidence identities, deterministic readiness
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,900
- Current PR slice and acceptance evidence: Admission and authenticated evidence authority; Acceptance evidence: Adversarial authority tests, exact-head reviews, hosted validation, readiness, and squash merge pass
- PR slices and acceptance evidence: Admission and authenticated evidence authority; Acceptance evidence: Adversarial authority tests, exact-head reviews, hosted validation, readiness, and squash merge pass

## Initial plan

1. Start from merge `5e060a38516076dd0416ee12a138020cd70ea5ee`.
2. Reconstruct preserved behavior through the merged validation interfaces.
3. Prove mutation resistance and adversarial authority rejection with focused
   tests while retaining the fail-closed integration gate.
4. Join exact-head AI, web-development, and Security reviews, then pass local,
   hosted, readiness, and squash-merge gates.
5. Publish lifecycle evidence and begin provider integration only from the
   merged admission/evidence frontier.

## Completion evidence

- Forged lineage, authority, task, attempt, generation, owner, frontier,
  claims, acceptance, and evidence identities fail closed.
- Deterministic readiness, capacity, lease retention, disposition, and clean
  generation restart pass focused tests.
- Full Loom verification and all exact-head delivery gates pass.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
