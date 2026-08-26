---
title: Resolve open Dependabot security alerts
status: completed
priority: p1
automation: manual
owner: codex
created_at: 2026-08-26T04:27:46Z
updated_at: 2026-08-26T06:08:16Z
source_issues: []
related_prs: [1117]
depends_on: []
---

# Resolve open Dependabot security alerts

## Context

The repository had 23 dependency vulnerabilities reported by GitHub
Dependabot. This focused repair belongs to
[Unplanned engineering repairs](README.md) and supersedes no completed
dependency-refresh history.

## Outcome

All 23 alerts closed through patched dependency resolution. Pull request 1117
is squash-merged, every exact-head repository gate passed, and GitHub reports
zero open Dependabot alerts on the default branch. No alert was dismissed.

## Scope

- Upgrade vulnerable npm transitive dependencies in the CI agent lockfile.
- Upgrade vulnerable Rust transitive dependencies in the Minds lockfile and any
  direct constraints needed to select secure compatible versions.
- Rebase the embedded Codex dependency on exact upstream revision
  `37f4bb94c9f4e180535a12e3f2c2f93f4a773df0`, the latest `openai/codex` main
  revision observed when the user expanded the request.
- Preserve that upstream provenance while applying the security dependency
  updates still absent from the upstream revision.
- Preserve package-manager lockfile consistency and supported dependency APIs.
- Deliver through one exact-head validated, squash-merged Nook pull request.
- Exclude unrelated dependency modernization and product behavior changes.

## Acceptance criteria

- [x] Every alert open at task start resolves through a patched dependency graph
  or a documented, evidence-backed non-applicability decision.
- [x] No vulnerable resolved version remains in the affected lockfiles.
- [x] Repository-owned exact-head validation and readiness pass.
- [x] The implementation pull request is squash-merged.
- [x] GitHub reports zero open Dependabot alerts on the default branch.

## Progress

- Inventoried 23 alerts across the CI agent npm lockfile and Minds Rust lockfile.
- Updated Undici to 6.28.0 and verified `npm audit` reports zero vulnerabilities.
- Pinned a latest-derived Codex security revision and a Hickory compatibility
  revision that resolve patched Gix, JSON Web Token, OpenTelemetry, tar, and DNS
  packages without RustSec exceptions.
- Migrated Hive to the latest Codex auth, configuration, and turn-input APIs.
- Passed exact-head dependency policy, RustSec, Hive verification, complete PR
  validation, deployment, and Cloud review at
  `eb47e3c488ab51bb153171212a1e4c721cd1a350`.
- Squash-merged PR 1117 as
  `c870f29da013320b331c3c84165707bb98fc2ade`.
- Verified the live Dependabot API reports zero open alerts after default-branch
  recomputation.

## Findings and decisions

- Multiple advisories shared vulnerable package versions, so remediation was
  verified against both the advisory inventory and the resolved graphs.
- Latest upstream Codex still constrained affected dependencies. The exact
  source remains latest-derived and security-patched until upstream absorbs the
  fixes.
- Rama's Hickory Resolver 0.25 API required a narrow source-compatible backport
  of the 0.26.1 Proto security fixes.
- No advisory was dismissed or ignored.

## References

- [Pull request 1117](https://github.com/meta-secret/nook/pull/1117)
- [Dependabot alerts](https://github.com/meta-secret/nook/security/dependabot)
- [Superseding delivery plan](../../plans/unplanned/20260826T044554Z-latest-codex-dependabot-remediation.md)
- [Prior repository dependency refresh](refresh-repository-dependencies.md)
