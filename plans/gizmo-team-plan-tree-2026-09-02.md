---
issue: null
gizmo_id: gizmo-team-plan-tree
---

# Task plan

## Interpreted request

Remove the obsolete agent-attempt journal boundary, make Cortex consistency reject the documentation flaw that preserved it, and provide a deterministic hierarchical visualization of the native Gizmo team plan before Team Agents run.

## Requirements

- Delete agent-attempt event persistence, replay, delegation admission, and the legacy delegation CLI from Loom, its tests, package registration, and Cortex documentation.
- Preserve module and structural expert execution through direct typed terminal/result artifacts without an event journal.
- Render Gizmo as the root, assigned teams as siblings, and each team's tasks as children in declared order.
- Keep the renderer pure: it must not persist data, admit work, schedule workers, or own agent lifecycle.
- Extend Cortex Consistency so Gizmo lifecycle documentation cannot delegate native harness authority to a repository CLI and retired delegation commands cannot reappear.

## Constraints and exclusions

- Preserve unrelated product replay protection, vault event logs, module-delivery admission, and canonical evidence reconstruction.
- The active agent harness remains the sole owner of planning, dispatch, communication, and lifecycle.
- No journal compatibility path, migration, fallback, or storage replacement is introduced.
- Keep Cortex Markdown readable and Loom deterministic.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-team-plan-tree
- Estimated authored changed lines: 1100
- Owning modules, packages, or layers: Loom agent workflow, Loom module experts, Loom structural experts, Cortex Gizmo workflow, Cortex Consistency skill
- Ownership units:
1. Capability: Journal-free expert result finalization; Gizmo ID: gizmo-team-plan-tree; Functional owner: Gizmo Prime; Expertise provider: AI; Expertise allowed code paths: agentic-ai/loom/src/agent-workflow/agent-journal.ts, agentic-ai/loom/src/agent-workflow/agent-replay.ts, agentic-ai/loom/src/agent-workflow/delegation-cli.ts, agentic-ai/loom/src/agent-workflow/delegation-run-journal.ts, agentic-ai/loom/src/module-experts/invoke.ts, agentic-ai/loom/src/module-experts/trusted-runtime.ts, agentic-ai/loom/src/structural-experts/invoke.ts, agentic-ai/loom/src/structural-experts/trusted-runtime.ts; Expertise allowed test paths: agentic-ai/loom/tests/agent-workflow/agent-journal.test.ts, agentic-ai/loom/tests/agent-workflow/delegation-cli.test.ts, agentic-ai/loom/tests/module-experts/invoke.test.ts, agentic-ai/loom/tests/module-experts/trusted-runtime.test.ts, agentic-ai/loom/tests/structural-experts/invoke.test.ts, agentic-ai/loom/tests/structural-experts/trusted-runtime.test.ts; Expertise forbidden paths: nook-app/nook-platform/nook-auth2/src/lib.rs; Expertise consumer interfaces: ModuleExpertInvocationResult and StructuralExpertInvocationResult; Expertise acceptance evidence: Focused Loom tests pass without journal files or symbols; Capability acceptance evidence: Expert invocations return verified direct typed results and no events.jsonl
2. Capability: Native Gizmo team plan tree; Gizmo ID: gizmo-team-plan-tree; Functional owner: Gizmo Prime; Expertise provider: AI; Expertise allowed code paths: .cortex/teams/ai/dynamic-skills/delegation-visualization/SKILL.md, .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/src/domain.ts, .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/src/codec.ts, .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/src/renderer.ts, .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/src/application.ts, .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/src/action.ts, .cortex/gizmo/workflows/subagent-delegation.md; Expertise allowed test paths: .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/tests/codec.test.ts, .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/tests/renderer.test.ts, .cortex/teams/ai/dynamic-skills/delegation-visualization/scripts/tests/definition.test.ts; Expertise forbidden paths: nook-app/nook-platform/nook-auth2/src/lib.rs; Expertise consumer interfaces: delegationVisualization.render request and rendered tree result; Expertise acceptance evidence: Focused renderer tests cover sibling teams, ordered tasks, bounds, and invalid input; Capability acceptance evidence: Gizmo documentation requires the active harness to print the renderer output before dispatch
3. Capability: Cortex lifecycle consistency enforcement; Gizmo ID: gizmo-team-plan-tree; Functional owner: Gizmo Prime; Expertise provider: AI; Expertise allowed code paths: .cortex/teams/ai/dynamic-skills/cortex-consistency/SKILL.md, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/src/domain.ts, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/src/codec.ts, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/src/application.ts, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/src/audit.ts, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/src/registry.ts; Expertise allowed test paths: .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/tests/audit.test.ts, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/tests/codec.test.ts, .cortex/teams/ai/dynamic-skills/cortex-consistency/scripts/tests/runtime-bindings.test.ts; Expertise forbidden paths: nook-app/nook-platform/nook-auth2/src/lib.rs; Expertise consumer interfaces: Cortex consistency request and findings; Expertise acceptance evidence: Skill tests reject repository-owned Gizmo lifecycle commands and retired delegation command references; Capability acceptance evidence: task loom:cortex-audit reports no findings on the corrected repository
- Public or cross-module interfaces: Pure typed Gizmo team plan tree renderer; direct expert invocation result verification
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1100
- Current PR slice and acceptance evidence: Remove obsolete journal authority and add native plan-tree rendering plus consistency enforcement; Acceptance evidence: Focused Loom and skill tests, Cortex audit, Loom contract preflight, and Loom pre-push pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-team-plan-tree; Gizmo name: Journal-free Gizmo team plan tree; Predecessor Gizmo ID: None; Remove obsolete journal authority and add native plan-tree rendering plus consistency enforcement; Estimated authored changed lines: 1100; Acceptance evidence: Focused Loom and skill tests, Cortex audit, Loom contract preflight, and Loom pre-push pass

## Initial plan

1. Remove journal, replay, legacy delegation admission/CLI, and their registrations and tests.
2. Refactor expert invocations to produce and verify direct bounded result artifacts without event persistence.
3. Add and test the pure typed Gizmo team/task tree renderer.
4. Correct Cortex delegation guidance and extend the existing consistency skill with executable lifecycle-authority checks.
5. Run focused and repository Loom validation, inspect the diff and file sizes, then deliver one PR.

## Completion evidence

- Repository search finds no agent-attempt journal, events.jsonl, journal authority, or legacy delegation command.
- Renderer output truthfully shows Gizmo, sibling teams, and their ordered tasks.
- Consistency fixtures prove the former documentation flaw is rejected.
- Required Loom and Cortex validation passes on the exact PR head.

## Safety review

- No product cryptographic, authentication, authorization, device-identity, or vault-storage boundary changes.
- No new persistence, scheduler, or trust root is introduced.
- Deletions are recoverable from Git history.
