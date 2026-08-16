---
title: Unify Main and Rust ecosystem orchestration
status: in_progress
priority: p2
automation: manual
owner: codex
created_at: 2026-08-16T05:29:27Z
updated_at: 2026-08-16T05:53:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1023
depends_on: []
---

# Unify Main and Rust ecosystem orchestration

## Context

A Rust-affecting merge currently starts separate `Main` and `Rust ecosystem
checks` runs for the same commit. The checks are distinct, but their split run
ownership fragments merged-head status, statistics, and failure handoff. This
focused repair belongs to [Unplanned engineering repairs](README.md).

## Outcome

One `Main` run owns product verification and parallel Rust ecosystem gates for
each applicable product merged head. Scheduled, manual, and minds-only PR/Main
ecosystem entry points remain available through the specialist workflow.
Trusted PR consumers do not create empty runs for the PR-close event.

## Scope

- Call the reusable Rust ecosystem jobs from `main.yml` in parallel.
- Narrow the separate Rust ecosystem `main` push trigger to minds-only changes.
- Preserve weekly, manual, and minds-only PR/Main ecosystem entry points.
- Prevent trusted PR artifact consumers from waking on the PR-close run's
  `main` branch.
- Keep Loom, Hive, research deployment, collectors, and failure handoff in
  their existing specialist or trusted workflows.
- Update CI workflow documentation and structural tests.
- Exclude changes to Rust gate behavior, Bake targets, or product code.

## Acceptance criteria

- [ ] A Rust-affecting Main revision produces one authoritative `Main` run.
- [ ] Dependency policy, deterministic tests, fuzz, Kani, and Dylint remain parallel.
- [ ] Scheduled, manual, and minds-only PR ecosystem entry points remain valid.
- [ ] Main statistics and failure handoff observe product ecosystem failures through `Main`.
- [ ] Minds-only merges retain specialist merged-head ecosystem coverage.
- [ ] PR close does not create skipped handoff or demo-publisher workflow runs.
- [ ] Exact-head PR validation passes and the correction PR squash-merges.

## Progress

- 2026-08-16: Compared Main run 31928499672 with Rust ecosystem run
  31928499711 and confirmed distinct checks on the same merged SHA.
- 2026-08-16: Advisory review found that removing every ecosystem push trigger
  would leave minds-only merges uncovered because Main ignores `agentic-ai/**`.
- 2026-08-16: Opened [PR 1023](https://github.com/meta-secret/nook/pull/1023)
  with the corrected product-versus-minds trigger boundary.

## Findings and decisions

- Consolidate workflow ownership, not job implementation.
- Preserve the reusable ecosystem workflow so PR, Main, schedule, manual, and
  minds-only entry points share one job definition.
- Retain a narrow `agentic-ai/minds/**` Main-push entry point in the specialist
  workflow. Main does not run for that isolated workspace.
- Keep Loom independent because it must validate Cortex and agent-only changes
  that intentionally do not start the product Main pipeline.
- Keep trusted publishers and collectors independent so untrusted or incomplete
  source workflow code never executes with publication credentials.

## References

- [Main run 31928499672](https://github.com/meta-secret/nook/actions/runs/31928499672)
- [Rust ecosystem run 31928499711](https://github.com/meta-secret/nook/actions/runs/31928499711)
