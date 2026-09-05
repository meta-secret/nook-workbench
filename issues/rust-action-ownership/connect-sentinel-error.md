---
title: Own Sentinel ceremony error classification
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-connect-error
created_at: 2026-09-05T23:39:48Z
updated_at: 2026-09-05T23:39:48Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/search-catalog-write-state.md
---

# Own Sentinel ceremony error classification

## Outcome

`NookError` owns the exact predicate that determines whether a failed connection requires the existing Sentinel opened-share ceremony.

## Scope

One Rust file with a ceiling of 100 authored additions. Move the predicate to the error owner, activate full-module ownership enforcement, annotate five framework test entrypoints, and add bounded predicate coverage.

## Acceptance criteria

- [ ] Only Encryption and Database errors with either exact marker require the ceremony.
- [ ] Matching stays case-sensitive; unrelated variants/messages remain false.
- [ ] Both callers prepare the existing ceremony session and return the original error unchanged.
- [ ] The module denies homeless functions with only exact framework-boundary expectations.
- [ ] Existing browser tests and focused classifier coverage pass.
- [ ] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

No typestate is introduced for a pure error observation. Existing string classification remains unchanged. No API, ABI, schema, crypto, authorization, logging, fallback, ceremony, or recovery behavior change.

## Progress

2026-09-05T23:39:48Z: Focused issue created from current-main inventory; implementation has not started.
