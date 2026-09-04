---
title: Adopt typed action ownership one domain at a time
status: proposed
priority: p1
automation: manual
owner: unassigned
created_at: 2026-09-04T19:33:00Z
updated_at: 2026-09-04T19:33:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/foundation.md
---

# Adopt typed action ownership one domain at a time

## Context

The [feature](README.md) needs incremental product adoption after its lint and policy foundation.

## Outcome

Migrate cohesive domain action flows independently, giving each state its available actions and activating ownership enforcement for the migrated boundary.

## Scope

- Select a real action flow with observable state invariants and bounded consumer changes.
- Use separate state structs, controlled construction, consuming transitions, and explicit branching outcomes.
- Avoid bulk namespace wrapping, framework introduction, speculative recovery, or unrelated schema changes.

## Acceptance criteria

- [ ] First selected domain and consumer boundary documented before edits.
- [ ] Valid transition behavior covered by Rust tests.
- [ ] Invalid action ordering and advanced-state construction rejected by compile-fail tests.
- [ ] Dylint activated for the migrated scope with no blanket suppression.
- [ ] ABI and runtime authorization behavior verified where applicable.

## Progress

- 2026-09-04: Recorded incremental adoption dependency; no product migration started.

## Findings and decisions

- Existing sealed generic enrollment states demonstrate controlled construction but do not mandate generic sessions for other domains.
- A configuration parser ownership cleanup alone is not a typestate demonstration.

## References

- [Foundation](foundation.md)
