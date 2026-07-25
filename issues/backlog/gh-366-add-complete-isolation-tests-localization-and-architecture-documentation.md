---
title: "Add complete isolation tests, localization, and architecture documentation"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-14T03:35:25Z
updated_at: 2026-07-14T03:36:29Z
source_issues: ["https://github.com/meta-secret/nook/issues/366"]
related_prs: []
depends_on: []
legacy_labels: ["duplicate","enhancement"]
legacy_state_reason: "NOT_PLANNED"
---

# Add complete isolation tests, localization, and architecture documentation

## Imported context

This record was imported from [Nook GitHub issue #366](https://github.com/meta-secret/nook/issues/366)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #360.

## Problem

This boundary is only complete when architecture, tests, user-facing copy, and
operational checks all agree. A route-only or build-only split would leave
future regressions able to reintroduce mixed vault or extension behavior.

## Scope

- Add repository preflight checks for forbidden cross-app imports/routes and
  universal production bundles.
- Add behavior-focused Rust tests for domain capability rules and targeted web,
  extension, and Playwright tests for both happy paths and denied cross-boundary
  flows.
- Verify app logs contain no roots, keys, shares, plaintext secrets, migration
  blobs, or provider credentials.
- Update `.cortex` architecture/design/product/workflow documents and the public
  README with the two-application model, extension rule, migration, deployment,
  and threat-model limits.
- Update English and Russian shared catalogs for all visible copy; no inline
  English or authored TypeScript/Svelte `null`.
- Record the durable invariant in the project skill registry if implementation
  reveals a recurring review/refactor rule.

## Acceptance Criteria

- `task check`, Rust coverage gate, both app builds/tests, extension checks, and
  targeted/full PR e2e gates pass.
- Security regression tests fail if Sentinel becomes extension-connectable, if
  app bundles expose the wrong workflow, or if Rust accepts the wrong app kind.
- README and `.cortex` accurately describe production domains and boundaries.
- No requested functionality remains deferred or represented only by a TODO.

## References

- `.cortex/rules.md`
- `.cortex/workflows/quality.md`
- `.cortex/ARCHITECTURE.md`
- `README.md`
- `preflight`


## Historical comments

### cypherkitty — 2026-07-14T03:36:20Z

Duplicate created by an interrupted CLI batch. Canonical issue: #368.
