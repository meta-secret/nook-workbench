---
title: "Build Nook Pilot workflow evidence and site-compatibility harness"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-20T01:31:59Z
updated_at: 2026-07-21T08:56:58Z
source_issues: ["https://github.com/meta-secret/nook/issues/509"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Build Nook Pilot workflow evidence and site-compatibility harness

## Imported context

This record was imported from [Nook GitHub issue #509](https://github.com/meta-secret/nook/issues/509)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #461.

## Goal

Make Nook Pilot outcome verification defensible across real authentication page patterns.

## Scope

- Define typed, non-secret DOM evidence reported by content scripts.
- Let Rust classify sufficient, insufficient, conflicting, and timeout evidence.
- Cover multi-page login, SPA mutation, iframes, redirects, error messages, success navigation, and manual takeover.
- Build fixture pages and compatibility tests without site-specific secrets or production scraping.
- Document the adapter boundary for future site-specific plugins.

## Acceptance Criteria

Nook never reports completion or commits staged credentials from navigation alone when evidence is ambiguous, and regressions are reproducible in local fixtures.

## Historical comments

### cypherkitty — 2026-07-21T01:01:33Z

Focused mock-auth + PIN Pilot e2e pack: #534 (sub-issues #535, #536).

### cypherkitty — 2026-07-21T02:51:32Z

Related e2e pack for mock-auth Pilot coverage (fixtures already available; not the full evidence harness): parent #547 under milestone [Feature: Mock-auth Pilot e2e coverage](https://github.com/meta-secret/nook/milestone/11).
