---
title: "Restore Main browser enrollment validation"
status: proposed
priority: p1
automation: manual
owner: unassigned
created_at: 2026-07-26T02:09:20Z
updated_at: 2026-07-26T02:09:20Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/776
depends_on: []
---

# Restore Main browser enrollment validation

## Context

Main run
[30181994815](https://github.com/meta-secret/nook/actions/runs/30181994815)
repeatedly failed browser enrollment validation after the Workbench migration.
The Workbench collector successfully recorded both attempts, so this is a
separate browser-product validation problem.

## Outcome

Main reliably establishes the expected paired vault state before browser 2FA
enrollment and extension scenarios, and all affected validation jobs pass.

## Scope

- Diagnose why enrollment scenarios observe an unconnected vault or miss the
  expected authenticator-save outcome.
- Restore UI-demo and extension e2e reliability without weakening assertions.
- Exclude Workbench collection and statistics publication, which are already
  verified on both Main attempts.

## Acceptance criteria

- [ ] The browser 2FA enrollment UI demo passes from a clean Main environment.
- [ ] Extension 2FA enrollment and dependent Pilot scenarios pass.
- [ ] Any changed domain behavior has focused Rust coverage; changed browser
  behavior has targeted web or extension coverage.
- [ ] A fresh Main run completes the affected validation jobs successfully.

## Progress

- 2026-07-26: Bounded attempt-2 rerun passed Web e2e and deployment but
  reproduced the UI-demo and extension failures.

## Findings and decisions

- Preserve the user-visible state assertions; do not solve this by removing or
  broadly increasing timeouts.
- The failure was first verified after PR 776, but causality is not yet
  established.

## References

- [Nook PR 776](https://github.com/meta-secret/nook/pull/776)
- [Main run 30181994815](https://github.com/meta-secret/nook/actions/runs/30181994815)
