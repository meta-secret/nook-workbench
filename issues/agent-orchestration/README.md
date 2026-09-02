---
title: Agent orchestration
status: in_progress
created_at: 2026-09-02T17:31:56Z
updated_at: 2026-09-02T17:31:56Z
---

# Agent orchestration

## Goal

Keep agent-owned delivery state explicit, durable, and safely transferable through repository and Workbench authority.

## Current state

PR metadata has historically varied by execution surface. The active work standardizes durable provenance while preserving task-isolation and ownership boundaries.

## Decisions

- Pull requests use capability-oriented titles and public Workbench lifecycle links.
- Provenance records context but grants no cross-task communication or mutation authority.
- Trusted publishers fail closed when required issue, plan, or task identity is unavailable.

## Issues

- [ ] [Pull request metadata provenance](pr-metadata-provenance.md)

## References

- [Nook PR #1295](https://github.com/meta-secret/nook/pull/1295)
