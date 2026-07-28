---
title: Deliver Hive alerts and attention triage
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-control-center-alerts.md
started_at: 2026-07-28T16:36:17Z
agent: codex
---

# Deliver Hive alerts and attention triage

## Interpreted request

Continue the staged Hive observability roadmap with its next unfinished
release: typed alerts and a usable “needs attention” workflow, while preserving
the existing read-only security boundary.

## Requirements

- Model alert semantics and ordering in Rust from durable Hive state.
- Keep alerts bounded, sanitized, deterministic, and free of raw logs or model
  reasoning.
- Expose alert projections through the existing observer coordinator protocol.
- Turn the Control Center’s attention area into a concise triage queue with
  direct navigation to affected task details.
- Preserve English and Russian parity, responsive behavior, keyboard access,
  focus visibility, light/dark themes, and honest loading/error/empty states.
- Add behavior-focused Rust coverage and focused Playwright demonstration.

## Constraints and exclusions

- No cancel, retry, pause, priority, enqueue, acknowledgement, or worker-drain
  controls.
- No outbound email, chat, or paging integration in this release.
- No browser access to Neo4j credentials or arbitrary graph queries.
- No separate alert database or broker; Neo4j task state remains authoritative.

## Initial plan

1. Finish and merge the existing Neo4j credential-normalization hardening PR.
2. Branch from current Main and map current observer projections, task state,
   translations, and Control Center attention UI.
3. Add typed alert derivation, stable ordering, clearing, and bounded observer
   projections with Rust tests.
4. Implement the Operate-mode attention queue using incumbent Control Center
   components and visual language.
5. Add localized accessible states and focused browser coverage.
6. Run repository formatting and the UI demo contract, push a coherent PR,
   address existing feedback, pass exact-head GitHub Actions, and squash-merge.
7. Publish the completed Workbench issue, linked worklog, and agent statistics.

## Completion evidence

- Merged Nook pull request with green exact-head Hive and PR workflows.
- Rust behavior tests for all alert rules, ordering, clearing, and bounds.
- Focused browser evidence for active, empty, and unavailable attention states.
- Updated operator and observation-model documentation.

## Safety review

This plan is public-safe. It contains no raw prompt, transcript, secret,
credential, private infrastructure value, or unbounded operational log.
