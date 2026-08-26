---
title: Require user initiative for major architectural changes
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T16:03:09Z
updated_at: 2026-08-26T16:03:09Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1142
depends_on: []
---

# Require user initiative for major architectural changes

## Context

An agent-derived executable-skill architecture grew into a large security and
runtime stack before its practical value was established with the user. The
registry rollback is already owned by Nook PR #1142 and its dependency-ordered
successors.

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

- [ ] The canonical rule requires explicit user initiative before implementing
      a major architectural direction derived by an agent.
- [ ] Agents may still analyze risks, alternatives, and bounded proposals.
- [ ] The normal coding workflow applies the decision before implementation
      edits or an implementation-state Workbench record.
- [ ] Cortex documents and the knowledge graph remain consistent.
- [ ] Exact-head repository validation passes.

## Progress

- The executable-skill registry deletion is already present in PR #1142.
- No Nook implementation edits have started for this focused rule.

## Findings and decisions

- This rule is semantic judgment. It belongs in Cortex rather than a
  deterministic Loom check.
- A broad problem statement is not automatic permission to invent and build a
  new subsystem.

## References

- https://github.com/meta-secret/nook/pull/1136
- https://github.com/meta-secret/nook/pull/1142
