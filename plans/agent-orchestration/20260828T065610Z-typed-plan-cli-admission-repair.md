---
title: "Repair typed plan CLI admission authority"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/typed-plan-evidence-admission.md
started_at: 2026-08-28T06:56:10Z
agent: codex
---

# Task plan

## Interpreted request

Complete the typed plan/validation successor after local review found that the
canonical CLI admission caller cannot reject compatibility-decoded legacy
plans without owning an explicit version check.

## Requirements

- Keep legacy decoding available to the existing integration compatibility
  consumer.
- Make canonical CLI validation admit only authored version-2 plans.
- Reject stale evidence frontiers introduced by derived writer precedence.
- Keep read-only expert routing separate from implementation-team ownership.
- Add behavior-focused adversarial tests for every repair.

## Constraints and exclusions

- Add only `agentic-ai/loom/src/module-delivery/cli.ts` to the previously
  authorized seven paths; all other changes remain inside the validator and
  existing focused tests.
- No admission/evidence authority, provider Git integration, Cortex,
  scheduling, storage, Hive, or lifecycle behavior may change.
- Every authored source/test file remains at or below 1,000 lines and the PR
  remains below 3,000 authored lines.

## Change budget and PR sequence

- Estimated authored changed lines: 4,900
- Owning modules, packages, or layers: Loom module-delivery plan codec, CLI, validation, admission/evidence authority, and provider Git integration
- Ownership units:
1. Capability: Exact typed plan input, CLI admission, and explicit legacy integration compatibility; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/resource-claim-containment.ts, agentic-ai/loom/src/module-delivery/validation.ts, agentic-ai/loom/src/module-delivery/cli.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/cli.test.ts, agentic-ai/loom/tests/module-delivery/plan-validation.test.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts, agentic-ai/loom/src/module-delivery/integration.ts; Expertise consumer interfaces: exact ModuleDeliveryPlan input, LegacyCompatibleModuleDeliveryPlan view, and CLI v2 admission result; Expertise acceptance evidence: strict TypeScript, hybrid and legacy CLI rejection, stale-frontier rejection, owner-routing separation, focused tests, and source ceilings pass; Capability acceptance evidence: only authored v2 plans enter through the CLI while compatibility consumers remain buildable.
2. Capability: Admission and authenticated evidence authority; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts, agentic-ai/loom/tests/module-delivery/evidence.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/validation.ts, agentic-ai/loom/src/module-delivery/integration.ts; Expertise consumer interfaces: accepted authored-v2 metadata, generation authority, admissions, leases, dispositions, and evidence identities; Expertise acceptance evidence: immutable-claim and adversarial evidence tests pass; Capability acceptance evidence: legacy-origin plans cannot enter admission and forged or stale evidence fails closed.
3. Capability: Provider integration and materialization; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/integration.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts, agentic-ai/loom/tests/module-delivery/worktree-test-support.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: verified submissions, exact frontiers, final integration state, cleanup handles; Expertise acceptance evidence: integration and pilot tests pass; Capability acceptance evidence: predecessor closure, exact frontiers, final barrier, drift rejection, and cleanup pass.
4. Capability: Security acceptance; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head Security review rejects forged authority, hybrid input, stale evidence, path escape, and lifecycle takeover.
5. Capability: Successor integration and preservation retirement; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: successors validate and squash-merge in order before PR 1176 closes.
- Public or cross-module interfaces: exact ModuleDeliveryPlan input, LegacyCompatibleModuleDeliveryPlan view, accepted-plan inputVersion, CLI v2 admission, admission/evidence identities, provider integration state
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 1,850
- Current PR slice and acceptance evidence: Typed plan validation and CLI v2 admission; Acceptance evidence: legacy CLI rejection, stale-frontier rejection, independent owner routing, focused tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.
- PR slices and acceptance evidence:
1. Typed plan validation and CLI v2 admission; Acceptance evidence: legacy CLI rejection, stale-frontier rejection, independent owner routing, focused tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.
2. Admission and authenticated evidence authority; Acceptance evidence: immutable admissions, lease disposition, generation restart, owner-bound evidence, adversarial tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.
3. Provider integration and materialization; Acceptance evidence: verified provider integration, exact frontiers, finalization, drift rejection, cleanup, focused tests, exact-head verdicts, hosted validation, readiness, and squash merge pass.

## Initial plan

1. Publish this superseding scope before changing the CLI.
2. Repair the three local-review P1 findings within the eight authorized paths.
3. Re-run AI, Web development, and Security exact-head verdicts and all delivery gates.
4. Merge this foundation, then continue the remaining two successors.

## Completion evidence

- CLI rejects version-1 plans while compatibility decoding remains available.
- Derived precedence cannot leave a successor on a stale frozen baseline.
- Expert routing cannot grant implementation-team ownership.
- Exact-head owner reviews, Loom validation, hosted checks, readiness, and squash merge pass.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
