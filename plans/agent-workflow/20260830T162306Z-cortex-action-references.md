---
title: Add compact Cortex action references
feature: agent-workflow
issue: null
started_at: 2026-08-30T16:23:06Z
agent: codex
gizmo_id: cortex-action-references
---

# Task plan

## Interpreted request

Make delegated-agent activity easier to inspect by assigning stable compact
identifiers to selected Cortex authorities and sequence-derived identifiers to
persisted actions. Preserve machine-readable output and the boundary against
recording private reasoning.

## Requirements

- Add a validated registry for compact category, document, and heading IDs.
- Give every persisted delegated-agent event a deterministic compact action ID.
- Allow runtime activities to cite registered guidance as loaded, cited,
  applied, or validated.
- Emit compact human summaries without contaminating JSON output or gating
  durable journal persistence.
- Reject unknown, duplicated, malformed, or stale registry references.
- Document that action records are observable diagnostics rather than private
  reasoning or an exact effort measure.
- Deliver the exact head through review, hosted validation, readiness, squash
  merge, and Workbench completion.

## Constraints and exclusions

- Preserve the recently retired standalone workflow modules and contracts.
- Keep secrets, prompts, raw command output, and hidden reasoning outside event
  records.
- Keep the journal authoritative when optional human output fails.
- Do not add a new storage engine, scheduler, or workflow runtime.
- Preserve unrelated active branches and pull requests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: cortex-action-references
- Estimated authored changed lines: 786
- Owning modules, packages, or layers: AI Cortex references, Loom delegated-agent journal and replay, delegation CLI, Cortex audit, tests, and documentation
- Ownership units:
1. Capability: Compact Cortex identifiers and observable delegated-agent action references; Gizmo ID: cortex-action-references; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Registry audit, journal and replay tests, CLI stdout and stderr tests, full Loom verification, exact-head review, and readiness pass
- Public or cross-module interfaces: Cortex identifier registry schema, delegated-agent event schema version 3.0.0, runtime activity Cortex references, and compact stderr action summaries
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 786
- Current PR slice and acceptance evidence: Add compact registered Cortex references and sequence-derived action IDs at the surviving delegated-agent journal boundary; Acceptance evidence: focused tests, full Loom verification, Cortex audit, exact-head hosted validation, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: cortex-action-references; Gizmo name: Cortex action references; Predecessor Gizmo ID: None; Add compact registered Cortex references and sequence-derived action IDs at the surviving delegated-agent journal boundary; Estimated authored changed lines: 786; Acceptance evidence: focused tests, full Loom verification, Cortex audit, exact-head hosted validation, and readiness

## Initial plan

1. Integrate the verified AI-owned handoff onto current Main without restoring
   retired workflow surfaces.
2. Run repository pre-push hygiene and promptly publish one focused PR.
3. Stabilize exact-head review, complete hosted validation, and address any
   current-head findings through the owning implementation boundary.
4. Pass readiness, squash-merge, and publish the immutable completion records.

## Completion evidence

- Registry and event-schema tests prove stable, bounded identifiers and reject
  invalid references.
- Delegation journal tests prove persistence-first compact output and replay
  integrity.
- Cortex and full Loom validation pass on the exact PR head.
- The PR is reviewed, ready, squash-merged, and linked from a Workbench worklog.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
