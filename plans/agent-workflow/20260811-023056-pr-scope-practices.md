---
title: Bound pull request scope and plan multi-PR delivery
feature: agent-workflow
issue: issues/unplanned/README.md
started_at: 2026-08-11T02:30:56Z
agent: codex
---

# Bound pull request scope and plan multi-PR delivery

## Interpreted request

Improve Nook's durable pull request practices so large features are delivered
as a planned sequence of reviewable, module-focused changes. Require agents to
estimate change size before implementation. Keep each pull request near or
below 5,000 authored changed lines. Preserve full feature ownership across the
sequence instead of treating later slices as optional follow-up work.

## Requirements

- Define a consistent approximate measure for authored changed lines.
- Require the task plan to estimate size, modules, interfaces, and PR slices.
- Split work before implementation when one PR is expected to exceed the
  threshold.
- Keep each PR independently coherent, testable, and mergeable.
- Prefer one cohesive module or architectural layer per PR.
- Preserve stable, narrow public interfaces between slices.
- Model a large feature in Workbench and implement its focused issues in order.
- Continue through every planned PR until the requested functionality is done.

## Constraints and exclusions

- This task changes policy documentation only.
- It does not add a CI gate for diff size.
- The threshold is a planning and review boundary, not permission to pad or
  mechanically split code.
- Generated files, lockfiles, snapshots, and vendored sources must not distort
  the estimate.
- The expected Nook diff is below 500 authored changed lines and remains inside
  the `.cortex` workflow/documentation module.

## Initial plan

1. Audit the current PR, issue, architecture, and agent workflow guidance.
2. Add one canonical pull request scope contract.
3. Link the contract from the top-level agent rules and delivery workflow.
4. Update Workbench planning guidance for multi-PR feature sequences.
5. Run cortex consistency and density audits.
6. Deliver the documentation through one exact-head validated PR.

## Completion evidence

- The owning `.cortex` docs agree on the 5,000-line planning boundary.
- Plans require estimates and a PR sequence when the feature is larger.
- Guidance favors cohesive module slices and stable interfaces.
- Workbench guidance retains every slice until the feature is complete.
- Cortex link and density audits pass.
- The Nook pull request is squash-merged after exact-head readiness succeeds.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data,
raw logs, local paths, or unnecessary infrastructure details.
