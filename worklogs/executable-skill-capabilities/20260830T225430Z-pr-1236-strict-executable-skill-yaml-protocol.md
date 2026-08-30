---
title: Deliver strict executable-skill YAML protocol
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/discoverable-yaml-protocol.md
plan: plans/executable-skill-capabilities/20260830T220613Z-discoverable-yaml-native-stack.md
nook_pr: 1236
status: completed
started_at: 2026-08-30T22:06:13Z
finished_at: 2026-08-30T22:54:30Z
agent: codex
---

# Work summary

## Outcome

Delivered the provider-neutral strict YAML protocol through [Nook PR #1236](https://github.com/meta-secret/nook/pull/1236). Exact source head `5511c12dafe2884396f3a5163e1edbc2c354a836` squash-merged as `d94f1b56711f7b0b404590696664fe7efa6a1ff4`. This completes only the protocol predecessor; the executable-skill feature remains in progress while PR #1237 adds the article action.

## Progress

- Added deterministic no-argument and `--tools-list` discovery for the static provider-neutral host.
- Added the single-token `--request-yaml=<multiline YAML>` transport with strict domain roots, bounded typed responses, and redacted failures.
- Rejected alternate file, path, stdin, split-argument, generic-envelope, ambiguous-YAML, and over-capacity inputs.
- Preserved frozen package installs, automatic all-owner executable-package discovery, and existing fail-closed source and configuration audits.
- Kept agent and subagent lifecycle authority in the active harness.
- Kept the protocol slice below the 2,000-authored-line delivery bound at 1,910 raw and 1,703 authored changed lines.

## Implementation problems

- The complete protocol and article activation implementation exceeded the semantic PR budget, so delivery was split into an ordered native two-PR stack.
- The predecessor therefore exposes only the static protocol and `skillToolsList`; article schema registration and execution remain isolated in the successor.

## Decisions

- Use one inline YAML argument instead of files or stdin so transport authority remains explicit and bounded.
- Keep the registry static and read-only; dynamic action loading, process execution, network access, repository mutation, and autonomous lifecycle remain prohibited.
- Keep the Workbench feature `in_progress` until PR #1237 completes article execution and diagnostic parity.
- Omit local execution durations from agent statistics because no timestamped local execution journal was retained; preserve verified gate outcomes here instead.

## Validation

- Executable-skill packages: 29 of 29 and 23 of 23 tests passed.
- Focused protocol suites: 82 of 82 tests passed.
- Full `task loom:verify`: 656 of 656 tests passed with 4,474 assertions.
- Module and structural expert audits, source architecture, TypeScript state, Cortex audit, and `task loom:pre-push`: passed.
- [Exact-head Codex review](https://github.com/meta-secret/nook/pull/1236#issuecomment-5471725082): clean with zero findings.
- [PR workflow run 33339983492](https://github.com/meta-secret/nook/actions/runs/33339983492): passed on the exact source head.
- Exact Pages deployment and preview verification: passed.

## Remaining work

PR #1237 must deliver the article schema adapter, static action registration, multiline invocation, and exact diagnostic parity before the feature can move to `done`.
