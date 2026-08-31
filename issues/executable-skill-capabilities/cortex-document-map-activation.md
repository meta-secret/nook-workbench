---
title: Activate the verified Cortex document-map provider
status: done
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-08-31T01:41:57Z
updated_at: 2026-08-31T16:48:08Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1247
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

- [x] Tools discovery exposes the exact schema and copyable YAML example.
- [x] Unknown fields, unsafe paths, malformed results, and tampering fail closed.
- [x] Exact current Cortex diagnostics remain compatible.
- [x] Loom retains only generic aggregation and no document-map semantics.
- [x] Hosted exact-head gates, review, readiness, and merge are complete.

## Progress

- Depends on the provider foundation.
- 2026-08-31: PR [#1247](https://github.com/meta-secret/nook/pull/1247)
  merged the closed YAML-host action and mandatory Cortex-audit integration on
  top of the provider foundation. Full hosted policy and PR validation, two
  independent reviews, and the exact-head Codex review were clean.

## Findings and decisions

- The provider must prove its own result independently before activation.
- Native agent lifecycle and the foreign Team Plan stack remain excluded.

## References

- [Provider foundation](cortex-document-map-capability.md)
- `.cortex/teams/ai/dynamic-skills/executable-skill-host/SKILL.md`
