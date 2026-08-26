---
title: Add pure executable source policy
status: ready
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:05:41Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1093
depends_on:
  - issues/executable-skill-capabilities/production-runtime-reachability.md
---

# Add pure executable source policy

## Context

Source capability policy is independent from graph reachability and runtime
containment. Its stale PR must be reconstructed after reachability merges.

## Outcome

A pure TypeScript analysis result denies authority-bearing source capabilities
without launching a process or granting execution authority.

## Scope

- Add the semantic source-policy result and focused tests.
- Accept the dormant provider source under the explicit policy.
- Exclude process execution, container setup, registry authority, and activation.

## Acceptance criteria

- [ ] Forbidden capabilities are denied semantically.
- [ ] Policy evaluation has no process or runtime authority.
- [ ] Provider source acceptance is covered with real values.
- [ ] Focused tests, full validation, and exact-head review pass.

## Progress

- PR #1093 is source material and will be reconstructed after reachability.

## Findings and decisions

- Pure policy must stay independently reviewable from containment.

## References

- `agentic-ai/loom/src/skill-provider-source-policy.ts`
