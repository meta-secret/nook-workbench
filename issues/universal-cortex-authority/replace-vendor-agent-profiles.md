---
title: Replace vendor agent profiles
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-27T09:00:00Z
updated_at: 2026-08-27T09:00:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1167"]
depends_on: []
---

# Replace vendor agent profiles

## Context

This is the first slice of [Universal Cortex authority](README.md). The accepted
design supersedes the named Codex profile direction previously added to PR
#1167.

## Outcome

Gizmo delegates through explicit, harness-neutral team task contracts. Cortex
remains the only semantic source for team identity and selective context
loading. No repository-owned TOML agent profile remains.

## Scope

- Update Cortex, prompts, Loom catalogs, and preflight contracts.
- Delete project TOML profiles for teams and experts.
- Keep worker creation, model selection, and lifecycle owned by the active
  harness.
- Exclude skill mirror and dormant provider deletion from this slice.

## Acceptance criteria

- [ ] No tracked TOML file remains below `.codex/agents`.
- [ ] Gizmo chooses a team worker and supplies its explicit team identity and
  bounded task contract.
- [ ] Workers load only their team entry points and task-relevant authorities.
- [ ] Loom and preflight validate Cortex roles without vendor profiles.
- [ ] Focused tests, Cortex audit, and formatting pass.

## Progress

- PR #1167 is being revised to implement the superseding design.

## Findings and decisions

- Harness-native profile support is optional integration behavior, not portable
  Cortex authority.

## References

- Nook PR #1167
- `.cortex/gizmo/workflows/subagent-delegation.md`
