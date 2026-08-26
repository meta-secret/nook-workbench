---
title: Enforce active 3,000-line semantic splitting
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T05:26:02Z
source_issues: []
related_prs: [https://github.com/meta-secret/nook/pull/1119]
depends_on: [issues/pr-delivery-efficiency/review-first-stabilization.md]
---

# Enforce active 3,000-line semantic splitting

## Context

The existing 5,000-line ceiling leaves too little review-fix headroom. Agents
must measure earlier and split by domain responsibility before a pull request
becomes difficult to review.

## Scope

- Make 3,000 authored changed lines the active pull-request limit.
- Treat a difference of roughly 10 to 15 lines as immaterial.
- Re-estimate continuously from the intended immediate base.
- Trigger semantic decomposition before crossing the limit.
- Inventory logical domain changes, interfaces, tests, migrations, and documentation.
- Create focused dependent layers with GitHub stacked pull requests.
- Keep independent layers directly based on current `main`.
- Preserve every moved behavior in a linked successor before reducing a predecessor.

## Acceptance criteria

- [ ] Planning and implementation gates use the 3,000-line active boundary.
- [ ] Agents receive a warning early enough to preserve review-fix headroom.
- [ ] Near-limit work invokes the semantic split procedure.
- [ ] Stack layers are independently reviewable and use immediate-base diffs.
- [ ] GitHub public-preview unavailability has a documented ordinary-branch fallback.
- [ ] Every layer retains exact-head review, validation, readiness, and squash merge.

## References

- [Feature](README.md)
- [Review stabilization](review-first-stabilization.md)
- [GitHub stacked pull requests](https://docs.github.com/en/pull-requests/reference/stacked-pull-requests)
