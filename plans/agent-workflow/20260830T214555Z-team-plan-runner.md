---
title: Add the Team Plan runner
feature: agent-workflow
issue: issues/agent-workflow/team-plan-runner.md
started_at: 2026-08-30T21:45:55Z
agent: codex
gizmo_id: team-plan-runner
---

# Task plan

## Interpreted request

Add the missing executable admission layer that lets Gizmo safely run reviewed
work across teams. Call the capability Team Plan and keep its implementation a
thin durable adapter over the existing module-delivery domain rather than a
new orchestration system.

## Requirements

- Start a run from an immutable reviewed plan and exact Git source commit.
- Reuse the existing typed admission, resource-claim, evidence, lease,
  integration, and frontier decisions.
- Persist the minimum source-bound run state needed to reconstruct admissions,
  leases, dispositions, accepted evidence, and exact frontiers.
- Expose deterministic commands that start, select, record, and finalize a
  Team Plan while leaving native worker lifecycle in the active harness.
- Fail closed for stale attempts, plan or source drift, missing evidence,
  conflicts, exhausted capacity, and premature finalization.
- Prove the capability with focused adversarial tests and activate only the
  canonical delegation behavior supported by those tests.
- Complete exact-head review, hosted validation, readiness, squash merge, and
  Workbench closeout.

## Constraints and exclusions

- Do not add a model runner, scheduler, transcript protocol, hosted service,
  Hive integration, or second admission model.
- Do not change vault product behavior in this prerequisite.
- Keep worker lifecycle, communication, retries, and cancellation in the
  active harness.
- Keep every authored source file at or below 1,000 lines and the complete PR
  below 2,000 authored additions plus deletions.
- Bootstrap with one AI-owned implementation attempt that cannot write Cortex.
  After the executable runner and its tests exist at an exact branch frontier,
  use Team Plan itself to authorize the bounded AI-owned Cortex activation in
  the same PR.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: team-plan-runner
- Estimated authored changed lines: 1900
- Owning modules, packages, or layers: Loom Team Plan runtime, CLI and Task integration, focused tests, and canonical Cortex delegation authority
- Ownership units:
1. Capability: Durable Team Plan admission runner and adversarial behavior tests; Gizmo ID: team-plan-runner; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused Loom tests prove immutable source binding, deterministic safe selection, lease and disposition reconstruction, evidence barriers, and fail-closed finalization
2. Capability: Canonical Team Plan activation and delegation-gate wording; Gizmo ID: team-plan-runner; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Team Plan authorizes the source-bound Cortex-writing attempt, Cortex audit passes, and the authority removes only the blocker proven by executable tests
- Public or cross-module interfaces: Team Plan persisted run schema and start, select, record, and finalize CLI and Task surfaces
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1900
- Current PR slice and acceptance evidence: Deliver and activate the Team Plan runner without adding another worker lifecycle system; Acceptance evidence: focused adversarial Loom tests, a Team Plan-authorized Cortex activation attempt, full repository validation, exact-head review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: team-plan-runner; Gizmo name: Team Plan runner; Predecessor Gizmo ID: None; Deliver and activate the Team Plan runner without adding another worker lifecycle system; Estimated authored changed lines: 1900; Acceptance evidence: focused adversarial Loom tests, a Team Plan-authorized Cortex activation attempt, full repository validation, exact-head review, and readiness

## Initial plan

1. Dispatch one bounded AI worker from the exact current `main` commit to add
   the runner, CLI, Task surfaces, and focused tests without touching Cortex.
2. Verify the returned commit, changed-path scope, source-file size, authored
   line budget, and focused behavior tests in the integration worktree.
3. Run Team Plan from that exact frontier to authorize the bounded AI Cortex
   activation attempt, then integrate only a scope-valid, audited result.
4. Push early, open one PR, obtain exact-head AI and security verdicts, run
   hosted validation, and resolve findings through their owning teams.
5. Pass readiness, squash-merge, verify remote `main`, and close the Workbench
   issue with exact evidence.

## Completion evidence

- A persisted Team Plan reconstructs the same valid candidates, leases,
  dispositions, evidence barriers, and exact frontiers after restart.
- No unselected, stale, conflicting, over-capacity, or evidence-incomplete
  attempt can become harness-visible or advance the run.
- The runner itself authorizes the bounded Cortex activation attempt at an
  exact tested frontier.
- The exact PR head passes focused tests, Cortex audit, full hosted validation,
  review, and readiness.
- The PR is squash-merged and the completed Workbench record links the merged
  evidence.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw
  logs, local paths, internal infrastructure details, or unnecessary
  environment values.
- The design preserves one Gizmo delivery owner and keeps security-sensitive
  admission decisions in the typed repository domain rather than prompts or
  worker output.
