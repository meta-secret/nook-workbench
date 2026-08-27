---
title: Add cross-team expertise delegation
feature: agent-workflow
issue: none
started_at: 2026-08-27T02:36:07Z
agent: codex
---

# Add cross-team expertise delegation

## Interpreted request

Extend team-oriented development with a matrix ownership model. A functional
team keeps authority over its capability while an explicitly selected expert
team may own a bounded implementation unit inside that capability. Make web
development the owner of general TypeScript engineering practices and allow AI
work to request web-development implementation expertise for Loom and other AI
TypeScript code.

## Requirements

- Distinguish functional ownership from implementation-expertise ownership.
- Require a frozen provider contract, exact write scope, tests, and acceptance
  evidence before an expertise provider edits consumer-team code.
- Treat the delegated unit as the provider team's owned task scope rather than
  an unauthorized foreign-team edit.
- Keep capability semantics, final acceptance, shared integration, and delivery
  lifecycle with the functional owner and delivery owner.
- Route review and validation fixes for the delegated implementation back to
  the expertise provider.
- Move TypeScript domain structure, explicit state, named arguments, concrete
  values, and single-parameter guidance to web development.
- Keep source-size, testing, library-selection, and repository automation
  language policy in shared Cortex.
- Update executable skill mirrors, direct callers, knowledge graphs, and
  deterministic ownership checks.

## Constraints and exclusions

- Cross-team expertise must require explicit delegation. It is not blanket
  permission to modify another team's files or Cortex.
- The expertise provider must not redefine the consumer capability or edit the
  consumer team's Cortex authority.
- Shared lifecycle state remains parent-owned.
- This change updates agent policy and enforcement. It does not change product
  behavior, production infrastructure, or executable scheduling topology.
- The active environment has no bounded child-worker facility, so the delivery
  owner will implement this policy slice serially while preserving team
  boundaries.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: Cortex team ownership, team contracts, TypeScript dynamic skills, executable skill mirrors, Loom Cortex audit, and preflight ownership contracts
- Public or cross-module interfaces: functional-owner and expertise-provider task contract; canonical TypeScript skill paths
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Matrix expertise delegation and TypeScript skill ownership; Acceptance evidence: Cortex audit, Loom tests, preflight contracts, exact-head hosted validation, and readiness
- PR slices and acceptance evidence: Matrix expertise delegation and TypeScript skill ownership; Acceptance evidence: Cortex audit, Loom tests, preflight contracts, exact-head hosted validation, and readiness

## Initial plan

1. Freeze the functional-owner and expertise-provider contract.
2. Update root and team agent contracts for explicit delegated write scopes.
3. Move web-owned TypeScript skills and repair every direct caller.
4. Update Loom and preflight assertions for the matrix boundary.
5. Run Cortex, Loom, formatting, review, exact-head validation, and readiness.
6. Squash-merge and publish the linked Workbench completion records.

## Completion evidence

- AI work can request a web-development TypeScript implementation unit without
  transferring AI capability ownership.
- An expert provider cannot change consumer semantics, Cortex, shared state, or
  unspecified files.
- Web development indexes all five general TypeScript engineering skills.
- Shared Cortex retains only genuinely cross-team engineering policy.
- No active caller references the old TypeScript skill paths.
- Mechanical audits and hosted checks pass on the merged exact head.

## Safety review

- This plan contains only public repository architecture and workflow intent.
- It contains no raw prompt, transcript, credentials, private data, raw logs,
  local paths, or unnecessary infrastructure details.
