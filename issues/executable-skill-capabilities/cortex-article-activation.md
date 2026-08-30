---
title: Activate the Cortex article capability
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: cortex-article-yaml-activation
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-30T22:06:13Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/discoverable-yaml-protocol.md
---

# Activate the Cortex article capability

## Context

The dormant Markdown-native provider may enter production only after policy,
containment, registry, and execution boundaries are independently merged.

## Outcome

Static registration and Loom workflow wiring invoke the Cortex article
capability with exact diagnostic parity and no HTML parser.

## Scope

- Register the exact article capability in the static production catalog.
- Add generic schema validation, the co-located article action adapter, and
  exact action discovery and invocation coverage.
- Wire the bounded task/configuration surface through the reviewed executable
  package and update durable documentation.
- Exclude HTML input, browser parsing, and unrelated skill migrations.

## Acceptance criteria

- [ ] Activation uses only the static registry and sealed executor.
- [ ] Article findings retain exact compatibility end to end.
- [ ] Authored Cortex Markdown remains HTML-free with no HTML parser.
- [ ] Focused tests, full validation, exact-head review, and readiness pass.

## Progress

- Depends on the sealed executable skill runtime.
- The verified full implementation is preserved on
  `codex/yaml-skill-host-successor`; this issue owns the 787-line activation
  slice after the provider-neutral YAML protocol predecessor.

## Findings and decisions

- Activation is the first layer allowed to make the provider reachable.
- The action registry is static and read-only. Skills return validated results;
  the active harness owns every agent and subagent lifecycle transition.

## References

- `.agents/skills/cortex-article-structure/executable-skill.json`
