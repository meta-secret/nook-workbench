---
title: Migrate Cortex dynamic skills to document maps
status: blocked
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T04:39:00Z
source_issues: []
related_prs: [1004]
depends_on: [document-map-contract-and-enforcement.md]
---

# Migrate Cortex dynamic skills to document maps

## Context

This is the second slice of [Cortex document navigation](README.md). Dynamic
skills are cohesive agent-facing rules and form the best first complete family.

## Outcome

Every Cortex dynamic-skill card exposes relationship links and a complete
internal document map.

## Scope

- Migrate every remaining `.cortex/dynamic-skills/*.md` document.
- Preserve each skill's canonical meaning and executable mirror relationship.
- Remove migrated files from the migration ledger.
- Exclude workflow, design, product, reference, and root Cortex documents.

## Acceptance criteria

- [ ] Every dynamic-skill document passes the document-map audit.
- [x] The dynamic-skill registry remains synchronized with executable skills.
- [x] Standard Cortex link and density checks pass.

## Progress

- Contract and checker slice merged in Nook PR #1003.
- Migration started from merged commit
  `ee825c3b6dd7da602d07a4bd9e0fd491aaecbc5e`.
- Nook PR #1004 migrated 23 remaining unowned skill cards and removed their
  ledger entries.
- Focused Cortex, Loom, TypeScript-state, preflight, source-architecture, and
  readiness checks passed on the exact PR head.

## Findings and decisions

- The migration changes navigation structure, not product or coding policy.
- Active Nook PR #1002 owns `issue-scope-management.md`; that card remains the
  only dynamic-skill ledger entry and blocks family completion.
- The deferred card will migrate from the post-#1002 source instead of copying
  stale baseline content over its active owner's changes.

## References

- [Feature summary](README.md)
- [Dynamic-skill registry](https://github.com/meta-secret/nook/blob/main/.cortex/dynamic-skills/index.md)
- [Nook PR #1004](https://github.com/meta-secret/nook/pull/1004)
- [Delivery worklog](../../worklogs/cortex-document-navigation/20260815T043703Z-pr-1004-dynamic-skills.md)

