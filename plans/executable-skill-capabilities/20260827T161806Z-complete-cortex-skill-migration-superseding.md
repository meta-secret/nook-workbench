---
title: Complete Cortex skill migration
feature: executable-skill-capabilities
issue: none
started_at: 2026-08-27T16:18:06Z
agent: codex
---

# Task plan

## Interpreted request

Finish the transition to Cortex as the universal semantic authority for project skills. Remove tracked harness-specific skill directories and mirrors. Preserve deterministic behavior by relocating it to Loom. Correct every active consumer without retaining a second semantic source of truth.

## Requirements

- Keep every durable skill rule in its responsible Cortex authority.
- Remove tracked `.agents/skills`, `.cursor/skills`, and `.claude/skills` content.
- Preserve and test the relocated Cortex article provider in Loom.
- Remove active formatting, hook, Task, workflow, documentation, and scaffold dependencies on the deleted trees.
- Enforce the absence of tracked harness skill mirrors.
- Complete regular pull-request review, validation, readiness, and squash merge.

## Constraints and exclusions

- The integrated implementation already contains the complete requested functionality.
- Generic negative fixtures may retain prohibited path strings when they test fail-closed enforcement.
- Obsolete provider-test cleanup beyond the requested migration is excluded from this PR.
- No product, security, deployment, or model-selection behavior changes.
- The current PR may not exceed 3,000 authored changed lines.
- Any correction that would cross the ceiling requires a semantic split before integration.

## Change budget and PR sequence

- Estimated authored changed lines: 2,850
- Owning modules, packages, or layers: Cortex skill governance, Loom article provider and scaffolding, repository entry points, formatting policy, and preflight authority enforcement
- Ownership units:
1. Capability: Universal Cortex skill authority and removal of harness-specific mirrors; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no tracked project skill mirrors, canonical Cortex cards remain reachable, relocated deterministic capability tests pass, active consumers are clean, and exact-head delivery succeeds
- Public or cross-module interfaces: repository skill discovery contract, Loom skill scaffolding, Cortex audit behavior, and repository formatting policy
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,850
- Current PR slice and acceptance evidence: Complete harness-neutral skill migration; Acceptance evidence: 2,778-line integrated inventory, no tracked mirror trees, preserved provider tests, active-reference audit, Cortex audit, focused Loom and preflight checks, pre-push hygiene, exact-head hosted validation, review resolution, and readiness
- PR slices and acceptance evidence: Complete harness-neutral skill migration; Acceptance evidence: 2,778-line integrated inventory, no tracked mirror trees, preserved provider tests, active-reference audit, Cortex audit, focused Loom and preflight checks, pre-push hygiene, exact-head hosted validation, review resolution, and readiness

## Initial plan

1. Keep the accepted four-commit integration unchanged unless focused validation finds a real defect.
2. Run focused Cortex, Loom, preflight, formatting, and policy checks.
3. Reject corrections that exceed the remaining PR budget until a semantic split is materialized.
4. Run pre-push hygiene and advisory review.
5. Open a regular PR, stabilize feedback, validate the exact head, audit readiness, and squash merge.

## Completion evidence

- Git tracks no project skill mirror tree.
- Canonical Cortex skill authorities remain reachable through team graphs.
- Deterministic article-provider behavior runs from Loom and passes its tests.
- Active repository guidance and automation do not recreate deleted mirrors.
- The PR remains below 3,000 authored changed lines and is review-clean, exact-head green, ready, and merged.

## Safety review

- This record contains only public repository architecture, scope, ownership, and validation intent.
- It contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
