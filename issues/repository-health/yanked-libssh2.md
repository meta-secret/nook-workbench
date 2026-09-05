---
title: Refresh yanked libssh2 dependency
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: repository-health-yanked-libssh2
created_at: 2026-09-05T17:32:35Z
updated_at: 2026-09-05T17:32:35Z
source_issues: []
related_prs: []
depends_on: []
---

# Refresh yanked libssh2 dependency

## Outcome

The Dylint dependency-policy lock resolves a supported `libssh2-sys` release, restoring the repository RustSec gate.

## Scope

Update only `nook-app/nook-platform/dylint/nook-domain-api/Cargo.lock` through Cargo's targeted dependency update.

## Acceptance criteria

- [ ] The lock no longer selects yanked `libssh2-sys` 0.3.2.
- [ ] Cargo metadata remains resolvable with no manifest or source changes.
- [ ] Hosted dependency policy, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

No manifest, application code, architecture, behavior, fallback, or unrelated dependency change.

## Progress

The exact #1385 hosted run exposed this repository-wide dependency-policy blocker. Implementation awaits the immutable plan.
