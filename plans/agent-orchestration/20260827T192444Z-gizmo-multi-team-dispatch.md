# Task plan

## Interpreted request

Make Gizmo's orchestration contract unambiguous. Gizmo must discover all work
needed for the requested outcome, assign every task to one team, dispatch every
dependency-ready task, and continue through ordered provider-consumer waves.
Independent tasks should run concurrently. Dependent tasks must wait for
verified, accepted, and integrated provider work and start from that exact
integrated baseline.

## Requirements

- Replace singular routing language that implies one team per mission.
- Require exhaustive task discovery before and during execution when new
  dependencies appear.
- Require enough team subagents to cover every reached bounded task.
- Require maximal safe fan-out for dependency-ready, non-conflicting tasks.
- Distinguish concurrent ready waves from successor waves.
- Require provider verification, acceptance, integration, and exact successor
  baselines before dependent work starts.
- Use edge-local barriers during execution and one all-task barrier only for
  the final parent-owned join.
- Preserve one functional owner per task, selective context loading, isolated
  writes, and Gizmo-only lifecycle authority.
- Deliver through a normal PR, feedback loop, readiness audit, and squash
  merge.

## Constraints and exclusions

- Do not change product behavior or team ownership boundaries.
- Do not make Cortex or Loom a replacement scheduler for the active harness.
- Do not require parallelism for conflicting writes, unresolved contracts,
  shared state, or dependency-linked tasks.
- Do not let Gizmo implement team-owned changes or fixes.
- Keep the wording concise and consistent across root and Gizmo authorities.

## Change budget and PR sequence

- Estimated authored changed lines: 250
- Owning modules, packages, or layers: Root Cortex routing and Gizmo orchestration contracts
- Ownership units:
1. Capability: Exhaustive multi-team dispatch and dependency-ready execution; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Root and Gizmo documents require every reached task to receive one team worker, independent ready tasks to fan out safely, and dependent consumers to start only from verified integrated provider baselines; Cortex audit and semantic consistency review pass.
- Public or cross-module interfaces: Gizmo task decomposition, dispatch, dependency, and integration contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 250
- Current PR slice and acceptance evidence: Clarify root routing and Gizmo orchestration in one cohesive documentation change; Acceptance evidence: clean multi-team semantic audit, Cortex audit, pre-push hygiene, exact-head review, hosted validation, and readiness.
- PR slices and acceptance evidence: 1. Clarify root routing and Gizmo orchestration in one cohesive documentation change; Acceptance evidence: clean multi-team semantic audit, Cortex audit, pre-push hygiene, exact-head review, hosted validation, and readiness.

## Initial plan

1. Collect independent AI, development-core, web-development, and SRE audits.
2. Give the consolidated findings and exact write scope to one AI team writer.
3. Review the returned commit against every routing and dependency criterion.
4. Send corrections back to AI until the contract is complete.
5. Run Cortex audit and pre-push hygiene.
6. Open a regular PR, address review and CI findings through their owning team,
   validate the exact head, and squash-merge after readiness passes.
7. Publish the final Workbench worklog and delivery statistics.

## Completion evidence

- Root routing says Gizmo chooses all required team agents, not one primary
  agent for the mission.
- Every reached bounded task receives one team worker attempt.
- Every safe ready task is dispatched in the same parallel wave.
- A successor starts only from the exact integrated frontier containing all
  declared provider outputs.
- Independent work can continue while provider-dependent work waits.
- The final join waits for all required tasks and verdicts.
- Cortex and exact-head PR gates pass and the PR is merged.

## Safety review

The plan contains no raw conversation, private data, secrets, credentials, raw
logs, local paths, or unnecessary infrastructure details.
