---
title: Route remaining GitHub workflow shell into Taskfile
feature: agent-workflow
issue: none
started_at: 2026-08-05T16:35:08Z
agent: cursor
---

# Task plan

## Interpreted request

Audit every Nook GitHub Actions workflow for inline shell. Keep pure Actions glue in YAML. Move reusable product, deploy, verify, and audit logic into Taskfile-backed commands (and shared scripts where the body is large), then ship that change through PR validation and squash merge.

## Requirements

- Inspect each workflow under `.github/workflows/`.
- Leave event parsing, artifact attestation, `gh api` waits, Workbench publishing, and thin `GITHUB_OUTPUT` adapters in workflows.
- Extract reusable deploy, domain reconcile/verify, release metadata, dependency audits, Hive console verify, web-research verify/deploy, source-architecture enforcement, ci-agent smoke, coverage staging, and Docker prune into Task tasks.
- Prefer thin Task wrappers around scripts when a shell body is large or shared across main/release/PR.
- Preserve existing Cloudflare, release, and preview behavior while making the same commands invocable via `task`.
- Open a PR, run exact-head validation, fix failures, resolve actionable feedback, and squash-merge when ready.

## Constraints and exclusions

- Do not invent new deploy targets or change production domain contracts.
- Do not move GitHub-only orchestration (label gates, trusted handoff manifests, WASM wait loops).
- Do not mix Workbench content into the Nook PR.
- Keep authored files at or under the 1,000-line limit; split large shell into scripts rather than bloating Taskfiles.
- Avoid heavy local product builds; validate on GitHub Actions.

## Initial plan

1. Publish this plan and continue the existing CI/Taskfile branch.
2. Add shared scripts plus Task entries for PR/main/release Cloudflare deploy and domain verify flows.
3. Add Task entries for remaining YES shells (coverage staging, release metadata, cargo outdated, Hive console, web research, source architecture, ci-agent smoke, Docker prune).
4. Replace matching workflow `run:` bodies with thin `task` invocations and output adapters.
5. Format, push, open/update the PR, validate, fix, and squash-merge.

## Completion evidence

- Workflows with previously reusable shell invoke Task commands instead.
- New or updated Task entries are listed and callable.
- Exact-head PR checks are green and the PR is squash-merged.
- Workbench worklog and PR statistics are published after merge.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw logs, or local machine paths.
