---
title: Contract-first bottom-up module delivery pilot
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-26T19:40:15Z
source_issues: []
related_prs: [1160]
depends_on:
  - issues/agent-workflow/isolated-write-module-dag.md
---

# Contract-first bottom-up module delivery pilot

## Context

The module workflow needs operational proof on a bounded cross-layer change
before it becomes Nook's default development style.

## Outcome

A reviewed feature plan exercises independent lower-level experts, accepted
dependency baselines, `internal_api_expert`, a web consumer, parent synthesis,
and delivery-owner integration through the active harness.

## Scope

- Select a bounded real feature or purpose-built repository fixture with a
  representative Rust, internal API, and web dependency chain.
- Design consumer contracts top-down and execute module changes bottom-up.
- Prove ready-wave parallelism for disjoint leaf modules.
- Measure context quality, handoff defects, integration conflicts, and
  validation cost.
- Update the canonical workflow only from evidence produced by the pilot.
- Exclude making Hive part of internal development orchestration.

## Acceptance criteria

- [x] Every reached node has an exact baseline, isolated workspace, and verified
      commit handoff; optional human evidence does not control execution.
- [x] No child exceeds hierarchy depth three or schedules an undeclared child.
- [x] Provider evidence is verified before the consumer workspace begins.
- [x] The consumer starts from and reads the accepted provider and WASM
      contract frontier.
- [x] Parent integration, focused local validation, review, and squash merge
      complete successfully.
- [x] Pilot findings are reflected into existing authorities without creating
      duplicate workflow prose.

## Progress

- A single focused test drives the real validator, workspace, handoff, and
  integration APIs through `nook-core` to `nook-wasm/nook-core-wasm` to
  `nook-web-shared`.
- The pilot proves three exact integrated baselines, inherited provider output,
  deterministic first-parent ancestry, source immutability, and complete
  cleanup.
- Squash-merged [Nook PR
  #1160](https://github.com/meta-secret/nook/pull/1160).

## Findings and decisions

- A module node is not automatically a pull request. PR boundaries remain
  independently mergeable feature slices.
- The harness agent owns dispatch and communication. Repository tooling owns
  only reviewed module policy and deterministic Git safety checks.

## References

- `.cortex/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`
