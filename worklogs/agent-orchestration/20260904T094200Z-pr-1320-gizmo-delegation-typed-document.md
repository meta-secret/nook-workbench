---
title: Gizmo delegation typed YAML delivery
feature: agent-orchestration
issue: null
plan: plans/agent-orchestration/20260904T085933Z-gizmo-delegation-typed-document.md
nook_pr: 1320
status: completed
started_at: 2026-09-04T08:10:00Z
finished_at: 2026-09-04T09:41:43Z
agent: codex
---

# Gizmo delegation typed YAML delivery

## Outcome

Gizmo delegation plans now use typed document classes with stable task IDs,
owners, descriptions, and explicit `depends_on` edges. The trusted
executable-skill host serializes the document with the shared YAML library.
Agent activity metadata keeps its original fields in a fenced text block, with
the description rendered as ordinary Markdown below it.

## Progress

- Replaced the tree string renderer and handwritten YAML builder with typed
  delegation document and task classes.
- Kept YAML parsing and serialization inside the trusted executable-skill host.
- Updated the delegation consumer workflow, result verifier, host integration
  coverage, and activity-format contract.
- Added boundary coverage for special characters, C1 controls, maximum-size
  plans, typed fields, and task and dependency ordering.
- Addressed and resolved all review findings before squash-merging PR 1320.

## Implementation problems

- Direct YAML-library use inside the capability-limited skill failed hosted
  policy. The design was corrected so the skill returns typed data and the
  trusted host owns serialization.
- The first correction used handwritten YAML assembly. It was replaced with
  typed classes and shared-library serialization.
- Review exposed stale activity-format enforcement and ineffective verifier
  tampering coverage. Both were corrected with focused deterministic tests.
- Main advanced during delivery, so the branch was synchronized and exact-head
  validation and review were repeated.

## Decisions

- The delegation model is a DAG represented by explicit `depends_on` task IDs.
- Task IDs identify dependency targets; descriptions explain the human intent.
- The skill owns typed plan construction and verification, while the trusted
  host exclusively owns YAML parsing, quoting, and serialization.
- Agent activity descriptions remain outside the fenced metadata block.

## Validation

- Delegation skill verification passed with 9 tests and 23 assertions.
- Executable-skill host checks passed with 14 CLI tests and 142 assertions.
- Activity-format contract passed with 3 tests and 18 assertions.
- `task loom:pre-push PR=1320` passed on the final authored change.
- Exact-head Repository policy passed, Codex review settled clean, and
  `task pr:ready PR=1320` reported ready.
- Nook PR 1320 squash-merged as commit `8ae21b213`.

## Remaining work

None.
