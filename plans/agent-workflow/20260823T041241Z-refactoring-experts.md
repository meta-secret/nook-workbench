---
title: Add structural refactoring experts
feature: agent-workflow
issue: issues/agent-workflow/refactoring-experts.md
started_at: 2026-08-23T04:12:41Z
agent: codex
---

# Add structural refactoring experts

## Interpreted request

Add a small family of callable experts that continuously improves structural
quality without confusing diagnosis with write authority. One expert owns code
structure. One owns Cortex knowledge structure. A third owns coherence where
source, documentation, architecture, skills, tests, and deterministic Loom
behavior intersect.

## Requirements

- Provide stable names for code, Cortex, and system coherence refactoring.
- Give each role a precise responsibility and negative space.
- Route every role through a read-only, non-delegating execution boundary.
- Return typed findings, conflicts, legacy candidates, refactoring order,
  validation evidence, risks, unresolved decisions, and parent actions.
- Let the Cortex role classify deterministic Markdown instructions for typed
  Loom extraction while retaining semantic judgment in Cortex.
- Preserve the depth-three maximum and delivery-owner lifecycle authority.
- Add deterministic audits and adversarial tests for role, scope, capability,
  and output-schema drift.

## Constraints and exclusions

- The roles do not edit the repository in this slice.
- The roles do not schedule descendants or parse Markdown into executable
  topology.
- The system coherence role does not become an unbounded catch-all agent.
- Module-specific API analysis remains with registered module experts.
- Hive remains outside local development orchestration.
- No product behavior is changed.

## Change budget and PR sequence

- Estimated authored changed lines: 4200
- Owning modules, packages, or layers: project Codex roles, Cortex agent architecture and skills, Loom expert catalog, typed result codecs, isolated invocation, and deterministic audits
- Public or cross-module interfaces: stable refactoring expert names, exact context profiles, typed RefactoringExpertEvidence, and read-only invocation contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 4200
- Current PR slice and acceptance evidence: Read-only structural refactoring expert family; Acceptance evidence: role discovery, exact scope audits, typed output codec tests, isolated invocation tests, Cortex audit, exact-head hosted checks, review, and readiness
- PR slices and acceptance evidence:
1. Read-only structural refactoring expert family; Acceptance evidence: role discovery, exact scope audits, typed output codec tests, isolated invocation tests, Cortex audit, exact-head hosted checks, review, and readiness

## Initial plan

1. Audit the merged named-expert architecture and split responsibilities among
   code, Cortex, and cross-system coherence roles.
2. Freeze stable role names, exact context scopes, negative space, and typed
   evidence before implementation.
3. Add thin project roles, canonical Cortex guidance, and executable skill
   mirrors.
4. Extend Loom catalog, codec, invocation, and audit boundaries without
   weakening module-expert isolation.
5. Add adversarial tests, validate, review, merge, and publish completion
   records.

## Completion evidence

- All three roles are discoverable and deterministic audits report zero drift.
- Successful invocations require exact typed evidence and preserve provenance.
- Cortex and executable skills agree with runtime behavior.
- Exact-head hosted validation, review, readiness, and squash merge pass.
- The feature issue, plan-linked worklog, and PR statistics are visible in
  Workbench.

## Safety review

- This public record contains only the task owner's architectural
  interpretation and delivery boundaries.
