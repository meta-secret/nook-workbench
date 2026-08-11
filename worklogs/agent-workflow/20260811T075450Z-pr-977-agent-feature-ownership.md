---
title: PR 977 enforce agent feature ownership
feature: agent-workflow
issue: none
plan: plans/agent-workflow/20260811T065104Z-agent-feature-ownership.md
nook_pr: https://github.com/meta-secret/nook/pull/977
status: completed
started_at: 2026-08-11T06:51:04Z
finished_at: 2026-08-11T07:54:25Z
agent: codex
---

## Outcome

Merged Nook PR 977. Agents now have a hard rule to mutate only their assigned
feature and focused issue set. Other active tasks remain read-only unless the
user, owner, or orchestrator explicitly hands them over.

## Progress

- Added the canonical agent-feature-ownership Cortex skill and executable
  wrappers.
- Linked ownership checks from the agent entry point, coding workflow,
  pull-request workflow, issue workflow, and task skill.
- Added a Rust preflight contract that protects the ownership guidance and
  bounded-worker handoff behavior.
- Required prompt-backed automation to name a continuing GitHub owner.
- Required issue-backed automation to use an assignable Workbench owner with
  Nook write access.
- Made scheduled scans skip ownerless and non-assignable records so they cannot
  starve later eligible work.
- Made successful bounded runs assign the generated PR, verify the assignment,
  and directly mention the continuing owner before exit.
- Added the continuing owner and exact scope to the generated PR body.

## Implementation problems

- Review found that recording an owner in PR prose did not create a concrete
  continuation handoff.
- Review found that an ownerless ready record could stop every later scheduled
  candidate.
- Review found dense Cortex examples and safety bullets that needed separate
  statements.
- An early static contract expected wording that differed from the canonical
  skill's gerund forms.
- One local formatting attempt hit a transient Docker snapshot extraction
  error. A retry passed without restarting the Docker daemon.

## Decisions

- Treat related subject matter as insufficient evidence of ownership.
- Allow read-only inspection to detect conflicts without transferring work.
- Make a generated PR handoff concrete through GitHub assignment plus a direct
  mention.
- Require the continuing owner to be an assignable Nook collaborator with
  write access.
- Skip invalid scheduled candidates, but fail an explicitly requested invalid
  issue before implementation.

## Validation

- `task format` passed after the final review fixes.
- `task loom:cortex-audit` passed with no broken links, missing index entries,
  missing wrappers, or density findings.
- The UI demo contract reported no UI change and required no demo.
- Complete exact-head validation passed:
  https://github.com/meta-secret/nook/actions/runs/31470405182
- `task pr:ready PR=977` passed on head
  `76d68c4a86dd1c03f0432f8ab776b73d1ce1e702` with zero unresolved
  conversations.
- Squash merge commit: `125b65209e799117dc48bcdd37d365896597fab2`.

## Remaining work

None.
