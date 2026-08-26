---
title: Resolve open Dependabot security alerts
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-26T04:27:46Z
updated_at: 2026-08-26T04:27:46Z
source_issues: []
related_prs: []
depends_on: []
---

# Resolve open Dependabot security alerts

## Context

The repository has a current set of dependency vulnerabilities reported by
GitHub Dependabot. This focused repair belongs to
[Unplanned engineering repairs](README.md) and supersedes no completed
dependency-refresh history.

## Outcome

All open Dependabot alerts are remediated through supported dependency versions,
the exact replacement head passes repository validation, and GitHub reports zero
open Dependabot alerts after the fix reaches the default branch.

## Scope

- Upgrade vulnerable npm transitive dependencies in the CI agent lockfile.
- Upgrade vulnerable Rust transitive dependencies in the Minds lockfile and any
  direct constraints needed to select secure compatible versions.
- Preserve package-manager lockfile consistency and supported dependency APIs.
- Deliver through one exact-head validated, squash-merged Nook pull request.
- Exclude unrelated dependency modernization and product behavior changes.

## Acceptance criteria

- [ ] Every alert open at task start resolves through a patched dependency graph
  or a documented, evidence-backed non-applicability decision.
- [ ] No vulnerable resolved version remains in the affected lockfiles.
- [ ] Repository-owned exact-head validation and readiness pass.
- [ ] The implementation pull request is squash-merged.
- [ ] GitHub reports zero open Dependabot alerts on the default branch.

## Progress

- Inventory confirmed 23 alerts across the CI agent npm lockfile and Minds Rust
  lockfile; implementation has not started.

## Findings and decisions

- Multiple advisories share the same vulnerable package version, so alert count
  is not the dependency-update count.
- Prefer patched versions over dismissals. Any dismissal requires specific
  non-applicability evidence and must not conceal a reachable vulnerable graph.

## References

- [Dependabot alerts](https://github.com/meta-secret/nook/security/dependabot)
- [Prior repository dependency refresh](refresh-repository-dependencies.md)

