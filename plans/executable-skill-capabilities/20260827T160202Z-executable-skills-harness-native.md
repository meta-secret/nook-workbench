---
title: Restore executable skill applications and harness-native agents
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/discoverable-yaml-protocol.md
started_at: 2026-08-27T16:02:02Z
agent: codex
---

# Task plan

## Interpreted request

Establish skills as the canonical owners of deterministic agent-facing
applications. Restore a discoverable YAML command boundary, migrate
skill-specific mechanics out of Loom, and remove repository-owned native
subagent execution in favor of the active harness. Preserve deterministic
task-contract and Git-safety validation throughout the migration.

## Requirements

- Provide MCP-like command discovery with exact domain-YAML examples, schemas,
  resolved examples, strict decoding, and YAML-only results.
- Give every executable skill a normal Bun and TypeScript project structure,
  focused tests, and all repository TypeScript quality rules.
- Activate the existing Cortex article-structure provider and remove its
  duplicate Loom implementation with exact diagnostic parity.
- Move deterministic Cortex, repository-policy, delivery-inspection, expert,
  and subagent-contract mechanics into their owning skills.
- Keep semantic judgment in Cortex and agents.
- Keep native worker creation, communication, scheduling, retries,
  cancellation, barriers, and synthesis in the active harness.
- Preserve mandatory gates, exact-baseline checks, bounded task contracts,
  resource claims, handoff verification, and integration provenance.
- Deliver every slice through focused tests, exact-head review, hosted
  validation, readiness, merge, and Workbench records.

## Constraints and exclusions

- Do not use Docker, DinD, nested daemons, privileged runtime access, or host
  runtime sockets for skill execution.
- Do not allow manifests or YAML to choose arbitrary commands, imports,
  topology, permissions, models, or delivery authority.
- Do not move GitHub, Workbench, push, review-resolution, validation-dispatch,
  readiness, or merge authority out of Gizmo.
- Do not duplicate shared ESLint rules inside individual skills.
- Do not change product behavior, cryptographic boundaries, Hive, or browser
  presentation.

## Change budget and PR sequence

- Estimated authored changed lines: 18000
- Owning modules, packages, or layers: executable skill applications, shared skill command protocol, Loom mechanical leaves, expert contracts, subagent delegation validation, Task entrypoints, AI Cortex architecture and workflows
- Ownership units:
1. Capability: Executable skill applications and harness-native agent tooling; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused Bun tests, skill and Loom verification, Cortex audit, exact-head review, hosted validation, and readiness for each slice
- Public or cross-module interfaces: discoverable skill domain-YAML protocol, executable-skill manifest and command catalog, expert task and evidence contracts, subagent plan and handoff validation contracts
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 2200
- Current PR slice and acceptance evidence: Restore the discoverable YAML protocol, activate Cortex article structure, and remove its Loom duplicate; Acceptance evidence: command discovery and negative codec tests, exact article diagnostic parity, skill and Loom verification, Cortex audit, exact-head review, hosted validation, and readiness pass.
- PR slices and acceptance evidence:
1. Restore the discoverable YAML protocol, activate Cortex article structure, and remove its Loom duplicate; Acceptance evidence: command discovery and negative codec tests, exact article diagnostic parity, skill and Loom verification, Cortex audit, exact-head review, hosted validation, and readiness pass.
2. Move Cortex writer, document-map, consistency, dynamic-skill, and self-improvement mechanics into their skills; Acceptance evidence: existing diagnostics and migration behavior remain compatible, focused filesystem tests pass, and Loom contains no migrated implementation.
3. Move dependency, source-size, repository-language, pre-push, and static extension-release mechanics into their skills; Acceptance evidence: mandatory gates remain registered, typed capability tests pass, and no product or security boundary changes.
4. Move review inspection, readiness calculation, and agent statistics into delivery skill applications; Acceptance evidence: pagination and exact-head tests pass, schemas remain compatible, and external mutations remain Gizmo-only.
5. Move module, internal-API, structural, and team expert catalogs and codecs into their owning skills; Acceptance evidence: complete routing and bounded-context tests pass and Loom starts no expert runtime.
6. Move task-plan, lineage, resource-claim, baseline, handoff, and integration validation into subagent-delegation; Acceptance evidence: existing fail-closed Git and contract tests pass through discoverable skill commands.
7. Remove Loom native-agent schedulers, Codex adapters, lifecycle journals, barriers, and obsolete Task commands; Acceptance evidence: the active harness is the sole worker lifecycle owner, optional evidence is non-authoritative, Cortex and Task contracts agree, and complete validation passes.

## Initial plan

1. Deliver the command protocol and article provider as the stable foundation.
2. Migrate deterministic leaves in ownership-cohesive slices without changing
   their observable findings or mandatory registration.
3. Extract expert and subagent contract validation before deleting Loom model
   invocation and scheduling paths.
4. Validate, review, merge, and record each exact-head slice before starting
   its dependent successor from current main.

## Completion evidence

- Agents can discover and invoke every migrated skill command through one
  strict domain-YAML protocol.
- Skill packages contain the canonical deterministic implementations and
  focused tests.
- Loom contains no skill-specific mechanic or native development-agent
  lifecycle implementation without a documented generic justification.
- The active harness owns all native subagent lifecycle operations.
- All ordered PRs merge with exact-head checks, Workbench worklogs, and final
  feature acceptance.

## Safety review

This plan is a public-safe interpretation. It excludes copied conversation
text, sensitive material, private data, command output, machine-specific paths,
internal addresses, and unnecessary infrastructure detail.
