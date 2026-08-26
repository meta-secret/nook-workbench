---
title: Complete harness-native module delivery
feature: agent-workflow
issue: issues/agent-workflow/typed-module-context-and-read-only-dag.md
started_at: 2026-08-26T17:15:10Z
agent: codex
---

# Complete harness-native module delivery

## Interpreted request

Finish the contract-first, bottom-up module-delivery mission while using the
active Codex, Cursor, or equivalent harness for subagent lifecycle. Nook
supplies reviewed module contracts and deterministic Git safety primitives. It
does not create a competing agent scheduler or transcript protocol.

## Requirements

- Design consumer contracts top-down and execute provider modules bottom-up.
- Validate a typed module DAG with stable node identities, dependencies,
  resource claims, write scopes, tests, and acceptance evidence.
- Give each write attempt a clean disposable worktree at an exact baseline.
- Verify commit handoffs, declared paths, ancestry, cleanliness, and evidence.
- Integrate accepted commits deterministically and give each dependent an exact
  integrated baseline.
- Isolate retries from failed workspaces and keep shared files under one
  delivery owner or an explicit integration node.
- Bound hierarchy depth and reject undeclared or conflicting resource claims.
- Prove the workflow with a bounded `nook-core` to `nook-wasm` to web fixture.

## Constraints and exclusions

- The active harness owns subagent creation, communication, cancellation,
  barriers, retries, and nested delegation.
- Nook does not add an embedded model runner, custom agent scheduler,
  transcript parser, or harness-specific adapter.
- JSONL journals and Markdown summaries are optional human observability. They
  cannot gate dispatch, continuation, retries, joins, or completion.
- The module dependency DAG is separate from the harness parent-child tree.
- Executable-skill registries, Docker, Hive, and hosted browser E2E are outside
  this work.
- Every Nook PR targets fewer than 3,000 authored changed lines and remains
  independently mergeable.

## Initial plan

1. Correct the harness authority boundary and add a typed module-plan validator
   with stable dry-run waves.
2. Add harness-neutral disposable-worktree preparation and fail-closed commit
   handoff inspection.
3. Add deterministic parent integration and exact downstream frontier checks.
4. Prove the complete protocol on a purpose-built Rust, WASM, and web dependency
   chain, then promote only evidence-backed rules.

## Completion evidence

- Each slice merges from current Main without depending on unmerged foreign
  work.
- Focused local tests pass without Docker or hosted browser E2E.
- The three existing issues and their worklogs link the merged PRs and final
  evidence.
- Cortex describes only behavior proven by the completed pilot.

## Safety review

- This public plan contains architecture and validation intent only. It has no
  prompts, transcripts, raw logs, secrets, private paths, or infrastructure
  details.
