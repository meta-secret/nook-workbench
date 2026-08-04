---
title: Repair plan for failed persistent-route browser verification
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-2a092671287bca3c174b6f30d758c27d73047013.md
started_at: 2026-08-04T22:35:00Z
agent: codex
---

# Repair plan for failed persistent-route browser verification

## Interpreted request

Restore trusted Main browser verification after persistent workspace routing
interfered with protected-vault and Sentinel ceremony flows.

## Requirements

- Diagnose the retained Web e2e failure and implement the smallest durable fix.
- Keep workspace URLs non-sensitive and preserve vault protection boundaries.
- Add focused browser regression coverage, validate the exact PR head remotely,
  squash-merge, and verify the resulting Main run.

## Constraints and exclusions

- Preserve the failed revision and its workflow evidence.
- Do not weaken cache isolation, bypass checks, or push to Main directly.
- Do not include raw workflow logs, credentials, or vault data in Workbench.

## Initial plan

1. Trace route synchronization against the failed browser flows.
2. Correct route handling and extend the affected browser regression.
3. Format, publish a labeled Hive PR, and run exact-head full validation.
4. Resolve feedback, squash-merge, verify Main, then publish completion records.

## Completion evidence

- Linked repair PR, exact-head checks, green Main run, and Workbench worklog
  documenting the root cause and validation.

## Safety review

This plan is a public-safe summary and contains no raw prompt, chat transcript,
secrets, private data, raw logs, local paths, or unnecessary infrastructure
details.
