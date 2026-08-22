---
title: Complete the trusted GitHub Actions ARC migration
status: done
priority: high
automation: manual
owner: codex
created_at: 2026-08-22T22:05:00Z
updated_at: 2026-08-22T23:48:34Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1080
depends_on:
  - issues/hive-isolated-agent-platform/route-trusted-main-workloads-through-arc.md
---

# Complete the trusted GitHub Actions ARC migration

## Context

Main now uses ephemeral `nook-k0s` runners, but repository-wide workflow
placement has not been audited against the final trust and runtime boundary.
Undocumented GitHub-hosted jobs can bypass local BuildKit and Zot, while an
indiscriminate migration could expose trusted infrastructure to fork or release
inputs.

## Outcome

Every workflow job has an explicit runner-placement policy. Trusted
same-repository jobs that can execute inside Kata use ARC. Hosted execution
remains only for documented fork, Dependabot, release, deployment, or
runtime-specific boundaries.

## Scope

- Audit all workflow and reusable-workflow `runs-on` expressions.
- Migrate eligible trusted jobs to `nook-k0s` or `nook-k0s-hive`.
- Preserve hosted isolation for untrusted and provider-owned operations.
- Add a repository-wide static contract that rejects undocumented placement.
- Keep repository automation in TypeScript/Bun, Rust, and Taskfile.

## Acceptance criteria

- [x] Every workflow job is classified as ARC or an explicit hosted exception.
- [x] Eligible same-repository jobs use the configured ARC route.
- [x] Fork, Dependabot, release, deployment, and required hosted-runtime jobs do
      not receive private ARC credentials.
- [x] Static tests reject new unclassified or hard-coded placement.
- [x] Exact-head validation and review pass, and the PR is merged.

## Progress

- 2026-08-22: Scope claimed from the direct operator request. Existing PR 1079
  belongs to a separate testing-quality task and remains read-only.
- 2026-08-22: Audited all 19 workflow files, added an exhaustive typed
  job-placement contract, validated live general and Hive ARC execution, and
  merged PR 1080.

## Findings and decisions

- Trusted build jobs already used ARC; remaining GitHub-hosted jobs are explicit
  trust, deployment, AI-agent, scheduled, or runtime-specific exceptions.
- Same-repository Dependabot pull requests were eligible for ARC under the old
  same-repository condition. Pull-request author identity now excludes them.
- Label-triggered Hive jobs must use pull-request author identity instead of
  `github.actor`, which can identify the human labeler.
- The legacy `nook` runner cleanup workflow manages the separately registered
  persistent Docker pool and is not an ARC delivery workload.

## References

- Nook PR 1077
- `.github/workflows/`
- `.cortex/workflows/ci-pipeline.md`
