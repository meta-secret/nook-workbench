---
title: Move expert contract mechanics into skill applications
status: ready
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-27T16:02:02Z
updated_at: 2026-08-27T16:02:02Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/repository-policy-capabilities.md
---

# Move expert contract mechanics into skill applications

## Context

Module, structural, internal-API, and team expert catalogs and codecs are
skill-specific contracts currently implemented inside Loom beside model
invocation adapters.

## Outcome

Expert skills own their catalogs, context selection, request/result codecs, and
evidence validation. The active harness invokes the semantic roles.

## Scope

- Move module and internal-API expert catalogs and validation.
- Move structural expert schemas and output validation.
- Move team routing catalog validation.
- Remove Loom-owned expert invocation and trusted model-runtime adapters.

## Acceptance criteria

- [ ] Native harness roles retain exact bounded context and evidence contracts.
- [ ] Static validators remain discoverable skill commands.
- [ ] Loom starts no module, structural, or team expert.
- [ ] Catalog coverage and focused tests remain green.

## Progress

- Depends on the shared protocol and repository-policy migration.

## Findings and decisions

- Stable semantic role names are not runtime worker labels.

## References

- Loom module-experts, structural-experts, and team-agents modules.

