---
title: Typed Gizmo delegation document and activity presentation
feature: agent-orchestration
issue: null
started_at: 2026-09-04T08:59:33Z
agent: codex
gizmo_id: gizmo-delegation-yaml
---

# Typed Gizmo delegation document and activity presentation

## Interpreted request

Represent Gizmo's admitted Team Agent graph as typed domain objects and let the trusted executable-skill host serialize those objects as YAML. Keep the compact activity metadata syntax, visually isolate it in a text fence, and leave the explanation as ordinary Markdown.

## Requirements

- Construct class-backed delegation, Gizmo, and task document models.
- Preserve stable task identifiers, team ownership, descriptions, dependency edges, and request order.
- Use the trusted host's established YAML library as the only YAML serializer.
- Keep handwritten YAML and self-serialization parsing out of the executable skill.
- Independently verify exact typed class identities, fields, values, and order.
- Preserve the approved `Gizmo Prime` activity actor and fenced metadata presentation.
- Resolve current review findings, revalidate the replacement head, prove readiness, squash-merge, and publish Workbench completion records.

## Constraints and exclusions

- Preserve existing request validation and dependency semantics.
- Do not add runtime package authority to the read-only executable skill.
- Do not add a legacy tree or YAML-string compatibility result.
- Reject YAML-non-printable input at admission.
- Use one cohesive pull request and no product, browser, storage, cryptographic, or infrastructure changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-delegation-yaml
- Estimated authored changed lines: 370
- Owning modules, packages, or layers: Root Cortex communication contract, Gizmo delegation workflow, AI delegation-visualization skill, and trusted executable-skill host integration test
- Ownership units:
1. Capability: Typed delegation plan document; Gizmo ID: gizmo-delegation-yaml; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Class identity, exact-field, order, special-character, response-bound, and host serialization tests pass
2. Capability: Fenced activity metadata and delegation publication guidance; Gizmo ID: gizmo-delegation-yaml; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Canonical actor and consumer terminology are consistent and Cortex validation passes
- Public or cross-module interfaces: Delegation visualization result kind and typed document; universal user-visible activity presentation contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 370
- Current PR slice and acceptance evidence: Typed delegation document serialized by the trusted YAML host and fenced activity metadata; Acceptance evidence: focused skill and host tests, capability audit, pre-push hygiene, exact-head hosted validation, review disposition, and readiness audit
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-delegation-yaml; Gizmo name: Typed Gizmo delegation and activity presentation; Predecessor Gizmo ID: None; Typed delegation document serialized by the trusted YAML host and fenced activity metadata; Estimated authored changed lines: 370; Acceptance evidence: focused skill and host tests, capability audit, pre-push hygiene, exact-head hosted validation, review disposition, and readiness audit

## Initial plan

1. Replace the inner string renderer with class-backed delegation document models.
2. Verify typed output independently and serialize it only through the trusted host YAML library.
3. Align communication and delegation workflow guidance with the selected result contract.
4. Validate response bounds, hostile scalar input, formatting, types, lint, and executable-skill capabilities.
5. Publish the replacement head, resolve review threads, complete exact-head validation and readiness, squash-merge, and publish completion records.

## Completion evidence

- Focused skill and host checks pass without handwritten YAML in changed production code.
- Repository policy and exact-head review accept the replacement head.
- Readiness passes and PR #1320 is squash-merged.
- Linked Workbench plan, worklog, and agent statistics are visible on the default branch.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
