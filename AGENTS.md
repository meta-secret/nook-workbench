# Nook Workbench Agent Contract

This repository is the development context companion to
`meta-secret/nook`. It is not a product source repository and does not replace
Nook's `.cortex` architecture and workflow rules.

## Records

- Put planned, blocked, deferred, or independently deliverable work in
  `issues/<feature>/<issue>.md`.
- Put feature-wide context and the issue index in
  `issues/<feature>/README.md`.
- Put every task-owning agent's completion or blocked summary in
  `worklogs/<feature>/<timestamp>-<issue-or-pr>.md`.
- Put Nook PR statistics in `stats/ai-agent/<pr-number>.yaml`.
- Put Nook Main workflow statistics in
  `stats/main-build/<run-id>-attempt-<attempt>.yaml`.

## Safety

Never store secrets, credentials, environment values, vault data, prompt or chat
transcripts, private user information, or raw logs. Summarize only the
development facts another agent needs to resume or understand the work.

## Issue lifecycle

Valid statuses are `proposed`, `ready`, `in_progress`, `blocked`, `done`, and
`cancelled`.

- `proposed`: scope or decisions are still being shaped.
- `ready`: acceptance criteria are complete enough to implement.
- `in_progress`: an agent or human has claimed the work.
- `blocked`: work started but cannot continue; explain the blocker.
- `done`: acceptance criteria are delivered and validated.
- `cancelled`: deliberately abandoned; explain why.

`automation` is either `manual` or `agent`. Only `status: ready` together with
`automation: agent` authorizes Nook's agent workflow to claim the record.

## Editing rules

Search before creating a record. Update the existing feature or issue when it
already owns the work. Preserve prior findings and decisions; append progress
rather than erasing history. Use ISO 8601 UTC timestamps. Keep links absolute
across repositories.

An agent completing a Nook task must update the associated issue and add a
worklog. If no issue existed because the task arrived directly from a user,
the worklog alone is required.
