---
title: Automate unchanged-web deployment attestations
status: proposed
priority: p2
automation: manual
owner: unassigned
created_at: 2026-07-27T16:58:11Z
updated_at: 2026-07-27T16:58:11Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/813
depends_on: []
---

# Automate unchanged-web deployment attestations

## Context

The repository ruleset requires a successful web deployment for every pull
request, while the product PR workflow intentionally ignores agentic-only
paths. PR 813 therefore passed its applicable Hive workflow but could not merge
until an unchanged-web deployment was explicitly recorded.

This belongs to the [Hive isolated agent platform](README.md) because the gap
affects autonomous completion of agentic-only infrastructure fixes.

## Outcome

Agentic-only pull requests satisfy the required deployment rule through a
trusted lightweight attestation when their web artifact is provably unchanged,
without rebuilding or deploying the full product.

## Scope

- Add a repository-owned workflow or equivalent trusted check for pull requests
  whose changed paths cannot affect web artifacts.
- Bind the deployment record to the exact pull-request head.
- Reuse only an already-successful trusted web deployment.
- Keep the full PR product workflow for any web, Rust/WASM product, extension,
  or deployment-affecting change.
- Exclude changes to the Hive runtime or its publication security model.

## Acceptance criteria

- [ ] An agentic-only fixture PR receives an exact-head successful deployment
  record without starting the full product build.
- [ ] A product-affecting fixture cannot use the unchanged-web path.
- [ ] The normal branch ruleset accepts the agentic-only PR without an admin
  bypass or manual API mutation.
- [ ] Workflow tests document and enforce the allowed path boundary.

## Progress

- 2026-07-27T16:58:11Z: Recorded after PR 813 exposed the mismatch between the
  path-filtered product workflow and the repository deployment rule.

## Findings and decisions

- The attestation must be a repository-owned exact-head action, not a weaker
  branch-policy bypass.
- Avoid running the expensive product pipeline when the web artifact is
  structurally unchanged.

## References

- [Nook PR 813](https://github.com/meta-secret/nook/pull/813)
- [Hive filesystem publication worklog](../../worklogs/hive-isolated-agent-platform/2026-07-27T16-58-11Z-pr-811.md)
