---
title: Close runnable configuration reachability
status: ready
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:05:41Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/finite-loader-specialization.md
---

# Close runnable configuration reachability

## Context

Tracked configuration can launch scripts and GitHub actions outside Loom's
production import graph. It needs its own complete reachability contract.

## Outcome

Package scripts, Taskfiles, workflows, local actions, and nested actions cannot
reach dormant providers through scripts, aliases, symlinks, or action hooks.

## Scope

- Inventory runnable tracked configuration surfaces.
- Follow JavaScript action main, pre, post, composite, and nested local actions.
- Follow configuration-launched scripts and reject unsupported repository paths.
- Exclude Loom production imports and subprocess discovery.

## Acceptance criteria

- [ ] Every runnable configuration surface is inventoried.
- [ ] Local action and script closure fails closed on missing or unsafe paths.
- [ ] Symlink and extensionless execution behavior is covered.
- [ ] Focused tests, full validation, and exact-head review pass.

## Progress

- Depends on finite loader specialization.

## Findings and decisions

- Configuration reachability is a separate root set from production Loom.

## References

- `agentic-ai/loom/tests/skill-provider-config-boundary.test.ts`
