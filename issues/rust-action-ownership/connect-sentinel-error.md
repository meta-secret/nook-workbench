---
title: Own Sentinel ceremony error classification
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-connect-error
created_at: 2026-09-05T23:39:48Z
updated_at: 2026-09-06T00:02:38Z
source_issues: []
related_prs:
  - 1416
depends_on:
  - issues/rust-action-ownership/search-catalog-write-state.md
---

# Own Sentinel ceremony error classification

## Outcome

`NookError` owns the exact predicate that determines whether a failed connection requires the existing Sentinel opened-share ceremony.

## Scope

One Rust file with a ceiling of 100 authored additions. Move the predicate to the error owner, activate full-module ownership enforcement, annotate five framework test entrypoints, and add bounded predicate coverage.

## Acceptance criteria

- [x] Only Encryption and Database errors with either exact marker require the ceremony.
- [x] Matching stays case-sensitive; unrelated variants/messages remain false.
- [x] Both callers prepare the existing ceremony session and return the original error unchanged.
- [x] The module denies homeless functions with only exact framework-boundary expectations.
- [x] Existing browser tests and focused classifier coverage pass.
- [x] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

No typestate is introduced for a pure error observation. Existing string classification remains unchanged. No API, ABI, schema, crypto, authorization, logging, fallback, ceremony, or recovery behavior change.

## Progress

PR #1416 merged as `0b0498b9fd1e0ccdc808d5c76807500695efc5b3` after exact-head remote Loom, hosted PR validation, source SECURITY, and readiness passed.
