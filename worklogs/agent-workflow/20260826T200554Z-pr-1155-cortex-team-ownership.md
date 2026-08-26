---
title: Partition Cortex by team ownership
feature: agent-workflow
issue: none
plan: plans/agent-workflow/20260826T170640Z-cortex-team-ownership.md
nook_pr: 1155
status: completed
started_at: 2026-08-26T17:06:40Z
finished_at: 2026-08-26T20:05:54Z
agent: codex
---

# Partition Cortex by team ownership

## Outcome

Nook Cortex now has three explicit team roots: development core, SRE, and web
development. Each root owns its instructions, documents, skills, and complete
knowledge graph. The root graph is a common-policy router and cannot bypass a
team graph for team-owned knowledge.

Agent policy now classifies requested functionality before delegation. Bounded
team agents own implementation, tests, Cortex updates, review fixes, and
validation fixes inside their declared scope. Cross-team requirements return
to the delivery owner instead of authorizing foreign-team edits.

PR 1155 was squash-merged as `24eea18ee7d988aff72a6efbde19be131e34dfa8`.

## Progress

- Created `dev-core`, `sre`, and `web-dev` Cortex roots with team-specific
  `AGENTS.md` and `knowledge-graph.md` authorities.
- Moved team-owned architecture, product specifications, references, workflows,
  and dynamic skills under their responsible team.
- Kept repository-wide policy in common root families and reduced the root
  graph to common authorities plus the three team graph entry points.
- Added the team-oriented development authority and executable skill mirrors.
- Updated module experts, repository prompts, skill references, and source/test
  links for canonical team paths.
- Extended Loom Cortex auditing and skill scaffolding to enforce team ownership,
  graph isolation, complete section maps, valid relative links, and unique skill
  placement.

## Implementation problems

- Cross-platform Markdown paths initially retained Windows separators. The
  scaffold now normalizes authored paths and has regression coverage.
- Compact team graph indexes initially omitted section anchors. The audit now
  requires every owned document heading to be indexed, and all three graphs
  include complete section maps.
- Main advanced several times during final delivery. Each stale branch was
  rebased onto the latest Main and revalidated at its new exact head.
- A neighboring explicit-state policy change overlapped one compatibility fix.
  The final rebase retained the upstream authority and dropped the duplicate
  local patch.

## Decisions

- Team directories are ownership boundaries, not merely navigation groups.
- Shared root content is allowed only for genuinely repository-wide policy.
- Team agents may report foreign-team dependencies but may not implement them.
- Shared Git, pull-request, Workbench, validation, and merge state remains
  delivery-owner controlled.
- The migration stayed in one cohesive PR at 2,913 authored changed lines.

## Validation

- `task loom:pre-push` passed on the delivered branch.
- `task loom:cortex-session-clean` passed.
- `task loom:cortex-audit` passed with team ownership and heading coverage.
- Focused Loom team-graph, skill-scaffold, module-expert, and preflight tests
  passed during iteration.
- Exact-head PR run 33007782789 passed on
  `8ab6ded2d0136bf8ee26d4176b90ef580b735354`.
- Repository policy run 33007758833 passed on the same head.
- `task pr:ready PR=1155` reported ready against Main
  `0774070a67def9451aa7c81cd2065c702bbd602a`, with zero unresolved threads.

## Remaining work

None.
