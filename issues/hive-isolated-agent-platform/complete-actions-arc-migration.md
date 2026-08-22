---
title: Complete the trusted GitHub Actions ARC migration
status: in_progress
priority: high
automation: manual
owner: codex
created_at: 2026-08-22T22:05:00Z
updated_at: 2026-08-22T22:05:00Z
source_issues: []
related_prs: []
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

- [ ] Every workflow job is classified as ARC or an explicit hosted exception.
- [ ] Eligible same-repository jobs use the configured ARC route.
- [ ] Fork, Dependabot, release, deployment, and required hosted-runtime jobs do
      not receive private ARC credentials.
- [ ] Static tests reject new unclassified or hard-coded placement.
- [ ] Exact-head validation and review pass, and the PR is merged.

## Progress

- 2026-08-22: Scope claimed from the direct operator request. Existing PR 1079
  belongs to a separate testing-quality task and remains read-only.

## Findings and decisions

- No findings yet.

## References

- Nook PR 1077
- `.github/workflows/`
- `.cortex/workflows/ci-pipeline.md`
