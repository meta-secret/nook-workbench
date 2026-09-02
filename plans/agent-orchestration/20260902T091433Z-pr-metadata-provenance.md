---
title: Pull request metadata provenance
feature: agent-orchestration
issue: null
started_at: 2026-09-02T09:14:33Z
agent: codex
gizmo_id: pr-metadata-provenance
---

# Task plan

## Interpreted request

Make pull-request metadata durable as an implementation scope evolves. Titles should describe the stable capability rather than a narrow initial edit. Descriptions should retain safe task provenance and public Workbench lifecycle links that another authorized operator can use for handoff.

## Requirements

- Require an initially broad but truthful pull-request title tied to the stable capability.
- Refresh the title and description after any material scope or design change.
- Require a human-readable Codex task name and harness-provided opaque task identifier in the pull-request description when available.
- Require public Nook Workbench issue, plan, and worklog links at the lifecycle stages where those records exist.
- Define a safe plan-reference boundary that does not publish machine-specific home paths or private task content.
- Keep passive provenance distinct from prohibited cross-task delegation or communication.
- Update the current pull-request workflow and delivery checklist without Markdown tables.

## Constraints and exclusions

- Do not invent a Codex deep-link format or publish an immutable transcript-sharing URL automatically.
- Do not publish machine-specific paths, usernames, private prompts, chat transcripts, credentials, or runtime values.
- Do not treat pull-request metadata as authority to resume, delegate, or mutate another task.
- Do not weaken the Workbench plan and worklog lifecycle or the external-task isolation boundary.
- Keep the change in one pull request below 2,000 authored additions.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: pr-metadata-provenance
- Estimated authored changed lines: 160
- Owning modules, packages, or layers: Gizmo pull-request workflow, efficient delivery checklist, and focused Cortex contract tests if deterministic coverage exists
- Ownership units:
1. Capability: Durable pull-request metadata and safe task provenance; Gizmo ID: pr-metadata-provenance; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused Cortex review, deterministic contract coverage where supported, Cortex audit, pre-push hygiene, and a separate pull request
- Public or cross-module interfaces: Pull-request title and description contract, Codex task provenance fields, and public Nook Workbench lifecycle links
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 160
- Current PR slice and acceptance evidence: Standardize evolving PR metadata and safe provenance links; Acceptance evidence: focused policy review, Cortex audit, pre-push hygiene, and published PR description
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: pr-metadata-provenance; Gizmo name: Pull request metadata provenance; Predecessor Gizmo ID: None; Standardize evolving PR metadata and safe provenance links; Estimated authored changed lines: 160; Acceptance evidence: focused policy review, Cortex audit, pre-push hygiene, and published PR description

## Initial plan

1. Publish this immutable Workbench plan before implementation edits.
2. Inspect the existing PR workflow, Workbench lifecycle, and deterministic policy seams.
3. Delegate the bounded Cortex update to the AI Team Agent.
4. Run focused Cortex evidence and pre-push hygiene.
5. Create a separate pull request with the required safe provenance and Workbench links.

## Completion evidence

- Cortex requires stable capability-oriented titles and material-change metadata refreshes.
- The PR description contract includes safe task identity and public Workbench lifecycle links.
- Local private plan paths and transcript-sharing links remain prohibited.
- Focused Cortex gates pass and the new pull request visibly follows the contract.

## Safety review

- This record contains no copied prompt, chat transcript, credential, private data, unfiltered execution output, machine-specific path, username, or unnecessary infrastructure detail.
