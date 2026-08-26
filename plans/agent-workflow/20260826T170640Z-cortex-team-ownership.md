---
title: Partition Cortex by team ownership
feature: agent-workflow
issue: none
started_at: 2026-08-26T17:06:40Z
agent: codex
---

# Partition Cortex by team ownership

## Interpreted request

Reorganize Cortex around three durable engineering ownership domains. Development core owns portable application and security logic. SRE owns CI/CD, clusters, deployments, and operational infrastructure. Web development owns browser applications, extension presentation, and frontend delivery. Common policy remains centralized only when no team exclusively owns it.

The root agent must classify every requested capability by team. It must assign each team-owned unit to a bounded team agent when delegation is available. Each team agent owns its complete scoped implementation and evidence while remaining outside other teams' code and lifecycle state.

## Requirements

- Add `dev-core`, `sre`, and `web-dev` Cortex roots with explicit responsibility and code boundaries.
- Relocate every team-owned architecture, design, product, workflow, reference, and dynamic skill to its responsible team.
- Split mixed authorities when their independent responsibilities belong to different teams.
- Keep generic cross-team policy in shared root families with one canonical owner.
- Add one complete knowledge graph per team.
- Reduce the root knowledge graph to common entry points and links to the three team graphs.
- Route human requests through one delivery owner that freezes cross-team contracts and work units.
- Require team agents to stay inside declared team code and Cortex scopes.
- Allow a team agent to report a dependency on another team without mutating that team's scope.
- Preserve team-agent ownership through implementation, tests, Cortex updates, review fixes, validation evidence, and handoff to the delivery owner.
- Preserve deterministic Loom topology, event evidence, immutable baselines, explicit joins, and delivery-owner control.
- Update all repository references and mechanical audits for the new paths.

## Constraints and exclusions

- This migration must preserve active product, security, architecture, and workflow meaning.
- The directory split does not transfer secret or cryptographic authority from Rust/WASM to web code.
- Team agents do not independently mutate shared Git, pull-request, Workbench, validation, readiness, or merge state.
- Markdown and prompts do not become workflow schedulers.
- Shared content is permitted only when its ownership is genuinely cross-team or repository-wide.
- No product behavior or production deployment change is part of this migration.
- Exact file placement will follow current source, task, CI, and package ownership evidence.

## Change budget and PR sequence

- Estimated authored changed lines: 4,500
- Owning modules, packages, or layers: Cortex governance, team knowledge graphs, executable skill mirrors, Loom Cortex audits, repository entry points, and documentation references
- Public or cross-module interfaces: team ownership registry, team-agent routing contract, four knowledge-graph entry points, and canonical Cortex paths
- Delivery shape: One PR
- Current PR estimated authored changed lines: 4,500
- Current PR slice and acceptance evidence: Complete team-owned Cortex migration; Acceptance evidence: full path inventory, no orphan documents, valid section maps and links, executable-skill mirror integrity, focused Loom contracts, pre-push hygiene, exact-head hosted checks, review resolution, and readiness
- PR slices and acceptance evidence:
Complete team-owned Cortex migration; Acceptance evidence: full path inventory, no orphan documents, valid section maps and links, executable-skill mirror integrity, focused Loom contracts, pre-push hygiene, exact-head hosted checks, review resolution, and readiness

## Initial plan

1. Freeze the current Main baseline and inventory every Cortex authority, skill mirror, repository reference, and code ownership seam.
2. Define the three team contracts plus the narrow criteria for shared knowledge.
3. Produce a complete migration map and identify mixed documents that require semantic splitting.
4. Move and split Cortex content while preserving active meaning and repairing relative links.
5. Add team-agent routing and cross-team dependency rules to the canonical delegation and development workflows.
6. Rebuild the three team knowledge graphs and the compact root graph.
7. Update executable skill mirrors, repository entry points, Loom audits, and tests that encode canonical paths.
8. Run host formatting, semantic diff review, focused Cortex validation, advisory review, exact-head hosted checks, feedback resolution, readiness, and squash merge.
9. Publish the linked Workbench worklog and agent statistics.

## Completion evidence

- Every tracked Cortex Markdown authority is reachable from exactly one team graph or the root common graph.
- Every team-owned document resides under its responsible team directory.
- Mixed authorities expose explicit team boundaries or are split into team-owned documents.
- Root navigation links to the three team graphs and shared repository-wide authorities only.
- Agent instructions enforce bounded team work, cross-team dependency reporting, and one delivery-owner join.
- All repository links, section anchors, skill mirrors, and Cortex audits pass on the exact pull-request head.
- The pull request is review-clean, ready, and squash-merged.

## Safety review

- This plan contains public repository architecture and workflow intent only.
- It contains no raw prompt, transcript, credentials, private data, raw logs, local paths, or unnecessary infrastructure details.
