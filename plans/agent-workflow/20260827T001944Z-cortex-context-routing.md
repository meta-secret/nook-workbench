---
title: Add hierarchical Cortex and AI-team routing
feature: agent-workflow
issue: none
started_at: 2026-08-27T00:19:44Z
agent: codex
---

# Add hierarchical Cortex and AI-team routing

## Interpreted request

Replace the visually flat Cortex layout with an explicit hierarchy for four
teams and shared knowledge. Add an AI team for Cortex, Loom, agent skills, and
AI workflows. Make every knowledge graph a readable routing surface instead of
a generated wall of section anchors. Define strict context-loading rules so
each team agent reads only its own entry point and task-relevant authorities.

## Requirements

- Move development core, SRE, web development, and AI under one `teams` parent.
- Move common document families under one concise shared parent.
- Keep only the root agent contract and routing graph at the Cortex root.
- Add an AI knowledge graph for Cortex governance, Loom, agent skills, and AI
  automation.
- Add a shared knowledge graph for genuinely cross-team authorities.
- Rewrite all five child graphs as categorized, purpose-oriented document
  catalogs without repeated per-heading link chains.
- Keep section-level navigation inside each document's own heading hierarchy.
- Require team agents to load only their team contract, team graph, and exact
  task-relevant documents.
- Prohibit eager loading of the shared corpus or foreign-team documents.
- Route cross-team dependencies and shared integration through the delivery
  owner.
- Place Cortex authoring and consistency skills, agent ownership and delivery
  skills, agent workflows, Loom guidance, and expert registries with the AI
  team.
- Update executable skills, prompts, module experts, source references, and
  mechanical audits for every canonical path change.
- Add regression tests for hierarchy, ownership, graph readability, and
  selective context-loading rules.

## Constraints and exclusions

- Preserve existing product, security, architecture, and workflow meaning.
- Do not weaken Rust/WASM ownership or cross-team write boundaries.
- Do not make Markdown or model output an executable scheduler.
- Do not use the AI team as a replacement for genuinely shared product or
  system architecture.
- Do not retain compatibility aliases for obsolete Cortex paths.
- Shared lifecycle state remains delivery-owner controlled.
- This task changes documentation organization and agent routing, not product
  behavior or production infrastructure.
- The active task environment has no bounded worker facility, so the delivery
  owner will execute the shared migration serially.

## Change budget and PR sequence

- Estimated authored changed lines: 3,000
- Owning modules, packages, or layers: Cortex hierarchy, knowledge graphs,
  executable skill mirrors, module-expert context routing, Loom Cortex audit,
  repository entry points, and path-contract tests
- Public or cross-module interfaces: root routing graph, shared graph, three
  team graphs, canonical Cortex paths, and agent context-loading contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 3,000
- Current PR slice and acceptance evidence: Hierarchical Cortex and AI-team migration; Acceptance evidence: exact path inventory, readable graph review, no orphan documents, valid links, selective-loading policy checks, focused Loom tests, exact-head hosted validation, review resolution, and readiness
- PR slices and acceptance evidence: Hierarchical Cortex and AI-team migration; Acceptance evidence: exact path inventory, readable graph review, no orphan documents, valid links, selective-loading policy checks, focused Loom tests, exact-head hosted validation, review resolution, and readiness

## Initial plan

1. Freeze current Main and inventory graph, path, skill, prompt, and audit
   consumers.
2. Define the root, shared, AI, and product-team navigation contracts.
3. Move common documents under `shared` and all four teams under `teams`.
4. Repair all canonical links and executable-skill mirrors.
5. Rewrite the root, shared, and team graphs for concise semantic routing.
6. Strengthen team-agent context selection and cross-team escalation rules.
7. Replace heading-duplication enforcement with document ownership,
   categorization, and selective-loading checks.
8. Run Cortex, Loom, preflight, review, exact-head delivery, and readiness
   gates.
9. Squash-merge and publish the linked Workbench completion records.

## Completion evidence

- `.cortex` exposes `teams` and `shared` as the only durable knowledge roots.
- AI-owned Cortex, Loom, and agent guidance is routed through the AI graph.
- Root routing links only to shared and team graphs.
- Every Cortex article has exactly one owning child graph.
- Team graphs are concise categorized catalogs without section-anchor walls.
- Agent contracts explicitly reject eager or foreign-team context loading.
- Every old canonical Cortex path is removed from active repository references.
- Loom audits and focused tests enforce the new hierarchy.
- The implementation PR is review-clean, exact-head green, ready, and merged.

## Safety review

- This plan contains only public repository architecture and workflow intent.
- It contains no raw prompt, transcript, credentials, private data, raw logs,
  local paths, or unnecessary infrastructure details.
