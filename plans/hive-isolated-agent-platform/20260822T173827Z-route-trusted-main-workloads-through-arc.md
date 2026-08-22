---
title: Route trusted Main workloads through ARC
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/route-trusted-main-workloads-through-arc.md
started_at: 2026-08-22T17:38:27Z
agent: codex
---

# Route trusted Main workloads through ARC

## Interpreted request

Finish the ARC cache-performance migration by moving trusted Main jobs that
still hard-code GitHub-hosted runners onto the configured self-hosted route.

## Requirements

- Route every trusted Main job through `vars.NOOK_RUNS_ON`.
- Preserve `ubuntu-latest` as the fallback when the repository variable is not
  configured.
- Preserve existing job dependencies, services, cache writers, and concurrency.
- Add a static contract so hard-coded Main runner placement cannot return.

## Constraints and exclusions

- Do not introduce Docker-in-Docker, Sysbox, shared writable BuildKit, or
  retained runners.
- Do not change scale-set capacity, QEMU isolation, or private BuildKit storage.
- Do not change untrusted pull-request routing in this follow-up.

## Initial plan

1. Replace hard-coded Main runner placement with the configured runner route.
2. Extend the ARC workflow contract to cover every Main job.
3. Format and run focused workflow and ARC contracts.
4. Complete exact-head review and validation, merge, and inspect a post-merge
   Main run's labels.

## Completion evidence

- Main contains no hard-coded `runs-on: ubuntu-latest` job placement.
- Static contracts and formatting pass.
- Exact-head validation and review pass.
- The merged Main run reports `nook-k0s` on formerly hosted product lanes.

## Safety review

- This plan contains no secrets, private infrastructure details, raw logs,
  prompts, transcripts, or local paths.
