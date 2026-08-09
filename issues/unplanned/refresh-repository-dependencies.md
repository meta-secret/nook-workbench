---
title: Refresh repository dependencies
status: done
priority: p2
automation: manual
owner: codex
created_at: 2026-08-08T17:20:00Z
updated_at: 2026-08-09T04:45:27Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/954
depends_on: []
---

# Refresh repository dependencies

## Context

Repository dependency pins had drifted across Rust, JavaScript and TypeScript,
GitHub Actions, container images, and downloaded build tools.

## Outcome

Supported dependencies are current across the repository, including compatible
major migrations and the code, configuration, tests, and documentation needed
to validate them.

## Scope

- Rust crates and lockfiles in all four Rust roots.
- JavaScript and TypeScript packages and lockfiles.
- GitHub Actions, Docker base images, and downloaded tool pins.
- Migration repairs, validation contracts, and dependency workflow guidance.
- Unsupported analyzer combinations remain intentionally pinned and documented.

## Acceptance criteria

- [x] Direct Rust and web dependencies are inventoried and safely upgraded.
- [x] Workflow, Docker, and downloaded tool pins are refreshed.
- [x] Required major-version migrations have code and test coverage.
- [x] Exact-head repository validation and readiness pass.
- [x] The implementation PR is squash-merged.

## Progress

- Completed in Nook PR 954.

## Findings and decisions

- The shared production web workspace retains Knip 5 with TypeScript 6 because
  Knip 6 cannot analyze its parent workspace layout and Knip 5 is incompatible
  with TypeScript 7. The isolated research workspace uses Knip 6.
- Dependency validation now covers every Rust root, including fuzz and Minds.
- Hive verification includes the Lace graph fixture used by generated-code tests.

## References

- Feature: [Unplanned work](../README.md)
- Plan: [Task plan](../../plans/unplanned/20260808T172000Z-refresh-repository-dependencies.md)
- PR: [meta-secret/nook#954](https://github.com/meta-secret/nook/pull/954)
