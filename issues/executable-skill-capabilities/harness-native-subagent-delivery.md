---
title: Make subagent delivery harness-native
status: ready
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-27T16:02:02Z
updated_at: 2026-08-27T16:02:02Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/expert-contract-capabilities.md
---

# Make subagent delivery harness-native

## Context

Loom's static workflow and delegation modules duplicate native harness worker
lifecycle through schedulers, Codex adapters, journals, and terminal barriers.

## Outcome

The active harness exclusively owns native worker lifecycle. The
subagent-delegation skill retains typed planning and deterministic Git-safety
validation without launching agents.

## Scope

- Move plan, lineage, resource-claim, baseline, handoff, and integration
  verification into subagent-delegation.
- Remove repository-owned Codex execution, scheduling, retries, cancellation,
  barriers, and journal authority for native development agents.
- Keep optional human evidence non-authoritative.
- Exclude Hive and product runtime behavior.

## Acceptance criteria

- [ ] No Loom command creates, schedules, waits for, retries, or synthesizes a
      native development subagent.
- [ ] The harness can consume validated task contracts and handoff evidence.
- [ ] Exact-baseline, path-scope, ancestry, and integration checks remain
      deterministic and fail closed.
- [ ] Cortex, skills, Task entrypoints, tests, and Loom documentation agree.

## Progress

- Depends on expert-contract extraction.

## Findings and decisions

- Fixed task topology may be validated by a skill command, but only the active
  harness dispatches workers.

## References

- Loom agent-workflow, module-delivery, and delegation modules.

