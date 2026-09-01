---
title: Use unformatted YAML agent activity logs
feature: agent-workflow
issue: null
started_at: 2026-09-01T03:39:00Z
agent: codex
gizmo_id: activity-log-team-agent
---

# Use unformatted YAML agent activity logs

## Interpreted request

Make every user-visible agent update begin with an unformatted YAML metadata
document terminated by an ellipsis. It identifies when the activity occurred,
which pull request it serves, which team and agent performed it, and what kind
of action it was. Keep the following description as plain text. Preserve
explicit command and wait visibility, then complete the normal pull-request
lifecycle.

## Requirements

- Add stable team and agent fields to the canonical activity-log schema.
- Keep metadata as unformatted block YAML and descriptions as plain text.
- Terminate metadata with `...` so its boundary remains visible.
- Define truthful team-agent labels and require identity changes at handoffs.
- Preserve action types, abbreviated long commands, elapsed waits, failures,
  and current-state reporting.
- Validate the Cortex contract and the exact pull-request head.
- Resolve actionable findings, prove readiness, and squash-merge the change.

## Constraints and exclusions

- Change only the root Cortex agent-communication contract.
- Do not change product behavior, runtime automation, or trust boundaries.
- Do not claim a team or authority that the acting agent does not hold.
- Use one pull request because the complete change is small and cohesive.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: activity-log-team-agent
- Estimated authored changed lines: 45
- Owning modules, packages, or layers: Root Cortex agent communication contract
- Ownership units:
1. Capability: Team-agent activity-log contract; Gizmo ID: activity-log-team-agent; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex audit, pre-push validation, exact-head hosted validation, and readiness audit
- Public or cross-module interfaces: User-visible agent activity-log schema
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 45
- Current PR slice and acceptance evidence: Canonical activity messages identify the responsible team agent; Acceptance evidence: Cortex audit, exact-head hosted validation, review resolution, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: activity-log-team-agent; Gizmo name: Team-agent activity log; Predecessor Gizmo ID: None; Canonical activity messages identify the responsible team agent; Estimated authored changed lines: 45; Acceptance evidence: Cortex audit, exact-head hosted validation, review resolution, and readiness

## Initial plan

1. Update the root agent-communication contract with the team-agent field.
2. Run Cortex and pre-push validation on the bounded documentation diff.
3. Push one coherent branch and open the Nook pull request.
4. Complete exact-head review, hosted validation, readiness, and squash merge.
5. Publish the linked completion worklog and agent statistics.

## Completion evidence

- The root contract contains the YAML activity schema and identity rules.
- Cortex and pre-push checks pass without unrelated mutations.
- The pull request is review-clean, ready, and squash-merged.
- Workbench completion records are visible on its default branch.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
