---
title: Typed module context and read-only DAG planning
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-26T19:40:15Z
source_issues: []
related_prs: [1151, 1152]
depends_on:
  - issues/agent-workflow/named-module-subagent-foundation.md
---

# Typed module context and read-only DAG planning

## Context

Named experts need fresh exact-baseline context and a feature-specific module
graph before they can safely participate in implementation.

## Outcome

Nook validates and dry-runs a reviewed module delivery DAG whose nodes identify
consumer-driven API contracts, expert profiles, resources, dependencies,
acceptance evidence, and parent-owned joins.

## Scope

- Add typed module API contracts, work nodes, expert context bundles, and plan
  validation.
- Assemble bounded context from current manifests, public entry points,
  consumers, Cortex anchors, relevant skills, tests, and accepted inputs.
- Add a general read-only module DAG and deterministic ready-wave projection.
- Keep optional human evidence separate from harness-owned agent lifecycle.
- Keep Markdown and Workbench records as semantic views, not scheduler inputs
  or continuation prerequisites.
- Exclude repository writes.

## Acceptance criteria

- [x] Validation rejects cycles, missing contracts, unsupported experts,
      overlapping resources, and depth above three.
- [x] Dry-run output is stable for the same exact source commit and plan.
- [x] Expert context is bounded, source-aware, and content-hashed.
- [x] Tests distinguish dependency DAG edges from single-parent attempt
      lineage.
- [x] Focused local validation and independent review passed before squash
      merge. Hosted validation was intentionally excluded by task authority.

## Progress

- Native Codex and Cursor subagent results can drive ordinary continuation
  without repository-authored lifecycle records.
- A strict JSON plan validator now returns deterministic topology, waves, and
  digest while rejecting invalid ownership, baselines, edges, resources, and
  hierarchy limits.
- Squash-merged Nook PRs
  [#1151](https://github.com/meta-secret/nook/pull/1151) and
  [#1152](https://github.com/meta-secret/nook/pull/1152).

## Findings and decisions

- Discovered dependencies provide context. Only the reviewed typed plan owns
  module dependency order.
- The active harness owns its parent-child tree, dispatch, communication,
  retries, cancellation, and barriers.

## References

- `agentic-ai/loom/src/agent-workflow/`
- `.cortex/design-docs/agent-workflow-orchestration.md`
