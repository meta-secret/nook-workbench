---
title: Complete the Team Plan stack
feature: agent-workflow
issue: issues/agent-workflow/README.md
started_at: 2026-08-31T01:30:00Z
agent: codex
gizmo_id: team-plan-admission
---

# Task plan

## Interpreted request

Complete the small Team Plan adapter with trusted project-owned restart state.
Remove the proposed internal cryptographic provenance layer and prevent that
pattern from returning.

## Requirements

- Reuse typed module-delivery admission and ownership decisions.
- Trust canonical project-owned journal and private Git receipt state.
- Keep structural, lifecycle, lease, scope, and exact-frontier checks.
- Persist no raw worker evidence.
- Prohibit internal receipt signatures, MACs, keys, and trust roots in Cortex.
- Expose durable start, select, record, restart, finalize, and discard commands.
- Complete native stacked PR review, validation, and bottom-up merge.

## Constraints and exclusions

- No model runner, scheduler, transcript protocol, hosted service, or Hive
  integration.
- No product vault behavior or product cryptographic changes.
- Every source file stays at or below 1,000 lines.
- Every PR slice stays at or below 2,000 authored additions plus deletions.
- The active harness remains the sole worker lifecycle owner.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: team-plan-admission
- Estimated authored changed lines: 4697
- Owning modules, packages, or layers: Module-delivery admission, Team Plan journal, Team Plan runner and CLI.
- Ownership units:
1. Capability: Typed admission and trusted canonical receipt replay; Gizmo ID: team-plan-admission; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Module-delivery tests and complete Loom verification pass without receipt key material.
2. Capability: Durable Team Plan journal; Gizmo ID: team-plan-journal; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Journal retry, lock, capacity, append, finalization, and discard tests pass.
3. Capability: Team Plan runner and commands; Gizmo ID: team-plan-runner; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Runner restart, canonical receipt replay, command, and discard tests pass.
- Public or cross-module interfaces: Canonical redacted receipt restoration and Team Plan journal and runner APIs.
- Delivery shape: Multiple PRs
- PR sequence mode: Stacked PRs
- Current PR estimated authored changed lines: 837
- Current PR slice and acceptance evidence: Typed admission, trusted canonical receipt replay, and Cortex policy; Acceptance evidence: 78 module-delivery tests and 663 complete Loom tests pass.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: team-plan-admission; Gizmo name: Team Plan admission; Predecessor Gizmo ID: None; Typed admission and trusted canonical receipt replay; Estimated authored changed lines: 837; Acceptance evidence: Module-delivery and complete Loom verification pass.
2. Gizmo ID: team-plan-journal; Gizmo name: Team Plan journal; Predecessor Gizmo ID: team-plan-admission; Durable bounded lifecycle journal; Estimated authored changed lines: 1960; Acceptance evidence: Focused journal tests and TypeScript gates pass.
3. Gizmo ID: team-plan-runner; Gizmo name: Team Plan runner; Predecessor Gizmo ID: team-plan-journal; Runtime, CLI, Task wiring, restart, and discard; Estimated authored changed lines: 1900; Acceptance evidence: Focused runtime tests, complete Loom verification, and exact-head hosted checks pass.

## Initial plan

1. Publish the corrected three-slice Workbench hierarchy.
2. Integrate and validate admission, journal, and runner on exact predecessor
   commits.
3. Replace the existing PR heads and register the native three-PR stack.
4. Resolve exact-head review and validation findings.
5. Merge bottom-up, verify remote main, and close the lifecycle records.

## Completion evidence

- Canonical redacted receipts replay after restart without internal key
  material.
- Cortex explicitly prohibits project-internal receipt cryptography.
- Each exact PR head is within budget and passes required checks.
- All three PRs merge bottom-up and remote main contains the complete runner.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure detail.
