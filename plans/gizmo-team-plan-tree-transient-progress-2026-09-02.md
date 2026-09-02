---
issue: null
gizmo_id: gizmo-team-plan-tree
---

# Task plan

## Interpreted request

Supersede the overbroad journal-removal plan. Keep all Gizmo and Team Agent coordination, authority, lifecycle, admission, locking, handoff, aggregation, and lifecycle replay. Remove only durable storage and reconstruction of subagent runtime-progress observations while continuing to publish those observations live.

## Requirements

- Keep the committed journal-free native Gizmo team/task visualization and Cortex lifecycle consistency enforcement.
- Stop accepting or writing runtime activity histories into per-attempt JSONL.
- Remove the generic delegation record request `activities` transport.
- Keep live ordered progress observations through the runtime observer and compact user-visible renderer.
- Keep attempt start, terminal result/view handoff, provenance, parent authorization, admission order, locks, aggregation, and lifecycle replay fail-closed.
- Keep module and structural expert execution, isolation, cancellation, source binding, terminal validation, and one-use authorities.

## Constraints and exclusions

- Do not remove native harness delegation, communication, submission, handoff, or lifecycle behavior.
- Do not remove delegation commands, admission, locks, aggregation, result/view artifacts, or lifecycle evidence.
- Do not replace trusted parent authority with caller-supplied serialized claims.
- Do not change module-delivery admission, leases, handoff, integration, or evidence replay.
- Do not alter unrelated product journals, replay protection, event logs, or journalctl usage.
- No compatibility decoder or fallback for progress-bearing streams.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-team-plan-tree
- Estimated authored changed lines: 1700
- Owning modules, packages, or layers: Cortex delegation visualization and consistency skills, Loom agent lifecycle events and expert live observation
- Ownership units:
1. Capability: Native Gizmo plan visualization and lifecycle consistency; Gizmo ID: gizmo-team-plan-tree; Functional owner: Gizmo Prime; Expertise provider: AI; Expertise allowed code paths: .cortex/gizmo/workflows/subagent-delegation.md, .cortex/teams/ai/dynamic-skills/delegation-visualization/SKILL.md, .cortex/teams/ai/dynamic-skills/cortex-consistency/SKILL.md; Expertise allowed test paths: .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/tests/renderer.test.ts, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/tests/audit.test.ts; Expertise forbidden paths: nook-app/nook-platform/nook-auth2/src/lib.rs; Expertise consumer interfaces: delegationVisualization.render and cortexConsistency.compile; Expertise acceptance evidence: Skill and host tests pass; Capability acceptance evidence: Gizmo publishes the validated tree before active-harness dispatch and obsolete lifecycle bindings fail audit
2. Capability: Transient subagent progress with durable lifecycle handoff; Gizmo ID: gizmo-team-plan-tree; Functional owner: Gizmo Prime; Expertise provider: AI; Expertise allowed code paths: agentic-ai/loom/src/agent-workflow/agent-events.ts, agentic-ai/loom/src/agent-workflow/agent-journal.ts, agentic-ai/loom/src/agent-workflow/agent-replay.ts, agentic-ai/loom/src/agent-workflow/delegation-cli.ts, agentic-ai/loom/src/module-experts/invoke.ts, agentic-ai/loom/src/structural-experts/invoke.ts; Expertise allowed test paths: agentic-ai/loom/tests/agent-workflow/agent-journal.test.ts, agentic-ai/loom/tests/agent-workflow/delegation-cli.test.ts, agentic-ai/loom/tests/module-experts/invoke.test.ts, agentic-ai/loom/tests/structural-experts/invoke.test.ts; Expertise forbidden paths: nook-app/nook-platform/nook-auth2/src/lib.rs; Expertise consumer interfaces: RuntimeActivityObserver and lifecycle terminal/result projections; Expertise acceptance evidence: Focused tests prove progress remains live but is absent from persisted events; Capability acceptance evidence: Delegation admission, locks, authority, terminal handoff, aggregation, and lifecycle replay remain green
- Public or cross-module interfaces: Delegation record requests no longer accept persisted activities; runtime observations remain transient
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1700
- Current PR slice and acceptance evidence: Render native plans and remove only persisted subagent runtime progress; Acceptance evidence: Visualization, consistency, lifecycle, delegation, expert invocation, Cortex audit, Loom contract preflight, and Loom pre-push checks pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-team-plan-tree; Gizmo name: Native visualization with transient progress; Predecessor Gizmo ID: None; Render native plans and remove only persisted subagent runtime progress; Estimated authored changed lines: 1700; Acceptance evidence: Visualization, consistency, lifecycle, delegation, expert invocation, Cortex audit, Loom contract preflight, and Loom pre-push checks pass

## Initial plan

1. Keep the committed native visualization and consistency gate unchanged unless validation finds a defect.
2. Remove only the runtime-activity persisted event variant and generic record activities transport.
3. Route module and structural expert observations to the existing live renderer without appending them to JSONL.
4. Advance the lifecycle schema so progress-bearing streams fail closed without compatibility handling.
5. Update focused documentation and tests, then validate all preserved coordination and authority behavior.

## Completion evidence

- Runtime progress is visible live and absent from persisted attempt JSONL.
- Start, admission, lock, record, finalization, terminal handoff, aggregation, and replay tests remain green.
- Module and structural experts retain authorization, isolation, cancellation, typed completion, and sanitized failure tests.
- Native visualization and Cortex consistency validation remain green.

## Safety review

- Native Gizmo-Team Agent management and communication are preserved.
- Cryptographic, authentication, authorization, device-identity, and vault-storage boundaries are unchanged.
- Parent authorization and one-use completion authority remain fail-closed.
- The plan introduces no new persistence, scheduler, transport, or trust root.
