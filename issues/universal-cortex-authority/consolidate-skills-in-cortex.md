---
title: Consolidate skills in Cortex
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-27T09:00:00Z
updated_at: 2026-08-27T09:00:00Z
source_issues: []
related_prs: []
depends_on: ["issues/universal-cortex-authority/replace-vendor-agent-profiles.md"]
---

# Consolidate skills in Cortex

## Context

This is the second slice of [Universal Cortex authority](README.md).

## Outcome

Every reusable project rule has one owning Cortex authority. Vendor skill
directories and symlink mirrors are removed after unique semantics are
preserved.

## Scope

- Promote the unique frontend design guidance to web-development Cortex.
- Replace wrapper references with canonical Cortex links.
- Remove tracked `.agents/skills`, `.cursor/skills`, and `.claude/skills`
  mirrors.
- Remove task, formatting, and optional tooling integration that materializes
  those mirrors.
- Exclude dormant provider implementation cleanup from this slice.

## Acceptance criteria

- [ ] Every former skill name maps to one canonical Cortex authority.
- [ ] No tracked vendor skill mirror remains.
- [ ] Repository entry points explain direct Cortex discovery.
- [ ] Focused documentation, Task, formatting, and policy tests pass.

## Progress

- Waiting for the profile-removal contract.

## Findings and decisions

- Wrapper front matter is not a second source of project semantics.

## References

- `.cortex/teams/ai/dynamic-skills/index.md`
- `.cortex/teams/web-dev/dynamic-skills/ui-design-skills.md`
