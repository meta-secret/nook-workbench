---
title: Refresh repository dependencies
feature: unplanned
issue: issues/unplanned/refresh-repository-dependencies.md
plan: plans/unplanned/20260808T172000Z-refresh-repository-dependencies.md
nook_pr: https://github.com/meta-secret/nook/pull/954
status: completed
started_at: 2026-08-08T17:20:00Z
finished_at: 2026-08-09T04:45:27Z
agent: codex
---

# Refresh repository dependencies

## Outcome

Refreshed supported Rust, JavaScript and TypeScript, GitHub Actions, Docker, and
downloaded tool dependencies. Migrated supported majors and squash-merged Nook
PR 954 after exact-head validation and readiness passed.

## Progress

- Updated all four Rust roots and their lockfiles.
- Updated web packages and deterministic lockfiles.
- Updated action pins, build images, Node, Rust, Binaryen, and sccache tooling.
- Added migration coverage and reconciled dependency workflow documentation.
- Completed and merged the preceding PRs 941 and 942 before the repository-wide refresh.

## Implementation problems

- Knip 6 cannot analyze packages above its workspace root, while Knip 5 fails
  under TypeScript 7. The production workspace retains the compatible pair and
  the isolated research workspace migrated to Knip 6.
- The Hive image omitted the Lace graph fixture. Verification now copies it into
  both check and test stages and validates the complete Minds workspace.
- Generated Rust formatting differed across formatter versions. The regression
  assertion now compares parsed Rust syntax tokens instead of formatted text.
- Concurrent BuildKit export made some required formatting cycles slow; product
  builds and tests remained on GitHub-hosted workers.

## Decisions

- Prefer supported stable majors, but retain compatibility pins where the newer
  analyzer cannot represent the repository layout.
- Audit dependency drift across Rust roots, web packages, workflows, scripts,
  and Dockerfiles as one ownership boundary.
- Keep the automated update workflow responsible for opening validated PRs;
  merge ownership remains with the readiness-gated delivery agent.

## Validation

- Exact-head checks passed for Rust, Rust ecosystem, fuzzing, WASM, web,
  browser e2e, extension e2e, Hive, Loom, source architecture, and research.
- `task pr:ready PR=954` returned `ready: true` at head
  `2fcd39b42edc6d2da6c94c1d48d88c740f7d2a0b`.
- All review conversations were resolved before merge.
- PR 954 squash-merged as `1f22a95944b6bc0a2496cc00542de48be3356e01`.

## Remaining work

- None.
