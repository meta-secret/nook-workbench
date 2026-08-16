---
title: Obsolete Hive Main-repair retirement summary
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/README.md
plan: plans/hive-isolated-agent-platform/20260816T200954Z-retire-obsolete-main-repairs.md
status: completed
started_at: 2026-08-16T20:09:54Z
finished_at: 2026-08-16T20:15:08Z
agent: codex
---

# Work summary

## Outcome

Retired nine obsolete Main-repair deliveries without changing their branches,
pull requests, reviews, or validation state. Seven queued or stale incident
records now cite successful descendant Main run
[31834552729](https://github.com/meta-secret/nook/actions/runs/31834552729).
Two additional incident records already contained their own successful
replacement evidence and received the missing retirement signal.

## Progress

- Confirmed every newly completed incident source SHA is contained in the
  successful descendant Main revision.
- Preserved the active deliveries associated with Nook PRs
  [#1027](https://github.com/meta-secret/nook/pull/1027) and
  [#1028](https://github.com/meta-secret/nook/pull/1028).
- Published retirement through Workbench so Hive used its durable cancellation
  and worker-termination lifecycle.
- Confirmed none of the nine target deliveries remains running or ready.

## Decisions

- Preserved incident history and appended retirement evidence instead of
  deleting records.
- Did not delete worker Pods directly because that would permit task
  reclamation without a durable cancellation transition.
- Left newer repeated failures available for current root-cause repair rather
  than retiring them without replacement ownership.

## Validation

- Workbench sensitive-content scanning passed before each publication.
- Git ancestry checks passed for all seven descendant-Main retirements.
- Hive durable state confirmed eight targets cancelled. The remaining target
  had already reached terminal failed state before retirement reconciliation;
  its Workbench incident is done and it is not claimable.
- The Hive queue contracted from 17 ready deliveries to 9 during the cleanup.

## Remaining work

- Current workers continue the newest Main failure and the two preserved
  pull-request delivery graphs.
- Repeated newer failures can be collapsed after one current repair owns each
  shared failure signature.
