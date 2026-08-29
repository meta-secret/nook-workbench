---
title: Complete remote-first trusted publisher enforcement
feature: pr-delivery-efficiency
issue: null
started_at: 2026-08-29T18:26:33Z
agent: codex
gizmo_id: remote-first-agent-validation
---

# Task plan

## Interpreted request

Finish the existing remote-first delivery-policy pull request by aligning the remaining team-specific Cortex callers, then complete hosted review, validation, readiness, and merge. Preserve the separate active ownership of delegation-runtime work.

## Requirements

- Keep minimal pre-push hygiene as the only required host gate.
- Require team workers to return coherent committed handoffs without changing pull-request or validation state.
- Keep Gizmo responsible for integration, pre-push hygiene on the integrated head, prompt push, remote execution, complete validation, readiness, and merge.
- Remove remaining team-specific instructions that require worker-side pushes, local product gates, or worker-owned PR validation.
- Preserve focused remote tasks as optional iteration aids and require fresh hosted evidence for every replacement head.
- Complete pull request 1208 through remote checks, review resolution, readiness, and merge.
- Enforce strict isolation for the weekly Rust dependency editor and run its integrated checks through trusted remote host tooling before publication.

## Constraints and exclusions

- Do not edit ordinary delegation runtime implementation, contracts, tests, or documentation owned by the separate active task.
- Change only the weekly Rust dependency workflow, its CI-agent fix harness, prompt, and focused tests where required to enforce the documented trusted-publisher boundary. Do not change clusters, product behavior, or unrelated Taskfiles and workflows.
- Each team changes only its own Cortex authority files.
- Preserve unrelated work and current mainline changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: remote-first-agent-validation
- Estimated authored changed lines: 1500
- Owning modules, packages, or layers: Root delivery policy, trusted implementation and dependency-update prompts, CI-agent fix harness, weekly dependency workflow, and AI, development-core, security, web-development, and SRE Cortex authorities
- Ownership units:
1. Capability: Root, AI, CI-agent, and trusted automated publisher remote-first lifecycle; Gizmo ID: remote-first-agent-validation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Root and AI authorities preserve ordinary worker handoffs and Gizmo-owned remote delivery while exactly two trusted GitHub Actions publishers strictly isolate bounded editors, validate and publish their isolated changes, then return continuing ownership to Gizmo
2. Capability: Development-core worker handoff guidance; Gizmo ID: remote-first-agent-validation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Development-core skills no longer instruct workers to push or trigger validation
3. Capability: Extension-security worker handoff guidance; Gizmo ID: remote-first-agent-validation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security guidance retains fast focused proof while returning delivery ownership to Gizmo
4. Capability: Web worker handoff guidance; Gizmo ID: remote-first-agent-validation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Web references and skills distinguish worker proof from Gizmo-owned remote delivery
5. Capability: Remote-execution and trusted dependency-updater workflow; Gizmo ID: remote-first-agent-validation; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: SRE authorities assign ordinary integrated push and validation operations to Gizmo while the weekly remote GitHub Actions updater opts into strict editor isolation and trusted pre-publication validation
- Public or cross-module interfaces: Agent handoff, trusted CI-agent fix profile, integrated pre-push, focused remote-task, exact-head validation, readiness, and merge lifecycle
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1500
- Current PR slice and acceptance evidence: Complete remote-first Cortex and trusted automated-publisher enforcement across indexed callers; Acceptance evidence: CI-agent focused tests, Cortex audit, minimal pre-push hygiene, exact-head Cloud review, hosted repository checks, readiness, and merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: remote-first-agent-validation; Gizmo name: Remote-first agent validation; Predecessor Gizmo ID: None; Complete remote-first Cortex and trusted automated-publisher enforcement across indexed callers; Estimated authored changed lines: 1500; Acceptance evidence: CI-agent focused tests, Cortex audit, minimal pre-push hygiene, exact-head Cloud review, hosted repository checks, readiness, and merge

## Initial plan

1. Integrate the completed team-owned Cortex handoffs and the comprehensive review-stabilization batch.
2. Run minimal pre-push hygiene and publish one coherent replacement head with immediate remote evidence.
3. Resolve exact-head review feedback, complete hosted validation and readiness, merge pull request 1208, and publish completion records.

## Completion evidence

- No indexed team worker authority requires worker-side push or validation control.
- The separate delegation-runtime task remains untouched.
- Remote repository policy and complete pull-request checks pass on the final exact head.
- Review threads are handled, readiness succeeds, and pull request 1208 is merged.

## Safety review

This plan contains no raw prompt or transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
