---
title: Retain reusable BuildKit layers
status: in_progress
priority: p2
automation: manual
owner: codex
gizmo_id: buildkit-cache-retention
created_at: 2026-09-08T03:35:48Z
updated_at: 2026-09-08T03:35:48Z
source_issues: []
related_prs: []
depends_on: []
---

# Retain reusable BuildKit layers

## Context

Persistent builders can repeatedly download large registry layers when per-run security policy snapshots consume the local cache budget. This belongs to the [isolated agent platform](README.md).

## Outcome

Preserve reusable build layers while executing dependency security checks freshly for each invocation.

## Scope

- Bound transient policy data without changing cache trust or validation requirements.
- Exclude network transport changes and a new cache architecture.

## Acceptance criteria

- [ ] Fresh dependency checks remain enforced on every policy invocation.
- [ ] Transient policy downloads do not accumulate in persistent result snapshots.
- [ ] Focused contracts and applicable hosted validation pass.
- [ ] The reviewed change is merged and completion evidence is published.

## Progress

- 2026-09-08: Read-only investigation identified substantial per-run snapshot growth competing with reusable layers under the configured cache budget.

## Findings and decisions

- Keep the existing cache ceiling initially; eliminate avoidable runtime snapshot growth before consuming additional shared-node storage.

## References

- [BuildKit manifest](https://github.com/meta-secret/nook/blob/main/infra/k0s/manifests/arc/buildkit.yaml)
