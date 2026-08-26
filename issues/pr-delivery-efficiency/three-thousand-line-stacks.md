---
title: Enforce active 3,000-line semantic splitting
status: completed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T22:55:21Z
source_issues: []
related_prs: [https://github.com/meta-secret/nook/pull/1157]
depends_on: [issues/pr-delivery-efficiency/review-first-stabilization.md]
---

# Enforce active 3,000-line semantic splitting

## Outcome

Merged PR 1157 enforces a 3,000 authored changed-line budget with a 15-line hard
tolerance. Agents inventory logical domains at 2,700 lines, split before the
limit, compare each dependent slice against its immediate predecessor, and use
ordinary predecessor-based pull requests when GitHub stacked-PR UI support is
unavailable. Independent slices remain based on current `main`.

## Acceptance criteria

- [x] Planning and implementation gates use the 3,000-line active boundary.
- [x] Agents receive a warning early enough to preserve review-fix headroom.
- [x] Near-limit work invokes the semantic split procedure.
- [x] Stack layers are independently reviewable and use immediate-base diffs.
- [x] GitHub public-preview unavailability has a documented ordinary-branch fallback.
- [x] Every layer retains exact-head review, validation, readiness, and squash merge.

## Evidence

- PR 1157 merged as `df202c0f02f07a22177d6b66025840b711a85db2`.
- Superseded PR 1119 was closed after PR 1157 landed the policy directly on main.
