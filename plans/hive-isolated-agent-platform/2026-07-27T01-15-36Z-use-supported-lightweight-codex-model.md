---
title: Use a supported lightweight Codex model in Hive
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T01:15:36Z
agent: codex
---

# Task plan

## Interpreted request

Restore live Hive task execution after deployment by selecting the explicit
lightweight GPT-5.6 Codex model supported by the cluster's ChatGPT
authentication, while retaining low reasoning effort and completing delivery
through merge, deployment, and a durable task retry.

## Requirements

- Replace the rejected bare model alias with the supported lightweight GPT-5.6
  Codex model.
- Keep low reasoning effort and enforce the exact model in repository contracts.
- Validate on GitHub Actions, merge the focused repair, and deploy through the
  repository Taskfile.
- Retry only the newest relevant failed Main-repair and verify that it advances
  beyond both the schema and model-selection failures.

## Constraints and exclusions

- Do not rearm obsolete historical incidents.
- Do not widen the one-time three-attempt recovery budget.
- Do not change agent credentials, isolation, or unrelated product behavior.

## Initial plan

1. Update the Hive model default, Kubernetes manifest, documentation, and
   contract assertions.
2. Format, publish a focused PR, and pass exact-head repository checks.
3. Merge and deploy the exact merge commit through the Taskfile.
4. Requeue the newest failed Main-repair and inspect durable progress.

## Completion evidence

- A merged green PR, healthy four-agent rollout, queue status showing the
  selected incident progressing without the prior schema/model errors, and
  linked Workbench completion records.

## Safety review

- This record contains no raw prompt, transcript, credentials, private data,
  raw logs, local paths, or unnecessary infrastructure details.
