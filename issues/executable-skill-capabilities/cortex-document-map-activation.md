---
title: Activate the verified Cortex document-map provider
status: ready
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-08-31T01:41:57Z
updated_at: 2026-08-31T01:41:57Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/cortex-document-map-capability.md
---

# Activate the verified Cortex document-map provider

## Context

The provider foundation is intentionally independent of production activation
so its parser and independent verifier fit within the hard PR-size boundary.

## Outcome

The static YAML host and mandatory Cortex audit invoke the verified owner-local
provider, and Loom contains no document-map-specific semantic implementation.

## Scope

- Register the closed `cortexDocumentMap.audit` YAML action.
- Route mandatory Cortex audit aggregation through the provider.
- Remove the superseded Loom parser and migrate its tests and direct callers.
- Preserve automatic executable-package discovery and source-profile coverage.

## Acceptance criteria

- [ ] Tools discovery exposes the exact schema and copyable YAML example.
- [ ] Unknown fields, unsafe paths, malformed results, and tampering fail closed.
- [ ] Exact current Cortex diagnostics remain compatible.
- [ ] Loom retains only generic aggregation and no document-map semantics.
- [ ] Hosted exact-head gates, review, readiness, and merge are complete.

## Progress

- Depends on the provider foundation.

## Findings and decisions

- The provider must prove its own result independently before activation.
- Native agent lifecycle and the foreign Team Plan stack remain excluded.

## References

- [Provider foundation](cortex-document-map-capability.md)
- `.cortex/teams/ai/dynamic-skills/executable-skill-host/SKILL.md`
