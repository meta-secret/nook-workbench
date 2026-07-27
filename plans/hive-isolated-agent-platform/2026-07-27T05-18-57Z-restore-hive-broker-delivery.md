---
title: Restore Hive broker delivery and dispatcher efficiency
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T05:18:57Z
agent: codex
---

# Restore Hive broker delivery and dispatcher efficiency

## Interpreted request

Complete the production Hive recovery so isolated Codex workers can use the
credential-free publication command surface from inside their workspace
sandbox, and so the token-free Workbench dispatcher can reconcile Main
incidents without repeatedly exhausting public GitHub API capacity. Land,
deploy, and prove the fixes before rearming the retained failed Main incident.

## Requirements

- Preserve Kata Dragonball and the nested Bubblewrap filesystem sandbox.
- Permit only the local publication Unix-socket capability needed by agent
  commands; do not expose the GitHub token or grant arbitrary worker network
  access.
- Make dispatcher polling conditional and avoid re-fetching unchanged or
  already-reconciled incidents.
- Add behavior-focused Rust and manifest coverage for both failure paths.
- Use repository Taskfiles for infrastructure deployment and live diagnosis.
- Carry the implementation through exact-head PR checks, squash merge,
  production rollout, incident retry, and observable worker progress.

## Constraints and exclusions

- Credentials remain exclusively in the existing broker containers.
- The dispatcher remains token-free.
- No Docker-in-Docker or host bridge aliases are introduced.
- Browser end-to-end suites remain outside this infrastructure recovery.

## Initial plan

1. Add the narrow sandbox and dispatcher regressions, then implement the
   corresponding runtime changes.
2. Format, publish a PR, and resolve all repository checks and feedback.
3. Squash-merge and deploy through the infrastructure Taskfile.
4. Verify live broker access, dispatcher reconciliation, worker isolation, and
   rearm the retained Main incident.

## Completion evidence

- Green exact-head Hive, native, WASM, and web PR checks.
- Four ready Dragonball workers with the deny-by-default container profile and
  successful nested sandbox diagnostic.
- A sandboxed publication-client probe reaches the local broker while direct
  IP networking remains unavailable.
- Dispatcher logs no longer repeat unchanged Workbench fetch failures.
- The retained Main-repair task is claimed and progresses beyond publication
  inspection.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
