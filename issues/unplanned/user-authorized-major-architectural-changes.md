---
title: Require user initiative for major architectural changes
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T16:03:09Z
updated_at: 2026-08-26T18:52:04Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1142
  - https://github.com/meta-secret/nook/pull/1148
  - https://github.com/meta-secret/nook/pull/1154
depends_on: []
---

# Require user initiative for major architectural changes

## Context

An agent-derived executable-skill architecture grew into a large security and
runtime stack before its practical value was established with the user. The
registry rollback was delivered through Nook PR #1142 and its dependency-ordered
successors, ending with PR #1154.

## Outcome

Nook's agent protocol distinguishes bounded implementation judgment from a new
architectural initiative. Agents may investigate and propose major changes.
They may implement one only after the user discusses the problem and explicitly
requests the selected solution.

## Scope

- Add the authorization boundary to the canonical self-improvement protocol.
- Apply the boundary at coding-task intake before implementation planning.
- Define signals for large, novel, cross-module, or security-boundary changes.
- Preserve normal autonomy for bounded work inside an explicitly requested
  solution.
- Leave the separately owned executable-skill rollback PRs unchanged.

## Acceptance criteria

- [x] The canonical rule requires explicit user initiative before implementing
      a major architectural direction derived by an agent.
- [x] Agents may still analyze risks, alternatives, and bounded proposals.
- [x] The normal coding workflow applies the decision before implementation
      edits or an implementation-state Workbench record.
- [x] Cortex documents and the knowledge graph remain consistent.
- [x] Exact-head repository validation passes.

## Progress

- The executable-skill registry and its replacement YAML command registry were
  removed from Main by the separately owned rollback sequence through PR #1154.
- PR #1148 added the user-authorization boundary to the canonical Cortex rule,
  coding workflow, pull-request workflow, and CI planning contract.
- Automated planning now accepts only the trusted `major_change_authorized`
  dispatch input. Unauthorized major initiatives produce a public-safe blocker
  record and skip implementation.
- Exact head `ca39a41758c73c0d8550094c2e228d8afa6405c4` passed repository readiness and
  merged as `1ac6df688fae41db55aefb3d8606259f2e6c7def`.

## Findings and decisions

- This rule is semantic judgment. It belongs in Cortex, with a trusted workflow
  input for automated planning, rather than an executable registry.
- A broad problem statement is not automatic permission to invent and build a
  new subsystem.
- Native Codex or Cursor module delivery is separately owned. Ownership of
  `.cortex/workflows/coding-bro.md` was handed to the harness-native module-DAG
  task after PR #1148 merged; this task did not modify PR #1151 or its validator.

## References

- https://github.com/meta-secret/nook/pull/1136
- https://github.com/meta-secret/nook/pull/1142
- https://github.com/meta-secret/nook/pull/1148
- https://github.com/meta-secret/nook/pull/1154
- https://github.com/meta-secret/nook/actions/runs/33001006775
- https://github.com/meta-secret/nook-workbench/blob/main/worklogs/unplanned/20260826T185204Z-user-authorized-major-architecture.md
