---
title: Bound GitHub API output for agent statistics
feature: agent-workflow
issue: null
started_at: 2026-09-01T08:55:45Z
agent: codex
gizmo_id: agent-stats-output-bound
---

# Bound GitHub API output for agent statistics

## Interpreted request

Finish the activity-log delivery by making Loom reliably assemble agent statistics for pull requests whose paginated GitHub Actions response exceeds the subprocess default output capacity. Deliver the narrow tooling repair independently because the originating implementation pull request is already merged.

## Requirements

- Preserve complete GitHub API JSON within an explicit, bounded output limit.
- Apply the larger bound only to the agent-statistics GitHub API path.
- Fail closed when output exceeds the declared bound.
- Add focused regression coverage for output larger than the platform default.
- Validate the exact pull-request head, resolve actionable review feedback, prove readiness, and squash-merge.
- Use the repaired tool to publish the originating pull request's statistics and completion worklog.

## Constraints and exclusions

- Do not truncate GitHub API responses or silently continue after overflow.
- Do not change product behavior, GitHub query semantics, or unrelated subprocess callers.
- Keep the repair to one small independent pull request from current main.
- The accepted AI Team Agent handoff already contains the implementation; Gizmo Prime performs integration and delivery only.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: agent-stats-output-bound
- Estimated authored changed lines: 26
- Owning modules, packages, or layers: Loom command execution and agent-statistics GitHub API adapter
- Ownership units:
1. Capability: Bounded large GitHub API response capture; Gizmo ID: agent-stats-output-bound; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused Loom tests, typecheck, lint, pre-push hygiene, exact-head hosted validation, resolved review, and readiness audit
- Public or cross-module interfaces: Optional maxOutputBytes field on Loom's internal RunCommandArgs interface
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 26
- Current PR slice and acceptance evidence: Bounded complete capture for large agent-statistics GitHub responses; Acceptance evidence: focused regression test, exact-head hosted validation, review resolution, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: agent-stats-output-bound; Gizmo name: Agent statistics output bound; Predecessor Gizmo ID: None; Bounded complete capture for large agent-statistics GitHub responses; Estimated authored changed lines: 26; Acceptance evidence: focused regression test, exact-head hosted validation, review resolution, and readiness

## Initial plan

1. Verify and integrate the accepted AI Team Agent handoff onto current main.
2. Run deterministic pre-push hygiene, commit, push, and open the focused pull request.
3. Dispatch hosted validation and exact-head review concurrently.
4. Route any finding to AI, revalidate the replacement head, and pass readiness.
5. Squash-merge and publish the linked Workbench completion evidence.

## Completion evidence

- The regression test proves a response above the platform default is captured intact.
- The focused pull request is review-clean, exact-head validated, ready, and squash-merged.
- Agent statistics and completion worklogs are visible on Workbench main.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
