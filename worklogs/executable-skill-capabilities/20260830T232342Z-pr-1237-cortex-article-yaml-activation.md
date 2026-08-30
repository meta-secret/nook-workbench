---
title: Activate Cortex article YAML action
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/cortex-article-activation.md
plan: plans/executable-skill-capabilities/20260830T220613Z-discoverable-yaml-native-stack.md
nook_pr: 1237
status: completed
started_at: 2026-08-30T22:06:13Z
finished_at: 2026-08-30T23:23:42Z
agent: codex
---

# Work summary

## Outcome

Delivered the statically registered Cortex article action through [Nook PR #1237](https://github.com/meta-secret/nook/pull/1237). Exact source head `4c5c880ec6c490a1edc49d300ed8d7517dda17ce` squash-merged as `8b6ad02770796b9937d71377bd4a4b11fcf732fd`. Together with predecessor PR #1236, this completes the discoverable inline-YAML protocol and its first owner-local executable skill application.

## Progress

- Added the co-located article schema adapter and registered it in the reviewed static action catalog.
- Added strict multiline inline-YAML invocation with exact Cortex article diagnostic compatibility.
- Kept Markdown input HTML-free and added no browser or HTML parsing authority.
- Aligned schema and provider string bounds on JavaScript UTF-16 code units, including exact astral-character boundary regressions.
- Preserved automatic all-owner executable-package discovery, frozen installs, and fail-closed source and configuration audits.
- Kept every agent and subagent lifecycle transition in the active harness; the skill action returns only validated results.
- Kept the successor at 11 changed paths and 972 authored and raw changed lines.

## Implementation problems

- GitHub rewrote the successor head when the predecessor squash-merged and retargeted the draft to `main`, requiring exact delta reconstruction and full revalidation.
- Exact-head review found that discovery schemas counted Unicode code points while the provider counted UTF-16 code units, allowing astral strings to disagree at the boundary.

## Decisions

- Use JavaScript UTF-16 code-unit length consistently in schema discovery and provider validation because it preserves the existing provider contract without weakening bounds.
- Keep article activation in its own semantic successor so both native-stack PRs remain below the 2,000-authored-line delivery bound.
- Close the protocol and article-activation issues while keeping the broader executable-skill feature in progress for its unrelated open capability migrations.
- Omit local execution durations from agent statistics because no timestamped local execution journal was retained; preserve verified gate outcomes here instead.

## Validation

- Executable-skill packages: 29 of 29 and 30 of 30 tests passed.
- Focused protocol and article suites: 82 of 82 tests passed.
- Full `task loom:verify`: 656 of 656 tests passed with 4,492 assertions.
- Module and structural expert audits, source and configuration architecture, TypeScript state, Cortex audit, `task loom:pre-push`, and diff checks: passed.
- Exact-head Codex review: clean after the Unicode boundary correction.
- [PR workflow run 33341338685](https://github.com/meta-secret/nook/actions/runs/33341338685): passed on the exact source head.
- Repository readiness: passed before squash merge.

## Remaining work

No remaining work for the YAML protocol or Cortex article activation issues. The broader executable-skill feature retains its separately tracked open capability migrations.
