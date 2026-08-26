---
title: Close production runtime reachability
status: done
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T09:40:27Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1124
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

- [x] Production runtime closure cannot reach dormant providers.
- [x] Subprocess and extensionless executable paths are recursively checked.
- [x] Aliases, symlinks, shells, and unresolved paths fail closed.
- [x] Focused tests, full validation, and exact-head review pass.

## Progress

- Merged PR #1124 as `1a0417cdd9fc7d654ca8dd0b27f771e8a7a652e5`.

## Findings and decisions

- This issue completes the preserved behavior of oversized PR #1108.
- Unsupported dynamic launches, compound shell commands, mutable launch
  aggregates, and shell wrappers fail closed.

## References

- `agentic-ai/loom/tests/skill-provider-reachability.test.ts`
