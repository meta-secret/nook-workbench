---
title: "Repair typed plan compatibility consumer"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/typed-plan-evidence-admission.md
started_at: 2026-08-28T06:43:07Z
agent: codex
---

# Task plan

## Interpreted request

Complete the typed plan/validation foundation with an exact public v1/v2 input
type while keeping the existing wave-integration fixture explicitly bound to a
named legacy compatibility view.

## Requirements

- Reject v2 synthesis nodes at both runtime and compile time for v1 plan input.
- Preserve normalized legacy plan provenance for the future admission boundary.
- Keep current wave integration buildable through an explicit compatibility
  type that cannot be mistaken for a new plan input.
- Retain all prior AI, web-development, and Security acceptance requirements.

## Constraints and exclusions

- The newly discovered consumer change is limited to one type import and
  annotation in the existing integration test.
- No integration behavior, admission, evidence, Git materialization, Cortex,
  scheduling, storage, Hive, or lifecycle semantics may change.
- Every PR remains below 3,000 authored lines and every authored source/test
  file remains at or below 1,000 lines.

## Change budget and PR sequence

- Estimated authored changed lines: 4,900
- Owning modules, packages, or layers: Loom module-delivery plan codec and validation; admission and evidence authority; provider Git integration
- Ownership units:
1. Capability: Exact typed plan input and explicit legacy integration compatibility; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/resource-claim-containment.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/cli.test.ts, agentic-ai/loom/tests/module-delivery/plan-validation.test.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts, agentic-ai/loom/src/module-delivery/integration.ts; Expertise consumer interfaces: exact ModuleDeliveryPlan input plus explicitly named legacy compatibility view; Expertise acceptance evidence: strict TypeScript, hybrid-plan rejection, unchanged integration behavior, focused tests, and source ceilings pass; Capability acceptance evidence: v1 cannot type-check or decode v2 synthesis while the legacy wave fixture remains explicitly buildable.
2. Capability: Admission and authenticated evidence authority; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts, agentic-ai/loom/tests/module-delivery/evidence.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/validation.ts, agentic-ai/loom/src/module-delivery/integration.ts; Expertise consumer interfaces: accepted v2 plan metadata, generation authority, admissions, leases, dispositions, and evidence identities; Expertise acceptance evidence: immutable-claim and adversarial evidence tests pass; Capability acceptance evidence: legacy-origin plans cannot enter admission and forged or stale evidence fails closed.
3. Capability: Provider integration and materialization; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/integration.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts, agentic-ai/loom/tests/module-delivery/worktree-test-support.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: verified submissions, exact frontiers, final integration state, cleanup handles; Expertise acceptance evidence: integration and pilot tests pass; Capability acceptance evidence: predecessor closure, exact frontiers, final barrier, drift rejection, and cleanup pass.
4. Capability: Security acceptance; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head Security review rejects forged authority, hybrid input, stale evidence, path escape, and lifecycle takeover.
5. Capability: Successor integration and preservation retirement; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: successors validate and squash-merge in order before PR 1176 closes.
- Public or cross-module interfaces: exact ModuleDeliveryPlan input, LegacyCompatibleModuleDeliveryPlan view, accepted-plan inputVersion, admission/evidence identities, provider integration state
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 1,750
- Current PR slice and acceptance evidence: Typed plan validation with explicit legacy consumer compatibility; Acceptance evidence: hybrid v1/v2 rejection, distinct input version, unchanged integration behavior, focused tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.
- PR slices and acceptance evidence:
1. Typed plan validation with explicit legacy consumer compatibility; Acceptance evidence: hybrid v1/v2 rejection, distinct input version, unchanged integration behavior, focused tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.
2. Admission and authenticated evidence authority; Acceptance evidence: immutable admissions, lease disposition, generation restart, owner-bound evidence, adversarial tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.
3. Provider integration and materialization; Acceptance evidence: verified provider integration, exact frontiers, finalization, drift rejection, cleanup, focused tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.

## Initial plan

1. Update the focused issue with the explicit compatibility consumer.
2. Apply only the exact public-alias, explicit fixture-state, and compatibility
   annotation changes.
3. Re-run all owner verdicts and delivery gates, then merge the foundation.
4. Continue the admission/evidence and provider-integration successors.

## Completion evidence

- TypeScript rejects hybrid v1/v2 plan input and the runtime codec rejects the
  same shape.
- The legacy integration fixture uses only the named compatibility view and its
  behavior tests remain unchanged and green.
- Required exact-head verdicts, full Loom validation, hosted validation,
  readiness, and squash merge pass.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
