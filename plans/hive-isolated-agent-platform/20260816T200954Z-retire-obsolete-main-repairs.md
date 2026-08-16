---
title: Retire obsolete Hive Main-repair incidents
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/README.md
started_at: 2026-08-16T20:09:54Z
agent: codex
---

# Task plan

## Interpreted request

Retire obsolete Hive Main-repair incidents that are consuming workers or
waiting in the durable queue after a later descendant Main revision passed.
Preserve the two active repairs that already own useful pull requests.

## Requirements

- Prove each retired source revision is contained in a later successful Main
  revision.
- Update the existing incident rather than deleting its history.
- Use the documented retirement marker so Hive performs its cancellation
  handshake.
- Leave active repair pull requests and their owning incident records
  untouched.

## Constraints and exclusions

- Do not delete worker Pods directly.
- Do not alter pull requests, reviews, checks, or branches.
- Do not retire newer repeated failures until one current repair owns their
  shared failure signature.
- Keep public records free of raw logs and infrastructure details.

## Initial plan

1. Inspect current Hive queue, worker, Workbench, and GitHub Main state.
2. Identify obsolete incidents and confirm a successful descendant Main SHA.
3. Publish one atomic Workbench retirement update.
4. Verify the dispatcher acknowledges cancellation and the queue contracts.
5. Publish a concise Workbench completion record.

## Completion evidence

- Seven incident records marked done with descendant Main evidence.
- Two already-completed incident records supplied with their missing
  retirement signal.
- Hive durable state no longer reports those incidents as active.
- The two useful active Hive pull requests remain untouched.

## Safety review

This plan contains no raw prompt, transcript, secret, private data, raw log,
local path, or unnecessary infrastructure detail.
