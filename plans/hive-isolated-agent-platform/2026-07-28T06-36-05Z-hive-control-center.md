---
title: Deliver the first Hive Control Center
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-control-center.md
started_at: 2026-07-28T06:36:05Z
agent: codex
---

# Deliver the first Hive Control Center

## Interpreted request

Make Hive understandable enough to become the gradual default for agentic work.
The first delivery must replace fragmented low-level inspection with a usable,
read-only operator surface that explains task triggers, current execution,
history, dependencies, failures, and worker health.

## Requirements

- Preserve operator-relevant activity durably across disposable worker Pods.
- Keep Neo4j as the task and activity system of record without adding a message
  broker.
- Provide typed, bounded, sanitized observation data rather than raw graph
  access, raw logs, secrets, or model chain-of-thought.
- Deliver a calm, dense, responsive Svelte operator dashboard with truthful
  loading, empty, active, blocked, failed, completed, stale, and unavailable
  states.
- Reuse the existing Hive deployment, task lifecycle, Nook design conventions,
  repository formatting, browser-demo, GitHub Actions, review, and squash-merge
  workflows.
- Document the observation architecture and operator access.

## Constraints and exclusions

- This release is read-only. Retry, cancel, pause, priority, enqueue, and worker
  maintenance controls require a later audited command boundary.
- GitHub and Workbench links may be projected from durable Hive metadata, but
  the browser must not receive credentials.
- Activity content and history are bounded to avoid turning Neo4j into a raw log
  archive.
- The implementation starts from the latest remote Main revision and does not
  modify unrelated active worktrees.

## Initial plan

1. Update the implementation worktree to current Main and map the existing Hive
   storage, worker progress, deployment, and web package conventions.
2. Add typed task activity and observer projections to the Rust domain and
   Neo4j store with behavior-focused coverage.
3. Add a read-only observer service and Kubernetes deployment boundary.
4. Build the Svelte overview and task-detail experience with responsive,
   accessible, translated states and focused browser coverage.
5. Update architecture and operations documentation, format on the host, and
   pass the UI demo contract.
6. Push a coherent PR, resolve repository-owned CI and existing review
   feedback, squash-merge, and publish the linked Workbench worklog and agent
   statistics.

## Completion evidence

- A merged Nook pull request with green exact-head repository-owned checks.
- Rust behavior tests for durable activity and observer projections.
- Focused browser demonstration covering live overview and task-detail states.
- Updated Hive architecture, deployment, and operator documentation.
- Published Workbench issue update, linked worklog, and AI-agent statistics.

## Safety review

This record contains a synthesized public-safe task interpretation. It contains
no raw prompt, transcript, secret, private data, raw log, local path, or
unnecessary infrastructure detail.
