---
title: "Keep typed validation separate from runtime authority"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/typed-plan-evidence-admission.md
started_at: 2026-08-28T07:25:15Z
agent: codex
---

# Task plan

## Interpreted request

Complete the typed plan foundation without exposing validation output as
admission, lineage, evidence, or Git-frontier authority before the dependent
runtime successors exist.

## Requirements

- Canonical validation accepts only authored version-2 plans; legacy decode is
  an explicitly named, non-authoritative compatibility result.
- Derived evidence hazards and ordinary resource conflicts remain deterministic
  execution constraints, separate from semantic provider dependencies.
- Every derived writer predecessor records that its successor needs an
  integrated writer frontier; the foundation computes no commit SHA.
- Nested lineage remains transport data until trusted admission context binds
  it; it cannot activate runtime behavior.
- Existing mutating module-delivery integration fails closed before snapshots,
  worktrees, refs, or state changes until admission/evidence and provider-local
  integration successors atomically remove the gate.

## Constraints and exclusions

- Production scope is limited to module-delivery CLI, codec, domain, index,
  resource containment, validation, and a small fail-closed guard in the
  existing integration entry points.
- Tests are limited to focused CLI, validation, integration-guard, and pilot
  behavior. Do not implement admission, evidence verification, provenance,
  Git materialization, cleanup, scheduling, storage, Hive, or harness lifecycle
  in this slice.
- Every authored source/test file remains at or below 1,000 lines and the PR
  remains below 3,000 authored lines.

## Change budget and PR sequence

- Estimated authored changed lines: 5,300
- Owning modules, packages, or layers: Loom typed validation, admission/evidence authority, and provider-local integration
- Ownership units:
1. Capability: Validation-only typed plan foundation and temporary runtime gate; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/cli.ts, agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/resource-claim-containment.ts, agentic-ai/loom/src/module-delivery/validation.ts, agentic-ai/loom/src/module-delivery/integration.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/cli.test.ts, agentic-ai/loom/tests/module-delivery/plan-validation.test.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts, agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts, agentic-ai/loom/tests/module-delivery/integration-admission-guard.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts, agentic-ai/loom/src/module-delivery/handoff.ts, agentic-ai/loom/src/module-delivery/tree-integration.ts, agentic-ai/loom/src/module-delivery/workspace.ts; Expertise consumer interfaces: authored-v2 validation result, non-authoritative legacy decode, typed execution constraint, and temporary runtime gate; Expertise acceptance evidence: v1 canonical rejection, deterministic hazard constraints, no semantic-edge synthesis, no Git-frontier SHA fabrication, pre-mutation runtime rejection, focused tests, and source ceilings; Capability acceptance evidence: validation cannot mutate or bless runtime authority before its successors land.
2. Capability: Admission and authenticated evidence authority; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts, agentic-ai/loom/tests/module-delivery/evidence.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/integration.ts, agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: validated authored-v2 plan, generation authority, exact expected lineage, admissions, leases, dispositions, accepted evidence identities, and exact frontier readiness; Expertise acceptance evidence: forged lineage, stale generation, duplicate admission, stale frontier, and forged evidence fail closed; Capability acceptance evidence: only trusted context authorizes an exact task attempt and synthesis cannot become ready without exact accepted evidence.
3. Capability: Provider-local typed integration and materialization; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/integration.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts, agentic-ai/loom/tests/module-delivery/worktree-test-support.ts, agentic-ai/loom/tests/module-delivery/integration-admission-guard.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: authorized write submission, repository-evidence submission, synthesis-evidence submission, exact frontiers, final integration state, cleanup handles; Expertise acceptance evidence: each task advances only after its type-specific verified submission and the temporary gate is removed atomically; Capability acceptance evidence: write to evidence to synthesis to consumer, exact frontiers, final barrier, drift rejection, and cleanup pass.
4. Capability: Security acceptance; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head Security review rejects validation-as-authority, forged lineage, stale frontier, forged evidence, and lifecycle takeover.
5. Capability: Successor integration and preservation retirement; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: all runtime successors validate and squash-merge before PR 1176 closes.
- Public or cross-module interfaces: authored-v2 validation result, non-authoritative compatibility decode, execution constraints, generation/admission/evidence identities, provider-local typed submissions
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 2,200
- Current PR slice and acceptance evidence: Validation-only typed plan foundation with temporary runtime gate; Acceptance evidence: canonical v1 rejection, derived constraint determinism, no mutation before activation, exact-head verdicts, hosted validation, readiness, and squash merge pass.
- PR slices and acceptance evidence:
1. Validation-only typed plan foundation with temporary runtime gate; Acceptance evidence: canonical v1 rejection, derived constraint determinism, no mutation before activation, exact-head verdicts, hosted validation, readiness, and squash merge pass.
2. Admission and authenticated evidence authority; Acceptance evidence: trusted lineage, immutable admissions, exact frontier readiness, lease disposition, generation restart, owner-bound evidence, adversarial tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.
3. Provider-local typed integration; Acceptance evidence: typed write and evidence submissions, exact frontiers, finalization, drift rejection, cleanup, focused tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.

## Initial plan

1. Publish this superseding boundary before changing runtime paths.
2. Separate compatibility decode, canonical validation, and derived execution constraints.
3. Add a pre-mutation integration gate with behavior-focused no-side-effect proof.
4. Re-run AI, Web development, Security, local review, and delivery gates.
5. Merge the foundation, then implement the two authority-bearing successors.

## Completion evidence

- Version-1 data cannot become a canonical validated plan.
- Derived writer hazards are stable execution constraints and never invented provider contracts.
- No validation result can mutate integration state while the temporary gate is active.
- Exact-head reviews, Loom validation, hosted checks, readiness, and squash merge pass.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
