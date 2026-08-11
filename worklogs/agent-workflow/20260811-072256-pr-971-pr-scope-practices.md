---
title: PR 971 bound pull request scope
feature: agent-workflow
issue: none
plan: plans/agent-workflow/20260811-023056-pr-scope-practices.md
nook_pr: https://github.com/meta-secret/nook/pull/971
status: completed
started_at: 2026-08-11T02:30:56Z
finished_at: 2026-08-11T07:22:56Z
agent: codex
---

## Outcome

Merged Nook PR 971. Nook now treats 5,000 authored changed lines as a hard pull-request ceiling and requires feature-level estimates, module ownership, interface decisions, ordered PR slices, and acceptance evidence before implementation.

## Progress

- Added concise pull-request scope rules to the Cortex entry point and aligned the pull-request, issue, monorepo, and coding-agent workflows.
- Required agents to estimate the full feature and current PR before implementation.
- Required multi-PR features to publish an ordered sequence and continue through every slice until the feature is complete.
- Favored module-local slices with explicit ownership, narrow interfaces, and SOLID dependency direction.
- Added Workbench plan fields and validation for change budgets, owning boundaries, public interfaces, delivery shape, and acceptance evidence.
- Added scheduled-agent plan checks and a staged implemented-diff budget gate before push.
- Counted authored additions and deletions from NUL-delimited Git numstat while reporting generated, lockfile, snapshot, vendor, binary, and pure-rename rows separately.
- Rejected unresolved placeholders, malformed estimates, copied source-task excerpts, ambiguous delivery shapes, hidden authored source counts, and incomplete PR sequences.
- Added focused validator and TypeScript behavior coverage for the new contracts.

## Implementation problems

- Review found several progressively narrower validation bypasses, including malformed number grouping, punctuation-wrapped placeholders, short copied prompt fragments, rename limits, generated files outside conventional directories, and source files marked binary through attributes.
- Two complete validation runs failed for unrelated hosted-extension timing and BuildKit registry transfer faults; exact-head reruns passed.
- Two validation runs were intentionally canceled after newer review-fix heads made them obsolete.
- The branch policy blocked the ordinary squash merge after readiness because of the known deployment ordering. Auto-merge remained blocked, so the authorized admin squash path completed the merge.

## Decisions

- Use a hard ceiling rather than advisory guidance so oversized implementation diffs cannot reach push.
- Exclude non-authored churn from the ceiling, but surface every excluded category in logs.
- Fail closed when Git attributes hide the line count of a source file.
- Require ordered, independently mergeable slices for any feature estimated above one PR.
- Preserve one Workbench feature plan while using one focused issue and one PR per slice.
- Allow `None` for public-interface changes, but reject unresolved interface placeholders.

## Validation

- `node --test .github/scripts/workbench-records.test.cjs`: 54 tests passed.
- `bun test agentic-ai/ci-agent/src/test/git.test.ts`: 4 tests passed.
- `task format` passed after the final review fixes.
- `task loom:pre-push` passed after the final review fixes.
- Final complete exact-head validation: https://github.com/meta-secret/nook/actions/runs/31468212566
- `task pr:ready PR=971` passed on head `c6bc1d9ee15a1d759262b91fd5df243847ceb550` with zero unresolved conversations.
- Squash merge commit: `b0afc1cdcf5fb108c59c2126eaa0cf2849e2dd00`.

## Remaining work

None.
