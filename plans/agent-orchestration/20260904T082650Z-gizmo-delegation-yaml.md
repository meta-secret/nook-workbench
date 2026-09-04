---
title: Structured Gizmo delegation and activity presentation
feature: agent-orchestration
issue: null
started_at: 2026-09-04T08:26:50Z
agent: codex
gizmo_id: gizmo-delegation-yaml
---

# Structured Gizmo delegation and activity presentation

## Interpreted request

Make Gizmo's planned Team Agent work easier to scan and understand. Represent the admitted task graph as formatted YAML with explicit task identity, ownership, meaning, and dependencies. Preserve the compact activity metadata syntax while visually separating it from the following human explanation.

## Requirements

- Render delegation tasks as deterministic YAML in validated request order.
- Expose each stable task identifier, team, human-readable description, and exact dependency identifiers.
- Use `depends_on` for graph edges and retain empty dependency lists.
- Return the visualization through a YAML-specific result contract without a legacy tree alias.
- Fence only the unchanged activity metadata fields; keep descriptions as ordinary Markdown.
- Complete exact-head hosted validation, readiness, squash merge, and Workbench closeout.

## Constraints and exclusions

- Preserve the existing delegation request and dependency-validation semantics.
- Do not infer dependencies from descriptions or parse task identifiers into prose.
- Do not add compatibility or fallback behavior.
- Do not change product, browser, cryptographic, storage, or infrastructure behavior.
- Use one cohesive pull request.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-delegation-yaml
- Estimated authored changed lines: 100
- Owning modules, packages, or layers: Root Cortex communication contract and AI delegation-visualization executable skill
- Ownership units:
1. Capability: Deterministic YAML delegation visualization; Gizmo ID: gizmo-delegation-yaml; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused skill verification and executable-skill host integration test pass
2. Capability: Fenced activity metadata presentation; Gizmo ID: gizmo-delegation-yaml; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact metadata syntax remains unchanged, descriptions remain ordinary Markdown, and Cortex density and pre-push checks pass
- Public or cross-module interfaces: Delegation visualization result kind and field; universal user-visible activity presentation contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 100
- Current PR slice and acceptance evidence: Structured delegation YAML and fenced activity metadata; Acceptance evidence: focused package tests, pre-push hygiene, exact-head hosted validation, review disposition, and readiness audit
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-delegation-yaml; Gizmo name: Structured Gizmo delegation and activity presentation; Predecessor Gizmo ID: None; Structured delegation YAML and fenced activity metadata; Estimated authored changed lines: 100; Acceptance evidence: focused package tests, pre-push hygiene, exact-head hosted validation, review disposition, and readiness audit

## Initial plan

1. Update the delegation visualization result contract and renderer to return formatted YAML.
2. Update focused renderer and executable-skill host tests for exact output and verification.
3. Update the root communication policy so only unchanged metadata is fenced.
4. Run focused owner checks and repository pre-push hygiene.
5. Publish one pull request, complete exact-head validation and review, squash-merge, and publish Workbench completion records.

## Completion evidence

- Focused delegation-visualization verification and host integration checks pass.
- Repository pre-push hygiene accepts the bounded change.
- The exact pull-request head passes required hosted validation and readiness.
- The pull request is squash-merged and linked Workbench records are visible on the default branch.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
