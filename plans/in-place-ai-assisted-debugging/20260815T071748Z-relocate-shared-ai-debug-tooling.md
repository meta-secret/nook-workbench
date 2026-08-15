---
title: Relocate shared AI-debug tooling out of Codex configuration
feature: in-place-ai-assisted-debugging
started_at: 2026-08-15T07:17:48Z
agent: codex
---

# Relocate shared AI-debug tooling out of Codex configuration

## Interpreted request

Clarify the ownership boundary of the repository's Codex directory. Preserve
active AI-debug behavior while moving shared executable support files to the
central repository tooling location and leaving Codex-owned configuration in
place.

## Requirements

- Inventory every file currently stored in the Codex project directory.
- Prove whether each executable or runtime module has live callers.
- Retain active Playwright MCP security and session-isolation behavior.
- Update Codex, Cursor, Task, validation, comments, and runbook references to
  the canonical shared-tooling paths.
- Deliver and validate the refactor through the standard Nook pull-request
  lifecycle.

## Constraints and exclusions

- Do not remove scripts solely because their callers are indirect.
- Do not weaken the local-origin allowlist, isolated browser profile, output
  cleanup, or narrow MCP tool exposure.
- Keep actual Codex project configuration and hook configuration under the
  location recognized by Codex.
- Do not change application behavior or user-visible interfaces.

## Change budget and PR sequence

- Estimated authored changed lines: 220
- Owning modules, packages, or layers: repository AI-debug tooling, agent host configuration, and the AI-debug runbook
- Public or cross-module interfaces: Playwright MCP launcher and init-module paths consumed by Codex, Cursor, Task, and Cortex documentation
- Delivery shape: One PR
- Current PR estimated authored changed lines: 220
- Current PR slice and acceptance evidence: Relocate shared AI-debug support files and update all consumers; Acceptance evidence: no stale paths remain, the AI-debug configuration check passes, pre-push hygiene passes, and exact-head PR validation is green
- PR slices and acceptance evidence:
Relocate shared AI-debug support files and update all consumers; Acceptance evidence: no stale paths remain, the AI-debug configuration check passes, pre-push hygiene passes, and exact-head PR validation is green

## Initial plan

1. Trace the scripts, runtime module, data file, and configuration consumers.
2. Move shared AI-debug assets into the central repository scripts directory.
3. Update every configuration, Task, source comment, validator, and runbook
   reference.
4. Exercise the focused configuration check and repository pre-push contract.
5. Publish, review, validate, merge, and record delivery evidence.

## Completion evidence

- The Codex directory contains only Codex-recognized project configuration.
- Shared AI-debug tooling has one canonical location under repository scripts.
- Codex and Cursor configurations reference the relocated launcher and policy.
- The focused AI-debug check, repository pre-push contract, exact-head checks,
  and readiness audit pass for the delivered commit.

## Safety review

- The record contains public repository structure and workflow intent only.
- It contains no transcripts, credentials, private data, raw logs, local
  machine paths, or infrastructure values.
