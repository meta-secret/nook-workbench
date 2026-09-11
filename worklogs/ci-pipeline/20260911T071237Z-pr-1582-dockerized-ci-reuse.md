---
title: Docker CI efficiency implementation
feature: ci-pipeline
issue: null
plan: plans/ci-pipeline/20260911T071237Z-dockerized-ci-reuse.md
nook_pr: 1582
status: completed
started_at: 2026-09-11T07:12:37Z
finished_at: 2026-09-11T08:22:59Z
agent: codex
---

# Work summary

## Outcome

Delivered the build-efficiency changes in [PR 1582](https://github.com/meta-secret/nook/pull/1582), targeting the PR 1573 branch. The implementation removes repeated cache preparation and host Rust setup while preserving validation and trust boundaries. The user authorized merge with unrelated baseline failures left unchanged.

Merge verification: PR 1582 was squash-merged into codex/global-type-safety-refactor as commit 86ab4bb21054a1c850bc07423d383e8caa983c6e.

## Progress

- Removed ARC probes for unavailable commit-specific caches and the redundant Hive PR cache export.
- Narrowed cache selection to the work consumed by each job, preserving incoming ecosystem lane selections from the updated base.
- Moved repository policy, remote Loom validation, Rust audits, and trusted publisher formatting into Docker-backed Task targets.
- Removed host Rust installation and GitHub Rust cache restoration from workflow jobs.
- Preserved exact Git history for policy checks, secret-free fork execution, Main-only shared cache writes, and bounded trusted formatting.
- Incorporated the requested PR 1573 updates through base commit 7a6fca6c172aef8649b29d68442dc9560a8c49b5.

## Implementation problems

- Unpublished commit-specific cache probes accounted for a roughly nine-minute setup wait in the supplied run.
- Container migration exposed missing Git metadata, formatter directory/configuration requirements, a Task shell mismatch, omitted tracked WASM metadata, and stale host-tool assertions. Scoped tests and hosted evidence identified and corrected those cases.
- The registry policy checker initially rejected a registered local formatter Bake context. Its exception is now limited to the exact Dockerfile and verified local target mapping.
- Audited script hashes were refreshed, and the new bounded fixture test was registered by exact content without weakening production audit rules.
- The standard pre-push budget command compares with main, so it counted inherited PR 1573 changes. Against the selected base, the final patch contains 922 additions and 322 deletions; scoped formatting and whitespace checks passed.

## Decisions

- Reuse ARC's persistent BuildKit graph and required trusted imports instead of probing unavailable per-commit exports.
- Export the required Hive browser image without a second PR cache export.
- Keep Rust execution in BuildKit stages because ARC has no Docker daemon.
- Preserve validation behavior and leave unrelated baseline AI/Cortex and coverage topology assertions untouched.
- Remove the broad validation label before scoped repair pushes to avoid repeating full product suites; use targeted hosted validation for the changed paths.

## Validation

- Exact implementation head: 74a731db6323e9dc3db21442529928a1f7bb9393.
- Five focused tests and 147 assertions passed, along with formatter, ARC, Hive, YAML/Bake, and whitespace checks.
- The focused provider-boundary test passed after exact audited hash updates and registration.
- Actual scoped Docker formatting passed, reusing cached tools with a 267 KB context and a 1.2-second formatting step.
- [Hosted timing evidence](https://github.com/meta-secret/nook/actions/runs/34575876908): policy setup completed in seven seconds; Hive image export completed in 4.1 seconds. Its remaining 269-second observer compilation is an existing build stage.
- [Final targeted preflight](https://github.com/meta-secret/nook/actions/runs/34578282675) stopped at the unchanged baseline every_enforced_package_has_an_independent_hosted_failure_decision assertion. The assertion is identical to base 7a6fca6c; both Hive jobs still enforce the configured coverage floor through Task.
- Earlier Dockerized Loom verification exposed 19 unchanged Cortex authority-marker failures, deliberately left outside this task.
- Independent SRE review approved the final implementation, including the audited content hashes.

## Remaining work

- None in the requested build-efficiency scope. Unrelated baseline validation failures were disclosed and left unchanged under the user's explicit scope and merge instructions.
