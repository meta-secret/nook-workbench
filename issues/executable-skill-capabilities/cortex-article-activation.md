---
title: Activate the Cortex article capability
status: ready
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:05:41Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/sealed-skill-executor.md
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
- Wire bounded Markdown transport through the reviewed Loom workflow.
- Remove superseded legacy implementation and update durable documentation.
- Exclude HTML input, browser parsing, and unrelated skill migrations.

## Acceptance criteria

- [ ] Activation uses only the static registry and sealed executor.
- [ ] Article findings retain exact compatibility end to end.
- [ ] Authored Cortex Markdown remains HTML-free with no HTML parser.
- [ ] Focused tests, full validation, exact-head review, and readiness pass.

## Progress

- Depends on the sealed executable skill runtime.

## Findings and decisions

- Activation is the first layer allowed to make the provider reachable.

## References

- `.agents/skills/cortex-article-structure/executable-skill.json`
