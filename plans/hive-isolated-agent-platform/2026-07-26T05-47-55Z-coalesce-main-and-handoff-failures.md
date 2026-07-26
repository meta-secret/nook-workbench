---
title: Coalesce Main verification and hand failures to Hive
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-26T05:47:55Z
agent: codex
---

# Coalesce Main verification and hand failures to Hive

## Interpreted request

Extend the Hive platform delivery with an efficient Main build train: preserve
completed verification work while retaining only the newest pending Main
revision, keep pull-request validation intact, and turn failed Main runs into
deduplicated Workbench tasks that the existing agent worker can claim.

## Requirements

- Allow one Main workflow to run to completion while at most the newest pending
  Main revision waits.
- Preserve the existing Native Rust then WASM cache-publication order so shared
  BuildKit cache scopes cannot be written concurrently.
- Keep current pull-request validation behavior unchanged.
- Add a trusted completed-Main handoff that records actionable failure context
  as a ready automated Workbench issue without copying raw logs.
- Reuse or update an existing unresolved incident for the same failed revision
  and avoid creating work for cancelled or successful Main runs.
- Cover concurrency, trust-boundary, failure-selection, and Workbench-record
  behavior with focused workflow contract tests.

## Constraints and exclusions

- Do not parallelize Main cache writers or change cache scopes in this task.
- Do not remove pull-request checks or introduce a merge queue.
- Do not fix unrelated browser or extension end-to-end failures in this
  iteration.
- Workbench records must contain no credentials, secrets, raw logs, or private
  environment details.

## Initial plan

1. Add contract tests for the Main concurrency and cache-order invariants.
2. Implement one-running/one-latest-pending Main concurrency.
3. Implement and test the trusted Main-failure Workbench handoff.
4. Update the CI workflow documentation with the new build-train behavior.
5. Format, push the existing feature PR, monitor exact-head checks, resolve
   feedback, and complete the feature delivery lifecycle.

## Completion evidence

- Workflow tests prove Main does not cancel an active run and WASM still depends
  on Native Rust.
- Failed trusted Main runs create or refresh a validated ready automated
  Workbench incident; non-failures do not.
- Exact-head repository-owned PR checks and readiness audit pass before squash
  merge.
- The linked Workbench issue, completion worklog, and agent statistics record
  the delivered behavior.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data,
  raw log, local path, or unnecessary infrastructure detail.
