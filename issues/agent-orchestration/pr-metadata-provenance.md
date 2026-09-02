---
title: Pull request metadata provenance
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: pr-metadata-provenance
created_at: 2026-09-02T17:31:56Z
updated_at: 2026-09-02T17:31:56Z
source_issues: []
related_prs: [1295]
depends_on: []
---

# Pull request metadata provenance

## Context

The [agent orchestration feature](README.md) needs one durable contract for truthful PR identity and public lifecycle provenance. PR #1295 revealed that the trusted automated publisher also needs to produce the same metadata.

## Outcome

Interactive and trusted automated PR delivery publishes capability-oriented metadata, exact public Workbench authority, and safe task provenance before readiness.

## Scope

- Standardize the canonical Gizmo PR metadata and provenance contract.
- Keep the efficient-delivery card as integration guidance rather than duplicate authority.
- Make the trusted Agent implement publisher fail closed without a focused issue, immutable plan, safe title, and canonical Gizmo ID.
- Exclude transcript publication, private prompt disclosure, and cross-task execution authority.

## Acceptance criteria

- [ ] Cortex policy requires one focused issue and exact immutable plan before PR publication and readiness.
- [ ] The trusted publisher emits capability identity, safe task provenance, exact issue and plan URLs, and canonical Gizmo ID for both dispatch modes.
- [ ] Focused Cortex, Workbench preflight, repository policy, exact-head validation, and readiness checks pass.
- [ ] PR #1295 is squash-merged and its Workbench worklog and statistics are published.

## Progress

- 2026-09-02T17:31:56Z: PR #1295 review identified three P1 contract gaps and expanded the bounded implementation to include its trusted publisher.

## Findings and decisions

- The focused issue is mandatory lifecycle authority rather than optional metadata.
- The PR workflow is the single canonical metadata authority.
- Manual trusted dispatch establishes a public run-owned focused issue without publishing the private prompt.

## References

- [Nook PR #1295](https://github.com/meta-secret/nook/pull/1295)
- [Original immutable plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/agent-orchestration/20260902T091433Z-pr-metadata-provenance.md)
