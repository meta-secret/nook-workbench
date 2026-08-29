---
title: Enforce readable Cortex writing
feature: cortex-authoring
issue: null
started_at: 2026-08-29T18:56:21Z
agent: codex
gizmo_id: cortex-writer-enforcement
---

# Task plan

## Interpreted request

Repair the Cortex authoring path that admitted dense wrapped prose. Rewrite the
affected SRE workflow guidance into short structured rules. Make the writer
policy discoverable and mechanically enforce paragraph-aware density checks.

## Requirements

- Rewrite the stacked-workflow section without changing its operational meaning.
- Route teams that author Cortex to the canonical writer policy.
- Detect dense sentences across Markdown line wrapping.
- Do not exempt list items from sentence-density checks.
- Run density enforcement automatically for changed Cortex Markdown.
- Add regression coverage for wrapped prose and structured-list behavior.
- Deliver one exact-head PR through review, validation, readiness, merge, and
  Workbench completion.

## Constraints and exclusions

- Preserve SRE ownership of CI workflow semantics.
- Preserve AI ownership of Cortex governance and Loom audits.
- Do not change the stacked workflow implementation or security boundary.
- Do not rewrite unrelated Cortex documents in this slice.
- Preserve unrelated worktrees and active agent work.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: cortex-writer-enforcement
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: AI Cortex governance, Loom density audit,
  Loom tests, and SRE CI operations guidance
- Ownership units:
1. Capability: Cortex writer routing and paragraph-aware enforcement; Gizmo ID: cortex-writer-enforcement; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused Loom density tests prove wrapped paragraphs and dense list items are detected, changed Cortex files enable density validation, and writer routing is explicit
2. Capability: Readable stacked-workflow operations guidance; Gizmo ID: cortex-writer-enforcement; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The affected section uses short structured rules while preserving every branch, trust boundary, and failure condition
- Public or cross-module interfaces: Cortex audit density behavior and team
  Cortex-authoring context
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Repair routing, enforcement, tests, and the affected SRE prose; Acceptance evidence: focused and repository-wide Loom checks plus exact-head PR delivery
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: cortex-writer-enforcement; Gizmo name: Cortex Writer enforcement; Predecessor Gizmo ID: None; Repair routing, enforcement, tests, and the affected SRE prose; Estimated authored changed lines: 300; Acceptance evidence: focused and repository-wide Loom checks plus exact-head PR delivery

## Initial plan

1. Freeze Main and publish this immutable ownership plan.
2. Let AI implement writer routing, paragraph-aware density enforcement, and
   regression tests.
3. Integrate the AI handoff, then let SRE rewrite its workflow section against
   that exact frontier.
4. Run formatting, Loom validation, Cortex audits, and advisory review.
5. Push one PR, complete exact-head validation, pass readiness, squash-merge,
   and publish the Workbench worklog.

## Completion evidence

- Wrapped multi-line sentences are audited as complete Markdown prose.
- Dense list items are no longer skipped.
- Cortex-authoring agents receive the writer rule without opening a foreign
  team graph.
- The reported SRE section is expressed as short structured rules.
- Focused tests and full Loom checks pass.
- The exact-head PR is reviewed, validated, ready, merged, and recorded.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
