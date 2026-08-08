---
title: Loom strict YAML tool protocol
feature: agent-workflow
issue: issues/unplanned/README.md
started_at: 2026-08-08T00:42:00Z
agent: cursor
---

# Task plan

## Interpreted request

Refactor Loom to a single entrypoint `loom <request.yaml>` with tool name
inside a strict typed YAML envelope. YAML in and YAML out. Serde-like field
errors. Update Task targets and make .cortex Loom docs rigid tool contracts.

## Requirements

- One CLI form: loom request.yaml (or help)
- Request envelope: name + arguments
- Protocol tools: tools-list, tools-call
- Strict typed decode/encode; deny unknown fields
- YAML stdout success and error reports
- Rigid cortex docs with example request YAML
- Keep existing tool handlers (pre-push, cortex-audit, skill-scaffold, agent-stats, pr-land)

## Out of scope

- Long-lived MCP stdio server
- JSON-RPC framing
