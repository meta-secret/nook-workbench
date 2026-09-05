---
title: Refresh yanked libssh2 dependency
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: repository-health-yanked-libssh2
created_at: 2026-09-05T17:32:35Z
updated_at: 2026-09-05T17:46:00Z
source_issues: []
related_prs:
  - 1384
depends_on: []
---

# Refresh yanked libssh2 dependency

## Outcome

The Dylint dependency-policy lock resolves a supported `libssh2-sys` release, restoring the repository RustSec gate.

## Scope

Update only `nook-app/nook-platform/dylint/nook-domain-api/Cargo.lock` through Cargo's targeted dependency update.

## Acceptance criteria

- [x] The lock no longer selects yanked `libssh2-sys` 0.3.2.
- [x] Cargo metadata remains resolvable with no manifest or source changes.
- [x] Hosted dependency policy, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

No manifest, application code, architecture, behavior, fallback, or unrelated dependency change.

## Progress

Main advanced through PR #1384 while the prerequisite was being isolated. Its lock refresh selected `libssh2-sys` 0.3.3, and PR #1385 hosted dependency policy then passed. The redundant local worktree stayed clean and was removed.
