---
title: Split the Cortex document-map application into a verified stack
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/cortex-document-map-capability.md
started_at: 2026-08-31T01:41:57Z
agent: codex
gizmo_id: cortex-document-map-foundation
---

# Split the Cortex document-map application into a verified stack

## Interpreted request

Complete the owner-local document-map migration without exceeding the PR limit
or weakening independent result verification. Land a dormant, fully verified
provider foundation first, then activate it and remove the Loom implementation.

## Requirements

- Keep each PR below 2,000 authored lines and each source below 1,000 lines.
- Give the provider strict request/result codecs and a genuinely separate
  semantic verification engine with tamper tests.
- Preserve exact Cortex diagnostics and mandatory fail-closed auditing.
- Activate only through the reviewed static YAML host registry.

## Constraints and exclusions

- No Team Plan, module-delivery, expert-runtime, statistics, or native-agent
  lifecycle changes.
- No local Rust or product builds.
- PR A must be independently mergeable and must not activate the action.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: cortex-document-map-foundation
- Estimated authored changed lines: 2500
- Owning modules, packages, or layers: AI Cortex document-map provider foundation, static executable-skill host integration, and Loom Cortex-audit aggregation seam.
- Ownership units:
1. Capability: Verified Cortex document-map provider foundation; Gizmo ID: cortex-document-map-foundation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: regular TypeScript package, strict codecs, independent semantic verification, parity and tamper tests, package quality gates, exact-head review and readiness
2. Capability: Cortex document-map provider activation; Gizmo ID: cortex-document-map-activation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: discoverable static YAML action, mandatory Cortex aggregation through the provider, old Loom implementation removed, automatic source audit complete, exact-head review and readiness
- Public or cross-module interfaces: Provider request/result contracts and static cortexDocumentMap.audit discovery.
- Delivery shape: Multiple PRs
- PR sequence mode: Stacked PRs
- Current PR estimated authored changed lines: 1550
- Current PR slice and acceptance evidence: Dormant verified Cortex document-map provider foundation; Acceptance evidence: package format, lint, typecheck and tests, diagnostic parity, independent verifier tamper coverage, source and size policy, exact-head hosted validation and clean review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: cortex-document-map-foundation; Gizmo name: Cortex document-map foundation; Predecessor Gizmo ID: None; Dormant verified Cortex document-map provider foundation; Estimated authored changed lines: 1550; Acceptance evidence: package format, lint, typecheck and tests, diagnostic parity, independent verifier tamper coverage, source and size policy, exact-head hosted validation and clean review
2. Gizmo ID: cortex-document-map-activation; Gizmo name: Cortex document-map activation; Predecessor Gizmo ID: cortex-document-map-foundation; Activate the provider and remove Loom document-map semantics; Estimated authored changed lines: 950; Acceptance evidence: static YAML discovery and execution tests, mandatory Cortex audit parity, automatic package source audit, Loom compatibility, exact-head hosted validation, clean review and readiness

## Initial plan

1. Materialize separate foundation and activation issues.
2. Rebuild the current implementation as two native stacked branches.
3. Validate and merge the foundation, retarget and validate activation, then
   close both Workbench issues with worklogs and immutable statistics.

## Completion evidence

- Two merged exact-head PRs below the size limit.
- Independent provider verification and adversarial coverage.
- Discoverable activation with old Loom semantics removed.
- Published Workbench issue, worklog, and statistics records.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs,
local paths, or unnecessary infrastructure details.
