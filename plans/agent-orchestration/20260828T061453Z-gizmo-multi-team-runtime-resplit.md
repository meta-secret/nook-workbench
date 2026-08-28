---
title: "Resplit Gizmo multi-team runtime enforcement"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/typed-plan-evidence-admission.md
started_at: 2026-08-28T06:14:53Z
agent: codex
---

# Task plan

## Interpreted request

Finish the preserved Loom runtime work behind the merged Gizmo multi-team
contract, deliver every useful behavior through reviewable successors, and
retire preservation PR 1176 only after the complete runtime sequence has
merged.

## Requirements

- Keep current Main integration consumers buildable after every successor.
- Encode plan version 2, distinct execution and functional-acceptance owners,
  frozen parent lineage, typed provider-evidence inputs, deterministic
  validation, authenticated admission, immutable leases, disposition, restart,
  provider-local integration, exact frontiers, finalization, and cleanup.
- Preserve optional evidence as read-only input with no worker-lifecycle or
  scheduling authority.
- Require AI semantic acceptance, web-development TypeScript acceptance, and
  Security trust-boundary acceptance for each applicable exact head.
- Validate, squash-merge, and publish Workbench evidence after each successor.

## Constraints and exclusions

- The corrected typed candidate measures 3,052 authored lines and must be split
  by cohesive runtime responsibility rather than compressed.
- Every PR must remain below 3,000 authored lines and every authored source file
  at or below 1,000 lines.
- Preserve full-work commit `ce47c73562755427d6471cf1209f50db625fb023`
  until all successor behavior is merged.
- Exclude generic schedulers, durable task stores, generated topology, model
  runners, Hive coupling, nested daemons, and lifecycle authority in plans or
  evidence.

## Change budget and PR sequence

- Estimated authored changed lines: 4,900
- Owning modules, packages, or layers: Loom module-delivery plan codec and validation; admission and evidence authority; Git provider integration and materialization
- Ownership units:
1. Capability: Typed plan ownership, lineage, evidence-input schema, codec, digest, claim containment, and validation; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/resource-claim-containment.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/cli.test.ts, agentic-ai/loom/tests/module-delivery/plan-validation.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts, agentic-ai/loom/src/module-delivery/integration.ts; Expertise consumer interfaces: ModuleDeliveryPlan version 2 and accepted validation result consumed by admission; Expertise acceptance evidence: strict TypeScript checks, behavior-focused codec and validation tests, and source ceilings pass; Capability acceptance evidence: plans round-trip separate team and functional owner, frozen lineage, typed expected producers, bounded claims, precedence, and cycles while legacy integration remains buildable.
2. Capability: Generation authority, deterministic admission, immutable attempt leases, conclusive disposition, restart, and authenticated evidence; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts, agentic-ai/loom/tests/module-delivery/evidence.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/resource-claim-containment.ts, agentic-ai/loom/src/module-delivery/validation.ts, agentic-ai/loom/src/module-delivery/integration.ts; Expertise consumer interfaces: accepted plan metadata, generation capability, admissions, leases, dispositions, and verified evidence identities consumed by provider integration; Expertise acceptance evidence: mutation and adversarial evidence tests plus strict TypeScript and source ceilings pass; Capability acceptance evidence: stable maximal-safe admission, deep-frozen claims, owner-bound evidence, disposition, and generation restart reject forged or stale state.
3. Capability: Provider-local Git integration, frontier materialization, finalization, drift rejection, and cleanup; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/integration.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts, agentic-ai/loom/tests/module-delivery/worktree-test-support.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: verified provider submissions, accepted evidence identities, exact integrated frontiers, final integration state, and cleanup handles; Expertise acceptance evidence: deterministic integration tests and source ceilings pass; Capability acceptance evidence: complete predecessor closure, exact Git frontiers, forged handoff and drift rejection, final barrier, and idempotent cleanup pass.
4. Capability: Security acceptance for owner, evidence, generation, claim, Git, and lifecycle boundaries; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security returns non-blocking exact-head verdicts rejecting forged authority, stale evidence, path escape, unauthorized commits, lifecycle takeover, and mutable-generation reuse.
5. Capability: Successor PR integration, readiness, merge, Workbench publication, and preservation-draft retirement; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: every successor is independently buildable, below the size ceiling, exact-head ready, squash-merged in order, and fully accounts for preserved behavior before PR 1176 closes.
- Public or cross-module interfaces: ModuleDeliveryPlan version 2; accepted-plan metadata; generation authority; admissions, leases, dispositions, evidence identities; provider submissions; exact integration frontiers and cleanup
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 1,800
- Current PR slice and acceptance evidence: Typed plan and validation foundation; Acceptance evidence: v1 and v2 decoding, ownership, lineage, evidence-input schema, claim containment, precedence, cycle rejection, digest stability, legacy integration compatibility, focused tests, required reviews, hosted validation, and readiness pass.
- PR slices and acceptance evidence:
1. Typed plan and validation foundation; Acceptance evidence: v1 and v2 decoding, ownership, lineage, evidence-input schema, claim containment, precedence, cycle rejection, digest stability, legacy integration compatibility, focused tests, required reviews, hosted validation, and readiness pass.
2. Admission and authenticated evidence authority; Acceptance evidence: stable bounded admission, immutable claims, leases through disposition, owner-bound evidence, generation restart, adversarial tests, required verdicts, hosted validation, readiness, and squash merge pass.
3. Provider integration and materialization; Acceptance evidence: verified provider integration, complete predecessor closure, exact frontiers, final barrier, drift rejection, cleanup, focused integration tests, required verdicts, hosted validation, readiness, and squash merge pass.

## Initial plan

1. Materialize the revised focused issue sequence and preserve the complete
   corrected candidate until both typed successors are safely reachable.
2. Deliver and merge the typed plan and validation foundation from current
   Main.
3. Deliver and merge admission and evidence authority from that frontier.
4. Deliver and merge provider integration, publish completion records, then
   close preservation PR 1176 as superseded.

## Completion evidence

- All successor PRs are independently buildable, under the authored-line
  ceiling, exact-head validated, reviewed by their required owners, ready, and
  squash-merged in dependency order.
- Workbench issues, worklogs, statistics, and the feature summary record every
  merge and the final accounting of preserved behavior.
- PR 1176 is closed only after no required source or test behavior remains
  unique to its preservation commit.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
