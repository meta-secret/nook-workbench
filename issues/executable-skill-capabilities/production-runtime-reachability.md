---
title: Close production runtime reachability
status: ready
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:05:41Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/runnable-configuration-closure.md
---

# Close production runtime reachability

## Context

Production Loom can reach code through imports and subprocess launchers. That
closure must remain unable to execute dormant providers before activation.

## Outcome

The production runtime graph recursively rejects dormant providers, unsafe
aliases, symlinks, unresolved subprocesses, shells, and extensionless scripts.

## Scope

- Traverse production Loom imports and repository-backed aliases.
- Discover child-process, Bun, and wrapper-launched repository scripts.
- Validate executable modes, shells, symlinks, and unresolved paths fail closed.
- Apply the minimal cache-script literal fix exposed by the proof.

## Acceptance criteria

- [ ] Production runtime closure cannot reach dormant providers.
- [ ] Subprocess and extensionless executable paths are recursively checked.
- [ ] Aliases, symlinks, shells, and unresolved paths fail closed.
- [ ] Focused tests, full validation, and exact-head review pass.

## Progress

- Depends on runnable configuration closure.

## Findings and decisions

- This issue completes the preserved behavior of oversized PR #1108.

## References

- `agentic-ai/loom/tests/skill-provider-reachability.test.ts`
